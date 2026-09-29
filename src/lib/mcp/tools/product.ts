import { defineTool } from "@lovable.dev/mcp-js";
import { faqs } from "../../../data/faq";

export const getProductInfoTool = defineTool({
  name: "get_product_info",
  title: "Get Corteza product info",
  description: "Get an overview of Corteza, its FAQ, and links to the demo and early access.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const text = [
      "Corteza is your AI team memory: log relevant team decisions wherever you are, and search what was decided and why.",
      "Try the demo: https://app.corteza.app/demo",
      "Request early access: https://corteza.app/early-access",
      "",
      ...faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`),
    ].join("\n");
    return { content: [{ type: "text", text }] };
  },
});

export const getDecisionLogTemplateTool = defineTool({
  name: "get_decision_log_template",
  title: "Get decision log template",
  description: "Get Corteza's free decision log template (Markdown) and the Excel download link.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: [
          "# Decision Log",
          "| Date | ID | Title | Context / Problem | Options Considered | Decision | Reasoning | Owner | Status | Revisit Date | Source |",
          "|---|---|---|---|---|---|---|---|---|---|---|",
          "",
          "Status values: Proposed, Live, Superseded, Reversed.",
          "Excel version: https://corteza.app/decision-log-template.xlsx",
          "Guide: https://corteza.app/decision-log-template",
        ].join("\n"),
      },
    ],
  }),
});
