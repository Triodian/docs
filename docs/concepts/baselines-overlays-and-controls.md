---
title: Baselines, overlays and the four controls
audience: [practitioner, board, contributor]
apps: [suite]
jurisdictions: [au, other]
lastReviewed: 2026-11-15
sidebar_position: 2
---

A **baseline** is what a well-run organisation in a sector would have in place for AI, in any country; an **overlay** is what one jurisdiction's law and regulators add on top. The apps build every sector pack this way, so an organisation anywhere gets a sound starting point, and an organisation in a covered jurisdiction gets its own obligations as well.

## Why the suite has them

The first packs were written for one country and one regulator at a time: a general insurer under APRA, a super trustee, an ADI, a MAS-regulated financial institution. That does not scale to a new jurisdiction, and it leaves an organisation outside Australia and Singapore with nothing. Baselines separate the two kinds of content:

- The sector's own good practice, drawn from international standard setters and adopted standards (BCBS, FSB, IAIS, IOSCO, WHO, FATF, OECD; ISO/IEC 42001 and 42005, the NIST AI Risk Management Framework, IEC 62443). This changes slowly and is the same everywhere.
- The jurisdiction's binding and expected obligations, held as records in the Obligations Atlas and brought into an engagement by the matter brief. This is what counsel advises on.

A sector in a covered jurisdiction is a baseline plus that jurisdiction's overlay. A sector in any other jurisdiction gets its baseline alone, with the Atlas saying plainly that the jurisdiction is not covered. Superannuation is the one pack with no baseline under it, because it is Australian in a way no international source describes.

## The eight baseline profiles

Banking; insurance; securities and investment advice; health care; payments and money transmission; critical infrastructure, government-managed; critical infrastructure, corporate-managed; government in general. The profiles, their ids, their sources and the governing-body label each uses are set out in the Metamodel's [best-practice baselines](/reference/apps/metamodel/baselines) page, which is the reference; this page explains how they are used.

Each profile gives the apps:

| Element | Where it appears |
| --- | --- |
| Areas of the business | The starting areas at B2 in AI Board Direction; the functions in AI Risk Appetite |
| Critical operations | Lite scope in AI Use Assessment; the consequence question at decision 2 for health care and critical infrastructure |
| Typical AI uses with their usual authority level (A1 assists to A6 changes systems) | The B1 inventory prompts; the register's arrangement types |
| Failure cases | The director briefing at B0 |
| Uses boards commonly consider ruling out | Offered at B3 only if the board asks; never a recommendation |
| Governing body label | "Board" or "accountable authority" throughout the outputs |

Where the governing body is an accountable authority (an agency head, the board of a statutory authority, a minister's delegate), the apps say so wherever they would otherwise say "board".

## Which sectors build on which baseline

| Jurisdiction | Main sectors and their baselines | Overlay |
| --- | --- | --- |
| Australia | Superannuation (no baseline); banking; insurance; health; critical infrastructure | APRA, ASIC, OAIC and other obligations from the Atlas; covered in full |
| Singapore | Banking; insurance; capital markets (securities); listed companies; critical infrastructure | MAS and other obligations from the Atlas; covered in full |
| United States | Banking; insurance; securities and investment advice; health care; critical infrastructure (corporate baseline, or government for a public operator) | Federal and state instruments by sector from the Atlas: see [United States](./united-states.md); covered in full |
| Any other jurisdiction | Any of the eight baselines | None: the Atlas says the jurisdiction is not covered, and the apps run on the baseline alone |

Payments uses its baseline everywhere without an overlay, because no international standard setter has issued AI-specific guidance for payment providers and the profile says so. Listed companies and organisations outside financial regulation use the general path.

## The four controls every baseline carries

Four controls appear in every baseline because they answer the same problem in every sector: AI use spreads faster than approval, and what is unapproved is unseen. The controls make the approved route quick and measurable, and put the hardest cases (agents that act) under explicit control.

| ID | Control | What it asks for | Where it lives in the apps |
| --- | --- | --- | --- |
| BC1 | Agent controls | For each use at A3 and above: permission scope, an action log, a human checkpoint before actions at A4 and above, and a way to stop the agent | AI Use Assessment, on register entries at A3 and above; output AC |
| BC2 | Fast path | A board or accountable-authority position that uses at A1 and A2 with consequence C1 or C2 are approved by management within a stated number of days | AI Board Direction at B4; carried in the board directions as event FP, so the file format is unchanged |
| BC3 | One evidence register | Each provider's evidence (E0 to E6) recorded once and cross-walked to every regime in the matter brief | AI Use Assessment; output ER |
| BC4 | Productivity measures | Days from request to approval for a new AI use; share of AI use on sanctioned tools | AI Risk Appetite measures M11 and M12 in every pack; AI Board Direction measures BM7 and BM8; both in the board view |

BC2 and BC4 rest on the observation that unapproved AI use falls sharply when approved tools are provided quickly (an 89% drop in one vendor's 2026 finding). The evidence is still mostly from surveys and vendors, which is why BC4 exists: each organisation measures its own result rather than taking the claim on trust.

## What a baseline is not

- **Not an obligation.** A baseline source is cited as guidance or as an adopted standard. Whether an organisation is obliged to do any of it depends on the overlay and is counsel's question. The apps mark baseline content as such.
- **Not an appetite.** Baselines give starting positions and prompts, never a view on what any organisation's appetite should be.
- **Not fixed.** Sources marked draft or in development (the NIST Cyber AI Profile, the NIST critical infrastructure profile) are re-checked each quarter, and a change to a profile raises its version.

## For contributors

The profiles and controls are reference data in Triodian_Metamodel (`reference-data/baseline-profiles.json` and `baseline-controls.json`, each with a schema), and each jurisdiction's sectors point to their baselines in `regulated-sectors.json`. Overlays are built by an overlay tool from a per-jurisdiction file (`content/overlays/us.json` was the first), so a pack is generated, not hand-written. The six steps for a new jurisdiction are in [adding a jurisdiction](/reference/apps/metamodel/adding-a-jurisdiction), and the guide [Add a jurisdiction](/guides/extending-the-suite/add-a-jurisdiction) walks them as they were run for the United States.


## Sources

- [BCBS, Principles for the sound management of third-party risk (Dec 2025)](https://www.bis.org/bcbs/publ/d605.htm)
- [IAIS, Application Paper on the supervision of AI (Jul 2025)](https://www.iais.org/2025/07/the-iais-publishes-application-paper-on-the-supervision-of-artificial-intelligence/)
- [FSB, Monitoring adoption of AI and related vulnerabilities (Oct 2025)](https://www.fsb.org/2025/10/monitoring-adoption-of-artificial-intelligence-and-related-vulnerabilities-in-the-financial-sector/)
- [WHO, Guidance on large multi-modal models (Jan 2024)](https://www.who.int/publications-detail-redirect/9789240084759)
- [OECD, Governing with Artificial Intelligence (Sep 2025)](https://www.oecd.org/en/publications/2025/06/governing-with-artificial-intelligence_398fa287.html)
- [NIST, concept note on an AI RMF profile for critical infrastructure (Apr 2026)](https://www.nist.gov/programs-projects/concept-note-ai-rmf-profile-trustworthy-ai-critical-infrastructure)
- [Triodian_Metamodel: baseline profiles and controls](https://github.com/Triodian/Triodian_Metamodel/tree/main/reference-data)
