"use strict";(self.webpackChunkdocusaurus_wiki=self.webpackChunkdocusaurus_wiki||[]).push([[3028],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return s}});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=a.createContext({}),k=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):u(u({},e),n)),t},p=function(n){var e=k(n.components);return a.createElement(l.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,l=n.parentName,p=o(n,["components","mdxType","originalType","parentName"]),g=k(t),s=r,b=g["".concat(l,".").concat(s)]||g[s]||c[s]||i;return t?a.createElement(b,u(u({ref:e},p),{},{components:t})):a.createElement(b,u({ref:e},p))}));function s(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,u=new Array(i);u[0]=g;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=n,o.mdxType="string"==typeof n?n:r,u[1]=o;for(var k=2;k<i;k++)u[k]=t[k];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},87157:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return o},metadata:function(){return k},toc:function(){return c}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),u=["components"],o={},l="Penerbitan Keyring",k={unversionedId:"TimPengembang/Infrastruktur/PenerbitanKeyring",id:"TimPengembang/Infrastruktur/PenerbitanKeyring",title:"Penerbitan Keyring",description:"Keyring mengizinkan penyimpanan kunci (biasanya kunci publik) dalam format yang cukup portabel. Keyring dapat disuntikkan ke sistem operasi dengan tujuan sistem operasi nantinya akan mempercayai (trust) benda-benda yang telah ditandatangani oleh kunci privat pasangannya (misalnya paket atau berkas Release dari lumbung).",source:"@site/wiki/TimPengembang/Infrastruktur/PenerbitanKeyring.md",sourceDirName:"TimPengembang/Infrastruktur",slug:"/TimPengembang/Infrastruktur/PenerbitanKeyring",permalink:"/TimPengembang/Infrastruktur/PenerbitanKeyring",draft:!1,editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Infrastruktur/PenerbitanKeyring.md",tags:[],version:"current",frontMatter:{}},p={},c=[{value:"blankon-keyring",id:"blankon-keyring",level:2},{value:"blankon-role-keyring",id:"blankon-role-keyring",level:2}],g={toc:c};function s(n){var e=n.components,t=(0,r.Z)(n,u);return(0,i.kt)("wrapper",(0,a.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"penerbitan-keyring"},"Penerbitan Keyring"),(0,i.kt)("p",null,"Keyring mengizinkan penyimpanan kunci (biasanya kunci publik) dalam format yang cukup portabel. Keyring dapat disuntikkan ke sistem operasi dengan tujuan sistem operasi nantinya akan mempercayai (trust) benda-benda yang telah ditandatangani oleh kunci privat pasangannya (misalnya paket atau berkas ",(0,i.kt)("inlineCode",{parentName:"p"},"Release")," dari lumbung)."),(0,i.kt)("p",null,"Mengenai penerbitan kunci untuk keyring, lihat ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/BlankOn/wiki/blob/master/TimPengembang/Infrastruktur/PenerbitanKunciLumbung.md"},"https://github.com/BlankOn/wiki/blob/master/TimPengembang/Infrastruktur/PenerbitanKunciLumbung.md")," ."),(0,i.kt)("p",null,"Paket keyring yang diterbitkan ada 2 jenis, yaitu:"),(0,i.kt)("h2",{id:"blankon-keyring"},"blankon-keyring"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/blankon-packages/blankon-keyring"},"https://github.com/blankon-packages/blankon-keyring")),(0,i.kt)("p",null,"Wajib. Keyring yang dipaketkan ke paket ini adalah keyring dari kunci turunan yang digunakan untuk menandatangani lumbung. Paket ini perlu disiapkan setelah lumbung dibuat dan disuntikkan paling awal ke lumbung."),(0,i.kt)("h2",{id:"blankon-role-keyring"},"blankon-role-keyring"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/blankon-packages/blankon-role-keyring"},"https://github.com/blankon-packages/blankon-role-keyring")),(0,i.kt)("p",null,"Tidak wajib. Diterbitkan untuk mengadaptasi keyring baru (perlu penjelasan lebih lanjut)"))}s.isMDXComponent=!0}}]);