# Technical Architecture

## Status

The existing framework and package setup are the baseline. This specification preserves that setup; it does not authorize implementation or dependency changes.

## Current baseline

From `package.json`:

- Next.js `16.4.3`
- React `19.3.0`
- React DOM `19.3.0`
- TypeScript `^5`
- Tailwind CSS `^4`
- ESLint `^9`
- `eslint-config-next` `16.4.3`
- `@tailwindcss/turbopack` `^4`

Existing configuration in `next.config.ts` includes cache components, partial prefetching, and the Tailwind Turbopack loader. It must be preserved unless a later reviewed decision changes it.

## Application architecture

- Use the Next.js App Router.
- Prefer server-rendered pages and components.
- Add client components only for interaction that cannot be server-rendered.
- Keep content data separate from presentation components.
- Use strict TypeScript and explicit domain types.
- Prefer static generation for known project and experience content.
- Keep route-specific metadata close to route ownership while sharing common metadata helpers where useful.

## Content architecture

Use typed records for projects, case studies, experiences, links, media, and verification state. The rendering layer must handle optional fields without inventing fallback claims.

Only records explicitly marked approved for publication may be rendered, linked, indexed, or included in generated metadata. Draft and unverified records must remain non-public.

The initial implementation should not require:

- Database
- CMS
- Authentication
- API server
- Contact form backend
- Runtime AI service

## Suggested boundaries

- `app/`: routes, layouts, metadata, and page composition.
- `components/`: reusable presentation and interaction components.
- `content/` or equivalent: typed portfolio data and editorial content.
- `lib/`: small shared utilities such as metadata, URL, or validation helpers.
- `public/`: verified static media and icons.

Exact folder names remain an implementation-plan decision.

## Rendering and performance

- Render portfolio content on the server by default.
- Optimize images using the framework image pipeline where appropriate.
- Avoid client-side data fetching for static portfolio content.
- Avoid large animation or UI libraries unless a measured requirement justifies them.
- Preserve cache and prefetch behavior unless testing identifies a problem.
- Set explicit image dimensions or aspect ratios to reduce layout shift.

Performance budgets must be finalized before feature implementation. The quality specification should define measurement tools and thresholds.

## SEO and metadata

- Define site-wide title, description, canonical URL, social metadata, and favicon behavior.
- Add route-specific metadata for project case studies.
- Generate sitemap and robots behavior for the final public routes.
- Add structured data only when its values are factual and maintained.
- Do not expose unverified project claims in metadata.

Canonical URLs, sitemap, robots, and social preview URLs depend on the final production origin. They must not be finalized or validated against a guessed domain. Preview deployments must not become canonical or unintentionally indexable.

## Security

- Treat all external URLs and content as untrusted input to the rendering model.
- Do not place secrets in source, public assets, or content records.
- Keep external links intentional and safe.
- The first release has no analytics, tracking cookies, contact form, submission backend, or unnecessary third-party embeds.
- Any future third-party service requires an explicit review of privacy, security, performance, accessibility, data collection, and failure behavior before adoption.
- Review security headers and deployment defaults before release.
- Avoid adding services that create unnecessary data collection or attack surface.

## Testing and verification

At minimum, implementation work must include:

- Type checking.
- ESLint.
- Production build.
- Route/link verification.
- Accessibility checks.
- Responsive manual or automated checks.
- Metadata and sitemap checks.
- Content verification against the editorial source.

Exact test tooling is an open decision.

## Acceptance criteria

- No dependency or configuration change is made without a reviewed decision.
- Adding a project record does not require changing reusable project-card or archive components.
- Static pages do not require a runtime backend or database.
- Client components are limited to documented interactive behavior.
- Production build and type checking pass before release.
- Starter branding, default assets, and placeholder metadata are removed or replaced before release.

## Open questions

- Final folder and module boundaries.
- Static generation strategy under the current Next.js 16 configuration.
- Performance thresholds and measurement tooling.
- Accessibility and browser test tooling.
- Whether structured data should include `Person`, `Project`, or other schema types.
- Final image, font, and icon strategy.
- Final production origin for canonical and social metadata.
