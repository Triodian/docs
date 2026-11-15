---
title: "Confidentiality Exposure Assessment framework"
audience: [practitioner, board]
apps: [suite]
lastReviewed: 2026-11-15
sidebar_position: 5
---

The assessment establishes, for one live or recently closed confidential matter, every channel by which the organisation's matter information can reach an external AI model, and what the organisation could show about each if asked whether the information left. The matter can be a deal, a litigation or dispute, an R&D or intellectual property programme, a tender or bid, board papers, or export-controlled data; the method is the same for each, and the type sets the profile's wording, the stages, the adviser types and the names of the information classes. It is the technical half of a joint engagement led by counsel: counsel answers what the organisation can require of its people and advisers and what it must disclose if information leaves; the assessment answers what can actually be shown.

| Item | Position |
| --- | --- |
| Question answered | For each channel by which matter information can reach an external model, what evidence can the organisation produce that the information did not leave, or of what left and when? |
| Unit of assessment | One channel: a sanctioned tool and its terms, a personal account or device, an enterprise assistant's reach over the matter folders, a data-room export path, or one adviser's tooling |
| Instruments | The channel register, the five questions and the non-egress evidence ladder |
| Duration | Two weeks |
| Inputs, through counsel | The matter team and those with access, the adviser list and their letters, the terms that bind the matter, the board's confidentiality position if set, the tenant owner's configuration summary, the sanctioned tools' terms; optionally a summary from a data-security tool of which channels carry matter content |
| Not required | Matter content, system access, matter data, provider involvement |
| Outputs | The channel register, one finding per channel, a 90-day plan from what exists, the residual gap marked, a technical annex |
| Independent check | Validation by a separate hand; an external checker if counsel confirms one |
| Measure | The organisation's own duties and the terms it has signed, as counsel determines them; solution-agnostic, presenting no product |

**Standing rules.** Counsel determines the legal character of every class and every consequence; the assessment states none. No matter content enters the assessment: the matter is described by kind, and what the type keeps out (counterparty name, price, party names, settlement figures, inventions, client name, margin, controlled data) stays out.

## The channel taxonomy

Every channel on the register is one of seven kinds, fixed so registers from different matters can be compared.

| Code | Channel kind | Boundary | Example |
| --- | --- | --- | --- |
| K1 | Sanctioned enterprise assistant with reach over stored content | B1 | An enterprise assistant answering from any matter folder the user can open |
| K2 | Sanctioned AI tool that receives what a user submits | B1 | An enterprise chatbot licence; AI features inside office, email or browser tools |
| K3 | Embedded AI in collaboration and meeting tools | B1 | Meeting transcription and recap; AI notetakers invited to matter calls |
| K4 | Unsanctioned AI reached from a managed device | B1 | A consumer chatbot opened in the browser on a company laptop |
| K5 | Personal device | B3 | A chatbot on a phone, with a document photographed or a paragraph retyped |
| K6 | Data-room and document movement | B1 or B2 | Exports, downloads, prints and forwards that land a document where a K1 to K5 channel can reach it |
| K7 | Adviser tooling | B2 | Each adviser's own AI tools, one entry per adviser |

A ban on a tool does not remove a channel: it usually moves a K2 or K4 channel to K5, where the organisation's controls do not reach. The register records the move. The default register is 12 to 25 channels; completeness, not selection, is the rule, and a channel the organisation says does not exist is still entered with the reason.

## The information classes

Each channel is tagged with the highest class of matter information it can reach, I1 (the matter exists) to I6 (the most sensitive). The type gives them their names.

| Code | Deal | Litigation or dispute | R&D or IP | Tender or bid | Board papers | Export-controlled data |
| --- | --- | --- | --- | --- | --- | --- |
| I1 | Existence of the deal and counterparty | Existence of the dispute and parties | Existence of the programme and partners | Existence of the bid and partners | Existence of the matter | Existence of the project and partners |
| I2 | Process and timetable | Strategy and timetable | Milestones and timetable | Process and timetable | Agenda and timetable | Programme and schedule |
| I3 | Price, terms and structure | Settlement position and offers | Commercial terms and licensing | Price and commercial terms | Proposals and terms | Contract terms |
| I4 | Valuation and synergy models | Merits and quantum assessments | Technical designs and data | Cost models and margins | Forecasts and financial models | Controlled technical data, summary level |
| I5 | Due diligence findings | Evidence and expert reports | Source code and models | Solution and win strategy | Management and adviser reports | Detailed designs and specifications |
| I6 | Board papers and recommendations | Privileged advice and instructions | Unfiled inventions and trade secrets | Board approvals and bid decisions | Board deliberations and resolutions | Classified or licence-restricted material |

## Framework at a glance

1. **Fix the matter profile** (P1 to P9): type, code name, matter team and those with access, matter folders by name, advisers, stage, privilege position; agreed with the GC or the executive who approved the brief. 2. **Register the channels**, every one of every kind, with the terms, settings and records that govern it today. 3. **Classify and test**: reach and information class, the indicative rung, the evidence obtainable. 4. **Questions to counsel** in writing; counsel sees every draft first; determinations are recorded against each entry and the finding is set.

**The logic of a finding.** Indicative rung (what the channel can reach, by rule), required rung (what the organisation can reasonably require, set by the organisation and counsel; where the board has set a confidentiality position it is shown as a suggestion counsel confirms, and only counsel sets the field), obtainable rung (what can be produced for the matter window and independently checked, by test). The finding is the relationship between the last two.

**The residual gap.** Every channel that accepts typed or pasted text has the same gap: a paraphrase, or fragments across many prompts, pass every control the organisation owns, because those controls check files, patterns and destinations and none reads meaning. The ladder has a rung for the control that would close it (N6); no control the organisation has deployed reaches it. The assessment names the gap on every channel where it exists, names the class of control that would close it, and leaves the decision to the organisation. It names no product.

## Roles

| Party | Role | Where it stops |
| --- | --- | --- |
| Counsel | Leads the engagement, holds the client, owns every legal call, drafts the matter confidentiality protocol and board paper | |
| The GC, or the executive who approved the brief | Agrees the profile; owns the outcome | |
| Matter team lead | Confirms who can reach each channel; issues directions | |
| Tenant owner | Supplies configuration in force and the records each channel leaves | |
| Advisers | Each attests to its own tooling and what it can reach | |
| Triodian | Technical party: the register, the classifications, the test, the annex | Gives no legal advice; names no product |
| Validation | A separate hand checks the measures before anything leaves | |

Rules of engagement as for the AI Use Assessment: counsel first, legal questions in writing, privilege as counsel determines, one technical party.

## The five questions

| # | Question | Answer scale | Determined by |
| --- | --- | --- | --- |
| 1 | Who can reach this channel, and with what matter information? | Reach R1 to R4; class I1 to I6 | Assessor classifies; the matter team lead confirms |
| 2 | What governs the channel: whose terms, whose settings, whose direction? | Own estate; adviser's estate under letter or deed; personal, direction only | Assessor records; counsel determines what the terms mean |
| 3 | What record does the channel leave, and who can retrieve it? | None; tool-side only; organisation-retrievable; adviser-retrievable | Assessor |
| 4 | What can the organisation require over this channel? | B1: anything it configures; B2: what the letter or deed gives; B3: direction and acknowledgement | Counsel |
| 5 | What evidence can be shown that the information did not leave, or of what left and when? | N0 to N6 | Counsel determines the required rung; the assessor tests obtainability |

## Scales

**Reach (Q1)**: R1 typed and pasted text only; R2 documents a person chooses to submit; R3 stored content the user can open (an assistant answering from folders, mailboxes and chats within the user's permissions); R4 content it receives without a submission (transcription, recording, automatic sync, data-room AI features). Where a channel fits two, the higher is recorded with the reason.

**Exposure consequence (gap rating)**: X1 immaterial (I1 only); X2 deed, letter, order, partner, tender, board-confidentiality or licence-condition consequence (I1 to I2 reachable); X3 process, position, commercial, bid, decision or programme consequence (I3 to I5 reachable); X4 disclosure and trading, privilege, protection, probity, or export-control consequence (I3 to I6 reachable by anyone outside those with access). The code is a technical label; whether any provision is engaged is counsel's determination.

**The non-egress evidence ladder (Q5)**

| Code | Rung | What the organisation holds | Produced by | Closes the paraphrase gap |
| --- | --- | --- | --- | --- |
| N0 | None | Nothing | | No |
| N1 | Direction | A written AI-use direction covering the channel, issued to the matter team with acknowledgements and dates | Counsel drafts; the matter team lead issues | No |
| N2 | Attestation | A signed statement from the tool provider's terms or an adviser: what the tool retains, whether content trains any model, what the adviser's tooling can reach, over the matter window | The provider's terms; the adviser | No |
| N3 | Configuration | A dated export of the settings in force (assistant scope, DLP rules, labels, barriers, web filter, device policy) with change history for the window | The tenant owner | No |
| N4 | Record | A retrievable log of what crossed the channel in the window: submissions, uploads, exports, transcriptions, who and when | The tenant owner; the data-room provider; the adviser | Partly: shows what left, after the fact |
| N5 | Containment | Evidence the channel cannot reach matter content at all for the window: assistant scope excluding the matter folders, barriers, uploads disabled, data-room AI off | The tenant owner; the data-room provider | For R3 and R4 reach only |
| N6 | Meaning control | A control at the boundary that reads the meaning of outbound text against the matter's sensitive content, independent of the AI, with a signed record per submission | A class of control not yet deployed in the organisation's estate | Yes |

Indicative rung by reach: R1 N4, R2 N4, R3 N5, R4 N5; capped at N4 on B2 channels (N5 only where the adviser attests to containment) and N1 on B3 channels. Every adjustment is recorded with its reason.

**Obtainability test.** From the indicative rung, step down until all five conditions pass: produced, aggregate (no matter content), reachable (a right or setting the organisation holds, or a contracting point), checkable, timely for the matter window.

## Findings and the 90-day plan

| Code | Finding | Condition | What is recorded |
| --- | --- | --- | --- |
| F1 | Shown | Obtainable at or above required | The evidence, who produces it, how it is checked |
| F2 | Gap, closable from what exists | Obtainable below required, and the route is configuration, contract or direction | The gap in rungs, the failed test, the route, the owner and the 90-day step |
| F3 | No reasonable reach | Counsel determines the organisation cannot reasonably require evidence over this channel | Counsel's determination and its basis, with the classification beside it |
| F4 | Not determinable on documents | The documents do not show what the channel retains or reaches | The question that would resolve it and who could answer it |
| F5 | Residual gap, meaning | The channel accepts typed or pasted text and no deployed control reads meaning | Recorded beside F1 or F2, never instead; names the class of control and the earliest horizon; names no product |

F5 is expected on most B1 and B3 channels and is reported on each channel so the board paper shows the gap's extent, not only its existence. The 90-day plan lists every F2 step by owner and date, from configuration, contract and direction the organisation already has.

## Outputs

The channel register; one finding per channel; the 90-day plan; the technical annex; the matter confidentiality protocol and board paper, drafted by counsel from the findings; evidence from a data-security summary, where loaded, shown on each channel. Every output carries its privilege marking, version and evidence line. Language rules as for the AI Use Assessment, with the type's exclusions kept out of every document.

## Relationship to the other frameworks

The channel kinds K1 to K7 are the tool kinds in AI Board Direction's step B5, and the board's confidentiality position from that step is imported here as the suggested required rung. The information classes I1 to I6 map to the board's classes G1 to G6 by matter type (a deal or board papers to G6; a dispute, programme or project to G5; a bid to G3). The boundaries B1 to B3 and the obtainability test are those of the AI Use Assessment.
