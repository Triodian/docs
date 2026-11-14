# Triodian AI Governance App Suite: documentation

The source of [docs.triodian.com](https://docs.triodian.com), the documentation site for the Triodian AI Governance App Suite: Obligations Atlas, AI Board Direction, AI Risk Appetite, AI Use Assessment and Confidentiality Exposure Assessment.

The site has six sections: Start here, Guides, Concepts, Reference, Frameworks and Contribute. Guides say how to do one job; Concepts say what a thing is and why the suite has it; Reference is facts to look up. That split (Diátaxis) is deliberate: a page that mixes them is split.

## Where the content lives

- **This repository** holds the pages that belong to the suite as a whole: `docs/start-here`, `docs/guides`, `docs/concepts`, `docs/frameworks`, `docs/contribute`, and the hand-written parts of `docs/reference`.
- **Each app repository** keeps its own `docs/` folder (user guide, link set-up notes, runbook, schema notes). `scripts/pull-app-docs.mjs` clones each repository listed in `apps.json` and copies its `docs/` into `docs/reference/apps/<app>/` before every build, so a pull request that changes an app changes its docs in the same pull request. "Edit this page" on those pages opens the app's repository. The pulled folders are not committed here.

To add an app, add it to `apps.json`.

## Jurisdictions

The reader picks a jurisdiction from the top bar; the choice is kept in the browser and can be preset with `?jurisdiction=au`. `jurisdictions.json` lists the jurisdictions and whether each is `available` or `planned` (shown greyed as coming). A page whose content depends on the jurisdiction lists it in front matter (`jurisdictions: [au]`), which shows a banner saying which jurisdiction's content is on the page; an `.mdx` page can wrap a passage in `<Jurisdiction au>…</Jurisdiction>` to show it only for that choice. Only Australian content exists today.

## Working on the site

```bash
npm ci
npm run pull      # clone the app repos' docs/ folders into docs/reference/apps/ (also runs before build)
npm start         # local server with live reload
npm run check     # front matter on every page this repo owns
npm run build     # production build into build/
```

`APP_DOCS_OFFLINE=1 npm start` reuses clones already in `.cache/` without fetching; `APP_DOCS_SKIP=1` skips the pull.

Every page this repository owns carries front matter: `title`, `audience` (practitioner, board, operator, contributor), `apps` (slugs from `apps.json`, or `suite`) and `lastReviewed` (YYYY-MM-DD). `npm run check` fails the build without them and lists pages not reviewed in 180 days. Page templates are in `templates/`.

Writing rules, in short: every page opens with who it is for and what they will have at the end; a guide is numbered steps with what the reader sees and what to do if it fails; a concept page never carries steps; a statement about what a law or regulator requires is marked as Triodian's reading unless counsel has confirmed it, and cites the source.

## Deployment

GitHub Actions (`.github/workflows/build-and-deploy.yml`) builds every pull request and push to `main`, and deploys to Cloudflare Pages: pull requests to a preview URL commented on the pull request, `main` to docs.triodian.com. A weekly rebuild picks up changes in the app repositories.

Two repository secrets are needed once: `CLOUDFLARE_API_TOKEN` (Cloudflare Pages: Edit on the Triodian account) and `CLOUDFLARE_ACCOUNT_ID`. The Pages project is `triodian-docs`, with `docs.triodian.com` as its custom domain. Without the secrets the workflow builds and skips the deploy.

## Licence

Apache 2.0, the same as the apps. The Triodian name and logo are trademarks and are outside the licence. See [triodian.com/licensing](https://triodian.com/licensing#app-suite).

Security problems: use GitHub's private vulnerability reporting on this repository, not a public issue.
