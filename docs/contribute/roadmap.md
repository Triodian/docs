---
title: Roadmap
audience: [practitioner, board, operator, contributor]
apps: [suite]
lastReviewed: 2026-11-17
slug: /roadmap
sidebar_position: 3
---

What is being built next, in public terms, and the conditions each item waits on. This page is the one source: the organisation profile on GitHub, each app's README and [triodian.com/status](https://triodian.com/status) point here rather than carrying their own copy. Everything on it is planned, not delivered; what has shipped is on the status page and in each app's releases.

Dates are not given. Items are ordered, and each carries the condition that lets it start. A condition that is a review or a sale runs at its own pace.

## Apps and modules

| Order | Item | What it is | Waits on |
| --- | --- | --- | --- |
| 1 | **AI Incident Accountability, Shape A** | Two new outputs in AI Use Assessment and a facilitated tabletop. DL11, an *incident readiness record* for each AI arrangement: the runtime records that would show what the system did, who holds them, the contract clause that gives access, how long production takes, and the named accountable person for the system, for the infrastructure it shares and for the change process. DL12, an *evidence-preservation hold* letter per record holder, generated from DL11 and drafted only; counsel issues it. A *validation event* in the review flow, so an exercise or a real incident is recorded against the arrangement with the vendor's statement set beside the evidence shown, the trigger that fired and when each notification clock started. The tabletop runs a scenario against the client's own register and leaves DL11 and DL12 behind. Nothing operational: no alerting, no paging, nothing the client must have available during an incident; every output downloads as Word, PDF or Markdown. | In build: the outputs and the validation event merged into AI Use Assessment on 17 November 2026 (use-assessment #45) and the chain test's step 8 follows; delivered once live on the test site, the tabletop has had its dry run and counsel has read the hold letter and the clock lines. The guide is [Run the incident accountability tabletop](/guides/running-an-engagement/incident-accountability-tabletop) |
| 2 | **AI Incident Accountability, Shape B** | A fourth engagement app holding incidents, holds, clocks and statements in its own database, reading the register from Use Assessment and the tolerances from Risk Appetite over service bindings, with retention and purge and an audit-log export before it holds a live incident. Separate from Use Assessment because incident records have a different retention and disclosure profile from assessment working papers, and a client may run several incidents against one assessment. | Two paid tabletops run under Shape A; otherwise not before self-service entry |
| 3 | **Self-service entry (Triodian Start)** | A front door: sign-up, profile questions, a routing table shared with the Atlas matter brief, a team stepper with separation-of-duty checks, provisioning on completion, and a journey view across a client's apps. | The regulated chain, the installer and practitioner provisioning gates |

The scope of Shape A, and why the suite does not build crisis-management tooling, is in the [AI Use Assessment framework](/frameworks/ai-use-assessment#outputs); the short form is: the question an incident puts to a board is not "did the AI cause it" but "if it had, how would we have known, and how fast", and that is an evidence question in the register, not a response-coordination question.

## Jurisdictions

A jurisdiction is added by the six steps in [Add a jurisdiction](/guides/extending-the-suite/add-a-jurisdiction): scoping, reference data, the Atlas round, sector overlays, worked examples and the installer, then this site. It appears in the picker as *planned* when scoping starts and as *available* when its packs and examples land. A lawyer admitted in the jurisdiction reads the packs before any organisation there uses them. Any jurisdiction not listed runs on the [best-practice baselines](/concepts/baselines-overlays-and-controls), which hold everywhere. The order runs across the next three sections: the queued jurisdictions, then the deployment platforms, then the proposed jurisdictions.

| Order | Jurisdiction | Status | Note |
| --- | --- | --- | --- |
| — | Australia | Available | The first jurisdiction; APRA, ASIC, OAIC and the super, banking and insurance packs |
| — | United States | Available | Five sectors as overlays on the baselines; state law under the state's code |
| — | Singapore | Scoping; Atlas records published | The MAS pack exists in the apps; the site's pages follow |
| 1 | European Union | Queued | DORA, the AI Act's deployer duties, the ESAs; one overlay for the Union, member-state law as an overlay on it where a sponsor asks |
| 2 | United Kingdom | Queued | PRA and FCA, the Critical Third Parties regime, the ICO |
| 3 | Canada | Queued | OSFI, provincial securities and privacy regulators, Quebec's Law 25 |

## Deployment platforms

The apps run today on Cloudflare: Workers, D1, Access for the email sign-in, service bindings between apps and Cloudflare's email service, installed by `triodian-install` into the client's own Cloudflare account. Platform support means the same apps and the same installer deploying into a client's own account on another cloud, with the store, the sign-in, the calls between apps and the outgoing email each behind an adapter, so that a regulated entity whose estate, residency requirement or supplier policy names one cloud can run the suite there without a fork. Residency then becomes a property of the region chosen, which it is not on D1 today. Each platform is one piece of work: the adapters, an installer target, the suite and chain tests running against it, and the security answer pack extended with that platform's statement.

| Order | Platform | Status | Note |
| --- | --- | --- | --- |
| 4 | Amazon Web Services | Proposed | The largest share of regulated-entity estates in the suite's current jurisdictions |
| 5 | Microsoft Azure | Proposed | Where a client's identity and agent controls already live in Entra and Purview, the suite's sign-in and controls map onto them; the security answer pack already names the path to Azure as an open item |
| 6 | Google Cloud | Proposed | Smaller share in financial services; follows the other two unless a sponsor's estate is there |

A platform waits on a client or sponsor who must run in it; none is started on speculation. The order above can change with the first such client. Cloudflare remains the reference deployment and the one the worked examples, the test sites and the installer's default target use.

## Proposed jurisdictions

| Order | Jurisdiction | Status | Note |
| --- | --- | --- | --- |
| 7 | New Zealand | Proposed | RBNZ and the FMA; CoFI; the Australian packs port almost whole, and trans-Tasman firms advise on both sides |
| 8 | Hong Kong | Proposed | HKMA and SFC guidance on generative AI and AI models; PDPO; a common-law, English-language regime shared with the Singapore firms |
| 9 | United Arab Emirates | Proposed | DFSA and FSRA in the two financial free zones, with the onshore regulators; an English-language common-law regime with the heaviest concentration of international firms outside London |
| 10 | Switzerland | Proposed | FINMA's guidance on AI governance and risk management; a narrow, well-defined target, with English the working language of its financial sector |
| 11 | South Africa | Proposed | King IV as the spine of the board pack; the Prudential Authority and FSCA; POPIA |
| 12 | India | Proposed | RBI's framework for responsible AI and SEBI's expectations; a very large pool of regulated entities; the DPDP rules still phasing in |
| 13 | Japan | Proposed | FSA, METI's business guidelines and the AI Promotion Act; Japanese-language content makes it the dearest jurisdiction on the list, so it goes last unless a sponsor appears first |

Alternates, if one of the proposed seven stalls: Malaysia (close to the Singapore work) and South Korea (a binding AI statute, in Korean). Ireland and the Nordic countries are covered by the European Union overlay and are not listed separately.

Proposed jurisdictions are ordered by how likely a law firm or board-advisory firm is to sponsor the work: an English-language legal market, a director institute that runs board programmes, a prudential regulator that has written something specific about AI, and existing ties to firms already working with the suite. The regulator and instrument notes above are from Triodian's reading at the date of review and are confirmed, instrument by instrument, in each jurisdiction's scoping note before anything is written into a pack. A sponsor moves a jurisdiction up the list; nothing else does.

## What is not on this roadmap

- Real-time incident tooling, alerting or mass notification, by decision: clients keep their crisis tool and the suite produces the documents that go into it.
- Agent controls and signed evidence (the rules tier and evidence layer) are a separate programme and are presented to clients as roadmap, not product.
- A company-wide mode in Confidentiality Exposure Assessment for everyday AI tools: it needs its own method text first.
- Commercially licensed products, including the GRC and board-portal integrations (Diligent, ServiceNow, OneTrust, Archer, OpenPages, Purview or Harmonic), are not part of the open-source suite and are not listed here; their horizon is on [triodian.com/status](https://triodian.com/status#roadmap).

## How this page is kept

Changed by pull request when the development plan changes. Each entry names its condition, so a reader can tell from the status page and the releases whether it has started, without a date that would have to be revised.
