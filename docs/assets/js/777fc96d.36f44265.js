"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[146],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),p=o,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||r;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1302:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:4},i="Scheduling - Daily updates",l={unversionedId:"guides/scheduling-daily",id:"guides/scheduling-daily",isDocsHomePage:!1,title:"Scheduling - Daily updates",description:"I usumed that you already know how to careate sessions and events tables and now you want to schedule daily updates.",source:"@site/docs/guides/scheduling-daily.md",sourceDirName:"guides",slug:"/guides/scheduling-daily",permalink:"/dataform-ga4-sessions/guides/scheduling-daily",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/scheduling-daily.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Dataform Basics",permalink:"/dataform-ga4-sessions/guides/dataform"},next:{title:"Scheduling - Advanced",permalink:"/dataform-ga4-sessions/guides/scheduling-advanced"}},s=[{value:"Create release configuration",id:"create-release-configuration",children:[]},{value:"Create workflow configuration",id:"create-workflow-configuration",children:[]},{value:"Change sessions and events tables",id:"change-sessions-and-events-tables",children:[]},{value:"Deside at what time to run actions",id:"deside-at-what-time-to-run-actions",children:[]}],u={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scheduling---daily-updates"},"Scheduling - Daily updates"),(0,o.kt)("p",null,"I usumed that you already know how to careate ",(0,o.kt)("a",{parentName:"p",href:"/sessions/create-session"},"sessions")," and ",(0,o.kt)("a",{parentName:"p",href:"/events/create-event"},"events")," tables and now you want to schedule daily updates."),(0,o.kt)("p",null,"The easiest way to do it is to use Dataform's ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/dataform/docs/workflow-configurations"},"workflow configurations"),"."),(0,o.kt)("p",null,"Dataform run actions in a two steps: it compiles your Dataform project (release configuration) and then executes release configuration (workflow configuration). So you need to setup both these steps."),(0,o.kt)("h2",{id:"create-release-configuration"},"Create release configuration"),(0,o.kt)("p",null,'In your Dataform repository select Release configuration tab and click "New release configuration" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3463).Z})),(0,o.kt)("p",null,"And fill out the form:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set Release ID (name) for something like ",(0,o.kt)("inlineCode",{parentName:"li"},"production")),(0,o.kt)("li",{parentName:"ul"},"Git commitish (GitHub branch name) to ",(0,o.kt)("inlineCode",{parentName:"li"},"main")),(0,o.kt)("li",{parentName:"ul"},"Frequency to ",(0,o.kt)("inlineCode",{parentName:"li"},"Daily")," by default. It means how often Dataform should recompile your project. If you don't change your code often you could select ",(0,o.kt)("inlineCode",{parentName:"li"},"Never")," and recompile configuration manually after your changes."),(0,o.kt)("li",{parentName:"ul"},"Timezone - you could change the timezone if you need to. By default it's UTC.")),(0,o.kt)("p",null,"For this example we don't need to change Compilation overrides and Compilation variables."),(0,o.kt)("p",null,'Click "Create" button to create release configuration.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6214).Z})),(0,o.kt)("h2",{id:"create-workflow-configuration"},"Create workflow configuration"),(0,o.kt)("p",null,'In your Dataform repository page select Workflow configuration tab and click "New workflow configuration" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6580).Z})),(0,o.kt)("p",null,"And fill out the form:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set Configuration ID (name) for something like ",(0,o.kt)("inlineCode",{parentName:"li"},"production-daily")),(0,o.kt)("li",{parentName:"ul"},"Release configuration - Select release configuration we just created ",(0,o.kt)("inlineCode",{parentName:"li"},"production")),(0,o.kt)("li",{parentName:"ul"},"Service account - you could select default service account or keep it empty."),(0,o.kt)("li",{parentName:"ul"},"Frequency - set it to daily ",(0,o.kt)("inlineCode",{parentName:"li"},"0 0 * * *"),", you could provide any frequency in crontab format. Or use something like ",(0,o.kt)("a",{parentName:"li",href:"https://crontab.guru/every-day"},"crontab.guru")," to generate it."),(0,o.kt)("li",{parentName:"ul"},"Timezone - you could change the timezone if you need to. By default it's UTC."),(0,o.kt)("li",{parentName:"ul"},"Select actions you want to run. By defualt it's all actions in your Dataform project. But you could select only needed actions or ",(0,o.kt)("a",{parentName:"li",href:"/guides/dataform#tags"},"tags"),".")),(0,o.kt)("p",null,'Create "Create" button to create a workflow configuration.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2570).Z})),(0,o.kt)("p",null,"That's all, Dataform will run your actions daily."),(0,o.kt)("h2",{id:"change-sessions-and-events-tables"},"Change sessions and events tables"),(0,o.kt)("p",null,"But for daily updates you need to query only the previous date table, but sometimes GA4 delays data export for two days, so it's safe to query the last two days. You could do it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const ga4 = require("dataform-ga4-sessions");\n\nconst config = {\n  incrementalTableName: "events_*",\n  incrementalTableEventStepWhere:\n    "_TABLE_SUFFIX between format_date(\'%Y%m%d\',date_sub(current_date(), interval 3 day)) and format_date(\'%Y%m%d\',date_sub(current_date(), interval 1 day)) and contains_substr(_TABLE_SUFFIX, \'intraday\') is false",\n  nonIncrementalTableName: "events_*",\n  nonIncrementalTableEventStepWhere:\n    "contains_substr(_TABLE_SUFFIX, \'intraday\') is false",\n};\n\nconst sessions = new ga4.Session(config);\nsessions.publish();\n')),(0,o.kt)("p",null,"Line by line:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'incrementalTableName: "events',"_","*",'" - here we set incremental table name to ',(0,o.kt)("inlineCode",{parentName:"li"},"events_*")," so for incremental context Dataform will query all daily tables. So we need to filter them by providing were statement."),(0,o.kt)("li",{parentName:"ul"},"incrementalTableEventStepWhere - here we provide where statement for incremental context. We control which tables to query using ",(0,o.kt)("inlineCode",{parentName:"li"},"_TABLE_SUFFIX"),". So here set that we need to query only tables for the previous two days (excluding today date) and format dates in GA4 tables format like ",(0,o.kt)("inlineCode",{parentName:"li"},"20231220")," ('%Y%m%d'). and the second condition is to exclude intraday tables. It's a good practice to exclude intraday tables because they could be incomplete and save them in different tables. You could read more about intraday tables in ",(0,o.kt)("a",{parentName:"li",href:"/sessions/intraday-sessions"},"intraday sessions tutorial"),"."),(0,o.kt)("li",{parentName:"ul"},'nonIncrementalTableName: "events',"_","*",'" - here we set non incremental table name to ',(0,o.kt)("inlineCode",{parentName:"li"},"events_*"),". It's mandatory, as by default the package uses the same table name. It means that for the first run we will filter all daily tables."),(0,o.kt)("li",{parentName:"ul"},"nonIncrementalTableEventStepyWhere - here we filter intraday tables for the first run. Again it's a good practice to exclude intraday tables because they could be incomplete.")),(0,o.kt)("h2",{id:"deside-at-what-time-to-run-actions"},"Deside at what time to run actions"),(0,o.kt)("p",null,"At the moment doesn't guarantee that GA4 exports will be ready at the same time every day. Even for GA4 360 clients. So if you are using this scheduling method you need to decide at what time to run actions."),(0,o.kt)("p",null,"You could check it manually using the following query, but don't forget to change ",(0,o.kt)("inlineCode",{parentName:"p"},"<GCP-PROJECT-ID>")," to your GCP project id and ",(0,o.kt)("inlineCode",{parentName:"p"},"analytics_XXXXXX")," to your actual dataset name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"```javascript\n\n```sql\nSELECT\n  table_name,\n  creation_time,\n  EXTRACT(hour from creation_time) as creation_hour,\n  DATETIME_DIFF(datetime(creation_time), PARSE_DATETIME('%Y%m%d', substr(table_name, 8)),hour) as creation_delay,\nFROM `<GCP-PROJECT-ID>`.analytics_XXXXXX.INFORMATION_SCHEMA.TABLES as p\nWHERE  regexp_contains(table_name, r'events_\\d+')\nORDER BY table_name DESC\n")),(0,o.kt)("p",null,"Or even get the maximum and average delay:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n  max(DATETIME_DIFF(datetime(creation_time), PARSE_DATETIME('%Y%m%d', substr(table_name, 8)),hour)) as max_hours_delay,\n  round(avg(DATETIME_DIFF(datetime(creation_time), PARSE_DATETIME('%Y%m%d', substr(table_name, 8)),hour))) as avg_hours_delay,\nFROM `<GCP-PROJECT-ID>`.analytics_XXXXXX.INFORMATION_SCHEMA.TABLES as p\nWHERE  regexp_contains(table_name, r'events_\\d+')\n")),(0,o.kt)("p",null,"Usually it's something between 30 and 46 hours."),(0,o.kt)("p",null,"As an option you could create two workflow configurations per day. It's should be safe enough, as action generated by the package creates ",(0,o.kt)("inlineCode",{parentName:"p"},"MERGE")," statement and you wouldn't have doubles for the same sessions."),(0,o.kt)("p",null,"Or you could use a more advanced scheduling method - ",(0,o.kt)("a",{parentName:"p",href:"/guides/scheduling-advanced"},"scheduling - intraday"),"."))}d.isMDXComponent=!0},3463:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-release-configuration-6496a240110576a1b750d78a49cd8d49.png"},6580:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-workflow-configuration-77f9a1a3eda2d3f3ea02f7ed75ffe8cf.png"},6214:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/release-configuration-form-6ef321d89c268f3d8d39ebaa3dc042c7.png"},2570:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/workflow-configuration-form-fca57e3b4153ac448516102140167f72.png"}}]);