---
title: Baselines, overlays and the 4 controls
audience: [practitioner, board, contributor]
apps: [suite]
jurisdictions: [au, other]
lastReviewed: 2026-11-17
sidebar_position: 2
---

A **baseline** is what a well-run organisation in a sector would have in place for artificial intelligence (AI), in any country. An **overlay** is what one jurisdiction's laws and regulators add to the baseline.

The apps build every sector pack from a baseline and, where there is one, an overlay. This gives any organisation, anywhere, a sound starting point. An organisation in a jurisdiction the suite covers also gets its own obligations.

## Why the suite has them

We wrote the first packs for one country and one regulator at a time. Examples were a general insurer regulated by the Australian Prudential Regulation Authority (APRA), a superannuation trustee, an authorised deposit-taking institution (ADI) and a financial institution regulated by the Monetary Authority of Singapore (MAS).

That approach does not work well for new jurisdictions. It also gives nothing to organisations outside Australia and Singapore. Baselines solve this by separating 2 kinds of content:

- **Good practice for the sector.** This comes from international standard-setters and adopted standards. The standard-setters are the Basel Committee on Banking Supervision (BCBS), the Financial Stability Board (FSB), the International Association of Insurance Supervisors (IAIS), the International Organization of Securities Commissions (IOSCO), the World Health Organization (WHO), the Financial Action Task Force (FATF) and the Organisation for Economic Co-operation and Development (OECD). The standards are ISO/IEC 42001 and 42005, the US National Institute of Standards and Technology (NIST) AI Risk Management Framework and IEC 62443. Good practice changes slowly and is the same everywhere.
- **Obligations in the jurisdiction.** These are the obligations that are binding or expected. They are stored as records in the Obligations Atlas, and the matter brief adds them to an engagement. Counsel advises on these.

In a jurisdiction the suite covers, a sector pack is the baseline plus that jurisdiction's overlay. In any other jurisdiction, a sector pack is the baseline only, and the Atlas states that the jurisdiction is not covered.

Superannuation is the only pack without a baseline. This is because it is specific to Australia, and no international source describes it.

## The 8 baseline profiles

The 8 baseline profiles are:

- banking
- insurance
- securities and investment advice
- health care
- payments and money transmission
- critical infrastructure, managed by government
- critical infrastructure, managed by a company
- government in general.

The Metamodel's [best-practice baselines](/reference/apps/metamodel/baselines) page lists each profile's ID, its sources and the name it uses for the governing body. This page explains how the apps use the profiles.

Each profile gives the apps:

| Element | Where it appears |
| --- | --- |
| Areas of the business | The starting areas at B2 in AI Board Direction; the functions in AI Risk Appetite |
| Critical operations | Lite scope in AI Use Assessment; the consequence question at decision 2 for health care and critical infrastructure |
| Typical AI uses with their usual authority level (A1 assists to A6 changes systems) | The B1 inventory prompts; the register's arrangement types |
| Failure cases | The director briefing at B0 |
| Uses boards commonly consider ruling out | Offered at B3 only if the board asks; never a recommendation |
| Governing body label | "Board" or "accountable authority" throughout the outputs |

Some governing bodies are an accountable authority, such as an agency head, the board of a statutory authority or a minister's delegate. For these, the apps say "accountable authority" instead of "board".

## Which sectors build on which baseline

| Jurisdiction | Main sectors and their baselines | Overlay |
| --- | --- | --- |
| Australia | Superannuation (no baseline); banking; insurance; health; critical infrastructure | Obligations from the Atlas, including those of APRA, the Australian Securities and Investments Commission (ASIC) and the Office of the Australian Information Commissioner (OAIC). Covered in full |
| Singapore | Banking; insurance; capital markets (securities); listed companies; critical infrastructure | Obligations from the Atlas, including those of MAS. Covered in full |
| United States | Banking; insurance; securities and investment advice; health care; critical infrastructure (corporate baseline, or government for a public operator) | Federal and state instruments for each sector, from the Atlas. See [United States](./united-states.md). Covered in full |
| Any other jurisdiction | Any of the 8 baselines | None. The Atlas states that the jurisdiction is not covered, and the apps use the baseline only |

The payments baseline is used everywhere without an overlay. No international standard-setter has issued guidance on AI for payment providers, and the profile states this. Listed companies, and organisations that are not financially regulated, use the general path.

## The 4 controls in every baseline

Every baseline includes the same 4 controls. They deal with a problem every sector has: staff start using AI faster than the organisation can approve it, and the organisation cannot see AI use it has not approved.

The controls make it quick to get AI use approved, and let the organisation measure how quickly that happens. They also set clear controls for the hardest cases, which are AI agents that take actions.

| ID | Control | What it asks for | Where it appears in the apps |
| --- | --- | --- | --- |
| BC1 | Agent controls | For each use at A3 and above: permission scope, an action log, a human checkpoint before actions at A4 and above, and a way to stop the agent | AI Use Assessment, on register entries at A3 and above; output AC |
| BC2 | Fast path | A position from the board or accountable authority that management will approve uses at A1 and A2, with consequence C1 or C2, within a stated number of days | AI Board Direction at B4. Included in the board directions as event FP, so the file format does not change |
| BC3 | One evidence register | Each provider's evidence (E0 to E6) recorded once and mapped to every regime in the matter brief | AI Use Assessment; output ER |
| BC4 | Productivity measures | Days from request to approval for a new AI use. Share of AI use on approved tools | AI Risk Appetite measures M11 and M12 in every pack. AI Board Direction measures BM7 and BM8. Both appear in the board view |

BC2 and BC4 are based on the finding that unapproved AI use falls sharply when approved tools are provided quickly. One vendor reported an 89% drop in 2026. Most of the evidence so far comes from surveys and vendors. BC4 lets each organisation measure its own result, so it does not have to rely on those claims.

## What a baseline is not

- **A baseline is not an obligation.** Baseline sources are cited as guidance or as adopted standards. Whether an organisation must do any of it depends on the overlay. That is a question for counsel. The apps label baseline content so you can tell it apart.
- **A baseline is not an appetite.** Baselines give starting positions and prompts. They never say what an organisation's appetite should be.
- **A baseline can change.** We re-check draft sources and sources still being developed every quarter. Examples are the NIST Cyber AI Profile and the NIST critical infrastructure profile. When a profile changes, its version number goes up.

## For contributors

The profiles and controls are reference data in Triodian_Metamodel, in `reference-data/baseline-profiles.json` and `baseline-controls.json`. Each file has a schema. Each jurisdiction's sectors link to their baselines in `regulated-sectors.json`.

An overlay tool builds each overlay from a file for that jurisdiction. The first was `content/overlays/us.json`. This means packs are generated, not written by hand.

[Adding a jurisdiction](/reference/apps/metamodel/adding-a-jurisdiction) lists the 6 steps for a new jurisdiction. The guide [Add a jurisdiction](/guides/extending-the-suite/add-a-jurisdiction) shows how we followed those steps for the United States.


## Sources

- [BCBS, Principles for the sound management of third-party risk (Dec 2025)](https://www.bis.org/bcbs/publ/d605.htm)
- [IAIS, Application Paper on the supervision of AI (Jul 2025)](https://www.iais.org/2025/07/the-iais-publishes-application-paper-on-the-supervision-of-artificial-intelligence/)
- [FSB, Monitoring adoption of AI and related vulnerabilities (Oct 2025)](https://www.fsb.org/2025/10/monitoring-adoption-of-artificial-intelligence-and-related-vulnerabilities-in-the-financial-sector/)
- [WHO, Guidance on large multi-modal models (Jan 2024)](https://www.who.int/publications-detail-redirect/9789240084759)
- [OECD, Governing with Artificial Intelligence (Sep 2025)](https://www.oecd.org/en/publications/2025/06/governing-with-artificial-intelligence_398fa287.html)
- [NIST, concept note on an AI RMF profile for critical infrastructure (Apr 2026)](https://www.nist.gov/programs-projects/concept-note-ai-rmf-profile-trustworthy-ai-critical-infrastructure)
- [Triodian_Metamodel: baseline profiles and controls](https://github.com/Triodian/Triodian_Metamodel/tree/main/reference-data)
