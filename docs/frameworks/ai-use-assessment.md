---
title: "AI Use Assessment framework"
audience: [practitioner, board]
apps: [suite]
lastReviewed: 2026-11-15
sidebar_position: 4
---

The AI use assessment establishes, for a representative set of an organisation's arrangements, where AI acts, what it is able to do, and what evidence of its behaviour can be produced at each boundary in the chain. It is the technical half of a joint engagement led by counsel: counsel answers what the organisation can require; the assessment answers what can actually be produced.

| Item | Position |
| --- | --- |
| Question answered | At each boundary in the chain, what evidence of AI behaviour can be produced, measured against the board's appetite? |
| Unit of assessment | One arrangement: a material service provider, the platform behind it, or an external AI service the organisation's own staff use |
| Instruments | The AI use register, the seven questions and the evidence ladder |
| Duration | Three to four weeks; two in Lite scope |
| Inputs | The organisation's AI inventory or provider register, the agreement for each arrangement in scope, the calibration set from AI Risk Appetite |
| Not required | Customer or member data, provider involvement, production access |
| Outputs | The register, one finding per arrangement, a technical schedule, a technical annex, register extract v2 for AI Risk Appetite, provider findings for GRC platforms |
| Independent check | The independent reviewer, who holds no other role, on behalf of the CRO |
| Measure | The regulator's standards and expectations and the board's appetite; solution-agnostic, presenting no product |

## Scope and boundaries

The assessment follows one chain and tests three kinds of boundary. Each register entry and finding is tagged with one.

| Code | Boundary | Parties | What passes across it |
| --- | --- | --- | --- |
| B1 | Organisation to third party | The organisation and a material service provider acting for it | Agreement terms outward; aggregate evidence back |
| B2 | Third party to fourth party | The provider and the platform behind it: the technology, pricing or AI model the provider relies on | Flow-down terms outward; what the provider can obtain back |
| B3 | The organisation's own use | Its own staff and an external AI service | Its own rules outward; a signed record back |

**The set.** A representative set of arrangements agreed with the general counsel, not the whole estate; the default is four. Selection criteria in order: a live trigger (a regulator request, remediation or major renewal); AI inside a provider; the organisation is itself asked for evidence; coverage of boundary types; spread of authority; and, once an appetite is set, arrangements likely to sit above the ceiling. **Lite scope** instead scopes the register to the 10 to 15 arrangements behind critical operations, lists the rest for later triage by authority, and says so on every output.

**In scope:** AI used in or supporting a service to the organisation anywhere in the chain; AI used by its own staff through an external service; the agreement for each arrangement; the existing inventory, AI governance framework and provider register. **Out of scope:** legal advice (reach, applicability, grading and privilege are counsel's); customer, member or claims data; provider involvement (no provider is approached; obtainability is assessed from the organisation's side); production access; model testing; products and gap filling; the whole estate.

## Framework at a glance

Three instruments are applied in four steps, the same way to every arrangement.

| Instrument | What it is |
| --- | --- |
| AI use register | One entry for each place AI acts in the chain, with a fixed set of fields |
| The seven questions | The ordered questions put to every arrangement; under all of them, what can the organisation require, and what can actually be produced |
| Evidence ladder | A scale of evidence types, matched to what the AI can do |

1. **Confirm the set** with the GC. 2. **Map the AI**: where it acts, what authority it holds, who stands behind it; each use becomes a register entry. 3. **Classify and test**: the consequence of each use and the evidence obtainable at each boundary. 4. **Questions to counsel** in writing; counsel sees every draft first; counsel's determinations are recorded against each entry and the finding is set.

**The logic of a finding.** Each arrangement produces three positions on the ladder: the indicative rung (what the AI can do, set by rule, replaced by the expected rung when a calibration set is loaded), the required rung (what the organisation can reasonably require, set by the organisation and counsel) and the obtainable rung (what can in fact be produced and independently checked, set by test). The finding is the relationship between the last two.

**Operating principles.** Aggregate only: no individual decisions, no customer data, no access to a provider's model. Start from what exists. "No reasonable reach" is a conclusion, documented as a finding, not treated as a gap. Solution-agnostic: can the evidence be produced, and can someone independent check it?

## Roles

| Party | Role | Where it stops |
| --- | --- | --- |
| The organisation | The CRO raises the risk; the GC decides the brief and owns the outcome | |
| Counsel | Leads the engagement, owns every legal call, sets the required rung and the privilege position | |
| Triodian: method owner, delivery manager, assessor | Does the assessment and the register; responsible for the result | Gives no legal advice; fills no gap unless asked, as a separate decision |
| Peer reviewer (validation) | Checks the classifications without having written them | Cannot be the assessor |
| Independent reviewer | Independent check on behalf of the CRO; receives the work from counsel or the CRO, not from Triodian; sees every contested point | Holds no other role; does not do the assessment or build any control |
| Arrangement owners | Supply and confirm facts for their arrangements | |
| Technology owner (usually the CIO) and AI governance team | Supply the hand-over: the inventory of AI in use, the evidence for each arrangement and what existing assurance covers; confirm it complete; receive scheduled updates at each stage; may ask for a consultation and contest a point on the record, which the assessor answers | Decide nothing after the hand-over; cannot be the independent reviewer; are not sent the register, findings, questions to counsel or privilege marking |

Rules of engagement: counsel first (every draft goes to counsel before anyone at the organisation sees it); legal questions in writing as numbered questions; privilege as counsel determines; one technical party; independence of the check.

## The register

One entry for each place AI acts within an arrangement; an arrangement with AI at the provider and at the platform behind it has at least two. Built by briefing the AI teams first, starting from the existing inventory or an imported provider register (keyed on the client's own ids so an export round-trips), extending it down the chain, classifying each entry, and handing uses not on the inventory back to its owner.

| # | Field | Values | Completed by |
| --- | --- | --- | --- |
| 1 to 3 | Entry id, arrangement id, boundary type | REG-, ARR-, B1 to B3 | Assessor |
| 4 | Where the AI acts | Own staff, provider, platform behind a provider | Assessor |
| 5 | Function and critical operation supported | The critical operation from the organisation's list, or none | Assessor with the arrangement owner |
| 6 to 10 | On the inventory; system and purpose; supplier; platform and model provider; location of each party | Legal entity names or not known; country per party | Assessor |
| 11 | What the AI does | Two sentences, plain words, verbs from the source | Assessor |
| 12 | Human involvement | A person acts, a person decides, the output is the decision, unattended | Assessor |
| 13 | Credentials and systems the AI can change | List or none | Assessor |
| 14 | Agreement terms on information, audit, sub-contracting and notification | Clause references with verbatim extracts | Assessor |
| 15, 16 | Authority tier A1 to A6; failure consequence C1 to C5 | | Assessor; reviewed by a different person |
| 17 | Indicative or expected rung E0 to E6 | By rule, or from the calibration set | Rule |
| 18 to 22 | Evidence received; evidence the system could produce; independently checkable; obtainable rung; confidence | | Assessor, by test |
| 23 to 25 | Nexus, relationship and location determination; rights held; required rung and grading | Counsel's wording with the question reference | Counsel only |
| 26 | Finding and gap owner | F1 to F4 with a named owner | Assessor, after counsel |

Completion rules: every value has a source or is recorded as not known, never estimated; the description (11) is written before the tier (15) so a reviewer can re-derive it; fields 23 to 25 are transcribed from counsel's written response; not known is a valid entry and is counted; confidence is low by default at B2; one classifier, one reviewer, never the same person.

## The seven questions

| # | Question | Answer scale | Determined by |
| --- | --- | --- | --- |
| 1 | Does a separate regulatory nexus exist? Is the party within the group? | Yes, no | Counsel |
| 2 | Is there a separate relationship that may engage the outsourcing or service-provider standard: a service, or part of a chain supporting one? | Yes, no | Counsel |
| 3 | What rights does the organisation or its manager hold? | Passive; significant influence; contractual; control or board seat | Counsel, from verbatim terms the assessor extracts |
| 4 | Where is each party, and does location change what can be obtained? | Per party: no effect; limits evidence; prevents evidence | Counsel, from locations the assessor records |
| 5 | What authority has been delegated to the AI, and what can its action produce? | A1 to A6 | Assessor classifies; counsel determines the authority delegated |
| 6 | What could failure do? | C1 to C5 | Assessor classifies; the organisation confirms |
| 7 | What evidence can reasonably be required? | E0 to E6 | Counsel determines; the assessor tests obtainability |

For Q3 the assessor extracts, without interpretation: any term giving information about how the service is performed; any audit or access right; sub-contractor terms; incident notification terms and timing; any term mentioning AI, automation, models or automated decisions; the next contracting point. For Q5, three tests from the documents: does a person act on the output; does it move money, change a record or commit the organisation; does the AI hold credentials to act across steps unattended. Q6 takes the most serious credible outcome if the AI acted wrongly and went undetected for one reporting period, anchored to the critical operation's tolerance. Q7 is kept in two halves: what can be required (counsel; the required rung) and what can be produced (the test; the obtainable rung).

Stop rules: Q1 to Q3 all negative is recorded as F3, no reasonable reach, with Q5 and Q6 still classified; A1 with C1 limits the test to whether disclosure exists; facts unavailable is F4 with the question that would resolve it.

## Scales

**Authority tiers (Q5)**

| Code | Tier | Definition | Deciding test |
| --- | --- | --- | --- |
| A1 | Productivity (assists) | Drafts, summarises, searches; a person still acts | A person writes or sends the final output |
| A2 | Analytical (recommends) | Scores, ranks, recommends; a person decides | The output is an input to a named person's decision |
| A3 | Decision (decides) | Approves, declines, triages; the output is the decision | No person reviews before the outcome takes effect |
| A4 | Transactional (moves money) | Prices, allocates, pays | The output commits or moves money |
| A5 | Agentic (acts unattended) | Plans and acts across steps and tools | The AI starts its own next step |
| A6 | Actuation (changes systems) | Holds credentials that change systems, assets or infrastructure | The AI can write to systems of record under its own credentials |

Where a system fits two tiers the higher is recorded with the reason. At A3 and above the agent controls BC1 apply: permission scope, action log, a human checkpoint before A4 and above, a way to stop.

**Failure consequence (Q6)**: C1 immaterial; C2 contract breach; C3 financial loss above the reporting threshold; C4 harm to customers or members (wrongly declined, delayed, charged or paid); C5 critical-operation disruption outside the tolerance the board set. The calibration set replaces the generic definitions with the organisation's own thresholds.

**The evidence ladder (Q7)**

| Code | Rung | What the organisation holds | Produced by | Frequency |
| --- | --- | --- | --- | --- |
| E0 | None | Nothing | | |
| E1 | Disclosure | A statement of what AI is used, where and for what | The provider | On change or annually |
| E2 | Attestation | A signed statement that the AI operated within stated limits over a period | The provider | Per period |
| E3 | Event notification | Notice when a defined trigger is crossed | The provider | On event, within an agreed time |
| E4 | Audit | A right to examine the aggregate record, exercised by the organisation or its verifier | The organisation or an independent party | On demand or scheduled |
| E5 | Continuous telemetry | A stream of aggregate measures against the declared appetite | The system | Each window |
| E6 | Deterministic actuation control | A control at the point of action, independent of the AI's reasoning, with a signed record of what was requested, what applied and what was allowed | The system | Each action, reported in aggregate |

Indicative rung by tier: A1 E1, A2 E2, A3 E3, A4 E4, A5 E5, A6 E6, adjusted one rung down for C1 at A1 or A2 and one up for C4 or C5 at A1 to A4, every adjustment recorded with its reason; a loaded calibration set replaces it with the expected rung.

**Obtainability test.** From the indicative rung, step down one rung at a time until all five conditions pass: T1 produced (the record exists or could be generated without redesign); T2 aggregate (given without individual decisions, customer data or the model); T3 reachable (a term in force or a contracting point where one could be added); T4 checkable (someone independent can verify it); T5 timely (it arrives in time to act and meet notification obligations). Confidence is high where the record has been seen, medium where documentation describes it, low where inferred from the type of system.

**One evidence register (BC3).** Each provider's evidence is recorded once and cross-walked to every regime in the matter brief.

## Findings

| Code | Finding | Condition | What is recorded |
| --- | --- | --- | --- |
| F1 | Evidence obtainable | Obtainable rung at or above the required rung | The evidence, who produces it, how it is checked |
| F2 | Gap | Obtainable rung below the required rung | The gap in rungs, which test failed, the gap owner, the priority and due date from the calibration set |
| F3 | No reasonable reach | Counsel determines the organisation cannot reasonably require evidence at this boundary | Counsel's determination and its basis, with the technical classification beside it |
| F4 | Not determinable on documents | The documents do not show whether AI is used or what it can do | The question that would resolve it and who could answer it |

Priority combines gap size with consequence (from the calibration set or the default matrix); a gap at low confidence is reported at its rated priority with the confidence beside it. Each F2 names one owner by failed test: T1 the provider or the organisation's AI team; T2 the provider; T3 the GC through counsel at the next contracting point; T4 the second or third line; T5 the arrangement owner. The assessment records the routes available; who closes a gap, and with what, is the organisation's decision. An entry above the authority ceiling, or in a location marked not accepted, is flagged separately from the evidence finding.

## Outputs

The register; one finding worksheet per arrangement; the technical schedule (evidence items, who produces each, when); the technical annex in Triodian's name, with a scope line in Lite scope naming what was left out; register extract v2 (`triodian.aua.extract.v2`: the entries, measures M1 to M12, gaps by priority, overdue items) served to AI Risk Appetite and shown in the board view; provider findings F1 to F4 as records for GRC platforms; scheduled updates to the technology owner and AI governance team; questions to counsel and counsel's responses, kept with counsel. Every output carries its evidence line and its version.

**Language rules.** State what was found and who determined it; do not state what the law requires or whether a duty is met; name no product; no customer or member data appears; a gap names the class of control that would close it, never a product.

## Quality control

Review points: validation by a peer reviewer who did not classify; counsel before any draft reaches the organisation; the independent reviewer before the annex is final, with every contested point visible. Evidence standards: a source for every value; verbatim extracts for terms; not known counted and reported by arrangement. An exceptions log records every departure from the method with its reason. Measures at close: entries, arrangements, findings by type and priority, not-known fields, confidence distribution, the concentration share, days from request to approval and share of AI use on sanctioned tools (BC4).
