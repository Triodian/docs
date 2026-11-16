---
title: Run the incident accountability tabletop
audience: [practitioner, board]
apps: [use-assessment]
lastReviewed: 2026-11-17
sidebar_position: 5
---

For the practitioner or Triodian facilitator running *The Saturday Morning Question*, the half-day tabletop of the AI Incident Accountability module (Shape A), and for the board, GC, CRO and arrangement owners in the room. At the end the client holds, from AI Use Assessment, an incident readiness record for each AI arrangement (DL11), an evidence-preservation letter per record holder for counsel to settle (DL12), the exercise recorded as a validation event (VE), and a gap list with owners.

The module is not a crisis tool. It may be used during an incident and is never required during one: every output downloads as Word, PDF or Markdown, and the client's own crisis tool stays on the critical path. The app starts no notification clock and decides that no notification is due; counsel confirms before anything is sent.

:::note Status
In build. The outputs landed in AI Use Assessment on 17 November 2026 (use-assessment #45). The module is described as delivered only once it is live on the test site, the tabletop has had its internal dry run and counsel has read the hold-letter template and the clock lines.
:::

## Before you start

- An AI Use Assessment deployment with a register, even a partial one. Where there is none, the first hour of the room builds a register of three AI uses, and the tabletop becomes the start of a full assessment.
- The calibration set loaded in Use Assessment set-up (from the AI Risk Appetite app over the binding, or from a file). Without it the room has no tolerances or triggers to test against; say so, and that is the first finding.
- People with roles: a Triodian role to record (method owner or assessor), the CRO or an arrangement owner, the GC, counsel, and an independent reviewer for the review afterwards.
- The scenario pack, which carries the facts of 13 November 2026 at the briefing's version, the injects and their times, and the caveats.

## Steps

1. **Brief (0:00).** The facilitator gives the facts in ten minutes and the thesis in one sentence: an accountability gap, not a technology failure. The recorder opens the Review screen in Use Assessment, chooses *Add an exercise or incident*, and gives it a title and date. You see the event's eight segments on one card.
2. **Which AI systems are near this? (0:15)** Read inject 1: a vendor change on shared infrastructure on a Friday afternoon; an AI service expanded across the same infrastructure three days earlier; a critical operation down. The recorder types the infrastructure affected. You see *Register hits*: the entries whose readiness record, system name or platform names it. Tick the AI uses present; type anything named in the room that is not on the register into *unknowns*. If nothing hits, the shared infrastructure is not on the register: record it on each entry's Classify screen (step 3) and come back.
3. **What record would show what they did? (0:45)** For each AI use present, open its Classify screen and fill the *Incident readiness* card: the shared infrastructure; the runtime records that would show what it did, when and under whose authority; who holds them and the holder's name; the agreement clause that reaches them; the production time; the accountable person for the system, the shared infrastructure and the change process. A blank is not an error; DL11 lists it as a gap with the role that owns it. Back on the event, add one row per party under *What each party said, and what it showed*; at this point every *showed* reads "nothing yet".
4. **Is a tolerance breached? Has a trigger fired? (1:30)** Read inject 2. For each tolerance (P2) and trigger (P10) from the calibration set, record breached, not breached or not known yet, and the basis; for a fired trigger, when. You see, for a fired trigger, who the appetite says is notified and by when. Then mark each notification clock the jurisdiction and sector bring as running, not running or not known, from the moment the entity became aware or a time you give; you see when each would end, with its basis line (*per the Atlas as at [date]*, or *Triodian's reading*, and always *confirm with counsel*). The GC confirms the clocks. The person who asserted the test is recorded and cannot review the event later.
5. **The vendor has denied it. Do we? (2:00)** Read inject 3: the vendor's denial on social media, the journalist, the regulator's 9am question. Record the agreed external line, who may speak to it, and what may be disclosed while the cause is unknown. Only counsel can settle the line; the *Settle the line as counsel* button is greyed for everyone else, and the app says why.
6. **Who holds the seam? (2:30)** You see, for each AI use present, the three accountable persons from its readiness record. Type the seams between them and the seam no one holds.
7. **The finding goes the other way (3:00).** Read inject 4: the cause was the AI service's configuration push; the vendor's statement was not borne out by its own log. Record the finding as the investigators concluded it (the app does not investigate), and how long each record holder took to produce its records against the readiness record's production time. Update each party's *showed*.
8. **Readiness record and actions (3:30).** Open Outputs. DL11 is the readiness record with its gap list; DL12 drafts one hold letter per record holder, where Triodian or counsel adds the addressee, the date to preserve from and a note, and counsel marks each letter settled; VE is the exercise record. Record gap owners and dates under *Actions*. Download each as Word or PDF. The independent reviewer records the review on the event afterwards; once reviewed, the tolerance and trigger test is fixed.

## What you have now

DL11, DL12 and VE, marked draft until the phase 3 gate is met and the legal-line check is clear; the gap list with owners at the end of DL11; the event on the Findings card against each arrangement whose AI uses were present; and the three outputs in the evidence feed that AI Board Direction gathers into the evidence index. Where the exercise shows a tolerance or trigger was set wrongly, that goes to the next appetite review in AI Risk Appetite; the app changes no appetite position and no board direction. The 90-minute board-only cut, and the facts and injects, are in the scenario pack.
