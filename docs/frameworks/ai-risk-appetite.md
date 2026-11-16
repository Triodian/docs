---
title: "AI Risk Appetite framework"
audience: [practitioner, board]
apps: [suite]
lastReviewed: 2026-11-17
sidebar_position: 3
---

This framework helps a regulated entity move from a general risk appetite statement to a specific appetite for artificial intelligence (AI). The appetite sets:

- how much authority AI may have
- what failure the entity will tolerate
- what evidence it expects in return.

The board makes 8 decisions, within the directions it gave in AI Board Direction. Those decisions become the settings that AI Use Assessment uses.

| Item | Position |
| --- | --- |
| Question answered | How much authority will the entity allow AI to hold, in its own hands and in its providers', and what evidence does it expect at each level? |
| Who decides | The board, on the CRO's recommendation; the appetite is the entity's |
| Who runs it | Counsel leads and runs the sessions. Triodian supplies the structure and the technical scales |
| Method | 8 appetite decisions, worked through in 2 sessions and a challenge round |
| Duration | 2 to 3 weeks, able to run alongside the first 2 weeks of the assessment |
| Inputs | The existing risk appetite statement, critical operations and their tolerances, operational risk thresholds, the AI inventory, the board directions |
| Outputs | An AI risk appetite statement for board approval, a tolerance and trigger schedule, a board paper, and a calibration set of 11 parameters |
| Feeds | The AI Use Assessment; the board view in AI Board Direction |

**Standing rule.** The appetite is the board's decision. What the entity is obliged to have, and whether a stated appetite meets that obligation, are questions for counsel. Triodian supplies definitions and structure and gives no view on either.

## Where it sits

The AI appetite is an extension of the existing risk appetite statement, not a second one. It takes its loss thresholds and critical-operation tolerances from what the board has already approved and adds what the existing statement lacks: authority delegated to AI, and evidence expected in return.

| Existing artefact | What the AI appetite takes from it | What it adds |
| --- | --- | --- |
| Board risk appetite statement | Operational, conduct and outsourcing positions; loss thresholds | A position on AI authority, by function and by where the AI acts |
| Critical operations and tolerance levels | The tolerances a failure is measured against | Which AI uses can move an operation outside tolerance |
| Material service provider register | The providers in scope | The authority AI may hold inside a provider |
| AI governance framework | Permitted uses and approvals for the entity's own AI | The same question asked of providers and their platforms |
| Board directions (AI Board Direction, connected mode) | Posture, red lines, reserved decisions, harm, reporting, accountability | Check K11 on every decision |

**Order of work with the assessment.**

- Appetite sessions run in weeks 1 and 2.
- The chief risk officer (CRO) agrees a working appetite before classification starts.
- The board may approve the appetite after the assessment. If so, findings are reported against the working appetite and marked as such. They are run again if the board changes a setting.
- If no appetite is set, the assessment uses the defaults, and every output is marked uncalibrated.

**One new result.** An entry whose authority tier is higher than the ceiling the board set for that function is flagged **above ceiling**, separately from the evidence finding. An AI use can have all the evidence expected and still hold more authority than the board has accepted.

**The rungs after calibration.**

- **Expected rung:** the evidence the board expects for a given authority and consequence (decision 3). It replaces the indicative rung.
- **Required rung:** what the entity can reasonably require. The entity and counsel set it.
- **Obtainable rung:** what can actually be produced and checked independently. Triodian sets it by testing.

Counsel takes the board's expectation into account, but it does not replace counsel's determination. If counsel finds the entity cannot require what the board expects, that difference is reported too.

## Roles

| Party | Role | Where it stops |
| --- | --- | --- |
| Board, or its risk committee | Approves the AI risk appetite statement | |
| CRO (in some entities the risk or AI governance function) | Owns the recommendation; agrees the working appetite; owns each tolerance | |
| General counsel | Decides the brief; may write the overall position; answers questions for counsel | |
| Accountable persons | Each confirms the positions in their area of responsibility | |
| Operational risk, second line | Supplies existing thresholds and tolerances; challenges the draft | |
| AI governance lead | Supplies the inventory and current permitted uses; confirms the appetite is workable | |
| Counsel | Leads and runs the sessions; advises on what the board is obliged to set and show; drafts the statement in a form the board can approve | |
| Triodian | Supplies the 8 decisions, scales and calibration set; records positions; checks consistency | States no view on what the appetite should be or whether it meets any obligation |
| An actuarial or consequence adviser, if engaged | Advises the CRO on the consequence thresholds in decision 2 only | Takes no part in the other decisions; any overlap with a review role is disclosed |

Positions come from the entity: on decisions 1 and 3 only the CRO or the entity's risk function proposes a position; counsel and Triodian explain, answer questions and record. Sessions and drafts are scoped through counsel on the position counsel determines.

## The 8 decisions

| # | Decision | Question to the board | Answered as | Parameter |
| --- | --- | --- | --- | --- |
| 1 | Authority | How much authority may AI hold in each function, in our own hands, in a provider's and in a platform behind one? | A ceiling tier, A1 to A6, per function and location in the chain | P1 |
| 2 | Consequence thresholds | At what point does a failure count as financial loss, as harm to customers or members, and as disruption of a critical operation? | A threshold for each of C3, C4 and C5 | P2 |
| 3 | Evidence expectation | For each level of authority and consequence, what evidence do we expect to hold? | A rung, E0 to E6, per tier and consequence | P3 |
| 4 | Shortfall tolerance | When the evidence falls short, how serious is it and how long may it stand? | A priority matrix, a time limit per priority, and an interim position (restrict, add a control, accept; or limit, suspend or replace a provider) | P4, P5 |
| 5 | Unknowns | How much may we not know about AI in our chain? | A limit on not-known facts and a minimum confidence, by consequence | P6, P7 |
| 6 | Location and concentration | Where may AI that acts for us run, and how much may depend on one platform or provider? | Each location accepted, escalate or not accepted; a concentration limit | P8, P9 |
| 7 | Triggers | What events must reach us, and how fast? | A list of triggers, each with a measure, threshold and time | P10 |
| 8 | Change and review | What changes bring an arrangement back for approval, and how often is the appetite reviewed? | Change events and a review interval | P11 |

Decisions 1 to 3 are taken in session 1 and 4 to 8 in session 2. The scales are those of the AI Use Assessment and are not redefined. Functions are the entity's own list, or the sector pack's functions.

### Decision detail

- **1 Authority.** One ceiling per cell of function by own staff, inside a provider, platform behind a provider, with any condition (a limit per transaction, triage only) that the assessment can test from documents. Starting position: where a named person signs off today. Each board direction BD1 to BD3 is shown on the decision; K11 holds back a ceiling past the board's posture.
- **2 Consequence thresholds.** The entity's own thresholds for C3 financial loss (an amount per event and per period), C4 harm to customers or members (number affected and kinds of harm), C5 critical-operation disruption (the tolerance already approved for each critical operation). Existing thresholds are used without change. A new threshold is set only where none exists. In the health care and critical infrastructure packs, a consequence question is asked here.
- **3 Evidence expectation.** One rung per cell of authority A1 to A6 by consequence C1 to C5, starting from what the entity holds today. Moving right or down the rung may stay level or rise, never fall.
- **4 Shortfall tolerance.** Priority from gap size and consequence (1 rung: low, low, medium; 2 rungs: low, medium, high; 3 or more: medium, high, high across C1 or C2, C3, C4 or C5); time limit and interim position per priority (high: reported to the next risk committee with a plan; medium: closed by the next contracting point; low: reviewed annually).
- **5 Unknowns.** Not-known facts allowed per entry, how long an F4 finding may stand, and the minimum confidence in the obtainable rung, by consequence band; none allowed among the facts that decide the authority tier at C4 or C5.
- **6 Location and concentration.** Each jurisdiction in the register marked accepted, escalate (a question to counsel per entry) or not accepted (flagged as above ceiling), separately for where the provider is and where the AI runs; a limit on the share of critical operations that may depend on one platform or model provider.
- **7 Triggers.** TR1 authority change; TR2 evidence lapse; TR3 tolerance signal; TR4 AI incident that could disrupt a critical operation; TR5 other AI incident; TR6 model or platform change; TR7 sub-contractor change; TR8 location change; each with a measure, threshold, time and recipient. Each time must leave the entity able to assess the event and meet its own notification obligations; counsel settles the timing.
- **8 Change and review.** A new arrangement at A3 or above is assessed before it starts; TR1, TR6, TR7 or TR8 firing reclassifies the entry; a contracting point reviews the evidence terms; a material incident revisits decisions 1, 3 and 7; new guidance revisits all 8 on counsel's advice; review at least annually.

## Process

Inputs, requested through counsel before session 1: I1 risk appetite statement; I2 operational risk incident thresholds; I3 conduct and breach reporting definitions; I4 critical operations register with tolerances; I5 material service provider register; I6 outsourcing and offshoring policy; I7 AI governance framework and inventory; I8 delegated authority schedules; I9 accountability map; I10 incident notification procedure; I11 board and risk committee calendar; plus the board directions and, where the client has one, its ISO/IEC 42001 limits register and Statement of Applicability.

| Step | When | Activity | Output |
| --- | --- | --- | --- |
| 1 Prepare | Week 1 | Fill every starting position an existing document answers; list conflicts | Pre-read pack |
| 2 Session 1 | Week 1, 2 hours | Decisions 1 to 3, each position recorded with who proposed it and any dissent | Draft ceilings, thresholds, expectation table |
| 3 Session 2 | Week 2, 2 hours | Decisions 4 to 8 | Draft tolerances, triggers, review terms |
| 4 Consistency check | Week 2 | Checks K1 to K11; conflicts go back to the CRO | Check report |
| 5 Working appetite | End of week 2 | CRO agrees; calibration set issued to the assessment | Calibration set, working |
| 6 Challenge | Week 3 | Second line and each accountable person review their area | Challenge log |
| 7 Statement | Week 3 | Counsel settles the statement and schedule | Final draft |
| 8 Approval | Next committee or board meeting | Board approves, amends or returns | Approved statement; calibration set re-issued, approved |

- Take one decision at a time, in order.
- Start from what is already decided.
- Test each decision against a real arrangement.
- Record positions, not discussion.
- Set legal questions aside for counsel.
- Leave nothing blank. If the group cannot fill a cell, record it as not set, with who will set it and by when.

## Outputs

**AI risk appetite statement**: purpose and scope; overall position in the board's words; authority table with conditions and the exception route; consequence thresholds with sources; evidence expected; tolerances; triggers and escalation; accountability; review; an appendix of definitions.

**Tolerance and trigger schedule**, kept separately so it can change without re-approving the statement:

| Ref | Measure | Reported |
| --- | --- | --- |
| M1 | Entries above the authority ceiling without an approved exception | Each risk committee |
| M2 | High-priority gaps open beyond their time limit | Each risk committee |
| M3 | Medium-priority gaps open past the contracting point | Quarterly |
| M4 | F4 findings standing beyond their allowed date, at C4 or C5 | Each risk committee |
| M5 | Expected evidence items overdue | Monthly |
| M6 | Share of critical operations depending on one platform or model provider | Half-yearly |
| M7 | Entries in a location marked not accepted | Each risk committee |
| M8 | Triggers notified later than the time set | Quarterly |
| M9 | Obtainable rungs held at low confidence, at C4 or C5 | Each risk committee |
| M10 | Critical operations depending on any one AI provider (super, MAS and baseline packs) | Each risk committee |
| M11 | Days from request to approval for a new AI use (BC4) | Each risk committee |
| M12 | Share of AI use on sanctioned tools (BC4) | Each risk committee |

**Board paper**: the 8 positions in plain words, changes since last year, and what the board is asked to resolve, with a draft resolution. **Board view**: served to AI Board Direction for each board meeting. **Session record**: a working paper.

## The calibration set

11 parameters the assessment reads, issued as one file (`triodian.calibration`) with a version, status (default, working, approved) and date; every finding records the version it was made under.

| ID | Parameter | From decision | Default if not set |
| --- | --- | --- | --- |
| P1 | Authority ceilings | 1 | None; no above-ceiling result |
| P2 | Consequence thresholds | 2 | The generic definitions |
| P3 | Evidence expectation | 3 | The reference table below |
| P4 | Gap priority | 4 | The matrix above |
| P5 | Time limits and interim positions | 4 | None |
| P6 | Not-known limits | 5 | None; counted and reported only |
| P7 | Minimum confidence | 5 | None; reported beside the finding |
| P8 | Location markings | 6 | All locations escalate |
| P9 | Concentration limit | 6 | None; the share is reported |
| P10 | Triggers | 7 | The 8 triggers without thresholds or times |
| P11 | Change events and review interval | 8 | Annual |

When the version changes, the rules run again. This updates expected rungs, flags, priorities and due dates. It does not change facts, classifications or counsel's determinations.

- The differences are reported for each entry.
- If a set is incomplete, the defaults are used, and the outputs say so.
- The set contains no client facts.

**Reference expectation table** (used when no appetite is set; shown in a session only if asked):

| Authority | C1 | C2 | C3 | C4 | C5 |
| --- | --- | --- | --- | --- | --- |
| A1 | E0 | E1 | E1 | E2 | E2 |
| A2 | E1 | E2 | E2 | E3 | E3 |
| A3 | E3 | E3 | E3 | E4 | E4 |
| A4 | E4 | E4 | E4 | E5 | E5 |
| A5 | E5 | E5 | E5 | E5 | E5 |
| A6 | E6 | E6 | E6 | E6 | E6 |

## Checks before the working appetite is issued

| # | Check | Fails when |
| --- | --- | --- |
| K1 | Complete | Any cell is blank and not recorded as not set with an owner and date |
| K2 | Ordered | A rung falls moving to higher authority or consequence |
| K3 | Priority ordered | Priority falls as the gap or consequence grows |
| K4 | Consistent with existing thresholds | A consequence threshold differs from the existing one without a recorded reason |
| K5 | Consistent with existing authority | A ceiling is higher than delegated authority or the AI policy allows |
| K6 | Provider against own | A ceiling inside a provider is higher than for own staff in the same function, without a reason |
| K7 | Testable | A condition cannot be tested from documents |
| K8 | Owned | A position or measure has no accountable person |
| K9 | Timed | A trigger has no time, or one longer than the notification procedure can absorb |
| K10 | Reachable | The expectation for the most common pair is above anything currently obtained in the set (a warning, not a failure of logic) |
| K11 | Within the board's direction | A position goes past a board direction, or a client limit from an ISO/IEC 42001 limits register is above the appetite or has no board position above it; agreeing the working appetite is blocked until a reason and a board revisit are recorded |

## Governance

- The CRO owns the statement.
- The board or its risk committee approves it.
- Each measure has a named accountable person.
- Exceptions are approved by the person named in decision 1. They have a time limit and are reported as M1.
- The CRO can change the schedule and reports the change to the next committee. Only the board can change the statement.
- The statement is reviewed at the interval set in decision 8, and after any change event.

The approved statement, the schedule and each calibration version are kept together. The session record and challenge log are working papers. Counsel decides how they are handled.
