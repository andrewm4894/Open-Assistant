"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},o="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"OpenAssistant is a chat-based assistant that understands tasks, can interact with third-party systems, and retrieve information dynamically to do so.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/Open-Assistant/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",next:{title:"Guides",permalink:"/Open-Assistant/docs/category/guides"}},s={},c=[{value:"Our Vision",id:"our-vision",level:2},{value:"Principles",id:"principles",level:2},{value:"Main Efforts",id:"main-efforts",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"OpenAssistant is a chat-based assistant that understands tasks, can interact with third-party systems, and retrieve information dynamically to do so."),(0,a.kt)("p",null,"It can be extended and personalized easily and is developed as free, open-source software."),(0,a.kt)("h2",{id:"our-vision"},"Our Vision"),(0,a.kt)("p",null,"We want OpenAssistant to be the single, unifying platform that all other systems use to interface with humans."),(0,a.kt)("h2",{id:"principles"},"Principles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We put the human in the center"),(0,a.kt)("li",{parentName:"ul"},"We need to get the MVP out fast, while we still have momentum"),(0,a.kt)("li",{parentName:"ul"},"We pull in one direction"),(0,a.kt)("li",{parentName:"ul"},"We are pragmatic"),(0,a.kt)("li",{parentName:"ul"},"We aim for models that can (or could, with some effort) be run on consumer hardware"),(0,a.kt)("li",{parentName:"ul"},"We rapidly validate our ML experiments on a small scale, before going to a supercluster")),(0,a.kt)("h2",{id:"main-efforts"},"Main Efforts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Data Collection Code \u2192 Backend, website, and discord bot to collect data"),(0,a.kt)("li",{parentName:"ul"},"Instruction Dataset Gathering \u2192 Scraping & cleaning web data"),(0,a.kt)("li",{parentName:"ul"},"Gamification \u2192 Leaderboards & more, to make data collection more fun"),(0,a.kt)("li",{parentName:"ul"},"Model Training \u2192 Experiments on pseudo- and real-data"),(0,a.kt)("li",{parentName:"ul"},"Infrastructure \u2192 Collection, training, and inference"),(0,a.kt)("li",{parentName:"ul"},"Data Collection \u2192 This is the bulk of the work"),(0,a.kt)("li",{parentName:"ul"},"Data Augmentation \u2192 Making more data from little data"),(0,a.kt)("li",{parentName:"ul"},"Privacy and Safety \u2192 Protecting sensitive data")))}p.isMDXComponent=!0}}]);