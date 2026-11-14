#!/usr/bin/env node
// Pulls each app repo's docs/ folder into docs/reference/apps/<slug>/ before the site builds.
//
// The apps keep their own documentation beside their code, so a pull request that changes a
// step or a role changes its docs in the same pull request. This script is what joins those
// folders into one site. It runs as `npm run pull` and automatically before `npm run build`.
//
// Each app is cloned shallowly into .cache/apps/<slug>/ (ignored by git), its docs/ folder is
// copied over, and a category file is written so the app appears in the Reference sidebar.
// Files the site does not render (anything not .md, .mdx or an image) are left out.
//
// Environment:
//   APP_DOCS_SKIP=1        skip the pull entirely (use what is already under docs/reference/apps/)
//   APP_DOCS_OFFLINE=1     reuse existing clones in .cache without fetching
//   APP_DOCS_ONLY=slug,..  pull only the named apps

import {execFileSync} from 'node:child_process';
import {cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync} from 'node:fs';
import {join, extname, dirname, relative, posix} from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const CACHE = join(ROOT, '.cache', 'apps');
const TARGET = join(ROOT, 'docs', 'reference', 'apps');
const KEEP = new Set(['.md', '.mdx', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']);

const {apps} = JSON.parse(readFileSync(join(ROOT, 'apps.json'), 'utf8'));
const only = process.env.APP_DOCS_ONLY ? new Set(process.env.APP_DOCS_ONLY.split(',')) : null;

if (process.env.APP_DOCS_SKIP) {
  console.log('pull-app-docs: skipped (APP_DOCS_SKIP set)');
  process.exit(0);
}

mkdirSync(CACHE, {recursive: true});
mkdirSync(TARGET, {recursive: true});

let pulled = 0;
let failed = 0;

for (const [index, app] of apps.entries()) {
  if (only && !only.has(app.slug)) continue;
  const clone = join(CACHE, app.slug);
  const url = `https://github.com/Triodian/${app.repo}.git`;
  try {
    if (process.env.APP_DOCS_OFFLINE && existsSync(clone)) {
      // reuse
    } else if (existsSync(join(clone, '.git'))) {
      git(['-C', clone, 'fetch', '--depth', '1', 'origin', app.branch]);
      git(['-C', clone, 'checkout', '--force', `origin/${app.branch}`]);
    } else {
      rmSync(clone, {recursive: true, force: true});
      git(['clone', '--depth', '1', '--branch', app.branch, '--filter=blob:none', '--sparse', url, clone]);
      git(['-C', clone, 'sparse-checkout', 'set', app.docsDir]);
    }
  } catch (err) {
    failed++;
    console.error(`pull-app-docs: ${app.repo}: clone failed (${err.message.split('\n')[0]})`);
    continue;
  }

  const src = join(clone, app.docsDir);
  const dest = join(TARGET, app.slug);
  rmSync(dest, {recursive: true, force: true});
  mkdirSync(dest, {recursive: true});

  const commit = git(['-C', clone, 'rev-parse', '--short', 'HEAD']).trim();
  const count = existsSync(src) ? copyTree(src, dest, {app, src}) : 0;

  writeFileSync(
    join(dest, '_category_.json'),
    JSON.stringify(
      {
        label: app.name,
        position: index + 1,
        link: {type: 'generated-index', description: `Documentation held in the ${app.repo} repository (docs/, at ${commit}).`},
      },
      null,
      2,
    ) + '\n',
  );
  if (count === 0) {
    writeFileSync(
      join(dest, 'index.md'),
      `---\ntitle: ${app.name}\naudience: [operator]\napps: [${app.slug}]\n---\n\nThe ${app.repo} repository has no docs/ folder yet. Its README is at https://github.com/Triodian/${app.repo}.\n`,
    );
  }
  pulled++;
  console.log(`pull-app-docs: ${app.repo}@${commit}: ${count} file(s) -> docs/reference/apps/${app.slug}/`);
}

console.log(`pull-app-docs: ${pulled} pulled, ${failed} failed`);
// A failed pull is an error in CI (the site would silently lose a section) but not locally.
if (failed && process.env.CI) process.exit(1);

function git(args) {
  return execFileSync('git', args, {encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe']});
}

function copyTree(from, to, ctx) {
  let n = 0;
  for (const entry of readdirSync(from)) {
    const s = join(from, entry);
    const d = join(to, entry);
    if (statSync(s).isDirectory()) {
      mkdirSync(d, {recursive: true});
      n += copyTree(s, d, ctx);
    } else if (/\.mdx?$/i.test(entry)) {
      writeFileSync(d, rewriteLinks(readFileSync(s, 'utf8'), s, ctx));
      n++;
    } else if (KEEP.has(extname(entry).toLowerCase())) {
      cpSync(s, d);
      n++;
    }
  }
  return n;
}

// A doc in an app repo may link to a file outside its docs/ folder (a schema, a script, the
// README). Those files are not on the site, so such links are pointed at the file on GitHub.
// Links to pages and images inside docs/ are kept relative and resolve on the site; a link to
// any other file inside docs/ (a JSON file, a script) goes to GitHub too, as it is not copied.
function rewriteLinks(text, file, {app, src}) {
  const docsRoot = src;
  const repoRoot = dirname(src);
  return text.replace(/(\]\()([^)\s]+)(\))/g, (whole, open, target, close) => {
    if (/^(https?:|mailto:|#|\/)/i.test(target)) return whole;
    const [path, hash = ''] = target.split('#');
    const abs = join(dirname(file), decodeURIComponent(path));
    const ext = extname(abs).toLowerCase();
    const onSite = ext === '' || /\.mdx?$/.test(ext) || KEEP.has(ext);
    if (onSite && (abs.startsWith(docsRoot + '/') || abs === docsRoot)) return whole;
    const inRepo = relative(repoRoot, abs);
    if (inRepo.startsWith('..')) return whole;
    const url = `https://github.com/Triodian/${app.repo}/blob/${app.branch}/${inRepo.split('/').map(encodeURIComponent).join('/')}${hash ? '#' + hash : ''}`;
    return `${open}${url}${close}`;
  });
}
