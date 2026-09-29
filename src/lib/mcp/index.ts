import { defineMcp } from "@lovable.dev/mcp-js";
import { getBlogPostTool, listBlogPostsTool } from "./tools/blog";
import { getDecisionLogTemplateTool, getProductInfoTool } from "./tools/product";

export default defineMcp({
  name: "corteza",
  title: "Corteza",
  version: "0.1.0",
  instructions:
    "Public info about Corteza, the AI team memory. Use get_product_info for an overview and FAQ, list_blog_posts / get_blog_post for articles, and get_decision_log_template for the free template.",
  tools: [getProductInfoTool, listBlogPostsTool, getBlogPostTool, getDecisionLogTemplateTool],
});
