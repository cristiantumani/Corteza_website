export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  content: BlogSection[];
}

export interface BlogSection {
  type: "h2" | "h3" | "p" | "ul" | "ol" | "callout" | "cta";
  text?: string;
  items?: string[];
  label?: string;
}

export const posts: BlogPost[] = [
  {
    slug: "why-your-team-keeps-remaking-the-same-decisions",
    title: "Why Your Team Keeps Re-Making the Same Decisions",
    description:
      "Most teams don't have a decision problem — they have a memory problem. Here's why institutional knowledge keeps disappearing, and what to do about it.",
    date: "2025-02-24",
    readTime: "6 min read",
    category: "Team Productivity",
    author: "Cristian Tumani",
    content: [
      {
        type: "p",
        text: "It starts innocuously. A new engineer joins the team and asks why the checkout flow doesn't support guest purchases. Someone sighs. \"We actually debated this for two weeks back in Q3,\" they say. \"Let me find the Slack thread.\"",
      },
      {
        type: "p",
        text: "Twenty minutes later, they've scrolled through 800 messages, found a vague reference to a Notion doc that no longer exists, and given up. The new engineer gets a five-minute verbal summary that misses half the context. Six months from now, the same debate will happen again.",
      },
      {
        type: "p",
        text: "This isn't a dysfunction of bad teams. It happens at some of the best product organisations in the world. The problem isn't that people make poor decisions — it's that decisions disappear.",
      },
      {
        type: "h2",
        text: "The three places decisions go to die",
      },
      {
        type: "p",
        text: "When a team makes a decision, it usually lives in one of three places — and all three are leaky.",
      },
      {
        type: "h3",
        text: "1. Slack threads",
      },
      {
        type: "p",
        text: "The decision was made in the moment, in a channel, buried among 40 other messages. The reasoning — the alternatives considered, the tradeoffs weighed — is somewhere in there, but finding it requires knowing exactly when it happened and which channel to look in. Most of the time, nobody can remember either.",
      },
      {
        type: "h3",
        text: "2. Someone's head",
      },
      {
        type: "p",
        text: "The most dangerous knowledge store of all. A senior engineer or product manager carries the reasoning for dozens of decisions in their memory. When they go on holiday, take a new role, or simply get pulled into another project, that knowledge walks out with them. Teams often don't notice until a new hire asks a question nobody can answer.",
      },
      {
        type: "h3",
        text: "3. A document nobody reads",
      },
      {
        type: "p",
        text: "Decision logs in Notion, Confluence, or Google Docs are well-intentioned but rarely maintained. Writing up a decision after the fact feels like overhead, so it happens inconsistently. Searching them requires knowing they exist, knowing what to search for, and trusting that whoever wrote the entry captured the full context — which they usually didn't.",
      },
      {
        type: "h2",
        text: "The real cost: decision fatigue and repeated work",
      },
      {
        type: "p",
        text: "When decisions aren't preserved properly, teams pay a compounding tax in three ways:",
      },
      {
        type: "ul",
        items: [
          "Re-litigation: The same debate happens again, consuming meeting time and creating friction between people who remember different versions of what was decided.",
          "Context loss: New team members take months longer to become effective because they can't access the reasoning behind the product they're working on.",
          "Decision inconsistency: Without a shared record, different parts of the team make decisions that contradict each other — often without realising it.",
        ],
      },
      {
        type: "p",
        text: "A 2023 IDC study estimated that knowledge workers spend an average of 2.5 hours per day searching for information. For a product team of ten people, that's roughly 125 hours a week — more than three full-time employees — spent on retrieval instead of creation.",
      },
      {
        type: "h2",
        text: "Why documentation tools don't solve this",
      },
      {
        type: "p",
        text: "The instinct is to buy a documentation tool. But documentation tools solve a different problem. They're built for content you plan to write — product specs, runbooks, onboarding guides. They're not built for capturing the thousands of small decisions that happen in conversation every week.",
      },
      {
        type: "p",
        text: "The friction is the problem. If capturing a decision requires opening a different app, finding the right page, filling in a template, and tagging it correctly — most of the time it won't happen. Especially not in the moment when the decision is made and the context is fresh.",
      },
      {
        type: "callout",
        label: "The key insight",
        text: "The best decision capture systems work where the decision already happens — in conversation — not as a separate step that requires switching contexts.",
      },
      {
        type: "h2",
        text: "What actually works: capture at the point of decision",
      },
      {
        type: "p",
        text: "The teams that handle this well share one characteristic: they've made capturing decisions almost effortless. Not a process, not a template — a single action that takes less time than sending a message.",
      },
      {
        type: "p",
        text: "Some do this with a dedicated Slack channel where decisions are posted in a structured format. Others use tools that integrate directly into their workflow and extract decisions automatically from conversations and meeting notes.",
      },
      {
        type: "p",
        text: "The format matters less than the friction. If capturing takes more than 30 seconds, it won't happen consistently. And consistency is everything — a decision log that's 60% complete is almost as useless as no log at all, because you can never trust it.",
      },
      {
        type: "h2",
        text: "Making decisions searchable — and conversational",
      },
      {
        type: "p",
        text: "Capturing decisions is only half the problem. The other half is retrieval. A log that requires you to remember what you're looking for isn't much better than a Slack archive.",
      },
      {
        type: "p",
        text: "This is where AI changes the equation. Instead of searching for keywords, teams can ask questions in plain English: \"Why did we decide not to support guest checkout?\" or \"What were the alternatives we considered for the notification system?\" The answer comes back as a response, not a list of documents to read.",
      },
      {
        type: "p",
        text: "The goal is to make your team's institutional knowledge as easy to access as asking a knowledgeable colleague — one who happened to be present for every decision the team ever made.",
      },
      {
        type: "h2",
        text: "Start small, then build the habit",
      },
      {
        type: "p",
        text: "You don't need to retroactively document five years of decisions. Start with new decisions, made from today. Pick one channel — your main product channel or a dedicated #decisions channel — and commit to capturing every significant decision made there for 30 days.",
      },
      {
        type: "p",
        text: "At the end of 30 days, you'll have a searchable record of everything that mattered that month. New team members will be able to get up to speed in hours instead of weeks. And the next time someone asks \"why did we decide X?\", you'll have an answer.",
      },
      {
        type: "cta",
        text: "See how Corteza captures decisions automatically — and makes them searchable for your whole team.",
      },
    ],
  },
  {
    slug: "how-to-document-team-decisions-without-slowing-down",
    title: "How to Document Team Decisions Without Slowing Down",
    description:
      "Most decision documentation processes create more overhead than value. Here's a lightweight framework that actually gets used — and a template to get you started.",
    date: "2025-02-24",
    readTime: "7 min read",
    category: "Processes & Tools",
    author: "Cristian Tumani",
    content: [
      {
        type: "p",
        text: "Every team knows they should document their decisions. Very few actually do it consistently. The gap between knowing and doing comes down to one thing: friction.",
      },
      {
        type: "p",
        text: "Traditional documentation processes ask too much. Open Confluence. Find the right space. Create a new page. Fill in the template. Add the right tags. Link it from the project page. By the time you've done all that, the meeting is over, you're in the next one, and the decision — along with all the context behind it — is already fading.",
      },
      {
        type: "p",
        text: "This guide is about building a documentation habit that's light enough to actually stick, and structured enough to be useful when you need it six months later.",
      },
      {
        type: "h2",
        text: "What actually needs to be captured",
      },
      {
        type: "p",
        text: "Most documentation templates ask for too much. The goal isn't a comprehensive record — it's the minimum information needed to reconstruct the reasoning in the future. That means three things:",
      },
      {
        type: "ul",
        items: [
          "What was decided (the actual decision, stated clearly)",
          "Why it was decided (the key reasons, not an essay)",
          "What was considered but rejected (the alternatives — this is the part most teams skip, and the part that's most valuable later)",
        ],
      },
      {
        type: "p",
        text: "Everything else — who was in the room, what the date was, what the broader context was — is nice to have but not essential. If you try to capture everything, you'll end up capturing nothing.",
      },
      {
        type: "h2",
        text: "The lightweight decision entry format",
      },
      {
        type: "p",
        text: "Here's the format we've found works best. It takes under two minutes to fill in and contains everything you need:",
      },
      {
        type: "callout",
        label: "Decision template",
        text: "Decision: [What was decided, in one sentence]\nWhy: [The key reason or reasons — 1-3 sentences]\nAlternatives considered: [What else was on the table and why it was rejected]",
      },
      {
        type: "p",
        text: "That's it. No status fields, no owner fields, no priority rankings. Just the three things that matter.",
      },
      {
        type: "p",
        text: "Here's what it looks like in practice:",
      },
      {
        type: "callout",
        label: "Example",
        text: "Decision: We'll support guest checkout without requiring account creation.\nWhy: Checkout abandonment data showed 34% of users dropped off at the account creation step. Reducing friction at this point is our highest-leverage conversion improvement.\nAlternatives considered: We considered requiring account creation to improve email capture and long-term retention, but decided the conversion loss outweighed the retention benefit at our current stage. We also considered making account creation optional post-purchase, which we'll revisit in Q3.",
      },
      {
        type: "h2",
        text: "Where to capture decisions",
      },
      {
        type: "p",
        text: "The location matters more than the format. The best location is wherever your team already communicates — not a separate tool that requires a context switch.",
      },
      {
        type: "h3",
        text: "Option 1: A dedicated Slack channel",
      },
      {
        type: "p",
        text: "Create a #decisions channel and establish a norm: any significant decision gets posted there in the template format within 24 hours of being made. Pin the template to the channel. The channel becomes a chronological log that anyone can search.",
      },
      {
        type: "p",
        text: "The limitation: Slack search is notoriously bad. Finding a decision from eight months ago requires remembering the exact words used — which defeats the purpose.",
      },
      {
        type: "h3",
        text: "Option 2: A shared document",
      },
      {
        type: "p",
        text: "A Google Doc or Notion page with entries added in reverse chronological order (newest at the top). Simple, searchable, and doesn't require any new tools.",
      },
      {
        type: "p",
        text: "The limitation: Maintenance. Someone needs to own it. When that person leaves or gets busy, the doc stops being updated. And keyword search still requires knowing what you're looking for.",
      },
      {
        type: "h3",
        text: "Option 3: A purpose-built tool",
      },
      {
        type: "p",
        text: "Tools built specifically for decision logging — like Corteza — integrate directly into Slack, capture entries with a single command, and make them searchable with natural language. The tradeoff is that it's another tool to adopt, though the best ones are designed to require almost no behaviour change.",
      },
      {
        type: "h2",
        text: "How to build the habit across your team",
      },
      {
        type: "p",
        text: "Individual discipline isn't enough — decision documentation needs to be a team norm. Here's how to establish one without making it feel like overhead:",
      },
      {
        type: "h3",
        text: "1. Start at the end of meetings",
      },
      {
        type: "p",
        text: "Reserve the last two minutes of any meeting where a decision was made to log it. Don't rely on async follow-up — the context is warmest in the room. Whoever made the decision fills in the template while everyone else is still present to correct any inaccuracies.",
      },
      {
        type: "h3",
        text: "2. Make it the meeting chair's job",
      },
      {
        type: "p",
        text: "If your meetings have a designated facilitator or note-taker, add decision logging to their responsibilities. Not writing up minutes — just the three-field template for any decision that was reached.",
      },
      {
        type: "h3",
        text: "3. Reward retrieval, not just capture",
      },
      {
        type: "p",
        text: "When someone successfully uses the decision log to answer a question — \"I just checked our records and we actually debated this in April, here's what we decided\" — acknowledge it publicly. It reinforces that the log is useful, not just an obligation.",
      },
      {
        type: "h3",
        text: "4. Do a monthly review for the first three months",
      },
      {
        type: "p",
        text: "Set a recurring calendar event for the first Friday of each month to review what was captured. Are decisions being logged consistently? Are the entries useful? Is anything missing? After three months, the habit is usually established and the review can stop.",
      },
      {
        type: "h2",
        text: "The free decision log template",
      },
      {
        type: "p",
        text: "To help you get started, here's a simple structure you can copy into a Notion page, Google Doc, or Confluence space today:",
      },
      {
        type: "callout",
        label: "Decision Log Template",
        text: "# [Project or Team Name] Decision Log\n\n## [Date] — [Decision title]\n**Decision:** \n**Why:** \n**Alternatives considered:** \n**Logged by:** \n\n---",
      },
      {
        type: "p",
        text: "Add new entries at the top, oldest at the bottom. Keep it in a shared location everyone has access to. Link it from your team's main Notion page or Slack channel description.",
      },
      {
        type: "h2",
        text: "When manual processes reach their limits",
      },
      {
        type: "p",
        text: "A manual decision log works well for small teams making a handful of decisions per week. At scale — or when the team grows or changes rapidly — it breaks down. Entries get missed. People forget to check it. New hires don't know it exists.",
      },
      {
        type: "p",
        text: "At that point, the value of automation becomes clear. If decisions are captured automatically — from Slack conversations, meeting notes, or document uploads — and made searchable with AI, the burden shifts from the team to the tool. The habit doesn't need to be maintained because the capture happens by default.",
      },
      {
        type: "cta",
        text: "Skip the manual process — Corteza captures decisions automatically from Slack and makes them searchable for your whole team.",
      },
    ],
  },
  {
    slug: "the-hidden-cost-of-lost-context-when-engineers-join-your-team",
    title: "The Hidden Cost of Lost Context When Engineers Join Your Team",
    description:
      "New engineers take 3–6 months to become fully productive. Most of that time is spent reconstructing decisions already made. Here's what it costs — and how to fix it.",
    date: "2025-02-24",
    readTime: "8 min read",
    category: "Engineering Leadership",
    author: "Cristian Tumani",
    content: [
      {
        type: "p",
        text: "Hiring a senior engineer is expensive. The salary, the recruiter fees, the interview time — by the time someone joins, most teams have invested $30,000–$50,000 before they've written a single line of code. Then comes the hidden cost: the months it takes for that engineer to become genuinely productive.",
      },
      {
        type: "p",
        text: "Industry benchmarks typically quote 3–6 months for a senior hire to reach full productivity. But when you ask teams why it takes that long, the answer is almost never \"the codebase is too complex\" or \"they needed to learn our tech stack.\" It's almost always some version of: \"they needed to understand why we built things the way we did.\"",
      },
      {
        type: "p",
        text: "That's a context problem. And it's one that most teams are accidentally making worse.",
      },
      {
        type: "h2",
        text: "What new engineers are actually doing in their first months",
      },
      {
        type: "p",
        text: "A new engineer joins a team with a codebase full of decisions they weren't part of. Some of those decisions are obvious from the code itself. Most aren't.",
      },
      {
        type: "p",
        text: "Why is this service written in Go when everything else is Python? Why does the checkout flow make two separate API calls instead of one? Why is this component so much more complex than it needs to be? Each of these questions represents a decision that was made deliberately — but the reasoning wasn't preserved anywhere accessible.",
      },
      {
        type: "p",
        text: "So the new engineer does one of three things:",
      },
      {
        type: "ol",
        items: [
          "Asks a colleague, pulling them out of focus to explain something they've explained five times before",
          "Digs through Slack history, Confluence pages, and GitHub PRs trying to reconstruct the context — often failing",
          "Makes assumptions and proceeds without full context, sometimes making a change that contradicts an earlier decision",
        ],
      },
      {
        type: "p",
        text: "All three have a cost. The first taxes senior team members. The second wastes the new engineer's time. The third creates technical debt and sometimes requires reversing work that was done in good faith.",
      },
      {
        type: "h2",
        text: "The compounding effect on team velocity",
      },
      {
        type: "p",
        text: "The individual cost of each knowledge gap is small. An hour here, a conversation there. But these gaps happen dozens of times per month, across every new hire, for every month of their ramp period. The aggregate is significant.",
      },
      {
        type: "p",
        text: "There's also a less visible cost: the decisions the new engineer doesn't ask about, either because they don't know they're missing context or because they don't want to seem uninformed. These are the ones that create silent technical debt — code that works but was written without understanding the constraints that shaped the surrounding system.",
      },
      {
        type: "callout",
        label: "The real cost of a context gap",
        text: "A senior engineer earning £120,000/year costs roughly £575/day. If lost context costs them 30 minutes per day for the first 90 days, that's 45 hours — or about £3,450 in productivity lost on context retrieval alone, before counting the cost of their colleagues' time.",
      },
      {
        type: "h2",
        text: "Why existing solutions don't fully work",
      },
      {
        type: "h3",
        text: "The onboarding doc",
      },
      {
        type: "p",
        text: "Almost every team has one. It covers the tech stack, the local setup, the deployment process, the Slack channels to join. What it almost never covers is the reasoning behind the product and architectural decisions that shape the codebase. Even when teams intend to include this, it quickly becomes outdated and nobody maintains it.",
      },
      {
        type: "h3",
        text: "The buddy system",
      },
      {
        type: "p",
        text: "Pairing a new hire with a senior engineer is helpful. But the senior engineer can only share the context they personally remember — which is a fraction of the total institutional knowledge, filtered through one person's perspective. And it scales poorly: every new hire needs a buddy, which taxes your most experienced people continuously.",
      },
      {
        type: "h3",
        text: "ADRs (Architecture Decision Records)",
      },
      {
        type: "p",
        text: "A good practice. But ADRs typically cover only significant architectural decisions — not the hundreds of smaller product, UX, and process decisions that also shape how a team works. They require discipline to maintain, live in a specific format, and are often incomplete or out of date. And searching them requires knowing what to look for.",
      },
      {
        type: "h2",
        text: "What good context transfer looks like",
      },
      {
        type: "p",
        text: "The teams that onboard engineers fastest have one thing in common: a searchable record of the reasoning behind their decisions, that new hires can query without bothering colleagues.",
      },
      {
        type: "p",
        text: "The best implementations let a new engineer type a question — \"why do we use a separate service for notifications instead of handling it in the monolith?\" — and get a direct answer with the context they need, in under a minute. No ticket, no Slack message, no waiting.",
      },
      {
        type: "p",
        text: "This requires two things working together: consistent capture of decisions as they're made, and retrieval that understands natural language rather than requiring exact keyword matches.",
      },
      {
        type: "h2",
        text: "Practical steps to reduce context loss during onboarding",
      },
      {
        type: "h3",
        text: "1. Add a 'why' section to every PR description",
      },
      {
        type: "p",
        text: "The most underused onboarding resource is your PR history. Most PR descriptions explain what changed — not why. Add a template to your repo that requires a 'Context and reasoning' section. Three sentences is enough. Over time, this creates a searchable history of technical decisions tied directly to the code.",
      },
      {
        type: "h3",
        text: "2. Run a monthly 'decisions review' in your team meeting",
      },
      {
        type: "p",
        text: "At the start of each month, spend 10 minutes reviewing the significant decisions made last month. What did we decide? Why? What should new team members know? This both reinforces the decisions for existing team members and creates a natural opportunity to capture anything that wasn't recorded at the time.",
      },
      {
        type: "h3",
        text: "3. Build a searchable decision log and make it part of onboarding",
      },
      {
        type: "p",
        text: "Not just a document to read — a system to query. On day one, show new engineers how to search for context. Give them a set of starter questions: \"Why did we choose our current database architecture?\" \"What's the reasoning behind our current pricing structure?\" Let them discover the institutional knowledge on their own terms.",
      },
      {
        type: "h3",
        text: "4. Instrument where new hires get stuck",
      },
      {
        type: "p",
        text: "In the first 30 days, have new engineers log every question they needed to ask a colleague. At the end of the month, review the list. Which questions came up most? Which took the longest to answer? These are the gaps in your institutional knowledge that most need to be documented.",
      },
      {
        type: "h2",
        text: "The long-term return",
      },
      {
        type: "p",
        text: "Teams that invest in decision capture don't just onboard faster. They also make better decisions over time. When the reasoning behind past choices is accessible, teams can learn from them — noticing patterns, avoiding repeated mistakes, and building on what worked.",
      },
      {
        type: "p",
        text: "The compounding effect runs in both directions. Poor knowledge management compounds into slower onboarding, repeated debates, and technical debt. Good knowledge management compounds into faster ramp-up, better decisions, and a team that gets stronger as it grows.",
      },
      {
        type: "p",
        text: "You hired great engineers. Give them the context they need to be great from day one.",
      },
      {
        type: "cta",
        text: "Corteza captures your team's decisions as they happen and makes them searchable — so new engineers can find the context they need without interrupting their colleagues.",
      },
    ],
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  posts.find((p) => p.slug === slug);
