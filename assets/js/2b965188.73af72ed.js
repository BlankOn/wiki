(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{1050:function(n,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return k}));var r=a(0),t=a.n(r);function i(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function o(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,r)}return a}function p(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function u(n,e){if(null==n)return{};var a,r,t=function(n,e){if(null==n)return{};var a,r,t={},i=Object.keys(n);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(t[a]=n[a]);return t}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(t[a]=n[a])}return t}var l=t.a.createContext({}),c=function(n){var e=t.a.useContext(l),a=e;return n&&(a="function"==typeof n?n(e):p(p({},e),n)),a},s=function(n){var e=c(n.components);return t.a.createElement(l.Provider,{value:e},n.children)},b={inlineCode:"code",wrapper:function(n){var e=n.children;return t.a.createElement(t.a.Fragment,{},e)}},d=t.a.forwardRef((function(n,e){var a=n.components,r=n.mdxType,i=n.originalType,o=n.parentName,l=u(n,["components","mdxType","originalType","parentName"]),s=c(a),d=r,k=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return a?t.a.createElement(k,p(p({ref:e},l),{},{components:a})):t.a.createElement(k,p({ref:e},l))}));function k(n,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=n,p.mdxType="string"==typeof n?n:r,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},260:function(n,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return p})),a.d(e,"toc",(function(){return u})),a.d(e,"default",(function(){return c}));var r=a(3),t=a(7),i=(a(0),a(1050)),o={},p={unversionedId:"ProdukBlankOn/BlankBerry/BlankBerryMembangunPaket",id:"ProdukBlankOn/BlankBerry/BlankBerryMembangunPaket",isDocsHomePage:!1,title:"Membangun Paket BlankBerry",description:"Untuk menyiapkan sistem BlankBerry, kita gunakan paket-paket dasar dari proyek",source:"@site/Wiki/ProdukBlankOn/BlankBerry/BlankBerryMembangunPaket.md",sourceDirName:"ProdukBlankOn/BlankBerry",slug:"/ProdukBlankOn/BlankBerry/BlankBerryMembangunPaket",permalink:"/ProdukBlankOn/BlankBerry/BlankBerryMembangunPaket",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/ProdukBlankOn/BlankBerry/BlankBerryMembangunPaket.md",version:"current",frontMatter:{}},u=[{value:"Daftar Paket",id:"daftar-paket",children:[{value:"Cara pembangunan",id:"cara-pembangunan",children:[]}]}],l={toc:u};function c(n){var e=n.components,a=Object(t.a)(n,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Untuk menyiapkan sistem BlankBerry, kita gunakan paket-paket dasar dari proyek\nRaspbian. Ada beberapa paket BlankOn yang perlu dibangun ulang dan dipasang di\natas Raspbian untuk mendapatkan sistem BlankBerry."),Object(i.b)("h2",{id:"daftar-paket"},"Daftar Paket"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"* manokwari\n* gnome-session\n* metacity\n* base-files\n")),Object(i.b)("h3",{id:"cara-pembangunan"},"Cara pembangunan"),Object(i.b)("h4",{id:"prasyarat"},"Prasyarat"),Object(i.b)("p",null,"Anda sudah mahir membuat sistem chroot dengan debootstrap dan tahu cara\nmenggunakannya."),Object(i.b)("h4",{id:"tahap-i"},"Tahap I"),Object(i.b)("p",null,"Tahap pertama adalah menyiapkan sistem pembangunan.\nsudo qemu-debootstrap --arch armhf rote blankberry-dev http://arsip-\ndev.blankonlinux.or.id/raspbian /usr/share/debootstrap/scripts/wheezy\nSiapkan sources.list dengan konfigurasi:\ndeb ",Object(i.b)("a",{parentName:"p",href:"http://arsip-dev.blankonlinux.or.id/raspbian"},"http://arsip-dev.blankonlinux.or.id/raspbian")," rote main\ndeb-src ",Object(i.b)("a",{parentName:"p",href:"http://arsip.blankonlinux.or.id/blankon"},"http://arsip.blankonlinux.or.id/blankon")," rote main"),Object(i.b)("h4",{id:"tahap-ii"},"Tahap II"),Object(i.b)("p",null,"Bangun ulang paket-paket di atas di dalam chroot, gunakan perintah apt-get\nsource. Hasil pembangunan bisa langsung dipasang di dalam sistem Raspbian.\nLast modified on 09/20/2012 02:29:59 PM"),Object(i.b)("h4",{id:""}))}c.isMDXComponent=!0}}]);