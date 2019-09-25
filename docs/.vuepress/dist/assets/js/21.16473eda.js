(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{380:function(t,a,e){"use strict";e.r(a);var n=e(42),s=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"setting-up-a-laravel-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-a-laravel-server","aria-hidden":"true"}},[t._v("#")]),t._v(" Setting up a Laravel server")]),t._v(" "),e("YouTube",{attrs:{url:"https://www.youtube.com/embed/HQD4yLv-SCQ?rel=0"}}),t._v(" "),e("h2",{attrs:{id:"checklist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#checklist","aria-hidden":"true"}},[t._v("#")]),t._v(" Checklist")]),t._v(" "),e("h4",{attrs:{id:"create-droplet-and-link-domain"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-droplet-and-link-domain","aria-hidden":"true"}},[t._v("#")]),t._v(" Create droplet and link domain")]),t._v(" "),e("p",[t._v("❑  Create a droplet via "),e("a",{attrs:{href:"https://m.do.co/c/c6ce8db48f10",target:"_blank",rel:"noopener noreferrer"}},[t._v("Digital Ocean ("),e("strong",[t._v("$10 discount link")]),t._v(" 🔥)"),e("OutboundLink")],1),t._v(". "),e("br"),t._v("\n❑  Add your SSH key when creating your droplet. "),e("br"),t._v("\n❑  Add your domain name in the “Networking” section. "),e("br"),t._v("\n❑  Points "),e("code",[t._v("@")]),t._v(" to the newly created droplet.")]),t._v(" "),e("h4",{attrs:{id:"make-bash-more-friendly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#make-bash-more-friendly","aria-hidden":"true"}},[t._v("#")]),t._v(" Make bash more friendly")]),t._v(" "),e("p",[t._v("❑  "),e("code",[t._v("ssh root@IPADDRESS")]),t._v(" "),e("br"),t._v("\n❑  "),e("code",[t._v("vim ~/.bashrc")]),t._v(" → search "),e("code",[t._v("/force_color_prompt")]),t._v(" → uncomment "),e("br"),t._v("\n❑  "),e("code",[t._v("vim ~/.bashrc")]),t._v(" → search "),e("code",[t._v("/PS1")]),t._v(" → remove "),e("code",[t._v("@\\h")]),t._v(" and "),e("code",[t._v("\\w")]),t._v(" becomes "),e("code",[t._v("\\W")]),t._v(" "),e("br"),t._v("\n❑  Reload shell "),e("code",[t._v("exec bash -l")])]),t._v(" "),e("h4",{attrs:{id:"add-locales"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-locales","aria-hidden":"true"}},[t._v("#")]),t._v(" Add locales")]),t._v(" "),e("p",[t._v("❑  "),e("code",[t._v('echo "LC_ALL=en_US.UTF-8" >> /etc/default/locale')]),t._v(" "),e("br"),t._v(" "),e("code",[t._v("locale-gen en_US.UTF-8")]),t._v(" "),e("br"),t._v("\n❑  "),e("code",[t._v("exit")]),t._v(" and reconnect "),e("code",[t._v("ssh root@IPADDRESS")])]),t._v(" "),e("h4",{attrs:{id:"install-php-7-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-php-7-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Install php 7.2")]),t._v(" "),e("p",[t._v("❑  "),e("code",[t._v("apt-get update -y && apt-get upgrade -y")]),t._v(" "),e("br"),t._v("\n❑  "),e("code",[t._v("apt-get -y install python-software-properties")]),t._v(" "),e("br"),t._v("\n❑  "),e("code",[t._v("add-apt-repository -y ppa:ondrej/php")]),t._v(" "),e("br"),t._v("\n❑  "),e("code",[t._v("apt-get update -y")]),t._v(" "),e("br"),t._v("\n❑  "),e("code",[t._v("apt-get -y install php7.2 php7.2-common php7.2-gd php7.2-intl php7.2-zip php7.2-sqlite3 php7.2-mysql php7.2-fpm php7.2-mbstring php7.2-xml php7.2-curl php7.2-memcached unzip zip composer")])]),t._v(" "),e("h4",{attrs:{id:"configure-your-ngnix-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-your-ngnix-server","aria-hidden":"true"}},[t._v("#")]),t._v(" Configure your ngnix server")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("server "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen 80"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    listen "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("::"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":80 ipv6only"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("on"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name mydomain.com"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    root /var/www/mydomain.com/current/public"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    index index.html index.htm index.php"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    charset utf-8"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    add_header X-Frame-Options "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SAMEORIGIN"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    add_header X-XSS-Protection "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1; mode=block"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    add_header X-Content-Type-Options "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nosniff"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    location / "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        try_files "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v("/ /index.php?"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$query_string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    location "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /favicon.ico "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" access_log off"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" log_not_found off"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    location "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /robots.txt  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" access_log off"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" log_not_found off"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    access_log off"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    error_log  /var/log/nginx/laraveldeployer.com-error.log error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    error_page 404 /index.php"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    location ~ \\.php$ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        include snippets/fastcgi-php.conf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fastcgi_param SCRIPT_FILENAME "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$realpath_root")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fastcgi_script_name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fastcgi_param DOCUMENT_ROOT "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$realpath_root")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fastcgi_pass unix:/run/php/php7.2-fpm.sock"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    location ~ /\\.ht "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        deny all"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("❑  "),e("code",[t._v("service nginx restart && service php7.2-fpm reload")])]),t._v(" "),e("h4",{attrs:{id:"set-up-mysql-and-create-a-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-up-mysql-and-create-a-database","aria-hidden":"true"}},[t._v("#")]),t._v(" Set up mysql and create a database")]),t._v(" "),e("p",[t._v("❑  "),e("code",[t._v("cat /root/.digitalocean_password")]),t._v(" "),e("br"),t._v("\n❑  "),e("code",[t._v("mysql_secure_installation")]),t._v(" "),e("br"),t._v("\n❑  "),e("code",[t._v('mysql -uroot -p -e "create database laravel;"')])])],1)},[],!1,null,null,null);a.default=s.exports}}]);