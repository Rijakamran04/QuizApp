(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{9610:(t,e,r)=>{"use strict";function n(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map(function(t){return"'"+t+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(t){return!!t&&!!t[V]}function i(t){var e;return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var r=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===z}(t)||Array.isArray(t)||!!t[U]||!!(null===(e=t.constructor)||void 0===e?void 0:e[U])||s(t)||p(t))}function u(t,e,r){void 0===r&&(r=!1),0===a(t)?(r?Object.keys:W)(t).forEach(function(n){r&&"symbol"==typeof n||e(n,t[n],t)}):t.forEach(function(r,n){return e(n,r,t)})}function a(t){var e=t[V];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:s(t)?2:p(t)?3:0}function c(t,e){return 2===a(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function f(t,e,r){var n=a(t);2===n?t.set(e,r):3===n?t.add(r):t[e]=r}function l(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function s(t){return $&&t instanceof Map}function p(t){return F&&t instanceof Set}function d(t){return t.o||t.t}function y(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=K(t);delete e[V];for(var r=W(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function v(t,e){return void 0===e&&(e=!1),h(t)||o(t)||!i(t)||(a(t)>1&&(t.set=t.add=t.clear=t.delete=b),Object.freeze(t),e&&u(t,function(t,e){return v(e,!0)},!0)),t}function b(){n(2)}function h(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function m(t){var e=X[t];return e||n(18,t),e}function g(t,e){e&&(m("Patches"),t.u=[],t.s=[],t.v=e)}function w(t){S(t),t.p.forEach(j),t.p=null}function S(t){t===T&&(T=t.l)}function O(t){return T={p:[],l:T,h:t,m:!0,_:0}}function j(t){var e=t[V];0===e.i||1===e.i?e.j():e.g=!0}function P(t,e){e._=e.p.length;var r=e.p[0],o=void 0!==t&&t!==r;return e.h.O||m("ES5").S(e,t,o),o?(r[V].P&&(w(e),n(4)),i(t)&&(t=E(e,t),e.l||_(e,t)),e.u&&m("Patches").M(r[V].t,t,e.u,e.s)):t=E(e,r,[]),w(e),e.u&&e.v(e.u,e.s),t!==q?t:void 0}function E(t,e,r){if(h(e))return e;var n=e[V];if(!n)return u(e,function(o,i){return x(t,n,e,o,i,r)},!0),e;if(n.A!==t)return e;if(!n.P)return _(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=y(n.k):n.o,i=o,a=!1;3===n.i&&(i=new Set(o),o.clear(),a=!0),u(i,function(e,i){return x(t,n,o,e,i,r,a)}),_(t,o,!1),r&&t.u&&m("Patches").N(n,r,t.u,t.s)}return n.o}function x(t,e,r,n,u,a,l){if(o(u)){var s=E(t,u,a&&e&&3!==e.i&&!c(e.R,n)?a.concat(n):void 0);if(f(r,n,s),!o(s))return;t.m=!1}else l&&r.add(u);if(i(u)&&!h(u)){if(!t.h.D&&t._<1)return;E(t,u),e&&e.A.l||_(t,u)}}function _(t,e,r){void 0===r&&(r=!1),!t.l&&t.h.D&&t.m&&v(e,r)}function A(t,e){var r=t[V];return(r?d(r):t)[e]}function N(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function k(t){t.P||(t.P=!0,t.l&&k(t.l))}function C(t){t.o||(t.o=y(t.t))}function R(t,e,r){var n,o,i,u,a,c,f,l=s(e)?m("MapSet").F(e,r):p(e)?m("MapSet").T(e,r):t.O?(i=o={i:(n=Array.isArray(e))?1:0,A:r?r.A:T,P:!1,I:!1,R:{},l:r,t:e,k:null,o:null,j:null,C:!1},u=B,n&&(i=[o],u=J),c=(a=Proxy.revocable(i,u)).revoke,f=a.proxy,o.k=f,o.j=c,f):m("ES5").J(e,r);return(r?r.A:T).p.push(l),l}function D(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return y(t)}r.d(e,{U1:()=>t_,Z0:()=>tN});var I,T,M="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),$="undefined"!=typeof Map,F="undefined"!=typeof Set,L="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,q=M?Symbol.for("immer-nothing"):((I={})["immer-nothing"]=!0,I),U=M?Symbol.for("immer-draftable"):"__$immer_draftable",V=M?Symbol.for("immer-state"):"__$immer_state",z=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),W="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,K=Object.getOwnPropertyDescriptors||function(t){var e={};return W(t).forEach(function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)}),e},X={},B={get:function(t,e){if(e===V)return t;var r,n,o=d(t);if(!c(o,e))return(n=N(o,e))?"value"in n?n.value:null===(r=n.get)||void 0===r?void 0:r.call(t.k):void 0;var u=o[e];return t.I||!i(u)?u:u===A(t.t,e)?(C(t),t.o[e]=R(t.A.h,u,t)):u},has:function(t,e){return e in d(t)},ownKeys:function(t){return Reflect.ownKeys(d(t))},set:function(t,e,r){var n=N(d(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=A(d(t),e),i=null==o?void 0:o[V];if(i&&i.t===r)return t.o[e]=r,t.R[e]=!1,!0;if(l(r,o)&&(void 0!==r||c(t.t,e)))return!0;C(t),k(t)}return t.o[e]===r&&(void 0!==r||e in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[e])||(t.o[e]=r,t.R[e]=!0),!0},deleteProperty:function(t,e){return void 0!==A(t.t,e)||e in t.t?(t.R[e]=!1,C(t),k(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=d(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){n(12)}},J={};u(B,function(t,e){J[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),J.deleteProperty=function(t,e){return J.set.call(this,t,e,void 0)},J.set=function(t,e,r){return B.set.call(this,t[0],e,r,t[0])};var G=new(function(){function t(t){var e=this;this.O=L,this.D=!0,this.produce=function(t,r,o){if("function"==typeof t&&"function"!=typeof r){var u,a=r;return r=t,function(t){var n=this;void 0===t&&(t=a);for(var o=arguments.length,i=Array(o>1?o-1:0),u=1;u<o;u++)i[u-1]=arguments[u];return e.produce(t,function(t){var e;return(e=r).call.apply(e,[n,t].concat(i))})}}if("function"!=typeof r&&n(6),void 0!==o&&"function"!=typeof o&&n(7),i(t)){var c=O(e),f=R(e,t,void 0),l=!0;try{u=r(f),l=!1}finally{l?w(c):S(c)}return"undefined"!=typeof Promise&&u instanceof Promise?u.then(function(t){return g(c,o),P(t,c)},function(t){throw w(c),t}):(g(c,o),P(u,c))}if(!t||"object"!=typeof t){if(void 0===(u=r(t))&&(u=t),u===q&&(u=void 0),e.D&&v(u,!0),o){var s=[],p=[];m("Patches").M(t,u,s,p),o(s,p)}return u}n(21,t)},this.produceWithPatches=function(t,r){if("function"==typeof t)return function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return e.produceWithPatches(r,function(e){return t.apply(void 0,[e].concat(o))})};var n,o,i=e.produce(t,r,function(t,e){n=t,o=e});return"undefined"!=typeof Promise&&i instanceof Promise?i.then(function(t){return[t,n,o]}):[i,n,o]},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){i(t)||n(8),o(t)&&(o(e=t)||n(22,e),t=function t(e){if(!i(e))return e;var r,n=e[V],o=a(e);if(n){if(!n.P&&(n.i<4||!m("ES5").K(n)))return n.t;n.I=!0,r=D(e,o),n.I=!1}else r=D(e,o);return u(r,function(e,o){var i;n&&(2===a(i=n.t)?i.get(e):i[e])===o||f(r,e,t(o))}),3===o?new Set(r):r}(e));var e,r=O(this),c=R(this,t,void 0);return c[V].C=!0,S(r),c},e.finishDraft=function(t,e){var r=(t&&t[V]).A;return g(r,e),P(void 0,r)},e.setAutoFreeze=function(t){this.D=t},e.setUseProxies=function(t){t&&!L&&n(20),this.O=t},e.applyPatches=function(t,e){for(r=e.length-1;r>=0;r--){var r,n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}r>-1&&(e=e.slice(r+1));var i=m("Patches").$;return o(t)?i(t,e):this.produce(t,function(t){return i(t,e)})},t}()),Z=G.produce;function H(t){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Q(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function Y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Q(Object(r),!0).forEach(function(e){!function(t,e,r){var n;n=function(t,e){if("object"!==H(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==H(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"),(e="symbol"===H(n)?n:String(n))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function tt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}G.produceWithPatches.bind(G),G.setAutoFreeze.bind(G),G.setUseProxies.bind(G),G.applyPatches.bind(G),G.createDraft.bind(G),G.finishDraft.bind(G);var te="function"==typeof Symbol&&Symbol.observable||"@@observable",tr=function(){return Math.random().toString(36).substring(7).split("").join(".")},tn={INIT:"@@redux/INIT"+tr(),REPLACE:"@@redux/REPLACE"+tr(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+tr()}};function to(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce(function(t,e){return function(){return t(e.apply(void 0,arguments))}})}function ti(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return function(){var r=t.apply(void 0,arguments),n=function(){throw Error(tt(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=e.map(function(t){return t(o)});return n=to.apply(void 0,i)(r.dispatch),Y(Y({},r),{},{dispatch:n})}}}function tu(t){return function(e){var r=e.dispatch,n=e.getState;return function(e){return function(o){return"function"==typeof o?o(r,n,t):e(o)}}}}var ta=tu();ta.withExtraArgument=tu,r(7836);var tc=function(){var t=function(e,r){return(t=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),tf=function(t,e){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},tl=function(t,e){for(var r=0,n=e.length,o=t.length;r<n;r++,o++)t[o]=e[r];return t},ts=Object.defineProperty,tp=Object.defineProperties,td=Object.getOwnPropertyDescriptors,ty=Object.getOwnPropertySymbols,tv=Object.prototype.hasOwnProperty,tb=Object.prototype.propertyIsEnumerable,th=function(t,e,r){return e in t?ts(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},tm=function(t,e){for(var r in e||(e={}))tv.call(e,r)&&th(t,r,e[r]);if(ty)for(var n=0,o=ty(e);n<o.length;n++){var r=o[n];tb.call(e,r)&&th(t,r,e[r])}return t},tg=function(t,e){return tp(t,td(e))},tw="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!=arguments.length)return"object"==typeof arguments[0]?to:to.apply(null,arguments)};function tS(t){if("object"!=typeof t||null===t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;for(var r=e;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return e===r}function tO(t,e){function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(e){var o=e.apply(void 0,r);if(!o)throw Error("prepareAction did not return an object");return tm(tm({type:t,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:t,payload:r[0]}}return r.toString=function(){return""+t},r.type=t,r.match=function(e){return e.type===t},r}function tj(t){return["type","payload","error","meta"].indexOf(t)>-1}"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var tP=function(t){function e(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=t.apply(this,r)||this;return Object.setPrototypeOf(o,e.prototype),o}return tc(e,t),Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return t.prototype.concat.apply(this,e)},e.prototype.prepend=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return 1===t.length&&Array.isArray(t[0])?new(e.bind.apply(e,tl([void 0],t[0].concat(this)))):new(e.bind.apply(e,tl([void 0],t.concat(this))))},e}(Array),tE=function(t){function e(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=t.apply(this,r)||this;return Object.setPrototypeOf(o,e.prototype),o}return tc(e,t),Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return t.prototype.concat.apply(this,e)},e.prototype.prepend=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return 1===t.length&&Array.isArray(t[0])?new(e.bind.apply(e,tl([void 0],t[0].concat(this)))):new(e.bind.apply(e,tl([void 0],t.concat(this))))},e}(Array);function tx(t){return i(t)?Z(t,function(){}):t}function t_(t){var e,r=function(t){var e,r,n,o;return void 0===(e=t)&&(e={}),n=void 0===(r=e.thunk)||r,e.immutableCheck,e.serializableCheck,e.actionCreatorCheck,o=new tP,n&&("boolean"==typeof n?o.push(ta):o.push(ta.withExtraArgument(n.extraArgument))),o},n=t||{},o=n.reducer,i=void 0===o?void 0:o,u=n.middleware,a=void 0===u?r():u,c=n.devTools,f=void 0===c||c,l=n.preloadedState,s=n.enhancers,p=void 0===s?void 0:s;if("function"==typeof i)e=i;else if(tS(i))e=function(t){for(var e,r=Object.keys(t),n={},o=0;o<r.length;o++){var i=r[o];"function"==typeof t[i]&&(n[i]=t[i])}var u=Object.keys(n);try{!function(t){Object.keys(t).forEach(function(e){var r=t[e];if(void 0===r(void 0,{type:tn.INIT}))throw Error(tt(12));if(void 0===r(void 0,{type:tn.PROBE_UNKNOWN_ACTION()}))throw Error(tt(13))})}(n)}catch(t){e=t}return function(t,r){if(void 0===t&&(t={}),e)throw e;for(var o=!1,i={},a=0;a<u.length;a++){var c=u[a],f=n[c],l=t[c],s=f(l,r);if(void 0===s)throw r&&r.type,Error(tt(14));i[c]=s,o=o||s!==l}return(o=o||u.length!==Object.keys(t).length)?i:t}}(i);else throw Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var d=a;"function"==typeof d&&(d=d(r));var y=ti.apply(void 0,d),v=to;f&&(v=tw(tm({trace:!1},"object"==typeof f&&f)));var b=new tE(y),h=b;return Array.isArray(p)?h=tl([y],p):"function"==typeof p&&(h=p(b)),function t(e,r,n){if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw Error(tt(0));if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw Error(tt(1));return n(t)(e,r)}if("function"!=typeof e)throw Error(tt(2));var o,i=e,u=r,a=[],c=a,f=!1;function l(){c===a&&(c=a.slice())}function s(){if(f)throw Error(tt(3));return u}function p(t){if("function"!=typeof t)throw Error(tt(4));if(f)throw Error(tt(5));var e=!0;return l(),c.push(t),function(){if(e){if(f)throw Error(tt(6));e=!1,l();var r=c.indexOf(t);c.splice(r,1),a=null}}}function d(t){if(!function(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}(t))throw Error(tt(7));if(void 0===t.type)throw Error(tt(8));if(f)throw Error(tt(9));try{f=!0,u=i(u,t)}finally{f=!1}for(var e=a=c,r=0;r<e.length;r++)(0,e[r])();return t}return d({type:tn.INIT}),(o={dispatch:d,subscribe:p,getState:s,replaceReducer:function(t){if("function"!=typeof t)throw Error(tt(10));i=t,d({type:tn.REPLACE})}})[te]=function(){var t;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw Error(tt(11));function e(){t.next&&t.next(s())}return e(),{unsubscribe:p(e)}}})[te]=function(){return this},t},o}(e,void 0===l?void 0:l,v.apply(void 0,h))}function tA(t){var e,r={},n=[],o={addCase:function(t,e){var n="string"==typeof t?t:t.type;if(!n)throw Error("`builder.addCase` cannot be called with an empty action type");if(n in r)throw Error("`builder.addCase` cannot be called with two reducers for the same action type");return r[n]=e,o},addMatcher:function(t,e){return n.push({matcher:t,reducer:e}),o},addDefaultCase:function(t){return e=t,o}};return t(o),[r,n,e]}function tN(t){var e,r=t.name;if(!r)throw Error("`name` is a required option for createSlice");var n="function"==typeof t.initialState?t.initialState:tx(t.initialState),u=t.reducers||{},a=Object.keys(u),c={},f={},l={};function s(){var e="function"==typeof t.extraReducers?tA(t.extraReducers):[t.extraReducers],r=e[0],u=e[1],a=void 0===u?[]:u,c=e[2],l=void 0===c?void 0:c,s=tm(tm({},void 0===r?{}:r),f);return function(t,e,r,n){void 0===r&&(r=[]);var u,a="function"==typeof e?tA(e):[e,r,void 0],c=a[0],f=a[1],l=a[2];if("function"==typeof t)u=function(){return tx(t())};else{var s=tx(t);u=function(){return s}}function p(t,e){void 0===t&&(t=u());var r=tl([c[e.type]],f.filter(function(t){return(0,t.matcher)(e)}).map(function(t){return t.reducer}));return 0===r.filter(function(t){return!!t}).length&&(r=[l]),r.reduce(function(t,r){if(r){if(o(t)){var n=r(t,e);return void 0===n?t:n}if(i(t))return Z(t,function(t){return r(t,e)});var n=r(t,e);if(void 0===n){if(null===t)return t;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}return t},t)}return p.getInitialState=u,p}(n,function(t){for(var e in s)t.addCase(e,s[e]);for(var r=0;r<a.length;r++){var n=a[r];t.addMatcher(n.matcher,n.reducer)}l&&t.addDefaultCase(l)})}return a.forEach(function(t){var e,n,o=u[t],i=r+"/"+t;"reducer"in o?(e=o.reducer,n=o.prepare):e=o,c[t]=e,f[i]=e,l[t]=n?tO(i,n):tO(i)}),{name:r,reducer:function(t,r){return e||(e=s()),e(t,r)},actions:l,caseReducers:c,getInitialState:function(){return e||(e=s()),e.getInitialState()}}}var tk=function(t){void 0===t&&(t=21);for(var e="",r=t;r--;)e+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return e},tC=["name","message","stack","code"],tR=function(t,e){this.payload=t,this.meta=e},tD=function(t,e){this.payload=t,this.meta=e},tI=function(t){if("object"==typeof t&&null!==t){for(var e={},r=0;r<tC.length;r++){var n=tC[r];"string"==typeof t[n]&&(e[n]=t[n])}return e}return{message:String(t)}};function tT(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}!function(){function t(t,e,r){var n=tO(t+"/fulfilled",function(t,e,r,n){return{payload:t,meta:tg(tm({},n||{}),{arg:r,requestId:e,requestStatus:"fulfilled"})}}),o=tO(t+"/pending",function(t,e,r){return{payload:void 0,meta:tg(tm({},r||{}),{arg:e,requestId:t,requestStatus:"pending"})}}),i=tO(t+"/rejected",function(t,e,n,o,i){return{payload:o,error:(r&&r.serializeError||tI)(t||"Rejected"),meta:tg(tm({},i||{}),{arg:n,requestId:e,rejectedWithValue:!!o,requestStatus:"rejected",aborted:(null==t?void 0:t.name)==="AbortError",condition:(null==t?void 0:t.name)==="ConditionError"})}}),u="undefined"!=typeof AbortController?AbortController:function(){function t(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return t.prototype.abort=function(){},t}();return Object.assign(function(t){return function(a,c,f){var l,s=(null==r?void 0:r.idGenerator)?r.idGenerator(t):tk(),p=new u;function d(t){l=t,p.abort()}var y=function(){var u,y;return u=this,y=function(){var u,y,v,b,h,m;return tf(this,function(g){switch(g.label){case 0:var w;if(g.trys.push([0,4,,5]),!(null!==(w=b=null==(u=null==r?void 0:r.condition)?void 0:u.call(r,t,{getState:c,extra:f}))&&"object"==typeof w&&"function"==typeof w.then))return[3,2];return[4,b];case 1:b=g.sent(),g.label=2;case 2:if(!1===b||p.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return h=new Promise(function(t,e){return p.signal.addEventListener("abort",function(){return e({name:"AbortError",message:l||"Aborted"})})}),a(o(s,t,null==(y=null==r?void 0:r.getPendingMeta)?void 0:y.call(r,{requestId:s,arg:t},{getState:c,extra:f}))),[4,Promise.race([h,Promise.resolve(e(t,{dispatch:a,getState:c,extra:f,requestId:s,signal:p.signal,abort:d,rejectWithValue:function(t,e){return new tR(t,e)},fulfillWithValue:function(t,e){return new tD(t,e)}})).then(function(e){if(e instanceof tR)throw e;return e instanceof tD?n(e.payload,s,t,e.meta):n(e,s,t)})])];case 3:return v=g.sent(),[3,5];case 4:return v=(m=g.sent())instanceof tR?i(null,s,t,m.payload,m.meta):i(m,s,t),[3,5];case 5:return r&&!r.dispatchConditionRejection&&i.match(v)&&v.meta.condition||a(v),[2,v]}})},new Promise(function(t,e){var r=function(t){try{o(y.next(t))}catch(t){e(t)}},n=function(t){try{o(y.throw(t))}catch(t){e(t)}},o=function(e){return e.done?t(e.value):Promise.resolve(e.value).then(r,n)};o((y=y.apply(u,null)).next())})}();return Object.assign(y,{abort:d,requestId:s,arg:t,unwrap:function(){return y.then(tT)}})}},{pending:o,rejected:i,fulfilled:n,typePrefix:t})}t.withTypes=function(){return t}}();var tM=function(t,e){return t&&"function"==typeof t.match?t.match(e):t(e)},t$=function(t,e){if("function"!=typeof t)throw TypeError(e+" is not a function")},tF="cancelled",tL=function(t){this.code=t,this.name="TaskAbortError",this.message="task "+tF+" (reason: "+t+")"};Object.assign;var tq="listenerMiddleware";tO(tq+"/add"),tO(tq+"/removeAll"),tO(tq+"/remove"),"function"==typeof queueMicrotask&&queueMicrotask.bind("undefined"!=typeof window?window:void 0!==r.g?r.g:globalThis),"undefined"!=typeof window&&window.requestAnimationFrame&&window.requestAnimationFrame,function(){function t(t,e){var r=a[t];return r?r.enumerable=e:a[t]=r={configurable:!0,enumerable:e,get:function(){var e=this[V];return B.get(e,t)},set:function(e){var r=this[V];B.set(r,t,e)}},r}function e(t){for(var e=t.length-1;e>=0;e--){var o=t[e][V];if(!o.P)switch(o.i){case 5:n(o)&&k(o);break;case 4:r(o)&&k(o)}}}function r(t){for(var e=t.t,r=t.k,n=W(r),o=n.length-1;o>=0;o--){var i=n[o];if(i!==V){var u=e[i];if(void 0===u&&!c(e,i))return!0;var a=r[i],f=a&&a[V];if(f?f.t!==u:!l(a,u))return!0}}var s=!!e[V];return n.length!==W(e).length+(s?0:1)}function n(t){var e=t.k;if(e.length!==t.t.length)return!0;var r=Object.getOwnPropertyDescriptor(e,e.length-1);if(r&&!r.get)return!0;for(var n=0;n<e.length;n++)if(!e.hasOwnProperty(n))return!0;return!1}var i,a={};i={J:function(e,r){var n=Array.isArray(e),o=function(e,r){if(e){for(var n=Array(r.length),o=0;o<r.length;o++)Object.defineProperty(n,""+o,t(o,!0));return n}var i=K(r);delete i[V];for(var u=W(i),a=0;a<u.length;a++){var c=u[a];i[c]=t(c,e||!!i[c].enumerable)}return Object.create(Object.getPrototypeOf(r),i)}(n,e),i={i:n?5:4,A:r?r.A:T,P:!1,I:!1,R:{},l:r,t:e,k:o,o:null,g:!1,C:!1};return Object.defineProperty(o,V,{value:i,writable:!0}),o},S:function(t,r,i){i?o(r)&&r[V].A===t&&e(t.p):(t.u&&function t(e){if(e&&"object"==typeof e){var r=e[V];if(r){var o=r.t,i=r.k,a=r.R,f=r.i;if(4===f)u(i,function(e){e!==V&&(void 0!==o[e]||c(o,e)?a[e]||t(i[e]):(a[e]=!0,k(r)))}),u(o,function(t){void 0!==i[t]||c(i,t)||(a[t]=!1,k(r))});else if(5===f){if(n(r)&&(k(r),a.length=!0),i.length<o.length)for(var l=i.length;l<o.length;l++)a[l]=!1;else for(var s=o.length;s<i.length;s++)a[s]=!0;for(var p=Math.min(i.length,o.length),d=0;d<p;d++)i.hasOwnProperty(d)||(a[d]=!0),void 0===a[d]&&t(i[d])}}}}(t.p[0]),e(t.p))},K:function(t){return 4===t.i?r(t):n(t)}},X.ES5||(X.ES5=i)}()},4146:(t,e,r)=>{"use strict";var n=r(4363),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function c(t){return n.isMemo(t)?u:a[t.$$typeof]||o}a[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[n.Memo]=u;var f=Object.defineProperty,l=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;t.exports=function t(e,r,n){if("string"!=typeof r){if(y){var o=d(r);o&&o!==y&&t(e,o,n)}var u=l(r);s&&(u=u.concat(s(r)));for(var a=c(e),v=c(r),b=0;b<u.length;++b){var h=u[b];if(!i[h]&&!(n&&n[h])&&!(v&&v[h])&&!(a&&a[h])){var m=p(r,h);try{f(e,h,m)}catch(t){}}}}return e}},8424:(t,e,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(6380)}])},6380:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>d});var n=r(4848);r(6540);var o=r(8133),i=r.n(o),u=r(3368),a=r.n(u),c=r(9610),f=r(4854),l=r(2848);let s=(0,c.U1)({reducer:{darkMode:f.Ay,main:l.Ay}});var p=r(8236);r(9618);let d=function(t){let{Component:e,pageProps:r}=t,o=e.getLayout||(t=>t),u="Admin One React Tailwind free",c="Admin One - free React Next Tailwind dashboard with TypeScript and dark mode",f="https://static.justboil.me/templates/one/repo-tailwind-react.png",l="1920";return(0,n.jsx)(p.Kq,{store:s,children:o((0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("meta",{name:"description",content:c}),(0,n.jsx)("meta",{property:"og:url",content:"https://justboil.github.io/admin-one-react-tailwind/"}),(0,n.jsx)("meta",{property:"og:site_name",content:"JustBoil.me"}),(0,n.jsx)("meta",{property:"og:title",content:u}),(0,n.jsx)("meta",{property:"og:description",content:c}),(0,n.jsx)("meta",{property:"og:image",content:f}),(0,n.jsx)("meta",{property:"og:image:type",content:"image/png"}),(0,n.jsx)("meta",{property:"og:image:width",content:l}),(0,n.jsx)("meta",{property:"og:image:height",content:"960"}),(0,n.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{property:"twitter:title",content:u}),(0,n.jsx)("meta",{property:"twitter:description",content:c}),(0,n.jsx)("meta",{property:"twitter:image:src",content:f}),(0,n.jsx)("meta",{property:"twitter:image:width",content:l}),(0,n.jsx)("meta",{property:"twitter:image:height",content:"960"}),(0,n.jsx)("link",{rel:"icon",href:" "})]}),(0,n.jsx)(i(),{src:"https://www.googletagmanager.com/gtag/js?id=UA-130795909-1",strategy:"afterInteractive"}),(0,n.jsx)(i(),{id:"google-analytics",strategy:"afterInteractive",children:"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', 'UA-130795909-1');\n            "}),(0,n.jsx)(e,{...r})]}))})}},4854:(t,e,r)=>{"use strict";r.d(e,{Ay:()=>i,S8:()=>o});let n=(0,r(9610).Z0)({name:"darkMode",initialState:{isEnabled:!1},reducers:{setDarkMode:(t,e)=>{t.isEnabled=null!==e.payload?e.payload:!t.isEnabled,"undefined"!=typeof document&&(document.body.classList[t.isEnabled?"add":"remove"]("dark-scrollbars"),document.documentElement.classList[t.isEnabled?"add":"remove"]("dark","dark-scrollbars-compat"))}}}),{setDarkMode:o}=n.actions,i=n.reducer},2848:(t,e,r)=>{"use strict";r.d(e,{Ay:()=>c,X1:()=>u});let n=(0,r(9610).Z0)({name:"main",initialState:{userName:"John Doe",userEmail:"doe.doe.doe@example.com",userPoints:500,isFieldFocusRegistered:!1,purchasedItems:[]},reducers:{setUser:(t,e)=>{t.userName=e.payload.name,t.userEmail=e.payload.email},incrementPoints:(t,e)=>{t.userPoints+=e.payload},decrementPoints:(t,e)=>{t.userPoints-=e.payload},addPurchasedItem:(t,e)=>{t.purchasedItems.includes(e.payload)||t.purchasedItems.push(e.payload)}}}),{setUser:o,incrementPoints:i,decrementPoints:u,addPurchasedItem:a}=n.actions,c=n.reducer},9618:()=>{},3368:(t,e,r)=>{t.exports=r(6085)},8133:(t,e,r)=>{t.exports=r(7610)},2799:(t,e)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,s=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,v=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,m=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function S(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case n:switch(t=t.type){case l:case s:case i:case a:case u:case d:return t;default:switch(t=t&&t.$$typeof){case f:case p:case b:case v:case c:return t;default:return e}}case o:return e}}}function O(t){return S(t)===s}e.AsyncMode=l,e.ConcurrentMode=s,e.ContextConsumer=f,e.ContextProvider=c,e.Element=n,e.ForwardRef=p,e.Fragment=i,e.Lazy=b,e.Memo=v,e.Portal=o,e.Profiler=a,e.StrictMode=u,e.Suspense=d,e.isAsyncMode=function(t){return O(t)||S(t)===l},e.isConcurrentMode=O,e.isContextConsumer=function(t){return S(t)===f},e.isContextProvider=function(t){return S(t)===c},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===n},e.isForwardRef=function(t){return S(t)===p},e.isFragment=function(t){return S(t)===i},e.isLazy=function(t){return S(t)===b},e.isMemo=function(t){return S(t)===v},e.isPortal=function(t){return S(t)===o},e.isProfiler=function(t){return S(t)===a},e.isStrictMode=function(t){return S(t)===u},e.isSuspense=function(t){return S(t)===d},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===s||t===a||t===u||t===d||t===y||"object"==typeof t&&null!==t&&(t.$$typeof===b||t.$$typeof===v||t.$$typeof===c||t.$$typeof===f||t.$$typeof===p||t.$$typeof===m||t.$$typeof===g||t.$$typeof===w||t.$$typeof===h)},e.typeOf=S},4363:(t,e,r)=>{"use strict";t.exports=r(2799)},8236:(t,e,r)=>{"use strict";r.d(e,{Kq:()=>g,wA:()=>O,d4:()=>b});var n=r(9888),o=r(9242),i=r(961);let u=function(t){t()},a=()=>u;var c=r(6540);let f=Symbol.for("react-redux-context"),l="undefined"!=typeof globalThis?globalThis:{},s=function(){var t;if(!c.createContext)return{};let e=null!=(t=l[f])?t:l[f]=new Map,r=e.get(c.createContext);return r||(r=c.createContext(null),e.set(c.createContext,r)),r}();function p(t=s){return function(){return(0,c.useContext)(t)}}let d=p(),y=()=>{throw Error("uSES not initialized!")},v=(t,e)=>t===e,b=function(t=s){let e=t===s?d:p(t);return function(t,r={}){let{equalityFn:n=v,stabilityCheck:o,noopCheck:i}="function"==typeof r?{equalityFn:r}:r,{store:u,subscription:a,getServerState:f,stabilityCheck:l,noopCheck:s}=e();(0,c.useRef)(!0);let p=(0,c.useCallback)({[t.name]:e=>t(e)}[t.name],[t,l,o]),d=y(a.addNestedSub,u.getState,f||u.getState,p,n);return(0,c.useDebugValue)(d),d}}();r(4146),r(4737);let h={notify(){},get:()=>[]},m="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?c.useLayoutEffect:c.useEffect,g=function({store:t,context:e,children:r,serverState:n,stabilityCheck:o="once",noopCheck:i="once"}){let u=c.useMemo(()=>{let e=function(t,e){let r;let n=h;function o(){u.onStateChange&&u.onStateChange()}function i(){r||(r=t.subscribe(o),n=function(){let t=a(),e=null,r=null;return{clear(){e=null,r=null},notify(){t(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){let t=[],r=e;for(;r;)t.push(r),r=r.next;return t},subscribe(t){let n=!0,o=r={callback:t,next:null,prev:r};return o.prev?o.prev.next=o:e=o,function(){n&&null!==e&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}())}let u={addNestedSub:function(t){return i(),n.subscribe(t)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:o,isSubscribed:function(){return!!r},trySubscribe:i,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=h)},getListeners:()=>n};return u}(t);return{store:t,subscription:e,getServerState:n?()=>n:void 0,stabilityCheck:o,noopCheck:i}},[t,n,o,i]),f=c.useMemo(()=>t.getState(),[t]);return m(()=>{let{subscription:e}=u;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),f!==t.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}},[u,f]),c.createElement((e||s).Provider,{value:u},r)};function w(t=s){let e=t===s?d:p(t);return function(){let{store:t}=e();return t}}let S=w(),O=function(t=s){let e=t===s?S:w(t);return function(){return e().dispatch}}();y=o.useSyncExternalStoreWithSelector,n.useSyncExternalStore,u=i.unstable_batchedUpdates},8989:(t,e)=>{"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.module.reference")},4737:(t,e,r)=>{"use strict";r(8989)},1063:(t,e,r)=>{"use strict";var n=r(6540),o="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},i=n.useState,u=n.useEffect,a=n.useLayoutEffect,c=n.useDebugValue;function f(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!o(t,r)}catch(t){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(t,e){return e()}:function(t,e){var r=e(),n=i({inst:{value:r,getSnapshot:e}}),o=n[0].inst,l=n[1];return a(function(){o.value=r,o.getSnapshot=e,f(o)&&l({inst:o})},[t,r,e]),u(function(){return f(o)&&l({inst:o}),t(function(){f(o)&&l({inst:o})})},[t]),c(r),r};e.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:l},8940:(t,e,r)=>{"use strict";var n=r(6540),o=r(9888),i="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},u=o.useSyncExternalStore,a=n.useRef,c=n.useEffect,f=n.useMemo,l=n.useDebugValue;e.useSyncExternalStoreWithSelector=function(t,e,r,n,o){var s=a(null);if(null===s.current){var p={hasValue:!1,value:null};s.current=p}else p=s.current;var d=u(t,(s=f(function(){function t(t){if(!c){if(c=!0,u=t,t=n(t),void 0!==o&&p.hasValue){var e=p.value;if(o(e,t))return a=e}return a=t}if(e=a,i(u,t))return e;var r=n(t);return void 0!==o&&o(e,r)?e:(u=t,a=r)}var u,a,c=!1,f=void 0===r?null:r;return[function(){return t(e())},null===f?void 0:function(){return t(f())}]},[e,r,n,o]))[0],s[1]);return c(function(){p.hasValue=!0,p.value=d},[d]),l(d),d}},9888:(t,e,r)=>{"use strict";t.exports=r(1063)},9242:(t,e,r)=>{"use strict";t.exports=r(8940)}},t=>{var e=e=>t(t.s=e);t.O(0,[593,792],()=>(e(8424),e(8440))),_N_E=t.O()}]);