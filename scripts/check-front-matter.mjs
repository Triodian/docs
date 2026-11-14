#!/usr/bin/env node
// Checks that every page this repo owns carries the front matter the site relies on:
//   title         shown in the sidebar and the tab
//   audience      who the page is for: practitioner | board | operator | contributor (one or more)
//   apps          which apps it covers: slugs from apps.json, or "suite"
//   lastReviewed  YYYY-MM-DD; pages older than 180 days are listed as due for review
// Pages pulled in from app repos (docs/reference/apps/) are not checked: their repos own them.

import {readdirSync, readFileSync, statSync} from 'node:fs';
import {join, relative} from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const DOCS = join(ROOT, 'docs');
const PULLED = join(DOCS, 'reference', 'apps');
const AUDIENCES = new Set(['practitioner', 'board', 'operator', 'contributor']);
const APPS = new Set(['suite', ...JSON.parse(readFileSync(join(ROOT, 'apps.json'), 'utf8')).apps.map((a) => a.slug)]);
const REVIEW_DAYS = 180;

const errors = [];
const due = [];

for (const file of walk(DOCS)) {
  if (file.startsWith(PULLED)) continue;
  if (!/\.mdx?$/.test(file)) continue;
  const rel = relative(ROOT, file);
  const fm = frontMatter(readFileSync(file, 'utf8'));
  if (!fm) {
    errors.push(`${rel}: no front matter`);
    continue;
  }
  if (!fm.title) errors.push(`${rel}: title missing`);
  const audience = list(fm.audience);
  if (!audience.length) errors.push(`${rel}: audience missing`);
  for (const a of audience) if (!AUDIENCES.has(a)) errors.push(`${rel}: unknown audience "${a}"`);
  const apps = list(fm.apps);
  if (!apps.length) errors.push(`${rel}: apps missing`);
  for (const a of apps) if (!APPS.has(a)) errors.push(`${rel}: unknown app "${a}"`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fm.lastReviewed || '')) {
    errors.push(`${rel}: lastReviewed missing or not YYYY-MM-DD`);
  } else {
    const age = (Date.now() - Date.parse(fm.lastReviewed)) / 86400000;
    if (age > REVIEW_DAYS) due.push(`${rel}: last reviewed ${fm.lastReviewed} (${Math.round(age)} days)`);
  }
}

if (due.length) {
  console.log(`Due for review (older than ${REVIEW_DAYS} days):`);
  for (const d of due) console.log(`  ${d}`);
}
if (errors.length) {
  console.error('Front matter errors:');
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
console.log(`check-front-matter: ok (${due.length} due for review)`);

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

// A small YAML subset: scalar lines and inline [a, b] lists. That is all the templates use.
function frontMatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const out = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (kv) out[kv[1]] = kv[2].trim();
  }
  return out;
}

function list(v) {
  if (!v) return [];
  return v
    .replace(/^\[|\]$/g, '')
    .split(',')
    .map((s) => s.trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean);
}
