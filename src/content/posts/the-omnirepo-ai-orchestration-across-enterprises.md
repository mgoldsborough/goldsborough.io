---
title: "The Omnirepo: AI Orchestration Across Your Enterprise"
description: What if your entire company lived in one structure that AI could traverse? How the omnirepo pattern enables horizontal orchestration from engineering through marketing to strategy.
date: 2025-01-06
---

I've been running my company out of a single repository for the past year. Not just code. Strategy docs. Marketing materials. Brand voice. Operational playbooks. Everything.

It started as an experiment. Now I can't imagine working any other way.

What if your entire company lived in one structure that AI could traverse? That's the question I kept asking myself. And the answer turned out to be more powerful than I expected.

This is the omnirepo. And it changes how organizations operate.

---

## The Fragmentation Problem

Here's how most companies work today:

- Strategy lives in Notion (or worse, someone's head)
- Product specs live in Confluence
- Code lives in GitHub
- Marketing materials live in Google Docs
- Brand guidelines live in a PDF no one reads
- Operational knowledge lives in Slack threads

When you ship a feature, what happens? An engineer writes code. A PM updates the spec. Someone remembers to tell marketing. Marketing writes a blog post that may or may not align with your positioning. Social posts go out with inconsistent messaging. The docs get updated... eventually.

Every handoff is a game of telephone. Context gets lost. Alignment is manual. Coherence is accidental.

**The problem isn't AI capability. It's organizational structure.**

I've used dozens of AI tools over the past two years. They're all capable. But they all operate in silos. Your coding assistant doesn't know your brand voice. Your writing assistant doesn't know your product architecture. Your strategy tool doesn't know what you shipped last week.

The models aren't the constraint. The structure is.

---

## The Omnirepo Vision

An omnirepo is a single repository containing everything your company produces. Not just code. Everything.

```
acme/
├── os/                    # Company operating system
│   ├── STRATEGY.md        # The bet, the customer, what we don't do
│   ├── POSITIONING.md     # How we talk about ourselves
│   └── PRODUCT.md         # What we build, for whom
├── apps/                  # Products
│   ├── api/               # Backend services
│   ├── web/               # Web application
│   └── mobile/            # Mobile apps
├── marketing/             # Go-to-market
│   ├── BRAND_VOICE.md     # How we sound
│   ├── content/           # Blog posts, case studies
│   └── campaigns/         # Active campaigns
├── docs/                  # Documentation
├── websites/              # Marketing sites
└── CLAUDE.md              # AI orchestration context
```

Here's what surprised me: once AI can traverse the whole structure, coherence just happens. You stop enforcing it. It emerges.

The AI that helps you write code knows your positioning. The AI that drafts your blog post knows what feature you just shipped. The AI that creates social posts knows your brand voice. Everything connects. And honestly? It's a little magical the first time you see it work.

---

## Horizontal Orchestration in Action

Last month I shipped a feature and needed docs, a blog post, and social posts to go with it. Here's how most companies handle this versus how the omnirepo handles it.

### The Old Way

1. **Engineering** merges the PR
2. **Product** updates the changelog (if they remember)
3. **Docs** writes the documentation (next sprint, maybe)
4. **Marketing** hears about it in standup
5. **Marketing** writes a blog post (based on the PR description)
6. **Social** creates posts (based on the blog post)
7. **Everyone** hopes the messaging is consistent

Timeline: 2-3 weeks. Alignment: questionable.

### The Omnirepo Way

```
/ship-feature "Analytics Dashboard" --blog --social
```

One command. The AI:

1. **Reads the code changes** to understand what was built
2. **Reads `os/POSITIONING.md`** to understand how to frame it
3. **Reads `marketing/BRAND_VOICE.md`** to get the right tone
4. **Drafts documentation** following the patterns in `docs/`
5. **Writes a blog post** in `marketing/content/drafts/`
6. **Creates social posts** aligned with active campaigns
7. **Updates the changelog** with consistent terminology

Timeline: 5 minutes. Alignment: guaranteed. And I didn't have to context-switch once.

The AI doesn't just know what you built. It knows _how your company talks about what you build_. That's the part that gets me excited.

---

## The Slash Commands That Change Everything

Here's what becomes possible when your enterprise lives in one traversable structure:

### `/ship-feature`

- **Triggers:** Code merged to main
- **Orchestrates:** Docs → Changelog → Blog → Social

The AI reads the diff, understands the impact, and cascades updates across every system that needs to know. Documentation uses your doc patterns. The blog post uses your voice. Social posts fit your campaign calendar.

### `/update-pricing`

- **Triggers:** Pricing strategy change
- **Orchestrates:** Strategy → Docs → Website → Sales materials

You update `os/PRICING.md` with new tiers. The AI cascades changes to your documentation, updates the pricing page on your website, and flags sales materials that need revision. One source of truth, automatically propagated.

### `/launch-campaign`

- **Triggers:** New marketing campaign
- **Orchestrates:** Strategy → Content calendar → Blog posts → Social → Tracking

You describe the campaign. The AI reads your positioning, generates a content plan aligned with your themes, drafts initial posts in your voice, and sets up tracking in your ops log.

### `/onboard-teammate`

- **Triggers:** New team member joins
- **Orchestrates:** Context docs → Access setup → First-week guide

The AI reads your organizational structure, generates a personalized onboarding guide that explains how your company works, what each submodule does, and how to get started in their specific role.

### `/weekly-review`

- **Triggers:** End of week
- **Orchestrates:** Git history → Ops log → Content tracker → Summary

The AI traverses your entire omnirepo, sees what changed, what was published, what's pending, and generates a coherent summary of the week. No more "what did we ship?" Slack threads.

### `/extract-knowledge`

- **Triggers:** End of session, before signing off
- **Orchestrates:** Session review → CLAUDE.md updates → Knowledge capture

This one's critical. Before ending a work session, AI reviews what was accomplished, identifies decisions and patterns worth capturing, and updates the relevant context files. New conventions get added to CLAUDE.md. Positioning refinements go to `os/`. Voice decisions go to `marketing/`.

This is how the omnirepo compounds. Without it, every session starts from scratch. With it, AI gets progressively smarter about your organization.

---

## What These Commands Actually Replace

Notice what disappears when you adopt this pattern:

- No JIRA ticket to marketing asking them to write about your feature
- No Slack thread asking "did we update the docs?"
- No alignment meeting to make sure messaging is consistent
- No style guide that everyone ignores anyway
- No "I'll get to that next sprint" for documentation

Conversation replaces configuration. Structure replaces process. You express intent once, and the system handles coordination.

In my experience, this is the most underrated benefit. It's not just faster. It's _less work to manage_. The coordination overhead that used to eat hours every week just... vanishes.

### But What About Ticketing Systems?

Here's a common question: "Does this replace JIRA/Linear/GitHub Issues?"

No. It integrates with them.

Tickets aren't bad. Ad-hoc coordination tickets are bad. The omnirepo changes _how_ you use ticketing systems:

- **Before:** Tickets are the coordination mechanism ("Hey marketing, can you write about this feature?")
- **After:** Tickets are handoff points for async work that needs human review or lives outside the omnirepo

For example, while working in the omnirepo, AI might discover an API bug that's outside the current scope. Instead of context-switching or losing the thread, it creates a GitHub issue:

```bash
gh issue create --repo acme/api \
  --title "Auth token refresh fails silently during long-running requests" \
  --label "bug" --label "api" \
  --body "Discovered while working on analytics dashboard.
         Token expires mid-request without clear error.

         Suggested: Add proactive refresh at 80% TTL."
```

Or file a feature request in Linear:

```bash
linear issue create --team API \
  --title "Add rate limiting headers to all endpoints" \
  --description "Clients need X-RateLimit-* headers for backoff logic."
```

The issue lands in the right system, tagged appropriately, ready for the right team to pick up. You stay focused. The work doesn't get lost. Another session (or another person) can pick it up with full context.

Here's what this looks like in practice. While writing this very post, I discovered we should add a `/create-issue` slash command to the omnirepo starter kit. Instead of stopping to build it now:

```bash
gh issue create --repo nimblebraininc/studio \
  --title "Add /create-issue slash command for cross-repo handoffs" \
  --label "enhancement" \
  --body "Support creating issues in any submodule repo from root.
         Should integrate with GitHub, Linear, JIRA.

         Context: Discovered while writing omnirepo blog post."
```

The issue exists. I can continue writing. Tomorrow (or next week, or someone else) can pick it up without needing the context that's in my head right now.

This is the pattern: **omnirepo for orchestration, tickets for handoffs.** The AI knows when something is in scope (do it now) versus out of scope (create a ticket, move on).

---

## The Architecture

How do you make this work? Three layers:

### Layer 1: The Operating System (`os/`)

Your company's source of truth. Strategy, positioning, product definition, pricing. These are the documents that every other system references.

```
os/
├── STRATEGY.md       # What we're building and why
├── POSITIONING.md    # How we differentiate
├── PRODUCT.md        # Features, audience, use cases
├── PRICING.md        # Plans, limits, what's included
└── PLAYBOOKS.md      # How we operate
```

When AI writes anything, it reads these first. This is how alignment happens without manual enforcement.

### Layer 2: Domain Submodules

Each functional area lives in its own submodule with its own context:

```
apps/api/CLAUDE.md     # API patterns, security requirements
docs/CLAUDE.md         # Documentation structure, components
marketing/CLAUDE.md    # Voice guidelines, content types
```

These CLAUDE.md files (or whatever you call them) tell AI how to operate in each domain. The API agent knows about authentication patterns. The docs agent knows about your MDX components. The marketing agent knows your voice.

I've found that writing these context files is where the real leverage is. Spend an hour documenting how your marketing should sound, and every piece of content from that point forward reflects it. The investment compounds.

### Layer 3: Orchestration Commands

Slash commands at the root that coordinate across domains:

```
.claude/commands/
├── ship-feature.md       # Code → Docs → Marketing
├── update-pricing.md     # Strategy → Everything
├── launch-campaign.md    # Marketing → Content → Social
├── weekly-review.md      # Everything → Summary
└── extract-knowledge.md  # Session → Knowledge capture
```

Each command defines which domains to touch, in what order, with what context. The AI handles the traversal.

---

## Two Ways to Build It

Here's something important: "omnirepo" doesn't mean "monorepo." The "omni" refers to scope (everything your organization produces), not implementation. You have two choices:

### Option A: True Monorepo

Everything in a single repository. Directories instead of submodules.

```
acme/
├── os/
├── apps/
├── marketing/
├── docs/
└── websites/
```

**Pros:**
- Simpler to manage
- Atomic commits across the whole org
- Single clone, single history

**Cons:**
- All-or-nothing permissions (everyone sees everything)
- Can get unwieldy at scale
- Not great for compliance requirements

**Best for:** Startups, small teams, high-trust environments, single-product companies.

### Option B: Meta-repo (Repo of Repos)

A root repository that references other repositories as submodules. Each submodule is its own repo with its own permissions.

```
acme/                          # Root meta-repo
├── os/                        # Submodule → github.com/acme/os
├── apps/studio/               # Submodule → github.com/acme/studio
├── marketing/                 # Submodule → github.com/acme/marketing
├── docs/                      # Submodule → github.com/acme/docs
└── CLAUDE.md                  # Orchestration context (in root)
```

**Pros:**
- Granular permissions per submodule
- Each team owns their repo
- Works with existing enterprise access controls
- Scales to large organizations

**Cons:**
- More complex to manage (submodule sync, updates)
- Commits don't span repos atomically
- Requires discipline to keep in sync

**Best for:** Enterprises, multi-team orgs, compliance-heavy industries, companies with existing repo structures.

### Which Should You Choose?

I run my company on the meta-repo model. Each domain (code, marketing, docs, strategy) is its own repo, but the root provides the traversable structure. AI doesn't care whether it's reading a directory or a submodule. It just needs to traverse.

The key insight: **the structure is what matters, not the implementation.** Pick the model that fits your organization's constraints. The AI benefits are the same either way.

---

## Why This Matters

### 1. Coherence Without Coordination

Every piece of content your company produces draws from the same sources of truth. Your blog posts sound like your docs sound like your social posts. Not because someone enforced it, but because the AI read the same voice guide for all of them.

### 2. Changes Cascade Automatically

Update your pricing strategy once. The AI propagates it everywhere. No more "did we update the docs?" No more inconsistent messaging across channels. One change, automatic cascade.

### 3. Institutional Knowledge Persists

Your omnirepo captures how your company operates. New team members don't learn from tribal knowledge. They read the structure. The AI can explain any part of it.

### 4. Speed Without Sacrifice

Traditional approach: speed means cutting corners on alignment.
Omnirepo approach: speed and alignment are the same thing.

When shipping a feature automatically triggers aligned content across every channel, you don't have to choose between fast and coherent. This was the tradeoff I always hated. Turns out it was a false one.

### 5. The AI Gets Smarter Over Time

Every document you add makes the AI more capable. Add a case study? The AI can reference it in future content. Refine your positioning? Every future piece reflects it. The structure compounds.

---

## The Omnirepo Manifesto

If you take one thing from this post, take these principles. This is what I've learned about building organizations that AI can actually help:

<div class="manifesto">

### The Omnirepo Manifesto

Knowledge trapped in heads is lost. Coordination is exhausting. Every alignment meeting is an hour stolen from creation. Structure gives that time back.

**1. Structure Over Process**
Alignment comes from shared context, not meetings. If you're coordinating manually, your structure is broken.

**2. Everything Traversable**
If AI can't read it, it can't help with it. No knowledge locked in heads, Slack threads, or tools that don't export.

**3. History Preserved**
Every change tracked. Evolution visible. AI understands not just what exists, but how it evolved and why.

**4. Single Source of Truth**
Each concept lives in one place. Everything else references it. Never duplicate. Always link.

**5. Context at Every Boundary**
Each domain declares how it works. AI reads these declarations before acting. No implicit knowledge.

**6. Design for AI, Not Just Humans**
Humans navigate. AI traverses. Optimize for both. Clear file names, consistent patterns, explicit relationships.

**7. Orchestration at the Root**
Cross-cutting workflows live at the top. One command, multiple domains, coordinated output.

**8. Compound Over Time**
Every document makes AI more capable. Structure is an investment. The returns accumulate.

</div>

_Go deeper at [omnirepo.org](https://www.omnirepo.org)._

---

## Getting Started

You don't need to restructure your entire company overnight. Here's what I'd do:

**First:** Write down your strategy and positioning. Just get it out of your head and into a file. `os/STRATEGY.md`. This becomes the anchor for everything else.

**Second:** Document how your company sounds. What words do you use? What do you avoid? `marketing/BRAND_VOICE.md`. This takes an hour and pays dividends forever.

**Third:** Build one workflow. Just one. Pick your most common cross-functional operation. Maybe it's shipping features. Write a command that orchestrates it.

I challenge you to try this for a single release. Run `/ship-feature` once and watch docs, blog, and social posts appear, all aligned, all in your voice, in minutes instead of weeks.

You'll never go back to the telephone game.

---

## The Bigger Picture

The omnirepo isn't really about repository structure. It's about a fundamental shift in how AI integrates with organizations.

Today, AI tools are siloed. An AI for coding. An AI for writing. An AI for analysis. Each operates in isolation, each missing the context that would make it truly useful.

Tomorrow, AI will be horizontal. One intelligence that understands your entire organization. That can traverse from strategy to implementation to communication. That maintains coherence across functions that used to be siloed.

The omnirepo is the structure that makes this possible. Not because the structure is magic, but because it gives AI something to traverse. Something complete. Something coherent.

Your company is a system. The omnirepo makes it a system that AI can understand.

But once you experience it, it feels obvious. Like this is how it should have always worked. Why _wouldn't_ you want your AI to know your whole context? Why _wouldn't_ you want changes to cascade automatically?

The best tools feel inevitable in retrospect. I think the omnirepo is one of them.

The question isn't whether AI will transform how companies operate. It's whether your organization is structured for AI to help.

The omnirepo is that structure. The manifesto is the principles. And if you build it, you can thank me later.
