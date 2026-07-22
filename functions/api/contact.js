const FROM_EMAIL = 'contacto@tecnobyte.es';
const TO_EMAIL = 'contacto@tecnobyte.es';

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const formData = await request.formData();
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const service = formData.get('service') || 'No especificado';
    const message = formData.get('message')?.trim();

    if (!name || !email || !message) {
      return new Response(
        formError('Completa todos los campos obligatorios.'),
        { status: 400, headers: { 'Content-Type': 'text/html' } }
      );
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        replyTo: email,
        subject: `Nuevo contacto de ${name}`,
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px">
            <tr><td style="padding:8px;font-weight:bold;color:#374151">Nombre</td><td style="padding:8px;color:#111827">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#374151">Email</td><td style="padding:8px;color:#111827">${escapeHtml(email)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#374151">Servicio</td><td style="padding:8px;color:#111827">${escapeHtml(service)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#374151;vertical-align:top">Mensaje</td><td style="padding:8px;color:#111827">${escapeHtml(message)}</td></tr>
          </table>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error('Resend error:', error);
      return new Response(
        formError('Error al enviar el mensaje. Intenta de nuevo más tarde.'),
        { status: 500, headers: { 'Content-Type': 'text/html' } }
      );
    }

    return new Response(formSuccess(), {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    });

  } catch (error) {
    console.error('Worker error:', error);
    return new Response(
      formError('Error del servidor. Intenta de nuevo.'),
      { status: 500, headers: { 'Content-Type': 'text/html' } }
    );
  }
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function formSuccess() {
  return `<div id="contact-form" class="space-y-6 text-center py-12">
    <div class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent-400/10 mb-6">
      <svg class="h-8 w-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
    </div>
    <h3 class="font-display text-2xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
    <p class="text-gray-400">Gracias por contactarnos. Te responderemos a la brevedad.</p>
  </div>`;
}

function formError(msg) {
  return `<p class="text-red-400 text-sm text-center">${escapeHtml(msg)}</p>`;
}
