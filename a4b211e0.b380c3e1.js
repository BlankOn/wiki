(window.webpackJsonp=window.webpackJsonp||[]).push([[627],{1030:function(e,n,a){"use strict";a.d(n,"a",(function(){return c})),a.d(n,"b",(function(){return k}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),b=function(e){var n=r.a.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=b(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=b(a),m=t,k=c["".concat(l,".").concat(m)]||c[m]||s[m]||i;return a?r.a.createElement(k,o(o({ref:n},u),{},{components:a})):r.a.createElement(k,o({ref:n},u))}));function k(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},683:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return l})),a.d(n,"metadata",(function(){return o})),a.d(n,"rightToc",(function(){return p})),a.d(n,"default",(function(){return b}));var t=a(2),r=a(6),i=(a(0),a(1030)),l={},o={unversionedId:"TimPengembang/Infrastruktur/PabrikPaket/ManejemenRepo",id:"TimPengembang/Infrastruktur/PabrikPaket/ManejemenRepo",isDocsHomePage:!1,title:"ManejemenRepo",description:"ManajemenRepo",source:"@site/Wiki/TimPengembang/Infrastruktur/PabrikPaket/ManejemenRepo.md",slug:"/TimPengembang/Infrastruktur/PabrikPaket/ManejemenRepo",permalink:"/TimPengembang/Infrastruktur/PabrikPaket/ManejemenRepo",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/PabrikPaket/ManejemenRepo.md",version:"current"},p=[],u={rightToc:p};function b(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},u,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"manajemenrepo"},"ManajemenRepo"),Object(i.b)("p",null,"Untuk Mengaktifkan aplikasi reprepro irgsh di pabrik paket."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Masuk Ke yeyen"),Object(i.b)("li",{parentName:"ol"},"silahkan ubah ke user irgsh\n",Object(i.b)("inlineCode",{parentName:"li"},"sudo su - irgsh")),Object(i.b)("li",{parentName:"ol"},"Masuk ke Directory irgsh-repo\n",Object(i.b)("inlineCode",{parentName:"li"},"cd irgsh-repo")),Object(i.b)("li",{parentName:"ol"},"Lakukan Perintah\n",Object(i.b)("inlineCode",{parentName:"li"},"nohup ../bin/python2.6 ./irgsh-repo.py >> log 2>&1"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Catatan :")),Object(i.b)("p",null,"fg = foreground\nbg = background\nCtrl-z akan mengirim sinyal SIGSTOP ke aplikasi yang jalan di konsol saat itu\nKernel kemudian bilang ke aplikasi, HEY Kau berhenti dulu!"),Object(i.b)("p",null,"Trus kendali dikembalikan ke prompt shell\nTrus Bapak ada 3 pilihan:\n0- Mau meneruskan aplikasi yang tadi distop\n1- Mau meneruskan aplikasi yang tadi distop, tapi tetap bisa pakai terminal\n2- Mau melakukan sesuatu di terminal, misalnya cat /berkas/lain atau njalanin\nprogram lain, dst"),Object(i.b)("p",null,"Kalau pilih 0, berarti kita ingin aplikasi tsb jalan lagi, caranya tullis fg\nbash akan meminta kernel untuk jalankan program tadi"),Object(i.b)("p",null,"Kalau pilih 1, berarti kita ingin aplikasi tsb jalan lagi, caranya tullis bg\nartinya si aplikasi jalan di belakang layar, sementara kita bisa pakai terminal"),Object(i.b)("p",null,"Kalau pilih 2, ya wis Bapak terserah mau ngapain lagi, tapi nanti sesudahnya\nkembali ke pilihan 0 atau 1"),Object(i.b)("p",null,"Kalau tidak si aplikasi statusnya jadi zombie, ada di RAM tapi tidak jalan dan\ntidak mati"),Object(i.b)("p",null,"Refrensi : \u200b",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"http://tempel.blankon.in/417"}),"http://tempel.blankon.in/417")),Object(i.b)("p",null,"Last modified on 01/31/2011 06:02:20 PM"),Object(i.b)("hr",null))}b.isMDXComponent=!0}}]);