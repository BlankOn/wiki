(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1050:function(n,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return s}));var t=a(0),r=a.n(t);function i(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function u(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function o(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){i(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function b(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},i=Object.keys(n);for(t=0;t<i.length;t++)a=i[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)a=i[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var l=r.a.createContext({}),c=function(n){var e=r.a.useContext(l),a=e;return n&&(a="function"==typeof n?n(e):o(o({},e),n)),a},p=function(n){var e=c(n.components);return r.a.createElement(l.Provider,{value:e},n.children)},g={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},k=r.a.forwardRef((function(n,e){var a=n.components,t=n.mdxType,i=n.originalType,u=n.parentName,l=b(n,["components","mdxType","originalType","parentName"]),p=c(a),k=t,s=p["".concat(u,".").concat(k)]||p[k]||g[k]||i;return a?r.a.createElement(s,o(o({ref:e},l),{},{components:a})):r.a.createElement(s,o({ref:e},l))}));function s(n,e){var a=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var i=a.length,u=new Array(i);u[0]=k;var o={};for(var b in e)hasOwnProperty.call(e,b)&&(o[b]=e[b]);o.originalType=n,o.mdxType="string"==typeof n?n:t,u[1]=o;for(var l=2;l<i;l++)u[l]=a[l];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,a)}k.displayName="MDXCreateElement"},87:function(n,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return u})),a.d(e,"metadata",(function(){return o})),a.d(e,"toc",(function(){return b})),a.d(e,"default",(function(){return c}));var t=a(3),r=a(7),i=(a(0),a(1050)),u={},o={unversionedId:"TimPengembang/Infrastruktur/PenerbitanKeyring",id:"TimPengembang/Infrastruktur/PenerbitanKeyring",isDocsHomePage:!1,title:"Penerbitan Keyring",description:"Keyring mengizinkan penyimpanan kunci (biasanya kunci publik) dalam format yang cukup portabel. Keyring dapat disuntikkan ke sistem operasi dengan tujuan sistem operasi nantinya akan mempercayai (trust) benda-benda yang telah ditandatangani oleh kunci privat pasangannya (misalnya paket atau berkas Release dari lumbung).",source:"@site/Wiki/TimPengembang/Infrastruktur/PenerbitanKeyring.md",sourceDirName:"TimPengembang/Infrastruktur",slug:"/TimPengembang/Infrastruktur/PenerbitanKeyring",permalink:"/TimPengembang/Infrastruktur/PenerbitanKeyring",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/PenerbitanKeyring.md",version:"current",frontMatter:{}},b=[{value:"blankon-keyring",id:"blankon-keyring",children:[]},{value:"blankon-role-keyring",id:"blankon-role-keyring",children:[]}],l={toc:b};function c(n){var e=n.components,a=Object(r.a)(n,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,a,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Keyring mengizinkan penyimpanan kunci (biasanya kunci publik) dalam format yang cukup portabel. Keyring dapat disuntikkan ke sistem operasi dengan tujuan sistem operasi nantinya akan mempercayai (trust) benda-benda yang telah ditandatangani oleh kunci privat pasangannya (misalnya paket atau berkas ",Object(i.b)("inlineCode",{parentName:"p"},"Release")," dari lumbung)."),Object(i.b)("p",null,"Mengenai penerbitan kunci untuk keyring, lihat ",Object(i.b)("a",{parentName:"p",href:"https://github.com/BlankOn/wiki/blob/master/TimPengembang/Infrastruktur/PenerbitanKunciLumbung.md"},"https://github.com/BlankOn/wiki/blob/master/TimPengembang/Infrastruktur/PenerbitanKunciLumbung.md")," ."),Object(i.b)("p",null,"Paket keyring yang diterbitkan ada 2 jenis, yaitu:"),Object(i.b)("h2",{id:"blankon-keyring"},"blankon-keyring"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/blankon-packages/blankon-keyring"},"https://github.com/blankon-packages/blankon-keyring")),Object(i.b)("p",null,"Wajib. Keyring yang dipaketkan ke paket ini adalah keyring dari kunci turunan yang digunakan untuk menandatangani lumbung. Paket ini perlu disiapkan setelah lumbung dibuat dan disuntikkan paling awal ke lumbung."),Object(i.b)("h2",{id:"blankon-role-keyring"},"blankon-role-keyring"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/blankon-packages/blankon-role-keyring"},"https://github.com/blankon-packages/blankon-role-keyring")),Object(i.b)("p",null,"Tidak wajib. Diterbitkan untuk mengadaptasi keyring baru (perlu penjelasan lebih lanjut)"))}c.isMDXComponent=!0}}]);