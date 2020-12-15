(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{1043:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function u(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?u(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),s=function(e){var a=r.a.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=s(t),b=n,d=m["".concat(u,".").concat(b)]||m[b]||c[b]||i;return t?r.a.createElement(d,l(l({ref:a},o),{},{components:t})):r.a.createElement(d,l({ref:a},o))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,u=new Array(i);u[0]=m;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,u[1]=l;for(var o=2;o<i;o++)u[o]=t[o];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},233:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return u})),t.d(a,"metadata",(function(){return l})),t.d(a,"rightToc",(function(){return p})),t.d(a,"default",(function(){return s}));var n=t(3),r=t(7),i=(t(0),t(1043)),u={},l={unversionedId:"TimPengembang/Infrastruktur/ImplementasiPabrikCD",id:"TimPengembang/Infrastruktur/ImplementasiPabrikCD",isDocsHomePage:!1,title:"ImplementasiPabrikCD",description:"Implementasi Pabrik CD",source:"@site/Wiki/TimPengembang/Infrastruktur/ImplementasiPabrikCD.md",slug:"/TimPengembang/Infrastruktur/ImplementasiPabrikCD",permalink:"/TimPengembang/Infrastruktur/ImplementasiPabrikCD",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/ImplementasiPabrikCD.md",version:"current"},p=[{value:"Pabrik CD",id:"pabrik-cd",children:[{value:"Alur umum",id:"alur-umum",children:[]},{value:"Moda Buat Baru",id:"moda-buat-baru",children:[]}]}],o={rightToc:p};function s(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"implementasi-pabrik-cd"},"Implementasi Pabrik CD"),Object(i.a)("h2",{id:"pabrik-cd"},"Pabrik CD"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Versi 0.1-20110926")),Object(i.a)("h3",{id:"alur-umum"},"Alur umum"),Object(i.a)("p",null,"[GraphViz image | ini pake gambar yang mana ya]"),Object(i.a)("h4",{id:"jahit"},"Jahit"),Object(i.a)("p",null,"[GraphViz image | ini pake gambar yang mana ya]"),Object(i.a)("h3",{id:"moda-buat-baru"},"Moda Buat Baru"),Object(i.a)("h4",{id:"jahit-1"},"Jahit"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Rootstrap")),Object(i.a)("p",null,"Rootstrap adalah proses menyiapkan struktur direktori sistem yang di dalamnya\ndipasang paket-paket yang diinginkan. Rootstrap dilakukan menggunakan dalam\nbeberapa tahap."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"debootstrap")),Object(i.a)("p",null,"Sistem dibuat dari 0 menggunakan debootstrap. Hasilnya adalah sebuah direktori\nberisi sistem dasar, diberi nama ",Object(i.a)("inlineCode",{parentName:"p"},"$ROOTFS"),". Sistem ini harus dapat dimasuki\ndengan melakukan chroot."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Instalasi paket-paket berdasarkan profil")),Object(i.a)("p",null,"sources.list dibuat dalam direktori ",Object(i.a)("inlineCode",{parentName:"p"},"$ROOTFS")," dengan menunjuk ke lumbung sesuai\nprofil. Sistem dasar hasil debootstrap kemudian diaktifkan menggunakan chroot.\nSemua perintah ",Object(i.a)("inlineCode",{parentName:"p"},"$CHROOT")," di dokumen ini merupakan singkatan dari perintah"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"sudo chroot $ROOTFS\n")),Object(i.a)("p",null,"Di dalam chroot, perbarui semua paket yang telah dibuat menggunakan debootstrap"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"$CHROOT apt-get update\n$CHROOT apt-get --purge --dist-upgrade\n")),Object(i.a)("p",null,"Setelah itu, instal paket bibit utama yang telah didefinisikan dalam $PACKAGES"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"$CHROOT apt-get install $PACKAGES\n")),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Pasang kernel")),Object(i.a)("p",null,"Yang diperlukan di sini sebenarnya bukan kernelnya, tapi modul-modul kernelnya.\nKernel dan initrd yang nantinya dipakai untuk boot dipasang terpisah dalam\nbootloader."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"$CHROOT apt-get install $KERNEL_PACKAGES\n")),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Hapus paket daftar hitam")),Object(i.a)("p",null,'Selanjutnya, hapus paket-paket yang masuk ke dalam daftar hitam. Ini berguna\nuntuk menghapus paket-paket yang tidak diinginkan namun terbawa karena\n"recommends" oleh paket yang terpasang.'),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"$CHROOT apt-get remove --force-yes --yes $BLACKLISTED_PACKAGES\n")),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Pembersihan sistem")),Object(i.a)("p",null,"Semua berkas-berkas sementara hasil pekerjaan di atas harus dibersihkan agar\ntidak memakan tempat di struktur direktori yang dihasilkan."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"$CHROOT apt-get --force-yes --yes clean\n$CHROOT apt-get --force-yes --yes autoremove\n$CHROOT rm -f /var/lib/dpkg/*-old\n$CHROOT rm -f /var/cache/debconf/*-old\n")),Object(i.a)("p",null,"Setelah tahap ini, struktur direktori siap dicetak dalam sebuah RootFS."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"RootFS")),Object(i.a)("p",null,"RootFS adalah berkas berisi cetakan struktur direktori yang sudah dibuat pada\nproses rootstrap. RootFS dibuat menggunakan squashfs yang merupakan sistem\npemberkasan terkompresi."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"$CHROOT mksquashfs / filesystem.squashfs -b 1048576 -processors $NUMPROC -no- progress -e /filesystem.squashfs /unmounted\n")),Object(i.a)("p",null,"Hasil perintah di atas adalah berkas ",Object(i.a)("inlineCode",{parentName:"p"},"$ROOTFS/filesystem.squashfs"),"."))}s.isMDXComponent=!0}}]);