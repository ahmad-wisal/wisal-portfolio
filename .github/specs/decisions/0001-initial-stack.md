# Decision 0001: Initial Application Stack

## Status

Recorded repository facts and an agreed starting direction, pending future architecture review. This record does not make an unchangeable architecture decision or select a hosting platform.

## Context

The portfolio needs a maintainable, performant, server-rendered web application with data-driven content, reusable components, accessible interactions, and minimal infrastructure.

The repository is already a Next.js starter. Current versions inspected before specification drafting:

- Next.js `16.4.3`
- React `19.3.0`
- React DOM `19.3.0`
- TypeScript `^5`
- Tailwind CSS `^4`
- ESLint `^9`
- `eslint-config-next` `16.4.3`
- `@tailwindcss/turbopack` `^4`

## Recorded constraints and agreed starting direction

Retain the existing:

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Git and GitHub
- GitHub Copilot as the AI-assisted development tool
- A compatible production hosting platform, to be selected separately

Use server-rendered content by default and client-side interactivity only when required.

This starting direction may be revisited through a reviewed decision if implementation evidence or requirements change.

Student Developer Pack constraint:

- Before recommending a paid hosting, domain, CI/CD, monitoring, or developer tool, check the current Pack offer and a suitable free tier.
- Do not assume Pack eligibility, redemption, renewal, or account availability.
- Prefer zero-cost options for the initial portfolio when they meet compatibility, reliability, performance, security, and portability requirements.
- Keep the application portable and avoid provider-specific dependencies unless a confirmed requirement justifies them.

## Rationale

- The existing repository already provides the Next.js, React, TypeScript, and Tailwind foundation.
- App Router supports route-based composition, metadata, and server-first rendering.
- TypeScript supports explicit content models and safer reusable components.
- Tailwind supports a maintainable token-driven visual system without adding a separate styling runtime.
- GitHub provides source control and collaboration.
- GitHub Copilot is the specified AI-assisted development tool.
- Avoiding backend services keeps a mostly static portfolio simpler, faster, and lower risk.

## Constraints

- Preserve the existing repository and dependencies; do not change dependencies or configuration merely to begin implementation.
- Do not add a CMS, database, authentication, or contact backend without a separate decision.
- Do not treat the hosting platform as selected by this record.
- Verify Next.js 16-specific behavior against the repository's installed documentation before writing application code.
- Preserve the current `next.config.ts` behavior unless a later decision documents a necessary change.

## Alternatives not selected by this record

- A custom backend or database for portfolio content.
- A CMS for the first release.
- A client-rendered single-page application.
- A contact-form service for the first release.
- A hosting platform selected solely because it appears in the starter README.
- Analytics, tracking cookies, and unnecessary third-party embeds for the first release.
- A paid cloud or developer service without a confirmed requirement and a documented free/Student Pack comparison.

These are not permanently prohibited; adopting one requires evidence and a separate reviewed decision.

## Consequences

- Portfolio content should be stored in typed repository data.
- Content updates require a normal code review and deployment.
- The first release has no server-side contact submission.
- Interactive features must justify client-side JavaScript.
- Deployment compatibility must be verified once a hosting platform is selected.

## Open follow-ups

- Select and document the production hosting platform.
- Define final module/folder boundaries.
- Define performance, browser, accessibility, and test tooling standards.
- Verify whether any future feature justifies a new dependency or runtime service.
- Compare and select hosting and domain options using the Student Developer Pack constraint.
- Record CI/CD, monitoring, and developer-tool cost/offer checks before adopting paid services.
