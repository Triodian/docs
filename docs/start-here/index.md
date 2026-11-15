---
title: Triodian AI Governance App Suite
audience: [practitioner, board, operator, contributor]
apps: [suite]
jurisdictions: [au]
lastReviewed: 2026-11-14
slug: /
sidebar_position: 1
---

Five open-source apps that take an organisation from a board's direction on AI, through a risk appetite and an assessment of the AI it uses, to the evidence a regulator or an auditor asks for. The code, the framework text and the Atlas records are Apache 2.0. Triodian earns from facilitation, practitioner deployments and support, not from licences.

| App | What it does | Who runs it |
| --- | --- | --- |
| [Obligations Atlas](https://github.com/Triodian/obligations-atlas) | A reviewed register of AI obligations for Australia, Singapore and the United States, a matter brief that scopes an engagement, and an MCP server any client can call | Counsel, practitioners |
| [AI Board Direction](https://github.com/Triodian/board-direction) | Ten steps, B0 to B9, from director briefing to the chair's resolution; standalone for any company, connected for regulated entities | Board advisers, GCs, chairs |
| [AI Risk Appetite](https://github.com/Triodian/risk_appetite) | Eight decisions and checks K1 to K11 that turn the board's direction into a calibration set management can work to | CROs, GCs |
| [AI Use Assessment](https://github.com/Triodian/use-assessment) | A register of AI arrangements, classified and assessed against the appetite, with findings on providers and a feed back to the board | Assessors, counsel, independent reviewers |
| [Confidentiality Exposure Assessment](https://github.com/Triodian/Confidentiality-Exposure-Assessment) | Which channels may carry a matter's confidential information, and at what rung, for deals, litigation, R&D, tenders, board papers and export-controlled data | GCs, matter teams |

Two routes through the suite:

- **Regulated entities** (APRA-regulated, MAS-regulated): AI Board Direction in connected mode, then AI Risk Appetite, then AI Use Assessment. Each app reads the one before it over a service binding, and the board sees the result in its board view.
- **Everyone else**: AI Board Direction in standalone mode, then Confidentiality Exposure Assessment when a matter arises.

The Obligations Atlas sits in front of both: its matter brief says which obligations are in scope and which apps fit.

The suite is written jurisdiction by jurisdiction. Australia and the United States are covered now, and Singapore's pages follow; any other jurisdiction runs on the [best-practice baselines](/concepts/baselines-overlays-and-controls), which hold everywhere. The picker in the top bar sets which jurisdiction's content you see, and pages that depend on it say so at the top.

## Where to go next

- [Get started in 10 minutes](./get-started.md): run a worked example in your browser, no sign-up.
- [Choose your path](./paths/index.md): practitioner, board member or executive, operator, contributor.
- [Licensing and support](./licensing-and-support.md): what is free, what Triodian charges for, how to get help.
