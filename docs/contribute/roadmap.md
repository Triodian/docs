---
title: Roadmap
audience: [practitioner, board, operator, contributor]
apps: [suite]
lastReviewed: 2026-11-17
slug: /roadmap
sidebar_position: 3
---

This page lists what we plan to build next and what each item depends on. It is the only copy of the roadmap. The organisation profile on GitHub, each app's README and [triodian.com/status](https://triodian.com/status) all link here.

Everything on this page is planned. None of it is delivered yet. To see what has been released, check the status page and each app's releases.

We do not give dates. Items are listed in order, and each one names the condition it depends on. Some conditions, such as a review or a sale, take as long as they take.

## Apps and modules

| Order | Item | What it is | Depends on |
| --- | --- | --- | --- |
| 1 | **AI Incident Accountability, Shape B** | A 4th engagement app. It holds incidents, holds, deadlines and statements in its own database. It reads the register from AI Use Assessment and the tolerances from AI Risk Appetite through service bindings. Before it holds a live incident, it will have retention and purge rules and an audit log export.<br/><br/>It is separate from AI Use Assessment for 2 reasons. Incident records have different retention and disclosure needs from assessment working papers. A client may also run several incidents against one assessment. | 2 paid tabletops run under Shape A. If that does not happen, not before self-service entry |
| 2 | **Self-service entry (Triodian Start)** | A way for new clients to start without Triodian's help. It includes sign-up, profile questions, a routing table shared with the Atlas matter brief, a step-by-step team set-up with separation-of-duty checks, and provisioning when set-up is complete. It also gives a view of a client's progress across its apps. | The regulated chain, the installer and practitioner provisioning are complete |

AI Incident Accountability, Shape A, left this list on 17 November 2026: it is available in AI Use Assessment, with the tabletop described in [Run the incident accountability tabletop](/guides/running-an-engagement/incident-accountability-tabletop) and on [triodian.com/incident-accountability](https://triodian.com/incident-accountability). Shape B depends on the tabletops run under it.

The [AI Use Assessment framework](/frameworks/ai-use-assessment#outputs) explains the scope of Shape A and why the suite does not build crisis-management tools.

In summary, after an incident a board needs to know how it would find out if AI had caused the incident, and how quickly. That is a question about the evidence in the register. It is not a question about coordinating the response.

## Jurisdictions

[Add a jurisdiction](/guides/extending-the-suite/add-a-jurisdiction) describes the 6 steps for adding a jurisdiction:

1. scoping
2. reference data
3. the Atlas round
4. sector overlays
5. worked examples and the installer
6. this documentation site.

A jurisdiction shows in the picker as *planned* when scoping starts. It shows as *available* when its packs and examples are released. Before any organisation in the jurisdiction uses the packs, a lawyer admitted there reviews them.

Any jurisdiction not listed uses the [best-practice baselines](/concepts/baselines-overlays-and-controls), which apply everywhere.

The order numbers continue across the next 3 tables: queued jurisdictions, then deployment platforms, then proposed jurisdictions.

| Order | Jurisdiction | Status | Note |
| --- | --- | --- | --- |
| Done | Australia | Available | The first jurisdiction. Covers the Australian Prudential Regulation Authority (APRA), the Australian Securities and Investments Commission (ASIC) and the Office of the Australian Information Commissioner (OAIC), with superannuation, banking and insurance packs |
| Done | United States | Available | 5 sectors as overlays on the baselines. State law is listed under each state's code |
| In progress | Singapore | Scoping. Atlas records published | The apps already include the Monetary Authority of Singapore (MAS) pack. The site's pages are coming |
| 1 | European Union | Queued | The Digital Operational Resilience Act (DORA), the AI Act's duties for deployers and the European Supervisory Authorities (ESAs). One overlay for the Union. Where a sponsor asks, member-state law is added as an overlay on top |
| 2 | United Kingdom | Queued | The Prudential Regulation Authority (PRA), the Financial Conduct Authority (FCA), the Critical Third Parties regime and the Information Commissioner's Office (ICO) |
| 3 | Canada | Queued | The Office of the Superintendent of Financial Institutions (OSFI), provincial securities and privacy regulators, and Quebec's Law 25 |

## Deployment platforms

Today the apps run on Cloudflare. They use Workers, D1 databases, Access for email sign-in, service bindings between apps and Cloudflare's email service. The `triodian-install` installer puts them into the client's own Cloudflare account.

Supporting another platform means the same apps and installer can deploy into a client's own account on another cloud. To do this, we put the data store, sign-in, calls between apps and outgoing email each behind an adapter. Some regulated entities must use a particular cloud because of their existing systems, data residency rules or supplier policy. Platform support lets them run the suite there without maintaining a separate copy of the code.

It also means data residency depends on the region the client chooses. That is not possible with D1 today.

Each platform is one piece of work. It includes the adapters, an installer target, running the suite and chain tests on the platform, and adding the platform's details to the security answers.

| Order | Platform | Status | Note |
| --- | --- | --- | --- |
| 4 | Amazon Web Services (AWS) | Proposed | Most regulated entities in the suite's current jurisdictions use AWS |
| 5 | Microsoft Azure | Proposed | If a client already manages identity and agent controls in Entra and Purview, the suite's sign-in and controls can map to them. The security answers already list moving to Azure as an open item |
| 6 | Google Cloud | Proposed | Less used in financial services. Comes after the other 2 unless a sponsor uses Google Cloud |

We only start work on a platform when a client or sponsor needs to run on it. The order above may change when the first such client appears. Cloudflare stays the reference deployment. The worked examples, the test sites and the installer's default target all use Cloudflare.

## Proposed jurisdictions

| Order | Jurisdiction | Status | Note |
| --- | --- | --- | --- |
| 7 | New Zealand | Proposed | The Reserve Bank of New Zealand (RBNZ), the Financial Markets Authority (FMA) and the Conduct of Financial Institutions (CoFI) regime. Most of the Australian packs can be reused, and many firms advise on both sides of the Tasman |
| 8 | Hong Kong | Proposed | Guidance from the Hong Kong Monetary Authority (HKMA) and the Securities and Futures Commission (SFC) on generative AI and AI models, and the Personal Data (Privacy) Ordinance (PDPO). It is an English-language common-law system, like Singapore's |
| 9 | United Arab Emirates | Proposed | The Dubai Financial Services Authority (DFSA) and the Financial Services Regulatory Authority (FSRA) in the 2 financial free zones, and the onshore regulators. It is an English-language common-law system with more international firms than anywhere else outside London |
| 10 | Switzerland | Proposed | Guidance from the Swiss Financial Market Supervisory Authority (FINMA) on AI governance and risk management. The scope is narrow and well defined. English is the working language of its financial sector |
| 11 | South Africa | Proposed | The King IV Report as the basis of the board pack, the Prudential Authority, the Financial Sector Conduct Authority (FSCA) and the Protection of Personal Information Act (POPIA) |
| 12 | India | Proposed | The Reserve Bank of India's (RBI) framework for responsible AI and the expectations of the Securities and Exchange Board of India (SEBI). There are many regulated entities. The Digital Personal Data Protection (DPDP) rules are still being phased in |
| 13 | Japan | Proposed | The Financial Services Agency (FSA), the Ministry of Economy, Trade and Industry's (METI) business guidelines and the AI Promotion Act. Content would need to be in Japanese, which makes it the most expensive jurisdiction on the list. It comes last unless a sponsor appears first |

If work on one of the proposed jurisdictions stops, these are the alternatives:

- Malaysia, which is close to the Singapore work
- South Korea, which has a binding AI law written in Korean.

The European Union overlay covers Ireland and the Nordic countries, so they are not listed separately.

We order proposed jurisdictions by how likely a law firm or board advisory firm is to sponsor the work. We look for:

- an English-language legal market
- an institute of directors that runs board programs
- a prudential regulator that has published something specific about AI
- existing links with firms that already use the suite.

The notes on regulators and instruments above are based on our reading at the date of review. Before we write anything into a pack, we confirm each instrument in the jurisdiction's scoping note. Only a sponsor can move a jurisdiction up the list.

## What is not on this roadmap

- **Real-time incident tools.** We decided not to build alerting or mass notification. Clients keep their own crisis tools. The suite produces the documents that go into them.
- **Agent controls and signed evidence** (the rules tier and evidence layer). These are a separate program. We describe them to clients as planned, not as available.
- **An organisation-wide mode in Confidentiality Exposure Assessment for everyday AI tools.** This needs its own method text first.
- **Commercially licensed products.** These include integrations with governance, risk and compliance (GRC) tools and board portals, such as Diligent, ServiceNow, OneTrust, Archer, OpenPages, Purview and Harmonic. They are not part of the open-source suite, so they are not listed here. See [triodian.com/status](https://triodian.com/status#roadmap) for their plans.

## How we update this page

We update this page by pull request when the development plan changes. Each item names the condition it depends on. You can check the status page and the releases to see whether an item has started. This means we do not need to give dates that would later change.
