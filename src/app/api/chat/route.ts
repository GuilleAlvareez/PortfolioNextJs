import { NextRequest, NextResponse } from 'next/server';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface OpenRouterResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    // Verificar que tenemos la API key
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      console.error('OPENROUTER_API_KEY no está configurada');
      return NextResponse.json(
        { error: 'Configuración del servidor incompleta' },
        { status: 500 }
      );
    }

    // Preparar el mensaje del sistema
    const systemMessage: ChatMessage = {
      role: 'system',
      content: `Eres un asistente virtual amigable y profesional en el portfolio de Guillermo Álvarez Moreno, un desarrollador Fullstack con base en Sevilla, España. 

      Tu objetivo es responder preguntas sobre Guillermo, sus habilidades, proyectos y experiencia de manera concisa y servicial.

      Información sobre Guillermo:
      - Desarrollador Fullstack especializado en React, Next.js e Inteligencia Artificial
      - Ubicado en Sevilla, España
      - Trabaja en SURLABS
      - Habilidades principales: React, Next.js, JavaScript, TypeScript, Node.js, IA
      - Tiene experiencia en desarrollo web moderno y tecnologías emergentes
      - Portfolio: https://guillermoalvarezdev.com
      - LinkedIn: https://www.linkedin.com/in/guillermo-%C3%A1lvarez-moreno-15904030a/
      - GitHub: https://github.com/GuilleAlvareez

      Sé amigable, profesional y proporciona información útil sobre Guillermo y sus capacidades como desarrollador. Si no tienes información sobre algo específico, indícalo honestamente.`
    };

    // Construir el payload para OpenRouter
    const payload = {
      model: 'mistralai/mistral-7b-instruct:free', // Modelo gratuito para empezar
      messages: [systemMessage, ...messages],
      max_tokens: 500,
      temperature: 0.7,
      stream: true
    };

    // Llamada a OpenRouter con streaming
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://guillermoalvarezdev.com',
        'X-Title': 'Portfolio Guillermo Álvarez'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error de OpenRouter:', response.status, errorText);
      return NextResponse.json(
        { error: 'Error al procesar la solicitud' },
        { status: response.status }
      );
    }

    // Configurar streaming response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        if (!reader) {
          controller.error('No se pudo leer la respuesta');
          return;
        }

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = new TextDecoder().decode(value);
            const lines = chunk.split('\n');

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = line.slice(6);
                if (data === '[DONE]') {
                  controller.close();
                  return;
                }

                try {
                  const parsed = JSON.parse(data);
                  const content = parsed.choices?.[0]?.delta?.content;
                  if (content) {
                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
                  }
                } catch (e) {
                  // Ignorar líneas malformadas
                }
              }
            }
          }
        } catch (error) {
          controller.error(error);
        } finally {
          reader.releaseLock();
        }
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error('Error en la ruta de chat:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
