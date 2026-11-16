---
title: "AI Use Assessment framework"
audience: [practitioner, board]
apps: [suite]
lastReviewed: 2026-11-17
sidebar_position: 4
---

The AI use assessment looks at a representative set of an organisation's arrangements. For each one, it finds out where artificial intelligence (AI) acts, what it can do, and what evidence of its behaviour can be produced at each boundary in the chain.

It is the technical part of a joint engagement led by counsel. Counsel answers what the organisation can require. The assessment answers what can actually be produced.

| Item | Position |
| --- | --- |
| Question answered | At each boundary in the chain, what evidence of AI behaviour can be produced, measured against the board's appetite? |
| Unit of assessment | One arrangement: a material service provider, the platform behind it, or an external AI service the organisation's own staff use |
| Instruments | The AI use register, the 7 questions and the evidence ladder |
| Duration | 3 to 4 weeks; 2 in Lite scope |
| Inputs | The organisation's AI inventory or provider register, the agreement for each arrangement in scope, the calibration set from AI Risk Appetite |
| Not required | Customer or member data, provider involvement, production access |
| Outputs | The register, one finding per arrangement, a technical schedule, a technical annex, register extract v2 for AI Risk Appetite, provider findings for GRC platforms |
| Independent check | The independent reviewer, who holds no other role, on behalf of the CRO |
| Measure | The regulator's standards and expectations and the board's appetite; solution-agnostic, presenting no product |

## Scope and boundaries

The assessment follows one chain and tests 3 kinds of boundary. Each register entry and finding is tagged with one.

| Code | Boundary | Parties | What passes across it |
| --- | --- | --- | --- |
| B1 | Organisation to third party | The organisation and a material service provider acting for it | Agreement terms outward; aggregate evidence back |
| B2 | Third party to fourth party | The provider and the platform behind it: the technology, pricing or AI model the provider relies on | Flow-down terms outward; what the provider can obtain back |
| B3 | The organisation's own use | Its own staff and an external AI service | Its own rules outward; a signed record back |

**The set.** A representative set of arrangements agreed with the general counsel. It does not cover every arrangement the organisation has. The default is 4. Arrangements are chosen using these criteria, in order:

1. a current trigger, such as a request from a regulator, remediation or a major renewal
2. AI inside a provider
3. the organisation itself being asked for evidence
4. coverage of different boundary types
5. a spread of authority levels
6. once an appetite is set, arrangements likely to be above the ceiling.

**Lite scope** limits the register to the 10 to 15 arrangements that support critical operations. It lists the other arrangements to be sorted later by authority level. Every output states that Lite scope was used.

**In scope:** AI used in or supporting a service to the organisation anywhere in the chain; AI used by its own staff through an external service; the agreement for each arrangement; the existing inventory, AI governance framework and provider register. **Out of scope:** legal advice (counsel decides reach, applicability, grading and privilege); customer, member or claims data; provider involvement (no provider is approached, and what can be obtained is assessed from the organisation's side); access to production systems; model testing; products and filling gaps; every arrangement the organisation has.

## Framework at a glance

3 instruments are applied in 4 steps, the same way to every arrangement.

| Instrument | What it is |
| --- | --- |
| AI use register | One entry for each place AI acts in the chain, with a fixed set of fields |
| The 7 questions | The ordered questions put to every arrangement; under all of them, what can the organisation require, and what can actually be produced |
| Evidence ladder | A scale of evidence types, matched to what the AI can do |

1. **Confirm the set** with the general counsel (GC).
2. **Map the AI.** Record where it acts, what authority it has and who is responsible for it. Each use becomes a register entry.
3. **Classify and test.** Record the consequence of each use and the evidence that can be obtained at each boundary.
4. **Send questions to counsel** in writing. Counsel sees every draft first. Counsel's determinations are recorded against each entry, and the finding is set.

**How a finding works.** Each arrangement has 3 positions on the ladder:

- **Indicative rung:** what the AI can do. It is set by rule. When a calibration set is loaded, the expected rung replaces it.
- **Required rung:** what the organisation can reasonably require. The organisation and counsel set it.
- **Obtainable rung:** what can actually be produced and checked independently. It is set by testing.

The finding compares the required rung with the obtainable rung.

**Operating principles.**

- Work with aggregate information only. Do not look at individual decisions, customer data or a provider's model.
- Start from what already exists.
- "No reasonable reach" is a conclusion. Record it as a finding, not as a gap.
- Do not favour any product. Ask only whether the evidence can be produced, and whether someone independent can check it.

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

Rules of engagement:

- Counsel first. Every draft goes to counsel before anyone at the organisation sees it.
- Legal questions are written as numbered questions.
- Counsel decides privilege.
- There is one technical party.
- The check is independent.

## The register

The register has one entry for each place AI acts within an arrangement. For example, an arrangement with AI at the provider and at the platform the provider uses has at least 2 entries.

To build the register:

1. Brief the AI teams.
2. Start from the existing inventory, or import a provider register. Imports use the client's own IDs, so the client can export the register and import it again without losing the link.
3. Extend the register down the chain.
4. Classify each entry.
5. Send any uses that are not on the inventory back to the inventory's owner.

| # | Field | Values | Completed by |
| --- | --- | --- | --- |
| 1 to 3 | Entry id, arrangement id, boundary type | REG-, ARR-, B1 to B3 | Assessor |
| 4 | Where the AI acts | Own staff, provider, platform behind a provider | Assessor |
| 5 | Function and critical operation supported | The critical operation from the organisation's list, or none | Assessor with the arrangement owner |
| 6 to 10 | On the inventory; system and purpose; supplier; platform and model provider; location of each party | Legal entity names or not known; country per party | Assessor |
| 11 | What the AI does | 2 sentences, plain words, verbs from the source | Assessor |
| 12 | Human involvement | A person acts, a person decides, the output is the decision, unattended | Assessor |
| 13 | Credentials and systems the AI can change | List or none | Assessor |
| 14 | Agreement terms on information, audit, sub-contracting and notification | Clause references with verbatim extracts | Assessor |
| 15, 16 | Authority tier A1 to A6; failure consequence C1 to C5 | | Assessor; reviewed by a different person |
| 17 | Indicative or expected rung E0 to E6 | By rule, or from the calibration set | Rule |
| 18 to 22 | Evidence received; evidence the system could produce; independently checkable; obtainable rung; confidence | | Assessor, by test |
| 23 to 25 | Nexus, relationship and location determination; rights held; required rung and grading | Counsel's wording with the question reference | Counsel only |
| 26 | Finding and gap owner | F1 to F4 with a named owner | Assessor, after counsel |

Completion rules:

- Every value has a source or is recorded as not known. Never estimate a value.
- Write the description (field 11) before the tier (field 15), so a reviewer can work out the tier again.
- Copy fields 23 to 25 from counsel's written response.
- Not known is a valid entry, and it is counted.
- Confidence is low by default at B2.
- One person classifies and another reviews. They are never the same person.

## The 7 questions

| # | Question | Answer scale | Determined by |
| --- | --- | --- | --- |
| 1 | Does a separate regulatory nexus exist? Is the party within the group? | Yes, no | Counsel |
| 2 | Is there a separate relationship that may engage the outsourcing or service-provider standard: a service, or part of a chain supporting one? | Yes, no | Counsel |
| 3 | What rights does the organisation or its manager hold? | Passive; significant influence; contractual; control or board seat | Counsel, from verbatim terms the assessor extracts |
| 4 | Where is each party, and does location change what can be obtained? | Per party: no effect; limits evidence; prevents evidence | Counsel, from locations the assessor records |
| 5 | What authority has been delegated to the AI, and what can its action produce? | A1 to A6 | Assessor classifies; counsel determines the authority delegated |
| 6 | What could failure do? | C1 to C5 | Assessor classifies; the organisation confirms |
| 7 | What evidence can reasonably be required? | E0 to E6 | Counsel determines; the assessor tests obtainability |

For Q3, the assessor copies these terms without interpreting them:

- any term that gives information about how the service is performed
- any audit or access right
- terms about sub-contractors
- incident notification terms and timing
- any term that mentions AI, automation, models or automated decisions
- the next contracting point.

For Q5, apply 3 tests to the documents:

- Does a person act on the output?
- Does it move money, change a record or commit the organisation?
- Does the AI hold credentials that let it act across several steps without a person?

For Q6, record the most serious likely outcome if the AI acted wrongly and no one noticed for one reporting period. Base it on the critical operation's tolerance.

Q7 has 2 parts: what can be required (set by counsel, the required rung) and what can be produced (set by the test, the obtainable rung).

Stop rules:

- If Q1 to Q3 are all negative, record F3, no reasonable reach. Still classify Q5 and Q6.
- For A1 with C1, only test whether disclosure exists.
- If the facts are not available, record F4 with the question that would resolve it.

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

Where a system fits 2 tiers the higher is recorded with the reason. At A3 and above the agent controls BC1 apply: permission scope, action log, a human checkpoint before A4 and above, a way to stop.

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

**Obtainability test.** Start at the indicative rung. Move down one rung at a time until all 5 conditions pass:

- **T1 produced:** the record exists, or could be generated without redesigning the system.
- **T2 aggregate:** it can be provided without individual decisions, customer data or the model.
- **T3 reachable:** a term in force gives access to it, or a term could be added at a contracting point.
- **T4 checkable:** someone independent can verify it.
- **T5 timely:** it arrives in time to act and to meet notification obligations.

Confidence is high if the record has been seen, medium if documentation describes it, and low if it is assumed from the type of system.

**One evidence register (BC3).** Each provider's evidence is recorded once and cross-walked to every regime in the matter brief.

## Findings

| Code | Finding | Condition | What is recorded |
| --- | --- | --- | --- |
| F1 | Evidence obtainable | Obtainable rung at or above the required rung | The evidence, who produces it, how it is checked |
| F2 | Gap | Obtainable rung below the required rung | The gap in rungs, which test failed, the gap owner, the priority and due date from the calibration set |
| F3 | No reasonable reach | Counsel determines the organisation cannot reasonably require evidence at this boundary | Counsel's determination and its basis, with the technical classification beside it |
| F4 | Not determinable on documents | The documents do not show whether AI is used or what it can do | The question that would resolve it and who could answer it |

Priority combines the size of the gap with the consequence, using the calibration set or the default matrix. A gap with low confidence is reported at its rated priority, with the confidence shown next to it.

Each F2 names one owner, based on which test failed:

- T1: the provider or the organisation's AI team
- T2: the provider
- T3: the GC, through counsel, at the next contracting point
- T4: the second or third line
- T5: the arrangement owner.

The assessment records the options available. The organisation decides who closes a gap and how.

If an entry is above the authority ceiling, or in a location marked not accepted, it is flagged separately from the evidence finding.

## Outputs

- The register.
- One finding worksheet for each arrangement.
- The technical schedule: the evidence items, who produces each one and when.
- The technical annex, in Triodian's name. In Lite scope, it includes a scope line that names what was left out.
- Register extract v2 (`triodian.aua.extract.v2`). It contains the entries, measures M1 to M12, gaps by priority and overdue items. AI Risk Appetite reads it, and it is shown in the board view.
- Provider findings F1 to F4, as records for governance, risk and compliance (GRC) platforms.
- Scheduled updates to the technology owner and AI governance team.
- Questions to counsel and counsel's responses. Counsel keeps these.

Every output shows its evidence line and its version.

**Incident accountability (Shape A).** 3 more outputs, in build since 17 November 2026:

- **DL11, the *incident readiness record*.** For each arrangement, it records:
  - the runtime records that would show what each AI use did
  - who holds those records
  - the clause in the agreement that gives access to them
  - how long it takes to produce them
  - the person accountable for the system, for the shared infrastructure and for the change process
  - the notification deadlines that apply in the jurisdiction and sector. Each deadline is taken from the Obligations Atlas as at a stated date, for counsel to confirm.

  Every blank field is listed as a gap, with an owner.
- **DL12, an *evidence-preservation hold* letter** for each record holder. The app drafts it from DL11. Counsel finalises it. The app never sends it.
- **VE, the *exercise and incident record*.** One validation event for each tabletop exercise or real incident. It records what each party said and what it showed, the test against the board's tolerances and triggers, the notification deadlines, the agreed public statement and who may speak about it, the points where responsibilities meet, the finding and how long the records took to produce.

The suite builds these outputs instead of crisis management tools. After an incident, a board needs to know how the organisation would have found out if AI had caused it, and how quickly. That is a question about the evidence in the register. See [Run the incident accountability tabletop](/guides/running-an-engagement/incident-accountability-tabletop).

**Language rules.**

- State what was found and who determined it.
- Do not state what the law requires or whether a duty is met.
- Do not name any product.
- Do not include customer or member data.
- For a gap, name the type of control that would close it. Never name a product.

## Quality control

**Review points:**

- A peer reviewer who did not do the classification validates it.
- Counsel reviews every draft before the organisation sees it.
- The independent reviewer reviews the annex before it is final, with every disputed point visible.

**Evidence standards:** every value has a source. Terms are quoted word for word. Fields marked not known are counted and reported for each arrangement.

An exceptions log records every departure from the method, with the reason.

**Measures at close:** entries, arrangements, findings by type and priority, fields marked not known, the spread of confidence levels, the concentration share, days from request to approval and share of AI use on approved tools (BC4).
