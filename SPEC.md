# Personal Articles Static Site - SPEC.md

## Concept & Vision

A minimalist, typography-focused static site for publishing personal articles. The design draws inspiration from classic literary journals and editorial publications — clean, readable, and content-first. The site should feel like opening a well-designed book: inviting, calm, and focused entirely on the words.

## Design Language

**Aesthetic Direction:** Editorial minimalism inspired by literary magazines like The Paris Review — generous whitespace, strong typography hierarchy, subtle warmth.

**Color Palette:**
- Background: `#FDFBF7` (warm off-white, like quality paper)
- Text: `#1A1A1A` (soft black for reduced eye strain)
- Secondary text: `#6B6B6B` (muted gray for metadata)
- Accent: `#C45D3A` (terracotta/rust — warm, distinctive)
- Border/Divider: `#E8E4DD` (subtle warm gray)

**Typography:**
- Headings: `Playfair Display` (serif, editorial feel)
- Body: `Source Serif 4` (highly readable serif for long-form content)
- Monospace/metadata: `JetBrains Mono` (for dates, tags)

**Spatial System:**
- Max content width: 680px (optimal reading line length)
- Generous vertical rhythm: 1.8 line-height for body text
- Section spacing: 4rem between major sections

**Motion Philosophy:**
- Subtle entrance animations: content fades up gently (opacity 0→1, translateY 20px→0, 500ms ease-out)
- Hover states: smooth color transitions (200ms)
- No jarring or distracting animations — the content is the star

**Visual Assets:**
- No icons library needed — use Unicode characters for simple indicators (→, ←)
- Decorative: subtle horizontal rules as section dividers
- No images on listing pages; article hero images optional (via frontmatter)

## Layout & Structure

**Site Structure:**
```
/ (Home)           — Hero + recent articles list
/articles          — Full articles listing with pagination
/articles/[slug]   — Individual article view
/about             — Personal bio page
```

**Page Pacing:**
- Home: Large typographic hero → subtle divider → recent articles list (5 max)
- Articles listing: Page title → article cards with title, date, excerpt, reading time
- Article: Title, metadata (date, reading time, tags) → article body → navigation to next/prev

**Responsive Strategy:**
- Mobile: Single column, reduced margins, slightly smaller typography
- Desktop: Centered content column, generous whitespace

## Features & Interactions

**Core Features:**
1. Markdown article support with frontmatter (title, date, description, tags, draft)
2. Automatic reading time calculation
3. Articles sorted by date (newest first)
4. Draft articles excluded from production builds
5. Tag filtering on articles listing (future-ready)
6. Previous/Next article navigation
7. Hero images support for articles

**SEO Features:**
- Meta tags (title, description, robots)
- Open Graph tags for social sharing
- Twitter Card meta tags
- Canonical URLs
- JSON-LD structured data
- Auto-generated sitemap (`/sitemap-index.xml`)
- robots.txt file

**Interactions:**
- Article cards: subtle lift on hover (translateY -2px, shadow increase)
- Links: accent color with underline reveal animation on hover
- Back to top: floating button appears after scrolling past hero

**Edge Cases:**
- No articles: Display friendly message with invitation to check back
- Draft articles: Visible in dev, hidden in prod
- Empty tags: Tag section hidden if no tags

## Component Inventory

**SiteHeader**
- Logo/site name (links to home)
- Navigation: Articles, About
- States: default, scrolled (subtle background appears)

**ArticleCard**
- Title (links to article)
- Date + reading time
- Excerpt (2-3 lines)
- States: default, hover (lift effect)

**ArticleContent**
- Markdown-rendered content
- Code blocks with subtle background
- Blockquotes with left border accent

**Footer**
- Copyright, minimal links

**Pagination** (for future use)
- Previous/Next with page numbers

## Technical Approach

**Framework:** Astro 4.x with static output

**Content Strategy:**
- Articles stored in `src/content/articles/` as `.md` files
- Content Collections API for type-safe frontmatter
- Zod schema validation for article frontmatter

**Frontmatter Schema:**
```typescript
{
  title: string,
  description: string,
  publishDate: date,
  tags?: string[],
  draft?: boolean (default: false),
  heroImage?: string (optional)
}
```

**Build:**
- Static site generation (`output: 'static'`)
- No client-side JavaScript except minimal interactions
- All pages pre-rendered at build time

**Dependencies:**
- `@astrojs/sitemap` (for auto-generated sitemap)
- No UI framework needed — pure Astro components
