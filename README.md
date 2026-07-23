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
| [Cloudflare](https://www.cloudflare.com) | CDN, protección DDoS y DNS |
| [TypeScript](https://www.typescriptlang.org) | JavaScript con tipado estático para código robusto |
| [HTMX](https://htmx.org) | Extensiones HTML para interacciones dinámicas sin JavaScript pesado |

## Estructura del Proyecto

```text
tecnobyte/
├── public/              # Assets estáticos (favicon, imágenes)
├── src/
│   ├── components/      # Componentes Astro
│   ├── pages/           # Páginas y rutas del sitio
│   └── styles/          # Estilos globales
├── astro.config.mjs     # Configuración de Astro
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
| `pnpm deploy` | Genera el build de producción en `./dist/` |
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

## CI/CD

El proyecto incluye un pipeline de GitHub Actions para build automático en cada push.

## Licencia

Propietario - Tecnobyte

Promovido por [DonDominio](https://www.dondominio.com) — Tu proveedor de dominios y hosting de confianza.
