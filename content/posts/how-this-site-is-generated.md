---
title: "How this site is generated"
description: "A quick look at the content flow from Markdown files to static HTML."
date: "2026-03-23"
---

Every post lives in `content/posts/*.md`.

At build time, Next.js reads those Markdown files, turns them into HTML, and generates one static page per post using `generateStaticParams()`.

When I run `npm run build`, the export ends up in the `out/` folder.

**Hello**

This is a very nice thing to work on one thing and see another. Masha allah maja hi aa gaya.

**Bye**

Tum sunao kya hal hain tumhare. Maje me ho? ONE TWO THREE

