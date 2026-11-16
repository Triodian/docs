---
title: Operator
audience: [operator]
apps: [suite]
lastReviewed: 2026-11-17
sidebar_position: 4
---

This path is for people who install and run the apps. You might do this:

- on your own Cloudflare account, for your own organisation
- on your own Cloudflare account, for a practitioner's firm
- on the Triodian account, as a Triodian administrator.

Each app is a single Cloudflare Worker with its own D1 database. Cloudflare Access handles sign-in. The apps in a deployment share one identity database and call each other through service bindings. This means there is no public application programming interface (API) between the apps, and no secret to create or rotate for the links between them.

## What a deployment is made of

| Part | What it is | Notes |
| --- | --- | --- |
| One Worker per app | AI Board Direction, AI Risk Appetite, AI Use Assessment, Confidentiality Exposure Assessment and, if you want it, the Obligations Atlas | Plain JavaScript. The browser and the server read rules and content from the same files |
| One D1 database per app | The engagement data | Export it before any migration |
| One shared identity database | People, roles in each app, sessions | Signing in to one app signs you in to the others |
| Cloudflare Access | Email one-time PIN. This is the only way to sign in | The client profile has no demo sign-in and no demo administrators |
| Service bindings | Board link, calibration link, in-use feed, status | No service tokens, so nothing to rotate |
| Client profile | Settings for each client: demo features off, notifications off until set up, branding for each app | The installer writes it |

The architecture note in the AI Risk Appetite repository, [architecture and the path to an enterprise deployment](/reference/apps/risk-appetite/architecture), describes the layers and the access-control model. It also explains what it would take to move to AWS or Azure.

## What you will do

1. **Install.** Run `install.mjs` from the triodian-install repository. It asks which apps you want, general or regulated mode, the jurisdiction and sector, and the domain. It then:
   - creates the databases and applies the schemas
   - writes the client profile with its bindings
   - deploys the apps
   - sets up the Access application for the email sign-in page
   - creates the first administrator.

   It needs a Cloudflare API token that can create D1 databases, deploy Workers and set up Access applications. You do not need to enter anything else. Use `--dry-run` to see what it would do without making changes.
2. **Set up clients (practitioner firms).** The provisioning script takes a client code, the apps the client needs and the administrator's email. It creates a client deployment under your domain. Running it again with the same details changes nothing. The practice hub lists each client with its stage and open actions. It reads these through a binding and shows no names, findings or positions.
3. **Run the apps.** Use each app's Admin screen to manage people and roles. Do the set-up inside each app. Back up by exporting the D1 databases. The runbook says when to take backups. The apps send email notifications once you set an address.
4. **Rotate keys and close clients.** The runbook explains how to rotate the Access session key and API tokens. It also explains how to close a client: archive the tables and rows, then delete the Workers, databases, Access applications and custom domains.
5. **Connect the organisation's identity provider.** See [Sign-in and SSO](/guides/deploying/sign-in-and-sso). You can connect Entra ID, Google Workspace or Okta through Cloudflare Access. If Access does not cover the host, you can connect OpenID Connect directly. Either way, roles are still managed in the app.
6. **Answer a security review.** Clients regulated under Prudential Standards CPS 230 and CPS 234 may review Triodian as a supplier. The [security answers](/reference/apps/install/security-answers) page covers what data the apps hold (engagement records only, no member or customer data), where it is stored, keys and secrets, access, sub-processors and who to contact about an incident. See also the [ISO/IEC 27001 Annex A statement](/reference/apps/install/iso27001-annex-a) and [Triodian's ISO/IEC 42001 position](/reference/apps/install/iso42001-position).

## Read in this order

1. [Guides: deploying](/guides/deploying): install, set up clients, the practice hub, rotating keys and closing clients.
2. [Architecture and the path to an enterprise deployment](/reference/apps/risk-appetite/architecture).
3. [Security answers](/reference/apps/install/security-answers) and the [privacy notice](/reference/apps/install/privacy).
4. The link notes: [the board link](/reference/apps/risk-appetite/board-link), [the calibration link](/reference/apps/use-assessment/calibration-link) and [the in-use feed](/reference/apps/risk-appetite/appetite-feedback-link).
5. [Security reporting](/contribute/security-reporting), for when something goes wrong.

## Before you start

You need:

- a Cloudflare account with Workers, D1 and Zero Trust (Access) turned on
- a Cloudflare zone for the domain you will host the apps on
- Node 20 or later and git on the computer that runs the installer
- an API token with the permissions listed in the installer's README. Create it for the install and delete it afterwards. The apps do not hold an API token.
