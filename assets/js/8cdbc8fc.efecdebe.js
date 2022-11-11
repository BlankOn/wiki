"use strict";(self.webpackChunkdocusaurus_wiki=self.webpackChunkdocusaurus_wiki||[]).push([[55639],{3905:function(e,n,a){a.d(n,{Zo:function(){return s},kt:function(){return d}});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function u(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var k=t.createContext({}),p=function(e){var n=t.useContext(k),a=n;return e&&(a="function"==typeof e?e(n):u(u({},n),e)),a},s=function(e){var n=p(e.components);return t.createElement(k.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,k=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,g=m["".concat(k,".").concat(d)]||m[d]||o[d]||r;return a?t.createElement(g,u(u({ref:n},s),{},{components:a})):t.createElement(g,u({ref:n},s))}));function d(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,u=new Array(r);u[0]=m;var l={};for(var k in n)hasOwnProperty.call(n,k)&&(l[k]=n[k]);l.originalType=e,l.mdxType="string"==typeof e?e:i,u[1]=l;for(var p=2;p<r;p++)u[p]=a[p];return t.createElement.apply(null,u)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13724:function(e,n,a){a.r(n),a.d(n,{assets:function(){return s},contentTitle:function(){return k},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return o}});var t=a(83117),i=a(80102),r=(a(67294),a(3905)),u=["components"],l={},k="Panduan irgsh-cli untuk Pemaket",p={unversionedId:"TimPengembang/Pemaket/PanduanIrgshCLIUntukPemaket",id:"TimPengembang/Pemaket/PanduanIrgshCLIUntukPemaket",title:"Panduan irgsh-cli untuk Pemaket",description:"GPG",source:"@site/wiki/TimPengembang/Pemaket/PanduanIrgshCLIUntukPemaket.md",sourceDirName:"TimPengembang/Pemaket",slug:"/TimPengembang/Pemaket/PanduanIrgshCLIUntukPemaket",permalink:"/TimPengembang/Pemaket/PanduanIrgshCLIUntukPemaket",draft:!1,editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Pemaket/PanduanIrgshCLIUntukPemaket.md",tags:[],version:"current",frontMatter:{}},s={},o=[{value:"GPG",id:"gpg",level:2},{value:"Kebutuhan",id:"kebutuhan",level:3},{value:"Generate",id:"generate",level:3},{value:"Ekspor",id:"ekspor",level:3},{value:"Hapus",id:"hapus",level:3},{value:"Pendaftaran kunci pemaket ke irgsh",id:"pendaftaran-kunci-pemaket-ke-irgsh",level:2},{value:"irgsh-cli",id:"irgsh-cli",level:2},{value:"Kebutuhan",id:"kebutuhan-1",level:3},{value:"Pemasangan",id:"pemasangan",level:3},{value:"Konfigurasi awal",id:"konfigurasi-awal",level:3},{value:"Pemaketan dengan irgsh-cli",id:"pemaketan-dengan-irgsh-cli",level:3},{value:"Lumbung BlankOn",id:"lumbung-blankon",level:3},{value:"Memantau proses pembangunan paket",id:"memantau-proses-pembangunan-paket",level:3}],m={toc:o};function d(e){var n=e.components,a=(0,i.Z)(e,u);return(0,r.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"panduan-irgsh-cli-untuk-pemaket"},"Panduan irgsh-cli untuk Pemaket"),(0,r.kt)("h2",{id:"gpg"},"GPG"),(0,r.kt)("h3",{id:"kebutuhan"},"Kebutuhan"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apt install gnupg build-essential devscripts debhelper lintian dch"))),(0,r.kt)("h3",{id:"generate"},"Generate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"gnupg --full-generate-key\n")),(0,r.kt)("p",null,"Dalam proses akan ditanyakan informasi entitas dan kunci, contoh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"gpg (GnuPG) 2.2.20; Copyright (C) 2020 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.arsip-dev.blankonlinux.or.id/\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\n  (14) Existing key from card\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (3072) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0) 5y\nKey expires at Thu 20 Nov 2025 07:49:07 PM WIB\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: Herpiko Dwi Aguno\nEmail address: herpiko@gmail.com\nComment:\nYou selected this USER-ID:\n    \"Herpiko Dwi Aguno <herpiko@gmail.com>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\noienienoienoienoienoienoienoienoienoienoienoienoiengpg: key F73403755814255E marked as ultimately trusted\ngpg: directory '/home/herpiko/.gnupg/openpgp-revocs.d' created\noienoiegpg: revocation certificate stored as '/home/herpiko/.gnupg/openpgp-revocs.d/4E1C6A31FB1DF66463806857F73403755814255E.rev'\npublic and secret key created and signed.\n\npub   rsa4096 2020-11-21 [SC] [expires: 2025-11-20]\n      4E1C6A31FB1DF66463806857F73403755814255E\nuid                      Herpiko Dwi Aguno <herpiko@gmail.com>\nsub   rsa4096 2020-11-21 [E] [expires: 2025-11-20]\n")),(0,r.kt)("p",null,"Lihat kunci yang sudah dibikin dengan,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"gnupg -K\n")),(0,r.kt)("h3",{id:"ekspor"},"Ekspor"),(0,r.kt)("p",null,"Salin terlebih dahulu identitas kuncinya. Lihat identitas kunci yang ada dengan perintah ",(0,r.kt)("inlineCode",{parentName:"p"},"gpg -K"),". Outputnya:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/home/herpiko/.gnupg/pubring.kbx\n--------------------------------\nsec   rsa4096 2020-11-21 [SC] [expires: 2025-11-20]\n      4E1C6A31FB1DF66463806857F73403755814255E\nuid           [ultimate] Herpiko Dwi Aguno <herpiko@gmail.com>\nssb   rsa4096 2020-11-21 [E] [expires: 2025-11-20]\n")),(0,r.kt)("p",null,"Di kasus output di atas, identitas kuncinya adalah ",(0,r.kt)("inlineCode",{parentName:"p"},"4E1C6A31FB1DF66463806857F73403755814255E"),"."),(0,r.kt)("p",null,"Kemudian coba ekspor kunci publiknya dengan perintah,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"gpg --armor --export 4E1C6A31FB1DF66463806857F73403755814255E > namapemaket-gpg-pubkey\n")),(0,r.kt)("p",null,"Sampai di sini, kuncinya dapat diserahkan ke tim infra untuk disuntikkan ke GPG keystore irgsh."),(0,r.kt)("h3",{id:"hapus"},"Hapus"),(0,r.kt)("p",null,"Menghapus kunci cukup dengan perintah,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"gpg --delete-key 4E1C6A31FB1DF66463806857F73403755814255E\n")),(0,r.kt)("h2",{id:"pendaftaran-kunci-pemaket-ke-irgsh"},"Pendaftaran kunci pemaket ke irgsh"),(0,r.kt)("p",null,"Bagian ini dilakukan oleh Tim Infra."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bawa kunci-kunci yang mau diimpor ke mesin irgsh, misal dengan ",(0,r.kt)("inlineCode",{parentName:"li"},"scp")),(0,r.kt)("li",{parentName:"ul"},"Masuk ke user ",(0,r.kt)("inlineCode",{parentName:"li"},"irgsh")),(0,r.kt)("li",{parentName:"ul"},"Impor dengan perintah ",(0,r.kt)("inlineCode",{parentName:"li"},"gpg --import < /path/to/pub.key")),(0,r.kt)("li",{parentName:"ul"},"Setelah diimpor, pastikan kuncinya terdaftar dengan perintah ",(0,r.kt)("inlineCode",{parentName:"li"},"gpg --list-key"))),(0,r.kt)("p",null,"Untuk menghapus kunci (misal pemaket sudah mengundurkan diri),"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cari ID kuncinya dari ",(0,r.kt)("inlineCode",{parentName:"li"},"gpg --list-key")),(0,r.kt)("li",{parentName:"ul"},"Hapus dengan perintah ",(0,r.kt)("inlineCode",{parentName:"li"},"gpg --delete-key IDKUNCI"),", misal")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"gpg --delete-key 2241430595AAE28DA3352AACA2DFD68CA9E2F65A\ngpg (GnuPG) 2.2.12; Copyright (C) 2018 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\n\npub  rsa4096/A2DFD68CA9E2F65A 2021-06-16 RedactedName <redacted.name@gmail.com>\n\nDelete this key from the keyring? (y/N) y\n")),(0,r.kt)("h2",{id:"irgsh-cli"},"irgsh-cli"),(0,r.kt)("h3",{id:"kebutuhan-1"},"Kebutuhan"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Turunan Debian"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apt install gnupg curl jq tar build-essential devscripts debhelper"))),(0,r.kt)("h3",{id:"pemasangan"},"Pemasangan"),(0,r.kt)("p",null,"Pasang ",(0,r.kt)("inlineCode",{parentName:"p"},"irgsh-cli")," dengan perintah satu baris berikut,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -L -o- https://raw.githubusercontent.com/BlankOn/irgsh-go/master/install-cli.sh | bash\n")),(0,r.kt)("p",null,"Bila sudah selesai, akan tampil output seperti di bawah ini yang menandakan irgsh-cli siap dipakai,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/tmp /tmp\nExtracting ...\nExtracting [OK]\n\nInstalling files ...\n'/tmp/irgsh-go/usr/bin/irgsh-cli' -> '/usr/bin/irgsh-cli'\nHappy hacking!\n")),(0,r.kt)("h3",{id:"konfigurasi-awal"},"Konfigurasi awal"),(0,r.kt)("p",null,"Sebelum mengkonfigurasi ",(0,r.kt)("inlineCode",{parentName:"p"},"irgsh-cli"),", pemaket perlu mengkonfirmasi ke Tim Infra di mana ",(0,r.kt)("inlineCode",{parentName:"p"},"irgsh-chief")," (induk dari komponen-komponen irgsh) dinyalakan. Dalam lokakarya ini, induk irgsh hidup di ",(0,r.kt)("inlineCode",{parentName:"p"},"https://irgsh.blankonlinux.or.id"),"."),(0,r.kt)("p",null,"Kemudian konfigurasikan ",(0,r.kt)("inlineCode",{parentName:"p"},"irgsh-cli")," dengan perintah berikut,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"irgsh-cli config --chief https://irgsh.blankonlinux.or.id --key 4E1C6A31FB1DF66463806857F73403755814255E\n")),(0,r.kt)("p",null,"Sampai di sini, ",(0,r.kt)("inlineCode",{parentName:"p"},"irgsh-cli")," akan bekerja dengan induk irgsh ",(0,r.kt)("a",{parentName:"p",href:"https://irgsh.blankonlinux.or.id"},"https://irgsh.blankonlinux.or.id")," menggunakan kunci pemaket ",(0,r.kt)("inlineCode",{parentName:"p"},"4E1C6A31FB1DF66463806857F73403755814255E"),"."),(0,r.kt)("h3",{id:"pemaketan-dengan-irgsh-cli"},"Pemaketan dengan irgsh-cli"),(0,r.kt)("p",null,"Pemaket membutuhkan setidaknya 2 hal untuk memaketkan paket ke irgsh, yaitu:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Spesifikasi Debian (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/blankon-packages"},"https://github.com/blankon-packages"),")"),(0,r.kt)("li",{parentName:"ul"},"Kode sumber (fitur opsional menunggu tiket ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/BlankOn/irgsh-go/issues/78"},"https://github.com/BlankOn/irgsh-go/issues/78"),")")),(0,r.kt)("p",null,"Keduanya didefinisikan dengan URL lumbung kode (bisa dari mana pun yang penting dapat diakses oleh internet dan sifatnya publik)."),(0,r.kt)("p",null,"Misal kita akan mencoba untuk memaketkan ",(0,r.kt)("inlineCode",{parentName:"p"},"bromo-theme")," dengan bahan di bawah ini:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Spesifikasi Debian: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/blankon-packages/bromo-theme"},"https://github.com/blankon-packages/bromo-theme")),(0,r.kt)("li",{parentName:"ul"},"Kode sumber: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/blankon/bromo-theme"},"https://github.com/blankon/bromo-theme"))),(0,r.kt)("p",null,"Setelah keduanya disiapkan, pemaket dapat menyuntikkan paket ke irgsh dengan perintah berikut,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"irgsh-cli submit --source https://github.com/blankon/bromo-theme --package https://github.com/blankon-packages/bromo-theme --experimental\n")),(0,r.kt)("p",null,"Flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--experimental")," menandakan paket ini akan disuntikkan ke lumbung experimental alih-alih ke lumbung pengembangan resmi. Tujuannya untuk uji coba sebelum benar-benar dipaketkan ke lumbung."),(0,r.kt)("h3",{id:"lumbung-blankon"},"Lumbung BlankOn"),(0,r.kt)("p",null,"Lumbung pengembangan resmi terletak di arsip-dev.blankonlinux.or.id. Untuk paket experimental akan disuntik ke arsip-dev.blankonlinux.or.id/experimental, sementara paket resmi masuk ke arsip-dev.blankonlinux.or.id/dev."),(0,r.kt)("p",null,"Lumbung experimental digunakan oleh pemaket ketika menguji suatu paket. Pemaket harus memastikan bahwa aplikasi yang dipaketkan berhasil dibuat di lumbung ini. Jika sudah dipastikan sukses (bisa dicek hasilnya di ",(0,r.kt)("a",{parentName:"p",href:"arsip-dev.blankonlinux.or.id/experimental/pool/"},"sini"),"), maka paket tersebut boleh disuntikkan ke lumbung dev."),(0,r.kt)("p",null,"Ketika paket sudah masuk ke lumbung dev, paket tersebut akan kembali diuji. Pengembang harus bisa memastikan bahwa paket tersebut berjalan sesuai harapan, baik itu sukses dipasang, sukses diupgrade, maupun sukses dihapus.  "),(0,r.kt)("h3",{id:"memantau-proses-pembangunan-paket"},"Memantau proses pembangunan paket"),(0,r.kt)("p",null,"Untuk memantau proses pembangunan paket, gunakan perintah berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"irgsh-cli log\n")),(0,r.kt)("p",null,"Atau dengan membubuhkan id pipeline,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"irgsh-cli log 2020-11-21-205136_b8dbbd86-0ee1-409a-b3e3-4ec4d97c5302\n")),(0,r.kt)("p",null,"Panduan lebih detail mengenai pemaketan dengan irgsh-cli dapat disimak di ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/BlankOn/wiki/blob/master/TimPengembang/Pemaket/PanduanPemaketanMenggunakanIrgshCli.md"},"https://github.com/BlankOn/wiki/blob/master/TimPengembang/Pemaket/PanduanPemaketanMenggunakanIrgshCli.md")))}d.isMDXComponent=!0}}]);