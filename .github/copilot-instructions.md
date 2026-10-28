# Portfolio Project Guidelines

## Source of truth and evidence

- Treat approved specifications in `.github/specs/` and decision-record entries explicitly marked as approved or agreed constraints as requirements. The current starting-direction record may contain open follow-ups; a proposal, assumption, open question, or draft is not an approved requirement.
- Before making a repository-specific claim, inspect the relevant files, configuration, source code, tests, or Git history. Do not infer file contents or behavior.
- Before making a claim about a current external service, pricing, policy, limit, API, framework behavior, or GitHub Student Developer Pack offer, consult current official provider documentation when web research is available. Record uncertainty and the source date.
- Distinguish verified facts, reasonable inferences, proposed designs, and unknowns. Never fabricate citations, URLs, command output, tool results, metrics, or documentation references.
- If evidence is unavailable, inconclusive, or contradictory, say so and stop before choosing an interpretation that affects architecture, security, cost, content accuracy, or acceptance.

## Portfolio content integrity

- Never invent project features, technologies, APIs, routes, dependencies, achievements, metrics, customer numbers, business results, deployment status, or professional claims.
- Keep individual contributions separate from team contributions.
- Content marked `draft`, `needs-verification`, or `archived` must not render publicly. Only content explicitly marked `approved` may be published, linked, indexed, or included in metadata or structured data.
- Do not expose secrets, credentials, private personal data, or confidential internship information.

## Existing stack and scope

- Preserve the existing Next.js App Router, React, TypeScript, Tailwind CSS, GitHub, and GitHub Copilot starting direction unless an approved decision changes it.
- Inspect installed versions and version-appropriate official documentation before relying on framework APIs, configuration, commands, or package behavior.
- Do not add dependencies, databases, backends, paid services, analytics, tracking, or provider-specific integrations without a documented requirement, comparison, and appropriate approval.
- Before recommending a paid service, check the GitHub Student Developer Pack and suitable free tiers. Do not assume eligibility, redemption, renewal, or account-specific availability.
- Keep the application portable so hosting providers can be changed without rewriting the portfolio.

## Spec-driven workflow

For every feature or material change:

1. Inspect the relevant specifications and current implementation.
2. Record missing information, assumptions, conflicts, risks, and required approvals.
3. Propose a bounded plan and observable acceptance criteria before implementation.
4. Implement only the approved scope.
5. Run appropriate checks when the environment permits.
6. Review the diff for correctness, scope creep, accessibility, security, performance, and unsupported claims.
7. Report changed files, checks actually run, failures, remaining risks, and open decisions.

Keep the stages proportionate for small changes, but do not silently omit them.

## Honest verification

- Never claim that code builds, tests pass, accessibility is compliant, a page works, or a deployment succeeded unless the relevant check was actually run and its result observed.
- Report exact commands and actual outcomes. Distinguish executed checks from recommended checks.
- Report warnings, skipped checks, timeouts, failures, and known limitations.
- Reading code or completing an AI review is not the same as running a build, test, accessibility audit, or deployment verification.

## Response format

After each task, report:

- **Verified:** facts confirmed from inspected files or executed checks.
- **Changed:** files and behavior actually changed.
- **Checks:** commands/checks actually run and their results.
- **Unknown or unverified:** relevant facts that could not be confirmed.
- **Risks and decisions:** remaining issues, assumptions, and approvals needed.

Never report an intended action as completed.
