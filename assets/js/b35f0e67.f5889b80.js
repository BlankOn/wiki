(window.webpackJsonp=window.webpackJsonp||[]).push([[691],{1050:function(a,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return d}));var t=e(0),i=e.n(t);function u(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function r(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function l(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){u(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function k(a,n){if(null==a)return{};var e,t,i=function(a,n){if(null==a)return{};var e,t,i={},u=Object.keys(a);for(t=0;t<u.length;t++)e=u[t],n.indexOf(e)>=0||(i[e]=a[e]);return i}(a,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(a);for(t=0;t<u.length;t++)e=u[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(i[e]=a[e])}return i}var p=i.a.createContext({}),m=function(a){var n=i.a.useContext(p),e=n;return a&&(e="function"==typeof a?a(n):l(l({},n),a)),e},s=function(a){var n=m(a.components);return i.a.createElement(p.Provider,{value:n},a.children)},g={inlineCode:"code",wrapper:function(a){var n=a.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(a,n){var e=a.components,t=a.mdxType,u=a.originalType,r=a.parentName,p=k(a,["components","mdxType","originalType","parentName"]),s=m(e),b=t,d=s["".concat(r,".").concat(b)]||s[b]||g[b]||u;return e?i.a.createElement(d,l(l({ref:n},p),{},{components:e})):i.a.createElement(d,l({ref:n},p))}));function d(a,n){var e=arguments,t=n&&n.mdxType;if("string"==typeof a||t){var u=e.length,r=new Array(u);r[0]=b;var l={};for(var k in n)hasOwnProperty.call(n,k)&&(l[k]=n[k]);l.originalType=a,l.mdxType="string"==typeof a?a:t,r[1]=l;for(var p=2;p<u;p++)r[p]=e[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,e)}b.displayName="MDXCreateElement"},761:function(a,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return r})),e.d(n,"metadata",(function(){return l})),e.d(n,"toc",(function(){return k})),e.d(n,"default",(function(){return m}));var t=e(3),i=e(7),u=(e(0),e(1050)),r={},l={unversionedId:"TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanManajemenAplikasi",id:"TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanManajemenAplikasi",isDocsHomePage:!1,title:"Panduan Manajemen Aplikasi",description:"Pasang, Hapus dan Perawatan Perangkat Lunak",source:"@site/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanManajemenAplikasi.md",sourceDirName:"TimPengembang/Dokumentasi/Panduan/PanduanAplikasi",slug:"/TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanManajemenAplikasi",permalink:"/TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanManajemenAplikasi",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanManajemenAplikasi.md",version:"current",frontMatter:{}},k=[{value:"Pengaturan Perangkat Lunak pada BlankOn Linux",id:"pengaturan-perangkat-lunak-pada-blankon-linux",children:[]},{value:"Pengaturan Lumbung Paket",id:"pengaturan-lumbung-paket",children:[]},{value:"Memasang dan Menghapus Perangkat Lunak",id:"memasang-dan-menghapus-perangkat-lunak",children:[{value:"Warung Aplikasi",id:"warung-aplikasi",children:[]},{value:"Melalui Perintah apt-get",id:"melalui-perintah-apt-get",children:[]},{value:"Pemasangan melalui Berkas DEB",id:"pemasangan-melalui-berkas-deb",children:[]}]},{value:"Merawat Sistem",id:"merawat-sistem",children:[]}],p={toc:k};function m(a){var n=a.components,e=Object(i.a)(a,["components"]);return Object(u.b)("wrapper",Object(t.a)({},p,e,{components:n,mdxType:"MDXLayout"}),Object(u.b)("p",null,"Pasang, Hapus dan Perawatan Perangkat Lunak"),Object(u.b)("p",null,"BlankOn Linux sudah menyertakan berbagai perangkat lunak untuk keperluan dasar\nseperti aplikasi perkantoran, multimedia, internet, grafis, dll. Namun, jika\nAnda merasa kurang dengan perangkat lunak yang sudah terpasang, Anda bisa\nmelakukan pemasangan perangkat lunak yang Anda inginkan sesuai dengan\nkeperluan."),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre"}," INGAT! Pemasangan dan penghapusan perangkat lunak membutuhkan hak\n administratif karena dapat mengubah sistem. Untuk itu, yang bisa\n melakukan hal tersebut hanyalah pengguna yang memiliki kewenangan\n administratif.\n")),Object(u.b)("h3",{id:"pengaturan-perangkat-lunak-pada-blankon-linux"},"Pengaturan Perangkat Lunak pada BlankOn Linux"),Object(u.b)("p",null,"Cara pemasangan dan penghapusan perangkat lunak pada BlankOn Linux sangat\nberbeda dengan cara yang ada di sistem operasi Microsoft Windows. Jika\npemasangan perangkat lunak di Windows menggunakan sebuah installer atau program\npemasang dari masing-masing perangkat lunak, maka pada BlankOn Linux pemasangan\nperangkat lunak dilakukan menggunakan sistem manajemen paket perangkat lunak\nseperti pada Distro Linux lainnya. Manajemen paket yang ada di BlankOn Linux\nbernama APT."),Object(u.b)("p",null,"Di BlankOn, hampir semua perangkat lunak berasal dari suatu tempat yang bernama\nlumbung paket (package repository). APT adalah program yang berfungsi untuk\nmengunduh (download) paket yang Anda pilih dari lumbung dan memasangnya di\nkomputer."),Object(u.b)("p",null,"Dengan kata lain, Anda tidak perlu mengunduh sendiri paket perangkat lunak yang\ningin Anda pasang. Anda hanya perlu menentukan sumber paket atau lumbung paket\nperangkat lunak tersebut melalui APT, dan meminta perangkat lunak yang ingin\ndipasang atau dihapus. Maka APT akan melakukan apa yang Anda inginkan termasuk\nmengunduh paket, memasang, pemasangan konfigurasi, melakukan konfigurasi\nsistem, pemutakhiran (update) serta penghapusan.\nLumbung paket bisa berada dari beberapa sumber, yaitu:"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Server Web"),Object(u.b)("li",{parentName:"ul"},"Jaringan Lokal, misalnya dari server NFS,"),Object(u.b)("li",{parentName:"ul"},"Folder lokal.")),Object(u.b)("p",null,"Komunitas BlankOn memiliki lumbung paket resmi yang berada di situs \u200bhttp://\narsip.blankonlinux.or.id/blankon. Lumbung paket BlankOn sudah berisikan\nberbagai koleksi perangkat lunak yang lengkap dan siap untuk digunakan.\nSelain lumbung paket resmi, juga terdapat lumbung paket-lumbung paket lainnya\nyang isinya sama, namun hanya berbeda letak servernya. Kebanyakan dari lumbung\npaket yang ada disediakan oleh penyedia jasa cermin (mirror) dan beberapa\nperguruan tinggi di Indonesia. Berikut adalah beberapa alamat lumbung paket\nyang ada di Indonesia:"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"\u200b",Object(u.b)("a",{parentName:"li",href:"http://kambing.ui.ac.id/blankon/"},"http://kambing.ui.ac.id/blankon/")," (Universitas Indonesia)"),Object(u.b)("li",{parentName:"ul"},"\u200b",Object(u.b)("a",{parentName:"li",href:"http://repo.ugm.ac.id/blankon/"},"http://repo.ugm.ac.id/blankon/")," (Universitas Gajah Mada)")),Object(u.b)("h3",{id:"pengaturan-lumbung-paket"},"Pengaturan Lumbung Paket"),Object(u.b)("p",null,"Untuk melakukan pengaturan lumbung paket APT, klik Menu utama BlankOn > Lainnya"),Object(u.b)("blockquote",null,Object(u.b)("p",{parentName:"blockquote"},"Software dan Update. Setelah aplikasi terbuka anda bisa mengubah sesui\nkebutuhan.")),Object(u.b)("p",null,"[/raw-attachment/wiki/Dokumentasi/Panduan/ManajemenAplikasi/00Software-\nUpdates.png][/raw-attachment/wiki/Dokumentasi/Panduan/ManajemenAplikasi/01GantiRepo.png]"),Object(u.b)("h2",{id:"memasang-dan-menghapus-perangkat-lunak"},"Memasang dan Menghapus Perangkat Lunak"),Object(u.b)("p",null,"Terdapat dua cara untuk melakukan pemasangan dan penghapusan perangkat lunak.\nYaitu melalui fitur Warung Aplikasi dan melalui antarmuka teks(konsole/\nterminal) dengan perintah apt-get."),Object(u.b)("h3",{id:"warung-aplikasi"},"Warung Aplikasi"),Object(u.b)("p",null,"Jika Anda ingin memasang atau menghapus perangkat lunak secara detail, Anda\nbisa menggunakan Warung Aplikasi yang bisa Anda buka melalui Menu utama BlankOn"),Object(u.b)("blockquote",null,Object(u.b)("p",{parentName:"blockquote"},"Lainnya > WarSi?.")),Object(u.b)("p",null,"[/raw-attachment/wiki/Dokumentasi/Panduan/ManajemenAplikasi/02Warsi.png]"),Object(u.b)("p",null,"Ketikkan nama aplikasi pada kotak pencarian cepat. Aplikasi ini menampilkan\ndaftar paket perangkat lunak secara detail. Selain Anda bisa menambah dan\nmenghapus aplikasi, Anda juga bisa melakukan hal yang sama untuk pustaka sistem\nyang tersedia."),Object(u.b)("p",null,'Pilih Aplikasi yang ingin dipasang dengan mengcentang pilihan "Install\nPackage", kemudian lakukan "Apply Changes" atau "Clear" untuk membatalkan.\n',"[/raw-attachment/wiki/Dokumentasi/Panduan/ManajemenAplikasi/03Memasang-\nAplikasi.png]",'\nJika ingin menghapus tinggal pilih "Remove Package".\n',"[/raw-attachment/wiki/Dokumentasi/Panduan/ManajemenAplikasi/04Menghapus-\nAplikasi.png]"),Object(u.b)("h3",{id:"melalui-perintah-apt-get"},"Melalui Perintah apt-get"),Object(u.b)("p",null,"Menggunakan perintah apt-get sangat sederhana sekali. Anda cukup ketikkan nama\npaket perangkat lunak yang ingin dipasang/dihapus, maka APT akan melakukan hal\nyang Anda inginkan."),Object(u.b)("p",null,"Untuk menggunakan fitur ini, bukalah antarmuka teks misalnya melalui Terminal\ndengan menu Aplikas > Aksesoris > Terminal."),Object(u.b)("p",null,"Pada terminal ketikkan perintah berikut, lalu tekan tombol Enter untuk memasang\npaket perangkat lunak (Ubah \u201cnamapaket\u201d sesuai dengan nama paket perangkatlunak yang akan Anda pasang).\n",Object(u.b)("inlineCode",{parentName:"p"},"blankon@blankon:~$ sudo apt-get install namapaket")),Object(u.b)("p",null,"Sedangkan untuk menghapus suatu perangkat lunak, ketik perintah berikut dan\ntekan tombol Enter (Catatan, \u201cnamapaket\u201d sesuai dengan perangkat lunak yang\ningin Anda hapus\u201d).\n",Object(u.b)("inlineCode",{parentName:"p"},"blankon@blankon:~$ sudo apt-get remove namapaket")),Object(u.b)("p",null,"Jika APT meminta pemasangan/penghapusan perangkat lunak yang dibutuhkan oleh\nperangkat lunak yang akan Anda pasang/hapus, Anda harus menyetujuinya dengan\nmenekan tombol Y, lalu tekan Enter.\nTIP: Untuk memasang/menghapus lebih dari satu paket perangkat lunak,\nAnda bisa sebutkan lebih dari satu nama paket pada perintah APT yang\nmasing-masing nama paket dipisahkan dengan spasi. Contohnya, jika\ningin memasang perangkat lunak aplikasi Kino dan Audacity sekaligus,\nAnda bisa ketik perintah berikut.\n",Object(u.b)("inlineCode",{parentName:"p"},"blankon@blankon:~$ sudo apt-get install kino audacity"),"\t"),Object(u.b)("h3",{id:"pemasangan-melalui-berkas-deb"},"Pemasangan melalui Berkas DEB"),Object(u.b)("p",null,"Selain melalui lumbung paket, Anda juga bisa memasang suatu perangkat lunak\nyang didistribusikan dalam format berkas DEB. Untuk melakukan instalasi dari\nberkas paket DEB, Anda bisa klik ganda pada berkas DEB tersebut melalui\nperamban berkas, maka akan muncul jendela yang akan menuntun Anda dalam\nmelakukan pemasangan."),Object(u.b)("p",null,"Pada jendela tersebut, Anda bisa klik tombol ","[>Instal paket<]",". Maka paket\ntersebut akan diinstal ke komputer bersamaan dengan paket ketergantungannya\nmenggunakan GDebi Paket Installer."),Object(u.b)("h2",{id:"merawat-sistem"},"Merawat Sistem"),Object(u.b)("p",null,"Secara berkala Tim Pengembang BlankOn dan komunitas menerbitkan paket-paket\nperangkat lunak dengan versi yang lebih baru ke dalam lumbung. Jika komputer\nAnda terhubung ke Internet, maka keberadaan paket-paket baru tersebut akan\ndiinformasikan kepada Anda. Jika Anda mau menerima paket-paket baru tersebut,\nmaka sistem akan dimutakhirkan oleh APT dengan mengunduh dan memasang paket-\npaket itu."),Object(u.b)("p",null,"Dengan melakukan pemutakhiran berkala menjadikan sistem Anda terawat karena\npada versi baru, biasanya telah dilakukan pemeriksaan dan perbaikan cacat yang\ntelah diketahui sebelumnya. Kadangkala versi baru diterbitkan untuk menutup\ncelah-celah keamanan yang ditemui pada suatu paket.\nSelain cara yang dibahas di atas, Anda bisa melakukan pemutakhiran sistem\nmelalui terminal. Untuk melakukan hal ini, buka terminal melalui menu BlankOn >\nUtilities > Terminal. Lakukan pemeriksaan ketersediaan pemutakhiran dengan\nmengetik perintah seperti berikut, lalu tekan Enter:\n",Object(u.b)("inlineCode",{parentName:"p"},"blankon@blankon:~$ sudo apt-get update")),Object(u.b)("p",null,"Kemudian, ketik perintah seperti berikut untuk melakukan pemutakhiran paket\nperangkat lunak, lalu tekan tombol Enter:\n",Object(u.b)("inlineCode",{parentName:"p"},"blankon@blankon:~$ sudo apt-get upgrade")),Object(u.b)("p",null,"Jika Anda ingin memuktakhirkan paket termasuk paket ketergantungan yang ada\ndi sistem sila menjalakan perintah berikut:\n",Object(u.b)("inlineCode",{parentName:"p"},"blankon@blankon:~$ sudo apt-get dist-upgrade")),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre"}," INGAT! Pastikan Anda terhubung dengan lumbung paket update agar\n proses pemutakhiran bisa berjalan dengan lancar.\n")),Object(u.b)("p",null,"Last modified on 02/12/2014 04:37:41 PM"),Object(u.b)("h4",{id:"attachments-5"},"Attachments (5)"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"00Software-Updates.png\u200b (44.5 KB) - added by tuanpembual 3 years ago."),Object(u.b)("li",{parentName:"ul"},"01GantiRepo.png\u200b (33.1 KB) - added by tuanpembual 3 years ago."),Object(u.b)("li",{parentName:"ul"},"02Warsi.png\u200b (62.7 KB) - added by tuanpembual 3 years ago."),Object(u.b)("li",{parentName:"ul"},"03Memasang-Aplikasi.png\u200b (146.4 KB) - added by tuanpembual 3 years ago."),Object(u.b)("li",{parentName:"ul"},"04Menghapus-Aplikasi.png\u200b (144.7 KB) - added by tuanpembual 3 years ago.")),Object(u.b)("hr",null))}m.isMDXComponent=!0}}]);