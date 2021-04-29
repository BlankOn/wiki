(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{1050:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return k}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),o=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},c=function(e){var t=o(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=o(n),s=a,k=c["".concat(u,".").concat(s)]||c[s]||m[s]||r;return n?i.a.createElement(k,b(b({ref:t},p),{},{components:n})):i.a.createElement(k,b({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,u=new Array(r);u[0]=s;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,u[1]=b;for(var p=2;p<r;p++)u[p]=n[p];return i.a.createElement.apply(null,u)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},398:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return o}));var a=n(3),i=n(7),r=(n(0),n(1050)),u={},b={unversionedId:"TimPengembang/Pemaket/BibitPaket/BibitPaket",id:"TimPengembang/Pemaket/BibitPaket/BibitPaket",isDocsHomePage:!1,title:"Bibit Paket",description:"Sekilas mengenai manajemen bibit paket (seed) yang digunakan dalam proses pengembangan BlankOn.",source:"@site/Wiki/TimPengembang/Pemaket/BibitPaket/BibitPaket.md",sourceDirName:"TimPengembang/Pemaket/BibitPaket",slug:"/TimPengembang/Pemaket/BibitPaket/BibitPaket",permalink:"/TimPengembang/Pemaket/BibitPaket/BibitPaket",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Pemaket/BibitPaket/BibitPaket.md",version:"current",frontMatter:{}},l=[{value:"Apa itu bibit paket?",id:"apa-itu-bibit-paket",children:[]}],p={toc:l};function o(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Sekilas mengenai manajemen bibit paket (seed) yang digunakan dalam proses pengembangan BlankOn."),Object(r.b)("h2",{id:"apa-itu-bibit-paket"},"Apa itu bibit paket?"),Object(r.b)("p",null,"Bibit paket (",Object(r.b)("em",{parentName:"p"},"seed"),") adalah kumpulan daftar paket-paket yang dibutuhkan pada Ubuntu, digunakan untuk menghasilkan paket meta dan menentukan di komponen apa (main, contrib, dll.) suatu paket itu akan masuk."),Object(r.b)("p",null,"Bibit paket juga berisikan daftar paket-paket yang ingin kita masukan ke dalam distribusi. Saat ini Ubuntu memiliki tujuh bibit paket utama yaitu minimal,\nboot, standard, desktop, ship, live, dan supported yang menentukan paket-paket untuk komponen main."),Object(r.b)("p",null,"Silakan kunjungi \u200b",Object(r.b)("a",{parentName:"p",href:"http://people.ubuntu.com/~ubuntu-archive/seeds/"},"http://people.ubuntu.com/~ubuntu-archive/seeds/")," untuk melihat daftar bibit paket yang digunakan Ubuntu saat ini."),Object(r.b)("p",null,"Daftar bibit paket untuk rilis Gutsy:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"blacklist"),Object(r.b)("li",{parentName:"ul"},"boot"),Object(r.b)("li",{parentName:"ul"},"build-essential"),Object(r.b)("li",{parentName:"ul"},"desktop"),Object(r.b)("li",{parentName:"ul"},"development"),Object(r.b)("li",{parentName:"ul"},"dns-server"),Object(r.b)("li",{parentName:"ul"},"installer"),Object(r.b)("li",{parentName:"ul"},"lamp-server"),Object(r.b)("li",{parentName:"ul"},"live"),Object(r.b)("li",{parentName:"ul"},"minimal"),Object(r.b)("li",{parentName:"ul"},"mobile"),Object(r.b)("li",{parentName:"ul"},"required"),Object(r.b)("li",{parentName:"ul"},"server-ship"),Object(r.b)("li",{parentName:"ul"},"ship"),Object(r.b)("li",{parentName:"ul"},"ship-live"),Object(r.b)("li",{parentName:"ul"},"standard"),Object(r.b)("li",{parentName:"ul"},"STRUCTURE"),Object(r.b)("li",{parentName:"ul"},"supported")),Object(r.b)("hr",null))}o.isMDXComponent=!0}}]);