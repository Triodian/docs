---
title: Contributor
audience: [contributor]
apps: [suite]
lastReviewed: 2026-11-14
sidebar_position: 5
---

Every repository is public under [github.com/Triodian](https://github.com/Triodian), Apache 2.0, and takes issues and pull requests. The apps share one shape, so what you learn in one carries to the others, and most changes people want to make are to wording or rules, which live in content files rather than code.

## How an app is put together

| Part | Where | What it holds |
| --- | --- | --- |
| Content | `content.json` (or the app's equivalent), built by a script from the framework text | Every step's prompts, starting positions, scales, glossary, output wording; no step text in code |
| Sector packs and baselines | Pack files merged at build; baseline profiles and controls in Triodian_Metamodel | Entity and customer nouns, functions, inputs, role labels; the four baseline controls BC1 to BC4 |
| Rules | One shared file read by browser and server (`public/shared/rules.js` or `lib/core/roles.js`) | Who may do what at each step; the server checks every save against it |
| Identity | `lib/identity/people.js`, kept identical across the apps by a sync script | Sign-in, sessions, users, roles per app, the Admin users screen |
| Exchange files | Versioned JSON Schemas in Triodian_Metamodel, `exchange/` | Calibration set, board directions, register extract v2, findings, matter brief, confidentiality position, board view |
| Tests | `tests/*.test.mjs` (rules, versions, notifications, imports) and a Playwright end-to-end suite; the suite test runs all the apps together locally | CI runs them on every pull request; no secrets in any repository |

## The rules of the road

1. **Test branch first.** Every change goes to the test branch and its test site, and reaches `main` only when CI is green.
2. **Wording is content.** A change to what a step says is a content change, made in the content file and rebuilt; the regression test checks that the insurer pack's outputs still match word for word.
3. **Rules are shared.** A change to who may do what is made once, in the shared rules file, with a case added to `tests/rules.test.mjs` that fails on the old behaviour.
4. **Schemas are versioned.** A change to an exchange file is a new schema version in Triodian_Metamodel first, then the apps that write and read it; each app's tests validate its files against the published schemas.
5. **Cite the instrument.** Any statement about what a law or regulator requires cites the source text, and the apps' outputs say what was recorded and who decided it, never whether a duty is met. The same rule applies to documentation.
6. **Atlas records are reviewed, not merged.** Obligations are proposed through the update agent with sources, and a named reviewer approves them; nothing is published without approval. Start with the [shared vocabulary](/reference/apps/metamodel/shared-vocabulary) and [adding a jurisdiction](/reference/apps/metamodel/adding-a-jurisdiction).

## Read in this order

1. The repository's README, CONTRIBUTING and the pull request template.
2. [Architecture and the path to an enterprise deployment](/reference/apps/risk-appetite/architecture): the layers and the access-control model, which are the same in every app.
3. [Best-practice baselines](/reference/apps/metamodel/baselines), [adding a jurisdiction](/reference/apps/metamodel/adding-a-jurisdiction) and the [shared vocabulary](/reference/apps/metamodel/shared-vocabulary), for content and Atlas work.
4. [Contribute](/contribute): the architecture page, releases and changelog, and the roadmap, as they are written.
5. [Security reporting](/contribute/security-reporting): security problems go through private reporting, never a public issue.

## Contributing to this site

This site is a repository like the others, [Triodian/docs](https://github.com/Triodian/docs). The pages under Reference → Apps are pulled from each app's `docs/` folder at build, so a fix to one of those is a pull request on the app, and "Edit this page" takes you there. Everything else is edited here; every page carries front matter for audience, apps and last-reviewed date, and `npm run check` tells you if one is missing. A page whose content depends on the reader's jurisdiction lists it (`jurisdictions: [au]`), which shows the banner, and an `.mdx` page can wrap a passage in `<Jurisdiction au>…</Jurisdiction>` so it shows only for that choice; the list of jurisdictions and which are available is `jurisdictions.json`.
