(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{385:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"redesigning-my-blog-using-vuepress-and-tailwindcss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redesigning-my-blog-using-vuepress-and-tailwindcss","aria-hidden":"true"}},[t._v("#")]),t._v(" Redesigning my blog using Vuepress and TailwindCSS")]),t._v(" "),a("p",[t._v("A few months ago I updated my blog to move away from Ghost (a blogging platform with a minimalistic interface) and use Vuepress instead.")]),t._v(" "),a("p",[t._v('I didn’t have any particular complains about Ghost but I wanted more control over my blog without too much hassle. Ghost was also taking care of renewing my SSH certificates but the CRON job suddenly decided not to do its job anymore. That’s when I thought, "Right! Let’s take control of my blog again."')]),t._v(" "),a("p",[a("img",{attrs:{src:"/covers/redesigning-my-blog-using-vuepress-and-tailwindcss.jpg",alt:"cover"}})]),t._v(" "),a("h2",{attrs:{id:"why-vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-vuepress","aria-hidden":"true"}},[t._v("#")]),t._v(" Why Vuepress?")]),t._v(" "),a("p",[t._v("I am a real Vue fanboy and having the ability to use some Vue components directly in my markdown files is incredibly useful.")]),t._v(" "),a("p",[t._v("I also wanted to write articles using static files so that 100% of my blog would be open source (instead of having the content of my blog in a database somewhere). This is a non-negligible advantage for a teaching platform. Also, people can fix my typos.")]),t._v(" "),a("h2",{attrs:{id:"why-tailwindcss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-tailwindcss","aria-hidden":"true"}},[t._v("#")]),t._v(" Why TailwindCSS?")]),t._v(" "),a("p",[t._v("I mean, do we even need to ask that question anymore? I’ve been designing applications with TailwindCSS ever since it was available and I love it every day a little more. It makes me a happy developer and a proud designer.")]),t._v(" "),a("p",[t._v("It may seem like an emotional decision but honestly, there is enough documentation out there to convince you about the technical and semantical level.")]),t._v(" "),a("h2",{attrs:{id:"architecture-of-a-vuepress-blog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture-of-a-vuepress-blog","aria-hidden":"true"}},[t._v("#")]),t._v(" Architecture of a Vuepress blog")]),t._v(" "),a("p",[t._v("All the content of your blog (markdown files, images used in articles, etc.) can be arranged however you like.")]),t._v(" "),a("p",[t._v("In my case, I have two folders "),a("code",[t._v("pages")]),t._v(" and "),a("code",[t._v("articles")]),t._v(" at the root of my repository. These folders do not contain one markdown file per page but rather one folder per page that contains only one markdown file named "),a("code",[t._v("index.md")]),t._v(". This arrangement allows me to group all images and resources related to a page or article with the article itself so everything is in one place.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├── .vuepress\n├── LICENSE\n├── README.md\n├── articles\n│   ├── ...\n│   ├── 20180806 Laravel deployment using GitLab's pipelines\n│   ├── 20180912 Google Calendar Sync\n│   ├── 20180916 Google Calendar Sync 2\n│   ├── 20180930 Google Calendar Sync 3\n│   ├── 20190211 Introducing Javel\n│   └── 20190321 Laravel pagination with TailwindCSS\n│       ├── index.md\n│       ├── pagination.png\n│       ├── pagination_1.png\n│       ├── pagination_2.png\n│       ├── pagination_3.png\n│       ├── pagination_4.png\n│       ├── pagination_5.png\n│       └── pagination_6.png\n├── package-lock.json\n├── package.json\n├── pages\n└── tailwind.js\n")])])]),a("p",[t._v("All the rest of the Vuepress application is located in a "),a("code",[t._v(".vuepress")]),t._v(" folder. That includes the layout of your application, Vue components, global assets, custom styling, settings, plugin registration, etc.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├── .vuepress\n│   ├── config.js\n│   ├── public\n│   └── theme\n│       ├── articles.js\n│       ├── assets\n│       ├── components\n│       ├── global-components\n│       ├── index.js\n│       ├── layouts\n│       ├── search.js\n│       ├── styles\n│       └── utils.js\n└── ...\n")])])]),a("h2",{attrs:{id:"how-to-use-tailwindcss-with-vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-tailwindcss-with-vuepress","aria-hidden":"true"}},[t._v("#")]),t._v(" How to use TailwindCSS with Vuepress?")]),t._v(" "),a("p",[t._v("Laughably simple. Vuepress already has a "),a("code",[t._v("postcss")]),t._v(" option on their "),a("code",[t._v("config.js")]),t._v(" file. All you need to do after installing TailwindCSS (via npm) is to add it as a postcss plugin.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    postcss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tailwindcss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./tailwind.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'autoprefixer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"vuepress-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugins","aria-hidden":"true"}},[t._v("#")]),t._v(" Vuepress plugins")]),t._v(" "),a("p",[t._v("Vuepress can be extended at length via its plugin system. There are already quite a few useful core plugins available like "),a("code",[t._v("google-analytics")]),t._v(".")]),t._v(" "),a("p",[t._v("It is also very simple to create your own plugins. Not necessarily to create a new open source package but simply to clean up your application of some logic you can isolate somewhere else. Kind of like a service class.")]),t._v(" "),a("p",[t._v("For example, I created a file "),a("code",[t._v("articles.js")]),t._v(" that computes which articles should be featured on the front page and provides a global computed property called "),a("code",[t._v("$featuredArticles")]),t._v(". I also created a file called "),a("code",[t._v("search.js")]),t._v(" whose responsibility is to provide a global "),a("code",[t._v("$search")]),t._v(" method that will return all articles matching your query.")]),t._v(" "),a("p",[t._v("Finally, I created (and extracted to their own repository) two plugins that I thought other people might benefit from. The first one is called "),a("code",[t._v("seo")]),t._v(" and takes as much data available from your configuration file and your articles to set up all the metadata you need for sharing to social media.")]),t._v(" "),a("GithubButton",{attrs:{url:"https://github.com/lorisleiva/vuepress-plugin-seo",title:"SEO Plugin on GitHub"}}),t._v(" "),a("p",[t._v("The second one is called "),a("code",[t._v("disqus")]),t._v(" and simply registers a global "),a("code",[t._v("Disqus")]),t._v(" component that you can, for example, insert in your article layout.")]),t._v(" "),a("GithubButton",{attrs:{url:"https://github.com/lorisleiva/vuepress-plugin-disqus",title:"Disqus Plugin on GitHub"}}),t._v(" "),a("p",[t._v("All of these plugins are registered in the configuration file of my theme like so.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/theme/index.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/google-analytics'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ga"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UA-100767601-5'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'seo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'disqus'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    enhanceAppFiles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'articles.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'search.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),a("p",[t._v("Taking back control of my blog using Vuepress and TailwindCSS was a lot of fun and I recommend that stack to anyone who’s not afraid of spending a bit of time to experiment with a design that will match their audience best.")]),t._v(" "),a("p",[t._v("During that process, I created lots of cool components that would deserve a dedicated tutorial each. For example, the animated gradient bar at the very top of my blog. All of these tutorials are on my To-Do list but in the meantime feel free to scavenge my blog’s repository which is public as from today. 🎉")]),t._v(" "),a("GithubButton",{attrs:{url:"https://github.com/lorisleiva/blog",title:"See this blog on GitHub"}})],1)},[],!1,null,null,null);e.default=n.exports}}]);