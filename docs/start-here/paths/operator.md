---
title: Operator
audience: [operator]
apps: [suite]
lastReviewed: 2026-11-14
sidebar_position: 4
---

You install and run the apps: on your own Cloudflare account, for your own organisation or as a practitioner's firm, or on the Triodian account as a Triodian administrator. Each app is one Cloudflare Worker with its own D1 database, behind Cloudflare Access for sign-in; the apps of one deployment share an identity database and call each other over service bindings, so there is no public API between them and no secret to create or rotate for the links.

## What a deployment is

| Part | What it is | Notes |
| --- | --- | --- |
| One Worker per app | AI Board Direction, AI Risk Appetite, AI Use Assessment, Confidentiality Exposure Assessment, and optionally the Obligations Atlas | Plain JavaScript; rules and content read by browser and server from the same files |
| One D1 database per app | The engagement data | Exported before any migration |
| One shared identity database | People, roles per app, sessions | Signing in to one app opens the others |
| Cloudflare Access | Email one-time PIN; the only sign-in | The client profile has no demo sign-in and no demo administrators |
| Service bindings | Board link, calibration link, in-use feed, status | No service tokens; nothing to rotate |
| Client profile | Environment block per client: demo features off, notifications off until set, branding per app | Written by the installer |

The architecture note in the AI Risk Appetite repository, [architecture and the path to an enterprise deployment](/reference/apps/risk-appetite/architecture), describes the layers, the access-control model and what moving to AWS or Azure would take.

## What you will do

1. **Install.** `install.mjs` in the triodian-install repository asks which apps, general or regulated mode, the jurisdiction and sector, and the domain; it creates the databases, applies the schemas, writes the client profile with its bindings, deploys, sets up the Access application for the email sign-in page and creates the first administrator. It needs a Cloudflare API token that can create D1 databases, deploy Workers and set up Access applications; nothing else is typed. `--dry-run` shows what it would do.
2. **Provision clients (practitioner firms).** The provisioning script takes a client code, the apps wanted and the administrator's email, and stands up a client deployment under your domain; a second run changes nothing. The practice hub lists each client with its stage and open actions, read over a binding, with no names, findings or positions.
3. **Run it.** Each app's Admin screen manages people and roles; set-up is done in the app. Backups are D1 exports; the runbook says when to take them. Notifications go out by email once an address is set.
4. **Rotate and close.** The runbook covers rotating the Access session key and API tokens, and closing a client: archive the tables and rows, then destroy the Workers, databases, Access applications and custom domains.
5. **Answer a security review.** The [security answers](/reference/apps/install/security-answers) page sets out, for a client's CPS 230 and CPS 234 review of Triodian, what data is held (engagement records; no member or customer data), where it is stored, keys and secrets, access, sub-processors and the incident contact, with the [ISO/IEC 27001 Annex A statement](/reference/apps/install/iso27001-annex-a) and [Triodian's ISO/IEC 42001 position](/reference/apps/install/iso42001-position) beside it.

## Read in this order

1. [Guides: deploying](/guides/deploying): install, provision, the hub, rotate, close.
2. [Architecture and the path to an enterprise deployment](/reference/apps/risk-appetite/architecture).
3. [Security answers](/reference/apps/install/security-answers) and the [privacy notice](/reference/apps/install/privacy).
4. The link notes: [the board link](/reference/apps/risk-appetite/board-link), [the calibration link](/reference/apps/use-assessment/calibration-link), [the in-use feed](/reference/apps/risk-appetite/appetite-feedback-link).
5. [Security reporting](/contribute/security-reporting), for when something is wrong.

## Before you start

- A Cloudflare account with Workers, D1 and Zero Trust (Access) enabled, and a zone for the domain the apps will live under.
- Node 20 or later and git on the machine that runs the installer.
- An API token scoped as the installer's README says. Create it for the install and delete it after; the apps themselves hold no API token.
