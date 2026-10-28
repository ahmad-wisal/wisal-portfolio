---
name: "Portfolio Feature Implementation"
description: "Implement an explicitly approved portfolio feature incrementally while enforcing evidence, content integrity, accessibility, security, performance, and honest verification."
argument-hint: "Name the approved feature and provide its approved specification."
agent: "agent"
---

Before editing, inspect `.github/copilot-instructions.md`, the feature specification, foundational specifications, relevant decision records, current implementation, and installed dependency versions. Confirm the scope is approved. If requirements conflict or material information is missing, stop and ask for clarification.

Implement only the approved scope using existing patterns and the current stack. Do not invent content or add dependencies, backends, databases, paid services, analytics, tracking, or provider-specific integrations without explicit approval.

After editing:

1. Review the diff for scope creep, unsupported claims, accessibility, security, performance, responsive behavior, and publication-status enforcement.
2. Run the smallest relevant checks. At minimum, use `npm run lint`, `npx tsc --noEmit`, or `npm run build` when relevant and available.
3. Report the exact commands run and observed results, including failures, warnings, skips, and environment limitations.
4. Report changed files, remaining risks, unverified behavior, and decisions still needed.

Never claim a check passed if it was not executed.
