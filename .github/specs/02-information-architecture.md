# Information Architecture

## Status

Initial route structure is confirmed discovery scope. Exact navigation labels, hierarchy, and optional content remain subject to design review.

## Route map

| Route | Purpose | Initial content |
|---|---|---|
| `/` | Establish identity and direct visitors to key evidence | Hero, selected project, experience preview, contact CTA |
| `/projects` | Browse portfolio work | Data-driven project archive |
| `/projects/taskconnect` | Examine the principal project in depth | TaskConnect case study |
| `/about` | Understand background and experience | Bio, skills framing, experience entries |
| `/contact` | Provide ways to connect | GitHub, LinkedIn, future email/CV slots |

Additional routes require a documented value case.

## Machine-readable endpoints

These are technical SEO endpoints, not user-facing navigation routes:

- `/sitemap.xml`
- `/robots.txt`

Their contents must use the final production origin and include only approved, publicly indexable routes.

## Navigation

Primary navigation should provide direct links to Home, Projects, About, and Contact. The featured TaskConnect case study should be reachable from Home and Projects.

The footer should repeat essential navigation and confirmed external links. Email and CV controls must not render until their values are supplied.

## Page responsibilities

### Home

- State the confirmed name, role, and location.
- Present TaskConnect as the featured project.
- Provide concise experience context.
- Offer meaningful links to Projects, About, Contact, GitHub, and LinkedIn.

### Projects archive

- Render project records from data.
- Prioritize TaskConnect.
- Clearly show project type and status.
- Omit optional projects until their inclusion is decided.
- Avoid filters unless the number of projects justifies the interaction cost.

### Project case study

- Use a stable slug.
- Present verified content sections only.
- Separate individual and team contributions.
- Include external links and media only when verified.
- Provide a clear return path to the archive.

### About and experience

- Present a concise biography without describing Wisal as transitioning away from development.
- Show Systems Limited and InternCraft as separate experience entries.
- Keep technologies and claims tied to verified information.

### Contact

- Provide GitHub and LinkedIn as the first-release contact paths.
- Reserve extensible slots for a public email and CV.
- Do not include a form or submission service in the first release.

## Cross-page behavior

- Every CTA must resolve to a route, external profile, or meaningful in-page target.
- Internal navigation should use framework routing.
- External links should be labeled clearly and use safe external-link behavior.
- Case-study links must not imply a live production system when status is unverified.
- Missing optional content should not create empty cards, dead controls, or broken layout.

External links should use descriptive accessible labels. Links that open a new browsing context must state that behavior accessibly and use the appropriate `rel` attributes. Links that do not need a new browsing context should remain in the current one.

## Error and unavailable-content behavior

- An invalid project slug returns an intentional not-found experience with a working route back to Projects.
- A missing or unapproved project record is not rendered and is not included in navigation, metadata, sitemap, or structured data.
- Missing optional content is omitted without empty cards, dead controls, or broken layout.
- Failed informative images provide an understandable fallback or equivalent textual content; decorative image failures do not remove essential information.
- General application errors use a readable, navigable error experience without exposing implementation details.

## URL and discoverability rules

- Use lowercase, stable, descriptive slugs.
- Keep project URLs independent from display titles.
- Provide canonical metadata for indexable pages.
- Decide whether any unverified or incomplete case study should be excluded from indexing.

## Acceptance criteria

- The five initial page responsibilities are represented by working routes before release.
- The primary navigation reaches each required route using keyboard interaction.
- TaskConnect is reachable from both Home and Projects.
- No visible link points to a missing route or unverified destination.
- Removing an optional project record does not require component changes.
- Contact renders no email/CV control until a confirmed value exists.
- Invalid project slugs produce the defined not-found experience.
- Unapproved records cannot be reached through public navigation or indexed endpoints.

## Open questions

- Should the About page include a separate skills section or only experience and technical focus?
- Should project filtering be omitted for the first release?
- Should case studies other than TaskConnect be included initially?
- Which pages should be indexable before all content verification is complete?
