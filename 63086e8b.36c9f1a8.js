(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{1043:function(a,e,n){"use strict";n.d(e,"a",(function(){return o}));var t=n(0),i=n.n(t);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function l(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function m(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function u(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var p=i.a.createContext({}),b=function(a){var e=i.a.useContext(p),n=e;return a&&(n="function"==typeof a?a(e):m(m({},e),a)),n},c={inlineCode:"code",wrapper:function(a){var e=a.children;return i.a.createElement(i.a.Fragment,{},e)}},g=i.a.forwardRef((function(a,e){var n=a.components,t=a.mdxType,r=a.originalType,l=a.parentName,p=u(a,["components","mdxType","originalType","parentName"]),g=b(n),o=t,s=g["".concat(l,".").concat(o)]||g[o]||c[o]||r;return n?i.a.createElement(s,m(m({ref:e},p),{},{components:n})):i.a.createElement(s,m({ref:e},p))}));function o(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var r=n.length,l=new Array(r);l[0]=g;var m={};for(var u in e)hasOwnProperty.call(e,u)&&(m[u]=e[u]);m.originalType=a,m.mdxType="string"==typeof a?a:t,l[1]=m;for(var p=2;p<r;p++)l[p]=n[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},440:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"metadata",(function(){return m})),n.d(e,"rightToc",(function(){return u})),n.d(e,"default",(function(){return b}));var t=n(3),i=n(7),r=(n(0),n(1043)),l={},m={unversionedId:"TimPengembang/Dokumentasi/Kelas/KelasGitSatu",id:"TimPengembang/Dokumentasi/Kelas/KelasGitSatu",isDocsHomePage:!1,title:"KelasGitSatu",description:"Latihan Menggunakan Git untuk Mengelola Tulisan",source:"@site/Wiki/TimPengembang/Dokumentasi/Kelas/KelasGitSatu.md",slug:"/TimPengembang/Dokumentasi/Kelas/KelasGitSatu",permalink:"/TimPengembang/Dokumentasi/Kelas/KelasGitSatu",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Kelas/KelasGitSatu.md",version:"current"},u=[{value:"1. Memasang Git pada BlankOn",id:"1-memasang-git-pada-blankon",children:[]},{value:"2. Mengatur Informasi Pengguna",id:"2-mengatur-informasi-pengguna",children:[]},{value:"3. Menyiapkan Tempat",id:"3-menyiapkan-tempat",children:[]},{value:"4.\tMulai Menulis",id:"4-mulai-menulis",children:[]},{value:"5.\tMelihat log Git dengan perintah <strong>git log</strong>",id:"5-melihat-log-git-dengan-perintah-git-log",children:[]},{value:"6.\tMengelola Tulisan dengan Git",id:"6-mengelola-tulisan-dengan-git",children:[]}],p={rightToc:u};function b(a){var e=a.components,n=Object(i.a)(a,["components"]);return Object(r.a)("wrapper",Object(t.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(r.a)("h1",{id:"latihan-menggunakan-git-untuk-mengelola-tulisan"},"Latihan Menggunakan Git untuk Mengelola Tulisan"),Object(r.a)("p",null,"Baru saja Tim Dokumentasi BlankOn XI Uluwatu mengadakan kelas daring dengan materi pengenalan Git bersama Pak Piko."),Object(r.a)("p",null,"Menurut Pak Piko, Git adalah ",Object(r.a)("em",{parentName:"p"},"version control"),". Git bisa diterapkan ke berbagai macam berkas; kode, skripsi, puisi, desain grafis, multimedia dan lain sebagainnya."),Object(r.a)("p",null,"Secara konvensional (tanpa ",Object(r.a)("em",{parentName:"p"},"version control"),"), kita mungkin menulis skripsi dengan cara;"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Pertama menulis Bab 1 dan menyimpannya menjadi ",Object(r.a)("strong",{parentName:"li"},"Bab_1.odt")),Object(r.a)("li",{parentName:"ul"},"Pada waktu berikutnya, misalnya minggu depannya kita menyunting Bab 1 dan menyimpannya menjadi berkas baru, misalnya ",Object(r.a)("strong",{parentName:"li"},"Bab_1_revisi.odt")),Object(r.a)("li",{parentName:"ul"},"Minggu depannya lagi kita mungkin menyunting lagi dan menyimpan lagi menjadi berkas baru lagi, misalnya ",Object(r.a)("strong",{parentName:"li"},"- Bab_1_revisi_apadah_capek.odt"))),Object(r.a)("p",null,"Sedangkan bila menggunakan ",Object(r.a)("em",{parentName:"p"},"version control")," seperti Git, maka kita cukup mengelola 1 berkas atau seperlunya. Adapun versi-versi dari berkas tersebut diurus oleh Git."),Object(r.a)("p",null,"Berikut adalah dokumentasi ketika saya mencoba menggunakan Git untuk mengelola tulisan. Semoga bermanfaat."),Object(r.a)("h2",{id:"1-memasang-git-pada-blankon"},"1. Memasang Git pada BlankOn"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Klik menu ",Object(r.a)("strong",{parentName:"p"},"BlankOn > Perkakas Sistem > Terminal"))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Ketik:"),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(t.a)({parentName:"pre"},{}),"sudo apt-get install git\n"))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Masukkan sandi"))),Object(r.a)("h2",{id:"2-mengatur-informasi-pengguna"},"2. Mengatur Informasi Pengguna"),Object(r.a)("p",null,"Untuk mengatur informasi pengguna kita dapat menggunakan perintah git config;"),Object(r.a)("p",null,'  \tgit config --global user.name "',"[nama]",'"\ngit config --global user.email "',"[alamat email]",'"'),Object(r.a)("p",null,"Contoh:"),Object(r.a)("pre",null,Object(r.a)("code",Object(t.a)({parentName:"pre"},{}),'  git config --global user.name "zaid"\n')),Object(r.a)("p",null,'  \tgit config --global user.email "',Object(r.a)("a",Object(t.a)({parentName:"p"},{href:"mailto:zaid@blankonmail.or.id"}),"zaid@blankonmail.or.id"),'"'),Object(r.a)("h2",{id:"3-menyiapkan-tempat"},"3. Menyiapkan Tempat"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Membuat folder")),Object(r.a)("p",{parentName:"li"},"Contoh: Kita akan membuat folder dengan nama LatihanGit\nmkdir LatihanGit\n")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Pindah folder "),"\ncd LatihanGit")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},Object(r.a)("strong",{parentName:"p"},"Inisiasi Git"),"\ngit init"))),Object(r.a)("h2",{id:"4-mulai-menulis"},"4.\tMulai Menulis"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},'Menulis Bab 1\ntouch panduan.md\necho "#Bab 1" > panduan.md')),Object(r.a)("p",null,"Perintah ",Object(r.a)("strong",{parentName:"p"},"touch")," dan ",Object(r.a)("strong",{parentName:"p"},"echo")," tidak termasuk perintah Git. Perintah ",Object(r.a)("strong",{parentName:"p"},"touch ","[nama berkas]")," digunakan untuk membuat berkas baru sekaligus menentukan namanya. Adapaun perintah ",Object(r.a)("strong",{parentName:"p"},"echo ",'["tulisan"]'," > ","[ nama berkas]")," digunakan untuk memasukkan tulisan ke dalam berkas. Perintah di atas akan mengisi berkas ",Object(r.a)("strong",{parentName:"p"},"panduan.md")," dengan tulisan ",Object(r.a)("strong",{parentName:"p"},"#Bab 1"),"."),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Menambahkan ke git dengan perintah ",Object(r.a)("strong",{parentName:"li"},"git add .")," dan ",Object(r.a)("strong",{parentName:"li"},"git commit -m ","['komentar']"),".\ngit add .\ngit commit -m 'tulis bab 1'")),Object(r.a)("p",null,"Perintah ",Object(r.a)("strong",{parentName:"p"},"git add .")," digunakan untuk menambahkan berkas yang ada ke dalam catatan indeks Git, sedangkan perintah ",Object(r.a)("strong",{parentName:"p"},"git commit -m ","['pesan atau catatan']")," digunakan untuk menyimpan dan mencatat versi terbaru dari suatu berkas."),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Melihat isi dengan perintah ",Object(r.a)("strong",{parentName:"li"},"cat"),"\ncat panduan.md")),Object(r.a)("p",null,"Perintah ",Object(r.a)("strong",{parentName:"p"},"cat")," tidak termasuk perintah Git. Perintah ",Object(r.a)("strong",{parentName:"p"},"cat ","[nama berkas]")," digunakan untuk melihat isi dari suatu berkas secara langsung di terminal (tanpa membuka berkas tersebut."),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Menulis Bab selanjutnya dengan cara yang sama (Menulis/menambahkan suatu bab baru dengan perintah ",Object(r.a)("strong",{parentName:"li"},"echo >>"),", menambahkan ke dalam catatan indeks Git dengan perintah ",Object(r.a)("strong",{parentName:"li"},"add ."),", dan menyimpan perubahan ke dalam Git dengan perintah ",Object(r.a)("strong",{parentName:"li"},"commit"),". Contoh;\necho \"#Bab 2\" >> panduan.md\ngit add .\ngit commit -m 'tulis bab 2'\ncat panduan.md\necho \"#Bab 3\" >> panduan.md\ngit add .\ngit commit -m 'tulis bab 3'\ncat panduan.md\n")),Object(r.a)("p",null,"Catatan: perintah ",Object(r.a)("strong",{parentName:"p"},"echo >")," (dengan satu >) digunakan untuk mengisi suatu berkas dengan tulisan baru, sedangkan perintah ",Object(r.a)("strong",{parentName:"p"},"echo >>")," (dengan dua >) digunakan untuk menambahkan tulisan tanpa menghilangkan tulisan yang sudah ada."),Object(r.a)("p",null,"Dengan serangkaian perintah di atas, sekarang kita mempunyai berkas dengan nama ",Object(r.a)("strong",{parentName:"p"},"panduan.md")," yang tersimpan di dalam folder ",Object(r.a)("strong",{parentName:"p"},"LatihanGit"),"."),Object(r.a)("h2",{id:"5-melihat-log-git-dengan-perintah-git-log"},"5.\tMelihat log Git dengan perintah ",Object(r.a)("strong",{parentName:"h2"},"git log")),Object(r.a)("pre",null,Object(r.a)("code",Object(t.a)({parentName:"pre"},{}),"git log\n")),Object(r.a)("p",null,"Dengan perintah ",Object(r.a)("strong",{parentName:"p"},"git  log")," kita dapat melihat catatan tentang commit-commit yang telah kita simpan. Berikut contoh dari hasil ",Object(r.a)("strong",{parentName:"p"},"git log"),";"),Object(r.a)("pre",null,Object(r.a)("code",Object(t.a)({parentName:"pre"},{}),"commit 406b65c6031f820cb4788e1f54ad0830af673d0e\nAuthor: Zaid <zaid@blankonmail.or.id>\nDate:   Tue Mar 7 00:16:41 2017 +0700\n\ntulis bab 3\n\ncommit 7404547cc0a5b7ff9bfb51622dd0e9abc14f7b74\nAuthor: Zaid <dampu@gmail.com\nDate:   Tue Mar 7 00:16:41 2017 +0700\n\ntulis bab 2\n\ncommit a28924476c3855d5cf24e30ae123a75cb1c089f\nAuthor: Zaid <zaid@blankonmail.or.id\nDate:   Tue Mar 7 00:16:41 2017 +0700\n\ntulis bab 1\n")),Object(r.a)("h2",{id:"6-mengelola-tulisan-dengan-git"},"6.\tMengelola Tulisan dengan Git"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("h3",Object(t.a)({parentName:"li"},{id:"kembali-ke-versi-awal-dengan-perintah-git-checkout-hashcommit"}),"Kembali ke versi awal dengan perintah ",Object(r.a)("strong",{parentName:"h3"},"git checkout ","[hashcommit]")),Object(r.a)("pre",{parentName:"li"},Object(r.a)("code",Object(t.a)({parentName:"pre"},{}),"Misalnya kita ingin kembali ke tulisan versi kedua yang berisi Bab 1 dan Bab 2 saja, kita tidak perlu menghapus Bab 3. Dengan perintah\n    git checkout 7404\n")),Object(r.a)("p",{parentName:"li"},"kita dapat kembali ke tulisan versi kedua yang baru berisi Bab 1 dan Bab 2 tanpa menghapus Bab 3 dan tanpa membuat berkas baru."))),Object(r.a)("p",null,"7404 merupakan 4 karakter pertama dari commit hash yaitu commit ",Object(r.a)("strong",{parentName:"p"},"tulis bab 2"),"."),Object(r.a)("p",null,"Bila kita memeriksa isi berkas ",Object(r.a)("strong",{parentName:"p"},"panduan.md")," maka kita akan melihat bahwa isi dari berkas tersebut hanya Bab 1 dan Bab 2"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("h3",Object(t.a)({parentName:"li"},{id:"menggabungkan-bab-1-dan-bab-3-meninggalkan-bab-2"}),"Menggabungkan Bab 1 dan Bab 3 (Meninggalkan Bab 2)"),"Bersambung ....")))}b.isMDXComponent=!0}}]);