---
name: "Portfolio Feature Planning"
description: "Create a specification-driven implementation plan with evidence, scope boundaries, dependencies, and testable acceptance criteria for an approved portfolio feature."
argument-hint: "Name the approved feature or specification to plan."
agent: "plan"
---

Before planning, inspect `.github/copilot-instructions.md`, the relevant `.github/specs/` documents, decision records, current repository files, and package versions.

Produce a bounded plan only; do not implement. Include:

- Verified current state and source paths.
- Applicable approved requirements.
- Scope and explicit non-scope.
- Missing information, assumptions, conflicts, and approval gates.
- Data/content changes, including publication status and evidence requirements.
- Component, route, accessibility, SEO, security, and performance implications.
- Testable acceptance criteria.
- Exact validation commands available in this repository (`npm run lint`, `npm run build`, and `npx tsc --noEmit`) plus any checks that still require tooling decisions.
- Ordered implementation steps and rollback considerations.

Do not treat open questions or proposed designs as approved requirements. Do not add dependencies or services without a documented justification and approval.
