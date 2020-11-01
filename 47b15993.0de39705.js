(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{1030:function(e,n,a){"use strict";a.d(n,"a",(function(){return c})),a.d(n,"b",(function(){return b}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function u(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),d=function(e){var n=r.a.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):u(u({},n),e)),a},c=function(e){var n=d(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),s=t,b=c["".concat(o,".").concat(s)]||c[s]||m[s]||i;return a?r.a.createElement(b,u(u({ref:n},p),{},{components:a})):r.a.createElement(b,u({ref:n},p))}));function b(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=s;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:t,o[1]=u;for(var p=2;p<i;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},339:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return u})),a.d(n,"rightToc",(function(){return l})),a.d(n,"default",(function(){return d}));var t=a(2),r=a(6),i=(a(0),a(1030)),o={},u={unversionedId:"TimPengembang/Dokumentasi/Draf/PengaturanInternetDialUp",id:"TimPengembang/Dokumentasi/Draf/PengaturanInternetDialUp",isDocsHomePage:!1,title:"PengaturanInternetDialUp",description:"Pengaturan Internet Dial Up",source:"@site/Wiki/TimPengembang/Dokumentasi/Draf/PengaturanInternetDialUp.md",slug:"/TimPengembang/Dokumentasi/Draf/PengaturanInternetDialUp",permalink:"/TimPengembang/Dokumentasi/Draf/PengaturanInternetDialUp",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Draf/PengaturanInternetDialUp.md",version:"current"},l=[{value:"Pengaturan Koneksi Internet dengan Modem Dial Up",id:"pengaturan-koneksi-internet-dengan-modem-dial-up",children:[{value:"Menggunakan Modem Telepon Seluler",id:"menggunakan-modem-telepon-seluler",children:[]}]}],p={rightToc:l};function d(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"pengaturan-internet-dial-up"},"Pengaturan Internet Dial Up"),Object(i.b)("h2",{id:"pengaturan-koneksi-internet-dengan-modem-dial-up"},"Pengaturan Koneksi Internet dengan Modem Dial Up"),Object(i.b)("h3",{id:"menggunakan-modem-telepon-seluler"},"Menggunakan Modem Telepon Seluler"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Ketikkan pada terminal :\n",Object(i.b)("inlineCode",{parentName:"p"},"sudo wvdialconf"),"\nIni digunakan untuk mendeteksi modem yang ada pada telepon seluler.\nBiasanya adalah ttyACMO")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Ketikkan pada terminal :\n",Object(i.b)("inlineCode",{parentName:"p"},"sudo gedit /etc/wvdial.conf"),"\nIni digunakan untuk mengisikan password dan username yang dibutuhkan\nuntuk melakukan dial-up.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Ganti isinya dengan :"),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"[Dialer Defaults]","\nModem = /dev/ttyACM0\nBaud = 57600\nInit1 = ATZ\nInit2 = ATQ0 V1 E1 S0=0 &C1 &D2\nInit3 =\nArea Code =\nPhone = *99***1#\nUsername = ","[username]","\nPassword = ","[password]","\nAsk Password = 0\nDial Command = ATDT\nStupid Mode = 1\nCompuserve = 0\nForce Address =\nIdle Seconds = 300\n!DialMessage1 =\n!DialMessage2 =\nISDN = 0\nAuto DNS = 1")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(t.a)({parentName:"pre"},{})," Jangan lupa untuk mengganti tulisan[username]dan [password]\n denganusernamedanpasswordyang diberikan oleh provider anda.\n Jika saat anda melakukan dial dan gagal, kemudian tertulis di layar\n telepon seluler anda Subscribe To Packet Data First, anda bisa\n mencoba untuk menambahkan +CGDCONT=,, pada Init2. Contoh :\n")),Object(i.b)("p",{parentName:"li"},"Init2 = ATQ0 V1 E1 S0=0 &C1 &D2 +CGDCONT=,,")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Cobalah lakukan perintah sudo wvdial dan lakukanlah ping ke sebuah alamat\nhttp ataupun membuka sebuah halaman web untuk mengecek apakah anda sudah\nterkoneksi atau belum."))),Object(i.b)("h4",{id:"menggunakan-banyak-isp-dalam-koneksi-wvdial"},"Menggunakan banyak ISP dalam koneksi wvdial"),Object(i.b)("p",null,"Silakan lihat \u200bbagaimana_membuat_konfigurasi_wvdial_dari_banyak_ISP\nLast modified on 09/23/2008 08:19:32 PM"),Object(i.b)("hr",null))}d.isMDXComponent=!0}}]);