(window.webpackJsonp=window.webpackJsonp||[]).push([[946],{1018:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return s})),n.d(e,"metadata",(function(){return u})),n.d(e,"toc",(function(){return k})),n.d(e,"default",(function(){return l}));var t=n(3),i=n(7),r=(n(0),n(1050)),s={},u={unversionedId:"TimPengembang/Infrastruktur/ImplementasiPabrikPaket",id:"TimPengembang/Infrastruktur/ImplementasiPabrikPaket",isDocsHomePage:!1,title:"Implementasi Pabrik Paket",description:"Cara Kerja",source:"@site/Wiki/TimPengembang/Infrastruktur/ImplementasiPabrikPaket.md",sourceDirName:"TimPengembang/Infrastruktur",slug:"/TimPengembang/Infrastruktur/ImplementasiPabrikPaket",permalink:"/TimPengembang/Infrastruktur/ImplementasiPabrikPaket",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/ImplementasiPabrikPaket.md",version:"current",frontMatter:{}},k=[{value:"Kode sumber",id:"kode-sumber",children:[]},{value:"Karakteristik",id:"karakteristik",children:[]},{value:"Induk",id:"induk",children:[]},{value:"Cabang",id:"cabang",children:[]},{value:"Implementasi dan instalasi",id:"implementasi-dan-instalasi",children:[]}],b={toc:k};function l(a){var e=a.components,n=Object(i.a)(a,["components"]);return Object(r.b)("wrapper",Object(t.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Cara Kerja"),Object(r.b)("h3",{id:"kode-sumber"},"Kode sumber"),Object(r.b)("p",null,"\u200b",Object(r.b)("a",{parentName:"p",href:"https://code.launchpad.net/~blankon-infrastruktur/blankon/pabrik-paket"},"https://code.launchpad.net/~blankon-infrastruktur/blankon/pabrik-paket")),Object(r.b)("h3",{id:"karakteristik"},"Karakteristik"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Minimalis, mengandalkan hanya http biasa."),Object(r.b)("li",{parentName:"ul"},"Catatan dilakukan dalam berkas teks biasa."),Object(r.b)("li",{parentName:"ul"},"Komunikasi antara induk dan cabang dilakukan secara pasif, melalui\nbantuan berkas teks biasa.")),Object(r.b)("h3",{id:"induk"},"Induk"),Object(r.b)("p",null,"Informasi yang diberikan:\nContoh saat ini, <url-dasar",">","nya adalah: \u200b",Object(r.b)("a",{parentName:"p",href:"http://irgsh.blankonlinux.or.id."},"http://irgsh.blankonlinux.or.id."),"\nInduk membuat berkas kerja baru pada direktori jobs/<pekerjaan",">","/\njobdesc.txt. Isi berkas ini adalah informasi pekerjaannya, yaitu nama tag, url\ndi gudang kode, url paket asli dari Ubuntu (berkas .orig.tar.gz), dan\ndistribusi pekerjaan (misalnya konde-updates, konde-security, dsb)."),Object(r.b)("h4",{id:"tugas-induk-utama"},"Tugas Induk Utama"),Object(r.b)("p",null,"Tugas induk utama dikerjakan oleh skrip run-master.sh."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Induk mengambil status semua cabang (mengunduh berkas status.txt) yang\nmemiliki status bukan IDLE (lihat bagian ",Object(r.b)("em",{parentName:"li"},"Pengecekan Hasil"),"), serta\nmengecek denyut nadi terakhir (berkas last-seen.txt). Bila cabang aktif\nkurang dari 2 jam yang lalu maka cabang dianggap masih aktif. Isi berkas\nstatus.txt menandakan apakah cabang sedang sibuk mengerjakan paket\n(berisi kata BUSY), selesai mengerjakan paket (berisi kata DONE atau\nERROR) atau sedang menganggur (berisi kata IDLE). Bila cabang menganggur\nke langkah 6."),Object(r.b)("li",{parentName:"ol"},"Induk memperbarui daftar paket siap bangun dari direktori queue, bila ada\npaket baru ke langkah 3. Bila tidak ada paket baru, induk mengisi semua\nberkas slaves/","*","/job.txt dengan kata NONE. Direktori queue adalah taut\nsimbolik ke direktori pekerjaan jobs, namun pada direktori pekerjaan\nmenggunakan tanda minus sebagai penghubung, misalnya pekerjaan di jobs/\n200711/0010 akan muncul di queue/ sebagai queue/<arsitektur",">","/200711-0010."),Object(r.b)("li",{parentName:"ol"},"Dari hasil langkah 1, induk menentukan cabang mana yang akan mengerjakan\npaket baru ini. Bila tidak ada cabang yang menganggur maka kembali ke\nlangkah 1. Bila ada cabang yang menganggur induk segera menuliskan\n<nomor-pekerjaan",">"," tadi di dalam berkas slaves/<nama-cabang",">","/job.txt. Itu\ntandanya cabang diberikan tugas untuk mengerjakan <nomor-pekerjaan",">",". Taut\nsimbolik di direktori queue dihapus."),Object(r.b)("li",{parentName:"ol"},"Bila masih ada paket baru lagi yang belum dikerjakan kembali ke 2."),Object(r.b)("li",{parentName:"ol"},"Induk beristirahat selama beberapa saat (450 detik). Kembali ke 1.")),Object(r.b)("h4",{id:"pengecekan-hasil"},"Pengecekan Hasil"),Object(r.b)("p",null,"Pada bagian ini induk hanya mengecek semua paket yang telah selesai atau sedang\ndikerjakan. Bagian ini dikerjakan oleh skrip get-result.sh\nInduk mengunduh berkas status.txt dari semua cabang.\nBila berisi BUSY, induk mengunduh build-stage.txt.\nBila berisi ERROR, induk mengunduh berkas build-log.txt.bz2. Induk\nkemudian menulis berkas slaves/<nama-cabang",">","/ack.txt dengan <nomor-\npekerjaan",">",". Tujuannya supaya cabang tahu bahwa induk sudah mengetahui\nhasil kerja ini. Induk juga membersihkan status pekerjaan cabang\ndengan menulis kata NONE pada slaves/<nama-cabang",">","/job.txt. Terakhir,\ninduk mengonfirmasi pekerjaan dengan menuliskan kata ERROR pada jobs/\n<nomor-pekerjaan",">","/<arsitektur",">","/status.txt sekaligus mengirim surat\nkepada pengirim paket.\nBila berisi DONE, induk mengunduh berkas manifest.txt dan mengambil\nsemua berkas yang tercantum dalam berkas manifest.txt ke dalam\ndirektori incoming/<nama-cabang",">",", kemudian menulis berkas slaves/\n<nama-cabang",">","/ack.txt dengan <nomor-pekerjaan",">",". Tujuannya supaya\ncabang tahu bahwa induk sudah mengunduh semua hasil pekerjaannya.\nInduk juga membersihkan status pekerjaan cabang dengan menulis kata\nNONE pada slaves/<nama-cabang",">","/job.txt. Kemudian, induk menyetujui\nhasil kerja dengan menuliskan kata DONE pada jobs/<nomor-pekerjaan",">","/\n<arsitektur",">","/status.txt. Terakhir induk akan memasukkan semua hasil\nkerja ke repositori (Lihat bagian ",Object(r.b)("em",{parentName:"p"},"Pengunggahan ke Repositori"),")"),Object(r.b)("h4",{id:"pengunggahan-ke-repositori"},"Pengunggahan ke Repositori"),Object(r.b)("p",null,"Pengunggahan ke repositori dilakukan oleh bikin-arsip.sh."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Skrip mencari semua berkas berakhiran .changes, dan dari tiap-tiap berkas\ntersebut diambil semua berkas yang tercantum di dalamnya dan dimasukkan\nke dalam pool. Pabrik juga akan mengirim surat kepada pemaket yang\nmengirimkan paket (yang tercantum dalam debian/changelog) bahwa paket\ntelah masuk ke repositori."),Object(r.b)("li",{parentName:"ol"},"Berkas Packages, Packages.gz, Release, dan Release.gpg dibuat ulang dalam\nmasing-masing distribusi yang ada dalam repositori.")),Object(r.b)("h3",{id:"cabang"},"Cabang"),Object(r.b)("p",null,"Informasi yang diberikan:\nContoh saat ini, <url-dasar",">","nya adalah: \u200b",Object(r.b)("a",{parentName:"p",href:"http://tempayan.blankonlinux.or.id/"},"http://tempayan.blankonlinux.or.id/")),Object(r.b)("h4",{id:"tugas-induk-utama-1"},"Tugas induk utama"),Object(r.b)("p",null,"Tugas ini dikerjakan oleh berkas run-slave.sh."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Bila status terakhir bukan IDLE maka cabang akan memeriksa apakah induk\ntelah mengonfirmasi hasil pekerjaan sebelumnya (pada <url-induk",">","/slaves/\narsitektur/<nama-cabang",">","/ack.txt). Bila berkas tersebut berisi nomor\npekerjaan yang sama dengan nomor sebelumnya, maka semua berkas dalam\ndirektori results/ akan dihapus."),Object(r.b)("li",{parentName:"ol"},"Bila IDLE cabang akan memeriksa apakah cabang sedang diistirahatkan atau\ntidak (dengan mengecek keberadaan berkas .slave-paused. Bila tidak,\ncabang akan mengambil berkas <url-induk",">","/slaves/<arsitektur",">","/job.txt.",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Bila berisi NONE maka tidak ada yang perlu dilakukan cabang."),Object(r.b)("li",{parentName:"ol"},"Bila berisi nomor pekerjaan baru, maka cabang akan mengambil berkas\njob-desc.txt dari induk dan memrosesnya (Lihat ",Object(r.b)("em",{parentName:"li"},"Pemrosesan Paket"),").\nCabang juga mengisi berkas status.txt dengan kata BUSY.",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Bila pemrosesan paket berhasil (isi last-job-status.txt\nberisi angka 0) maka cabang akan menyalin semua hasil\npemaketan dari pbuilder ke direktori results, kemudian\nmendaftarkan semua berkas yang ada di direktori results ke\ndalam berkas manifest.txt. Cabang juga mengisi berkas\nstatus.txt dengan kata DONE."),Object(r.b)("li",{parentName:"ol"},"Bila gagal (isi last-job-status.txt berisi angka 1 atau 2)\nmaka cabang akan mengisi berkas status.txt dengan kata ERROR\ndan mengompres berkas build-log.txt menjadi build-\nlog.txt.bz2.")))))),Object(r.b)("h4",{id:"pemrosesan-paket"},"Pemrosesan paket"),Object(r.b)("p",null,"Tugas ini dikerjakan oleh fungsi build_jobdesc pada berkas run-slave.sh."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Mengunduh tag pada gudang kode."),Object(r.b)("li",{parentName:"ol"},"Memeriksa apakah kode distribusi pada debian/changelog sama dengan\ndeskripsi yang telah diberikan melalui antarmuka web. Bila tidak sama,\nmaka pemrosesan gagal dengan kode 2."),Object(r.b)("li",{parentName:"ol"},"Mengunduh tarball asli (bila ada). Tarbal diekstrak dan digabungkan\ndengan paket yang diunduh dari gudang kode yang telah dilakukan pada\ntahap 1."),Object(r.b)("li",{parentName:"ol"},"Membuat berkas .dsc dan .tar.gz dengan dpkg-source."),Object(r.b)("li",{parentName:"ol"},"Memperbarui lingkungan pembangunan di pbuilder (apt-get upgrade). Bila\ngagal, maka proses diberi kode 1."),Object(r.b)("li",{parentName:"ol"},"Melakukan pembangunan di pbuilder. Bila gagal, maka proses diberi kode 2.")),Object(r.b)("h4",{id:"kode-hasil-pemrosesan-paket"},"Kode hasil pemrosesan paket"),Object(r.b)("p",null,"0 Paket sukses dibuat\n1 proses pemaketan gagal tapi dapat diulangi (ada kesalahan kecil di\nrepositori atau tag atau url)\n2 berarti proses pemaketan gagal dan tidak dapat diulangi, artinya\npemaket harus membuat tiket baru."),Object(r.b)("h2",{id:"implementasi-dan-instalasi"},"Implementasi dan instalasi"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Pabrik Induk?"),Object(r.b)("li",{parentName:"ul"},"Pabrik_Cabang")))}l.isMDXComponent=!0},1050:function(a,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return o}));var t=n(0),i=n.n(t);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function s(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function u(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function k(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var b=i.a.createContext({}),l=function(a){var e=i.a.useContext(b),n=e;return a&&(n="function"==typeof a?a(e):u(u({},e),a)),n},m=function(a){var e=l(a.components);return i.a.createElement(b.Provider,{value:e},a.children)},d={inlineCode:"code",wrapper:function(a){var e=a.children;return i.a.createElement(i.a.Fragment,{},e)}},g=i.a.forwardRef((function(a,e){var n=a.components,t=a.mdxType,r=a.originalType,s=a.parentName,b=k(a,["components","mdxType","originalType","parentName"]),m=l(n),g=t,o=m["".concat(s,".").concat(g)]||m[g]||d[g]||r;return n?i.a.createElement(o,u(u({ref:e},b),{},{components:n})):i.a.createElement(o,u({ref:e},b))}));function o(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var r=n.length,s=new Array(r);s[0]=g;var u={};for(var k in e)hasOwnProperty.call(e,k)&&(u[k]=e[k]);u.originalType=a,u.mdxType="string"==typeof a?a:t,s[1]=u;for(var b=2;b<r;b++)s[b]=n[b];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);