(window.webpackJsonp=window.webpackJsonp||[]).push([[805],{1050:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?r.a.createElement(d,c(c({ref:t},u),{},{components:n})):r.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},877:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(1050)),i={},c={unversionedId:"TimPengembang/Dokumentasi/Kelas/InstalasiPaketMeta",id:"TimPengembang/Dokumentasi/Kelas/InstalasiPaketMeta",isDocsHomePage:!1,title:"Instalasi paket blankon-desktop (atau blankon-desktop-minimalis)",description:"Instalasi Kernel",source:"@site/Wiki/TimPengembang/Dokumentasi/Kelas/InstalasiPaketMeta.md",sourceDirName:"TimPengembang/Dokumentasi/Kelas",slug:"/TimPengembang/Dokumentasi/Kelas/InstalasiPaketMeta",permalink:"/TimPengembang/Dokumentasi/Kelas/InstalasiPaketMeta",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Kelas/InstalasiPaketMeta.md",version:"current",frontMatter:{}},s=[],u={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Instalasi Kernel"),Object(o.b)("p",null,"1.Silahkan chroot "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ sudo cp /etc/resolv.conf chroot/etc/resolv.conf\n$ sudo chroot chroot\n")),Object(o.b)("p",null,"2.mount dan tentukan bahasa "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"/# mount -t proc proc-blive /proc\n/# mount -t devpts devpts-blive /dev/pts\n/# mount -t sysfs sysfs-blive /sys\n/# export HOME=/root\n/# export LC_ALL=C\n")),Object(o.b)("p",null,"3.Buat file /etc/apt/sources.list yang berisi (isikan dengan mirror kesukaan anda):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ cp /etc/apt/sources.list chroot/etc/apt/sources.list\n")),Object(o.b)("p",null,"yang berisikan"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"deb http://kambing.ui.edu/ubuntu jaunty main restricted multiverse universe\ndeb http://arsip.blankonlinux.or.id/blankon nanggar main restricted\n")),Object(o.b)("p",null,"4.Update sistem dan install paket meta "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"/# apt-get update\n/# apt-get dist-upgrade\n/# apt-get install blankon-desktop blankon-minimal blankon-standard\n")),Object(o.b)("p",null,"Keluaran:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"root@blankone:/# aptitude update\nHit http://mirror.unej.ac.id jaunty Release.gpg\nGet:1 http://mirror.unej.ac.id nanggar Release.gpg [189B]\nHit http://mirror.unej.ac.id jaunty Release\nGet:2 http://mirror.unej.ac.id nanggar Release [9727B]\nHit http://mirror.unej.ac.id jaunty/main Packages\nIgn http://mirror.unej.ac.id nanggar Release   \nGet:3 http://mirror.unej.ac.id jaunty/restricted Packages [8848B]\nGet:4 http://mirror.unej.ac.id jaunty/universe Packages [4757kB]\nGet:5 http://mirror.unej.ac.id jaunty/multiverse Packages [197kB]\nGet:6 http://mirror.unej.ac.id nanggar/main Packages [71.3kB]\nGet:7 http://mirror.unej.ac.id nanggar/restricted Packages [28.5kB]\nFetched 5073kB in 4s (1216kB/s)                  \nReading package lists... Done\nW: GPG error: http://mirror.unej.ac.id nanggar Release: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY B85EF00D2CCF12D8\nW: You may want to run apt-get update to correct these problems\n\nCurrent status: 5 updates [+5], 20748 new [+20748].\nroot@blankone:/# apt-get install blankon-desktop\n")))}l.isMDXComponent=!0}}]);