(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{1050:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=b(a),m=n,d=s["".concat(o,".").concat(m)]||s[m]||p[m]||i;return a?r.a.createElement(d,c(c({ref:t},l),{},{components:a})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},371:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(1050)),o={},c={unversionedId:"TimPengembang/Infrastruktur/PembaharuanSertifikatLetsEncrypt",id:"TimPengembang/Infrastruktur/PembaharuanSertifikatLetsEncrypt",isDocsHomePage:!1,title:"Pembaharuan Sertifikat LetsEncrypt",description:"(khusus untuk aku.boi)",source:"@site/Wiki/TimPengembang/Infrastruktur/PembaharuanSertifikatLetsEncrypt.md",sourceDirName:"TimPengembang/Infrastruktur",slug:"/TimPengembang/Infrastruktur/PembaharuanSertifikatLetsEncrypt",permalink:"/TimPengembang/Infrastruktur/PembaharuanSertifikatLetsEncrypt",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/PembaharuanSertifikatLetsEncrypt.md",version:"current",frontMatter:{}},u=[{value:"catatan:",id:"catatan",children:[]}],l={toc:u};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"(khusus untuk aku.boi)"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"buat konfigurasi domain yang akan dibuat atau diperpanjang sertifikatnya, agar document root mengarah ke /var/www/html")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ cd /etc/nginx/sites-available\n$ cat aku.certbot  ## ini sudah ada. jika belum ada, buatlah filenya dengan editor favorit anda\nserver {\n  listen 80;\n  server_name aku.blankonlinux.or.id;\n  root /var/www/html;\n  index index.html index.htm;\n}\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"arahkan document root aku.boi ke /var/www/html")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ cd /etc/nginx/sites-enabled\n$ sudo ln -sf ../sites-available/aku.certbot aku\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},Object(i.b)("em",{parentName:"li"},"reload")," layanan nginx")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ sudo -i\n# service nginx reload\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"jalankan certbot-auto dengan parameter-parameter sebagai berikut")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'# ./certbot-auto certonly --webroot -d aku.blankonlinux.or.id\n...\n...\n - Congratulations! Your certificate and chain have been saved at:\n   /etc/letsencrypt/live/aku.blankonlinux.or.id-0001/fullchain.pem\n   Your key file has been saved at:\n   /etc/letsencrypt/live/aku.blankonlinux.or.id-0001/privkey.pem\n   Your cert will expire on 2018-06-06. To obtain a new or tweaked\n   version of this certificate in the future, simply run certbot-auto\n   again. To non-interactively renew *all* of your certificates, run\n   "certbot-auto renew"\n - If you like Certbot, please consider supporting our work by:\n\n   Donating to ISRG / Let\'s Encrypt:   https://letsencrypt.org/donate\n   Donating to EFF:                    https://eff.org/donate-le\n\n')),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"cek kembali path sertifikat yang ditunjukkan oleh script certbot-auto, agar web server nginx dapat menemukan sertifikatnya. jika path nya tidak sama dengan yang ada di konfigurasi nginx, gantilah.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"kembalikan konfigurasi yang telah diganti di langkah 1"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"# cd /etc/nginx/sites-enabled\n# ln -sf ../sites-available/aku\n")),Object(i.b)("h2",{id:"catatan"},"catatan:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"cek terlebih dahulu apakah konfigurasi web yang dimaksud adalah file biasa atau symbolic link. jika file biasa, copy dulu file tersebut ke /etc/nginx/sites-available. jika nama yg sama sudah ada di /etc/nginx/sites-available, cobalah berpikir kreatif apa sebaiknya yang harus dilakukan"),Object(i.b)("li",{parentName:"ul"},"jika pada langkah 3 ada kesalahan, diskusikan dengan anggota tim yang lain")))}b.isMDXComponent=!0}}]);