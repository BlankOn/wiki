(window.webpackJsonp=window.webpackJsonp||[]).push([[837],{1027:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return k}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=r.a.createContext({}),c=function(e){var a=r.a.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):u(u({},a),e)),t},p=function(e){var a=c(e.components);return r.a.createElement(m.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=n,k=p["".concat(b,".").concat(d)]||p[d]||o[d]||i;return t?r.a.createElement(k,u(u({ref:a},m),{},{components:t})):r.a.createElement(k,u({ref:a},m))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,b=new Array(i);b[0]=d;var u={};for(var l in a)hasOwnProperty.call(a,l)&&(u[l]=a[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,b[1]=u;for(var m=2;m<i;m++)b[m]=t[m];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},895:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return b})),t.d(a,"metadata",(function(){return u})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return c}));var n=t(2),r=t(6),i=(t(0),t(1027)),b={},u={unversionedId:"TimPengembang/Pemaket/README",id:"TimPengembang/Pemaket/README",isDocsHomePage:!1,title:"README",description:"Tentang Tim Pemaket",source:"@site/Wiki/TimPengembang/Pemaket/README.md",slug:"/TimPengembang/Pemaket/README",permalink:"/TimPengembang/Pemaket/README",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Pemaket/README.md",version:"current",sidebar:"timPengembang",previous:{title:"TimBlankOn",permalink:"/TimPengembang/TimBlankOn"},next:{title:"README",permalink:"/TimPengembang/Kesenian/README"}},l=[{value:"Cakupan tugas",id:"cakupan-tugas",children:[]},{value:"Panduan Pemula",id:"panduan-pemula",children:[]},{value:"Referensi Pemaket",id:"referensi-pemaket",children:[]}],m={rightToc:l};function c(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"tentang-tim-pemaket"},"Tentang Tim Pemaket"),Object(i.b)("p",null,"Tim yang bertugas membuat dan merawat paket - paket yang ada pada distribusi BlankOn, baik paket impor, khas, maupun paket mentah."),Object(i.b)("h3",{id:"cakupan-tugas"},"Cakupan tugas"),Object(i.b)("h4",{id:"tim-pemaket-bertugas"},"Tim Pemaket bertugas:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Membuat daftar paket yang akan masuk bibit paket."),Object(i.b)("li",{parentName:"ul"},"Membuat dan mengelola paket tersebut di bzr."),Object(i.b)("li",{parentName:"ul"},"Mendaftarkan paket ke pabrik paket.")),Object(i.b)("h3",{id:"panduan-pemula"},"Panduan Pemula"),Object(i.b)("p",null,"Untuk membantu mulai belajar membuat paket debian, tulisan - tulisan dibawah ini akan membawa Anda mempersiapkan dan mendalami pembuatan paket debian yang dapat dikontribusikan kepada proyek pengembangan BlankOn, dan sekaligus membawa Anda ikut terlibat kedalam proyek BlankOn sebagai tim Pemaket."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/wiki/Pemaket/PanduanPembuatanPaketMotu"}),"Persiapan alat")),Object(i.b)("li",{parentName:"ul"},"Administrasi"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/wiki/Pemaket/MembuatPaketDebian"}),"Pengenalan Pemaketan Debian")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/attachment/wiki/Pemaket/Panduan-Pemaketan-BlankOn.2.pdf"}),"Buku Panduan Pemaketan")),Object(i.b)("li",{parentName:"ul"},"Manajemen Pemaketan BlankOn"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://dev.blankon.id/wiki/Pemaket/PanduanPbuilderMultiARCH"}),"Pbuilder Multi ARCH"))),Object(i.b)("h3",{id:"referensi-pemaket"},"Referensi Pemaket"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.debian.org/doc/debian-policy"}),"Debian Policy Manual")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.debian.org/doc/manuals/developers-reference/"}),"Debian Developer's Reference")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.debian.org/doc/manuals/maint-guide/index.en.html"}),"Debian New Maintainers' Guide")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://developer.ubuntu.com/packaging/html/"}),"Ubuntu Packaging Guide")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://wiki.ubuntu.com/MOTU/School"}),"Ubuntu MOTU School")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://bazaar-vcs.org/Documentation"}),"Bazaar Documentation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://perso.duckcorp.org/duck/cdbs-doc/cdbs-doc.xhtml"}),"Manual CDBS"))),Object(i.b)("hr",null))}c.isMDXComponent=!0}}]);