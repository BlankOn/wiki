(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{1043:function(e,n,a){"use strict";a.d(n,"a",(function(){return g}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function u(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?u(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),g=t,b=m["".concat(u,".").concat(g)]||m[g]||s[g]||i;return a?r.a.createElement(b,o(o({ref:n},c),{},{components:a})):r.a.createElement(b,o({ref:n},c))}));function g(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,u=new Array(i);u[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,u[1]=o;for(var c=2;c<i;c++)u[c]=a[c];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},262:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return u})),a.d(n,"metadata",(function(){return o})),a.d(n,"rightToc",(function(){return l})),a.d(n,"default",(function(){return p}));var t=a(3),r=a(7),i=(a(0),a(1043)),u={},o={unversionedId:"TimPengembang/Dokumentasi/Panduan/MemutusRangkaianKetergantungan",id:"TimPengembang/Dokumentasi/Panduan/MemutusRangkaianKetergantungan",isDocsHomePage:!1,title:"MemutusRangkaianKetergantungan",description:"Dokumentasi Pengembang",source:"@site/Wiki/TimPengembang/Dokumentasi/Panduan/MemutusRangkaianKetergantungan.md",slug:"/TimPengembang/Dokumentasi/Panduan/MemutusRangkaianKetergantungan",permalink:"/TimPengembang/Dokumentasi/Panduan/MemutusRangkaianKetergantungan",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Panduan/MemutusRangkaianKetergantungan.md",version:"current"},l=[{value:"Dokumentasi Pengembang",id:"dokumentasi-pengembang",children:[{value:"Studi Kasus :",id:"studi-kasus-",children:[]}]}],c={rightToc:l};function p(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(t.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"dokumentasi-pengembang"},"Dokumentasi Pengembang"),Object(i.a)("h1",{id:"memutus-rangkaian-ketergantungan"},"Memutus Rangkaian Ketergantungan"),Object(i.a)("h3",{id:"studi-kasus-"},"Studi Kasus :"),Object(i.a)("h4",{id:"kasus-pennyusutan-hasil-cd-iso-harian"},"Kasus pennyusutan hasil CD Iso harian"),Object(i.a)("p",null,'"Berdasarkan log pabrik cd, penyusutan terjadi saat menghapus paket2 yang ada\ndi daftar hitam."'),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"app-install-data tk8.4 tcl8.4 openoffice.org-style-human language-pack-gnome-en-base ubiquity-slideshow-ubuntu gnome-user-guide openoffice.org-help-en-usombilin-language-pack-extras-id"),"\nUntuk mencari tahu biang keladinya:"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Masuk chroot pabrikcd"),Object(i.a)("li",{parentName:"ol"},"Instal blankon-desktop"),Object(i.a)("li",{parentName:"ol"},"Hapus paket2 di atas satu persatu dengan apt-get remove")),Object(i.a)("p",null,"Semua paket yang dibawa blankon-desktop akan dihapus saat mencoba menghapus\npaket yang bermasalah. Ternyata paket tersebut adalah paket tcl8.4."),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Cari tahu siapa yang membutuhkan paket tersebut:")),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"apt-cache rdepends tcl8.4\ntcl8.4\nReverse Depends:\n xchat-gnome\n vim-gnome\n tk8.4\n tcl8.4-doc\n tcl8.4-dev\n tcl\n tcl |rrdtool-tcl\n libpurple0\n ecosconfig-imx\n blt\n")),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Dari daftar di atas paket yang ada di blankon-desktop adalah\nlibpurple0 bawaan pidgin, artinya kita mesti memutus rantai ketergantungan\nantara libpurple0 dengan tcl84.")),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"# apt-cache depends libpurple0 | grep tcl8.4\n Suggests: tcl8.4\n")),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Perbaiki paket yang bermasalah tersebut (libpurple0) dengan\nmenghapus kolom Suggests di dalam debian/control."),Object(i.a)("li",{parentName:"ol"},"Tertib")),Object(i.a)("p",null,"Last modified on 06/12/2010 05:24:50 AM"),Object(i.a)("hr",null))}p.isMDXComponent=!0}}]);