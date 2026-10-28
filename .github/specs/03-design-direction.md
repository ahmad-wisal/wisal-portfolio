# Design Direction

## Status

Premium dark engineering aesthetic is the confirmed starting direction. Final visual concept requires design review before implementation.

## Design intent

Create a refined editorial/product experience that feels technically credible and memorable without becoming a decorative template. Content hierarchy, reading comfort, and performance take precedence over visual effects.

## Visual foundations

- Base palette: deep navy and charcoal backgrounds with off-white text.
- Accents: restrained electric blue and cyan.
- Violet: occasional supporting accent only.
- Contrast: meet WCAG 2.2 AA for normal text and interactive controls.
- Typography: clean, modern, highly readable, with clear display/body/code roles.
- Spacing: deliberate rhythm with generous but not wasteful section separation.
- Surfaces: use restrained borders, tonal contrast, and hierarchy instead of excessive shadows or glow.

Exact color tokens, font choices, type scale, spacing scale, and contrast samples are open design decisions.

## Layout principles

- Mobile-first responsive layouts.
- Editorial hero with a clear identity statement and purposeful next actions.
- Project cards that prioritize title, type/status, contribution, and technology context.
- Case studies optimized for long-form reading with clear section landmarks.
- Technical visuals used only when they explain architecture or implementation.
- Avoid cluttered dashboards, floating decorative elements, excessive gradients, and visual noise.

## Motion principles

- Use subtle transitions for navigation, focus, card state, and content reveal only where they clarify interaction.
- Avoid animation that delays content, causes disorientation, or competes with reading.
- Respect `prefers-reduced-motion: reduce` by disabling or simplifying non-essential motion.
- Do not make meaning or access depend on animation.

## Responsive behavior

The design must support narrow mobile, tablet, and desktop widths without horizontal scrolling. Content order must remain logical when columns collapse. Technical diagrams and screenshots must remain readable or provide an accessible textual explanation.

Exact breakpoints and tested viewport matrix are open decisions.

## Accessibility requirements

- Use semantic landmarks and heading hierarchy.
- Provide a skip-to-content link that is keyboard reachable and moves focus to the main content.
- Provide visible, high-contrast keyboard focus.
- Mobile navigation must be operable by keyboard, expose its expanded/collapsed state, close with Escape when open, and return focus to its trigger when closed.
- Ensure all interactive elements have accessible names and meaningful outcomes.
- Do not communicate information by color alone.
- Provide alternative text or equivalent descriptions for informative images.
- Ensure decorative imagery is excluded from the accessibility tree.
- Keep touch targets usable on small screens.
- Preserve access to content and functionality at 200% zoom and under responsive reflow conditions.

## Media and technical visuals

- Use genuine project screenshots only after permission and verification.
- Use diagrams to explain verified architecture or data flow.
- Code excerpts must be concise, readable, and free of secrets or confidential material.
- Optimize all media and provide dimensions to reduce layout shift.
- Do not create visuals that imply unverified features.

## Acceptance criteria

- Text and controls meet the agreed WCAG 2.2 AA contrast target.
- All interaction states are visible with keyboard navigation.
- Reduced-motion testing shows no essential content or functionality is lost.
- Layouts pass the agreed viewport matrix without horizontal overflow.
- A keyboard user can skip repeated navigation and operate mobile navigation, including opening, closing, Escape handling, and focus restoration.
- The page remains usable at 200% zoom and during responsive reflow.
- A design review confirms the final concept is distinctive without sacrificing readability or performance.

## Open questions

- Exact palette and font selections.
- Final hero composition and primary CTA hierarchy.
- Whether a light theme is needed after the dark-first release.
- Exact breakpoints and viewport test matrix.
- Which verified screenshots, diagrams, or code excerpts are available.
