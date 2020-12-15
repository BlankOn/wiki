(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{1043:function(e,a,n){"use strict";n.d(a,"a",(function(){return b}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function u(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?u(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function m(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var a=r.a.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):c(c({},a),e)),n},l={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},s=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,u=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),s=p(n),b=t,d=s["".concat(u,".").concat(b)]||s[b]||l[b]||i;return n?r.a.createElement(d,c(c({ref:a},o),{},{components:n})):r.a.createElement(d,c({ref:a},o))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,u=new Array(i);u[0]=s;var c={};for(var m in a)hasOwnProperty.call(a,m)&&(c[m]=a[m]);c.originalType=e,c.mdxType="string"==typeof e?e:t,u[1]=c;for(var o=2;o<i;o++)u[o]=n[o];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},312:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return u})),n.d(a,"metadata",(function(){return c})),n.d(a,"rightToc",(function(){return m})),n.d(a,"default",(function(){return p}));var t=n(3),r=n(7),i=(n(0),n(1043)),u={},c={unversionedId:"TimPengembang/Infrastruktur/Administratif/Pemaket",id:"TimPengembang/Infrastruktur/Administratif/Pemaket",isDocsHomePage:!1,title:"Pemaket",description:"Pemaket",source:"@site/Wiki/TimPengembang/Infrastruktur/Administratif/Pemaket.md",slug:"/TimPengembang/Infrastruktur/Administratif/Pemaket",permalink:"/TimPengembang/Infrastruktur/Administratif/Pemaket",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/Administratif/Pemaket.md",version:"current"},m=[{value:"Menambah pemaket baru",id:"menambah-pemaket-baru",children:[{value:"Prasyarat",id:"prasyarat",children:[]},{value:"Tahapan",id:"tahapan",children:[]},{value:"tambahan",id:"tambahan",children:[]}]}],o={rightToc:m};function p(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(t.a)({},o,n,{components:a,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"pemaket"},"Pemaket"),Object(i.a)("h2",{id:"menambah-pemaket-baru"},"Menambah pemaket baru"),Object(i.a)("h3",{id:"prasyarat"},"Prasyarat"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Calon pemaket sudah menjadi Ubuntero."),Object(i.a)("li",{parentName:"ul"},"Memasukkan alamat surat elektronik yang hendak dipakai dalam kunci GPG.")),Object(i.a)("h3",{id:"tahapan"},"Tahapan"),Object(i.a)("p",null,"Ini dilakukan dari pengguna irgsh di yeyen. Ganti $KUNCI_GPG dengan kode kunci GPG yang calon pemaket dan $NAMA_LOGIN dengan nama login calon pemaket di \u200bLaunchpad."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Ambil kunci GPG dari Launchpad dan tandatangani. Gunakan sandi yang tercantum pada halaman \u200b",Object(i.a)("a",Object(t.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/wiki/Infrastruktur/"}),"http://dev.blankonlinux.or.id/wiki/Infrastruktur/")," GPG (Hanya beberapa tim steering dan infrastruktur yang dapat membukanya)")),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"# su - irgsh\n$ gpg --keyserver keyserver.ubuntu.com --recv-keys $KUNCI_GPG\n$ gpg --sign-key $KUNCI_GPG\n")),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Masukkan calon pemaket dalam daftar pemaket.")),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),'# su - irgsh\n$ cd ~/master-web\n$ echo "$NAMA_LOGIN:$KUNCI_GPG" >> packagers.txt\n')),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Calon pemaket sudah siap menjadi pemaket.")),Object(i.a)("h3",{id:"tambahan"},"tambahan"),Object(i.a)("p",null,"pastikan pemaket sudah mengunggah ssh key di dev boi"),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"* untuk unggah ssh key manual;\n")),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"# su -s /bin/bash bzr\n$ ~/utils/gen_authorized_keys.sh\n$ exit\ngrep namalogin@namamesin /home/bzr/.ssh/authorized_keys\n")),Object(i.a)("p",null,"namalogin@namamesin itu tergantung apa kata buntut berkas id_rsa.pub atau id_dsa.pub"))}p.isMDXComponent=!0}}]);