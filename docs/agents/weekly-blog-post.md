# Weekly blog post agent

Runs every Monday and Thursday at 9:00 (Spain time, Europe/Madrid) as a scheduled Claude Code routine. Goal:
two SEO-optimized, genuinely useful English articles per week on corteza.app/blog, plus a LinkedIn post to
share each one. **For now every post goes through a
pull request that Cristian approves** (merge = publish). Don't merge it yourself.

## Steps

1. Work in the `cristiantumani/Corteza_website` repo, on a new branch `claude/blog-YYYY-MM-DD` from the
   latest `main`.
2. Read `docs/seo/product-facts.md`, `docs/seo/topics.md` and the existing posts in `src/data/blog.ts`.
3. Pick the first unchecked topic in `docs/seo/topics.md`. Skip it (and say why in the PR) if an
   existing post already covers the same search intent. Also skip topics an **open** blog PR already
   took (`claude/blog-*` branches not yet merged: their `topics.md` marks them `[x]`), so two runs never
   write the same post while Cristian hasn't merged the previous one.
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
   better opportunity, add it at the end with a one-line reason. **When fewer than 6 unchecked topics
   are left**, add 2–3 new ones at the end, in the same format, from what your research showed people
   search for (for the audience in `topics.md`), each with a one-line reason.
9. Check: `npm install --no-package-lock --no-save` if `node_modules` is missing or stale, then
   `npx tsc -p tsconfig.app.json --noEmit` and `npm run build` must pass. Don't commit `dist/`,
   lockfiles or `supabase/functions/mcp/index.ts` (the build regenerates it).
10. Commit, push, and open a PR titled `Blog: <post title>` with: the keyword and intent, a 3-line
    summary of the post, the sources used, and anything the reviewer should double-check.
    Then a **LinkedIn post** section, ready to paste, in a ```` ```text ```` block: in English, in
    Cristian's first person, 80–150 words. Open with a concrete situation or a sharp line from the post
    (not "New blog post!"), give one or two useful takeaways so it's worth reading without clicking,
    and end with the post's URL (`https://corteza.app/blog/<slug>`). Same voice rules as the post: no hype
    words, no invented numbers, Corteza named at most once and only with claims from `product-facts.md`,
    at most 3 hashtags, no emoji walls.
    **Always end the PR description with the full post text**, so Cristian can read it on GitHub
    (also on his phone) before merging. Put it in a collapsed section,
    `<details><summary><b>Read the full post</b></summary>` … `</details>`, converted from the
    `content` array to Markdown: `h2`/`h3` as `##`/`###`, lists as lists, the `callout` as a quote
    with its label in bold, each `link` as its text followed by a Markdown link (absolute
    `https://corteza.app/...` URLs), and the `cta` as `**[CTA]** <text>`. Generate it from the
    committed post so the two never differ, and regenerate it if a later commit changes the text.
11. If anything blocks you (build fails, no suitable topic), open no PR with a broken post: report what
    happened in the session's final message.

## Never

- Publish without a PR, or merge your own PR.
- Change pages other than the blog data, sitemap, llms.txt and the topics file.
- Claim anything outside `product-facts.md`, name customers, or criticize competitors by name.
