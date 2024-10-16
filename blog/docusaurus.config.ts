import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'IncidentHub Blog',
  tagline: 'Monitor all your third-party cloud and SaaS providers in one place',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.incidenthub.cloud/',
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

  plugins: [
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_qLkH5C1EGaWnp5L9L5YDkjXEEfmTI00KSHTlNzjA8Vl",
        appUrl: "https://us.i.posthog.com",
        enableInDevelopment: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        gtag: {
          trackingID: "G-QTW0L49C26",
          anonymizeIP: true,
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: [
            '/tags/**',
            '/markdown-page',
            '/authors',
          ],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          blogTitle: 'IncidentHub Blog',
          blogDescription: 'IncidentHub monitors the status of your third-party Cloud and SaaS services',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          feedOptions: {
            type: 'all',
            title: 'IncidentHub Blog',
          },
          tags: 'tags.yml',
          onInlineTags: 'throw',
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
      title: 'IncidentHub',
      logo: {
        alt: 'IncidentHub',
        href: 'https://incidenthub.cloud',
        src: 'https://storage.googleapis.com/ihub-static-storage/logo-bg-white.png',
      },
      items: [
        {
          label: "The IncidentHub Blog",
          position: 'right',
          href: '/',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          //          title: 'External Links',
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
            {
              label: 'Whitepaper',
              href: 'https://storage.googleapis.com/ihub-static-storage/content/Monitoring%20Status%20Pages%20Built%20With%20Atlassian%20Statuspage.pdf',
            },
          ],
        },
        {
          items: [
            {
              label: 'ProductHunt',
              href: 'https://www.producthunt.com/products/incidenthub',
            },
            {
              label: 'SaaSHub',
              href: 'https://www.saashub.com/incidenthub',
            },
          ]
        },
        {
          items: [
            {
              label: 'Blog Feed',
              href: 'https://blog.incidenthub.cloud/atom.xml',
            }
          ]
        },
        {
          items: [
            {
              label: 'Blog Archive',
              href: 'https://blog.incidenthub.cloud/archive',
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IncidentHub`,
    },
    tableOfContents: {
      minHeadingLevel: 2
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
