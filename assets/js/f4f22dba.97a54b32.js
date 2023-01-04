"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[191],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,d=p["".concat(l,".").concat(h)]||p[h]||g[h]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},o="General",s={unversionedId:"research/general",id:"research/general",title:"General",description:"This page lists research papers that are relevant to the project.",source:"@site/docs/research/general.md",sourceDirName:"research",slug:"/research/general",permalink:"/Open-Assistant/docs/research/general",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Research",permalink:"/Open-Assistant/docs/category/research"},next:{title:"Cohere Grounded QA",permalink:"/Open-Assistant/docs/research/search-based-qa"}},l={},u=[{value:"Automatically Generating Instruction Data for Training",id:"automatically-generating-instruction-data-for-training",level:2},{value:"SELF-INSTRUCT: Aligning Language Model with Self Generated Instructions [ArXiv], [Github].",id:"self-instruct-aligning-language-model-with-self-generated-instructions-arxiv-github",level:3},{value:"Tuning Language Models with (Almost) No Human Labor. [ArXiv], [Github].",id:"tuning-language-models-with-almost-no-human-labor-arxiv-github",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"general"},"General"),(0,a.kt)("p",null,"This page lists research papers that are relevant to the project."),(0,a.kt)("h2",{id:"automatically-generating-instruction-data-for-training"},"Automatically Generating Instruction Data for Training"),(0,a.kt)("p",null,"This line of work is about significantly reducing the need for manually\nannotated data for the purpose of training\n",(0,a.kt)("a",{parentName:"p",href:"https://openai.com/blog/instruction-following/"},"instruction-aligned")," language\nmodels."),(0,a.kt)("h3",{id:"self-instruct-aligning-language-model-with-self-generated-instructions-arxiv-github"},"SELF-INSTRUCT: Aligning Language Model with Self Generated Instructions [",(0,a.kt)("a",{parentName:"h3",href:"https://arxiv.org/pdf/2212.10560.pdf"},"ArXiv"),"], [",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/yizhongw/self-instruct"},"Github"),"]."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We introduce SELF-INSTRUCT, a framework for improving the\ninstruction-following capabilities of pretrained language models by\nbootstrapping off its own generations. Our pipeline generates instruction,\ninput, and output samples from a language model, then prunes them before using\nthem to finetune the original model. Applying our method to vanilla GPT3, we\ndemonstrate a 33% absolute improvement over the original model on\nSuperNaturalInstructions, on par with the performance of InstructGPT-0011,\nwhich is trained with private user data and human annotations.")),(0,a.kt)("h3",{id:"tuning-language-models-with-almost-no-human-labor-arxiv-github"},"Tuning Language Models with (Almost) No Human Labor. [",(0,a.kt)("a",{parentName:"h3",href:"https://arxiv.org/pdf/2212.09689.pdf"},"ArXiv"),"], [",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/orhonovich/unnatural-instructions"},"Github"),"]."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In this work, we introduce Unnatural Instructions: a large dataset of creative\nand diverse instructions, collected with virtually no human labor. We collect\n64,000 examples by prompting a language model with three seed examples of\ninstructions and eliciting a fourth. This set is then expanded by prompting\nthe model to rephrase each instruction, creating a total of approximately\n240,000 examples of instructions, inputs, and outputs. Experiments show that\ndespite containing a fair amount of noise, training on Unnatural Instructions\nrivals the effectiveness of training on open-source manually-curated datasets,\nsurpassing the performance of models such as T0++ and Tk-Instruct across\nvarious benchmarks.")))}p.isMDXComponent=!0}}]);