(window.webpackJsonp=window.webpackJsonp||[]).push([[942],{1014:function(a,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return l})),e.d(n,"metadata",(function(){return u})),e.d(n,"toc",(function(){return o})),e.d(n,"default",(function(){return m}));var t=e(3),r=e(7),i=(e(0),e(1050)),l={},u={unversionedId:"TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanSyslogInstalasi",id:"TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanSyslogInstalasi",isDocsHomePage:!1,title:"Panduan Pemasangan Syslog Instalasi",description:"Syslog instalasi adalah berkas log debug yang berguna untuk memahami biang",source:"@site/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanSyslogInstalasi.md",sourceDirName:"TimPengembang/Dokumentasi/Panduan/PanduanAplikasi",slug:"/TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanSyslogInstalasi",permalink:"/TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanSyslogInstalasi",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanSyslogInstalasi.md",version:"current",frontMatter:{}},o=[],s={toc:o};function m(a){var n=a.components,e=Object(r.a)(a,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,e,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Syslog instalasi adalah berkas log debug yang berguna untuk memahami biang\nkerok suatu kesalahan yang terjadi instalasi BlankOn alternate, tanpa bantuan\nsyslog akan sulit bagi pengembang untuk mencari pokok permasalahannya. Jadi\njangan lupa untuk menyertakan syslog apabila Anda melaporkan bugs mengenai\ninstalasi BlankOn alternate."),Object(i.b)("p",null,"Berikut adalah contoh bagaimana cara mendapatkan syslog di alternate,\nsebelumnya pastikan komputer yang akan diinstal BlankOn terhubungan dengan\njaringan. Pada contoh disini BlankOn diinstall di dalam Vmware yang terhubung\ndengan komputer host dengan metode brigde."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ketika tampilan error muncul silakan tekan tombol ESC 2x agar masuk ke\nmenu utama Instalasi:\n","[/raw-attachment/wiki/Dokumentasi/Panduan/Pemasangan/SyslogInstalasi/001-\nalternate-error.png]"),Object(i.b)("li",{parentName:"ul"},'Di menu utama silakan cari lalu pilih menu "Menyimpan log-log debug"\n',"[/raw-attachment/wiki/Dokumentasi/Panduan/Pemasangan/SyslogInstalasi/002-\nalternate-menu.png]"),Object(i.b)("li",{parentName:"ul"},"Log dapat Anda simpan ke dalam disket, Anda ambil melalui web atau\nmelalui mount point. Saya sendiri biasanya memilih ambil melalui web saja\nkarena sangat mudah.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/Pemasangan/SyslogInstalasi/003-\nalternate-logs.png]"),Object(i.b)("li",{parentName:"ul"},"Selanjutkan Anda akan diberi alamat ip untuk mengambil log-log debug itu\nberada.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/Pemasangan/SyslogInstalasi/004-\nalternate-web.png]"),Object(i.b)("li",{parentName:"ul"},"Masukkan alamat ip tsb pada browser di komputer host Anda lalu simpan.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/Pemasangan/SyslogInstalasi/005-\nalternate-browser.jpg]"),Object(i.b)("li",{parentName:"ul"},"Silakan attach syslog tersebut pada laporan bugs Anda.")),Object(i.b)("p",null,"Last modified on 02/02/2009 10:41:25 AM"),Object(i.b)("h4",{id:"attachments-5"},"Attachments (5)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"001-alternate-error.png\u200b (4.8 KB) - added by imtheface 8 years ago."),Object(i.b)("li",{parentName:"ul"},"002-alternate-menu.png\u200b (11.1 KB) - added by imtheface 8 years ago."),Object(i.b)("li",{parentName:"ul"},"003-alternate-logs.png\u200b (5.9 KB) - added by imtheface 8 years ago."),Object(i.b)("li",{parentName:"ul"},"004-alternate-web.png\u200b (5.3 KB) - added by imtheface 8 years ago."),Object(i.b)("li",{parentName:"ul"},"005-alternate-browser.jpg\u200b (60.8 KB) - added by imtheface 8 years ago.")),Object(i.b)("hr",null))}m.isMDXComponent=!0},1050:function(a,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return p}));var t=e(0),r=e.n(t);function i(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function l(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function u(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){i(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function o(a,n){if(null==a)return{};var e,t,r=function(a,n){if(null==a)return{};var e,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)e=i[t],n.indexOf(e)>=0||(r[e]=a[e]);return r}(a,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)e=i[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(r[e]=a[e])}return r}var s=r.a.createContext({}),m=function(a){var n=r.a.useContext(s),e=n;return a&&(e="function"==typeof a?a(n):u(u({},n),a)),e},c=function(a){var n=m(a.components);return r.a.createElement(s.Provider,{value:n},a.children)},b={inlineCode:"code",wrapper:function(a){var n=a.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(a,n){var e=a.components,t=a.mdxType,i=a.originalType,l=a.parentName,s=o(a,["components","mdxType","originalType","parentName"]),c=m(e),d=t,p=c["".concat(l,".").concat(d)]||c[d]||b[d]||i;return e?r.a.createElement(p,u(u({ref:n},s),{},{components:e})):r.a.createElement(p,u({ref:n},s))}));function p(a,n){var e=arguments,t=n&&n.mdxType;if("string"==typeof a||t){var i=e.length,l=new Array(i);l[0]=d;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=a,u.mdxType="string"==typeof a?a:t,l[1]=u;for(var s=2;s<i;s++)l[s]=e[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,e)}d.displayName="MDXCreateElement"}}]);