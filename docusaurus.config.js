// @ts-check
// Site configuration for docs.triodian.com.
// See https://docusaurus.io/docs/api/docusaurus-config

import {readFileSync} from 'node:fs';
import {themes as prismThemes} from 'prism-react-renderer';

// Which app repos contribute docs, and where (see scripts/pull-app-docs.mjs).
const APP_REPOS = JSON.parse(readFileSync(new URL('./apps.json', import.meta.url), 'utf8'));

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Triodian AI Governance App Suite',
  tagline: 'Open-source apps for board direction, risk appetite, use assessment and confidentiality',
  favicon: 'img/favicon.ico',
  headTags: [
    {tagName: 'link', attributes: {rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png'}},
  ],

  future: {
    v4: true,
  },

  url: 'https://docs.triodian.com',
  baseUrl: '/',

  organizationName: 'Triodian',
  projectName: 'docs',

  // Every internal link must resolve: a broken link fails the build, not the reader.
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {
    // .md files are CommonMark, .mdx files are MDX: the app repos' docs are plain Markdown and
    // must not be parsed as JSX.
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // The site is the docs: no landing page separate from the Start here section.
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // "Edit this page" goes to the file in this repo, or, for pages pulled in from an
          // app repo, to that repo (see editUrl below).
          editUrl: ({docPath}) => editUrlFor(docPath),
          // Pages pulled from app repos have no git history here, so dates come from lastReviewed
          // front matter, not git.
          showLastUpdateTime: false,
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      // Search is built at build time and served as static files: no hosted search service.
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        docsRouteBasePath: '/',
        indexBlog: false,
        indexPages: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        // The wordmark carries the name; the full name is the site title and the home page heading.
        title: '',
        logo: {
          alt: 'Triodian',
          src: 'img/logo.png',
          srcDark: 'img/logo-dark.png',
          width: 133,
          height: 40,
        },
        items: [
          {type: 'docSidebar', sidebarId: 'startHere', position: 'left', label: 'Start here'},
          {type: 'docSidebar', sidebarId: 'guides', position: 'left', label: 'Guides'},
          {type: 'docSidebar', sidebarId: 'concepts', position: 'left', label: 'Concepts'},
          {type: 'docSidebar', sidebarId: 'reference', position: 'left', label: 'Reference'},
          {type: 'docSidebar', sidebarId: 'frameworks', position: 'left', label: 'Frameworks'},
          {type: 'docSidebar', sidebarId: 'contribute', position: 'left', label: 'Contribute'},
          {href: 'https://triodian.com', label: 'triodian.com', position: 'right'},
          {href: 'https://github.com/Triodian', label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Apps',
            items: [
              {label: 'Obligations Atlas', href: 'https://github.com/Triodian/obligations-atlas'},
              {label: 'AI Board Direction', href: 'https://github.com/Triodian/board-direction'},
              {label: 'AI Risk Appetite', href: 'https://github.com/Triodian/risk_appetite'},
              {label: 'AI Use Assessment', href: 'https://github.com/Triodian/use-assessment'},
              {
                label: 'Confidentiality Exposure Assessment',
                href: 'https://github.com/Triodian/Confidentiality-Exposure-Assessment',
              },
            ],
          },
          {
            title: 'Project',
            items: [
              {label: 'Licensing and support', href: 'https://triodian.com/licensing#app-suite'},
              {label: 'Support the project', href: 'https://github.com/sponsors/Triodian'},
              {label: 'Security reporting', to: '/contribute/security-reporting'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'triodian.com', href: 'https://triodian.com'},
              {label: 'GitHub', href: 'https://github.com/Triodian'},
            ],
          },
        ],
        copyright: `Code, framework text and Atlas records are Apache 2.0. Triodian and the Triodian logo are trademarks. Triodian's reading of a law or regulator's expectation is marked as such until counsel confirms it.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json'],
      },
    }),
};

// Pages pulled in from an app repo by scripts/pull-app-docs.mjs live under docs/reference/apps/<app>/.
// Their "Edit this page" link must point at the app repo, not at this one, so that the fix lands
// in the pull request that changes the code.
function editUrlFor(docPath) {
  const m = docPath.match(/^reference\/apps\/([^/]+)\/(.*)$/);
  if (m) {
    const app = APP_REPOS.apps.find((a) => a.slug === m[1]);
    if (app) {
      return `https://github.com/Triodian/${app.repo}/edit/${app.branch}/${app.docsDir}/${m[2]}`;
    }
  }
  return `https://github.com/Triodian/docs/edit/main/docs/${docPath}`;
}

export default config;
