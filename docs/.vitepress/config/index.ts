import { defineConfig } from 'vitepress'

export const META_IMAGE = 'https://dev.openpanel.co/social.png'
export const META_URL = 'https://dev.openpanel.co'
export const META_TITLE = 'dev.openpanel.co'
export const META_DESCRIPTION = 'Developer documentation for OpenPanel'

const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[\u0300-\u036F]/g

/**
 * Default slugification function
 */
export const slugify = (str: string): string =>
  str
    .normalize('NFKD')
    // Remove accents
    .replace(rCombining, '')
    // Remove control characters
    .replace(rControl, '')
    // Replace special characters
    .replace(rSpecial, '-')
    // ensure it doesn't start with a number
    .replace(/^(\d)/, '_$1')

export default defineConfig({
  title: 'dev.openpanel.co',
  appearance: 'dark',

  markdown: {
    theme: {
      dark: 'dracula-soft',
      light: 'vitesse-light',
    },

    attrs: {
      leftDelimiter: '%{',
      rightDelimiter: '}%',
    },

    anchor: {
      slugify,
    },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    //['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],

    ['meta', { property: 'og:url', content: META_URL }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:description', content: META_DESCRIPTION }],

    ['meta', { property: 'twitter:url', content: META_URL }],
    ['meta', { property: 'twitter:title', content: META_TITLE }],
    ['meta', { property: 'twitter:description', content: META_DESCRIPTION }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:image', content: META_IMAGE }],

    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'WUXSABAN',
        'data-spa': 'auto',
        defer: '',
      },
    ],
  ],

  themeConfig: {
    logo: '/logo.svg',
    outline: [2, 3],

    socialLinks: [
      { icon: 'x', link: 'https://twitter.com/openpanelco' },
      {
        icon: 'github',
        link: 'https://github.com/stefanpejcic/openpanel',
      },
      {
        icon: 'discord',
        link: 'https://discord.com/invite/7bNY8fANqF',
      },
    ],

    footer: {
      copyright: 'Copyright © 2024 OPENPANEL',
      message: 'Released under the MIT License.',
    },

    editLink: {
      pattern: 'https://github.com/stefanpejcic/dev.openpanel.co/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },

    search: {
      provider: 'local',
      options: {
        detailedView: true,
      },
    },

    // carbonAds: {
    //   code: 'CEBICK3I',
    //   placement: 'routervuejsorg',
    // },

    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
       { text: 'API', link: '/api/', activeMatch: '^/api/' },
       { text: 'Cookbook', link: '/cookbook/', activeMatch: '^/cookbook/' },
      {
        text: 'Links',
        items: [
          {
            text: 'OpenPanel Docs',
            link: 'https://openpanel.co/docs/panel/intro/',
          },
          {
            text: 'OpenAdmin Docs',
            link: 'https://openpanel.co/docs/admin/intro/',
          },
        ],
      },
    ],

    sidebar: {
      // catch-all fallback
      '/': [
        {
          text: 'Introduction',
          items: [
            {
              text: 'What is OpenPanel?',
              link: '/introduction.html',
            },
            {
              text: 'Getting Started',
              link: '/getting-started.html',
            },
            {
              text: 'Showcase',
              link: '/showcase.html',
            },
          ],
        },
        {
          text: 'API',
          items: [
            {
              text: 'Introduction',
              link: '/introduction.html',
            },
            {
              text: 'Authentication',
              link: '/getting-started.html',
            },
            {
              text: 'Available Endpoints',
              link: '/showcase.html',
            },
            {
              text: 'Best Practice',
              link: '/showcase.html',
            },
          ],
        },
        {
          text: 'OpenCLI',
          items: [
            {
              text: 'Introduction',
              link: '/introduction.html',
            },
            {
              text: 'Available Commands',
              link: '/getting-started.html',
            },
            {
              text: 'Custom Commands',
              link: '/showcase.html',
            },
          ],
        },
        {
          text: 'OpenPanel Modules',
          items: [
            {
              text: 'Introduction',
              link: '/introduction.html',
            },
            {
              text: 'Example Modules',
              link: '/getting-started.html',
            },
          ],
        },
        {
          text: 'OpenAdmin Extensions',
          items: [
            {
              text: 'Introduction',
              link: '/introduction.html',
            },
            {
              text: 'Example Extensions',
              link: '/getting-started.html',
            },
          ],
        },
        {
          text: 'Docker images',
          items: [
            {
              text: 'Introduction',
              link: '/introduction.html',
            },
            {
              text: 'Available images',
              link: '/getting-started.html',
            },
            {
              text: 'Create an image',
              link: '/getting-started.html',
            },
          ],
        },
        {
          text: 'Guide',

          items: [],
        },
      ],
    },
  },
})
