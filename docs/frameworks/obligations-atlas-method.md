---
title: "Obligations Atlas method"
audience: [practitioner, contributor]
apps: [obligations-atlas]
lastReviewed: 2026-11-17
sidebar_position: 6
---

The Obligations Atlas has 2 parts:

- a reviewed register of the obligations that apply to an organisation's use of artificial intelligence (AI), by jurisdiction, sector and entity type
- a matter brief, which uses the register to set the scope of an engagement.

Each record is proposed with its sources and approved by a named reviewer. It is published with its tier and its provenance (where it came from). This means a practitioner can rely on it, and a regulator can see its source.

## Records

| Element | What it holds |
| --- | --- |
| Instrument | The law, standard, guidance or report, with its issuer, date and status |
| Tier | **Binding**: laws and binding instruments. **Expected**: supervisory guidance. **Anticipated**: proposals and rules not yet in force. An instrument that is final but not yet in force is anticipated. **Adopted**: standards an organisation chooses to follow |
| Jurisdiction and sector | Australia, Singapore, the United States and international. The regulated sectors and entity types in the Metamodel, including the 5 general types: private company, not-for-profit, critical infrastructure asset owner, defence industry supplier and health service provider |
| What it requires | The obligation in plain words, citing the paragraph or section |
| Provenance | The sources checked, the reviewer, the approval date and the snapshot it was published in |

State and other sub-national laws are recorded under their country, with the state's name in the record's title.

## Proposing, reviewing and publishing

1. **Research brief.** Each piece of research work starts with a brief. It names the sources to cover for a jurisdiction or sector, and the records to create from their official text. Examples are the general company sources, the superannuation trustee instruments and the US overlay.
2. **Proposal.** The update agent submits each record as a proposal, with its sources. If a record is based on an announcement and not on official text, it is submitted as a lead.
3. **Review.** A named reviewer approves, returns or rejects each proposal. Nothing is published without approval. The reviewer's notes are kept with the record.
4. **Publish.** Approved records are added to the published snapshots. The register, the matter brief and the Model Context Protocol (MCP) server use these snapshots. The Atlas shows a jurisdiction as covered only after its records are published.

## The matter brief

A practitioner chooses the client's jurisdiction, regulated sector and entity type. The brief then lists:

- the obligations that apply, by tier
- the questions counsel will need to answer
- the engagements that suit the client, based on its entity type and sector.

Regulated entities are directed to AI Board Direction (connected), AI Risk Appetite and AI Use Assessment. Unregulated entities are directed to AI Board Direction (standalone) and Confidentiality Exposure Assessment.

The brief is a file (`triodian.matterBrief/1`) that you import into each app's set-up. It never leaves the browser. A practitioner can keep one brief for each client in a browser portfolio, and export or import it.

If the Atlas does not cover a jurisdiction, the brief says so. The apps then use the [best-practice baselines](/concepts/baselines-overlays-and-controls) for that jurisdiction.

## Access

The register and the matter brief are free to use in the browser.

The MCP server provides published Australian, Singapore and US records to any client. The free tier needs no key and allows up to 60 requests a minute. The server is listed in the official MCP Registry. Firms that register also get provenance details, tiers and the matter brief.

The record data is licensed under Apache 2.0, like the apps.

## What the Atlas is not

The Atlas is not legal advice. It does not say whether an obligation applies to a particular organisation. Counsel decides that, and the brief says so. The Atlas does not predict what a regulator will do. It only records what the regulator's instruments say.
