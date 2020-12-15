(window.webpackJsonp=window.webpackJsonp||[]).push([[442],{1043:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=b(t),c=a,m=d["".concat(o,".").concat(c)]||d[c]||p[c]||i;return t?r.a.createElement(m,l(l({ref:n},s),{},{components:t})):r.a.createElement(m,l({ref:n},s))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},509:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),i=(t(0),t(1043)),o={},l={unversionedId:"TimPengembang/Infrastruktur/ImplementasiPabrikPaketCabang",id:"TimPengembang/Infrastruktur/ImplementasiPabrikPaketCabang",isDocsHomePage:!1,title:"ImplementasiPabrikPaketCabang",description:"Implementasi Pabrik Paket Cabang",source:"@site/Wiki/TimPengembang/Infrastruktur/ImplementasiPabrikPaketCabang.md",slug:"/TimPengembang/Infrastruktur/ImplementasiPabrikPaketCabang",permalink:"/TimPengembang/Infrastruktur/ImplementasiPabrikPaketCabang",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/ImplementasiPabrikPaketCabang.md",version:"current"},u=[{value:"Instalasi",id:"instalasi",children:[]},{value:"Lampiran",id:"lampiran",children:[]}],s={rightToc:u};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"implementasi-pabrik-paket-cabang"},"Implementasi Pabrik Paket Cabang"),Object(i.a)("h3",{id:"instalasi"},"Instalasi"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Instal pbuilder\nsudo apt-get install pbuilder"),Object(i.a)("li",{parentName:"ol"},"Buat pengguna blankon-dev\nsudo useradd blankon-dev"),Object(i.a)("li",{parentName:"ol"},"Masukkan blankon-dev sebagai pengguna sudo untuk pbuilder\n",Object(i.a)("inlineCode",{parentName:"li"},'# echo "blankon-dev ALL=NOPASSWD: /usr/sbin/pbuilder" >> /etc/sudoers')),Object(i.a)("li",{parentName:"ol"},"Siapkan rootstrap (dilakukan sebagai blankon-dev)\n",Object(i.a)("inlineCode",{parentName:"li"},"# sudo - blankon-dev"),Object(i.a)("br",{parentName:"li"}),Object(i.a)("inlineCode",{parentName:"li"},"sudo  pbuilder create  --configfile /home/blankon-dev/.pbuilderrc")),Object(i.a)("li",{parentName:"ol"},"Instalasi skrip pabrik paket cabang")),Object(i.a)("h3",{id:"lampiran"},"Lampiran"),Object(i.a)("h4",{id:"pbuilderrc"},".pbuilderrc"),Object(i.a)("p",null,"Letakkan berkas .pbuilderrc di /home/blankon-dev, isinya:"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{}),'BASETGZ=/home/blankon-dev/pbuilder/base.tgz\n#EXTRAPACKAGES=gcc3.0-athlon-builder\nexport DEBIAN_BUILDARCH=i386\nBUILDPLACE=/home/blankon-dev/pbuilder/build/\nMIRRORSITE=http://gx.tmp.mnots.eu\n\n#Ini nanti dibuka kalau sudah ada isinya\n#OTHERMIRROR="deb http://konde-dev.ubuntu-id.org konde main"\n#export http_proxy=http://your-proxy:8080/\nUSEPROC=no\nUSEDEVPTS=yes\nUSEDEVFS=no\nBUILDRESULT=/home/blankon-dev/pbuilder/result/\n\n# specifying the distribution forces the distribution on "pbuilder update"\nDISTRIBUTION=gutsy\n\n# specifying the components of the distribution (default is "main")\n#COMPONENTS="main restricted universe multiverse"\n#specify the cache for APT\nAPTCACHE="/home/blankon-dev/pbuilder/aptcache/"\nAPTCACHEHARDLINK="yes"\nREMOVEPACKAGES="lilo"\n#HOOKDIR="/usr/lib/pbuilder/hooks"\nHOOKDIR=""\n# make debconf not interact with user\nexport DEBIAN_FRONTEND="noninteractive"\nDEBEMAIL=""\n#for pbuilder debuild\nBUILDSOURCEROOTCMD="fakeroot"\nPBUILDERROOTCMD="sudo"\n# command to satisfy build-dependencies; the default is an internal shell\n# implementation which is relatively slow; there\'s an alternate experimental\n# implementation, "pbuilder-satisfydepends-experimental", which might be useful\n# to pull packages from experimental or from repositories with a low APT Pin\n# Priority\nPBUILDERSATISFYDEPENDSCMD="/usr/lib/pbuilder/pbuilder-satisfydepends"\n#default is to build everything. Passed on to dpkg-buildpackage\n#DEBBUILDOPTS="-b"\nDEBBUILDOPTS=""\n#APT configuration files directory\nAPTCONFDIR=""\n# the username and ID used by pbuilder, inside chroot. Needs fakeroot, really\nBUILDUSERID=1234\nBUILDUSERNAME=pbuilder\n# BINDMOUNTS is a space separated list of things to mount\n# inside the chroot.\nBINDMOUNTS=""\n# Set the debootstrap variant to \'buildd\' type.\n# DEBOOTSTRAPOPTS[0]=\'--variant=buildd\'\n# or work around bug in debootstrap 3.0.0 (314858)\nunset DEBOOTSTRAPOPTS\nDEBOOTSTRAPOPTS[0]=\'--arch\'\nDEBOOTSTRAPOPTS[1]=\'i386\'\n# Set the PATH I am going to use inside pbuilder: default is "/usr/sbin:/usr/bin\n# DEBOOTSTRAPOPTS[0]=\'--variant=buildd\'\n# or work around bug in debootstrap 3.0.0 (314858)\nunset DEBOOTSTRAPOPTS\nDEBOOTSTRAPOPTS[0]=\'--arch\'\nDEBOOTSTRAPOPTS[1]=\'i386\'\n# Set the PATH I am going to use inside pbuilder: default is "/usr/sbin:/usr/bin:/sbin:/bin:/usr/X11R6/bin"\n#\nexport PATH="/usr/sbin:/usr/bin:/sbin:/bin:/usr/X11R6/bin"\n# SHELL variable is used inside pbuilder by commands like \'su\'; and they need sane values\nexport SHELL=/bin/bash\n# The name of debootstrap command.\nDEBOOTSTRAP="debootstrap"\n# default file extension for pkgname-logfile\nPKGNAME_LOGFILE_EXTENTION="_$(dpkg --print-architecture).build"\n# default PKGNAME_LOGFILE\nPKGNAME_LOGFILE=""\nKategoriPemaket KategoriInfra\nLast modified on 07/01/2008 01:29:41 PM\n')),Object(i.a)("hr",null))}b.isMDXComponent=!0}}]);