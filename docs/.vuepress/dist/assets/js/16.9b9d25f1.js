(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{312:function(t,a,s){t.exports=s.p+"assets/img/paparazzi.df394d09.png"},386:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"making-cron-expressions-human-readable"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#making-cron-expressions-human-readable","aria-hidden":"true"}},[t._v("#")]),t._v(" Making CRON expressions human-readable")]),t._v(" "),n("p",[t._v("This weekend, I’ve released a new PHP library that translates any valid CRON expression into some text that can be read and understood by humans.")]),t._v(" "),n("GithubButton",{attrs:{url:"https://github.com/lorisleiva/cron-translator",title:"CRON Translator on GitHub"}}),t._v(" "),n("p",[t._v("It’s a simple input/output library and, once you’ve installed it through composer, you can use it like this.")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token package"}},[t._v("Lorisleiva"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CronTranslator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CronTranslator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nCronTranslator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'* * * * *'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => Every minute")]),t._v("\nCronTranslator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'30 22 * * *'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => Every day at 10:30pm")]),t._v("\nCronTranslator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'0 16 * * 1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => Every Monday at 4:00pm")]),t._v("\nCronTranslator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'0 0 1 1 *'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => Every year on January the 1st at 12:00am")]),t._v("\nCronTranslator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'0 0 1 * *'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => The 1st of every month at 12:00am")]),t._v("\nCronTranslator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'0 * * * 1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => Once an hour on Mondays")]),t._v("\nCronTranslator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'* 1-20 * * *'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => Every minute 20 hours a day")]),t._v("\nCronTranslator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'0,30 * * * *'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => Twice an hour")]),t._v("\nCronTranslator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'0 1-5 * * *'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 5 times a day")]),t._v("\nCronTranslator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'0 1 1-5 * *'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 5 days a month at 1:00am")]),t._v("\nCronTranslator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'*/2 * * * *'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => Every 2 minutes")]),t._v("\nCronTranslator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'* 1/3 2 * *'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => Every minute of every 3 hours on the 2nd of every month")]),t._v("\nCronTranslator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'1-3/5 * * * *'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 3 times every 5 minutes")]),t._v("\nCronTranslator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'1,2 0 */2 1,2 *'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => Twice an hour every 2 days 2 months a year at 12am")]),t._v("\n")])])]),n("p",[t._v("Note that the library currently supports a subset of the CRON features (e.g. no "),n("code",[t._v("W")]),t._v(" and "),n("code",[t._v("L")]),t._v(") and tries to make sense of the expression without cramming too much information in order to stay human-friendly.")]),t._v(" "),n("p",[t._v("For example, the CRON expression "),n("code",[t._v("* 0 * * 1,3,5")]),t._v(' means it will only run on Mondays, Wednesdays and Fridays but translate to "Every minute 3 days a week at 12am". Whilst we lose the information regarding the exact days of the week, it keeps the translation concise and easier to reason with.')]),t._v(" "),n("h2",{attrs:{id:"why-did-i-build-this"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#why-did-i-build-this","aria-hidden":"true"}},[t._v("#")]),t._v(" Why did I build this?")]),t._v(" "),n("p",[t._v("I’m currently working on a new course on building Single Page Applications (SPA) using Laravel, VueJS and TailwindCSS. During that course, I will be implementing a new SPA from scratch called Paparazzi — an app that schedules screenshots for any web page. I’m still working on the design but here is a current screenshot of the app we will be building.")]),t._v(" "),n("p",[n("img",{attrs:{src:s(312),alt:"Paparazzi app screenshot"}})]),t._v(" "),n("p",[t._v('As you can see, each "paparazzi" takes a screenshot at a certain frequency. Whilst we will leverage CRON expressions to define those frequencies, we need a human-friendly way to display that frequency to our users. '),n("strong",[t._v("Hence the CRON translator library")]),t._v(".")]),t._v(" "),n("p",[t._v("This course will also use some of my other packages in order to provide additional documentation for them. That includes "),n("a",{attrs:{href:"https://github.com/lorisleiva/laravel-actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Actions"),n("OutboundLink")],1),t._v(", "),n("a",{attrs:{href:"https://github.com/lorisleiva/javel",target:"_blank",rel:"noopener noreferrer"}},[t._v("Javel"),n("OutboundLink")],1),t._v(", "),n("a",{attrs:{href:"https://github.com/lorisleiva/laravel-deployer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Deployer"),n("OutboundLink")],1),t._v(" and "),n("a",{attrs:{href:"https://github.com/lorisleiva/tailwindcss-plugins",target:"_blank",rel:"noopener noreferrer"}},[t._v("TailwindCSS plugins"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("I haven’t designed a landing page for the course just yet but when I do I’ll be notifying my blog’s subscribers so feel free to sign up in the meantime.")]),t._v(" "),n("p",[t._v("Thanks for reading this far and I hope you’ll see some use for that new CRON translator library. ⏰")]),t._v(" "),n("GithubButton",{attrs:{url:"https://github.com/lorisleiva/cron-translator",title:"CRON Translator on GitHub"}})],1)},[],!1,null,null,null);a.default=e.exports}}]);