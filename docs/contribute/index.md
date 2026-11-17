---
title: Contribute
audience: [contributor]
apps: [suite]
lastReviewed: 2026-11-17
slug: /contribute
sidebar_position: 1
---

Every Triodian repository is public on [GitHub](https://github.com/Triodian) and accepts issues and pull requests. The same rules apply in each one:

- Every change goes to the test branch and its test site first.
- A change reaches main only when continuous integration (CI) passes. CI runs the server rule tests and the Playwright end-to-end test suite.
- Live databases are exported before any migration.
- Wording is kept in content files, so most fixes are content edits.

- [Security reporting](./security-reporting.md)
- [Writing style](./writing-style.md): how to write pages for this site, based on the Australian Government Style Manual
- Architecture of a Triodian app: Worker, D1, the shared identity file, the content build script, the test layout
- Releases and changelog: one page, newest first, with schema versions
- [Roadmap](./roadmap.md): what we plan to build next
- Code of conduct, contributing guide and pull request template: in each repository


> We are still writing the architecture and releases pages. Until they are ready, use the README and CONTRIBUTING files in each repository on [GitHub](https://github.com/Triodian).
