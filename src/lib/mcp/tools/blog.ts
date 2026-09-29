import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { posts } from "../../../data/blog";

const SITE = "https://corteza.app";

export const listBlogPostsTool = defineTool({
  name: "list_blog_posts",
  title: "List blog posts",
  description: "List all Corteza blog posts with slug, title, summary and date.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = posts.map((p) => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
      date: p.date,
      category: p.category,
      url: `${SITE}/blog/${p.slug}`,
    }));
    return { content: [{ type: "text", text: JSON.stringify(items, null, 2) }], structuredContent: { posts: items } };
  },
});

export const getBlogPostTool = defineTool({
  name: "get_blog_post",
  title: "Get blog post",
  description: "Get the full text of a Corteza blog post by its slug.",
  inputSchema: { slug: z.string().min(1).describe("Post slug from list_blog_posts.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const p = posts.find((x) => x.slug === slug);
    if (!p) throw new ToolError(`No blog post with slug "${slug}"`);
    const body = p.content
      .map((s) => {
        if (s.type === "h2") return `## ${s.text}`;
        if (s.type === "h3") return `### ${s.text}`;
        if (s.type === "ul" || s.type === "ol") return (s.items ?? []).map((i) => `- ${i}`).join("\n");
        if (s.type === "link") return `${s.text ?? ""} ${s.linkLabel ?? ""}: ${SITE}${s.href ?? ""}`;
        return s.text ?? "";
      })
      .join("\n\n");
    return { content: [{ type: "text", text: `# ${p.title}\n\n${body}\n\n${SITE}/blog/${p.slug}` }] };
  },
});
