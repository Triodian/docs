---
title: Contribute
audience: [contributor]
apps: [suite]
lastReviewed: 2026-11-14
slug: /contribute
sidebar_position: 1
---

Every Triodian repository is public on [GitHub](https://github.com/Triodian) and takes issues and pull requests. The rules are the same in each: every change goes to the test branch and its test site first, and reaches main only when CI is green (the server rule tests and the Playwright end-to-end suite); live databases are exported before any migration; wording lives in content files, so most fixes are content edits.

- [Security reporting](./security-reporting.md)
- Architecture of a Triodian app: Worker, D1, the shared identity file, the content build script, the test layout
- Releases and changelog: one page, newest first, with schema versions
- Roadmap: what is being built next, in public terms
- Code of conduct, contributing guide and pull request template: in each repository


:::note Coming
This page is written in task D.6 of the Documentation track. Until then, the repositories' READMEs on [GitHub](https://github.com/Triodian) are the reference.
:::
