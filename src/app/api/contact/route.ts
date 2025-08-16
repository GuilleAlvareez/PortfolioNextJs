import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Configurar SendGrid con la API key desde variables de entorno
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// Endpoint para manejar el envío de emails del formulario de contacto
export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validación de campos requeridos
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Configuración del mensaje de email con formato optimizado
    const msg = {
      to: 'guillealvarezmoreno2@gmail.com', // Email de destino (verificado en SendGrid)
      from: 'guillealvarezmoreno2@gmail.com', // Email remitente (debe estar verificado en SendGrid)
      replyTo: email, // Email del visitante para respuestas directas
      subject: `${subject}`,
      text: `
        Has recibido un nuevo mensaje desde el formulario de contacto de tu portfolio.
        
        Nombre: ${name}
        Email (para responder): ${email}
        Asunto: ${subject}
        
        Mensaje:
        ${message}
      `,
      html: `
        <h3>Nuevo mensaje de contacto de tu portfolio</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email (para responder):</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Enviar email a través de SendGrid
    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error: any) { // Tipar el error para acceder a sus propiedades
    console.error('Error enviando email:', JSON.stringify(error, null, 2));

    // Loguear detalles adicionales de la respuesta de SendGrid para debugging
    if (error.response) {
      console.error('Cuerpo de la respuesta de SendGrid:', error.response.body);
    }

    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}