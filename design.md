# design.md

## Design Intent

- **Brand Personality:** Markup Studio projects confidence and clarity—a fast, responsive React SPA for product-focused users.
- **Surface Classes:** 
  - *Marketing:* Persuasive, clear, conversion-oriented. 
  - *Authentication:* Minimal, high-trust, single-focus.
  - *Dashboard:* High-density, data-forward, utilitarian.
- **Editorial Tone:** Direct and actionable; avoid generic SaaS patterns.
- **First Impression:** Users should quickly understand product value and feel in control.
- **Anti-Patterns:** Avoid bland layouts, excessive card grids, and unnecessary storytelling blocks.

## Information Architecture

- **Required Routes:**
  - `/` (Landing)
  - `/login`
  - `/signup`
  - `/forgot-password`
  - `/reset-password`
  - `/dashboard`
  - 404, 403, offline states
- **Route Guards:**
  - Public routes are accessible to all.
  - Auth-required routes redirect unauthenticated users to `/login`.
  - Auth pages redirect authenticated users to `/dashboard`.
  - Password reset handles token validation with explicit invalid/fallback handling.
- **Primary CTA per Route:** Each main route defines a single, visually prioritized CTA.
- **Avoid:** Large route matrices; back-end session/token logic details.

## Layout System

- **Container Strategy:**
  - Responsive max-width container for app/marketing.
  - Full-width bands for top-level marketing calls-to-action.
- **Section Rhythm:** Consistent vertical spacing; space bands separate major sections.
- **Post-Login Shell:**
  - Top bar for navigation/profile.
  - Sidebar (persistent on desktop, collapsible on mobile).
  - Content area with clear content header.
- **Reusable Primitives:** Prefer shared layout wrappers, grid, and flex containers.
- **Above-the-Fold:** Landing presents clear value prop, trust signal, and CTA without scroll.

## Design Tokens

- **Token Categories:**
  - Color: surface, text, accent, border, status.
  - Typography: display, body, label, mono.
  - Spacing: section, grid, component rhythm.
  - Radius: button, card, input.
  - Elevation/shadow: focus and hover states.
- **Accent Usage:** One or two accent colors for clarity and emphasis.
- **Contrast:** All major text on primary surfaces must meet WCAG AA.
- **Semantic Tokens:** Use named roles (e.g., `bg-surface`, `text-primary`, `ring-accent`).
- **Avoid:** Repeated literal color numbers and exhaustive, duplicative token lists.

## Typography

- **Font Roles:**
  - Display: section/hero, large headings.
  - Heading: h2/h3 for section organization.
  - Body: default readable sans.
  - Labels/meta: small-caps or bold/upper for emphasis.
- **Type Hierarchy:** Visual scale with clamp-based sizing for display roles.
- **Expressiveness:** Allowed for hero/marketing; functional everywhere else.
- **Kickers/Eyebrows:** Used to frame sections and add clarity.
- **Avoid:** Dense narrative blocks or excessive type variation.

## Interaction & Motion

- **Global States:** 
  - Hover, focus-visible, disabled, active/pressed.
- **Motion Principles:** Purposeful, subtle, supports content, not distracting.
- **Named Transitions:** Use a small, consistent set (fade, slide, scale).
- **Reduced Motion:** Always honor user motion preferences.
- **Keyboard Focus:** Clear visual focus for all interactive elements.
- **Avoid:** Decorative or excessive motion.

## Authentication UX

- **Surface Direction:** Low-distraction, high-trust, single-focus (sign in, sign up, forgot, reset).
- **Screens:** 
  - Sign in: minimal fields, primary CTA.
  - Sign up: concise, with inline validation.
  - Forgot/reset: clear feedback, explicit error handling.
- **Form Behavior:** Inline validation, immediate error text, explicit submit states.
- **Desktop/Mobile:** Split panel allowed for trust signals on desktop; single column on mobile.
- **Avoid:** Marketing elements and complex alternate layouts in auth flows.

## Dashboard UX

- **Shell Behavior:** Persistent navigation; main content adapts to sidebar/mobile toggle.
- **First-Screen Priorities:** Show key metrics, recent activity, and primary actions immediately on dashboard.
- **Data Density:** Use cards/tables/lists with clear hierarchy, never at the cost of scanability.
- **Roles/Permissions:** Messaging adapts to user/role status.
- **Panel Patterns:** Prefer modular, composable panel edges.
- **Avoid:** Decorative chrome; restrict visuals to supportive elements.

## UX States

- **Required States:** 
  - Loading
  - Empty
  - Error
  - Success/confirmation
  - Offline
  - 403 (forbidden)
  - 404 (not found)
- **State Handling:** 
  - All interactive data surfaces must show at least loading, empty, error, success.
  - Offline and error must offer retry actions where possible.
- **Consistency:** State components should not shift layout unexpectedly.
- **Microcopy:** Concise, actionable state messaging.
- **Avoid:** Filler text or vague generic "something went wrong" errors.

## Forms & Trust UX

- **Validation:** 
  - Real-time, field-level validation with clear feedback.
  - Form cannot submit with unaddressed errors.
- **Feedback:** 
  - Success confirmation after submit.
  - Inline error/success states for each field.
- **Session/Trust:** Communicate session timeouts and trust-context (e.g., "action is irreversible") clearly.
- **Recovery:** Retain unsent user input after recoverable errors.
- **Avoid:** Leaking sensitive workflow or technology mechanics into UX.

## Accessibility & Responsive Behavior

- **Accessibility:**
  - Keyboard navigation everywhere.
  - All interactive elements have visible focus.
  - Semantic headings, ARIA labels as needed.
  - Sufficient color contrast always maintained.
- **Responsiveness:**
  - Mobile-first by default.
  - Sidebar collapses or hides below tablet breakpoints.
  - Auth and dashboard layouts adapt for small screens (stacked, scrollable).
- **Avoid:** Non-semantic elements for meaningful content.

## Content & Microcopy

- **Voice:**
  - Marketing: persuasive, specific value proposition.
  - Auth: clear and reassuring.
  - Dashboard: succinct, operational, next-action oriented.
- **CTA Copy:** Direct, action-focused (e.g., “Get Started”, “View Dashboard”).
- **Error Copy:** Plain language, explicit next steps.
- **Content Limits:** Concise by default; marketing keeps headlines < 12 words.
- **Avoid:** Filler text, redundant brand restatements, cryptic errors.

## Implementation Notes

- **Technologies:** React + Vite + TypeScript + Tailwind CSS + shadcn/ui components.
- **Entry Surfaces:** Follow repo SPA conventions (`src/main.tsx`, `src/App.tsx`, `src/pages/*`).
- **Routes:** Implement route list from IA with registration in canonical `src/app/routes.tsx`.
- **Components:** Prefer reuse; colocate styles unless shared pattern dictates.
- **Global Styles:** Import once from app entry point.
- **Primitives:** Extend shadcn/ui only as needed for required UI states/patterns.
- **Do Not:** Duplicate primitives or styles without repo evidence; do not add non-existent imports.
- **Layout/Token Guidance:** Use semantic tokens, shared containers, and composable layout primitives.
- **End-to-End:** Each view/page must be both routed and reachable.

## QA Checklist

- [ ] All output headings present and correct order.
- [ ] Visual consistency: rhythm, hierarchy, token use.
- [ ] State coverage: loading, empty, error, success, offline, 403, 404.
- [ ] Responsive behavior validated on mobile/tablet/desktop.
- [ ] Keyboard, focus, and ARIA compliance on all interactive elements.
- [ ] Consistent CTA and microcopy intent across surfaces.
- [ ] Error and success messaging is explicit and actionable.
- [ ] No duplicated or conflicting rules.
- [ ] Does not over-constrain implementation or restate backend logic.

## Definition of Done

- All required contract domains are present in `design.md`.
- All sections are scannable, implementation-ready, with no unresolved ambiguity.
- Headings and content order match output contract.
- No rule conflict or duplication across sections.
- Ready for deterministic translation into Vite + React + Tailwind + shadcn UI.
- Passes all QA checklist items above.