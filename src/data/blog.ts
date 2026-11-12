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
  type: "h2" | "h3" | "p" | "ul" | "ol" | "callout" | "cta" | "link";
  text?: string;
  items?: string[];
  label?: string;
  href?: string;
  linkLabel?: string;
}

export const posts: BlogPost[] = [
  {
    slug: "decision-ownership",
    title: "Decision Ownership: Who Owns a Decision in a Small Team?",
    description:
      "Decision ownership in small teams: what a decision owner does, how DACI and RAPID handle it, and a simple way to name one owner for every decision that matters.",
    date: "2026-11-12",
    readTime: "6 min read",
    category: "Team Productivity",
    author: "Cristian Tumani",
    content: [
      {
        type: "p",
        text: "Product thinks marketing is deciding the new pricing page. Marketing is waiting for product to sign off. The founder assumes it shipped last week. Three smart people, one simple decision, and nothing has happened for a month. This is what missing decision ownership looks like in a small team: not conflict, just a gap where everyone reasonably assumes someone else has it.",
      },
      {
        type: "p",
        text: "This post covers what a decision owner actually does, what frameworks like DACI and RAPID get right, a lighter version that suits teams of 10 to 100 people, and the mistakes that quietly undo it.",
      },
      {
        type: "h2",
        text: "What decision ownership means",
      },
      {
        type: "p",
        text: "The owner of a decision is the one person who makes the call, after hearing the input that matters, and then answers for it. Three things come with the role:",
      },
      {
        type: "ul",
        items: [
          "Making the call, by a date, even when the information isn't perfect.",
          "Saying it clearly: what was decided, why, and what it means for the people affected.",
          "Being the person others go to if the decision needs revisiting.",
        ],
      },
      {
        type: "p",
        text: "Decision ownership isn't the same as doing the work. The person who decides to change the pricing page may not be the one who updates it. And it isn't automatically the most senior person in the room. In a healthy team, most decisions are owned by whoever is closest to the problem and will live with the consequences.",
      },
      {
        type: "h2",
        text: "Why small teams struggle with it",
      },
      {
        type: "p",
        text: "Large organisations have the opposite problem: too many approvers. Small teams usually have too few named owners, for understandable reasons:",
      },
      {
        type: "ul",
        items: [
          "Everyone is in every meeting, so decisions default to consensus. When nobody objects, it feels decided, but nobody owns it.",
          "The founder is the default decider for everything, which works at five people and becomes a bottleneck at twenty-five.",
          "Roles change faster than titles. Who decides about onboarding now that there's a customer success lead, the product manager or the new lead?",
          "\"Let's decide async\" means a thread that nobody closes.",
          "The last person to speak, or the most confident, ends up deciding by accident.",
        ],
      },
      {
        type: "h2",
        text: "What DACI and RAPID get right",
      },
      {
        type: "p",
        text: "There are several frameworks for assigning decision roles. Two of the best known:",
      },
      {
        type: "ul",
        items: [
          "DACI: a Driver who moves the decision forward, one Approver who makes the final call, Contributors who give input, and Informed people who hear about the outcome.",
          "RAPID, from Bain & Company: people who Recommend, Agree, Perform, give Input, and one person who Decides.",
        ],
      },
      {
        type: "p",
        text: "The details differ, but they share the part that matters: exactly one person has the final say on each decision. Everyone else contributes, agrees, executes or is informed, and knows which. RAPID's Agree role is worth borrowing on its own: it names the few people, often legal or finance, whose sign-off is genuinely required. Most decisions don't need one.",
      },
      {
        type: "p",
        text: "For a small team, the full frameworks can feel like paperwork. A lighter version works for most decisions: one Owner, the people who give Input, and the people who need to be Informed. Three lines, written down before the discussion starts.",
      },
      {
        type: "callout",
        label: "The key takeaway",
        text: "Every decision that matters needs exactly one named owner before the discussion starts: the person who will make the call by a date, say it clearly, and answer for it. Input from many people is good; ownership by many people is how decisions stall.",
      },
      {
        type: "h2",
        text: "How to assign decision ownership",
      },
      {
        type: "p",
        text: "You don't need a matrix for every team. You need a habit for every decision that's worth more than a quick chat:",
      },
      {
        type: "ol",
        items: [
          "Name the decision as a question. \"Do we redesign the pricing page before the Q1 campaign?\" is something someone can own. \"Pricing page\" isn't.",
          "Name the owner before discussing it. Pick the person closest to the problem who has the authority to act on it. If nobody has that authority, that's the first thing to fix.",
          "Set a decide-by date. Without one, the decision drifts until it's made for you.",
          "List who gives input. The owner asks them; they don't need to agree, but they need to be heard.",
          "The owner announces the decision and the reason, in the meeting or in writing, to everyone affected.",
          "Record it where people will look for it, with the owner's name next to it.",
        ],
      },
      {
        type: "h3",
        text: "An example",
      },
      {
        type: "p",
        text: "In a weekly leadership meeting, the pricing page comes up again. This time, the CEO stops the discussion: \"Who owns this?\" They agree it's Lucía, the head of marketing, because the page is part of her Q1 campaign. Input: product (what's changing in the plans) and sales (what customers ask about). Informed: the whole team. Decide-by: next Thursday. On Thursday, Lucía posts in the team channel: redesign the page before the campaign, with the new plan comparison; product reviews the copy by the 20th. The month-long stall ends in a week.",
      },
      {
        type: "h2",
        text: "Decision owner vs action item owner",
      },
      {
        type: "p",
        text: "Both are called \"owner\", and that causes confusion:",
      },
      {
        type: "ul",
        items: [
          "The decision owner decides what happens and answers for the choice. There's one per decision.",
          "Action item owners do the work that follows. One decision usually creates several action items, each with its own owner and date.",
          "The person who raised an open question is not necessarily its owner either. Someone still has to chase the answer.",
        ],
      },
      {
        type: "p",
        text: "Keeping these apart makes follow-up much clearer. \"Lucía decided; Diego updates the page by the 15th; product reviews the copy by the 20th\" leaves no room for \"I thought you had it\".",
      },
      {
        type: "link",
        text: "Open questions need an owner too: how to track the questions and risks a meeting leaves behind.",
        href: "/blog/tracking-open-questions-and-risks",
        linkLabel: "How to track open questions and risks after meetings",
      },
      {
        type: "h2",
        text: "When a decision needs revisiting",
      },
      {
        type: "p",
        text: "Owners will sometimes be wrong, and that's fine. What matters is how decisions get reopened. A few rules help:",
      },
      {
        type: "ul",
        items: [
          "Reopen for new information, not because someone missed the meeting. \"I wasn't there\" is a reason to explain the decision, not to remake it.",
          "Go through the owner. They can reopen it, or hand it to someone else.",
          "Disagree and commit. Once the owner has decided, people who disagreed say so and then support it, instead of slowly working around it.",
          "Record the change, with the reason. The new decision should point to the old one, so nobody finds the outdated version first.",
        ],
      },
      {
        type: "h2",
        text: "Common mistakes",
      },
      {
        type: "ul",
        items: [
          "Two owners. \"Ana and Diego will decide\" means each waits for the other.",
          "The owner is whoever raised it. Raising a problem shouldn't mean you're stuck with deciding it.",
          "Ownership by committee. A group can give input; one person decides.",
          "Hidden decisions. A call made in a DM, never announced, isn't a decision the team can follow.",
          "No record. If nobody can find who decided and why, the decision will be made again, probably by someone else.",
        ],
      },
      {
        type: "link",
        text: "A lightweight way to write decisions down, owner included, without slowing the team down.",
        href: "/blog/how-to-document-team-decisions-without-slowing-down",
        linkLabel: "How to document team decisions without slowing down",
      },
      {
        type: "h2",
        text: "Keeping owners visible after the meeting",
      },
      {
        type: "p",
        text: "Naming an owner in the meeting is the easy part. Remembering it three weeks later is harder. For teams on Google Meet, Corteza captures decisions and action items from each meeting, with the meeting they came from, a short quote as evidence, and the owner and due date when they were said. Anyone can ask \"What's pending from Lucía?\" and get the answer with its sources. And when an owner settles something, they can type the decision, like \"We decided not to redesign the pricing page this quarter\", and Corteza finds the open questions, risks and action items it settles, and closes them once they confirm.",
      },
      {
        type: "cta",
        text: "Corteza keeps every decision from your Google Meet meetings with its owner and its evidence, so nobody has to ask who decided. Request early access to the private beta, free during the beta.",
      },
    ],
  },
  {
    slug: "tracking-open-questions-and-risks",
    title: "How to Track Open Questions and Risks After Meetings",
    description:
      "A practical guide to tracking open questions and risks after meetings: what to capture, how to give each one a next step, and a weekly review that closes them.",
    date: "2026-11-09",
    readTime: "6 min read",
    category: "Processes & Tools",
    author: "Cristian Tumani",
    content: [
      {
        type: "p",
        text: "In March, someone in the product review asks: \"Can we even store EU customer data in our US region?\" Everyone agrees it's a good question. Someone says \"let's check with legal\". In September, two weeks before launch, it comes back as a blocker. Nobody owned it, so nobody asked. Tracking open questions and risks is the least glamorous part of running meetings, and one of the most expensive to skip.",
      },
      {
        type: "p",
        text: "Teams have got reasonably good at action items. Questions and risks are different: they don't come with a task attached, they rarely have a date, and they're easy to note down once and never see again. This guide covers what to capture, how to make sure each one moves, and a short weekly review that closes them.",
      },
      {
        type: "h2",
        text: "Why open questions and risks get lost",
      },
      {
        type: "ul",
        items: [
          "They aren't tasks. \"Do we support SSO in v1?\" isn't something anyone can tick off. Without a task attached, it lands in nobody's list.",
          "Nobody owns them. A question raised in a meeting belongs to the meeting, which means it belongs to no one once the meeting ends.",
          "They have no natural deadline. Action items get dates; questions just wait, until they turn into a blocker.",
          "Notes record them once. The question appears in the notes of the meeting where it was raised, and nowhere else. The answer, if it comes, appears in the notes of a different meeting.",
          "Risks feel like worries, not work. \"The vendor might not deliver in time\" gets nods, not an owner.",
        ],
      },
      {
        type: "h2",
        text: "What to capture for each open question and risk",
      },
      {
        type: "p",
        text: "Keep the record short, but don't skip the fields that make it actionable:",
      },
      {
        type: "ul",
        items: [
          "The question or risk, in one sentence anyone can understand outside the meeting.",
          "Who raised it, and when. The date matters: a question's age is the best signal of whether it's being ignored.",
          "Who has to answer it, or who owns the risk. One person, even if the answer needs others.",
          "The next step: the concrete action that moves it forward, with its own owner and date.",
          "For risks: what happens if it materialises, and what you're doing about it.",
          "Status: open, answered (with the answer), mitigated (with how), or accepted (with why).",
        ],
      },
      {
        type: "h3",
        text: "Every open item needs a next step",
      },
      {
        type: "p",
        text: "This is the single most useful habit. \"Can we store EU data in the US region?\" is a question. \"Ana sends the question to legal with our current setup by Friday\" is a next step. The question stays open, but now something is happening, and there's a name and a date to ask about.",
      },
      {
        type: "p",
        text: "The same goes for risks. \"The vendor might be late\" becomes \"Marco asks the vendor for a written delivery date this week, and we decide on a fallback if it's after the 20th\". A risk with a next step is being managed. A risk without one is just being remembered.",
      },
      {
        type: "p",
        text: "Pick the owner deliberately. It's usually not the person who raised the question, and not the person who will eventually answer it if they're outside the team. It's the person inside the team who will chase the answer and bring it back. For the legal question, that's whoever needs the answer to ship, not the lawyer.",
      },
      {
        type: "callout",
        label: "The key takeaway",
        text: "An open question or risk without a next step is a hope. Give each one an owner, a concrete next action with a date, and a status that says how it ended: answered, mitigated or accepted, with the reason written down.",
      },
      {
        type: "h2",
        text: "Open questions, risks and action items: what's the difference?",
      },
      {
        type: "p",
        text: "They're easy to mix up, and they need slightly different handling:",
      },
      {
        type: "ul",
        items: [
          "An action item is something someone will do: \"Update the pricing page by Thursday.\" It ends when it's done.",
          "An open question is something the team doesn't know yet and needs to: \"Which plan includes SSO?\" It ends when it's answered, often by a decision.",
          "A risk is something that might go wrong: \"Peak traffic could exceed what the database handles.\" It ends when it's mitigated, accepted, or no longer possible.",
        ],
      },
      {
        type: "p",
        text: "Questions and risks usually generate action items, the next steps, and get closed by decisions. Keeping them together, by subject, is what lets you see where a topic actually stands: the question, the risks around it, what's being done, and what was decided.",
      },
      {
        type: "h2",
        text: "Where to track them",
      },
      {
        type: "p",
        text: "Project managers often use a RAID log, a single register of risks, assumptions, issues and dependencies (some versions swap in actions and decisions). It works well for formal projects. For most teams, something lighter is enough:",
      },
      {
        type: "ul",
        items: [
          "One shared list per team, not one per meeting. A spreadsheet or a database with the fields above is fine.",
          "Group items by subject, not by date. \"EU data residency\" should show its question, its risks and its next steps together.",
          "Link to the meeting where each item was raised, so anyone can check the original context.",
          "Keep it next to your decision log. Many open questions are closed by a decision, and the two should point to each other.",
        ],
      },
      {
        type: "h2",
        text: "A weekly review that keeps them moving",
      },
      {
        type: "p",
        text: "Ten minutes a week, usually at the start of the team meeting, is enough to keep the list honest:",
      },
      {
        type: "ol",
        items: [
          "Sort by age, oldest first. Anything open for more than three or four weeks gets attention before anything else.",
          "Check every item has a next step. If it doesn't, give it one now, or decide it doesn't matter and close it.",
          "Record answers as they come in. When a question is answered, write the answer next to it and link the decision, if there was one.",
          "Re-check the risks. Has any become more likely, or more serious? Has any stopped being possible?",
          "Escalate what's stuck. A question waiting on someone outside the team for weeks needs a different route, not another reminder.",
        ],
      },
      {
        type: "link",
        text: "A weekly meeting format that opens with what's still open from last week, questions and risks included.",
        href: "/blog/weekly-team-meeting-agenda",
        linkLabel: "A weekly team meeting agenda that starts with what's open",
      },
      {
        type: "h2",
        text: "Closing them properly",
      },
      {
        type: "p",
        text: "How an item is closed matters as much as how it's opened. Three rules help:",
      },
      {
        type: "ul",
        items: [
          "Always write down the answer or the mitigation. \"Closed\" with no explanation is how the same question comes back in six months.",
          "\"Accepted\" is a valid outcome for a risk. Sometimes the right call is to live with it. Say so, and say why.",
          "Allow reopening. If an answer turns out to be wrong, or a mitigated risk returns, reopen the item instead of creating a new one, so the history stays in one place.",
        ],
      },
      {
        type: "p",
        text: "Questions closed without an answer are one of the main reasons teams end up debating the same thing twice.",
      },
      {
        type: "link",
        text: "Why teams keep revisiting settled topics, and what to do about it.",
        href: "/blog/why-your-team-keeps-remaking-the-same-decisions",
        linkLabel: "Why your team keeps re-making the same decisions",
      },
      {
        type: "h2",
        text: "Capturing them without extra work",
      },
      {
        type: "p",
        text: "The hard part is writing questions and risks down at all, because they come up mid-conversation and nobody is taking notes for them. For teams on Google Meet, Corteza captures open questions and risks from each meeting's transcript or Gemini notes, with who raised them and the meeting they came from. Each one shows how long it has been open and its next step, or \"No next step\" when it has none. You mark a question answered with the answer, or a risk mitigated with how, and can reopen either. A question, its risks and the decisions about the same subject stay together, so a decision can be used as the answer.",
      },
      {
        type: "cta",
        text: "Corteza keeps track of the questions and risks your Google Meet meetings leave behind, so they get answered before they become blockers. Request early access to the private beta, free during the beta.",
      },
    ],
  },
  {
    slug: "weekly-team-meeting-agenda",
    title: "A Weekly Team Meeting Agenda That Starts With What's Open",
    description:
      "A weekly team meeting agenda that starts with what's still open from last week: a 45-minute format, a copy-paste template and the rules that keep it useful.",
    date: "2026-11-05",
    readTime: "6 min read",
    category: "Team Productivity",
    author: "Cristian Tumani",
    content: [
      {
        type: "p",
        text: "Tuesday, 10:00. The weekly team meeting starts with a round of updates. Eight people, five minutes each, mostly things everyone could have read. Somebody raises a real question at 10:42, there's no time to settle it, and it rolls into next week. Last week's action items never come up at all. If that sounds familiar, the problem usually isn't the people. It's the weekly team meeting agenda, or the lack of one.",
      },
      {
        type: "p",
        text: "Most agenda templates list sections: updates, discussion, action items. This post suggests a different order: start with what's still open from last week, spend most of the time on decisions, and push everything else out of the room. You'll get a 45-minute format, a template to copy, and the few rules that keep it working after week three.",
      },
      {
        type: "h2",
        text: "Why weekly team meetings drift",
      },
      {
        type: "ul",
        items: [
          "Round-robin updates eat the time. They feel productive, but most of them are information that could have been read in two minutes before the meeting.",
          "Nothing connects one week to the next. Each meeting starts fresh, so last week's commitments and open questions quietly disappear.",
          "The agenda is written at 9:58, if at all. Topics arrive without context, and nobody has prepared.",
          "Decisions happen but aren't stated. The group nods, moves on, and three people leave with three different understandings.",
          "Hard topics go last. The one discussion that mattered gets the final eight minutes.",
        ],
      },
      {
        type: "h2",
        text: "A weekly team meeting agenda that starts with what's open",
      },
      {
        type: "p",
        text: "Here's a 45-minute format for a team of five to ten people. Adjust the minutes, but keep the order:",
      },
      {
        type: "ol",
        items: [
          "Open from last week (10 minutes). Go through last week's action items: done, blocked or dropped. Then the open questions and risks: has anything been answered, or got worse? This is the part most teams skip, and the one that makes the meeting a series instead of a string of separate events.",
          "Signals (5 minutes). Two or three numbers or facts that tell the team how things are going, such as a metric, a deadline or a customer issue. Only what changed, not a full report.",
          "Decisions needed (20 minutes). Topics added in advance, each with an owner and the specific question the group needs to answer. Most important first. This is what the meeting is for.",
          "Heads-ups (5 minutes). Short announcements that need no discussion. If one turns into a debate, it becomes a topic for next week.",
          "Wrap-up (5 minutes). Read back what was decided and every new action item, with one owner and a date each. This is next week's first section.",
        ],
      },
      {
        type: "callout",
        label: "The key takeaway",
        text: "Open with what's still open from last week, spend most of the meeting on decisions, and close by reading back owners and dates. The wrap-up of one meeting becomes the opening of the next, and nothing falls between weeks.",
      },
      {
        type: "h3",
        text: "A template to copy",
      },
      {
        type: "p",
        text: "Use one running document for the meeting, newest week at the top, so last week's wrap-up is right below this week's agenda:",
      },
      {
        type: "ul",
        items: [
          "Date · facilitator · note-taker",
          "1. Open from last week: each action item with owner and status (done / blocked / dropped); each open question or risk with what changed",
          "2. Signals: two or three lines, only what changed",
          "3. Decisions needed: topic · owner · the question to decide · decision (written in the meeting)",
          "4. Heads-ups: one line each, no discussion",
          "5. Wrap-up: decisions made today; new action items with owner and date",
          "Parking lot: topics for another week or another meeting",
        ],
      },
      {
        type: "h3",
        text: "What it sounds like in practice",
      },
      {
        type: "p",
        text: "An operations team of seven, Tuesday morning. Open from last week takes eight minutes: the carrier contract renewal is done; the warehouse staffing plan is blocked waiting on finance; the idea of a second support shift is dropped, because ticket volume went down. One open question, whether to move returns to a new provider, got an answer in another meeting: not this quarter. One risk got worse: the peak-season forecast is 20% above last year's.",
      },
      {
        type: "p",
        text: "Signals: on-time delivery, open tickets, and that forecast. Decisions needed: two topics, both submitted the day before. Whether to hire two temporary staff for peak (decided: yes, Laura owns it, offers out by the 15th), and whether to pause the new packaging rollout until January (not decided, needs numbers from the supplier; Marco brings them next week). Heads-ups: an office move date. Wrap-up: two decisions, three new action items, each with a name and a date. Forty minutes in total, and next week's opening section is already written.",
      },
      {
        type: "h2",
        text: "What to move out of the meeting",
      },
      {
        type: "p",
        text: "The format only fits in 45 minutes if some things leave the room:",
      },
      {
        type: "ul",
        items: [
          "Status updates go in writing, before the meeting. A short note per person in the doc or in a channel the day before. Read them before you join; ask questions in the meeting only if something needs the group.",
          "FYIs go to the team channel. If nobody needs to respond, nobody needs to hear it live.",
          "Deep dives get their own meeting. If a topic needs more than 15 minutes of the whole team, schedule it with the people who need to be there.",
        ],
      },
      {
        type: "h2",
        text: "Rules that keep it working",
      },
      {
        type: "p",
        text: "Formats like this tend to work for three weeks and then drift back. A few rules prevent that:",
      },
      {
        type: "ul",
        items: [
          "Topics are added by the end of the day before, with what the owner needs from the group: a decision, input or just awareness. A topic with no ask is a heads-up.",
          "Every decision is said out loud in one sentence before moving on: \"So we're doing X, Diego owns it, by Friday.\"",
          "One person runs the \"open from last week\" review, and the role rotates. It stops the review depending on the manager's memory.",
          "End on time, even if a topic isn't finished. Unfinished topics go first next week, not into overtime.",
          "Keep the opening review even in short weeks. If there's nothing to decide, the meeting can be 15 minutes, but those 15 minutes still start with what's open.",
        ],
      },
      {
        type: "p",
        text: "The wrap-up and the opening review are the same habit seen from two sides. Action items that are read back with an owner and a date, and asked about a week later, mostly get done. Those that aren't usually don't.",
      },
      {
        type: "link",
        text: "Why action items from meetings get forgotten, and a simple system to close them.",
        href: "/blog/meeting-action-items-not-getting-done",
        linkLabel: "Why meeting action items don't get done",
      },
      {
        type: "h2",
        text: "Remote and hybrid teams",
      },
      {
        type: "p",
        text: "The format works the same on a video call, with two adjustments. Share the doc on screen during the opening review and the wrap-up, so everyone sees the same list and can correct it on the spot. And let people add to the \"decisions needed\" section asynchronously during the week, so quieter team members and other time zones get their topics in without having to speak up first. If your calls have transcripts or AI notes turned on, use them to check the wrap-up afterwards, not to replace it: the read-back in the room is what makes people agree on the same version.",
      },
      {
        type: "p",
        text: "Decisions made in the meeting also deserve a home outside the meeting doc, because a running agenda is still organised by week. When someone asks in three months what was decided about a topic, they shouldn't have to scroll through twelve agendas.",
      },
      {
        type: "link",
        text: "Why a record of decisions is different from meeting notes, and how to keep both without doing the work twice.",
        href: "/blog/meeting-minutes-vs-decision-log",
        linkLabel: "Meeting minutes vs decision log: why you need both",
      },
      {
        type: "h2",
        text: "Preparing the opening review automatically",
      },
      {
        type: "p",
        text: "The first section is the one that takes preparation: someone has to collect last week's action items, questions and risks. For teams on Google Meet, Corteza does that part. It captures the decisions, action items, open questions and risks from each meeting, with the meeting they came from, and the morning email (with calendar access) lists today's meetings with what's still open from each one's earlier sessions. The list for the weekly meeting's opening review is there before anyone opens the doc.",
      },
      {
        type: "p",
        text: "With or without a tool, the principle is the same: a weekly meeting should pick up where the last one left off.",
      },
      {
        type: "cta",
        text: "Corteza prepares your recurring meetings with what's still open from last time, straight from your Google Meet meetings. Request early access to the private beta, free during the beta.",
      },
    ],
  },
  {
    slug: "architecture-decision-records",
    title: "Architecture Decision Records vs a Team Decision Log",
    description:
      "Architecture decision records explained: what goes in an ADR, when to write one, and how ADRs and a team decision log work together without duplication.",
    date: "2026-11-02",
    readTime: "6 min read",
    category: "Engineering Leadership",
    author: "Cristian Tumani",
    content: [
      {
        type: "p",
        text: "A new engineer asks why the billing service uses a message queue instead of direct calls. Someone links ADR-0012, and the question is answered in two minutes: the context, the options, the trade-offs, the date. Then the same engineer asks why the mobile launch moved to Q2, and nobody can find anything. Architecture decision records are excellent at the first kind of question. Most teams have nothing for the second.",
      },
      {
        type: "p",
        text: "This post covers what an ADR is, when it's worth writing one, how it differs from a team decision log, and how to use both without writing everything twice.",
      },
      {
        type: "h2",
        text: "What architecture decision records are",
      },
      {
        type: "p",
        text: "An architecture decision record (ADR) is a short document that captures one significant technical decision, why it was made and what follows from it. The format was popularised by Michael Nygard in 2011 and is still the one most teams start with. Each ADR is numbered and has a few sections:",
      },
      {
        type: "ul",
        items: [
          "Title: a short phrase, like \"ADR-0012: Use a message queue between billing and invoicing\".",
          "Status: proposed, accepted, deprecated or superseded (by which ADR).",
          "Context: the forces at play: the problem, the constraints, what the team knew at the time.",
          "Decision: what was decided, stated plainly, in the active voice.",
          "Consequences: what becomes easier, what becomes harder, and what the team now has to live with.",
        ],
      },
      {
        type: "p",
        text: "ADRs usually live in the code repository, in a folder like docs/adr, and go through the same pull request review as code. Once accepted, an ADR isn't edited to reflect a new reality: a new ADR supersedes it, and the old one says so. Some teams use richer templates, such as MADR, which add the options considered with their pros and cons.",
      },
      {
        type: "link",
        text: "The original post that introduced the format, and still the best short explanation of why it works.",
        href: "https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions",
        linkLabel: "Michael Nygard: Documenting Architecture Decisions (2011)",
      },
      {
        type: "h2",
        text: "What a team decision log is",
      },
      {
        type: "p",
        text: "A team decision log is a running list of the decisions a team makes in its meetings and conversations: one entry per decision, with the reasoning, an owner, a date, a status and where it came from. Its scope is everything the team decides, not only architecture: priorities, scope cuts, release dates, process changes, hiring plans, vendor choices.",
      },
      {
        type: "p",
        text: "Where an ADR is a carefully reviewed document about one technical choice, a log entry is a few lines written the same day, so that \"what did we decide about the launch?\" has an answer in ten seconds.",
      },
      {
        type: "h2",
        text: "Architecture decision records vs a team decision log",
      },
      {
        type: "ul",
        items: [
          "Scope: ADRs cover significant technical and architectural choices. A decision log covers any decision the team makes.",
          "Depth: an ADR is a short document with context and consequences. A log entry is a few lines with a link to where the detail lives.",
          "Where it lives: ADRs sit next to the code, in the repo. A decision log sits where the whole team can search it, engineers and non-engineers alike.",
          "How it's written: ADRs are drafted, reviewed and accepted, often through a pull request. Log entries are captured right after the meeting where the decision happened.",
          "Who reads it: ADRs serve engineers working on the system, now and in the future. A log serves anyone who needs to act on a decision, including product, design and leadership.",
          "When it changes: both are superseded rather than rewritten, but log entries change status far more often, because most team decisions are revisited sooner than architecture.",
        ],
      },
      {
        type: "callout",
        label: "The key takeaway",
        text: "ADRs are the deep record of a few architectural decisions. A decision log is the broad record of everything the team decides. They don't compete: the log tells you a decision exists and where it came from, and the ADR explains the technical reasoning in full.",
      },
      {
        type: "h2",
        text: "When to write an ADR",
      },
      {
        type: "p",
        text: "Not every technical choice deserves an ADR. A good test: would a capable engineer joining in a year be surprised by this, or tempted to undo it? Write one when a decision:",
      },
      {
        type: "ul",
        items: [
          "Is expensive to reverse: a database, a framework, a service boundary, a data model.",
          "Affects other teams or systems: an API contract, an event format, a shared library.",
          "Goes against what people would assume, so someone will \"fix\" it later unless the reason is written down.",
          "Took more than one meeting to settle, or had a strong argument on the losing side.",
          "Accepts a known trade-off, like eventual consistency or a performance cost, that people should know about.",
        ],
      },
      {
        type: "p",
        text: "Skip it for choices that are cheap to change: a library you could swap in an afternoon, naming, code style. Those belong in a pull request description or a linter config. And keep ADRs short: if a decision took an hour of discussion, the record should take a fraction of that to write.",
      },
      {
        type: "h2",
        text: "When it belongs in the decision log instead",
      },
      {
        type: "p",
        text: "Engineering teams make plenty of decisions that aren't architectural, and they're just as easy to lose:",
      },
      {
        type: "ul",
        items: [
          "Scope and priority: \"We ship the importer without CSV support in v1.\"",
          "Dates and sequencing: \"The mobile launch moves to Q2 so the API can stabilise first.\"",
          "Process: \"On-call rotates weekly starting next sprint; incidents get a review within 48 hours.\"",
          "People and ownership: \"Platform team owns the deploy pipeline from now on.\"",
        ],
      },
      {
        type: "p",
        text: "None of these needs an ADR. All of them will be asked about again. A one-line entry in the decision log, with the meeting it came from, is enough.",
      },
      {
        type: "h2",
        text: "Using ADRs and a decision log together",
      },
      {
        type: "p",
        text: "The two work best when each one points at the other, instead of repeating it:",
      },
      {
        type: "ol",
        items: [
          "When a meeting settles an architectural question, log the decision the same day and add an action item: \"Write ADR-0018\", with an owner and a date.",
          "When the ADR is accepted, link it from the log entry. The log says what was decided and when; the ADR explains why, in depth.",
          "Keep open questions in the log until they're decided. \"Do we split the billing database?\" can sit there for weeks with its risks; the ADR comes once there's an answer.",
          "When an ADR is superseded, update the log entry too, so nobody follows a link to an outdated design.",
          "Link both from onboarding. A new engineer should learn on day one where architecture decisions live and where everything else does.",
        ],
      },
      {
        type: "p",
        text: "Onboarding is where the payoff shows. A new engineer with both can understand not only how the system works, but why it looks the way it does and what the team has already ruled out.",
      },
      {
        type: "link",
        text: "What it really costs when engineers join a team and the context behind past decisions is missing.",
        href: "/blog/the-hidden-cost-of-lost-context-when-engineers-join-your-team",
        linkLabel: "The hidden cost of lost context when engineers join your team",
      },
      {
        type: "h2",
        text: "Common ADR mistakes",
      },
      {
        type: "ul",
        items: [
          "Writing them months later. By then the context is reconstructed, not recorded. Write it while the discussion is fresh.",
          "Writing essays. An ADR nobody reads is no better than none. One page is plenty for most decisions.",
          "Skipping consequences. The trade-offs you accepted are the part future readers most need.",
          "Editing accepted ADRs. Supersede them instead, so the history stays honest.",
          "Hiding them. ADRs that only their authors know about don't prevent anyone from re-opening the question.",
        ],
      },
      {
        type: "p",
        text: "Most architecture decisions start in a meeting, though: a design review, a planning session, an incident follow-up. That's the part Corteza helps with for teams on Google Meet. It captures the decisions, open questions and risks from each meeting, each with the meeting it came from and a short quote as evidence, and keeps a question, its risks and the decisions about one subject together in a thread. When it's time to write the ADR, or someone asks \"What did we decide about the queue migration?\", the answer is one search away, with its sources.",
      },
      {
        type: "link",
        text: "Why a record of decisions is different from meeting notes, and how to keep both without doing the work twice.",
        href: "/blog/meeting-minutes-vs-decision-log",
        linkLabel: "Meeting minutes vs decision log: why you need both",
      },
      {
        type: "cta",
        text: "Corteza captures the decisions and open questions from your Google Meet meetings, so the context behind every ADR is already written down. Request early access to the private beta, free during the beta.",
      },
    ],
  },
  {
    slug: "how-to-prepare-for-a-1-1-meeting",
    title: "How to Prepare for a 1:1 Meeting in 5 Minutes",
    description:
      "How to prepare for a 1:1 meeting in five minutes: start from what's still open between you, bring one real topic, and leave with clear next steps.",
    date: "2026-10-29",
    readTime: "6 min read",
    category: "Team Productivity",
    author: "Cristian Tumani",
    content: [
      {
        type: "p",
        text: "It's 1:58. Your 1:1 starts at 2:00. You open the shared doc, it says \"Oct 15\" at the top and nothing underneath, and the meeting begins with \"So, anything on your mind?\" Thirty minutes of status updates later, you both leave with nothing new. Knowing how to prepare for a 1:1 meeting doesn't take an hour of reflection. It takes five minutes, if you start from the right place.",
      },
      {
        type: "p",
        text: "Most advice on 1:1s is a list of questions to ask. Questions help, but they skip the most useful input you already have: what's still open between the two of you. This guide gives you a five-minute routine built around that, a simple shared doc format, and what to do in the two minutes after.",
      },
      {
        type: "h2",
        text: "Why most 1:1s turn into status updates",
      },
      {
        type: "p",
        text: "A 1:1 is one of the few meetings where two people can talk about what's actually in the way. It drifts into a status update for predictable reasons:",
      },
      {
        type: "ul",
        items: [
          "Nobody prepared, so the easiest topic, what you worked on this week, fills the time.",
          "Last time's commitments aren't on the page, so neither person knows whether they were done.",
          "Things you share outside the 1:1, a decision waiting on one of you or a question from another meeting, never come up because nobody remembers them in the moment.",
          "The harder topic, a frustration, a career question, a worry about the project, needs a moment to be raised. A meeting with no structure rarely makes that moment.",
        ],
      },
      {
        type: "h2",
        text: "How to prepare for a 1:1 meeting: the 5-minute routine",
      },
      {
        type: "p",
        text: "This works whether you're the manager or the direct report. Do it the morning of the 1:1, or the evening before. One minute per step:",
      },
      {
        type: "ol",
        items: [
          "Check last time's commitments. What did each of you say you'd do? Mark what's done, and note what isn't. This alone changes the tone of the meeting: it starts from follow-through, not from a blank page.",
          "Check what's open between you elsewhere. Look beyond the 1:1 itself: action items from other meetings that one of you owns and the other is waiting on, open questions either of you has to answer, decisions that need the other's input. These are often the most important topics, and they're the ones that fall between meetings.",
          "Write down one thing you need from them. A decision, feedback, an introduction, air cover with another team. If you can't think of one, ask yourself what's slowing you down this week.",
          "Pick the one topic that matters most. Not five. If the meeting ran out of time after ten minutes, what would you want to have covered? That goes first.",
          "Put it in the shared doc. Add your topics so the other person can see them before the meeting and come prepared too.",
        ],
      },
      {
        type: "h3",
        text: "What it looks like in practice",
      },
      {
        type: "p",
        text: "Marta, an engineering manager, has a 1:1 with Diego at 2:00. At 9:00 she spends five minutes on it. From last time: Diego was going to write up the on-call proposal (done, shared Tuesday), and Marta was going to ask product about moving the release date (not done). Elsewhere: Diego owns an open question from the architecture review about the queue migration, and a decision from the planning meeting is waiting on his estimate. What she needs from him: a yes or no on mentoring the new hire. Most important topic: the release date, because it changes his next two weeks.",
      },
      {
        type: "p",
        text: "She adds three lines to the shared doc. When the meeting starts, she opens with an apology for the release-date item and a date by which she'll have the answer. The conversation goes straight to what matters, and the status update takes two minutes at the end instead of thirty at the start.",
      },
      {
        type: "callout",
        label: "The key takeaway",
        text: "The best 1:1 prep isn't a list of clever questions. It's knowing what's still open between you: last time's commitments, what each of you is waiting on from the other, and the one topic that matters most this week.",
      },
      {
        type: "h2",
        text: "A simple shared 1:1 doc",
      },
      {
        type: "p",
        text: "Use one running document per 1:1, newest meeting at the top, so the history is always one scroll away. Each meeting gets four short sections:",
      },
      {
        type: "ul",
        items: [
          "Open from last time: the commitments from the previous 1:1, each marked done, in progress or dropped.",
          "Topics: both people add before the meeting. Most important first.",
          "Next steps: what each person will do, with a date. Written during the meeting, not after.",
          "Parking lot: things worth discussing later, so they don't get lost or take over today.",
        ],
      },
      {
        type: "p",
        text: "That's it. Resist adding sections for goals, feedback, wellbeing and career every week. Those deserve their own conversations every month or quarter, and a template full of empty headings turns into a form to fill in.",
      },
      {
        type: "h3",
        text: "If you're the manager",
      },
      {
        type: "ul",
        items: [
          "Let them go first. It's their meeting more than yours. Your updates can wait until the end, or go in writing.",
          "Track your own commitments as carefully as theirs. Nothing erodes a 1:1 faster than a manager who forgets what they promised.",
          "Move it, don't cancel it. A cancelled 1:1 tells people where they rank.",
          "Ask about blockers, not progress. \"What's slowing you down?\" gets you further than \"How's it going?\"",
        ],
      },
      {
        type: "h3",
        text: "If you're the direct report",
      },
      {
        type: "ul",
        items: [
          "Bring a proposal, not just a problem. \"I think we should do X, can you back me on it?\" is easier to act on than \"X is a mess\".",
          "Mention your wins briefly. Your manager sees less of your work than you think.",
          "Ask what's on their mind. Knowing your manager's priorities for the next month helps you choose your own.",
        ],
      },
      {
        type: "h2",
        text: "Questions worth keeping in your pocket",
      },
      {
        type: "p",
        text: "You don't need a list of 70. A handful, used when the conversation stalls, is enough:",
      },
      {
        type: "ul",
        items: [
          "What's the most important thing we should talk about today?",
          "What's slowing you down right now?",
          "Is there a decision you're waiting on from me, or from someone else?",
          "What would you change about how we work together?",
          "What's something you'd like to do more of in the next few months?",
          "Is anything worrying you that we haven't talked about?",
        ],
      },
      {
        type: "h2",
        text: "The two minutes after the 1:1",
      },
      {
        type: "p",
        text: "Preparation is half of it. The other half is making sure next time's \"open from last time\" list exists. Before you both move on, check the Next steps section: each item has one owner and a date, and anything already done is marked. This is the same discipline that keeps action items from any meeting alive, just at a smaller scale.",
      },
      {
        type: "link",
        text: "Why action items from meetings get forgotten, and a simple system to close them.",
        href: "/blog/meeting-action-items-not-getting-done",
        linkLabel: "Why meeting action items don't get done",
      },
      {
        type: "h2",
        text: "Keep the sensitive parts private",
      },
      {
        type: "p",
        text: "1:1s are where performance, pay, health and \"I'm thinking about leaving\" come up. Keep those out of the shared doc unless both of you are comfortable with it, never paste them into team documents, and check who can see the notes before you write anything personal. A private note to yourself is often the right place.",
      },
      {
        type: "h2",
        text: "Making step two take ten seconds",
      },
      {
        type: "p",
        text: "Steps one, three, four and five only need your head and the shared doc. Step two is the hard one, because what's open between you is scattered across other meetings, other docs and other people's notes.",
      },
      {
        type: "p",
        text: "That's where Corteza helps teams on Google Meet. It captures the decisions, action items, open questions and risks from your meetings, each with the meeting it came from, so before a 1:1 with Ana you can ask \"What's pending from Ana?\" and get the answer with its sources. People matters (performance, leaving, pay, health) stay visible only to the person whose meeting it was.",
      },
      {
        type: "p",
        text: "Whatever you use, the principle is simple: a good 1:1 starts where the last one, and every other meeting you share, left off.",
      },
      {
        type: "link",
        text: "How to keep one running list of what's decided across your Google Meet meetings.",
        href: "/blog/google-meet-decision-log",
        linkLabel: "Google Meet decision log: keep every decision findable",
      },
      {
        type: "cta",
        text: "Corteza keeps track of what's still open from your Google Meet meetings, so you walk into every 1:1 prepared. Request early access to the private beta, free during the beta.",
      },
    ],
  },
  {
    slug: "meeting-minutes-vs-decision-log",
    title: "Meeting Minutes vs Decision Log: Why You Need Both",
    description:
      "Meeting minutes vs decision log: what each one is for, why minutes alone don't keep decisions alive, and how to run both without doing the work twice.",
    date: "2026-10-26",
    readTime: "6 min read",
    category: "Processes & Tools",
    author: "Cristian Tumani",
    content: [
      {
        type: "p",
        text: "The leadership team approves its minutes every month, carefully. And yet, in the November meeting, nobody can say for sure whether the price increase in March applied to existing customers too. The answer is in the minutes. Somewhere. The difference between meeting minutes vs a decision log is exactly this: one records what happened in a meeting, the other keeps track of what is still true.",
      },
      {
        type: "p",
        text: "Both are useful, and they're often confused. This post explains what each one is for, why minutes on their own don't keep decisions alive, when you need which, and how to keep both without writing everything twice.",
      },
      {
        type: "h2",
        text: "What meeting minutes are for",
      },
      {
        type: "p",
        text: "Minutes are the official record of a single meeting. They typically list who attended, the agenda, a summary of the discussion, the decisions or motions, and the actions agreed. In formal settings, such as boards, committees and some regulated teams, they're reviewed and approved at the next meeting, and they can carry real governance weight.",
      },
      {
        type: "p",
        text: "Their defining feature is that they're fixed in time. Minutes from the 12th describe the 12th. Once approved, they shouldn't change, and that's correct: their job is to be a faithful record of what was said and agreed on that day.",
      },
      {
        type: "h2",
        text: "What a decision log is for",
      },
      {
        type: "p",
        text: "A decision log is a running list of decisions across all your meetings: one entry per decision, with the reasoning, the owner, the date and where it came from. It's organised by decision, not by meeting, and it's meant to change. When a decision is revisited, reversed or replaced, its entry says so and points to the newer one.",
      },
      {
        type: "p",
        text: "Minutes answer \"what happened on the 12th?\". A decision log answers \"where do we stand on pricing?\", which is the question people actually ask a few months later.",
      },
      {
        type: "h2",
        text: "Meeting minutes vs decision log: the key differences",
      },
      {
        type: "ul",
        items: [
          "Unit: minutes have one document per meeting; a decision log has one entry per decision.",
          "Organised by: minutes by date; the log by subject and status.",
          "Lifespan: minutes are frozen once approved; log entries are updated when a decision changes.",
          "Contents: minutes cover the whole discussion; the log keeps only outcomes, with just enough context to understand them later.",
          "Reader: minutes serve people checking what happened at a meeting; the log serves people who need to act on a decision, including people who weren't there.",
          "Question it answers: \"What did we discuss?\" versus \"What did we decide, and is it still true?\"",
        ],
      },
      {
        type: "h3",
        text: "The same decision, written both ways",
      },
      {
        type: "p",
        text: "In the minutes of the March leadership meeting, the decision might read: \"The team discussed the proposed price increase. Concerns were raised about churn among smaller accounts. After discussion, it was agreed to proceed with a 10% increase from April 1. Finance to update the price list.\"",
      },
      {
        type: "p",
        text: "In the decision log, the same decision becomes one entry: \"D-014 · Raise list prices 10% from April 1, new customers only. Why: costs up, win rate stable. Rejected: applying it to existing customers now (churn risk in small accounts). Owner: Laura (Finance). Status: superseded by D-031 in September. Source: leadership meeting, March 12.\"",
      },
      {
        type: "p",
        text: "Notice what the log adds: the scope (new customers only), the rejected option, one owner, and the fact that it's no longer current. The minutes can't carry that last part, and they shouldn't try.",
      },
      {
        type: "callout",
        label: "The key takeaway",
        text: "Minutes are a record of meetings. A decision log is a record of decisions. Minutes are supposed to stay as they were; decisions are supposed to evolve. That's why minutes alone can't tell you what's currently decided.",
      },
      {
        type: "h2",
        text: "Why minutes alone don't keep decisions alive",
      },
      {
        type: "p",
        text: "Teams that rely only on minutes usually run into the same problems:",
      },
      {
        type: "h3",
        text: "Decisions are buried in narrative",
      },
      {
        type: "p",
        text: "In minutes, a decision is one sentence in a paragraph about a discussion. Finding it means remembering roughly when it happened and reading until you hit it. Across a year of weekly meetings, that's a lot of reading.",
      },
      {
        type: "h3",
        text: "A decision's history is spread across dates",
      },
      {
        type: "p",
        text: "Real decisions rarely happen in one meeting. Pricing gets raised in March, debated in April, decided in May and adjusted in September. Minutes record each step in a different document. To know the current position, you have to find all four and read them in order.",
      },
      {
        type: "h3",
        text: "Minutes never say a decision is outdated",
      },
      {
        type: "p",
        text: "This is by design, and it's the core problem. The March minutes will always say what was decided in March, even after September replaced it. Nothing in the old document warns the reader. A new team member searching the minutes can easily find the outdated answer first.",
      },
      {
        type: "h3",
        text: "The reasoning gets summarised away",
      },
      {
        type: "p",
        text: "Minutes are written to be short and neutral, so the why behind a decision and the options that were rejected are often the first things cut. Those are precisely what someone needs six months later when they want to reopen the question.",
      },
      {
        type: "h2",
        text: "When you need minutes, a log, or both",
      },
      {
        type: "ul",
        items: [
          "Minutes only: formal bodies where a signed-off record is required and decisions are few, such as a board meeting a handful of times a year.",
          "A decision log (plus informal notes): most internal team meetings. Product syncs, engineering reviews and ops meetings rarely need formal minutes, but they make many decisions that others depend on.",
          "Both: leadership teams, steering committees and boards of fast-moving companies, where meetings need an official record and decisions build on each other week after week.",
        ],
      },
      {
        type: "h2",
        text: "How to keep both without doing the work twice",
      },
      {
        type: "p",
        text: "If you need both, the trick is to treat the log as an index into the minutes, not as a second write-up. Here's a routine that keeps the extra work to a few minutes per meeting:",
      },
      {
        type: "ol",
        items: [
          "Mark decisions as you write the minutes. Start each one with \"Decision:\" so they stand out from the discussion.",
          "Copy each marked decision into the log the same day, with a link to the minutes and a short ID (D-014).",
          "Add the ID to the minutes too, next to the decision. Now each points to the other.",
          "When a later meeting changes a decision, update the log, not the old minutes. Mark the entry as superseded and link the new one.",
          "Start the next meeting with whatever is still open or proposed in the log. It takes two minutes and catches decisions that were never really closed.",
        ],
      },
      {
        type: "link",
        text: "Need the log itself? Our free template has the fields ready (ID, decision, why, alternatives, owner, status, source), as an Excel file or a version for Notion and Google Docs.",
        href: "/decision-log-template",
        linkLabel: "Get the free decision log template",
      },
      {
        type: "h2",
        text: "Where AI meeting notes fit",
      },
      {
        type: "p",
        text: "AI note-takers, including Gemini's notes in Google Meet, produce something close to informal minutes: a summary per meeting, often with a list of decisions and next steps. They solve the writing. They don't solve the tracking, because each meeting still gets its own document and nothing updates last month's notes when a decision changes.",
      },
      {
        type: "link",
        text: "How to build a running decision log from your Google Meet meetings, manually or automatically.",
        href: "/blog/google-meet-decision-log",
        linkLabel: "Google Meet decision log: keep every decision findable",
      },
      {
        type: "p",
        text: "That's the gap Corteza fills for teams on Google Workspace. It reads each Google Meet transcript or Gemini notes, with no bot in the call, and keeps the decisions, action items, open questions and risks, each with the meeting it came from and a short quote as evidence. A question, its risks and the decisions about one subject stay together in a thread, and you can ask in plain language, like \"What did we decide about pricing?\", to get the answer with its sources.",
      },
      {
        type: "p",
        text: "Whatever tools you use, keep the roles clear: let the minutes say what happened, and let the log say what's true now.",
      },
      {
        type: "cta",
        text: "Corteza turns your Google Meet meetings into a decision log your team can search, with the evidence for every decision. Request early access to the private beta, free during the beta.",
      },
    ],
  },
  {
    slug: "meeting-action-items-not-getting-done",
    title: "Why Meeting Action Items Don't Get Done (and How to Fix It)",
    description:
      "Meeting action items not getting done? The seven reasons they get forgotten, what a good action item looks like, and a simple system to close them.",
    date: "2026-10-19",
    readTime: "6 min read",
    category: "Team Productivity",
    author: "Cristian Tumani",
    content: [
      {
        type: "p",
        text: "Monday ops review. Someone asks: \"Did we send the vendor the revised SLA?\" Silence. Three people remember the conversation two weeks ago. Nobody remembers agreeing to do it. If your meeting action items are not getting done, this scene is probably familiar, and it's rarely about laziness.",
      },
      {
        type: "p",
        text: "Most action items fail in the gap between the meeting and the work: they're said but never really assigned, or assigned but never seen again. This post covers the seven most common reasons, what a well-formed action item looks like, and a lightweight system to close them that works with whatever tools you already use.",
      },
      {
        type: "h2",
        text: "Why meeting action items don't get done",
      },
      {
        type: "p",
        text: "When an item slips, look at how it was created before blaming the person who owned it. The causes tend to be the same ones, in roughly this order:",
      },
      {
        type: "h3",
        text: "1. It was never really agreed",
      },
      {
        type: "p",
        text: "\"I can take a look at that\" and \"someone should check with legal\" sound like commitments in the room. Afterwards they're easy to read as ideas. If nobody said \"so that's yours, by Thursday\", the item may not exist in anyone's head except the person who suggested it.",
      },
      {
        type: "h3",
        text: "2. It has a team instead of an owner",
      },
      {
        type: "p",
        text: "\"Marketing will update the pricing page.\" Which person? Shared ownership feels inclusive and works like no ownership. Each member of the group reasonably assumes someone else has it.",
      },
      {
        type: "h3",
        text: "3. It has no date",
      },
      {
        type: "p",
        text: "Without a date, an item competes with everything that does have one, and loses. \"Soon\" means after the planned work, which in most weeks means never.",
      },
      {
        type: "h3",
        text: "4. It lives in the wrong place",
      },
      {
        type: "p",
        text: "Action items written into meeting notes stay in meeting notes. People plan their week from their task list, their tracker or their inbox, not from a document titled \"Notes: Ops review, Oct 6\". If the item doesn't reach the place where work is planned, it isn't really in the plan.",
      },
      {
        type: "h3",
        text: "5. Nobody asks about it again",
      },
      {
        type: "p",
        text: "This is the big one. An item that nobody will ask about is optional, whatever the notes say. Most teams don't decide this on purpose; the next meeting simply starts with new topics and last week's list never comes up.",
      },
      {
        type: "h3",
        text: "6. There's no way to drop it",
      },
      {
        type: "p",
        text: "Plans change. Half the items from a meeting a month ago may no longer matter. When there's no accepted way to say \"we're not doing this anymore\", those items linger as quiet guilt, the list fills with noise, and people stop trusting it, including the items that still matter.",
      },
      {
        type: "h3",
        text: "7. It lost to the owner's real priorities",
      },
      {
        type: "p",
        text: "Sometimes the item was clear, owned and dated, and the owner simply had three more important things. That's not a failure of the person; it's a missing conversation about trade-offs. The fix is making it normal to say \"I can't do this by Thursday\" early, not on the day it's due.",
      },
      {
        type: "callout",
        label: "The key takeaway",
        text: "Action items rarely fail because people don't care. They fail because they were never clearly owned and dated, they ended up somewhere nobody looks, or nobody asked about them again. Fix those three and most of the problem goes away.",
      },
      {
        type: "h2",
        text: "What a good action item looks like",
      },
      {
        type: "p",
        text: "A good action item can be understood by someone who wasn't in the meeting. It has five parts:",
      },
      {
        type: "ul",
        items: [
          "A verb and a result: \"Send the vendor the revised SLA\", not \"SLA\".",
          "One owner, by name. Others can help; one person answers for it.",
          "A date, even a rough one. \"By Friday\" beats \"next week\" beats nothing.",
          "A home: the place where the owner will actually see it during the week.",
          "A line of context: why it matters or which decision it comes from, so it still makes sense in three weeks.",
        ],
      },
      {
        type: "p",
        text: "Compare \"Follow up on onboarding\" with \"Diego: share the new onboarding checklist with the support team by Thursday, so they can answer setup questions from the October cohort\". The second one takes ten more seconds to say, and it's the one that gets done.",
      },
      {
        type: "h2",
        text: "A simple system to close meeting action items",
      },
      {
        type: "p",
        text: "You don't need a new methodology. You need a few habits that make sure every item is created properly, lands somewhere visible, and gets asked about. Here's a version that works for most teams:",
      },
      {
        type: "ol",
        items: [
          "Recap in the last two minutes. The person running the meeting reads each action item aloud with its owner and date. Anything without both gets them now, or gets dropped now.",
          "Keep one list per team, not one per meeting. Action items from every meeting go into the same tracker, shared sheet or task list, with a link back to the meeting. One place to look beats ten documents.",
          "Open the next meeting with the open items. Before new topics, go through last time's list: done, blocked or dropped. Two to five minutes, every time.",
          "Make dropping legitimate. \"We're not doing this anymore, because…\" is a valid status. Record why, and close the item. A shorter, honest list gets more done than a long, stale one.",
          "Renegotiate early. If an owner can't make a date, they say so before it passes, and the group decides: new date, new owner, or drop.",
          "Do a weekly sweep. Once a week, someone looks at everything overdue across the team's meetings and nudges the owners. Ten minutes.",
        ],
      },
      {
        type: "h3",
        text: "Running the review without making it a status meeting",
      },
      {
        type: "p",
        text: "The review at the start of a meeting works best when it's quick and blameless. Only three answers are allowed: done, blocked (and what's needed), or dropped (and why). Anything that needs discussion goes on the agenda instead of turning the review into a debate. If an item has been blocked two meetings in a row, that's the signal to talk about it properly.",
      },
      {
        type: "p",
        text: "If your meetings already have AI notes, they're a good source for the list, as long as someone checks them. We wrote about what Gemini's notes capture well and where they miss owners and dates.",
      },
      {
        type: "link",
        text: "What Google Meet's AI notes capture, what they miss, and how to turn them into follow-through.",
        href: "/blog/gemini-take-notes-for-me",
        linkLabel: "Gemini Take notes for me: what it captures and what it misses",
      },
      {
        type: "h2",
        text: "Signs your follow-through is improving",
      },
      {
        type: "p",
        text: "You don't need a dashboard to tell whether this is working. After a month, look for:",
      },
      {
        type: "ul",
        items: [
          "Fewer \"who had that?\" moments in meetings.",
          "Items being dropped on purpose, with a reason, instead of fading away.",
          "The overdue list getting shorter, or at least not longer.",
          "The same topic not coming back as a new item because the first one quietly died.",
          "Owners raising date problems before the date, not after.",
        ],
      },
      {
        type: "p",
        text: "That last-but-one point matters more than it looks. When an action item disappears, the underlying question usually comes back later as a fresh discussion, and teams end up re-deciding things they already settled.",
      },
      {
        type: "link",
        text: "Why decisions and commitments disappear between meetings, and what it costs a team.",
        href: "/blog/why-your-team-keeps-remaking-the-same-decisions",
        linkLabel: "Why your team keeps re-making the same decisions",
      },
      {
        type: "h2",
        text: "Where a tool can take over the busywork",
      },
      {
        type: "p",
        text: "The system above is mostly habits, and habits are the part no tool can replace. What tools can take over is the copying and the remembering: getting items out of the meeting into one list, and putting the right ones in front of the right person at the right time.",
      },
      {
        type: "p",
        text: "That's the part Corteza handles for teams on Google Meet. It reads each meeting's transcript or Gemini notes, with no bot in the call, and captures action items with their owner and due date when they were said, plus the quote they came from. Each person gets a morning email with their due and overdue items, and, with calendar access, prep for today's meetings with what's still open from earlier sessions of each one, so the review at the start of each meeting begins from a ready list.",
      },
      {
        type: "p",
        text: "Whatever you use, the principle doesn't change: an action item is only real when it has an owner, a date, a place people look, and someone who will ask about it.",
      },
      {
        type: "cta",
        text: "Corteza captures action items from your Google Meet meetings and puts each person's due and overdue items in front of them every morning. Request early access to the private beta, free during the beta.",
      },
    ],
  },
  {
    slug: "gemini-take-notes-for-me",
    title: "Gemini Take Notes for Me: What It Captures and What It Misses",
    description:
      "What Gemini's Take notes for me in Google Meet captures, where it falls short, and a simple routine to turn its notes into action items that get done.",
    date: "2026-10-12",
    readTime: "6 min read",
    category: "Processes & Tools",
    author: "Cristian Tumani",
    content: [
      {
        type: "p",
        text: "Gemini's \"Take notes for me\" in Google Meet solves a real problem: nobody has to be the person typing while everyone else talks. Turn it on, have the meeting, and a Google Doc with a summary and next steps shows up afterwards. For many teams it's the first time every meeting has notes at all.",
      },
      {
        type: "p",
        text: "And yet, a month in, a familiar pattern appears. The notes exist. The action items in them don't get done any more often than before. This guide covers what \"Take notes for me\" actually captures, what it leaves out, and a lightweight routine for turning the notes into follow-through, whether or not you add any other tool.",
      },
      {
        type: "h2",
        text: "How Gemini's Take notes for me works",
      },
      {
        type: "p",
        text: "Someone in the meeting, usually the organiser, turns note-taking on from the Meet toolbar, or ahead of time from the Calendar event. Participants see that notes are being taken. No extra participant joins the call: Gemini works inside Meet itself.",
      },
      {
        type: "p",
        text: "When the meeting ends, Gemini writes a Google Doc. It's saved to the organiser's Drive and attached to the Calendar event, and the organiser gets an email with a link. Depending on how you set it up, the doc can include:",
      },
      {
        type: "ul",
        items: [
          "Summary: the main topics, in a few paragraphs.",
          "Decisions: what the meeting settled, with a status such as Aligned, Needs further discussion, Disagreed or Shelved. Google added this section in April 2026, starting in English.",
          "Next steps: suggested action items, often with a name attached.",
          "Details: a longer, topic-by-topic account of the discussion.",
        ],
      },
      {
        type: "p",
        text: "Whether you can use it depends on the organiser's Google Workspace plan and on your admin having it enabled. If the option is missing in your toolbar, that's the first place to check, rather than your browser.",
      },
      {
        type: "link",
        text: "Google's help page lists the current requirements, supported languages and how to share the notes.",
        href: "https://support.google.com/meet/answer/14754931",
        linkLabel: "Google Meet Help: Take notes for me in Google Meet",
      },
      {
        type: "h2",
        text: "What the notes capture well",
      },
      {
        type: "p",
        text: "Credit where it's due. For a typical 30-minute internal meeting, the notes are good at:",
      },
      {
        type: "ul",
        items: [
          "The gist. If you missed the meeting, the summary tells you what was discussed in two minutes of reading.",
          "Explicit statements. \"Marta will send the revised plan by Friday\" usually lands in Next steps with Marta's name on it.",
          "A record that exists. The doc is attached to the Calendar event, so you can find it from the meeting itself weeks later.",
          "Consistency. Every meeting gets the same structure, regardless of who organised it or how tired they were.",
        ],
      },
      {
        type: "h2",
        text: "What Take notes for me misses",
      },
      {
        type: "p",
        text: "The gaps are less about the AI and more about what a per-meeting document is. A few show up in almost every team:",
      },
      {
        type: "h3",
        text: "1. Implied commitments",
      },
      {
        type: "p",
        text: "Meetings rarely produce tidy sentences. \"I can probably look into that\" or \"let's circle back once we have the numbers\" are commitments in practice, but they often don't read as action items, so they're missing or vague in the notes. Those are exactly the ones that get forgotten.",
      },
      {
        type: "h3",
        text: "2. Owners and due dates",
      },
      {
        type: "p",
        text: "A next step without an owner is a wish. Notes can only record an owner or date if someone said one out loud. In many meetings nobody does, so the doc lists \"Update the onboarding flow\" and everyone assumes someone else has it.",
      },
      {
        type: "h3",
        text: "3. Anything before notes were on",
      },
      {
        type: "p",
        text: "Notes start when someone starts them. The first five minutes, a meeting where nobody remembered, or a quick call that turned into an important one: none of it is in a doc.",
      },
      {
        type: "h3",
        text: "4. What happens after",
      },
      {
        type: "p",
        text: "This is the big one. The doc is a snapshot of one meeting. It doesn't remind the owner, doesn't know when an item is done, and doesn't show up in next week's meeting to ask. Each recurring meeting produces a new doc, and last week's open items stay in last week's doc.",
      },
      {
        type: "h3",
        text: "5. The thread across meetings",
      },
      {
        type: "p",
        text: "A question raised on Monday and answered on Thursday lives in two different documents, often in two different people's Drives. Nothing marks Monday's question as answered. If you want to know where a topic stands, you're reading docs in date order.",
      },
      {
        type: "link",
        text: "When decisions and open questions get lost between meetings, teams end up having the same discussion twice.",
        href: "/blog/why-your-team-keeps-remaking-the-same-decisions",
        linkLabel: "Why your team keeps re-making the same decisions",
      },
      {
        type: "callout",
        label: "The key takeaway",
        text: "Take notes for me solves note-taking, not follow-through. The notes tell you what was said. Whether anything happens next depends on a small routine after the meeting: confirm each action item has an owner and a date, put it somewhere people already look, and check it in the next meeting.",
      },
      {
        type: "h2",
        text: "Turning Gemini notes into follow-through",
      },
      {
        type: "p",
        text: "You don't need a new process. You need about five minutes per meeting and one habit in the next one. Here's a routine that works for most teams:",
      },
      {
        type: "ol",
        items: [
          "End the meeting with a 60-second recap. The organiser reads out each action item with its owner and date. This turns \"I'll probably look into it\" into something the notes can capture, and it's the cheapest fix for the owner problem.",
          "Read the notes the same day. Open the doc, check Next steps against what you remember, add the owners and dates nobody said aloud, and delete anything that wasn't really agreed. The notes are a draft, not a verdict.",
          "Move action items to where work is tracked. A Google Doc is not a task list. Copy each item to your team's tracker, a shared Sheet, or Google Tasks, with a link back to the notes as evidence.",
          "Share the cleaned-up notes. Send the link in the meeting's chat thread or channel, so people who weren't there see the same version.",
          "Start the next meeting with last meeting's open items. Two minutes at the top of the agenda: what's done, what's blocked, what's no longer needed. This is the step that makes the others matter.",
        ],
      },
      {
        type: "p",
        text: "Step five is where most teams quietly improve. When people know the item will come up in front of the group next week, it tends to get done, or at least explicitly dropped, which is almost as useful.",
      },
      {
        type: "p",
        text: "Decisions deserve a similar treatment, but they need a longer memory than action items. We covered how to keep them in one running list, using the Gemini Decisions section as a source.",
      },
      {
        type: "link",
        text: "How to keep a running log of what's decided across your Google Meet meetings, manually or automatically.",
        href: "/blog/google-meet-decision-log",
        linkLabel: "Google Meet decision log: keep every decision findable",
      },
      {
        type: "h2",
        text: "Tips to get better notes from Gemini",
      },
      {
        type: "p",
        text: "A few small changes in how you run the meeting improve the notes more than any setting:",
      },
      {
        type: "ul",
        items: [
          "Say decisions as decisions. \"So we're going with option B\" is easy to capture. A round of nodding isn't.",
          "Use names, not pronouns. \"Diego owns the rollout\" beats \"you take that one\".",
          "State dates. \"By Thursday\" gives the notes a due date. \"Soon\" gives them nothing.",
          "Turn notes on at the start. Set them from the Calendar event for recurring meetings so it doesn't depend on someone remembering.",
          "Keep one language per meeting where you can. Mixed-language conversations are harder to summarise accurately.",
        ],
      },
      {
        type: "h2",
        text: "When the manual routine stops scaling",
      },
      {
        type: "p",
        text: "The routine above works well for a team lead with a few recurring meetings. It strains when you're in six meetings a day and each one produces a doc to clean up, or when items from one meeting depend on another. That's usually when the copying step gets skipped, and the system quietly reverts to \"it's in the notes somewhere\".",
      },
      {
        type: "p",
        text: "That's the gap Corteza is built for. It reads your Google Meet transcripts and Gemini notes after each meeting, with no bot in the call, and pulls out decisions, action items, open questions and risks, each with the meeting it came from and a short quote as evidence. You confirm or dismiss what it found, and a morning email lists your due and overdue items, plus what's still open from earlier sessions of today's meetings.",
      },
      {
        type: "p",
        text: "Whatever you use, the principle is the same. Notes are the input. What makes meetings worth having is that the things agreed in them actually happen, and that people can see whether they did.",
      },
      {
        type: "cta",
        text: "Gemini takes the notes. Corteza makes sure decisions stick. Request early access to the private beta, free during the beta.",
      },
    ],
  },
  {
    slug: "google-meet-decision-log",
    title: "Google Meet Decision Log: Keep Every Decision Findable",
    description:
      "How to keep a Google Meet decision log: what Gemini notes capture, the fields each entry needs, a 10-minute manual routine, and when to automate it.",
    date: "2026-10-10",
    readTime: "7 min read",
    category: "Processes & Tools",
    author: "Cristian Tumani",
    content: [
      {
        type: "p",
        text: "Your team decided to delay the pricing change three weeks ago. You're sure of it. It was in the Tuesday product sync, or maybe the leadership call after it. Both happened in Google Meet, both had notes switched on, and now you're opening Drive, searching \"pricing\", and finding eleven \"Notes by Gemini\" documents that each mention it. A Google Meet decision log exists to make that search take ten seconds instead of fifteen minutes.",
      },
      {
        type: "p",
        text: "This guide covers what Google Meet already captures on its own, what it leaves out, the fields a useful decision log needs, a manual routine that takes about ten minutes a week, and what to look for if you'd rather automate it.",
      },
      {
        type: "h2",
        text: "What a Google Meet decision log is (and what it isn't)",
      },
      {
        type: "p",
        text: "A decision log is a single, running list of what your team has decided, why, and who is accountable for it. One row per decision, kept across all your meetings, so anyone can answer \"what did we decide about X?\" without having attended the meeting.",
      },
      {
        type: "p",
        text: "It is not the same as meeting notes. Notes are organised by meeting: one document per call, in the order things were said. A log is organised by decision. The difference sounds small until you need to find something. Notes answer \"what happened on the 14th?\". A log answers \"where do we stand on pricing?\", which is the question people actually ask.",
      },
      {
        type: "h2",
        text: "What Google Meet already gives you",
      },
      {
        type: "p",
        text: "If your Workspace plan includes Gemini, \"Take notes for me\" does a good share of the work. Once someone turns it on during a call, it writes a Google Doc with a summary, suggested next steps and the details of the discussion. The document is saved to the organiser's Drive and attached to the Calendar event, and the organiser gets an email with a link after the meeting.",
      },
      {
        type: "p",
        text: "Since April 2026 the notes can also include a Decisions section. Google's announcement describes it as capturing outcomes with a status: Aligned, Needs further discussion, Disagreed or Shelved. You can switch individual sections on or off during a call, and at launch the Decisions section was available in English only.",
      },
      {
        type: "link",
        text: "Google's own announcement of the Decisions section and the section toggles in \"Take notes for me\".",
        href: "https://workspaceupdates.googleblog.com/2026/04/new-ways-to-customize-ai-generated-meeting-notes.html",
        linkLabel: "Google Workspace Updates: New ways to customize AI-generated meeting notes",
      },
      {
        type: "p",
        text: "That's genuinely useful. But it's still one document per meeting, and that leaves a few gaps:",
      },
      {
        type: "ul",
        items: [
          "Decisions are scattered. Each meeting's decisions live in that meeting's doc, in the organiser's Drive. Different organisers, different Drives, different sharing settings.",
          "Nothing connects one meeting to the next. If Tuesday's sync marks a pricing question \"Needs further discussion\" and Thursday's leadership call settles it, no document records that the first item is now closed.",
          "Notes only start when someone starts them. Whatever was said before \"Take notes for me\" was switched on, or in a call where nobody turned it on, isn't there.",
          "Nobody owns the follow-up. A next step in a doc doesn't remind anyone, and doesn't know when it's done.",
          "The AI can be wrong. A tentative \"let's probably do X\" can read like a decision. Somebody needs to confirm it.",
        ],
      },
      {
        type: "p",
        text: "So the Gemini doc is a good source. The log is the place where those sources come together.",
      },
      {
        type: "h2",
        text: "What each decision log entry needs",
      },
      {
        type: "p",
        text: "Keep the fields few. Every extra column is a reason to skip the update. These are the ones that earn their place:",
      },
      {
        type: "ul",
        items: [
          "Decision: one sentence, stated as an outcome. \"We'll delay the pricing change to Q1\", not \"Discussed pricing\".",
          "Why: one or two lines on the main reason. This is what saves you six months from now.",
          "Alternatives rejected: what else was on the table. Optional, but it stops the same debate from restarting.",
          "Owner: one person accountable for acting on it. A team is not an owner.",
          "Date and meeting: when it was decided and which call, with a link to that meeting's notes doc as evidence.",
          "Status: open, decided, revisited or superseded. If a later decision replaces it, say which one.",
        ],
      },
      {
        type: "p",
        text: "Open questions and risks deserve a home too. Many \"decisions\" in meetings are really \"we'll decide next week once we have the numbers\". If you only log the final answer, you lose track of the questions still waiting for one, which are usually the ones that slip.",
      },
      {
        type: "link",
        text: "Don't want to build the columns yourself? Our free decision log template has these fields ready, as an Excel file or a version you can paste into Google Docs or Sheets.",
        href: "/decision-log-template",
        linkLabel: "Get the free decision log template",
      },
      {
        type: "h2",
        text: "How to keep a Google Meet decision log manually",
      },
      {
        type: "p",
        text: "A Google Sheet shared with the team is enough. Here's a routine that works for a team with a handful of recurring meetings:",
      },
      {
        type: "ol",
        items: [
          "Make notes the default. Agree that whoever organises a recurring meeting turns on \"Take notes for me\" at the start, and keep the Decisions section on.",
          "Close each meeting with a 60-second read-back. The organiser says out loud what was decided and who owns it. This catches the \"I thought we agreed…\" moments while everyone's still in the room, and gives the notes a clean sentence to capture.",
          "Copy decisions into the log the same day. The organiser opens the notes doc, checks the Decisions and Next steps sections against their memory, and adds a row per real decision, with the link to the doc. Five minutes, while it's fresh.",
          "Close what got settled. When you add a new decision, look for older rows it resolves: an open question, a risk, a \"needs further discussion\". Mark them closed and point to the new row.",
          "Review open items once a week. Start one recurring meeting, usually the weekly team sync, by filtering the log for open items and overdue owners. Ten minutes, and nothing quietly ages out.",
        ],
      },
      {
        type: "callout",
        label: "The key takeaway",
        text: "Gemini notes record what was said in one meeting. A decision log tracks what's still true across all of them. Use the notes as evidence, keep the log as the single place where decisions, owners and open questions live, and close old items when new decisions settle them.",
      },
      {
        type: "h3",
        text: "What makes the manual version break",
      },
      {
        type: "p",
        text: "The routine is simple. The failure mode is also simple: it depends on one person doing step three after every meeting, and step three is the first thing to go in a busy week. A few habits help:",
      },
      {
        type: "ul",
        items: [
          "Give the log one owner per team, not \"everyone\". Shared responsibility tends to mean nobody's.",
          "Don't log everything. Choosing a meeting room isn't a decision worth a row. A rough test: would someone outside the meeting need to know this to do their job?",
          "Keep the language plain. \"Decided: mobile app ships without offline mode\" beats a project codename nobody will remember in March.",
          "Link, don't copy. Paste the link to the notes doc rather than pasting paragraphs. The log stays readable, and the evidence is one click away.",
        ],
      },
      {
        type: "p",
        text: "If you want more on keeping documentation light enough that people actually do it, we wrote about that separately.",
      },
      {
        type: "link",
        text: "A lightweight framework for recording decisions that doesn't turn into a second job.",
        href: "/blog/how-to-document-team-decisions-without-slowing-down",
        linkLabel: "How to document team decisions without slowing down",
      },
      {
        type: "h2",
        text: "When to automate your Google Meet decision log",
      },
      {
        type: "p",
        text: "The manual routine is fine for one team with two or three recurring meetings. It starts to strain when you have many organisers, several meetings a day, or decisions that build on each other over weeks. At that point the copying, and especially the closing of old items, is where things slip.",
      },
      {
        type: "p",
        text: "If you look at tools for this, a few questions separate a log you'll trust from another pile of summaries:",
      },
      {
        type: "ul",
        items: [
          "Does it need a bot in the call? Some tools join as a visible participant. Others work from the transcript and notes Google Meet already produces.",
          "Does it show evidence? Every captured decision should point to the meeting it came from, ideally with a short quote, so you can check it in seconds.",
          "Can you confirm or dismiss what it captured? AI extraction will get some things wrong. Review should be one click, not an edit session.",
          "Does it connect meetings? The hard part isn't capturing Tuesday's decision. It's noticing that it settles the question from two weeks ago.",
          "What does it keep? Check whether it stores full transcripts or only the outcomes, and who in your company can see what.",
        ],
      },
      {
        type: "p",
        text: "This is the problem we built Corteza around. It reads Google Meet transcripts and Gemini notes after each meeting, with no bot in the call, and pulls out decisions, action items, open questions and risks, each with the meeting it came from and a short quote as evidence. You confirm or dismiss what it found. And when you type a decision, like \"We decided not to pursue X\", it finds the open questions, risks and action items that decision settles, and closes them when you confirm.",
      },
      {
        type: "h2",
        text: "Common mistakes with meeting decision logs",
      },
      {
        type: "ul",
        items: [
          "Treating the notes folder as the log. A folder of docs is an archive. You can't filter it by owner or status.",
          "Logging only final decisions. The open questions and risks are what get dropped between meetings.",
          "Never closing anything. A log where nothing is marked superseded slowly fills with decisions that are no longer true, and people stop trusting it.",
          "Starting with a backfill. Don't try to log the last two years. Start with this week's meetings and build the habit first.",
        ],
      },
      {
        type: "p",
        text: "A decision log doesn't need to be clever. It needs to be the one place your team checks before reopening a debate. Google Meet now does a decent job of writing down what happened in each call. Keeping track of what it all adds up to is still on you, whether you do it with a spreadsheet and ten minutes a week or hand the busywork to a tool.",
      },
      {
        type: "cta",
        text: "Corteza turns your Google Meet transcripts and Gemini notes into a decision log your team can search, with owners, evidence and follow-through. It's in private beta and free during the beta.",
      },
    ],
  },
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
        text: "Tools built specifically for decision logging — like Corteza — read the transcripts and notes your meetings already produce, capture decisions without anyone taking notes, and make them searchable with natural language. The tradeoff is that it's another tool to adopt, though the best ones are designed to require almost no behaviour change.",
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
        type: "link",
        text: "Want the ready-made version? We put together a free decision log template: a formatted Excel file with status dropdowns and a how-to-use guide, plus a template you can copy straight into Notion, Google Docs or Confluence.",
        href: "/decision-log-template",
        linkLabel: "Get the free decision log template",
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
        text: "Skip the manual process — Corteza captures decisions automatically from your Google Meet meetings and makes them searchable.",
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
