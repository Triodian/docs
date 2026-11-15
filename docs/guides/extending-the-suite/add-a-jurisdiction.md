---
title: "Add a jurisdiction"
audience: [contributor, practitioner]
apps: [suite]
jurisdictions: [au, us, other]
lastReviewed: 2026-11-15
sidebar_position: 1
---

This guide is for a contributor adding a country to the suite: its sectors in the Metamodel, its obligations in the Obligations Atlas, its sector packs in the three engagement apps, its worked examples and its installer option. At the end, a practitioner can choose the jurisdiction in set-up, the Atlas shows it as covered, and each main sector opens with its own pack. It takes about two weeks of work for five sectors, plus the Atlas review and counsel's review, which run at their own pace.

The canonical statement of the method is the Metamodel's [adding a jurisdiction](/reference/apps/metamodel/adding-a-jurisdiction) page, steps J.1 to J.6. This guide walks those steps as they were run for the United States in November 2026, and adds what that run taught. Where the two differ, the Metamodel page is updated to match.

## Before you start

- Read [Baselines, overlays and the four controls](/concepts/baselines-overlays-and-controls). A jurisdiction's sector packs are generated as overlays on the eight baseline profiles; you will write an overlay, not a pack.
- Clone Triodian_Metamodel, obligations-atlas, board-direction, risk_appetite, use-assessment and triodian-install. Each has a test branch and CI; every change goes there first and reaches `main` when CI is green.
- Python 3 for the Metamodel validator (`scripts/requirements.txt`); Node 20 or later for the apps.
- Agree who the named Atlas reviewer will be. Publishing records is a review, not code, and it is usually the slowest step.
- Agree who will review the result for the jurisdiction. The suite states no legal conclusion, but the packs name instruments, and a lawyer admitted in the jurisdiction should read them before any organisation there uses the apps.

## The six steps

### J.1 Scope the jurisdiction

Write a research note: the regulators and their instruments by tier (binding, expected, anticipated, adopted) for each candidate sector, the cross-sector laws that apply to all of them, and the candidate sectors scored. Score each sector 0, 1 or 2 on the five tests (reach, accountability, buyers, route to market, fit) and take the top five; a tie goes to the sector with binding instruments. Record why the others stay on their baselines or the general path.

You see: a note with a dated "checked" line, a table per sector, and a scoring table. If a sector has no AI-specific binding instrument (payments in most jurisdictions), say so in the note; it is a reason to leave it on its baseline, not a gap to fill.

Done when the five are recorded with their scores and the note carries the date it was checked. The note is re-checked each quarter.

*US run:* banking 10, insurance 10, securities 9, health care 8, critical infrastructure 8; listed companies 7 and payments 6 stayed on the general path and BP-PAYMENTS. One instrument moved between the first and second check (SR 26-2 replaced SR 11-7 in April 2026), which is why the date matters.

### J.2 Reference data in the Metamodel

In `reference-data/regulated-sectors.json`, add every selectable sector for the jurisdiction with its entity types and regulators; mark `mainSector: true` on the five; and set `baselineProfiles` to the baseline each builds on. Critical infrastructure usually points at both the corporate and the government baseline, so a public operator can choose the right one. Run `python3 scripts/validate.py`.

You see: the validator pass, or a failure naming the problem. It rejects an unknown baseline reference and a sixth main sector.

Then bring the data into the apps: in board-direction `node tools/sync-sectors.mjs` and `node tools/sync-baselines.mjs`; Risk Appetite and Use Assessment take the sectors with their packs in J.4. Raise the Metamodel version (the US was 2.9.0) so the apps can vendor it.

Done when the validator passes and the apps list the sectors in set-up.

*US run:* eight sectors, five main; Triodian_Metamodel 2.9.0.

### J.3 The Atlas round

In obligations-atlas, write a research file under `data/research/` (`YYYY-MM-DD-<jurisdiction>-overlay.json`) with one record per obligation for each main sector and for the cross-sector laws, each from the instrument's official text, with its tier. Build the submission and send it through the update agent to the review queue. Records that rest on an announcement rather than official text go in as leads, not proposals.

You see: the local dry run listing proposals, leads and rejections; then, after submission, the review queue with each proposal waiting on the named reviewer.

Rules learned on the way:

- An instrument that is final but not yet in force stays **anticipated**, however certain it is. The Metamodel keeps *binding* for instruments in force; three US records had to be retiered after the first submission.
- **State and sub-national laws** are recorded under the country, with the state in the record's title, not under a subdivision code.
- The Atlas shows the jurisdiction as **covered** only once its records are published, so a matter brief for it says "not covered" until the reviewer has finished and the snapshots are refreshed.

Done when the reviewer has decided the proposals, the snapshots are refreshed and merged, and a matter brief for each main sector lists its obligations.

*US run:* 17 records across five sectors plus California, Texas and Colorado; 29 proposals and 5 leads after the tier fix; reviewer's decision and the snapshot refresh followed.

### J.4 Sector packs, as overlays

Each engagement app has an overlay file per jurisdiction, `content/overlays/<code>.json`, and a tool that builds a pack from it on top of the baseline. Write the overlay once per app:

| App | File and tool | What the overlay supplies |
| --- | --- | --- |
| AI Board Direction | `content/overlays/us.json`; `node tools/sync-overlays.mjs && node tools/build-content.mjs` | Per pack: id, name, sector, baseline, the instruments it draws on in one sentence, failure cases for the director briefing, and uses to consider ruling out at B3, each naming its instruments |
| AI Risk Appetite | `content/overlays/us.json`; `node tools/build-overlay-packs.mjs && node tools/build-content.mjs` | The documents an entity in the sector usually holds (inputs I1 to I11) and, where the sector needs it, the consequence prompt at decision 2 (health care and critical infrastructure) |
| AI Use Assessment | `content/overlays/us.json`; `node tools/build-overlay-packs.mjs && node tools/build-content.mjs` | The document list and the main arrangement type for the sector |

The functions, decisions, measures and areas stay the baseline's; the overlay adds only what the jurisdiction changes. Pack ids follow the pattern `<code><Sector>` (`usBanking`, `usCriticalInfrastructure`).

You see: a generated pack per main sector in each app; the app's tests (rules, content, browser) passing; the golden copies of the worked examples changing by additions only.

Checks that caught something on the US run, now part of the method:

- The app's set-up must offer the new jurisdiction, and an overlay pack must be offered only in its own jurisdiction.
- Shared labels must not carry another jurisdiction's wording: the bank, insurer, capital markets and financial institution labels said Singapore and had to be made neutral.
- A financial institution in the new jurisdiction must not be suggested another jurisdiction's pack.
- A matter brief for the jurisdiction must import into Use Assessment with its jurisdiction named.
- Critical infrastructure: the overlay builds on the corporate baseline, and a government-run operator chooses the government baseline in set-up.

Done when each main sector opens with its pack in all three apps and every test passes.

*US run:* one pull request per app, five packs each; Board Direction 58, Risk Appetite 41 and Use Assessment 54 browser tests passing.

### J.5 Worked examples

One fictional organisation per main sector, labelled fictional on every screen, run through the apps in practice mode and added to the suite's chain test. Each example should exercise the overlay: a US bank's example records a vendor model and a third-party arrangement; a health care example records a patient care decision support tool. Keep the examples free of any real organisation's name.

Done when each example runs end to end from the practice entry point, the chain test covers at least one regulated example for the jurisdiction, and the suite's tests pass.

*US run:* in progress at the time of writing.

### J.6 Installer and configuration

In triodian-install, add the jurisdiction code, its default sector and its currency to the installer's choices and to each app's `wrangler.jsonc` defaults. Fees for the jurisdiction are set at that market's levels in its own currency, not converted.

Done when a test deployment installs with the new jurisdiction and opens each app on the right pack.

*US run:* to follow the worked examples.

## Beside the six steps

- **The docs site.** Add the jurisdiction to `jurisdictions.json` in Triodian/docs as `planned` when J.1 starts and `available` when J.5 lands; write its concept page (the [United States](/concepts/united-states) page is the pattern) and its mapping pages, one per sector overlay plus one for cross-sector law.
- **The website.** The jurisdiction page, the fee schedule in local currency, who it is for and the cost estimator are Triodian's and are not part of the open-source suite.
- **Review.** A lawyer admitted in the jurisdiction reads the research note, the packs and the mapping pages. Findings land as content edits, which is why the packs are generated from overlays rather than written by hand.

## If something fails

| Symptom | Cause | Fix |
| --- | --- | --- |
| Validator rejects the sectors file | More than five `mainSector`, or a `baselineProfiles` id that does not exist | Reduce the main sectors; check the id against `baseline-profiles.json` |
| A record is rejected at submission | Tier does not match status: a not-in-force instrument marked binding | Retier to anticipated and resubmit |
| The pack does not appear in set-up | The jurisdiction is not offered, or the pack is filtered to another jurisdiction | Check the set-up jurisdiction list and the pack's `sector` code |
| Golden copies change by more than additions | The overlay has altered baseline content it should only extend | Move the change into the baseline (a Metamodel change) or remove it |
| The matter brief says the jurisdiction is not covered | Records approved but snapshots not refreshed or not merged | Run the refresh, merge its pull request, redeploy the Atlas |
