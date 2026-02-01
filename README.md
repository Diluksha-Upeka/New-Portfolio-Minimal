
# Portfolio

A personal portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

It includes a curated Featured Projects section with a smooth **morphing modal** (project screenshot + details), plus an Apple-like **right-side scroll position indicator** that shows where the user is on the page.

---

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **lucide-react** (icons)

---

## Features

- **UI**: clean typography, subtle borders, light surfaces.
- **Featured Projects modal**:
	- Click a project card → elegant modal opens.
	- Screenshot displayed with **original aspect ratio** (no distortion).
	- Minimal content layout so most screens view everything “in one go”.
- **Scroll position indicator**:
	- Minimal vertical dots on the right.
	- Highlights the active section (Home / Skills / Work / Projects).
	- Clickable for smooth scrolling.
	- Responsive: on mobile you get dots only; labels appear from `md` and up.
- **Static + fast**: optimized for production build.

---

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run locally

```bash
npm run dev
```

Open http://localhost:3000

### 3) Production build

```bash
npm run build
npm start
```

---

## Project Structure

High-level overview:

```text
app/
	layout.tsx        # Global layout + footer
	page.tsx          # Home page (sections: home, tech, work, projects)
	about/
	contact/
	projects/
components/
	FeaturedProjects.tsx   # Featured project cards + zen modal
	ScrollProgress.tsx     # Right-side scroll indicator
	Navbar.tsx
	Footer.tsx
	ContactForm.tsx
lib/
	github.ts          # GitHub API helper (optional)
public/
	profile.png
	cv.pdf
	projects/          # Project screenshots used by the modal
```

---

## Customization

### Update your content

- **Home page content** lives in `app/page.tsx`.
- **Featured projects data** is defined inside `components/FeaturedProjects.tsx`.

### Add / update project screenshots

The Featured Projects modal reads images from `public/projects/`.

1. Put your images in:

	 `public/projects/`

2. Ensure the `image` field points to the right path, for example:

```ts
image: "/projects/ev.png"
```

If an image is missing, the modal shows a subtle placeholder instead.

### Scroll indicator sections

The right-side scroll indicator tracks the sections listed in `components/ScrollProgress.tsx`:

```ts
const sections = [
	{ id: "home", label: "Start" },
	{ id: "tech", label: "Skills" },
	{ id: "work", label: "Work" },
	{ id: "projects", label: "Projects" },
];
```

To add a new tracked section:

1. Add an `id` to the section element in `app/page.tsx`:

```tsx
<section id="new-section">...</section>
```

2. Add it to `sections` in `components/ScrollProgress.tsx`.

### Styling (Zen theme)

- Tailwind theme colors are in `tailwind.config.ts` under the `zen` color palette.
- Global styles live in `app/globals.css`.

---

## Scripts

- `npm run dev` – start dev server
- `npm run build` – create optimized production build
- `npm start` – run production server
- `npm run lint` – run ESLint

---

## Deployment

This app deploys well on:

- **Vercel** (recommended for Next.js)
- Netlify
- Any Node.js host that can run `npm run build` + `npm start`

Typical Vercel flow:

1. Push to GitHub
2. Import repo in Vercel
3. Build command: `npm run build`
4. Output: handled automatically for Next.js

---

