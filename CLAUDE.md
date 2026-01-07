# goldsborough.io

Personal blog. Astro static site.

## OG Images

Dynamic generation via astro-og-canvas at `/og/[slug].png`.

Config: `src/pages/og/[...slug].ts`

**Customization:**
- Colors: `bgGradient`, `border.color`
- Typography: `font.title`, `font.description`
- Layout: `padding` (120px default for vertical centering)

## Custom Components

`.manifesto` - Styled callout for principles/manifestos:

```html
<div class="manifesto">

### Title

**1. Principle**
Explanation text.

</div>
```

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
```
