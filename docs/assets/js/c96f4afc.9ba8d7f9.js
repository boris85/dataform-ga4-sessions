"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(n),v=r,d=p["".concat(c,".").concat(v)]||p[v]||u[v]||o;return n?a.createElement(d,l(l({ref:t},m),{},{components:n})):a.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=v;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},2426:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},l="Ecommerce Events",i={unversionedId:"events/ecommerce-events",id:"events/ecommerce-events",isDocsHomePage:!1,title:"Ecommerce Events",description:"EventFactory has a method to create all recommended ecommerce events - createEcommerceEvents.",source:"@site/docs/events/ecommerce-events.md",sourceDirName:"events",slug:"/events/ecommerce-events",permalink:"/dataform-ga4-sessions/events/ecommerce-events",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/events/ecommerce-events.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Event factory",permalink:"/dataform-ga4-sessions/events/event-factory"},next:{title:"Form related events",permalink:"/dataform-ga4-sessions/events/forms-events"}},c=[{value:"Ecommerce events value parameter",id:"ecommerce-events-value-parameter",children:[]}],s={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ecommerce-events"},"Ecommerce Events"),(0,r.kt)("p",null,"EventFactory has a method to create all recommended ecommerce events - ",(0,r.kt)("a",{parentName:"p",href:"/api#module_dataform-ga4-sessions..EventFactory+createEcommerceEvents"},"createEcommerceEvents"),"."),(0,r.kt)("p",null,"The method creates these events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"add_payment_info"),(0,r.kt)("li",{parentName:"ul"},"add_shipping_info"),(0,r.kt)("li",{parentName:"ul"},"add_to_cart"),(0,r.kt)("li",{parentName:"ul"},"add_to_wishlist"),(0,r.kt)("li",{parentName:"ul"},"begin_checkout"),(0,r.kt)("li",{parentName:"ul"},"generate_lead"),(0,r.kt)("li",{parentName:"ul"},"purchase"),(0,r.kt)("li",{parentName:"ul"},"refund"),(0,r.kt)("li",{parentName:"ul"},"remove_from_cart"),(0,r.kt)("li",{parentName:"ul"},"view_cart"),(0,r.kt)("li",{parentName:"ul"},"view_item"),(0,r.kt)("li",{parentName:"ul"},"view_item_list")),(0,r.kt)("p",null,"You could use it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Define your config\nconst eventConfig = {\n  dataset: "analytics_XXXXXX",\n  incrementalTableName: "events_XXXXXX",\n};\n// Create all recommended events\nlet events = ef.createEcommerceEvents();\n// Publish events\nevents.forEach((event) => event.publish());\n')),(0,r.kt)("h2",{id:"ecommerce-events-value-parameter"},"Ecommerce events value parameter"),(0,r.kt)("p",null,"The small note about the ",(0,r.kt)("inlineCode",{parentName:"p"},"purchase")," event's ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," parameter. It always should be float value and you could query it from ",(0,r.kt)("inlineCode",{parentName:"p"},"value.float_value"),". But if the value is integer, GA4 could export it as ",(0,r.kt)("inlineCode",{parentName:"p"},"value.int_value"),". So you should check both values ",(0,r.kt)("inlineCode",{parentName:"p"},"float_value")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"int_value"),", that's why in the event configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"includes/recommended-events.js")," the type for ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," parameter is ",(0,r.kt)("inlineCode",{parentName:"p"},"coalesce_float"),"."),(0,r.kt)("p",null,"And the helper method ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ArtemKorneevGA/dataform-ga4-helpers/blob/32841271f65eb9ff10f844fe812343de7ddab407/index.js#L13C7-L13C24"},"getSqlUnnestParam")," tries to COALESCE ",(0,r.kt)("inlineCode",{parentName:"p"},"float_value"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"int_value")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"double_value")," and return value as float:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"if (paramType.toLowerCase() === \"coalesce_float\") {\n  return `(SELECT COALESCE(ep.value.float_value, SAFE_CAST(ep.value.int_value AS FLOAT64), ep.value.double_value) FROM UNNEST(${unnestColumnName}) ep WHERE ep.key = '${paramName}' LIMIT 1) ${alias}`;\n}\n")))}p.isMDXComponent=!0}}]);