(window.webpackJsonp=window.webpackJsonp||[]).push([[570],{1043:function(a,n,e){"use strict";e.d(n,"a",(function(){return g}));var t=e(0),r=e.n(t);function i(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function o(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function u(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){i(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function p(a,n){if(null==a)return{};var e,t,r=function(a,n){if(null==a)return{};var e,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)e=i[t],n.indexOf(e)>=0||(r[e]=a[e]);return r}(a,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)e=i[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(r[e]=a[e])}return r}var l=r.a.createContext({}),c=function(a){var n=r.a.useContext(l),e=n;return a&&(e="function"==typeof a?a(n):u(u({},n),a)),e},s={inlineCode:"code",wrapper:function(a){var n=a.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(a,n){var e=a.components,t=a.mdxType,i=a.originalType,o=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),d=c(e),g=t,m=d["".concat(o,".").concat(g)]||d[g]||s[g]||i;return e?r.a.createElement(m,u(u({ref:n},l),{},{components:e})):r.a.createElement(m,u({ref:n},l))}));function g(a,n){var e=arguments,t=n&&n.mdxType;if("string"==typeof a||t){var i=e.length,o=new Array(i);o[0]=d;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=a,u.mdxType="string"==typeof a?a:t,o[1]=u;for(var l=2;l<i;l++)o[l]=e[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,e)}d.displayName="MDXCreateElement"},637:function(a,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return o})),e.d(n,"metadata",(function(){return u})),e.d(n,"rightToc",(function(){return p})),e.d(n,"default",(function(){return c}));var t=e(3),r=e(7),i=(e(0),e(1043)),o={},u={unversionedId:"Lainnya/Kadaluarsa/Dokumentasi/Draf/PengaturanDesktopCompiz",id:"Lainnya/Kadaluarsa/Dokumentasi/Draf/PengaturanDesktopCompiz",isDocsHomePage:!1,title:"PengaturanDesktopCompiz",description:"Pengaturan Desktop Compiz",source:"@site/Wiki/Lainnya/Kadaluarsa/Dokumentasi/Draf/PengaturanDesktopCompiz.md",slug:"/Lainnya/Kadaluarsa/Dokumentasi/Draf/PengaturanDesktopCompiz",permalink:"/Lainnya/Kadaluarsa/Dokumentasi/Draf/PengaturanDesktopCompiz",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/Lainnya/Kadaluarsa/Dokumentasi/Draf/PengaturanDesktopCompiz.md",version:"current"},p=[{value:"Desktop Compiz Fusion",id:"desktop-compiz-fusion",children:[{value:"Bagi Pengguna Kartu Grafis ATi",id:"bagi-pengguna-kartu-grafis-ati",children:[]},{value:"Bagi Pengguna Kartu Grafis nVidia",id:"bagi-pengguna-kartu-grafis-nvidia",children:[]}]}],l={rightToc:p};function c(a){var n=a.components,e=Object(r.a)(a,["components"]);return Object(i.a)("wrapper",Object(t.a)({},l,e,{components:n,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"pengaturan-desktop-compiz"},"Pengaturan Desktop Compiz"),Object(i.a)("h2",{id:"desktop-compiz-fusion"},"Desktop Compiz Fusion"),Object(i.a)("p",null,"BlankOn datang dengan Compiz Fusion yang sudah terinstall. Dalam beberapa kasus, Compiz membutuhkan driver untuk kartu grafis anda agar compiz\nberjalan dengan baik. Pastikan Anda telah memasang driver kartu grafis pada sistem."),Object(i.a)("p",null,"Untuk mengaktifkan efek Desktop, silakan buka Menu-GNOME ke System > Preference > Apparance. Dalam tab desktop effect anda akan menemukan tiga\npengaturan yaitu: None, Normal dan Ekstra. Untuk mengaktifkan compiz, pilih salah satu dari ke tiga pilihan tersebut."),Object(i.a)("p",null,"Jika anda menginginkan pengaturan lebih pada pengaturan opsi compiz dan plugin, seperti desktop cube dan animations, pertama install paket konfigurasi\ncompiz: ",Object(i.a)("inlineCode",{parentName:"p"},"sudo apt-get install compizconfig-settings-manager")),Object(i.a)("p",null,"Setelah itu anda dapat mengatur plugin dan opsi lanjut compiz yang terletak di System > Preferences > Advanced Desktop Effects Settings. Anda juga\ndapat menjalankan aplikasi ini dari terminal atau run dialog (ALT+F2) dengan perintah ccsm."),Object(i.a)("h3",{id:"bagi-pengguna-kartu-grafis-ati"},"Bagi Pengguna Kartu Grafis ATi"),Object(i.a)("p",null,"Beberapa katu grafis ATI terkadang membutuhkan driver propietary untuk menjalankan compiz, hal ini dikarenakan driver terbuka (open Source) radeon\nterkadang tidak secepat driver proprietary fglrx, sehingga jika menginginkan compiz berjalan dengan baik, Anda harus memasang driver proprietary.\nBerikut adalah petunjuknya:"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Setelah anda menasang drivernya, baik itu dari manajeman driver\nproprietary atau dari situs ATI, anda harus mengatur konfigurasi berkas\nxorg agar xorg dapat bekerja dengan diver terbaru anda. Buka termimal\nanda dan masukkan:")),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"```\n sudo cp /etc/X11/xorg.conf /etc/X11/xorg.conf.bak\nsudo aticonfig --initial --input=/etc/X11/xorg.conf\n```   \n")),Object(i.a)("p",null,"   Tindakan tersebut akan menonaktifkan driver radeon default dan\nmenggantinya dengan Driver ATI."),Object(i.a)("ol",{start:2},Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},'Sekarang atur compiz agar melewatkan pngecekan tentang driver yang mereka\nblacklist:\necho SKIP_CHECKS="yes" >> $HOME/.config/compiz/compiz-manager\nCara alternatif anda dapat mengedit driver yang di percaya karena ini\nadalah cara yang lebih baik. Jalankan paerintah ini untuk mengubah\nskript-startup compiz:\ngksu gedit /usr/bin/compiz'),Object(i.a)("p",{parentName:"li"},"Cari Driver yang dipercaya dan masukkan fglrx kedalam barisnya, seperti\nini:"),Object(i.a)("h1",Object(t.a)({parentName:"li"},{id:"driver-whitelist"}),"Driver whitelist"),Object(i.a)("p",{parentName:"li"},'WHITELIST="nvidia intel ati radeon i810 fglrx"')),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Matikan ulang komputer anda, kemudian login dan aktifkan compiz anda."))),Object(i.a)("h3",{id:"bagi-pengguna-kartu-grafis-nvidia"},"Bagi Pengguna Kartu Grafis nVidia"),Object(i.a)("p",null,"Instalasi driver Kartu Grafis nVidia sangat mudah sekali hal ini di karenakan driver nvidia telah ada dalam repository. Buka terminal dan masukkan\nperintah: sudo apt-get install nvidia-glx-new nvidia-kernel-common Matikan ulang komputer anda, kemudian login dan aktifkan compiz."),Object(i.a)("p",null,"Last modified on 09/23/2008 08:18:00 PM"),Object(i.a)("hr",null))}c.isMDXComponent=!0}}]);