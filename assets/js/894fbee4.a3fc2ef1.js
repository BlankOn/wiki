(window.webpackJsonp=window.webpackJsonp||[]).push([[514],{1050:function(n,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return s}));var r=a(0),t=a.n(r);function i(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function u(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,r)}return a}function l(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){i(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function o(n,e){if(null==n)return{};var a,r,t=function(n,e){if(null==n)return{};var a,r,t={},i=Object.keys(n);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(t[a]=n[a]);return t}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(t[a]=n[a])}return t}var c=t.a.createContext({}),b=function(n){var e=t.a.useContext(c),a=e;return n&&(a="function"==typeof n?n(e):l(l({},e),n)),a},p=function(n){var e=b(n.components);return t.a.createElement(c.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.a.createElement(t.a.Fragment,{},e)}},m=t.a.forwardRef((function(n,e){var a=n.components,r=n.mdxType,i=n.originalType,u=n.parentName,c=o(n,["components","mdxType","originalType","parentName"]),p=b(a),m=r,s=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return a?t.a.createElement(s,l(l({ref:e},c),{},{components:a})):t.a.createElement(s,l({ref:e},c))}));function s(n,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=a.length,u=new Array(i);u[0]=m;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=n,l.mdxType="string"==typeof n?n:r,u[1]=l;for(var c=2;c<i;c++)u[c]=a[c];return t.a.createElement.apply(null,u)}return t.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},584:function(n,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return u})),a.d(e,"metadata",(function(){return l})),a.d(e,"toc",(function(){return o})),a.d(e,"default",(function(){return b}));var r=a(3),t=a(7),i=(a(0),a(1050)),u={},l={unversionedId:"TimPengembang/Dokumentasi/Panduan/PanduanUnduh",id:"TimPengembang/Dokumentasi/Panduan/PanduanUnduh",isDocsHomePage:!1,title:"Panduan Mengunduh",description:"Mengunduh file ISO",source:"@site/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanUnduh.md",sourceDirName:"TimPengembang/Dokumentasi/Panduan",slug:"/TimPengembang/Dokumentasi/Panduan/PanduanUnduh",permalink:"/TimPengembang/Dokumentasi/Panduan/PanduanUnduh",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanUnduh.md",version:"current",frontMatter:{}},o=[],c={toc:o};function b(n){var e=n.components,a=Object(t.a)(n,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,a,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Mengunduh file ISO")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"* seluruh kategori : \u200bhttp://cdimage.blankonlinux.or.id/blankon\n")),Object(i.b)("p",null,"Update untuk ISO ini akan diumumkan melalui \u200bmilis_BlankOn secara berkala. Cek md5sum Untuk melakukan cek md5sum dari ISO anda, buka terminal dan lakukan:\nmd5sum namaISO.iso"),Object(i.b)("p",null,"Dimana namaISO.iso adalah nama ISO installer yang telah anda unduh dan akan di\nverifikasi. Nilai referensi dapat ditemukan di dalam berkas bernama MD5SUMS di\ndalam direktori unduh dari ISO tersebut."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Rsync BlankOn")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"* Seluruh cetakan cd / ISO BlankOn dan racikan BlankOn => untuk cermin\n")),Object(i.b)("p",null,"rsync -avzlH --delete-after cdimage.blankonlinux.or.id::blankon/ ."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"* ISO jahitan harian blankon cdlive terbaru\n")),Object(i.b)("p",null,"rsync -avz --progress --partial cdimage.blankonlinux.or.id::cdimage/livecd-\nharian/current/\\<NAMA-CD.iso",">"," ."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"* Seluruh ISO rilis proyek BlankOn\n")),Object(i.b)("p",null,"rsync -avzlH --delete-after cdimage.blankonlinux.or.id::rilis/ ."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"* ISO rilis BlankOn\n")),Object(i.b)("p",null,"rsync -avz --progress --partial cdimage.blankonlinux.or.id::rilis/\\<VERSI",">","/\n\\<NAMA-CD.iso",">"," ."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Rsync Racikan BlankOn")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"* ISO jahitan harian racikan BlankOn cdlive terbaru\n")),Object(i.b)("p",null,"rsync -avz --progress --partial cdimage.blankonlinux.or.id::blankon/\\<NAMA-\nRACIKAN",">","/current/\\<NAMA-CD.iso",">"," ."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"* ISO rilis BlankOn\n")),Object(i.b)("p",null,"rsync -avz --progress --partial cdimage.blankonlinux.or.id::rilis/\\<NAMA-\nRACIKAN",">","/\\<VERSI",">","/\\<NAMA-CD.iso",">"," ."))}b.isMDXComponent=!0}}]);