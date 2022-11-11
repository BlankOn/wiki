"use strict";(self.webpackChunkdocusaurus_wiki=self.webpackChunkdocusaurus_wiki||[]).push([[67652],{3905:function(a,t,e){e.d(t,{Zo:function(){return l},kt:function(){return c}});var n=e(67294);function r(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function i(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function u(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){r(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function k(a,t){if(null==a)return{};var e,n,r=function(a,t){if(null==a)return{};var e,n,r={},i=Object.keys(a);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||(r[e]=a[e]);return r}(a,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(r[e]=a[e])}return r}var p=n.createContext({}),s=function(a){var t=n.useContext(p),e=t;return a&&(e="function"==typeof a?a(t):u(u({},t),a)),e},l=function(a){var t=s(a.components);return n.createElement(p.Provider,{value:t},a.children)},o={inlineCode:"code",wrapper:function(a){var t=a.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(a,t){var e=a.components,r=a.mdxType,i=a.originalType,p=a.parentName,l=k(a,["components","mdxType","originalType","parentName"]),m=s(e),c=r,d=m["".concat(p,".").concat(c)]||m[c]||o[c]||i;return e?n.createElement(d,u(u({ref:t},l),{},{components:e})):n.createElement(d,u({ref:t},l))}));function c(a,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof a||r){var i=e.length,u=new Array(i);u[0]=m;var k={};for(var p in t)hasOwnProperty.call(t,p)&&(k[p]=t[p]);k.originalType=a,k.mdxType="string"==typeof a?a:r,u[1]=k;for(var s=2;s<i;s++)u[s]=e[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,e)}m.displayName="MDXCreateElement"},39711:function(a,t,e){e.r(t),e.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return k},metadata:function(){return s},toc:function(){return o}});var n=e(83117),r=e(80102),i=(e(67294),e(3905)),u=["components"],k={},p="Lokakarya Membuat Certificate Authority Utama",s={unversionedId:"TimPengembang/Dokumentasi/Panduan/MembuatCertificateAuthorityUtama",id:"TimPengembang/Dokumentasi/Panduan/MembuatCertificateAuthorityUtama",title:"Lokakarya Membuat Certificate Authority Utama",description:"Lokakarya ini diselenggarakan pada tanggal 25 Februari 2011 bertempat di irc.freenode.net channel #blankon oleh bapak Fajran Iman Rusadi.",source:"@site/wiki/TimPengembang/Dokumentasi/Panduan/MembuatCertificateAuthorityUtama.md",sourceDirName:"TimPengembang/Dokumentasi/Panduan",slug:"/TimPengembang/Dokumentasi/Panduan/MembuatCertificateAuthorityUtama",permalink:"/TimPengembang/Dokumentasi/Panduan/MembuatCertificateAuthorityUtama",draft:!1,editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Dokumentasi/Panduan/MembuatCertificateAuthorityUtama.md",tags:[],version:"current",frontMatter:{}},l={},o=[],m={toc:o};function c(a){var t=a.components,e=(0,r.Z)(a,u);return(0,i.kt)("wrapper",(0,n.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lokakarya-membuat-certificate-authority-utama"},"Lokakarya Membuat Certificate Authority Utama"),(0,i.kt)("p",null,"Lokakarya ini diselenggarakan pada tanggal 25 Februari 2011 bertempat di irc.freenode.net channel #blankon oleh bapak Fajran Iman Rusadi."),(0,i.kt)("p",null,"Dalam kriptografi, Certificate Authority (CA) adalah sebuah entitas yang mengeluarkan sertifikat digital yang dapat digunakan pihak-pihak lainnya. Para CA merupakan contoh pihak-pihak yang dapat dipercayai, khususnya dalam transaksi secara online di internet.\u200b ",(0,i.kt)("a",{parentName:"p",href:"http://id.wikipedia.org/wiki/Certificate_authority"},"http://id.wikipedia.org/wiki/Certificate_authority")),(0,i.kt)("p",null,"Jika kita berbicara tentang Certificate Authority (CA) ada 2 istilah yang akan mengikuti diantaranya: Identitas dan Kepercayaan (trust). Secara analogi kita bisa membuat sertifikat untuk identitas kita tapi apakah identitas kita dipercaya oleh orang lain."),(0,i.kt)("p",null,"Mari kita langsung ke tutorial. "),(0,i.kt)("h1",{id:"membuat-certificate-authority-utama"},"Membuat Certificate Authority Utama"),(0,i.kt)("p",null,"1.Buat direktori kerja "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$mkdir ca-utama\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$cd ca-utama\n")),(0,i.kt)("p",null,"2.Salin kode pembantu dari /usr/lib/ssl/misc/CA.pl "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$cp /usr/lib/ssl/misc/CA.pl .\n")),(0,i.kt)("p",null,"3.Buat CA baru ",(0,i.kt)("strong",{parentName:"p"},"$./CA.pl -newca"),"\nSertifikat akan disimpan di demoCA/cacert.pem. Untuk melihat informasi detail mengenai sebuah sertifikat, kita bisa menggunakan openssl, sebagai berikut\n",(0,i.kt)("strong",{parentName:"p"},"$openssl x509 -in demoCA/cacert.pem -text"),"\nSalah satu karakteristik sertifikat CA adalah sertifikat ini dipakai untuk menandatangani dirinya sendiri. Dalam informasi sertifikat, hal ini dapat dilihat pada bagian Subject dan Issuer.\n",(0,i.kt)("strong",{parentName:"p"},"$ openssl x509 -in demoCA/cacert.pem -text |grep 'Subject:","|","Issuer'"),"\nIssuer: C=ID, ST=Jakarta, O=BlankOn, OU=Infrastruktur, CN=CA\nSubject: C=ID, ST=Jakarta, O=BlankOn, OU=Infrastruktur, CN=CA"),(0,i.kt)("p",null,"Bisa dilihat isi keduanya sama, hal ini menunjukkan self-signed certificate atau sertifikat yang ditandatangani sendiri."),(0,i.kt)("h1",{id:"membuat-sertifikat-baru"},"Membuat Sertifikat Baru"),(0,i.kt)("p",null,"1.Buat permintaan sertifikat baru\n",(0,i.kt)("strong",{parentName:"p"},"$./CA.pl -newreq")),(0,i.kt)("p",null,"2.Tandatangani permintaan sertifikat tersebut dengan CA yang ada\n",(0,i.kt)("strong",{parentName:"p"},"$./CA.pl -sign")),(0,i.kt)("p",null,"Setelah ditandatangani, akan ada 3 buah berkas yaitu newcert.pem, newkey.pem, dan newreq.pem. Berkas newreq.pem bisa dihapus karena sudah tidak dipakai lagi. Berkas ini hanya berisi permintaan pembuatan sertifikat, bukan sertifikat akhir. Berkas newcert.pem dan newkey.pem adalah dua berkas yang harus diamankan karena berkas ini adalah berkas sertifikat dan kuncinya.\nMari kita cek judul dan penerbit sertifikat baru ini."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"$openssl x509 -in newcert.pem -text | grep 'Subject:","|","Issuer:'")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Issuer: C=ID, ST=Jakarta, O=BlankOn, OU=Infrastruktur, CN=CA\nSubject: C=ID, ST=Jakarta, L=Jakarta, O=BlankOn, OU=Irgsh, CN=CA Pabrik\n")),(0,i.kt)("p",null,"Sekarang kita sudah punya sebuah sertifikat baru yang telah ditandatangani oleh CA yang kita buat di awal."),(0,i.kt)("h1",{id:"menjadikan-sertifikat-baru-sebagai-ca-kedua"},"Menjadikan Sertifikat Baru sebagai CA Kedua"),(0,i.kt)("p",null,"1.siapkan direktori kerja baru "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$cd ..\n$mkdir ca-kedua\n$cd ca-kedua\n$cp /usr/lib/ssl/misc/CA.pl .\n")),(0,i.kt)("p",null,"2.Agar kode CA.pl dapat bekerja, kita harus mempersiapkan lingkungan kerjanya dengan opsi -newca. Namun alih-alih menyuruh kode tersebut untuk membuat sertifikat CA baru, kita bisa menggunakan sertifikat yang sudah ada. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"**$./CA.pl -newca**\nCA certificate filename (or enter to create)\n../ca-utama/newcert.pem\n")),(0,i.kt)("p",null,"3.Salin berkas kunci sertifikat\n",(0,i.kt)("strong",{parentName:"p"},"$cp ../ca-utama/newkey.pem demoCA/private/cakey.pem")),(0,i.kt)("p",null,"4.Siapkan nomor seri baru "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"$echo 00 > demoCA/serial")),(0,i.kt)("p",null,"Sama seperti sebelumnya, sertifikat CA ada di demoCA/cacert.pem. Mari kita cek isinya."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"**$openssl x509 -in demoCA/cacert.pem -text | grep 'Subject:\\|Issuer:'\nIssuer: C=ID, ST=Jakarta, O=BlankOn, OU=Infrastruktur, CN=CA\nSubject: C=ID, ST=Jakarta, L=Jakarta, O=BlankOn, OU=Irgsh, CN=CA Pabrik\n")),(0,i.kt)("p",null,"Persis sama dengan sertifikat yang dibuat sebelumnya khan? Memang sertifikat itu yang akan dipakai menjadi CA baru ini."),(0,i.kt)("h1",{id:"membuat-sertifikat-dengan-ca-tingkat-kedua-tadi"},"Membuat Sertifikat dengan CA Tingkat Kedua tadi"),(0,i.kt)("p",null,"1.Buat permintaan sertifikat seperti biasa.\n",(0,i.kt)("strong",{parentName:"p"},"./CA.pl -newreq")),(0,i.kt)("p",null,"2.Tandatangani sertifikat tersebut\n",(0,i.kt)("strong",{parentName:"p"},"./CA.pl -sign")),(0,i.kt)("p",null,"Seperti biasa, kita akan menjumpai 3 berkas baru. Mari kita cek informasi sertifikat baru ini."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$openssl x509 -in newcert.pem -text | grep 'Subject:\\|Issuer:'\nIssuer: C=ID, ST=Jakarta, L=Jakarta, O=BlankOn, OU=Irgsh, CN=CA Pabrik\nSubject: C=ID, ST=Jakarta, L=Jakarta, O=BlankOn, OU=Pabrik, CN=Pekerja64\n")),(0,i.kt)("p",null,"Dapat dilihat sertifikat baru ini ditandatangani oleh CA kedua yang telah kita buat."),(0,i.kt)("h1",{id:"bertingkat"},"Bertingkat"),(0,i.kt)("p",null,"Mari kita lihat informasi 3 sertifikat yang telah kita buat."),(0,i.kt)("p",null,"1.CA Utama\n",(0,i.kt)("strong",{parentName:"p"},"$openssl x509 -in ../ca-utama/demoCA/cacert.pem -text | grep 'Subject:","|","Issuer:'")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Issuer: C=ID, ST=Jakarta, O=BlankOn, OU=Infrastruktur, CN=CA\nSubject: C=ID, ST=Jakarta, O=BlankOn, OU=Infrastruktur, CN=CA\n")),(0,i.kt)("p",null,"2.CA Kedua "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"$openssl x509 -in demoCA/cacert.pem -text | grep 'Subject:","|","Issuer:'")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Issuer: C=ID, ST=Jakarta, O=BlankOn, OU=Infrastruktur, CN=CA\nSubject: C=ID, ST=Jakarta, L=Jakarta, O=BlankOn, OU=Irgsh, CN=CA Pabrik\n")),(0,i.kt)("p",null,"3.Sertifikat Biasa\n",(0,i.kt)("strong",{parentName:"p"}," $openssl x509 -in newcert.pem -text | grep 'Subject:","|","Issuer:' ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Issuer: C=ID, ST=Jakarta, L=Jakarta, O=BlankOn, OU=Irgsh, CN=CA Pabrik\nSubject: C=ID, ST=Jakarta, L=Jakarta, O=BlankOn, OU=Pabrik, CN=Pekerja64\n")),(0,i.kt)("p",null,"Referensi :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"   \u200bhttp://ngoprek.fajran.web.id/2011/02/membuat-certificate-authority.html\n   \u200bhttp://idforge.or.id/irclogs/blankon/%23blankon.2011-02-25.log\n")))}c.isMDXComponent=!0}}]);