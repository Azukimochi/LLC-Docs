const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Light Limit Changer for MA',
  tagline: 'MA前提 アバター明るさ変更ツール',
  url: 'https://azukimochi.github.io',
  baseUrl: '/LLC-Docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Azukimochi', // Usually your GitHub org/user name.
  projectName: 'LLC-Docs', // Usually your repo name.

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },
  

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
        toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)
        redirects: [

          // /docs/description -> /docs/v1/description

          {
            to: '/docs/v1/description/disc_additional',
            from: ['/docs/description/disc_additional']
          },
          {
            to: '/docs/v1/description/disc_general',
            from: ['/docs/description/disc_general']
          },
          {
            to: '/docs/v1/description/disc_optional',
            from: ['/docs/description/disc_optional']
          },
          {
            to: '/docs/v1/description/disc_param',
            from: ['/docs/description/disc_param']
          },

          // /docs/tutorial -> /docs/v1/tutorial
          {
            to: '/docs/v1/tutorial/howtouse-basic',
            from: ['/docs/tutorial/howtouse-basic']
          },
          {
            to: '/docs/v1/tutorial/howtouse-recommend',
            from: ['/docs/tutorial/howtouse-recommend']
          },
          // /docs/oldDoc -> /docs/newDoc
          {
            to: '/docs/v1/tutorial/howtouse-basic',
            from: ['/docs/howtouse/howtouse-basic']
          },
          {
            to: '/docs/v1/tutorial/howtouse-basic',
            from: ['/docs/howtouse/howtouse-basic-old']
          },
          {
            to: '/docs/v1/description/disc_param',
            from: '/docs/description/disc_advanced'
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/community')) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [
              existingPath.replace('/community', '/docs/team'),
              existingPath.replace('/community', '/docs/support'),
            ];
          }
          if (existingPath.includes('description')) {
            return [
              existingPath.replace('description', 'discription'),
              existingPath.replace('description', 'v2-discription'),
            ];
          }
          if (existingPath.includes('tutorial')) {
            return [
              existingPath.replace('tutorial', 'v2-tutorial'),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        gtag: {
          trackingID: 'G-QT38MBWWKD',
          anonymizeIP: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      navbar: {
        title: 'Light Limit Changer',
        //logo: {
        //  alt: 'My Site Logo',
        //  src: 'img/logo.svg',
        //},
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '説明書',
          },
          {
            href: 'https://mochis-factory.booth.pm/items/4864776',
            label: 'Booth',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ドキュメント',
            items: [
              {
                label: '説明書',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'リンク',
            items: [
              {
                label: 'Booth',
                href: 'https://mochis-factory.booth.pm/items/4864776'
              },
              {
                label: 'X',
                href: 'https://twitter.com/azukimochi25',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Azukimochi25, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
