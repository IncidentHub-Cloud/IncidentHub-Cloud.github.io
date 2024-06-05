import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'IncidentHub Blog',
  tagline: 'Monitor all your third-party cloud and SaaS providers in one place',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://incidenthub-cloud.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'IncidentHub-Cloud', // Usually your GitHub org/user name.
  projectName: 'IncidentHub-Cloud.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.png',
    navbar: {
      title: 'IncidentHub Blog',
      logo: {
        alt: 'IncidentHub',
        src: 'https://storage.googleapis.com/ihub-static-storage/2-color-IncidentHub%20Logo.jpg',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'External Links',
          items: [
            {
              label: 'IncidentHub',
              href: 'https://incidenthub.cloud',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/incidenthub/',
            },
            {
              label: 'Twitter',
              href: 'https://x.com/incident_hub',
            },
            {
              label: 'Documentation',
              href: 'https://docs.incidenthub.cloud',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IncidentHub`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
