---
title: "Add a jurisdiction"
audience: [contributor, practitioner]
apps: [suite]
jurisdictions: [au, us, other]
lastReviewed: 2026-11-17
sidebar_position: 1
---

This guide is for contributors adding a country to the suite. Adding a country means adding:

- its sectors to the Metamodel
- its obligations to the Obligations Atlas
- its sector packs to the 3 engagement apps
- its worked examples
- its option in the installer.

When you finish, a practitioner can choose the jurisdiction in set-up, the Atlas shows it as covered, and each main sector opens with its own pack.

It takes about 2 weeks of work for 5 sectors. The Atlas review and counsel's review take extra time, and we cannot predict how long.

The official version of the method is the Metamodel's [adding a jurisdiction](/reference/apps/metamodel/adding-a-jurisdiction) page, steps J.1 to J.6. This guide shows how we followed those steps for the United States in November 2026, and what we learned.

We updated the Metamodel page afterwards with those lessons. We updated it again on 16 November, after comparing the United States with Australia part by part. The comparison showed that a jurisdiction can complete every step and still not match the first jurisdiction. Step J.10 below deals with this.

## Before you start

- Read [Baselines, overlays and the 4 controls](/concepts/baselines-overlays-and-controls). A jurisdiction's sector packs are generated as overlays on the 8 baseline profiles. You will write an overlay, not a pack.
- Clone Triodian_Metamodel, obligations-atlas, board-direction, risk_appetite, use-assessment and triodian-install. Each has a test branch and continuous integration (CI). Every change goes to the test branch first, and reaches `main` when CI passes.
- Python 3 for the Metamodel validator (`scripts/requirements.txt`); Node 20 or later for the apps.
- Agree who will be the named Atlas reviewer. Records are published after a review, not through code. This is usually the slowest step.
- Agree who will review the result for the jurisdiction. The suite does not state legal conclusions, but the packs name instruments. A lawyer admitted in the jurisdiction should read the packs before any organisation there uses the apps.

## The 6 steps

### J.1 Scope the jurisdiction

Write a research note. It should cover:

- the regulators and their instruments for each possible sector, by tier (binding, expected, anticipated, adopted)
- the laws that apply across all sectors
- the score for each possible sector.

Score each sector 0, 1 or 2 on the 5 tests: reach, accountability, buyers, route to market and fit. Choose the 5 sectors with the highest scores. If 2 sectors tie, choose the one with binding instruments. Record why the other sectors stay on their baselines or the general path.

Result: a note with a dated "checked" line, a table for each sector and a scoring table. If a sector has no binding instrument specific to AI, say so in the note. This is common for payments. It is a reason to leave the sector on its baseline. It is not a gap you need to fill.

This step is done when the 5 sectors are recorded with their scores, and the note shows the date it was checked. Check the note again every quarter.

*United States:* banking 10, insurance 10, securities 9, health care 8, critical infrastructure 8. Listed companies (7) stayed on the general path, and payments (6) stayed on BP-PAYMENTS. One instrument changed between the first and second checks: SR 26-2 replaced SR 11-7 in April 2026. This is why the date matters.

### J.2 Reference data in the Metamodel

In `reference-data/regulated-sectors.json`:

- add every sector users can choose in the jurisdiction, with its entity types and regulators
- set `mainSector: true` on the 5 main sectors
- set `baselineProfiles` to the baseline each sector builds on.

Critical infrastructure usually links to both the corporate and the government baseline, so a public operator can choose the right one.

Run `python3 scripts/validate.py`.

Result: the validator passes, or fails and names the problem. It rejects a baseline reference it does not recognise, and more than 5 main sectors.

Then copy the data into the apps. In board-direction, run `node tools/sync-sectors.mjs` and `node tools/sync-baselines.mjs`. AI Risk Appetite and AI Use Assessment get the sectors with their packs in step J.4. Increase the Metamodel version number so the apps can include the new version. For the United States, this was 2.9.0.

This step is done when the validator passes and the apps list the sectors in set-up.

*United States:* 8 sectors, 5 of them main sectors. Triodian_Metamodel 2.9.0.

### J.3 The Atlas round

In obligations-atlas:

1. Write one research brief for each main sector, named `BRIEF-<date>-<jurisdiction>-<sector>.md`. List its instruments and the obligations each one imposes.
2. Write a research file under `data/research/`, named `YYYY-MM-DD-<jurisdiction>-overlay.json`. Create one record for each **obligation**, not each instrument. For example, if one instrument requires an inventory, a validation, a contract term, a board report and a notification, that is 5 records. Each record has its own paragraph reference, tier and key dates.
3. Build the submission and send it through the update agent to the review queue.

Use the first jurisdiction as a guide to how much detail is needed. Australia has about 40 records, with at least 6 for each main sector.

If a record is based on an announcement and not on official text, submit it as a lead, not a proposal.

Result: the local dry run lists proposals, leads and rejections. After you submit, the review queue shows each proposal waiting for the named reviewer.

Rules we learned from the United States:

- An instrument that is final but not yet in force is **anticipated**, however certain it is. The Metamodel uses *binding* only for instruments in force. We had to change the tier of 3 US records after the first submission.
- **State and other sub-national laws** use the state's ISO 3166-2 code, such as `US-NY`, `US-CO` or `AU-NSW`. We decided this on 15 November 2026. The first US records had been published under `US` with the state in the title, and we had to move them. Federal law, and model laws that each state must adopt, use the country code. A search for the country lists the country's records and the records of every state in it.
- The Atlas shows the jurisdiction as **covered** only after its records are published. Until the reviewer has finished and the snapshots are refreshed, a matter brief for the jurisdiction says "not covered".

This step is done when the reviewer has decided on the proposals, the snapshots are refreshed and merged, and a matter brief for each main sector lists at least 6 records specific to that sector.

*United States:* 17 records across 5 sectors, plus California, Texas and Colorado. After fixing the tiers, there were 29 proposals and 5 leads. The reviewer's decision and the snapshot refresh came next. This gave one record for each instrument. That was enough to name each instrument in a brief, but not enough detail to work from. Development plan item US.3 adds the detail.

### J.4 Sector packs, as overlays

Each engagement app has an overlay file for each jurisdiction, `content/overlays/<code>.json`. A tool builds a pack from the overlay file and the baseline. Write the overlay once for each app:

| App | File and tool | What the overlay supplies |
| --- | --- | --- |
| AI Board Direction | `content/overlays/us.json`; `node tools/sync-overlays.mjs && node tools/build-content.mjs` | For each pack: ID, name, sector, baseline, a one-sentence summary of the instruments it uses, examples of AI failures for the director briefing, and uses the board may want to rule out at B3. Each names its instruments |
| AI Risk Appetite | `content/overlays/us.json`; `node tools/build-overlay-packs.mjs && node tools/build-content.mjs` | The documents an entity in the sector usually holds (inputs I1 to I11) and, where the sector needs it, the consequence prompt at decision 2 (health care and critical infrastructure) |
| AI Use Assessment | `content/overlays/us.json`; `node tools/build-overlay-packs.mjs && node tools/build-content.mjs` | The document list and the main arrangement type for the sector |

The functions, decisions, measures and areas come from the baseline. The overlay adds only what the jurisdiction changes. Pack IDs follow the pattern `<code><Sector>`, for example `usBanking` or `usCriticalInfrastructure`.

Result: each app has a generated pack for each main sector. The app's rules, content and browser tests pass. The only changes to the golden copies of the worked examples are additions.

These checks found problems during the US work. They are now part of the method:

- The app's set-up must offer the new jurisdiction, and an overlay pack must be offered only in its own jurisdiction.
- Shared labels must not use another jurisdiction's wording. For example, the labels for bank, insurer, capital markets and financial institution mentioned Singapore. We had to make them neutral.
- The app must not suggest another jurisdiction's pack to a financial institution in the new jurisdiction.
- A matter brief for the jurisdiction must import into AI Use Assessment and show its jurisdiction.
- For critical infrastructure, the overlay builds on the corporate baseline. An operator run by government chooses the government baseline in set-up.

This step is done when each main sector opens with its pack in all 3 apps and every test passes.

*United States:* one pull request for each app, with 5 packs in each. Browser tests passed: 58 in AI Board Direction, 41 in AI Risk Appetite and 54 in AI Use Assessment.

### J.5 Worked examples

Create one fictional organisation for each main sector. Then:

- label it as fictional on every screen
- run it through **every** engagement app in practice mode. This includes Confidentiality Exposure Assessment, with one matter described in the jurisdiction's own terms
- link it from Triodian Start's try-first links for its sector
- add the jurisdiction's regulated example to the suite's chain test.

Each example should use the overlay. For example, a US bank's example records a vendor model and a third-party arrangement. A health care example records a patient care decision support tool. Do not use the name of any real organisation.

This step is done when:

- each example opens from Triodian Start's link for its sector in every app
- the chain test runs the jurisdiction's regulated example through AI Board Direction, AI Risk Appetite and AI Use Assessment, in both parts of the suite workflow
- the suite's tests pass.

*United States:* 5 examples: Harlow Ridge Bank, Ashgrove Mutual Insurance Company, Quillfield Securities, Fernhollow Health and Ridgeline Power & Transmission.

- The bank and insurer run through AI Board Direction, AI Risk Appetite and AI Use Assessment. The others run in AI Board Direction only.
- There is no confidentiality matter yet.
- The chain test does not include a US example yet.
- Triodian Start has a United States row. Its securities, health and critical infrastructure links go to each app's first example instead.

We also found that every output had Australian evidence tags, no matter which pack was used. The evidence module now uses the jurisdiction. Outside Australia, it adds ISO/IEC 42001 tags only. Step J.10 fixes this gap.

### J.6 Installer and configuration

In triodian-install, add the jurisdiction code, its default sector and its currency to the installer's choices. Add them to the defaults in each app's `wrangler.jsonc` too. Set fees for the jurisdiction at that market's levels, in its own currency. Do not convert them from another currency.

This step is done when a test deployment installs with the new jurisdiction and opens each app with the right pack.

*United States:* the installer offers the United States. Each app starts a new engagement with the jurisdiction's pack for the sector. If there is no pack, it uses the overlay on the baseline. If there is no overlay, it uses the baseline. A test checks that every sector the installer offers opens with a pack for its jurisdiction or a baseline.

We also found that only AI Board Direction read the installer's defaults. A US install of the other 2 apps started with an Australian pack. The apps have no currency setting. Amounts are free text, and fees are handled on the website.

## After the 6 steps

The US work added 4 steps to the method. The Metamodel page now includes them:

- **J.7 Remove terms from earlier jurisdictions.** Shared labels, method text and coverage lines written for the first jurisdiction can appear in the next one. Examples are supervisor names on shared labels, fees in one currency and a law firm named as counsel. Search for these and make them neutral or specific to each jurisdiction.
- **J.8 Update the website.** Add the jurisdiction page, who it is for, the fee schedule in local currency and the cost estimator. These belong to Triodian. They are not part of the open-source suite.
- **J.9 Review and check again.** Before the pages are published, a lawyer admitted in the jurisdiction reads the research note, the packs, the evidence mapping and the mapping pages. Check the research note every quarter, with the other jurisdictions' notes.
- **J.10 Evidence regimes and wording specific to the jurisdiction.** We added this step on 16 November, after comparing the US with Australia. Unless you change them, 5 things still use the first jurisdiction's content:
  1. The evidence index (`public/shared/evidence.js`, identical in the 3 apps). It needs a mapping for each main sector to the jurisdiction's own regime, next to the shared ISO/IEC 42001 and NIST AI RMF columns.
  2. The automated decisions question, the privilege marking, the default notification hours and the output footers. These must take their text from the overlay.
  3. The Atlas jurisdiction matrix. It must include the jurisdiction's incident reporting deadlines.
  4. The security answers. Add the section that the jurisdiction's reviewers ask for.
  5. The running an engagement guides. Add a version of each section that names an instrument.

  This step is done when:
  - the evidence index for the jurisdiction's regulated example lists its regime by instrument
  - a test in each app shows that no screen or output for the jurisdiction names another jurisdiction's instrument, regulator or date
  - the mapping is marked as the suite's reading, for counsel to confirm.

## The docs site

The documentation is part of adding a jurisdiction. You need to:

- add the jurisdiction to `jurisdictions.json` in Triodian/docs. Mark it `planned` when J.1 starts. Mark it `available` only when J.5, J.6 and J.10 are complete
- write its concept page, using the [United States](/concepts/united-states) page as a model
- write its mapping pages, one for each sector overlay and one for laws that apply across sectors
- write the jurisdiction's version of each running an engagement section that names an instrument.

If the guides still describe the first jurisdiction, the new jurisdiction is not available, even if the picker shows it.

## If something fails

| Symptom | Cause | Fix |
| --- | --- | --- |
| Validator rejects the sectors file | More than 5 `mainSector` entries, or a `baselineProfiles` ID that does not exist | Reduce the main sectors. Check the ID against `baseline-profiles.json` |
| A record is rejected when you submit it | The tier does not match the status. For example, an instrument not yet in force is marked binding | Change the tier to anticipated and submit again |
| The pack does not appear in set-up | The jurisdiction is not offered, or the pack is filtered to another jurisdiction | Check the set-up jurisdiction list and the pack's `sector` code |
| Golden copies change in ways other than additions | The overlay has changed baseline content. It should only add to it | Move the change into the baseline (a Metamodel change) or remove it |
| The matter brief says the jurisdiction is not covered | The records are approved, but the snapshots are not refreshed or not merged | Run the refresh, merge its pull request and redeploy the Atlas |
