const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Ligt Limit Changer',
  tagline: 'MA前提 アバター明るさ変更ツール',
  url: 'https://azukimochi.github.io/LLC-Docs/',
  baseUrl: '/LLC-Docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Azukimochi', // Usually your GitHub org/user name.
  projectName: 'LLC-Docs', // Usually your repo name.

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
            href: 'https://github.com/Azukimochi/LightLimitChangerForMA',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          
          {
            label: 'Github',
            href: 'https://github.com/Azukimochi/LightLimitChangerForMA',
          },
          {
            label: 'X',
            href: 'https://twitter.com/azukimochi25',
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
