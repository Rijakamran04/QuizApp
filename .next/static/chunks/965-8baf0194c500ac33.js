(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[965],{6526:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let r=i(7677),o=i(544),n=i(4848),s=o._(i(6540)),l=r._(i(961)),a=r._(i(6085)),d=i(7282),u=i(2105),c=i(9641);i(7679);let f=i(7644),g=r._(i(5472)),p=i(1903),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/admin-one-react-tailwind/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,i,r,o,n,s){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function v(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}let b=(0,s.forwardRef)((e,t)=>{let{src:i,srcSet:r,sizes:o,height:l,width:a,decoding:d,className:u,style:c,fetchPriority:f,placeholder:g,loading:m,unoptimized:b,fill:w,onLoadRef:y,onLoadingCompleteRef:S,setBlurComplete:_,setShowAltText:j,sizesInput:x,onLoad:C,onError:z,...P}=e,E=(0,s.useCallback)(e=>{e&&(z&&(e.src=e.src),e.complete&&h(e,g,y,S,_,b,x))},[i,g,y,S,_,z,b,x]),O=(0,p.useMergedRef)(t,E);return(0,n.jsx)("img",{...P,...v(f),loading:m,width:a,height:l,decoding:d,"data-nimg":w?"fill":"1",className:u,style:c,sizes:o,srcSet:r,src:i,ref:O,onLoad:e=>{h(e.currentTarget,g,y,S,_,b,x)},onError:e=>{j(!0),"empty"!==g&&_(!0),z&&z(e)}})});function w(e){let{isAppRouter:t,imgAttributes:i}=e,r={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...v(i.fetchPriority)};return t&&l.default.preload?(l.default.preload(i.src,r),null):(0,n.jsx)(a.default,{children:(0,n.jsx)("link",{rel:"preload",href:i.srcSet?void 0:i.src,...r},"__nimg-"+i.src+i.srcSet+i.sizes)})}let y=(0,s.forwardRef)((e,t)=>{let i=(0,s.useContext)(f.RouterContext),r=(0,s.useContext)(c.ImageConfigContext),o=(0,s.useMemo)(()=>{let e=m||r||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[r]),{onLoad:l,onLoadingComplete:a}=e,p=(0,s.useRef)(l);(0,s.useEffect)(()=>{p.current=l},[l]);let h=(0,s.useRef)(a);(0,s.useEffect)(()=>{h.current=a},[a]);let[v,y]=(0,s.useState)(!1),[S,_]=(0,s.useState)(!1),{props:j,meta:x}=(0,d.getImgProps)(e,{defaultLoader:g.default,imgConf:o,blurComplete:v,showAltText:S});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{...j,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:p,onLoadingCompleteRef:h,setBlurComplete:y,setShowAltText:_,sizesInput:e.sizes,ref:t}),x.priority?(0,n.jsx)(w,{isAppRouter:!i,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7282:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),i(7679);let r=i(9197),o=i(2105);function n(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var i;let l,a,d,{src:u,sizes:c,unoptimized:f=!1,priority:g=!1,loading:p,className:m,quality:h,width:v,height:b,fill:w=!1,style:y,overrideSrc:S,onLoad:_,onLoadingComplete:j,placeholder:x="empty",blurDataURL:C,fetchPriority:z,decoding:P="async",layout:E,objectFit:O,objectPosition:R,lazyBoundary:M,lazyRoot:I,...k}=e,{imgConf:N,showAltText:A,blurComplete:D,defaultLoader:B}=t,F=N||o.imageConfigDefault;if("allSizes"in F)l=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t);l={...F,allSizes:e,deviceSizes:t}}if(void 0===B)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let G=k.loader||B;delete k.loader,delete k.srcSet;let L="__next_img_default"in G;if(L){if("custom"===l.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=G;G=t=>{let{config:i,...r}=t;return e(r)}}if(E){"fill"===E&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!c&&(c=t)}let W="",T=s(v),U=s(b);if((i=u)&&"object"==typeof i&&(n(i)||void 0!==i.src)){let e=n(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,d=e.blurHeight,C=C||e.blurDataURL,W=e.src,!w){if(T||U){if(T&&!U){let t=T/e.width;U=Math.round(e.height*t)}else if(!T&&U){let t=U/e.height;T=Math.round(e.width*t)}}else T=e.width,U=e.height}}let V=!g&&("lazy"===p||void 0===p);(!(u="string"==typeof u?u:W)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,V=!1),l.unoptimized&&(f=!0),L&&u.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0);let q=s(h),J=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:R}:{},A?{}:{color:"transparent"},y),Y=D||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:T,heightInt:U,blurWidth:a,blurHeight:d,blurDataURL:C||"",objectFit:J.objectFit})+'")':'url("'+x+'")',H=Y?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},$=function(e){let{config:t,src:i,unoptimized:r,width:o,quality:n,sizes:s,loader:l}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:a,kind:d}=function(e,t,i){let{deviceSizes:r,allSizes:o}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,s),u=a.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:a.map((e,r)=>l({config:t,src:i,quality:n,width:e})+" "+("w"===d?e:r+1)+d).join(", "),src:l({config:t,src:i,quality:n,width:a[u]})}}({config:l,src:u,unoptimized:f,width:T,quality:q,sizes:c,loader:G});return{props:{...k,loading:V?"lazy":p,fetchPriority:z,width:T,height:U,decoding:P,className:m,style:{...J,...H},sizes:$.sizes,srcSet:$.srcSet,src:S||$.src},meta:{unoptimized:f,priority:g,placeholder:x,fill:w}}}},9197:(e,t)=>{"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:o,blurDataURL:n,objectFit:s}=e,l=r?40*r:t,a=o?40*o:i,d=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},2364:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return a},getImageProps:function(){return l}});let r=i(7677),o=i(7282),n=i(6526),s=r._(i(5472));function l(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/admin-one-react-tailwind/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let a=n.Image},5472:(e,t)=>{"use strict";function i(e){let{config:t,src:i,width:r,quality:o}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},9965:(e,t,i)=>{e.exports=i(2364)}}]);