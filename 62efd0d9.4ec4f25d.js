(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{1043:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),u=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=n,g=m["".concat(i,".").concat(d)]||m[d]||b[d]||o;return t?r.a.createElement(g,c(c({ref:a},p),{},{components:t})):r.a.createElement(g,c({ref:a},p))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},439:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return u}));var n=t(3),r=t(7),o=(t(0),t(1043)),i={},c={unversionedId:"TimPengembang/Pemaket/MelihatPerubahanPaketImpor",id:"TimPengembang/Pemaket/MelihatPerubahanPaketImpor",isDocsHomePage:!1,title:"MelihatPerubahanPaketImpor",description:"MelihatPerubahanPaketImpor",source:"@site/Wiki/TimPengembang/Pemaket/MelihatPerubahanPaketImpor.md",slug:"/TimPengembang/Pemaket/MelihatPerubahanPaketImpor",permalink:"/TimPengembang/Pemaket/MelihatPerubahanPaketImpor",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Pemaket/MelihatPerubahanPaketImpor.md",version:"current"},l=[],p={rightToc:l};function u(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)("h1",{id:"melihatperubahanpaketimpor"},"MelihatPerubahanPaketImpor"),Object(o.a)("p",null,"Berikut ini adalah cara mudah untuk melihat perubahan yang telah dilakukan oleh\npemelihara paket sebelumnya.\nKeterangan: paket ",Object(o.a)("inlineCode",{parentName:"p"},"gnome-control-center")," digunakan sebagai contoh. Silakan\nterapkan pada paket yang Anda pelihara."),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Buat cabang lokal dari cabang terakhir."),Object(o.a)("pre",{parentName:"li"},Object(o.a)("code",Object(n.a)({parentName:"pre"},{}),"   $ bzr branch http://dev.blankonlinux.or.id/bzr/lontara/gnome-control-center\n")),Object(o.a)("p",{parentName:"li"},"Akan terbentuk direktori gnome-control-center yang berisi cabang saat\nini.")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Cari tahu versi yang digunakan saat itu."),Object(o.a)("pre",{parentName:"li"},Object(o.a)("code",Object(n.a)({parentName:"pre"},{}),"$ head -n1 gnome-control-center/debian/changelog.ubuntu \ngnome-control-center (1:2.21.4-0ubuntu1) hardy; urgency=low\n")),Object(o.a)("p",{parentName:"li"},"Versi yang digunakan adalah 1:2.21.4-0ubuntu1")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Download file diff asli milik Ubuntu untuk versi tersebut."),Object(o.a)("p",{parentName:"li"},"Lokasi: ",Object(o.a)("inlineCode",{parentName:"p"},"\u200bhttps://code.launchpad.net/ubuntu/+source/<paket\\>/<versi\\>")),Object(o.a)("p",{parentName:"li"},"Contoh: ",Object(o.a)("inlineCode",{parentName:"p"},"\u200bhttps://code.launchpad.net/ubuntu/+source/gnome-control-center/1:2.21.4-0ubuntu1")),Object(o.a)("p",{parentName:"li"},"File yang diunduh (link terdapat pada halaman tersebut): ",Object(o.a)("inlineCode",{parentName:"p"},"\u200bhttps://code.launchpad.net/ubuntu/hardy/+source/gnome-control-center/1:2.21.4-0ubuntu1/+files/gnome-control-center_2.21.4-0ubuntu1.diff.gz"))),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Ekstrak dan terapkan patch"),Object(o.a)("pre",{parentName:"li"},Object(o.a)("code",Object(n.a)({parentName:"pre"},{}),"zcat gnome-control-center_2.21.4-0ubuntu1.diff.gz | patch -p0\n")),Object(o.a)("p",{parentName:"li"},"Akan terbentuk direktori gnome-control-center-2.21.4 yang berisi berkas asli dari Ubuntu.")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Ubah debian/changelog agar tidak terlalu mengotori berkas diff"),Object(o.a)("pre",{parentName:"li"},Object(o.a)("code",Object(n.a)({parentName:"pre"},{}),"$ mv gnome-control-center-2.21.4/debian/changelog gnome-control-center-2.21.4/debian/changelog.ubuntu\n"))),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Buat diff"),Object(o.a)("pre",{parentName:"li"},Object(o.a)("code",Object(n.a)({parentName:"pre"},{}),"$ diff -urN -x .bzr gnome-control-center-2.21.4 gnome-control-center > blankon.diff\n")))),Object(o.a)("p",null,"Selamat mempelajari berkas ",Object(o.a)("inlineCode",{parentName:"p"},"blankon.diff")),Object(o.a)("p",null,"KategoriPemaket"),Object(o.a)("p",null,"Last modified on 06/18/2008 02:19:35 AM"),Object(o.a)("h4",{id:""}),Object(o.a)("hr",null))}u.isMDXComponent=!0}}]);