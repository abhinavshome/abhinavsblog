# Next.js Static Blog Starter

This is a personal blog starter built with Next.js App Router and static export.

## Features

- Markdown posts in `content/posts/`
- Static generation for the home page, blog index, and each post
- Export-ready build output in `out/`
- Friendly for GitHub Pages, Cloudflare Pages, Netlify, and similar static hosts

## Local development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000`

## Writing posts

Create a new file inside `content/posts/`:

```md
---
title: "My new post"
description: "A short summary for cards and SEO."
date: "2026-03-24"
---

Write your post in Markdown here.
```

The filename becomes the URL slug.

## Static export

Build the site:

```bash
npm run build
```

Next.js will generate the static site in `out/`.

## Free deployment options

### Option 1: Cloudflare Pages

This is the easiest free option for a static blog.

- Push this project to GitHub
- Create a new Cloudflare Pages project connected to the repo
- Build command: `npm run build`
- Output directory: `out`

### Option 2: GitHub Pages

Good free option if you are already using GitHub and do not need server features.

- Push the repo to GitHub
- The workflow at `.github/workflows/deploy-gh-pages.yml` will build and deploy the static `out/` folder when you push to `main`
- In GitHub, open `Settings -> Pages` and make sure the source is set to `GitHub Actions`
- If this repo will be published as `https://<username>.github.io/<repo>/`, you will also need to set `basePath` and `assetPrefix` in `next.config.mjs`

### Option 3: Netlify

Also works well for static output.

- Connect the repo
- Build command: `npm run build`
- Publish directory: `out`

## Notes

- `next.config.mjs` uses `output: "export"` so no Node server is required in production.
- `trailingSlash: true` helps static hosting produce folder-based routes like `/blog/my-post/`.
