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

          // /docs/discription -> /docs/v1/discription

          {
            to: '/docs/v1/discription/disc_additional',
            from: ['/docs/discription/disc_additional']
          },
          {
            to: '/docs/v1/discription/disc_general',
            from: ['/docs/discription/disc_general']
          },
          {
            to: '/docs/v1/discription/disc_optional',
            from: ['/docs/discription/disc_optional']
          },
          {
            to: '/docs/v1/discription/disc_param',
            from: ['/docs/discription/disc_param']
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
            to: '/docs/v1/discription/disc_param',
            from: '/docs/discription/disc_advanced'
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
          if (existingPath.includes('/v2-description')) {
            return [existingPath.replace('/v2-description', '/v2-discription')];
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
