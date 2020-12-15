(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{1043:function(a,e,n){"use strict";n.d(e,"a",(function(){return b}));var t=n(0),i=n.n(t);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function u(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function p(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var m=i.a.createContext({}),s=function(a){var e=i.a.useContext(m),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},o={inlineCode:"code",wrapper:function(a){var e=a.children;return i.a.createElement(i.a.Fragment,{},e)}},k=i.a.forwardRef((function(a,e){var n=a.components,t=a.mdxType,r=a.originalType,u=a.parentName,m=p(a,["components","mdxType","originalType","parentName"]),k=s(n),b=t,c=k["".concat(u,".").concat(b)]||k[b]||o[b]||r;return n?i.a.createElement(c,l(l({ref:e},m),{},{components:n})):i.a.createElement(c,l({ref:e},m))}));function b(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var r=n.length,u=new Array(r);u[0]=k;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=a,l.mdxType="string"==typeof a?a:t,u[1]=l;for(var m=2;m<r;m++)u[m]=n[m];return i.a.createElement.apply(null,u)}return i.a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},228:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return u})),n.d(e,"metadata",(function(){return l})),n.d(e,"rightToc",(function(){return p})),n.d(e,"default",(function(){return s}));var t=n(3),i=n(7),r=(n(0),n(1043)),u={},l={unversionedId:"TimPengembang/Dokumentasi/Kelas/PemaketanKernel",id:"TimPengembang/Dokumentasi/Kelas/PemaketanKernel",isDocsHomePage:!1,title:"PemaketanKernel",description:"Loka Karya Pemaketan Kernel Linux",source:"@site/Wiki/TimPengembang/Dokumentasi/Kelas/PemaketanKernel.md",slug:"/TimPengembang/Dokumentasi/Kelas/PemaketanKernel",permalink:"/TimPengembang/Dokumentasi/Kelas/PemaketanKernel",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Kelas/PemaketanKernel.md",version:"current"},p=[{value:"Pendahuluan",id:"pendahuluan",children:[]}],m={rightToc:p};function s(a){var e=a.components,n=Object(i.a)(a,["components"]);return Object(r.a)("wrapper",Object(t.a)({},m,n,{components:e,mdxType:"MDXLayout"}),Object(r.a)("h1",{id:"loka-karya-pemaketan-kernel-linux"},"Loka Karya Pemaketan Kernel Linux"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Hari / Tanggal : Kamis 12 Januari 2012"),Object(r.a)("li",{parentName:"ul"},"Narasumber : Mohammad Dhani Anwari (mdamt) ")),Object(r.a)("h2",{id:"pendahuluan"},"Pendahuluan"),Object(r.a)("p",null,"Dari ",Object(r.a)("a",Object(t.a)({parentName:"p"},{href:"https://id.wikipedia.org/wiki/Kernel_(ilmu_komputer)"}),"Wikipedia")," : Kernel adalah suatu perangkat lunak yang menjadi bagian utama dari sebuah sistem operasi. Tugasnya melayani bermacam program aplikasi untuk mengakses perangkat keras komputer secara aman."),Object(r.a)("p",null,"Di ",Object(r.a)("a",Object(t.a)({parentName:"p"},{href:"http://dev.blankonlinux.or.id/wiki/BlankOn"}),"BlankOn"),", berkas-berkas kernel terpasang pada :"),Object(r.a)("pre",null,Object(r.a)("code",Object(t.a)({parentName:"pre"},{}),"/boot/vmlinuz-<versi>-<varian>\n\ndan :\n\n/lib/modules/<versi>-<varian>/*\n")),Object(r.a)("p",null,"Model pembuatan kernel ada dua, masuk ke dalam berkas vmlinuz atau menjadi berkas-berkas modul kernel (ekstensinya .ko). Hal ini ditentukan saat kita melakukan konfigurasi kernel sebelum membangun. Manfaat menjadikan modul kernel adalah :"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Hemat tempat, ga semua masuk ke vmlinuz"),Object(r.a)("li",{parentName:"ul"},"Hemat memori"),Object(r.a)("li",{parentName:"ul"},"Lebih cepet ")),Object(r.a)("p",null,"Kernel merupakan salah satu dari sedikit paket-paket yg harus dikompilasi secara spesifik untuk perangkat keras tertentu, karena sifatnya sulit untuk dikonfigurasi saat sudah berjalan, jadi saat dibangun harus sudah dikonfigurasikan terlebih dahulu. Contoh : kernel untuk arsitektur i386 paketnya berbeda dengan amd64, kernel i386 generic berbeda dengan i386 PAE. Strategi paket kernel Di BlankOn, untuk 1 arsitektur, terdapat beragam varian paket kernel, misalnya untuk arsitektur i386 terdapat i386 biasa, PAE, dan untuk mesin virtual."),Object(r.a)("p",null,"Tatalaksana pemaketan kernel memiliki metode yang berbeda dengan metode pemaketan aplikasi yang lain. Kernel vanilla tidak berisi pustaka yang sering kita gunakan setiap hari. Contoh untuk membuat LiveCD membutuhkan dukungan AUFS dan tidak terdapat di Kernel vanilla, selain itu banyak penggerak perangkat-penggerak keras yg juga tidak ada di Kernel Linus. Sehingga perlu mengumpulkan semua yang ingin kita gunakan terlebih dahulu."),Object(r.a)("p",null,Object(r.a)("a",Object(t.a)({parentName:"p"},{href:"http://dev.blankonlinux.or.id/wiki/BlankOn"}),"BlankOn")," menggunakan 3 cabang Kernel"),Object(r.a)("p",null,"!(Blankon)","[http://dev.blankonlinux.or.id/graphviz/7a98a6e5ec6bdb3f390cebc1640e75c11b714ed3.dot.png]"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Gitnya linus : \u200bgit://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git"),Object(r.a)("li",{parentName:"ul"},"Gitnya aufs : \u200bgit://aufs.git.sourceforge.net/gitroot/aufs/aufs3-linux.git"),Object(r.a)("li",{parentName:"ul"},"Gitnya paket : \u200b",Object(r.a)("a",Object(t.a)({parentName:"li"},{href:"https://bitbucket.org/mdamt/linux-blankon-packaging"}),"https://bitbucket.org/mdamt/linux-blankon-packaging")," ")),Object(r.a)("p",null,"Dan hasil dari gabungan tiga cabang di atas : \u200b",Object(r.a)("a",Object(t.a)({parentName:"p"},{href:"https://bitbucket.org/mdamt/linux-blankon"}),"https://bitbucket.org/mdamt/linux-blankon")),Object(r.a)("p",null,"Selama punya 1 lumbung linux, kita tidak perlu unduh seluruh data, untuk ambil lumbung linus dan aufs cukup:"),Object(r.a)("pre",null,Object(r.a)("code",Object(t.a)({parentName:"pre"},{}),"$ git clone --reference linux-blankon git://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git linux-linus\n$ git clone --reference linux-blankon git://aufs.git.sourceforge.net/gitroot/aufs/aufs3-linux.git linux-aufs\n")),Object(r.a)("p",null,"Jadi supaya bisa bikin varian-varian tadi, di paket ubuntu disediakan skrip dan templat-templat,"),Object(r.a)("pre",null,Object(r.a)("code",Object(t.a)({parentName:"pre"},{}),"https://bitbucket.org/mdamt/linux-blankon-packaging/src\n")),Object(r.a)("p",null,"Berisi debian dan debian.master, debian berisi basis pemaketan debian, debian.master berisi templat dan konfigurasi, Saat paket dibuat, isi debian.master dipilah-pilah sesuai dengan arsitektur dan varian pilihan, dan disalin ke dalam debian, Caranya dengan menggunakan skrip yg dipanggil dari debian/rules. Untuk mengubah konfigurasi dan debian.master menggunakan perintah-perintah tertentu."),Object(r.a)("p",null,"Halaman manual : \u200bKernelMaintenance"))}s.isMDXComponent=!0}}]);