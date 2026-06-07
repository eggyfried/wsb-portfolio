# William Stewart-Blacker — Portfolio

A modern, production-ready portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm / pnpm / yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
wsb-portfolio/
├── app/
│   ├── layout.tsx          # Root layout (nav + footer)
│   ├── page.tsx            # Home page (hero + category nav)
│   ├── globals.css         # Global styles + CSS variables
│   ├── set-design/
│   │   └── page.tsx        # Set Design project showcase
│   ├── architecture/
│   │   └── page.tsx        # Architecture portfolio
│   ├── photography/
│   │   └── page.tsx        # Photography gallery + lightbox
│   └── not-found.tsx       # 404 page
├── components/
│   ├── Navigation.tsx      # Responsive nav (transparent → solid on scroll)
│   ├── Footer.tsx          # Minimal footer with contact info
│   ├── ScrollReveal.tsx    # Scroll-triggered reveal animation
│   ├── ParallaxImage.tsx   # Scroll parallax image component
│   └── Lightbox.tsx        # Full-screen photo lightbox
├── public/
│   └── cv.pdf              # ← Place your CV here
└── ...
```

---

## Adding Your CV

Place your CV PDF at:
```
public/cv.pdf
```
The CV link in both the navigation and home page category section will automatically link to it.

---

## Replacing Placeholder Images

All images currently use Unsplash placeholders. To replace with your own:

### In each page file, update the `src` values:
```tsx
// Example: app/set-design/page.tsx
const projects = [
  {
    title: "The Cherry Orchard",
    images: [
      "/images/set-design/cherry-orchard-1.jpg",  // ← your image
    ],
  },
]
```

### Store images in:
```
public/images/
  set-design/
  architecture/
  photography/
```

---

## Adding Projects

### Set Design
In `app/set-design/page.tsx`, add to the `projects` array:
```tsx
{
  id: 6,
  title: "New Production",
  year: "2025",
  description: "Optional one-sentence description.",
  images: [
    "/images/set-design/new-production-1.jpg",
    "/images/set-design/new-production-2.jpg",
  ],
  wide: true,  // true = full-width feature image
},
```

### Architecture
In `app/architecture/page.tsx`, add to the `projects` array:
```tsx
{
  id: 5,
  title: "New Project",
  year: "2025",
  type: "Competition Entry",
  description: "Description here.",
  images: [
    { src: "/images/arch/project-1.jpg", aspect: "16/9", caption: "Perspective" },
    { src: "/images/arch/project-2.jpg", aspect: "4/3", caption: "Plan" },
  ],
},
```

### Photography
In `app/photography/page.tsx`, add to the `photos` array:
```tsx
{
  src: "/images/photography/new-photo.jpg",
  alt: "Description",
  caption: "Title, Year",
  aspect: "landscape", // "landscape" | "portrait" | "square"
  cols: 1,
  rows: 1,
},
```

---

## Deployment

### Vercel (recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo directly at [vercel.com](https://vercel.com).

### Build locally
```bash
npm run build
npm run start
```

---

## Design Tokens

Key CSS variables (in `globals.css`):
```css
--color-bg: #fafaf9;        /* Off-white background */
--color-fg: #0c0a09;        /* Near-black text */
--color-mid: #78716c;       /* Mid-grey for secondary text */
--color-border: #e7e5e4;    /* Subtle border / divider */
--font-display: 'Cormorant Garamond', serif;   /* Headings */
--font-body: 'DM Sans', sans-serif;            /* Body text */
```

---

## Typography

- **Display / Headings**: Cormorant Garamond (Google Fonts) — elegant, architectural serif
- **Body / Navigation**: DM Sans — clean, modern grotesque at light weight

---

## Performance Notes

- All images use Next.js `<Image>` with lazy loading
- Parallax images use Framer Motion `useScroll` + `useTransform`
- Fonts loaded via Google Fonts with `display=swap`
- Animations are GPU-accelerated (transform / opacity only)
