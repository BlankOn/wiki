(window.webpackJsonp=window.webpackJsonp||[]).push([[854],{1043:function(e,n,a){"use strict";a.d(n,"a",(function(){return u}));var t=a(0),r=a.n(t);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),d=function(e){var n=r.a.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),u=t,s=m["".concat(i,".").concat(u)]||m[u]||b[u]||o;return a?r.a.createElement(s,c(c({ref:n},p),{},{components:a})):r.a.createElement(s,c({ref:n},p))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},923:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return c})),a.d(n,"rightToc",(function(){return l})),a.d(n,"default",(function(){return d}));var t=a(3),r=a(7),o=(a(0),a(1043)),i={},c={unversionedId:"TimPengembang/Pemaket/PatchingLocale",id:"TimPengembang/Pemaket/PatchingLocale",isDocsHomePage:!1,title:"PatchingLocale",description:"Patching Locale",source:"@site/Wiki/TimPengembang/Pemaket/PatchingLocale.md",slug:"/TimPengembang/Pemaket/PatchingLocale",permalink:"/TimPengembang/Pemaket/PatchingLocale",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Pemaket/PatchingLocale.md",version:"current"},l=[],p={rightToc:l};function d(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(t.a)({},p,a,{components:n,mdxType:"MDXLayout"}),Object(o.a)("img",{src:"https://badgen.net/badge/wiki/kadaluarsa/red?icon=github"}),Object(o.a)("h1",{id:"patching-locale"},"Patching Locale"),Object(o.a)("p",null,"lokakarya patch locale @IRC 23-2-2011"),Object(o.a)("h1",{id:"contoh-kasus--gdm"},"contoh kasus : GDM"),Object(o.a)("p",null,"buat folder 1\nlakukan branch dari bzr blankon"),Object(o.a)("h1",{id:"bzr-branch-httpdevblankonlinuxoridbzrpattimuragdm"},"bzr branch \u200b",Object(o.a)("a",Object(t.a)({parentName:"h1"},{href:"http://dev.blankonlinux.or.id/bzr/pattimura/gdm"}),"http://dev.blankonlinux.or.id/bzr/pattimura/gdm")),Object(o.a)("p",null,"buat folder 2\npasang deb-src \u200b",Object(o.a)("a",Object(t.a)({parentName:"p"},{href:"http://arsip-dev.blankonlinux.or.id/blankon"}),"http://arsip-dev.blankonlinux.or.id/blankon")," pattimura main\nrestricted extras extras-restricted\nsudo apt-get update\napt-get source gdm\nhasil =>> akan ada hasil folder gdm-2.32-0\ncopy folder tsb menjadi berakhiran .orig\ncommand =>> cp -r gdm-232.0 gdm-232.0.orig\nkembali ke folder 2\ncommand =>> cd gdm-2.32.0\nubah di file yang memuat pendefinisian (Makefile.am)\ncommand =>> nano Makefile.am\nhapus baris pendefinisian locale\npo /\nkeluar dari folder gdm-2.32.0 ke folder 2"),Object(o.a)("h1",{id:"diff--naur-gdm-2320orig-gdm-2320--blankon_no_popatch"},"diff -Naur gdm-2.32.0.orig gdm-2.32.0 > blankon_no_po.patch"),Object(o.a)("p",null,'kembali ke folder 1\n"blankon_no_po.patch" (sesuai nama patch)\nditambahkan ke folder 1/debian/patches/series'),Object(o.a)("h1",{id:"copy-kan-blankon_no_popatch-ke-folder1debianpatches"},"copy kan blankon_no_po.patch ke folder1/debian/patches"),Object(o.a)("p",null,'lakukan pengiriman paket seperti biasa\ndch -i\nbzr add *\nbzr commit -m "pesan"\nbzr tag\nbzr push\nLast modified on 02/23/2011 09:33:48 PM'),Object(o.a)("h4",{id:""}),Object(o.a)("hr",null))}d.isMDXComponent=!0}}]);