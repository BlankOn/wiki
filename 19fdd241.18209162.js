(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1043:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return a?r.a.createElement(b,o(o({ref:t},c),{},{components:a})):r.a.createElement(b,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},167:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(1043)),l={},o={unversionedId:"TimPengembang/Pemaket/BibitPaket/Standard",id:"TimPengembang/Pemaket/BibitPaket/Standard",isDocsHomePage:!1,title:"Standard",description:"Bibit Paket - Standard",source:"@site/Wiki/TimPengembang/Pemaket/BibitPaket/Standard.md",slug:"/TimPengembang/Pemaket/BibitPaket/Standard",permalink:"/TimPengembang/Pemaket/BibitPaket/Standard",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Pemaket/BibitPaket/Standard.md",version:"current"},s=[{value:"Bibit Paket - Standard",id:"bibit-paket---standard",children:[]},{value:"UNIX",id:"unix",children:[{value:"Comfortable Unix System",id:"comfortable-unix-system",children:[]},{value:"Filesystems",id:"filesystems",children:[]},{value:"Networking",id:"networking",children:[]}]},{value:"Debugging and Diagnostics",id:"debugging-and-diagnostics",children:[]},{value:"Helpful Tools",id:"helpful-tools",children:[{value:"Network",id:"network",children:[]}]},{value:"Other",id:"other",children:[]}],c={rightToc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"bibit-paket---standard"},"Bibit Paket - Standard"),Object(i.a)("p",null,"Task-Section: user\nTask-Relevance: 8\nTask-Description: Standard system\nTask-Extended-Description: This task installs a reasonably small character-mode\nsystem.\nTask-Test-new-install: install skip"),Object(i.a)("h2",{id:"unix"},"UNIX"),Object(i.a)("h3",{id:"comfortable-unix-system"},"Comfortable Unix System"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"at"),Object(i.a)("li",{parentName:"ul"},"cpio"),Object(i.a)("li",{parentName:"ul"},"cron"),Object(i.a)("li",{parentName:"ul"},"dselect           # old-school package management (maybe move further out?)"),Object(i.a)("li",{parentName:"ul"},"ed"),Object(i.a)("li",{parentName:"ul"},"fdutils           # needed for debian kernel"),Object(i.a)("li",{parentName:"ul"},"file"),Object(i.a)("li",{parentName:"ul"},"hdparm            # speed up CD-ROM and disk access, used by installer"),Object(i.a)("li",{parentName:"ul"},"info"),Object(i.a)("li",{parentName:"ul"},"logrotate"),Object(i.a)("li",{parentName:"ul"},"man-db            # ColinWatson"),Object(i.a)("li",{parentName:"ul"},"manpages          # ColinWatson"),Object(i.a)("li",{parentName:"ul"},"mime-support      # establishes framework for dealing with MIME"),Object(i.a)("li",{parentName:"ul"},"nano              # we need a text editor less scary than vi"),Object(i.a)("li",{parentName:"ul"},"parted"),Object(i.a)("li",{parentName:"ul"},"psmisc            # utilities for /proc such as killall, pstree, fuser"),Object(i.a)("li",{parentName:"ul"},"time")),Object(i.a)("h3",{id:"filesystems"},"Filesystems"),Object(i.a)("p",null,"These are commonly used filesystem support packages, here because someone\nsetting up a server would begin with standard, configure filesystems and\nnetwork and then add other services. NFS is explicitly not here, because it\nbrings in nasties like portmap, and because the network will need to be running\nbefore it can be used, so we may as well put that in Supported."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"reiserfsprogs"),Object(i.a)("li",{parentName:"ul"},"dosfstools")),Object(i.a)("h3",{id:"networking"},"Networking"),Object(i.a)("p",null,"These provide various networking services, all should be configured in a\nclient-only state with the server de-activated unless the user requires it."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"dnsutils       # LaMontJones"),Object(i.a)("li",{parentName:"ul"},"ftp"),Object(i.a)("li",{parentName:"ul"},"iptables       # FabioMassimoDiNitto"),Object(i.a)("li",{parentName:"ul"},"telnet"),Object(i.a)("li",{parentName:"ul"},"ppp"),Object(i.a)("li",{parentName:"ul"},"pppconfig"),Object(i.a)("li",{parentName:"ul"},"pppoeconf"),Object(i.a)("li",{parentName:"ul"},"(openssh-client) # ColinWatson"),Object(i.a)("li",{parentName:"ul"},"rsync          # would be just client but they are the same binary\napparently"),Object(i.a)("li",{parentName:"ul"},"w3m            # we need some text-based html presenter"),Object(i.a)("li",{parentName:"ul"},"wget           # FabioMassimoDiNitto")),Object(i.a)("h2",{id:"debugging-and-diagnostics"},"Debugging and Diagnostics"),Object(i.a)("p",null,"A base system should be a good platform for diagnostics about the hardware and\nnetwork. In other words, after installing just the Base system one should have\neverything one might need to get the rest of the system up and running the way\nyou want it.\nThese are used for debugging problems or examining the system."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"memtest86+"),Object(i.a)("li",{parentName:"ul"},"strace"),Object(i.a)("li",{parentName:"ul"},"dmidecode"),Object(i.a)("li",{parentName:"ul"},"lshw"),Object(i.a)("li",{parentName:"ul"},"lsof"),Object(i.a)("li",{parentName:"ul"},"ltrace")),Object(i.a)("h2",{id:"helpful-tools"},"Helpful Tools"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"inputattach # needed for serial mice"),Object(i.a)("li",{parentName:"ul"},"(command-not-found)"),Object(i.a)("li",{parentName:"ul"},"(update-manager-core)  # needed for server based release upgrades"),Object(i.a)("li",{parentName:"ul"},"(apparmor-utils) # controll AppArmor policies (pulls in policy parser as\nwell)")),Object(i.a)("h3",{id:"network"},"Network"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"iputils-arping     # would have made my life easier at debconf"),Object(i.a)("li",{parentName:"ul"},"iputils-tracepath  # more secure sort of traceroute, will put compatibility\nsymblink in for traceroute users"),Object(i.a)("li",{parentName:"ul"},"(mtr-tiny)           # LaMontJones"),Object(i.a)("li",{parentName:"ul"},"tcpdump")),Object(i.a)("h2",{id:"other"},"Other"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"popularity-contest"),Object(i.a)("li",{parentName:"ul"},"ubuntu-standard # metapackage for everything here")),Object(i.a)("p",null,"Last modified on 06/16/2008 11:09:18 AM"),Object(i.a)("hr",null))}u.isMDXComponent=!0}}]);