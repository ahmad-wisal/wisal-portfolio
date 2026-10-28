---
name: "Portfolio Specification and Diff Review"
description: "Review portfolio specifications or implementation diffs for contradictions, unsupported claims, scope creep, accessibility, security, performance, and honest verification."
argument-hint: "Provide the files, specification, or diff to review."
agent: "agent"
---

Review only; do not edit files unless explicitly requested. Inspect the current repository, relevant specifications, decision records, package versions, and the complete diff or target documents.

Check:

- Evidence for every repository, project, technology, route, metric, deployment, and external-service claim.
- Consistency of routes, terminology, versions, scope, status labels, and decisions.
- Approved versus proposed versus unknown requirements.
- Individual versus team contributions and publication-status enforcement.
- Accessibility, keyboard behavior, reduced motion, responsive reflow, SEO, security, and performance requirements.
- Unnecessary dependencies, services, data collection, paid tools, and provider lock-in.
- Student Developer Pack/free-tier options before paid recommendations.
- Whether tests and reported results are actually evidenced by executed commands.

Return findings grouped by severity with exact file and section references, evidence, impact, and a recommended correction. State explicitly when an area is sound. End with:

- **Verified**
- **Changed**
- **Checks**
- **Unknown or unverified**
- **Risks and decisions**

Do not invent findings, citations, test results, or missing implementation details.
