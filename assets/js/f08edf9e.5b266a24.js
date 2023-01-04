"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[695],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6371:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={},l="Cohere Grounded QA",i={unversionedId:"research/search_based_qa",id:"research/search_based_qa",title:"Cohere Grounded QA",description:"Cohere AI created a question-answering chatbot",source:"@site/docs/research/search_based_qa.md",sourceDirName:"research",slug:"/research/search_based_qa",permalink:"/Open-Assistant/docs/research/search_based_qa",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Research",permalink:"/Open-Assistant/docs/research/"},next:{title:"DUMMY Tutorial - Basics",permalink:"/Open-Assistant/docs/category/dummy-tutorial---basics"}},s={},p=[{value:"Cohere API",id:"cohere-api",level:2},{value:"Grounded QA System",id:"grounded-qa-system",level:2},{value:"Models",id:"models",level:2},{value:"xlarge",id:"xlarge",level:3},{value:"multilingual-22-12",id:"multilingual-22-12",level:3},{value:"OpenAssistant for Grounded QA",id:"openassistant-for-grounded-qa",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cohere-grounded-qa"},"Cohere Grounded QA"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/cohere-ai/sandbox-grounded-qa"},"Cohere AI created a question-answering chatbot"),"\nthat can"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Understand questions in the context of a conversation"),(0,r.kt)("li",{parentName:"ol"},"Search the internet for related information"),(0,r.kt)("li",{parentName:"ol"},"Identify which information in the search results is relevant to the question"),(0,r.kt)("li",{parentName:"ol"},"Synthesize the information into an answer to the question")),(0,r.kt)("h2",{id:"cohere-api"},"Cohere API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.cohere.ai/reference/generate"},"Cohere's generate function"),":\nContinues a text prompt using either the ",(0,r.kt)("inlineCode",{parentName:"p"},"medium")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"xlarge")," model."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.cohere.ai/reference/embed"},"Cohere's embed function"),": Embedgs a\nlist of strings using either the ",(0,r.kt)("inlineCode",{parentName:"p"},"small")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"large")," model. Alternatively, you\ncan specify the ID of a custom model and use that instead."),(0,r.kt)("h2",{id:"grounded-qa-system"},"Grounded QA System"),(0,r.kt)("p",null,"Cohere's Grounded QA system makes 4 calls to the Cohere API:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get contextualized question as a query to Google\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cohere-ai/sandbox-grounded-qa/blob/main/qa/model.py"},"code"),")"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Input: Chat History"),(0,r.kt)("li",{parentName:"ul"},"Output: Contextualized Question"),(0,r.kt)("li",{parentName:"ul"},"API Call: ",(0,r.kt)("inlineCode",{parentName:"li"},"cohere.generate")),(0,r.kt)("li",{parentName:"ul"},"Model: ",(0,r.kt)("inlineCode",{parentName:"li"},"xlarge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cohere-ai/sandbox-grounded-qa/blob/main/qa/prompt_data/get_contextual_search_query.prompt"},"Prompt"),':\nNine few-shot examples of (Chat History, Contextualized Question) pairs\nfollowed by the current chat history and the prompt "question: "'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate sample answer to compare with search results\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cohere-ai/sandbox-grounded-qa/blob/main/qa/model.py"},"code"),")"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Input: Contextualized Question"),(0,r.kt)("li",{parentName:"ul"},"Output: Sample Answer"),(0,r.kt)("li",{parentName:"ul"},"API Call: ",(0,r.kt)("inlineCode",{parentName:"li"},"cohere.generate")),(0,r.kt)("li",{parentName:"ul"},"Model: ",(0,r.kt)("inlineCode",{parentName:"li"},"xlarge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cohere-ai/sandbox-grounded-qa/blob/main/qa/prompt_data/get_sample_answer.prompt"},"Prompt"),':\nSome task instructions followed by 12 few-shot examples of (Contextualized\nQuestion, Sample Answer) pairs followed by the current contextualized\nquestion and the prompt "answer: "'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get embeddings to rank search results by cosine similarity to sample answer\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cohere-ai/sandbox-grounded-qa/blob/main/qa/search.py"},"code"),")"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Input: Sample Answer, Search Results"),(0,r.kt)("li",{parentName:"ul"},"Output: Embeddings of sample answer and all search result documents"),(0,r.kt)("li",{parentName:"ul"},"API Call: ",(0,r.kt)("inlineCode",{parentName:"li"},"cohere.embed")),(0,r.kt)("li",{parentName:"ul"},"Model: ",(0,r.kt)("inlineCode",{parentName:"li"},"multilingual-22-12")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Condition on the top 2 most similar search results and answer the question\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cohere-ai/sandbox-grounded-qa/blob/main/qa/answer.py"},"code"),")"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Input: Top 2 Search Results, Contextualized Question"),(0,r.kt)("li",{parentName:"ul"},"Output: Answer"),(0,r.kt)("li",{parentName:"ul"},"API Call: ",(0,r.kt)("inlineCode",{parentName:"li"},"cohere.generate")),(0,r.kt)("li",{parentName:"ul"},"Model: ",(0,r.kt)("inlineCode",{parentName:"li"},"xlarge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cohere-ai/sandbox-grounded-qa/blob/43f3e9710112dcc8c92652ac1326ed9330823ddf/qa/answer.py#L25"},"Prompt"),":\nTask instructions followed by the context and question.")))),(0,r.kt)("h2",{id:"models"},"Models"),(0,r.kt)("p",null,"Cohere's model documentation is pretty sparse"),(0,r.kt)("h3",{id:"xlarge"},(0,r.kt)("a",{parentName:"h3",href:"https://docs.cohere.ai/docs/generation-card#model-description"},"xlarge")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Training Data:\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.cohere.ai/docs/data-statement"},(0,r.kt)("inlineCode",{parentName:"a"},"coheretext-filtered")," dataset"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"200GB of filtered text (3TB unfiltered) from the Google Books dataset,\nCommonCrawl, and text scraped by Cohere"),(0,r.kt)("li",{parentName:"ul"},"English documents only"),(0,r.kt)("li",{parentName:"ul"},'Filtered "harmful, biased, or otherwise undesirable documents"'))),(0,r.kt)("li",{parentName:"ul"},"Model architecture: Generative Pretrained Transformer"),(0,r.kt)("li",{parentName:"ul"},"Model Performance:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Hellaswag Accuracy, Zero-Shot: 0.805"),(0,r.kt)("li",{parentName:"ul"},"PIQA Likelihood, Zero-Shot: 0.824"),(0,r.kt)("li",{parentName:"ul"},"Cohere also reported\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.cohere.ai/docs/generation-card#safety-benchmarks"},"safety benchmarks"))))),(0,r.kt)("h3",{id:"multilingual-22-12"},(0,r.kt)("a",{parentName:"h3",href:"https://docs.cohere.ai/docs/multilingual-language-models"},"multilingual-22-12")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multilingual model was trained using dot product calculations"),(0,r.kt)("li",{parentName:"ul"},"Model Performance:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Clustering: 51.0"),(0,r.kt)("li",{parentName:"ul"},"Search-English: 55.8"),(0,r.kt)("li",{parentName:"ul"},"Search-Multilingual: 51.4"),(0,r.kt)("li",{parentName:"ul"},"Cross-lingual Classification: 64.6"),(0,r.kt)("li",{parentName:"ul"},"Cohere's multilingual model outperformed: Sentence-transformers:\n",(0,r.kt)("inlineCode",{parentName:"li"},"paraphrase-multilingual-mpnet-base-v2"),", Google: ",(0,r.kt)("inlineCode",{parentName:"li"},"LaBSE"),", Google:\n",(0,r.kt)("inlineCode",{parentName:"li"},"Universal Sentence Encoder")," in all the above categories according to\nCohere.")))),(0,r.kt)("h2",{id:"openassistant-for-grounded-qa"},"OpenAssistant for Grounded QA"),(0,r.kt)("p",null,"OpenAssistant may fulfill a similar role as the ",(0,r.kt)("inlineCode",{parentName:"p"},"xlarge")," Cohere model in the\ngrounded QA system if it can:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Generate a contextualized question from a chat history"),(0,r.kt)("li",{parentName:"ol"},"Generate a sample answer to compare with search results"),(0,r.kt)("li",{parentName:"ol"},"Generate an answer conditioned on the top 2 most similar search results")),(0,r.kt)("p",null,"Perhaps these tasks could be work packages and get assigned to human annotators\nto create examples of the input and output for each task."),(0,r.kt)("p",null,'OpenAssistant must also be able to identify when it is appropriate to search the\ninternet. The Cohere system assumes every message from the user is a question\nand searches the internet for an answer. OpenAssistant would also need a way to\nindicate to an internal system that it "wants" to search the internet.'),(0,r.kt)("p",null,"Perhaps OpenAssistant could prefix every message it sends with a recipient ID.\nIf it wishes to send a command to an internal system, if could prefix the\nmessage with something like CMD: whereas if it wants to communicate with the\nuser, it could prefix its message with USR:"),(0,r.kt)("p",null,"This system may allow for flexible communication between OpenAssistant and one\nor more conversational systems."),(0,r.kt)("p",null,"Examples of this prefix system would need to be taught to OpenAssistant through\ntraining data that contains such syntax. Perhaps such examples could be\ngenerated through the work packages system."))}m.isMDXComponent=!0}}]);