# Tecnobyte - Desarrollo Web de Alto Rendimiento

> Promovido por [DonDominio](https://www.dondominio.com)

Somos **Tecnobyte**, una empresa experta en las últimas tecnologías del desarrollo web moderno. Creamos sitios web rápidos, seguros y optimizados utilizando las mejores herramientas del mercado.

## Nuestros Servicios

- **Desarrollo Web** — Páginas web a medida con las últimas tecnologías.
- **Hosting en Cloudflare** — Despliegue global con CDN, protegido y de alta disponibilidad.
- **Dominios** — Registro y gestión de nombres de dominio para tu proyecto.

## Stack Tecnológico

| Tecnología | Descripción |
|:-----------|:------------|
| [Astro](https://astro.build) | Framework de sitios web de alto rendimiento con arquitectura de islas |
| [Tailwind CSS](https://tailwindcss.com) | Framework de utilidades CSS para estilos atomizados |
| [Cloudflare](https://www.cloudflare.com) | CDN, protección DDoS, DNS y despliegue edge |
| [TypeScript](https://www.typescriptlang.org) | JavaScript con tipado estático para código robusto |
| [HTMX](https://htmx.org) | Extensiones HTML para interacciones dinámicas sin JavaScript pesado |

## Estructura del Proyecto

```text
tecnobyte/
├── .github/workflows/   # CI/CD para Cloudflare
├── public/              # Assets estáticos (favicon, imágenes)
├── src/
│   ├── components/      # Componentes Astro
│   ├── pages/           # Páginas y rutas del sitio
│   └── styles/          # Estilos globales
├── astro.config.mjs     # Configuración de Astro
├── wrangler.jsonc       # Configuración de Cloudflare Workers
├── package.json
└── tsconfig.json
```

## Comandos Disponibles

| Comando | Descripción |
|:--------|:------------|
| `pnpm install` | Instala las dependencias del proyecto |
| `pnpm dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Genera el sitio de producción en `./dist/` |
| `pnpm preview` | Previsualiza el sitio construido localmente |
| `pnpm preview:wrangler` | Previsualiza con Wrangler (simula Cloudflare) |
| `pnpm deploy` | Despliega directamente a Cloudflare Pages |
| `pnpm astro ...` | Ejecuta comandos CLI de Astro |

## Desarrollo

### Requisitos Previos

- Node.js >= 22.12.0
- [pnpm](https://pnpm.io) como gestor de paquetes

### Inicio Rápido

```sh
pnpm install
pnpm dev
```

### Convenciones

- **Estilos:** Utilizar siempre clases de Tailwind CSS, evitar CSS personalizado.
- **Interactividad:** Preferir Web Components nativos o HTMX para interacciones con el servidor.
- **TypeScript:** Tipado estricto en todos los archivos `.ts` y bloques `<script>` de componentes Astro.

## CI/CD con Cloudflare

El proyecto incluye pipelines de GitHub Actions para despliegue automático:

- **`main` push** → Build + Deploy a producción en Cloudflare Pages
- **Pull Request** → Build + Deploy de preview + comentario automático en el PR

### Configuración Requerida

Añade estos secrets en tu repositorio de GitHub (`Settings > Secrets`):

| Secret | Descripción |
|:-------|:------------|
| `CLOUDFLARE_API_TOKEN` | Token de API de Cloudflare ([Crear token](https://dash.cloudflare.com/profile/api-tokens)) |
| `CLOUDFLARE_ACCOUNT_ID` | ID de tu cuenta de Cloudflare ([Dashboard](https://dash.cloudflare.com)) |

Permisos necesarios para el token: `Cloudflare Pages: Edit`.

## Licencia

Propietario - Tecnobyte

Promovido por [DonDominio](https://www.dondominio.com) — Tu proveedor de dominios y hosting de confianza.
