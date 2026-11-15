---
title: "Obligations Atlas method"
audience: [practitioner, contributor]
apps: [obligations-atlas]
lastReviewed: 2026-11-15
sidebar_position: 6
---

The Obligations Atlas is a reviewed register of the obligations that bear on an organisation's use of AI, by jurisdiction, sector and entity type, and a matter brief that turns the register into the scope of an engagement. Every record is proposed with its sources, approved by a named reviewer, and published with its tier and provenance, so that a practitioner can rely on it and a regulator can see where it came from.

## Records

| Element | What it holds |
| --- | --- |
| Instrument | The law, standard, guidance or report, with its issuer, date and status |
| Tier | **Binding** (law and binding instruments); **expected** (supervisory guidance); **anticipated** (proposals and pending rules; an instrument not yet in force stays here even when final); **adopted** (standards an organisation chooses) |
| Jurisdiction and sector | Australia, Singapore, the United States and international; the regulated sectors and entity types of the Metamodel, including the five general types (private company, not-for-profit, critical infrastructure asset owner, defence industry supplier, health service provider) |
| What it reaches | The obligation in plain words, with the paragraph or section cited |
| Provenance | Sources checked, the reviewer, the approval date, the snapshot it was published in |

State and sub-national laws are recorded under their country with the state in the record's title.

## Proposing, reviewing and publishing

1. **Research brief.** A round of work names the sources to cover for a jurisdiction or sector (for example the general-company sources, the superannuation trustee instruments, the US overlay) and the records drawn from their official text.
2. **Proposal.** The update agent submits each record as a proposal with its sources; records that rest on an announcement rather than official text are submitted as leads.
3. **Review.** A named reviewer approves, returns or rejects each proposal; nothing is published without approval, and the reviewer's notes stay with the record.
4. **Publish.** Approved records are brought into the published snapshots that the register, the matter brief and the MCP server serve. The Atlas shows a jurisdiction as covered only once its records are published.

## The matter brief

A practitioner chooses the client's jurisdiction, regulated sector and entity type. The brief lists the obligations in scope by tier, the questions counsel will need to answer, and the engagements that fit, routed by entity type and sector: regulated types to AI Board Direction (connected), AI Risk Appetite and AI Use Assessment; unregulated types to AI Board Direction (standalone) and the Confidentiality Exposure Assessment. The brief is a file (`triodian.matterBrief/1`) that imports into each app's set-up, and it never leaves the browser: a practitioner can hold one per client in a browser portfolio and export or import it.

A jurisdiction the Atlas does not cover is said so in the brief, and the apps run on the [best-practice baselines](/concepts/baselines-overlays-and-controls) for it.

## Access

The register and the matter brief are free to use in the browser. The MCP server serves published Australian, Singapore and US records to any client on a keyless, rate-limited tier (60 requests a minute), and is listed in the official MCP Registry; registration as a firm adds provenance detail, tiering and the matter brief. The record data, like the apps, is Apache 2.0.

## What the Atlas is not

It is not legal advice and states no conclusion on whether an obligation applies to a particular organisation; that is counsel's determination, and the brief says so. It does not record what a regulator will do, only what its instruments say.
