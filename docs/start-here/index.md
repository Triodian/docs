---
title: Triodian AI Governance App Suite
audience: [practitioner, board, operator, contributor]
apps: [suite]
jurisdictions: [au]
lastReviewed: 2026-11-17
slug: /
sidebar_position: 1
---

The Triodian AI Governance App Suite is 5 open-source apps for governing artificial intelligence (AI). They take an organisation through 4 stages:

1. The board sets its direction on AI.
2. Management sets a risk appetite for AI.
3. The organisation assesses the AI it uses against that appetite.
4. The apps produce the evidence a regulator or auditor asks for.

The code, the framework text and the Atlas records are licensed under Apache 2.0. Triodian does not charge licence fees. It charges for running engagements (facilitation), for practitioner deployments and for support.

| App | What it does | Who runs it |
| --- | --- | --- |
| [Obligations Atlas](https://github.com/Triodian/obligations-atlas) | A reviewed register of AI obligations for Australia, Singapore and the United States. It produces a matter brief that sets the scope of an engagement. It also runs a Model Context Protocol (MCP) server that any client can call. | Counsel, practitioners |
| [AI Board Direction](https://github.com/Triodian/board-direction) | 10 steps, B0 to B9, from the directors' briefing to the chair's resolution. Any company can use it on its own (standalone mode). Regulated entities use it linked to the other apps (connected mode). | Board advisers, general counsel (GCs), chairs |
| [AI Risk Appetite](https://github.com/Triodian/risk_appetite) | 8 decisions, with checks K1 to K11. They turn the board's direction into a calibration set: the limits management works to. | Chief risk officers (CROs), GCs |
| [AI Use Assessment](https://github.com/Triodian/use-assessment) | A register of AI arrangements. Each arrangement is classified and assessed against the appetite. It records findings on providers and reports back to the board. | Assessors, counsel, independent reviewers |
| [Confidentiality Exposure Assessment](https://github.com/Triodian/Confidentiality-Exposure-Assessment) | Shows which channels may carry a matter's confidential information, and at what level (rung). It covers deals, litigation, research and development, tenders, board papers and export-controlled data. | GCs, matter teams |

## 2 routes through the suite

- **Regulated entities** (regulated by the Australian Prudential Regulation Authority (APRA) or the Monetary Authority of Singapore (MAS)): use AI Board Direction in connected mode, then AI Risk Appetite, then AI Use Assessment. Each app reads data from the one before it through a service binding. The board sees the results in its board view.
- **Everyone else**: use AI Board Direction in standalone mode. Use Confidentiality Exposure Assessment when a matter needs it.

Start both routes with the Obligations Atlas. Its matter brief tells you which obligations apply and which apps to use.

## Jurisdictions

The content is written for each jurisdiction separately. Australia and the United States are covered now. Singapore's pages are coming. For any other jurisdiction, the suite uses the [best-practice baselines](/concepts/baselines-overlays-and-controls), which apply everywhere.

Use the picker in the top bar to choose your jurisdiction. If a page's content depends on the jurisdiction, the page says so at the top.

## Where to go next

- [Get started in 10 minutes](./get-started.md): run a worked example in your browser. You do not need to sign up.
- [Choose your path](./paths/index.md): practitioner, board member or executive, operator, or contributor.
- [Licensing and support](./licensing-and-support.md): what is free, what Triodian charges for and how to get help.
- [Roadmap](/roadmap): what we are building next and which jurisdictions come next.
