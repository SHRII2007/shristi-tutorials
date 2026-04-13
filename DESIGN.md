# Design Brief

## Direction

**Shristi Tutorials** — A premium, playful EdTech platform that makes learning feel rewarding and social through glassmorphic UI, smooth micro-interactions, and gamified progress visualization.

## Tone

Joyfully educational with premium tech confidence — like Duolingo meets Stripe. Playful but not childish; modern but not cold. Every interaction celebrates progress.

## Differentiation

Frosted glass cards with deep purple accent borders + floating mathematical symbols (π, √, ∑) in background layers + confetti celebration animations on milestone completion.

## Color Palette

| Token      | OKLCH           | Role                                        |
| ---------- | --------------- | ------------------------------------------- |
| background | 0.97 0.012 270  | Very light cool lavender, non-fatiguing     |
| foreground | 0.18 0.015 270  | Deep cool grey for text, high contrast       |
| card       | 0.985 0.008 270 | Near-white, subtle purple tint, glassmorphic|
| primary    | 0.52 0.24 305   | Deep vivid magenta/purple, brand anchor      |
| accent     | 0.70 0.16 280   | Soft lavender, progress rings, badges        |
| muted      | 0.92 0.01 270   | Light neutral, secondary surfaces            |

## Typography

- Display: **Space Grotesk** — Headlines, hero text, interactive labels (tech-forward yet friendly)
- Body: **DM Sans** — Paragraphs, UI labels, microcopy (clean, highly readable)
- Scale: hero `text-6xl md:text-7xl font-bold tracking-tight`, h2 `text-4xl font-bold`, label `text-xs font-semibold uppercase tracking-wider`, body `text-base`

## Elevation & Depth

Layered glassmorphism with neumorphic soft touches: cards float via 8–12px shadows with purple-tinted blur, inset highlights on surfaces create depth without darkness, borders use 1px subtle purple tints (0.1–0.15 opacity).

## Structural Zones

| Zone    | Background                 | Border                      | Notes                                             |
| ------- | -------------------------- | --------------------------- | ------------------------------------------------- |
| Header  | `bg-white/70 glass`        | `border-b border-primary/10` | Frosted glass, gradient accent underline optional |
| Content | `bg-background` alternating| —                           | Alternate `bg-white/50` cards every other section |
| Footer  | `bg-muted/50`              | `border-t border-primary/10` | Subtle, spacious, aligns with header tone         |
| Cards   | `glass` + `shadow-glass`   | `border-primary/20`         | Frosted effect, purple accent left/top border     |

## Spacing & Rhythm

Generous vertical rhythm (4rem sections, 2rem gaps within). Cards use 1.5rem padding, consistent 0.75rem border-radius. Hover states scale cards +2% with shadow deepening for tactile feedback.

## Component Patterns

- **Buttons**: Purple gradient primary (`gradient-primary`), rounded-lg, hover:scale-105 with `bounce-gentle` animation; secondary uses `bg-muted hover:bg-accent`
- **Cards**: `glass` + `shadow-glass` + purple accent border-l-4, hover: `tilt-hover` + `hover-glow`, animation: `slide-up` on appear
- **Progress rings**: Animated stroke with `stroke-accent`, background `stroke-muted`, smooth transition on value change via Motion library
- **Badges**: `bg-accent text-foreground rounded-full px-3 py-1 text-xs font-semibold`, glow on hover

## Motion

- **Entrance**: Page slides up with fade-in (0.6s, staggered children). Cards appear on scroll with `slide-up` animation.
- **Hover**: Button bounce-gentle, card tilt + glow, progress ring stroke animation on data update.
- **Decorative**: Floating math symbols (π, √) drift slowly via `float` keyframe (3s loop); confetti burst on milestone (Motion trigger); pulse-soft on active study session indicator.

## Constraints

- No neon or harsh shadows; purple accent must stay in 0.1–0.2 opacity range on borders/shadows
- All animations use Motion library or Tailwind keyframes; no arbitrary delays
- Dark mode inverts lightness (0.14 background) but keeps purple hue for consistency
- Tagline "Where learning is fun" must appear on all hero/landing pages

## Signature Detail

Frosted glass cards with purple accent left borders (4px solid primary/40) + inset highlight on top-left corner creating premium neumorphic depth — immediately recognizable and reinforces brand confidence without being trendy.

