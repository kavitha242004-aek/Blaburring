# Blaburring 🌙

A small React poetry journal built for the React Developer assessment task.
"Blaburring" showcases an original poetry collection by **Kavitha Arumugam**,
presented as a single scrolling page with a dreamy night-sky theme.

- Center-aligned poem cards
- A moon that slowly fills in (new → full) as you scroll through the poems
- Cards "swipe down" into focus (translate + blur → sharp) one by one as you scroll
- Fully responsive (mobile, tablet, desktop)
- Respects `prefers-reduced-motion` for accessibility

---

## 1. Project structure

```
blaburring/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── moon.svg                 # favicon
└── src/
    ├── main.jsx                 # React entry point
    ├── App.jsx                  # root component
    ├── index.css                # all styling, theme, animations
    ├── data/
    │   └── poems.js             # <-- all poem content lives here
    ├── hooks/
    │   └── useScrollReveal.js   # IntersectionObserver hook for scroll animation
    └── components/
        ├── Hero.jsx             # landing title "Blaburring"
        ├── PoemList.jsx         # maps poems.js -> PoemCard
        ├── PoemCard.jsx         # one poem (title, stanzas, signature)
        ├── MoonPhase.jsx        # decorative CSS moon icon
        └── Footer.jsx
```

Clean separation of concerns:
- **Content** (`src/data/poems.js`) is separate from **presentation**
  (components) and **styling** (`index.css`).
- Each component has a single responsibility, making it easy to extend
  (e.g. add a new poem, change the theme, or add a new section).

---

## 2. Prerequisites

Install **Node.js** (version 18 or later is recommended).
Download from: https://nodejs.org

Check it's installed:

```bash
node -v
npm -v
```

---

## 3. Run the project locally

1. Unzip/copy the `blaburring` folder onto your computer and open a terminal
   inside it.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the URL shown in the terminal (usually `http://localhost:5173`)
   in your browser. Scroll down slowly to see the card reveal animation.

---

## 4. Editing / adding poems

All poem content lives in **`src/data/poems.js`**. Each poem is an object:

```js
{
  id: 8,                       // unique number
  title: "Your Title",         // string, array of lines, or null for no title
  stanzas: [
    ["First line of stanza 1", "Second line"],
    ["First line of stanza 2"],
  ],
  note: null,                  // optional closing quote line (italic)
  signatureMark: "~",          // "~" or "—"
  signature: "Kavitha Arumugam",
}
```

To add a new poem, copy one of the existing objects, give it a new `id`,
and fill in your text. The page automatically renders it as a new card with
its own moon phase and reveal animation — no other code changes needed.

---

## 5. Build for production

```bash
npm run build
```

This creates an optimized `dist/` folder. To preview the production build
locally:

```bash
npm run preview
```

---

## 6. Push the project to GitHub

From inside the `blaburring` folder:

```bash
# 1. Initialize a git repository (skip if already a git repo)
git init

# 2. Stage all files
git add .

# 3. Create the first commit
git commit -m "Initial commit: Blaburring poetry app"

# 4. Set the main branch name
git branch -M main

# 5. Create a new EMPTY repository on GitHub (no README/license),
#    then copy its URL and connect it as "origin":
git remote add origin https://github.com/<your-username>/blaburring.git

# 6. Push your code
git push -u origin main
```

> Tip: `node_modules/` and `dist/` are already excluded via `.gitignore`,
> so your repo stays small and clean.

---

## 7. Deploy a live link (recommended: Vercel)

### Option A — Vercel (recommended, free)

1. Push the project to GitHub (see step 6).
2. Go to https://vercel.com and sign in with your GitHub account.
3. Click **Add New → Project**, then select your `blaburring` repository.
4. Vercel auto-detects Vite. Keep the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**. After a minute you'll get a live URL like
   `https://blaburring.vercel.app`.

### Option B — Netlify

1. Push the project to GitHub.
2. Go to https://app.netlify.com and sign in with GitHub.
3. **Add new site → Import an existing project**, choose your repo.
4. Set:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**.

### Option C — GitHub Pages

1. Install the helper package:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `package.json`, add:
   ```json
   "homepage": "https://<your-username>.github.io/blaburring",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. In `vite.config.js`, set the base path:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/blaburring/',
   })
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```

---

## 8. Submission checklist

- [ ] `npm install` and `npm run dev` work without errors
- [ ] All 7 poems display, centered, with correct line breaks
- [ ] Scrolling reveals each poem card one by one with a swipe-down + blur-in effect
- [ ] Page looks good on mobile (resize browser or use dev tools device toolbar)
- [ ] Code pushed to a public GitHub repository
- [ ] Live deployment link shared (Vercel/Netlify/GitHub Pages)

---

Written and authored by **Kavitha Arumugam**. Built with React + Vite.
