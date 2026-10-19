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
        text: "This is the problem we built Corteza around. It reads Google Meet transcripts and Gemini notes after each meeting, with no bot in the call, and pulls out decisions, action items, open questions and risks, each with the meeting it came from and a short quote as evidence. You confirm or dismiss what it found. When you record a new decision, it suggests closing the earlier questions and action items it resolves.",
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
