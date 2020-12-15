(window.webpackJsonp=window.webpackJsonp||[]).push([[882],{1043:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),b=n,d=m["".concat(l,".").concat(b)]||m[b]||p[b]||r;return a?i.a.createElement(d,c(c({ref:t},u),{},{components:a})):i.a.createElement(d,c({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var u=2;u<r;u++)l[u]=a[u];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},951:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(3),i=a(7),r=(a(0),a(1043)),l={},c={unversionedId:"TimPengembang/Pemaket/BibitPaket/Minimal",id:"TimPengembang/Pemaket/BibitPaket/Minimal",isDocsHomePage:!1,title:"Minimal",description:"Bibit Paket - Minimal",source:"@site/Wiki/TimPengembang/Pemaket/BibitPaket/Minimal.md",slug:"/TimPengembang/Pemaket/BibitPaket/Minimal",permalink:"/TimPengembang/Pemaket/BibitPaket/Minimal",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Pemaket/BibitPaket/Minimal.md",version:"current"},o=[{value:"Bibit Paket - Minimal",id:"bibit-paket---minimal",children:[]},{value:"Hardware and Architecture Support",id:"hardware-and-architecture-support",children:[{value:"Generic",id:"generic",children:[]},{value:"i386, i686",id:"i386-i686",children:[]}]},{value:"Comfortable Unix System",id:"comfortable-unix-system",children:[]},{value:"Networking",id:"networking",children:[{value:"Meta",id:"meta",children:[]},{value:"Other",id:"other",children:[]}]}],u={rightToc:o};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h2",{id:"bibit-paket---minimal"},"Bibit Paket - Minimal"),Object(r.a)("p",null,"Task-Section: user\nTask-Relevance: 9\nTask-Description: Minimal base system\nTask-Extended-Description: This task installs the core of an Ubuntu-based\nsystem.\nTask-Test-new-install: install skip\nNote that some packages that form the core of an Ubuntu-based system are in the\nrequired seed, from which this seed inherits. The minimal seed describes those\npackages at Priority: important."),Object(r.a)("h2",{id:"hardware-and-architecture-support"},"Hardware and Architecture Support"),Object(r.a)("h3",{id:"generic"},"Generic"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"alsa-base # needed for proper hardware detection (hotplug/blacklist.d,\nmodprobe.d)"),Object(r.a)("li",{parentName:"ul"},"alsa-utils           # basic audio support and mixer level handling"),Object(r.a)("li",{parentName:"ul"},"pcmciautils          # PCMCIA support for >= 2.6.13-rc1 kernels")),Object(r.a)("h3",{id:"i386-i686"},"i386, i686"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"libc6-i686 ","[i386]")),Object(r.a)("h2",{id:"comfortable-unix-system"},"Comfortable Unix System"),Object(r.a)("p",null,"Programs and packages necessary for both the proper functionality of the system\nand that any user would expect to find on a modern Unix-like system."),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"adduser"),Object(r.a)("li",{parentName:"ul"},"apt"),Object(r.a)("li",{parentName:"ul"},"aptitude          # better text-mode package manager"),Object(r.a)("li",{parentName:"ul"},"apt-utils         # apt-extracttemplates is required for debconf\npreconfiguration"),Object(r.a)("li",{parentName:"ul"},"bzip2"),Object(r.a)("li",{parentName:"ul"},"console-setup     # ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://launchpad.net/distros/ubuntu/+spec/sane-"}),"https://launchpad.net/distros/ubuntu/+spec/sane-"),"\ninstaller-keyboard"),Object(r.a)("li",{parentName:"ul"},"console-tools"),Object(r.a)("li",{parentName:"ul"},"eject             # very popular, useful, small"),Object(r.a)("li",{parentName:"ul"},"gettext-base"),Object(r.a)("li",{parentName:"ul"},"gnupg             # introduce security from the very base"),Object(r.a)("li",{parentName:"ul"},"initramfs-tools   # needed for the Ubuntu kernel"),Object(r.a)("li",{parentName:"ul"},"less"),Object(r.a)("li",{parentName:"ul"},"libfribidi0       # right-to-left text support in newt"),Object(r.a)("li",{parentName:"ul"},"lsb-release"),Object(r.a)("li",{parentName:"ul"},"module-init-tools # required for kernel 2.6"),Object(r.a)("li",{parentName:"ul"},"netbase"),Object(r.a)("li",{parentName:"ul"},"pciutils"),Object(r.a)("li",{parentName:"ul"},"sudo              # LaMontJones"),Object(r.a)("li",{parentName:"ul"},"sysklogd"),Object(r.a)("li",{parentName:"ul"},"tasksel           # used by installer to install desktop etc."),Object(r.a)("li",{parentName:"ul"},"udev"),Object(r.a)("li",{parentName:"ul"},"usbutils"),Object(r.a)("li",{parentName:"ul"},"util-linux-locales"),Object(r.a)("li",{parentName:"ul"},"vim-tiny")),Object(r.a)("h2",{id:"networking"},"Networking"),Object(r.a)("p",null,"These provide various networking services, all should be configured in a\nclient-only state with the server de-activated unless the user requires it."),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"dhcp3-client   # LaMontJones"),Object(r.a)("li",{parentName:"ul"},"iproute"),Object(r.a)("li",{parentName:"ul"},"ifupdown"),Object(r.a)("li",{parentName:"ul"},"net-tools"),Object(r.a)("li",{parentName:"ul"},"ntpdate        # FabioMassimoDiNitto"),Object(r.a)("li",{parentName:"ul"},"wireless-tools"),Object(r.a)("li",{parentName:"ul"},"wpasupplicant  # ScottJamesRemnant"),Object(r.a)("li",{parentName:"ul"},"ethtool"),Object(r.a)("li",{parentName:"ul"},"iputils-ping"),Object(r.a)("li",{parentName:"ul"},"mii-diag"),Object(r.a)("li",{parentName:"ul"},"netcat             # FabioMassimoDiNitto")),Object(r.a)("h3",{id:"meta"},"Meta"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"ubuntu-minimal     # Ubuntu-specific bits we want on every Ubuntu system"),Object(r.a)("li",{parentName:"ul"},"ubuntu-keyring     # for authenticated package downloads")),Object(r.a)("h3",{id:"other"},"Other"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"python             # upstream doesn't want python-minimal shipped alone")),Object(r.a)("p",null,"Last modified on 06/16/2008 11:03:41 AM"),Object(r.a)("hr",null))}s.isMDXComponent=!0}}]);