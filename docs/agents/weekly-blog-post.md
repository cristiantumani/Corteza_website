# Weekly blog post agent

Runs every Monday at 9:00 (Chile) as a scheduled Claude Code routine. Goal: one SEO-optimized,
genuinely useful English article per week on corteza.app/blog. **For now every post goes through a
pull request that Cristian approves** (merge = publish). Don't merge it yourself.

## Steps

1. Work in the `cristiantumani/Corteza_website` repo, on a new branch `claude/blog-YYYY-MM-DD` from the
   latest `main`.
2. Read `docs/seo/product-facts.md`, `docs/seo/topics.md` and the existing posts in `src/data/blog.ts`.
3. Pick the first unchecked topic in `docs/seo/topics.md`. Skip it (and say why in the PR) if an
   existing post already covers the same search intent.
4. Research briefly with web search: what currently ranks for the keyword, the questions people ask,
   and what those pages miss. Don't copy anyone; write something more useful. Cite sources only when you
   state a fact or number from them (as a "link" section or in the text), and never invent statistics.
5. Write the post as a new object at the **top** of the `posts` array in `src/data/blog.ts`, using the
   existing types only (`h2`, `h3`, `p`, `ul`, `ol`, `callout`, `link`, `cta`):
   - `slug`: the primary keyword, lowercase, hyphens.
   - `title`: under 65 characters, contains the keyword, specific and honest (no clickbait).
   - `description`: 140–160 characters, contains the keyword, says what the reader gets.
   - `date`: today (YYYY-MM-DD). `author`: "Cristian Tumani". `readTime`: from the word count (≈230 wpm).
   - `category`: reuse an existing one when it fits (Team Productivity, Processes & Tools,
     Engineering Leadership); otherwise a short new one.
   - Length 1,200–1,800 words. Keyword in the first paragraph and at least one `h2`; related terms used
     naturally; short paragraphs; at least one list; one `callout` with the key takeaway.
   - 2–3 internal links (other posts, `/decision-log-template`), as `link` sections or in context.
   - Mention Corteza only where it genuinely helps, at most twice, plus one `cta` at the end. Only
     claims from `product-facts.md`. The post must be useful to someone who never uses Corteza.
6. Voice: practical, specific, calm, a little dry humor at most; examples from real team situations
   (product, engineering, operations); no hype words ("revolutionize", "game-changer", "unlock").
7. Add the post to `public/sitemap.xml` (same format as the other posts, `lastmod` today) and to the
   blog list in `public/llms.txt` if posts are listed there.
8. Mark the topic `[x]` in `docs/seo/topics.md` with ` → /blog/<slug> (YYYY-MM-DD)`. If research found a
   better opportunity, add it at the end with a one-line reason.
9. Check: `npm install --no-package-lock --no-save` if `node_modules` is missing or stale, then
   `npx tsc -p tsconfig.app.json --noEmit` and `npm run build` must pass. Don't commit `dist/`,
   lockfiles or `supabase/functions/mcp/index.ts` (the build regenerates it).
10. Commit, push, and open a PR titled `Blog: <post title>` with: the keyword and intent, a 3-line
    summary of the post, the sources used, and anything the reviewer should double-check.
11. If anything blocks you (build fails, no suitable topic), open no PR with a broken post: report what
    happened in the session's final message.

## Never

- Publish without a PR, or merge your own PR.
- Change pages other than the blog data, sitemap, llms.txt and the topics file.
- Claim anything outside `product-facts.md`, name customers, or criticize competitors by name.
