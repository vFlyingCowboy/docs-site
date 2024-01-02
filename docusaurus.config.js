// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { openApiPluginConfig, navbarDropdown } = require('./apis');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Pilot Club Documentation',
  tagline: 'The Pilot Club Docs',
  favicon: 'img/tpc logo.png',

  // Set the production url of your site here
  url: 'https://docs.thepilotclub.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/the-pilot-club/docs-site.git/tree/main',
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem",
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      /** @type {import('docusaurus-plugin-openapi-docs').PluginOptions} */
      ({
        id: 'apiDocs',
        docsPluginId: 'classic',
        config: openApiPluginConfig,
      }),
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/tpc logo.png',
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'The Pilot Club Docs',
        logo: {
          alt: 'The Pilot Club Logo',
          src: 'img/tpc logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'dropdown',
            items: [
              {
                to: '/docs/services/apis',
                label: 'Overview',
              },
              ...navbarDropdown,
            ],
            position: 'left',
            label: 'APIs',
          },
          {
            href: 'https://github.com/the-pilot-club',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Websites',
            items: [
              {
                label: 'The Pilot Club',
                to: 'https://www.thepilotclub.org/',
              },
              {
                label: 'Flight Crew Portal',
                to: 'https://flightcrew.thepilotclub.org/',
              },
              {
                label: 'Charters',
                to: 'https://charters.thepilotclub.org',
              },
              {
                label: 'Flight School',
                to: 'https://flightschool.thepilotclub.org',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.st/thepilotclub',
              },
                {
                label: 'Instagram',
                href: 'https://www.instagram.com/tpc_media/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/tpcflightsim/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@tpc_media',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://www.thepilotclub.org/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/the-pilot-club',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Pilot Club`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
