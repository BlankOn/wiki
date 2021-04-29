(window.webpackJsonp=window.webpackJsonp||[]).push([[636],{1050:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),o=u(a),g=n,s=o["".concat(i,".").concat(g)]||o[g]||m[g]||b;return a?r.a.createElement(s,l(l({ref:t},c),{},{components:a})):r.a.createElement(s,l({ref:t},c))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<b;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"},706:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),b=(a(0),a(1050)),i={},l={unversionedId:"TimPengembang/Dokumentasi/Kelas/PengantarGit",id:"TimPengembang/Dokumentasi/Kelas/PengantarGit",isDocsHomePage:!1,title:"Apa Itu Git ?",description:"git adalah sebuah system versioning control (sistem kontrol versi) terdistribusi, ada istilah lain dari git ini adalah source code management software (aplikasi manajemen kode sumber), atau menurut wikipedia git adalah perangkat lunak pengontrol versi atau proyek manajemen kode perangkat lunak yang diciptakan oleh Linus Torvalds, yang pada awalnya ditujukan untuk pengembangan kernel Linux.",source:"@site/Wiki/TimPengembang/Dokumentasi/Kelas/PengantarGit.md",sourceDirName:"TimPengembang/Dokumentasi/Kelas",slug:"/TimPengembang/Dokumentasi/Kelas/PengantarGit",permalink:"/TimPengembang/Dokumentasi/Kelas/PengantarGit",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Kelas/PengantarGit.md",version:"current",frontMatter:{}},p=[],c={toc:p};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"git adalah sebuah system versioning control (sistem kontrol versi) terdistribusi, ada istilah lain dari git ini adalah source code management software (aplikasi manajemen kode sumber), atau menurut wikipedia git adalah perangkat lunak pengontrol versi atau proyek manajemen kode perangkat lunak yang diciptakan oleh Linus Torvalds, yang pada awalnya ditujukan untuk pengembangan kernel Linux."),Object(b.b)("p",null,"#Bagaimana Menggunakan Git ?"),Object(b.b)("p",null,"1.Instalasi Git "),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"sudo apt-get install git-core")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Optional: ")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"sudo apt-get install gitk")),Object(b.b)("p",null,"2.Konfigurasi Git "),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git config user.name \xa8Dwi Sasongko S\xa8")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git config user.email \xa8ruckuus@\u2026\xa8")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Cek Output: ")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git config user.name")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git config user.email")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"~","/.gitconfig")),Object(b.b)("ol",{start:3},Object(b.b)("li",{parentName:"ol"},"Clone Git Repository ")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u200bgit://github.com/ruckuus/NgeGitting.git")),Object(b.b)("p",null,"4.Membuat Git Repository "),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git init")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git add")),Object(b.b)("p",null,"5.Status\nuntuk melihat status branch:"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git status")),Object(b.b)("p",null,"6.Log "),Object(b.b)("p",null,"untuk melihat status perubahan kode sumber:"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git log")),Object(b.b)("p",null,"7.Branch "),Object(b.b)("p",null," pencabangan versi kode dengan tujuan tertentu, misalnya ada 10 pengembang, masing-masing mengerjakan fitur berbeda maka masing-masing bisa buat branch sendiri."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git branch")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git show-branch")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git checkout -b nama_cabang cabang_asal")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git checkout -b tambah_kecepatan master")),Object(b.b)("p",null,"tambah kecepatan mengikuti master, cabang_asal dapat berupa cabang atau tag\nuntuk menghapus branch, lakukan perintah berikut:"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git branch -D nama_branch")),Object(b.b)("p",null,"8.Commit "),Object(b.b)("p",null,"commit perubahan di branch tertentu: "),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git commit -m \xa8pesan dan kesan"),"\xa8\n",Object(b.b)("strong",{parentName:"p"},"git commit -a -s")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"mengulangi commit terakhir setelah menambah fitur baru: ")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git commit \u2013amend")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"mereset commit tapi mempertahankan perubahan: ")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git reset \u2013soft HEAD")),Object(b.b)("p",null,"mereset commit tanpa mempertahankan perubahan: "),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git reset \u2013hard HEAD")),Object(b.b)("p",null,"9.Patch "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"menghasilkan patch dari tiap commit: ")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git format-patch HEAD <- satu patch perbedaan terakhir")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git format-patch HEAD~n <- n perubahan dari HEAD")),Object(b.b)("p",null,"10.Melakukan Patch "),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git apply file-anuh-menganu-si-anuh.patch")),Object(b.b)("p",null,"11.Tag "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"menandai commit: ")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git tag versi commit_id")),Object(b.b)("p",null,"Contoh:"),Object(b.b)("p",null,"git tag rc01 3bba5efb654b885a6be2735a9e635aeaf2714381"),Object(b.b)("p",null,"berarti commit 3bba5efb654b885a6be2735a9e635aeaf2714381 ditandai dengan rc01"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git tag versi commit_id")),Object(b.b)("p",null,"12.Merge "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"menggabungkan dari satu branch dengan branch sekarang:")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git checkout master")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git merge tambah_kecepatan <- gabungkan perubahan di tambah_kecepatan ke master")),Object(b.b)("p",null,"13.Rilis "),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git archive \u2013format=tar \u2013prefix=NgeGitting/? HEAD | gzip > ../rilis/anuh.tar.gz")),Object(b.b)("p",null,"14.Pull "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"mengambil lalu menggabungkan perubahan yang terjadi di remote origin ","[.git/gitconfig]"),Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"git pull")))),Object(b.b)("p",null,"15.Push "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"mengirimkan perubahan ke master")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"git push origin master")),Object(b.b)("p",null,"16.Clone Bare "),Object(b.b)("p",null,"Anda butuh .git?"),Object(b.b)("p",null,"git clone \u2013bare REPO OUTPUT.git git clone \u2013bare NgeGitting? NgeGitting?.git"),Object(b.b)("p",null,"Sumber:"),Object(b.b)("p",null,"1.\u200b",Object(b.b)("a",{parentName:"p",href:"http://ruckuus.wordpress.com/2010/11/12/cara-murah-memakai-git/"},"http://ruckuus.wordpress.com/2010/11/12/cara-murah-memakai-git/")," "),Object(b.b)("p",null,"2.\u200b",Object(b.b)("a",{parentName:"p",href:"http://110.139.14.100/aftian/irc/BlankOn/%23blankon.20101115.log"},"http://110.139.14.100/aftian/irc/BlankOn/%23blankon.20101115.log")," "),Object(b.b)("p",null,"3.\u200b",Object(b.b)("a",{parentName:"p",href:"http://ha.hn.web.id/2010/11/16/belajar-git/"},"http://ha.hn.web.id/2010/11/16/belajar-git/")," "),Object(b.b)("p",null,"4.\u200b",Object(b.b)("a",{parentName:"p",href:"http://id.wikipedia.org/wiki/Git"},"http://id.wikipedia.org/wiki/Git")))}u.isMDXComponent=!0}}]);