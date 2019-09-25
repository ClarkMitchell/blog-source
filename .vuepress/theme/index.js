const path = require('path')

module.exports = {
	plugins: {
        '@vuepress/google-analytics': { ga: 'UA-116134810-3' },
        'seo': true
    },
    enhanceAppFiles: [
        path.resolve(__dirname, 'articles.js'),
        path.resolve(__dirname, 'search.js'),
    ]
}