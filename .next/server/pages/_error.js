(()=>{var e={};e.id=731,e.ids=[220,731],e.modules={4477:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>m,default:()=>l,getServerSideProps:()=>p,getStaticPaths:()=>u,getStaticProps:()=>c,reportWebVitals:()=>f,routeModule:()=>j,unstable_getServerProps:()=>x,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>h,unstable_getStaticProps:()=>g});var n=r(3865),a=r(9455),s=r(671),o=r(3212),i=r(6129),d=r(3532);let l=(0,s.M)(d,"default"),c=(0,s.M)(d,"getStaticProps"),u=(0,s.M)(d,"getStaticPaths"),p=(0,s.M)(d,"getServerSideProps"),m=(0,s.M)(d,"config"),f=(0,s.M)(d,"reportWebVitals"),g=(0,s.M)(d,"unstable_getStaticProps"),h=(0,s.M)(d,"unstable_getStaticPaths"),y=(0,s.M)(d,"unstable_getStaticParams"),x=(0,s.M)(d,"unstable_getServerProps"),b=(0,s.M)(d,"unstable_getServerSideProps"),j=new n.PagesRouteModule({definition:{kind:a.A.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:i.default,Document:o.default},userland:d})},3532:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let n=r(9929),a=r(8732),s=n._(r(2015)),o=n._(r(4426)),i={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function d(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let l={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class c extends s.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||i[e]||"An unexpected error has occurred";return(0,a.jsxs)("div",{style:l.error,children:[(0,a.jsx)(o.default,{children:(0,a.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,a.jsxs)("div",{style:l.desc,children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,a.jsx)("h1",{className:"next-error-h1",style:l.h1,children:e}):null,(0,a.jsx)("div",{style:l.wrap,children:(0,a.jsxs)("h2",{style:l.h2,children:[this.props.title||e?r:(0,a.jsx)(a.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}c.displayName="ErrorPage",c.getInitialProps=d,c.origGetInitialProps=d,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8498:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},4426:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return u}});let n=r(9929),a=r(4588),s=r(8732),o=a._(r(2015)),i=n._(r(3309)),d=r(9811),l=r(9241),c=r(8498);function u(e){void 0===e&&(e=!1);let t=[(0,s.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(9794);let m=["name","httpEquiv","charSet","itemProp"];function f(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return a=>{let s=!0,o=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){o=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?s=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?s=!1:t.add(a.type);break;case"meta":for(let e=0,t=m.length;e<t;e++){let t=m[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?s=!1:r.add(t);else{let e=a.props[t],r=n[t]||new Set;("name"!==t||!o)&&r.has(e)?s=!1:(r.add(e),n[t]=r)}}}}return s}}()).reverse().map((e,t)=>{let n=e.key||t;if(process.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,o.useContext)(d.AmpStateContext),n=(0,o.useContext)(l.HeadManagerContext);return(0,s.jsx)(i.default,{reduceComponentsToState:f,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3309:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let n=r(2015),a=()=>{},s=()=>{};function o(e){var t;let{headManager:r,reduceComponentsToState:o}=e;function i(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(o(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),i(),a(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),a(()=>(r&&(r._pendingUpdate=i),()=>{r&&(r._pendingUpdate=i)})),s(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},9794:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},6129:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var n=r(8732);r(2015);var a=r(8133),s=r.n(a),o=r(7912),i=r.n(o),d=r(7740),l=r(6881),c=r(7051);let u=(0,d.configureStore)({reducer:{darkMode:l.Ay,main:c.Ay}});var p=r(2544);r(845);let m=function({Component:e,pageProps:t}){let r=e.getLayout||(e=>e),a="Admin One React Tailwind free",o="Admin One - free React Next Tailwind dashboard with TypeScript and dark mode",d="https://static.justboil.me/templates/one/repo-tailwind-react.png",l="1920";return(0,n.jsx)(p.Provider,{store:u,children:r((0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("meta",{name:"description",content:o}),(0,n.jsx)("meta",{property:"og:url",content:"https://justboil.github.io/admin-one-react-tailwind/"}),(0,n.jsx)("meta",{property:"og:site_name",content:"JustBoil.me"}),(0,n.jsx)("meta",{property:"og:title",content:a}),(0,n.jsx)("meta",{property:"og:description",content:o}),(0,n.jsx)("meta",{property:"og:image",content:d}),(0,n.jsx)("meta",{property:"og:image:type",content:"image/png"}),(0,n.jsx)("meta",{property:"og:image:width",content:l}),(0,n.jsx)("meta",{property:"og:image:height",content:"960"}),(0,n.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{property:"twitter:title",content:a}),(0,n.jsx)("meta",{property:"twitter:description",content:o}),(0,n.jsx)("meta",{property:"twitter:image:src",content:d}),(0,n.jsx)("meta",{property:"twitter:image:width",content:l}),(0,n.jsx)("meta",{property:"twitter:image:height",content:"960"}),(0,n.jsx)("link",{rel:"icon",href:" "})]}),(0,n.jsx)(s(),{src:"https://www.googletagmanager.com/gtag/js?id=UA-130795909-1",strategy:"afterInteractive"}),(0,n.jsx)(s(),{id:"google-analytics",strategy:"afterInteractive",children:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-130795909-1');
            `}),(0,n.jsx)(e,{...t})]}))})}},3212:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(8732),a=r(883);function s(){return(0,n.jsxs)(a.Html,{lang:"en",className:"style-basic",children:[(0,n.jsx)(a.Head,{}),(0,n.jsxs)("body",{children:[(0,n.jsx)(a.Main,{}),(0,n.jsx)(a.NextScript,{})]})]})}},6881:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>s,S8:()=>a});let n=(0,r(7740).createSlice)({name:"darkMode",initialState:{isEnabled:!1},reducers:{setDarkMode:(e,t)=>{e.isEnabled=null!==t.payload?t.payload:!e.isEnabled,"undefined"!=typeof document&&(document.body.classList[e.isEnabled?"add":"remove"]("dark-scrollbars"),document.documentElement.classList[e.isEnabled?"add":"remove"]("dark","dark-scrollbars-compat"))}}}),{setDarkMode:a}=n.actions,s=n.reducer},7051:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>d,X1:()=>o});let n=(0,r(7740).createSlice)({name:"main",initialState:{userName:"John Doe",userEmail:"doe.doe.doe@example.com",userPoints:500,isFieldFocusRegistered:!1,purchasedItems:[]},reducers:{setUser:(e,t)=>{e.userName=t.payload.name,e.userEmail=t.payload.email},incrementPoints:(e,t)=>{e.userPoints+=t.payload},decrementPoints:(e,t)=>{e.userPoints-=t.payload},addPurchasedItem:(e,t)=>{e.purchasedItems.includes(t.payload)||e.purchasedItems.push(t.payload)}}}),{setUser:a,incrementPoints:s,decrementPoints:o,addPurchasedItem:i}=n.actions,d=n.reducer},845:()=>{},9811:(e,t,r)=>{"use strict";e.exports=r(3865).vendored.contexts.AmpContext},7740:e=>{"use strict";e.exports=require("@reduxjs/toolkit")},361:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},7912:e=>{"use strict";e.exports=require("next/head")},2015:e=>{"use strict";e.exports=require("react")},2326:e=>{"use strict";e.exports=require("react-dom")},2544:e=>{"use strict";e.exports=require("react-redux")},8732:e=>{"use strict";e.exports=require("react/jsx-runtime")},3873:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[883,273],()=>r(4477));module.exports=n})();