(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1050:function(e,a,n){"use strict";n.d(a,"a",(function(){return d})),n.d(a,"b",(function(){return f}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),m=function(e){var a=r.a.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):u(u({},a),e)),n},d=function(e){var a=m(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},p=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=m(n),p=t,f=d["".concat(o,".").concat(p)]||d[p]||s[p]||i;return n?r.a.createElement(f,u(u({ref:a},l),{},{components:n})):r.a.createElement(f,u({ref:a},l))}));function f(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=p;var u={};for(var c in a)hasOwnProperty.call(a,c)&&(u[c]=a[c]);u.originalType=e,u.mdxType="string"==typeof e?e:t,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return u})),n.d(a,"toc",(function(){return c})),n.d(a,"default",(function(){return m}));var t=n(3),r=n(7),i=(n(0),n(1050)),o={},u={unversionedId:"Lainnya/Kadaluarsa/Dokumentasi/Draf/SettingModemHaier",id:"Lainnya/Kadaluarsa/Dokumentasi/Draf/SettingModemHaier",isDocsHomePage:!1,title:"Setting Modem Haier",description:"HP Modem Haier secara default belum bisa digunakan langsungpakai di Ombilin, namun dengan langkah-langkah tambahan ini maka HP modem ini bisa",source:"@site/Wiki/Lainnya/Kadaluarsa/Dokumentasi/Draf/SettingModemHaier.md",sourceDirName:"Lainnya/Kadaluarsa/Dokumentasi/Draf",slug:"/Lainnya/Kadaluarsa/Dokumentasi/Draf/SettingModemHaier",permalink:"/Lainnya/Kadaluarsa/Dokumentasi/Draf/SettingModemHaier",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/Lainnya/Kadaluarsa/Dokumentasi/Draf/SettingModemHaier.md",version:"current",frontMatter:{}},c=[],l={toc:c};function m(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"HP Modem Haier secara default belum bisa digunakan langsungpakai di Ombilin, namun dengan langkah-langkah tambahan ini maka HP modem ini bisa\ndigunakan lewat nm-applet seperti modem yang telah didukung,"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"* buka terminal : Aplikasi > Aksesoris > Terminal\n* ketik pada jendela terminal : lsusb\n* muncul daftar alamat perangkat yang terpasang pada usb, diantaranya : Bus 002 Device 002: ID 05c6:9004 Qualcomm, Inc.\n* nah itu artinya jika kita akan melakukan modprobe maka : vendor=0x05c6 dan product=0x9004\n* ketik di terminal : modprobe usbserial vendor=0x05c6 product=0x9004\n")),Object(i.b)("p",null,"maka modem anda sudah bisa digunakan di nm-applet (kanan atas ada ikon 2 komputer)\nLast modified on 05/30/2010 02:08:37 PM"),Object(i.b)("hr",null))}m.isMDXComponent=!0}}]);