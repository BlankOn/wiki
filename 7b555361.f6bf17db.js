(window.webpackJsonp=window.webpackJsonp||[]).push([[467],{1043:function(a,n,e){"use strict";e.d(n,"a",(function(){return m}));var i=e(0),t=e.n(i);function r(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function u(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,i)}return e}function l(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){r(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function d(a,n){if(null==a)return{};var e,i,t=function(a,n){if(null==a)return{};var e,i,t={},r=Object.keys(a);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(t[e]=a[e]);return t}(a,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(t[e]=a[e])}return t}var s=t.a.createContext({}),k=function(a){var n=t.a.useContext(s),e=n;return a&&(e="function"==typeof a?a(n):l(l({},n),a)),e},o={inlineCode:"code",wrapper:function(a){var n=a.children;return t.a.createElement(t.a.Fragment,{},n)}},p=t.a.forwardRef((function(a,n){var e=a.components,i=a.mdxType,r=a.originalType,u=a.parentName,s=d(a,["components","mdxType","originalType","parentName"]),p=k(e),m=i,c=p["".concat(u,".").concat(m)]||p[m]||o[m]||r;return e?t.a.createElement(c,l(l({ref:n},s),{},{components:e})):t.a.createElement(c,l({ref:n},s))}));function m(a,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof a||i){var r=e.length,u=new Array(r);u[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=a,l.mdxType="string"==typeof a?a:i,u[1]=l;for(var s=2;s<r;s++)u[s]=e[s];return t.a.createElement.apply(null,u)}return t.a.createElement.apply(null,e)}p.displayName="MDXCreateElement"},534:function(a,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return u})),e.d(n,"metadata",(function(){return l})),e.d(n,"rightToc",(function(){return d})),e.d(n,"default",(function(){return k}));var i=e(3),t=e(7),r=(e(0),e(1043)),u={},l={unversionedId:"TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanInkscape/PanduanInkscapeBab5-FlatColors",id:"TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanInkscape/PanduanInkscapeBab5-FlatColors",isDocsHomePage:!1,title:"PanduanInkscapeBab5-FlatColors",description:"Bab 5-FlatColors",source:"@site/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanInkscape/PanduanInkscapeBab5-FlatColors.md",slug:"/TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanInkscape/PanduanInkscapeBab5-FlatColors",permalink:"/TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanInkscape/PanduanInkscapeBab5-FlatColors",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanInkscape/PanduanInkscapeBab5-FlatColors.md",version:"current"},d=[{value:"5.2. Flat (Solid) Colors",id:"52-flat-solid-colors",children:[]}],s={rightToc:d};function k(a){var n=a.components,e=Object(t.a)(a,["components"]);return Object(r.a)("wrapper",Object(i.a)({},s,e,{components:n,mdxType:"MDXLayout"}),Object(r.a)("h1",{id:"bab-5-flatcolors"},"Bab 5-FlatColors"),Object(r.a)("p",null,"[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Mundur.png][/\nraw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Maju.png]"),Object(r.a)("h3",{id:"52-flat-solid-colors"},"5.2. Flat (Solid) Colors"),Object(r.a)("p",null,"Color atau warna dapat menjadi aspek dari yang paling sederhana sampai yang\npaling rumit pada sebuah gambar. Pada program Inkscape warna disimpan secara\ninternal sebagai angka hexadesimal enam digit yang masing-masing diwakili\ndengan tiga digit. Setiap pasang warna sesuai dengan jumlah angka pada Red,\nGreen, Blue (RGB). Hal ini sesuai dengan spesifikasi SVG untuk menggambarkan\nwarna. Misalnya, sebuah object memiliki warna sebagai #FF7F00 maka komponen RGB\nmemiliki nilai maksimum dengan rincian berikut: Red 100% (nilainya 255), Green\n50% (nilainya 127), dan Blue 0% (nilainya 0). Dalam beberapa kasus ditambahkan\npasangan keempat yang digunakan untuk menggambarkan Alpha (RGBA). Atribut A\natau Alpha mungkin tidak akrab bagi banyak orang, Atribut ini digunakan untuk\nmenetukan transparan fill pada object, nilai yang digunakan antara 0 sampai\ndengan 255, 0 mewakili transparan secara maksimal, sedangkan 255 sama dengan\nopacity lengkap atau warna maksimal."),Object(r.a)("h4",{id:"521-pengaturan-warna-fill-and-stroke"},"5.2.1. Pengaturan Warna Fill and Stroke"),Object(r.a)("p",null,"Saat menggunakan warna flat, maka warna Fill and Stroke untuk suatu object\nditentukan oleh paint, tab pengaturan Fill and Stroke terdiri dari lima sub-\ntab, setiap sub-tab memiliki metode dan cara yang berbeda untuk memilih dan\nmenentukan warna yang akan diterapkan. Warna pada object dapat dipilih dan\ndiatur dengan beberapa cara diantaranya: menggeser slider (segitiga kecil) ke\narah kiri atau kanan sesuai warna yang akan dipakai, mengisi nilai tertentu\npada kotak isian yang tersedia, melakukan klik pada salah satu dari dua\nsegitiga yang mengarah ke atas-bawah disebelah kanan kotak isian. Cara lain\ndapat dilakukan dengan meletakkan kursor pada kotak isian kemudian menggeser\ntombol tengah pada mouse (scroll) atau menekan tombol panah atas-bawah pada\nkeyboard, cara ini dapat diterapkan pada semua sub-tab kecuali sub-tab Whell ."),Object(r.a)("h6",{id:"5211-rgb"},"5.2.1.1. RGB"),Object(r.a)("p",null,"RGB (Red, Green, Biru) adalah sebuah metode untuk menentukan warna dengan tiga\nwarna primer aditif. Hal ini merupakan metode yang paling umum pada layar\nkomputer (warna aditif). Rentang nilai yang diperbolehkan adalah dari 0 sampai\n255 (0 sampai FF dalam hexadecimal)."),Object(r.a)("h6",{id:"5212-hsl"},"5.2.1.2. HSL"),Object(r.a)("p",null,"HSL (Hue, Saturation, Lightness) adalah metode untuk menentukan warna yang\nberhubungan dengan pencahayaan. Rentang untuk saturation adalah dari warna abu-\nabu murni. Sedangkan rentang untuk lightness adalah dari warna murni hitam\nmenjadi warna putih."),Object(r.a)("h6",{id:"5213-cmyk"},"5.2.1.3. CMYK"),Object(r.a)("p",null,"CMYK atau Cyan, Magenta, Yellow, Key ","[Black]",", adalah metode untuk menentukan\nwarna pada warna primer subtraktif yang umumnya digunakan pada pencetakan.\nRentang nilai yang diperbolehkan adalah dari 0 sampai 100."),Object(r.a)("h6",{id:"5214-wheel"},"5.2.1.4. Wheel"),Object(r.a)("p",null,"Wheel adalah suatu alternatif lain untuk mengubah warna dalam paradigma HSL.\nJika garis diseret ke sekitar lingkaran maka terjadi perubahan pada Hue. Jika\nlingkaran kecil di dalam segitiga sejajar dengan tepi antara putih dengan\nhitam, maka terjadi perubahan pada Lightness dan ketika menyeretnya secara\ntegak lurus ke tepi maka akan mengubah Saturasi."),Object(r.a)("h6",{id:"5215-cms"},"5.2.1.5. CMS"),Object(r.a)("p",null,"Pilihan warna pada tab ini digunakan untuk mengedit warna yang dikelola oleh\nprofil ICC, cara kerja modus ini seperti Opacity\nPenjelasan lain mengenai warna HSL dan Wheel baca halaman Tweak Tool =>\nChannels."),Object(r.a)("h6",{id:"522-color-code"},"5.2.2. Color Code"),Object(r.a)("p",null,"Color Code merupakan kode dari warna pada style object yang dipilh, baik warna\ncampuran atau warna asli, kode yang tersebut berdasarkan pada nilai RGBA."),Object(r.a)("h6",{id:"523-blur-and-opacity"},"5.2.3. Blur and Opacity"),Object(r.a)("p",null,"Dibawah menu Color Code terdapat dua ikon berupa garis lurus disertai slider\nberbentuk lingkaran kecil diatasnya, disebelah kanan garis tersebut terdapat\nkotak isian yang berisi nilai sesuai pengaturan yang dilakukan. Jika Slider\ndigeser maka nilai pada kotak isian ikut berubah."),Object(r.a)("h6",{id:"5231-blur"},"5.2.3.1. Blur"),Object(r.a)("p",null,"Blur digunakan untuk mengatur warna object menjadi terlihat kabur seolah-olah\nberkabut atau terlihat samar, jika silder digeser ke kanan maka object terlihat\nsemakin kabur. Semakin banyak silder digeser ke kanan atau semakin besar nilai\npada kotak isian maka semakin kabur object, bentuk object juga semakin melebar."),Object(r.a)("h6",{id:"5232-opacity"},"5.2.3.2. Opacity"),Object(r.a)("p",null,"Opacity digunakan untuk mengatur transparansi warna suatu object dengan\nmenggeser slider ke sebelah kiri, jika silder digeser ke kiri maka object\nterlihat semakin transparan. Semakin banyak silder digeser ke kiri atau semakin\nkecil nilai pada kotak isian maka semakin transparan juga warna object.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Mundur.png][/\nraw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Maju.png]","\nLast modified on 05/13/2014 12:24:08 PM"),Object(r.a)("h4",{id:""}),Object(r.a)("hr",null))}k.isMDXComponent=!0}}]);