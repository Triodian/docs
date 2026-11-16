---
title: Practitioner
audience: [practitioner]
apps: [suite]
jurisdictions: [au]
lastReviewed: 2026-11-17
sidebar_position: 2
---

This path is for people who run engagements for clients. The apps hold your method, your record and your outputs in one place.

An engagement is a set of sessions with the client's people, each in a named role. At each step, the app:

- tells you who proposes, who records and who reviews
- stops anyone from acting outside their role
- produces the outputs as Word documents. These include the statement, policy outline, board minute, action list, register and findings. Each one is marked draft until the right person signs it off.

## What you will do

1. **Set the scope of the engagement in the Obligations Atlas.** Choose the client's jurisdiction, sector and entity type. The Atlas builds a matter brief. It lists the obligations that apply, the questions for counsel and the apps to use. You keep the brief as a file. It is never sent to a server. You can keep one brief for each client in the browser portfolio.
2. **Choose the route.** The matter brief tells you which route applies.
   - Entities regulated by the Australian Prudential Regulation Authority (APRA) or the Monetary Authority of Singapore (MAS) use AI Board Direction in connected mode, then AI Risk Appetite, then AI Use Assessment.
   - Everyone else uses AI Board Direction in standalone mode, and Confidentiality Exposure Assessment when a matter needs it.
3. **Get a deployment.** For now, Triodian manages client deployments. Each client gets one deployment, with each app under the client's name and one sign-in for all of them. If you use your own Cloudflare account, also read the [Operator](./operator.md) path.
4. **Form the team.** In each app's set-up, name the people and their roles. The app enforces separation of duties:
   - a peer reviewer cannot be the assessor
   - if the general counsel (GC) also acts as counsel, a second approver is needed
   - the independent reviewer in a Use Assessment cannot hold any other role.
5. **Run the sessions.** Import the matter brief into the app's set-up, then go through the steps. The engagement plan lists the sessions, who attends by role, what the client needs to provide and when sign-off is needed. You can send it to the client before the first session.
6. **Deliver the outputs and keep the record.** Every output shows its status, the version it came from and its evidence line. The evidence line refers to the APRA letter, Prudential Standard CPS 230 or ISO/IEC 42001. The practice hub shows each client deployment with its stage, open actions and next sign-off date. It shows nothing else, so it is safe to leave open on screen.

## Read in this order

1. [Get started in 10 minutes](../get-started.md): the worked examples. Coastline Super shows the regulated chain. Harrow Valley Foods shows standalone mode.
2. [Guides: running an engagement](/guides/running-an-engagement): one guide for each type of engagement.
3. [Concepts](/concepts): roles and separation of duties, modes, sector packs and baselines, the regulated chain, and evidence. Read these before the first client session. The client's GC is likely to ask about them.
4. [Guides: client data](/guides/client-data): importing a provider register, loading an ISO/IEC 42001 limits register, Lite scope and the evidence index.
5. The link notes for the regulated chain, kept in the app repositories: [the board link](/reference/apps/risk-appetite/board-link), [the calibration link](/reference/apps/use-assessment/calibration-link) and [the in-use feed](/reference/apps/risk-appetite/appetite-feedback-link).
6. [Frameworks](/frameworks): the full method, and the [mappings](/frameworks/mappings) to the laws and standards the client's GC will ask about.

## Common questions from practitioners

- **Can I add my firm's branding to the outputs?** Yes. In each app's set-up, enter your firm's name, a tagline and a PNG logo. They appear in the app header, in the page header of Word and PDF outputs, and in the document's creator field.
- **What does the client's board see?** In connected mode, the board view in AI Board Direction shows, for each board meeting:
  - the positions the board approved
  - the current state of the appetite
  - the latest measures of AI in use.
- **Who keeps counsel's legal determinations?** Counsel does. The app shares technical classifications and evidence positions with the technology owner and the AI governance team in scheduled updates. Counsel's legal determinations stay with counsel unless counsel chooses to share them. For counsel reviewing this design, see [what they supply and what they read](/reference/apps/use-assessment/management-roles-and-privilege).
- **What does it cost?** The apps are free under Apache 2.0. Triodian charges for running engagements, for deployments it manages and for support. See [Licensing and support](../licensing-and-support.md).
