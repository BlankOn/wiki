(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{1050:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),b=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(t),m=a,d=p["".concat(u,".").concat(m)]||p[m]||s[m]||i;return t?r.a.createElement(d,o(o({ref:n},l),{},{components:t})):r.a.createElement(d,o({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,u=new Array(i);u[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var l=2;l<i;l++)u[l]=t[l];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},279:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),i=(t(0),t(1050)),u={},o={unversionedId:"TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/MeuligoeKeNanggar",id:"TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/MeuligoeKeNanggar",isDocsHomePage:!1,title:"Panduan Pindah dari Meuligoe ke Nanggar",description:"* Perbaharui repositori BlankOn di /etc/apt/sources.list. Isi berkas",source:"@site/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/MeuligoeKeNanggar.md",sourceDirName:"TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran",slug:"/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/MeuligoeKeNanggar",permalink:"/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/MeuligoeKeNanggar",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/MeuligoeKeNanggar.md",version:"current",frontMatter:{}},c=[],l={toc:c};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Perbaharui repositori BlankOn di /etc/apt/sources.list. Isi berkas\ntersebut dengan baris-baris berikut\ndeb ",Object(i.b)("a",{parentName:"li",href:"http://arsip.blankonlinux.or.id/blankon"},"http://arsip.blankonlinux.or.id/blankon")," nanggar main restricted\ndeb ",Object(i.b)("a",{parentName:"li",href:"http://arsip.blankonlinux.or.id/blankon"},"http://arsip.blankonlinux.or.id/blankon")," nanggar-updates main\nrestricted\ndeb ",Object(i.b)("a",{parentName:"li",href:"http://security.blankonlinux.or.id/blankon"},"http://security.blankonlinux.or.id/blankon")," nanggar-security main\nrestricted\ndeb ",Object(i.b)("a",{parentName:"li",href:"http://id.archive.ubuntu.com/ubuntu"},"http://id.archive.ubuntu.com/ubuntu")," jaunty main restricted universe\nmultiverse\ndeb ",Object(i.b)("a",{parentName:"li",href:"http://id.archive.ubuntu.com/ubuntu"},"http://id.archive.ubuntu.com/ubuntu")," jaunty-updates main restricted\nuniverse multiverse\ndeb ",Object(i.b)("a",{parentName:"li",href:"http://security.ubuntu.com/ubuntu"},"http://security.ubuntu.com/ubuntu")," jaunty-security main restricted\nuniverse multiverse",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Perbaharui basis data paket\nsudo apt-get update"),Object(i.b)("li",{parentName:"ul"},"Naikkan versi\n",Object(i.b)("inlineCode",{parentName:"li"}," sudo apt-get upgrade"),"\nsudo apt-get dist-upgrade"),Object(i.b)("li",{parentName:"ul"},"Naikan versi tanpa perlu konfirmasi dari user\n",Object(i.b)("inlineCode",{parentName:"li"},"sudo apt-get--force-yes--yes dist-upgrade"),"\nLast modified on 05/03/2009 09:01:07 PM\n")))),Object(i.b)("hr",null))}b.isMDXComponent=!0}}]);