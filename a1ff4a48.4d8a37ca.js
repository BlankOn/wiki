(window.webpackJsonp=window.webpackJsonp||[]).push([[611],{1043:function(a,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n(0),t=n.n(r);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function o(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,r)}return n}function s(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function l(a,e){if(null==a)return{};var n,r,t=function(a,e){if(null==a)return{};var n,r,t={},i=Object.keys(a);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(t[n]=a[n]);return t}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(t[n]=a[n])}return t}var u=t.a.createContext({}),c=function(a){var e=t.a.useContext(u),n=e;return a&&(n="function"==typeof a?a(e):s(s({},e),a)),n},p={inlineCode:"code",wrapper:function(a){var e=a.children;return t.a.createElement(t.a.Fragment,{},e)}},d=t.a.forwardRef((function(a,e){var n=a.components,r=a.mdxType,i=a.originalType,o=a.parentName,u=l(a,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?t.a.createElement(b,s(s({ref:e},u),{},{components:n})):t.a.createElement(b,s({ref:e},u))}));function m(a,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=a,s.mdxType="string"==typeof a?a:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},678:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return s})),n.d(e,"rightToc",(function(){return l})),n.d(e,"default",(function(){return c}));var r=n(3),t=n(7),i=(n(0),n(1043)),o={},s={unversionedId:"Lainnya/Kadaluarsa/Dokumentasi/Draf/InstallProgramTarBz2",id:"Lainnya/Kadaluarsa/Dokumentasi/Draf/InstallProgramTarBz2",isDocsHomePage:!1,title:"InstallProgramTarBz2",description:"Memasang paket dari berkas Tar.bz2",source:"@site/Wiki/Lainnya/Kadaluarsa/Dokumentasi/Draf/InstallProgramTarBz2.md",slug:"/Lainnya/Kadaluarsa/Dokumentasi/Draf/InstallProgramTarBz2",permalink:"/Lainnya/Kadaluarsa/Dokumentasi/Draf/InstallProgramTarBz2",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/Lainnya/Kadaluarsa/Dokumentasi/Draf/InstallProgramTarBz2.md",version:"current"},l=[],u={rightToc:l};function c(a){var e=a.components,n=Object(t.a)(a,["components"]);return Object(i.a)("wrapper",Object(r.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"memasang-paket-dari-berkas-tarbz2"},"Memasang paket dari berkas Tar.bz2"),Object(i.a)("p",null,"Di BlankOn anda dapat menambah paket dari sebuah/beberapa berkas yang mempunyai format tar.bz2 (Tarball)."),Object(i.a)("h5",{id:"studi-kasus"},"Studi Kasus"),Object(i.a)("p",null,"Apabila kita ingin mengingankan memasang paket \u200bwine maka caranya adalah:"),Object(i.a)("h5",{id:"unduh-paket"},"Unduh paket"),Object(i.a)("p",null,"Unduh paket dari server\n",Object(i.a)("inlineCode",{parentName:"p"},"$ wget -c http://easynews.dl.sourceforge.net/sourceforge/wine/wine-0.9.54.tar.bz2")),Object(i.a)("h5",{id:"ekstrak-berkas"},"Ekstrak berkas"),Object(i.a)("p",null,"Ekstrak berkas instalasi supaya dapat di kompile\n",Object(i.a)("inlineCode",{parentName:"p"},"$ tar -xjvf wine-0.9.54.tar.bz2")),Object(i.a)("h5",{id:"pasang-berkas"},"Pasang Berkas"),Object(i.a)("p",null,"Pasang berkas wine dalam sistem anda, di anjurkan untuk memasang paket build-essential terlebih dahulu\n$ cd wine\n$ sudo apt-get install build-essential\n$ sudo ./configure\n$ sudo make\n$ sudo make install"),Object(i.a)("p",null,"dalam beberapa kasus, berkas installer tarball telah dikompile dan tidak memerlukan proses ./configure. untuk itu silakan lihat Panduan Installlasi\nnya yang biasanya bernama README atau INSTALL."),Object(i.a)("p",null,"Last modified on 09/23/2008 08:17:29 PM"),Object(i.a)("hr",null))}c.isMDXComponent=!0}}]);