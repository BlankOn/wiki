(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{1050:function(e,n,r){"use strict";r.d(n,"a",(function(){return m})),r.d(n,"b",(function(){return g}));var a=r(0),t=r.n(a);function u(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){u(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function b(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},u=Object.keys(e);for(a=0;a<u.length;a++)r=u[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)r=u[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=t.a.createContext({}),l=function(e){var n=t.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},m=function(e){var n=l(e.components);return t.a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},p=t.a.forwardRef((function(e,n){var r=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),m=l(r),p=a,g=m["".concat(i,".").concat(p)]||m[p]||c[p]||u;return r?t.a.createElement(g,o(o({ref:n},s),{},{components:r})):t.a.createElement(g,o({ref:n},s))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var u=r.length,i=new Array(u);i[0]=p;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<u;s++)i[s]=r[s];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},395:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return o})),r.d(n,"toc",(function(){return b})),r.d(n,"default",(function(){return l}));var a=r(3),t=r(7),u=(r(0),r(1050)),i={},o={unversionedId:"TimPengembang/Infrastruktur/NSD",id:"TimPengembang/Infrastruktur/NSD",isDocsHomePage:!1,title:"Name Server Daemon",description:"Name Server Daemon (NSD) merupakan sebuah DNS server authoritative, berperforma tinggi, sederhana, dan berlisensi sumber terbuka. Infrastruktur BlankOn menggunakan NSD sebagai master dan BIND sebagai slave.",source:"@site/Wiki/TimPengembang/Infrastruktur/NSD.md",sourceDirName:"TimPengembang/Infrastruktur",slug:"/TimPengembang/Infrastruktur/NSD",permalink:"/TimPengembang/Infrastruktur/NSD",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/NSD.md",version:"current",frontMatter:{}},b=[{value:"Membuat sub domain untuk blankon.in",id:"membuat-sub-domain-untuk-blankonin",children:[]}],s={toc:b};function l(e){var n=e.components,r=Object(t.a)(e,["components"]);return Object(u.b)("wrapper",Object(a.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(u.b)("p",null,"Name Server Daemon (NSD) merupakan sebuah DNS server authoritative, berperforma tinggi, sederhana, dan berlisensi sumber terbuka. Infrastruktur BlankOn menggunakan NSD sebagai master dan BIND sebagai slave."),Object(u.b)("h2",{id:"membuat-sub-domain-untuk-blankonin"},"Membuat sub domain untuk blankon.in"),Object(u.b)("p",null,"Berikut langkah untuk menambahkan sub domain untuk blankon.in. "),Object(u.b)("p",null,"Pertama login ke mesin alynne melalui protokol SSH, lalu sunting berkas berikut :"),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-bash"},"sudo vim /etc/nsd/blankon.in.zone\n")),Object(u.b)("p",null,"Konfigurasi pada berkas tersebut menggunakan sistem stanza, misal untuk membuat sub domain malang.di.blankon.in, sunting/tambahkan seperti berikut :"),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre"},".....\n$ORIGIN di.blankon.in.\nbanyumas                NS      ns1.airputih.id.\n                        NS      ns2.airputih.id.\nmalang                  A       1.2.3.4\n            AAAA    2000:2000::1\n.....\n")),Object(u.b)("p",null,"Simpan berkas konfigurasi tersebut, lalu restart NSD dengan perintah."),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-bash"},"sudo nsd-control reload blankon.in\n")),Object(u.b)("p",null,"Setelah menjalankan perintah tersebut, propagansi domain akan dimulai. Tunggu beberapa waktu hingga 2x24 jam, sampai propagansi berjalan sempurna."))}l.isMDXComponent=!0}}]);