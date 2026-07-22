# Changelog

## [1.1.0](https://github.com/wcervini/tecnobyte/releases/tag/v1.1.0) - 2026-07-22

### :sparkles: Features

- **ui:** create links directory page with reusable LinkCard component
- **ui:** add contact form with HTMX async submission and inline feedback
- **ui:** add Google Analytics GA4 tracking (G-B0918K7C3W)
- **ui:** add social links (YouTube, LinkedIn, X) in footer
- **seo:** add comprehensive JSON-LD structured data (Organization, WebSite, ProfessionalService)
- **seo:** add streetAddress, postalCode, telephone to structured data
- **ui:** add llms.txt for LLM-friendly content discovery

### :bug: Bug Fixes

- **contact:** show confirmation message and smooth scroll on form submit
- **contact:** fix Cloudflare email binding for local dev
- **contact:** replace Resend API with Cloudflare email binding

### :zap: Performance

- **perf:** inline CSS to eliminate render-blocking external request
- **perf:** implement non-blocking Google Fonts loading (media="print" onload)
- **perf:** defer HTMX script loading
- **perf:** move gtag to end of body
- **perf:** add fetchpriority="high" and remove lazy from LCP logo

### :lock: Security

- **deps:** upgrade Astro 7.0.6 → 7.1.3 (fixes XSS vulnerability)
- **deps:** upgrade fast-uri to 3.1.4 (fixes host confusion vulnerability)

### :robot: SEO

- **seo:** fix duplicate meta tags (title, charset, viewport, OG)
- **seo:** add robots.txt Host directive and Disallow /api/
- **seo:** add canonical URLs to links page
- **seo:** fix HTMX integrity hash for Rich Results validation
- **seo:** fix llms.txt format to follow llmstxt.org spec

---

## [1.0.0](https://github.com/wcervini/tecnobyte/releases/tag/v1.0.0) - 2025-07-08

### :sparkles: Features

- **ui:** add complete landing page with Header, Hero, Services, TechStack, About, Contact and Footer components
- **ui:** implement dark theme with cyan/violet gradient accents and glassmorphism effects
- **ui:** add responsive mobile menu and smooth scroll navigation
- **ui:** add CSS animations (fade-up, float, pulse-glow, slide-in)
- **config:** add Cloudflare Workers deployment configuration (wrangler.jsonc)
- **ci:** add GitHub Actions workflows for production deploy and PR previews
- **docs:** add README with project documentation and CI/CD setup guide

### :wrench: Configuration

- **build:** configure Astro for static output with Tailwind CSS v4
- **build:** add deploy and preview:wrangler scripts to package.json

### :memo: Documentation

- **docs:** add project README with services, tech stack and setup instructions
- **docs:** add CI/CD documentation with Cloudflare secrets configuration
- **docs:** add DonDominio as project promoter

---

*Promovido por [DonDominio](https://www.dondominio.com)*
