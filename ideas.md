# Portfolio Site Design Brainstorm

<response>
<idea>
**Design Movement:** Neo-Brutalist Minimalism with Organic Accents

**Core Principles:**
- Raw typographic hierarchy — bold weight contrasts drive visual rhythm
- Flat color blocks with sharp borders, no rounded corners on structural elements
- Monochromatic base with a single vivid accent (electric teal)
- Content-first: every element earns its space

**Color Philosophy:**
- Background: off-white (#F7F6F2) — warm, paper-like, not clinical
- Sidebar: deep charcoal (#1A1A1A) — anchors the page with authority
- Accent: electric teal (#00C9A7) — used sparingly for dates, headings, progress fills
- Text: near-black (#222) on light, white on dark

**Layout Paradigm:**
- Fixed 260px left sidebar, fluid right content — asymmetric split
- Right content uses a single-column flow with generous section padding
- Section titles left-aligned with a thick teal left-border accent
- Timeline entries use a vertical rule with circular nodes

**Signature Elements:**
- Thick 4px left-border on section headings (teal)
- Skill cards with a bottom-only colored progress bar, no background fill
- Education/experience cards with subtle left-border color coding by type

**Interaction Philosophy:**
- Sidebar nav links have a sliding teal underline on hover
- Skill progress bars animate in on scroll (width grows from 0)
- Timeline cards lift slightly on hover with a shadow

**Animation:**
- Entrance: sections fade-up as they enter the viewport (framer-motion)
- Progress bars: width transition 0.8s ease-out on first visibility
- Nav hover: 200ms color + underline transition

**Typography System:**
- Display: "Space Grotesk" (bold 700) — for name, section titles
- Body: "DM Sans" (400/500) — for all body text
- Monospace: "JetBrains Mono" — for dates, skill tags
</idea>
<probability>0.08</probability>
</response>

<response>
<idea>
**Design Movement:** Soft Glassmorphism with Botanical Warmth

**Core Principles:**
- Frosted glass panels over a blurred gradient background
- Warm sage-green and cream palette — calm, professional, approachable
- Generous whitespace, rounded cards, soft shadows
- Layered depth: background → blur layer → card layer → text

**Color Philosophy:**
- Background gradient: sage (#8FAF8A) to muted teal (#5B9E96)
- Cards: white/10 with backdrop-blur — glass effect
- Accent: warm amber (#F0A500) for highlights and CTAs
- Text: white on glass panels

**Layout Paradigm:**
- Centered single-column on mobile, two-column on desktop
- Left sidebar is a tall glass card
- Right content: stacked glass cards per section

**Signature Elements:**
- Frosted glass cards with 1px white border
- Ambient gradient blobs in background
- Skill icons with colored glow on hover

**Interaction Philosophy:**
- Cards scale up 1.02 on hover
- Background blobs slowly drift (CSS animation)
- Nav items glow on active

**Animation:**
- Blob drift: 8s infinite alternate ease-in-out
- Card entrance: fade + scale from 0.95 to 1
- Progress bars: smooth fill on scroll

**Typography System:**
- Display: "Playfair Display" (italic 700) — elegant, editorial
- Body: "Lato" (400) — clean, readable
- Accent: "Cormorant Garamond" — for decorative labels
</idea>
<probability>0.07</probability>
</response>

<response>
<idea>
**Design Movement:** Clean Swiss International Style — the chosen approach

**Core Principles:**
- Grid discipline: everything aligns to an invisible 8px grid
- Typography as the primary visual element — size and weight create hierarchy
- Teal as the single accent color, used with restraint
- Cards are white on light grey background — clean separation without heavy borders

**Color Philosophy:**
- Background: #F2F4F3 (cool light grey) — neutral, professional
- Sidebar: #3DBDA7 (mint teal) — warm, energetic, matches lwk20 spirit
- Section headings: #3DBDA7 teal
- Text: #2D3436 (dark slate) on light, white on sidebar
- Progress bars: multi-colored (coral, sky-blue, teal, amber, green)

**Layout Paradigm:**
- Fixed 240px left sidebar, scrollable right content area
- Right content: single-column with max-width 860px
- Skills: 3-column responsive grid
- Experience/Education: vertical timeline with left-side dots
- Languages/Hobbies: two-column side-by-side

**Signature Elements:**
- Circular avatar in sidebar with teal border ring
- Colored progress bars with rounded ends for skills
- Timeline vertical line with filled circle nodes
- Pill badges for education level (Bachelor's, Foundation, etc.)

**Interaction Philosophy:**
- Sidebar nav links highlight with white background pill on active/hover
- Smooth scroll to sections
- Cards have subtle hover shadow lift

**Animation:**
- Framer-motion: sections animate in with fade + translateY(20px) → 0
- Progress bars fill from left on scroll entry
- Sidebar social icons scale on hover

**Typography System:**
- Display: "Space Grotesk" (700) — name, section titles
- Body: "Inter" (400/500) — all body content
- Mono: "JetBrains Mono" — dates, skill tags
</idea>
<probability>0.09</probability>
</response>

## Chosen Approach: Clean Swiss International Style

The third approach — Clean Swiss International Style — best mirrors the spirit of lwk20.com while elevating it with refined typography, smooth animations, and polished card design. The teal sidebar, multi-colored skill progress bars, and timeline layouts are all faithful to the original while feeling more crafted and intentional.
