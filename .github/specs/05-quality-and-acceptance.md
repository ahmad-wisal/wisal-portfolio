# Quality and Acceptance Standards

## Status

These are approved policy corrections and proposed release standards for review. Thresholds marked as open have an owner and resolution stage and must be finalized before implementation of the affected feature.

## Functional acceptance

- Required routes exist and resolve without 404s.
- Primary navigation and footer links work with mouse, touch, and keyboard.
- Every visible button and link has a meaningful outcome.
- TaskConnect is featured and links to its case study.
- The case study distinguishes individual contribution from team contribution.
- Optional content is omitted cleanly when its data is absent.
- Contact provides GitHub and LinkedIn and does not render an email/CV link before values are confirmed.
- Invalid project slugs produce the defined not-found experience.
- General application errors do not expose stack traces or implementation details.

## Content acceptance

- Every published factual claim has a confirmed source.
- Unverified content is omitted or explicitly tracked as a verification task.
- No invented metrics, achievements, testimonials, clients, features, deployment claims, or ownership claims appear.
- Confidential internship material is excluded.
- Academic, internship, and personal/course-related statuses are labeled honestly.

## Accessibility acceptance

- Semantic landmarks and one logical main heading are present per page.
- Heading levels form a logical hierarchy.
- All interactive controls are keyboard reachable and have visible focus.
- Keyboard users can reach and operate navigation and any interactive component without a pointer.
- Text and controls meet WCAG 2.2 AA contrast targets.
- Images have appropriate alternative text or are explicitly decorative.
- Reduced-motion preferences are respected.
- No essential meaning depends on color, hover, motion, or pointer-only interaction.
- A skip-to-content link is keyboard reachable and moves focus to the main content.
- Mobile navigation exposes its state, supports keyboard operation, closes with Escape when open, and restores focus to its trigger.
- Pages remain usable at 200% zoom and during responsive reflow.

## Responsive acceptance

- Test the agreed mobile, tablet, and desktop viewport matrix.
- No horizontal scrolling is introduced at supported widths.
- Content order remains understandable when columns collapse.
- Images, diagrams, and code excerpts remain readable or have equivalent text.

Exact viewport sizes and browser matrix are open decisions with an owner and resolution stage below.

## Performance acceptance

- Production builds complete successfully.
- Images are optimized and do not cause avoidable layout shift.
- Static portfolio content does not perform unnecessary client-side data fetching.
- Client JavaScript is limited to justified interactions.
- Core Web Vitals targets must be agreed before release and measured in a production-like deployment.

Exact budgets for JavaScript, images, LCP, INP, CLS, and third-party resources are open decisions with an owner and resolution stage below.

## SEO acceptance

- Each indexable route has a unique, accurate title and description.
- Canonical URLs are correct.
- Social preview metadata is present where applicable.
- Sitemap and robots behavior match the intended public routes.
- Structured data contains only verified information.
- No incomplete or intentionally private content is accidentally indexed.

## Security acceptance

- No secrets or confidential content are committed.
- External links and media sources are reviewed.
- Dependencies have no accepted high-severity release-blocking vulnerabilities, subject to a documented review.
- Security headers and hosting defaults are verified.
- No unnecessary data collection or backend endpoint is introduced.

## Engineering checks

- TypeScript check passes.
- ESLint passes with no new warnings treated as acceptable without review.
- Production build passes.
- Automated tests cover reusable data/rendering behavior where practical.
- Manual review covers keyboard, reduced motion, responsive layout, link outcomes, and content accuracy.
- The current repository validation commands pass: `npm run lint`, `npm run build`, and `npx tsc --noEmit`.
- Starter branding, default assets, and placeholder metadata are absent from the release.
- CI/CD uses a documented zero-cost or Student Pack-supported path unless a paid service has an approved requirement and comparison.

## Release gate

Release requires:

1. Product and content review.
2. Design review.
3. Type, lint, and build checks.
4. Accessibility and responsive review.
5. SEO and link verification.
6. Security and deployment review.
7. A final check that open content questions are either resolved or intentionally omitted.
8. Only explicitly approved content is present in public rendering, navigation, metadata, sitemap, and structured data.

## Validation command baseline

The current repository provides `npm run lint` and `npm run build`. TypeScript validation must use `npx tsc --noEmit`; no `typecheck` script is assumed to exist. Adding a script is unnecessary unless a later approved decision requires it.

## Explicit quality decisions

| Decision | Owner | Resolution stage | Current status |
|---|---|---|---|
| Numeric performance budgets for LCP, INP, CLS, JavaScript, images, and third-party resources | Project owner and implementer | Before feature implementation and before deployment review | Open |
| Supported browser and viewport matrix | Project owner and implementer | Before responsive implementation | Open |
| Accessibility, performance, link, and visual test tooling | Project owner and implementer | Before the first feature implementation plan | Open |
| Minimum automated coverage for data validation, route generation, and critical reusable behavior | Project owner and implementer | Before feature implementation | Open |
| Visual regression testing requirement | Project owner and implementer | Before feature implementation | Open |
| CI/CD provider and repository visibility/allowance | Project owner and implementer | Before deployment workflow implementation | Open |
| Monitoring and developer-tool services beyond GitHub/Copilot | Project owner and implementer | Before adding each service | Open |

These decisions must be resolved with measurable criteria and named tools before the affected implementation begins; arbitrary values must not be assumed.

## Open questions

- Exact automated testing tools.
- Browser/device matrix.
- Performance budgets.
- Vulnerability severity policy and audit command.
- Whether visual regression testing is necessary.
