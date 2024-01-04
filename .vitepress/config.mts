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

    nav: [
      { text: 'huyixi.com', link: 'https://huyixi.com' },
      { text: 'huyixi.org', link: 'https://huyixi.org' },
    ],

    sidebar: generateSidebar({
      documentRootPath: 'docs/',
      collapsed: true,
      collapseDepth: 2,
      hyphenToSpace: true,
      underscoreToSpace: true,
      includeEmptyFolder: true,
    }),

    socialLinks: [
    { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Mail</title><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 8l-7.475 4.675q-.125.075-.262.113t-.263.037q-.125 0-.262-.037t-.263-.113L4 8v10h16zm-8 3l8-5H4zM4 8v.25v-1.475v.025V6v.8v-.012V8.25zv10z"/></svg>' },link:'mailto:hi@huyixi.com'},
      { icon: 'github', link: 'https://github.com/huyixi' },
      { icon: 'mastodon', link: 'https://mastodon.social/@huyixi'}
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
