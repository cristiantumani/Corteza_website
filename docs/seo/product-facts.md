# Corteza: product facts for content

What Corteza does **today** (October 2026). Blog posts may only claim what is on this list. The weekly
review agent (in the corteza.app repo) keeps it up to date. When in doubt, leave the claim out.

## What it is

- A decision log and follow-through tool for teams on **Google Workspace**.
- Tagline idea: *Gemini takes the notes. Corteza makes sure decisions stick.*
- Status: **private beta**, free during the beta. CTA: request early access (`/early-access`).

## What it does

- **Automatic capture from Google Meet:** reads Meet transcripts and Gemini "Take notes for me" notes
  after each meeting. No bot joins the call. Past meetings can be imported.
- **Outcomes:** decisions, action items, open questions and risks, each with the meeting it came from,
  a short quote as evidence, owner and due date when stated. Each one is a short headline (at most 15
  words) with a one-line why; the quote shows when you open the outcome ("In the meeting").
- **Review:** AI-captured outcomes can be confirmed or dismissed; dismissals teach the extraction.
- **Action items:** owners, due dates, done/cancelled; an Active and a Resolved tab; the text, the why
  and the owners can be edited; "Does this also resolve…?" when one is done.
- **Open questions and risks:** who raised them; a question is marked answered (with the answer), a risk
  mitigated (with how), and either can be reopened.
- **Topic threads:** a question, its risks, decisions and next steps about one subject stay together.
  Each open question or risk shows how long it has been open and its next step (or "No next step"),
  the whole thread has its own view, a decision in the thread can be used as the answer, and an item
  can be marked "Not related" to take it out.
  Linking a new meeting's outcomes to earlier meetings (and suggesting to close the earlier items a new
  decision resolves) is being turned on workspace by workspace, so don't present it as available to
  everyone yet.
- **Decide and close:** type "We decided not to pursue X" and Corteza finds the open questions, risks and
  action items it settles, and closes them when you confirm.
- **Morning summary email:** your due and overdue items, and prep for today's meetings with what is
  still open from each meeting's earlier sessions (with the optional calendar permission). Written by a
  "morning partner" with a personality (The Sergeant, The Sarcastic Colleague), or plain, as each person
  picks in Settings.
- **Home:** "Prepare your day" with today's meetings and their open items; mark items done in place.
  A Meetings tab lists each of your meetings (last 90 days) with what came out of it; a skipped or
  failed meeting can be captured again from there.
- **Search:** ask questions in plain language ("What did we decide about pricing?", "What's pending
  from Ana?", "What's pending from the growth weekly?") and get an answer with its sources.
- **Context for the AI:** a company description, a glossary and documents (uploaded, or picked from
  Google Drive by an admin) help the AI capture what matters and spell names right.
- **Sensitive topics:** people matters (performance, leaving, pay, health…) stay visible only to the
  person whose meeting it was.
- **Languages:** English and Spanish (the app and the emails).
- **Works on a phone** in the browser (no mobile app).
- **Other inputs:** Chrome extension, manual entry, transcript upload, Slack `/decision`.
- **Your AI assistant:** connect Corteza to Claude, ChatGPT or another assistant that supports MCP
  connectors (Settings → AI assistants, sign in with Google). Ask it what was decided, what's pending
  or to prepare your day; it sees only what you see, never sensitive topics. It can also propose
  changes (record a decision, add or update an action item, close a question or risk): each is shown
  first, made only when you confirm, marked "via" the assistant and can be undone for 24 hours.
  Admins can limit assistants to reading or turn them off.
- **Lost Google connection:** if Google stops letting Corteza read your meetings, you get an email
  with a one-click Reconnect (and a reminder 3 days later); meetings held meanwhile are captured once
  you reconnect.

## Privacy and security (safe to say)

- Transcripts are **not stored**: only the outcomes.
- Meeting content is **encrypted with a key per workspace**.
- Colleagues never see each other's personal space.
- Google user data is not used to train AI models (Google API Services Limited Use).
- The database is in the EU (MongoDB Atlas on AWS, Paris), and error monitoring (Sentry) is in the EU.
- Encrypted nightly backups, kept for 30 days; errors and failed captures raise alerts.
- A public security page: <https://app.corteza.app/security> (English and Spanish).

## Never claim

- Support for Zoom, Microsoft Teams or other meeting tools (Google Meet only).
- Certifications (SOC 2, ISO 27001, HIPAA…), a pentest, or Google verification status (they're on
  the roadmap, not done).
- That all data stays in the EU: hosting's region isn't confirmed yet, and AI providers may process
  data in the US.
- Meeting feedback or a scorecard for the organizer: it's on the roadmap, not built.
- A mobile app.
- Prices, plans, customer names, customer counts, or statistics we don't have a source for.
- Integrations other than Google Meet/Calendar/Drive, Slack (input only), Jira linking, the Chrome
  extension, and the connector for AI assistants (MCP).
- That an AI assistant changes things in Corteza on its own: every change needs the person's
  confirmation.
