@AGENTS.md

# Alient marketing site — positioning guide

This is the single marketing page for alient.ai. Every copy change must stay
consistent with the positioning below. This is a **messaging** doc, not a
design doc — the dark visual system, layout, and animations are settled.

## Positioning thesis (the one idea)

Alient is **a general autonomous agent that executes complex work end to
end** — not an "AI software engineer." Coding is the flagship *proof of
capability*, never the product *identity*.

Old frame (retired): "You don't need a copilot, you need another engineer."
Current frame: **"You don't need another chatbot, you need an agent that
does the work."**

**Bridge sentence** (use it whenever coding evidence appears next to general
claims): *"If it can autonomously ship production code — the hardest
knowledge work there is — it can run the rest of your operation."*

Tagline: **"An AI agent that does the work, not just the chat."**
Never use "Hire the AI Teammate, not the tool" — it collides with a
competitor's tagline ("Not a tool. A hire.").

## The six strength pillars (foreground these)

1. **#1 on OSWorld computer-use** — 72.1%, +9.2 pts over previous SOTA.
2. **Operates any app** — computer-use reaches tools with no API.
3. **5-type compounding memory** — procedural, episodic, semantic, working, declarative.
4. **Private deployment / zero egress** — your hardware, your VPC, or a
   dedicated managed instance; always single-tenant, never a shared cloud.
   A Mac in your office is ONE deployment option — never present it as THE
   deployment story.
5. **Accountable autonomy** — risk-graded actions, human escalation, audit trail, rollback.
6. **Architectural moat** — "the same model in a different system gets a different answer."

## Competitive contrast (describe categories, never name competitors on-page)

1. **Chatbots & copilots** — you operate them; they draft; you ship.
   → Alient operates your tools and returns finished work.
2. **Cloud "AI coworker" bots** — chat-native, API-only, shared cloud.
   → Alient reaches any app via computer-use, runs single-tenant on a
   machine dedicated to you, and is accountable for the finished result.
3. **Frontier model labs** — sell horizontal capability.
   → Alient is the deployed, private, accountable agent that runs on top of
   their models and bundles computer-use + memory + safety + deployment.

## Proof inventory (real — preserve verbatim, never inflate)

- `72.1%` / `#1` OSWorld Benchmark, March 2026; `+9.2 pts` vs previous SOTA (Sonnet 4.5).
- Beats Claude Code on Terminal Benchmark on the same Claude Sonnet 4.6 backbone.
- The `#live-demo` YouTube embed (`p0IIO4391RQ`) is a real recorded coding session —
  frame it as *one example* of finishing work, don't imply non-coding parity.
- Seven-layer architecture diagram; on-device / zero-egress deployment.
- SOC 2 Type 1 and ISO 27001 are **targets** — always keep them labeled "targeted."
- **Ontfly (ontfly.ai)** is a consumer product built on the Alient engine —
  the agent builds sites, runs ad campaigns, drafts customer replies, manages
  sales. Usable as a "the engine generalizes" example; never as the headline.

## Honesty constraints (hard rules)

- No fabricated metrics, customers, logos, or testimonials.
- "Backed by [angel roster TBD]" stays as-is or gets removed — never invent investors.
- Where non-coding work is still early, use capability/architecture language
  ("operates any app," "joins meetings"), not made-up numbers.
- Never describe third-party open source (Graphiti, etc.) as proprietary.
- Founder facts stay accurate: Yurii Kulaksyz (co-founder & CTO, 8 yrs
  experience), Thirunavukkaresu "Swami" Swaminathan (co-founder & CEO,
  principal engineering manager, two decades enterprise software/security).

## Content model

All copy lives inline in `components/*.tsx` (no MDX/CMS). Page order is
`app/page.tsx`; metadata in `app/layout.tsx`; design system in
`app/globals.css`. The contact form posts to `app/api/contact/route.ts`
(PostgreSQL via `lib/db.ts`) — keep the form and fields intact.
