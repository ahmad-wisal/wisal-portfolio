---
name: "Portfolio Specifications"
description: "Use when creating or reviewing portfolio product specifications, architecture decisions, content records, acceptance criteria, deployment plans, or specification-driven implementation plans."
applyTo: ".github/specs/**/*.md"
---

# Specification File Rules

- Label each document's status clearly. Do not call an open proposal approved.
- Separate confirmed facts, approved requirements, proposed designs, implementation suggestions, open decisions, and verification tasks.
- Use exact, observable acceptance criteria where possible: actor, condition, behavior, and expected result.
- Every requirement that depends on content must respect the content workflow: only `publicationStatus: approved` content may render publicly or enter navigation, metadata, sitemap, or structured data.
- Preserve the distinction between individual work and team work. Do not turn candidate technologies or unverified features into factual claims.
- Reference actual repository paths and current versions only after inspecting them.
- For hosting, domains, CI/CD, monitoring, and developer tools, document Student Developer Pack/free-tier checks, official source dates, limits, portability, security, renewal cost, and migration effort. Keep unselected options open.
- Record conflicts rather than resolving them silently. Add an owner and resolution stage for unresolved decisions that block implementation or release.
- Avoid duplicating project-wide rules from `.github/copilot-instructions.md`; link to the relevant specification and add only document-specific requirements.
