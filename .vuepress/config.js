const nav = require('../config/nav.json');
const sidebar = require('../config/sidebar.json');
const config = require('../config/config.json');
const containers = require('../config/containers');

module.exports = {
    title: config.title,
    themeConfig: {
        domain: config.domain,
        repo: config.repo,
        nav,
        sidebar,
        author: config.author,
        minimumFeaturedArticles: 6,
        featuredArticles: [
            '/laravel-deployment-using-gitlab-pipelines/',
            '/making-cron-expressions-human-readable/',
            '/redesigning-my-blog-using-vuepress-and-tailwindcss/',
            '/introducing-javel/',
            '/conciliating-laravel-and-ddd/',
            '/renderless-resizable-textarea/',
        ],
    },
    head: [
        ['link', {rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png'}],


        ['link', {rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'msapplication-TileColor', content: '#ffffff'}],
        ['meta', {name: 'msapplication-TileImage', content: '/ms-icon-144x144.png'}],
        ['meta', {name: 'theme-color', content: '#ffffff'}]
    ],
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
