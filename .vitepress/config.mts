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
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //       { text: 't1', link: '/t1' },
    //     ]
    //   }
    // ],

    sidebar: generateSidebar({
      documentRootPath: 'docs',
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
      pattern: 'https://github.com/huyixi/wiki/edit/main/docs/',
      text: 'Edit this page on GitHub'
    }
  },
  srcDir: './docs'
})
