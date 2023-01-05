"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[483],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||s;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<s;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1799:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const s=a.p+"assets/images/db-3284ebc84b9cc3e11dcec0dcdd3dc94f.png",o=a.p+"assets/images/webdb-81e2f5c21595a7b59c49d2dc4127507c.png",i={},l="Data Schemas",d={unversionedId:"data/schemas",id:"data/schemas",title:"Data Schemas",description:"Introduction",source:"@site/docs/data/schemas.mdx",sourceDirName:"data",slug:"/data/schemas",permalink:"/Open-Assistant/docs/data/schemas",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Data",permalink:"/Open-Assistant/docs/data/"},next:{title:"Datasets",permalink:"/Open-Assistant/docs/data/datasets"}},c={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Data Schemas",id:"data-schemas-1",level:2},{value:"Main structure: conversation trees",id:"main-structure-conversation-trees",level:3},{value:"Metadata",id:"metadata",level:3},{value:"Example: Reddit AMA dataset",id:"example-reddit-ama-dataset",level:2},{value:"Example: QA dataset",id:"example-qa-dataset",level:2},{value:"Example: Templated math problem dataset",id:"example-templated-math-problem-dataset",level:2},{value:"File Formats",id:"file-formats",level:2},{value:"Other considerations",id:"other-considerations",level:2},{value:"Common Data Structures",id:"common-data-structures",level:2},{value:"Generation",id:"generation",level:2},{value:"Ranking",id:"ranking",level:2},{value:"Databases",id:"databases",level:2},{value:"Backend ER-Diagram",id:"backend-er-diagram",level:3},{value:"Frontend ER-Diagram",id:"frontend-er-diagram",level:3}],p={toc:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-schemas"},"Data Schemas"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This document describes the data schemas used by OpenAssistant. The schemas are\ndefined as Python classes, but can be implemented in any format, be that Python,\nJSON, XML, SQL, Parquet files, etc."),(0,r.kt)("p",null,"Also, the schemas are leaning heavily on the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1iaX_nxasVWlvPiSNs0cllR9L_1neZq0RJxd6MFEalUY/edit?usp=sharing"},"OpenAssistant Data Structures"),"\npresentation."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note on conformity: be pragmatic and decide what makes sense \ud83d\ude42 , it's more\nimportant that we move forward than cramming everything into a uniform thing.")),(0,r.kt)("h2",{id:"data-schemas-1"},"Data Schemas"),(0,r.kt)("h3",{id:"main-structure-conversation-trees"},"Main structure: conversation trees"),(0,r.kt)("p",null,"Conversation trees are the fundamental data structure. Many of the datasets we\nwant to collect can be represented as conversation trees, such as QA datasets,\nchat logs, reddit dumps, etc. The main idea is that a conversation tree starts\nwith a prompt and branches out from there. Every node can also have metadata,\nsuch as collected rankings, labels, or other information."),(0,r.kt)("p",null,"Datasets that just represent linear data, such as a list of questions and\nanswers, can be represented as a conversation tree with just a single branch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class ConversationTreeNode:\n    text: str # The text of the node\n    role: Literal['prompter', 'assistant'] # Whether the node is a user prompt/follow-up or an assistant response\n    children: list[ConversationTreeNode] # The children of the node (if you have a linear conversation, this will be of length 0 or 1)\n    metadata: dict[str, Any] # Node metadata (see below)\n\nclass ConversationTree:\n    root: ConversationTreeNode # The node containing the initial prompt\n    metadata: dict[str, Any] # Tree metadata, different from root node metadata.\n\n")),(0,r.kt)("h3",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"Metadata encapsulates all the information that is not part of the conversation\nitself. This includes data about how the node was created (i.e. where it is\nfrom: crowd-sourced, templated, scraped, etc.), when it was created, its labels,\ntags, collected rankings, and other information."),(0,r.kt)("h2",{id:"example-reddit-ama-dataset"},"Example: Reddit AMA dataset"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Represent each question-follow-up set as a conversation tree."),(0,r.kt)("li",{parentName:"ul"},"Store things like usernames, timestamps, upvotes, etc. as metadata of the\nnodes."),(0,r.kt)("li",{parentName:"ul"},"Store things like the AMA title, the AMA author, the AMA subreddit, etc. as\nmetadata of the tree.")),(0,r.kt)("h2",{id:"example-qa-dataset"},"Example: QA dataset"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Represent each question-answer pair as a conversation tree.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The question is the prompt, the answer is the assistant response."))),(0,r.kt)("li",{parentName:"ul"},"If the dataset contains multiple answers to each question, each answer can be\na child of the question node."),(0,r.kt)("li",{parentName:"ul"},"If the dataset contains context text, it can be added as metadata to the\nquestion node.")),(0,r.kt)("h2",{id:"example-templated-math-problem-dataset"},"Example: Templated math problem dataset"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Represent each problem as a conversation tree with the problem text as the\nprompt and the solution as the assistant response."),(0,r.kt)("li",{parentName:"ul"},"Store the problem type (e.g. algebra, geometry, etc.) as metadata of the tree."),(0,r.kt)("li",{parentName:"ul"},"Store the template used also as metadata of the tree, as well as the source of\nthe data used to fill the template.")),(0,r.kt)("h2",{id:"file-formats"},"File Formats"),(0,r.kt)("p",null,"The above data should be representable in most file formats, but some care has\nto be taken with respect to the recursive nature of the data."),(0,r.kt)("p",null,"Most row-major formats (JSON, Avro, Protobuf, etc.), as well as many databases,\nhave no trouble with recursive (or arbitrary) schemas, but column-major formats,\nsuch as Parquet, do. For datasets with linear conversations, like many of the\ndatasets we are collecting, this is not a problem. Instead of a tree of nodes,\nsimply represent the conversation as a list of nodes. For true tree-like\nconversations, we should use a row-major format."),(0,r.kt)("h2",{id:"other-considerations"},"Other considerations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For text data of moderate size, it really doesn't matter much. It's more\nimportant to use consistent data structures and naming, than to worry about\nthe exact file format."),(0,r.kt)("li",{parentName:"ul"},"For crowd-sourced data, we are collecting it into a SQL database already."),(0,r.kt)("li",{parentName:"ul"},"Parquet files are a good choice for large datasets, modulo the issues with\nrecursive schemas."),(0,r.kt)("li",{parentName:"ul"},"If parquet can't be used, gzipped JSON-line files are a good choice. So are\nAvro files and protobufs. Keep in mind that column-major files are better for\nreading, filtering, and aggregating, but row-major files are better for\nwriting.")),(0,r.kt)("h1",{id:"task-specific-data-schemas"},"Task-Specific Data Schemas"),(0,r.kt)("p",null,"The main tasks are a) generation of response text and b) ranking of responses.\nThe following sections describe the data schemas for each of these tasks. Both\nshould be implementable in parquet files."),(0,r.kt)("p",null,"Note: These files are meant to be consumed by ML algorithms and should ideally\nbe produced from the above files."),(0,r.kt)("h2",{id:"common-data-structures"},"Common Data Structures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nclass Message:\n  text: str # The text of the message\n  role: Literal['prompter', 'assistant'] # Whether the message is a user prompt/follow-up or an assistant response\n\nclass Thread:\n  messages: list[Message] # The messages in the conversation\n\n")),(0,r.kt)("p",null,"The corresponding parquet schemas are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-parquet"},"message Message {\n  required binary text (UTF8);\n  required binary role (UTF8);\n}\n\nmessage Thread {\n  required group messages (LIST) {\n    repeated group list {\n      required group element {\n        required binary text (UTF8);\n        required binary role (UTF8);\n      }\n    }\n  }\n}\n\n")),(0,r.kt)("h2",{id:"generation"},"Generation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nclass GenerationExample:\n  thread: Thread # The conversation thread before the message to be generated\n  message: Message # The message to be generated\n\n")),(0,r.kt)("p",null,"The corresponding parquet schema is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-parquet"},"message GenerationExample {\n  required group thread (LIST) {\n    repeated group list {\n      required group element {\n        required binary text (UTF8);\n        required binary role (UTF8);\n      }\n    }\n  }\n  required group message (LIST) {\n    repeated group list {\n      required group element {\n        required binary text (UTF8);\n        required binary role (UTF8);\n      }\n    }\n  }\n}\n\n")),(0,r.kt)("h2",{id:"ranking"},"Ranking"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nclass RankingExample:\n  thread: Thread # The conversation thread before the message to be ranked\n  messages: list[Message] # The messages to be ranked, in oder of decreasing preference\n\n")),(0,r.kt)("p",null,"The corresponding parquet schema is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-parquet"},"message RankingExample {\n  required group thread (LIST) {\n    repeated group list {\n      required group element {\n        required binary text (UTF8);\n        required binary role (UTF8);\n      }\n    }\n  }\n  required group messages (LIST) {\n    repeated group list {\n      required group element {\n        required binary text (UTF8);\n        required binary role (UTF8);\n      }\n    }\n  }\n}\n")),(0,r.kt)("h2",{id:"databases"},"Databases"),(0,r.kt)("p",null,"Open-Assistant uses two databases, one for the backend and one for the frontend.\nBoth are ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," databases which run in docker\ncontainers."),(0,r.kt)("h3",{id:"backend-er-diagram"},"Backend ER-Diagram"),(0,r.kt)("p",null,"ER-Diagram of backend Database"),(0,r.kt)("img",{src:s}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In order for the diagram to not be too messy, foreign key connection to ",(0,r.kt)("inlineCode",{parentName:"li"},"api_client")," are not shown."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"frontend_message_id")," references ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"taskInteraction")," on the frontend")),(0,r.kt)("h3",{id:"frontend-er-diagram"},"Frontend ER-Diagram"),(0,r.kt)("p",null,"ER-Diagram of frontend Database"),(0,r.kt)("img",{src:o}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"registeredTask")," references ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"message")," on the backend")))}u.isMDXComponent=!0}}]);