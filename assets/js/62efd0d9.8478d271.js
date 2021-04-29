(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{1050:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return t?r.a.createElement(g,c(c({ref:n},l),{},{components:t})):r.a.createElement(g,c({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},443:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),o=(t(0),t(1050)),i={},c={unversionedId:"TimPengembang/Pemaket/MelihatPerubahanPaketImpor",id:"TimPengembang/Pemaket/MelihatPerubahanPaketImpor",isDocsHomePage:!1,title:"MelihatPerubahanPaketImpor",description:"Berikut ini adalah cara mudah untuk melihat perubahan yang telah dilakukan oleh",source:"@site/Wiki/TimPengembang/Pemaket/MelihatPerubahanPaketImpor.md",sourceDirName:"TimPengembang/Pemaket",slug:"/TimPengembang/Pemaket/MelihatPerubahanPaketImpor",permalink:"/TimPengembang/Pemaket/MelihatPerubahanPaketImpor",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Pemaket/MelihatPerubahanPaketImpor.md",version:"current",frontMatter:{}},b=[],l={toc:b};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Berikut ini adalah cara mudah untuk melihat perubahan yang telah dilakukan oleh\npemelihara paket sebelumnya.\nKeterangan: paket ",Object(o.b)("inlineCode",{parentName:"p"},"gnome-control-center")," digunakan sebagai contoh. Silakan\nterapkan pada paket yang Anda pelihara."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Buat cabang lokal dari cabang terakhir."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"   $ bzr branch http://dev.blankonlinux.or.id/bzr/lontara/gnome-control-center\n")),Object(o.b)("p",{parentName:"li"},"Akan terbentuk direktori gnome-control-center yang berisi cabang saat\nini.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Cari tahu versi yang digunakan saat itu."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ head -n1 gnome-control-center/debian/changelog.ubuntu \ngnome-control-center (1:2.21.4-0ubuntu1) hardy; urgency=low\n")),Object(o.b)("p",{parentName:"li"},"Versi yang digunakan adalah 1:2.21.4-0ubuntu1")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Download file diff asli milik Ubuntu untuk versi tersebut."),Object(o.b)("p",{parentName:"li"},"Lokasi: ",Object(o.b)("inlineCode",{parentName:"p"},"\u200bhttps://code.launchpad.net/ubuntu/+source/<paket\\>/<versi\\>")),Object(o.b)("p",{parentName:"li"},"Contoh: ",Object(o.b)("inlineCode",{parentName:"p"},"\u200bhttps://code.launchpad.net/ubuntu/+source/gnome-control-center/1:2.21.4-0ubuntu1")),Object(o.b)("p",{parentName:"li"},"File yang diunduh (link terdapat pada halaman tersebut): ",Object(o.b)("inlineCode",{parentName:"p"},"\u200bhttps://code.launchpad.net/ubuntu/hardy/+source/gnome-control-center/1:2.21.4-0ubuntu1/+files/gnome-control-center_2.21.4-0ubuntu1.diff.gz"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Ekstrak dan terapkan patch"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"zcat gnome-control-center_2.21.4-0ubuntu1.diff.gz | patch -p0\n")),Object(o.b)("p",{parentName:"li"},"Akan terbentuk direktori gnome-control-center-2.21.4 yang berisi berkas asli dari Ubuntu.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Ubah debian/changelog agar tidak terlalu mengotori berkas diff"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ mv gnome-control-center-2.21.4/debian/changelog gnome-control-center-2.21.4/debian/changelog.ubuntu\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Buat diff"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ diff -urN -x .bzr gnome-control-center-2.21.4 gnome-control-center > blankon.diff\n")))),Object(o.b)("p",null,"Selamat mempelajari berkas ",Object(o.b)("inlineCode",{parentName:"p"},"blankon.diff")),Object(o.b)("p",null,"KategoriPemaket"),Object(o.b)("p",null,"Last modified on 06/18/2008 02:19:35 AM"),Object(o.b)("h4",{id:""}),Object(o.b)("hr",null))}p.isMDXComponent=!0}}]);