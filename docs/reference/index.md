---
title: Reference
audience: [practitioner, operator, contributor]
apps: [suite]
lastReviewed: 2026-11-17
slug: /reference
sidebar_position: 1
---

Use this section to look up facts. You do not need to read it from start to finish.

Most of this section is kept in the app repositories and copied here when the site is built. This means a change to an app updates its reference page in the same pull request. On those pages, "Edit this page" opens the app's repository.

- **Apps**: each app's own docs/ folder: user guide, link set-up notes, runbook, schema notes
- **Exchange formats**: the 7 versioned JSON Schemas (calibration set, board directions, register extract v2, findings, matter brief, confidentiality position, board view) with examples, from Triodian_Metamodel
- **Atlas application programming interface (API) and Model Context Protocol (MCP) server**: endpoints, parameters, the keyless tier and its rate limit, registration for firms
- **Installer and scripts**: install.mjs, the provisioning script, close-client, the suite and chain tests

We are adding a generated page for each app. Each page is built from the app's content and roles files. It will list the app's steps or decisions, checks, roles, outputs, set-up fields, environment variables and status endpoint.
