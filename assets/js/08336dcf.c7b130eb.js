(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return m}));var a=t(3),i=t(7),r=(t(0),t(1050)),o={},s={unversionedId:"TimPengembang/Dokumentasi/Panduan/PanduanWiki/CamelCase",id:"TimPengembang/Dokumentasi/Panduan/PanduanWiki/CamelCase",isDocsHomePage:!1,title:"CamelCase",description:"CamelCase",source:"@site/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanWiki/CamelCase.md",sourceDirName:"TimPengembang/Dokumentasi/Panduan/PanduanWiki",slug:"/TimPengembang/Dokumentasi/Panduan/PanduanWiki/CamelCase",permalink:"/TimPengembang/Dokumentasi/Panduan/PanduanWiki/CamelCase",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanWiki/CamelCase.md",version:"current",frontMatter:{}},c=[{value:"CamelCase",id:"camelcase",children:[{value:"Customizing the Wiki behavior",id:"customizing-the-wiki-behavior",children:[]},{value:"More information on CamelCase",id:"more-information-on-camelcase",children:[]}]}],l={toc:c};function m(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"camelcase"},"CamelCase"),Object(r.b)("p",null,"New words created by smashing together capitalized words.\nCamelCase is the original wiki convention for creating hyperlinks, with the\nadditional requirement that the capitals are followed by a lower-case letter;\nhence \u201cAlabamA\u201d and \u201cABc\u201d will not be links."),Object(r.b)("h3",{id:"customizing-the-wiki-behavior"},"Customizing the Wiki behavior"),Object(r.b)("p",null,"Some people dislike linking by CamelCase. While Trac remains faithful to the\noriginal Wiki style, it provides a number of ways to accomodate users with\ndifferent preferences:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"* There's an option (ignore_missing_pages in the [wiki] section of TracIni)\n  to simply ignore links to missing pages when the link is written using\n  the CamelCase style, instead of that word being replaced by a gray link\n  followed by a question mark.\n  That can be useful when CamelCase style is used to name code artifacts\n  like class names and there's no corresponding page for them.\n* There's an option (split_page_names in the [wiki] section of TracIni) to\n  automatically insert space characters between the words of a CamelCase\n  link when rendering the link.\n* Creation of explicit Wiki links is also easy, see WikiPageNames for\n  details.\n* In addition, Wiki formatting can be disabled completely in some places\n  (e.g. when rendering commit log messages). See wiki_format_messages in\n  the [changeset] section of TracIni.\n")),Object(r.b)("p",null,"See TracIni for more information on the available options."),Object(r.b)("h3",{id:"more-information-on-camelcase"},"More information on CamelCase"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"* \u200bhttp://c2.com/cgi/wiki?WikiCase\n* \u200bhttp://en.wikipedia.org/wiki/CamelCase\n")),Object(r.b)("p",null,"See also: WikiPageNames, WikiNewPage, WikiFormatting, TracWiki"),Object(r.b)("p",null,"Last modified on 10/16/2014 01:10:30 PM"),Object(r.b)("hr",null))}m.isMDXComponent=!0},1050:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),m=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=m(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(t),d=a,b=u["".concat(o,".").concat(d)]||u[d]||p[d]||r;return t?i.a.createElement(b,s(s({ref:n},l),{},{components:t})):i.a.createElement(b,s({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);