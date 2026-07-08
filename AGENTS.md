# AGENT.md

Este archivo define las directrices, el contexto técnico y las normas de estilo para el desarrollo de este proyecto. La IA debe adherirse a estas especificaciones al generar código, realizar refactorizaciones o proponer soluciones.

## Stack Tecnológico y Preferencias

- **Framework Base:** Astro (priorizar arquitectura de islas).
- **Estilos:** Tailwind CSS. Regla: Siempre utiliza utilidades de Tailwind en lugar de CSS personalizado. Referencia: https://tailwindcss.com/docs
- **Lenguajes:** TypeScript (priorizar sobre JavaScript puro), JavaScript.
- **Interactividad:**
  - Web Components (nativos, sin dependencias externas pesadas).
  - HTMX (para interacciones dinámicas de servidor-cliente con mínima carga JS).
- **Runtime:** Node.js.

## Normas de Desarrollo

1. **Estilos:** Todo componente debe ser estilizado mediante las clases de utilidad de Tailwind CSS.
2. **Web Components:** Deben ser autocontenidos. Si se requiere interactividad compleja, evaluar si es mejor un Web Component o una petición HTMX.
3. **Astro:** Mantener la estructura de componentes de Astro limpia. Usar .astro para el layout y la estructura, y Web Components para la lógica encapsulada. Referencia: https://astro.build
4. **TypeScript:** Implementar tipado estricto en todos los archivos .ts o bloques de script en componentes Astro.
5. **Entorno:**
   - Shell: Fish.
   - OS: Linux (CachyOS).
   - Los comandos proporcionados deben ser compatibles con Fish.
6. **Optimización:** Priorizar la carga mínima de JavaScript. HTMX es la primera opción para mutaciones de DOM basadas en servidor.

## Instrucciones para el Agente

- **Respuestas:** Sé conciso y directo.
- **Fuentes:** Siempre que menciones documentación técnica, proporciona el enlace oficial del fabricante.
- **Código:** Entrega el código listo para implementación. Cuando se trate de hojas de estilo, prioriza siempre el uso de clases de Tailwind.
- **Contexto:** Recuerda siempre que el entorno de desarrollo es Linux (CachyOS) y la shell es Fish.
