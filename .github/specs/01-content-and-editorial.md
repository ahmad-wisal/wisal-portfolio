# Content and Editorial Specification

## Status

Content rules and supplied facts are confirmed discovery inputs. Individual unverified details remain open and must not be inferred.

## Editorial objectives

- Communicate full-stack development and AI integration as complementary experience.
- Use clear, direct, technically precise language.
- Prefer evidence and scope over promotional claims.
- State whether work was individual, team-based, academic, internship, personal, or course-related.
- Use honest status labels such as `Completed academic project`, `Internship`, and `Personal/course-related project`.

## Source-of-truth model

Portfolio content must be represented as structured data with reusable fields. A project record should support at least:

- `slug`
- `publicationStatus`
- `title`
- `shortDescription`
- `longDescription`
- `type`
- `status`
- `role`
- `individualContribution`
- `teamContribution`
- `technologies`
- `integrations`
- `links`
- `screenshots`
- `featured`
- `caseStudy`
- `verificationNotes`

`publicationStatus` must use an explicit value such as `draft`, `needs-verification`, `approved`, or `archived`. Only `approved` records and approved nested content may render publicly. Draft, unverified, and archived records must be excluded from public rendering, navigation, metadata, sitemap, and structured data.

Experience records should support:

- `publicationStatus`
- `organization`
- `role`
- `location`
- `dates`
- `description`
- `contributions`
- `technologies`
- `links`
- `verificationNotes`

Only experience records with `publicationStatus: approved` may render publicly. Optional values must be omitted from rendered output rather than filled with placeholders that appear factual.

## Required attribution rules

TaskConnect must present separate sections or labels for:

- **My contribution:** backend development and application feature integrations, as part of a three-person team.
- **Team project scope:** wider marketplace functionality, including user-facing interfaces, provider workflows, AI integration, maps, payments, notifications, and authentication-related features only where repository evidence confirms implementation.

The portfolio must not use first-person or ownership language that attributes the entire TaskConnect system to Wisal.

Internship content must describe Wisal's experience without naming confidential projects, exposing internal materials, or claiming independent ownership unless explicitly verified.

## Case-study structure

The TaskConnect case study should be capable of including:

1. Context and problem.
2. Project type and team context.
3. My role and individual contribution.
4. Team-built functionality.
5. Architecture and data flow, only where verified.
6. Technical decisions and rationale, only where supported.
7. Challenges and solutions, pending confirmation.
8. Implemented versus planned/partial functionality.
9. Lessons learned, pending confirmation.
10. Links, screenshots, and status notes, only when verified.

Missing evidence must produce an editorial question or an omitted section, not an invented narrative.

## First-release records

### TaskConnect

- Featured: yes
- Type: Final Year Project / Full-Stack Web Application
- Status label: Completed academic project
- Team: three-person team
- Individual contribution: primarily backend development and application feature integrations
- Candidate technologies: Node.js, Express.js, React, Gemini API, Google Maps, Stripe payment intents/webhooks and commission functionality, Firebase Cloud Messaging, JWT, email OTP verification
- Verification required: repository dependencies, actual implementations, deployment state, link availability, screenshots, architecture, challenges, lessons learned

### Systems Limited

- Organization: Systems Limited
- Role: Full Stack Developer Intern (MERN)
- Location: Islamabad, Pakistan
- Dates: July 2025 – August 2025
- Supplied experience: JavaScript and React-based development, REST APIs, state management, Git workflows, debugging, team development practices, and exposure to CI/CD concepts
- Verification required: assignment-specific technologies and any publicly permissible details

### InternCraft

- Organization: InternCraft
- Role: Front-End Web Development Intern
- Dates: June 2024 – August 2024
- Supplied work: restaurant website interface and e-commerce website template
- Candidate technologies: HTML, CSS, JavaScript, Git, GitHub Pages
- Verification required: current public demonstrations and screenshots

### Techora

- Type: Personal / Course-Related Project
- Supplied scope: software-services brand concept, visual identity, website, and marketing materials
- Status label: Personal/course-related project
- Include only after verifying implementation, public links, current deployment, and portfolio value.

## Publishing checklist

Before any content is published:

- Confirm source or mark the item `needs verification`.
- Confirm the wording does not imply unsupported ownership or outcomes.
- Confirm every external URL resolves and is intended for public use.
- Confirm images and screenshots are owned or authorized for publication.
- Confirm confidential employer information is excluded.
- Confirm current status labels are accurate.
- Confirm the record and every rendered case-study section are explicitly approved for publication.

## Open questions

- Which TaskConnect features are demonstrably implemented?
- Which candidate TaskConnect technologies are actually used?
- What architecture, challenges, and lessons can Wisal substantiate?
- Which Systems Limited details are safe to publish?
- Which InternCraft demonstrations remain public?
- Should Techora be included after verification?
- What email and CV URL should be added later?
