(window.webpackJsonp=window.webpackJsonp||[]).push([[481],{1027:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||s[d]||i;return n?a.a.createElement(m,o(o({ref:t},c),{},{components:n})):a.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},538:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),i=(n(0),n(1027)),l={title:"Riset"},o={unversionedId:"TimPengembang/Riset/README",id:"TimPengembang/Riset/README",isDocsHomePage:!1,title:"Riset",description:"Tim Riset BlankOn",source:"@site/Wiki/TimPengembang/Riset/README.md",slug:"/TimPengembang/Riset/README",permalink:"/TimPengembang/Riset/README",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Riset/README.md",version:"current",sidebar:"timPengembang",previous:{title:"Infrastruktur",permalink:"/TimPengembang/Infrastruktur/README"}},u=[{value:"Jalur I: BlankOn Installer / Parto Edi",id:"jalur-i-blankon-installer--parto-edi",children:[]},{value:"Jalur II : data.blankon.id",id:"jalur-ii--datablankonid",children:[]},{value:"Jalur III : IRGSH",id:"jalur-iii--irgsh",children:[]},{value:"Jalur IV : Perintilan",id:"jalur-iv--perintilan",children:[]},{value:"PR-PR lain, dari Koordinator Riset sebelumnya, @diorrahman",id:"pr-pr-lain-dari-koordinator-riset-sebelumnya-diorrahman",children:[]}],c={rightToc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"tim-riset-blankon"},"Tim Riset BlankOn"),Object(i.b)("h2",{id:"jalur-i-blankon-installer--parto-edi"},"Jalur I: BlankOn Installer / Parto Edi"),Object(i.b)("p",null,"Riset/PartoEdi adalah penyunting partisi pada blankon-installer."),Object(i.b)("h2",{id:"jalur-ii--datablankonid"},"Jalur II : data.blankon.id"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Repositori: ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/data-blankon-id"}),"https://github.com/data-blankon-id")),Object(i.b)("li",{parentName:"ul"},"API untuk menerima ID pemasangan dari setiap rilis tambora. Terkait dengan blankon installer.")),Object(i.b)("h2",{id:"jalur-iii--irgsh"},"Jalur III : IRGSH"),Object(i.b)("p",null,"Mendeploy ulang IRGSH dan kawan-kawan di sistem operasi yang lebih modern."),Object(i.b)("h2",{id:"jalur-iv--perintilan"},"Jalur IV : Perintilan"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Tempel.py, utilitas tempel di cli, github.com/blankon/tempel-cli-py"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://wiki.mozilla.org/Identity/Firefox_Accounts"}),"https://wiki.mozilla.org/Identity/Firefox_Accounts"))),Object(i.b)("h2",{id:"pr-pr-lain-dari-koordinator-riset-sebelumnya-diorrahman"},"PR-PR lain, dari Koordinator Riset sebelumnya, @diorrahman"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://gist.github.com/diorahman/9575244"}),"https://gist.github.com/diorahman/9575244"))))}b.isMDXComponent=!0}}]);