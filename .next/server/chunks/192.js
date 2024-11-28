exports.id=192,exports.ids=[192],exports.modules={4891:(e,r,t)=>{"use strict";t.d(r,{Fw:()=>d,Wj:()=>n,an:()=>i,cu:()=>o,mc:()=>l,sG:()=>c,xY:()=>s});let a="bg-gradient-to-tr",l=`${a} from-purple-400 via-pink-500 to-red-500`,i=`${a} from-slate-700 via-slate-900 to-slate-800`,s=`${a} from-pink-400 via-red-500 to-yellow-500`,o={white:"bg-white text-black",light:"bg-white text-black dark:bg-slate-900/70 dark:text-white",contrast:"bg-gray-800 text-white dark:bg-white dark:text-black",success:"bg-emerald-500 border-emerald-500 text-white",danger:"bg-red-500 border-red-500 text-white",warning:"bg-yellow-500 border-yellow-500 text-white",info:"bg-blue-500 border-blue-500 text-white"},n={white:"text-black dark:text-slate-100",light:"text-gray-700 dark:text-slate-400",contrast:"dark:text-white",success:"text-emerald-500",danger:"text-red-500",warning:"text-yellow-500",info:"text-blue-500"},d={white:[n.white,"border-gray-100"].join(" "),light:[n.light,"border-gray-100"].join(" "),contrast:[n.contrast,"border-gray-900 dark:border-slate-100"].join(" "),success:[n.success,"border-emerald-500"].join(" "),danger:[n.danger,"border-red-500"].join(" "),warning:[n.warning,"border-yellow-500"].join(" "),info:[n.info,"border-blue-500"].join(" ")},c=(e,r,t,a=!1)=>{if("void"===e)return"";let l={ring:{white:"ring-gray-200 dark:ring-gray-500",whiteDark:"ring-gray-200 dark:ring-gray-500",lightDark:"ring-gray-200 dark:ring-gray-500",contrast:"ring-gray-300 dark:ring-gray-400",success:"ring-emerald-300 dark:ring-emerald-700",danger:"ring-red-300 dark:ring-red-700",warning:"ring-yellow-300 dark:ring-yellow-700",info:"ring-blue-300 dark:ring-blue-700"},active:{white:"bg-gray-100",whiteDark:"bg-gray-100 dark:bg-slate-800",lightDark:"bg-gray-200 dark:bg-slate-700",contrast:"bg-gray-700 dark:bg-slate-100",success:"bg-emerald-700 dark:bg-emerald-600",danger:"bg-red-700 dark:bg-red-600",warning:"bg-yellow-700 dark:bg-yellow-600",info:"bg-blue-700 dark:bg-blue-600"},bg:{white:"bg-white text-black",whiteDark:"bg-white text-black dark:bg-slate-900 dark:text-white",lightDark:"bg-gray-100 text-black dark:bg-slate-800 dark:text-white",contrast:"bg-gray-800 text-white dark:bg-white dark:text-black",success:"bg-emerald-600 dark:bg-emerald-500 text-white",danger:"bg-red-600 dark:bg-red-500 text-white",warning:"bg-yellow-600 dark:bg-yellow-500 text-white",info:"bg-blue-600 dark:bg-blue-500 text-white"},bgHover:{white:"hover:bg-gray-100",whiteDark:"hover:bg-gray-100 hover:dark:bg-slate-800",lightDark:"hover:bg-gray-200 hover:dark:bg-slate-700",contrast:"hover:bg-gray-700 hover:dark:bg-slate-100",success:"hover:bg-emerald-700 hover:border-emerald-700 hover:dark:bg-emerald-600 hover:dark:border-emerald-600",danger:"hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600",warning:"hover:bg-yellow-700 hover:border-yellow-700 hover:dark:bg-yellow-600 hover:dark:border-yellow-600",info:"hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600"},borders:{white:"border-white",whiteDark:"border-white dark:border-slate-900",lightDark:"border-gray-100 dark:border-slate-800",contrast:"border-gray-800 dark:border-white",success:"border-emerald-600 dark:border-emerald-500",danger:"border-red-600 dark:border-red-500",warning:"border-yellow-600 dark:border-yellow-500",info:"border-blue-600 dark:border-blue-500"},text:{contrast:"dark:text-slate-100",success:"text-emerald-600 dark:text-emerald-500",danger:"text-red-600 dark:text-red-500",warning:"text-yellow-600 dark:text-yellow-500",info:"text-blue-600 dark:text-blue-500"},outlineHover:{contrast:"hover:bg-gray-800 hover:text-gray-100 hover:dark:bg-slate-100 hover:dark:text-black",success:"hover:bg-emerald-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-emerald-600",danger:"hover:bg-red-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-red-600",warning:"hover:bg-yellow-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-yellow-600",info:"hover:bg-blue-600 hover:text-white hover:dark:text-white hover:dark:border-blue-600"}},i=r&&0>["white","whiteDark","lightDark"].indexOf(e),s=[l.borders[e],l.ring[e]];return a?s.push(l.active[e]):s.push(i?l.text[e]:l.bg[e]),t&&s.push(i?l.outlineHover[e]:l.bgHover[e]),s.join(" ")}},1947:(e,r,t)=>{"use strict";t.d(r,{A:()=>l});var a=t(8732);function l({navBar:e=!1}){return(0,a.jsx)("hr",{className:`${e?"hidden lg:block lg:my-0.5 dark:border-slate-700":"my-6 -mx-6 dark:border-slate-800"} border-t border-gray-100`})}t(2015)},565:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});var a=t(8732),l=t(2015),i=t(9932);let s=({icons:e=[],...r})=>{let t=l.Children.count(r.children),s="";switch(t){case 2:s="grid grid-cols-1 gap-3 md:grid-cols-2";break;case 3:s="grid grid-cols-1 gap-3 md:grid-cols-3"}let o=["px-3 py-2 max-w-full border-gray-700 rounded w-full dark:placeholder-gray-400","focus:ring focus:ring-blue-600 focus:border-blue-600 focus:outline-none",r.hasTextareaHeight?"h-24":"h-12",r.isBorderless?"border-0":"border",r.isTransparent?"bg-transparent":"bg-white dark:bg-slate-800"].join(" ");return(0,a.jsxs)("div",{className:"mb-6 last:mb-0",children:[r.label&&(0,a.jsx)("label",{htmlFor:r.labelFor,className:`block font-bold mb-2 ${r.labelFor?"cursor-pointer":""}`,children:r.label}),(0,a.jsx)("div",{className:`${s}`,children:l.Children.map(r.children,(t,s)=>(0,a.jsxs)("div",{className:"relative",children:[(0,l.cloneElement)(t,{className:`${o} ${e[s]?"pl-10":""}`}),e[s]&&(0,a.jsx)(i.A,{path:e[s],w:"w-10",h:r.hasTextareaHeight?"h-full":"h-12",className:"absolute top-0 left-0 z-10 pointer-events-none text-gray-500 dark:text-slate-400"})]}))}),r.help&&(0,a.jsx)("div",{className:"text-xs text-gray-500 dark:text-slate-400 mt-1",children:r.help})]})}},9932:(e,r,t)=>{"use strict";t.d(r,{A:()=>l});var a=t(8732);function l({path:e,w:r="w-6",h:t="h-6",size:l=null,className:i="",children:s}){let o=l??16;return(0,a.jsxs)("span",{className:`inline-flex justify-center items-center ${r} ${t} ${i}`,children:[(0,a.jsx)("svg",{viewBox:"0 0 24 24",width:o,height:o,className:"inline-block",children:(0,a.jsx)("path",{fill:"currentColor",d:e})}),s]})}t(2015)},4681:(e,r,t)=>{"use strict";t.d(r,{A:()=>l});var a=t(8732);function l({zIndex:e="z-50",type:r="flex",children:t,className:l,...i}){return(0,a.jsxs)("div",{className:`${r} ${e} ${l} items-center flex-col justify-center overflow-hidden fixed inset-0`,children:[(0,a.jsx)("div",{className:"overlay absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700",onClick:e=>{e.preventDefault(),i.onClick&&i.onClick(e)}}),t]})}t(2015)},7811:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});var a=t(8732);t(2015);var l=t(7290),i=t(6877);function s({className:e="",children:r}){let t=(0,l.G)(e=>e.main.userEmail);return(0,a.jsx)(i.A,{username:t,className:e,children:r})}},6877:(e,r,t)=>{"use strict";t.d(r,{A:()=>l});var a=t(8732);function l({username:e,api:r="avataaars",className:t="",children:l}){let i=`https://api.dicebear.com/7.x/${r}/svg?seed=${e.replace(/[^a-z0-9]+/gi,"-")}`;return(0,a.jsxs)("div",{className:t,children:[(0,a.jsx)("img",{src:i,alt:e,className:"rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"}),l]})}t(2015)},1453:(e,r,t)=>{"use strict";t.d(r,{Fx:()=>a,mZ:()=>l,wS:()=>i});let a="xl:max-w-6xl xl:mx-auto",l="Free Tailwind 3 React Next Typescript dashboard template",i=e=>`${e} — ${l}`},9749:(e,r,t)=>{"use strict";t.d(r,{A:()=>C});var a=t(8732),l=t(2015),i=t(6310);let s=[{href:"/dashboard",icon:i.mdiMonitor,label:"Dashboard"},{href:"/quiz",icon:i.mdiBookOpen,label:"Play Game"},{href:"/leaderboard",label:"Leaderboard",icon:i.mdiChartBar},{href:"/rewards",label:"Rewards",icon:i.mdiTrophy},{href:"/profile",label:"Profile",icon:i.mdiAccountCircle},{label:" Account Settings",icon:i.mdiAccountCircle,href:"/account-settings"}],o=[{isCurrentUser:!0,menu:[{icon:i.mdiAccount,label:"My Profile",href:"/profile"},{icon:i.mdiCogOutline,label:"Settings"},{icon:i.mdiEmail,label:"Messages"},{isDivider:!0},{icon:i.mdiLogout,label:"Log Out",isLogout:!0}]},{icon:i.mdiThemeLightDark,label:"Light/Dark",isDesktopNoLabel:!0,isToggleLightDark:!0},{icon:i.mdiLogout,label:"Log out",isDesktopNoLabel:!0,isLogout:!0}];var n=t(9932),d=t(1453);function c({display:e="flex",useMargin:r=!1,onClick:t,children:l}){let i=`${e} navbar-item-label ${r?"my-2 mx-3":"py-2 px-3"}`;return(0,a.jsx)("div",{className:`items-center cursor-pointer dark:text-white dark:hover:text-slate-400 ${i}`,onClick:t,children:l})}var g=t(1106),h=t.n(g),b=t(1947),x=t(7811),m=t(7290),u=t(6881);function w({item:e}){let r=(0,m.j)(),t=(0,m.G)(e=>e.main.userName),[s,o]=(0,l.useState)(!1),d=["block lg:flex items-center relative cursor-pointer",s?"navbar-item-label-active dark:text-slate-400":"navbar-item-label dark:text-white dark:hover:text-slate-400",e.menu?"lg:py-2 lg:px-3":"py-2 px-3",e.isDesktopNoLabel?"lg:w-16 lg:justify-center":""].join(" "),c=e.isCurrentUser?t:e.label,g=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:`flex items-center ${e.menu?"bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0":""}`,onClick:()=>{e.menu&&o(!s),e.isToggleLightDark&&r((0,u.S8)(null))},children:[e.isCurrentUser&&(0,a.jsx)(x.A,{className:"w-6 h-6 mr-3 inline-flex"}),e.icon&&(0,a.jsx)(n.A,{path:e.icon,className:"transition-colors"}),(0,a.jsx)("span",{className:`px-2 transition-colors ${e.isDesktopNoLabel&&e.icon?"lg:hidden":""}`,children:c}),e.menu&&(0,a.jsx)(n.A,{path:s?i.mdiChevronUp:i.mdiChevronDown,className:"hidden lg:inline-flex transition-colors"})]}),e.menu&&(0,a.jsx)("div",{className:`${s?"":"lg:hidden"} text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700`,children:(0,a.jsx)(k,{menu:e.menu})})]});return e.isDivider?(0,a.jsx)(b.A,{navBar:!0}):e.href?(0,a.jsx)(h(),{href:e.href,target:e.target,rel:"noopener noreferrer",className:d,children:g}):(0,a.jsx)("div",{className:d,children:g})}function k({menu:e}){return(0,a.jsx)(a.Fragment,{children:e.map((e,r)=>(0,a.jsx)(w,{item:e},r))})}function p({menu:e,className:r="",children:t}){let[s,o]=(0,l.useState)(!1);return(0,a.jsx)("nav",{className:`${r} top-0 inset-x-0 fixed bg-gray-50 h-14 z-30 transition-position w-screen lg:w-auto dark:bg-slate-800`,children:(0,a.jsxs)("div",{className:`flex lg:items-stretch ${d.Fx}`,children:[(0,a.jsx)("div",{className:"flex flex-1 items-stretch h-14",children:t}),(0,a.jsx)("div",{className:"flex-none items-stretch flex h-14 lg:hidden",children:(0,a.jsx)(c,{onClick:()=>{o(!s)},children:(0,a.jsx)(n.A,{path:s?i.mdiClose:i.mdiDotsVertical,size:"24"})})}),(0,a.jsx)("div",{className:`${s?"block":"hidden"} max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-gray-50 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800`,children:(0,a.jsx)(k,{menu:e})})]})})}var f=t(4891);function v({menu:e,isDropdownList:r=!1,className:t=""}){return(0,a.jsx)("ul",{className:t,children:e.map((e,t)=>(0,a.jsx)(y,{item:e,isDropdownList:r},t))})}var j=t(6715);let y=({item:e,isDropdownList:r=!1})=>{let[t,s]=(0,l.useState)(!1),[o,d]=(0,l.useState)(!1),c=!e.color&&t?"aside-menu-item-active font-bold":"",{asPath:g,isReady:b}=(0,j.useRouter)();(0,l.useEffect)(()=>{e.href&&b&&s(new URL(e.href,location.href).pathname===new URL(g,location.href).pathname)},[e.href,b,g]);let x=(0,a.jsxs)(a.Fragment,{children:[e.icon&&(0,a.jsx)(n.A,{path:e.icon,className:`flex-none ${c}`,w:"w-16",size:"18"}),(0,a.jsx)("span",{className:`grow text-ellipsis line-clamp-1 ${e.menu?"":"pr-12"} ${c}`,children:e.label}),e.menu&&(0,a.jsx)(n.A,{path:o?i.mdiMinus:i.mdiPlus,className:`flex-none ${c}`,w:"w-12"})]}),m=["flex cursor-pointer",r?"py-3 px-6 text-sm":"py-3",e.color?(0,f.sG)(e.color,!1,!0):"aside-menu-item dark:text-slate-300 dark:hover:text-white"].join(" ");return(0,a.jsxs)("li",{children:[e.href&&(0,a.jsx)(h(),{href:e.href,target:e.target,className:m,children:x}),!e.href&&(0,a.jsx)("div",{className:m,onClick:()=>d(!o),children:x}),e.menu&&(0,a.jsx)(v,{menu:e.menu,className:`aside-menu-dropdown ${o?"block dark:bg-slate-800/50":"hidden"}`,isDropdownList:!0})]})};function N({menu:e,className:r="",...t}){let l=(0,m.G)(e=>e.darkMode.isEnabled),s={label:"Logout",icon:i.mdiLogout,color:"info",isLogout:!0};return(0,a.jsx)("aside",{className:`${r} zzz lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden`,children:(0,a.jsxs)("div",{className:"aside lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900",children:[(0,a.jsxs)("div",{className:"aside-brand flex flex-row h-14 items-center justify-between dark:bg-slate-900",children:[(0,a.jsx)("div",{className:"text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0",children:(0,a.jsx)("b",{className:"font-black",children:"One"})}),(0,a.jsx)("button",{className:"hidden lg:inline-block xl:hidden p-3",onClick:e=>{e.preventDefault(),t.onAsideLgCloseClick()},children:(0,a.jsx)(n.A,{path:i.mdiClose})})]}),(0,a.jsx)("div",{className:`flex-1 overflow-y-auto overflow-x-hidden ${l?"aside-scrollbars-[slate]":"aside-scrollbars"}`,children:(0,a.jsx)(v,{menu:e})}),(0,a.jsx)("ul",{children:(0,a.jsx)(y,{item:s})})]})})}var A=t(4681);function $({isAsideMobileExpanded:e=!1,isAsideLgActive:r=!1,...t}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N,{menu:t.menu,className:`${e?"left-0":"-left-60 lg:left-0"} ${r?"":"lg:hidden xl:flex"}`,onAsideLgCloseClick:t.onAsideLgClose}),r&&(0,a.jsx)(A.A,{zIndex:"z-30",onClick:t.onAsideLgClose})]})}var L=t(565),D=t(3294);function C({children:e}){let[r,t]=(0,l.useState)(!1),[d,g]=(0,l.useState)(!1);(0,j.useRouter)();let h="xl:pl-60";return(0,a.jsx)("div",{className:"flex flex-col min-h-screen overflow-hidden lg:overflow-visible",children:(0,a.jsxs)("div",{className:`${h} pt-14 flex-grow w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100`,children:[(0,a.jsxs)(p,{menu:o,className:`${h} ${r?"ml-60 lg:ml-0":""}`,children:[(0,a.jsx)(c,{display:"flex lg:hidden",onClick:()=>t(!r),children:(0,a.jsx)(n.A,{path:r?i.mdiBackburger:i.mdiForwardburger,size:"24"})}),(0,a.jsx)(c,{display:"hidden lg:flex xl:hidden",onClick:()=>g(!0),children:(0,a.jsx)(n.A,{path:i.mdiMenu,size:"24"})}),(0,a.jsx)(c,{useMargin:!0,children:(0,a.jsx)(D.Formik,{initialValues:{search:""},onSubmit:e=>alert(JSON.stringify(e,null,2)),children:(0,a.jsx)(D.Form,{children:(0,a.jsx)(L.A,{isBorderless:!0,isTransparent:!0,children:(0,a.jsx)(D.Field,{name:"search",placeholder:"Search"})})})})})]}),(0,a.jsx)($,{isAsideMobileExpanded:r,isAsideLgActive:d,menu:s,onAsideLgClose:()=>g(!1)}),(0,a.jsx)("main",{className:"flex-grow",children:e})]})})}},7345:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>m});var a=t(8732);t(2015);var l=t(8133),i=t.n(l),s=t(7912),o=t.n(s),n=t(7740),d=t(6881);let c=(0,n.createSlice)({name:"main",initialState:{userName:"John Doe",userEmail:"doe.doe.doe@example.com",isFieldFocusRegistered:!1},reducers:{setUser:(e,r)=>{e.userName=r.payload.name,e.userEmail=r.payload.email}}}),{setUser:g}=c.actions,h=c.reducer,b=(0,n.configureStore)({reducer:{darkMode:d.Ay,main:h}});var x=t(2544);t(845);let m=function({Component:e,pageProps:r}){let t=e.getLayout||(e=>e),l="Admin One React Tailwind free",s="Admin One - free React Next Tailwind dashboard with TypeScript and dark mode",n="https://static.justboil.me/templates/one/repo-tailwind-react.png",d="1920";return(0,a.jsx)(x.Provider,{store:b,children:t((0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("meta",{name:"description",content:s}),(0,a.jsx)("meta",{property:"og:url",content:"https://justboil.github.io/admin-one-react-tailwind/"}),(0,a.jsx)("meta",{property:"og:site_name",content:"JustBoil.me"}),(0,a.jsx)("meta",{property:"og:title",content:l}),(0,a.jsx)("meta",{property:"og:description",content:s}),(0,a.jsx)("meta",{property:"og:image",content:n}),(0,a.jsx)("meta",{property:"og:image:type",content:"image/png"}),(0,a.jsx)("meta",{property:"og:image:width",content:d}),(0,a.jsx)("meta",{property:"og:image:height",content:"960"}),(0,a.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{property:"twitter:title",content:l}),(0,a.jsx)("meta",{property:"twitter:description",content:s}),(0,a.jsx)("meta",{property:"twitter:image:src",content:n}),(0,a.jsx)("meta",{property:"twitter:image:width",content:d}),(0,a.jsx)("meta",{property:"twitter:image:height",content:"960"}),(0,a.jsx)("link",{rel:"icon",href:" "})]}),(0,a.jsx)(i(),{src:"https://www.googletagmanager.com/gtag/js?id=UA-130795909-1",strategy:"afterInteractive"}),(0,a.jsx)(i(),{id:"google-analytics",strategy:"afterInteractive",children:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-130795909-1');
            `}),(0,a.jsx)(e,{...r})]}))})}},3212:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var a=t(8732),l=t(883);function i(){return(0,a.jsxs)(l.Html,{lang:"en",className:"style-basic",children:[(0,a.jsx)(l.Head,{}),(0,a.jsxs)("body",{children:[(0,a.jsx)(l.Main,{}),(0,a.jsx)(l.NextScript,{})]})]})}},6881:(e,r,t)=>{"use strict";t.d(r,{Ay:()=>i,S8:()=>l});let a=(0,t(7740).createSlice)({name:"darkMode",initialState:{isEnabled:!1},reducers:{setDarkMode:(e,r)=>{e.isEnabled=null!==r.payload?r.payload:!e.isEnabled,"undefined"!=typeof document&&(document.body.classList[e.isEnabled?"add":"remove"]("dark-scrollbars"),document.documentElement.classList[e.isEnabled?"add":"remove"]("dark","dark-scrollbars-compat"))}}}),{setDarkMode:l}=a.actions,i=a.reducer},7290:(e,r,t)=>{"use strict";t.d(r,{G:()=>i,j:()=>l});var a=t(2544);let l=a.useDispatch,i=a.useSelector},845:()=>{}};