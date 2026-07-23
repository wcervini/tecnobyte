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
        formWithError('Completa todos los campos obligatorios.'),
        { status: 400, headers: { 'Content-Type': 'text/html' } }
      );
    }

    if (env.SEND_EMAIL) {
      await env.SEND_EMAIL.send({
        from: { name: 'Contacto Tecnobyte', email: FROM_EMAIL },
        to: [{ email: TO_EMAIL }],
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
        headers: { 'Reply-To': email },
      });
    }

    return new Response(formSuccess(), {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    });

  } catch (error) {
    console.error('Worker error:', error);
    return new Response(
      formWithError('Error al enviar el mensaje. Intenta de nuevo más tarde.'),
      { status: 500, headers: { 'Content-Type': 'text/html' } }
    );
  }
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function formSuccess() {
  return `<div class="text-center py-12 animate-fade-up opacity-0" style="animation-fill-mode:forwards">
    <div class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-lime-400/10 mb-6">
      <svg class="h-8 w-8 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
    </div>
    <h3 class="font-display text-2xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
    <p class="text-gray-400 mb-8">Gracias por contactarnos. Te responderemos a la brevedad.</p>
    <button onclick="this.closest('#contact-form-wrapper').innerHTML = document.getElementById('contact-form-skeleton').innerHTML"
      class="px-6 py-3 rounded-full bg-white/5 text-gray-300 text-sm font-semibold border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300 cursor-pointer">
      Enviar otro mensaje
    </button>
  </div>`;
}

function formWithError(msg) {
  return `<div class="mb-6 rounded-xl border border-red-400/30 bg-red-400/10 px-5 py-4 text-sm text-red-400 text-center">
    ${escapeHtml(msg)}
  </div>
  <form class="space-y-6" hx-post="/api/contact" hx-target="#contact-form-wrapper" hx-swap="innerHTML" hx-indicator="#submit-btn">
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-300 mb-2 text-left">Nombre</label>
        <input type="text" id="name" name="name" required class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-400 focus:ring-1 focus:ring-accent-400 outline-none transition-all duration-300" placeholder="Tu nombre" />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-300 mb-2 text-left">Email</label>
        <input type="email" id="email" name="email" required class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-400 focus:ring-1 focus:ring-accent-400 outline-none transition-all duration-300" placeholder="tu@email.com" />
      </div>
    </div>

    <div>
      <label for="service" class="block text-sm font-medium text-gray-300 mb-2 text-left">Servicio</label>
      <select id="service" name="service" class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-accent-400 focus:ring-1 focus:ring-accent-400 outline-none transition-all duration-300 appearance-none">
        <option value="" class="bg-dark-900">Selecciona un servicio</option>
        <option value="web" class="bg-dark-900">Desarrollo Web</option>
        <option value="hosting" class="bg-dark-900">Hosting en Cloudflare</option>
        <option value="domain" class="bg-dark-900">Dominios</option>
        <option value="other" class="bg-dark-900">Otro</option>
      </select>
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-gray-300 mb-2 text-left">Mensaje</label>
      <textarea id="message" name="message" rows="4" required class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-400 focus:ring-1 focus:ring-accent-400 outline-none transition-all duration-300 resize-none" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
    </div>

    <button id="submit-btn" type="submit" class="w-full px-8 py-4 rounded-xl bg-accent-400 text-dark-950 font-semibold text-lg hover:bg-accent-400/90 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed">
      <span class="htmx-request-hidden">Enviar mensaje</span>
      <span class="htmx-request-show hidden items-center gap-2">
        <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" /><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
        Enviando...
      </span>
      <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform htmx-request-hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
    </button>
  </form>`;
}
