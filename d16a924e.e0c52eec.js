(window.webpackJsonp=window.webpackJsonp||[]).push([[809],{1043:function(e,a,n){"use strict";n.d(a,"a",(function(){return m}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var a=r.a.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=t,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?r.a.createElement(b,l(l({ref:a},c),{},{components:n})):r.a.createElement(b,l({ref:a},c))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},878:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return l})),n.d(a,"rightToc",(function(){return s})),n.d(a,"default",(function(){return u}));var t=n(3),r=n(7),i=(n(0),n(1043)),o={},l={unversionedId:"Panduan/PemasanganMesinCetakHPLaserJet1020",id:"Panduan/PemasanganMesinCetakHPLaserJet1020",isDocsHomePage:!1,title:"PemasanganMesinCetakHPLaserJet1020",description:"Instalasi Printer",source:"@site/Wiki/Panduan/PemasanganMesinCetakHPLaserJet1020.md",slug:"/Panduan/PemasanganMesinCetakHPLaserJet1020",permalink:"/Panduan/PemasanganMesinCetakHPLaserJet1020",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/Panduan/PemasanganMesinCetakHPLaserJet1020.md",version:"current"},s=[{value:"HP Laser Jet 1020",id:"hp-laser-jet-1020",children:[]}],c={rightToc:s};function u(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(t.a)({},c,n,{components:a,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"instalasi-printer"},"Instalasi Printer"),Object(i.a)("h2",{id:"hp-laser-jet-1020"},"HP Laser Jet 1020"),Object(i.a)("p",null,"Printer ini secara umum bisa di-detect otomatis oleh Ubuntu/BlankOn?. Akan\ntetapi setelah kita jalankan, tidak akan muncul apa-apa alias diam seribu\nhalaman."),Object(i.a)("p",null,"Untuk mengatasi masalah ini, menurut pembuat driver di ",Object(i.a)("a",Object(t.a)({parentName:"p"},{href:"http://foo2zjs.rkkda.com/"}),"http://foo2zjs.rkkda.com/"),"\nkita harus menginstal sendiri driver printer tersebut.\nSilahkan mendownload driver sekitar 1.5 MB pada situs tersebut, kemudian\nlakukan instalasi sesuai dengan langkah-langkah berikut (terpaksa harus\nmenggunakan command-line) :\nLangkah-langkahnya sebagai berikut :"),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{})," $ sudo apt-get install build-essential\n $ wget -c http://foo2zjs.rkkda.com/foo2zjs.tar.gz\n")),Object(i.a)("p",null,"extract paketnya :"),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{})," $ tar zxf foo2zjs.tar.gz\n $ cd foo2zjs\n")),Object(i.a)("p",null,"lakukan perintah berikut :"),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"$ make")),Object(i.a)("p",null,"download file ekstra dari web, seperti .ICM profiles untuk color correction,\ndan firmware."),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"$ ./getweb 1020 # Get HP LaserJet 1020 firmware file")),Object(i.a)("p",null,"Install driver, foomatic XML files, and extra files:"),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"$ sudo make install")),Object(i.a)("p",null,"konfigurasi hotplug :"),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"$ sudo make install-hotplug")),Object(i.a)("p",null,"restart cups :"),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"$ sudo make cups")),Object(i.a)("p",null,"Setelah semua selesai, coba colokkan kabel USB Printer Anda, biarkan Ubuntu\nmemproses dengan wajar dan lakukan test print untuk melihat hasilnya. Selamat\nMencoba."),Object(i.a)("p",null,"Last modified on 12/13/2008 11:41:42 AM"),Object(i.a)("hr",null))}u.isMDXComponent=!0}}]);