(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{1043:function(e,a,n){"use strict";n.d(a,"a",(function(){return b}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var a=r.a.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=t,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?r.a.createElement(m,l(l({ref:a},c),{},{components:n})):r.a.createElement(m,l({ref:a},c))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},293:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return l})),n.d(a,"rightToc",(function(){return s})),n.d(a,"default",(function(){return u}));var t=n(3),r=n(7),i=(n(0),n(1043)),o={},l={unversionedId:"Lainnya/Kadaluarsa/Dokumentasi/Draf/WifiAtheros",id:"Lainnya/Kadaluarsa/Dokumentasi/Draf/WifiAtheros",isDocsHomePage:!1,title:"WifiAtheros",description:"Atheros AR5007 EG",source:"@site/Wiki/Lainnya/Kadaluarsa/Dokumentasi/Draf/WifiAtheros.md",slug:"/Lainnya/Kadaluarsa/Dokumentasi/Draf/WifiAtheros",permalink:"/Lainnya/Kadaluarsa/Dokumentasi/Draf/WifiAtheros",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/Lainnya/Kadaluarsa/Dokumentasi/Draf/WifiAtheros.md",version:"current"},s=[],c={rightToc:s};function u(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(t.a)({},c,n,{components:a,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"atheros-ar5007-eg"},"Atheros AR5007 EG"),Object(i.a)("p",null,"Device Atheros AR5007 oleh Blankon/Ubuntu terjadi kekeliruan dalam mengenali hardware dan terdeteksi sebagai : AR242x 802.11abg Wireless PCI Express\nAdapter. Langkah-langkahnya sebagai berikut :"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Klik menu System \u2013 Administrasi \u2013 Hardware Drivers, hilangkan tanda\ncentang pada \u201cAtheros Hardware Access Layer (HAL)\u201d, lalu reboot."),Object(i.a)("li",{parentName:"ol"},"Buka terminal melalui Aplikasi \u2013 Aksesoris \u2013 Terminal. Ketik :",Object(i.a)("inlineCode",{parentName:"li"},"wget \u200bhttp://snapshots.madwifi.org/madwifi-hal-0.10.5.6/madwifi-hal-0.10.5.6- r3861-20080903.tar.gz")),Object(i.a)("li",{parentName:"ol"},"Install paket berikut dengan perintah :\n",Object(i.a)("inlineCode",{parentName:"li"},"$ sudo apt-get install build-essential")),Object(i.a)("li",{parentName:"ol"},"Jalankan langkah-langkah dibawah ini :")),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"```\n  $ tar -zxvf madwifi-hal-0.10.5.6-r3861-20080903.tar.gz\n  $ cd madwifi-hal-0.10.5.6-r3861-20080903/\n  $ make\n  $ sudo make install\n  $ sudo modprobe ath_pci\n```\n")),Object(i.a)("p",null,"Setelah itu, edit file /etc/rc.local :\n",Object(i.a)("inlineCode",{parentName:"p"},"$ sudo gedit /etc/rc.local"),'\nTambahkan di baris terakhir (sebelum baris "exit 0"), biar modul atheros bisa\ndijalankan tiap system dimulai : modprobe ath_pci\n',Object(i.a)("inlineCode",{parentName:"p"},"$ sudo reboot")),Object(i.a)("p",null,"Silahkan mencobanya ....\nKalau lednya belum bisa nyala (seperti di Aspire 4520 dan saudaranya) bisa\nmelakukan langkah seperti ini :\n",Object(i.a)("inlineCode",{parentName:"p"},"$ sudo gedit /etc/sysctl.conf")),Object(i.a)("p",null,"Tambahkan baris di bawah ini :"),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},"dev.wifi0.ledpin=3\ndev.wifi0.softled=1\nRestart dan lihat lednya")),Object(i.a)("p",null,"Dokumen aseli ada di \u200b",Object(i.a)("a",Object(t.a)({parentName:"p"},{href:"http://dev.blankonlinux.or.id/wiki/Instalasi/WifiAtheros"}),"http://dev.blankonlinux.or.id/wiki/Instalasi/WifiAtheros"),"\nLast modified on 09/25/2008 06:55:02 AM"),Object(i.a)("hr",null))}u.isMDXComponent=!0}}]);