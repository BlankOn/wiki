(window.webpackJsonp=window.webpackJsonp||[]).push([[797],{1043:function(a,n,e){"use strict";e.d(n,"a",(function(){return b}));var i=e(0),t=e.n(i);function r(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function o(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,i)}return e}function l(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){r(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function u(a,n){if(null==a)return{};var e,i,t=function(a,n){if(null==a)return{};var e,i,t={},r=Object.keys(a);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(t[e]=a[e]);return t}(a,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(t[e]=a[e])}return t}var p=t.a.createContext({}),m=function(a){var n=t.a.useContext(p),e=n;return a&&(e="function"==typeof a?a(n):l(l({},n),a)),e},d={inlineCode:"code",wrapper:function(a){var n=a.children;return t.a.createElement(t.a.Fragment,{},n)}},k=t.a.forwardRef((function(a,n){var e=a.components,i=a.mdxType,r=a.originalType,o=a.parentName,p=u(a,["components","mdxType","originalType","parentName"]),k=m(e),b=i,c=k["".concat(o,".").concat(b)]||k[b]||d[b]||r;return e?t.a.createElement(c,l(l({ref:n},p),{},{components:e})):t.a.createElement(c,l({ref:n},p))}));function b(a,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof a||i){var r=e.length,o=new Array(r);o[0]=k;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=a,l.mdxType="string"==typeof a?a:i,o[1]=l;for(var p=2;p<r;p++)o[p]=e[p];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},866:function(a,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return o})),e.d(n,"metadata",(function(){return l})),e.d(n,"rightToc",(function(){return u})),e.d(n,"default",(function(){return m}));var i=e(3),t=e(7),r=(e(0),e(1043)),o={},l={unversionedId:"TimPengembang/Kesenian/PedomanIkon",id:"TimPengembang/Kesenian/PedomanIkon",isDocsHomePage:!1,title:"PedomanIkon",description:"Pedoman Ikon",source:"@site/Wiki/TimPengembang/Kesenian/PedomanIkon.md",slug:"/TimPengembang/Kesenian/PedomanIkon",permalink:"/TimPengembang/Kesenian/PedomanIkon",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Kesenian/PedomanIkon.md",version:"current"},u=[{value:"Pedoman Ikon",id:"pedoman-ikon",children:[{value:"Ikon peluncur aplikasi",id:"ikon-peluncur-aplikasi",children:[]},{value:"Ikon notifikasi",id:"ikon-notifikasi",children:[]},{value:"Ikon bilah alat",id:"ikon-bilah-alat",children:[]}]}],p={rightToc:u};function m(a){var n=a.components,e=Object(t.a)(a,["components"]);return Object(r.a)("wrapper",Object(i.a)({},p,e,{components:n,mdxType:"MDXLayout"}),Object(r.a)("h2",{id:"pedoman-ikon"},"Pedoman Ikon"),Object(r.a)("p",null,"Ikon-ikon yang memiliki pola dan gaya yang senada akan menambah nilai BlankOn\ndari sisi antar muka. Saat ini ikon BlankOn diturunkan dari gugus ikon \u200bFaenza.\nDokumen ini dibuat sebagai pedoman bagi pembuat ikon di proyek BlankOn."),Object(r.a)("h3",{id:"ikon-peluncur-aplikasi"},"Ikon peluncur aplikasi"),Object(r.a)("p",null,"Ikon peluncur aplikasi adalah ikon-ikon yang tampil di peluncur aplikasi\nBlankOn dan di peramban berkas. Ikon menggambarkan aplikasi atau jenis berkas\nyang ditampilkan. Gaya umum ikon ini adalah bujur sangkar dengan ujung-ujung\nmembulat, arah sinar dari atas, memiliki bayangan, dan diisi dengan gambar\nmetafor di tengah-tengah ikon."),Object(r.a)("p",null,"[/raw-attachment/wiki/Kesenian/PedomanIkon/ikon-peluncur.png]"),Object(r.a)("p",null,"Ikon dibuat dari empat komponen utama, yaitu metafor (A), batas metafor (B),\nbingkai (C), dan kanvas (D)."),Object(r.a)("p",null,"Metafor merupakan gambar yang mewakili peluncur. Metafor dibuat dengan ukuran\nminimal sebesar area A dan tidak boleh menembus ke C. Metafor dibuat dengan\ntampak depan tanpa perspektif dan diberi arah sinar dari atas. Batas metafor\nmerupakan area perbatasan antara metafor dan bingkai. Boleh diisi dengan warna\ndan tekstur detil. Bingkai merupakan area sebagai penjelas antara kanvas dan\nmetafor. Ujung-ujungnya dibuat bulat. Kanvas merupakan area kosong transparan\ntempat bayangan bingkai berada."),Object(r.a)("p",null,"Dalam templat 96x96 pixel, berikut adalah angka pedoman komponen:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"bulatan ujung-ujung bingkai (rx dan ry di Inkscape): 5 pixel"),Object(r.a)("li",{parentName:"ul"},"lebar A: 55 pixel"),Object(r.a)("li",{parentName:"ul"},"lebar B: 65 pixel"),Object(r.a)("li",{parentName:"ul"},"lebar C: 80 pixel"),Object(r.a)("li",{parentName:"ul"},"lebar D: 96 pixel")),Object(r.a)("h3",{id:"ikon-notifikasi"},"Ikon notifikasi"),Object(r.a)("p",null,"[/raw-attachment/wiki/Kesenian/PedomanIkon/ikon-lain.png]"),Object(r.a)("p",null,"Gaya umum ikon notifikasi adalah sederhana. Ikon ini muncul di notifikasi\nBlankOn Panel. Ikon dibuat dari 2 komponen, yaitu metafor (A) dan kanvas (B).\nMetafor menggambarkan notifikasi yang diwakili. Gambar dibuat tampak muka tanpa\nperspektif, skala abu-abu, tanpa bayangan, dan tidak detil. Metafor tidak\nmemiliki bingkai. Kanvas kosong."),Object(r.a)("p",null,"Dalam templat 96x96 pixel, berikut adalah angka pedoman komponen:"),Object(r.a)("pre",null,Object(r.a)("code",Object(i.a)({parentName:"pre"},{}),"* lebar A: 80 pixel\n* lebar B: 96 pixel\n")),Object(r.a)("h3",{id:"ikon-bilah-alat"},"Ikon bilah alat"),Object(r.a)("p",null,"Gaya umum ikon bilah alat adalah paduan ikon notifikasi dan peluncur. Ikon ini\nmuncul pada bilah alat (toolbar). Ikon dibuat dari 2 komponen, yaitu metafor\n(A) dan kanvas (B)."),Object(r.a)("p",null,"Metafor menggambarkan notifikasi yang diwakili. Gambar dibuat tampak muka tanpa\nperspektif, boleh dengan bayangan (namun harus konsisten dengan ikon-ikon lain\ndalam gugus), dan detil. Metafor tidak memiliki bingkai. Kanvas kosong.\nDalam templat 96x96 pixel, berikut adalah angka pedoman komponen:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"lebar A: 80 pixel"),Object(r.a)("li",{parentName:"ul"},"lebar B: 96 pixel")),Object(r.a)("p",null,"Last modified on 09/28/2011 03:48:53 AM"),Object(r.a)("h4",{id:"attachments-3"},"Attachments (3)"),Object(r.a)("pre",null,Object(r.a)("code",Object(i.a)({parentName:"pre"},{}),"* ikon-templat.svg\u200b (26.0 KB) - added by mdamt 6 years ago.\n* ikon-peluncur.png\u200b (14.7 KB) - added by mdamt 6 years ago.\n* ikon-lain.png\u200b (17.0 KB) - added by mdamt 6 years ago.\n")),Object(r.a)("hr",null))}m.isMDXComponent=!0}}]);