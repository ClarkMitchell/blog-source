const nav = require('../.vuepress/config/nav.json');
const sidebar = require('../.vuepress/config/sidebar.json');
const config = require('../.vuepress/config/config.json');
const head = require('../.vuepress/config/head.json');
const featuredArticles = require('../.vuepress/config/featured.json');

module.exports = {
    base: "/blog/"
    title: config.title,
    themeConfig: {
        domain: config.domain,
        repo: config.repo,
        nav,
        sidebar,
        author: config.author,
        minimumFeaturedArticles: 3,
        featuredArticles,
    },
    head,
    postcss: {
        plugins: [
            require('tailwindcss')('./tailwind.js'),
            require('autoprefixer'),
        ]
    },
    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-container'), 'sticky');
            md.use(require('markdown-it-container'), 'flex');
        }
    }
}
