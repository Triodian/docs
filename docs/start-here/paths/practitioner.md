---
title: Practitioner
audience: [practitioner]
apps: [suite]
lastReviewed: 2026-11-14
sidebar_position: 2
---

You run engagements for clients and the apps are your method, record and output in one place. An engagement is a set of sessions with the client's people in named roles; the app says at each step who proposes, who records and who reviews, refuses anything outside a role, and generates the outputs (statement, policy outline, board minute, action list, register, findings) as Word documents marked draft until the right person signs them off.

## What you will do

1. **Scope the engagement in the Obligations Atlas.** Choose the client's jurisdiction, sector and entity type; the Atlas builds a matter brief that lists the obligations in scope, the questions for counsel and the apps that fit. The brief is a file you keep; it is never sent to a server, and you can hold one per client in the browser portfolio.
2. **Choose the route.** Regulated entities (APRA- or MAS-regulated) run AI Board Direction in connected mode, then AI Risk Appetite, then AI Use Assessment; the brief says so. Everyone else runs AI Board Direction standalone, and a Confidentiality Exposure Assessment when a matter calls for it.
3. **Get a deployment.** Triodian administers client deployments for now: one per client, each app under the client's name, one sign-in across them. If you run your own Cloudflare account, the [Operator](./operator.md) path applies too.
4. **Form the team.** Each app's set-up names the people and their roles. Separation of duties is enforced: a peer reviewer cannot be the assessor, a second approver is needed where the GC also acts as counsel, and the independent reviewer in a Use Assessment holds no other role.
5. **Run the sessions.** Import the matter brief into the app's set-up, then walk the steps. The engagement plan output lists the sessions, the attendees by role, the client inputs needed and the sign-off points, so you can send it before the first session.
6. **Deliver the outputs and keep the record.** Every output carries its status, the version it came from and its evidence line (APRA letter bullet, CPS 230 paragraph, ISO/IEC 42001 clause). The practice hub shows every client deployment with its stage, open actions and next sign-off date, and nothing else, so it is safe to leave open.

## Read in this order

1. [Get started in 10 minutes](../get-started.md): the worked examples, especially Coastline Super for the regulated chain and Harrow Valley Foods for standalone.
2. [Guides: running an engagement](/guides/running-an-engagement): one guide per kind of engagement.
3. [Concepts](/concepts): roles and separation of duties, modes, sector packs and baselines, the regulated chain, evidence. Read these before the first client session; they are what the client's GC will ask about.
4. [Guides: client data](/guides/client-data): importing a provider register, loading an ISO/IEC 42001 limits register, Lite scope, the evidence index.
5. The link notes for the regulated chain, held in the app repositories: [the board link](/reference/apps/risk-appetite/board-link), [the calibration link](/reference/apps/use-assessment/calibration-link) and [the in-use feed](/reference/apps/risk-appetite/appetite-feedback-link).
6. [Frameworks](/frameworks): the method in full, once published after counsel's review.

## Things practitioners ask first

- **Can I brand the outputs?** Yes. Each app's set-up takes your firm's name, a line under it and a PNG logo; they appear in the header, the Word and PDF page header and the document creator field.
- **What does the client's board see?** In connected mode, the board view in AI Board Direction shows the positions the board approved, where the appetite stands now and the latest in-use measures, for each board meeting.
- **Who holds counsel's determinations?** Counsel. Technical classifications and evidence positions are shared with the technology owner and the AI governance team in scheduled updates; counsel's legal determinations stay with counsel unless counsel chooses to include them. The note [what they supply and what they read](/reference/apps/use-assessment/management-roles-and-privilege) sets this out for counsel assessing the design.
- **What does it cost?** The apps are free and Apache 2.0. Facilitation, Triodian-administered deployments and support are what Triodian charges for: [Licensing and support](../licensing-and-support.md).
