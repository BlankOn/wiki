(window.webpackJsonp=window.webpackJsonp||[]).push([[432],{1043:function(n,e,a){"use strict";a.d(e,"a",(function(){return m}));var t=a(0),r=a.n(t);function o(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function i(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function u(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function l(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},o=Object.keys(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var c=r.a.createContext({}),p=function(n){var e=r.a.useContext(c),a=e;return n&&(a="function"==typeof n?n(e):u(u({},e),n)),a},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},s=r.a.forwardRef((function(n,e){var a=n.components,t=n.mdxType,o=n.originalType,i=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),s=p(a),m=t,b=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return a?r.a.createElement(b,u(u({ref:e},c),{},{components:a})):r.a.createElement(b,u({ref:e},c))}));function m(n,e){var a=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var o=a.length,i=new Array(o);i[0]=s;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=n,u.mdxType="string"==typeof n?n:t,i[1]=u;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},499:function(n,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"metadata",(function(){return u})),a.d(e,"rightToc",(function(){return l})),a.d(e,"default",(function(){return p}));var t=a(3),r=a(7),o=(a(0),a(1043)),i={},u={unversionedId:"TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/KondeKeLontara",id:"TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/KondeKeLontara",isDocsHomePage:!1,title:"KondeKeLontara",description:"Panduan Pindah Konde Ke Lontara",source:"@site/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/KondeKeLontara.md",slug:"/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/KondeKeLontara",permalink:"/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/KondeKeLontara",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/KondeKeLontara.md",version:"current"},l=[],c={rightToc:l};function p(n){var e=n.components,a=Object(r.a)(n,["components"]);return Object(o.a)("wrapper",Object(t.a)({},c,a,{components:e,mdxType:"MDXLayout"}),Object(o.a)("h1",{id:"panduan-pindah-konde-ke-lontara"},"Panduan Pindah Konde Ke Lontara"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Perbarui repositori BlankOn ke /etc/apt/sources.list. Ganti kata konde ke\nlontara.\ndeb ",Object(o.a)("a",Object(t.a)({parentName:"li"},{href:"http://arsip.blankonlinux.or.id/blankon"}),"http://arsip.blankonlinux.or.id/blankon")," lontara main restricted\ndeb ",Object(o.a)("a",Object(t.a)({parentName:"li"},{href:"http://arsip.blankonlinux.or.id/blankon"}),"http://arsip.blankonlinux.or.id/blankon")," lontara-updates main\nrestricted\ndeb ",Object(o.a)("a",Object(t.a)({parentName:"li"},{href:"http://security.blankonlinux.or.id/blankon"}),"http://security.blankonlinux.or.id/blankon")," lontara-security main\nrestricted"),Object(o.a)("li",{parentName:"ul"},"Perbarui basis data paket\nsudo apt-get update"),Object(o.a)("li",{parentName:"ul"},"Naikkan versi\nsudo apt-get dist-upgrade"),Object(o.a)("li",{parentName:"ul"},"Install blankon-desktop-minimalist untuk varian Minimalis dan jawab Ya\nuntuk semua pertanyaan.\nsudo apt-get install blankon-desktop-minimalist")),Object(o.a)("p",null,"KategoriDok\nLast modified on 06/17/2008 01:14:41 PM"))}p.isMDXComponent=!0}}]);