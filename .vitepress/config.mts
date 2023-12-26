import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "huyixi's Wiki",
  description: "Everything I Know",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    siteTitle: "huyixi's wiki",
    url: "https://huyixi.wiki",
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    // sidebar: [
    //   {
    //     text: 'level1',
    //     items: [
    //       {
    //         text: 'level2',
    //         collapsed: true,
    //         items: [
    //           {
    //             text: 'level3',
    //             link: '/level1/level2/level3'
    //           }
    //         ]
    //       }, {
    //         text: 'level2',
    //         items: [
    //           {
    //             text: 'level3',
    //             link: '/level1/level2/level3'
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {

    //   }
 
    // ],

    sidebar: generateSidebar({
      documentRootPath: 'docs',
      // collapsed: true,
      collapseDepth: 2,
      hyphenToSpace: true,
      underscoreToSpace: true,
      includeEmptyFolder: true,
    }),

    socialLinks: [
      { icon: 'github', link: 'https://huyixi.com' },
      { icon: 'github', link: 'https://github.com/huyixi' }
    ],

    search: {
      provider: 'local'
    },

    // footer: conditionally add footer if sidebar is not absent
    // footer: {
    //   message: 'Built with ❤️ by <a href="https://huyixi.com">huyixi</a>',
    //   copyright: 'Copyright © 2023-present huyixi'
    // }

    editLink: {
      pattern: 'https://github.com/huyixi/wiki/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },
  srcDir: './docs'
})
