import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Configurar SendGrid con tu API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // --- CAMBIOS CLAVE AQUÍ ---
    const msg = {
      to: 'guillealvarezmoreno2@gmail.com', // Tu email de destino
      from: 'guillealvarezmoreno2@gmail.com', // <-- USA TU EMAIL VERIFICADO EN SENDGRID
      replyTo: email, // <-- EL EMAIL DEL VISITANTE VA AQUÍ
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
    // --- FIN DE LOS CAMBIOS ---

    // Enviar email
    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error: any) { // Tipar el error para acceder a sus propiedades
    console.error('Error enviando email:', JSON.stringify(error, null, 2));

    // Opcional: Loguear más detalles si están disponibles en la respuesta de SendGrid
    if (error.response) {
      console.error('Cuerpo de la respuesta de SendGrid:', error.response.body);
    }

    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}