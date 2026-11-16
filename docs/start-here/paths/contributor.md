---
title: Contributor
audience: [contributor]
apps: [suite]
lastReviewed: 2026-11-17
sidebar_position: 5
---

Every repository is public at [github.com/Triodian](https://github.com/Triodian) under Apache 2.0. Every repository accepts issues and pull requests.

All the apps are built the same way, so once you understand one, you understand the others. Most changes people want to make are to wording or rules. These are kept in content files, not in code.

## How an app is built

| Part | Where | What it holds |
| --- | --- | --- |
| Content | `content.json` (or the app's equivalent). A script builds it from the framework text | Every step's prompts, starting positions, scales, glossary and output wording. No step text is in the code |
| Sector packs and baselines | Pack files merged at build. Baseline profiles and controls are in Triodian_Metamodel | Names for entities and customers, functions, inputs and role labels. The 4 baseline controls BC1 to BC4 |
| Rules | One shared file that both the browser and the server read (`public/shared/rules.js` or `lib/core/roles.js`) | Who may do what at each step. The server checks every save against it |
| Identity | `lib/identity/people.js`. A sync script keeps it identical across the apps | Sign-in, sessions, users, roles in each app and the Admin users screen |
| Exchange files | Versioned JSON Schemas in Triodian_Metamodel, `exchange/` | Calibration set, board directions, register extract v2, findings, matter brief, confidentiality position and board view |
| Tests | `tests/*.test.mjs` (rules, versions, notifications, imports) and a Playwright end-to-end test suite. The suite test runs all the apps together on your computer | Continuous integration (CI) runs them on every pull request. No repository holds secrets |

## How we work

1. **Use the test branch first.** Every change goes to the test branch and its test site. It reaches `main` only when CI passes.
2. **Wording is content.** To change what a step says, edit the content file and rebuild. The regression test checks that the insurer pack's outputs still match word for word.
3. **Rules are shared.** To change who may do what, edit the shared rules file once. Add a case to `tests/rules.test.mjs` that fails on the old behaviour.
4. **Schemas have versions.** To change an exchange file, first publish a new schema version in Triodian_Metamodel. Then update the apps that write and read it. Each app's tests check its files against the published schemas.
5. **Cite the source.** Any statement about what a law or regulator requires must cite the source text. The apps' outputs say what was recorded and who decided it. They never say whether a duty has been met. The same rule applies to this documentation.
6. **Atlas records need a reviewer.** Propose obligations through the update agent, with sources. A named reviewer must approve them. Nothing is published without approval. Start with the [shared vocabulary](/reference/apps/metamodel/shared-vocabulary) and [adding a jurisdiction](/reference/apps/metamodel/adding-a-jurisdiction).

## Read in this order

1. The repository's README, CONTRIBUTING file and pull request template.
2. [Architecture and the path to an enterprise deployment](/reference/apps/risk-appetite/architecture): the layers and the access-control model. These are the same in every app.
3. For content and Atlas work: [Best-practice baselines](/reference/apps/metamodel/baselines), the guide [Add a jurisdiction](/guides/extending-the-suite/add-a-jurisdiction) and the [shared vocabulary](/reference/apps/metamodel/shared-vocabulary).
4. [Contribute](/contribute): the [roadmap](/roadmap), and the architecture page and release notes as we write them.
5. [Security reporting](/contribute/security-reporting): report security problems privately. Never raise them as a public issue.

## Contributing to this site

This site has its own repository, [Triodian/docs](https://github.com/Triodian/docs).

The pages under Reference → Apps come from each app's `docs/` folder when the site is built. To fix one of those pages, open a pull request on the app's repository. The "Edit this page" link takes you there.

You edit all other pages in this repository. Every page has front matter for audience, apps and last-reviewed date. Run `npm run check` to find pages with missing front matter.

If a page's content depends on the reader's jurisdiction, list the jurisdiction in the front matter (`jurisdictions: [au]`). This shows a banner on the page. In an `.mdx` page, you can wrap a passage in `<Jurisdiction au>…</Jurisdiction>` so it only shows for that jurisdiction. The list of jurisdictions, and which are available, is in `jurisdictions.json`.
