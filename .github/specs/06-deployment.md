# Deployment Specification

## Status

Hosting and domain are unresolved. No deployment platform or domain is treated as selected or approved. The GitHub Student Developer Pack is a first-class constraint; offers are not assumed to be redeemed or available to the account.

## Deployment goals

- Serve a fast, secure production portfolio.
- Support preview validation before production release.
- Preserve server-rendered and statically generated behavior.
- Avoid introducing runtime services that the portfolio does not need.
- Make rollback and verification straightforward.

## Platform requirements

The selected platform must support:

- The repository's Next.js `16.4.3` setup.
- Production builds using the existing package scripts.
- App Router rendering and the current Next.js configuration.
- Static assets and framework image optimization as required.
- Preview deployments or an equivalent pre-production workflow.
- Custom domain configuration if one is selected.
- HTTPS and configurable security headers.
- Build logs and deployment failure visibility.
- A free or Student Developer Pack-supported path should be preferred when it meets the requirements.
- The application must remain portable enough to migrate without provider-specific application dependencies.

## Student Developer Pack evaluation rule

Before recommending a paid hosting, domain, CI/CD, monitoring, or developer service:

1. Check the current GitHub Student Developer Pack offer and the provider's official terms.
2. Check whether a suitable provider free tier meets the actual requirement.
3. Verify eligibility, redemption limits, expiration, usage limits, renewal pricing, and account-specific availability.
4. Compare compatibility, reliability, performance, limits, portability, security, renewal cost, and migration effort.
5. Record the source date and do not purchase, redeem, or create an account during specification work.

The Pack dashboard remains the source of truth for whether an offer is available to Wisal's account.

## Candidate platform

Vercel is the preferred hosting candidate because it is a common Next.js hosting platform, but it is not selected. Compatibility and deployment review are required before final selection. Alternatives may be evaluated against the requirements above.

## Hosting options compared

The following comparison was checked against official provider pages on 2026-10-28. Limits and prices can change and must be rechecked immediately before deployment.

| Option | Current cost | Next.js compatibility | Benefits | Trade-offs and limits | Portability/security | Recommendation status |
|---|---:|---|---|---|---|---|
| Vercel Hobby | `$0/month` | Strongest fit for the existing Next.js App Router; verify this exact Next.js `16.4.3` configuration | Git-based previews and production deployments, HTTPS, global delivery; official pricing lists 1M CDN requests/month and 100 GB/month transfer | Official Hobby documentation restricts use to personal, non-commercial projects; limits can pause features; Pro is listed at `$20/month` and is not justified for the first release | Low migration effort for a standard Next.js app; avoid Vercel-only APIs | **Preferred candidate, not selected** |
| Netlify Free | `$0/month` | Official documentation supports major Next.js features through the OpenNext adapter; verify compatibility with this configuration | Custom domains with SSL, deploy previews, global CDN, Git/API deploys | `300` monthly credits; deploys, bandwidth, compute, and requests consume credits; sites may pause at the limit | Good portability if the app remains standard Next.js; review adapter/runtime behavior | **Viable fallback** |
| Cloudflare Pages | `$0` for static asset requests | Official guidance distinguishes static Next.js export from full-stack Next.js; static export requires a deliberate architecture/configuration review | Static requests are free and unlimited; branch deployments and custom domains are available | Pages Functions use the Workers Free quota, documented as `100,000` daily requests; static export may forgo server features | Portable for static output; avoid Workers-specific APIs unless justified | **Viable only after static-export review** |
| GitHub Pages | `$0/month` | Static HTML/CSS/JS only; current App Router setup would require a reviewed static-export approach | Native GitHub integration, custom domains, and free standard Actions runners for public repositories | No Next.js server rendering; static-export and repository-site constraints increase migration effort; GitHub records visitor IPs for security | Highest source-control portability but lowest runtime compatibility | **Not preferred for current architecture** |

No option is selected by this table. The first release should use a zero-cost option if it passes compatibility, policy, reliability, and performance review. A paid plan requires a confirmed requirement that no suitable free or Pack-supported offer satisfies.

## Domain options compared

Domain offers are evaluated separately from hosting. Prices below were checked on 2026-10-28 and are not guarantees of account eligibility or future pricing.

| Option | First-year cost | Renewal cost | Trade-offs and renewal risk | Recommendation status |
|---|---:|---:|---|---|
| Namecheap via GitHub Student Developer Pack | `$0` for one eligible `.me` domain and one SSL certificate for one year | Namecheap currently gives `$4.88/year` as an example standard annual registration price, subject to change; SSL renews at standard cost | One offer per household/business according to the official offer page; one-time benefit; confirm checkout terms, taxes, exact renewal, and auto-renewal before redemption | **Leading candidate, not selected** |
| Name.com via GitHub Student Developer Pack | `$0` for one eligible domain and Domain Safe for the first year | Standard renewal for the selected TLD; exact amount must be checked before redemption | Offer availability and eligible TLDs are account/offer dependent; no renewal price is assumed | **Alternative, not selected** |
| No custom domain | `$0` | `$0` | Uses the hosting provider's default origin; less memorable and canonical-origin choice remains provider-dependent | **Valid zero-cost fallback** |

Before selecting a domain, record the exact TLD, first-year price, renewal price, taxes/fees, privacy service, transfer/lock terms, and whether the Pack offer remains available to the account.

## CI/CD, monitoring, and developer-tool cost policy

- Prefer GitHub Actions with standard runners for CI. Official GitHub documentation states standard runners are free for public repositories and GitHub Pages; private-repository allowances depend on the account plan and must be checked before workflows are enabled.
- Do not assume the Student Pack changes GitHub Actions quotas or grants a paid CI tier.
- The first release has no analytics, tracking cookies, or unnecessary monitoring/third-party embeds.
- Provider-native deployment status and logs are sufficient initially; paid observability requires a confirmed operational need.
- GitHub Copilot remains the agreed AI-assisted development tool. Any additional paid developer tool must first be checked against the Student Pack dashboard and a suitable free alternative.
- Do not add a provider-specific SDK, database, backend, or monitoring agent solely to use a hosting offer.

## Build and release process

The release process should:

1. Install from the lockfile.
2. Run lint, type checking, and production build.
3. Verify routes, metadata, links, accessibility, and responsive behavior.
4. Deploy to a preview environment.
5. Review the preview using the release checklist.
6. Promote or deploy to production only after review.

Exact CI provider and workflow are open.

## Environment and secrets

- The first release should require no secrets or runtime environment variables.
- If a future integration requires secrets, store them only in the hosting platform's secret configuration.
- Never expose secrets through public content, client bundles, screenshots, or logs.

## Caching and assets

- Use framework and platform caching appropriate for mostly static portfolio content.
- Revalidate content only when the chosen content architecture requires it.
- Optimize and version static media.
- Verify that old or removed media is not unintentionally referenced.

## Security and operations

- Enforce HTTPS.
- Review security headers.
- Confirm expected error pages and unavailable-route behavior.
- Monitor deployment failures and basic availability.
- Document rollback steps for the selected platform.
- Keep dependency and platform versions under intentional review.

## Domain and indexing

- Decide whether to use a custom domain or platform-provided domain.
- Configure canonical URLs, sitemap, robots behavior, and social metadata for the final domain.
- Prevent preview environments from being mistaken for the canonical public site.
- Canonical URLs, sitemap, robots, and social preview configuration must remain unresolved until the production origin is selected.

## Acceptance criteria

- A clean install from the lockfile can build successfully on the selected platform.
- The production deployment serves every required route.
- HTTPS is active.
- Canonical metadata uses the production domain.
- Preview and production URLs are distinguishable.
- Rollback steps are documented and testable.
- No secret is required for the first-release static portfolio.
- Starter branding, default assets, and placeholder metadata are removed or replaced before production release.

## Open decisions

- Hosting platform.
- Custom domain and DNS provider.
- CI provider and required checks.
- Preview indexing policy.
- Monitoring approach.
- Security header configuration.
- Cache/revalidation policy after content updates.
- Final compatibility review for the preferred Vercel hosting candidate.
- Student Pack account eligibility and redemption status for the selected hosting/domain offer.
- Exact renewal pricing and taxes for any selected domain.
- Whether the portfolio qualifies as personal/non-commercial use under the selected provider's terms.
- Whether CI runs on a public or private repository and the resulting Actions allowance.
- Monitoring requirements beyond provider-native deployment status.

## Official sources checked

- [GitHub Student Developer Pack](https://education.github.com/pack)
- [Vercel pricing](https://vercel.com/pricing)
- [Vercel Hobby plan](https://vercel.com/docs/plans/hobby)
- [Vercel terms](https://vercel.com/legal/terms)
- [Vercel deployments](https://vercel.com/docs/deployments)
- [Netlify pricing](https://www.netlify.com/pricing/)
- [Netlify Next.js support](https://docs.netlify.com/frameworks/next-js/overview/)
- [Cloudflare Pages pricing](https://developers.cloudflare.com/pages/functions/pricing/)
- [Cloudflare Next.js guidance](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Cloudflare Pages deployment modes](https://developers.cloudflare.com/pages/get-started/direct-upload/)
- [GitHub Actions billing](https://docs.github.com/en/billing/concepts/product-billing/github-actions)
- [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Namecheap Student Developer Pack offer](https://nc.me/landing/github)
