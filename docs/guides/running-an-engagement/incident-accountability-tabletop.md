---
title: Run the incident accountability tabletop
audience: [practitioner, board]
apps: [use-assessment]
lastReviewed: 2026-11-17
sidebar_position: 5
---

This guide is for the practitioner or Triodian facilitator who runs the half-day tabletop exercise in the AI Incident Accountability module. It is also for the board, general counsel (GC), chief risk officer (CRO) and arrangement owners who take part.

At the end, the client has these outputs from AI Use Assessment:

- an incident readiness record for each AI arrangement (DL11)
- an evidence-preservation letter for each record holder, for counsel to finalise (DL12)
- a record of the exercise as a validation event (VE)
- a list of gaps, each with an owner.

The module is not a crisis management tool. The client can use it during an incident, but does not need it. Every output downloads as Word, PDF or Markdown. The client keeps using its own crisis tool during an incident. The app does not start any notification deadline, and it does not decide whether a notification is due. Counsel must confirm before anything is sent.

:::note Status
Available since 17 November 2026, as part of AI Use Assessment (use-assessment #45), live on the test and live sites. The tabletop can be booked on its own or inside a use assessment; the fee is on [triodian.com/incident-accountability](https://triodian.com/incident-accountability#fees).
:::

:::tip Example script
An example script for this tabletop, based on the FAA ground stop in the United States on 13 November 2026, and the background briefing its facts come from can be downloaded from [triodian.com/incident-accountability](https://triodian.com/incident-accountability#example-script).
:::

## Before you start

You need:

- **An AI Use Assessment deployment with a register.** A partial register is fine. If there is no register, spend the first hour building a register of 3 AI uses. The tabletop then becomes the start of a full assessment.
- **The calibration set loaded in AI Use Assessment set-up.** Load it from the AI Risk Appetite app through the binding, or from a file. Without it, there are no tolerances or triggers to test against. If so, tell the group. This is the first finding.
- **People in each role:**
  - someone from Triodian to record (method owner or assessor)
  - the CRO or an arrangement owner
  - the GC
  - counsel
  - an independent reviewer for the review afterwards.
- **The example script.** It contains the facts of 13 November 2026 as at the briefing's version, the injects (new information released during the exercise) and their times, and the caveats.

## Steps

1. **Brief the group (0:00).** The facilitator presents the facts in 10 minutes. They then state the main point in one sentence: the problem is a gap in accountability, not a failure of technology. The recorder opens the Review screen in AI Use Assessment, selects *Add an exercise or incident*, and enters a title and date. The event's 8 sections appear on one card.
2. **Which AI systems are affected? (0:15)** Read inject 1. A vendor made a change to shared infrastructure on a Friday afternoon. 3 days earlier, an AI service was expanded across the same infrastructure. A critical operation is now down.

   The recorder types the infrastructure affected. *Register hits* then shows the register entries that name it in their readiness record, system name or platform. Tick the AI uses that are involved. If the group names anything that is not on the register, type it into *unknowns*.

   If there are no hits, the shared infrastructure is not on the register. Record it on each entry's Classify screen (step 3), then come back to this step.
3. **What records would show what each system did? (0:45)** For each AI use involved, open its Classify screen and fill in the *Incident readiness* card:
   - the shared infrastructure
   - the runtime records that would show what the system did, when and with whose authority
   - who holds those records, and the holder's name
   - the clause in the agreement that gives access to them
   - how long it takes to produce them
   - the person accountable for the system, for the shared infrastructure and for the change process.

   It is fine to leave a field blank. DL11 lists each blank as a gap, with the role responsible for it.

   Go back to the event. Under *What each party said, and what it showed*, add one row for each party. At this point, every *showed* entry says "nothing yet".
4. **Has a tolerance been breached? Has a trigger fired? (1:30)** Read inject 2. For each tolerance (P2) and trigger (P10) in the calibration set, record one of:
   - breached
   - not breached
   - not known yet.

   Record the reason. For a trigger that fired, record when it fired. The app then shows who the appetite says must be told, and by when.

   Next, for each notification deadline that applies in the jurisdiction and sector, record whether it is running, not running or not known. It runs from when the entity became aware, or from a time you enter. The app shows when each deadline would end and the basis for it. The basis is either *per the Atlas as at [date]* or *Triodian's reading*, and always says *confirm with counsel*.

   The GC confirms the deadlines. The app records who made each assessment. That person cannot review the event later.
5. **The vendor has denied responsibility. What do we say? (2:00)** Read inject 3. The vendor has denied responsibility on social media, a journalist is asking questions, and the regulator has asked a question for 9 am. Record:
   - the agreed public statement
   - who may speak about it
   - what may be disclosed while the cause is still unknown.

   Only counsel can finalise the statement. The *Settle the line as counsel* button is greyed out for everyone else, and the app explains why.
6. **Who is accountable for each part? (2:30)** For each AI use involved, the app shows the 3 accountable people from its readiness record. Type in each part that more than one of them is responsible for, and any part that no one is responsible for.
7. **The finding changes (3:00).** Read inject 4. The cause was a configuration change pushed by the AI service. The vendor's own log did not support its statement.

   Record the finding as the investigators concluded it. The app does not investigate. Record how long each record holder took to produce its records, compared with the production time in the readiness record. Update each party's *showed* entry.
8. **Produce the readiness record and actions (3:30).** Open Outputs:
   - DL11 is the readiness record, with its list of gaps.
   - DL12 drafts one hold letter for each record holder. Triodian or counsel adds the person it is addressed to, the date from which records must be kept, and a note. Counsel marks each letter as settled.
   - VE is the record of the exercise.

   Record an owner and a date for each gap under *Actions*. Download each output as Word or PDF.

   Afterwards, the independent reviewer records the review on the event. Once the event is reviewed, the tolerance and trigger assessment cannot be changed.

## What you have at the end

- **DL11, DL12 and VE.** These are marked draft until the phase 3 gate is met and the legal statement check is clear.
- **The list of gaps with owners**, at the end of DL11.
- **The event on the Findings card** of each arrangement whose AI uses were involved.
- **The 3 outputs in the evidence feed.** AI Board Direction collects these into the evidence index.

The exercise may show that a tolerance or trigger was set incorrectly. If so, raise it at the next appetite review in AI Risk Appetite. The app does not change any appetite position or board direction itself.

The example script has a 90-minute version for the board only, and the facts and injects.
