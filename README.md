# Code Cortex Portfolio

Static portfolio of Code Cortex products, using the same design as https://www.codecortexdigital.com. Main-site pages (Home, Solutions, Platform, About, Insights, Contact) link back to the main website.

## Deployment notes
- `frontend/` is the React (Vite) portfolio that the Vercel project `codecortex-portfolio` builds (Vercel Root Directory = `frontend`). It needs the environment variable `VITE_API_BASE_URL` (URL of the portfolio API) in the Vercel project settings.
- The static pages at the repository root (`index.html`, `projects/`, `css/`, `js/`, `assets/`) are a separate static copy of the Code Cortex website design. Vercel ignores them while the Root Directory is `frontend`; to deploy them instead, clear the Root Directory setting.
