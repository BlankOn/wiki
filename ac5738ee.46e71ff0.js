(window.webpackJsonp=window.webpackJsonp||[]).push([[657],{1043:function(a,e,n){"use strict";n.d(e,"a",(function(){return l}));var t=n(0),r=n.n(t);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function p(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function b(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function m(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var o=r.a.createContext({}),c=function(a){var e=r.a.useContext(o),n=e;return a&&(n="function"==typeof a?a(e):b(b({},e),a)),n},u={inlineCode:"code",wrapper:function(a){var e=a.children;return r.a.createElement(r.a.Fragment,{},e)}},d=r.a.forwardRef((function(a,e){var n=a.components,t=a.mdxType,i=a.originalType,p=a.parentName,o=m(a,["components","mdxType","originalType","parentName"]),d=c(n),l=t,k=d["".concat(p,".").concat(l)]||d[l]||u[l]||i;return n?r.a.createElement(k,b(b({ref:e},o),{},{components:n})):r.a.createElement(k,b({ref:e},o))}));function l(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var i=n.length,p=new Array(i);p[0]=d;var b={};for(var m in e)hasOwnProperty.call(e,m)&&(b[m]=e[m]);b.originalType=a,b.mdxType="string"==typeof a?a:t,p[1]=b;for(var o=2;o<i;o++)p[o]=n[o];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},724:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return p})),n.d(e,"metadata",(function(){return b})),n.d(e,"rightToc",(function(){return m})),n.d(e,"default",(function(){return c}));var t=n(3),r=n(7),i=(n(0),n(1043)),p={},b={unversionedId:"TimPengembang/Pemaket/MenanganiPaketImpor",id:"TimPengembang/Pemaket/MenanganiPaketImpor",isDocsHomePage:!1,title:"MenanganiPaketImpor",description:"MenanganiPaketImpor",source:"@site/Wiki/TimPengembang/Pemaket/MenanganiPaketImpor.md",slug:"/TimPengembang/Pemaket/MenanganiPaketImpor",permalink:"/TimPengembang/Pemaket/MenanganiPaketImpor",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Pemaket/MenanganiPaketImpor.md",version:"current"},m=[{value:"Mengimpor paket pertama kali",id:"mengimpor-paket-pertama-kali",children:[]},{value:"Bila ada perubahan di Ubuntu",id:"bila-ada-perubahan-di-ubuntu",children:[]}],o={rightToc:m};function c(a){var e=a.components,n=Object(r.a)(a,["components"]);return Object(i.a)("wrapper",Object(t.a)({},o,n,{components:e,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"menanganipaketimpor"},"MenanganiPaketImpor"),Object(i.a)("h2",{id:"mengimpor-paket-pertama-kali"},"Mengimpor paket pertama kali"),Object(i.a)("p",null,"Berikut adalah langkah-langkah melakukan impor paket dari Ubuntu."),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Dapatkan URL paket di Launchpad "),Object(i.a)("p",{parentName:"li"},"Bentuk URL umumnya adalah ",Object(i.a)("inlineCode",{parentName:"p"},"\u200bhttps://\n   launchpad.net/ubuntu/+source/<nama-paket\\>"),'. Kunjungi halaman tersebut dan\nklik pada versi terakhir (ada paling atas). Di halaman versi tersebut\ndapat Anda jumpai bagian "Download". Salin URL patch Ubuntu (dengan\nakhiran nama diff.gz)\n')),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Siapkan direktori kerja di komputer Anda, misalnya /tmp. Unduh dan\nekstrak berkas patch tersebut."),Object(i.a)("pre",{parentName:"li"},Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"cd /tmp\nwget <url-diff.gz-barusan\\>\ngunzip -c <nama-berkas-diff.gz\\> | patch -p0\n")),Object(i.a)("p",{parentName:"li"},"Yang kita butuhkan hanyalah patch dari Ubuntu saja, dan bukan isi kode\nsumber paket aslinya (dengan nama ",Object(i.a)("inlineCode",{parentName:"p"},"<nama-paket.orig.tar.gz\\>"),").")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Anda akan dapatkan direktori baru bernama ",Object(i.a)("inlineCode",{parentName:"p"},"<nama-paket_nomor-versi-ubuntu\\>/"))),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Inisialisasikan bazaar di dalam direktori itu, masukkan semua berkas yang\nada, dan lakukan commit."),Object(i.a)("pre",{parentName:"li"},Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),'cd <nama-paket_nomor-versi-ubuntu\\>/\nbzr init --format=dirstate-tags\nbzr add *\nbzr commit -m "Impor awal"\n'))),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Ganti nama berkas debian/changelog menjadi debian/changelog.ubuntu dan\nmasukkan ke dalam gudang kode juga"),Object(i.a)("pre",{parentName:"li"},Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"bzr mv debian/changelog debian/changelog.ubuntu\n"))),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Sunting ",Object(i.a)("inlineCode",{parentName:"p"},"debian/changelog")),Object(i.a)("pre",{parentName:"li"},Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"   dch --create\n")),Object(i.a)("p",{parentName:"li"},'   Gunakan penomoran versi yang benar. Lihat bagian "Penomoran Versi" pada\ndokumen Prosedur Pembuatan Paket?. Konfirmasikan kepada koordinator bila\nAnda ragu. Ganti nomor versi dan nama distro yang ada di dalam debian/\nchangelog. Sebagai contoh pada paket gnome-desktop:'),Object(i.a)("pre",{parentName:"li"},Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"gnome-desktop (1:2.19.6-0ubuntu1) gutsy; urgency=low\n  * New upstream version\n -- Sebastien Bacher <seb128@canonical.com\\>  Mon, 30 Jul 2007 23:21:46\n+0200\n")),Object(i.a)("pre",{parentName:"li"},Object(i.a)("code",Object(t.a)({parentName:"pre"},{})," ... dan seterusnya hingga akhir berkas diganti dan dipotong hingga menjadi ini saja:\n \n")),Object(i.a)("pre",{parentName:"li"},Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"gnome-desktop (1:2.19.6-0ubuntu1-0blankon1) konde; urgency=low\n  * Impor dari 1:2.19.6-0ubuntu1.\n -- Mohammad DAMT <mdamt@gnome.org\\>  Thu,  9 Aug 2007 03:07:32 +0300\n ```\n \nPerhatikan bahwa semua entri yang lama tidak perlu\ndisimpan. Juga pastikan bahwa nomor versi Ubuntu aslinya\njangan diubah (Dalam contoh tetap 1:2.19.6-0ubuntu1).\n    \n"))),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Simpan berkas tersebut dan lakukan commit."),Object(i.a)("pre",{parentName:"li"},Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),'bzr add debian/changelog\nbzr commit -m "Memperbarui sejarah paket"\nbzr tag nama_tag\n'))),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Kirim ke gudang kode. Perhatikan bahwa tidak perlu mencantumkan nomor\nversi saat mengirim ke gudang kode."),Object(i.a)("pre",{parentName:"li"},Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"bzr push bzr+ssh://bzr@dev.blankonlinux.or.id/bzr/<nama_kode\\>/\n<nama_paket/\n"))),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Daftarkan nama Anda sesuai dengan paket yang dikelola di sini: ",Object(i.a)("inlineCode",{parentName:"p"},"\u200bhttp://\ndev.blankonlinux.or.id/wiki/<versi\\>/DaftarPaketImpor?"),". Ini sangat penting\nkarena bila ada paket baru di Ubuntu maka Anda akan segera diberitahu."))),Object(i.a)("h2",{id:"bila-ada-perubahan-di-ubuntu"},"Bila ada perubahan di Ubuntu"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Siapkan kode sumber paket Anda yang sudah diimpor sebelumnya di direktori\n/tmp"),Object(i.a)("pre",{parentName:"li"},Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"bzr branch <url-paket-anda-di-gudang-kode\\>\n"))),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Ambil dan ekstrak patch Ubuntu di /tmp, mirip seperti langkah impor baru\ndi atas"),Object(i.a)("pre",{parentName:"li"},Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"wget <url-patch-diff.gz\\>\ngunzip -c <nama-berkas-diff.gz\\> | patch -p0\n"))),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Ganti nama debian/changelog di dalam direktori paket ubuntu menjadi\ndebian/changelog.ubuntu"),Object(i.a)("pre",{parentName:"li"},Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"mv <direktori-paket-ubuntu_versi-sekian-sekian\\>/debian/changelog\n<direktori-paket-ubuntu_versi-sekian-sekian\\>/debian/changelog.ubuntu\n"))),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Lakukan perbandingan dengan kode sumber paket Anda"),Object(i.a)("pre",{parentName:"li"},Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"diff -urN -x .bzr <direktori-paket-anda\\> <direktori-paket-ubuntu_versi-sekian-sekian\\> > perbedaan.txt\n"))),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Sunting berkas perbedaan.txt dan hapus bagian yang tidak perlu diubah,\nmisalnya semua perubahan yang telah Anda lakukan sebelumnya.")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Gelar berkas perbedaan.txt yang telah Anda sunting tersebut pada kode\nsumber Anda"),Object(i.a)("pre",{parentName:"li"},Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"cd <direktori-paket-anda\\>\ncat ../perbedaan.txt | patch -p1\n"))),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Catat nomor versi asli paket Ubuntu tersebut:"),Object(i.a)("pre",{parentName:"li"},Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"   head -1 debian/changelog.ubuntu\n"))),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Sunting debian/changelog Anda:"),Object(i.a)("pre",{parentName:"li"},Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"   dch -i\n")),Object(i.a)("p",{parentName:"li"},"   Pastikan bahwa versi paket Anda juga mencantumkan nomor versi Ubuntunya.\n")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Tes paketnya dan bila sudah puas dengan paket ini, silakan dilepas ke\npabrik paket."))),Object(i.a)("p",null,"Last modified on 08/08/2010 02:45:02 PM"),Object(i.a)("h4",{id:""}),Object(i.a)("hr",null))}c.isMDXComponent=!0}}]);