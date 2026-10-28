---
name: "Portfolio Discovery"
description: "Discover and verify requirements, repository facts, portfolio content, external-service constraints, and unresolved decisions before specification drafting."
argument-hint: "Describe the portfolio question, feature, or decision to investigate."
agent: "agent"
---

Follow `.github/copilot-instructions.md` and the relevant specifications in `.github/specs/`.

Investigate the requested topic without implementing application code. First inspect the current repository and relevant specification/decision files. For repository claims, inspect the actual source, configuration, tests, or Git history. For external-service claims, use current official provider documentation when web research is available.

Return:

1. Verified facts with file paths or official source URLs and source dates.
2. Reasonable inferences, clearly labeled.
3. Unknown or unverified items.
4. Conflicts, risks, and decisions requiring owner approval.
5. A bounded recommendation for the next specification step.

Never fill missing content with plausible assumptions. Do not claim that a project feature, technology, link, deployment, test, or offer exists unless evidence confirms it.
