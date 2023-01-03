"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[1623],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5323:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:2},i="Data Augmentation",s={unversionedId:"data/data-augmentation",id:"data/data-augmentation",title:"Data Augmentation",description:"(pull request welcome)",source:"@site/docs/data/data-augmentation.md",sourceDirName:"data",slug:"/data/data-augmentation",permalink:"/Open-Assistant/docs/data/data-augmentation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"OpenAssistant Data Schemas",permalink:"/Open-Assistant/docs/data/data-schemas"},next:{title:"Supervised Datasets",permalink:"/Open-Assistant/docs/data/supervised-datasets"}},c={},l=[{value:"What is data augmentation",id:"what-is-data-augmentation",level:2},{value:"How to contribute",id:"how-to-contribute",level:2}],u={toc:l};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-augmentation"},"Data Augmentation"),(0,r.kt)("p",null,"(pull request welcome)"),(0,r.kt)("h2",{id:"what-is-data-augmentation"},"What is data augmentation"),(0,r.kt)("p",null,"Data augmentation is a technique we can use to get better data faster. Using\nmachine learning models to analyze long data (like an essay) and compress it\ninto instructions."),(0,r.kt)("h2",{id:"how-to-contribute"},"How to contribute"),(0,r.kt)("p",null,"To contribute to data augmentation you can write a short Python script that uses\na model from HuggingFace to analyze the text.\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/13a188pPvqnlvuVa3e_suVz4YO5s-JWeiOOrpp0odImg/edit"},"Here"),"\nare examples of what you can do."),(0,r.kt)("p",null,"And here are example implementations:\n",(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/drive/1GllCN5PgSYxBxINZsv3A2r0SpdznHlbT?usp=sharing"},"Idea 3"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/drive/1nZx5LRjO61fYprFyqtrwPDLOis6ctR4p#scrollTo=1EE8CriiaCXj"},"Idea 4")),(0,r.kt)("p",null,"To contribute simply choose one of many ideas from the document above and\nimplement it."))}p.isMDXComponent=!0}}]);