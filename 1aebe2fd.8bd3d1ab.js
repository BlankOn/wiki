(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{1043:function(a,e,n){"use strict";n.d(e,"a",(function(){return m}));var t=n(0),r=n.n(t);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function o(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function s(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var p=r.a.createContext({}),u=function(a){var e=r.a.useContext(p),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},c={inlineCode:"code",wrapper:function(a){var e=a.children;return r.a.createElement(r.a.Fragment,{},e)}},d=r.a.forwardRef((function(a,e){var n=a.components,t=a.mdxType,i=a.originalType,o=a.parentName,p=s(a,["components","mdxType","originalType","parentName"]),d=u(n),m=t,b=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return n?r.a.createElement(b,l(l({ref:e},p),{},{components:n})):r.a.createElement(b,l({ref:e},p))}));function m(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=a,l.mdxType="string"==typeof a?a:t,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},179:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return l})),n.d(e,"rightToc",(function(){return s})),n.d(e,"default",(function(){return u}));var t=n(3),r=n(7),i=(n(0),n(1043)),o={},l={unversionedId:"Lainnya/Kadaluarsa/Dokumentasi/Draf/InstallProgramDeb",id:"Lainnya/Kadaluarsa/Dokumentasi/Draf/InstallProgramDeb",isDocsHomePage:!1,title:"InstallProgramDeb",description:"Memasang paket dari berkas .deb",source:"@site/Wiki/Lainnya/Kadaluarsa/Dokumentasi/Draf/InstallProgramDeb.md",slug:"/Lainnya/Kadaluarsa/Dokumentasi/Draf/InstallProgramDeb",permalink:"/Lainnya/Kadaluarsa/Dokumentasi/Draf/InstallProgramDeb",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/Lainnya/Kadaluarsa/Dokumentasi/Draf/InstallProgramDeb.md",version:"current"},s=[{value:"Studi kasus",id:"studi-kasus",children:[]},{value:"Unduh paket",id:"unduh-paket",children:[]},{value:"Pasang paket dalam sistem",id:"pasang-paket-dalam-sistem",children:[]},{value:"Problem",id:"problem",children:[]}],p={rightToc:s};function u(a){var e=a.components,n=Object(r.a)(a,["components"]);return Object(i.a)("wrapper",Object(t.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"memasang-paket-dari-berkas-deb"},"Memasang paket dari berkas .deb"),Object(i.a)("p",null,"Di BlankOn anda dapat menambah paket dari sebuah/beberapa berkas yang mempunyai format .deb (debian package). Untuk melakukan instalasi paket, Anda\ndapat menggunakan dpkg."),Object(i.a)("h2",{id:"studi-kasus"},"Studi kasus"),Object(i.a)("p",null,"Apabila kita ingin mengingankan memasang paket \u200btema_ikon_kamonesan maka caranya adalah:"),Object(i.a)("h2",{id:"unduh-paket"},"Unduh paket"),Object(i.a)("p",null,"Unduh paket dari Repository"),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{})," $ wget -c http://arsip.blankonlinux.or.id/blankon/pool/main/k/kamonesan-icon- theme/kamonesan-icon-theme_0.1-0blankon1_all.deb\n\n")),Object(i.a)("h2",{id:"pasang-paket-dalam-sistem"},"Pasang paket dalam sistem"),Object(i.a)("p",null,"Silakan pasang paket tersebut ke dalam sistem Anda\n",Object(i.a)("inlineCode",{parentName:"p"},"$ sudo dpkg -i kamonesan-icon-theme_0.1-0blankon1_all.deb")),Object(i.a)("h2",{id:"problem"},"Problem"),Object(i.a)("p",null,"Bila paket tersebut gagal dipasang pada sistem Anda, maka permasalahanya adalah:"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Ketergantungan paket, silakan install paket-paket yang diperlukan oleh paket tersebut"),Object(i.a)("li",{parentName:"ol"},"Anda tidak mempunyai hak root, silakan coba dengan  sudo dpkg -i paket_yang_akan_di_install"),Object(i.a)("li",{parentName:"ol"},"Ruang kosong dalam harddisk Anda.\nLast modified on 01/05/2009 08:21:10 PM")),Object(i.a)("hr",null))}u.isMDXComponent=!0}}]);