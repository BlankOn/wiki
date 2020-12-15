(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{1043:function(e,n,a){"use strict";a.d(n,"a",(function(){return p}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function u(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?u(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var n=r.a.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=s(a),p=t,g=b["".concat(u,".").concat(p)]||b[p]||m[p]||i;return a?r.a.createElement(g,o(o({ref:n},c),{},{components:a})):r.a.createElement(g,o({ref:n},c))}));function p(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,u=new Array(i);u[0]=b;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,u[1]=o;for(var c=2;c<i;c++)u[c]=a[c];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},391:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return u})),a.d(n,"metadata",(function(){return o})),a.d(n,"rightToc",(function(){return l})),a.d(n,"default",(function(){return s}));var t=a(3),r=a(7),i=(a(0),a(1043)),u={},o={unversionedId:"TimPengembang/Infrastruktur/NSD",id:"TimPengembang/Infrastruktur/NSD",isDocsHomePage:!1,title:"NSD",description:"Name Server Daemon",source:"@site/Wiki/TimPengembang/Infrastruktur/NSD.md",slug:"/TimPengembang/Infrastruktur/NSD",permalink:"/TimPengembang/Infrastruktur/NSD",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/NSD.md",version:"current"},l=[{value:"Membuat sub domain untuk blankon.in",id:"membuat-sub-domain-untuk-blankonin",children:[]}],c={rightToc:l};function s(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(t.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"name-server-daemon"},"Name Server Daemon"),Object(i.a)("p",null,"Name Server Daemon (NSD) merupakan sebuah DNS server authoritative, berperforma tinggi, sederhana, dan berlisensi sumber terbuka. Infrastruktur BlankOn menggunakan NSD sebagai master dan BIND sebagai slave."),Object(i.a)("h2",{id:"membuat-sub-domain-untuk-blankonin"},"Membuat sub domain untuk blankon.in"),Object(i.a)("p",null,"Berikut langkah untuk menambahkan sub domain untuk blankon.in. "),Object(i.a)("p",null,"Pertama login ke mesin alynne melalui protokol SSH, lalu sunting berkas berikut :"),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"sudo vim /etc/nsd/blankon.in.zone\n")),Object(i.a)("p",null,"Konfigurasi pada berkas tersebut menggunakan sistem stanza, misal untuk membuat sub domain malang.di.blankon.in, sunting/tambahkan seperti berikut :"),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),".....\n$ORIGIN di.blankon.in.\nbanyumas                NS      ns1.airputih.id.\n                        NS      ns2.airputih.id.\nmalang                  A       1.2.3.4\n            AAAA    2000:2000::1\n.....\n")),Object(i.a)("p",null,"Simpan berkas konfigurasi tersebut, lalu restart NSD dengan perintah."),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"sudo nsd-control reload blankon.in\n")),Object(i.a)("p",null,"Setelah menjalankan perintah tersebut, propagansi domain akan dimulai. Tunggu beberapa waktu hingga 2x24 jam, sampai propagansi berjalan sempurna."))}s.isMDXComponent=!0}}]);