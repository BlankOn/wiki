(window.webpackJsonp=window.webpackJsonp||[]).push([[729],{1043:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var a=r.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=p(t),m=n,d=b["".concat(l,".").concat(m)]||b[m]||s[m]||i;return t?r.a.createElement(d,o(o({ref:a},c),{},{components:t})):r.a.createElement(d,o({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=b;var o={};for(var u in a)hasOwnProperty.call(a,u)&&(o[u]=a[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},798:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return u})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),i=(t(0),t(1043)),l={},o={unversionedId:"TimPengembang/Dokumentasi/Kelas/MembuatPallete",id:"TimPengembang/Dokumentasi/Kelas/MembuatPallete",isDocsHomePage:!1,title:"MembuatPallete",description:"Membuat Pallete Warna",source:"@site/Wiki/TimPengembang/Dokumentasi/Kelas/MembuatPallete.md",slug:"/TimPengembang/Dokumentasi/Kelas/MembuatPallete",permalink:"/TimPengembang/Dokumentasi/Kelas/MembuatPallete",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Kelas/MembuatPallete.md",version:"current"},u=[{value:"Alat dan Bahan:",id:"alat-dan-bahan",children:[]}],c={rightToc:u};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"membuat-pallete-warna"},"Membuat Pallete Warna"),Object(i.a)("h2",{id:"alat-dan-bahan"},"Alat dan Bahan:"),Object(i.a)("p",null,"*Alat:"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"Inkscape\nGcolor\nGedit \n")),Object(i.a)("p",null,"*Bahan:"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"Warna \n")),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Cara Membuat:")),Object(i.a)("p",null," 1.Ambil atau buat beberapa warna yang akan digunakan sebagai pallete\n2.Kemudian ambil kode warna RGB dari masing-masing warna-warna tersebut menggunakan aplikasi Gcolor\n3.Buat berkas dengan aplikasi editor teks Gedit yang berisi kode-kode warna tersebut, seperti pada contoh dibawah ini: "),Object(i.a)("p",null,"GIMP Palette\nName: Pelajaran Pallete\nColumns: 3"),Object(i.a)("h1",{id:""}),Object(i.a)("p",null,"174 49 53 Merah Tua Kalem\n209 175 135 Kuning Muda Gelap\n140 130 107 Cokelat Muda Terang\n61 60 51 Cokelat Tua Gelap\n242 240 206 Putih Tua Terang"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"catatan:")," kode warna RGB bisa didapat hasil dari aplikasi Gcolor"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"Simpan berkas diatas dengan format .gpl\nApabila pallete tersebut akan digunakan di aplikasi editor gambar vektor inkscape, salin berkas .gpl tersebut ke dalam direktori /usr/share/inkscape/palletes/\nApabila pallete akan di gunakan di aplikasi The Gimp, salin berkas .gpl kedalam direktori /usr/share/gimp/2.0/palletes/ \n")))}p.isMDXComponent=!0}}]);