(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(l){if(l.ep)return;l.ep=!0;const c=r(l);fetch(l.href,c)}})();function eE(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Wf={exports:{}},el={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var By;function nE(){if(By)return el;By=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function r(o,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:a,type:o,key:d,ref:l!==void 0?l:null,props:c}}return el.Fragment=e,el.jsx=r,el.jsxs=r,el}var qy;function rE(){return qy||(qy=1,Wf.exports=nE()),Wf.exports}var I=rE(),td={exports:{}},xt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hy;function aE(){if(Hy)return xt;Hy=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.iterator;function C(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,L={};function H(D,et,st){this.props=D,this.context=et,this.refs=L,this.updater=st||U}H.prototype.isReactComponent={},H.prototype.setState=function(D,et){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,et,"setState")},H.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function Z(){}Z.prototype=H.prototype;function at(D,et,st){this.props=D,this.context=et,this.refs=L,this.updater=st||U}var tt=at.prototype=new Z;tt.constructor=at,V(tt,H.prototype),tt.isPureReactComponent=!0;var ft=Array.isArray,lt={H:null,A:null,T:null,S:null,V:null},_t=Object.prototype.hasOwnProperty;function N(D,et,st,rt,gt,Rt){return st=Rt.ref,{$$typeof:a,type:D,key:et,ref:st!==void 0?st:null,props:Rt}}function A(D,et){return N(D.type,et,void 0,void 0,void 0,D.props)}function x(D){return typeof D=="object"&&D!==null&&D.$$typeof===a}function O(D){var et={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(st){return et[st]})}var M=/\/+/g;function P(D,et){return typeof D=="object"&&D!==null&&D.key!=null?O(""+D.key):et.toString(36)}function R(){}function Se(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(R,R):(D.status="pending",D.then(function(et){D.status==="pending"&&(D.status="fulfilled",D.value=et)},function(et){D.status==="pending"&&(D.status="rejected",D.reason=et)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ae(D,et,st,rt,gt){var Rt=typeof D;(Rt==="undefined"||Rt==="boolean")&&(D=null);var Tt=!1;if(D===null)Tt=!0;else switch(Rt){case"bigint":case"string":case"number":Tt=!0;break;case"object":switch(D.$$typeof){case a:case e:Tt=!0;break;case _:return Tt=D._init,ae(Tt(D._payload),et,st,rt,gt)}}if(Tt)return gt=gt(D),Tt=rt===""?"."+P(D,0):rt,ft(gt)?(st="",Tt!=null&&(st=Tt.replace(M,"$&/")+"/"),ae(gt,et,st,"",function(Qn){return Qn})):gt!=null&&(x(gt)&&(gt=A(gt,st+(gt.key==null||D&&D.key===gt.key?"":(""+gt.key).replace(M,"$&/")+"/")+Tt)),et.push(gt)),1;Tt=0;var Me=rt===""?".":rt+":";if(ft(D))for(var Zt=0;Zt<D.length;Zt++)rt=D[Zt],Rt=Me+P(rt,Zt),Tt+=ae(rt,et,st,Rt,gt);else if(Zt=C(D),typeof Zt=="function")for(D=Zt.call(D),Zt=0;!(rt=D.next()).done;)rt=rt.value,Rt=Me+P(rt,Zt++),Tt+=ae(rt,et,st,Rt,gt);else if(Rt==="object"){if(typeof D.then=="function")return ae(Se(D),et,st,rt,gt);throw et=String(D),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return Tt}function K(D,et,st){if(D==null)return D;var rt=[],gt=0;return ae(D,rt,"","",function(Rt){return et.call(st,Rt,gt++)}),rt}function ot(D){if(D._status===-1){var et=D._result;et=et(),et.then(function(st){(D._status===0||D._status===-1)&&(D._status=1,D._result=st)},function(st){(D._status===0||D._status===-1)&&(D._status=2,D._result=st)}),D._status===-1&&(D._status=0,D._result=et)}if(D._status===1)return D._result.default;throw D._result}var dt=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function jt(){}return xt.Children={map:K,forEach:function(D,et,st){K(D,function(){et.apply(this,arguments)},st)},count:function(D){var et=0;return K(D,function(){et++}),et},toArray:function(D){return K(D,function(et){return et})||[]},only:function(D){if(!x(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},xt.Component=H,xt.Fragment=r,xt.Profiler=l,xt.PureComponent=at,xt.StrictMode=o,xt.Suspense=g,xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=lt,xt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return lt.H.useMemoCache(D)}},xt.cache=function(D){return function(){return D.apply(null,arguments)}},xt.cloneElement=function(D,et,st){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var rt=V({},D.props),gt=D.key,Rt=void 0;if(et!=null)for(Tt in et.ref!==void 0&&(Rt=void 0),et.key!==void 0&&(gt=""+et.key),et)!_t.call(et,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&et.ref===void 0||(rt[Tt]=et[Tt]);var Tt=arguments.length-2;if(Tt===1)rt.children=st;else if(1<Tt){for(var Me=Array(Tt),Zt=0;Zt<Tt;Zt++)Me[Zt]=arguments[Zt+2];rt.children=Me}return N(D.type,gt,void 0,void 0,Rt,rt)},xt.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},xt.createElement=function(D,et,st){var rt,gt={},Rt=null;if(et!=null)for(rt in et.key!==void 0&&(Rt=""+et.key),et)_t.call(et,rt)&&rt!=="key"&&rt!=="__self"&&rt!=="__source"&&(gt[rt]=et[rt]);var Tt=arguments.length-2;if(Tt===1)gt.children=st;else if(1<Tt){for(var Me=Array(Tt),Zt=0;Zt<Tt;Zt++)Me[Zt]=arguments[Zt+2];gt.children=Me}if(D&&D.defaultProps)for(rt in Tt=D.defaultProps,Tt)gt[rt]===void 0&&(gt[rt]=Tt[rt]);return N(D,Rt,void 0,void 0,null,gt)},xt.createRef=function(){return{current:null}},xt.forwardRef=function(D){return{$$typeof:p,render:D}},xt.isValidElement=x,xt.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:ot}},xt.memo=function(D,et){return{$$typeof:y,type:D,compare:et===void 0?null:et}},xt.startTransition=function(D){var et=lt.T,st={};lt.T=st;try{var rt=D(),gt=lt.S;gt!==null&&gt(st,rt),typeof rt=="object"&&rt!==null&&typeof rt.then=="function"&&rt.then(jt,dt)}catch(Rt){dt(Rt)}finally{lt.T=et}},xt.unstable_useCacheRefresh=function(){return lt.H.useCacheRefresh()},xt.use=function(D){return lt.H.use(D)},xt.useActionState=function(D,et,st){return lt.H.useActionState(D,et,st)},xt.useCallback=function(D,et){return lt.H.useCallback(D,et)},xt.useContext=function(D){return lt.H.useContext(D)},xt.useDebugValue=function(){},xt.useDeferredValue=function(D,et){return lt.H.useDeferredValue(D,et)},xt.useEffect=function(D,et,st){var rt=lt.H;if(typeof st=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return rt.useEffect(D,et)},xt.useId=function(){return lt.H.useId()},xt.useImperativeHandle=function(D,et,st){return lt.H.useImperativeHandle(D,et,st)},xt.useInsertionEffect=function(D,et){return lt.H.useInsertionEffect(D,et)},xt.useLayoutEffect=function(D,et){return lt.H.useLayoutEffect(D,et)},xt.useMemo=function(D,et){return lt.H.useMemo(D,et)},xt.useOptimistic=function(D,et){return lt.H.useOptimistic(D,et)},xt.useReducer=function(D,et,st){return lt.H.useReducer(D,et,st)},xt.useRef=function(D){return lt.H.useRef(D)},xt.useState=function(D){return lt.H.useState(D)},xt.useSyncExternalStore=function(D,et,st){return lt.H.useSyncExternalStore(D,et,st)},xt.useTransition=function(){return lt.H.useTransition()},xt.version="19.1.0",xt}var Gy;function Fd(){return Gy||(Gy=1,td.exports=aE()),td.exports}var Y=Fd();const De=eE(Y);var ed={exports:{}},nl={},nd={exports:{}},rd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fy;function iE(){return Fy||(Fy=1,function(a){function e(K,ot){var dt=K.length;K.push(ot);t:for(;0<dt;){var jt=dt-1>>>1,D=K[jt];if(0<l(D,ot))K[jt]=ot,K[dt]=D,dt=jt;else break t}}function r(K){return K.length===0?null:K[0]}function o(K){if(K.length===0)return null;var ot=K[0],dt=K.pop();if(dt!==ot){K[0]=dt;t:for(var jt=0,D=K.length,et=D>>>1;jt<et;){var st=2*(jt+1)-1,rt=K[st],gt=st+1,Rt=K[gt];if(0>l(rt,dt))gt<D&&0>l(Rt,rt)?(K[jt]=Rt,K[gt]=dt,jt=gt):(K[jt]=rt,K[st]=dt,jt=st);else if(gt<D&&0>l(Rt,dt))K[jt]=Rt,K[gt]=dt,jt=gt;else break t}}return ot}function l(K,ot){var dt=K.sortIndex-ot.sortIndex;return dt!==0?dt:K.id-ot.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();a.unstable_now=function(){return d.now()-p}}var g=[],y=[],_=1,S=null,C=3,U=!1,V=!1,L=!1,H=!1,Z=typeof setTimeout=="function"?setTimeout:null,at=typeof clearTimeout=="function"?clearTimeout:null,tt=typeof setImmediate<"u"?setImmediate:null;function ft(K){for(var ot=r(y);ot!==null;){if(ot.callback===null)o(y);else if(ot.startTime<=K)o(y),ot.sortIndex=ot.expirationTime,e(g,ot);else break;ot=r(y)}}function lt(K){if(L=!1,ft(K),!V)if(r(g)!==null)V=!0,_t||(_t=!0,P());else{var ot=r(y);ot!==null&&ae(lt,ot.startTime-K)}}var _t=!1,N=-1,A=5,x=-1;function O(){return H?!0:!(a.unstable_now()-x<A)}function M(){if(H=!1,_t){var K=a.unstable_now();x=K;var ot=!0;try{t:{V=!1,L&&(L=!1,at(N),N=-1),U=!0;var dt=C;try{e:{for(ft(K),S=r(g);S!==null&&!(S.expirationTime>K&&O());){var jt=S.callback;if(typeof jt=="function"){S.callback=null,C=S.priorityLevel;var D=jt(S.expirationTime<=K);if(K=a.unstable_now(),typeof D=="function"){S.callback=D,ft(K),ot=!0;break e}S===r(g)&&o(g),ft(K)}else o(g);S=r(g)}if(S!==null)ot=!0;else{var et=r(y);et!==null&&ae(lt,et.startTime-K),ot=!1}}break t}finally{S=null,C=dt,U=!1}ot=void 0}}finally{ot?P():_t=!1}}}var P;if(typeof tt=="function")P=function(){tt(M)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,Se=R.port2;R.port1.onmessage=M,P=function(){Se.postMessage(null)}}else P=function(){Z(M,0)};function ae(K,ot){N=Z(function(){K(a.unstable_now())},ot)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(K){K.callback=null},a.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<K?Math.floor(1e3/K):5},a.unstable_getCurrentPriorityLevel=function(){return C},a.unstable_next=function(K){switch(C){case 1:case 2:case 3:var ot=3;break;default:ot=C}var dt=C;C=ot;try{return K()}finally{C=dt}},a.unstable_requestPaint=function(){H=!0},a.unstable_runWithPriority=function(K,ot){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var dt=C;C=K;try{return ot()}finally{C=dt}},a.unstable_scheduleCallback=function(K,ot,dt){var jt=a.unstable_now();switch(typeof dt=="object"&&dt!==null?(dt=dt.delay,dt=typeof dt=="number"&&0<dt?jt+dt:jt):dt=jt,K){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=dt+D,K={id:_++,callback:ot,priorityLevel:K,startTime:dt,expirationTime:D,sortIndex:-1},dt>jt?(K.sortIndex=dt,e(y,K),r(g)===null&&K===r(y)&&(L?(at(N),N=-1):L=!0,ae(lt,dt-jt))):(K.sortIndex=D,e(g,K),V||U||(V=!0,_t||(_t=!0,P()))),K},a.unstable_shouldYield=O,a.unstable_wrapCallback=function(K){var ot=C;return function(){var dt=C;C=ot;try{return K.apply(this,arguments)}finally{C=dt}}}}(rd)),rd}var Qy;function oE(){return Qy||(Qy=1,nd.exports=iE()),nd.exports}var ad={exports:{}},Ze={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yy;function sE(){if(Yy)return Ze;Yy=1;var a=Fd();function e(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)y+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(e(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,y,_){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:g,containerInfo:y,implementation:_}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Ze.createPortal=function(g,y){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return c(g,y,null,_)},Ze.flushSync=function(g){var y=d.T,_=o.p;try{if(d.T=null,o.p=2,g)return g()}finally{d.T=y,o.p=_,o.d.f()}},Ze.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,o.d.C(g,y))},Ze.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},Ze.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var _=y.as,S=p(_,y.crossOrigin),C=typeof y.integrity=="string"?y.integrity:void 0,U=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;_==="style"?o.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:C,fetchPriority:U}):_==="script"&&o.d.X(g,{crossOrigin:S,integrity:C,fetchPriority:U,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ze.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var _=p(y.as,y.crossOrigin);o.d.M(g,{crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&o.d.M(g)},Ze.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var _=y.as,S=p(_,y.crossOrigin);o.d.L(g,_,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ze.preloadModule=function(g,y){if(typeof g=="string")if(y){var _=p(y.as,y.crossOrigin);o.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else o.d.m(g)},Ze.requestFormReset=function(g){o.d.r(g)},Ze.unstable_batchedUpdates=function(g,y){return g(y)},Ze.useFormState=function(g,y,_){return d.H.useFormState(g,y,_)},Ze.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ze.version="19.1.0",Ze}var Ky;function lE(){if(Ky)return ad.exports;Ky=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),ad.exports=sE(),ad.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xy;function uE(){if(Xy)return nl;Xy=1;var a=oE(),e=Fd(),r=lE();function o(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,i=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(i=n.return),t=n.return;while(t)}return n.tag===3?i:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(o(188))}function g(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(o(188));return n!==t?null:t}for(var i=t,s=n;;){var h=i.return;if(h===null)break;var f=h.alternate;if(f===null){if(s=h.return,s!==null){i=s;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===i)return p(h),t;if(f===s)return p(h),n;f=f.sibling}throw Error(o(188))}if(i.return!==s.return)i=h,s=f;else{for(var b=!1,E=h.child;E;){if(E===i){b=!0,i=h,s=f;break}if(E===s){b=!0,s=h,i=f;break}E=E.sibling}if(!b){for(E=f.child;E;){if(E===i){b=!0,i=f,s=h;break}if(E===s){b=!0,s=f,i=h;break}E=E.sibling}if(!b)throw Error(o(189))}}if(i.alternate!==s)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),Z=Symbol.for("react.provider"),at=Symbol.for("react.consumer"),tt=Symbol.for("react.context"),ft=Symbol.for("react.forward_ref"),lt=Symbol.for("react.suspense"),_t=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function P(t){return t===null||typeof t!="object"?null:(t=M&&t[M]||t["@@iterator"],typeof t=="function"?t:null)}var R=Symbol.for("react.client.reference");function Se(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===R?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case H:return"Profiler";case L:return"StrictMode";case lt:return"Suspense";case _t:return"SuspenseList";case x:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case U:return"Portal";case tt:return(t.displayName||"Context")+".Provider";case at:return(t._context.displayName||"Context")+".Consumer";case ft:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return n=t.displayName||null,n!==null?n:Se(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return Se(t(n))}catch{}}return null}var ae=Array.isArray,K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},jt=[],D=-1;function et(t){return{current:t}}function st(t){0>D||(t.current=jt[D],jt[D]=null,D--)}function rt(t,n){D++,jt[D]=t.current,t.current=n}var gt=et(null),Rt=et(null),Tt=et(null),Me=et(null);function Zt(t,n){switch(rt(Tt,n),rt(Rt,t),rt(gt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?py(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=py(n),t=gy(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}st(gt),rt(gt,t)}function Qn(){st(gt),st(Rt),st(Tt)}function Xr(t){t.memoizedState!==null&&rt(Me,t);var n=gt.current,i=gy(n,t.type);n!==i&&(rt(Rt,t),rt(gt,i))}function yr(t){Rt.current===t&&(st(gt),st(Rt)),Me.current===t&&(st(Me),$s._currentValue=dt)}var La=Object.prototype.hasOwnProperty,ja=a.unstable_scheduleCallback,Ba=a.unstable_cancelCallback,Yo=a.unstable_shouldYield,Dl=a.unstable_requestPaint,An=a.unstable_now,Jc=a.unstable_getCurrentPriorityLevel,Ko=a.unstable_ImmediatePriority,Oi=a.unstable_UserBlockingPriority,qa=a.unstable_NormalPriority,Wc=a.unstable_LowPriority,Di=a.unstable_IdlePriority,Xo=a.log,Nl=a.unstable_setDisableYieldValue,le=null,Ht=null;function hn(t){if(typeof Xo=="function"&&Nl(t),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(le,t)}catch{}}var Xe=Math.clz32?Math.clz32:Ha,Il=Math.log,th=Math.LN2;function Ha(t){return t>>>=0,t===0?32:31-(Il(t)/th|0)|0}var Ga=256,Fa=4194304;function Un(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ni(t,n,i){var s=t.pendingLanes;if(s===0)return 0;var h=0,f=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?h=Un(s):(b&=E,b!==0?h=Un(b):i||(i=E&~t,i!==0&&(h=Un(i))))):(E=s&~f,E!==0?h=Un(E):b!==0?h=Un(b):i||(i=s&~t,i!==0&&(h=Un(i)))),h===0?0:n!==0&&n!==h&&(n&f)===0&&(f=h&-h,i=n&-n,f>=i||f===32&&(i&4194048)!==0)?n:h}function Qa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function $o(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zo(){var t=Ga;return Ga<<=1,(Ga&4194048)===0&&(Ga=256),t}function Jo(){var t=Fa;return Fa<<=1,(Fa&62914560)===0&&(Fa=4194304),t}function vr(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function br(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Wo(t,n,i,s,h,f){var b=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var E=t.entanglements,w=t.expirationTimes,q=t.hiddenUpdates;for(i=b&~i;0<i;){var X=31-Xe(i),J=1<<X;E[X]=0,w[X]=-1;var G=q[X];if(G!==null)for(q[X]=null,X=0;X<G.length;X++){var F=G[X];F!==null&&(F.lane&=-536870913)}i&=~J}s!==0&&Yn(t,s,0),f!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=f&~(b&~n))}function Yn(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Xe(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|i&4194090}function ts(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var s=31-Xe(i),h=1<<s;h&n|t[s]&n&&(t[s]|=n),i&=~h}}function $r(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ii(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Zr(){var t=ot.p;return t!==0?t:(t=window.event,t===void 0?32:Vy(t.type))}function Ml(t,n){var i=ot.p;try{return ot.p=t,n()}finally{ot.p=i}}var te=Math.random().toString(36).slice(2),xe="__reactFiber$"+te,ge="__reactProps$"+te,Sn="__reactContainer$"+te,es="__reactEvents$"+te,eh="__reactListeners$"+te,Jr="__reactHandles$"+te,kl="__reactResources$"+te,Ya="__reactMarker$"+te;function Wr(t){delete t[xe],delete t[ge],delete t[es],delete t[eh],delete t[Jr]}function _r(t){var n=t[xe];if(n)return n;for(var i=t.parentNode;i;){if(n=i[Sn]||i[xe]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=_y(t);t!==null;){if(i=t[xe])return i;t=_y(t)}return n}t=i,i=t.parentNode}return null}function Kn(t){if(t=t[xe]||t[Sn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Xn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(o(33))}function nn(t){var n=t[kl];return n||(n=t[kl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function he(t){t[Ya]=!0}var ns=new Set,Mi={};function zn(t,n){Er(t,n),Er(t+"Capture",n)}function Er(t,n){for(Mi[t]=n,t=0;t<n.length;t++)ns.add(n[t])}var Vl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pl={},Ka={};function Ul(t){return La.call(Ka,t)?!0:La.call(Pl,t)?!1:Vl.test(t)?Ka[t]=!0:(Pl[t]=!0,!1)}function ta(t,n,i){if(Ul(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+i)}}function $n(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+i)}}function qe(t,n,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,""+s)}}var Xa,zl;function Tr(t){if(Xa===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Xa=n&&n[1]||"",zl=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xa+t+zl}var ki=!1;function Vi(t,n){if(!t||ki)return"";ki=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(F){var G=F}Reflect.construct(t,[],J)}else{try{J.call()}catch(F){G=F}t.call(J.prototype)}}else{try{throw Error()}catch(F){G=F}(J=t())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(F){if(F&&G&&typeof F.stack=="string")return[F.stack,G.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),b=f[0],E=f[1];if(b&&E){var w=b.split(`
`),q=E.split(`
`);for(h=s=0;s<w.length&&!w[s].includes("DetermineComponentFrameRoot");)s++;for(;h<q.length&&!q[h].includes("DetermineComponentFrameRoot");)h++;if(s===w.length||h===q.length)for(s=w.length-1,h=q.length-1;1<=s&&0<=h&&w[s]!==q[h];)h--;for(;1<=s&&0<=h;s--,h--)if(w[s]!==q[h]){if(s!==1||h!==1)do if(s--,h--,0>h||w[s]!==q[h]){var X=`
`+w[s].replace(" at new "," at ");return t.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",t.displayName)),X}while(1<=s&&0<=h);break}}}finally{ki=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Tr(i):""}function rs(t){switch(t.tag){case 26:case 27:case 5:return Tr(t.type);case 16:return Tr("Lazy");case 13:return Tr("Suspense");case 19:return Tr("SuspenseList");case 0:case 15:return Vi(t.type,!1);case 11:return Vi(t.type.render,!1);case 1:return Vi(t.type,!0);case 31:return Tr("Activity");default:return""}}function Pi(t){try{var n="";do n+=rs(t),t=t.return;while(t);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}function rn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function as(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nh(t){var n=as(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var h=i.get,f=i.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return h.call(this)},set:function(b){s=""+b,f.call(this,b)}}),Object.defineProperty(t,n,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ui(t){t._valueTracker||(t._valueTracker=nh(t))}function is(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),s="";return t&&(s=as(t)?t.checked?"true":"false":t.value),t=s,t!==i?(n.setValue(t),!0):!1}function $a(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var rh=/[\n"\\]/g;function ye(t){return t.replace(rh,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function fn(t,n,i,s,h,f,b,E){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),n!=null?b==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+rn(n)):t.value!==""+rn(n)&&(t.value=""+rn(n)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),n!=null?ea(t,b,rn(n)):i!=null?ea(t,b,rn(i)):s!=null&&t.removeAttribute("value"),h==null&&f!=null&&(t.defaultChecked=!!f),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+rn(E):t.removeAttribute("name")}function Za(t,n,i,s,h,f,b,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||i!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;i=i!=null?""+rn(i):"",n=n!=null?""+rn(n):i,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??h,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b)}function ea(t,n,i){n==="number"&&$a(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function Ar(t,n,i,s){if(t=t.options,n){n={};for(var h=0;h<i.length;h++)n["$"+i[h]]=!0;for(i=0;i<t.length;i++)h=n.hasOwnProperty("$"+t[i].value),t[i].selected!==h&&(t[i].selected=h),h&&s&&(t[i].defaultSelected=!0)}else{for(i=""+rn(i),n=null,h=0;h<t.length;h++){if(t[h].value===i){t[h].selected=!0,s&&(t[h].defaultSelected=!0);return}n!==null||t[h].disabled||(n=t[h])}n!==null&&(n.selected=!0)}}function Qt(t,n,i){if(n!=null&&(n=""+rn(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+rn(i):""}function Ja(t,n,i,s){if(n==null){if(s!=null){if(i!=null)throw Error(o(92));if(ae(s)){if(1<s.length)throw Error(o(93));s=s[0]}i=s}i==null&&(i=""),n=i}i=rn(n),t.defaultValue=i,s=t.textContent,s===i&&s!==""&&s!==null&&(t.value=s)}function xn(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var Wa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ll(t,n,i){var s=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,i):typeof i!="number"||i===0||Wa.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function os(t,n,i){if(n!=null&&typeof n!="object")throw Error(o(62));if(t=t.style,i!=null){for(var s in i)!i.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var h in n)s=n[h],n.hasOwnProperty(h)&&i[h]!==s&&Ll(t,h,s)}else for(var f in n)n.hasOwnProperty(f)&&Ll(t,f,n[f])}function ss(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ah=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ih=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zi(t){return ih.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Sr=null;function wn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xr=null,wr=null;function ls(t){var n=Kn(t);if(n&&(t=n.stateNode)){var i=t[ge]||null;t:switch(t=n.stateNode,n.type){case"input":if(fn(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+ye(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var s=i[n];if(s!==t&&s.form===t.form){var h=s[ge]||null;if(!h)throw Error(o(90));fn(s,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(n=0;n<i.length;n++)s=i[n],s.form===t.form&&is(s)}break t;case"textarea":Qt(t,i.value,i.defaultValue);break t;case"select":n=i.value,n!=null&&Ar(t,!!i.multiple,n,!1)}}}var Zn=!1;function jl(t,n,i){if(Zn)return t(n,i);Zn=!0;try{var s=t(n);return s}finally{if(Zn=!1,(xr!==null||wr!==null)&&(Mu(),xr&&(n=xr,t=wr,wr=xr=null,ls(n),t)))for(n=0;n<t.length;n++)ls(t[n])}}function ti(t,n){var i=t.stateNode;if(i===null)return null;var s=i[ge]||null;if(s===null)return null;i=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(o(231,n,typeof i));return i}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rn=!1;if(Ln)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){Rn=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{Rn=!1}var Jn=null,na=null,Rr=null;function us(){if(Rr)return Rr;var t,n=na,i=n.length,s,h="value"in Jn?Jn.value:Jn.textContent,f=h.length;for(t=0;t<i&&n[t]===h[t];t++);var b=i-t;for(s=1;s<=b&&n[i-s]===h[f-s];s++);return Rr=h.slice(t,1<s?1-s:void 0)}function Wn(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function tr(){return!0}function cs(){return!1}function ke(t){function n(i,s,h,f,b){this._reactName=i,this._targetInst=h,this.type=s,this.nativeEvent=f,this.target=b,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(i=t[E],this[E]=i?i(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tr:cs,this.isPropagationStopped=cs,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),n}var qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Li=ke(qt),ni=_({},qt,{view:0,detail:0}),Bl=ke(ni),ji,Bi,er,ri=_({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oi,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==er&&(er&&t.type==="mousemove"?(ji=t.screenX-er.screenX,Bi=t.screenY-er.screenY):Bi=ji=0,er=t),ji)},movementY:function(t){return"movementY"in t?t.movementY:Bi}}),Cn=ke(ri),ql=_({},ri,{dataTransfer:0}),oh=ke(ql),ai=_({},ni,{relatedTarget:0}),qi=ke(ai),hs=_({},qt,{animationName:0,elapsedTime:0,pseudoElement:0}),Hi=ke(hs),Hl=_({},qt,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gi=ke(Hl),sh=_({},qt,{data:0}),fs=ke(sh),ii={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ds(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Fl[t])?!!n[t]:!1}function oi(){return ds}var Ql=_({},ni,{key:function(t){if(t.key){var n=ii[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Wn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gl[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oi,charCode:function(t){return t.type==="keypress"?Wn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fi=ke(Ql),Yl=_({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ms=ke(Yl),Cr=_({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oi}),Kl=ke(Cr),Xl=_({},qt,{propertyName:0,elapsedTime:0,pseudoElement:0}),$l=ke(Xl),Zl=_({},ri,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qi=ke(Zl),an=_({},qt,{newState:0,oldState:0}),Jl=ke(an),Wl=[9,13,27,32],nr=Ln&&"CompositionEvent"in window,u=null;Ln&&"documentMode"in document&&(u=document.documentMode);var m=Ln&&"TextEvent"in window&&!u,v=Ln&&(!nr||u&&8<u&&11>=u),T=" ",j=!1;function Q(t,n){switch(t){case"keyup":return Wl.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function it(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var It=!1;function we(t,n){switch(t){case"compositionend":return it(n);case"keypress":return n.which!==32?null:(j=!0,T);case"textInput":return t=n.data,t===T&&j?null:t;default:return null}}function Mt(t,n){if(It)return t==="compositionend"||!nr&&Q(t,n)?(t=us(),Rr=na=Jn=null,It=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return v&&n.locale!=="ko"?null:n.data;default:return null}}var Ve={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Re(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ve[t.type]:n==="textarea"}function Or(t,n,i,s){xr?wr?wr.push(s):wr=[s]:xr=s,n=Lu(n,"onChange"),0<n.length&&(i=new Li("onChange","change",null,i,s),t.push({event:i,listeners:n}))}var He=null,rr=null;function ps(t){cy(t,0)}function tu(t){var n=Xn(t);if(is(n))return t}function Nm(t,n){if(t==="change")return n}var Im=!1;if(Ln){var lh;if(Ln){var uh="oninput"in document;if(!uh){var Mm=document.createElement("div");Mm.setAttribute("oninput","return;"),uh=typeof Mm.oninput=="function"}lh=uh}else lh=!1;Im=lh&&(!document.documentMode||9<document.documentMode)}function km(){He&&(He.detachEvent("onpropertychange",Vm),rr=He=null)}function Vm(t){if(t.propertyName==="value"&&tu(rr)){var n=[];Or(n,rr,t,wn(t)),jl(ps,n)}}function N_(t,n,i){t==="focusin"?(km(),He=n,rr=i,He.attachEvent("onpropertychange",Vm)):t==="focusout"&&km()}function I_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tu(rr)}function M_(t,n){if(t==="click")return tu(n)}function k_(t,n){if(t==="input"||t==="change")return tu(n)}function V_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var dn=typeof Object.is=="function"?Object.is:V_;function gs(t,n){if(dn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),s=Object.keys(n);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var h=i[s];if(!La.call(n,h)||!dn(t[h],n[h]))return!1}return!0}function Pm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Um(t,n){var i=Pm(t);t=0;for(var s;i;){if(i.nodeType===3){if(s=t+i.textContent.length,t<=n&&s>=n)return{node:i,offset:n-t};t=s}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=Pm(i)}}function zm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?zm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Lm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=$a(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=$a(t.document)}return n}function ch(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var P_=Ln&&"documentMode"in document&&11>=document.documentMode,Yi=null,hh=null,ys=null,fh=!1;function jm(t,n,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;fh||Yi==null||Yi!==$a(s)||(s=Yi,"selectionStart"in s&&ch(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ys&&gs(ys,s)||(ys=s,s=Lu(hh,"onSelect"),0<s.length&&(n=new Li("onSelect","select",null,n,i),t.push({event:n,listeners:s}),n.target=Yi)))}function si(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var Ki={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionrun:si("Transition","TransitionRun"),transitionstart:si("Transition","TransitionStart"),transitioncancel:si("Transition","TransitionCancel"),transitionend:si("Transition","TransitionEnd")},dh={},Bm={};Ln&&(Bm=document.createElement("div").style,"AnimationEvent"in window||(delete Ki.animationend.animation,delete Ki.animationiteration.animation,delete Ki.animationstart.animation),"TransitionEvent"in window||delete Ki.transitionend.transition);function li(t){if(dh[t])return dh[t];if(!Ki[t])return t;var n=Ki[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in Bm)return dh[t]=n[i];return t}var qm=li("animationend"),Hm=li("animationiteration"),Gm=li("animationstart"),U_=li("transitionrun"),z_=li("transitionstart"),L_=li("transitioncancel"),Fm=li("transitionend"),Qm=new Map,mh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mh.push("scrollEnd");function jn(t,n){Qm.set(t,n),zn(n,[t])}var Ym=new WeakMap;function On(t,n){if(typeof t=="object"&&t!==null){var i=Ym.get(t);return i!==void 0?i:(n={value:t,source:n,stack:Pi(n)},Ym.set(t,n),n)}return{value:t,source:n,stack:Pi(n)}}var Dn=[],Xi=0,ph=0;function eu(){for(var t=Xi,n=ph=Xi=0;n<t;){var i=Dn[n];Dn[n++]=null;var s=Dn[n];Dn[n++]=null;var h=Dn[n];Dn[n++]=null;var f=Dn[n];if(Dn[n++]=null,s!==null&&h!==null){var b=s.pending;b===null?h.next=h:(h.next=b.next,b.next=h),s.pending=h}f!==0&&Km(i,h,f)}}function nu(t,n,i,s){Dn[Xi++]=t,Dn[Xi++]=n,Dn[Xi++]=i,Dn[Xi++]=s,ph|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function gh(t,n,i,s){return nu(t,n,i,s),ru(t)}function $i(t,n){return nu(t,null,null,n),ru(t)}function Km(t,n,i){t.lanes|=i;var s=t.alternate;s!==null&&(s.lanes|=i);for(var h=!1,f=t.return;f!==null;)f.childLanes|=i,s=f.alternate,s!==null&&(s.childLanes|=i),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(h=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,h&&n!==null&&(h=31-Xe(i),t=f.hiddenUpdates,s=t[h],s===null?t[h]=[n]:s.push(n),n.lane=i|536870912),f):null}function ru(t){if(50<qs)throw qs=0,Af=null,Error(o(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Zi={};function j_(t,n,i,s){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,n,i,s){return new j_(t,n,i,s)}function yh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Dr(t,n){var i=t.alternate;return i===null?(i=mn(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Xm(t,n){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function au(t,n,i,s,h,f){var b=0;if(s=t,typeof t=="function")yh(t)&&(b=1);else if(typeof t=="string")b=q1(t,i,gt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case x:return t=mn(31,i,n,h),t.elementType=x,t.lanes=f,t;case V:return ui(i.children,h,f,n);case L:b=8,h|=24;break;case H:return t=mn(12,i,n,h|2),t.elementType=H,t.lanes=f,t;case lt:return t=mn(13,i,n,h),t.elementType=lt,t.lanes=f,t;case _t:return t=mn(19,i,n,h),t.elementType=_t,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Z:case tt:b=10;break t;case at:b=9;break t;case ft:b=11;break t;case N:b=14;break t;case A:b=16,s=null;break t}b=29,i=Error(o(130,t===null?"null":typeof t,"")),s=null}return n=mn(b,i,n,h),n.elementType=t,n.type=s,n.lanes=f,n}function ui(t,n,i,s){return t=mn(7,t,s,n),t.lanes=i,t}function vh(t,n,i){return t=mn(6,t,null,n),t.lanes=i,t}function bh(t,n,i){return n=mn(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ji=[],Wi=0,iu=null,ou=0,Nn=[],In=0,ci=null,Nr=1,Ir="";function hi(t,n){Ji[Wi++]=ou,Ji[Wi++]=iu,iu=t,ou=n}function $m(t,n,i){Nn[In++]=Nr,Nn[In++]=Ir,Nn[In++]=ci,ci=t;var s=Nr;t=Ir;var h=32-Xe(s)-1;s&=~(1<<h),i+=1;var f=32-Xe(n)+h;if(30<f){var b=h-h%5;f=(s&(1<<b)-1).toString(32),s>>=b,h-=b,Nr=1<<32-Xe(n)+h|i<<h|s,Ir=f+t}else Nr=1<<f|i<<h|s,Ir=t}function _h(t){t.return!==null&&(hi(t,1),$m(t,1,0))}function Eh(t){for(;t===iu;)iu=Ji[--Wi],Ji[Wi]=null,ou=Ji[--Wi],Ji[Wi]=null;for(;t===ci;)ci=Nn[--In],Nn[In]=null,Ir=Nn[--In],Nn[In]=null,Nr=Nn[--In],Nn[In]=null}var on=null,ue=null,Bt=!1,fi=null,ar=!1,Th=Error(o(519));function di(t){var n=Error(o(418,""));throw _s(On(n,t)),Th}function Zm(t){var n=t.stateNode,i=t.type,s=t.memoizedProps;switch(n[xe]=t,n[ge]=s,i){case"dialog":Nt("cancel",n),Nt("close",n);break;case"iframe":case"object":case"embed":Nt("load",n);break;case"video":case"audio":for(i=0;i<Gs.length;i++)Nt(Gs[i],n);break;case"source":Nt("error",n);break;case"img":case"image":case"link":Nt("error",n),Nt("load",n);break;case"details":Nt("toggle",n);break;case"input":Nt("invalid",n),Za(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Ui(n);break;case"select":Nt("invalid",n);break;case"textarea":Nt("invalid",n),Ja(n,s.value,s.defaultValue,s.children),Ui(n)}i=s.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||s.suppressHydrationWarning===!0||my(n.textContent,i)?(s.popover!=null&&(Nt("beforetoggle",n),Nt("toggle",n)),s.onScroll!=null&&Nt("scroll",n),s.onScrollEnd!=null&&Nt("scrollend",n),s.onClick!=null&&(n.onclick=ju),n=!0):n=!1,n||di(t)}function Jm(t){for(on=t.return;on;)switch(on.tag){case 5:case 13:ar=!1;return;case 27:case 3:ar=!0;return;default:on=on.return}}function vs(t){if(t!==on)return!1;if(!Bt)return Jm(t),Bt=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Lf(t.type,t.memoizedProps)),i=!i),i&&ue&&di(t),Jm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(i=t.data,i==="/$"){if(n===0){ue=qn(t.nextSibling);break t}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++;t=t.nextSibling}ue=null}}else n===27?(n=ue,va(t.type)?(t=Hf,Hf=null,ue=t):ue=n):ue=on?qn(t.stateNode.nextSibling):null;return!0}function bs(){ue=on=null,Bt=!1}function Wm(){var t=fi;return t!==null&&(un===null?un=t:un.push.apply(un,t),fi=null),t}function _s(t){fi===null?fi=[t]:fi.push(t)}var Ah=et(null),mi=null,Mr=null;function ra(t,n,i){rt(Ah,n._currentValue),n._currentValue=i}function kr(t){t._currentValue=Ah.current,st(Ah)}function Sh(t,n,i){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===i)break;t=t.return}}function xh(t,n,i,s){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var f=h.dependencies;if(f!==null){var b=h.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=h;for(var w=0;w<n.length;w++)if(E.context===n[w]){f.lanes|=i,E=f.alternate,E!==null&&(E.lanes|=i),Sh(f.return,i,t),s||(b=null);break t}f=E.next}}else if(h.tag===18){if(b=h.return,b===null)throw Error(o(341));b.lanes|=i,f=b.alternate,f!==null&&(f.lanes|=i),Sh(b,i,t),b=null}else b=h.child;if(b!==null)b.return=h;else for(b=h;b!==null;){if(b===t){b=null;break}if(h=b.sibling,h!==null){h.return=b.return,b=h;break}b=b.return}h=b}}function Es(t,n,i,s){t=null;for(var h=n,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var b=h.alternate;if(b===null)throw Error(o(387));if(b=b.memoizedProps,b!==null){var E=h.type;dn(h.pendingProps.value,b.value)||(t!==null?t.push(E):t=[E])}}else if(h===Me.current){if(b=h.alternate,b===null)throw Error(o(387));b.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push($s):t=[$s])}h=h.return}t!==null&&xh(n,t,i,s),n.flags|=262144}function su(t){for(t=t.firstContext;t!==null;){if(!dn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function pi(t){mi=t,Mr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function $e(t){return tp(mi,t)}function lu(t,n){return mi===null&&pi(t),tp(t,n)}function tp(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},Mr===null){if(t===null)throw Error(o(308));Mr=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Mr=Mr.next=n;return i}var B_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},q_=a.unstable_scheduleCallback,H_=a.unstable_NormalPriority,Ce={$$typeof:tt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wh(){return{controller:new B_,data:new Map,refCount:0}}function Ts(t){t.refCount--,t.refCount===0&&q_(H_,function(){t.controller.abort()})}var As=null,Rh=0,to=0,eo=null;function G_(t,n){if(As===null){var i=As=[];Rh=0,to=Df(),eo={status:"pending",value:void 0,then:function(s){i.push(s)}}}return Rh++,n.then(ep,ep),n}function ep(){if(--Rh===0&&As!==null){eo!==null&&(eo.status="fulfilled");var t=As;As=null,to=0,eo=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function F_(t,n){var i=[],s={status:"pending",value:null,reason:null,then:function(h){i.push(h)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var h=0;h<i.length;h++)(0,i[h])(n)},function(h){for(s.status="rejected",s.reason=h,h=0;h<i.length;h++)(0,i[h])(void 0)}),s}var np=K.S;K.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&G_(t,n),np!==null&&np(t,n)};var gi=et(null);function Ch(){var t=gi.current;return t!==null?t:Jt.pooledCache}function uu(t,n){n===null?rt(gi,gi.current):rt(gi,n.pool)}function rp(){var t=Ch();return t===null?null:{parent:Ce._currentValue,pool:t}}var Ss=Error(o(460)),ap=Error(o(474)),cu=Error(o(542)),Oh={then:function(){}};function ip(t){return t=t.status,t==="fulfilled"||t==="rejected"}function hu(){}function op(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(hu,hu),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,lp(t),t;default:if(typeof n.status=="string")n.then(hu,hu);else{if(t=Jt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var h=n;h.status="fulfilled",h.value=s}},function(s){if(n.status==="pending"){var h=n;h.status="rejected",h.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,lp(t),t}throw xs=n,Ss}}var xs=null;function sp(){if(xs===null)throw Error(o(459));var t=xs;return xs=null,t}function lp(t){if(t===Ss||t===cu)throw Error(o(483))}var aa=!1;function Dh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nh(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ia(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function oa(t,n,i){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Gt&2)!==0){var h=s.pending;return h===null?n.next=n:(n.next=h.next,h.next=n),s.pending=n,n=ru(t),Km(t,null,i),n}return nu(t,s,n,i),ru(t)}function ws(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,i|=s,n.lanes=i,ts(t,i)}}function Ih(t,n){var i=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var h=null,f=null;if(i=i.firstBaseUpdate,i!==null){do{var b={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};f===null?h=f=b:f=f.next=b,i=i.next}while(i!==null);f===null?h=f=n:f=f.next=n}else h=f=n;i={baseState:s.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var Mh=!1;function Rs(){if(Mh){var t=eo;if(t!==null)throw t}}function Cs(t,n,i,s){Mh=!1;var h=t.updateQueue;aa=!1;var f=h.firstBaseUpdate,b=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var w=E,q=w.next;w.next=null,b===null?f=q:b.next=q,b=w;var X=t.alternate;X!==null&&(X=X.updateQueue,E=X.lastBaseUpdate,E!==b&&(E===null?X.firstBaseUpdate=q:E.next=q,X.lastBaseUpdate=w))}if(f!==null){var J=h.baseState;b=0,X=q=w=null,E=f;do{var G=E.lane&-536870913,F=G!==E.lane;if(F?(kt&G)===G:(s&G)===G){G!==0&&G===to&&(Mh=!0),X!==null&&(X=X.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Et=t,vt=E;G=n;var Xt=i;switch(vt.tag){case 1:if(Et=vt.payload,typeof Et=="function"){J=Et.call(Xt,J,G);break t}J=Et;break t;case 3:Et.flags=Et.flags&-65537|128;case 0:if(Et=vt.payload,G=typeof Et=="function"?Et.call(Xt,J,G):Et,G==null)break t;J=_({},J,G);break t;case 2:aa=!0}}G=E.callback,G!==null&&(t.flags|=64,F&&(t.flags|=8192),F=h.callbacks,F===null?h.callbacks=[G]:F.push(G))}else F={lane:G,tag:E.tag,payload:E.payload,callback:E.callback,next:null},X===null?(q=X=F,w=J):X=X.next=F,b|=G;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;F=E,E=F.next,F.next=null,h.lastBaseUpdate=F,h.shared.pending=null}}while(!0);X===null&&(w=J),h.baseState=w,h.firstBaseUpdate=q,h.lastBaseUpdate=X,f===null&&(h.shared.lanes=0),ma|=b,t.lanes=b,t.memoizedState=J}}function up(t,n){if(typeof t!="function")throw Error(o(191,t));t.call(n)}function cp(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)up(i[t],n)}var no=et(null),fu=et(0);function hp(t,n){t=Br,rt(fu,t),rt(no,n),Br=t|n.baseLanes}function kh(){rt(fu,Br),rt(no,no.current)}function Vh(){Br=fu.current,st(no),st(fu)}var sa=0,wt=null,Yt=null,ve=null,du=!1,ro=!1,yi=!1,mu=0,Os=0,ao=null,Q_=0;function fe(){throw Error(o(321))}function Ph(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!dn(t[i],n[i]))return!1;return!0}function Uh(t,n,i,s,h,f){return sa=f,wt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,K.H=t===null||t.memoizedState===null?Kp:Xp,yi=!1,f=i(s,h),yi=!1,ro&&(f=dp(n,i,s,h)),fp(t),f}function fp(t){K.H=_u;var n=Yt!==null&&Yt.next!==null;if(sa=0,ve=Yt=wt=null,du=!1,Os=0,ao=null,n)throw Error(o(300));t===null||Pe||(t=t.dependencies,t!==null&&su(t)&&(Pe=!0))}function dp(t,n,i,s){wt=t;var h=0;do{if(ro&&(ao=null),Os=0,ro=!1,25<=h)throw Error(o(301));if(h+=1,ve=Yt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}K.H=W_,f=n(i,s)}while(ro);return f}function Y_(){var t=K.H,n=t.useState()[0];return n=typeof n.then=="function"?Ds(n):n,t=t.useState()[0],(Yt!==null?Yt.memoizedState:null)!==t&&(wt.flags|=1024),n}function zh(){var t=mu!==0;return mu=0,t}function Lh(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function jh(t){if(du){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}du=!1}sa=0,ve=Yt=wt=null,ro=!1,Os=mu=0,ao=null}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?wt.memoizedState=ve=t:ve=ve.next=t,ve}function be(){if(Yt===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var n=ve===null?wt.memoizedState:ve.next;if(n!==null)ve=n,Yt=t;else{if(t===null)throw wt.alternate===null?Error(o(467)):Error(o(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},ve===null?wt.memoizedState=ve=t:ve=ve.next=t}return ve}function Bh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ds(t){var n=Os;return Os+=1,ao===null&&(ao=[]),t=op(ao,t,n),n=wt,(ve===null?n.memoizedState:ve.next)===null&&(n=n.alternate,K.H=n===null||n.memoizedState===null?Kp:Xp),t}function pu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ds(t);if(t.$$typeof===tt)return $e(t)}throw Error(o(438,String(t)))}function qh(t){var n=null,i=wt.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var s=wt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(h){return h.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=Bh(),wt.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),s=0;s<t;s++)i[s]=O;return n.index++,i}function Vr(t,n){return typeof n=="function"?n(t):n}function gu(t){var n=be();return Hh(n,Yt,t)}function Hh(t,n,i){var s=t.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=i;var h=t.baseQueue,f=s.pending;if(f!==null){if(h!==null){var b=h.next;h.next=f.next,f.next=b}n.baseQueue=h=f,s.pending=null}if(f=t.baseState,h===null)t.memoizedState=f;else{n=h.next;var E=b=null,w=null,q=n,X=!1;do{var J=q.lane&-536870913;if(J!==q.lane?(kt&J)===J:(sa&J)===J){var G=q.revertLane;if(G===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),J===to&&(X=!0);else if((sa&G)===G){q=q.next,G===to&&(X=!0);continue}else J={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},w===null?(E=w=J,b=f):w=w.next=J,wt.lanes|=G,ma|=G;J=q.action,yi&&i(f,J),f=q.hasEagerState?q.eagerState:i(f,J)}else G={lane:J,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},w===null?(E=w=G,b=f):w=w.next=G,wt.lanes|=J,ma|=J;q=q.next}while(q!==null&&q!==n);if(w===null?b=f:w.next=E,!dn(f,t.memoizedState)&&(Pe=!0,X&&(i=eo,i!==null)))throw i;t.memoizedState=f,t.baseState=b,t.baseQueue=w,s.lastRenderedState=f}return h===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Gh(t){var n=be(),i=n.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=t;var s=i.dispatch,h=i.pending,f=n.memoizedState;if(h!==null){i.pending=null;var b=h=h.next;do f=t(f,b.action),b=b.next;while(b!==h);dn(f,n.memoizedState)||(Pe=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),i.lastRenderedState=f}return[f,s]}function mp(t,n,i){var s=wt,h=be(),f=Bt;if(f){if(i===void 0)throw Error(o(407));i=i()}else i=n();var b=!dn((Yt||h).memoizedState,i);b&&(h.memoizedState=i,Pe=!0),h=h.queue;var E=yp.bind(null,s,h,t);if(Ns(2048,8,E,[t]),h.getSnapshot!==n||b||ve!==null&&ve.memoizedState.tag&1){if(s.flags|=2048,io(9,yu(),gp.bind(null,s,h,i,n),null),Jt===null)throw Error(o(349));f||(sa&124)!==0||pp(s,n,i)}return i}function pp(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=wt.updateQueue,n===null?(n=Bh(),wt.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function gp(t,n,i,s){n.value=i,n.getSnapshot=s,vp(n)&&bp(t)}function yp(t,n,i){return i(function(){vp(n)&&bp(t)})}function vp(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!dn(t,i)}catch{return!0}}function bp(t){var n=$i(t,2);n!==null&&bn(n,t,2)}function Fh(t){var n=sn();if(typeof t=="function"){var i=t;if(t=i(),yi){hn(!0);try{i()}finally{hn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:t},n}function _p(t,n,i,s){return t.baseState=i,Hh(t,Yt,typeof s=="function"?s:Vr)}function K_(t,n,i,s,h){if(bu(t))throw Error(o(485));if(t=n.action,t!==null){var f={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){f.listeners.push(b)}};K.T!==null?i(!0):f.isTransition=!1,s(f),i=n.pending,i===null?(f.next=n.pending=f,Ep(n,f)):(f.next=i.next,n.pending=i.next=f)}}function Ep(t,n){var i=n.action,s=n.payload,h=t.state;if(n.isTransition){var f=K.T,b={};K.T=b;try{var E=i(h,s),w=K.S;w!==null&&w(b,E),Tp(t,n,E)}catch(q){Qh(t,n,q)}finally{K.T=f}}else try{f=i(h,s),Tp(t,n,f)}catch(q){Qh(t,n,q)}}function Tp(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(s){Ap(t,n,s)},function(s){return Qh(t,n,s)}):Ap(t,n,i)}function Ap(t,n,i){n.status="fulfilled",n.value=i,Sp(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,Ep(t,i)))}function Qh(t,n,i){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=i,Sp(n),n=n.next;while(n!==s)}t.action=null}function Sp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function xp(t,n){return n}function wp(t,n){if(Bt){var i=Jt.formState;if(i!==null){t:{var s=wt;if(Bt){if(ue){e:{for(var h=ue,f=ar;h.nodeType!==8;){if(!f){h=null;break e}if(h=qn(h.nextSibling),h===null){h=null;break e}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){ue=qn(h.nextSibling),s=h.data==="F!";break t}}di(s)}s=!1}s&&(n=i[0])}}return i=sn(),i.memoizedState=i.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xp,lastRenderedState:n},i.queue=s,i=Fp.bind(null,wt,s),s.dispatch=i,s=Fh(!1),f=Zh.bind(null,wt,!1,s.queue),s=sn(),h={state:n,dispatch:null,action:t,pending:null},s.queue=h,i=K_.bind(null,wt,h,f,i),h.dispatch=i,s.memoizedState=t,[n,i,!1]}function Rp(t){var n=be();return Cp(n,Yt,t)}function Cp(t,n,i){if(n=Hh(t,n,xp)[0],t=gu(Vr)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ds(n)}catch(b){throw b===Ss?cu:b}else s=n;n=be();var h=n.queue,f=h.dispatch;return i!==n.memoizedState&&(wt.flags|=2048,io(9,yu(),X_.bind(null,h,i),null)),[s,f,t]}function X_(t,n){t.action=n}function Op(t){var n=be(),i=Yt;if(i!==null)return Cp(n,i,t);be(),n=n.memoizedState,i=be();var s=i.queue.dispatch;return i.memoizedState=t,[n,s,!1]}function io(t,n,i,s){return t={tag:t,create:i,deps:s,inst:n,next:null},n=wt.updateQueue,n===null&&(n=Bh(),wt.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(s=i.next,i.next=t,t.next=s,n.lastEffect=t),t}function yu(){return{destroy:void 0,resource:void 0}}function Dp(){return be().memoizedState}function vu(t,n,i,s){var h=sn();s=s===void 0?null:s,wt.flags|=t,h.memoizedState=io(1|n,yu(),i,s)}function Ns(t,n,i,s){var h=be();s=s===void 0?null:s;var f=h.memoizedState.inst;Yt!==null&&s!==null&&Ph(s,Yt.memoizedState.deps)?h.memoizedState=io(n,f,i,s):(wt.flags|=t,h.memoizedState=io(1|n,f,i,s))}function Np(t,n){vu(8390656,8,t,n)}function Ip(t,n){Ns(2048,8,t,n)}function Mp(t,n){return Ns(4,2,t,n)}function kp(t,n){return Ns(4,4,t,n)}function Vp(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Pp(t,n,i){i=i!=null?i.concat([t]):null,Ns(4,4,Vp.bind(null,n,t),i)}function Yh(){}function Up(t,n){var i=be();n=n===void 0?null:n;var s=i.memoizedState;return n!==null&&Ph(n,s[1])?s[0]:(i.memoizedState=[t,n],t)}function zp(t,n){var i=be();n=n===void 0?null:n;var s=i.memoizedState;if(n!==null&&Ph(n,s[1]))return s[0];if(s=t(),yi){hn(!0);try{t()}finally{hn(!1)}}return i.memoizedState=[s,n],s}function Kh(t,n,i){return i===void 0||(sa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=i,t=Bg(),wt.lanes|=t,ma|=t,i)}function Lp(t,n,i,s){return dn(i,n)?i:no.current!==null?(t=Kh(t,i,s),dn(t,n)||(Pe=!0),t):(sa&42)===0?(Pe=!0,t.memoizedState=i):(t=Bg(),wt.lanes|=t,ma|=t,n)}function jp(t,n,i,s,h){var f=ot.p;ot.p=f!==0&&8>f?f:8;var b=K.T,E={};K.T=E,Zh(t,!1,n,i);try{var w=h(),q=K.S;if(q!==null&&q(E,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var X=F_(w,s);Is(t,n,X,vn(t))}else Is(t,n,s,vn(t))}catch(J){Is(t,n,{then:function(){},status:"rejected",reason:J},vn())}finally{ot.p=f,K.T=b}}function $_(){}function Xh(t,n,i,s){if(t.tag!==5)throw Error(o(476));var h=Bp(t).queue;jp(t,h,n,dt,i===null?$_:function(){return qp(t),i(s)})}function Bp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:dt},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function qp(t){var n=Bp(t).next.queue;Is(t,n,{},vn())}function $h(){return $e($s)}function Hp(){return be().memoizedState}function Gp(){return be().memoizedState}function Z_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=vn();t=ia(i);var s=oa(n,t,i);s!==null&&(bn(s,n,i),ws(s,n,i)),n={cache:wh()},t.payload=n;return}n=n.return}}function J_(t,n,i){var s=vn();i={lane:s,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null},bu(t)?Qp(n,i):(i=gh(t,n,i,s),i!==null&&(bn(i,t,s),Yp(i,n,s)))}function Fp(t,n,i){var s=vn();Is(t,n,i,s)}function Is(t,n,i,s){var h={lane:s,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null};if(bu(t))Qp(n,h);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var b=n.lastRenderedState,E=f(b,i);if(h.hasEagerState=!0,h.eagerState=E,dn(E,b))return nu(t,n,h,0),Jt===null&&eu(),!1}catch{}finally{}if(i=gh(t,n,h,s),i!==null)return bn(i,t,s),Yp(i,n,s),!0}return!1}function Zh(t,n,i,s){if(s={lane:2,revertLane:Df(),action:s,hasEagerState:!1,eagerState:null,next:null},bu(t)){if(n)throw Error(o(479))}else n=gh(t,i,s,2),n!==null&&bn(n,t,2)}function bu(t){var n=t.alternate;return t===wt||n!==null&&n===wt}function Qp(t,n){ro=du=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function Yp(t,n,i){if((i&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,i|=s,n.lanes=i,ts(t,i)}}var _u={readContext:$e,use:pu,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useLayoutEffect:fe,useInsertionEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useSyncExternalStore:fe,useId:fe,useHostTransitionStatus:fe,useFormState:fe,useActionState:fe,useOptimistic:fe,useMemoCache:fe,useCacheRefresh:fe},Kp={readContext:$e,use:pu,useCallback:function(t,n){return sn().memoizedState=[t,n===void 0?null:n],t},useContext:$e,useEffect:Np,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,vu(4194308,4,Vp.bind(null,n,t),i)},useLayoutEffect:function(t,n){return vu(4194308,4,t,n)},useInsertionEffect:function(t,n){vu(4,2,t,n)},useMemo:function(t,n){var i=sn();n=n===void 0?null:n;var s=t();if(yi){hn(!0);try{t()}finally{hn(!1)}}return i.memoizedState=[s,n],s},useReducer:function(t,n,i){var s=sn();if(i!==void 0){var h=i(n);if(yi){hn(!0);try{i(n)}finally{hn(!1)}}}else h=n;return s.memoizedState=s.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},s.queue=t,t=t.dispatch=J_.bind(null,wt,t),[s.memoizedState,t]},useRef:function(t){var n=sn();return t={current:t},n.memoizedState=t},useState:function(t){t=Fh(t);var n=t.queue,i=Fp.bind(null,wt,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:Yh,useDeferredValue:function(t,n){var i=sn();return Kh(i,t,n)},useTransition:function(){var t=Fh(!1);return t=jp.bind(null,wt,t.queue,!0,!1),sn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var s=wt,h=sn();if(Bt){if(i===void 0)throw Error(o(407));i=i()}else{if(i=n(),Jt===null)throw Error(o(349));(kt&124)!==0||pp(s,n,i)}h.memoizedState=i;var f={value:i,getSnapshot:n};return h.queue=f,Np(yp.bind(null,s,f,t),[t]),s.flags|=2048,io(9,yu(),gp.bind(null,s,f,i,n),null),i},useId:function(){var t=sn(),n=Jt.identifierPrefix;if(Bt){var i=Ir,s=Nr;i=(s&~(1<<32-Xe(s)-1)).toString(32)+i,n="«"+n+"R"+i,i=mu++,0<i&&(n+="H"+i.toString(32)),n+="»"}else i=Q_++,n="«"+n+"r"+i.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:$h,useFormState:wp,useActionState:wp,useOptimistic:function(t){var n=sn();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=Zh.bind(null,wt,!0,i),i.dispatch=n,[t,n]},useMemoCache:qh,useCacheRefresh:function(){return sn().memoizedState=Z_.bind(null,wt)}},Xp={readContext:$e,use:pu,useCallback:Up,useContext:$e,useEffect:Ip,useImperativeHandle:Pp,useInsertionEffect:Mp,useLayoutEffect:kp,useMemo:zp,useReducer:gu,useRef:Dp,useState:function(){return gu(Vr)},useDebugValue:Yh,useDeferredValue:function(t,n){var i=be();return Lp(i,Yt.memoizedState,t,n)},useTransition:function(){var t=gu(Vr)[0],n=be().memoizedState;return[typeof t=="boolean"?t:Ds(t),n]},useSyncExternalStore:mp,useId:Hp,useHostTransitionStatus:$h,useFormState:Rp,useActionState:Rp,useOptimistic:function(t,n){var i=be();return _p(i,Yt,t,n)},useMemoCache:qh,useCacheRefresh:Gp},W_={readContext:$e,use:pu,useCallback:Up,useContext:$e,useEffect:Ip,useImperativeHandle:Pp,useInsertionEffect:Mp,useLayoutEffect:kp,useMemo:zp,useReducer:Gh,useRef:Dp,useState:function(){return Gh(Vr)},useDebugValue:Yh,useDeferredValue:function(t,n){var i=be();return Yt===null?Kh(i,t,n):Lp(i,Yt.memoizedState,t,n)},useTransition:function(){var t=Gh(Vr)[0],n=be().memoizedState;return[typeof t=="boolean"?t:Ds(t),n]},useSyncExternalStore:mp,useId:Hp,useHostTransitionStatus:$h,useFormState:Op,useActionState:Op,useOptimistic:function(t,n){var i=be();return Yt!==null?_p(i,Yt,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:qh,useCacheRefresh:Gp},oo=null,Ms=0;function Eu(t){var n=Ms;return Ms+=1,oo===null&&(oo=[]),op(oo,t,n)}function ks(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Tu(t,n){throw n.$$typeof===S?Error(o(525)):(t=Object.prototype.toString.call(n),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function $p(t){var n=t._init;return n(t._payload)}function Zp(t){function n(z,k){if(t){var B=z.deletions;B===null?(z.deletions=[k],z.flags|=16):B.push(k)}}function i(z,k){if(!t)return null;for(;k!==null;)n(z,k),k=k.sibling;return null}function s(z){for(var k=new Map;z!==null;)z.key!==null?k.set(z.key,z):k.set(z.index,z),z=z.sibling;return k}function h(z,k){return z=Dr(z,k),z.index=0,z.sibling=null,z}function f(z,k,B){return z.index=B,t?(B=z.alternate,B!==null?(B=B.index,B<k?(z.flags|=67108866,k):B):(z.flags|=67108866,k)):(z.flags|=1048576,k)}function b(z){return t&&z.alternate===null&&(z.flags|=67108866),z}function E(z,k,B,$){return k===null||k.tag!==6?(k=vh(B,z.mode,$),k.return=z,k):(k=h(k,B),k.return=z,k)}function w(z,k,B,$){var ct=B.type;return ct===V?X(z,k,B.props.children,$,B.key):k!==null&&(k.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===A&&$p(ct)===k.type)?(k=h(k,B.props),ks(k,B),k.return=z,k):(k=au(B.type,B.key,B.props,null,z.mode,$),ks(k,B),k.return=z,k)}function q(z,k,B,$){return k===null||k.tag!==4||k.stateNode.containerInfo!==B.containerInfo||k.stateNode.implementation!==B.implementation?(k=bh(B,z.mode,$),k.return=z,k):(k=h(k,B.children||[]),k.return=z,k)}function X(z,k,B,$,ct){return k===null||k.tag!==7?(k=ui(B,z.mode,$,ct),k.return=z,k):(k=h(k,B),k.return=z,k)}function J(z,k,B){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=vh(""+k,z.mode,B),k.return=z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case C:return B=au(k.type,k.key,k.props,null,z.mode,B),ks(B,k),B.return=z,B;case U:return k=bh(k,z.mode,B),k.return=z,k;case A:var $=k._init;return k=$(k._payload),J(z,k,B)}if(ae(k)||P(k))return k=ui(k,z.mode,B,null),k.return=z,k;if(typeof k.then=="function")return J(z,Eu(k),B);if(k.$$typeof===tt)return J(z,lu(z,k),B);Tu(z,k)}return null}function G(z,k,B,$){var ct=k!==null?k.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return ct!==null?null:E(z,k,""+B,$);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case C:return B.key===ct?w(z,k,B,$):null;case U:return B.key===ct?q(z,k,B,$):null;case A:return ct=B._init,B=ct(B._payload),G(z,k,B,$)}if(ae(B)||P(B))return ct!==null?null:X(z,k,B,$,null);if(typeof B.then=="function")return G(z,k,Eu(B),$);if(B.$$typeof===tt)return G(z,k,lu(z,B),$);Tu(z,B)}return null}function F(z,k,B,$,ct){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return z=z.get(B)||null,E(k,z,""+$,ct);if(typeof $=="object"&&$!==null){switch($.$$typeof){case C:return z=z.get($.key===null?B:$.key)||null,w(k,z,$,ct);case U:return z=z.get($.key===null?B:$.key)||null,q(k,z,$,ct);case A:var Ct=$._init;return $=Ct($._payload),F(z,k,B,$,ct)}if(ae($)||P($))return z=z.get(B)||null,X(k,z,$,ct,null);if(typeof $.then=="function")return F(z,k,B,Eu($),ct);if($.$$typeof===tt)return F(z,k,B,lu(k,$),ct);Tu(k,$)}return null}function Et(z,k,B,$){for(var ct=null,Ct=null,mt=k,bt=k=0,ze=null;mt!==null&&bt<B.length;bt++){mt.index>bt?(ze=mt,mt=null):ze=mt.sibling;var Lt=G(z,mt,B[bt],$);if(Lt===null){mt===null&&(mt=ze);break}t&&mt&&Lt.alternate===null&&n(z,mt),k=f(Lt,k,bt),Ct===null?ct=Lt:Ct.sibling=Lt,Ct=Lt,mt=ze}if(bt===B.length)return i(z,mt),Bt&&hi(z,bt),ct;if(mt===null){for(;bt<B.length;bt++)mt=J(z,B[bt],$),mt!==null&&(k=f(mt,k,bt),Ct===null?ct=mt:Ct.sibling=mt,Ct=mt);return Bt&&hi(z,bt),ct}for(mt=s(mt);bt<B.length;bt++)ze=F(mt,z,bt,B[bt],$),ze!==null&&(t&&ze.alternate!==null&&mt.delete(ze.key===null?bt:ze.key),k=f(ze,k,bt),Ct===null?ct=ze:Ct.sibling=ze,Ct=ze);return t&&mt.forEach(function(Aa){return n(z,Aa)}),Bt&&hi(z,bt),ct}function vt(z,k,B,$){if(B==null)throw Error(o(151));for(var ct=null,Ct=null,mt=k,bt=k=0,ze=null,Lt=B.next();mt!==null&&!Lt.done;bt++,Lt=B.next()){mt.index>bt?(ze=mt,mt=null):ze=mt.sibling;var Aa=G(z,mt,Lt.value,$);if(Aa===null){mt===null&&(mt=ze);break}t&&mt&&Aa.alternate===null&&n(z,mt),k=f(Aa,k,bt),Ct===null?ct=Aa:Ct.sibling=Aa,Ct=Aa,mt=ze}if(Lt.done)return i(z,mt),Bt&&hi(z,bt),ct;if(mt===null){for(;!Lt.done;bt++,Lt=B.next())Lt=J(z,Lt.value,$),Lt!==null&&(k=f(Lt,k,bt),Ct===null?ct=Lt:Ct.sibling=Lt,Ct=Lt);return Bt&&hi(z,bt),ct}for(mt=s(mt);!Lt.done;bt++,Lt=B.next())Lt=F(mt,z,bt,Lt.value,$),Lt!==null&&(t&&Lt.alternate!==null&&mt.delete(Lt.key===null?bt:Lt.key),k=f(Lt,k,bt),Ct===null?ct=Lt:Ct.sibling=Lt,Ct=Lt);return t&&mt.forEach(function(tE){return n(z,tE)}),Bt&&hi(z,bt),ct}function Xt(z,k,B,$){if(typeof B=="object"&&B!==null&&B.type===V&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case C:t:{for(var ct=B.key;k!==null;){if(k.key===ct){if(ct=B.type,ct===V){if(k.tag===7){i(z,k.sibling),$=h(k,B.props.children),$.return=z,z=$;break t}}else if(k.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===A&&$p(ct)===k.type){i(z,k.sibling),$=h(k,B.props),ks($,B),$.return=z,z=$;break t}i(z,k);break}else n(z,k);k=k.sibling}B.type===V?($=ui(B.props.children,z.mode,$,B.key),$.return=z,z=$):($=au(B.type,B.key,B.props,null,z.mode,$),ks($,B),$.return=z,z=$)}return b(z);case U:t:{for(ct=B.key;k!==null;){if(k.key===ct)if(k.tag===4&&k.stateNode.containerInfo===B.containerInfo&&k.stateNode.implementation===B.implementation){i(z,k.sibling),$=h(k,B.children||[]),$.return=z,z=$;break t}else{i(z,k);break}else n(z,k);k=k.sibling}$=bh(B,z.mode,$),$.return=z,z=$}return b(z);case A:return ct=B._init,B=ct(B._payload),Xt(z,k,B,$)}if(ae(B))return Et(z,k,B,$);if(P(B)){if(ct=P(B),typeof ct!="function")throw Error(o(150));return B=ct.call(B),vt(z,k,B,$)}if(typeof B.then=="function")return Xt(z,k,Eu(B),$);if(B.$$typeof===tt)return Xt(z,k,lu(z,B),$);Tu(z,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,k!==null&&k.tag===6?(i(z,k.sibling),$=h(k,B),$.return=z,z=$):(i(z,k),$=vh(B,z.mode,$),$.return=z,z=$),b(z)):i(z,k)}return function(z,k,B,$){try{Ms=0;var ct=Xt(z,k,B,$);return oo=null,ct}catch(mt){if(mt===Ss||mt===cu)throw mt;var Ct=mn(29,mt,null,z.mode);return Ct.lanes=$,Ct.return=z,Ct}finally{}}}var so=Zp(!0),Jp=Zp(!1),Mn=et(null),ir=null;function la(t){var n=t.alternate;rt(Oe,Oe.current&1),rt(Mn,t),ir===null&&(n===null||no.current!==null||n.memoizedState!==null)&&(ir=t)}function Wp(t){if(t.tag===22){if(rt(Oe,Oe.current),rt(Mn,t),ir===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(ir=t)}}else ua()}function ua(){rt(Oe,Oe.current),rt(Mn,Mn.current)}function Pr(t){st(Mn),ir===t&&(ir=null),st(Oe)}var Oe=et(0);function Au(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||qf(i)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Jh(t,n,i,s){n=t.memoizedState,i=i(s,n),i=i==null?n:_({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Wh={enqueueSetState:function(t,n,i){t=t._reactInternals;var s=vn(),h=ia(s);h.payload=n,i!=null&&(h.callback=i),n=oa(t,h,s),n!==null&&(bn(n,t,s),ws(n,t,s))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var s=vn(),h=ia(s);h.tag=1,h.payload=n,i!=null&&(h.callback=i),n=oa(t,h,s),n!==null&&(bn(n,t,s),ws(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=vn(),s=ia(i);s.tag=2,n!=null&&(s.callback=n),n=oa(t,s,i),n!==null&&(bn(n,t,i),ws(n,t,i))}};function tg(t,n,i,s,h,f,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,b):n.prototype&&n.prototype.isPureReactComponent?!gs(i,s)||!gs(h,f):!0}function eg(t,n,i,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,s),n.state!==t&&Wh.enqueueReplaceState(n,n.state,null)}function vi(t,n){var i=n;if("ref"in n){i={};for(var s in n)s!=="ref"&&(i[s]=n[s])}if(t=t.defaultProps){i===n&&(i=_({},i));for(var h in t)i[h]===void 0&&(i[h]=t[h])}return i}var Su=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function ng(t){Su(t)}function rg(t){console.error(t)}function ag(t){Su(t)}function xu(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function ig(t,n,i){try{var s=t.onCaughtError;s(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function tf(t,n,i){return i=ia(i),i.tag=3,i.payload={element:null},i.callback=function(){xu(t,n)},i}function og(t){return t=ia(t),t.tag=3,t}function sg(t,n,i,s){var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;t.payload=function(){return h(f)},t.callback=function(){ig(n,i,s)}}var b=i.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){ig(n,i,s),typeof h!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function t1(t,n,i,s,h){if(i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=i.alternate,n!==null&&Es(n,i,h,!0),i=Mn.current,i!==null){switch(i.tag){case 13:return ir===null?xf():i.alternate===null&&ce===0&&(ce=3),i.flags&=-257,i.flags|=65536,i.lanes=h,s===Oh?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([s]):n.add(s),Rf(t,s,h)),!1;case 22:return i.flags|=65536,s===Oh?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([s]):i.add(s)),Rf(t,s,h)),!1}throw Error(o(435,i.tag))}return Rf(t,s,h),xf(),!1}if(Bt)return n=Mn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=h,s!==Th&&(t=Error(o(422),{cause:s}),_s(On(t,i)))):(s!==Th&&(n=Error(o(423),{cause:s}),_s(On(n,i))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,s=On(s,i),h=tf(t.stateNode,s,h),Ih(t,h),ce!==4&&(ce=2)),!1;var f=Error(o(520),{cause:s});if(f=On(f,i),Bs===null?Bs=[f]:Bs.push(f),ce!==4&&(ce=2),n===null)return!0;s=On(s,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=h&-h,i.lanes|=t,t=tf(i.stateNode,s,t),Ih(i,t),!1;case 1:if(n=i.type,f=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(pa===null||!pa.has(f))))return i.flags|=65536,h&=-h,i.lanes|=h,h=og(h),sg(h,t,i,s),Ih(i,h),!1}i=i.return}while(i!==null);return!1}var lg=Error(o(461)),Pe=!1;function Ge(t,n,i,s){n.child=t===null?Jp(n,null,i,s):so(n,t.child,i,s)}function ug(t,n,i,s,h){i=i.render;var f=n.ref;if("ref"in s){var b={};for(var E in s)E!=="ref"&&(b[E]=s[E])}else b=s;return pi(n),s=Uh(t,n,i,b,f,h),E=zh(),t!==null&&!Pe?(Lh(t,n,h),Ur(t,n,h)):(Bt&&E&&_h(n),n.flags|=1,Ge(t,n,s,h),n.child)}function cg(t,n,i,s,h){if(t===null){var f=i.type;return typeof f=="function"&&!yh(f)&&f.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=f,hg(t,n,f,s,h)):(t=au(i.type,null,s,n,n.mode,h),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!uf(t,h)){var b=f.memoizedProps;if(i=i.compare,i=i!==null?i:gs,i(b,s)&&t.ref===n.ref)return Ur(t,n,h)}return n.flags|=1,t=Dr(f,s),t.ref=n.ref,t.return=n,n.child=t}function hg(t,n,i,s,h){if(t!==null){var f=t.memoizedProps;if(gs(f,s)&&t.ref===n.ref)if(Pe=!1,n.pendingProps=s=f,uf(t,h))(t.flags&131072)!==0&&(Pe=!0);else return n.lanes=t.lanes,Ur(t,n,h)}return ef(t,n,i,s,h)}function fg(t,n,i){var s=n.pendingProps,h=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|i:i,t!==null){for(h=n.child=t.child,f=0;h!==null;)f=f|h.lanes|h.childLanes,h=h.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return dg(t,n,s,i)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&uu(n,f!==null?f.cachePool:null),f!==null?hp(n,f):kh(),Wp(n);else return n.lanes=n.childLanes=536870912,dg(t,n,f!==null?f.baseLanes|i:i,i)}else f!==null?(uu(n,f.cachePool),hp(n,f),ua(),n.memoizedState=null):(t!==null&&uu(n,null),kh(),ua());return Ge(t,n,h,i),n.child}function dg(t,n,i,s){var h=Ch();return h=h===null?null:{parent:Ce._currentValue,pool:h},n.memoizedState={baseLanes:i,cachePool:h},t!==null&&uu(n,null),kh(),Wp(n),t!==null&&Es(t,n,s,!0),null}function wu(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(o(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function ef(t,n,i,s,h){return pi(n),i=Uh(t,n,i,s,void 0,h),s=zh(),t!==null&&!Pe?(Lh(t,n,h),Ur(t,n,h)):(Bt&&s&&_h(n),n.flags|=1,Ge(t,n,i,h),n.child)}function mg(t,n,i,s,h,f){return pi(n),n.updateQueue=null,i=dp(n,s,i,h),fp(t),s=zh(),t!==null&&!Pe?(Lh(t,n,f),Ur(t,n,f)):(Bt&&s&&_h(n),n.flags|=1,Ge(t,n,i,f),n.child)}function pg(t,n,i,s,h){if(pi(n),n.stateNode===null){var f=Zi,b=i.contextType;typeof b=="object"&&b!==null&&(f=$e(b)),f=new i(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Wh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Dh(n),b=i.contextType,f.context=typeof b=="object"&&b!==null?$e(b):Zi,f.state=n.memoizedState,b=i.getDerivedStateFromProps,typeof b=="function"&&(Jh(n,i,b,s),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(b=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),b!==f.state&&Wh.enqueueReplaceState(f,f.state,null),Cs(n,s,f,h),Rs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,w=vi(i,E);f.props=w;var q=f.context,X=i.contextType;b=Zi,typeof X=="object"&&X!==null&&(b=$e(X));var J=i.getDerivedStateFromProps;X=typeof J=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,X||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||q!==b)&&eg(n,f,s,b),aa=!1;var G=n.memoizedState;f.state=G,Cs(n,s,f,h),Rs(),q=n.memoizedState,E||G!==q||aa?(typeof J=="function"&&(Jh(n,i,J,s),q=n.memoizedState),(w=aa||tg(n,i,w,s,G,q,b))?(X||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=q),f.props=s,f.state=q,f.context=b,s=w):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Nh(t,n),b=n.memoizedProps,X=vi(i,b),f.props=X,J=n.pendingProps,G=f.context,q=i.contextType,w=Zi,typeof q=="object"&&q!==null&&(w=$e(q)),E=i.getDerivedStateFromProps,(q=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b!==J||G!==w)&&eg(n,f,s,w),aa=!1,G=n.memoizedState,f.state=G,Cs(n,s,f,h),Rs();var F=n.memoizedState;b!==J||G!==F||aa||t!==null&&t.dependencies!==null&&su(t.dependencies)?(typeof E=="function"&&(Jh(n,i,E,s),F=n.memoizedState),(X=aa||tg(n,i,X,s,G,F,w)||t!==null&&t.dependencies!==null&&su(t.dependencies))?(q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,F,w),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,F,w)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||b===t.memoizedProps&&G===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&G===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=F),f.props=s,f.state=F,f.context=w,s=X):(typeof f.componentDidUpdate!="function"||b===t.memoizedProps&&G===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&G===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,wu(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,i=s&&typeof i.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=so(n,t.child,null,h),n.child=so(n,null,i,h)):Ge(t,n,i,h),n.memoizedState=f.state,t=n.child):t=Ur(t,n,h),t}function gg(t,n,i,s){return bs(),n.flags|=256,Ge(t,n,i,s),n.child}var nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rf(t){return{baseLanes:t,cachePool:rp()}}function af(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=kn),t}function yg(t,n,i){var s=n.pendingProps,h=!1,f=(n.flags&128)!==0,b;if((b=f)||(b=t!==null&&t.memoizedState===null?!1:(Oe.current&2)!==0),b&&(h=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,t===null){if(Bt){if(h?la(n):ua(),Bt){var E=ue,w;if(w=E){t:{for(w=E,E=ar;w.nodeType!==8;){if(!E){E=null;break t}if(w=qn(w.nextSibling),w===null){E=null;break t}}E=w}E!==null?(n.memoizedState={dehydrated:E,treeContext:ci!==null?{id:Nr,overflow:Ir}:null,retryLane:536870912,hydrationErrors:null},w=mn(18,null,null,0),w.stateNode=E,w.return=n,n.child=w,on=n,ue=null,w=!0):w=!1}w||di(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return qf(E)?n.lanes=32:n.lanes=536870912,null;Pr(n)}return E=s.children,s=s.fallback,h?(ua(),h=n.mode,E=Ru({mode:"hidden",children:E},h),s=ui(s,h,i,null),E.return=n,s.return=n,E.sibling=s,n.child=E,h=n.child,h.memoizedState=rf(i),h.childLanes=af(t,b,i),n.memoizedState=nf,s):(la(n),of(n,E))}if(w=t.memoizedState,w!==null&&(E=w.dehydrated,E!==null)){if(f)n.flags&256?(la(n),n.flags&=-257,n=sf(t,n,i)):n.memoizedState!==null?(ua(),n.child=t.child,n.flags|=128,n=null):(ua(),h=s.fallback,E=n.mode,s=Ru({mode:"visible",children:s.children},E),h=ui(h,E,i,null),h.flags|=2,s.return=n,h.return=n,s.sibling=h,n.child=s,so(n,t.child,null,i),s=n.child,s.memoizedState=rf(i),s.childLanes=af(t,b,i),n.memoizedState=nf,n=h);else if(la(n),qf(E)){if(b=E.nextSibling&&E.nextSibling.dataset,b)var q=b.dgst;b=q,s=Error(o(419)),s.stack="",s.digest=b,_s({value:s,source:null,stack:null}),n=sf(t,n,i)}else if(Pe||Es(t,n,i,!1),b=(i&t.childLanes)!==0,Pe||b){if(b=Jt,b!==null&&(s=i&-i,s=(s&42)!==0?1:$r(s),s=(s&(b.suspendedLanes|i))!==0?0:s,s!==0&&s!==w.retryLane))throw w.retryLane=s,$i(t,s),bn(b,t,s),lg;E.data==="$?"||xf(),n=sf(t,n,i)}else E.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=w.treeContext,ue=qn(E.nextSibling),on=n,Bt=!0,fi=null,ar=!1,t!==null&&(Nn[In++]=Nr,Nn[In++]=Ir,Nn[In++]=ci,Nr=t.id,Ir=t.overflow,ci=n),n=of(n,s.children),n.flags|=4096);return n}return h?(ua(),h=s.fallback,E=n.mode,w=t.child,q=w.sibling,s=Dr(w,{mode:"hidden",children:s.children}),s.subtreeFlags=w.subtreeFlags&65011712,q!==null?h=Dr(q,h):(h=ui(h,E,i,null),h.flags|=2),h.return=n,s.return=n,s.sibling=h,n.child=s,s=h,h=n.child,E=t.child.memoizedState,E===null?E=rf(i):(w=E.cachePool,w!==null?(q=Ce._currentValue,w=w.parent!==q?{parent:q,pool:q}:w):w=rp(),E={baseLanes:E.baseLanes|i,cachePool:w}),h.memoizedState=E,h.childLanes=af(t,b,i),n.memoizedState=nf,s):(la(n),i=t.child,t=i.sibling,i=Dr(i,{mode:"visible",children:s.children}),i.return=n,i.sibling=null,t!==null&&(b=n.deletions,b===null?(n.deletions=[t],n.flags|=16):b.push(t)),n.child=i,n.memoizedState=null,i)}function of(t,n){return n=Ru({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ru(t,n){return t=mn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function sf(t,n,i){return so(n,t.child,null,i),t=of(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function vg(t,n,i){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Sh(t.return,n,i)}function lf(t,n,i,s,h){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:h}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=i,f.tailMode=h)}function bg(t,n,i){var s=n.pendingProps,h=s.revealOrder,f=s.tail;if(Ge(t,n,s.children,i),s=Oe.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vg(t,i,n);else if(t.tag===19)vg(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(rt(Oe,s),h){case"forwards":for(i=n.child,h=null;i!==null;)t=i.alternate,t!==null&&Au(t)===null&&(h=i),i=i.sibling;i=h,i===null?(h=n.child,n.child=null):(h=i.sibling,i.sibling=null),lf(n,!1,h,i,f);break;case"backwards":for(i=null,h=n.child,n.child=null;h!==null;){if(t=h.alternate,t!==null&&Au(t)===null){n.child=h;break}t=h.sibling,h.sibling=i,i=h,h=t}lf(n,!0,i,null,f);break;case"together":lf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ur(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),ma|=n.lanes,(i&n.childLanes)===0)if(t!==null){if(Es(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(o(153));if(n.child!==null){for(t=n.child,i=Dr(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=Dr(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function uf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&su(t)))}function e1(t,n,i){switch(n.tag){case 3:Zt(n,n.stateNode.containerInfo),ra(n,Ce,t.memoizedState.cache),bs();break;case 27:case 5:Xr(n);break;case 4:Zt(n,n.stateNode.containerInfo);break;case 10:ra(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(la(n),n.flags|=128,null):(i&n.child.childLanes)!==0?yg(t,n,i):(la(n),t=Ur(t,n,i),t!==null?t.sibling:null);la(n);break;case 19:var h=(t.flags&128)!==0;if(s=(i&n.childLanes)!==0,s||(Es(t,n,i,!1),s=(i&n.childLanes)!==0),h){if(s)return bg(t,n,i);n.flags|=128}if(h=n.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),rt(Oe,Oe.current),s)break;return null;case 22:case 23:return n.lanes=0,fg(t,n,i);case 24:ra(n,Ce,t.memoizedState.cache)}return Ur(t,n,i)}function _g(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)Pe=!0;else{if(!uf(t,i)&&(n.flags&128)===0)return Pe=!1,e1(t,n,i);Pe=(t.flags&131072)!==0}else Pe=!1,Bt&&(n.flags&1048576)!==0&&$m(n,ou,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,h=s._init;if(s=h(s._payload),n.type=s,typeof s=="function")yh(s)?(t=vi(s,t),n.tag=1,n=pg(null,n,s,t,i)):(n.tag=0,n=ef(null,n,s,t,i));else{if(s!=null){if(h=s.$$typeof,h===ft){n.tag=11,n=ug(null,n,s,t,i);break t}else if(h===N){n.tag=14,n=cg(null,n,s,t,i);break t}}throw n=Se(s)||s,Error(o(306,n,""))}}return n;case 0:return ef(t,n,n.type,n.pendingProps,i);case 1:return s=n.type,h=vi(s,n.pendingProps),pg(t,n,s,h,i);case 3:t:{if(Zt(n,n.stateNode.containerInfo),t===null)throw Error(o(387));s=n.pendingProps;var f=n.memoizedState;h=f.element,Nh(t,n),Cs(n,s,null,i);var b=n.memoizedState;if(s=b.cache,ra(n,Ce,s),s!==f.cache&&xh(n,[Ce],i,!0),Rs(),s=b.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=gg(t,n,s,i);break t}else if(s!==h){h=On(Error(o(424)),n),_s(h),n=gg(t,n,s,i);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ue=qn(t.firstChild),on=n,Bt=!0,fi=null,ar=!0,i=Jp(n,null,s,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(bs(),s===h){n=Ur(t,n,i);break t}Ge(t,n,s,i)}n=n.child}return n;case 26:return wu(t,n),t===null?(i=Sy(n.type,null,n.pendingProps,null))?n.memoizedState=i:Bt||(i=n.type,t=n.pendingProps,s=Bu(Tt.current).createElement(i),s[xe]=n,s[ge]=t,Qe(s,i,t),he(s),n.stateNode=s):n.memoizedState=Sy(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Xr(n),t===null&&Bt&&(s=n.stateNode=Ey(n.type,n.pendingProps,Tt.current),on=n,ar=!0,h=ue,va(n.type)?(Hf=h,ue=qn(s.firstChild)):ue=h),Ge(t,n,n.pendingProps.children,i),wu(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Bt&&((h=s=ue)&&(s=O1(s,n.type,n.pendingProps,ar),s!==null?(n.stateNode=s,on=n,ue=qn(s.firstChild),ar=!1,h=!0):h=!1),h||di(n)),Xr(n),h=n.type,f=n.pendingProps,b=t!==null?t.memoizedProps:null,s=f.children,Lf(h,f)?s=null:b!==null&&Lf(h,b)&&(n.flags|=32),n.memoizedState!==null&&(h=Uh(t,n,Y_,null,null,i),$s._currentValue=h),wu(t,n),Ge(t,n,s,i),n.child;case 6:return t===null&&Bt&&((t=i=ue)&&(i=D1(i,n.pendingProps,ar),i!==null?(n.stateNode=i,on=n,ue=null,t=!0):t=!1),t||di(n)),null;case 13:return yg(t,n,i);case 4:return Zt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=so(n,null,s,i):Ge(t,n,s,i),n.child;case 11:return ug(t,n,n.type,n.pendingProps,i);case 7:return Ge(t,n,n.pendingProps,i),n.child;case 8:return Ge(t,n,n.pendingProps.children,i),n.child;case 12:return Ge(t,n,n.pendingProps.children,i),n.child;case 10:return s=n.pendingProps,ra(n,n.type,s.value),Ge(t,n,s.children,i),n.child;case 9:return h=n.type._context,s=n.pendingProps.children,pi(n),h=$e(h),s=s(h),n.flags|=1,Ge(t,n,s,i),n.child;case 14:return cg(t,n,n.type,n.pendingProps,i);case 15:return hg(t,n,n.type,n.pendingProps,i);case 19:return bg(t,n,i);case 31:return s=n.pendingProps,i=n.mode,s={mode:s.mode,children:s.children},t===null?(i=Ru(s,i),i.ref=n.ref,n.child=i,i.return=n,n=i):(i=Dr(t.child,s),i.ref=n.ref,n.child=i,i.return=n,n=i),n;case 22:return fg(t,n,i);case 24:return pi(n),s=$e(Ce),t===null?(h=Ch(),h===null&&(h=Jt,f=wh(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=i),h=f),n.memoizedState={parent:s,cache:h},Dh(n),ra(n,Ce,h)):((t.lanes&i)!==0&&(Nh(t,n),Cs(n,null,null,i),Rs()),h=t.memoizedState,f=n.memoizedState,h.parent!==s?(h={parent:s,cache:s},n.memoizedState=h,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=h),ra(n,Ce,s)):(s=f.cache,ra(n,Ce,s),s!==h.cache&&xh(n,[Ce],i,!0))),Ge(t,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(o(156,n.tag))}function zr(t){t.flags|=4}function Eg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Oy(n)){if(n=Mn.current,n!==null&&((kt&4194048)===kt?ir!==null:(kt&62914560)!==kt&&(kt&536870912)===0||n!==ir))throw xs=Oh,ap;t.flags|=8192}}function Cu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Jo():536870912,t.lanes|=n,ho|=n)}function Vs(t,n){if(!Bt)switch(t.tailMode){case"hidden":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function ie(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,s=0;if(n)for(var h=t.child;h!==null;)i|=h.lanes|h.childLanes,s|=h.subtreeFlags&65011712,s|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)i|=h.lanes|h.childLanes,s|=h.subtreeFlags,s|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=s,t.childLanes=i,n}function n1(t,n,i){var s=n.pendingProps;switch(Eh(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return ie(n),null;case 3:return i=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),kr(Ce),Qn(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(vs(n)?zr(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wm())),ie(n),null;case 26:return i=n.memoizedState,t===null?(zr(n),i!==null?(ie(n),Eg(n,i)):(ie(n),n.flags&=-16777217)):i?i!==t.memoizedState?(zr(n),ie(n),Eg(n,i)):(ie(n),n.flags&=-16777217):(t.memoizedProps!==s&&zr(n),ie(n),n.flags&=-16777217),null;case 27:yr(n),i=Tt.current;var h=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&zr(n);else{if(!s){if(n.stateNode===null)throw Error(o(166));return ie(n),null}t=gt.current,vs(n)?Zm(n):(t=Ey(h,s,i),n.stateNode=t,zr(n))}return ie(n),null;case 5:if(yr(n),i=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&zr(n);else{if(!s){if(n.stateNode===null)throw Error(o(166));return ie(n),null}if(t=gt.current,vs(n))Zm(n);else{switch(h=Bu(Tt.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?h.createElement("select",{is:s.is}):h.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?h.createElement(i,{is:s.is}):h.createElement(i)}}t[xe]=n,t[ge]=s;t:for(h=n.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break t;for(;h.sibling===null;){if(h.return===null||h.return===n)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}n.stateNode=t;t:switch(Qe(t,i,s),i){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&zr(n)}}return ie(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&zr(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(o(166));if(t=Tt.current,vs(n)){if(t=n.stateNode,i=n.memoizedProps,s=null,h=on,h!==null)switch(h.tag){case 27:case 5:s=h.memoizedProps}t[xe]=n,t=!!(t.nodeValue===i||s!==null&&s.suppressHydrationWarning===!0||my(t.nodeValue,i)),t||di(n)}else t=Bu(t).createTextNode(s),t[xe]=n,n.stateNode=t}return ie(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=vs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!h)throw Error(o(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(o(317));h[xe]=n}else bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ie(n),h=!1}else h=Wm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return n.flags&256?(Pr(n),n):(Pr(n),null)}if(Pr(n),(n.flags&128)!==0)return n.lanes=i,n;if(i=s!==null,t=t!==null&&t.memoizedState!==null,i){s=n.child,h=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(h=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==h&&(s.flags|=2048)}return i!==t&&i&&(n.child.flags|=8192),Cu(n,n.updateQueue),ie(n),null;case 4:return Qn(),t===null&&kf(n.stateNode.containerInfo),ie(n),null;case 10:return kr(n.type),ie(n),null;case 19:if(st(Oe),h=n.memoizedState,h===null)return ie(n),null;if(s=(n.flags&128)!==0,f=h.rendering,f===null)if(s)Vs(h,!1);else{if(ce!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Au(t),f!==null){for(n.flags|=128,Vs(h,!1),t=f.updateQueue,n.updateQueue=t,Cu(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)Xm(i,t),i=i.sibling;return rt(Oe,Oe.current&1|2),n.child}t=t.sibling}h.tail!==null&&An()>Nu&&(n.flags|=128,s=!0,Vs(h,!1),n.lanes=4194304)}else{if(!s)if(t=Au(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,Cu(n,t),Vs(h,!0),h.tail===null&&h.tailMode==="hidden"&&!f.alternate&&!Bt)return ie(n),null}else 2*An()-h.renderingStartTime>Nu&&i!==536870912&&(n.flags|=128,s=!0,Vs(h,!1),n.lanes=4194304);h.isBackwards?(f.sibling=n.child,n.child=f):(t=h.last,t!==null?t.sibling=f:n.child=f,h.last=f)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=An(),n.sibling=null,t=Oe.current,rt(Oe,s?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return Pr(n),Vh(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(i&536870912)!==0&&(n.flags&128)===0&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),i=n.updateQueue,i!==null&&Cu(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048),t!==null&&st(gi),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),kr(Ce),ie(n),null;case 25:return null;case 30:return null}throw Error(o(156,n.tag))}function r1(t,n){switch(Eh(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return kr(Ce),Qn(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return yr(n),null;case 13:if(Pr(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(o(340));bs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return st(Oe),null;case 4:return Qn(),null;case 10:return kr(n.type),null;case 22:case 23:return Pr(n),Vh(),t!==null&&st(gi),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return kr(Ce),null;case 25:return null;default:return null}}function Tg(t,n){switch(Eh(n),n.tag){case 3:kr(Ce),Qn();break;case 26:case 27:case 5:yr(n);break;case 4:Qn();break;case 13:Pr(n);break;case 19:st(Oe);break;case 10:kr(n.type);break;case 22:case 23:Pr(n),Vh(),t!==null&&st(gi);break;case 24:kr(Ce)}}function Ps(t,n){try{var i=n.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var h=s.next;i=h;do{if((i.tag&t)===t){s=void 0;var f=i.create,b=i.inst;s=f(),b.destroy=s}i=i.next}while(i!==h)}}catch(E){$t(n,n.return,E)}}function ca(t,n,i){try{var s=n.updateQueue,h=s!==null?s.lastEffect:null;if(h!==null){var f=h.next;s=f;do{if((s.tag&t)===t){var b=s.inst,E=b.destroy;if(E!==void 0){b.destroy=void 0,h=n;var w=i,q=E;try{q()}catch(X){$t(h,w,X)}}}s=s.next}while(s!==f)}}catch(X){$t(n,n.return,X)}}function Ag(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{cp(n,i)}catch(s){$t(t,t.return,s)}}}function Sg(t,n,i){i.props=vi(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(s){$t(t,n,s)}}function Us(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof i=="function"?t.refCleanup=i(s):i.current=s}}catch(h){$t(t,n,h)}}function or(t,n){var i=t.ref,s=t.refCleanup;if(i!==null)if(typeof s=="function")try{s()}catch(h){$t(t,n,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(h){$t(t,n,h)}else i.current=null}function xg(t){var n=t.type,i=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&s.focus();break t;case"img":i.src?s.src=i.src:i.srcSet&&(s.srcset=i.srcSet)}}catch(h){$t(t,t.return,h)}}function cf(t,n,i){try{var s=t.stateNode;S1(s,t.type,i,n),s[ge]=n}catch(h){$t(t,t.return,h)}}function wg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&va(t.type)||t.tag===4}function hf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||wg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&va(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ff(t,n,i){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(t),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=ju));else if(s!==4&&(s===27&&va(t.type)&&(i=t.stateNode,n=null),t=t.child,t!==null))for(ff(t,n,i),t=t.sibling;t!==null;)ff(t,n,i),t=t.sibling}function Ou(t,n,i){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?i.insertBefore(t,n):i.appendChild(t);else if(s!==4&&(s===27&&va(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(Ou(t,n,i),t=t.sibling;t!==null;)Ou(t,n,i),t=t.sibling}function Rg(t){var n=t.stateNode,i=t.memoizedProps;try{for(var s=t.type,h=n.attributes;h.length;)n.removeAttributeNode(h[0]);Qe(n,s,i),n[xe]=t,n[ge]=i}catch(f){$t(t,t.return,f)}}var Lr=!1,de=!1,df=!1,Cg=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function a1(t,n){if(t=t.containerInfo,Uf=Yu,t=Lm(t),ch(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else t:{i=(i=t.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var h=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{i.nodeType,f.nodeType}catch{i=null;break t}var b=0,E=-1,w=-1,q=0,X=0,J=t,G=null;e:for(;;){for(var F;J!==i||h!==0&&J.nodeType!==3||(E=b+h),J!==f||s!==0&&J.nodeType!==3||(w=b+s),J.nodeType===3&&(b+=J.nodeValue.length),(F=J.firstChild)!==null;)G=J,J=F;for(;;){if(J===t)break e;if(G===i&&++q===h&&(E=b),G===f&&++X===s&&(w=b),(F=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=F}i=E===-1||w===-1?null:{start:E,end:w}}else i=null}i=i||{start:0,end:0}}else i=null;for(zf={focusedElem:t,selectionRange:i},Yu=!1,Ue=n;Ue!==null;)if(n=Ue,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Ue=t;else for(;Ue!==null;){switch(n=Ue,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,i=n,h=f.memoizedProps,f=f.memoizedState,s=i.stateNode;try{var Et=vi(i.type,h,i.elementType===i.type);t=s.getSnapshotBeforeUpdate(Et,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(vt){$t(i,i.return,vt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,i=t.nodeType,i===9)Bf(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Bf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=n.sibling,t!==null){t.return=n.return,Ue=t;break}Ue=n.return}}function Og(t,n,i){var s=i.flags;switch(i.tag){case 0:case 11:case 15:ha(t,i),s&4&&Ps(5,i);break;case 1:if(ha(t,i),s&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(b){$t(i,i.return,b)}else{var h=vi(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(h,n,t.__reactInternalSnapshotBeforeUpdate)}catch(b){$t(i,i.return,b)}}s&64&&Ag(i),s&512&&Us(i,i.return);break;case 3:if(ha(t,i),s&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{cp(t,n)}catch(b){$t(i,i.return,b)}}break;case 27:n===null&&s&4&&Rg(i);case 26:case 5:ha(t,i),n===null&&s&4&&xg(i),s&512&&Us(i,i.return);break;case 12:ha(t,i);break;case 13:ha(t,i),s&4&&Ig(t,i),s&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=d1.bind(null,i),N1(t,i))));break;case 22:if(s=i.memoizedState!==null||Lr,!s){n=n!==null&&n.memoizedState!==null||de,h=Lr;var f=de;Lr=s,(de=n)&&!f?fa(t,i,(i.subtreeFlags&8772)!==0):ha(t,i),Lr=h,de=f}break;case 30:break;default:ha(t,i)}}function Dg(t){var n=t.alternate;n!==null&&(t.alternate=null,Dg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Wr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ee=null,ln=!1;function jr(t,n,i){for(i=i.child;i!==null;)Ng(t,n,i),i=i.sibling}function Ng(t,n,i){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(le,i)}catch{}switch(i.tag){case 26:de||or(i,n),jr(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:de||or(i,n);var s=ee,h=ln;va(i.type)&&(ee=i.stateNode,ln=!1),jr(t,n,i),Qs(i.stateNode),ee=s,ln=h;break;case 5:de||or(i,n);case 6:if(s=ee,h=ln,ee=null,jr(t,n,i),ee=s,ln=h,ee!==null)if(ln)try{(ee.nodeType===9?ee.body:ee.nodeName==="HTML"?ee.ownerDocument.body:ee).removeChild(i.stateNode)}catch(f){$t(i,n,f)}else try{ee.removeChild(i.stateNode)}catch(f){$t(i,n,f)}break;case 18:ee!==null&&(ln?(t=ee,by(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),tl(t)):by(ee,i.stateNode));break;case 4:s=ee,h=ln,ee=i.stateNode.containerInfo,ln=!0,jr(t,n,i),ee=s,ln=h;break;case 0:case 11:case 14:case 15:de||ca(2,i,n),de||ca(4,i,n),jr(t,n,i);break;case 1:de||(or(i,n),s=i.stateNode,typeof s.componentWillUnmount=="function"&&Sg(i,n,s)),jr(t,n,i);break;case 21:jr(t,n,i);break;case 22:de=(s=de)||i.memoizedState!==null,jr(t,n,i),de=s;break;default:jr(t,n,i)}}function Ig(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{tl(t)}catch(i){$t(n,n.return,i)}}function i1(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Cg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Cg),n;default:throw Error(o(435,t.tag))}}function mf(t,n){var i=i1(t);n.forEach(function(s){var h=m1.bind(null,t,s);i.has(s)||(i.add(s),s.then(h,h))})}function pn(t,n){var i=n.deletions;if(i!==null)for(var s=0;s<i.length;s++){var h=i[s],f=t,b=n,E=b;t:for(;E!==null;){switch(E.tag){case 27:if(va(E.type)){ee=E.stateNode,ln=!1;break t}break;case 5:ee=E.stateNode,ln=!1;break t;case 3:case 4:ee=E.stateNode.containerInfo,ln=!0;break t}E=E.return}if(ee===null)throw Error(o(160));Ng(f,b,h),ee=null,ln=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Mg(n,t),n=n.sibling}var Bn=null;function Mg(t,n){var i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pn(n,t),gn(t),s&4&&(ca(3,t,t.return),Ps(3,t),ca(5,t,t.return));break;case 1:pn(n,t),gn(t),s&512&&(de||i===null||or(i,i.return)),s&64&&Lr&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?s:i.concat(s))));break;case 26:var h=Bn;if(pn(n,t),gn(t),s&512&&(de||i===null||or(i,i.return)),s&4){var f=i!==null?i.memoizedState:null;if(s=t.memoizedState,i===null)if(s===null)if(t.stateNode===null){t:{s=t.type,i=t.memoizedProps,h=h.ownerDocument||h;e:switch(s){case"title":f=h.getElementsByTagName("title")[0],(!f||f[Ya]||f[xe]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(s),h.head.insertBefore(f,h.querySelector("head > title"))),Qe(f,s,i),f[xe]=t,he(f),s=f;break t;case"link":var b=Ry("link","href",h).get(s+(i.href||""));if(b){for(var E=0;E<b.length;E++)if(f=b[E],f.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&f.getAttribute("rel")===(i.rel==null?null:i.rel)&&f.getAttribute("title")===(i.title==null?null:i.title)&&f.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){b.splice(E,1);break e}}f=h.createElement(s),Qe(f,s,i),h.head.appendChild(f);break;case"meta":if(b=Ry("meta","content",h).get(s+(i.content||""))){for(E=0;E<b.length;E++)if(f=b[E],f.getAttribute("content")===(i.content==null?null:""+i.content)&&f.getAttribute("name")===(i.name==null?null:i.name)&&f.getAttribute("property")===(i.property==null?null:i.property)&&f.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&f.getAttribute("charset")===(i.charSet==null?null:i.charSet)){b.splice(E,1);break e}}f=h.createElement(s),Qe(f,s,i),h.head.appendChild(f);break;default:throw Error(o(468,s))}f[xe]=t,he(f),s=f}t.stateNode=s}else Cy(h,t.type,t.stateNode);else t.stateNode=wy(h,s,t.memoizedProps);else f!==s?(f===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):f.count--,s===null?Cy(h,t.type,t.stateNode):wy(h,s,t.memoizedProps)):s===null&&t.stateNode!==null&&cf(t,t.memoizedProps,i.memoizedProps)}break;case 27:pn(n,t),gn(t),s&512&&(de||i===null||or(i,i.return)),i!==null&&s&4&&cf(t,t.memoizedProps,i.memoizedProps);break;case 5:if(pn(n,t),gn(t),s&512&&(de||i===null||or(i,i.return)),t.flags&32){h=t.stateNode;try{xn(h,"")}catch(F){$t(t,t.return,F)}}s&4&&t.stateNode!=null&&(h=t.memoizedProps,cf(t,h,i!==null?i.memoizedProps:h)),s&1024&&(df=!0);break;case 6:if(pn(n,t),gn(t),s&4){if(t.stateNode===null)throw Error(o(162));s=t.memoizedProps,i=t.stateNode;try{i.nodeValue=s}catch(F){$t(t,t.return,F)}}break;case 3:if(Gu=null,h=Bn,Bn=qu(n.containerInfo),pn(n,t),Bn=h,gn(t),s&4&&i!==null&&i.memoizedState.isDehydrated)try{tl(n.containerInfo)}catch(F){$t(t,t.return,F)}df&&(df=!1,kg(t));break;case 4:s=Bn,Bn=qu(t.stateNode.containerInfo),pn(n,t),gn(t),Bn=s;break;case 12:pn(n,t),gn(t);break;case 13:pn(n,t),gn(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(_f=An()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,mf(t,s)));break;case 22:h=t.memoizedState!==null;var w=i!==null&&i.memoizedState!==null,q=Lr,X=de;if(Lr=q||h,de=X||w,pn(n,t),de=X,Lr=q,gn(t),s&8192)t:for(n=t.stateNode,n._visibility=h?n._visibility&-2:n._visibility|1,h&&(i===null||w||Lr||de||bi(t)),i=null,n=t;;){if(n.tag===5||n.tag===26){if(i===null){w=i=n;try{if(f=w.stateNode,h)b=f.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{E=w.stateNode;var J=w.memoizedProps.style,G=J!=null&&J.hasOwnProperty("display")?J.display:null;E.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(F){$t(w,w.return,F)}}}else if(n.tag===6){if(i===null){w=n;try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(F){$t(w,w.return,F)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(i=s.retryQueue,i!==null&&(s.retryQueue=null,mf(t,i))));break;case 19:pn(n,t),gn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,mf(t,s)));break;case 30:break;case 21:break;default:pn(n,t),gn(t)}}function gn(t){var n=t.flags;if(n&2){try{for(var i,s=t.return;s!==null;){if(wg(s)){i=s;break}s=s.return}if(i==null)throw Error(o(160));switch(i.tag){case 27:var h=i.stateNode,f=hf(t);Ou(t,f,h);break;case 5:var b=i.stateNode;i.flags&32&&(xn(b,""),i.flags&=-33);var E=hf(t);Ou(t,E,b);break;case 3:case 4:var w=i.stateNode.containerInfo,q=hf(t);ff(t,q,w);break;default:throw Error(o(161))}}catch(X){$t(t,t.return,X)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function kg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;kg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ha(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Og(t,n.alternate,n),n=n.sibling}function bi(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ca(4,n,n.return),bi(n);break;case 1:or(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&Sg(n,n.return,i),bi(n);break;case 27:Qs(n.stateNode);case 26:case 5:or(n,n.return),bi(n);break;case 22:n.memoizedState===null&&bi(n);break;case 30:bi(n);break;default:bi(n)}t=t.sibling}}function fa(t,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,h=t,f=n,b=f.flags;switch(f.tag){case 0:case 11:case 15:fa(h,f,i),Ps(4,f);break;case 1:if(fa(h,f,i),s=f,h=s.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(q){$t(s,s.return,q)}if(s=f,h=s.updateQueue,h!==null){var E=s.stateNode;try{var w=h.shared.hiddenCallbacks;if(w!==null)for(h.shared.hiddenCallbacks=null,h=0;h<w.length;h++)up(w[h],E)}catch(q){$t(s,s.return,q)}}i&&b&64&&Ag(f),Us(f,f.return);break;case 27:Rg(f);case 26:case 5:fa(h,f,i),i&&s===null&&b&4&&xg(f),Us(f,f.return);break;case 12:fa(h,f,i);break;case 13:fa(h,f,i),i&&b&4&&Ig(h,f);break;case 22:f.memoizedState===null&&fa(h,f,i),Us(f,f.return);break;case 30:break;default:fa(h,f,i)}n=n.sibling}}function pf(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&Ts(i))}function gf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ts(t))}function sr(t,n,i,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Vg(t,n,i,s),n=n.sibling}function Vg(t,n,i,s){var h=n.flags;switch(n.tag){case 0:case 11:case 15:sr(t,n,i,s),h&2048&&Ps(9,n);break;case 1:sr(t,n,i,s);break;case 3:sr(t,n,i,s),h&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ts(t)));break;case 12:if(h&2048){sr(t,n,i,s),t=n.stateNode;try{var f=n.memoizedProps,b=f.id,E=f.onPostCommit;typeof E=="function"&&E(b,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(w){$t(n,n.return,w)}}else sr(t,n,i,s);break;case 13:sr(t,n,i,s);break;case 23:break;case 22:f=n.stateNode,b=n.alternate,n.memoizedState!==null?f._visibility&2?sr(t,n,i,s):zs(t,n):f._visibility&2?sr(t,n,i,s):(f._visibility|=2,lo(t,n,i,s,(n.subtreeFlags&10256)!==0)),h&2048&&pf(b,n);break;case 24:sr(t,n,i,s),h&2048&&gf(n.alternate,n);break;default:sr(t,n,i,s)}}function lo(t,n,i,s,h){for(h=h&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,b=n,E=i,w=s,q=b.flags;switch(b.tag){case 0:case 11:case 15:lo(f,b,E,w,h),Ps(8,b);break;case 23:break;case 22:var X=b.stateNode;b.memoizedState!==null?X._visibility&2?lo(f,b,E,w,h):zs(f,b):(X._visibility|=2,lo(f,b,E,w,h)),h&&q&2048&&pf(b.alternate,b);break;case 24:lo(f,b,E,w,h),h&&q&2048&&gf(b.alternate,b);break;default:lo(f,b,E,w,h)}n=n.sibling}}function zs(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,s=n,h=s.flags;switch(s.tag){case 22:zs(i,s),h&2048&&pf(s.alternate,s);break;case 24:zs(i,s),h&2048&&gf(s.alternate,s);break;default:zs(i,s)}n=n.sibling}}var Ls=8192;function uo(t){if(t.subtreeFlags&Ls)for(t=t.child;t!==null;)Pg(t),t=t.sibling}function Pg(t){switch(t.tag){case 26:uo(t),t.flags&Ls&&t.memoizedState!==null&&G1(Bn,t.memoizedState,t.memoizedProps);break;case 5:uo(t);break;case 3:case 4:var n=Bn;Bn=qu(t.stateNode.containerInfo),uo(t),Bn=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Ls,Ls=16777216,uo(t),Ls=n):uo(t));break;default:uo(t)}}function Ug(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function js(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];Ue=s,Lg(s,t)}Ug(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zg(t),t=t.sibling}function zg(t){switch(t.tag){case 0:case 11:case 15:js(t),t.flags&2048&&ca(9,t,t.return);break;case 3:js(t);break;case 12:js(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Du(t)):js(t);break;default:js(t)}}function Du(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];Ue=s,Lg(s,t)}Ug(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ca(8,n,n.return),Du(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,Du(n));break;default:Du(n)}t=t.sibling}}function Lg(t,n){for(;Ue!==null;){var i=Ue;switch(i.tag){case 0:case 11:case 15:ca(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var s=i.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ts(i.memoizedState.cache)}if(s=i.child,s!==null)s.return=i,Ue=s;else t:for(i=t;Ue!==null;){s=Ue;var h=s.sibling,f=s.return;if(Dg(s),s===i){Ue=null;break t}if(h!==null){h.return=f,Ue=h;break t}Ue=f}}}var o1={getCacheForType:function(t){var n=$e(Ce),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i}},s1=typeof WeakMap=="function"?WeakMap:Map,Gt=0,Jt=null,Dt=null,kt=0,Ft=0,yn=null,da=!1,co=!1,yf=!1,Br=0,ce=0,ma=0,_i=0,vf=0,kn=0,ho=0,Bs=null,un=null,bf=!1,_f=0,Nu=1/0,Iu=null,pa=null,Fe=0,ga=null,fo=null,mo=0,Ef=0,Tf=null,jg=null,qs=0,Af=null;function vn(){if((Gt&2)!==0&&kt!==0)return kt&-kt;if(K.T!==null){var t=to;return t!==0?t:Df()}return Zr()}function Bg(){kn===0&&(kn=(kt&536870912)===0||Bt?Zo():536870912);var t=Mn.current;return t!==null&&(t.flags|=32),kn}function bn(t,n,i){(t===Jt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(po(t,0),ya(t,kt,kn,!1)),br(t,i),((Gt&2)===0||t!==Jt)&&(t===Jt&&((Gt&2)===0&&(_i|=i),ce===4&&ya(t,kt,kn,!1)),lr(t))}function qg(t,n,i){if((Gt&6)!==0)throw Error(o(327));var s=!i&&(n&124)===0&&(n&t.expiredLanes)===0||Qa(t,n),h=s?c1(t,n):wf(t,n,!0),f=s;do{if(h===0){co&&!s&&ya(t,n,0,!1);break}else{if(i=t.current.alternate,f&&!l1(i)){h=wf(t,n,!1),f=!1;continue}if(h===2){if(f=n,t.errorRecoveryDisabledLanes&f)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;t:{var E=t;h=Bs;var w=E.current.memoizedState.isDehydrated;if(w&&(po(E,b).flags|=256),b=wf(E,b,!1),b!==2){if(yf&&!w){E.errorRecoveryDisabledLanes|=f,_i|=f,h=4;break t}f=un,un=h,f!==null&&(un===null?un=f:un.push.apply(un,f))}h=b}if(f=!1,h!==2)continue}}if(h===1){po(t,0),ya(t,n,0,!0);break}t:{switch(s=t,f=h,f){case 0:case 1:throw Error(o(345));case 4:if((n&4194048)!==n)break;case 6:ya(s,n,kn,!da);break t;case 2:un=null;break;case 3:case 5:break;default:throw Error(o(329))}if((n&62914560)===n&&(h=_f+300-An(),10<h)){if(ya(s,n,kn,!da),Ni(s,0,!0)!==0)break t;s.timeoutHandle=yy(Hg.bind(null,s,i,un,Iu,bf,n,kn,_i,ho,da,f,2,-0,0),h);break t}Hg(s,i,un,Iu,bf,n,kn,_i,ho,da,f,0,-0,0)}}break}while(!0);lr(t)}function Hg(t,n,i,s,h,f,b,E,w,q,X,J,G,F){if(t.timeoutHandle=-1,J=n.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(Xs={stylesheets:null,count:0,unsuspend:H1},Pg(n),J=F1(),J!==null)){t.cancelPendingCommit=J($g.bind(null,t,n,f,i,s,h,b,E,w,X,1,G,F)),ya(t,f,b,!q);return}$g(t,n,f,i,s,h,b,E,w)}function l1(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var s=0;s<i.length;s++){var h=i[s],f=h.getSnapshot;h=h.value;try{if(!dn(f(),h))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ya(t,n,i,s){n&=~vf,n&=~_i,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var h=n;0<h;){var f=31-Xe(h),b=1<<f;s[f]=-1,h&=~b}i!==0&&Yn(t,i,n)}function Mu(){return(Gt&6)===0?(Hs(0),!1):!0}function Sf(){if(Dt!==null){if(Ft===0)var t=Dt.return;else t=Dt,Mr=mi=null,jh(t),oo=null,Ms=0,t=Dt;for(;t!==null;)Tg(t.alternate,t),t=t.return;Dt=null}}function po(t,n){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,w1(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Sf(),Jt=t,Dt=i=Dr(t.current,null),kt=n,Ft=0,yn=null,da=!1,co=Qa(t,n),yf=!1,ho=kn=vf=_i=ma=ce=0,un=Bs=null,bf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var h=31-Xe(s),f=1<<h;n|=t[h],s&=~f}return Br=n,eu(),i}function Gg(t,n){wt=null,K.H=_u,n===Ss||n===cu?(n=sp(),Ft=3):n===ap?(n=sp(),Ft=4):Ft=n===lg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,yn=n,Dt===null&&(ce=1,xu(t,On(n,t.current)))}function Fg(){var t=K.H;return K.H=_u,t===null?_u:t}function Qg(){var t=K.A;return K.A=o1,t}function xf(){ce=4,da||(kt&4194048)!==kt&&Mn.current!==null||(co=!0),(ma&134217727)===0&&(_i&134217727)===0||Jt===null||ya(Jt,kt,kn,!1)}function wf(t,n,i){var s=Gt;Gt|=2;var h=Fg(),f=Qg();(Jt!==t||kt!==n)&&(Iu=null,po(t,n)),n=!1;var b=ce;t:do try{if(Ft!==0&&Dt!==null){var E=Dt,w=yn;switch(Ft){case 8:Sf(),b=6;break t;case 3:case 2:case 9:case 6:Mn.current===null&&(n=!0);var q=Ft;if(Ft=0,yn=null,go(t,E,w,q),i&&co){b=0;break t}break;default:q=Ft,Ft=0,yn=null,go(t,E,w,q)}}u1(),b=ce;break}catch(X){Gg(t,X)}while(!0);return n&&t.shellSuspendCounter++,Mr=mi=null,Gt=s,K.H=h,K.A=f,Dt===null&&(Jt=null,kt=0,eu()),b}function u1(){for(;Dt!==null;)Yg(Dt)}function c1(t,n){var i=Gt;Gt|=2;var s=Fg(),h=Qg();Jt!==t||kt!==n?(Iu=null,Nu=An()+500,po(t,n)):co=Qa(t,n);t:do try{if(Ft!==0&&Dt!==null){n=Dt;var f=yn;e:switch(Ft){case 1:Ft=0,yn=null,go(t,n,f,1);break;case 2:case 9:if(ip(f)){Ft=0,yn=null,Kg(n);break}n=function(){Ft!==2&&Ft!==9||Jt!==t||(Ft=7),lr(t)},f.then(n,n);break t;case 3:Ft=7;break t;case 4:Ft=5;break t;case 7:ip(f)?(Ft=0,yn=null,Kg(n)):(Ft=0,yn=null,go(t,n,f,7));break;case 5:var b=null;switch(Dt.tag){case 26:b=Dt.memoizedState;case 5:case 27:var E=Dt;if(!b||Oy(b)){Ft=0,yn=null;var w=E.sibling;if(w!==null)Dt=w;else{var q=E.return;q!==null?(Dt=q,ku(q)):Dt=null}break e}}Ft=0,yn=null,go(t,n,f,5);break;case 6:Ft=0,yn=null,go(t,n,f,6);break;case 8:Sf(),ce=6;break t;default:throw Error(o(462))}}h1();break}catch(X){Gg(t,X)}while(!0);return Mr=mi=null,K.H=s,K.A=h,Gt=i,Dt!==null?0:(Jt=null,kt=0,eu(),ce)}function h1(){for(;Dt!==null&&!Yo();)Yg(Dt)}function Yg(t){var n=_g(t.alternate,t,Br);t.memoizedProps=t.pendingProps,n===null?ku(t):Dt=n}function Kg(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=mg(i,n,n.pendingProps,n.type,void 0,kt);break;case 11:n=mg(i,n,n.pendingProps,n.type.render,n.ref,kt);break;case 5:jh(n);default:Tg(i,n),n=Dt=Xm(n,Br),n=_g(i,n,Br)}t.memoizedProps=t.pendingProps,n===null?ku(t):Dt=n}function go(t,n,i,s){Mr=mi=null,jh(n),oo=null,Ms=0;var h=n.return;try{if(t1(t,h,n,i,kt)){ce=1,xu(t,On(i,t.current)),Dt=null;return}}catch(f){if(h!==null)throw Dt=h,f;ce=1,xu(t,On(i,t.current)),Dt=null;return}n.flags&32768?(Bt||s===1?t=!0:co||(kt&536870912)!==0?t=!1:(da=t=!0,(s===2||s===9||s===3||s===6)&&(s=Mn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Xg(n,t)):ku(n)}function ku(t){var n=t;do{if((n.flags&32768)!==0){Xg(n,da);return}t=n.return;var i=n1(n.alternate,n,Br);if(i!==null){Dt=i;return}if(n=n.sibling,n!==null){Dt=n;return}Dt=n=t}while(n!==null);ce===0&&(ce=5)}function Xg(t,n){do{var i=r1(t.alternate,t);if(i!==null){i.flags&=32767,Dt=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){Dt=t;return}Dt=t=i}while(t!==null);ce=6,Dt=null}function $g(t,n,i,s,h,f,b,E,w){t.cancelPendingCommit=null;do Vu();while(Fe!==0);if((Gt&6)!==0)throw Error(o(327));if(n!==null){if(n===t.current)throw Error(o(177));if(f=n.lanes|n.childLanes,f|=ph,Wo(t,i,f,b,E,w),t===Jt&&(Dt=Jt=null,kt=0),fo=n,ga=t,mo=i,Ef=f,Tf=h,jg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,p1(qa,function(){return ey(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=K.T,K.T=null,h=ot.p,ot.p=2,b=Gt,Gt|=4;try{a1(t,n,i)}finally{Gt=b,ot.p=h,K.T=s}}Fe=1,Zg(),Jg(),Wg()}}function Zg(){if(Fe===1){Fe=0;var t=ga,n=fo,i=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||i){i=K.T,K.T=null;var s=ot.p;ot.p=2;var h=Gt;Gt|=4;try{Mg(n,t);var f=zf,b=Lm(t.containerInfo),E=f.focusedElem,w=f.selectionRange;if(b!==E&&E&&E.ownerDocument&&zm(E.ownerDocument.documentElement,E)){if(w!==null&&ch(E)){var q=w.start,X=w.end;if(X===void 0&&(X=q),"selectionStart"in E)E.selectionStart=q,E.selectionEnd=Math.min(X,E.value.length);else{var J=E.ownerDocument||document,G=J&&J.defaultView||window;if(G.getSelection){var F=G.getSelection(),Et=E.textContent.length,vt=Math.min(w.start,Et),Xt=w.end===void 0?vt:Math.min(w.end,Et);!F.extend&&vt>Xt&&(b=Xt,Xt=vt,vt=b);var z=Um(E,vt),k=Um(E,Xt);if(z&&k&&(F.rangeCount!==1||F.anchorNode!==z.node||F.anchorOffset!==z.offset||F.focusNode!==k.node||F.focusOffset!==k.offset)){var B=J.createRange();B.setStart(z.node,z.offset),F.removeAllRanges(),vt>Xt?(F.addRange(B),F.extend(k.node,k.offset)):(B.setEnd(k.node,k.offset),F.addRange(B))}}}}for(J=[],F=E;F=F.parentNode;)F.nodeType===1&&J.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<J.length;E++){var $=J[E];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}Yu=!!Uf,zf=Uf=null}finally{Gt=h,ot.p=s,K.T=i}}t.current=n,Fe=2}}function Jg(){if(Fe===2){Fe=0;var t=ga,n=fo,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=K.T,K.T=null;var s=ot.p;ot.p=2;var h=Gt;Gt|=4;try{Og(t,n.alternate,n)}finally{Gt=h,ot.p=s,K.T=i}}Fe=3}}function Wg(){if(Fe===4||Fe===3){Fe=0,Dl();var t=ga,n=fo,i=mo,s=jg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Fe=5:(Fe=0,fo=ga=null,ty(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(pa=null),Ii(i),n=n.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(le,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=K.T,h=ot.p,ot.p=2,K.T=null;try{for(var f=t.onRecoverableError,b=0;b<s.length;b++){var E=s[b];f(E.value,{componentStack:E.stack})}}finally{K.T=n,ot.p=h}}(mo&3)!==0&&Vu(),lr(t),h=t.pendingLanes,(i&4194090)!==0&&(h&42)!==0?t===Af?qs++:(qs=0,Af=t):qs=0,Hs(0)}}function ty(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ts(n)))}function Vu(t){return Zg(),Jg(),Wg(),ey()}function ey(){if(Fe!==5)return!1;var t=ga,n=Ef;Ef=0;var i=Ii(mo),s=K.T,h=ot.p;try{ot.p=32>i?32:i,K.T=null,i=Tf,Tf=null;var f=ga,b=mo;if(Fe=0,fo=ga=null,mo=0,(Gt&6)!==0)throw Error(o(331));var E=Gt;if(Gt|=4,zg(f.current),Vg(f,f.current,b,i),Gt=E,Hs(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(le,f)}catch{}return!0}finally{ot.p=h,K.T=s,ty(t,n)}}function ny(t,n,i){n=On(i,n),n=tf(t.stateNode,n,2),t=oa(t,n,2),t!==null&&(br(t,2),lr(t))}function $t(t,n,i){if(t.tag===3)ny(t,t,i);else for(;n!==null;){if(n.tag===3){ny(n,t,i);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(pa===null||!pa.has(s))){t=On(i,t),i=og(2),s=oa(n,i,2),s!==null&&(sg(i,s,n,t),br(s,2),lr(s));break}}n=n.return}}function Rf(t,n,i){var s=t.pingCache;if(s===null){s=t.pingCache=new s1;var h=new Set;s.set(n,h)}else h=s.get(n),h===void 0&&(h=new Set,s.set(n,h));h.has(i)||(yf=!0,h.add(i),t=f1.bind(null,t,n,i),n.then(t,t))}function f1(t,n,i){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Jt===t&&(kt&i)===i&&(ce===4||ce===3&&(kt&62914560)===kt&&300>An()-_f?(Gt&2)===0&&po(t,0):vf|=i,ho===kt&&(ho=0)),lr(t)}function ry(t,n){n===0&&(n=Jo()),t=$i(t,n),t!==null&&(br(t,n),lr(t))}function d1(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),ry(t,i)}function m1(t,n){var i=0;switch(t.tag){case 13:var s=t.stateNode,h=t.memoizedState;h!==null&&(i=h.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(o(314))}s!==null&&s.delete(n),ry(t,i)}function p1(t,n){return ja(t,n)}var Pu=null,yo=null,Cf=!1,Uu=!1,Of=!1,Ei=0;function lr(t){t!==yo&&t.next===null&&(yo===null?Pu=yo=t:yo=yo.next=t),Uu=!0,Cf||(Cf=!0,y1())}function Hs(t,n){if(!Of&&Uu){Of=!0;do for(var i=!1,s=Pu;s!==null;){if(t!==0){var h=s.pendingLanes;if(h===0)var f=0;else{var b=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Xe(42|t)+1)-1,f&=h&~(b&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(i=!0,sy(s,f))}else f=kt,f=Ni(s,s===Jt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Qa(s,f)||(i=!0,sy(s,f));s=s.next}while(i);Of=!1}}function g1(){ay()}function ay(){Uu=Cf=!1;var t=0;Ei!==0&&(x1()&&(t=Ei),Ei=0);for(var n=An(),i=null,s=Pu;s!==null;){var h=s.next,f=iy(s,n);f===0?(s.next=null,i===null?Pu=h:i.next=h,h===null&&(yo=i)):(i=s,(t!==0||(f&3)!==0)&&(Uu=!0)),s=h}Hs(t)}function iy(t,n){for(var i=t.suspendedLanes,s=t.pingedLanes,h=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var b=31-Xe(f),E=1<<b,w=h[b];w===-1?((E&i)===0||(E&s)!==0)&&(h[b]=$o(E,n)):w<=n&&(t.expiredLanes|=E),f&=~E}if(n=Jt,i=kt,i=Ni(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,i===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ba(s),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Qa(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(s!==null&&Ba(s),Ii(i)){case 2:case 8:i=Oi;break;case 32:i=qa;break;case 268435456:i=Di;break;default:i=qa}return s=oy.bind(null,t),i=ja(i,s),t.callbackPriority=n,t.callbackNode=i,n}return s!==null&&s!==null&&Ba(s),t.callbackPriority=2,t.callbackNode=null,2}function oy(t,n){if(Fe!==0&&Fe!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Vu()&&t.callbackNode!==i)return null;var s=kt;return s=Ni(t,t===Jt?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(qg(t,s,n),iy(t,An()),t.callbackNode!=null&&t.callbackNode===i?oy.bind(null,t):null)}function sy(t,n){if(Vu())return null;qg(t,n,!0)}function y1(){R1(function(){(Gt&6)!==0?ja(Ko,g1):ay()})}function Df(){return Ei===0&&(Ei=Zo()),Ei}function ly(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:zi(""+t)}function uy(t,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,t.id&&i.setAttribute("form",t.id),n.parentNode.insertBefore(i,n),t=new FormData(t),i.parentNode.removeChild(i),t}function v1(t,n,i,s,h){if(n==="submit"&&i&&i.stateNode===h){var f=ly((h[ge]||null).action),b=s.submitter;b&&(n=(n=b[ge]||null)?ly(n.formAction):b.getAttribute("formAction"),n!==null&&(f=n,b=null));var E=new Li("action","action",null,s,h);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ei!==0){var w=b?uy(h,b):new FormData(h);Xh(i,{pending:!0,data:w,method:h.method,action:f},null,w)}}else typeof f=="function"&&(E.preventDefault(),w=b?uy(h,b):new FormData(h),Xh(i,{pending:!0,data:w,method:h.method,action:f},f,w))},currentTarget:h}]})}}for(var Nf=0;Nf<mh.length;Nf++){var If=mh[Nf],b1=If.toLowerCase(),_1=If[0].toUpperCase()+If.slice(1);jn(b1,"on"+_1)}jn(qm,"onAnimationEnd"),jn(Hm,"onAnimationIteration"),jn(Gm,"onAnimationStart"),jn("dblclick","onDoubleClick"),jn("focusin","onFocus"),jn("focusout","onBlur"),jn(U_,"onTransitionRun"),jn(z_,"onTransitionStart"),jn(L_,"onTransitionCancel"),jn(Fm,"onTransitionEnd"),Er("onMouseEnter",["mouseout","mouseover"]),Er("onMouseLeave",["mouseout","mouseover"]),Er("onPointerEnter",["pointerout","pointerover"]),Er("onPointerLeave",["pointerout","pointerover"]),zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zn("onBeforeInput",["compositionend","keypress","textInput","paste"]),zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gs));function cy(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var s=t[i],h=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var b=s.length-1;0<=b;b--){var E=s[b],w=E.instance,q=E.currentTarget;if(E=E.listener,w!==f&&h.isPropagationStopped())break t;f=E,h.currentTarget=q;try{f(h)}catch(X){Su(X)}h.currentTarget=null,f=w}else for(b=0;b<s.length;b++){if(E=s[b],w=E.instance,q=E.currentTarget,E=E.listener,w!==f&&h.isPropagationStopped())break t;f=E,h.currentTarget=q;try{f(h)}catch(X){Su(X)}h.currentTarget=null,f=w}}}}function Nt(t,n){var i=n[es];i===void 0&&(i=n[es]=new Set);var s=t+"__bubble";i.has(s)||(hy(n,t,2,!1),i.add(s))}function Mf(t,n,i){var s=0;n&&(s|=4),hy(i,t,s,n)}var zu="_reactListening"+Math.random().toString(36).slice(2);function kf(t){if(!t[zu]){t[zu]=!0,ns.forEach(function(i){i!=="selectionchange"&&(E1.has(i)||Mf(i,!1,t),Mf(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[zu]||(n[zu]=!0,Mf("selectionchange",!1,n))}}function hy(t,n,i,s){switch(Vy(n)){case 2:var h=K1;break;case 8:h=X1;break;default:h=Kf}i=h.bind(null,n,i,t),h=void 0,!Rn||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(h=!0),s?h!==void 0?t.addEventListener(n,i,{capture:!0,passive:h}):t.addEventListener(n,i,!0):h!==void 0?t.addEventListener(n,i,{passive:h}):t.addEventListener(n,i,!1)}function Vf(t,n,i,s,h){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var b=s.tag;if(b===3||b===4){var E=s.stateNode.containerInfo;if(E===h)break;if(b===4)for(b=s.return;b!==null;){var w=b.tag;if((w===3||w===4)&&b.stateNode.containerInfo===h)return;b=b.return}for(;E!==null;){if(b=_r(E),b===null)return;if(w=b.tag,w===5||w===6||w===26||w===27){s=f=b;continue t}E=E.parentNode}}s=s.return}jl(function(){var q=f,X=wn(i),J=[];t:{var G=Qm.get(t);if(G!==void 0){var F=Li,Et=t;switch(t){case"keypress":if(Wn(i)===0)break t;case"keydown":case"keyup":F=Fi;break;case"focusin":Et="focus",F=qi;break;case"focusout":Et="blur",F=qi;break;case"beforeblur":case"afterblur":F=qi;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Cn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=oh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Kl;break;case qm:case Hm:case Gm:F=Hi;break;case Fm:F=$l;break;case"scroll":case"scrollend":F=Bl;break;case"wheel":F=Qi;break;case"copy":case"cut":case"paste":F=Gi;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=ms;break;case"toggle":case"beforetoggle":F=Jl}var vt=(n&4)!==0,Xt=!vt&&(t==="scroll"||t==="scrollend"),z=vt?G!==null?G+"Capture":null:G;vt=[];for(var k=q,B;k!==null;){var $=k;if(B=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||B===null||z===null||($=ti(k,z),$!=null&&vt.push(Fs(k,$,B))),Xt)break;k=k.return}0<vt.length&&(G=new F(G,Et,null,i,X),J.push({event:G,listeners:vt}))}}if((n&7)===0){t:{if(G=t==="mouseover"||t==="pointerover",F=t==="mouseout"||t==="pointerout",G&&i!==Sr&&(Et=i.relatedTarget||i.fromElement)&&(_r(Et)||Et[Sn]))break t;if((F||G)&&(G=X.window===X?X:(G=X.ownerDocument)?G.defaultView||G.parentWindow:window,F?(Et=i.relatedTarget||i.toElement,F=q,Et=Et?_r(Et):null,Et!==null&&(Xt=c(Et),vt=Et.tag,Et!==Xt||vt!==5&&vt!==27&&vt!==6)&&(Et=null)):(F=null,Et=q),F!==Et)){if(vt=Cn,$="onMouseLeave",z="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(vt=ms,$="onPointerLeave",z="onPointerEnter",k="pointer"),Xt=F==null?G:Xn(F),B=Et==null?G:Xn(Et),G=new vt($,k+"leave",F,i,X),G.target=Xt,G.relatedTarget=B,$=null,_r(X)===q&&(vt=new vt(z,k+"enter",Et,i,X),vt.target=B,vt.relatedTarget=Xt,$=vt),Xt=$,F&&Et)e:{for(vt=F,z=Et,k=0,B=vt;B;B=vo(B))k++;for(B=0,$=z;$;$=vo($))B++;for(;0<k-B;)vt=vo(vt),k--;for(;0<B-k;)z=vo(z),B--;for(;k--;){if(vt===z||z!==null&&vt===z.alternate)break e;vt=vo(vt),z=vo(z)}vt=null}else vt=null;F!==null&&fy(J,G,F,vt,!1),Et!==null&&Xt!==null&&fy(J,Xt,Et,vt,!0)}}t:{if(G=q?Xn(q):window,F=G.nodeName&&G.nodeName.toLowerCase(),F==="select"||F==="input"&&G.type==="file")var ct=Nm;else if(Re(G))if(Im)ct=k_;else{ct=I_;var Ct=N_}else F=G.nodeName,!F||F.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?q&&ss(q.elementType)&&(ct=Nm):ct=M_;if(ct&&(ct=ct(t,q))){Or(J,ct,i,X);break t}Ct&&Ct(t,G,q),t==="focusout"&&q&&G.type==="number"&&q.memoizedProps.value!=null&&ea(G,"number",G.value)}switch(Ct=q?Xn(q):window,t){case"focusin":(Re(Ct)||Ct.contentEditable==="true")&&(Yi=Ct,hh=q,ys=null);break;case"focusout":ys=hh=Yi=null;break;case"mousedown":fh=!0;break;case"contextmenu":case"mouseup":case"dragend":fh=!1,jm(J,i,X);break;case"selectionchange":if(P_)break;case"keydown":case"keyup":jm(J,i,X)}var mt;if(nr)t:{switch(t){case"compositionstart":var bt="onCompositionStart";break t;case"compositionend":bt="onCompositionEnd";break t;case"compositionupdate":bt="onCompositionUpdate";break t}bt=void 0}else It?Q(t,i)&&(bt="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(bt="onCompositionStart");bt&&(v&&i.locale!=="ko"&&(It||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&It&&(mt=us()):(Jn=X,na="value"in Jn?Jn.value:Jn.textContent,It=!0)),Ct=Lu(q,bt),0<Ct.length&&(bt=new fs(bt,t,null,i,X),J.push({event:bt,listeners:Ct}),mt?bt.data=mt:(mt=it(i),mt!==null&&(bt.data=mt)))),(mt=m?we(t,i):Mt(t,i))&&(bt=Lu(q,"onBeforeInput"),0<bt.length&&(Ct=new fs("onBeforeInput","beforeinput",null,i,X),J.push({event:Ct,listeners:bt}),Ct.data=mt)),v1(J,t,q,i,X)}cy(J,n)})}function Fs(t,n,i){return{instance:t,listener:n,currentTarget:i}}function Lu(t,n){for(var i=n+"Capture",s=[];t!==null;){var h=t,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=ti(t,i),h!=null&&s.unshift(Fs(t,h,f)),h=ti(t,n),h!=null&&s.push(Fs(t,h,f))),t.tag===3)return s;t=t.return}return[]}function vo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function fy(t,n,i,s,h){for(var f=n._reactName,b=[];i!==null&&i!==s;){var E=i,w=E.alternate,q=E.stateNode;if(E=E.tag,w!==null&&w===s)break;E!==5&&E!==26&&E!==27||q===null||(w=q,h?(q=ti(i,f),q!=null&&b.unshift(Fs(i,q,w))):h||(q=ti(i,f),q!=null&&b.push(Fs(i,q,w)))),i=i.return}b.length!==0&&t.push({event:n,listeners:b})}var T1=/\r\n?/g,A1=/\u0000|\uFFFD/g;function dy(t){return(typeof t=="string"?t:""+t).replace(T1,`
`).replace(A1,"")}function my(t,n){return n=dy(n),dy(t)===n}function ju(){}function Kt(t,n,i,s,h,f){switch(i){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||xn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&xn(t,""+s);break;case"className":$n(t,"class",s);break;case"tabIndex":$n(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":$n(t,i,s);break;case"style":os(t,s,f);break;case"data":if(n!=="object"){$n(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(i);break}s=zi(""+s),t.setAttribute(i,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(i==="formAction"?(n!=="input"&&Kt(t,n,"name",h.name,h,null),Kt(t,n,"formEncType",h.formEncType,h,null),Kt(t,n,"formMethod",h.formMethod,h,null),Kt(t,n,"formTarget",h.formTarget,h,null)):(Kt(t,n,"encType",h.encType,h,null),Kt(t,n,"method",h.method,h,null),Kt(t,n,"target",h.target,h,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(i);break}s=zi(""+s),t.setAttribute(i,s);break;case"onClick":s!=null&&(t.onclick=ju);break;case"onScroll":s!=null&&Nt("scroll",t);break;case"onScrollEnd":s!=null&&Nt("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(i=s.__html,i!=null){if(h.children!=null)throw Error(o(60));t.innerHTML=i}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}i=zi(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,""+s):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":s===!0?t.setAttribute(i,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,s):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(i,s):t.removeAttribute(i);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(i):t.setAttribute(i,s);break;case"popover":Nt("beforetoggle",t),Nt("toggle",t),ta(t,"popover",s);break;case"xlinkActuate":qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":qe(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":qe(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":qe(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":qe(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ta(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=ah.get(i)||i,ta(t,i,s))}}function Pf(t,n,i,s,h,f){switch(i){case"style":os(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(i=s.__html,i!=null){if(h.children!=null)throw Error(o(60));t.innerHTML=i}}break;case"children":typeof s=="string"?xn(t,s):(typeof s=="number"||typeof s=="bigint")&&xn(t,""+s);break;case"onScroll":s!=null&&Nt("scroll",t);break;case"onScrollEnd":s!=null&&Nt("scrollend",t);break;case"onClick":s!=null&&(t.onclick=ju);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mi.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(h=i.endsWith("Capture"),n=i.slice(2,h?i.length-7:void 0),f=t[ge]||null,f=f!=null?f[i]:null,typeof f=="function"&&t.removeEventListener(n,f,h),typeof s=="function")){typeof f!="function"&&f!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(n,s,h);break t}i in t?t[i]=s:s===!0?t.setAttribute(i,""):ta(t,i,s)}}}function Qe(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",t),Nt("load",t);var s=!1,h=!1,f;for(f in i)if(i.hasOwnProperty(f)){var b=i[f];if(b!=null)switch(f){case"src":s=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:Kt(t,n,f,b,i,null)}}h&&Kt(t,n,"srcSet",i.srcSet,i,null),s&&Kt(t,n,"src",i.src,i,null);return;case"input":Nt("invalid",t);var E=f=b=h=null,w=null,q=null;for(s in i)if(i.hasOwnProperty(s)){var X=i[s];if(X!=null)switch(s){case"name":h=X;break;case"type":b=X;break;case"checked":w=X;break;case"defaultChecked":q=X;break;case"value":f=X;break;case"defaultValue":E=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(o(137,n));break;default:Kt(t,n,s,X,i,null)}}Za(t,f,E,w,q,b,h,!1),Ui(t);return;case"select":Nt("invalid",t),s=b=f=null;for(h in i)if(i.hasOwnProperty(h)&&(E=i[h],E!=null))switch(h){case"value":f=E;break;case"defaultValue":b=E;break;case"multiple":s=E;default:Kt(t,n,h,E,i,null)}n=f,i=b,t.multiple=!!s,n!=null?Ar(t,!!s,n,!1):i!=null&&Ar(t,!!s,i,!0);return;case"textarea":Nt("invalid",t),f=h=s=null;for(b in i)if(i.hasOwnProperty(b)&&(E=i[b],E!=null))switch(b){case"value":s=E;break;case"defaultValue":h=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(o(91));break;default:Kt(t,n,b,E,i,null)}Ja(t,s,h,f),Ui(t);return;case"option":for(w in i)if(i.hasOwnProperty(w)&&(s=i[w],s!=null))switch(w){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Kt(t,n,w,s,i,null)}return;case"dialog":Nt("beforetoggle",t),Nt("toggle",t),Nt("cancel",t),Nt("close",t);break;case"iframe":case"object":Nt("load",t);break;case"video":case"audio":for(s=0;s<Gs.length;s++)Nt(Gs[s],t);break;case"image":Nt("error",t),Nt("load",t);break;case"details":Nt("toggle",t);break;case"embed":case"source":case"link":Nt("error",t),Nt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in i)if(i.hasOwnProperty(q)&&(s=i[q],s!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:Kt(t,n,q,s,i,null)}return;default:if(ss(n)){for(X in i)i.hasOwnProperty(X)&&(s=i[X],s!==void 0&&Pf(t,n,X,s,i,void 0));return}}for(E in i)i.hasOwnProperty(E)&&(s=i[E],s!=null&&Kt(t,n,E,s,i,null))}function S1(t,n,i,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,b=null,E=null,w=null,q=null,X=null;for(F in i){var J=i[F];if(i.hasOwnProperty(F)&&J!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":w=J;default:s.hasOwnProperty(F)||Kt(t,n,F,null,s,J)}}for(var G in s){var F=s[G];if(J=i[G],s.hasOwnProperty(G)&&(F!=null||J!=null))switch(G){case"type":f=F;break;case"name":h=F;break;case"checked":q=F;break;case"defaultChecked":X=F;break;case"value":b=F;break;case"defaultValue":E=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(o(137,n));break;default:F!==J&&Kt(t,n,G,F,s,J)}}fn(t,b,E,w,q,X,f,h);return;case"select":F=b=E=G=null;for(f in i)if(w=i[f],i.hasOwnProperty(f)&&w!=null)switch(f){case"value":break;case"multiple":F=w;default:s.hasOwnProperty(f)||Kt(t,n,f,null,s,w)}for(h in s)if(f=s[h],w=i[h],s.hasOwnProperty(h)&&(f!=null||w!=null))switch(h){case"value":G=f;break;case"defaultValue":E=f;break;case"multiple":b=f;default:f!==w&&Kt(t,n,h,f,s,w)}n=E,i=b,s=F,G!=null?Ar(t,!!i,G,!1):!!s!=!!i&&(n!=null?Ar(t,!!i,n,!0):Ar(t,!!i,i?[]:"",!1));return;case"textarea":F=G=null;for(E in i)if(h=i[E],i.hasOwnProperty(E)&&h!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Kt(t,n,E,null,s,h)}for(b in s)if(h=s[b],f=i[b],s.hasOwnProperty(b)&&(h!=null||f!=null))switch(b){case"value":G=h;break;case"defaultValue":F=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(o(91));break;default:h!==f&&Kt(t,n,b,h,s,f)}Qt(t,G,F);return;case"option":for(var Et in i)if(G=i[Et],i.hasOwnProperty(Et)&&G!=null&&!s.hasOwnProperty(Et))switch(Et){case"selected":t.selected=!1;break;default:Kt(t,n,Et,null,s,G)}for(w in s)if(G=s[w],F=i[w],s.hasOwnProperty(w)&&G!==F&&(G!=null||F!=null))switch(w){case"selected":t.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:Kt(t,n,w,G,s,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var vt in i)G=i[vt],i.hasOwnProperty(vt)&&G!=null&&!s.hasOwnProperty(vt)&&Kt(t,n,vt,null,s,G);for(q in s)if(G=s[q],F=i[q],s.hasOwnProperty(q)&&G!==F&&(G!=null||F!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(o(137,n));break;default:Kt(t,n,q,G,s,F)}return;default:if(ss(n)){for(var Xt in i)G=i[Xt],i.hasOwnProperty(Xt)&&G!==void 0&&!s.hasOwnProperty(Xt)&&Pf(t,n,Xt,void 0,s,G);for(X in s)G=s[X],F=i[X],!s.hasOwnProperty(X)||G===F||G===void 0&&F===void 0||Pf(t,n,X,G,s,F);return}}for(var z in i)G=i[z],i.hasOwnProperty(z)&&G!=null&&!s.hasOwnProperty(z)&&Kt(t,n,z,null,s,G);for(J in s)G=s[J],F=i[J],!s.hasOwnProperty(J)||G===F||G==null&&F==null||Kt(t,n,J,G,s,F)}var Uf=null,zf=null;function Bu(t){return t.nodeType===9?t:t.ownerDocument}function py(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gy(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Lf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var jf=null;function x1(){var t=window.event;return t&&t.type==="popstate"?t===jf?!1:(jf=t,!0):(jf=null,!1)}var yy=typeof setTimeout=="function"?setTimeout:void 0,w1=typeof clearTimeout=="function"?clearTimeout:void 0,vy=typeof Promise=="function"?Promise:void 0,R1=typeof queueMicrotask=="function"?queueMicrotask:typeof vy<"u"?function(t){return vy.resolve(null).then(t).catch(C1)}:yy;function C1(t){setTimeout(function(){throw t})}function va(t){return t==="head"}function by(t,n){var i=n,s=0,h=0;do{var f=i.nextSibling;if(t.removeChild(i),f&&f.nodeType===8)if(i=f.data,i==="/$"){if(0<s&&8>s){i=s;var b=t.ownerDocument;if(i&1&&Qs(b.documentElement),i&2&&Qs(b.body),i&4)for(i=b.head,Qs(i),b=i.firstChild;b;){var E=b.nextSibling,w=b.nodeName;b[Ya]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&b.rel.toLowerCase()==="stylesheet"||i.removeChild(b),b=E}}if(h===0){t.removeChild(f),tl(n);return}h--}else i==="$"||i==="$?"||i==="$!"?h++:s=i.charCodeAt(0)-48;else s=0;i=f}while(i);tl(n)}function Bf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Bf(i),Wr(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function O1(t,n,i,s){for(;t.nodeType===1;){var h=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ya])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=qn(t.nextSibling),t===null)break}return null}function D1(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=qn(t.nextSibling),t===null))return null;return t}function qf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function N1(t,n){var i=t.ownerDocument;if(t.data!=="$?"||i.readyState==="complete")n();else{var s=function(){n(),i.removeEventListener("DOMContentLoaded",s)};i.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function qn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Hf=null;function _y(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return t;n--}else i==="/$"&&n++}t=t.previousSibling}return null}function Ey(t,n,i){switch(n=Bu(i),t){case"html":if(t=n.documentElement,!t)throw Error(o(452));return t;case"head":if(t=n.head,!t)throw Error(o(453));return t;case"body":if(t=n.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function Qs(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Wr(t)}var Vn=new Map,Ty=new Set;function qu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var qr=ot.d;ot.d={f:I1,r:M1,D:k1,C:V1,L:P1,m:U1,X:L1,S:z1,M:j1};function I1(){var t=qr.f(),n=Mu();return t||n}function M1(t){var n=Kn(t);n!==null&&n.tag===5&&n.type==="form"?qp(n):qr.r(t)}var bo=typeof document>"u"?null:document;function Ay(t,n,i){var s=bo;if(s&&typeof n=="string"&&n){var h=ye(n);h='link[rel="'+t+'"][href="'+h+'"]',typeof i=="string"&&(h+='[crossorigin="'+i+'"]'),Ty.has(h)||(Ty.add(h),t={rel:t,crossOrigin:i,href:n},s.querySelector(h)===null&&(n=s.createElement("link"),Qe(n,"link",t),he(n),s.head.appendChild(n)))}}function k1(t){qr.D(t),Ay("dns-prefetch",t,null)}function V1(t,n){qr.C(t,n),Ay("preconnect",t,n)}function P1(t,n,i){qr.L(t,n,i);var s=bo;if(s&&t&&n){var h='link[rel="preload"][as="'+ye(n)+'"]';n==="image"&&i&&i.imageSrcSet?(h+='[imagesrcset="'+ye(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(h+='[imagesizes="'+ye(i.imageSizes)+'"]')):h+='[href="'+ye(t)+'"]';var f=h;switch(n){case"style":f=_o(t);break;case"script":f=Eo(t)}Vn.has(f)||(t=_({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),Vn.set(f,t),s.querySelector(h)!==null||n==="style"&&s.querySelector(Ys(f))||n==="script"&&s.querySelector(Ks(f))||(n=s.createElement("link"),Qe(n,"link",t),he(n),s.head.appendChild(n)))}}function U1(t,n){qr.m(t,n);var i=bo;if(i&&t){var s=n&&typeof n.as=="string"?n.as:"script",h='link[rel="modulepreload"][as="'+ye(s)+'"][href="'+ye(t)+'"]',f=h;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Eo(t)}if(!Vn.has(f)&&(t=_({rel:"modulepreload",href:t},n),Vn.set(f,t),i.querySelector(h)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Ks(f)))return}s=i.createElement("link"),Qe(s,"link",t),he(s),i.head.appendChild(s)}}}function z1(t,n,i){qr.S(t,n,i);var s=bo;if(s&&t){var h=nn(s).hoistableStyles,f=_o(t);n=n||"default";var b=h.get(f);if(!b){var E={loading:0,preload:null};if(b=s.querySelector(Ys(f)))E.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},i),(i=Vn.get(f))&&Gf(t,i);var w=b=s.createElement("link");he(w),Qe(w,"link",t),w._p=new Promise(function(q,X){w.onload=q,w.onerror=X}),w.addEventListener("load",function(){E.loading|=1}),w.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Hu(b,n,s)}b={type:"stylesheet",instance:b,count:1,state:E},h.set(f,b)}}}function L1(t,n){qr.X(t,n);var i=bo;if(i&&t){var s=nn(i).hoistableScripts,h=Eo(t),f=s.get(h);f||(f=i.querySelector(Ks(h)),f||(t=_({src:t,async:!0},n),(n=Vn.get(h))&&Ff(t,n),f=i.createElement("script"),he(f),Qe(f,"link",t),i.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(h,f))}}function j1(t,n){qr.M(t,n);var i=bo;if(i&&t){var s=nn(i).hoistableScripts,h=Eo(t),f=s.get(h);f||(f=i.querySelector(Ks(h)),f||(t=_({src:t,async:!0,type:"module"},n),(n=Vn.get(h))&&Ff(t,n),f=i.createElement("script"),he(f),Qe(f,"link",t),i.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(h,f))}}function Sy(t,n,i,s){var h=(h=Tt.current)?qu(h):null;if(!h)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=_o(i.href),i=nn(h).hoistableStyles,s=i.get(n),s||(s={type:"style",instance:null,count:0,state:null},i.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=_o(i.href);var f=nn(h).hoistableStyles,b=f.get(t);if(b||(h=h.ownerDocument||h,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,b),(f=h.querySelector(Ys(t)))&&!f._p&&(b.instance=f,b.state.loading=5),Vn.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Vn.set(t,i),f||B1(h,t,i,b.state))),n&&s===null)throw Error(o(528,""));return b}if(n&&s!==null)throw Error(o(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Eo(i),i=nn(h).hoistableScripts,s=i.get(n),s||(s={type:"script",instance:null,count:0,state:null},i.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function _o(t){return'href="'+ye(t)+'"'}function Ys(t){return'link[rel="stylesheet"]['+t+"]"}function xy(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function B1(t,n,i,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Qe(n,"link",i),he(n),t.head.appendChild(n))}function Eo(t){return'[src="'+ye(t)+'"]'}function Ks(t){return"script[async]"+t}function wy(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ye(i.href)+'"]');if(s)return n.instance=s,he(s),s;var h=_({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),he(s),Qe(s,"style",h),Hu(s,i.precedence,t),n.instance=s;case"stylesheet":h=_o(i.href);var f=t.querySelector(Ys(h));if(f)return n.state.loading|=4,n.instance=f,he(f),f;s=xy(i),(h=Vn.get(h))&&Gf(s,h),f=(t.ownerDocument||t).createElement("link"),he(f);var b=f;return b._p=new Promise(function(E,w){b.onload=E,b.onerror=w}),Qe(f,"link",s),n.state.loading|=4,Hu(f,i.precedence,t),n.instance=f;case"script":return f=Eo(i.src),(h=t.querySelector(Ks(f)))?(n.instance=h,he(h),h):(s=i,(h=Vn.get(f))&&(s=_({},i),Ff(s,h)),t=t.ownerDocument||t,h=t.createElement("script"),he(h),Qe(h,"link",s),t.head.appendChild(h),n.instance=h);case"void":return null;default:throw Error(o(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Hu(s,i.precedence,t));return n.instance}function Hu(t,n,i){for(var s=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=s.length?s[s.length-1]:null,f=h,b=0;b<s.length;b++){var E=s[b];if(E.dataset.precedence===n)f=E;else if(f!==h)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function Gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ff(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Gu=null;function Ry(t,n,i){if(Gu===null){var s=new Map,h=Gu=new Map;h.set(i,s)}else h=Gu,s=h.get(i),s||(s=new Map,h.set(i,s));if(s.has(t))return s;for(s.set(t,null),i=i.getElementsByTagName(t),h=0;h<i.length;h++){var f=i[h];if(!(f[Ya]||f[xe]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var b=f.getAttribute(n)||"";b=t+b;var E=s.get(b);E?E.push(f):s.set(b,[f])}}return s}function Cy(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function q1(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Oy(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Xs=null;function H1(){}function G1(t,n,i){if(Xs===null)throw Error(o(475));var s=Xs;if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var h=_o(i.href),f=t.querySelector(Ys(h));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Fu.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,he(f);return}f=t.ownerDocument||t,i=xy(i),(h=Vn.get(h))&&Gf(i,h),f=f.createElement("link"),he(f);var b=f;b._p=new Promise(function(E,w){b.onload=E,b.onerror=w}),Qe(f,"link",i),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Fu.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function F1(){if(Xs===null)throw Error(o(475));var t=Xs;return t.stylesheets&&t.count===0&&Qf(t,t.stylesheets),0<t.count?function(n){var i=setTimeout(function(){if(t.stylesheets&&Qf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i)}}:null}function Fu(){if(this.count--,this.count===0){if(this.stylesheets)Qf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Qu=null;function Qf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Qu=new Map,n.forEach(Q1,t),Qu=null,Fu.call(t))}function Q1(t,n){if(!(n.state.loading&4)){var i=Qu.get(t);if(i)var s=i.get(null);else{i=new Map,Qu.set(t,i);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var b=h[f];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(i.set(b.dataset.precedence,b),s=b)}s&&i.set(null,s)}h=n.instance,b=h.getAttribute("data-precedence"),f=i.get(b)||s,f===s&&i.set(null,h),i.set(b,h),this.count++,s=Fu.bind(this),h.addEventListener("load",s),h.addEventListener("error",s),f?f.parentNode.insertBefore(h,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),n.state.loading|=4}}var $s={$$typeof:tt,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function Y1(t,n,i,s,h,f,b,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vr(0),this.hiddenUpdates=vr(null),this.identifierPrefix=s,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Dy(t,n,i,s,h,f,b,E,w,q,X,J){return t=new Y1(t,n,i,b,E,w,q,J),n=1,f===!0&&(n|=24),f=mn(3,null,null,n),t.current=f,f.stateNode=t,n=wh(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:i,cache:n},Dh(f),t}function Ny(t){return t?(t=Zi,t):Zi}function Iy(t,n,i,s,h,f){h=Ny(h),s.context===null?s.context=h:s.pendingContext=h,s=ia(n),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=oa(t,s,n),i!==null&&(bn(i,t,n),ws(i,t,n))}function My(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function Yf(t,n){My(t,n),(t=t.alternate)&&My(t,n)}function ky(t){if(t.tag===13){var n=$i(t,67108864);n!==null&&bn(n,t,67108864),Yf(t,67108864)}}var Yu=!0;function K1(t,n,i,s){var h=K.T;K.T=null;var f=ot.p;try{ot.p=2,Kf(t,n,i,s)}finally{ot.p=f,K.T=h}}function X1(t,n,i,s){var h=K.T;K.T=null;var f=ot.p;try{ot.p=8,Kf(t,n,i,s)}finally{ot.p=f,K.T=h}}function Kf(t,n,i,s){if(Yu){var h=Xf(s);if(h===null)Vf(t,n,s,Ku,i),Py(t,s);else if(Z1(h,t,n,i,s))s.stopPropagation();else if(Py(t,s),n&4&&-1<$1.indexOf(t)){for(;h!==null;){var f=Kn(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var b=Un(f.pendingLanes);if(b!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;b;){var w=1<<31-Xe(b);E.entanglements[1]|=w,b&=~w}lr(f),(Gt&6)===0&&(Nu=An()+500,Hs(0))}}break;case 13:E=$i(f,2),E!==null&&bn(E,f,2),Mu(),Yf(f,2)}if(f=Xf(s),f===null&&Vf(t,n,s,Ku,i),f===h)break;h=f}h!==null&&s.stopPropagation()}else Vf(t,n,s,null,i)}}function Xf(t){return t=wn(t),$f(t)}var Ku=null;function $f(t){if(Ku=null,t=_r(t),t!==null){var n=c(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=d(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Ku=t,null}function Vy(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jc()){case Ko:return 2;case Oi:return 8;case qa:case Wc:return 32;case Di:return 268435456;default:return 32}default:return 32}}var Zf=!1,ba=null,_a=null,Ea=null,Zs=new Map,Js=new Map,Ta=[],$1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Py(t,n){switch(t){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":Zs.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(n.pointerId)}}function Ws(t,n,i,s,h,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:i,eventSystemFlags:s,nativeEvent:f,targetContainers:[h]},n!==null&&(n=Kn(n),n!==null&&ky(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,h!==null&&n.indexOf(h)===-1&&n.push(h),t)}function Z1(t,n,i,s,h){switch(n){case"focusin":return ba=Ws(ba,t,n,i,s,h),!0;case"dragenter":return _a=Ws(_a,t,n,i,s,h),!0;case"mouseover":return Ea=Ws(Ea,t,n,i,s,h),!0;case"pointerover":var f=h.pointerId;return Zs.set(f,Ws(Zs.get(f)||null,t,n,i,s,h)),!0;case"gotpointercapture":return f=h.pointerId,Js.set(f,Ws(Js.get(f)||null,t,n,i,s,h)),!0}return!1}function Uy(t){var n=_r(t.target);if(n!==null){var i=c(n);if(i!==null){if(n=i.tag,n===13){if(n=d(i),n!==null){t.blockedOn=n,Ml(t.priority,function(){if(i.tag===13){var s=vn();s=$r(s);var h=$i(i,s);h!==null&&bn(h,i,s),Yf(i,s)}});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=Xf(t.nativeEvent);if(i===null){i=t.nativeEvent;var s=new i.constructor(i.type,i);Sr=s,i.target.dispatchEvent(s),Sr=null}else return n=Kn(i),n!==null&&ky(n),t.blockedOn=i,!1;n.shift()}return!0}function zy(t,n,i){Xu(t)&&i.delete(n)}function J1(){Zf=!1,ba!==null&&Xu(ba)&&(ba=null),_a!==null&&Xu(_a)&&(_a=null),Ea!==null&&Xu(Ea)&&(Ea=null),Zs.forEach(zy),Js.forEach(zy)}function $u(t,n){t.blockedOn===n&&(t.blockedOn=null,Zf||(Zf=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,J1)))}var Zu=null;function Ly(t){Zu!==t&&(Zu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Zu===t&&(Zu=null);for(var n=0;n<t.length;n+=3){var i=t[n],s=t[n+1],h=t[n+2];if(typeof s!="function"){if($f(s||i)===null)continue;break}var f=Kn(i);f!==null&&(t.splice(n,3),n-=3,Xh(f,{pending:!0,data:h,method:i.method,action:s},s,h))}}))}function tl(t){function n(w){return $u(w,t)}ba!==null&&$u(ba,t),_a!==null&&$u(_a,t),Ea!==null&&$u(Ea,t),Zs.forEach(n),Js.forEach(n);for(var i=0;i<Ta.length;i++){var s=Ta[i];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ta.length&&(i=Ta[0],i.blockedOn===null);)Uy(i),i.blockedOn===null&&Ta.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(s=0;s<i.length;s+=3){var h=i[s],f=i[s+1],b=h[ge]||null;if(typeof f=="function")b||Ly(i);else if(b){var E=null;if(f&&f.hasAttribute("formAction")){if(h=f,b=f[ge]||null)E=b.formAction;else if($f(h)!==null)continue}else E=b.action;typeof E=="function"?i[s+1]=E:(i.splice(s,3),s-=3),Ly(i)}}}function Jf(t){this._internalRoot=t}Ju.prototype.render=Jf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(o(409));var i=n.current,s=vn();Iy(i,s,t,n,null,null)},Ju.prototype.unmount=Jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Iy(t.current,2,null,t,null,null),Mu(),n[Sn]=null}};function Ju(t){this._internalRoot=t}Ju.prototype.unstable_scheduleHydration=function(t){if(t){var n=Zr();t={blockedOn:null,target:t,priority:n};for(var i=0;i<Ta.length&&n!==0&&n<Ta[i].priority;i++);Ta.splice(i,0,t),i===0&&Uy(t)}};var jy=e.version;if(jy!=="19.1.0")throw Error(o(527,jy,"19.1.0"));ot.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=g(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var W1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wu.isDisabled&&Wu.supportsFiber)try{le=Wu.inject(W1),Ht=Wu}catch{}}return nl.createRoot=function(t,n){if(!l(t))throw Error(o(299));var i=!1,s="",h=ng,f=rg,b=ag,E=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=Dy(t,1,!1,null,null,i,s,h,f,b,E,null),t[Sn]=n.current,kf(t),new Jf(n)},nl.hydrateRoot=function(t,n,i){if(!l(t))throw Error(o(299));var s=!1,h="",f=ng,b=rg,E=ag,w=null,q=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(h=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(b=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(w=i.unstable_transitionCallbacks),i.formState!==void 0&&(q=i.formState)),n=Dy(t,1,!0,n,i??null,s,h,f,b,E,w,q),n.context=Ny(null),i=n.current,s=vn(),s=$r(s),h=ia(s),h.callback=null,oa(i,h,s),i=s,n.current.lanes=i,br(n,i),lr(n),t[Sn]=n.current,kf(t),new Ju(n)},nl.version="19.1.0",nl}var $y;function cE(){if($y)return ed.exports;$y=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),ed.exports=uE(),ed.exports}var hE=cE(),rl={},Zy;function fE(){if(Zy)return rl;Zy=1,Object.defineProperty(rl,"__esModule",{value:!0}),rl.parse=d,rl.serialize=y;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const C=function(){};return C.prototype=Object.create(null),C})();function d(C,U){const V=new c,L=C.length;if(L<2)return V;const H=(U==null?void 0:U.decode)||_;let Z=0;do{const at=C.indexOf("=",Z);if(at===-1)break;const tt=C.indexOf(";",Z),ft=tt===-1?L:tt;if(at>ft){Z=C.lastIndexOf(";",at-1)+1;continue}const lt=p(C,Z,at),_t=g(C,at,lt),N=C.slice(lt,_t);if(V[N]===void 0){let A=p(C,at+1,ft),x=g(C,ft,A);const O=H(C.slice(A,x));V[N]=O}Z=ft+1}while(Z<L);return V}function p(C,U,V){do{const L=C.charCodeAt(U);if(L!==32&&L!==9)return U}while(++U<V);return V}function g(C,U,V){for(;U>V;){const L=C.charCodeAt(--U);if(L!==32&&L!==9)return U+1}return V}function y(C,U,V){const L=(V==null?void 0:V.encode)||encodeURIComponent;if(!a.test(C))throw new TypeError(`argument name is invalid: ${C}`);const H=L(U);if(!e.test(H))throw new TypeError(`argument val is invalid: ${U}`);let Z=C+"="+H;if(!V)return Z;if(V.maxAge!==void 0){if(!Number.isInteger(V.maxAge))throw new TypeError(`option maxAge is invalid: ${V.maxAge}`);Z+="; Max-Age="+V.maxAge}if(V.domain){if(!r.test(V.domain))throw new TypeError(`option domain is invalid: ${V.domain}`);Z+="; Domain="+V.domain}if(V.path){if(!o.test(V.path))throw new TypeError(`option path is invalid: ${V.path}`);Z+="; Path="+V.path}if(V.expires){if(!S(V.expires)||!Number.isFinite(V.expires.valueOf()))throw new TypeError(`option expires is invalid: ${V.expires}`);Z+="; Expires="+V.expires.toUTCString()}if(V.httpOnly&&(Z+="; HttpOnly"),V.secure&&(Z+="; Secure"),V.partitioned&&(Z+="; Partitioned"),V.priority)switch(typeof V.priority=="string"?V.priority.toLowerCase():void 0){case"low":Z+="; Priority=Low";break;case"medium":Z+="; Priority=Medium";break;case"high":Z+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${V.priority}`)}if(V.sameSite)switch(typeof V.sameSite=="string"?V.sameSite.toLowerCase():V.sameSite){case!0:case"strict":Z+="; SameSite=Strict";break;case"lax":Z+="; SameSite=Lax";break;case"none":Z+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${V.sameSite}`)}return Z}function _(C){if(C.indexOf("%")===-1)return C;try{return decodeURIComponent(C)}catch{return C}}function S(C){return l.call(C)==="[object Date]"}return rl}fE();var Jy="popstate";function dE(a={}){function e(o,l){let{pathname:c,search:d,hash:p}=o.location;return vd("",{pathname:c,search:d,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(o,l){return typeof l=="string"?l:ml(l)}return pE(e,r,null,a)}function oe(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function dr(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mE(){return Math.random().toString(36).substring(2,10)}function Wy(a,e){return{usr:a.state,key:a.key,idx:e}}function vd(a,e,r=null,o){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?zo(e):e,state:r,key:e&&e.key||o||mE()}}function ml({pathname:a="/",search:e="",hash:r=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),r&&r!=="#"&&(a+=r.charAt(0)==="#"?r:"#"+r),a}function zo(a){let e={};if(a){let r=a.indexOf("#");r>=0&&(e.hash=a.substring(r),a=a.substring(0,r));let o=a.indexOf("?");o>=0&&(e.search=a.substring(o),a=a.substring(0,o)),a&&(e.pathname=a)}return e}function pE(a,e,r,o={}){let{window:l=document.defaultView,v5Compat:c=!1}=o,d=l.history,p="POP",g=null,y=_();y==null&&(y=0,d.replaceState({...d.state,idx:y},""));function _(){return(d.state||{idx:null}).idx}function S(){p="POP";let H=_(),Z=H==null?null:H-y;y=H,g&&g({action:p,location:L.location,delta:Z})}function C(H,Z){p="PUSH";let at=vd(L.location,H,Z);y=_()+1;let tt=Wy(at,y),ft=L.createHref(at);try{d.pushState(tt,"",ft)}catch(lt){if(lt instanceof DOMException&&lt.name==="DataCloneError")throw lt;l.location.assign(ft)}c&&g&&g({action:p,location:L.location,delta:1})}function U(H,Z){p="REPLACE";let at=vd(L.location,H,Z);y=_();let tt=Wy(at,y),ft=L.createHref(at);d.replaceState(tt,"",ft),c&&g&&g({action:p,location:L.location,delta:0})}function V(H){let Z=l.location.origin!=="null"?l.location.origin:l.location.href,at=typeof H=="string"?H:ml(H);return at=at.replace(/ $/,"%20"),oe(Z,`No window.location.(origin|href) available to create URL for href: ${at}`),new URL(at,Z)}let L={get action(){return p},get location(){return a(l,d)},listen(H){if(g)throw new Error("A history only accepts one active listener");return l.addEventListener(Jy,S),g=H,()=>{l.removeEventListener(Jy,S),g=null}},createHref(H){return e(l,H)},createURL:V,encodeLocation(H){let Z=V(H);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:C,replace:U,go(H){return d.go(H)}};return L}function Sv(a,e,r="/"){return gE(a,e,r,!1)}function gE(a,e,r,o){let l=typeof e=="string"?zo(e):e,c=Fr(l.pathname||"/",r);if(c==null)return null;let d=xv(a);yE(d);let p=null;for(let g=0;p==null&&g<d.length;++g){let y=CE(c);p=wE(d[g],y,o)}return p}function xv(a,e=[],r=[],o=""){let l=(c,d,p)=>{let g={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};g.relativePath.startsWith("/")&&(oe(g.relativePath.startsWith(o),`Absolute route path "${g.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(o.length));let y=Gr([o,g.relativePath]),_=r.concat(g);c.children&&c.children.length>0&&(oe(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),xv(c.children,e,_,y)),!(c.path==null&&!c.index)&&e.push({path:y,score:SE(y,c.index),routesMeta:_})};return a.forEach((c,d)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))l(c,d);else for(let g of wv(c.path))l(c,d,g)}),e}function wv(a){let e=a.split("/");if(e.length===0)return[];let[r,...o]=e,l=r.endsWith("?"),c=r.replace(/\?$/,"");if(o.length===0)return l?[c,""]:[c];let d=wv(o.join("/")),p=[];return p.push(...d.map(g=>g===""?c:[c,g].join("/"))),l&&p.push(...d),p.map(g=>a.startsWith("/")&&g===""?"/":g)}function yE(a){a.sort((e,r)=>e.score!==r.score?r.score-e.score:xE(e.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}var vE=/^:[\w-]+$/,bE=3,_E=2,EE=1,TE=10,AE=-2,t0=a=>a==="*";function SE(a,e){let r=a.split("/"),o=r.length;return r.some(t0)&&(o+=AE),e&&(o+=_E),r.filter(l=>!t0(l)).reduce((l,c)=>l+(vE.test(c)?bE:c===""?EE:TE),o)}function xE(a,e){return a.length===e.length&&a.slice(0,-1).every((o,l)=>o===e[l])?a[a.length-1]-e[e.length-1]:0}function wE(a,e,r=!1){let{routesMeta:o}=a,l={},c="/",d=[];for(let p=0;p<o.length;++p){let g=o[p],y=p===o.length-1,_=c==="/"?e:e.slice(c.length)||"/",S=yc({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},_),C=g.route;if(!S&&y&&r&&!o[o.length-1].route.index&&(S=yc({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},_)),!S)return null;Object.assign(l,S.params),d.push({params:l,pathname:Gr([c,S.pathname]),pathnameBase:IE(Gr([c,S.pathnameBase])),route:C}),S.pathnameBase!=="/"&&(c=Gr([c,S.pathnameBase]))}return d}function yc(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[r,o]=RE(a.path,a.caseSensitive,a.end),l=e.match(r);if(!l)return null;let c=l[0],d=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:o.reduce((y,{paramName:_,isOptional:S},C)=>{if(_==="*"){let V=p[C]||"";d=c.slice(0,c.length-V.length).replace(/(.)\/+$/,"$1")}const U=p[C];return S&&!U?y[_]=void 0:y[_]=(U||"").replace(/%2F/g,"/"),y},{}),pathname:c,pathnameBase:d,pattern:a}}function RE(a,e=!1,r=!0){dr(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,g)=>(o.push({paramName:p,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(o.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),o]}function CE(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return dr(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function Fr(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,o=a.charAt(r);return o&&o!=="/"?null:a.slice(r)||"/"}function OE(a,e="/"){let{pathname:r,search:o="",hash:l=""}=typeof a=="string"?zo(a):a;return{pathname:r?r.startsWith("/")?r:DE(r,e):e,search:ME(o),hash:kE(l)}}function DE(a,e){let r=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function id(a,e,r,o){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function NE(a){return a.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function Rv(a){let e=NE(a);return e.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase)}function Cv(a,e,r,o=!1){let l;typeof a=="string"?l=zo(a):(l={...a},oe(!l.pathname||!l.pathname.includes("?"),id("?","pathname","search",l)),oe(!l.pathname||!l.pathname.includes("#"),id("#","pathname","hash",l)),oe(!l.search||!l.search.includes("#"),id("#","search","hash",l)));let c=a===""||l.pathname==="",d=c?"/":l.pathname,p;if(d==null)p=r;else{let S=e.length-1;if(!o&&d.startsWith("..")){let C=d.split("/");for(;C[0]==="..";)C.shift(),S-=1;l.pathname=C.join("/")}p=S>=0?e[S]:"/"}let g=OE(l,p),y=d&&d!=="/"&&d.endsWith("/"),_=(c||d===".")&&r.endsWith("/");return!g.pathname.endsWith("/")&&(y||_)&&(g.pathname+="/"),g}var Gr=a=>a.join("/").replace(/\/\/+/g,"/"),IE=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),ME=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,kE=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function VE(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Ov=["POST","PUT","PATCH","DELETE"];new Set(Ov);var PE=["GET",...Ov];new Set(PE);var Lo=Y.createContext(null);Lo.displayName="DataRouter";var kc=Y.createContext(null);kc.displayName="DataRouterState";var Dv=Y.createContext({isTransitioning:!1});Dv.displayName="ViewTransition";var UE=Y.createContext(new Map);UE.displayName="Fetchers";var zE=Y.createContext(null);zE.displayName="Await";var pr=Y.createContext(null);pr.displayName="Navigation";var Al=Y.createContext(null);Al.displayName="Location";var gr=Y.createContext({outlet:null,matches:[],isDataRoute:!1});gr.displayName="Route";var Qd=Y.createContext(null);Qd.displayName="RouteError";function LE(a,{relative:e}={}){oe(Sl(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=Y.useContext(pr),{hash:l,pathname:c,search:d}=xl(a,{relative:e}),p=c;return r!=="/"&&(p=c==="/"?r:Gr([r,c])),o.createHref({pathname:p,search:d,hash:l})}function Sl(){return Y.useContext(Al)!=null}function Ri(){return oe(Sl(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(Al).location}var Nv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Iv(a){Y.useContext(pr).static||Y.useLayoutEffect(a)}function jo(){let{isDataRoute:a}=Y.useContext(gr);return a?JE():jE()}function jE(){oe(Sl(),"useNavigate() may be used only in the context of a <Router> component.");let a=Y.useContext(Lo),{basename:e,navigator:r}=Y.useContext(pr),{matches:o}=Y.useContext(gr),{pathname:l}=Ri(),c=JSON.stringify(Rv(o)),d=Y.useRef(!1);return Iv(()=>{d.current=!0}),Y.useCallback((g,y={})=>{if(dr(d.current,Nv),!d.current)return;if(typeof g=="number"){r.go(g);return}let _=Cv(g,JSON.parse(c),l,y.relative==="path");a==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Gr([e,_.pathname])),(y.replace?r.replace:r.push)(_,y.state,y)},[e,r,c,l,a])}Y.createContext(null);function Mv(){let{matches:a}=Y.useContext(gr),e=a[a.length-1];return e?e.params:{}}function xl(a,{relative:e}={}){let{matches:r}=Y.useContext(gr),{pathname:o}=Ri(),l=JSON.stringify(Rv(r));return Y.useMemo(()=>Cv(a,JSON.parse(l),o,e==="path"),[a,l,o,e])}function BE(a,e){return kv(a,e)}function kv(a,e,r,o){var at;oe(Sl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:c}=Y.useContext(pr),{matches:d}=Y.useContext(gr),p=d[d.length-1],g=p?p.params:{},y=p?p.pathname:"/",_=p?p.pathnameBase:"/",S=p&&p.route;{let tt=S&&S.path||"";Vv(y,!S||tt.endsWith("*")||tt.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${tt}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${tt}"> to <Route path="${tt==="/"?"*":`${tt}/*`}">.`)}let C=Ri(),U;if(e){let tt=typeof e=="string"?zo(e):e;oe(_==="/"||((at=tt.pathname)==null?void 0:at.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${tt.pathname}" was given in the \`location\` prop.`),U=tt}else U=C;let V=U.pathname||"/",L=V;if(_!=="/"){let tt=_.replace(/^\//,"").split("/");L="/"+V.replace(/^\//,"").split("/").slice(tt.length).join("/")}let H=!c&&r&&r.matches&&r.matches.length>0?r.matches:Sv(a,{pathname:L});dr(S||H!=null,`No routes matched location "${U.pathname}${U.search}${U.hash}" `),dr(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Z=QE(H&&H.map(tt=>Object.assign({},tt,{params:Object.assign({},g,tt.params),pathname:Gr([_,l.encodeLocation?l.encodeLocation(tt.pathname).pathname:tt.pathname]),pathnameBase:tt.pathnameBase==="/"?_:Gr([_,l.encodeLocation?l.encodeLocation(tt.pathnameBase).pathname:tt.pathnameBase])})),d,r,o);return e&&Z?Y.createElement(Al.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...U},navigationType:"POP"}},Z):Z}function qE(){let a=ZE(),e=VE(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),r=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:o},c={padding:"2px 4px",backgroundColor:o},d=null;return console.error("Error handled by React Router default ErrorBoundary:",a),d=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:c},"ErrorBoundary")," or"," ",Y.createElement("code",{style:c},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),r?Y.createElement("pre",{style:l},r):null,d)}var HE=Y.createElement(qE,null),GE=class extends Y.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){console.error("React Router caught the following error during render",a,e)}render(){return this.state.error!==void 0?Y.createElement(gr.Provider,{value:this.props.routeContext},Y.createElement(Qd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function FE({routeContext:a,match:e,children:r}){let o=Y.useContext(Lo);return o&&o.static&&o.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=e.route.id),Y.createElement(gr.Provider,{value:a},r)}function QE(a,e=[],r=null,o=null){if(a==null){if(!r)return null;if(r.errors)a=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)a=r.matches;else return null}let l=a,c=r==null?void 0:r.errors;if(c!=null){let g=l.findIndex(y=>y.route.id&&(c==null?void 0:c[y.route.id])!==void 0);oe(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,g+1))}let d=!1,p=-1;if(r)for(let g=0;g<l.length;g++){let y=l[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(p=g),y.route.id){let{loaderData:_,errors:S}=r,C=y.route.loader&&!_.hasOwnProperty(y.route.id)&&(!S||S[y.route.id]===void 0);if(y.route.lazy||C){d=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((g,y,_)=>{let S,C=!1,U=null,V=null;r&&(S=c&&y.route.id?c[y.route.id]:void 0,U=y.route.errorElement||HE,d&&(p<0&&_===0?(Vv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,V=null):p===_&&(C=!0,V=y.route.hydrateFallbackElement||null)));let L=e.concat(l.slice(0,_+1)),H=()=>{let Z;return S?Z=U:C?Z=V:y.route.Component?Z=Y.createElement(y.route.Component,null):y.route.element?Z=y.route.element:Z=g,Y.createElement(FE,{match:y,routeContext:{outlet:g,matches:L,isDataRoute:r!=null},children:Z})};return r&&(y.route.ErrorBoundary||y.route.errorElement||_===0)?Y.createElement(GE,{location:r.location,revalidation:r.revalidation,component:U,error:S,children:H(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):H()},null)}function Yd(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function YE(a){let e=Y.useContext(Lo);return oe(e,Yd(a)),e}function KE(a){let e=Y.useContext(kc);return oe(e,Yd(a)),e}function XE(a){let e=Y.useContext(gr);return oe(e,Yd(a)),e}function Kd(a){let e=XE(a),r=e.matches[e.matches.length-1];return oe(r.route.id,`${a} can only be used on routes that contain a unique "id"`),r.route.id}function $E(){return Kd("useRouteId")}function ZE(){var o;let a=Y.useContext(Qd),e=KE("useRouteError"),r=Kd("useRouteError");return a!==void 0?a:(o=e.errors)==null?void 0:o[r]}function JE(){let{router:a}=YE("useNavigate"),e=Kd("useNavigate"),r=Y.useRef(!1);return Iv(()=>{r.current=!0}),Y.useCallback(async(l,c={})=>{dr(r.current,Nv),r.current&&(typeof l=="number"?a.navigate(l):await a.navigate(l,{fromRouteId:e,...c}))},[a,e])}var e0={};function Vv(a,e,r){!e&&!e0[a]&&(e0[a]=!0,dr(!1,r))}Y.memo(WE);function WE({routes:a,future:e,state:r}){return kv(a,void 0,r,e)}function xa(a){oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function tT({basename:a="/",children:e=null,location:r,navigationType:o="POP",navigator:l,static:c=!1}){oe(!Sl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=a.replace(/^\/*/,"/"),p=Y.useMemo(()=>({basename:d,navigator:l,static:c,future:{}}),[d,l,c]);typeof r=="string"&&(r=zo(r));let{pathname:g="/",search:y="",hash:_="",state:S=null,key:C="default"}=r,U=Y.useMemo(()=>{let V=Fr(g,d);return V==null?null:{location:{pathname:V,search:y,hash:_,state:S,key:C},navigationType:o}},[d,g,y,_,S,C,o]);return dr(U!=null,`<Router basename="${d}"> is not able to match the URL "${g}${y}${_}" because it does not start with the basename, so the <Router> won't render anything.`),U==null?null:Y.createElement(pr.Provider,{value:p},Y.createElement(Al.Provider,{children:e,value:U}))}function eT({children:a,location:e}){return BE(bd(a),e)}function bd(a,e=[]){let r=[];return Y.Children.forEach(a,(o,l)=>{if(!Y.isValidElement(o))return;let c=[...e,l];if(o.type===Y.Fragment){r.push.apply(r,bd(o.props.children,c));return}oe(o.type===xa,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),oe(!o.props.index||!o.props.children,"An index route cannot have child routes.");let d={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(d.children=bd(o.props.children,c)),r.push(d)}),r}var cc="get",hc="application/x-www-form-urlencoded";function Vc(a){return a!=null&&typeof a.tagName=="string"}function nT(a){return Vc(a)&&a.tagName.toLowerCase()==="button"}function rT(a){return Vc(a)&&a.tagName.toLowerCase()==="form"}function aT(a){return Vc(a)&&a.tagName.toLowerCase()==="input"}function iT(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function oT(a,e){return a.button===0&&(!e||e==="_self")&&!iT(a)}var tc=null;function sT(){if(tc===null)try{new FormData(document.createElement("form"),0),tc=!1}catch{tc=!0}return tc}var lT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function od(a){return a!=null&&!lT.has(a)?(dr(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${hc}"`),null):a}function uT(a,e){let r,o,l,c,d;if(rT(a)){let p=a.getAttribute("action");o=p?Fr(p,e):null,r=a.getAttribute("method")||cc,l=od(a.getAttribute("enctype"))||hc,c=new FormData(a)}else if(nT(a)||aT(a)&&(a.type==="submit"||a.type==="image")){let p=a.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=a.getAttribute("formaction")||p.getAttribute("action");if(o=g?Fr(g,e):null,r=a.getAttribute("formmethod")||p.getAttribute("method")||cc,l=od(a.getAttribute("formenctype"))||od(p.getAttribute("enctype"))||hc,c=new FormData(p,a),!sT()){let{name:y,type:_,value:S}=a;if(_==="image"){let C=y?`${y}.`:"";c.append(`${C}x`,"0"),c.append(`${C}y`,"0")}else y&&c.append(y,S)}}else{if(Vc(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=cc,o=null,l=hc,d=a}return c&&l==="text/plain"&&(d=c,c=void 0),{action:o,method:r.toLowerCase(),encType:l,formData:c,body:d}}function Xd(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}async function cT(a,e){if(a.id in e)return e[a.id];try{let r=await import(a.module);return e[a.id]=r,r}catch(r){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hT(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function fT(a,e,r){let o=await Promise.all(a.map(async l=>{let c=e.routes[l.route.id];if(c){let d=await cT(c,r);return d.links?d.links():[]}return[]}));return gT(o.flat(1).filter(hT).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function n0(a,e,r,o,l,c){let d=(g,y)=>r[y]?g.route.id!==r[y].route.id:!0,p=(g,y)=>{var _;return r[y].pathname!==g.pathname||((_=r[y].route.path)==null?void 0:_.endsWith("*"))&&r[y].params["*"]!==g.params["*"]};return c==="assets"?e.filter((g,y)=>d(g,y)||p(g,y)):c==="data"?e.filter((g,y)=>{var S;let _=o.routes[g.route.id];if(!_||!_.hasLoader)return!1;if(d(g,y)||p(g,y))return!0;if(g.route.shouldRevalidate){let C=g.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((S=r[0])==null?void 0:S.params)||{},nextUrl:new URL(a,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function dT(a,e,{includeHydrateFallback:r}={}){return mT(a.map(o=>{let l=e.routes[o.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),r&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function mT(a){return[...new Set(a)]}function pT(a){let e={},r=Object.keys(a).sort();for(let o of r)e[o]=a[o];return e}function gT(a,e){let r=new Set;return new Set(e),a.reduce((o,l)=>{let c=JSON.stringify(pT(l));return r.has(c)||(r.add(c),o.push({key:c,link:l})),o},[])}var yT=new Set([100,101,204,205]);function vT(a,e){let r=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return r.pathname==="/"?r.pathname="_root.data":e&&Fr(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function Pv(){let a=Y.useContext(Lo);return Xd(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function bT(){let a=Y.useContext(kc);return Xd(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var $d=Y.createContext(void 0);$d.displayName="FrameworkContext";function Uv(){let a=Y.useContext($d);return Xd(a,"You must render this element inside a <HydratedRouter> element"),a}function _T(a,e){let r=Y.useContext($d),[o,l]=Y.useState(!1),[c,d]=Y.useState(!1),{onFocus:p,onBlur:g,onMouseEnter:y,onMouseLeave:_,onTouchStart:S}=e,C=Y.useRef(null);Y.useEffect(()=>{if(a==="render"&&d(!0),a==="viewport"){let L=Z=>{Z.forEach(at=>{d(at.isIntersecting)})},H=new IntersectionObserver(L,{threshold:.5});return C.current&&H.observe(C.current),()=>{H.disconnect()}}},[a]),Y.useEffect(()=>{if(o){let L=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(L)}}},[o]);let U=()=>{l(!0)},V=()=>{l(!1),d(!1)};return r?a!=="intent"?[c,C,{}]:[c,C,{onFocus:al(p,U),onBlur:al(g,V),onMouseEnter:al(y,U),onMouseLeave:al(_,V),onTouchStart:al(S,U)}]:[!1,C,{}]}function al(a,e){return r=>{a&&a(r),r.defaultPrevented||e(r)}}function ET({page:a,...e}){let{router:r}=Pv(),o=Y.useMemo(()=>Sv(r.routes,a,r.basename),[r.routes,a,r.basename]);return o?Y.createElement(AT,{page:a,matches:o,...e}):null}function TT(a){let{manifest:e,routeModules:r}=Uv(),[o,l]=Y.useState([]);return Y.useEffect(()=>{let c=!1;return fT(a,e,r).then(d=>{c||l(d)}),()=>{c=!0}},[a,e,r]),o}function AT({page:a,matches:e,...r}){let o=Ri(),{manifest:l,routeModules:c}=Uv(),{basename:d}=Pv(),{loaderData:p,matches:g}=bT(),y=Y.useMemo(()=>n0(a,e,g,l,o,"data"),[a,e,g,l,o]),_=Y.useMemo(()=>n0(a,e,g,l,o,"assets"),[a,e,g,l,o]),S=Y.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let V=new Set,L=!1;if(e.forEach(Z=>{var tt;let at=l.routes[Z.route.id];!at||!at.hasLoader||(!y.some(ft=>ft.route.id===Z.route.id)&&Z.route.id in p&&((tt=c[Z.route.id])!=null&&tt.shouldRevalidate)||at.hasClientLoader?L=!0:V.add(Z.route.id))}),V.size===0)return[];let H=vT(a,d);return L&&V.size>0&&H.searchParams.set("_routes",e.filter(Z=>V.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[H.pathname+H.search]},[d,p,o,l,y,e,a,c]),C=Y.useMemo(()=>dT(_,l),[_,l]),U=TT(_);return Y.createElement(Y.Fragment,null,S.map(V=>Y.createElement("link",{key:V,rel:"prefetch",as:"fetch",href:V,...r})),C.map(V=>Y.createElement("link",{key:V,rel:"modulepreload",href:V,...r})),U.map(({key:V,link:L})=>Y.createElement("link",{key:V,...L})))}function ST(...a){return e=>{a.forEach(r=>{typeof r=="function"?r(e):r!=null&&(r.current=e)})}}var zv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zv&&(window.__reactRouterVersion="7.5.3")}catch{}function xT({basename:a,children:e,window:r}){let o=Y.useRef();o.current==null&&(o.current=dE({window:r,v5Compat:!0}));let l=o.current,[c,d]=Y.useState({action:l.action,location:l.location}),p=Y.useCallback(g=>{Y.startTransition(()=>d(g))},[d]);return Y.useLayoutEffect(()=>l.listen(p),[l,p]),Y.createElement(tT,{basename:a,children:e,location:c.location,navigationType:c.action,navigator:l})}var Lv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qr=Y.forwardRef(function({onClick:e,discover:r="render",prefetch:o="none",relative:l,reloadDocument:c,replace:d,state:p,target:g,to:y,preventScrollReset:_,viewTransition:S,...C},U){let{basename:V}=Y.useContext(pr),L=typeof y=="string"&&Lv.test(y),H,Z=!1;if(typeof y=="string"&&L&&(H=y,zv))try{let x=new URL(window.location.href),O=y.startsWith("//")?new URL(x.protocol+y):new URL(y),M=Fr(O.pathname,V);O.origin===x.origin&&M!=null?y=M+O.search+O.hash:Z=!0}catch{dr(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let at=LE(y,{relative:l}),[tt,ft,lt]=_T(o,C),_t=CT(y,{replace:d,state:p,target:g,preventScrollReset:_,relative:l,viewTransition:S});function N(x){e&&e(x),x.defaultPrevented||_t(x)}let A=Y.createElement("a",{...C,...lt,href:H||at,onClick:Z||c?e:N,ref:ST(U,ft),target:g,"data-discover":!L&&r==="render"?"true":void 0});return tt&&!L?Y.createElement(Y.Fragment,null,A,Y.createElement(ET,{page:at})):A});Qr.displayName="Link";var To=Y.forwardRef(function({"aria-current":e="page",caseSensitive:r=!1,className:o="",end:l=!1,style:c,to:d,viewTransition:p,children:g,...y},_){let S=xl(d,{relative:y.relative}),C=Ri(),U=Y.useContext(kc),{navigator:V,basename:L}=Y.useContext(pr),H=U!=null&&MT(S)&&p===!0,Z=V.encodeLocation?V.encodeLocation(S).pathname:S.pathname,at=C.pathname,tt=U&&U.navigation&&U.navigation.location?U.navigation.location.pathname:null;r||(at=at.toLowerCase(),tt=tt?tt.toLowerCase():null,Z=Z.toLowerCase()),tt&&L&&(tt=Fr(tt,L)||tt);const ft=Z!=="/"&&Z.endsWith("/")?Z.length-1:Z.length;let lt=at===Z||!l&&at.startsWith(Z)&&at.charAt(ft)==="/",_t=tt!=null&&(tt===Z||!l&&tt.startsWith(Z)&&tt.charAt(Z.length)==="/"),N={isActive:lt,isPending:_t,isTransitioning:H},A=lt?e:void 0,x;typeof o=="function"?x=o(N):x=[o,lt?"active":null,_t?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let O=typeof c=="function"?c(N):c;return Y.createElement(Qr,{...y,"aria-current":A,className:x,ref:_,style:O,to:d,viewTransition:p},typeof g=="function"?g(N):g)});To.displayName="NavLink";var wT=Y.forwardRef(({discover:a="render",fetcherKey:e,navigate:r,reloadDocument:o,replace:l,state:c,method:d=cc,action:p,onSubmit:g,relative:y,preventScrollReset:_,viewTransition:S,...C},U)=>{let V=NT(),L=IT(p,{relative:y}),H=d.toLowerCase()==="get"?"get":"post",Z=typeof p=="string"&&Lv.test(p),at=tt=>{if(g&&g(tt),tt.defaultPrevented)return;tt.preventDefault();let ft=tt.nativeEvent.submitter,lt=(ft==null?void 0:ft.getAttribute("formmethod"))||d;V(ft||tt.currentTarget,{fetcherKey:e,method:lt,navigate:r,replace:l,state:c,relative:y,preventScrollReset:_,viewTransition:S})};return Y.createElement("form",{ref:U,method:H,action:L,onSubmit:o?g:at,...C,"data-discover":!Z&&a==="render"?"true":void 0})});wT.displayName="Form";function RT(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jv(a){let e=Y.useContext(Lo);return oe(e,RT(a)),e}function CT(a,{target:e,replace:r,state:o,preventScrollReset:l,relative:c,viewTransition:d}={}){let p=jo(),g=Ri(),y=xl(a,{relative:c});return Y.useCallback(_=>{if(oT(_,e)){_.preventDefault();let S=r!==void 0?r:ml(g)===ml(y);p(a,{replace:S,state:o,preventScrollReset:l,relative:c,viewTransition:d})}},[g,p,y,r,o,e,a,l,c,d])}var OT=0,DT=()=>`__${String(++OT)}__`;function NT(){let{router:a}=jv("useSubmit"),{basename:e}=Y.useContext(pr),r=$E();return Y.useCallback(async(o,l={})=>{let{action:c,method:d,encType:p,formData:g,body:y}=uT(o,e);if(l.navigate===!1){let _=l.fetcherKey||DT();await a.fetch(_,r,l.action||c,{preventScrollReset:l.preventScrollReset,formData:g,body:y,formMethod:l.method||d,formEncType:l.encType||p,flushSync:l.flushSync})}else await a.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:g,body:y,formMethod:l.method||d,formEncType:l.encType||p,replace:l.replace,state:l.state,fromRouteId:r,flushSync:l.flushSync,viewTransition:l.viewTransition})},[a,e,r])}function IT(a,{relative:e}={}){let{basename:r}=Y.useContext(pr),o=Y.useContext(gr);oe(o,"useFormAction must be used inside a RouteContext");let[l]=o.matches.slice(-1),c={...xl(a||".",{relative:e})},d=Ri();if(a==null){c.search=d.search;let p=new URLSearchParams(c.search),g=p.getAll("index");if(g.some(_=>_==="")){p.delete("index"),g.filter(S=>S).forEach(S=>p.append("index",S));let _=p.toString();c.search=_?`?${_}`:""}}return(!a||a===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(c.pathname=c.pathname==="/"?r:Gr([r,c.pathname])),ml(c)}function MT(a,e={}){let r=Y.useContext(Dv);oe(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=jv("useViewTransitionState"),l=xl(a,{relative:e.relative});if(!r.isTransitioning)return!1;let c=Fr(r.currentLocation.pathname,o)||r.currentLocation.pathname,d=Fr(r.nextLocation.pathname,o)||r.nextLocation.pathname;return yc(l.pathname,d)!=null||yc(l.pathname,c)!=null}new TextEncoder;[...yT];const kT="_navWrapper_uj5x0_1",VT="_nav_uj5x0_1",PT="_nav_logo_uj5x0_20",UT="_logo_uj5x0_24",zT="_nav_links_uj5x0_27",LT="_nav_link_uj5x0_27",jT="_nav_cart_uj5x0_66",BT="_cart_link_uj5x0_69",qT="_cart_icon_uj5x0_76",HT="_cart_container_uj5x0_80",GT="_cart_count_uj5x0_84",_n={navWrapper:kT,nav:VT,nav_logo:PT,logo:UT,nav_links:zT,nav_link:LT,nav_cart:jT,cart_link:BT,cart_icon:qT,cart_container:HT,cart_count:GT},FT="/ecommerce-store/assets/keyduplogo-DehzTni-.svg";var Bv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r0=De.createContext&&De.createContext(Bv),QT=["attr","size","title"];function YT(a,e){if(a==null)return{};var r=KT(a,e),o,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);for(l=0;l<c.length;l++)o=c[l],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(a,o)&&(r[o]=a[o])}return r}function KT(a,e){if(a==null)return{};var r={};for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){if(e.indexOf(o)>=0)continue;r[o]=a[o]}return r}function vc(){return vc=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(a[o]=r[o])}return a},vc.apply(this,arguments)}function a0(a,e){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);e&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable})),r.push.apply(r,o)}return r}function bc(a){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?a0(Object(r),!0).forEach(function(o){XT(a,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):a0(Object(r)).forEach(function(o){Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(r,o))})}return a}function XT(a,e,r){return e=$T(e),e in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r,a}function $T(a){var e=ZT(a,"string");return typeof e=="symbol"?e:e+""}function ZT(a,e){if(typeof a!="object"||!a)return a;var r=a[Symbol.toPrimitive];if(r!==void 0){var o=r.call(a,e);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function qv(a){return a&&a.map((e,r)=>De.createElement(e.tag,bc({key:r},e.attr),qv(e.child)))}function Zd(a){return e=>De.createElement(JT,vc({attr:bc({},a.attr)},e),qv(a.child))}function JT(a){var e=r=>{var{attr:o,size:l,title:c}=a,d=YT(a,QT),p=l||r.size||"1em",g;return r.className&&(g=r.className),a.className&&(g=(g?g+" ":"")+a.className),De.createElement("svg",vc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,d,{className:g,style:bc(bc({color:a.color||r.color},r.style),a.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),c&&De.createElement("title",null,c),a.children)};return r0!==void 0?De.createElement(r0.Consumer,null,r=>e(r)):e(Bv)}function WT(a){return Zd({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"},child:[]}]})(a)}function t2(a){return Zd({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"},child:[]}]})(a)}function e2(a){return Zd({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"},child:[]}]})(a)}const Hv=Y.createContext(),n2=({children:a})=>{const[e,r]=Y.useState([]);let o=0;e.forEach(y=>{o+=y.quantity});const g={cartItems:e,cartQuantity:o,addToCart:(y,_=1)=>{r(S=>S.find(U=>U.id===y.id)?S.map(U=>U.id===y.id?{...U,quantity:U.quantity+_}:U):[...S,{...y,quantity:_}])},removeFromCart:y=>{r(_=>_.filter(S=>S.id!==y))},updateQuantity:(y,_)=>r(S=>S.map(C=>C.id===y?{...C,quantity:_}:C)),clearCart:()=>{r([])}};return I.jsx(Hv.Provider,{value:g,children:a})},Pc=()=>Y.useContext(Hv),r2=()=>{const{cartQuantity:a}=Pc();return I.jsx("div",{className:_n.navWrapper,children:I.jsxs("nav",{className:_n.nav,children:[I.jsx("div",{className:_n.nav_logo,children:I.jsx(To,{to:"/",children:I.jsx("img",{src:FT,alt:"KeydUp Logo",className:_n.logo})})}),I.jsxs("div",{className:_n.nav_links,children:[I.jsx(To,{to:"/",className:_n.nav_link,children:"Home"}),I.jsx(To,{to:"/shopPage",className:_n.nav_link,children:"Shop"}),I.jsx(To,{to:"/aboutpage",className:_n.nav_link,children:"About"})]}),I.jsx("div",{className:_n.nav_cart,children:I.jsx(To,{to:"/cart",className:_n.cart_link,children:I.jsxs("div",{className:_n.cart_container,children:[I.jsx(WT,{className:_n.cart_icon}),a>0&&I.jsx("span",{className:_n.cart_count,children:a})]})})})]})})},a2="_slider_onvtb_1",i2="_slides_onvtb_13",o2="_slide_onvtb_1",s2="_active_onvtb_31",l2="_imageContainer_onvtb_37",u2="_image_onvtb_37",c2="_content_onvtb_49",h2="_title_onvtb_60",f2="_description_onvtb_66",d2="_priceTag_onvtb_74",m2="_shopButton_onvtb_81",p2="_arrowLeft_onvtb_101",g2="_arrowRight_onvtb_102",y2="_indicators_onvtb_136",v2="_indicator_onvtb_136",b2="_loading_onvtb_163",_2="_noFeatured_onvtb_164",Le={slider:a2,slides:i2,slide:o2,active:s2,imageContainer:l2,image:u2,content:c2,title:h2,description:f2,priceTag:d2,shopButton:m2,arrowLeft:p2,arrowRight:g2,indicators:y2,indicator:v2,loading:b2,noFeatured:_2},E2=()=>{};var i0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=function(a){const e=[];let r=0;for(let o=0;o<a.length;o++){let l=a.charCodeAt(o);l<128?e[r++]=l:l<2048?(e[r++]=l>>6|192,e[r++]=l&63|128):(l&64512)===55296&&o+1<a.length&&(a.charCodeAt(o+1)&64512)===56320?(l=65536+((l&1023)<<10)+(a.charCodeAt(++o)&1023),e[r++]=l>>18|240,e[r++]=l>>12&63|128,e[r++]=l>>6&63|128,e[r++]=l&63|128):(e[r++]=l>>12|224,e[r++]=l>>6&63|128,e[r++]=l&63|128)}return e},T2=function(a){const e=[];let r=0,o=0;for(;r<a.length;){const l=a[r++];if(l<128)e[o++]=String.fromCharCode(l);else if(l>191&&l<224){const c=a[r++];e[o++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=a[r++],d=a[r++],p=a[r++],g=((l&7)<<18|(c&63)<<12|(d&63)<<6|p&63)-65536;e[o++]=String.fromCharCode(55296+(g>>10)),e[o++]=String.fromCharCode(56320+(g&1023))}else{const c=a[r++],d=a[r++];e[o++]=String.fromCharCode((l&15)<<12|(c&63)<<6|d&63)}}return e.join("")},Fv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,e){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let l=0;l<a.length;l+=3){const c=a[l],d=l+1<a.length,p=d?a[l+1]:0,g=l+2<a.length,y=g?a[l+2]:0,_=c>>2,S=(c&3)<<4|p>>4;let C=(p&15)<<2|y>>6,U=y&63;g||(U=64,d||(C=64)),o.push(r[_],r[S],r[C],r[U])}return o.join("")},encodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(a):this.encodeByteArray(Gv(a),e)},decodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(a):T2(this.decodeStringToByteArray(a,e))},decodeStringToByteArray(a,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let l=0;l<a.length;){const c=r[a.charAt(l++)],p=l<a.length?r[a.charAt(l)]:0;++l;const y=l<a.length?r[a.charAt(l)]:64;++l;const S=l<a.length?r[a.charAt(l)]:64;if(++l,c==null||p==null||y==null||S==null)throw new A2;const C=c<<2|p>>4;if(o.push(C),y!==64){const U=p<<4&240|y>>2;if(o.push(U),S!==64){const V=y<<6&192|S;o.push(V)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}};class A2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const S2=function(a){const e=Gv(a);return Fv.encodeByteArray(e,!0)},_c=function(a){return S2(a).replace(/\./g,"")},x2=function(a){try{return Fv.decodeString(a,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2=()=>w2().__FIREBASE_DEFAULTS__,C2=()=>{if(typeof process>"u"||typeof i0>"u")return;const a=i0.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},O2=()=>{if(typeof document>"u")return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=a&&x2(a[1]);return e&&JSON.parse(e)},Jd=()=>{try{return E2()||R2()||C2()||O2()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}},D2=a=>{var e,r;return(r=(e=Jd())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[a]},N2=a=>{const e=D2(a);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const o=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),o]:[e.substring(0,r),o]},Qv=()=>{var a;return(a=Jd())===null||a===void 0?void 0:a.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,o)=>{r?this.reject(r):this.resolve(o),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,o))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M2(a,e){if(a.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},o=e||"demo-project",l=a.iat||0,c=a.sub||a.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${o}`,aud:o,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},a);return[_c(JSON.stringify(r)),_c(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function V2(){var a;const e=(a=Jd())===null||a===void 0?void 0:a.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function P2(){return!V2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function U2(){try{return typeof indexedDB=="object"}catch{return!1}}function z2(){return new Promise((a,e)=>{try{let r=!0;const o="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(o);l.onsuccess=()=>{l.result.close(),r||self.indexedDB.deleteDatabase(o),a(!0)},l.onupgradeneeded=()=>{r=!1},l.onerror=()=>{var c;e(((c=l.error)===null||c===void 0?void 0:c.message)||"")}}catch(r){e(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2="FirebaseError";class Bo extends Error{constructor(e,r,o){super(r),this.code=e,this.customData=o,this.name=L2,Object.setPrototypeOf(this,Bo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yv.prototype.create)}}class Yv{constructor(e,r,o){this.service=e,this.serviceName=r,this.errors=o}create(e,...r){const o=r[0]||{},l=`${this.service}/${e}`,c=this.errors[e],d=c?j2(c,o):"Error",p=`${this.serviceName}: ${d} (${l}).`;return new Bo(l,p,o)}}function j2(a,e){return a.replace(B2,(r,o)=>{const l=e[o];return l!=null?String(l):`<${o}?>`})}const B2=/\{\$([^}]+)}/g;function Ec(a,e){if(a===e)return!0;const r=Object.keys(a),o=Object.keys(e);for(const l of r){if(!o.includes(l))return!1;const c=a[l],d=e[l];if(o0(c)&&o0(d)){if(!Ec(c,d))return!1}else if(c!==d)return!1}for(const l of o)if(!r.includes(l))return!1;return!0}function o0(a){return a!==null&&typeof a=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(a){return a&&a._delegate?a._delegate:a}class gl{constructor(e,r,o){this.name=e,this.instanceFactory=r,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const o=new I2;if(this.instancesDeferred.set(r,o),this.isInitialized(r)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:r});l&&o.resolve(l)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const o=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(o)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:o})}catch(c){if(l)return null;throw c}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(G2(e))try{this.getOrInitializeService({instanceIdentifier:Ai})}catch{}for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);try{const c=this.getOrInitializeService({instanceIdentifier:l});o.resolve(c)}catch{}}}}clearInstance(e=Ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ai){return this.instances.has(e)}getOptions(e=Ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:o,options:r});for(const[c,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);o===p&&d.resolve(l)}return l}onInit(e,r){var o;const l=this.normalizeInstanceIdentifier(r),c=(o=this.onInitCallbacks.get(l))!==null&&o!==void 0?o:new Set;c.add(e),this.onInitCallbacks.set(l,c);const d=this.instances.get(l);return d&&e(d,l),()=>{c.delete(e)}}invokeOnInitCallbacks(e,r){const o=this.onInitCallbacks.get(r);if(o)for(const l of o)try{l(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let o=this.instances.get(e);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:H2(e),options:r}),this.instances.set(e,o),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(o,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,o)}catch{}return o||null}normalizeInstanceIdentifier(e=Ai){return this.component?this.component.multipleInstances?e:Ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function H2(a){return a===Ai?void 0:a}function G2(a){return a.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new q2(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(Pt||(Pt={}));const Q2={debug:Pt.DEBUG,verbose:Pt.VERBOSE,info:Pt.INFO,warn:Pt.WARN,error:Pt.ERROR,silent:Pt.SILENT},Y2=Pt.INFO,K2={[Pt.DEBUG]:"log",[Pt.VERBOSE]:"log",[Pt.INFO]:"info",[Pt.WARN]:"warn",[Pt.ERROR]:"error"},X2=(a,e,...r)=>{if(e<a.logLevel)return;const o=new Date().toISOString(),l=K2[e];if(l)console[l](`[${o}]  ${a.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kv{constructor(e){this.name=e,this._logLevel=Y2,this._logHandler=X2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Q2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pt.DEBUG,...e),this._logHandler(this,Pt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pt.VERBOSE,...e),this._logHandler(this,Pt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pt.INFO,...e),this._logHandler(this,Pt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pt.WARN,...e),this._logHandler(this,Pt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pt.ERROR,...e),this._logHandler(this,Pt.ERROR,...e)}}const $2=(a,e)=>e.some(r=>a instanceof r);let s0,l0;function Z2(){return s0||(s0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function J2(){return l0||(l0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xv=new WeakMap,_d=new WeakMap,$v=new WeakMap,sd=new WeakMap,Wd=new WeakMap;function W2(a){const e=new Promise((r,o)=>{const l=()=>{a.removeEventListener("success",c),a.removeEventListener("error",d)},c=()=>{r(Ca(a.result)),l()},d=()=>{o(a.error),l()};a.addEventListener("success",c),a.addEventListener("error",d)});return e.then(r=>{r instanceof IDBCursor&&Xv.set(r,a)}).catch(()=>{}),Wd.set(e,a),e}function tA(a){if(_d.has(a))return;const e=new Promise((r,o)=>{const l=()=>{a.removeEventListener("complete",c),a.removeEventListener("error",d),a.removeEventListener("abort",d)},c=()=>{r(),l()},d=()=>{o(a.error||new DOMException("AbortError","AbortError")),l()};a.addEventListener("complete",c),a.addEventListener("error",d),a.addEventListener("abort",d)});_d.set(a,e)}let Ed={get(a,e,r){if(a instanceof IDBTransaction){if(e==="done")return _d.get(a);if(e==="objectStoreNames")return a.objectStoreNames||$v.get(a);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Ca(a[e])},set(a,e,r){return a[e]=r,!0},has(a,e){return a instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in a}};function eA(a){Ed=a(Ed)}function nA(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const o=a.call(ld(this),e,...r);return $v.set(o,e.sort?e.sort():[e]),Ca(o)}:J2().includes(a)?function(...e){return a.apply(ld(this),e),Ca(Xv.get(this))}:function(...e){return Ca(a.apply(ld(this),e))}}function rA(a){return typeof a=="function"?nA(a):(a instanceof IDBTransaction&&tA(a),$2(a,Z2())?new Proxy(a,Ed):a)}function Ca(a){if(a instanceof IDBRequest)return W2(a);if(sd.has(a))return sd.get(a);const e=rA(a);return e!==a&&(sd.set(a,e),Wd.set(e,a)),e}const ld=a=>Wd.get(a);function aA(a,e,{blocked:r,upgrade:o,blocking:l,terminated:c}={}){const d=indexedDB.open(a,e),p=Ca(d);return o&&d.addEventListener("upgradeneeded",g=>{o(Ca(d.result),g.oldVersion,g.newVersion,Ca(d.transaction),g)}),r&&d.addEventListener("blocked",g=>r(g.oldVersion,g.newVersion,g)),p.then(g=>{c&&g.addEventListener("close",()=>c()),l&&g.addEventListener("versionchange",y=>l(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const iA=["get","getKey","getAll","getAllKeys","count"],oA=["put","add","delete","clear"],ud=new Map;function u0(a,e){if(!(a instanceof IDBDatabase&&!(e in a)&&typeof e=="string"))return;if(ud.get(e))return ud.get(e);const r=e.replace(/FromIndex$/,""),o=e!==r,l=oA.includes(r);if(!(r in(o?IDBIndex:IDBObjectStore).prototype)||!(l||iA.includes(r)))return;const c=async function(d,...p){const g=this.transaction(d,l?"readwrite":"readonly");let y=g.store;return o&&(y=y.index(p.shift())),(await Promise.all([y[r](...p),l&&g.done]))[0]};return ud.set(e,c),c}eA(a=>({...a,get:(e,r,o)=>u0(e,r)||a.get(e,r,o),has:(e,r)=>!!u0(e,r)||a.has(e,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(lA(r)){const o=r.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(r=>r).join(" ")}}function lA(a){const e=a.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Td="@firebase/app",c0="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new Kv("@firebase/app"),uA="@firebase/app-compat",cA="@firebase/analytics-compat",hA="@firebase/analytics",fA="@firebase/app-check-compat",dA="@firebase/app-check",mA="@firebase/auth",pA="@firebase/auth-compat",gA="@firebase/database",yA="@firebase/data-connect",vA="@firebase/database-compat",bA="@firebase/functions",_A="@firebase/functions-compat",EA="@firebase/installations",TA="@firebase/installations-compat",AA="@firebase/messaging",SA="@firebase/messaging-compat",xA="@firebase/performance",wA="@firebase/performance-compat",RA="@firebase/remote-config",CA="@firebase/remote-config-compat",OA="@firebase/storage",DA="@firebase/storage-compat",NA="@firebase/firestore",IA="@firebase/vertexai",MA="@firebase/firestore-compat",kA="firebase",VA="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="[DEFAULT]",PA={[Td]:"fire-core",[uA]:"fire-core-compat",[hA]:"fire-analytics",[cA]:"fire-analytics-compat",[dA]:"fire-app-check",[fA]:"fire-app-check-compat",[mA]:"fire-auth",[pA]:"fire-auth-compat",[gA]:"fire-rtdb",[yA]:"fire-data-connect",[vA]:"fire-rtdb-compat",[bA]:"fire-fn",[_A]:"fire-fn-compat",[EA]:"fire-iid",[TA]:"fire-iid-compat",[AA]:"fire-fcm",[SA]:"fire-fcm-compat",[xA]:"fire-perf",[wA]:"fire-perf-compat",[RA]:"fire-rc",[CA]:"fire-rc-compat",[OA]:"fire-gcs",[DA]:"fire-gcs-compat",[NA]:"fire-fst",[MA]:"fire-fst-compat",[IA]:"fire-vertex","fire-js":"fire-js",[kA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=new Map,UA=new Map,Sd=new Map;function h0(a,e){try{a.container.addComponent(e)}catch(r){Yr.debug(`Component ${e.name} failed to register with FirebaseApp ${a.name}`,r)}}function Ac(a){const e=a.name;if(Sd.has(e))return Yr.debug(`There were multiple attempts to register component ${e}.`),!1;Sd.set(e,a);for(const r of Tc.values())h0(r,a);for(const r of UA.values())h0(r,a);return!0}function zA(a,e){const r=a.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),a.container.getProvider(e)}function LA(a){return a==null?!1:a.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Oa=new Yv("app","Firebase",jA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,r,o){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new gl("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Oa.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=VA;function Zv(a,e={}){let r=a;typeof e!="object"&&(e={name:e});const o=Object.assign({name:Ad,automaticDataCollectionEnabled:!1},e),l=o.name;if(typeof l!="string"||!l)throw Oa.create("bad-app-name",{appName:String(l)});if(r||(r=Qv()),!r)throw Oa.create("no-options");const c=Tc.get(l);if(c){if(Ec(r,c.options)&&Ec(o,c.config))return c;throw Oa.create("duplicate-app",{appName:l})}const d=new F2(l);for(const g of Sd.values())d.addComponent(g);const p=new BA(r,o,d);return Tc.set(l,p),p}function HA(a=Ad){const e=Tc.get(a);if(!e&&a===Ad&&Qv())return Zv();if(!e)throw Oa.create("no-app",{appName:a});return e}function Ro(a,e,r){var o;let l=(o=PA[a])!==null&&o!==void 0?o:a;r&&(l+=`-${r}`);const c=l.match(/\s|\//),d=e.match(/\s|\//);if(c||d){const p=[`Unable to register library "${l}" with version "${e}":`];c&&p.push(`library name "${l}" contains illegal characters (whitespace or "/")`),c&&d&&p.push("and"),d&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yr.warn(p.join(" "));return}Ac(new gl(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA="firebase-heartbeat-database",FA=1,yl="firebase-heartbeat-store";let cd=null;function Jv(){return cd||(cd=aA(GA,FA,{upgrade:(a,e)=>{switch(e){case 0:try{a.createObjectStore(yl)}catch(r){console.warn(r)}}}}).catch(a=>{throw Oa.create("idb-open",{originalErrorMessage:a.message})})),cd}async function QA(a){try{const r=(await Jv()).transaction(yl),o=await r.objectStore(yl).get(Wv(a));return await r.done,o}catch(e){if(e instanceof Bo)Yr.warn(e.message);else{const r=Oa.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yr.warn(r.message)}}}async function f0(a,e){try{const o=(await Jv()).transaction(yl,"readwrite");await o.objectStore(yl).put(e,Wv(a)),await o.done}catch(r){if(r instanceof Bo)Yr.warn(r.message);else{const o=Oa.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});Yr.warn(o.message)}}}function Wv(a){return`${a.name}!${a.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=1024,KA=30;class XA{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new ZA(r),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var e,r;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=d0();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(d=>d.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:l}),this._heartbeatsCache.heartbeats.length>KA){const d=JA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(o){Yr.warn(o)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=d0(),{heartbeatsToSend:o,unsentEntries:l}=$A(this._heartbeatsCache.heartbeats),c=_c(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=r,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(r){return Yr.warn(r),""}}}function d0(){return new Date().toISOString().substring(0,10)}function $A(a,e=YA){const r=[];let o=a.slice();for(const l of a){const c=r.find(d=>d.agent===l.agent);if(c){if(c.dates.push(l.date),m0(r)>e){c.dates.pop();break}}else if(r.push({agent:l.agent,dates:[l.date]}),m0(r)>e){r.pop();break}o=o.slice(1)}return{heartbeatsToSend:r,unsentEntries:o}}class ZA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return U2()?z2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await QA(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const l=await this.read();return f0(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const l=await this.read();return f0(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function m0(a){return _c(JSON.stringify({version:2,heartbeats:a})).length}function JA(a){if(a.length===0)return-1;let e=0,r=a[0].date;for(let o=1;o<a.length;o++)a[o].date<r&&(r=a[o].date,e=o);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(a){Ac(new gl("platform-logger",e=>new sA(e),"PRIVATE")),Ac(new gl("heartbeat",e=>new XA(e),"PRIVATE")),Ro(Td,c0,a),Ro(Td,c0,"esm2017"),Ro("fire-js","")}WA("");var p0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Da,tb;(function(){var a;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,A){function x(){}x.prototype=A.prototype,N.D=A.prototype,N.prototype=new x,N.prototype.constructor=N,N.C=function(O,M,P){for(var R=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)R[Se-2]=arguments[Se];return A.prototype[M].apply(O,R)}}function r(){this.blockSize=-1}function o(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(o,r),o.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(N,A,x){x||(x=0);var O=Array(16);if(typeof A=="string")for(var M=0;16>M;++M)O[M]=A.charCodeAt(x++)|A.charCodeAt(x++)<<8|A.charCodeAt(x++)<<16|A.charCodeAt(x++)<<24;else for(M=0;16>M;++M)O[M]=A[x++]|A[x++]<<8|A[x++]<<16|A[x++]<<24;A=N.g[0],x=N.g[1],M=N.g[2];var P=N.g[3],R=A+(P^x&(M^P))+O[0]+3614090360&4294967295;A=x+(R<<7&4294967295|R>>>25),R=P+(M^A&(x^M))+O[1]+3905402710&4294967295,P=A+(R<<12&4294967295|R>>>20),R=M+(x^P&(A^x))+O[2]+606105819&4294967295,M=P+(R<<17&4294967295|R>>>15),R=x+(A^M&(P^A))+O[3]+3250441966&4294967295,x=M+(R<<22&4294967295|R>>>10),R=A+(P^x&(M^P))+O[4]+4118548399&4294967295,A=x+(R<<7&4294967295|R>>>25),R=P+(M^A&(x^M))+O[5]+1200080426&4294967295,P=A+(R<<12&4294967295|R>>>20),R=M+(x^P&(A^x))+O[6]+2821735955&4294967295,M=P+(R<<17&4294967295|R>>>15),R=x+(A^M&(P^A))+O[7]+4249261313&4294967295,x=M+(R<<22&4294967295|R>>>10),R=A+(P^x&(M^P))+O[8]+1770035416&4294967295,A=x+(R<<7&4294967295|R>>>25),R=P+(M^A&(x^M))+O[9]+2336552879&4294967295,P=A+(R<<12&4294967295|R>>>20),R=M+(x^P&(A^x))+O[10]+4294925233&4294967295,M=P+(R<<17&4294967295|R>>>15),R=x+(A^M&(P^A))+O[11]+2304563134&4294967295,x=M+(R<<22&4294967295|R>>>10),R=A+(P^x&(M^P))+O[12]+1804603682&4294967295,A=x+(R<<7&4294967295|R>>>25),R=P+(M^A&(x^M))+O[13]+4254626195&4294967295,P=A+(R<<12&4294967295|R>>>20),R=M+(x^P&(A^x))+O[14]+2792965006&4294967295,M=P+(R<<17&4294967295|R>>>15),R=x+(A^M&(P^A))+O[15]+1236535329&4294967295,x=M+(R<<22&4294967295|R>>>10),R=A+(M^P&(x^M))+O[1]+4129170786&4294967295,A=x+(R<<5&4294967295|R>>>27),R=P+(x^M&(A^x))+O[6]+3225465664&4294967295,P=A+(R<<9&4294967295|R>>>23),R=M+(A^x&(P^A))+O[11]+643717713&4294967295,M=P+(R<<14&4294967295|R>>>18),R=x+(P^A&(M^P))+O[0]+3921069994&4294967295,x=M+(R<<20&4294967295|R>>>12),R=A+(M^P&(x^M))+O[5]+3593408605&4294967295,A=x+(R<<5&4294967295|R>>>27),R=P+(x^M&(A^x))+O[10]+38016083&4294967295,P=A+(R<<9&4294967295|R>>>23),R=M+(A^x&(P^A))+O[15]+3634488961&4294967295,M=P+(R<<14&4294967295|R>>>18),R=x+(P^A&(M^P))+O[4]+3889429448&4294967295,x=M+(R<<20&4294967295|R>>>12),R=A+(M^P&(x^M))+O[9]+568446438&4294967295,A=x+(R<<5&4294967295|R>>>27),R=P+(x^M&(A^x))+O[14]+3275163606&4294967295,P=A+(R<<9&4294967295|R>>>23),R=M+(A^x&(P^A))+O[3]+4107603335&4294967295,M=P+(R<<14&4294967295|R>>>18),R=x+(P^A&(M^P))+O[8]+1163531501&4294967295,x=M+(R<<20&4294967295|R>>>12),R=A+(M^P&(x^M))+O[13]+2850285829&4294967295,A=x+(R<<5&4294967295|R>>>27),R=P+(x^M&(A^x))+O[2]+4243563512&4294967295,P=A+(R<<9&4294967295|R>>>23),R=M+(A^x&(P^A))+O[7]+1735328473&4294967295,M=P+(R<<14&4294967295|R>>>18),R=x+(P^A&(M^P))+O[12]+2368359562&4294967295,x=M+(R<<20&4294967295|R>>>12),R=A+(x^M^P)+O[5]+4294588738&4294967295,A=x+(R<<4&4294967295|R>>>28),R=P+(A^x^M)+O[8]+2272392833&4294967295,P=A+(R<<11&4294967295|R>>>21),R=M+(P^A^x)+O[11]+1839030562&4294967295,M=P+(R<<16&4294967295|R>>>16),R=x+(M^P^A)+O[14]+4259657740&4294967295,x=M+(R<<23&4294967295|R>>>9),R=A+(x^M^P)+O[1]+2763975236&4294967295,A=x+(R<<4&4294967295|R>>>28),R=P+(A^x^M)+O[4]+1272893353&4294967295,P=A+(R<<11&4294967295|R>>>21),R=M+(P^A^x)+O[7]+4139469664&4294967295,M=P+(R<<16&4294967295|R>>>16),R=x+(M^P^A)+O[10]+3200236656&4294967295,x=M+(R<<23&4294967295|R>>>9),R=A+(x^M^P)+O[13]+681279174&4294967295,A=x+(R<<4&4294967295|R>>>28),R=P+(A^x^M)+O[0]+3936430074&4294967295,P=A+(R<<11&4294967295|R>>>21),R=M+(P^A^x)+O[3]+3572445317&4294967295,M=P+(R<<16&4294967295|R>>>16),R=x+(M^P^A)+O[6]+76029189&4294967295,x=M+(R<<23&4294967295|R>>>9),R=A+(x^M^P)+O[9]+3654602809&4294967295,A=x+(R<<4&4294967295|R>>>28),R=P+(A^x^M)+O[12]+3873151461&4294967295,P=A+(R<<11&4294967295|R>>>21),R=M+(P^A^x)+O[15]+530742520&4294967295,M=P+(R<<16&4294967295|R>>>16),R=x+(M^P^A)+O[2]+3299628645&4294967295,x=M+(R<<23&4294967295|R>>>9),R=A+(M^(x|~P))+O[0]+4096336452&4294967295,A=x+(R<<6&4294967295|R>>>26),R=P+(x^(A|~M))+O[7]+1126891415&4294967295,P=A+(R<<10&4294967295|R>>>22),R=M+(A^(P|~x))+O[14]+2878612391&4294967295,M=P+(R<<15&4294967295|R>>>17),R=x+(P^(M|~A))+O[5]+4237533241&4294967295,x=M+(R<<21&4294967295|R>>>11),R=A+(M^(x|~P))+O[12]+1700485571&4294967295,A=x+(R<<6&4294967295|R>>>26),R=P+(x^(A|~M))+O[3]+2399980690&4294967295,P=A+(R<<10&4294967295|R>>>22),R=M+(A^(P|~x))+O[10]+4293915773&4294967295,M=P+(R<<15&4294967295|R>>>17),R=x+(P^(M|~A))+O[1]+2240044497&4294967295,x=M+(R<<21&4294967295|R>>>11),R=A+(M^(x|~P))+O[8]+1873313359&4294967295,A=x+(R<<6&4294967295|R>>>26),R=P+(x^(A|~M))+O[15]+4264355552&4294967295,P=A+(R<<10&4294967295|R>>>22),R=M+(A^(P|~x))+O[6]+2734768916&4294967295,M=P+(R<<15&4294967295|R>>>17),R=x+(P^(M|~A))+O[13]+1309151649&4294967295,x=M+(R<<21&4294967295|R>>>11),R=A+(M^(x|~P))+O[4]+4149444226&4294967295,A=x+(R<<6&4294967295|R>>>26),R=P+(x^(A|~M))+O[11]+3174756917&4294967295,P=A+(R<<10&4294967295|R>>>22),R=M+(A^(P|~x))+O[2]+718787259&4294967295,M=P+(R<<15&4294967295|R>>>17),R=x+(P^(M|~A))+O[9]+3951481745&4294967295,N.g[0]=N.g[0]+A&4294967295,N.g[1]=N.g[1]+(M+(R<<21&4294967295|R>>>11))&4294967295,N.g[2]=N.g[2]+M&4294967295,N.g[3]=N.g[3]+P&4294967295}o.prototype.u=function(N,A){A===void 0&&(A=N.length);for(var x=A-this.blockSize,O=this.B,M=this.h,P=0;P<A;){if(M==0)for(;P<=x;)l(this,N,P),P+=this.blockSize;if(typeof N=="string"){for(;P<A;)if(O[M++]=N.charCodeAt(P++),M==this.blockSize){l(this,O),M=0;break}}else for(;P<A;)if(O[M++]=N[P++],M==this.blockSize){l(this,O),M=0;break}}this.h=M,this.o+=A},o.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var A=1;A<N.length-8;++A)N[A]=0;var x=8*this.o;for(A=N.length-8;A<N.length;++A)N[A]=x&255,x/=256;for(this.u(N),N=Array(16),A=x=0;4>A;++A)for(var O=0;32>O;O+=8)N[x++]=this.g[A]>>>O&255;return N};function c(N,A){var x=p;return Object.prototype.hasOwnProperty.call(x,N)?x[N]:x[N]=A(N)}function d(N,A){this.h=A;for(var x=[],O=!0,M=N.length-1;0<=M;M--){var P=N[M]|0;O&&P==A||(x[M]=P,O=!1)}this.g=x}var p={};function g(N){return-128<=N&&128>N?c(N,function(A){return new d([A|0],0>A?-1:0)}):new d([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return S;if(0>N)return H(y(-N));for(var A=[],x=1,O=0;N>=x;O++)A[O]=N/x|0,x*=4294967296;return new d(A,0)}function _(N,A){if(N.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(N.charAt(0)=="-")return H(_(N.substring(1),A));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=y(Math.pow(A,8)),O=S,M=0;M<N.length;M+=8){var P=Math.min(8,N.length-M),R=parseInt(N.substring(M,M+P),A);8>P?(P=y(Math.pow(A,P)),O=O.j(P).add(y(R))):(O=O.j(x),O=O.add(y(R)))}return O}var S=g(0),C=g(1),U=g(16777216);a=d.prototype,a.m=function(){if(L(this))return-H(this).m();for(var N=0,A=1,x=0;x<this.g.length;x++){var O=this.i(x);N+=(0<=O?O:4294967296+O)*A,A*=4294967296}return N},a.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(V(this))return"0";if(L(this))return"-"+H(this).toString(N);for(var A=y(Math.pow(N,6)),x=this,O="";;){var M=ft(x,A).g;x=Z(x,M.j(A));var P=((0<x.g.length?x.g[0]:x.h)>>>0).toString(N);if(x=M,V(x))return P+O;for(;6>P.length;)P="0"+P;O=P+O}},a.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function V(N){if(N.h!=0)return!1;for(var A=0;A<N.g.length;A++)if(N.g[A]!=0)return!1;return!0}function L(N){return N.h==-1}a.l=function(N){return N=Z(this,N),L(N)?-1:V(N)?0:1};function H(N){for(var A=N.g.length,x=[],O=0;O<A;O++)x[O]=~N.g[O];return new d(x,~N.h).add(C)}a.abs=function(){return L(this)?H(this):this},a.add=function(N){for(var A=Math.max(this.g.length,N.g.length),x=[],O=0,M=0;M<=A;M++){var P=O+(this.i(M)&65535)+(N.i(M)&65535),R=(P>>>16)+(this.i(M)>>>16)+(N.i(M)>>>16);O=R>>>16,P&=65535,R&=65535,x[M]=R<<16|P}return new d(x,x[x.length-1]&-2147483648?-1:0)};function Z(N,A){return N.add(H(A))}a.j=function(N){if(V(this)||V(N))return S;if(L(this))return L(N)?H(this).j(H(N)):H(H(this).j(N));if(L(N))return H(this.j(H(N)));if(0>this.l(U)&&0>N.l(U))return y(this.m()*N.m());for(var A=this.g.length+N.g.length,x=[],O=0;O<2*A;O++)x[O]=0;for(O=0;O<this.g.length;O++)for(var M=0;M<N.g.length;M++){var P=this.i(O)>>>16,R=this.i(O)&65535,Se=N.i(M)>>>16,ae=N.i(M)&65535;x[2*O+2*M]+=R*ae,at(x,2*O+2*M),x[2*O+2*M+1]+=P*ae,at(x,2*O+2*M+1),x[2*O+2*M+1]+=R*Se,at(x,2*O+2*M+1),x[2*O+2*M+2]+=P*Se,at(x,2*O+2*M+2)}for(O=0;O<A;O++)x[O]=x[2*O+1]<<16|x[2*O];for(O=A;O<2*A;O++)x[O]=0;return new d(x,0)};function at(N,A){for(;(N[A]&65535)!=N[A];)N[A+1]+=N[A]>>>16,N[A]&=65535,A++}function tt(N,A){this.g=N,this.h=A}function ft(N,A){if(V(A))throw Error("division by zero");if(V(N))return new tt(S,S);if(L(N))return A=ft(H(N),A),new tt(H(A.g),H(A.h));if(L(A))return A=ft(N,H(A)),new tt(H(A.g),A.h);if(30<N.g.length){if(L(N)||L(A))throw Error("slowDivide_ only works with positive integers.");for(var x=C,O=A;0>=O.l(N);)x=lt(x),O=lt(O);var M=_t(x,1),P=_t(O,1);for(O=_t(O,2),x=_t(x,2);!V(O);){var R=P.add(O);0>=R.l(N)&&(M=M.add(x),P=R),O=_t(O,1),x=_t(x,1)}return A=Z(N,M.j(A)),new tt(M,A)}for(M=S;0<=N.l(A);){for(x=Math.max(1,Math.floor(N.m()/A.m())),O=Math.ceil(Math.log(x)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),P=y(x),R=P.j(A);L(R)||0<R.l(N);)x-=O,P=y(x),R=P.j(A);V(P)&&(P=C),M=M.add(P),N=Z(N,R)}return new tt(M,N)}a.A=function(N){return ft(this,N).h},a.and=function(N){for(var A=Math.max(this.g.length,N.g.length),x=[],O=0;O<A;O++)x[O]=this.i(O)&N.i(O);return new d(x,this.h&N.h)},a.or=function(N){for(var A=Math.max(this.g.length,N.g.length),x=[],O=0;O<A;O++)x[O]=this.i(O)|N.i(O);return new d(x,this.h|N.h)},a.xor=function(N){for(var A=Math.max(this.g.length,N.g.length),x=[],O=0;O<A;O++)x[O]=this.i(O)^N.i(O);return new d(x,this.h^N.h)};function lt(N){for(var A=N.g.length+1,x=[],O=0;O<A;O++)x[O]=N.i(O)<<1|N.i(O-1)>>>31;return new d(x,N.h)}function _t(N,A){var x=A>>5;A%=32;for(var O=N.g.length-x,M=[],P=0;P<O;P++)M[P]=0<A?N.i(P+x)>>>A|N.i(P+x+1)<<32-A:N.i(P+x);return new d(M,N.h)}o.prototype.digest=o.prototype.v,o.prototype.reset=o.prototype.s,o.prototype.update=o.prototype.u,tb=o,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=y,d.fromString=_,Da=d}).apply(typeof p0<"u"?p0:typeof self<"u"?self:typeof window<"u"?window:{});var ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eb,il,nb,fc,xd,rb,ab,ib;(function(){var a,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,v){return u==Array.prototype||u==Object.prototype||(u[m]=v.value),u};function r(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ec=="object"&&ec];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var o=r(this);function l(u,m){if(m)t:{var v=o;u=u.split(".");for(var T=0;T<u.length-1;T++){var j=u[T];if(!(j in v))break t;v=v[j]}u=u[u.length-1],T=v[u],m=m(T),m!=T&&m!=null&&e(v,u,{configurable:!0,writable:!0,value:m})}}function c(u,m){u instanceof String&&(u+="");var v=0,T=!1,j={next:function(){if(!T&&v<u.length){var Q=v++;return{value:m(Q,u[Q]),done:!1}}return T=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}l("Array.prototype.values",function(u){return u||function(){return c(this,function(m,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},p=this||self;function g(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function _(u,m,v){return u.call.apply(u.bind,arguments)}function S(u,m,v){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,T),u.apply(m,j)}}return function(){return u.apply(m,arguments)}}function C(u,m,v){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:S,C.apply(null,arguments)}function U(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var T=v.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function V(u,m){function v(){}v.prototype=m.prototype,u.aa=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(T,j,Q){for(var it=Array(arguments.length-2),It=2;It<arguments.length;It++)it[It-2]=arguments[It];return m.prototype[j].apply(T,it)}}function L(u){const m=u.length;if(0<m){const v=Array(m);for(let T=0;T<m;T++)v[T]=u[T];return v}return[]}function H(u,m){for(let v=1;v<arguments.length;v++){const T=arguments[v];if(g(T)){const j=u.length||0,Q=T.length||0;u.length=j+Q;for(let it=0;it<Q;it++)u[j+it]=T[it]}else u.push(T)}}class Z{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function at(u){return/^[\s\xa0]*$/.test(u)}function tt(){var u=p.navigator;return u&&(u=u.userAgent)?u:""}function ft(u){return ft[" "](u),u}ft[" "]=function(){};var lt=tt().indexOf("Gecko")!=-1&&!(tt().toLowerCase().indexOf("webkit")!=-1&&tt().indexOf("Edge")==-1)&&!(tt().indexOf("Trident")!=-1||tt().indexOf("MSIE")!=-1)&&tt().indexOf("Edge")==-1;function _t(u,m,v){for(const T in u)m.call(v,u[T],T,u)}function N(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function A(u){const m={};for(const v in u)m[v]=u[v];return m}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(u,m){let v,T;for(let j=1;j<arguments.length;j++){T=arguments[j];for(v in T)u[v]=T[v];for(let Q=0;Q<x.length;Q++)v=x[Q],Object.prototype.hasOwnProperty.call(T,v)&&(u[v]=T[v])}}function M(u){var m=1;u=u.split(":");const v=[];for(;0<m&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function P(u){p.setTimeout(()=>{throw u},0)}function R(){var u=jt;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Se{constructor(){this.h=this.g=null}add(m,v){const T=ae.get();T.set(m,v),this.h?this.h.next=T:this.g=T,this.h=T}}var ae=new Z(()=>new K,u=>u.reset());class K{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ot,dt=!1,jt=new Se,D=()=>{const u=p.Promise.resolve(void 0);ot=()=>{u.then(et)}};var et=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(v){P(v)}var m=ae;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}dt=!1};function st(){this.s=this.s,this.C=this.C}st.prototype.s=!1,st.prototype.ma=function(){this.s||(this.s=!0,this.N())},st.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function rt(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}rt.prototype.h=function(){this.defaultPrevented=!0};var gt=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};p.addEventListener("test",v,m),p.removeEventListener("test",v,m)}catch{}return u}();function Rt(u,m){if(rt.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(lt){t:{try{ft(m.nodeName);var j=!0;break t}catch{}j=!1}j||(m=null)}}else v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Tt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Rt.aa.h.call(this)}}V(Rt,rt);var Tt={2:"touch",3:"pen",4:"mouse"};Rt.prototype.h=function(){Rt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Zt=0;function Qn(u,m,v,T,j){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!T,this.ha=j,this.key=++Zt,this.da=this.fa=!1}function Xr(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function yr(u){this.src=u,this.g={},this.h=0}yr.prototype.add=function(u,m,v,T,j){var Q=u.toString();u=this.g[Q],u||(u=this.g[Q]=[],this.h++);var it=ja(u,m,T,j);return-1<it?(m=u[it],v||(m.fa=!1)):(m=new Qn(m,this.src,Q,!!T,j),m.fa=v,u.push(m)),m};function La(u,m){var v=m.type;if(v in u.g){var T=u.g[v],j=Array.prototype.indexOf.call(T,m,void 0),Q;(Q=0<=j)&&Array.prototype.splice.call(T,j,1),Q&&(Xr(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function ja(u,m,v,T){for(var j=0;j<u.length;++j){var Q=u[j];if(!Q.da&&Q.listener==m&&Q.capture==!!v&&Q.ha==T)return j}return-1}var Ba="closure_lm_"+(1e6*Math.random()|0),Yo={};function Dl(u,m,v,T,j){if(Array.isArray(m)){for(var Q=0;Q<m.length;Q++)Dl(u,m[Q],v,T,j);return null}return v=Nl(v),u&&u[Me]?u.K(m,v,y(T)?!!T.capture:!1,j):An(u,m,v,!1,T,j)}function An(u,m,v,T,j,Q){if(!m)throw Error("Invalid event type");var it=y(j)?!!j.capture:!!j,It=Di(u);if(It||(u[Ba]=It=new yr(u)),v=It.add(m,v,T,it,Q),v.proxy)return v;if(T=Jc(),v.proxy=T,T.src=u,T.listener=v,u.addEventListener)gt||(j=it),j===void 0&&(j=!1),u.addEventListener(m.toString(),T,j);else if(u.attachEvent)u.attachEvent(qa(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Jc(){function u(v){return m.call(u.src,u.listener,v)}const m=Wc;return u}function Ko(u,m,v,T,j){if(Array.isArray(m))for(var Q=0;Q<m.length;Q++)Ko(u,m[Q],v,T,j);else T=y(T)?!!T.capture:!!T,v=Nl(v),u&&u[Me]?(u=u.i,m=String(m).toString(),m in u.g&&(Q=u.g[m],v=ja(Q,v,T,j),-1<v&&(Xr(Q[v]),Array.prototype.splice.call(Q,v,1),Q.length==0&&(delete u.g[m],u.h--)))):u&&(u=Di(u))&&(m=u.g[m.toString()],u=-1,m&&(u=ja(m,v,T,j)),(v=-1<u?m[u]:null)&&Oi(v))}function Oi(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Me])La(m.i,u);else{var v=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(v,T,u.capture):m.detachEvent?m.detachEvent(qa(v),T):m.addListener&&m.removeListener&&m.removeListener(T),(v=Di(m))?(La(v,u),v.h==0&&(v.src=null,m[Ba]=null)):Xr(u)}}}function qa(u){return u in Yo?Yo[u]:Yo[u]="on"+u}function Wc(u,m){if(u.da)u=!0;else{m=new Rt(m,this);var v=u.listener,T=u.ha||u.src;u.fa&&Oi(u),u=v.call(T,m)}return u}function Di(u){return u=u[Ba],u instanceof yr?u:null}var Xo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nl(u){return typeof u=="function"?u:(u[Xo]||(u[Xo]=function(m){return u.handleEvent(m)}),u[Xo])}function le(){st.call(this),this.i=new yr(this),this.M=this,this.F=null}V(le,st),le.prototype[Me]=!0,le.prototype.removeEventListener=function(u,m,v,T){Ko(this,u,m,v,T)};function Ht(u,m){var v,T=u.F;if(T)for(v=[];T;T=T.F)v.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new rt(m,u);else if(m instanceof rt)m.target=m.target||u;else{var j=m;m=new rt(T,u),O(m,j)}if(j=!0,v)for(var Q=v.length-1;0<=Q;Q--){var it=m.g=v[Q];j=hn(it,T,!0,m)&&j}if(it=m.g=u,j=hn(it,T,!0,m)&&j,j=hn(it,T,!1,m)&&j,v)for(Q=0;Q<v.length;Q++)it=m.g=v[Q],j=hn(it,T,!1,m)&&j}le.prototype.N=function(){if(le.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var v=u.g[m],T=0;T<v.length;T++)Xr(v[T]);delete u.g[m],u.h--}}this.F=null},le.prototype.K=function(u,m,v,T){return this.i.add(String(u),m,!1,v,T)},le.prototype.L=function(u,m,v,T){return this.i.add(String(u),m,!0,v,T)};function hn(u,m,v,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var j=!0,Q=0;Q<m.length;++Q){var it=m[Q];if(it&&!it.da&&it.capture==v){var It=it.listener,we=it.ha||it.src;it.fa&&La(u.i,it),j=It.call(we,T)!==!1&&j}}return j&&!T.defaultPrevented}function Xe(u,m,v){if(typeof u=="function")v&&(u=C(u,v));else if(u&&typeof u.handleEvent=="function")u=C(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:p.setTimeout(u,m||0)}function Il(u){u.g=Xe(()=>{u.g=null,u.i&&(u.i=!1,Il(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class th extends st{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Il(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ha(u){st.call(this),this.h=u,this.g={}}V(Ha,st);var Ga=[];function Fa(u){_t(u.g,function(m,v){this.g.hasOwnProperty(v)&&Oi(m)},u),u.g={}}Ha.prototype.N=function(){Ha.aa.N.call(this),Fa(this)},Ha.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Un=p.JSON.stringify,Ni=p.JSON.parse,Qa=class{stringify(u){return p.JSON.stringify(u,void 0)}parse(u){return p.JSON.parse(u,void 0)}};function $o(){}$o.prototype.h=null;function Zo(u){return u.h||(u.h=u.i())}function Jo(){}var vr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function br(){rt.call(this,"d")}V(br,rt);function Wo(){rt.call(this,"c")}V(Wo,rt);var Yn={},ts=null;function $r(){return ts=ts||new le}Yn.La="serverreachability";function Ii(u){rt.call(this,Yn.La,u)}V(Ii,rt);function Zr(u){const m=$r();Ht(m,new Ii(m))}Yn.STAT_EVENT="statevent";function Ml(u,m){rt.call(this,Yn.STAT_EVENT,u),this.stat=m}V(Ml,rt);function te(u){const m=$r();Ht(m,new Ml(m,u))}Yn.Ma="timingevent";function xe(u,m){rt.call(this,Yn.Ma,u),this.size=m}V(xe,rt);function ge(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){u()},m)}function Sn(){this.g=!0}Sn.prototype.xa=function(){this.g=!1};function es(u,m,v,T,j,Q){u.info(function(){if(u.g)if(Q)for(var it="",It=Q.split("&"),we=0;we<It.length;we++){var Mt=It[we].split("=");if(1<Mt.length){var Ve=Mt[0];Mt=Mt[1];var Re=Ve.split("_");it=2<=Re.length&&Re[1]=="type"?it+(Ve+"="+Mt+"&"):it+(Ve+"=redacted&")}}else it=null;else it=Q;return"XMLHTTP REQ ("+T+") [attempt "+j+"]: "+m+`
`+v+`
`+it})}function eh(u,m,v,T,j,Q,it){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+j+"]: "+m+`
`+v+`
`+Q+" "+it})}function Jr(u,m,v,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Ya(u,v)+(T?" "+T:"")})}function kl(u,m){u.info(function(){return"TIMEOUT: "+m})}Sn.prototype.info=function(){};function Ya(u,m){if(!u.g)return m;if(!m)return null;try{var v=JSON.parse(m);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var T=v[u];if(!(2>T.length)){var j=T[1];if(Array.isArray(j)&&!(1>j.length)){var Q=j[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var it=1;it<j.length;it++)j[it]=""}}}}return Un(v)}catch{return m}}var Wr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_r={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Kn;function Xn(){}V(Xn,$o),Xn.prototype.g=function(){return new XMLHttpRequest},Xn.prototype.i=function(){return{}},Kn=new Xn;function nn(u,m,v,T){this.j=u,this.i=m,this.l=v,this.R=T||1,this.U=new Ha(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new he}function he(){this.i=null,this.g="",this.h=!1}var ns={},Mi={};function zn(u,m,v){u.L=1,u.v=Ja(fn(m)),u.m=v,u.P=!0,Er(u,null)}function Er(u,m){u.F=Date.now(),Ka(u),u.A=fn(u.v);var v=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),ls(v.i,"t",T),u.C=0,v=u.j.J,u.h=new he,u.g=$l(u.j,v?m:null,!u.m),0<u.O&&(u.M=new th(C(u.Y,u,u.g),u.O)),m=u.U,v=u.g,T=u.ca;var j="readystatechange";Array.isArray(j)||(j&&(Ga[0]=j.toString()),j=Ga);for(var Q=0;Q<j.length;Q++){var it=Dl(v,j[Q],T||m.handleEvent,!1,m.h||m);if(!it)break;m.g[it.key]=it}m=u.H?A(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Zr(),es(u.i,u.u,u.A,u.l,u.R,u.m)}nn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Cn(u)==3?m.j():this.Y(u)},nn.prototype.Y=function(u){try{if(u==this.g)t:{const Re=Cn(this.g);var m=this.g.Ba();const Or=this.g.Z();if(!(3>Re)&&(Re!=3||this.g&&(this.h.h||this.g.oa()||ql(this.g)))){this.J||Re!=4||m==7||(m==8||0>=Or?Zr(3):Zr(2)),ta(this);var v=this.g.Z();this.X=v;e:if(Vl(this)){var T=ql(this.g);u="";var j=T.length,Q=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qe(this),$n(this);var it="";break e}this.h.i=new p.TextDecoder}for(m=0;m<j;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!(Q&&m==j-1)});T.length=0,this.h.g+=u,this.C=0,it=this.h.g}else it=this.g.oa();if(this.o=v==200,eh(this.i,this.u,this.A,this.l,this.R,Re,v),this.o){if(this.T&&!this.K){e:{if(this.g){var It,we=this.g;if((It=we.g?we.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!at(It)){var Mt=It;break e}}Mt=null}if(v=Mt)Jr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xa(this,v);else{this.o=!1,this.s=3,te(12),qe(this),$n(this);break t}}if(this.P){v=!0;let He;for(;!this.J&&this.C<it.length;)if(He=Pl(this,it),He==Mi){Re==4&&(this.s=4,te(14),v=!1),Jr(this.i,this.l,null,"[Incomplete Response]");break}else if(He==ns){this.s=4,te(15),Jr(this.i,this.l,it,"[Invalid Chunk]"),v=!1;break}else Jr(this.i,this.l,He,null),Xa(this,He);if(Vl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Re!=4||it.length!=0||this.h.h||(this.s=1,te(16),v=!1),this.o=this.o&&v,!v)Jr(this.i,this.l,it,"[Invalid Chunked Response]"),qe(this),$n(this);else if(0<it.length&&!this.W){this.W=!0;var Ve=this.j;Ve.g==this&&Ve.ba&&!Ve.M&&(Ve.j.info("Great, no buffering proxy detected. Bytes received: "+it.length),oi(Ve),Ve.M=!0,te(11))}}else Jr(this.i,this.l,it,null),Xa(this,it);Re==4&&qe(this),this.o&&!this.J&&(Re==4?Yl(this.j,this):(this.o=!1,Ka(this)))}else oh(this.g),v==400&&0<it.indexOf("Unknown SID")?(this.s=3,te(12)):(this.s=0,te(13)),qe(this),$n(this)}}}catch{}finally{}};function Vl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Pl(u,m){var v=u.C,T=m.indexOf(`
`,v);return T==-1?Mi:(v=Number(m.substring(v,T)),isNaN(v)?ns:(T+=1,T+v>m.length?Mi:(m=m.slice(T,T+v),u.C=T+v,m)))}nn.prototype.cancel=function(){this.J=!0,qe(this)};function Ka(u){u.S=Date.now()+u.I,Ul(u,u.I)}function Ul(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=ge(C(u.ba,u),m)}function ta(u){u.B&&(p.clearTimeout(u.B),u.B=null)}nn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(kl(this.i,this.A),this.L!=2&&(Zr(),te(17)),qe(this),this.s=2,$n(this)):Ul(this,this.S-u)};function $n(u){u.j.G==0||u.J||Yl(u.j,u)}function qe(u){ta(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Fa(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Xa(u,m){try{var v=u.j;if(v.G!=0&&(v.g==u||rs(v.h,u))){if(!u.K&&rs(v.h,u)&&v.G==3){try{var T=v.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var j=T;if(j[0]==0){t:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)Fi(v),Hi(v);else break t;ds(v),te(18)}}else v.za=j[1],0<v.za-v.T&&37500>j[2]&&v.F&&v.v==0&&!v.C&&(v.C=ge(C(v.Za,v),6e3));if(1>=Vi(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Cr(v,11)}else if((u.K||v.g==u)&&Fi(v),!at(m))for(j=v.Da.g.parse(m),m=0;m<j.length;m++){let Mt=j[m];if(v.T=Mt[0],Mt=Mt[1],v.G==2)if(Mt[0]=="c"){v.K=Mt[1],v.ia=Mt[2];const Ve=Mt[3];Ve!=null&&(v.la=Ve,v.j.info("VER="+v.la));const Re=Mt[4];Re!=null&&(v.Aa=Re,v.j.info("SVER="+v.Aa));const Or=Mt[5];Or!=null&&typeof Or=="number"&&0<Or&&(T=1.5*Or,v.L=T,v.j.info("backChannelRequestTimeoutMs_="+T)),T=v;const He=u.g;if(He){const rr=He.g?He.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(rr){var Q=T.h;Q.g||rr.indexOf("spdy")==-1&&rr.indexOf("quic")==-1&&rr.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(Pi(Q,Q.h),Q.h=null))}if(T.D){const ps=He.g?He.g.getResponseHeader("X-HTTP-Session-Id"):null;ps&&(T.ya=ps,Qt(T.I,T.D,ps))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),T=v;var it=u;if(T.qa=Xl(T,T.J?T.ia:null,T.W),it.K){rn(T.h,it);var It=it,we=T.L;we&&(It.I=we),It.B&&(ta(It),Ka(It)),T.g=it}else Fl(T);0<v.i.length&&Gi(v)}else Mt[0]!="stop"&&Mt[0]!="close"||Cr(v,7);else v.G==3&&(Mt[0]=="stop"||Mt[0]=="close"?Mt[0]=="stop"?Cr(v,7):hs(v):Mt[0]!="noop"&&v.l&&v.l.ta(Mt),v.v=0)}}Zr(4)}catch{}}var zl=class{constructor(u,m){this.g=u,this.map=m}};function Tr(u){this.l=u||10,p.PerformanceNavigationTiming?(u=p.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ki(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Vi(u){return u.h?1:u.g?u.g.size:0}function rs(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Pi(u,m){u.g?u.g.add(m):u.h=m}function rn(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Tr.prototype.cancel=function(){if(this.i=as(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function as(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.D);return m}return L(u.i)}function nh(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var m=[],v=u.length,T=0;T<v;T++)m.push(u[T]);return m}m=[],v=0;for(T in u)m[v++]=u[T];return m}function Ui(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var m=[];u=u.length;for(var v=0;v<u;v++)m.push(v);return m}m=[],v=0;for(const T in u)m[v++]=T;return m}}}function is(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var v=Ui(u),T=nh(u),j=T.length,Q=0;Q<j;Q++)m.call(void 0,T[Q],v&&v[Q],u)}var $a=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rh(u,m){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var T=u[v].indexOf("="),j=null;if(0<=T){var Q=u[v].substring(0,T);j=u[v].substring(T+1)}else Q=u[v];m(Q,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function ye(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ye){this.h=u.h,Za(this,u.j),this.o=u.o,this.g=u.g,ea(this,u.s),this.l=u.l;var m=u.i,v=new Sr;v.i=m.i,m.g&&(v.g=new Map(m.g),v.h=m.h),Ar(this,v),this.m=u.m}else u&&(m=String(u).match($a))?(this.h=!1,Za(this,m[1]||"",!0),this.o=xn(m[2]||""),this.g=xn(m[3]||"",!0),ea(this,m[4]),this.l=xn(m[5]||"",!0),Ar(this,m[6]||"",!0),this.m=xn(m[7]||"")):(this.h=!1,this.i=new Sr(null,this.h))}ye.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Wa(m,os,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Wa(m,os,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(Wa(v,v.charAt(0)=="/"?ah:ss,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",Wa(v,zi)),u.join("")};function fn(u){return new ye(u)}function Za(u,m,v){u.j=v?xn(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function ea(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Ar(u,m,v){m instanceof Sr?(u.i=m,jl(u.i,u.h)):(v||(m=Wa(m,ih)),u.i=new Sr(m,u.h))}function Qt(u,m,v){u.i.set(m,v)}function Ja(u){return Qt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function xn(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Wa(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,Ll),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Ll(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var os=/[#\/\?@]/g,ss=/[#\?:]/g,ah=/[#\?]/g,ih=/[#\?@]/g,zi=/#/g;function Sr(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function wn(u){u.g||(u.g=new Map,u.h=0,u.i&&rh(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}a=Sr.prototype,a.add=function(u,m){wn(this),this.i=null,u=Zn(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function xr(u,m){wn(u),m=Zn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function wr(u,m){return wn(u),m=Zn(u,m),u.g.has(m)}a.forEach=function(u,m){wn(this),this.g.forEach(function(v,T){v.forEach(function(j){u.call(m,j,T,this)},this)},this)},a.na=function(){wn(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),v=[];for(let T=0;T<m.length;T++){const j=u[T];for(let Q=0;Q<j.length;Q++)v.push(m[T])}return v},a.V=function(u){wn(this);let m=[];if(typeof u=="string")wr(this,u)&&(m=m.concat(this.g.get(Zn(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)m=m.concat(u[v])}return m},a.set=function(u,m){return wn(this),this.i=null,u=Zn(this,u),wr(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},a.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function ls(u,m,v){xr(u,m),0<v.length&&(u.i=null,u.g.set(Zn(u,m),L(v)),u.h+=v.length)}a.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var v=0;v<m.length;v++){var T=m[v];const Q=encodeURIComponent(String(T)),it=this.V(T);for(T=0;T<it.length;T++){var j=Q;it[T]!==""&&(j+="="+encodeURIComponent(String(it[T]))),u.push(j)}}return this.i=u.join("&")};function Zn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function jl(u,m){m&&!u.j&&(wn(u),u.i=null,u.g.forEach(function(v,T){var j=T.toLowerCase();T!=j&&(xr(this,T),ls(this,j,v))},u)),u.j=m}function ti(u,m){const v=new Sn;if(p.Image){const T=new Image;T.onload=U(Rn,v,"TestLoadImage: loaded",!0,m,T),T.onerror=U(Rn,v,"TestLoadImage: error",!1,m,T),T.onabort=U(Rn,v,"TestLoadImage: abort",!1,m,T),T.ontimeout=U(Rn,v,"TestLoadImage: timeout",!1,m,T),p.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function Ln(u,m){const v=new Sn,T=new AbortController,j=setTimeout(()=>{T.abort(),Rn(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(Q=>{clearTimeout(j),Q.ok?Rn(v,"TestPingServer: ok",!0,m):Rn(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(j),Rn(v,"TestPingServer: error",!1,m)})}function Rn(u,m,v,T,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),T(v)}catch{}}function ei(){this.g=new Qa}function Jn(u,m,v){const T=v||"";try{is(u,function(j,Q){let it=j;y(j)&&(it=Un(j)),m.push(T+Q+"="+encodeURIComponent(it))})}catch(j){throw m.push(T+"type="+encodeURIComponent("_badmap")),j}}function na(u){this.l=u.Ub||null,this.j=u.eb||!1}V(na,$o),na.prototype.g=function(){return new Rr(this.l,this.j)},na.prototype.i=function(u){return function(){return u}}({});function Rr(u,m){le.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Rr,le),a=Rr.prototype,a.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,tr(this)},a.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||p).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},a.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wn(this)),this.readyState=0},a.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,tr(this)),this.g&&(this.readyState=3,tr(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;us(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function us(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}a.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Wn(this):tr(this),this.readyState==3&&us(this)}},a.Ra=function(u){this.g&&(this.response=this.responseText=u,Wn(this))},a.Qa=function(u){this.g&&(this.response=u,Wn(this))},a.ga=function(){this.g&&Wn(this)};function Wn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,tr(u)}a.setRequestHeader=function(u,m){this.u.append(u,m)},a.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},a.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function tr(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Rr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function cs(u){let m="";return _t(u,function(v,T){m+=T,m+=":",m+=v,m+=`\r
`}),m}function ke(u,m,v){t:{for(T in v){var T=!1;break t}T=!0}T||(v=cs(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):Qt(u,m,v))}function qt(u){le.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(qt,le);var Li=/^https?$/i,ni=["POST","PUT"];a=qt.prototype,a.Ha=function(u){this.J=u},a.ea=function(u,m,v,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Kn.g(),this.v=this.o?Zo(this.o):Zo(Kn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(Q){Bl(this,Q);return}if(u=v||"",v=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var j in T)v.set(j,T[j]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const Q of T.keys())v.set(Q,T.get(Q));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(v.keys()).find(Q=>Q.toLowerCase()=="content-type"),j=p.FormData&&u instanceof p.FormData,!(0<=Array.prototype.indexOf.call(ni,m,void 0))||T||j||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,it]of v)this.g.setRequestHeader(Q,it);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ri(this),this.u=!0,this.g.send(u),this.u=!1}catch(Q){Bl(this,Q)}};function Bl(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,ji(u),er(u)}function ji(u){u.A||(u.A=!0,Ht(u,"complete"),Ht(u,"error"))}a.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ht(this,"complete"),Ht(this,"abort"),er(this))},a.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),er(this,!0)),qt.aa.N.call(this)},a.Ea=function(){this.s||(this.B||this.u||this.j?Bi(this):this.bb())},a.bb=function(){Bi(this)};function Bi(u){if(u.h&&typeof d<"u"&&(!u.v[1]||Cn(u)!=4||u.Z()!=2)){if(u.u&&Cn(u)==4)Xe(u.Ea,0,u);else if(Ht(u,"readystatechange"),Cn(u)==4){u.h=!1;try{const it=u.Z();t:switch(it){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var v;if(!(v=m)){var T;if(T=it===0){var j=String(u.D).match($a)[1]||null;!j&&p.self&&p.self.location&&(j=p.self.location.protocol.slice(0,-1)),T=!Li.test(j?j.toLowerCase():"")}v=T}if(v)Ht(u,"complete"),Ht(u,"success");else{u.m=6;try{var Q=2<Cn(u)?u.g.statusText:""}catch{Q=""}u.l=Q+" ["+u.Z()+"]",ji(u)}}finally{er(u)}}}}function er(u,m){if(u.g){ri(u);const v=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||Ht(u,"ready");try{v.onreadystatechange=T}catch{}}}function ri(u){u.I&&(p.clearTimeout(u.I),u.I=null)}a.isActive=function(){return!!this.g};function Cn(u){return u.g?u.g.readyState:0}a.Z=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}},a.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},a.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Ni(m)}};function ql(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function oh(u){const m={};u=(u.g&&2<=Cn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(at(u[T]))continue;var v=M(u[T]);const j=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Q=m[j]||[];m[j]=Q,Q.push(v)}N(m,function(T){return T.join(", ")})}a.Ba=function(){return this.m},a.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ai(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function qi(u){this.Aa=0,this.i=[],this.j=new Sn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ai("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ai("baseRetryDelayMs",5e3,u),this.cb=ai("retryDelaySeedMs",1e4,u),this.Wa=ai("forwardChannelMaxRetries",2,u),this.wa=ai("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Tr(u&&u.concurrentRequestLimit),this.Da=new ei,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}a=qi.prototype,a.la=8,a.G=1,a.connect=function(u,m,v,T){te(0),this.W=u,this.H=m||{},v&&T!==void 0&&(this.H.OSID=v,this.H.OAID=T),this.F=this.X,this.I=Xl(this,null,this.W),Gi(this)};function hs(u){if(Hl(u),u.G==3){var m=u.U++,v=fn(u.I);if(Qt(v,"SID",u.K),Qt(v,"RID",m),Qt(v,"TYPE","terminate"),ii(u,v),m=new nn(u,u.j,m),m.L=2,m.v=Ja(fn(v)),v=!1,p.navigator&&p.navigator.sendBeacon)try{v=p.navigator.sendBeacon(m.v.toString(),"")}catch{}!v&&p.Image&&(new Image().src=m.v,v=!0),v||(m.g=$l(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Ka(m)}Kl(u)}function Hi(u){u.g&&(oi(u),u.g.cancel(),u.g=null)}function Hl(u){Hi(u),u.u&&(p.clearTimeout(u.u),u.u=null),Fi(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&p.clearTimeout(u.s),u.s=null)}function Gi(u){if(!ki(u.h)&&!u.s){u.s=!0;var m=u.Ga;ot||D(),dt||(ot(),dt=!0),jt.add(m,u),u.B=0}}function sh(u,m){return Vi(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=ge(C(u.Ga,u,m),ms(u,u.B)),u.B++,!0)}a.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const j=new nn(this,this.j,u);let Q=this.o;if(this.S&&(Q?(Q=A(Q),O(Q,this.S)):Q=this.S),this.m!==null||this.O||(j.H=Q,Q=null),this.P)t:{for(var m=0,v=0;v<this.i.length;v++){e:{var T=this.i[v];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=v;break t}if(m===4096||v===this.i.length-1){m=v+1;break t}}m=1e3}else m=1e3;m=Gl(this,j,m),v=fn(this.I),Qt(v,"RID",u),Qt(v,"CVER",22),this.D&&Qt(v,"X-HTTP-Session-Id",this.D),ii(this,v),Q&&(this.O?m="headers="+encodeURIComponent(String(cs(Q)))+"&"+m:this.m&&ke(v,this.m,Q)),Pi(this.h,j),this.Ua&&Qt(v,"TYPE","init"),this.P?(Qt(v,"$req",m),Qt(v,"SID","null"),j.T=!0,zn(j,v,null)):zn(j,v,m),this.G=2}}else this.G==3&&(u?fs(this,u):this.i.length==0||ki(this.h)||fs(this))};function fs(u,m){var v;m?v=m.l:v=u.U++;const T=fn(u.I);Qt(T,"SID",u.K),Qt(T,"RID",v),Qt(T,"AID",u.T),ii(u,T),u.m&&u.o&&ke(T,u.m,u.o),v=new nn(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Gl(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Pi(u.h,v),zn(v,T,m)}function ii(u,m){u.H&&_t(u.H,function(v,T){Qt(m,T,v)}),u.l&&is({},function(v,T){Qt(m,T,v)})}function Gl(u,m,v){v=Math.min(u.i.length,v);var T=u.l?C(u.l.Na,u.l,u):null;t:{var j=u.i;let Q=-1;for(;;){const it=["count="+v];Q==-1?0<v?(Q=j[0].g,it.push("ofs="+Q)):Q=0:it.push("ofs="+Q);let It=!0;for(let we=0;we<v;we++){let Mt=j[we].g;const Ve=j[we].map;if(Mt-=Q,0>Mt)Q=Math.max(0,j[we].g-100),It=!1;else try{Jn(Ve,it,"req"+Mt+"_")}catch{T&&T(Ve)}}if(It){T=it.join("&");break t}}}return u=u.i.splice(0,v),m.D=u,T}function Fl(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;ot||D(),dt||(ot(),dt=!0),jt.add(m,u),u.v=0}}function ds(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=ge(C(u.Fa,u),ms(u,u.v)),u.v++,!0)}a.Fa=function(){if(this.u=null,Ql(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=ge(C(this.ab,this),u)}},a.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,te(10),Hi(this),Ql(this))};function oi(u){u.A!=null&&(p.clearTimeout(u.A),u.A=null)}function Ql(u){u.g=new nn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=fn(u.qa);Qt(m,"RID","rpc"),Qt(m,"SID",u.K),Qt(m,"AID",u.T),Qt(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Qt(m,"TO",u.ja),Qt(m,"TYPE","xmlhttp"),ii(u,m),u.m&&u.o&&ke(m,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=Ja(fn(m)),v.m=null,v.P=!0,Er(v,u)}a.Za=function(){this.C!=null&&(this.C=null,Hi(this),ds(this),te(19))};function Fi(u){u.C!=null&&(p.clearTimeout(u.C),u.C=null)}function Yl(u,m){var v=null;if(u.g==m){Fi(u),oi(u),u.g=null;var T=2}else if(rs(u.h,m))v=m.D,rn(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){v=m.m?m.m.length:0,m=Date.now()-m.F;var j=u.B;T=$r(),Ht(T,new xe(T,v)),Gi(u)}else Fl(u);else if(j=m.s,j==3||j==0&&0<m.X||!(T==1&&sh(u,m)||T==2&&ds(u)))switch(v&&0<v.length&&(m=u.h,m.i=m.i.concat(v)),j){case 1:Cr(u,5);break;case 4:Cr(u,10);break;case 3:Cr(u,6);break;default:Cr(u,2)}}}function ms(u,m){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*m}function Cr(u,m){if(u.j.info("Error code "+m),m==2){var v=C(u.fb,u),T=u.Xa;const j=!T;T=new ye(T||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Za(T,"https"),Ja(T),j?ti(T.toString(),v):Ln(T.toString(),v)}else te(2);u.G=0,u.l&&u.l.sa(m),Kl(u),Hl(u)}a.fb=function(u){u?(this.j.info("Successfully pinged google.com"),te(2)):(this.j.info("Failed to ping google.com"),te(1))};function Kl(u){if(u.G=0,u.ka=[],u.l){const m=as(u.h);(m.length!=0||u.i.length!=0)&&(H(u.ka,m),H(u.ka,u.i),u.h.i.length=0,L(u.i),u.i.length=0),u.l.ra()}}function Xl(u,m,v){var T=v instanceof ye?fn(v):new ye(v);if(T.g!="")m&&(T.g=m+"."+T.g),ea(T,T.s);else{var j=p.location;T=j.protocol,m=m?m+"."+j.hostname:j.hostname,j=+j.port;var Q=new ye(null);T&&Za(Q,T),m&&(Q.g=m),j&&ea(Q,j),v&&(Q.l=v),T=Q}return v=u.D,m=u.ya,v&&m&&Qt(T,v,m),Qt(T,"VER",u.la),ii(u,T),T}function $l(u,m,v){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new qt(new na({eb:v})):new qt(u.pa),m.Ha(u.J),m}a.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zl(){}a=Zl.prototype,a.ua=function(){},a.ta=function(){},a.sa=function(){},a.ra=function(){},a.isActive=function(){return!0},a.Na=function(){};function Qi(){}Qi.prototype.g=function(u,m){return new an(u,m)};function an(u,m){le.call(this),this.g=new qi(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!at(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!at(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new nr(this)}V(an,le),an.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},an.prototype.close=function(){hs(this.g)},an.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=Un(u),u=v);m.i.push(new zl(m.Ya++,u)),m.G==3&&Gi(m)},an.prototype.N=function(){this.g.l=null,delete this.j,hs(this.g),delete this.g,an.aa.N.call(this)};function Jl(u){br.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const v in m){u=v;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}V(Jl,br);function Wl(){Wo.call(this),this.status=1}V(Wl,Wo);function nr(u){this.g=u}V(nr,Zl),nr.prototype.ua=function(){Ht(this.g,"a")},nr.prototype.ta=function(u){Ht(this.g,new Jl(u))},nr.prototype.sa=function(u){Ht(this.g,new Wl)},nr.prototype.ra=function(){Ht(this.g,"b")},Qi.prototype.createWebChannel=Qi.prototype.g,an.prototype.send=an.prototype.o,an.prototype.open=an.prototype.m,an.prototype.close=an.prototype.close,ib=function(){return new Qi},ab=function(){return $r()},rb=Yn,xd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wr.NO_ERROR=0,Wr.TIMEOUT=8,Wr.HTTP_ERROR=6,fc=Wr,_r.COMPLETE="complete",nb=_r,Jo.EventType=vr,vr.OPEN="a",vr.CLOSE="b",vr.ERROR="c",vr.MESSAGE="d",le.prototype.listen=le.prototype.K,il=Jo,qt.prototype.listenOnce=qt.prototype.L,qt.prototype.getLastError=qt.prototype.Ka,qt.prototype.getLastErrorCode=qt.prototype.Ba,qt.prototype.getStatus=qt.prototype.Z,qt.prototype.getResponseJson=qt.prototype.Oa,qt.prototype.getResponseText=qt.prototype.oa,qt.prototype.send=qt.prototype.ea,qt.prototype.setWithCredentials=qt.prototype.Ha,eb=qt}).apply(typeof ec<"u"?ec:typeof self<"u"?self:typeof window<"u"?window:{});const g0="@firebase/firestore",y0="4.7.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo="11.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new Kv("@firebase/firestore");function Ao(){return wi.logLevel}function ut(a,...e){if(wi.logLevel<=Pt.DEBUG){const r=e.map(tm);wi.debug(`Firestore (${qo}): ${a}`,...r)}}function Kr(a,...e){if(wi.logLevel<=Pt.ERROR){const r=e.map(tm);wi.error(`Firestore (${qo}): ${a}`,...r)}}function Do(a,...e){if(wi.logLevel<=Pt.WARN){const r=e.map(tm);wi.warn(`Firestore (${qo}): ${a}`,...r)}}function tm(a){if(typeof a=="string")return a;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(r){return JSON.stringify(r)}(a)}catch{return a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(a,e,r){let o="Unexpected state";typeof e=="string"?o=e:r=e,ob(a,o,r)}function ob(a,e,r){let o=`FIRESTORE (${qo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${a.toString(16)})`;if(r!==void 0)try{o+=" CONTEXT: "+JSON.stringify(r)}catch{o+=" CONTEXT: "+r}throw Kr(o),new Error(o)}function se(a,e,r,o){let l="Unexpected state";typeof r=="string"?l=r:o=r,a||ob(e,l,o)}function Ut(a,e){return a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ht extends Bo{constructor(e,r){super(e,r),this.code=e,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(){this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,r){e.enqueueRetryable(()=>r(We.UNAUTHENTICATED))}shutdown(){}}class eS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,r){this.changeListener=r,e.enqueueRetryable(()=>r(this.token.user))}shutdown(){this.changeListener=null}}class nS{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,r){se(this.o===void 0,42304);let o=this.i;const l=g=>this.i!==o?(o=this.i,r(g)):Promise.resolve();let c=new Na;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Na,e.enqueueRetryable(()=>l(this.currentUser))};const d=()=>{const g=c;e.enqueueRetryable(async()=>{await g.promise,await l(this.currentUser)})},p=g=>{ut("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(g=>p(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(ut("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Na)}},0),d()}getToken(){const e=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then(o=>this.i!==e?(ut("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):o?(se(typeof o.accessToken=="string",31837,{l:o}),new sb(o.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string",2055,{h:e}),new We(e)}}class rS{constructor(e,r,o){this.P=e,this.T=r,this.I=o,this.type="FirstParty",this.user=We.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class aS{constructor(e,r,o){this.P=e,this.T=r,this.I=o}getToken(){return Promise.resolve(new rS(this.P,this.T,this.I))}start(e,r){e.enqueueRetryable(()=>r(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class v0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iS{constructor(e,r){this.V=r,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,LA(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,r){se(this.o===void 0,3512);const o=c=>{c.error!=null&&ut("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const d=c.token!==this.m;return this.m=c.token,ut("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?r(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>o(c))};const l=c=>{ut("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>l(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?l(c):ut("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new v0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(r=>r?(se(typeof r.token=="string",44558,{tokenResult:r}),this.m=r.token,new v0(r.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(a){const e=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(a);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(r);else for(let o=0;o<a;o++)r[o]=Math.floor(256*Math.random());return r}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=62*Math.floor(4.129032258064516);let o="";for(;o.length<20;){const l=oS(40);for(let c=0;c<l.length;++c)o.length<20&&l[c]<r&&(o+=e.charAt(l[c]%62))}return o}}function Ot(a,e){return a<e?-1:a>e?1:0}function wd(a,e){let r=0;for(;r<a.length&&r<e.length;){const o=a.codePointAt(r),l=e.codePointAt(r);if(o!==l){if(o<128&&l<128)return Ot(o,l);{const c=lb(),d=sS(c.encode(b0(a,r)),c.encode(b0(e,r)));return d!==0?d:Ot(o,l)}}r+=o>65535?2:1}return Ot(a.length,e.length)}function b0(a,e){return a.codePointAt(e)>65535?a.substring(e,e+2):a.substring(e,e+1)}function sS(a,e){for(let r=0;r<a.length&&r<e.length;++r)if(a[r]!==e[r])return Ot(a[r],e[r]);return Ot(a.length,e.length)}function No(a,e,r){return a.length===e.length&&a.every((o,l)=>r(o,e[l]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=-62135596800,E0=1e6;class Be{static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const r=Math.floor(e/1e3),o=Math.floor((e-1e3*r)*E0);return new Be(r,o)}constructor(e,r){if(this.seconds=e,this.nanoseconds=r,r<0)throw new ht(nt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new ht(nt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(e<_0)throw new ht(nt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ht(nt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/E0}_compareTo(e){return this.seconds===e.seconds?Ot(this.nanoseconds,e.nanoseconds):Ot(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-_0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{static fromTimestamp(e){return new At(e)}static min(){return new At(new Be(0,0))}static max(){return new At(new Be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="__name__";class ur{constructor(e,r,o){r===void 0?r=0:r>e.length&&St(637,{offset:r,range:e.length}),o===void 0?o=e.length-r:o>e.length-r&&St(1746,{length:o,range:e.length-r}),this.segments=e,this.offset=r,this.len=o}get length(){return this.len}isEqual(e){return ur.comparator(this,e)===0}child(e){const r=this.segments.slice(this.offset,this.limit());return e instanceof ur?e.forEach(o=>{r.push(o)}):r.push(e),this.construct(r)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}forEach(e){for(let r=this.offset,o=this.limit();r<o;r++)e(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,r){const o=Math.min(e.length,r.length);for(let l=0;l<o;l++){const c=ur.compareSegments(e.get(l),r.get(l));if(c!==0)return c}return Ot(e.length,r.length)}static compareSegments(e,r){const o=ur.isNumericId(e),l=ur.isNumericId(r);return o&&!l?-1:!o&&l?1:o&&l?ur.extractNumericId(e).compare(ur.extractNumericId(r)):wd(e,r)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Da.fromString(e.substring(4,e.length-2))}}class Wt extends ur{construct(e,r,o){return new Wt(e,r,o)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const r=[];for(const o of e){if(o.indexOf("//")>=0)throw new ht(nt.INVALID_ARGUMENT,`Invalid segment (${o}). Paths must not contain // in them.`);r.push(...o.split("/").filter(l=>l.length>0))}return new Wt(r)}static emptyPath(){return new Wt([])}}const lS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class en extends ur{construct(e,r,o){return new en(e,r,o)}static isValidIdentifier(e){return lS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),en.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===T0}static keyField(){return new en([T0])}static fromServerFormat(e){const r=[];let o="",l=0;const c=()=>{if(o.length===0)throw new ht(nt.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(o),o=""};let d=!1;for(;l<e.length;){const p=e[l];if(p==="\\"){if(l+1===e.length)throw new ht(nt.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[l+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ht(nt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);o+=g,l+=2}else p==="`"?(d=!d,l++):p!=="."||d?(o+=p,l++):(c(),l++)}if(c(),d)throw new ht(nt.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new en(r)}static emptyPath(){return new en([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.path=e}static fromPath(e){return new yt(Wt.fromString(e))}static fromName(e){return new yt(Wt.fromString(e).popFirst(5))}static empty(){return new yt(Wt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Wt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,r){return Wt.comparator(e.path,r.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new yt(new Wt(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=-1;function uS(a,e){const r=a.toTimestamp().seconds,o=a.toTimestamp().nanoseconds+1,l=At.fromTimestamp(o===1e9?new Be(r+1,0):new Be(r,o));return new Ma(l,yt.empty(),e)}function cS(a){return new Ma(a.readTime,a.key,vl)}class Ma{constructor(e,r,o){this.readTime=e,this.documentKey=r,this.largestBatchId=o}static min(){return new Ma(At.min(),yt.empty(),vl)}static max(){return new Ma(At.max(),yt.empty(),vl)}}function hS(a,e){let r=a.readTime.compareTo(e.readTime);return r!==0?r:(r=yt.comparator(a.documentKey,e.documentKey),r!==0?r:Ot(a.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uc(a){if(a.code!==nt.FAILED_PRECONDITION||a.message!==fS)throw a;ut("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(r=>{this.isDone=!0,this.result=r,this.nextCallback&&this.nextCallback(r)},r=>{this.isDone=!0,this.error=r,this.catchCallback&&this.catchCallback(r)})}catch(e){return this.next(void 0,e)}next(e,r){return this.callbackAttached&&St(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(r,this.error):this.wrapSuccess(e,this.result):new W((o,l)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(o,l)},this.catchCallback=c=>{this.wrapFailure(r,c).next(o,l)}})}toPromise(){return new Promise((e,r)=>{this.next(e,r)})}wrapUserFunction(e){try{const r=e();return r instanceof W?r:W.resolve(r)}catch(r){return W.reject(r)}}wrapSuccess(e,r){return e?this.wrapUserFunction(()=>e(r)):W.resolve(r)}wrapFailure(e,r){return e?this.wrapUserFunction(()=>e(r)):W.reject(r)}static resolve(e){return new W((r,o)=>{r(e)})}static reject(e){return new W((r,o)=>{o(e)})}static waitFor(e){return new W((r,o)=>{let l=0,c=0,d=!1;e.forEach(p=>{++l,p.next(()=>{++c,d&&c===l&&r()},g=>o(g))}),d=!0,c===l&&r()})}static or(e){let r=W.resolve(!1);for(const o of e)r=r.next(l=>l?W.resolve(l):o());return r}static forEach(e,r){const o=[];return e.forEach((l,c)=>{o.push(r.call(this,l,c))}),this.waitFor(o)}static mapArray(e,r){return new W((o,l)=>{const c=e.length,d=new Array(c);let p=0;for(let g=0;g<c;g++){const y=g;r(e[y]).next(_=>{d[y]=_,++p,p===c&&o(d)},_=>l(_))}})}static doWhile(e,r){return new W((o,l)=>{const c=()=>{e()===!0?r().next(()=>{c()},l):o()};c()})}}function mS(a){const e=a.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}function Ho(a){return a.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,r){this.previousValue=e,r&&(r.sequenceNumberHandler=o=>this.ue(o),this.ce=o=>r.writeSequenceNumber(o))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}zc.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=-1;function Lc(a){return a==null}function Sc(a){return a===0&&1/a==-1/0}function gS(a){return typeof a=="number"&&Number.isInteger(a)&&!Sc(a)&&a<=Number.MAX_SAFE_INTEGER&&a>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb="";function yS(a){let e="";for(let r=0;r<a.length;r++)e.length>0&&(e=A0(e)),e=vS(a.get(r),e);return A0(e)}function vS(a,e){let r=e;const o=a.length;for(let l=0;l<o;l++){const c=a.charAt(l);switch(c){case"\0":r+="";break;case cb:r+="";break;default:r+=c}}return r}function A0(a){return a+cb+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(a){let e=0;for(const r in a)Object.prototype.hasOwnProperty.call(a,r)&&e++;return e}function Go(a,e){for(const r in a)Object.prototype.hasOwnProperty.call(a,r)&&e(r,a[r])}function hb(a){for(const e in a)if(Object.prototype.hasOwnProperty.call(a,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,r){this.comparator=e,this.root=r||Ye.EMPTY}insert(e,r){return new pe(this.comparator,this.root.insert(e,r,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return r.value;o<0?r=r.left:o>0&&(r=r.right)}return null}indexOf(e){let r=0,o=this.root;for(;!o.isEmpty();){const l=this.comparator(e,o.key);if(l===0)return r+o.left.size;l<0?o=o.left:(r+=o.left.size+1,o=o.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((r,o)=>(e(r,o),!1))}toString(){const e=[];return this.inorderTraversal((r,o)=>(e.push(`${r}:${o}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nc(this.root,e,this.comparator,!1)}getReverseIterator(){return new nc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nc(this.root,e,this.comparator,!0)}}class nc{constructor(e,r,o,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=r?o(e.key,r):1,r&&l&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const r={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,r,o,l,c){this.key=e,this.value=r,this.color=o??Ye.RED,this.left=l??Ye.EMPTY,this.right=c??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,r,o,l,c){return new Ye(e??this.key,r??this.value,o??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,r,o){let l=this;const c=o(e,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(e,r,o),null):c===0?l.copy(null,r,null,null,null):l.copy(null,null,null,null,l.right.insert(e,r,o)),l.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,r){let o,l=this;if(r(e,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(e,r),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),r(e,l.key)===0){if(l.right.isEmpty())return Ye.EMPTY;o=l.right.min(),l=l.copy(o.key,o.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(e,r))}return l.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,r)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw St(43730,{key:this.key,value:this.value});if(this.right.isRed())throw St(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw St(27949);return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw St(57766)}get value(){throw St(16141)}get color(){throw St(16727)}get left(){throw St(29726)}get right(){throw St(36894)}copy(e,r,o,l,c){return this}insert(e,r,o){return new Ye(e,r)}remove(e,r){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((r,o)=>(e(r),!1))}forEachInRange(e,r){const o=this.data.getIteratorFrom(e[0]);for(;o.hasNext();){const l=o.getNext();if(this.comparator(l.key,e[1])>=0)return;r(l.key)}}forEachWhile(e,r){let o;for(o=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();o.hasNext();)if(!e(o.getNext().key))return}firstAfterOrEqual(e){const r=this.data.getIteratorFrom(e);return r.hasNext()?r.getNext().key:null}getIterator(){return new x0(this.data.getIterator())}getIteratorFrom(e){return new x0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let r=this;return r.size<e.size&&(r=e,e=this),e.forEach(o=>{r=r.add(o)}),r}isEqual(e){if(!(e instanceof Ne)||this.size!==e.size)return!1;const r=this.data.getIterator(),o=e.data.getIterator();for(;r.hasNext();){const l=r.getNext().key,c=o.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(r=>{e.push(r)}),e}toString(){const e=[];return this.forEach(r=>e.push(r)),"SortedSet("+e.toString()+")"}copy(e){const r=new Ne(this.comparator);return r.data=e,r}}class x0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this.fields=e,e.sort(en.comparator)}static empty(){return new wa([])}unionWith(e){let r=new Ne(en.comparator);for(const o of this.fields)r=r.add(o);for(const o of e)r=r.add(o);return new wa(r.toArray())}covers(e){for(const r of this.fields)if(r.isPrefixOf(e))return!0;return!1}isEqual(e){return No(this.fields,e.fields,(r,o)=>r.isEqual(o))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const r=function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new fb("Invalid base64 string: "+c):c}}(e);return new Ke(r)}static fromUint8Array(e){const r=function(l){let c="";for(let d=0;d<l.length;++d)c+=String.fromCharCode(l[d]);return c}(e);return new Ke(r)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(r){return btoa(r)}(this.binaryString)}toUint8Array(){return function(r){const o=new Uint8Array(r.length);for(let l=0;l<r.length;l++)o[l]=r.charCodeAt(l);return o}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ot(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const bS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ka(a){if(se(!!a,39018),typeof a=="string"){let e=0;const r=bS.exec(a);if(se(!!r,46558,{timestamp:a}),r[1]){let l=r[1];l=(l+"000000000").substr(0,9),e=Number(l)}const o=new Date(a);return{seconds:Math.floor(o.getTime()/1e3),nanos:e}}return{seconds:me(a.seconds),nanos:me(a.nanos)}}function me(a){return typeof a=="number"?a:typeof a=="string"?Number(a):0}function Va(a){return typeof a=="string"?Ke.fromBase64String(a):Ke.fromUint8Array(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db="server_timestamp",mb="__type__",pb="__previous_value__",gb="__local_write_time__";function em(a){var e,r;return((r=(((e=a==null?void 0:a.mapValue)===null||e===void 0?void 0:e.fields)||{})[mb])===null||r===void 0?void 0:r.stringValue)===db}function jc(a){const e=a.mapValue.fields[pb];return em(e)?jc(e):e}function bl(a){const e=ka(a.mapValue.fields[gb].timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,r,o,l,c,d,p,g,y){this.databaseId=e,this.appId=r,this.persistenceKey=o,this.host=l,this.ssl=c,this.forceLongPolling=d,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=y}}const xc="(default)";class _l{constructor(e,r){this.projectId=e,this.database=r||xc}static empty(){return new _l("","")}get isDefaultDatabase(){return this.database===xc}isEqual(e){return e instanceof _l&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb="__type__",ES="__max__",rc={mapValue:{}},vb="__vector__",wc="value";function Pa(a){return"nullValue"in a?0:"booleanValue"in a?1:"integerValue"in a||"doubleValue"in a?2:"timestampValue"in a?3:"stringValue"in a?5:"bytesValue"in a?6:"referenceValue"in a?7:"geoPointValue"in a?8:"arrayValue"in a?9:"mapValue"in a?em(a)?4:AS(a)?9007199254740991:TS(a)?10:11:St(28295,{value:a})}function mr(a,e){if(a===e)return!0;const r=Pa(a);if(r!==Pa(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return a.booleanValue===e.booleanValue;case 4:return bl(a).isEqual(bl(e));case 3:return function(l,c){if(typeof l.timestampValue=="string"&&typeof c.timestampValue=="string"&&l.timestampValue.length===c.timestampValue.length)return l.timestampValue===c.timestampValue;const d=ka(l.timestampValue),p=ka(c.timestampValue);return d.seconds===p.seconds&&d.nanos===p.nanos}(a,e);case 5:return a.stringValue===e.stringValue;case 6:return function(l,c){return Va(l.bytesValue).isEqual(Va(c.bytesValue))}(a,e);case 7:return a.referenceValue===e.referenceValue;case 8:return function(l,c){return me(l.geoPointValue.latitude)===me(c.geoPointValue.latitude)&&me(l.geoPointValue.longitude)===me(c.geoPointValue.longitude)}(a,e);case 2:return function(l,c){if("integerValue"in l&&"integerValue"in c)return me(l.integerValue)===me(c.integerValue);if("doubleValue"in l&&"doubleValue"in c){const d=me(l.doubleValue),p=me(c.doubleValue);return d===p?Sc(d)===Sc(p):isNaN(d)&&isNaN(p)}return!1}(a,e);case 9:return No(a.arrayValue.values||[],e.arrayValue.values||[],mr);case 10:case 11:return function(l,c){const d=l.mapValue.fields||{},p=c.mapValue.fields||{};if(S0(d)!==S0(p))return!1;for(const g in d)if(d.hasOwnProperty(g)&&(p[g]===void 0||!mr(d[g],p[g])))return!1;return!0}(a,e);default:return St(52216,{left:a})}}function El(a,e){return(a.values||[]).find(r=>mr(r,e))!==void 0}function Io(a,e){if(a===e)return 0;const r=Pa(a),o=Pa(e);if(r!==o)return Ot(r,o);switch(r){case 0:case 9007199254740991:return 0;case 1:return Ot(a.booleanValue,e.booleanValue);case 2:return function(c,d){const p=me(c.integerValue||c.doubleValue),g=me(d.integerValue||d.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1}(a,e);case 3:return w0(a.timestampValue,e.timestampValue);case 4:return w0(bl(a),bl(e));case 5:return wd(a.stringValue,e.stringValue);case 6:return function(c,d){const p=Va(c),g=Va(d);return p.compareTo(g)}(a.bytesValue,e.bytesValue);case 7:return function(c,d){const p=c.split("/"),g=d.split("/");for(let y=0;y<p.length&&y<g.length;y++){const _=Ot(p[y],g[y]);if(_!==0)return _}return Ot(p.length,g.length)}(a.referenceValue,e.referenceValue);case 8:return function(c,d){const p=Ot(me(c.latitude),me(d.latitude));return p!==0?p:Ot(me(c.longitude),me(d.longitude))}(a.geoPointValue,e.geoPointValue);case 9:return R0(a.arrayValue,e.arrayValue);case 10:return function(c,d){var p,g,y,_;const S=c.fields||{},C=d.fields||{},U=(p=S[wc])===null||p===void 0?void 0:p.arrayValue,V=(g=C[wc])===null||g===void 0?void 0:g.arrayValue,L=Ot(((y=U==null?void 0:U.values)===null||y===void 0?void 0:y.length)||0,((_=V==null?void 0:V.values)===null||_===void 0?void 0:_.length)||0);return L!==0?L:R0(U,V)}(a.mapValue,e.mapValue);case 11:return function(c,d){if(c===rc.mapValue&&d===rc.mapValue)return 0;if(c===rc.mapValue)return 1;if(d===rc.mapValue)return-1;const p=c.fields||{},g=Object.keys(p),y=d.fields||{},_=Object.keys(y);g.sort(),_.sort();for(let S=0;S<g.length&&S<_.length;++S){const C=wd(g[S],_[S]);if(C!==0)return C;const U=Io(p[g[S]],y[_[S]]);if(U!==0)return U}return Ot(g.length,_.length)}(a.mapValue,e.mapValue);default:throw St(23264,{Pe:r})}}function w0(a,e){if(typeof a=="string"&&typeof e=="string"&&a.length===e.length)return Ot(a,e);const r=ka(a),o=ka(e),l=Ot(r.seconds,o.seconds);return l!==0?l:Ot(r.nanos,o.nanos)}function R0(a,e){const r=a.values||[],o=e.values||[];for(let l=0;l<r.length&&l<o.length;++l){const c=Io(r[l],o[l]);if(c)return c}return Ot(r.length,o.length)}function Mo(a){return Rd(a)}function Rd(a){return"nullValue"in a?"null":"booleanValue"in a?""+a.booleanValue:"integerValue"in a?""+a.integerValue:"doubleValue"in a?""+a.doubleValue:"timestampValue"in a?function(r){const o=ka(r);return`time(${o.seconds},${o.nanos})`}(a.timestampValue):"stringValue"in a?a.stringValue:"bytesValue"in a?function(r){return Va(r).toBase64()}(a.bytesValue):"referenceValue"in a?function(r){return yt.fromName(r).toString()}(a.referenceValue):"geoPointValue"in a?function(r){return`geo(${r.latitude},${r.longitude})`}(a.geoPointValue):"arrayValue"in a?function(r){let o="[",l=!0;for(const c of r.values||[])l?l=!1:o+=",",o+=Rd(c);return o+"]"}(a.arrayValue):"mapValue"in a?function(r){const o=Object.keys(r.fields||{}).sort();let l="{",c=!0;for(const d of o)c?c=!1:l+=",",l+=`${d}:${Rd(r.fields[d])}`;return l+"}"}(a.mapValue):St(61005,{value:a})}function dc(a){switch(Pa(a)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=jc(a);return e?16+dc(e):16;case 5:return 2*a.stringValue.length;case 6:return Va(a.bytesValue).approximateByteSize();case 7:return a.referenceValue.length;case 9:return function(o){return(o.values||[]).reduce((l,c)=>l+dc(c),0)}(a.arrayValue);case 10:case 11:return function(o){let l=0;return Go(o.fields,(c,d)=>{l+=c.length+dc(d)}),l}(a.mapValue);default:throw St(13486,{value:a})}}function C0(a,e){return{referenceValue:`projects/${a.projectId}/databases/${a.database}/documents/${e.path.canonicalString()}`}}function Cd(a){return!!a&&"integerValue"in a}function nm(a){return!!a&&"arrayValue"in a}function O0(a){return!!a&&"nullValue"in a}function D0(a){return!!a&&"doubleValue"in a&&isNaN(Number(a.doubleValue))}function hd(a){return!!a&&"mapValue"in a}function TS(a){var e,r;return((r=(((e=a==null?void 0:a.mapValue)===null||e===void 0?void 0:e.fields)||{})[yb])===null||r===void 0?void 0:r.stringValue)===vb}function cl(a){if(a.geoPointValue)return{geoPointValue:Object.assign({},a.geoPointValue)};if(a.timestampValue&&typeof a.timestampValue=="object")return{timestampValue:Object.assign({},a.timestampValue)};if(a.mapValue){const e={mapValue:{fields:{}}};return Go(a.mapValue.fields,(r,o)=>e.mapValue.fields[r]=cl(o)),e}if(a.arrayValue){const e={arrayValue:{values:[]}};for(let r=0;r<(a.arrayValue.values||[]).length;++r)e.arrayValue.values[r]=cl(a.arrayValue.values[r]);return e}return Object.assign({},a)}function AS(a){return(((a.mapValue||{}).fields||{}).__type__||{}).stringValue===ES}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.value=e}static empty(){return new cr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let r=this.value;for(let o=0;o<e.length-1;++o)if(r=(r.mapValue.fields||{})[e.get(o)],!hd(r))return null;return r=(r.mapValue.fields||{})[e.lastSegment()],r||null}}set(e,r){this.getFieldsMap(e.popLast())[e.lastSegment()]=cl(r)}setAll(e){let r=en.emptyPath(),o={},l=[];e.forEach((d,p)=>{if(!r.isImmediateParentOf(p)){const g=this.getFieldsMap(r);this.applyChanges(g,o,l),o={},l=[],r=p.popLast()}d?o[p.lastSegment()]=cl(d):l.push(p.lastSegment())});const c=this.getFieldsMap(r);this.applyChanges(c,o,l)}delete(e){const r=this.field(e.popLast());hd(r)&&r.mapValue.fields&&delete r.mapValue.fields[e.lastSegment()]}isEqual(e){return mr(this.value,e.value)}getFieldsMap(e){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let o=0;o<e.length;++o){let l=r.mapValue.fields[e.get(o)];hd(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},r.mapValue.fields[e.get(o)]=l),r=l}return r.mapValue.fields}applyChanges(e,r,o){Go(r,(l,c)=>e[l]=c);for(const l of o)delete e[l]}clone(){return new cr(cl(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,r,o,l,c,d,p){this.key=e,this.documentType=r,this.version=o,this.readTime=l,this.createTime=c,this.data=d,this.documentState=p}static newInvalidDocument(e){return new tn(e,0,At.min(),At.min(),At.min(),cr.empty(),0)}static newFoundDocument(e,r,o,l){return new tn(e,1,r,At.min(),o,l,0)}static newNoDocument(e,r){return new tn(e,2,r,At.min(),At.min(),cr.empty(),0)}static newUnknownDocument(e,r){return new tn(e,3,r,At.min(),At.min(),cr.empty(),2)}convertToFoundDocument(e,r){return!this.createTime.isEqual(At.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=cr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=cr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=At.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,r){this.position=e,this.inclusive=r}}function N0(a,e,r){let o=0;for(let l=0;l<a.position.length;l++){const c=e[l],d=a.position[l];if(c.field.isKeyField()?o=yt.comparator(yt.fromName(d.referenceValue),r.key):o=Io(d,r.data.field(c.field)),c.dir==="desc"&&(o*=-1),o!==0)break}return o}function I0(a,e){if(a===null)return e===null;if(e===null||a.inclusive!==e.inclusive||a.position.length!==e.position.length)return!1;for(let r=0;r<a.position.length;r++)if(!mr(a.position[r],e.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,r="asc"){this.field=e,this.dir=r}}function SS(a,e){return a.dir===e.dir&&a.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{}class Ae extends bb{constructor(e,r,o){super(),this.field=e,this.op=r,this.value=o}static create(e,r,o){return e.isKeyField()?r==="in"||r==="not-in"?this.createKeyFieldInFilter(e,r,o):new wS(e,r,o):r==="array-contains"?new OS(e,o):r==="in"?new DS(e,o):r==="not-in"?new NS(e,o):r==="array-contains-any"?new IS(e,o):new Ae(e,r,o)}static createKeyFieldInFilter(e,r,o){return r==="in"?new RS(e,o):new CS(e,o)}matches(e){const r=e.data.field(this.field);return this.op==="!="?r!==null&&r.nullValue===void 0&&this.matchesComparison(Io(r,this.value)):r!==null&&Pa(this.value)===Pa(r)&&this.matchesComparison(Io(r,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return St(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fn extends bb{constructor(e,r){super(),this.filters=e,this.op=r,this.Te=null}static create(e,r){return new Fn(e,r)}matches(e){return _b(this)?this.filters.find(r=>!r.matches(e))===void 0:this.filters.find(r=>r.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,r)=>e.concat(r.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function _b(a){return a.op==="and"}function Eb(a){return xS(a)&&_b(a)}function xS(a){for(const e of a.filters)if(e instanceof Fn)return!1;return!0}function Od(a){if(a instanceof Ae)return a.field.canonicalString()+a.op.toString()+Mo(a.value);if(Eb(a))return a.filters.map(e=>Od(e)).join(",");{const e=a.filters.map(r=>Od(r)).join(",");return`${a.op}(${e})`}}function Tb(a,e){return a instanceof Ae?function(o,l){return l instanceof Ae&&o.op===l.op&&o.field.isEqual(l.field)&&mr(o.value,l.value)}(a,e):a instanceof Fn?function(o,l){return l instanceof Fn&&o.op===l.op&&o.filters.length===l.filters.length?o.filters.reduce((c,d,p)=>c&&Tb(d,l.filters[p]),!0):!1}(a,e):void St(19439)}function Ab(a){return a instanceof Ae?function(r){return`${r.field.canonicalString()} ${r.op} ${Mo(r.value)}`}(a):a instanceof Fn?function(r){return r.op.toString()+" {"+r.getFilters().map(Ab).join(" ,")+"}"}(a):"Filter"}class wS extends Ae{constructor(e,r,o){super(e,r,o),this.key=yt.fromName(o.referenceValue)}matches(e){const r=yt.comparator(e.key,this.key);return this.matchesComparison(r)}}class RS extends Ae{constructor(e,r){super(e,"in",r),this.keys=Sb("in",r)}matches(e){return this.keys.some(r=>r.isEqual(e.key))}}class CS extends Ae{constructor(e,r){super(e,"not-in",r),this.keys=Sb("not-in",r)}matches(e){return!this.keys.some(r=>r.isEqual(e.key))}}function Sb(a,e){var r;return(((r=e.arrayValue)===null||r===void 0?void 0:r.values)||[]).map(o=>yt.fromName(o.referenceValue))}class OS extends Ae{constructor(e,r){super(e,"array-contains",r)}matches(e){const r=e.data.field(this.field);return nm(r)&&El(r.arrayValue,this.value)}}class DS extends Ae{constructor(e,r){super(e,"in",r)}matches(e){const r=e.data.field(this.field);return r!==null&&El(this.value.arrayValue,r)}}class NS extends Ae{constructor(e,r){super(e,"not-in",r)}matches(e){if(El(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const r=e.data.field(this.field);return r!==null&&r.nullValue===void 0&&!El(this.value.arrayValue,r)}}class IS extends Ae{constructor(e,r){super(e,"array-contains-any",r)}matches(e){const r=e.data.field(this.field);return!(!nm(r)||!r.arrayValue.values)&&r.arrayValue.values.some(o=>El(this.value.arrayValue,o))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,r=null,o=[],l=[],c=null,d=null,p=null){this.path=e,this.collectionGroup=r,this.orderBy=o,this.filters=l,this.limit=c,this.startAt=d,this.endAt=p,this.Ie=null}}function M0(a,e=null,r=[],o=[],l=null,c=null,d=null){return new MS(a,e,r,o,l,c,d)}function rm(a){const e=Ut(a);if(e.Ie===null){let r=e.path.canonicalString();e.collectionGroup!==null&&(r+="|cg:"+e.collectionGroup),r+="|f:",r+=e.filters.map(o=>Od(o)).join(","),r+="|ob:",r+=e.orderBy.map(o=>function(c){return c.field.canonicalString()+c.dir}(o)).join(","),Lc(e.limit)||(r+="|l:",r+=e.limit),e.startAt&&(r+="|lb:",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(o=>Mo(o)).join(",")),e.endAt&&(r+="|ub:",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(o=>Mo(o)).join(",")),e.Ie=r}return e.Ie}function am(a,e){if(a.limit!==e.limit||a.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<a.orderBy.length;r++)if(!SS(a.orderBy[r],e.orderBy[r]))return!1;if(a.filters.length!==e.filters.length)return!1;for(let r=0;r<a.filters.length;r++)if(!Tb(a.filters[r],e.filters[r]))return!1;return a.collectionGroup===e.collectionGroup&&!!a.path.isEqual(e.path)&&!!I0(a.startAt,e.startAt)&&I0(a.endAt,e.endAt)}function Dd(a){return yt.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,r=null,o=[],l=[],c=null,d="F",p=null,g=null){this.path=e,this.collectionGroup=r,this.explicitOrderBy=o,this.filters=l,this.limit=c,this.limitType=d,this.startAt=p,this.endAt=g,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function kS(a,e,r,o,l,c,d,p){return new wl(a,e,r,o,l,c,d,p)}function im(a){return new wl(a)}function k0(a){return a.filters.length===0&&a.limit===null&&a.startAt==null&&a.endAt==null&&(a.explicitOrderBy.length===0||a.explicitOrderBy.length===1&&a.explicitOrderBy[0].field.isKeyField())}function xb(a){return a.collectionGroup!==null}function hl(a){const e=Ut(a);if(e.Ee===null){e.Ee=[];const r=new Set;for(const c of e.explicitOrderBy)e.Ee.push(c),r.add(c.field.canonicalString());const o=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let p=new Ne(en.comparator);return d.filters.forEach(g=>{g.getFlattenedFilters().forEach(y=>{y.isInequality()&&(p=p.add(y.field))})}),p})(e).forEach(c=>{r.has(c.canonicalString())||c.isKeyField()||e.Ee.push(new Cc(c,o))}),r.has(en.keyField().canonicalString())||e.Ee.push(new Cc(en.keyField(),o))}return e.Ee}function fr(a){const e=Ut(a);return e.de||(e.de=VS(e,hl(a))),e.de}function VS(a,e){if(a.limitType==="F")return M0(a.path,a.collectionGroup,e,a.filters,a.limit,a.startAt,a.endAt);{e=e.map(l=>{const c=l.dir==="desc"?"asc":"desc";return new Cc(l.field,c)});const r=a.endAt?new Rc(a.endAt.position,a.endAt.inclusive):null,o=a.startAt?new Rc(a.startAt.position,a.startAt.inclusive):null;return M0(a.path,a.collectionGroup,e,a.filters,a.limit,r,o)}}function Nd(a,e){const r=a.filters.concat([e]);return new wl(a.path,a.collectionGroup,a.explicitOrderBy.slice(),r,a.limit,a.limitType,a.startAt,a.endAt)}function Id(a,e,r){return new wl(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),e,r,a.startAt,a.endAt)}function Bc(a,e){return am(fr(a),fr(e))&&a.limitType===e.limitType}function wb(a){return`${rm(fr(a))}|lt:${a.limitType}`}function So(a){return`Query(target=${function(r){let o=r.path.canonicalString();return r.collectionGroup!==null&&(o+=" collectionGroup="+r.collectionGroup),r.filters.length>0&&(o+=`, filters: [${r.filters.map(l=>Ab(l)).join(", ")}]`),Lc(r.limit)||(o+=", limit: "+r.limit),r.orderBy.length>0&&(o+=`, orderBy: [${r.orderBy.map(l=>function(d){return`${d.field.canonicalString()} (${d.dir})`}(l)).join(", ")}]`),r.startAt&&(o+=", startAt: ",o+=r.startAt.inclusive?"b:":"a:",o+=r.startAt.position.map(l=>Mo(l)).join(",")),r.endAt&&(o+=", endAt: ",o+=r.endAt.inclusive?"a:":"b:",o+=r.endAt.position.map(l=>Mo(l)).join(",")),`Target(${o})`}(fr(a))}; limitType=${a.limitType})`}function qc(a,e){return e.isFoundDocument()&&function(o,l){const c=l.key.path;return o.collectionGroup!==null?l.key.hasCollectionId(o.collectionGroup)&&o.path.isPrefixOf(c):yt.isDocumentKey(o.path)?o.path.isEqual(c):o.path.isImmediateParentOf(c)}(a,e)&&function(o,l){for(const c of hl(o))if(!c.field.isKeyField()&&l.data.field(c.field)===null)return!1;return!0}(a,e)&&function(o,l){for(const c of o.filters)if(!c.matches(l))return!1;return!0}(a,e)&&function(o,l){return!(o.startAt&&!function(d,p,g){const y=N0(d,p,g);return d.inclusive?y<=0:y<0}(o.startAt,hl(o),l)||o.endAt&&!function(d,p,g){const y=N0(d,p,g);return d.inclusive?y>=0:y>0}(o.endAt,hl(o),l))}(a,e)}function PS(a){return a.collectionGroup||(a.path.length%2==1?a.path.lastSegment():a.path.get(a.path.length-2))}function Rb(a){return(e,r)=>{let o=!1;for(const l of hl(a)){const c=US(l,e,r);if(c!==0)return c;o=o||l.field.isKeyField()}return 0}}function US(a,e,r){const o=a.field.isKeyField()?yt.comparator(e.key,r.key):function(c,d,p){const g=d.data.field(c),y=p.data.field(c);return g!==null&&y!==null?Io(g,y):St(42886)}(a.field,e,r);switch(a.dir){case"asc":return o;case"desc":return-1*o;default:return St(19790,{direction:a.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,r){this.mapKeyFn=e,this.equalsFn=r,this.inner={},this.innerSize=0}get(e){const r=this.mapKeyFn(e),o=this.inner[r];if(o!==void 0){for(const[l,c]of o)if(this.equalsFn(l,e))return c}}has(e){return this.get(e)!==void 0}set(e,r){const o=this.mapKeyFn(e),l=this.inner[o];if(l===void 0)return this.inner[o]=[[e,r]],void this.innerSize++;for(let c=0;c<l.length;c++)if(this.equalsFn(l[c][0],e))return void(l[c]=[e,r]);l.push([e,r]),this.innerSize++}delete(e){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return!1;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return o.length===1?delete this.inner[r]:o.splice(l,1),this.innerSize--,!0;return!1}forEach(e){Go(this.inner,(r,o)=>{for(const[l,c]of o)e(l,c)})}isEmpty(){return hb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=new pe(yt.comparator);function Ua(){return zS}const Cb=new pe(yt.comparator);function ol(...a){let e=Cb;for(const r of a)e=e.insert(r.key,r);return e}function LS(a){let e=Cb;return a.forEach((r,o)=>e=e.insert(r,o.overlayedDocument)),e}function Si(){return fl()}function Ob(){return fl()}function fl(){return new Ci(a=>a.toString(),(a,e)=>a.isEqual(e))}const jS=new Ne(yt.comparator);function zt(...a){let e=jS;for(const r of a)e=e.add(r);return e}const BS=new Ne(Ot);function qS(){return BS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(a,e){if(a.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sc(e)?"-0":e}}function Db(a){return{integerValue:""+a}}function HS(a,e){return gS(e)?Db(e):om(a,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this._=void 0}}function GS(a,e,r){return a instanceof Md?function(l,c){const d={fields:{[mb]:{stringValue:db},[gb]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return c&&em(c)&&(c=jc(c)),c&&(d.fields[pb]=c),{mapValue:d}}(r,e):a instanceof Oc?Nb(a,e):a instanceof Dc?Ib(a,e):function(l,c){const d=QS(l,c),p=V0(d)+V0(l.Re);return Cd(d)&&Cd(l.Re)?Db(p):om(l.serializer,p)}(a,e)}function FS(a,e,r){return a instanceof Oc?Nb(a,e):a instanceof Dc?Ib(a,e):r}function QS(a,e){return a instanceof kd?function(o){return Cd(o)||function(c){return!!c&&"doubleValue"in c}(o)}(e)?e:{integerValue:0}:null}class Md extends Hc{}class Oc extends Hc{constructor(e){super(),this.elements=e}}function Nb(a,e){const r=Mb(e);for(const o of a.elements)r.some(l=>mr(l,o))||r.push(o);return{arrayValue:{values:r}}}class Dc extends Hc{constructor(e){super(),this.elements=e}}function Ib(a,e){let r=Mb(e);for(const o of a.elements)r=r.filter(l=>!mr(l,o));return{arrayValue:{values:r}}}class kd extends Hc{constructor(e,r){super(),this.serializer=e,this.Re=r}}function V0(a){return me(a.integerValue||a.doubleValue)}function Mb(a){return nm(a)&&a.arrayValue.values?a.arrayValue.values.slice():[]}function YS(a,e){return a.field.isEqual(e.field)&&function(o,l){return o instanceof Oc&&l instanceof Oc||o instanceof Dc&&l instanceof Dc?No(o.elements,l.elements,mr):o instanceof kd&&l instanceof kd?mr(o.Re,l.Re):o instanceof Md&&l instanceof Md}(a.transform,e.transform)}class xi{constructor(e,r){this.updateTime=e,this.exists=r}static none(){return new xi}static exists(e){return new xi(void 0,e)}static updateTime(e){return new xi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mc(a,e){return a.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(a.updateTime):a.exists===void 0||a.exists===e.isFoundDocument()}class sm{}function kb(a,e){if(!a.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return a.isNoDocument()?new XS(a.key,xi.none()):new lm(a.key,a.data,xi.none());{const r=a.data,o=cr.empty();let l=new Ne(en.comparator);for(let c of e.fields)if(!l.has(c)){let d=r.field(c);d===null&&c.length>1&&(c=c.popLast(),d=r.field(c)),d===null?o.delete(c):o.set(c,d),l=l.add(c)}return new Gc(a.key,o,new wa(l.toArray()),xi.none())}}function KS(a,e,r){a instanceof lm?function(l,c,d){const p=l.value.clone(),g=U0(l.fieldTransforms,c,d.transformResults);p.setAll(g),c.convertToFoundDocument(d.version,p).setHasCommittedMutations()}(a,e,r):a instanceof Gc?function(l,c,d){if(!mc(l.precondition,c))return void c.convertToUnknownDocument(d.version);const p=U0(l.fieldTransforms,c,d.transformResults),g=c.data;g.setAll(Vb(l)),g.setAll(p),c.convertToFoundDocument(d.version,g).setHasCommittedMutations()}(a,e,r):function(l,c,d){c.convertToNoDocument(d.version).setHasCommittedMutations()}(0,e,r)}function dl(a,e,r,o){return a instanceof lm?function(c,d,p,g){if(!mc(c.precondition,d))return p;const y=c.value.clone(),_=z0(c.fieldTransforms,g,d);return y.setAll(_),d.convertToFoundDocument(d.version,y).setHasLocalMutations(),null}(a,e,r,o):a instanceof Gc?function(c,d,p,g){if(!mc(c.precondition,d))return p;const y=z0(c.fieldTransforms,g,d),_=d.data;return _.setAll(Vb(c)),_.setAll(y),d.convertToFoundDocument(d.version,_).setHasLocalMutations(),p===null?null:p.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(S=>S.field))}(a,e,r,o):function(c,d,p){return mc(c.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):p}(a,e,r)}function P0(a,e){return a.type===e.type&&!!a.key.isEqual(e.key)&&!!a.precondition.isEqual(e.precondition)&&!!function(o,l){return o===void 0&&l===void 0||!(!o||!l)&&No(o,l,(c,d)=>YS(c,d))}(a.fieldTransforms,e.fieldTransforms)&&(a.type===0?a.value.isEqual(e.value):a.type!==1||a.data.isEqual(e.data)&&a.fieldMask.isEqual(e.fieldMask))}class lm extends sm{constructor(e,r,o,l=[]){super(),this.key=e,this.value=r,this.precondition=o,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class Gc extends sm{constructor(e,r,o,l,c=[]){super(),this.key=e,this.data=r,this.fieldMask=o,this.precondition=l,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function Vb(a){const e=new Map;return a.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){const o=a.data.field(r);e.set(r,o)}}),e}function U0(a,e,r){const o=new Map;se(a.length===r.length,32656,{Ve:r.length,me:a.length});for(let l=0;l<r.length;l++){const c=a[l],d=c.transform,p=e.data.field(c.field);o.set(c.field,FS(d,p,r[l]))}return o}function z0(a,e,r){const o=new Map;for(const l of a){const c=l.transform,d=r.data.field(l.field);o.set(l.field,GS(c,d,e))}return o}class XS extends sm{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,r,o,l){this.batchId=e,this.localWriteTime=r,this.baseMutations=o,this.mutations=l}applyToRemoteDocument(e,r){const o=r.mutationResults;for(let l=0;l<this.mutations.length;l++){const c=this.mutations[l];c.key.isEqual(e.key)&&KS(c,e,o[l])}}applyToLocalView(e,r){for(const o of this.baseMutations)o.key.isEqual(e.key)&&(r=dl(o,e,r,this.localWriteTime));for(const o of this.mutations)o.key.isEqual(e.key)&&(r=dl(o,e,r,this.localWriteTime));return r}applyToLocalDocumentSet(e,r){const o=Ob();return this.mutations.forEach(l=>{const c=e.get(l.key),d=c.overlayedDocument;let p=this.applyToLocalView(d,c.mutatedFields);p=r.has(l.key)?null:p;const g=kb(d,p);g!==null&&o.set(l.key,g),d.isValidDocument()||d.convertToNoDocument(At.min())}),o}keys(){return this.mutations.reduce((e,r)=>e.add(r.key),zt())}isEqual(e){return this.batchId===e.batchId&&No(this.mutations,e.mutations,(r,o)=>P0(r,o))&&No(this.baseMutations,e.baseMutations,(r,o)=>P0(r,o))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,r){this.largestBatchId=e,this.mutation=r}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,r){this.count=e,this.unchangedNames=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,Vt;function Pb(a){if(a===void 0)return Kr("GRPC error has no .code"),nt.UNKNOWN;switch(a){case Te.OK:return nt.OK;case Te.CANCELLED:return nt.CANCELLED;case Te.UNKNOWN:return nt.UNKNOWN;case Te.DEADLINE_EXCEEDED:return nt.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return nt.RESOURCE_EXHAUSTED;case Te.INTERNAL:return nt.INTERNAL;case Te.UNAVAILABLE:return nt.UNAVAILABLE;case Te.UNAUTHENTICATED:return nt.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return nt.INVALID_ARGUMENT;case Te.NOT_FOUND:return nt.NOT_FOUND;case Te.ALREADY_EXISTS:return nt.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return nt.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return nt.FAILED_PRECONDITION;case Te.ABORTED:return nt.ABORTED;case Te.OUT_OF_RANGE:return nt.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return nt.UNIMPLEMENTED;case Te.DATA_LOSS:return nt.DATA_LOSS;default:return St(39323,{code:a})}}(Vt=Te||(Te={}))[Vt.OK=0]="OK",Vt[Vt.CANCELLED=1]="CANCELLED",Vt[Vt.UNKNOWN=2]="UNKNOWN",Vt[Vt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Vt[Vt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Vt[Vt.NOT_FOUND=5]="NOT_FOUND",Vt[Vt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Vt[Vt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Vt[Vt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Vt[Vt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Vt[Vt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Vt[Vt.ABORTED=10]="ABORTED",Vt[Vt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Vt[Vt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Vt[Vt.INTERNAL=13]="INTERNAL",Vt[Vt.UNAVAILABLE=14]="UNAVAILABLE",Vt[Vt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=new Da([4294967295,4294967295],0);function L0(a){const e=lb().encode(a),r=new tb;return r.update(e),new Uint8Array(r.digest())}function j0(a){const e=new DataView(a.buffer),r=e.getUint32(0,!0),o=e.getUint32(4,!0),l=e.getUint32(8,!0),c=e.getUint32(12,!0);return[new Da([r,o],0),new Da([l,c],0)]}class um{constructor(e,r,o){if(this.bitmap=e,this.padding=r,this.hashCount=o,r<0||r>=8)throw new sl(`Invalid padding: ${r}`);if(o<0)throw new sl(`Invalid hash count: ${o}`);if(e.length>0&&this.hashCount===0)throw new sl(`Invalid hash count: ${o}`);if(e.length===0&&r!==0)throw new sl(`Invalid padding when bitmap length is 0: ${r}`);this.pe=8*e.length-r,this.ye=Da.fromNumber(this.pe)}we(e,r,o){let l=e.add(r.multiply(Da.fromNumber(o)));return l.compare(WS)===1&&(l=new Da([l.getBits(0),l.getBits(1)],0)),l.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const r=L0(e),[o,l]=j0(r);for(let c=0;c<this.hashCount;c++){const d=this.we(o,l,c);if(!this.be(d))return!1}return!0}static create(e,r,o){const l=e%8==0?0:8-e%8,c=new Uint8Array(Math.ceil(e/8)),d=new um(c,l,r);return o.forEach(p=>d.insert(p)),d}insert(e){if(this.pe===0)return;const r=L0(e),[o,l]=j0(r);for(let c=0;c<this.hashCount;c++){const d=this.we(o,l,c);this.Se(d)}}Se(e){const r=Math.floor(e/8),o=e%8;this.bitmap[r]|=1<<o}}class sl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,r,o,l,c){this.snapshotVersion=e,this.targetChanges=r,this.targetMismatches=o,this.documentUpdates=l,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(e,r,o){const l=new Map;return l.set(e,Rl.createSynthesizedTargetChangeForCurrentChange(e,r,o)),new Fc(At.min(),l,new pe(Ot),Ua(),zt())}}class Rl{constructor(e,r,o,l,c){this.resumeToken=e,this.current=r,this.addedDocuments=o,this.modifiedDocuments=l,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(e,r,o){return new Rl(o,r,zt(),zt(),zt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,r,o,l){this.De=e,this.removedTargetIds=r,this.key=o,this.ve=l}}class Ub{constructor(e,r){this.targetId=e,this.Ce=r}}class zb{constructor(e,r,o=Ke.EMPTY_BYTE_STRING,l=null){this.state=e,this.targetIds=r,this.resumeToken=o,this.cause=l}}class B0{constructor(){this.Fe=0,this.Me=q0(),this.xe=Ke.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=zt(),r=zt(),o=zt();return this.Me.forEach((l,c)=>{switch(c){case 0:e=e.add(l);break;case 2:r=r.add(l);break;case 1:o=o.add(l);break;default:St(38017,{changeType:c})}}),new Rl(this.xe,this.Oe,e,r,o)}Qe(){this.Ne=!1,this.Me=q0()}$e(e,r){this.Ne=!0,this.Me=this.Me.insert(e,r)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,se(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class tx{constructor(e){this.ze=e,this.je=new Map,this.He=Ua(),this.Je=ac(),this.Ye=ac(),this.Ze=new pe(Ot)}Xe(e){for(const r of e.De)e.ve&&e.ve.isFoundDocument()?this.et(r,e.ve):this.tt(r,e.key,e.ve);for(const r of e.removedTargetIds)this.tt(r,e.key,e.ve)}nt(e){this.forEachTarget(e,r=>{const o=this.rt(r);switch(e.state){case 0:this.it(r)&&o.ke(e.resumeToken);break;case 1:o.We(),o.Be||o.Qe(),o.ke(e.resumeToken);break;case 2:o.We(),o.Be||this.removeTarget(r);break;case 3:this.it(r)&&(o.Ge(),o.ke(e.resumeToken));break;case 4:this.it(r)&&(this.st(r),o.ke(e.resumeToken));break;default:St(56790,{state:e.state})}})}forEachTarget(e,r){e.targetIds.length>0?e.targetIds.forEach(r):this.je.forEach((o,l)=>{this.it(l)&&r(l)})}ot(e){const r=e.targetId,o=e.Ce.count,l=this._t(r);if(l){const c=l.target;if(Dd(c))if(o===0){const d=new yt(c.path);this.tt(r,d,tn.newNoDocument(d,At.min()))}else se(o===1,20013,{expectedCount:o});else{const d=this.ut(r);if(d!==o){const p=this.ct(e),g=p?this.lt(p,e,d):1;if(g!==0){this.st(r);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(r,y)}}}}}ct(e){const r=e.Ce.unchangedNames;if(!r||!r.bits)return null;const{bits:{bitmap:o="",padding:l=0},hashCount:c=0}=r;let d,p;try{d=Va(o).toUint8Array()}catch(g){if(g instanceof fb)return Do("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new um(d,l,c)}catch(g){return Do(g instanceof sl?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.pe===0?null:p}lt(e,r,o){return r.Ce.count===o-this.Tt(e,r.targetId)?0:2}Tt(e,r){const o=this.ze.getRemoteKeysForTarget(r);let l=0;return o.forEach(c=>{const d=this.ze.Pt(),p=`projects/${d.projectId}/databases/${d.database}/documents/${c.path.canonicalString()}`;e.mightContain(p)||(this.tt(r,c,null),l++)}),l}It(e){const r=new Map;this.je.forEach((c,d)=>{const p=this._t(d);if(p){if(c.current&&Dd(p.target)){const g=new yt(p.target.path);this.Et(g).has(d)||this.dt(d,g)||this.tt(d,g,tn.newNoDocument(g,e))}c.Le&&(r.set(d,c.qe()),c.Qe())}});let o=zt();this.Ye.forEach((c,d)=>{let p=!0;d.forEachWhile(g=>{const y=this._t(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(o=o.add(c))}),this.He.forEach((c,d)=>d.setReadTime(e));const l=new Fc(e,r,this.Ze,this.He,o);return this.He=Ua(),this.Je=ac(),this.Ye=ac(),this.Ze=new pe(Ot),l}et(e,r){if(!this.it(e))return;const o=this.dt(e,r.key)?2:0;this.rt(e).$e(r.key,o),this.He=this.He.insert(r.key,r),this.Je=this.Je.insert(r.key,this.Et(r.key).add(e)),this.Ye=this.Ye.insert(r.key,this.At(r.key).add(e))}tt(e,r,o){if(!this.it(e))return;const l=this.rt(e);this.dt(e,r)?l.$e(r,1):l.Ue(r),this.Ye=this.Ye.insert(r,this.At(r).delete(e)),this.Ye=this.Ye.insert(r,this.At(r).add(e)),o&&(this.He=this.He.insert(r,o))}removeTarget(e){this.je.delete(e)}ut(e){const r=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let r=this.je.get(e);return r||(r=new B0,this.je.set(e,r)),r}At(e){let r=this.Ye.get(e);return r||(r=new Ne(Ot),this.Ye=this.Ye.insert(e,r)),r}Et(e){let r=this.Je.get(e);return r||(r=new Ne(Ot),this.Je=this.Je.insert(e,r)),r}it(e){const r=this._t(e)!==null;return r||ut("WatchChangeAggregator","Detected inactive target",e),r}_t(e){const r=this.je.get(e);return r&&r.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new B0),this.ze.getRemoteKeysForTarget(e).forEach(r=>{this.tt(e,r,null)})}dt(e,r){return this.ze.getRemoteKeysForTarget(e).has(r)}}function ac(){return new pe(yt.comparator)}function q0(){return new pe(yt.comparator)}const ex={asc:"ASCENDING",desc:"DESCENDING"},nx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rx={and:"AND",or:"OR"};class ax{constructor(e,r){this.databaseId=e,this.useProto3Json=r}}function Vd(a,e){return a.useProto3Json||Lc(e)?e:{value:e}}function Pd(a,e){return a.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lb(a,e){return a.useProto3Json?e.toBase64():e.toUint8Array()}function Co(a){return se(!!a,49232),At.fromTimestamp(function(r){const o=ka(r);return new Be(o.seconds,o.nanos)}(a))}function jb(a,e){return Ud(a,e).canonicalString()}function Ud(a,e){const r=function(l){return new Wt(["projects",l.projectId,"databases",l.database])}(a).child("documents");return e===void 0?r:r.child(e)}function Bb(a){const e=Wt.fromString(a);return se(Qb(e),10190,{key:e.toString()}),e}function fd(a,e){const r=Bb(e);if(r.get(1)!==a.databaseId.projectId)throw new ht(nt.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+a.databaseId.projectId);if(r.get(3)!==a.databaseId.database)throw new ht(nt.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+a.databaseId.database);return new yt(Hb(r))}function qb(a,e){return jb(a.databaseId,e)}function ix(a){const e=Bb(a);return e.length===4?Wt.emptyPath():Hb(e)}function H0(a){return new Wt(["projects",a.databaseId.projectId,"databases",a.databaseId.database]).canonicalString()}function Hb(a){return se(a.length>4&&a.get(4)==="documents",29091,{key:a.toString()}),a.popFirst(5)}function ox(a,e){let r;if("targetChange"in e){e.targetChange;const o=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:St(39313,{state:y})}(e.targetChange.targetChangeType||"NO_CHANGE"),l=e.targetChange.targetIds||[],c=function(y,_){return y.useProto3Json?(se(_===void 0||typeof _=="string",58123),Ke.fromBase64String(_||"")):(se(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),Ke.fromUint8Array(_||new Uint8Array))}(a,e.targetChange.resumeToken),d=e.targetChange.cause,p=d&&function(y){const _=y.code===void 0?nt.UNKNOWN:Pb(y.code);return new ht(_,y.message||"")}(d);r=new zb(o,l,c,p||null)}else if("documentChange"in e){e.documentChange;const o=e.documentChange;o.document,o.document.name,o.document.updateTime;const l=fd(a,o.document.name),c=Co(o.document.updateTime),d=o.document.createTime?Co(o.document.createTime):At.min(),p=new cr({mapValue:{fields:o.document.fields}}),g=tn.newFoundDocument(l,c,d,p),y=o.targetIds||[],_=o.removedTargetIds||[];r=new pc(y,_,g.key,g)}else if("documentDelete"in e){e.documentDelete;const o=e.documentDelete;o.document;const l=fd(a,o.document),c=o.readTime?Co(o.readTime):At.min(),d=tn.newNoDocument(l,c),p=o.removedTargetIds||[];r=new pc([],p,d.key,d)}else if("documentRemove"in e){e.documentRemove;const o=e.documentRemove;o.document;const l=fd(a,o.document),c=o.removedTargetIds||[];r=new pc([],c,l,null)}else{if(!("filter"in e))return St(11601,{Vt:e});{e.filter;const o=e.filter;o.targetId;const{count:l=0,unchangedNames:c}=o,d=new JS(l,c),p=o.targetId;r=new Ub(p,d)}}return r}function sx(a,e){return{documents:[qb(a,e.path)]}}function lx(a,e){const r={structuredQuery:{}},o=e.path;let l;e.collectionGroup!==null?(l=o,r.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(l=o.popLast(),r.structuredQuery.from=[{collectionId:o.lastSegment()}]),r.parent=qb(a,l);const c=function(y){if(y.length!==0)return Fb(Fn.create(y,"and"))}(e.filters);c&&(r.structuredQuery.where=c);const d=function(y){if(y.length!==0)return y.map(_=>function(C){return{field:xo(C.field),direction:hx(C.dir)}}(_))}(e.orderBy);d&&(r.structuredQuery.orderBy=d);const p=Vd(a,e.limit);return p!==null&&(r.structuredQuery.limit=p),e.startAt&&(r.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(r.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{gt:r,parent:l}}function ux(a){let e=ix(a.parent);const r=a.structuredQuery,o=r.from?r.from.length:0;let l=null;if(o>0){se(o===1,65062);const _=r.from[0];_.allDescendants?l=_.collectionId:e=e.child(_.collectionId)}let c=[];r.where&&(c=function(S){const C=Gb(S);return C instanceof Fn&&Eb(C)?C.getFilters():[C]}(r.where));let d=[];r.orderBy&&(d=function(S){return S.map(C=>function(V){return new Cc(wo(V.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(C))}(r.orderBy));let p=null;r.limit&&(p=function(S){let C;return C=typeof S=="object"?S.value:S,Lc(C)?null:C}(r.limit));let g=null;r.startAt&&(g=function(S){const C=!!S.before,U=S.values||[];return new Rc(U,C)}(r.startAt));let y=null;return r.endAt&&(y=function(S){const C=!S.before,U=S.values||[];return new Rc(U,C)}(r.endAt)),kS(e,l,d,c,p,"F",g,y)}function cx(a,e){const r=function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return St(28987,{purpose:l})}}(e.purpose);return r==null?null:{"goog-listen-tags":r}}function Gb(a){return a.unaryFilter!==void 0?function(r){switch(r.unaryFilter.op){case"IS_NAN":const o=wo(r.unaryFilter.field);return Ae.create(o,"==",{doubleValue:NaN});case"IS_NULL":const l=wo(r.unaryFilter.field);return Ae.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=wo(r.unaryFilter.field);return Ae.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=wo(r.unaryFilter.field);return Ae.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return St(61313);default:return St(60726)}}(a):a.fieldFilter!==void 0?function(r){return Ae.create(wo(r.fieldFilter.field),function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return St(58110);default:return St(50506)}}(r.fieldFilter.op),r.fieldFilter.value)}(a):a.compositeFilter!==void 0?function(r){return Fn.create(r.compositeFilter.filters.map(o=>Gb(o)),function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return St(1026)}}(r.compositeFilter.op))}(a):St(30097,{filter:a})}function hx(a){return ex[a]}function fx(a){return nx[a]}function dx(a){return rx[a]}function xo(a){return{fieldPath:a.canonicalString()}}function wo(a){return en.fromServerFormat(a.fieldPath)}function Fb(a){return a instanceof Ae?function(r){if(r.op==="=="){if(D0(r.value))return{unaryFilter:{field:xo(r.field),op:"IS_NAN"}};if(O0(r.value))return{unaryFilter:{field:xo(r.field),op:"IS_NULL"}}}else if(r.op==="!="){if(D0(r.value))return{unaryFilter:{field:xo(r.field),op:"IS_NOT_NAN"}};if(O0(r.value))return{unaryFilter:{field:xo(r.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xo(r.field),op:fx(r.op),value:r.value}}}(a):a instanceof Fn?function(r){const o=r.getFilters().map(l=>Fb(l));return o.length===1?o[0]:{compositeFilter:{op:dx(r.op),filters:o}}}(a):St(54877,{filter:a})}function Qb(a){return a.length>=4&&a.get(0)==="projects"&&a.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,r,o,l,c=At.min(),d=At.min(),p=Ke.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=r,this.purpose=o,this.sequenceNumber=l,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(e){return new Ra(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,r){return new Ra(this.target,this.targetId,this.purpose,this.sequenceNumber,r,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ra(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ra(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e){this.wt=e}}function px(a){const e=ux({parent:a.parent,structuredQuery:a.structuredQuery});return a.limitType==="LAST"?Id(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(){this.yn=new yx}addToCollectionParentIndex(e,r){return this.yn.add(r),W.resolve()}getCollectionParents(e,r){return W.resolve(this.yn.getEntries(r))}addFieldIndex(e,r){return W.resolve()}deleteFieldIndex(e,r){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,r){return W.resolve()}getDocumentsMatchingTarget(e,r){return W.resolve(null)}getIndexType(e,r){return W.resolve(0)}getFieldIndexes(e,r){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,r){return W.resolve(Ma.min())}getMinOffsetFromCollectionGroup(e,r){return W.resolve(Ma.min())}updateCollectionGroup(e,r,o){return W.resolve()}updateIndexEntries(e,r){return W.resolve()}}class yx{constructor(){this.index={}}add(e){const r=e.lastSegment(),o=e.popLast(),l=this.index[r]||new Ne(Wt.comparator),c=!l.has(o);return this.index[r]=l.add(o),c}has(e){const r=e.lastSegment(),o=e.popLast(),l=this.index[r];return l&&l.has(o)}getEntries(e){return(this.index[e]||new Ne(Wt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yb=41943040;class cn{static withCacheSize(e){return new cn(e,cn.DEFAULT_COLLECTION_PERCENTILE,cn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,r,o){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn.DEFAULT_COLLECTION_PERCENTILE=10,cn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,cn.DEFAULT=new cn(Yb,cn.DEFAULT_COLLECTION_PERCENTILE,cn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),cn.DISABLED=new cn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new ko(0)}static ir(){return new ko(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0="LruGarbageCollector",vx=1048576;function Q0([a,e],[r,o]){const l=Ot(a,r);return l===0?Ot(e,o):l}class bx{constructor(e){this.cr=e,this.buffer=new Ne(Q0),this.lr=0}hr(){return++this.lr}Pr(e){const r=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(r);else{const o=this.buffer.last();Q0(r,o)<0&&(this.buffer=this.buffer.delete(o).add(r))}}get maxValue(){return this.buffer.last()[0]}}class _x{constructor(e,r,o){this.garbageCollector=e,this.asyncQueue=r,this.localStore=o,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){ut(F0,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(r){Ho(r)?ut(F0,"Ignoring IndexedDB error during garbage collection: ",r):await Uc(r)}await this.Ir(3e5)})}}class Ex{constructor(e,r){this.Er=e,this.params=r}calculateTargetCount(e,r){return this.Er.dr(e).next(o=>Math.floor(r/100*o))}nthSequenceNumber(e,r){if(r===0)return W.resolve(zc.le);const o=new bx(r);return this.Er.forEachTarget(e,l=>o.Pr(l.sequenceNumber)).next(()=>this.Er.Ar(e,l=>o.Pr(l))).next(()=>o.maxValue)}removeTargets(e,r,o){return this.Er.removeTargets(e,r,o)}removeOrphanedDocuments(e,r){return this.Er.removeOrphanedDocuments(e,r)}collect(e,r){return this.params.cacheSizeCollectionThreshold===-1?(ut("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(G0)):this.getCacheSize(e).next(o=>o<this.params.cacheSizeCollectionThreshold?(ut("LruGarbageCollector",`Garbage collection skipped; Cache size ${o} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),G0):this.Rr(e,r))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,r){let o,l,c,d,p,g,y;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(ut("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),l=this.params.maximumSequenceNumbersToCollect):l=S,d=Date.now(),this.nthSequenceNumber(e,l))).next(S=>(o=S,p=Date.now(),this.removeTargets(e,o,r))).next(S=>(c=S,g=Date.now(),this.removeOrphanedDocuments(e,o))).next(S=>(y=Date.now(),Ao()<=Pt.DEBUG&&ut("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-_}ms
	Determined least recently used ${l} in `+(p-d)+`ms
	Removed ${c} targets in `+(g-p)+`ms
	Removed ${S} documents in `+(y-g)+`ms
Total Duration: ${y-_}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:c,documentsRemoved:S})))}}function Tx(a,e){return new Ex(a,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(){this.changes=new Ci(e=>e.toString(),(e,r)=>e.isEqual(r)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,r){this.assertNotApplied(),this.changes.set(e,tn.newInvalidDocument(e).setReadTime(r))}getEntry(e,r){this.assertNotApplied();const o=this.changes.get(r);return o!==void 0?W.resolve(o):this.getFromCache(e,r)}getEntries(e,r){return this.getAllFromCache(e,r)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e,r){this.overlayedDocument=e,this.mutatedFields=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e,r,o,l){this.remoteDocumentCache=e,this.mutationQueue=r,this.documentOverlayCache=o,this.indexManager=l}getDocument(e,r){let o=null;return this.documentOverlayCache.getOverlay(e,r).next(l=>(o=l,this.remoteDocumentCache.getEntry(e,r))).next(l=>(o!==null&&dl(o.mutation,l,wa.empty(),Be.now()),l))}getDocuments(e,r){return this.remoteDocumentCache.getEntries(e,r).next(o=>this.getLocalViewOfDocuments(e,o,zt()).next(()=>o))}getLocalViewOfDocuments(e,r,o=zt()){const l=Si();return this.populateOverlays(e,l,r).next(()=>this.computeViews(e,r,l,o).next(c=>{let d=ol();return c.forEach((p,g)=>{d=d.insert(p,g.overlayedDocument)}),d}))}getOverlayedDocuments(e,r){const o=Si();return this.populateOverlays(e,o,r).next(()=>this.computeViews(e,r,o,zt()))}populateOverlays(e,r,o){const l=[];return o.forEach(c=>{r.has(c)||l.push(c)}),this.documentOverlayCache.getOverlays(e,l).next(c=>{c.forEach((d,p)=>{r.set(d,p)})})}computeViews(e,r,o,l){let c=Ua();const d=fl(),p=function(){return fl()}();return r.forEach((g,y)=>{const _=o.get(y.key);l.has(y.key)&&(_===void 0||_.mutation instanceof Gc)?c=c.insert(y.key,y):_!==void 0?(d.set(y.key,_.mutation.getFieldMask()),dl(_.mutation,y,_.mutation.getFieldMask(),Be.now())):d.set(y.key,wa.empty())}),this.recalculateAndSaveOverlays(e,c).next(g=>(g.forEach((y,_)=>d.set(y,_)),r.forEach((y,_)=>{var S;return p.set(y,new Sx(_,(S=d.get(y))!==null&&S!==void 0?S:null))}),p))}recalculateAndSaveOverlays(e,r){const o=fl();let l=new pe((d,p)=>d-p),c=zt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,r).next(d=>{for(const p of d)p.keys().forEach(g=>{const y=r.get(g);if(y===null)return;let _=o.get(g)||wa.empty();_=p.applyToLocalView(y,_),o.set(g,_);const S=(l.get(p.batchId)||zt()).add(g);l=l.insert(p.batchId,S)})}).next(()=>{const d=[],p=l.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),y=g.key,_=g.value,S=Ob();_.forEach(C=>{if(!c.has(C)){const U=kb(r.get(C),o.get(C));U!==null&&S.set(C,U),c=c.add(C)}}),d.push(this.documentOverlayCache.saveOverlays(e,y,S))}return W.waitFor(d)}).next(()=>o)}recalculateAndSaveOverlaysForDocumentKeys(e,r){return this.remoteDocumentCache.getEntries(e,r).next(o=>this.recalculateAndSaveOverlays(e,o))}getDocumentsMatchingQuery(e,r,o,l){return function(d){return yt.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0}(r)?this.getDocumentsMatchingDocumentQuery(e,r.path):xb(r)?this.getDocumentsMatchingCollectionGroupQuery(e,r,o,l):this.getDocumentsMatchingCollectionQuery(e,r,o,l)}getNextDocuments(e,r,o,l){return this.remoteDocumentCache.getAllFromCollectionGroup(e,r,o,l).next(c=>{const d=l-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,r,o.largestBatchId,l-c.size):W.resolve(Si());let p=vl,g=c;return d.next(y=>W.forEach(y,(_,S)=>(p<S.largestBatchId&&(p=S.largestBatchId),c.get(_)?W.resolve():this.remoteDocumentCache.getEntry(e,_).next(C=>{g=g.insert(_,C)}))).next(()=>this.populateOverlays(e,y,c)).next(()=>this.computeViews(e,g,y,zt())).next(_=>({batchId:p,changes:LS(_)})))})}getDocumentsMatchingDocumentQuery(e,r){return this.getDocument(e,new yt(r)).next(o=>{let l=ol();return o.isFoundDocument()&&(l=l.insert(o.key,o)),l})}getDocumentsMatchingCollectionGroupQuery(e,r,o,l){const c=r.collectionGroup;let d=ol();return this.indexManager.getCollectionParents(e,c).next(p=>W.forEach(p,g=>{const y=function(S,C){return new wl(C,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(r,g.child(c));return this.getDocumentsMatchingCollectionQuery(e,y,o,l).next(_=>{_.forEach((S,C)=>{d=d.insert(S,C)})})}).next(()=>d))}getDocumentsMatchingCollectionQuery(e,r,o,l){let c;return this.documentOverlayCache.getOverlaysForCollection(e,r.path,o.largestBatchId).next(d=>(c=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,r,o,c,l))).next(d=>{c.forEach((g,y)=>{const _=y.getKey();d.get(_)===null&&(d=d.insert(_,tn.newInvalidDocument(_)))});let p=ol();return d.forEach((g,y)=>{const _=c.get(g);_!==void 0&&dl(_.mutation,y,wa.empty(),Be.now()),qc(r,y)&&(p=p.insert(g,y))}),p})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,r){return W.resolve(this.Fr.get(r))}saveBundleMetadata(e,r){return this.Fr.set(r.id,function(l){return{id:l.id,version:l.version,createTime:Co(l.createTime)}}(r)),W.resolve()}getNamedQuery(e,r){return W.resolve(this.Mr.get(r))}saveNamedQuery(e,r){return this.Mr.set(r.name,function(l){return{name:l.name,query:px(l.bundledQuery),readTime:Co(l.readTime)}}(r)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(){this.overlays=new pe(yt.comparator),this.Or=new Map}getOverlay(e,r){return W.resolve(this.overlays.get(r))}getOverlays(e,r){const o=Si();return W.forEach(r,l=>this.getOverlay(e,l).next(c=>{c!==null&&o.set(l,c)})).next(()=>o)}saveOverlays(e,r,o){return o.forEach((l,c)=>{this.St(e,r,c)}),W.resolve()}removeOverlaysForBatchId(e,r,o){const l=this.Or.get(o);return l!==void 0&&(l.forEach(c=>this.overlays=this.overlays.remove(c)),this.Or.delete(o)),W.resolve()}getOverlaysForCollection(e,r,o){const l=Si(),c=r.length+1,d=new yt(r.child("")),p=this.overlays.getIteratorFrom(d);for(;p.hasNext();){const g=p.getNext().value,y=g.getKey();if(!r.isPrefixOf(y.path))break;y.path.length===c&&g.largestBatchId>o&&l.set(g.getKey(),g)}return W.resolve(l)}getOverlaysForCollectionGroup(e,r,o,l){let c=new pe((y,_)=>y-_);const d=this.overlays.getIterator();for(;d.hasNext();){const y=d.getNext().value;if(y.getKey().getCollectionGroup()===r&&y.largestBatchId>o){let _=c.get(y.largestBatchId);_===null&&(_=Si(),c=c.insert(y.largestBatchId,_)),_.set(y.getKey(),y)}}const p=Si(),g=c.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((y,_)=>p.set(y,_)),!(p.size()>=l)););return W.resolve(p)}St(e,r,o){const l=this.overlays.get(o.key);if(l!==null){const d=this.Or.get(l.largestBatchId).delete(o.key);this.Or.set(l.largestBatchId,d)}this.overlays=this.overlays.insert(o.key,new ZS(r,o));let c=this.Or.get(r);c===void 0&&(c=zt(),this.Or.set(r,c)),this.Or.set(r,c.add(o.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,r){return this.sessionToken=r,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(){this.Nr=new Ne(je.Br),this.Lr=new Ne(je.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,r){const o=new je(e,r);this.Nr=this.Nr.add(o),this.Lr=this.Lr.add(o)}qr(e,r){e.forEach(o=>this.addReference(o,r))}removeReference(e,r){this.Qr(new je(e,r))}$r(e,r){e.forEach(o=>this.removeReference(o,r))}Ur(e){const r=new yt(new Wt([])),o=new je(r,e),l=new je(r,e+1),c=[];return this.Lr.forEachInRange([o,l],d=>{this.Qr(d),c.push(d.key)}),c}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const r=new yt(new Wt([])),o=new je(r,e),l=new je(r,e+1);let c=zt();return this.Lr.forEachInRange([o,l],d=>{c=c.add(d.key)}),c}containsKey(e){const r=new je(e,0),o=this.Nr.firstAfterOrEqual(r);return o!==null&&e.isEqual(o.key)}}class je{constructor(e,r){this.key=e,this.Gr=r}static Br(e,r){return yt.comparator(e.key,r.key)||Ot(e.Gr,r.Gr)}static kr(e,r){return Ot(e.Gr,r.Gr)||yt.comparator(e.key,r.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,r){this.indexManager=e,this.referenceDelegate=r,this.mutationQueue=[],this.Jn=1,this.zr=new Ne(je.Br)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,r,o,l){const c=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new $S(c,r,o,l);this.mutationQueue.push(d);for(const p of l)this.zr=this.zr.add(new je(p.key,c)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return W.resolve(d)}lookupMutationBatch(e,r){return W.resolve(this.jr(r))}getNextMutationBatchAfterBatchId(e,r){const o=r+1,l=this.Hr(o),c=l<0?0:l;return W.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?pS:this.Jn-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,r){const o=new je(r,0),l=new je(r,Number.POSITIVE_INFINITY),c=[];return this.zr.forEachInRange([o,l],d=>{const p=this.jr(d.Gr);c.push(p)}),W.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,r){let o=new Ne(Ot);return r.forEach(l=>{const c=new je(l,0),d=new je(l,Number.POSITIVE_INFINITY);this.zr.forEachInRange([c,d],p=>{o=o.add(p.Gr)})}),W.resolve(this.Jr(o))}getAllMutationBatchesAffectingQuery(e,r){const o=r.path,l=o.length+1;let c=o;yt.isDocumentKey(c)||(c=c.child(""));const d=new je(new yt(c),0);let p=new Ne(Ot);return this.zr.forEachWhile(g=>{const y=g.key.path;return!!o.isPrefixOf(y)&&(y.length===l&&(p=p.add(g.Gr)),!0)},d),W.resolve(this.Jr(p))}Jr(e){const r=[];return e.forEach(o=>{const l=this.jr(o);l!==null&&r.push(l)}),r}removeMutationBatch(e,r){se(this.Yr(r.batchId,"removed")===0,55003),this.mutationQueue.shift();let o=this.zr;return W.forEach(r.mutations,l=>{const c=new je(l.key,r.batchId);return o=o.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,l.key)}).next(()=>{this.zr=o})}Xn(e){}containsKey(e,r){const o=new je(r,0),l=this.zr.firstAfterOrEqual(o);return W.resolve(r.isEqual(l&&l.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}Yr(e,r){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const r=this.Hr(e);return r<0||r>=this.mutationQueue.length?null:this.mutationQueue[r]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e){this.Zr=e,this.docs=function(){return new pe(yt.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,r){const o=r.key,l=this.docs.get(o),c=l?l.size:0,d=this.Zr(r);return this.docs=this.docs.insert(o,{document:r.mutableCopy(),size:d}),this.size+=d-c,this.indexManager.addToCollectionParentIndex(e,o.path.popLast())}removeEntry(e){const r=this.docs.get(e);r&&(this.docs=this.docs.remove(e),this.size-=r.size)}getEntry(e,r){const o=this.docs.get(r);return W.resolve(o?o.document.mutableCopy():tn.newInvalidDocument(r))}getEntries(e,r){let o=Ua();return r.forEach(l=>{const c=this.docs.get(l);o=o.insert(l,c?c.document.mutableCopy():tn.newInvalidDocument(l))}),W.resolve(o)}getDocumentsMatchingQuery(e,r,o,l){let c=Ua();const d=r.path,p=new yt(d.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:y,value:{document:_}}=g.getNext();if(!d.isPrefixOf(y.path))break;y.path.length>d.length+1||hS(cS(_),o)<=0||(l.has(_.key)||qc(r,_))&&(c=c.insert(_.key,_.mutableCopy()))}return W.resolve(c)}getAllFromCollectionGroup(e,r,o,l){St(9500)}Xr(e,r){return W.forEach(this.docs,o=>r(o))}newChangeBuffer(e){return new Nx(this)}getSize(e){return W.resolve(this.size)}}class Nx extends Ax{constructor(e){super(),this.vr=e}applyChanges(e){const r=[];return this.changes.forEach((o,l)=>{l.isValidDocument()?r.push(this.vr.addEntry(e,l)):this.vr.removeEntry(o)}),W.waitFor(r)}getFromCache(e,r){return this.vr.getEntry(e,r)}getAllFromCache(e,r){return this.vr.getEntries(e,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e){this.persistence=e,this.ei=new Ci(r=>rm(r),am),this.lastRemoteSnapshotVersion=At.min(),this.highestTargetId=0,this.ti=0,this.ni=new cm,this.targetCount=0,this.ri=ko.rr()}forEachTarget(e,r){return this.ei.forEach((o,l)=>r(l)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,r,o){return o&&(this.lastRemoteSnapshotVersion=o),r>this.ti&&(this.ti=r),W.resolve()}ar(e){this.ei.set(e.target,e);const r=e.targetId;r>this.highestTargetId&&(this.ri=new ko(r),this.highestTargetId=r),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,r){return this.ar(r),this.targetCount+=1,W.resolve()}updateTargetData(e,r){return this.ar(r),W.resolve()}removeTargetData(e,r){return this.ei.delete(r.target),this.ni.Ur(r.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,r,o){let l=0;const c=[];return this.ei.forEach((d,p)=>{p.sequenceNumber<=r&&o.get(p.targetId)===null&&(this.ei.delete(d),c.push(this.removeMatchingKeysForTargetId(e,p.targetId)),l++)}),W.waitFor(c).next(()=>l)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,r){const o=this.ei.get(r)||null;return W.resolve(o)}addMatchingKeys(e,r,o){return this.ni.qr(r,o),W.resolve()}removeMatchingKeys(e,r,o){this.ni.$r(r,o);const l=this.persistence.referenceDelegate,c=[];return l&&r.forEach(d=>{c.push(l.markPotentiallyOrphaned(e,d))}),W.waitFor(c)}removeMatchingKeysForTargetId(e,r){return this.ni.Ur(r),W.resolve()}getMatchingKeysForTargetId(e,r){const o=this.ni.Wr(r);return W.resolve(o)}containsKey(e,r){return W.resolve(this.ni.containsKey(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,r){this.ii={},this.overlays={},this.si=new zc(0),this.oi=!1,this.oi=!0,this._i=new Cx,this.referenceDelegate=e(this),this.ai=new Ix(this),this.indexManager=new gx,this.remoteDocumentCache=function(l){return new Dx(l)}(o=>this.referenceDelegate.ui(o)),this.serializer=new mx(r),this.ci=new wx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let r=this.overlays[e.toKey()];return r||(r=new Rx,this.overlays[e.toKey()]=r),r}getMutationQueue(e,r){let o=this.ii[e.toKey()];return o||(o=new Ox(r,this.referenceDelegate),this.ii[e.toKey()]=o),o}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,r,o){ut("MemoryPersistence","Starting transaction:",e);const l=new Mx(this.si.next());return this.referenceDelegate.li(),o(l).next(c=>this.referenceDelegate.hi(l).next(()=>c)).toPromise().then(c=>(l.raiseOnCommittedEvent(),c))}Pi(e,r){return W.or(Object.values(this.ii).map(o=>()=>o.containsKey(e,r)))}}class Mx extends dS{constructor(e){super(),this.currentSequenceNumber=e}}class hm{constructor(e){this.persistence=e,this.Ti=new cm,this.Ii=null}static Ei(e){return new hm(e)}get di(){if(this.Ii)return this.Ii;throw St(60996)}addReference(e,r,o){return this.Ti.addReference(o,r),this.di.delete(o.toString()),W.resolve()}removeReference(e,r,o){return this.Ti.removeReference(o,r),this.di.add(o.toString()),W.resolve()}markPotentiallyOrphaned(e,r){return this.di.add(r.toString()),W.resolve()}removeTarget(e,r){this.Ti.Ur(r.targetId).forEach(l=>this.di.add(l.toString()));const o=this.persistence.getTargetCache();return o.getMatchingKeysForTargetId(e,r.targetId).next(l=>{l.forEach(c=>this.di.add(c.toString()))}).next(()=>o.removeTargetData(e,r))}li(){this.Ii=new Set}hi(e){const r=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.di,o=>{const l=yt.fromPath(o);return this.Ai(e,l).next(c=>{c||r.removeEntry(l,At.min())})}).next(()=>(this.Ii=null,r.apply(e)))}updateLimboDocument(e,r){return this.Ai(e,r).next(o=>{o?this.di.delete(r.toString()):this.di.add(r.toString())})}ui(e){return 0}Ai(e,r){return W.or([()=>W.resolve(this.Ti.containsKey(r)),()=>this.persistence.getTargetCache().containsKey(e,r),()=>this.persistence.Pi(e,r)])}}class Nc{constructor(e,r){this.persistence=e,this.Ri=new Ci(o=>yS(o.path),(o,l)=>o.isEqual(l)),this.garbageCollector=Tx(this,r)}static Ei(e,r){return new Nc(e,r)}li(){}hi(e){return W.resolve()}forEachTarget(e,r){return this.persistence.getTargetCache().forEachTarget(e,r)}dr(e){const r=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(o=>r.next(l=>o+l))}Vr(e){let r=0;return this.Ar(e,o=>{r++}).next(()=>r)}Ar(e,r){return W.forEach(this.Ri,(o,l)=>this.gr(e,o,l).next(c=>c?W.resolve():r(l)))}removeTargets(e,r,o){return this.persistence.getTargetCache().removeTargets(e,r,o)}removeOrphanedDocuments(e,r){let o=0;const l=this.persistence.getRemoteDocumentCache(),c=l.newChangeBuffer();return l.Xr(e,d=>this.gr(e,d,r).next(p=>{p||(o++,c.removeEntry(d,At.min()))})).next(()=>c.apply(e)).next(()=>o)}markPotentiallyOrphaned(e,r){return this.Ri.set(r,e.currentSequenceNumber),W.resolve()}removeTarget(e,r){const o=r.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,o)}addReference(e,r,o){return this.Ri.set(o,e.currentSequenceNumber),W.resolve()}removeReference(e,r,o){return this.Ri.set(o,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,r){return this.Ri.set(r,e.currentSequenceNumber),W.resolve()}ui(e){let r=e.key.toString().length;return e.isFoundDocument()&&(r+=dc(e.data.value)),r}gr(e,r,o){return W.or([()=>this.persistence.Pi(e,r),()=>this.persistence.getTargetCache().containsKey(e,r),()=>{const l=this.Ri.get(r);return W.resolve(l!==void 0&&l>o)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,r,o,l){this.targetId=e,this.fromCache=r,this.ls=o,this.hs=l}static Ps(e,r){let o=zt(),l=zt();for(const c of r.docChanges)switch(c.type){case 0:o=o.add(c.doc.key);break;case 1:l=l.add(c.doc.key)}return new fm(e,r.fromCache,o,l)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return P2()?8:mS(k2())>0?6:4}()}initialize(e,r){this.As=e,this.indexManager=r,this.Ts=!0}getDocumentsMatchingQuery(e,r,o,l){const c={result:null};return this.Rs(e,r).next(d=>{c.result=d}).next(()=>{if(!c.result)return this.Vs(e,r,l,o).next(d=>{c.result=d})}).next(()=>{if(c.result)return;const d=new kx;return this.fs(e,r,d).next(p=>{if(c.result=p,this.Is)return this.gs(e,r,d,p.size)})}).next(()=>c.result)}gs(e,r,o,l){return o.documentReadCount<this.Es?(Ao()<=Pt.DEBUG&&ut("QueryEngine","SDK will not create cache indexes for query:",So(r),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),W.resolve()):(Ao()<=Pt.DEBUG&&ut("QueryEngine","Query:",So(r),"scans",o.documentReadCount,"local documents and returns",l,"documents as results."),o.documentReadCount>this.ds*l?(Ao()<=Pt.DEBUG&&ut("QueryEngine","The SDK decides to create cache indexes for query:",So(r),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fr(r))):W.resolve())}Rs(e,r){if(k0(r))return W.resolve(null);let o=fr(r);return this.indexManager.getIndexType(e,o).next(l=>l===0?null:(r.limit!==null&&l===1&&(r=Id(r,null,"F"),o=fr(r)),this.indexManager.getDocumentsMatchingTarget(e,o).next(c=>{const d=zt(...c);return this.As.getDocuments(e,d).next(p=>this.indexManager.getMinOffset(e,o).next(g=>{const y=this.ps(r,p);return this.ys(r,y,d,g.readTime)?this.Rs(e,Id(r,null,"F")):this.ws(e,y,r,g)}))})))}Vs(e,r,o,l){return k0(r)||l.isEqual(At.min())?W.resolve(null):this.As.getDocuments(e,o).next(c=>{const d=this.ps(r,c);return this.ys(r,d,o,l)?W.resolve(null):(Ao()<=Pt.DEBUG&&ut("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),So(r)),this.ws(e,d,r,uS(l,vl)).next(p=>p))})}ps(e,r){let o=new Ne(Rb(e));return r.forEach((l,c)=>{qc(e,c)&&(o=o.add(c))}),o}ys(e,r,o,l){if(e.limit===null)return!1;if(o.size!==r.size)return!0;const c=e.limitType==="F"?r.last():r.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(l)>0)}fs(e,r,o){return Ao()<=Pt.DEBUG&&ut("QueryEngine","Using full collection scan to execute query:",So(r)),this.As.getDocumentsMatchingQuery(e,r,Ma.min(),o)}ws(e,r,o,l){return this.As.getDocumentsMatchingQuery(e,o,l).next(c=>(r.forEach(d=>{c=c.insert(d.key,d)}),c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm="LocalStore",Px=3e8;class Ux{constructor(e,r,o,l){this.persistence=e,this.bs=r,this.serializer=l,this.Ss=new pe(Ot),this.Ds=new Ci(c=>rm(c),am),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(o)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xx(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",r=>e.collect(r,this.Ss))}}function zx(a,e,r,o){return new Ux(a,e,r,o)}async function Xb(a,e){const r=Ut(a);return await r.persistence.runTransaction("Handle user change","readonly",o=>{let l;return r.mutationQueue.getAllMutationBatches(o).next(c=>(l=c,r.Fs(e),r.mutationQueue.getAllMutationBatches(o))).next(c=>{const d=[],p=[];let g=zt();for(const y of l){d.push(y.batchId);for(const _ of y.mutations)g=g.add(_.key)}for(const y of c){p.push(y.batchId);for(const _ of y.mutations)g=g.add(_.key)}return r.localDocuments.getDocuments(o,g).next(y=>({Ms:y,removedBatchIds:d,addedBatchIds:p}))})})}function $b(a){const e=Ut(a);return e.persistence.runTransaction("Get last remote snapshot version","readonly",r=>e.ai.getLastRemoteSnapshotVersion(r))}function Lx(a,e){const r=Ut(a),o=e.snapshotVersion;let l=r.Ss;return r.persistence.runTransaction("Apply remote event","readwrite-primary",c=>{const d=r.Cs.newChangeBuffer({trackRemovals:!0});l=r.Ss;const p=[];e.targetChanges.forEach((_,S)=>{const C=l.get(S);if(!C)return;p.push(r.ai.removeMatchingKeys(c,_.removedDocuments,S).next(()=>r.ai.addMatchingKeys(c,_.addedDocuments,S)));let U=C.withSequenceNumber(c.currentSequenceNumber);e.targetMismatches.get(S)!==null?U=U.withResumeToken(Ke.EMPTY_BYTE_STRING,At.min()).withLastLimboFreeSnapshotVersion(At.min()):_.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(_.resumeToken,o)),l=l.insert(S,U),function(L,H,Z){return L.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=Px?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0}(C,U,_)&&p.push(r.ai.updateTargetData(c,U))});let g=Ua(),y=zt();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&p.push(r.persistence.referenceDelegate.updateLimboDocument(c,_))}),p.push(jx(c,d,e.documentUpdates).next(_=>{g=_.xs,y=_.Os})),!o.isEqual(At.min())){const _=r.ai.getLastRemoteSnapshotVersion(c).next(S=>r.ai.setTargetsMetadata(c,c.currentSequenceNumber,o));p.push(_)}return W.waitFor(p).next(()=>d.apply(c)).next(()=>r.localDocuments.getLocalViewOfDocuments(c,g,y)).next(()=>g)}).then(c=>(r.Ss=l,c))}function jx(a,e,r){let o=zt(),l=zt();return r.forEach(c=>o=o.add(c)),e.getEntries(a,o).next(c=>{let d=Ua();return r.forEach((p,g)=>{const y=c.get(p);g.isFoundDocument()!==y.isFoundDocument()&&(l=l.add(p)),g.isNoDocument()&&g.version.isEqual(At.min())?(e.removeEntry(p,g.readTime),d=d.insert(p,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),d=d.insert(p,g)):ut(dm,"Ignoring outdated watch update for ",p,". Current version:",y.version," Watch version:",g.version)}),{xs:d,Os:l}})}function Bx(a,e){const r=Ut(a);return r.persistence.runTransaction("Allocate target","readwrite",o=>{let l;return r.ai.getTargetData(o,e).next(c=>c?(l=c,W.resolve(l)):r.ai.allocateTargetId(o).next(d=>(l=new Ra(e,d,"TargetPurposeListen",o.currentSequenceNumber),r.ai.addTargetData(o,l).next(()=>l))))}).then(o=>{const l=r.Ss.get(o.targetId);return(l===null||o.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(r.Ss=r.Ss.insert(o.targetId,o),r.Ds.set(e,o.targetId)),o})}async function zd(a,e,r){const o=Ut(a),l=o.Ss.get(e),c=r?"readwrite":"readwrite-primary";try{r||await o.persistence.runTransaction("Release target",c,d=>o.persistence.referenceDelegate.removeTarget(d,l))}catch(d){if(!Ho(d))throw d;ut(dm,`Failed to update sequence numbers for target ${e}: ${d}`)}o.Ss=o.Ss.remove(e),o.Ds.delete(l.target)}function Y0(a,e,r){const o=Ut(a);let l=At.min(),c=zt();return o.persistence.runTransaction("Execute query","readwrite",d=>function(g,y,_){const S=Ut(g),C=S.Ds.get(_);return C!==void 0?W.resolve(S.Ss.get(C)):S.ai.getTargetData(y,_)}(o,d,fr(e)).next(p=>{if(p)return l=p.lastLimboFreeSnapshotVersion,o.ai.getMatchingKeysForTargetId(d,p.targetId).next(g=>{c=g})}).next(()=>o.bs.getDocumentsMatchingQuery(d,e,r?l:At.min(),r?c:zt())).next(p=>(qx(o,PS(e),p),{documents:p,Ns:c})))}function qx(a,e,r){let o=a.vs.get(e)||At.min();r.forEach((l,c)=>{c.readTime.compareTo(o)>0&&(o=c.readTime)}),a.vs.set(e,o)}class K0{constructor(){this.activeTargetIds=qS()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Hx{constructor(){this.So=new K0,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,r,o){}addLocalQueryTarget(e,r=!0){return r&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,r,o){this.Do[e]=r}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new K0,Promise.resolve()}handleUserChange(e,r,o){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{vo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="ConnectivityMonitor";class $0{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){ut(X0,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){ut(X0,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic=null;function Ld(){return ic===null?ic=function(){return 268435456+Math.round(2147483648*Math.random())}():ic++,"0x"+ic.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="RestConnection",Fx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Qx{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Lo=r+"://"+e.host,this.ko=`projects/${o}/databases/${l}`,this.qo=this.databaseId.database===xc?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Qo(e,r,o,l,c){const d=Ld(),p=this.$o(e,r.toUriEncodedString());ut(dd,`Sending RPC '${e}' ${d}:`,p,o);const g={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(g,l,c),this.Ko(e,p,g,o).then(y=>(ut(dd,`Received RPC '${e}' ${d}: `,y),y),y=>{throw Do(dd,`RPC '${e}' ${d} failed with error: `,y,"url: ",p,"request:",o),y})}Wo(e,r,o,l,c,d){return this.Qo(e,r,o,l,c)}Uo(e,r,o){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((l,c)=>e[c]=l),o&&o.headers.forEach((l,c)=>e[c]=l)}$o(e,r){const o=Fx[e];return`${this.Lo}/v1/${r}:${o}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="WebChannelConnection";class Kx extends Qx{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,r,o,l){const c=Ld();return new Promise((d,p)=>{const g=new eb;g.setWithCredentials(!0),g.listenOnce(nb.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case fc.NO_ERROR:const _=g.getResponseJson();ut(Je,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(_)),d(_);break;case fc.TIMEOUT:ut(Je,`RPC '${e}' ${c} timed out`),p(new ht(nt.DEADLINE_EXCEEDED,"Request time out"));break;case fc.HTTP_ERROR:const S=g.getStatus();if(ut(Je,`RPC '${e}' ${c} failed with status:`,S,"response text:",g.getResponseText()),S>0){let C=g.getResponseJson();Array.isArray(C)&&(C=C[0]);const U=C==null?void 0:C.error;if(U&&U.status&&U.message){const V=function(H){const Z=H.toLowerCase().replace(/_/g,"-");return Object.values(nt).indexOf(Z)>=0?Z:nt.UNKNOWN}(U.status);p(new ht(V,U.message))}else p(new ht(nt.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ht(nt.UNAVAILABLE,"Connection failed."));break;default:St(9055,{s_:e,streamId:c,o_:g.getLastErrorCode(),__:g.getLastError()})}}finally{ut(Je,`RPC '${e}' ${c} completed.`)}});const y=JSON.stringify(l);ut(Je,`RPC '${e}' ${c} sending request:`,l),g.send(r,"POST",y,o,15)})}a_(e,r,o){const l=Ld(),c=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=ib(),p=ab(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Uo(g.initMessageHeaders,r,o),g.encodeInitMessageHeaders=!0;const _=c.join("");ut(Je,`Creating RPC '${e}' stream ${l}: ${_}`,g);const S=d.createWebChannel(_,g);let C=!1,U=!1;const V=new Yx({Go:H=>{U?ut(Je,`Not sending because RPC '${e}' stream ${l} is closed:`,H):(C||(ut(Je,`Opening RPC '${e}' stream ${l} transport.`),S.open(),C=!0),ut(Je,`RPC '${e}' stream ${l} sending:`,H),S.send(H))},zo:()=>S.close()}),L=(H,Z,at)=>{H.listen(Z,tt=>{try{at(tt)}catch(ft){setTimeout(()=>{throw ft},0)}})};return L(S,il.EventType.OPEN,()=>{U||(ut(Je,`RPC '${e}' stream ${l} transport opened.`),V.t_())}),L(S,il.EventType.CLOSE,()=>{U||(U=!0,ut(Je,`RPC '${e}' stream ${l} transport closed`),V.r_())}),L(S,il.EventType.ERROR,H=>{U||(U=!0,Do(Je,`RPC '${e}' stream ${l} transport errored. Name:`,H.name,"Message:",H.message),V.r_(new ht(nt.UNAVAILABLE,"The operation could not be completed")))}),L(S,il.EventType.MESSAGE,H=>{var Z;if(!U){const at=H.data[0];se(!!at,16349);const tt=at,ft=(tt==null?void 0:tt.error)||((Z=tt[0])===null||Z===void 0?void 0:Z.error);if(ft){ut(Je,`RPC '${e}' stream ${l} received error:`,ft);const lt=ft.status;let _t=function(x){const O=Te[x];if(O!==void 0)return Pb(O)}(lt),N=ft.message;_t===void 0&&(_t=nt.INTERNAL,N="Unknown error status: "+lt+" with message "+ft.message),U=!0,V.r_(new ht(_t,N)),S.close()}else ut(Je,`RPC '${e}' stream ${l} received:`,at),V.i_(at)}}),L(p,rb.STAT_EVENT,H=>{H.stat===xd.PROXY?ut(Je,`RPC '${e}' stream ${l} detected buffering proxy`):H.stat===xd.NOPROXY&&ut(Je,`RPC '${e}' stream ${l} detected no buffering proxy`)}),setTimeout(()=>{V.n_()},0),V}}function md(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(a){return new ax(a,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,r,o=1e3,l=1.5,c=6e4){this.bi=e,this.timerId=r,this.u_=o,this.c_=l,this.l_=c,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const r=Math.floor(this.h_+this.d_()),o=Math.max(0,Date.now()-this.T_),l=Math.max(0,r-o);l>0&&ut("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.h_} ms, delay with jitter: ${r} ms, last attempt: ${o} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,l,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="PersistentStream";class Xx{constructor(e,r,o,l,c,d,p,g){this.bi=e,this.R_=o,this.V_=l,this.connection=c,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new Zb(e,r)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,r){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():r&&r.code===nt.RESOURCE_EXHAUSTED?(Kr(r.toString()),Kr("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):r&&r.code===nt.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(r)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),r=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([o,l])=>{this.m_===r&&this.B_(o,l)},o=>{e(()=>{const l=new ht(nt.UNKNOWN,"Fetching auth token failed: "+o.message);return this.L_(l)})})}B_(e,r){const o=this.N_(this.m_);this.stream=this.k_(e,r),this.stream.jo(()=>{o(()=>this.listener.jo())}),this.stream.Jo(()=>{o(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(l=>{o(()=>this.L_(l))}),this.stream.onMessage(l=>{o(()=>++this.p_==1?this.q_(l):this.onNext(l))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return ut(Z0,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return r=>{this.bi.enqueueAndForget(()=>this.m_===e?r():(ut(Z0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $x extends Xx{constructor(e,r,o,l,c,d){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",r,o,l,d),this.serializer=c}k_(e,r){return this.connection.a_("Listen",e,r)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const r=ox(this.serializer,e),o=function(c){if(!("targetChange"in c))return At.min();const d=c.targetChange;return d.targetIds&&d.targetIds.length?At.min():d.readTime?Co(d.readTime):At.min()}(e);return this.listener.Q_(r,o)}U_(e){const r={};r.database=H0(this.serializer),r.addTarget=function(c,d){let p;const g=d.target;if(p=Dd(g)?{documents:sx(c,g)}:{query:lx(c,g).gt},p.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){p.resumeToken=Lb(c,d.resumeToken);const y=Vd(c,d.expectedCount);y!==null&&(p.expectedCount=y)}else if(d.snapshotVersion.compareTo(At.min())>0){p.readTime=Pd(c,d.snapshotVersion.toTimestamp());const y=Vd(c,d.expectedCount);y!==null&&(p.expectedCount=y)}return p}(this.serializer,e);const o=cx(this.serializer,e);o&&(r.labels=o),this.F_(r)}K_(e){const r={};r.database=H0(this.serializer),r.removeTarget=e,this.F_(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{}class Jx extends Zx{constructor(e,r,o,l){super(),this.authCredentials=e,this.appCheckCredentials=r,this.connection=o,this.serializer=l,this.J_=!1}Y_(){if(this.J_)throw new ht(nt.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,r,o,l){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Qo(e,Ud(r,o),l,c,d)).catch(c=>{throw c.name==="FirebaseError"?(c.code===nt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ht(nt.UNKNOWN,c.toString())})}Wo(e,r,o,l,c){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,p])=>this.connection.Wo(e,Ud(r,o),l,d,p,c)).catch(d=>{throw d.name==="FirebaseError"?(d.code===nt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new ht(nt.UNKNOWN,d.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class Wx{constructor(e,r){this.asyncQueue=e,this.onlineStateHandler=r,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const r=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Kr(r),this.ea=!1):ut("OnlineStateTracker",r)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="RemoteStore";class tw{constructor(e,r,o,l,c){this.localStore=e,this.datastore=r,this.asyncQueue=o,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=c,this.ca.vo(d=>{o.enqueueAndForget(async()=>{Ol(this)&&(ut(Vo,"Restarting streams for network reachability change."),await async function(g){const y=Ut(g);y.aa.add(4),await Cl(y),y.la.set("Unknown"),y.aa.delete(4),await Yc(y)}(this))})}),this.la=new Wx(o,l)}}async function Yc(a){if(Ol(a))for(const e of a.ua)await e(!0)}async function Cl(a){for(const e of a.ua)await e(!1)}function Jb(a,e){const r=Ut(a);r._a.has(e.targetId)||(r._a.set(e.targetId,e),ym(r)?gm(r):Fo(r).b_()&&pm(r,e))}function mm(a,e){const r=Ut(a),o=Fo(r);r._a.delete(e),o.b_()&&Wb(r,e),r._a.size===0&&(o.b_()?o.v_():Ol(r)&&r.la.set("Unknown"))}function pm(a,e){if(a.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(At.min())>0){const r=a.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(r)}Fo(a).U_(e)}function Wb(a,e){a.ha.Ke(e),Fo(a).K_(e)}function gm(a){a.ha=new tx({getRemoteKeysForTarget:e=>a.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>a._a.get(e)||null,Pt:()=>a.datastore.serializer.databaseId}),Fo(a).start(),a.la.ta()}function ym(a){return Ol(a)&&!Fo(a).w_()&&a._a.size>0}function Ol(a){return Ut(a).aa.size===0}function t_(a){a.ha=void 0}async function ew(a){a.la.set("Online")}async function nw(a){a._a.forEach((e,r)=>{pm(a,e)})}async function rw(a,e){t_(a),ym(a)?(a.la.ia(e),gm(a)):a.la.set("Unknown")}async function aw(a,e,r){if(a.la.set("Online"),e instanceof zb&&e.state===2&&e.cause)try{await async function(l,c){const d=c.cause;for(const p of c.targetIds)l._a.has(p)&&(await l.remoteSyncer.rejectListen(p,d),l._a.delete(p),l.ha.removeTarget(p))}(a,e)}catch(o){ut(Vo,"Failed to remove targets %s: %s ",e.targetIds.join(","),o),await J0(a,o)}else if(e instanceof pc?a.ha.Xe(e):e instanceof Ub?a.ha.ot(e):a.ha.nt(e),!r.isEqual(At.min()))try{const o=await $b(a.localStore);r.compareTo(o)>=0&&await function(c,d){const p=c.ha.It(d);return p.targetChanges.forEach((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const _=c._a.get(y);_&&c._a.set(y,_.withResumeToken(g.resumeToken,d))}}),p.targetMismatches.forEach((g,y)=>{const _=c._a.get(g);if(!_)return;c._a.set(g,_.withResumeToken(Ke.EMPTY_BYTE_STRING,_.snapshotVersion)),Wb(c,g);const S=new Ra(_.target,g,y,_.sequenceNumber);pm(c,S)}),c.remoteSyncer.applyRemoteEvent(p)}(a,r)}catch(o){ut(Vo,"Failed to raise snapshot:",o),await J0(a,o)}}async function J0(a,e,r){if(!Ho(e))throw e;a.aa.add(1),await Cl(a),a.la.set("Offline"),r||(r=()=>$b(a.localStore)),a.asyncQueue.enqueueRetryable(async()=>{ut(Vo,"Retrying IndexedDB access"),await r(),a.aa.delete(1),await Yc(a)})}async function W0(a,e){const r=Ut(a);r.asyncQueue.verifyOperationInProgress(),ut(Vo,"RemoteStore received new credentials");const o=Ol(r);r.aa.add(3),await Cl(r),o&&r.la.set("Unknown"),await r.remoteSyncer.handleCredentialChange(e),r.aa.delete(3),await Yc(r)}async function iw(a,e){const r=Ut(a);e?(r.aa.delete(2),await Yc(r)):e||(r.aa.add(2),await Cl(r),r.la.set("Unknown"))}function Fo(a){return a.Pa||(a.Pa=function(r,o,l){const c=Ut(r);return c.Y_(),new $x(o,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(a.datastore,a.asyncQueue,{jo:ew.bind(null,a),Jo:nw.bind(null,a),Zo:rw.bind(null,a),Q_:aw.bind(null,a)}),a.ua.push(async e=>{e?(a.Pa.D_(),ym(a)?gm(a):a.la.set("Unknown")):(await a.Pa.stop(),t_(a))})),a.Pa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,r,o,l,c){this.asyncQueue=e,this.timerId=r,this.targetTimeMs=o,this.op=l,this.removalCallback=c,this.deferred=new Na,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,r,o,l,c){const d=Date.now()+o,p=new vm(e,r,d,l,c);return p.start(o),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ht(nt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function e_(a,e){if(Kr("AsyncQueue",`${e}: ${a}`),Ho(a))return new ht(nt.UNAVAILABLE,`${e}: ${a}`);throw a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{static emptySet(e){return new Oo(e.comparator)}constructor(e){this.comparator=e?(r,o)=>e(r,o)||yt.comparator(r.key,o.key):(r,o)=>yt.comparator(r.key,o.key),this.keyedMap=ol(),this.sortedSet=new pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const r=this.keyedMap.get(e);return r?this.sortedSet.indexOf(r):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((r,o)=>(e(r),!1))}add(e){const r=this.delete(e.key);return r.copy(r.keyedMap.insert(e.key,e),r.sortedSet.insert(e,null))}delete(e){const r=this.get(e);return r?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(r)):this}isEqual(e){if(!(e instanceof Oo)||this.size!==e.size)return!1;const r=this.sortedSet.getIterator(),o=e.sortedSet.getIterator();for(;r.hasNext();){const l=r.getNext().key,c=o.getNext().key;if(!l.isEqual(c))return!1}return!0}toString(){const e=[];return this.forEach(r=>{e.push(r.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,r){const o=new Oo;return o.comparator=this.comparator,o.keyedMap=e,o.sortedSet=r,o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.Ia=new pe(yt.comparator)}track(e){const r=e.doc.key,o=this.Ia.get(r);o?e.type!==0&&o.type===3?this.Ia=this.Ia.insert(r,e):e.type===3&&o.type!==1?this.Ia=this.Ia.insert(r,{type:o.type,doc:e.doc}):e.type===2&&o.type===2?this.Ia=this.Ia.insert(r,{type:2,doc:e.doc}):e.type===2&&o.type===0?this.Ia=this.Ia.insert(r,{type:0,doc:e.doc}):e.type===1&&o.type===0?this.Ia=this.Ia.remove(r):e.type===1&&o.type===2?this.Ia=this.Ia.insert(r,{type:1,doc:o.doc}):e.type===0&&o.type===1?this.Ia=this.Ia.insert(r,{type:2,doc:e.doc}):St(63341,{Vt:e,Ea:o}):this.Ia=this.Ia.insert(r,e)}da(){const e=[];return this.Ia.inorderTraversal((r,o)=>{e.push(o)}),e}}class Po{constructor(e,r,o,l,c,d,p,g,y){this.query=e,this.docs=r,this.oldDocs=o,this.docChanges=l,this.mutatedKeys=c,this.fromCache=d,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,r,o,l,c){const d=[];return r.forEach(p=>{d.push({type:0,doc:p})}),new Po(e,r,Oo.emptySet(r),d,o,l,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const r=this.docChanges,o=e.docChanges;if(r.length!==o.length)return!1;for(let l=0;l<r.length;l++)if(r[l].type!==o[l].type||!r[l].doc.isEqual(o[l].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class sw{constructor(){this.queries=ev(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(r,o){const l=Ut(r),c=l.queries;l.queries=ev(),c.forEach((d,p)=>{for(const g of p.Ra)g.onError(o)})})(this,new ht(nt.ABORTED,"Firestore shutting down"))}}function ev(){return new Ci(a=>wb(a),Bc)}async function n_(a,e){const r=Ut(a);let o=3;const l=e.query;let c=r.queries.get(l);c?!c.Va()&&e.ma()&&(o=2):(c=new ow,o=e.ma()?0:1);try{switch(o){case 0:c.Aa=await r.onListen(l,!0);break;case 1:c.Aa=await r.onListen(l,!1);break;case 2:await r.onFirstRemoteStoreListen(l)}}catch(d){const p=e_(d,`Initialization of query '${So(e.query)}' failed`);return void e.onError(p)}r.queries.set(l,c),c.Ra.push(e),e.ga(r.onlineState),c.Aa&&e.pa(c.Aa)&&bm(r)}async function r_(a,e){const r=Ut(a),o=e.query;let l=3;const c=r.queries.get(o);if(c){const d=c.Ra.indexOf(e);d>=0&&(c.Ra.splice(d,1),c.Ra.length===0?l=e.ma()?0:1:!c.Va()&&e.ma()&&(l=2))}switch(l){case 0:return r.queries.delete(o),r.onUnlisten(o,!0);case 1:return r.queries.delete(o),r.onUnlisten(o,!1);case 2:return r.onLastRemoteStoreUnlisten(o);default:return}}function lw(a,e){const r=Ut(a);let o=!1;for(const l of e){const c=l.query,d=r.queries.get(c);if(d){for(const p of d.Ra)p.pa(l)&&(o=!0);d.Aa=l}}o&&bm(r)}function uw(a,e,r){const o=Ut(a),l=o.queries.get(e);if(l)for(const c of l.Ra)c.onError(r);o.queries.delete(e)}function bm(a){a.fa.forEach(e=>{e.next()})}var jd,nv;(nv=jd||(jd={})).ya="default",nv.Cache="cache";class a_{constructor(e,r,o){this.query=e,this.wa=r,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=o||{}}pa(e){if(!this.options.includeMetadataChanges){const o=[];for(const l of e.docChanges)l.type!==3&&o.push(l);e=new Po(e.query,e.docs,e.oldDocs,o,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let r=!1;return this.ba?this.Da(e)&&(this.wa.next(e),r=!0):this.va(e,this.onlineState)&&(this.Ca(e),r=!0),this.Sa=e,r}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let r=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),r=!0),r}va(e,r){if(!e.fromCache||!this.ma())return!0;const o=r!=="Offline";return(!this.options.Fa||!o)&&(!e.docs.isEmpty()||e.hasCachedResults||r==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const r=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!r)&&this.options.includeMetadataChanges===!0}Ca(e){e=Po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==jd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.key=e}}class o_{constructor(e){this.key=e}}class cw{constructor(e,r){this.query=e,this.qa=r,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=zt(),this.mutatedKeys=zt(),this.Ua=Rb(e),this.Ka=new Oo(this.Ua)}get Wa(){return this.qa}Ga(e,r){const o=r?r.za:new tv,l=r?r.Ka:this.Ka;let c=r?r.mutatedKeys:this.mutatedKeys,d=l,p=!1;const g=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,y=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(e.inorderTraversal((_,S)=>{const C=l.get(_),U=qc(this.query,S)?S:null,V=!!C&&this.mutatedKeys.has(C.key),L=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let H=!1;C&&U?C.data.isEqual(U.data)?V!==L&&(o.track({type:3,doc:U}),H=!0):this.ja(C,U)||(o.track({type:2,doc:U}),H=!0,(g&&this.Ua(U,g)>0||y&&this.Ua(U,y)<0)&&(p=!0)):!C&&U?(o.track({type:0,doc:U}),H=!0):C&&!U&&(o.track({type:1,doc:C}),H=!0,(g||y)&&(p=!0)),H&&(U?(d=d.add(U),c=L?c.add(_):c.delete(_)):(d=d.delete(_),c=c.delete(_)))}),this.query.limit!==null)for(;d.size>this.query.limit;){const _=this.query.limitType==="F"?d.last():d.first();d=d.delete(_.key),c=c.delete(_.key),o.track({type:1,doc:_})}return{Ka:d,za:o,ys:p,mutatedKeys:c}}ja(e,r){return e.hasLocalMutations&&r.hasCommittedMutations&&!r.hasLocalMutations}applyChanges(e,r,o,l){const c=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const d=e.za.da();d.sort((_,S)=>function(U,V){const L=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return St(20277,{Vt:H})}};return L(U)-L(V)}(_.type,S.type)||this.Ua(_.doc,S.doc)),this.Ha(o),l=l!=null&&l;const p=r&&!l?this.Ja():[],g=this.$a.size===0&&this.current&&!l?1:0,y=g!==this.Qa;return this.Qa=g,d.length!==0||y?{snapshot:new Po(this.query,e.Ka,c,d,e.mutatedKeys,g===0,y,!1,!!o&&o.resumeToken.approximateByteSize()>0),Ya:p}:{Ya:p}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new tv,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(r=>this.qa=this.qa.add(r)),e.modifiedDocuments.forEach(r=>{}),e.removedDocuments.forEach(r=>this.qa=this.qa.delete(r)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=zt(),this.Ka.forEach(o=>{this.Za(o.key)&&(this.$a=this.$a.add(o.key))});const r=[];return e.forEach(o=>{this.$a.has(o)||r.push(new o_(o))}),this.$a.forEach(o=>{e.has(o)||r.push(new i_(o))}),r}Xa(e){this.qa=e.Ns,this.$a=zt();const r=this.Ga(e.documents);return this.applyChanges(r,!0)}eu(){return Po.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const _m="SyncEngine";class hw{constructor(e,r,o){this.query=e,this.targetId=r,this.view=o}}class fw{constructor(e){this.key=e,this.tu=!1}}class dw{constructor(e,r,o,l,c,d){this.localStore=e,this.remoteStore=r,this.eventManager=o,this.sharedClientState=l,this.currentUser=c,this.maxConcurrentLimboResolutions=d,this.nu={},this.ru=new Ci(p=>wb(p),Bc),this.iu=new Map,this.su=new Set,this.ou=new pe(yt.comparator),this._u=new Map,this.au=new cm,this.uu={},this.cu=new Map,this.lu=ko.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function mw(a,e,r=!0){const o=h_(a);let l;const c=o.ru.get(e);return c?(o.sharedClientState.addLocalQueryTarget(c.targetId),l=c.view.eu()):l=await s_(o,e,r,!0),l}async function pw(a,e){const r=h_(a);await s_(r,e,!0,!1)}async function s_(a,e,r,o){const l=await Bx(a.localStore,fr(e)),c=l.targetId,d=a.sharedClientState.addLocalQueryTarget(c,r);let p;return o&&(p=await gw(a,e,c,d==="current",l.resumeToken)),a.isPrimaryClient&&r&&Jb(a.remoteStore,l),p}async function gw(a,e,r,o,l){a.Pu=(S,C,U)=>async function(L,H,Z,at){let tt=H.view.Ga(Z);tt.ys&&(tt=await Y0(L.localStore,H.query,!1).then(({documents:N})=>H.view.Ga(N,tt)));const ft=at&&at.targetChanges.get(H.targetId),lt=at&&at.targetMismatches.get(H.targetId)!=null,_t=H.view.applyChanges(tt,L.isPrimaryClient,ft,lt);return av(L,H.targetId,_t.Ya),_t.snapshot}(a,S,C,U);const c=await Y0(a.localStore,e,!0),d=new cw(e,c.Ns),p=d.Ga(c.documents),g=Rl.createSynthesizedTargetChangeForCurrentChange(r,o&&a.onlineState!=="Offline",l),y=d.applyChanges(p,a.isPrimaryClient,g);av(a,r,y.Ya);const _=new hw(e,r,d);return a.ru.set(e,_),a.iu.has(r)?a.iu.get(r).push(e):a.iu.set(r,[e]),y.snapshot}async function yw(a,e,r){const o=Ut(a),l=o.ru.get(e),c=o.iu.get(l.targetId);if(c.length>1)return o.iu.set(l.targetId,c.filter(d=>!Bc(d,e))),void o.ru.delete(e);o.isPrimaryClient?(o.sharedClientState.removeLocalQueryTarget(l.targetId),o.sharedClientState.isActiveQueryTarget(l.targetId)||await zd(o.localStore,l.targetId,!1).then(()=>{o.sharedClientState.clearQueryState(l.targetId),r&&mm(o.remoteStore,l.targetId),Bd(o,l.targetId)}).catch(Uc)):(Bd(o,l.targetId),await zd(o.localStore,l.targetId,!0))}async function vw(a,e){const r=Ut(a),o=r.ru.get(e),l=r.iu.get(o.targetId);r.isPrimaryClient&&l.length===1&&(r.sharedClientState.removeLocalQueryTarget(o.targetId),mm(r.remoteStore,o.targetId))}async function l_(a,e){const r=Ut(a);try{const o=await Lx(r.localStore,e);e.targetChanges.forEach((l,c)=>{const d=r._u.get(c);d&&(se(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1,22616),l.addedDocuments.size>0?d.tu=!0:l.modifiedDocuments.size>0?se(d.tu,14607):l.removedDocuments.size>0&&(se(d.tu,42227),d.tu=!1))}),await c_(r,o,e)}catch(o){await Uc(o)}}function rv(a,e,r){const o=Ut(a);if(o.isPrimaryClient&&r===0||!o.isPrimaryClient&&r===1){const l=[];o.ru.forEach((c,d)=>{const p=d.view.ga(e);p.snapshot&&l.push(p.snapshot)}),function(d,p){const g=Ut(d);g.onlineState=p;let y=!1;g.queries.forEach((_,S)=>{for(const C of S.Ra)C.ga(p)&&(y=!0)}),y&&bm(g)}(o.eventManager,e),l.length&&o.nu.Q_(l),o.onlineState=e,o.isPrimaryClient&&o.sharedClientState.setOnlineState(e)}}async function bw(a,e,r){const o=Ut(a);o.sharedClientState.updateQueryState(e,"rejected",r);const l=o._u.get(e),c=l&&l.key;if(c){let d=new pe(yt.comparator);d=d.insert(c,tn.newNoDocument(c,At.min()));const p=zt().add(c),g=new Fc(At.min(),new Map,new pe(Ot),d,p);await l_(o,g),o.ou=o.ou.remove(c),o._u.delete(e),Em(o)}else await zd(o.localStore,e,!1).then(()=>Bd(o,e,r)).catch(Uc)}function Bd(a,e,r=null){a.sharedClientState.removeLocalQueryTarget(e);for(const o of a.iu.get(e))a.ru.delete(o),r&&a.nu.Tu(o,r);a.iu.delete(e),a.isPrimaryClient&&a.au.Ur(e).forEach(o=>{a.au.containsKey(o)||u_(a,o)})}function u_(a,e){a.su.delete(e.path.canonicalString());const r=a.ou.get(e);r!==null&&(mm(a.remoteStore,r),a.ou=a.ou.remove(e),a._u.delete(r),Em(a))}function av(a,e,r){for(const o of r)o instanceof i_?(a.au.addReference(o.key,e),_w(a,o)):o instanceof o_?(ut(_m,"Document no longer in limbo: "+o.key),a.au.removeReference(o.key,e),a.au.containsKey(o.key)||u_(a,o.key)):St(19791,{Iu:o})}function _w(a,e){const r=e.key,o=r.path.canonicalString();a.ou.get(r)||a.su.has(o)||(ut(_m,"New document in limbo: "+r),a.su.add(o),Em(a))}function Em(a){for(;a.su.size>0&&a.ou.size<a.maxConcurrentLimboResolutions;){const e=a.su.values().next().value;a.su.delete(e);const r=new yt(Wt.fromString(e)),o=a.lu.next();a._u.set(o,new fw(r)),a.ou=a.ou.insert(r,o),Jb(a.remoteStore,new Ra(fr(im(r.path)),o,"TargetPurposeLimboResolution",zc.le))}}async function c_(a,e,r){const o=Ut(a),l=[],c=[],d=[];o.ru.isEmpty()||(o.ru.forEach((p,g)=>{d.push(o.Pu(g,e,r).then(y=>{var _;if((y||r)&&o.isPrimaryClient){const S=y?!y.fromCache:(_=r==null?void 0:r.targetChanges.get(g.targetId))===null||_===void 0?void 0:_.current;o.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(y){l.push(y);const S=fm.Ps(g.targetId,y);c.push(S)}}))}),await Promise.all(d),o.nu.Q_(l),await async function(g,y){const _=Ut(g);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>W.forEach(y,C=>W.forEach(C.ls,U=>_.persistence.referenceDelegate.addReference(S,C.targetId,U)).next(()=>W.forEach(C.hs,U=>_.persistence.referenceDelegate.removeReference(S,C.targetId,U)))))}catch(S){if(!Ho(S))throw S;ut(dm,"Failed to update sequence numbers: "+S)}for(const S of y){const C=S.targetId;if(!S.fromCache){const U=_.Ss.get(C),V=U.snapshotVersion,L=U.withLastLimboFreeSnapshotVersion(V);_.Ss=_.Ss.insert(C,L)}}}(o.localStore,c))}async function Ew(a,e){const r=Ut(a);if(!r.currentUser.isEqual(e)){ut(_m,"User change. New user:",e.toKey());const o=await Xb(r.localStore,e);r.currentUser=e,function(c,d){c.cu.forEach(p=>{p.forEach(g=>{g.reject(new ht(nt.CANCELLED,d))})}),c.cu.clear()}(r,"'waitForPendingWrites' promise is rejected due to a user change."),r.sharedClientState.handleUserChange(e,o.removedBatchIds,o.addedBatchIds),await c_(r,o.Ms)}}function Tw(a,e){const r=Ut(a),o=r._u.get(e);if(o&&o.tu)return zt().add(o.key);{let l=zt();const c=r.iu.get(e);if(!c)return l;for(const d of c){const p=r.ru.get(d);l=l.unionWith(p.view.Wa)}return l}}function h_(a){const e=Ut(a);return e.remoteStore.remoteSyncer.applyRemoteEvent=l_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Tw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bw.bind(null,e),e.nu.Q_=lw.bind(null,e.eventManager),e.nu.Tu=uw.bind(null,e.eventManager),e}class Ic{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qc(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,r){return null}fu(e,r){return null}Vu(e){return zx(this.persistence,new Vx,e.initialUser,this.serializer)}Ru(e){return new Kb(hm.Ei,this.serializer)}Au(e){return new Hx}async terminate(){var e,r;(e=this.gcScheduler)===null||e===void 0||e.stop(),(r=this.indexBackfillerScheduler)===null||r===void 0||r.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ic.provider={build:()=>new Ic};class Aw extends Ic{constructor(e){super(),this.cacheSizeBytes=e}mu(e,r){se(this.persistence.referenceDelegate instanceof Nc,46915);const o=this.persistence.referenceDelegate.garbageCollector;return new _x(o,e.asyncQueue,r)}Ru(e){const r=this.cacheSizeBytes!==void 0?cn.withCacheSize(this.cacheSizeBytes):cn.DEFAULT;return new Kb(o=>Nc.Ei(o,r),this.serializer)}}class qd{async initialize(e,r){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(r),this.remoteStore=this.createRemoteStore(r),this.eventManager=this.createEventManager(r),this.syncEngine=this.createSyncEngine(r,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=o=>rv(this.syncEngine,o,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ew.bind(null,this.syncEngine),await iw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new sw}()}createDatastore(e){const r=Qc(e.databaseInfo.databaseId),o=function(c){return new Kx(c)}(e.databaseInfo);return function(c,d,p,g){return new Jx(c,d,p,g)}(e.authCredentials,e.appCheckCredentials,o,r)}createRemoteStore(e){return function(o,l,c,d,p){return new tw(o,l,c,d,p)}(this.localStore,this.datastore,e.asyncQueue,r=>rv(this.syncEngine,r,0),function(){return $0.C()?new $0:new Gx}())}createSyncEngine(e,r){return function(l,c,d,p,g,y,_){const S=new dw(l,c,d,p,g,y);return _&&(S.hu=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,r)}async terminate(){var e,r;await async function(l){const c=Ut(l);ut(Vo,"RemoteStore shutting down."),c.aa.add(5),await Cl(c),c.ca.shutdown(),c.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(r=this.eventManager)===null||r===void 0||r.terminate()}}qd.provider={build:()=>new qd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):Kr("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,r){setTimeout(()=>{this.muted||e(r)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="FirestoreClient";class Sw{constructor(e,r,o,l,c){this.authCredentials=e,this.appCheckCredentials=r,this.asyncQueue=o,this.databaseInfo=l,this.user=We.UNAUTHENTICATED,this.clientId=ub.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(o,async d=>{ut(za,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d}),this.appCheckCredentials.start(o,d=>(ut(za,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Na;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){const o=e_(r,"Failed to shutdown persistence");e.reject(o)}}),e.promise}}async function pd(a,e){a.asyncQueue.verifyOperationInProgress(),ut(za,"Initializing OfflineComponentProvider");const r=a.configuration;await e.initialize(r);let o=r.initialUser;a.setCredentialChangeListener(async l=>{o.isEqual(l)||(await Xb(e.localStore,l),o=l)}),e.persistence.setDatabaseDeletedListener(()=>a.terminate()),a._offlineComponents=e}async function iv(a,e){a.asyncQueue.verifyOperationInProgress();const r=await xw(a);ut(za,"Initializing OnlineComponentProvider"),await e.initialize(r,a.configuration),a.setCredentialChangeListener(o=>W0(e.remoteStore,o)),a.setAppCheckTokenChangeListener((o,l)=>W0(e.remoteStore,l)),a._onlineComponents=e}async function xw(a){if(!a._offlineComponents)if(a._uninitializedComponentsProvider){ut(za,"Using user provided OfflineComponentProvider");try{await pd(a,a._uninitializedComponentsProvider._offline)}catch(e){const r=e;if(!function(l){return l.name==="FirebaseError"?l.code===nt.FAILED_PRECONDITION||l.code===nt.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11}(r))throw r;Do("Error using user provided cache. Falling back to memory cache: "+r),await pd(a,new Ic)}}else ut(za,"Using default OfflineComponentProvider"),await pd(a,new Aw(void 0));return a._offlineComponents}async function ww(a){return a._onlineComponents||(a._uninitializedComponentsProvider?(ut(za,"Using user provided OnlineComponentProvider"),await iv(a,a._uninitializedComponentsProvider._online)):(ut(za,"Using default OnlineComponentProvider"),await iv(a,new qd))),a._onlineComponents}async function d_(a){const e=await ww(a),r=e.eventManager;return r.onListen=mw.bind(null,e.syncEngine),r.onUnlisten=yw.bind(null,e.syncEngine),r.onFirstRemoteStoreListen=pw.bind(null,e.syncEngine),r.onLastRemoteStoreUnlisten=vw.bind(null,e.syncEngine),r}function Rw(a,e,r={}){const o=new Na;return a.asyncQueue.enqueueAndForget(async()=>function(c,d,p,g,y){const _=new f_({next:C=>{_.yu(),d.enqueueAndForget(()=>r_(c,S));const U=C.docs.has(p);!U&&C.fromCache?y.reject(new ht(nt.UNAVAILABLE,"Failed to get document because the client is offline.")):U&&C.fromCache&&g&&g.source==="server"?y.reject(new ht(nt.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(C)},error:C=>y.reject(C)}),S=new a_(im(p.path),_,{includeMetadataChanges:!0,Fa:!0});return n_(c,S)}(await d_(a),a.asyncQueue,e,r,o)),o.promise}function Cw(a,e,r={}){const o=new Na;return a.asyncQueue.enqueueAndForget(async()=>function(c,d,p,g,y){const _=new f_({next:C=>{_.yu(),d.enqueueAndForget(()=>r_(c,S)),C.fromCache&&g.source==="server"?y.reject(new ht(nt.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(C)},error:C=>y.reject(C)}),S=new a_(p,_,{includeMetadataChanges:!0,Fa:!0});return n_(c,S)}(await d_(a),a.asyncQueue,e,r,o)),o.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(a){const e={};return a.timeoutSeconds!==void 0&&(e.timeoutSeconds=a.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(a,e,r){if(!r)throw new ht(nt.INVALID_ARGUMENT,`Function ${a}() cannot be called with an empty ${e}.`)}function Ow(a,e,r,o){if(e===!0&&o===!0)throw new ht(nt.INVALID_ARGUMENT,`${a} and ${r} cannot be used together.`)}function sv(a){if(!yt.isDocumentKey(a))throw new ht(nt.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${a} has ${a.length}.`)}function lv(a){if(yt.isDocumentKey(a))throw new ht(nt.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${a} has ${a.length}.`)}function Kc(a){if(a===void 0)return"undefined";if(a===null)return"null";if(typeof a=="string")return a.length>20&&(a=`${a.substring(0,20)}...`),JSON.stringify(a);if(typeof a=="number"||typeof a=="boolean")return""+a;if(typeof a=="object"){if(a instanceof Array)return"an array";{const e=function(o){return o.constructor?o.constructor.name:null}(a);return e?`a custom ${e} object`:"an object"}}return typeof a=="function"?"a function":St(12329,{type:typeof a})}function Tl(a,e){if("_delegate"in a&&(a=a._delegate),!(a instanceof e)){if(e.name===a.constructor.name)throw new ht(nt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=Kc(a);throw new ht(nt.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${r}`)}}return a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="firestore.googleapis.com",uv=!0;class cv{constructor(e){var r,o;if(e.host===void 0){if(e.ssl!==void 0)throw new ht(nt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=g_,this.ssl=uv}else this.host=e.host,this.ssl=(r=e.ssl)!==null&&r!==void 0?r:uv;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Yb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<vx)throw new ht(nt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ow("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=m_((o=e.experimentalLongPollingOptions)!==null&&o!==void 0?o:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new ht(nt.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new ht(nt.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new ht(nt.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(o,l){return o.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xc{constructor(e,r,o,l){this._authCredentials=e,this._appCheckCredentials=r,this._databaseId=o,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ht(nt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ht(nt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(o){if(!o)return new tS;switch(o.type){case"firstParty":return new aS(o.sessionIndex||"0",o.iamToken||null,o.authTokenFactory||null);case"provider":return o.client;default:throw new ht(nt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(r){const o=ov.get(r);o&&(ut("ComponentProvider","Removing Datastore"),ov.delete(r),o.terminate())}(this),Promise.resolve()}}function Dw(a,e,r,o={}){var l;const c=(a=Tl(a,Xc))._getSettings(),d=Object.assign(Object.assign({},c),{emulatorOptions:a._getEmulatorOptions()}),p=`${e}:${r}`;c.host!==g_&&c.host!==p&&Do("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:p,ssl:!1,emulatorOptions:o});if(!Ec(g,d)&&(a._setSettings(g),o.mockUserToken)){let y,_;if(typeof o.mockUserToken=="string")y=o.mockUserToken,_=We.MOCK_USER;else{y=M2(o.mockUserToken,(l=a._app)===null||l===void 0?void 0:l.options.projectId);const S=o.mockUserToken.sub||o.mockUserToken.user_id;if(!S)throw new ht(nt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new We(S)}a._authCredentials=new eS(new sb(y,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,r,o){this.converter=r,this._query=o,this.type="query",this.firestore=e}withConverter(e){return new Qo(this.firestore,e,this._query)}}class Tn{constructor(e,r,o){this.converter=r,this._key=o,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ia(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tn(this.firestore,e,this._key)}}class Ia extends Qo{constructor(e,r,o){super(e,r,im(o)),this._path=o,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tn(this.firestore,null,new yt(e))}withConverter(e){return new Ia(this.firestore,e,this._path)}}function y_(a,e,...r){if(a=pl(a),p_("collection","path",e),a instanceof Xc){const o=Wt.fromString(e,...r);return lv(o),new Ia(a,null,o)}{if(!(a instanceof Tn||a instanceof Ia))throw new ht(nt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const o=a._path.child(Wt.fromString(e,...r));return lv(o),new Ia(a.firestore,null,o)}}function Nw(a,e,...r){if(a=pl(a),arguments.length===1&&(e=ub.newId()),p_("doc","path",e),a instanceof Xc){const o=Wt.fromString(e,...r);return sv(o),new Tn(a,null,new yt(o))}{if(!(a instanceof Tn||a instanceof Ia))throw new ht(nt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const o=a._path.child(Wt.fromString(e,...r));return sv(o),new Tn(a.firestore,a instanceof Ia?a.converter:null,new yt(o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv="AsyncQueue";class fv{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new Zb(this,"async_queue_retry"),this.ju=()=>{const o=md();o&&ut(hv,"Visibility state changed to "+o.visibilityState),this.y_.A_()},this.Hu=e;const r=md();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const r=md();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const r=new Na;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(r.resolve,r.reject),r.promise)).then(()=>r.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!Ho(e))throw e;ut(hv,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const r=this.Hu.then(()=>(this.Wu=!0,e().catch(o=>{throw this.Ku=o,this.Wu=!1,Kr("INTERNAL UNHANDLED ERROR: ",dv(o)),o}).then(o=>(this.Wu=!1,o))));return this.Hu=r,r}enqueueAfterDelay(e,r,o){this.Ju(),this.zu.indexOf(e)>-1&&(r=0);const l=vm.createAndSchedule(this,e,r,o,c=>this.Xu(c));return this.Uu.push(l),l}Ju(){this.Ku&&St(47125,{ec:dv(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const r of this.Uu)if(r.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((r,o)=>r.targetTimeMs-o.targetTimeMs);for(const r of this.Uu)if(r.skipDelay(),e!=="all"&&r.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const r=this.Uu.indexOf(e);this.Uu.splice(r,1)}}function dv(a){let e=a.message||"";return a.stack&&(e=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),e}class Tm extends Xc{constructor(e,r,o,l){super(e,r,o,l),this.type="firestore",this._queue=new fv,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fv(e),this._firestoreClient=void 0,await e}}}function Iw(a,e){const r=typeof a=="object"?a:HA(),o=typeof a=="string"?a:xc,l=zA(r,"firestore").getImmediate({identifier:o});if(!l._initialized){const c=N2("firestore");c&&Dw(l,...c)}return l}function v_(a){if(a._terminated)throw new ht(nt.FAILED_PRECONDITION,"The client has already been terminated.");return a._firestoreClient||Mw(a),a._firestoreClient}function Mw(a){var e,r,o;const l=a._freezeSettings(),c=function(p,g,y,_){return new _S(p,g,y,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,m_(_.experimentalLongPollingOptions),_.useFetchStreams)}(a._databaseId,((e=a._app)===null||e===void 0?void 0:e.options.appId)||"",a._persistenceKey,l);a._componentsProvider||!((r=l.localCache)===null||r===void 0)&&r._offlineComponentProvider&&(!((o=l.localCache)===null||o===void 0)&&o._onlineComponentProvider)&&(a._componentsProvider={_offline:l.localCache._offlineComponentProvider,_online:l.localCache._onlineComponentProvider}),a._firestoreClient=new Sw(a._authCredentials,a._appCheckCredentials,a._queue,c,a._componentsProvider&&function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}}(a._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Uo(Ke.fromBase64String(e))}catch(r){throw new ht(nt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(e){return new Uo(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(...e){for(let r=0;r<e.length;++r)if(e[r].length===0)throw new ht(nt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new en(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,r){if(!isFinite(e)||e<-90||e>90)throw new ht(nt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(r)||r<-180||r>180)throw new ht(nt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=e,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ot(this._lat,e._lat)||Ot(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this._values=(e||[]).map(r=>r)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(o,l){if(o.length!==l.length)return!1;for(let c=0;c<o.length;++c)if(o[c]!==l[c])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=/^__.*__$/;function E_(a){switch(a){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw St(40011,{oc:a})}}class xm{constructor(e,r,o,l,c,d){this.settings=e,this.databaseId=r,this.serializer=o,this.ignoreUndefinedProperties=l,c===void 0&&this._c(),this.fieldTransforms=c||[],this.fieldMask=d||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new xm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var r;const o=(r=this.path)===null||r===void 0?void 0:r.child(e),l=this.ac({path:o,cc:!1});return l.lc(e),l}hc(e){var r;const o=(r=this.path)===null||r===void 0?void 0:r.child(e),l=this.ac({path:o,cc:!1});return l._c(),l}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return Hd(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(r=>e.isPrefixOf(r))!==void 0||this.fieldTransforms.find(r=>e.isPrefixOf(r.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(E_(this.oc)&&kw.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class Vw{constructor(e,r,o){this.databaseId=e,this.ignoreUndefinedProperties=r,this.serializer=o||Qc(e)}dc(e,r,o,l=!1){return new xm({oc:e,methodName:r,Ec:o,path:en.emptyPath(),cc:!1,Ic:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pw(a){const e=a._freezeSettings(),r=Qc(a._databaseId);return new Vw(a._databaseId,!!e.ignoreUndefinedProperties,r)}function Uw(a,e,r,o=!1){return wm(r,a.dc(o?4:3,e))}function wm(a,e){if(T_(a=pl(a)))return Lw("Unsupported field value:",e,a),zw(a,e);if(a instanceof __)return function(o,l){if(!E_(l.oc))throw l.Tc(`${o._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Tc(`${o._methodName}() is not currently supported inside arrays`);const c=o._toFieldTransform(l);c&&l.fieldTransforms.push(c)}(a,e),null;if(a===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),a instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(o,l){const c=[];let d=0;for(const p of o){let g=wm(p,l.Pc(d));g==null&&(g={nullValue:"NULL_VALUE"}),c.push(g),d++}return{arrayValue:{values:c}}}(a,e)}return function(o,l){if((o=pl(o))===null)return{nullValue:"NULL_VALUE"};if(typeof o=="number")return HS(l.serializer,o);if(typeof o=="boolean")return{booleanValue:o};if(typeof o=="string")return{stringValue:o};if(o instanceof Date){const c=Be.fromDate(o);return{timestampValue:Pd(l.serializer,c)}}if(o instanceof Be){const c=new Be(o.seconds,1e3*Math.floor(o.nanoseconds/1e3));return{timestampValue:Pd(l.serializer,c)}}if(o instanceof Am)return{geoPointValue:{latitude:o.latitude,longitude:o.longitude}};if(o instanceof Uo)return{bytesValue:Lb(l.serializer,o._byteString)};if(o instanceof Tn){const c=l.databaseId,d=o.firestore._databaseId;if(!d.isEqual(c))throw l.Tc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:jb(o.firestore._databaseId||l.databaseId,o._key.path)}}if(o instanceof Sm)return function(d,p){return{mapValue:{fields:{[yb]:{stringValue:vb},[wc]:{arrayValue:{values:d.toArray().map(y=>{if(typeof y!="number")throw p.Tc("VectorValues must only contain numeric values.");return om(p.serializer,y)})}}}}}}(o,l);throw l.Tc(`Unsupported field value: ${Kc(o)}`)}(a,e)}function zw(a,e){const r={};return hb(a)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Go(a,(o,l)=>{const c=wm(l,e.uc(o));c!=null&&(r[o]=c)}),{mapValue:{fields:r}}}function T_(a){return!(typeof a!="object"||a===null||a instanceof Array||a instanceof Date||a instanceof Be||a instanceof Am||a instanceof Uo||a instanceof Tn||a instanceof __||a instanceof Sm)}function Lw(a,e,r){if(!T_(r)||!function(l){return typeof l=="object"&&l!==null&&(Object.getPrototypeOf(l)===Object.prototype||Object.getPrototypeOf(l)===null)}(r)){const o=Kc(r);throw o==="an object"?e.Tc(a+" a custom object"):e.Tc(a+" "+o)}}const jw=new RegExp("[~\\*/\\[\\]]");function Bw(a,e,r){if(e.search(jw)>=0)throw Hd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,a,!1,void 0,r);try{return new b_(...e.split("."))._internalPath}catch{throw Hd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,a,!1,void 0,r)}}function Hd(a,e,r,o,l){const c=o&&!o.isEmpty(),d=l!==void 0;let p=`Function ${e}() called with invalid data`;r&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(c||d)&&(g+=" (found",c&&(g+=` in field ${o}`),d&&(g+=` in document ${l}`),g+=")"),new ht(nt.INVALID_ARGUMENT,p+a+g)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,r,o,l,c){this._firestore=e,this._userDataWriter=r,this._key=o,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new Tn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const r=this._document.data.field(Rm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r)}}}class qw extends A_{data(){return super.data()}}function Rm(a,e){return typeof e=="string"?Bw(a,e):e instanceof b_?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(a){if(a.limitType==="L"&&a.explicitOrderBy.length===0)throw new ht(nt.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cm{}class Gw extends Cm{}function Fw(a,e,...r){let o=[];e instanceof Cm&&o.push(e),o=o.concat(r),function(c){const d=c.filter(g=>g instanceof Om).length,p=c.filter(g=>g instanceof $c).length;if(d>1||d>0&&p>0)throw new ht(nt.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(o);for(const l of o)a=l._apply(a);return a}class $c extends Gw{constructor(e,r,o){super(),this._field=e,this._op=r,this._value=o,this.type="where"}static _create(e,r,o){return new $c(e,r,o)}_apply(e){const r=this._parse(e);return S_(e._query,r),new Qo(e.firestore,e.converter,Nd(e._query,r))}_parse(e){const r=Pw(e.firestore);return function(c,d,p,g,y,_,S){let C;if(y.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new ht(nt.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){pv(S,_);const V=[];for(const L of S)V.push(mv(g,c,L));C={arrayValue:{values:V}}}else C=mv(g,c,S)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||pv(S,_),C=Uw(p,d,S,_==="in"||_==="not-in");return Ae.create(y,_,C)}(e._query,"where",r,e.firestore._databaseId,this._field,this._op,this._value)}}function Qw(a,e,r){const o=e,l=Rm("where",a);return $c._create(l,o,r)}class Om extends Cm{constructor(e,r){super(),this.type=e,this._queryConstraints=r}static _create(e,r){return new Om(e,r)}_parse(e){const r=this._queryConstraints.map(o=>o._parse(e)).filter(o=>o.getFilters().length>0);return r.length===1?r[0]:Fn.create(r,this._getOperator())}_apply(e){const r=this._parse(e);return r.getFilters().length===0?e:(function(l,c){let d=l;const p=c.getFlattenedFilters();for(const g of p)S_(d,g),d=Nd(d,g)}(e._query,r),new Qo(e.firestore,e.converter,Nd(e._query,r)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function mv(a,e,r){if(typeof(r=pl(r))=="string"){if(r==="")throw new ht(nt.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xb(e)&&r.indexOf("/")!==-1)throw new ht(nt.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);const o=e.path.child(Wt.fromString(r));if(!yt.isDocumentKey(o))throw new ht(nt.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${o}' is not because it has an odd number of segments (${o.length}).`);return C0(a,new yt(o))}if(r instanceof Tn)return C0(a,r._key);throw new ht(nt.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kc(r)}.`)}function pv(a,e){if(!Array.isArray(a)||a.length===0)throw new ht(nt.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function S_(a,e){const r=function(l,c){for(const d of l)for(const p of d.getFlattenedFilters())if(c.indexOf(p.op)>=0)return p.op;return null}(a.filters,function(l){switch(l){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(r!==null)throw r===e.op?new ht(nt.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ht(nt.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${r.toString()}' filters.`)}class Yw{convertValue(e,r="none"){switch(Pa(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,r);case 5:return e.stringValue;case 6:return this.convertBytes(Va(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,r);case 11:return this.convertObject(e.mapValue,r);case 10:return this.convertVectorValue(e.mapValue);default:throw St(62114,{value:e})}}convertObject(e,r){return this.convertObjectMap(e.fields,r)}convertObjectMap(e,r="none"){const o={};return Go(e,(l,c)=>{o[l]=this.convertValue(c,r)}),o}convertVectorValue(e){var r,o,l;const c=(l=(o=(r=e.fields)===null||r===void 0?void 0:r[wc].arrayValue)===null||o===void 0?void 0:o.values)===null||l===void 0?void 0:l.map(d=>me(d.doubleValue));return new Sm(c)}convertGeoPoint(e){return new Am(me(e.latitude),me(e.longitude))}convertArray(e,r){return(e.values||[]).map(o=>this.convertValue(o,r))}convertServerTimestamp(e,r){switch(r){case"previous":const o=jc(e);return o==null?null:this.convertValue(o,r);case"estimate":return this.convertTimestamp(bl(e));default:return null}}convertTimestamp(e){const r=ka(e);return new Be(r.seconds,r.nanos)}convertDocumentKey(e,r){const o=Wt.fromString(e);se(Qb(o),9688,{name:e});const l=new _l(o.get(1),o.get(3)),c=new yt(o.popFirst(5));return l.isEqual(r)||Kr(`Document ${c} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,r){this.hasPendingWrites=e,this.fromCache=r}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class x_ extends A_{constructor(e,r,o,l,c,d){super(e,r,o,l,d),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const r=new gc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,r={}){if(this._document){const o=this._document.data.field(Rm("DocumentSnapshot.get",e));if(o!==null)return this._userDataWriter.convertValue(o,r.serverTimestamps)}}}class gc extends x_{data(e={}){return super.data(e)}}class Kw{constructor(e,r,o,l){this._firestore=e,this._userDataWriter=r,this._snapshot=l,this.metadata=new ll(l.hasPendingWrites,l.fromCache),this.query=o}get docs(){const e=[];return this.forEach(r=>e.push(r)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,r){this._snapshot.docs.forEach(o=>{e.call(r,new gc(this._firestore,this._userDataWriter,o.key,o,new ll(this._snapshot.mutatedKeys.has(o.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const r=!!e.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new ht(nt.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=function(l,c){if(l._snapshot.oldDocs.isEmpty()){let d=0;return l._snapshot.docChanges.map(p=>{const g=new gc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new ll(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:d++}})}{let d=l._snapshot.oldDocs;return l._snapshot.docChanges.filter(p=>c||p.type!==3).map(p=>{const g=new gc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new ll(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);let y=-1,_=-1;return p.type!==0&&(y=d.indexOf(p.doc.key),d=d.delete(p.doc.key)),p.type!==1&&(d=d.add(p.doc),_=d.indexOf(p.doc.key)),{type:Xw(p.type),doc:g,oldIndex:y,newIndex:_}})}}(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}}function Xw(a){switch(a){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return St(61501,{type:a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(a){a=Tl(a,Tn);const e=Tl(a.firestore,Tm);return Rw(v_(e),a._key).then(r=>Zw(e,a,r))}class w_ extends Yw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Uo(e)}convertReference(e){const r=this.convertDocumentKey(e,this.firestore._databaseId);return new Tn(this.firestore,null,r)}}function R_(a){a=Tl(a,Qo);const e=Tl(a.firestore,Tm),r=v_(e),o=new w_(e);return Hw(a._query),Cw(r,a._query).then(l=>new Kw(e,o,a,l))}function Zw(a,e,r){const o=r.docs.get(e._key),l=new w_(a);return new x_(a,l,e._key,o,new ll(r.hasPendingWrites,r.fromCache),e.converter)}(function(e,r=!0){(function(l){qo=l})(qA),Ac(new gl("firestore",(o,{instanceIdentifier:l,options:c})=>{const d=o.getProvider("app").getImmediate(),p=new Tm(new nS(o.getProvider("auth-internal")),new iS(d,o.getProvider("app-check-internal")),function(y,_){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ht(nt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _l(y.options.projectId,_)}(d,l),d);return c=Object.assign({useFetchStreams:r},c),p._setSettings(c),p},"PUBLIC").setMultipleInstances(!0)),Ro(g0,y0,e),Ro(g0,y0,"esm2017")})();var Jw="firebase",Ww="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ro(Jw,Ww,"app");const t5={apiKey:"apiKey:import.meta.env.VITE_FIRESTORE_API",authDomain:"chicago-firestore-rb.firebaseapp.com",projectId:"chicago-firestore-rb",storageBucket:"chicago-firestore-rb.firebasestorage.app",messagingSenderId:"896440432690",appId:"1:896440432690:web:a46fafbe2c52344561a42b"},e5=Zv(t5),Dm=Iw(e5),n5=async()=>{const a=y_(Dm,"keyboards");return(await R_(a)).docs.map(r=>{const{id:o}=r,{...l}=r.data();return{id:o,...l}})},r5=async a=>{const e=Nw(Dm,"keyboards",a),r=await $w(e);if(r.exists())return{id:r.id,...r.data()};throw new Error("Keyboard not found")},a5=async()=>{const a=y_(Dm,"keyboards"),e=Fw(a,Qw("isFeatured","==",!0));return(await R_(e)).docs.map(o=>({id:o.id,...o.data()}))},i5=()=>{const[a,e]=Y.useState([]),[r,o]=Y.useState(!0),[l,c]=Y.useState(0),d=jo(),p=()=>{d("/ShopPage")};Y.useEffect(()=>{(async()=>{try{const S=await a5();e(S),o(!1)}catch(S){console.error("Error loading featured products:",S),o(!1)}})()},[]),Y.useEffect(()=>{if(a.length<2)return;const _=setInterval(()=>{c(S=>(S+1)%a.length)},5e3);return()=>clearInterval(_)},[a.length]);const g=()=>{c(_=>(_+1)%a.length)},y=()=>{c(_=>_===0?a.length-1:_-1)};return r?I.jsx("div",{className:Le.loading,children:"Loading..."}):a.length===0?I.jsx("div",{className:Le.noFeatured,children:"No featured products available"}):I.jsxs("div",{className:Le.slider,children:[I.jsx("div",{className:Le.slides,children:a.map((_,S)=>I.jsxs("div",{className:`${Le.slide} ${S===l?Le.active:""}`,children:[I.jsx("div",{className:Le.imageContainer,children:I.jsx(Qr,{to:`/product/${_.id}`,children:I.jsx("img",{src:_.featureUrl||_.imageUrl,alt:_.name,className:Le.image})})}),I.jsxs("div",{className:Le.content,children:[I.jsx("h2",{className:Le.title,children:_.name}),I.jsx("p",{className:Le.description,children:_.description||"Premium mechanical keyboard"}),I.jsxs("div",{className:Le.priceTag,children:["$",_.price]}),I.jsx("button",{className:Le.shopButton,onClick:()=>p(),children:"Shop Now"})]})]},_.id))}),a.length>1&&I.jsxs(I.Fragment,{children:[I.jsx("button",{className:Le.arrowLeft,onClick:y,children:I.jsx(t2,{})}),I.jsx("button",{className:Le.arrowRight,onClick:g,children:I.jsx(e2,{})}),I.jsx("div",{className:Le.indicators,children:a.map((_,S)=>I.jsx("button",{className:`${Le.indicator} ${S===l?Le.active:""}`,onClick:()=>c(S)},_.id))})]})]})},o5="_container_1u2h3_1",s5="_aboutSection_1u2h3_11",gv={container:o5,aboutSection:s5},l5=()=>I.jsxs("main",{className:gv.container,children:[I.jsx(i5,{}),I.jsx("h1",{children:"KEYD UP MECHANICAL KEYBOARDS"}),I.jsxs("section",{className:gv.aboutSection,children:[I.jsx("p",{children:"At Keyd Up, we're passionate about bringing you the finest mechanical keyboards on the market. Our carefully curated selection offers the perfect blend of performance, aesthetics, and durability."}),I.jsx("h3",{children:"Why Choose Mechanical Keyboards?"}),I.jsx("p",{children:"Mechanical keyboards provide a superior typing experience with tactile feedback, customisable switches, and longer lifespans than traditional membrane keyboards. Whether you're a professional writer, programmer, or gamer, our keyboards will enhance your productivity and enjoyment."}),I.jsx("h3",{children:"Our Commitment"}),I.jsx("p",{children:"We source our products from trusted manufacturers who share our dedication to quality. Each keyboard undergoes rigorous testing to ensure it meets our exacting standards before reaching your desk. From compact 60% layouts to full-size professional models, we have the perfect keyboard for everyone."})]})]});function u5({fetchFn:a,args:e=[],dependencies:r=[]}){const[o,l]=Y.useState(null),[c,d]=Y.useState(null),[p,g]=Y.useState("PENDING");return Y.useEffect(()=>{g("LOADING"),a(...e).then(y=>{g("SUCCESS"),l(y)}).catch(y=>{g("FAILURE"),d(y)})},r),{data:o,error:c,isSuccess:p==="SUCCESS",isFail:p==="FAILURE",isLoading:p==="LOADING"}}const c5="_keyboardGrid_1o2md_1",h5="_keyboardCard_1o2md_10",f5="_imageContainer_1o2md_27",d5="_productImage_1o2md_33",m5="_cardContent_1o2md_43",p5="_productName_1o2md_51",g5="_titleLink_1o2md_59",y5="_productDescription_1o2md_64",v5="_productFooter_1o2md_71",b5="_productPrice_1o2md_78",_5="_addToCartBtn_1o2md_84",E5="_stockInfo_1o2md_102",T5="_variantInfo_1o2md_114",A5="_variantLabel_1o2md_121",S5="_variantOptions_1o2md_128",x5="_variantTag_1o2md_135",_e={keyboardGrid:c5,keyboardCard:h5,imageContainer:f5,productImage:d5,cardContent:m5,productName:p5,titleLink:g5,productDescription:y5,productFooter:v5,productPrice:b5,addToCartBtn:_5,stockInfo:E5,variantInfo:T5,variantLabel:A5,variantOptions:S5,variantTag:x5},w5=({keyboardsData:a})=>{const e=jo(),r=l=>{e(`/product/${l}`)},o=l=>{const c=l.variants.map(g=>g.color),d=[...new Set(l.variants.map(g=>g.connection))];return{totalQuantity:l.variants.reduce((g,y)=>g+(y.quantity||0),0),colors:c,connections:d}};return I.jsx("div",{className:_e.keyboardGrid,children:a.map(l=>{const{totalQuantity:c,colors:d,connections:p}=o(l);return I.jsxs("div",{className:_e.keyboardCard,children:[I.jsx(Qr,{to:`/product/${l.id}`,children:I.jsx("div",{className:_e.imageContainer,children:I.jsx("img",{src:l.imageUrl,alt:l.name,className:_e.productImage})})}),I.jsxs("div",{className:_e.cardContent,children:[I.jsx(Qr,{to:`/product/${l.id}`,className:_e.titleLink,children:I.jsx("h2",{className:_e.productName,children:l.name})}),I.jsx("p",{className:_e.productDescription,children:l.description}),d.length>0&&I.jsxs("div",{className:_e.variantInfo,children:[I.jsx("span",{className:_e.variantLabel,children:"Available colours:"}),I.jsx("div",{className:_e.variantOptions,children:d.map(g=>I.jsx("span",{className:_e.variantTag,children:g},g))})]}),p.length>0&&I.jsxs("div",{className:_e.variantInfo,children:[I.jsx("span",{className:_e.variantLabel,children:"Connection type:"}),I.jsx("div",{className:_e.variantOptions,children:p.map(g=>I.jsx("span",{className:_e.variantTag,children:g},g))})]}),I.jsxs("p",{className:_e.stockInfo,children:[c," in stock"]}),I.jsxs("div",{className:_e.productFooter,children:[I.jsxs("p",{className:_e.productPrice,children:["$",l.price]}),I.jsx("button",{className:_e.addToCartBtn,onClick:()=>r(l.id),children:"View Product"})]})]})]},l.id)})})},R5="_shopContainer_r6iql_1",C5="_header_r6iql_8",O5="_loadingContainer_r6iql_34",gd={shopContainer:R5,header:C5,loadingContainer:O5};function Ie(a,e){e===void 0&&(e={});var r=e.insertAt;if(a&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",r==="top"&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=a:l.appendChild(document.createTextNode(a))}}Ie(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var hr=function(){return hr=Object.assign||function(a){for(var e,r=1,o=arguments.length;r<o;r++)for(var l in e=arguments[r])Object.prototype.hasOwnProperty.call(e,l)&&(a[l]=e[l]);return a},hr.apply(this,arguments)};function Mc(a){return Mc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mc(a)}var D5=/^\s+/,N5=/\s+$/;function pt(a,e){if(e=e||{},(a=a||"")instanceof pt)return a;if(!(this instanceof pt))return new pt(a,e);var r=function(o){var l={r:0,g:0,b:0},c=1,d=null,p=null,g=null,y=!1,_=!1;typeof o=="string"&&(o=function(V){V=V.replace(D5,"").replace(N5,"").toLowerCase();var L,H=!1;if(Gd[V])V=Gd[V],H=!0;else if(V=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(L=Hn.rgb.exec(V))?{r:L[1],g:L[2],b:L[3]}:(L=Hn.rgba.exec(V))?{r:L[1],g:L[2],b:L[3],a:L[4]}:(L=Hn.hsl.exec(V))?{h:L[1],s:L[2],l:L[3]}:(L=Hn.hsla.exec(V))?{h:L[1],s:L[2],l:L[3],a:L[4]}:(L=Hn.hsv.exec(V))?{h:L[1],s:L[2],v:L[3]}:(L=Hn.hsva.exec(V))?{h:L[1],s:L[2],v:L[3],a:L[4]}:(L=Hn.hex8.exec(V))?{r:En(L[1]),g:En(L[2]),b:En(L[3]),a:Tv(L[4]),format:H?"name":"hex8"}:(L=Hn.hex6.exec(V))?{r:En(L[1]),g:En(L[2]),b:En(L[3]),format:H?"name":"hex"}:(L=Hn.hex4.exec(V))?{r:En(L[1]+""+L[1]),g:En(L[2]+""+L[2]),b:En(L[3]+""+L[3]),a:Tv(L[4]+""+L[4]),format:H?"name":"hex8"}:(L=Hn.hex3.exec(V))?{r:En(L[1]+""+L[1]),g:En(L[2]+""+L[2]),b:En(L[3]+""+L[3]),format:H?"name":"hex"}:!1}(o)),Mc(o)=="object"&&(Hr(o.r)&&Hr(o.g)&&Hr(o.b)?(S=o.r,C=o.g,U=o.b,l={r:255*re(S,255),g:255*re(C,255),b:255*re(U,255)},y=!0,_=String(o.r).substr(-1)==="%"?"prgb":"rgb"):Hr(o.h)&&Hr(o.s)&&Hr(o.v)?(d=ul(o.s),p=ul(o.v),l=function(V,L,H){V=6*re(V,360),L=re(L,100),H=re(H,100);var Z=Math.floor(V),at=V-Z,tt=H*(1-L),ft=H*(1-at*L),lt=H*(1-(1-at)*L),_t=Z%6,N=[H,ft,tt,tt,lt,H][_t],A=[lt,H,H,ft,tt,tt][_t],x=[tt,tt,lt,H,H,ft][_t];return{r:255*N,g:255*A,b:255*x}}(o.h,d,p),y=!0,_="hsv"):Hr(o.h)&&Hr(o.s)&&Hr(o.l)&&(d=ul(o.s),g=ul(o.l),l=function(V,L,H){var Z,at,tt;function ft(N,A,x){return x<0&&(x+=1),x>1&&(x-=1),x<1/6?N+6*(A-N)*x:x<.5?A:x<2/3?N+(A-N)*(2/3-x)*6:N}if(V=re(V,360),L=re(L,100),H=re(H,100),L===0)Z=at=tt=H;else{var lt=H<.5?H*(1+L):H+L-H*L,_t=2*H-lt;Z=ft(_t,lt,V+1/3),at=ft(_t,lt,V),tt=ft(_t,lt,V-1/3)}return{r:255*Z,g:255*at,b:255*tt}}(o.h,d,g),y=!0,_="hsl"),o.hasOwnProperty("a")&&(c=o.a));var S,C,U;return c=C_(c),{ok:y,format:o.format||_,r:Math.min(255,Math.max(l.r,0)),g:Math.min(255,Math.max(l.g,0)),b:Math.min(255,Math.max(l.b,0)),a:c}}(a);this._originalInput=a,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||r.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=r.ok}function yv(a,e,r){a=re(a,255),e=re(e,255),r=re(r,255);var o,l,c=Math.max(a,e,r),d=Math.min(a,e,r),p=(c+d)/2;if(c==d)o=l=0;else{var g=c-d;switch(l=p>.5?g/(2-c-d):g/(c+d),c){case a:o=(e-r)/g+(e<r?6:0);break;case e:o=(r-a)/g+2;break;case r:o=(a-e)/g+4}o/=6}return{h:o,s:l,l:p}}function vv(a,e,r){a=re(a,255),e=re(e,255),r=re(r,255);var o,l,c=Math.max(a,e,r),d=Math.min(a,e,r),p=c,g=c-d;if(l=c===0?0:g/c,c==d)o=0;else{switch(c){case a:o=(e-r)/g+(e<r?6:0);break;case e:o=(r-a)/g+2;break;case r:o=(a-e)/g+4}o/=6}return{h:o,s:l,v:p}}function bv(a,e,r,o){var l=[Gn(Math.round(a).toString(16)),Gn(Math.round(e).toString(16)),Gn(Math.round(r).toString(16))];return o&&l[0].charAt(0)==l[0].charAt(1)&&l[1].charAt(0)==l[1].charAt(1)&&l[2].charAt(0)==l[2].charAt(1)?l[0].charAt(0)+l[1].charAt(0)+l[2].charAt(0):l.join("")}function _v(a,e,r,o){return[Gn(O_(o)),Gn(Math.round(a).toString(16)),Gn(Math.round(e).toString(16)),Gn(Math.round(r).toString(16))].join("")}function I5(a,e){e=e===0?0:e||10;var r=pt(a).toHsl();return r.s-=e/100,r.s=Zc(r.s),pt(r)}function M5(a,e){e=e===0?0:e||10;var r=pt(a).toHsl();return r.s+=e/100,r.s=Zc(r.s),pt(r)}function k5(a){return pt(a).desaturate(100)}function V5(a,e){e=e===0?0:e||10;var r=pt(a).toHsl();return r.l+=e/100,r.l=Zc(r.l),pt(r)}function P5(a,e){e=e===0?0:e||10;var r=pt(a).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-e/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-e/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-e/100*255))),pt(r)}function U5(a,e){e=e===0?0:e||10;var r=pt(a).toHsl();return r.l-=e/100,r.l=Zc(r.l),pt(r)}function z5(a,e){var r=pt(a).toHsl(),o=(r.h+e)%360;return r.h=o<0?360+o:o,pt(r)}function L5(a){var e=pt(a).toHsl();return e.h=(e.h+180)%360,pt(e)}function Ev(a,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var r=pt(a).toHsl(),o=[pt(a)],l=360/e,c=1;c<e;c++)o.push(pt({h:(r.h+c*l)%360,s:r.s,l:r.l}));return o}function j5(a){var e=pt(a).toHsl(),r=e.h;return[pt(a),pt({h:(r+72)%360,s:e.s,l:e.l}),pt({h:(r+216)%360,s:e.s,l:e.l})]}function B5(a,e,r){e=e||6,r=r||30;var o=pt(a).toHsl(),l=360/r,c=[pt(a)];for(o.h=(o.h-(l*e>>1)+720)%360;--e;)o.h=(o.h+l)%360,c.push(pt(o));return c}function q5(a,e){e=e||6;for(var r=pt(a).toHsv(),o=r.h,l=r.s,c=r.v,d=[],p=1/e;e--;)d.push(pt({h:o,s:l,v:c})),c=(c+p)%1;return d}pt.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var a,e,r,o=this.toRgb();return a=o.r/255,e=o.g/255,r=o.b/255,.2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},setAlpha:function(a){return this._a=C_(a),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var a=vv(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=vv(this._r,this._g,this._b),e=Math.round(360*a.h),r=Math.round(100*a.s),o=Math.round(100*a.v);return this._a==1?"hsv("+e+", "+r+"%, "+o+"%)":"hsva("+e+", "+r+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var a=yv(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=yv(this._r,this._g,this._b),e=Math.round(360*a.h),r=Math.round(100*a.s),o=Math.round(100*a.l);return this._a==1?"hsl("+e+", "+r+"%, "+o+"%)":"hsla("+e+", "+r+"%, "+o+"%, "+this._roundA+")"},toHex:function(a){return bv(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){return function(e,r,o,l,c){var d=[Gn(Math.round(e).toString(16)),Gn(Math.round(r).toString(16)),Gn(Math.round(o).toString(16)),Gn(O_(l))];return c&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)&&d[3].charAt(0)==d[3].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0)+d[3].charAt(0):d.join("")}(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*re(this._r,255))+"%",g:Math.round(100*re(this._g,255))+"%",b:Math.round(100*re(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*re(this._r,255))+"%, "+Math.round(100*re(this._g,255))+"%, "+Math.round(100*re(this._b,255))+"%)":"rgba("+Math.round(100*re(this._r,255))+"%, "+Math.round(100*re(this._g,255))+"%, "+Math.round(100*re(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(H5[bv(this._r,this._g,this._b,!0)]||!1)},toFilter:function(a){var e="#"+_v(this._r,this._g,this._b,this._a),r=e,o=this._gradientType?"GradientType = 1, ":"";if(a){var l=pt(a);r="#"+_v(l._r,l._g,l._b,l._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+e+",endColorstr="+r+")"},toString:function(a){var e=!!a;a=a||this._format;var r=!1,o=this._a<1&&this._a>=0;return e||!o||a!=="hex"&&a!=="hex6"&&a!=="hex3"&&a!=="hex4"&&a!=="hex8"&&a!=="name"?(a==="rgb"&&(r=this.toRgbString()),a==="prgb"&&(r=this.toPercentageRgbString()),a!=="hex"&&a!=="hex6"||(r=this.toHexString()),a==="hex3"&&(r=this.toHexString(!0)),a==="hex4"&&(r=this.toHex8String(!0)),a==="hex8"&&(r=this.toHex8String()),a==="name"&&(r=this.toName()),a==="hsl"&&(r=this.toHslString()),a==="hsv"&&(r=this.toHsvString()),r||this.toHexString()):a==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return pt(this.toString())},_applyModification:function(a,e){var r=a.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(V5,arguments)},brighten:function(){return this._applyModification(P5,arguments)},darken:function(){return this._applyModification(U5,arguments)},desaturate:function(){return this._applyModification(I5,arguments)},saturate:function(){return this._applyModification(M5,arguments)},greyscale:function(){return this._applyModification(k5,arguments)},spin:function(){return this._applyModification(z5,arguments)},_applyCombination:function(a,e){return a.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(B5,arguments)},complement:function(){return this._applyCombination(L5,arguments)},monochromatic:function(){return this._applyCombination(q5,arguments)},splitcomplement:function(){return this._applyCombination(j5,arguments)},triad:function(){return this._applyCombination(Ev,[3])},tetrad:function(){return this._applyCombination(Ev,[4])}},pt.fromRatio=function(a,e){if(Mc(a)=="object"){var r={};for(var o in a)a.hasOwnProperty(o)&&(r[o]=o==="a"?a[o]:ul(a[o]));a=r}return pt(a,e)},pt.equals=function(a,e){return!(!a||!e)&&pt(a).toRgbString()==pt(e).toRgbString()},pt.random=function(){return pt.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},pt.mix=function(a,e,r){r=r===0?0:r||50;var o=pt(a).toRgb(),l=pt(e).toRgb(),c=r/100;return pt({r:(l.r-o.r)*c+o.r,g:(l.g-o.g)*c+o.g,b:(l.b-o.b)*c+o.b,a:(l.a-o.a)*c+o.a})},pt.readability=function(a,e){var r=pt(a),o=pt(e);return(Math.max(r.getLuminance(),o.getLuminance())+.05)/(Math.min(r.getLuminance(),o.getLuminance())+.05)},pt.isReadable=function(a,e,r){var o,l,c=pt.readability(a,e);switch(l=!1,(o=function(d){var p,g;return p=((d=d||{level:"AA",size:"small"}).level||"AA").toUpperCase(),g=(d.size||"small").toLowerCase(),p!=="AA"&&p!=="AAA"&&(p="AA"),g!=="small"&&g!=="large"&&(g="small"),{level:p,size:g}}(r)).level+o.size){case"AAsmall":case"AAAlarge":l=c>=4.5;break;case"AAlarge":l=c>=3;break;case"AAAsmall":l=c>=7}return l},pt.mostReadable=function(a,e,r){var o,l,c,d,p=null,g=0;l=(r=r||{}).includeFallbackColors,c=r.level,d=r.size;for(var y=0;y<e.length;y++)(o=pt.readability(a,e[y]))>g&&(g=o,p=pt(e[y]));return pt.isReadable(a,p,{level:c,size:d})||!l?p:(r.includeFallbackColors=!1,pt.mostReadable(a,["#fff","#000"],r))};var Gd=pt.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},H5=pt.hexNames=function(a){var e={};for(var r in a)a.hasOwnProperty(r)&&(e[a[r]]=r);return e}(Gd);function C_(a){return a=parseFloat(a),(isNaN(a)||a<0||a>1)&&(a=1),a}function re(a,e){(function(o){return typeof o=="string"&&o.indexOf(".")!=-1&&parseFloat(o)===1})(a)&&(a="100%");var r=function(o){return typeof o=="string"&&o.indexOf("%")!=-1}(a);return a=Math.min(e,Math.max(0,parseFloat(a))),r&&(a=parseInt(a*e,10)/100),Math.abs(a-e)<1e-6?1:a%e/parseFloat(e)}function Zc(a){return Math.min(1,Math.max(0,a))}function En(a){return parseInt(a,16)}function Gn(a){return a.length==1?"0"+a:""+a}function ul(a){return a<=1&&(a=100*a+"%"),a}function O_(a){return Math.round(255*parseFloat(a)).toString(16)}function Tv(a){return En(a)/255}var Sa,oc,sc,Hn=(oc="[\\s|\\(]+("+(Sa="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Sa+")[,|\\s]+("+Sa+")\\s*\\)?",sc="[\\s|\\(]+("+Sa+")[,|\\s]+("+Sa+")[,|\\s]+("+Sa+")[,|\\s]+("+Sa+")\\s*\\)?",{CSS_UNIT:new RegExp(Sa),rgb:new RegExp("rgb"+oc),rgba:new RegExp("rgba"+sc),hsl:new RegExp("hsl"+oc),hsla:new RegExp("hsla"+sc),hsv:new RegExp("hsv"+oc),hsva:new RegExp("hsva"+sc),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Hr(a){return!!Hn.CSS_UNIT.exec(a)}var G5=function(a,e){var r=(typeof a=="string"?parseInt(a):a)||0;if(r>=-5&&r<=5){var o=r,l=parseFloat(e),c=l+o*(l/5)*-1;return(c==0||c<=Number.EPSILON)&&(c=.1),{animationPeriod:c+"s"}}return{animationPeriod:e}},F5=function(a,e){var r=a||{},o="";switch(e){case"small":o="12px";break;case"medium":o="16px";break;case"large":o="20px";break;default:o=void 0}var l={};if(r.fontSize){var c=r.fontSize;l=function(d,p){var g={};for(var y in d)Object.prototype.hasOwnProperty.call(d,y)&&p.indexOf(y)<0&&(g[y]=d[y]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function"){var _=0;for(y=Object.getOwnPropertySymbols(d);_<y.length;_++)p.indexOf(y[_])<0&&Object.prototype.propertyIsEnumerable.call(d,y[_])&&(g[y[_]]=d[y[_]])}return g}(r,["fontSize"]),o=c}return{fontSize:o,styles:l}},Q5={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Y5=function(a){var e=a.className,r=a.text,o=a.textColor,l=a.staticText,c=a.style;return r?De.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(e||"").trim(),style:hr(hr(hr({},l&&Q5),o&&{color:o,mixBlendMode:"unset"}),c&&c)},typeof r=="string"&&r.length?r:"loading"):null},D_="rgb(50, 205, 50)";function K5(a,e){if(e===void 0&&(e=0),a.length===0)throw new Error("Input array cannot be empty!");var r=[];return function o(l,c){return c===void 0&&(c=0),r.push.apply(r,l),r.length<c&&o(r,c),r.slice(0,c)}(a,e)}Ie(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);pt(D_).toRgb();Array.from({length:4},function(a,e){return"--atom-phase".concat(e+1,"-rgb")});Ie(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(a,e){return"--commet-phase".concat(e+1,"-color")});Ie(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(a,e){return"--OP-annulus-phase".concat(e+1,"-color")});function yd(a){return a&&a.Math===Math&&a}Ie(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);yd(typeof window=="object"&&window)||yd(typeof self=="object"&&self)||yd(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(a,e){return"--OP-dotted-phase".concat(e+1,"-color")});Ie(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(a,e){return"--OP-spokes-phase".concat(e+1,"-color")});Ie(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(a,e){return"--OP-annulus-dual-sectors-phase".concat(e+1,"-color")});Ie(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(a,e){return["--OP-annulus-track-phase".concat(e+1,"-color"),"--OP-annulus-sector-phase".concat(e+1,"-color")]});Ie(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(a,e){return"--four-square-phase".concat(e+1,"-color")});Ie(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(a,e){return"--mosaic-phase".concat(e+1,"-color")});Ie(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(a,e){return"--riple-phase".concat(e+1,"-color")});Ie(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(a,e){return"--TD-pulsate-phase".concat(e+1,"-color")});Ie(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(a,e){return"--TD-brick-stack-phase".concat(e+1,"-color")});Ie(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(a,e){return"--TD-bob-phase".concat(e+1,"-color")});Ie(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(a,e){return"--TD-bounce-phase".concat(e+1,"-color")});Ie(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(a,e){return"--shape-phase".concat(e+1,"-color")});Ie(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);var lc=Array.from({length:4},function(a,e){return"--trophySpin-phase".concat(e+1,"-color")}),X5=function(a){var e,r=F5(a==null?void 0:a.style,a==null?void 0:a.size),o=r.styles,l=r.fontSize,c=a==null?void 0:a.easing,d=G5(a==null?void 0:a.speedPlus,"2.5s").animationPeriod,p=function(g){var y={},_=lc.length;if(g instanceof Array){for(var S=K5(g,_),C=0;C<S.length&&!(C>=4);C++)y[lc[C]]=S[C];return y}try{if(typeof g!="string")throw new Error("Color String expected");for(var U=0;U<_;U++)y[lc[U]]=g}catch(V){for(V instanceof Error?console.warn("[".concat(V.message,']: Received "').concat(typeof g,'" instead with value, ').concat(JSON.stringify(g))):console.warn("".concat(JSON.stringify(g)," received in <TrophySpin /> indicator cannot be processed. Using default instead!")),U=0;U<_;U++)y[lc[U]]=D_}return y}((e=a==null?void 0:a.color)!==null&&e!==void 0?e:"");return De.createElement("span",{className:"rli-d-i-b trophy-spin-rli-bounding-box",style:hr(hr(hr(hr(hr({},l&&{fontSize:l}),d&&{"--rli-animation-duration":d}),c&&{"--rli-animation-function":c}),p),o),role:"status","aria-live":"polite","aria-label":"Loading"},De.createElement("span",{className:"rli-d-i-b trophy-spin-indicator"},De.createElement("span",{className:"blade"}),De.createElement("span",{className:"blade"}),De.createElement("span",{className:"blade"}),De.createElement("span",{className:"blade"}),De.createElement("span",{className:"blade"}),De.createElement("span",{className:"blade"}),De.createElement("span",{className:"blade"}),De.createElement("span",{className:"blade"})),De.createElement(Y5,{staticText:!0,text:a==null?void 0:a.text,textColor:a==null?void 0:a.textColor}))};Ie(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(a,e){return"--slab-phase".concat(e+1,"-color")});Ie(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(a,e){return"--life-line-phase".concat(e+1,"-color")});const $5=()=>{const{data:a,error:e,isFail:r,isLoading:o,isSuccess:l}=u5({fetchFn:n5});return I.jsxs("div",{className:gd.shopContainer,children:[I.jsx("div",{className:gd.header,children:I.jsx("h1",{children:"Shop"})}),o&&I.jsx("div",{className:gd.loadingContainer,children:I.jsx(X5,{color:"#F45050",size:"large",text:"loading...",textColor:"#F45050"})}),r&&I.jsxs("p",{children:["Error: ",e.message]}),l&&I.jsx(w5,{keyboardsData:a})]})},Z5="_notFoundContainer_1g0u4_1",J5="_title_1g0u4_12",W5="_message_1g0u4_30",tR="_errorCode_1g0u4_37",eR="_returnButton_1g0u4_44",Ti={notFoundContainer:Z5,title:J5,message:W5,errorCode:tR,returnButton:eR},nR=()=>{const{"*":a}=Mv();return I.jsx(I.Fragment,{children:I.jsxs("div",{className:Ti.notFoundContainer,children:[I.jsx("div",{className:Ti.errorCode,children:"404"}),I.jsx("h1",{className:Ti.title,children:"Page Not Found"}),I.jsxs("p",{className:Ti.message,children:[`We couldn't find the page "/`,a||"",`" you're looking for. The page might have been moved or doesn't exist.`]}),I.jsxs("div",{className:Ti.actions,children:[I.jsx(Qr,{to:"/",className:Ti.returnButton,children:"Return to Home"}),I.jsx(Qr,{to:"/shopPage",className:Ti.returnButton,style:{marginLeft:"1rem"},children:"Browse Our Shop"})]})]})})},rR="_about_2oi6i_1",aR="_about_container_2oi6i_6",iR="_about_header_2oi6i_11",oR="_about_content_2oi6i_31",sR="_about_section_2oi6i_36",lR="_about_founders_2oi6i_47",uR="_about_founder_2oi6i_47",cR="_about_avatar_2oi6i_71",hR="_about_image_2oi6i_81",Pn={about:rR,about_container:aR,about_header:iR,about_content:oR,about_section:sR,about_founders:lR,about_founder:uR,about_avatar:cR,about_image:hR},fR="/ecommerce-store/assets/profile-Do8b9UqP.png",dR=()=>I.jsx("div",{className:Pn.about,children:I.jsxs("div",{className:Pn.about_container,children:[I.jsx("div",{className:Pn.about_header,children:I.jsx("h1",{children:"Our Story"})}),I.jsxs("div",{className:Pn.about_content,children:[I.jsxs("section",{className:Pn.about_section,children:[I.jsx("h2",{children:"How KeydUp Began"}),I.jsx("p",{children:"KeydUp was born in 2025 from the frustration of a Nology software developer student (& founder) Rajeev who couldn't find mechanical keyboards that matched both his typing needs and aesthetic preferences without breaking the bank."}),I.jsx("p",{children:"It all started in Rajeev's bedroom, where he spent weekends disassembling keyboards, testing different switches, and experimenting with custom keycaps. What began as a hobby quickly turned into a passion project when their classmates began requesting custom builds."})]}),I.jsxs("section",{className:Pn.about_section,children:[I.jsx("h2",{children:"Our Mission"}),I.jsx("p",{children:"At KeydUp, we believe that the tools you use daily should feel as good as they look. Our mission is to create mechanical keyboards that enhance productivity through superior typing feel while adding a touch of personality to your workspace."}),I.jsx("p",{children:"We're committed to using high-quality components, supporting the mechanical keyboard community, and making the customization process accessible to everyone—from programming professionals to gaming enthusiasts to creative writers."})]}),I.jsxs("section",{className:Pn.about_section,children:[I.jsx("h2",{children:"Growing Beyond Our Garage"}),I.jsx("p",{children:"From those humble beginnings in Rajeev's bedroom, We've shipped thousands of keyboards to customers in over 30 countries, but we maintain the same attention to detail that went into our first custom builds."}),I.jsx("p",{children:"Today, our workshop in Melbourne continues the tradition of hands-on quality control, with each keyboard tested and approved before shipping. While we've expanded our operation, we remain true to our founding principle: everyone deserves to experience the satisfaction of typing on a keyboard that feels like it was made just for them."})]}),I.jsx("section",{className:Pn.about_section,children:I.jsx("div",{className:Pn.about_founders,children:I.jsxs("div",{className:Pn.about_founder,children:[I.jsx("div",{className:Pn.about_avatar,children:I.jsx("img",{src:fR,alt:"Rajeev Balendra",className:Pn.about_image})}),I.jsx("h3",{children:"Rajeev Balendra"}),I.jsx("p",{children:"CEO & Founder"})]})})})]})]})}),mR="_productPage_1e7ey_1",pR="_productContent_1e7ey_14",gR="_productImage_1e7ey_20",yR="_productDetails_1e7ey_40",vR="_description_1e7ey_48",bR="_price_1e7ey_54",_R="_addToCartBtn_1e7ey_60",ER="_primary_1e7ey_77",TR="_errorMessage_1e7ey_90",AR="_successMessage_1e7ey_100",SR="_loading_1e7ey_110",xR="_error_1e7ey_90",wR="_variantSection_1e7ey_123",RR="_variantOptions_1e7ey_133",CR="_selected_1e7ey_154",OR="_quantitySection_1e7ey_162",DR="_buttonContainer_1e7ey_184",Ee={productPage:mR,productContent:pR,productImage:gR,productDetails:yR,description:vR,price:bR,addToCartBtn:_R,primary:ER,errorMessage:TR,successMessage:AR,loading:SR,error:xR,variantSection:wR,variantOptions:RR,selected:CR,quantitySection:OR,buttonContainer:DR},NR=()=>{const a=jo(),{id:e}=Mv(),[r,o]=Y.useState(null),[l,c]=Y.useState(!0),[d,p]=Y.useState(null),{addToCart:g}=Pc(),[y,_]=Y.useState(null),[S,C]=Y.useState(null),[U,V]=Y.useState(1),[L,H]=Y.useState(0);Y.useEffect(()=>{(async()=>{c(!0),_(null),C(null),V(1),H(0),r5(e).then(M=>o(M)).catch(M=>p(M.message)).finally(()=>c(!1))})()},[e]),Y.useEffect(()=>{if(!r||!y){H(0),C(null);return}const O=r.variants.find(R=>R.color===y),M=O?O.quantity:0,P=O?O.connection:null;H(M),C(P),V(R=>R<1?1:R>M?M:R)},[r,y]);const[Z,at]=Y.useState(""),[tt,ft]=Y.useState(""),lt=()=>{if(at(""),ft(""),!y){at("please select a color variation");return}const{id:O,name:M,price:P,imageUrl:R,description:Se}=r,ot={id:O+"-"+y,name:M,price:P,imageUrl:R,description:Se,selectedVariant:{color:y,connection:S},stock:L};g(ot,U),H(dt=>Math.max(0,dt-U)),ft(`Added ${U} × ${ot.name} to cart!`)};if(l)return I.jsx("div",{className:Ee.loading,children:"Loading..."});if(d)return I.jsxs("div",{className:Ee.error,children:["Error: ",d]});if(!r)return I.jsx("div",{className:Ee.error,children:"Product not found"});const _t=()=>{a("/ShopPage")},N=()=>{a("/Cart")},A=[...new Set(r.variants.map(O=>O.color))],x=y?`(${L} in stock${U>1?`, ${L-U} remaining`:""})`:"Select a color variant to see available stock";return I.jsxs("div",{className:Ee.productPage,children:[I.jsx("h1",{children:r.name}),I.jsxs("div",{className:Ee.productContent,children:[I.jsx("div",{className:Ee.productImage,children:I.jsx("img",{src:r.imageUrl,alt:r.name})}),I.jsxs("div",{className:Ee.productDetails,children:[I.jsx("p",{className:Ee.description,children:r.description}),I.jsxs("p",{className:Ee.price,children:["$",r.price]}),I.jsxs("div",{className:Ee.variantSection,children:[I.jsx("label",{children:"Color:"}),I.jsx("div",{className:Ee.variantOptions,children:A.map(O=>I.jsx("button",{onClick:()=>{_(O),at("")},className:y===O?Ee.selected:"",children:O},O))})]}),S&&I.jsxs("p",{children:["Connection: ",I.jsx("strong",{children:S})]}),I.jsxs("div",{className:Ee.quantitySection,children:[I.jsx("label",{htmlFor:"qty",children:"Qty:"}),I.jsx("input",{id:"qty",type:"number",value:U,onChange:O=>{const M=parseInt(O.target.value);console.log(M);let P=isNaN(M)?1:M;P>L&&(P=L),V(P)},min:"1",max:L,disabled:!y}),I.jsx("span",{children:x})]}),Z&&I.jsx("p",{className:Ee.errorMessage,children:Z}),tt&&I.jsx("p",{className:Ee.successMessage,children:tt}),I.jsxs("div",{className:Ee.buttonContainer,children:[I.jsx("button",{className:`${Ee.addToCartBtn} ${Ee.primary}`,onClick:lt,disabled:y&&L===0,children:"Add to Cart"}),I.jsx("button",{className:Ee.addToCartBtn,onClick:()=>_t(),children:"Keep Shopping"}),I.jsx("button",{className:Ee.addToCartBtn,onClick:()=>N(),children:"Go to cart"})]})]})]})]})},IR="_footer_13w2a_1",MR="_content_13w2a_9",kR="_copyright_13w2a_21",VR="_tagline_13w2a_27",uc={footer:IR,content:MR,copyright:kR,tagline:VR},PR=()=>I.jsx("footer",{className:uc.footer,children:I.jsxs("div",{className:uc.content,children:[I.jsx("p",{className:uc.copyright,children:"© 2025 KeydUp. All rights reserved."}),I.jsx("p",{className:uc.tagline,children:"Premium mechanical keyboards for typing enthusiasts"})]})}),UR="_cartPage_1vtwn_1",zR="_emptyCart_1vtwn_14",LR="_shopButton_1vtwn_26",jR="_cartItems_1vtwn_44",BR="_cartItem_1vtwn_44",qR="_itemImage_1vtwn_59",HR="_itemDetails_1vtwn_76",GR="_itemPrice_1vtwn_85",FR="_itemVariant_1vtwn_92",QR="_itemControls_1vtwn_103",YR="_quantityControl_1vtwn_110",KR="_quantityButton_1vtwn_118",XR="_quantityValue_1vtwn_139",$R="_itemTotal_1vtwn_150",ZR="_cartSummary_1vtwn_179",JR="_summaryRow_1vtwn_188",WR="_totalPrice_1vtwn_195",tC="_cartActions_1vtwn_201",eC="_clearCartButton_1vtwn_207",nC="_checkoutButton_1vtwn_223",rC="_continueShopping_1vtwn_240",ne={cartPage:UR,emptyCart:zR,shopButton:LR,cartItems:jR,cartItem:BR,itemImage:qR,itemDetails:HR,itemPrice:GR,itemVariant:FR,itemControls:QR,quantityControl:YR,quantityButton:KR,quantityValue:XR,itemTotal:$R,cartSummary:ZR,summaryRow:JR,totalPrice:WR,cartActions:tC,clearCartButton:eC,checkoutButton:nC,continueShopping:rC},aC=()=>{const a=jo(),{cartItems:e,updateQuantity:r,clearCart:o}=Pc();let l=0;return e.forEach(c=>{l+=c.price*c.quantity}),e.length===0?I.jsxs("div",{className:ne.cartPage,children:[I.jsx("h1",{children:"Your Cart"}),I.jsxs("div",{className:ne.emptyCart,children:[I.jsx("p",{children:"Your cart is currently empty."}),I.jsx(Qr,{to:"/shopPage",className:ne.shopButton,children:"Continue Shopping"})]})]}):I.jsxs("div",{className:ne.cartPage,children:[I.jsx("h1",{children:"Your Cart"}),I.jsx("div",{className:ne.cartItems,children:e.map(c=>I.jsxs("div",{className:ne.cartItem,children:[I.jsx("div",{className:ne.itemImage,children:I.jsx("img",{src:c.imageUrl,alt:c.name})}),I.jsxs("div",{className:ne.itemDetails,children:[I.jsx("h3",{children:c.name}),I.jsxs("p",{className:ne.itemPrice,children:["$",c.price.toFixed(2)]}),c.selectedVariant&&I.jsxs("p",{className:ne.itemVariant,children:[I.jsxs("span",{children:["Color:"," ",I.jsx("span",{style:{fontWeight:"600"},children:c.selectedVariant.color})]}),c.selectedVariant.connection&&I.jsxs("span",{children:[", Connection:"," ",I.jsx("span",{style:{fontWeight:"600"},children:c.selectedVariant.connection})]})]})]}),I.jsx("div",{className:ne.itemControls,children:I.jsxs("div",{className:ne.quantityControl,children:[I.jsx("button",{className:ne.quantityButton,onClick:()=>r(c.id,c.quantity>1?c.quantity-1:1),disabled:c.quantity<=1,children:"-"}),I.jsx("span",{className:ne.quantityValue,children:c.quantity}),I.jsx("button",{className:ne.quantityButton,onClick:()=>r(c.id,c.quantity+1),disabled:c.quantity>=c.stock,children:"+"})]})}),I.jsxs("div",{className:ne.itemTotal,children:["subtotal: $",(c.price*c.quantity).toFixed(2)," "]})]},c.id))}),I.jsxs("div",{className:ne.cartSummary,children:[I.jsxs("div",{className:`${ne.summaryRow} ${ne.totalRow}`,children:[I.jsx("span",{children:"Total:"}),I.jsxs("span",{className:ne.totalPrice,children:[I.jsx("span",{children:"AUD "}),"$",l.toFixed(2)]})]}),I.jsxs("div",{className:ne.cartActions,children:[I.jsx("button",{className:ne.clearCartButton,onClick:o,children:"Clear Cart"}),I.jsx("button",{className:ne.checkoutButton,onClick:()=>a("/payment"),children:"Proceed to Checkout"})]})]}),I.jsx("div",{className:ne.continueShopping,children:I.jsx(Qr,{to:"/shopPage",children:"Continue Shopping"})})]})},iC="_payButton_iz7rq_8",oC="_submitButton_iz7rq_23",Av={payButton:iC,submitButton:oC},sC=()=>{const a=jo(),{cartItems:e}=Pc();let r=0;return e.forEach(({price:o,quantity:l})=>r+=o*l),I.jsxs("div",{style:{maxWidth:400,margin:"auto",padding:20},children:[I.jsx("h1",{children:"Checkout"}),I.jsxs("p",{children:[I.jsx("strong",{children:"Total:"})," $",r.toFixed(2)]}),I.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:20},children:[I.jsx("button",{className:Av.submitButton,type:"button",onClick:()=>a("/cart"),children:"Back to Cart"}),I.jsxs("button",{className:Av.payButton,type:"submit",disabled:!e.length===0,onClick:()=>a("/success"),children:["Pay $",r.toFixed(2)]})]})]})};function lC(){return I.jsx("div",{className:"appContainer",children:I.jsx(n2,{children:I.jsxs(xT,{children:[I.jsx(r2,{}),I.jsx("main",{children:I.jsxs(eT,{children:[I.jsx(xa,{path:"/",element:I.jsx(l5,{})}),I.jsx(xa,{path:"/ShopPage",element:I.jsx($5,{})}),I.jsx(xa,{path:"/AboutPage",element:I.jsx(dR,{})}),I.jsx(xa,{path:"/product/:id",element:I.jsx(NR,{})}),I.jsx(xa,{path:"/cart",element:I.jsx(aC,{})}),I.jsx(xa,{path:"/payment",element:I.jsx(sC,{})}),I.jsx(xa,{path:"/*",element:I.jsx(nR,{})})]})}),I.jsx(PR,{})]})})})}hE.createRoot(document.getElementById("root")).render(I.jsx(Y.StrictMode,{children:I.jsx(lC,{})}));
