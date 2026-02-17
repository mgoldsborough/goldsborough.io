---
title: "I Gave My AI Agent Eyes"
description: How Chrome DevTools MCP creates a closed feedback loop where AI agents can see, evaluate, and fix what they build in real time.
date: 2026-02-15
---

Last night I took a single HTML file, a concept mockup for a community landing page, and shipped it as a live Astro site on a custom domain. DNS configured, HTTPS enforced, GitHub Pages deploying on push. One session. One conversation with Claude.

That part is cool but it's not the story. The story is what happened when I said "the fonts seem kind of small."

## The AI saw what I saw

I've been using Claude Code for months. It's fast. It writes good code. But it has always been blind. It writes CSS, pushes it, and has no idea what the result actually looks like. You're the eyes. You screenshot, describe, explain. The AI guesses and adjusts.

I've tried to solve this before. Playwright seemed like the answer, an automated browser the AI could control. But it was never quite right. Spinning up a headless browser for every check was slow. The API is heavy, built for end-to-end test suites, not for quick "does this look right?" feedback during development. I'd use it for a week, get annoyed at the overhead, and forget about it for a few months.

My actual workflow was simpler: screenshot the page, paste it into Claude Code, and let the model look at the image. That worked surprisingly well. The AI could spot layout issues, read text, and reason about what it saw. But I was still the middleman. Every feedback cycle required me to take the screenshot, paste it, and wait. The AI had borrowed eyes, not its own.

Not anymore.

I connected Chrome DevTools through MCP (Model Context Protocol) — an MCP server that wraps the Chrome DevTools Protocol, so the agent can open URLs, execute JavaScript, and capture screenshots. Suddenly the AI could take a screenshot of the running page. When I mentioned the fonts looked small, it didn't ask me which elements or what sizes. It opened the page, triggered the scroll animations, took a full-page screenshot, and looked at it.

Then it *agreed with me*. Because it could see.

## From seeing to evaluating

Seeing is step one. What got me excited was step two.

I asked about accessibility on the pillar text. The text was this muted gray on a dark background, technically styled but hard to read. Instead of guessing, the AI executed JavaScript directly in the browser. It pulled computed colors from every text element on the page, calculated WCAG contrast ratios (the accessibility standard for readable text) against their actual backgrounds, and returned a table:

| Element | Ratio | WCAG AA |
|---------|-------|---------|
| Pillar body text | 2.71 | FAIL |
| Who "not for" text | 2.71 | FAIL |
| Section descriptions | 5.71 | PASS |
| Manifesto body | 5.44 | PASS |

Two failures. Both using the same CSS variable (`--text-muted: #555568`). The fix needed to hit 4.5:1 against two different backgrounds (the main background and the elevated card background).

So it calculated candidate replacement colors, keeping the same blue-gray hue, checking each one against both backgrounds. Landed on `#7b7b96` at 4.81:1. Changed one CSS variable. Reloaded the page. Re-ran the contrast check. Both passing.

One variable. Every muted text element on the site. Fixed, verified, done.

## The closed loop

This is what made it click for me. There's a loop here that didn't exist before:

**Code** the change. **Render** it in a real browser. **See** the result through a screenshot. **Evaluate** it programmatically. **Fix** what's wrong. **Verify** the fix.

No human in that loop. I didn't take the screenshot, didn't eyeball the colors, didn't run a checker. The agent did the full cycle — see, measure, fix, verify — in seconds.

I've been saying for a while that the constraint isn't AI capability. The models are already smart enough. What's missing is the system layer, the connective tissue that lets intelligence act in the real world. Chrome DevTools MCP is a perfect example. The model could always calculate contrast ratios. It could always reason about font sizes. What it couldn't do was *see the rendered page*. Give it a browser and suddenly all that capability has somewhere to go.

## What this unlocks

I keep thinking about what's downstream of this. If an AI agent can see a rendered page and evaluate it programmatically, you're looking at:

**Visual regression testing without snapshot libraries.** The agent renders the page, screenshots it, and evaluates whether it looks right — not by diffing pixels against a frozen snapshot, but by understanding the layout.

**Accessibility audits during development.** Not a post-hoc report you ignore. The agent checks contrast, focus order, and ARIA roles as you build, the same way a linter catches syntax errors.

**End-to-end QA that understands intent.** Not just "did the button appear" but "does this page communicate what it should to the target audience." The agent can read the page the way a user would.

The primitive is here: an AI agent with a browser it can see and control. The rest is implementation.

Google is already building the other side of this. [WebMCP](https://developer.chrome.com/blog/webmcp-epp), now in early preview in Chrome Canary, lets websites expose structured actions directly to AI agents — so instead of an agent interpreting raw HTML, the site tells the agent what it can do. Chrome DevTools MCP gives agents eyes. WebMCP gives websites a voice. Both sides of the same shift.

## Try it

The gap between "AI-assisted development" and "AI-native development" is exactly this: whether the agent can close its own feedback loop. When it can see, evaluate, and fix without waiting for you to describe the problem, you're operating differently.

I challenge you to connect Chrome DevTools MCP to your AI coding agent and build something. Don't just have it write code. Have it open the result, screenshot it, and evaluate what it built.

Watch what happens when your AI stops being blind. Then try going back.

---

*If this resonates, I'm building a community for AI-native founders, builders, and operators who are working this way. [agenticoperators.org](https://agenticoperators.org).*
