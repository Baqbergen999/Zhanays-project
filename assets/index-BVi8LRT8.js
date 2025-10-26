(function(){const F=document.createElement("link").relList;if(F&&F.supports&&F.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))ee(D);new MutationObserver(D=>{for(const Y of D)if(Y.type==="childList")for(const X of Y.addedNodes)X.tagName==="LINK"&&X.rel==="modulepreload"&&ee(X)}).observe(document,{childList:!0,subtree:!0});function h(D){const Y={};return D.integrity&&(Y.integrity=D.integrity),D.referrerPolicy&&(Y.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?Y.credentials="include":D.crossOrigin==="anonymous"?Y.credentials="omit":Y.credentials="same-origin",Y}function ee(D){if(D.ep)return;D.ep=!0;const Y=h(D);fetch(D.href,Y)}})();var So={exports:{}},xr={},Eo={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Su;function Pd(){if(Su)return M;Su=1;var N=Symbol.for("react.element"),F=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),X=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),je=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),G=Symbol.iterator;function W(d){return d===null||typeof d!="object"?null:(d=G&&d[G]||d["@@iterator"],typeof d=="function"?d:null)}var _e={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Re=Object.assign,Z={};function Q(d,v,O){this.props=d,this.context=v,this.refs=Z,this.updater=O||_e}Q.prototype.isReactComponent={},Q.prototype.setState=function(d,v){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,v,"setState")},Q.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function Ke(){}Ke.prototype=Q.prototype;function U(d,v,O){this.props=d,this.context=v,this.refs=Z,this.updater=O||_e}var fe=U.prototype=new Ke;fe.constructor=U,Re(fe,Q.prototype),fe.isPureReactComponent=!0;var Ne=Array.isArray,tt=Object.prototype.hasOwnProperty,Pe={current:null},De={key:!0,ref:!0,__self:!0,__source:!0};function Ye(d,v,O){var I,V={},B=null,J=null;if(v!=null)for(I in v.ref!==void 0&&(J=v.ref),v.key!==void 0&&(B=""+v.key),v)tt.call(v,I)&&!De.hasOwnProperty(I)&&(V[I]=v[I]);var q=arguments.length-2;if(q===1)V.children=O;else if(1<q){for(var re=Array(q),He=0;He<q;He++)re[He]=arguments[He+2];V.children=re}if(d&&d.defaultProps)for(I in q=d.defaultProps,q)V[I]===void 0&&(V[I]=q[I]);return{$$typeof:N,type:d,key:B,ref:J,props:V,_owner:Pe.current}}function Ct(d,v){return{$$typeof:N,type:d.type,key:v,ref:d.ref,props:d.props,_owner:d._owner}}function vt(d){return typeof d=="object"&&d!==null&&d.$$typeof===N}function qt(d){var v={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(O){return v[O]})}var ct=/\/+/g;function Be(d,v){return typeof d=="object"&&d!==null&&d.key!=null?qt(""+d.key):v.toString(36)}function nt(d,v,O,I,V){var B=typeof d;(B==="undefined"||B==="boolean")&&(d=null);var J=!1;if(d===null)J=!0;else switch(B){case"string":case"number":J=!0;break;case"object":switch(d.$$typeof){case N:case F:J=!0}}if(J)return J=d,V=V(J),d=I===""?"."+Be(J,0):I,Ne(V)?(O="",d!=null&&(O=d.replace(ct,"$&/")+"/"),nt(V,v,O,"",function(He){return He})):V!=null&&(vt(V)&&(V=Ct(V,O+(!V.key||J&&J.key===V.key?"":(""+V.key).replace(ct,"$&/")+"/")+d)),v.push(V)),1;if(J=0,I=I===""?".":I+":",Ne(d))for(var q=0;q<d.length;q++){B=d[q];var re=I+Be(B,q);J+=nt(B,v,O,re,V)}else if(re=W(d),typeof re=="function")for(d=re.call(d),q=0;!(B=d.next()).done;)B=B.value,re=I+Be(B,q++),J+=nt(B,v,O,re,V);else if(B==="object")throw v=String(d),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.");return J}function dt(d,v,O){if(d==null)return d;var I=[],V=0;return nt(d,I,"","",function(B){return v.call(O,B,V++)}),I}function Fe(d){if(d._status===-1){var v=d._result;v=v(),v.then(function(O){(d._status===0||d._status===-1)&&(d._status=1,d._result=O)},function(O){(d._status===0||d._status===-1)&&(d._status=2,d._result=O)}),d._status===-1&&(d._status=0,d._result=v)}if(d._status===1)return d._result.default;throw d._result}var ae={current:null},k={transition:null},T={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:k,ReactCurrentOwner:Pe};function E(){throw Error("act(...) is not supported in production builds of React.")}return M.Children={map:dt,forEach:function(d,v,O){dt(d,function(){v.apply(this,arguments)},O)},count:function(d){var v=0;return dt(d,function(){v++}),v},toArray:function(d){return dt(d,function(v){return v})||[]},only:function(d){if(!vt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},M.Component=Q,M.Fragment=h,M.Profiler=D,M.PureComponent=U,M.StrictMode=ee,M.Suspense=$,M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,M.act=E,M.cloneElement=function(d,v,O){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var I=Re({},d.props),V=d.key,B=d.ref,J=d._owner;if(v!=null){if(v.ref!==void 0&&(B=v.ref,J=Pe.current),v.key!==void 0&&(V=""+v.key),d.type&&d.type.defaultProps)var q=d.type.defaultProps;for(re in v)tt.call(v,re)&&!De.hasOwnProperty(re)&&(I[re]=v[re]===void 0&&q!==void 0?q[re]:v[re])}var re=arguments.length-2;if(re===1)I.children=O;else if(1<re){q=Array(re);for(var He=0;He<re;He++)q[He]=arguments[He+2];I.children=q}return{$$typeof:N,type:d.type,key:V,ref:B,props:I,_owner:J}},M.createContext=function(d){return d={$$typeof:X,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:Y,_context:d},d.Consumer=d},M.createElement=Ye,M.createFactory=function(d){var v=Ye.bind(null,d);return v.type=d,v},M.createRef=function(){return{current:null}},M.forwardRef=function(d){return{$$typeof:ie,render:d}},M.isValidElement=vt,M.lazy=function(d){return{$$typeof:ye,_payload:{_status:-1,_result:d},_init:Fe}},M.memo=function(d,v){return{$$typeof:je,type:d,compare:v===void 0?null:v}},M.startTransition=function(d){var v=k.transition;k.transition={};try{d()}finally{k.transition=v}},M.unstable_act=E,M.useCallback=function(d,v){return ae.current.useCallback(d,v)},M.useContext=function(d){return ae.current.useContext(d)},M.useDebugValue=function(){},M.useDeferredValue=function(d){return ae.current.useDeferredValue(d)},M.useEffect=function(d,v){return ae.current.useEffect(d,v)},M.useId=function(){return ae.current.useId()},M.useImperativeHandle=function(d,v,O){return ae.current.useImperativeHandle(d,v,O)},M.useInsertionEffect=function(d,v){return ae.current.useInsertionEffect(d,v)},M.useLayoutEffect=function(d,v){return ae.current.useLayoutEffect(d,v)},M.useMemo=function(d,v){return ae.current.useMemo(d,v)},M.useReducer=function(d,v,O){return ae.current.useReducer(d,v,O)},M.useRef=function(d){return ae.current.useRef(d)},M.useState=function(d){return ae.current.useState(d)},M.useSyncExternalStore=function(d,v,O){return ae.current.useSyncExternalStore(d,v,O)},M.useTransition=function(){return ae.current.useTransition()},M.version="18.3.1",M}var Eu;function Po(){return Eu||(Eu=1,Eo.exports=Pd()),Eo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cu;function Ld(){if(Cu)return xr;Cu=1;var N=Po(),F=Symbol.for("react.element"),h=Symbol.for("react.fragment"),ee=Object.prototype.hasOwnProperty,D=N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y={key:!0,ref:!0,__self:!0,__source:!0};function X(ie,$,je){var ye,G={},W=null,_e=null;je!==void 0&&(W=""+je),$.key!==void 0&&(W=""+$.key),$.ref!==void 0&&(_e=$.ref);for(ye in $)ee.call($,ye)&&!Y.hasOwnProperty(ye)&&(G[ye]=$[ye]);if(ie&&ie.defaultProps)for(ye in $=ie.defaultProps,$)G[ye]===void 0&&(G[ye]=$[ye]);return{$$typeof:F,type:ie,key:W,ref:_e,props:G,_owner:D.current}}return xr.Fragment=h,xr.jsx=X,xr.jsxs=X,xr}var zu;function Td(){return zu||(zu=1,So.exports=Ld()),So.exports}var s=Td(),sn=Po(),Pl={},Co={exports:{}},Ve={},zo={exports:{}},_o={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _u;function Rd(){return _u||(_u=1,(function(N){function F(k,T){var E=k.length;k.push(T);e:for(;0<E;){var d=E-1>>>1,v=k[d];if(0<D(v,T))k[d]=T,k[E]=v,E=d;else break e}}function h(k){return k.length===0?null:k[0]}function ee(k){if(k.length===0)return null;var T=k[0],E=k.pop();if(E!==T){k[0]=E;e:for(var d=0,v=k.length,O=v>>>1;d<O;){var I=2*(d+1)-1,V=k[I],B=I+1,J=k[B];if(0>D(V,E))B<v&&0>D(J,V)?(k[d]=J,k[B]=E,d=B):(k[d]=V,k[I]=E,d=I);else if(B<v&&0>D(J,E))k[d]=J,k[B]=E,d=B;else break e}}return T}function D(k,T){var E=k.sortIndex-T.sortIndex;return E!==0?E:k.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var Y=performance;N.unstable_now=function(){return Y.now()}}else{var X=Date,ie=X.now();N.unstable_now=function(){return X.now()-ie}}var $=[],je=[],ye=1,G=null,W=3,_e=!1,Re=!1,Z=!1,Q=typeof setTimeout=="function"?setTimeout:null,Ke=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function fe(k){for(var T=h(je);T!==null;){if(T.callback===null)ee(je);else if(T.startTime<=k)ee(je),T.sortIndex=T.expirationTime,F($,T);else break;T=h(je)}}function Ne(k){if(Z=!1,fe(k),!Re)if(h($)!==null)Re=!0,Fe(tt);else{var T=h(je);T!==null&&ae(Ne,T.startTime-k)}}function tt(k,T){Re=!1,Z&&(Z=!1,Ke(Ye),Ye=-1),_e=!0;var E=W;try{for(fe(T),G=h($);G!==null&&(!(G.expirationTime>T)||k&&!qt());){var d=G.callback;if(typeof d=="function"){G.callback=null,W=G.priorityLevel;var v=d(G.expirationTime<=T);T=N.unstable_now(),typeof v=="function"?G.callback=v:G===h($)&&ee($),fe(T)}else ee($);G=h($)}if(G!==null)var O=!0;else{var I=h(je);I!==null&&ae(Ne,I.startTime-T),O=!1}return O}finally{G=null,W=E,_e=!1}}var Pe=!1,De=null,Ye=-1,Ct=5,vt=-1;function qt(){return!(N.unstable_now()-vt<Ct)}function ct(){if(De!==null){var k=N.unstable_now();vt=k;var T=!0;try{T=De(!0,k)}finally{T?Be():(Pe=!1,De=null)}}else Pe=!1}var Be;if(typeof U=="function")Be=function(){U(ct)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,dt=nt.port2;nt.port1.onmessage=ct,Be=function(){dt.postMessage(null)}}else Be=function(){Q(ct,0)};function Fe(k){De=k,Pe||(Pe=!0,Be())}function ae(k,T){Ye=Q(function(){k(N.unstable_now())},T)}N.unstable_IdlePriority=5,N.unstable_ImmediatePriority=1,N.unstable_LowPriority=4,N.unstable_NormalPriority=3,N.unstable_Profiling=null,N.unstable_UserBlockingPriority=2,N.unstable_cancelCallback=function(k){k.callback=null},N.unstable_continueExecution=function(){Re||_e||(Re=!0,Fe(tt))},N.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ct=0<k?Math.floor(1e3/k):5},N.unstable_getCurrentPriorityLevel=function(){return W},N.unstable_getFirstCallbackNode=function(){return h($)},N.unstable_next=function(k){switch(W){case 1:case 2:case 3:var T=3;break;default:T=W}var E=W;W=T;try{return k()}finally{W=E}},N.unstable_pauseExecution=function(){},N.unstable_requestPaint=function(){},N.unstable_runWithPriority=function(k,T){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var E=W;W=k;try{return T()}finally{W=E}},N.unstable_scheduleCallback=function(k,T,E){var d=N.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?d+E:d):E=d,k){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=E+v,k={id:ye++,callback:T,priorityLevel:k,startTime:E,expirationTime:v,sortIndex:-1},E>d?(k.sortIndex=E,F(je,k),h($)===null&&k===h(je)&&(Z?(Ke(Ye),Ye=-1):Z=!0,ae(Ne,E-d))):(k.sortIndex=v,F($,k),Re||_e||(Re=!0,Fe(tt))),k},N.unstable_shouldYield=qt,N.unstable_wrapCallback=function(k){var T=W;return function(){var E=W;W=T;try{return k.apply(this,arguments)}finally{W=E}}}})(_o)),_o}var Pu;function Dd(){return Pu||(Pu=1,zo.exports=Rd()),zo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function Fd(){if(Lu)return Ve;Lu=1;var N=Po(),F=Dd();function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ee=new Set,D={};function Y(e,t){X(e,t),X(e+"Capture",t)}function X(e,t){for(D[e]=t,e=0;e<t.length;e++)ee.add(t[e])}var ie=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$=Object.prototype.hasOwnProperty,je=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ye={},G={};function W(e){return $.call(G,e)?!0:$.call(ye,e)?!1:je.test(e)?G[e]=!0:(ye[e]=!0,!1)}function _e(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Re(e,t,n,r){if(t===null||typeof t>"u"||_e(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Z(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new Z(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Q[t]=new Z(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new Z(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new Z(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new Z(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new Z(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new Z(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new Z(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new Z(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ke=/[\-:]([a-z])/g;function U(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ke,U);Q[t]=new Z(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ke,U);Q[t]=new Z(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ke,U);Q[t]=new Z(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new Z(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new Z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new Z(e,1,!1,e.toLowerCase(),null,!0,!0)});function fe(e,t,n,r){var l=Q.hasOwnProperty(t)?Q[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Re(t,n,l,r)&&(n=null),r||l===null?W(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ne=N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tt=Symbol.for("react.element"),Pe=Symbol.for("react.portal"),De=Symbol.for("react.fragment"),Ye=Symbol.for("react.strict_mode"),Ct=Symbol.for("react.profiler"),vt=Symbol.for("react.provider"),qt=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),Be=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),k=Symbol.iterator;function T(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var E=Object.assign,d;function v(e){if(d===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var O=!1;function I(e,t){if(!e||O)return"";O=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var r=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){r=m}e.call(t.prototype)}else{try{throw Error()}catch(m){r=m}e()}}catch(m){if(m&&r&&typeof m.stack=="string"){for(var l=m.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{O=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?v(e):""}function V(e){switch(e.tag){case 5:return v(e.type);case 16:return v("Lazy");case 13:return v("Suspense");case 19:return v("SuspenseList");case 0:case 2:case 15:return e=I(e.type,!1),e;case 11:return e=I(e.type.render,!1),e;case 1:return e=I(e.type,!0),e;default:return""}}function B(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case De:return"Fragment";case Pe:return"Portal";case Ct:return"Profiler";case Ye:return"StrictMode";case Be:return"Suspense";case nt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qt:return(e.displayName||"Context")+".Consumer";case vt:return(e._context.displayName||"Context")+".Provider";case ct:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dt:return t=e.displayName||null,t!==null?t:B(e.type)||"Memo";case Fe:t=e._payload,e=e._init;try{return B(e(t))}catch{}}return null}function J(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===Ye?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function re(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function He(e){var t=re(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yr(e){e._valueTracker||(e._valueTracker=He(e))}function Lo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=re(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ll(e,t){var n=t.checked;return E({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function To(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=q(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ro(e,t){t=t.checked,t!=null&&fe(e,"checked",t,!1)}function Tl(e,t){Ro(e,t);var n=q(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Rl(e,t.type,q(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Do(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Rl(e,t,n){(t!=="number"||wr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dn=Array.isArray;function an(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+q(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Dl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return E({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(Dn(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:q(n)}}function Oo(e,t){var n=q(t.value),r=q(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Mo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Io(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Io(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,Uo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Du=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){Du.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function Ao(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function Vo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ao(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Fu=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ol(e,t){if(t){if(Fu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function Ml(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Il=null;function Ul(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,un=null,cn=null;function Bo(e){if(e=rr(e)){if(typeof Al!="function")throw Error(h(280));var t=e.stateNode;t&&(t=Wr(t),Al(e.stateNode,e.type,t))}}function Ho(e){un?cn?cn.push(e):cn=[e]:un=e}function $o(){if(un){var e=un,t=cn;if(cn=un=null,Bo(e),t)for(e=0;e<t.length;e++)Bo(t[e])}}function Wo(e,t){return e(t)}function Qo(){}var Vl=!1;function qo(e,t,n){if(Vl)return e(t,n);Vl=!0;try{return Wo(e,t,n)}finally{Vl=!1,(un!==null||cn!==null)&&(Qo(),$o())}}function Mn(e,t){var n=e.stateNode;if(n===null)return null;var r=Wr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var Bl=!1;if(ie)try{var In={};Object.defineProperty(In,"passive",{get:function(){Bl=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{Bl=!1}function Ou(e,t,n,r,l,i,o,a,u){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(x){this.onError(x)}}var Un=!1,jr=null,Nr=!1,Hl=null,Mu={onError:function(e){Un=!0,jr=e}};function Iu(e,t,n,r,l,i,o,a,u){Un=!1,jr=null,Ou.apply(Mu,arguments)}function Uu(e,t,n,r,l,i,o,a,u){if(Iu.apply(this,arguments),Un){if(Un){var m=jr;Un=!1,jr=null}else throw Error(h(198));Nr||(Nr=!0,Hl=m)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ko(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yo(e){if(Kt(e)!==e)throw Error(h(188))}function Au(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Yo(l),e;if(i===r)return Yo(l),t;i=i.sibling}throw Error(h(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function Xo(e){return e=Au(e),e!==null?Go(e):null}function Go(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Go(e);if(t!==null)return t;e=e.sibling}return null}var Zo=F.unstable_scheduleCallback,Jo=F.unstable_cancelCallback,Vu=F.unstable_shouldYield,Bu=F.unstable_requestPaint,ce=F.unstable_now,Hu=F.unstable_getCurrentPriorityLevel,$l=F.unstable_ImmediatePriority,bo=F.unstable_UserBlockingPriority,Sr=F.unstable_NormalPriority,$u=F.unstable_LowPriority,es=F.unstable_IdlePriority,Er=null,ft=null;function Wu(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Er,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:Ku,Qu=Math.log,qu=Math.LN2;function Ku(e){return e>>>=0,e===0?32:31-(Qu(e)/qu|0)|0}var Cr=64,zr=4194304;function An(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _r(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=An(a):(i&=o,i!==0&&(r=An(i)))}else o=n&~l,o!==0?r=An(o):i!==0&&(r=An(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),l=1<<n,r|=e[n],t&=~l;return r}function Yu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-rt(i),a=1<<o,u=l[o];u===-1?((a&n)===0||(a&r)!==0)&&(l[o]=Yu(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function Wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ts(){var e=Cr;return Cr<<=1,(Cr&4194240)===0&&(Cr=64),e}function Ql(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function Gu(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-rt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ql(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var K=0;function ns(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var rs,Kl,ls,is,os,Yl=!1,Pr=[],zt=null,_t=null,Pt=null,Bn=new Map,Hn=new Map,Lt=[],Zu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ss(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function $n(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=rr(t),t!==null&&Kl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ju(e,t,n,r,l){switch(t){case"focusin":return zt=$n(zt,e,t,n,r,l),!0;case"dragenter":return _t=$n(_t,e,t,n,r,l),!0;case"mouseover":return Pt=$n(Pt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Bn.set(i,$n(Bn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Hn.set(i,$n(Hn.get(i)||null,e,t,n,r,l)),!0}return!1}function as(e){var t=Yt(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ko(n),t!==null){e.blockedOn=t,os(e.priority,function(){ls(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Il=r,n.target.dispatchEvent(r),Il=null}else return t=rr(n),t!==null&&Kl(t),e.blockedOn=n,!1;t.shift()}return!0}function us(e,t,n){Lr(e)&&n.delete(t)}function bu(){Yl=!1,zt!==null&&Lr(zt)&&(zt=null),_t!==null&&Lr(_t)&&(_t=null),Pt!==null&&Lr(Pt)&&(Pt=null),Bn.forEach(us),Hn.forEach(us)}function Wn(e,t){e.blockedOn===t&&(e.blockedOn=null,Yl||(Yl=!0,F.unstable_scheduleCallback(F.unstable_NormalPriority,bu)))}function Qn(e){function t(l){return Wn(l,e)}if(0<Pr.length){Wn(Pr[0],e);for(var n=1;n<Pr.length;n++){var r=Pr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&Wn(zt,e),_t!==null&&Wn(_t,e),Pt!==null&&Wn(Pt,e),Bn.forEach(t),Hn.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)as(n),n.blockedOn===null&&Lt.shift()}var dn=Ne.ReactCurrentBatchConfig,Tr=!0;function ec(e,t,n,r){var l=K,i=dn.transition;dn.transition=null;try{K=1,Xl(e,t,n,r)}finally{K=l,dn.transition=i}}function tc(e,t,n,r){var l=K,i=dn.transition;dn.transition=null;try{K=4,Xl(e,t,n,r)}finally{K=l,dn.transition=i}}function Xl(e,t,n,r){if(Tr){var l=Gl(e,t,n,r);if(l===null)pi(e,t,r,Rr,n),ss(e,r);else if(Ju(l,e,t,n,r))r.stopPropagation();else if(ss(e,r),t&4&&-1<Zu.indexOf(e)){for(;l!==null;){var i=rr(l);if(i!==null&&rs(i),i=Gl(e,t,n,r),i===null&&pi(e,t,r,Rr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else pi(e,t,r,null,n)}}var Rr=null;function Gl(e,t,n,r){if(Rr=null,e=Ul(r),e=Yt(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ko(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Rr=e,null}function cs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hu()){case $l:return 1;case bo:return 4;case Sr:case $u:return 16;case es:return 536870912;default:return 16}default:return 16}}var Tt=null,Zl=null,Dr=null;function ds(){if(Dr)return Dr;var e,t=Zl,n=t.length,r,l="value"in Tt?Tt.value:Tt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Dr=l.slice(e,1<r?1-r:void 0)}function Fr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Or(){return!0}function fs(){return!1}function $e(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Or:fs,this.isPropagationStopped=fs,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=$e(fn),qn=E({},fn,{view:0,detail:0}),nc=$e(qn),bl,ei,Kn,Mr=E({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ni,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kn&&(Kn&&e.type==="mousemove"?(bl=e.screenX-Kn.screenX,ei=e.screenY-Kn.screenY):ei=bl=0,Kn=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:ei}}),ps=$e(Mr),rc=E({},Mr,{dataTransfer:0}),lc=$e(rc),ic=E({},qn,{relatedTarget:0}),ti=$e(ic),oc=E({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),sc=$e(oc),ac=E({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uc=$e(ac),cc=E({},fn,{data:0}),ms=$e(cc),dc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pc[e])?!!t[e]:!1}function ni(){return mc}var hc=E({},qn,{key:function(e){if(e.key){var t=dc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ni,charCode:function(e){return e.type==="keypress"?Fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gc=$e(hc),vc=E({},Mr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hs=$e(vc),xc=E({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ni}),yc=$e(xc),wc=E({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),kc=$e(wc),jc=E({},Mr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nc=$e(jc),Sc=[9,13,27,32],ri=ie&&"CompositionEvent"in window,Yn=null;ie&&"documentMode"in document&&(Yn=document.documentMode);var Ec=ie&&"TextEvent"in window&&!Yn,gs=ie&&(!ri||Yn&&8<Yn&&11>=Yn),vs=" ",xs=!1;function ys(e,t){switch(e){case"keyup":return Sc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ws(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function Cc(e,t){switch(e){case"compositionend":return ws(t);case"keypress":return t.which!==32?null:(xs=!0,vs);case"textInput":return e=t.data,e===vs&&xs?null:e;default:return null}}function zc(e,t){if(pn)return e==="compositionend"||!ri&&ys(e,t)?(e=ds(),Dr=Zl=Tt=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gs&&t.locale!=="ko"?null:t.data;default:return null}}var _c={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_c[e.type]:t==="textarea"}function js(e,t,n,r){Ho(r),t=Br(t,"onChange"),0<t.length&&(n=new Jl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xn=null,Gn=null;function Pc(e){Vs(e,0)}function Ir(e){var t=xn(e);if(Lo(t))return e}function Lc(e,t){if(e==="change")return t}var Ns=!1;if(ie){var li;if(ie){var ii="oninput"in document;if(!ii){var Ss=document.createElement("div");Ss.setAttribute("oninput","return;"),ii=typeof Ss.oninput=="function"}li=ii}else li=!1;Ns=li&&(!document.documentMode||9<document.documentMode)}function Es(){Xn&&(Xn.detachEvent("onpropertychange",Cs),Gn=Xn=null)}function Cs(e){if(e.propertyName==="value"&&Ir(Gn)){var t=[];js(t,Gn,e,Ul(e)),qo(Pc,t)}}function Tc(e,t,n){e==="focusin"?(Es(),Xn=t,Gn=n,Xn.attachEvent("onpropertychange",Cs)):e==="focusout"&&Es()}function Rc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ir(Gn)}function Dc(e,t){if(e==="click")return Ir(t)}function Fc(e,t){if(e==="input"||e==="change")return Ir(t)}function Oc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:Oc;function Zn(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!$.call(t,l)||!lt(e[l],t[l]))return!1}return!0}function zs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _s(e,t){var n=zs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zs(n)}}function Ps(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ps(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ls(){for(var e=window,t=wr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wr(e.document)}return t}function oi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mc(e){var t=Ls(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ps(n.ownerDocument.documentElement,n)){if(r!==null&&oi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=_s(n,i);var o=_s(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ic=ie&&"documentMode"in document&&11>=document.documentMode,mn=null,si=null,Jn=null,ai=!1;function Ts(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ai||mn==null||mn!==wr(r)||(r=mn,"selectionStart"in r&&oi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jn&&Zn(Jn,r)||(Jn=r,r=Br(si,"onSelect"),0<r.length&&(t=new Jl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mn)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hn={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},ui={},Rs={};ie&&(Rs=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function Ar(e){if(ui[e])return ui[e];if(!hn[e])return e;var t=hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rs)return ui[e]=t[n];return e}var Ds=Ar("animationend"),Fs=Ar("animationiteration"),Os=Ar("animationstart"),Ms=Ar("transitionend"),Is=new Map,Us="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){Is.set(e,t),Y(t,[e])}for(var ci=0;ci<Us.length;ci++){var di=Us[ci],Uc=di.toLowerCase(),Ac=di[0].toUpperCase()+di.slice(1);Rt(Uc,"on"+Ac)}Rt(Ds,"onAnimationEnd"),Rt(Fs,"onAnimationIteration"),Rt(Os,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(Ms,"onTransitionEnd"),X("onMouseEnter",["mouseout","mouseover"]),X("onMouseLeave",["mouseout","mouseover"]),X("onPointerEnter",["pointerout","pointerover"]),X("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vc=new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));function As(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Uu(r,t,void 0,e),e.currentTarget=null}function Vs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,m=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;As(l,a,m),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,m=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;As(l,a,m),i=u}}}if(Nr)throw e=Hl,Nr=!1,Hl=null,e}function te(e,t){var n=t[yi];n===void 0&&(n=t[yi]=new Set);var r=e+"__bubble";n.has(r)||(Bs(t,e,2,!1),n.add(r))}function fi(e,t,n){var r=0;t&&(r|=4),Bs(n,e,r,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Vr]){e[Vr]=!0,ee.forEach(function(n){n!=="selectionchange"&&(Vc.has(n)||fi(n,!1,e),fi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vr]||(t[Vr]=!0,fi("selectionchange",!1,t))}}function Bs(e,t,n,r){switch(cs(t)){case 1:var l=ec;break;case 4:l=tc;break;default:l=Xl}n=l.bind(null,t,n,e),l=void 0,!Bl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function pi(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;a!==null;){if(o=Yt(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}qo(function(){var m=i,x=Ul(n),y=[];e:{var g=Is.get(e);if(g!==void 0){var j=Jl,C=e;switch(e){case"keypress":if(Fr(n)===0)break e;case"keydown":case"keyup":j=gc;break;case"focusin":C="focus",j=ti;break;case"focusout":C="blur",j=ti;break;case"beforeblur":case"afterblur":j=ti;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=lc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=yc;break;case Ds:case Fs:case Os:j=sc;break;case Ms:j=kc;break;case"scroll":j=nc;break;case"wheel":j=Nc;break;case"copy":case"cut":case"paste":j=uc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=hs}var z=(t&4)!==0,de=!z&&e==="scroll",f=z?g!==null?g+"Capture":null:g;z=[];for(var c=m,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=Mn(c,f),w!=null&&z.push(tr(c,w,p)))),de)break;c=c.return}0<z.length&&(g=new j(g,C,null,n,x),y.push({event:g,listeners:z}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",g&&n!==Il&&(C=n.relatedTarget||n.fromElement)&&(Yt(C)||C[xt]))break e;if((j||g)&&(g=x.window===x?x:(g=x.ownerDocument)?g.defaultView||g.parentWindow:window,j?(C=n.relatedTarget||n.toElement,j=m,C=C?Yt(C):null,C!==null&&(de=Kt(C),C!==de||C.tag!==5&&C.tag!==6)&&(C=null)):(j=null,C=m),j!==C)){if(z=ps,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(z=hs,w="onPointerLeave",f="onPointerEnter",c="pointer"),de=j==null?g:xn(j),p=C==null?g:xn(C),g=new z(w,c+"leave",j,n,x),g.target=de,g.relatedTarget=p,w=null,Yt(x)===m&&(z=new z(f,c+"enter",C,n,x),z.target=p,z.relatedTarget=de,w=z),de=w,j&&C)t:{for(z=j,f=C,c=0,p=z;p;p=gn(p))c++;for(p=0,w=f;w;w=gn(w))p++;for(;0<c-p;)z=gn(z),c--;for(;0<p-c;)f=gn(f),p--;for(;c--;){if(z===f||f!==null&&z===f.alternate)break t;z=gn(z),f=gn(f)}z=null}else z=null;j!==null&&Hs(y,g,j,z,!1),C!==null&&de!==null&&Hs(y,de,C,z,!0)}}e:{if(g=m?xn(m):window,j=g.nodeName&&g.nodeName.toLowerCase(),j==="select"||j==="input"&&g.type==="file")var _=Lc;else if(ks(g))if(Ns)_=Fc;else{_=Rc;var P=Tc}else(j=g.nodeName)&&j.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(_=Dc);if(_&&(_=_(e,m))){js(y,_,n,x);break e}P&&P(e,g,m),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&Rl(g,"number",g.value)}switch(P=m?xn(m):window,e){case"focusin":(ks(P)||P.contentEditable==="true")&&(mn=P,si=m,Jn=null);break;case"focusout":Jn=si=mn=null;break;case"mousedown":ai=!0;break;case"contextmenu":case"mouseup":case"dragend":ai=!1,Ts(y,n,x);break;case"selectionchange":if(Ic)break;case"keydown":case"keyup":Ts(y,n,x)}var L;if(ri)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else pn?ys(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(gs&&n.locale!=="ko"&&(pn||R!=="onCompositionStart"?R==="onCompositionEnd"&&pn&&(L=ds()):(Tt=x,Zl="value"in Tt?Tt.value:Tt.textContent,pn=!0)),P=Br(m,R),0<P.length&&(R=new ms(R,e,null,n,x),y.push({event:R,listeners:P}),L?R.data=L:(L=ws(n),L!==null&&(R.data=L)))),(L=Ec?Cc(e,n):zc(e,n))&&(m=Br(m,"onBeforeInput"),0<m.length&&(x=new ms("onBeforeInput","beforeinput",null,n,x),y.push({event:x,listeners:m}),x.data=L))}Vs(y,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Mn(e,n),i!=null&&r.unshift(tr(e,i,l)),i=Mn(e,t),i!=null&&r.push(tr(e,i,l))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hs(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,m=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&m!==null&&(a=m,l?(u=Mn(n,i),u!=null&&o.unshift(tr(n,u,a))):l||(u=Mn(n,i),u!=null&&o.push(tr(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Bc=/\r\n?/g,Hc=/\u0000|\uFFFD/g;function $s(e){return(typeof e=="string"?e:""+e).replace(Bc,`
`).replace(Hc,"")}function Hr(e,t,n){if(t=$s(t),$s(e)!==t&&n)throw Error(h(425))}function $r(){}var mi=null,hi=null;function gi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vi=typeof setTimeout=="function"?setTimeout:void 0,$c=typeof clearTimeout=="function"?clearTimeout:void 0,Ws=typeof Promise=="function"?Promise:void 0,Wc=typeof queueMicrotask=="function"?queueMicrotask:typeof Ws<"u"?function(e){return Ws.resolve(null).then(e).catch(Qc)}:vi;function Qc(e){setTimeout(function(){throw e})}function xi(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Qn(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),pt="__reactFiber$"+vn,nr="__reactProps$"+vn,xt="__reactContainer$"+vn,yi="__reactEvents$"+vn,qc="__reactListeners$"+vn,Kc="__reactHandles$"+vn;function Yt(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qs(e);e!==null;){if(n=e[pt])return n;e=Qs(e)}return t}e=n,n=e.parentNode}return null}function rr(e){return e=e[pt]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function Wr(e){return e[nr]||null}var wi=[],yn=-1;function Ft(e){return{current:e}}function ne(e){0>yn||(e.current=wi[yn],wi[yn]=null,yn--)}function b(e,t){yn++,wi[yn]=e.current,e.current=t}var Ot={},Se=Ft(Ot),Oe=Ft(!1),Xt=Ot;function wn(e,t){var n=e.type.contextTypes;if(!n)return Ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Me(e){return e=e.childContextTypes,e!=null}function Qr(){ne(Oe),ne(Se)}function qs(e,t,n){if(Se.current!==Ot)throw Error(h(168));b(Se,t),b(Oe,n)}function Ks(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(h(108,J(e)||"Unknown",l));return E({},n,r)}function qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,Xt=Se.current,b(Se,e),b(Oe,Oe.current),!0}function Ys(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=Ks(e,t,Xt),r.__reactInternalMemoizedMergedChildContext=e,ne(Oe),ne(Se),b(Se,e)):ne(Oe),b(Oe,n)}var yt=null,Kr=!1,ki=!1;function Xs(e){yt===null?yt=[e]:yt.push(e)}function Yc(e){Kr=!0,Xs(e)}function Mt(){if(!ki&&yt!==null){ki=!0;var e=0,t=K;try{var n=yt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}yt=null,Kr=!1}catch(l){throw yt!==null&&(yt=yt.slice(e+1)),Zo($l,Mt),l}finally{K=t,ki=!1}}return null}var kn=[],jn=0,Yr=null,Xr=0,Xe=[],Ge=0,Gt=null,wt=1,kt="";function Zt(e,t){kn[jn++]=Xr,kn[jn++]=Yr,Yr=e,Xr=t}function Gs(e,t,n){Xe[Ge++]=wt,Xe[Ge++]=kt,Xe[Ge++]=Gt,Gt=e;var r=wt;e=kt;var l=32-rt(r)-1;r&=~(1<<l),n+=1;var i=32-rt(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,wt=1<<32-rt(t)+l|n<<l|r,kt=i+e}else wt=1<<i|n<<l|r,kt=e}function ji(e){e.return!==null&&(Zt(e,1),Gs(e,1,0))}function Ni(e){for(;e===Yr;)Yr=kn[--jn],kn[jn]=null,Xr=kn[--jn],kn[jn]=null;for(;e===Gt;)Gt=Xe[--Ge],Xe[Ge]=null,kt=Xe[--Ge],Xe[Ge]=null,wt=Xe[--Ge],Xe[Ge]=null}var We=null,Qe=null,le=!1,it=null;function Zs(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Js(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,Qe=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gt!==null?{id:wt,overflow:kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,Qe=null,!0):!1;default:return!1}}function Si(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ei(e){if(le){var t=Qe;if(t){var n=t;if(!Js(e,t)){if(Si(e))throw Error(h(418));t=Dt(n.nextSibling);var r=We;t&&Js(e,t)?Zs(r,n):(e.flags=e.flags&-4097|2,le=!1,We=e)}}else{if(Si(e))throw Error(h(418));e.flags=e.flags&-4097|2,le=!1,We=e}}}function bs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function Gr(e){if(e!==We)return!1;if(!le)return bs(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gi(e.type,e.memoizedProps)),t&&(t=Qe)){if(Si(e))throw ea(),Error(h(418));for(;t;)Zs(e,t),t=Dt(t.nextSibling)}if(bs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=Dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=We?Dt(e.stateNode.nextSibling):null;return!0}function ea(){for(var e=Qe;e;)e=Dt(e.nextSibling)}function Nn(){Qe=We=null,le=!1}function Ci(e){it===null?it=[e]:it.push(e)}var Xc=Ne.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function Zr(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ta(e){var t=e._init;return t(e._payload)}function na(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=Wt(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,w){return c===null||c.tag!==6?(c=xo(p,f.mode,w),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,w){var _=p.type;return _===De?x(f,c,p.props.children,w,p.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Fe&&ta(_)===c.type)?(w=l(c,p.props),w.ref=lr(f,c,p),w.return=f,w):(w=kl(p.type,p.key,p.props,null,f.mode,w),w.ref=lr(f,c,p),w.return=f,w)}function m(f,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=yo(p,f.mode,w),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function x(f,c,p,w,_){return c===null||c.tag!==7?(c=on(p,f.mode,w,_),c.return=f,c):(c=l(c,p),c.return=f,c)}function y(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=xo(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case tt:return p=kl(c.type,c.key,c.props,null,f.mode,p),p.ref=lr(f,null,c),p.return=f,p;case Pe:return c=yo(c,f.mode,p),c.return=f,c;case Fe:var w=c._init;return y(f,w(c._payload),p)}if(Dn(c)||T(c))return c=on(c,f.mode,p,null),c.return=f,c;Zr(f,c)}return null}function g(f,c,p,w){var _=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return _!==null?null:a(f,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case tt:return p.key===_?u(f,c,p,w):null;case Pe:return p.key===_?m(f,c,p,w):null;case Fe:return _=p._init,g(f,c,_(p._payload),w)}if(Dn(p)||T(p))return _!==null?null:x(f,c,p,w,null);Zr(f,p)}return null}function j(f,c,p,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,a(c,f,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case tt:return f=f.get(w.key===null?p:w.key)||null,u(c,f,w,_);case Pe:return f=f.get(w.key===null?p:w.key)||null,m(c,f,w,_);case Fe:var P=w._init;return j(f,c,p,P(w._payload),_)}if(Dn(w)||T(w))return f=f.get(p)||null,x(c,f,w,_,null);Zr(c,w)}return null}function C(f,c,p,w){for(var _=null,P=null,L=c,R=c=0,xe=null;L!==null&&R<p.length;R++){L.index>R?(xe=L,L=null):xe=L.sibling;var H=g(f,L,p[R],w);if(H===null){L===null&&(L=xe);break}e&&L&&H.alternate===null&&t(f,L),c=i(H,c,R),P===null?_=H:P.sibling=H,P=H,L=xe}if(R===p.length)return n(f,L),le&&Zt(f,R),_;if(L===null){for(;R<p.length;R++)L=y(f,p[R],w),L!==null&&(c=i(L,c,R),P===null?_=L:P.sibling=L,P=L);return le&&Zt(f,R),_}for(L=r(f,L);R<p.length;R++)xe=j(L,f,R,p[R],w),xe!==null&&(e&&xe.alternate!==null&&L.delete(xe.key===null?R:xe.key),c=i(xe,c,R),P===null?_=xe:P.sibling=xe,P=xe);return e&&L.forEach(function(Qt){return t(f,Qt)}),le&&Zt(f,R),_}function z(f,c,p,w){var _=T(p);if(typeof _!="function")throw Error(h(150));if(p=_.call(p),p==null)throw Error(h(151));for(var P=_=null,L=c,R=c=0,xe=null,H=p.next();L!==null&&!H.done;R++,H=p.next()){L.index>R?(xe=L,L=null):xe=L.sibling;var Qt=g(f,L,H.value,w);if(Qt===null){L===null&&(L=xe);break}e&&L&&Qt.alternate===null&&t(f,L),c=i(Qt,c,R),P===null?_=Qt:P.sibling=Qt,P=Qt,L=xe}if(H.done)return n(f,L),le&&Zt(f,R),_;if(L===null){for(;!H.done;R++,H=p.next())H=y(f,H.value,w),H!==null&&(c=i(H,c,R),P===null?_=H:P.sibling=H,P=H);return le&&Zt(f,R),_}for(L=r(f,L);!H.done;R++,H=p.next())H=j(L,f,R,H.value,w),H!==null&&(e&&H.alternate!==null&&L.delete(H.key===null?R:H.key),c=i(H,c,R),P===null?_=H:P.sibling=H,P=H);return e&&L.forEach(function(_d){return t(f,_d)}),le&&Zt(f,R),_}function de(f,c,p,w){if(typeof p=="object"&&p!==null&&p.type===De&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case tt:e:{for(var _=p.key,P=c;P!==null;){if(P.key===_){if(_=p.type,_===De){if(P.tag===7){n(f,P.sibling),c=l(P,p.props.children),c.return=f,f=c;break e}}else if(P.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Fe&&ta(_)===P.type){n(f,P.sibling),c=l(P,p.props),c.ref=lr(f,P,p),c.return=f,f=c;break e}n(f,P);break}else t(f,P);P=P.sibling}p.type===De?(c=on(p.props.children,f.mode,w,p.key),c.return=f,f=c):(w=kl(p.type,p.key,p.props,null,f.mode,w),w.ref=lr(f,c,p),w.return=f,f=w)}return o(f);case Pe:e:{for(P=p.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=yo(p,f.mode,w),c.return=f,f=c}return o(f);case Fe:return P=p._init,de(f,c,P(p._payload),w)}if(Dn(p))return C(f,c,p,w);if(T(p))return z(f,c,p,w);Zr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=xo(p,f.mode,w),c.return=f,f=c),o(f)):n(f,c)}return de}var Sn=na(!0),ra=na(!1),Jr=Ft(null),br=null,En=null,zi=null;function _i(){zi=En=br=null}function Pi(e){var t=Jr.current;ne(Jr),e._currentValue=t}function Li(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cn(e,t){br=e,zi=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ie=!0),e.firstContext=null)}function Ze(e){var t=e._currentValue;if(zi!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(br===null)throw Error(h(308));En=e,br.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var Jt=null;function Ti(e){Jt===null?Jt=[e]:Jt.push(e)}function la(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Ti(t)):(n.next=l.next,l.next=n),t.interleaved=n,jt(e,r)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function Ri(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ia(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(A&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,jt(e,n)}return l=r.interleaved,l===null?(t.next=t,Ti(r)):(t.next=l.next,l.next=t),r.interleaved=t,jt(e,n)}function el(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ql(e,n)}}function oa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function tl(e,t,n,r){var l=e.updateQueue;It=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,m=u.next;u.next=null,o===null?i=m:o.next=m,o=u;var x=e.alternate;x!==null&&(x=x.updateQueue,a=x.lastBaseUpdate,a!==o&&(a===null?x.firstBaseUpdate=m:a.next=m,x.lastBaseUpdate=u))}if(i!==null){var y=l.baseState;o=0,x=m=u=null,a=i;do{var g=a.lane,j=a.eventTime;if((r&g)===g){x!==null&&(x=x.next={eventTime:j,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var C=e,z=a;switch(g=t,j=n,z.tag){case 1:if(C=z.payload,typeof C=="function"){y=C.call(j,y,g);break e}y=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=z.payload,g=typeof C=="function"?C.call(j,y,g):C,g==null)break e;y=E({},y,g);break e;case 2:It=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[a]:g.push(a))}else j={eventTime:j,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},x===null?(m=x=j,u=y):x=x.next=j,o|=g;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;g=a,a=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(x===null&&(u=y),l.baseState=u,l.firstBaseUpdate=m,l.lastBaseUpdate=x,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);tn|=o,e.lanes=o,e.memoizedState=y}}function sa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(h(191,l));l.call(r)}}}var ir={},mt=Ft(ir),or=Ft(ir),sr=Ft(ir);function bt(e){if(e===ir)throw Error(h(174));return e}function Di(e,t){switch(b(sr,t),b(or,e),b(mt,ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fl(t,e)}ne(mt),b(mt,t)}function zn(){ne(mt),ne(or),ne(sr)}function aa(e){bt(sr.current);var t=bt(mt.current),n=Fl(t,e.type);t!==n&&(b(or,e),b(mt,n))}function Fi(e){or.current===e&&(ne(mt),ne(or))}var oe=Ft(0);function nl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oi=[];function Mi(){for(var e=0;e<Oi.length;e++)Oi[e]._workInProgressVersionPrimary=null;Oi.length=0}var rl=Ne.ReactCurrentDispatcher,Ii=Ne.ReactCurrentBatchConfig,en=0,se=null,me=null,ge=null,ll=!1,ar=!1,ur=0,Gc=0;function Ee(){throw Error(h(321))}function Ui(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function Ai(e,t,n,r,l,i){if(en=i,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,rl.current=e===null||e.memoizedState===null?ed:td,e=n(r,l),ar){i=0;do{if(ar=!1,ur=0,25<=i)throw Error(h(301));i+=1,ge=me=null,t.updateQueue=null,rl.current=nd,e=n(r,l)}while(ar)}if(rl.current=sl,t=me!==null&&me.next!==null,en=0,ge=me=se=null,ll=!1,t)throw Error(h(300));return e}function Vi(){var e=ur!==0;return ur=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?se.memoizedState=ge=e:ge=ge.next=e,ge}function Je(){if(me===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ge===null?se.memoizedState:ge.next;if(t!==null)ge=t,me=e;else{if(e===null)throw Error(h(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ge===null?se.memoizedState=ge=e:ge=ge.next=e}return ge}function cr(e,t){return typeof t=="function"?t(e):t}function Bi(e){var t=Je(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=me,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,u=null,m=i;do{var x=m.lane;if((en&x)===x)u!==null&&(u=u.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),r=m.hasEagerState?m.eagerState:e(r,m.action);else{var y={lane:x,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};u===null?(a=u=y,o=r):u=u.next=y,se.lanes|=x,tn|=x}m=m.next}while(m!==null&&m!==i);u===null?o=r:u.next=a,lt(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,se.lanes|=i,tn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hi(e){var t=Je(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);lt(i,t.memoizedState)||(Ie=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ua(){}function ca(e,t){var n=se,r=Je(),l=t(),i=!lt(r.memoizedState,l);if(i&&(r.memoizedState=l,Ie=!0),r=r.queue,$i(pa.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,dr(9,fa.bind(null,n,r,l,t),void 0,null),ve===null)throw Error(h(349));(en&30)!==0||da(n,t,l)}return l}function da(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fa(e,t,n,r){t.value=n,t.getSnapshot=r,ma(t)&&ha(e)}function pa(e,t,n){return n(function(){ma(t)&&ha(e)})}function ma(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function ha(e){var t=jt(e,1);t!==null&&ut(t,e,1,-1)}function ga(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},t.queue=e,e=e.dispatch=bc.bind(null,se,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function va(){return Je().memoizedState}function il(e,t,n,r){var l=ht();se.flags|=e,l.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function ol(e,t,n,r){var l=Je();r=r===void 0?null:r;var i=void 0;if(me!==null){var o=me.memoizedState;if(i=o.destroy,r!==null&&Ui(r,o.deps)){l.memoizedState=dr(t,n,i,r);return}}se.flags|=e,l.memoizedState=dr(1|t,n,i,r)}function xa(e,t){return il(8390656,8,e,t)}function $i(e,t){return ol(2048,8,e,t)}function ya(e,t){return ol(4,2,e,t)}function wa(e,t){return ol(4,4,e,t)}function ka(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ja(e,t,n){return n=n!=null?n.concat([e]):null,ol(4,4,ka.bind(null,t,e),n)}function Wi(){}function Na(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ui(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sa(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ui(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ea(e,t,n){return(en&21)===0?(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n):(lt(n,t)||(n=ts(),se.lanes|=n,tn|=n,e.baseState=!0),t)}function Zc(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=Ii.transition;Ii.transition={};try{e(!1),t()}finally{K=n,Ii.transition=r}}function Ca(){return Je().memoizedState}function Jc(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},za(e))_a(t,n);else if(n=la(e,t,n,r),n!==null){var l=Te();ut(n,e,r,l),Pa(n,t,r)}}function bc(e,t,n){var r=Ht(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(za(e))_a(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,lt(a,o)){var u=t.interleaved;u===null?(l.next=l,Ti(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=la(e,t,l,r),n!==null&&(l=Te(),ut(n,e,r,l),Pa(n,t,r))}}function za(e){var t=e.alternate;return e===se||t!==null&&t===se}function _a(e,t){ar=ll=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pa(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ql(e,n)}}var sl={readContext:Ze,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},ed={readContext:Ze,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:xa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,il(4194308,4,ka.bind(null,t,e),n)},useLayoutEffect:function(e,t){return il(4194308,4,e,t)},useInsertionEffect:function(e,t){return il(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Jc.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:ga,useDebugValue:Wi,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=ga(!1),t=e[0];return e=Zc.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,l=ht();if(le){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),ve===null)throw Error(h(349));(en&30)!==0||da(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,xa(pa.bind(null,r,i,e),[e]),r.flags|=2048,dr(9,fa.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ht(),t=ve.identifierPrefix;if(le){var n=kt,r=wt;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Gc++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},td={readContext:Ze,useCallback:Na,useContext:Ze,useEffect:$i,useImperativeHandle:ja,useInsertionEffect:ya,useLayoutEffect:wa,useMemo:Sa,useReducer:Bi,useRef:va,useState:function(){return Bi(cr)},useDebugValue:Wi,useDeferredValue:function(e){var t=Je();return Ea(t,me.memoizedState,e)},useTransition:function(){var e=Bi(cr)[0],t=Je().memoizedState;return[e,t]},useMutableSource:ua,useSyncExternalStore:ca,useId:Ca,unstable_isNewReconciler:!1},nd={readContext:Ze,useCallback:Na,useContext:Ze,useEffect:$i,useImperativeHandle:ja,useInsertionEffect:ya,useLayoutEffect:wa,useMemo:Sa,useReducer:Hi,useRef:va,useState:function(){return Hi(cr)},useDebugValue:Wi,useDeferredValue:function(e){var t=Je();return me===null?t.memoizedState=e:Ea(t,me.memoizedState,e)},useTransition:function(){var e=Hi(cr)[0],t=Je().memoizedState;return[e,t]},useMutableSource:ua,useSyncExternalStore:ca,useId:Ca,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=E({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),l=Ht(e),i=Nt(r,l);i.payload=t,n!=null&&(i.callback=n),t=Ut(e,i,l),t!==null&&(ut(t,e,l,r),el(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),l=Ht(e),i=Nt(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ut(e,i,l),t!==null&&(ut(t,e,l,r),el(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=Ht(e),l=Nt(n,r);l.tag=2,t!=null&&(l.callback=t),t=Ut(e,l,r),t!==null&&(ut(t,e,r,n),el(t,e,r))}};function La(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(l,i):!0}function Ta(e,t,n){var r=!1,l=Ot,i=t.contextType;return typeof i=="object"&&i!==null?i=Ze(i):(l=Me(t)?Xt:Se.current,r=t.contextTypes,i=(r=r!=null)?wn(e,l):Ot),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ra(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function qi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ri(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ze(i):(i=Me(t)?Xt:Se.current,l.context=wn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Qi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&al.enqueueReplaceState(l,l.state,null),tl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function _n(e,t){try{var n="",r=t;do n+=V(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Ki(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Yi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rd=typeof WeakMap=="function"?WeakMap:Map;function Da(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){hl||(hl=!0,uo=r),Yi(e,t)},n}function Fa(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Yi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Yi(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Oa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rd;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=vd.bind(null,e,t,n),t.then(e,e))}function Ma(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ia(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var ld=Ne.ReactCurrentOwner,Ie=!1;function Le(e,t,n,r){t.child=e===null?ra(t,null,n,r):Sn(t,e.child,n,r)}function Ua(e,t,n,r,l){n=n.render;var i=t.ref;return Cn(t,l),r=Ai(e,t,n,r,i,l),n=Vi(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,St(e,t,l)):(le&&n&&ji(t),t.flags|=1,Le(e,t,r,l),t.child)}function Aa(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!vo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Va(e,t,i,r,l)):(e=kl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(o,r)&&e.ref===t.ref)return St(e,t,l)}return t.flags|=1,e=Wt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Va(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Zn(i,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Ie=!0);else return t.lanes=e.lanes,St(e,t,l)}return Xi(e,t,n,r,l)}function Ba(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(Ln,qe),qe|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,b(Ln,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,b(Ln,qe),qe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,b(Ln,qe),qe|=r;return Le(e,t,l,n),t.child}function Ha(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Xi(e,t,n,r,l){var i=Me(n)?Xt:Se.current;return i=wn(t,i),Cn(t,l),n=Ai(e,t,n,r,i,l),r=Vi(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,St(e,t,l)):(le&&r&&ji(t),t.flags|=1,Le(e,t,n,l),t.child)}function $a(e,t,n,r,l){if(Me(n)){var i=!0;qr(t)}else i=!1;if(Cn(t,l),t.stateNode===null)cl(e,t),Ta(t,n,r),qi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,m=n.contextType;typeof m=="object"&&m!==null?m=Ze(m):(m=Me(n)?Xt:Se.current,m=wn(t,m));var x=n.getDerivedStateFromProps,y=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==m)&&Ra(t,o,r,m),It=!1;var g=t.memoizedState;o.state=g,tl(t,r,o,l),u=t.memoizedState,a!==r||g!==u||Oe.current||It?(typeof x=="function"&&(Qi(t,n,x,r),u=t.memoizedState),(a=It||La(t,n,a,r,g,u,m))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=m,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ia(e,t),a=t.memoizedProps,m=t.type===t.elementType?a:ot(t.type,a),o.props=m,y=t.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ze(u):(u=Me(n)?Xt:Se.current,u=wn(t,u));var j=n.getDerivedStateFromProps;(x=typeof j=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==y||g!==u)&&Ra(t,o,r,u),It=!1,g=t.memoizedState,o.state=g,tl(t,r,o,l);var C=t.memoizedState;a!==y||g!==C||Oe.current||It?(typeof j=="function"&&(Qi(t,n,j,r),C=t.memoizedState),(m=It||La(t,n,m,r,g,C,u)||!1)?(x||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),o.props=r,o.state=C,o.context=u,r=m):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Gi(e,t,n,r,i,l)}function Gi(e,t,n,r,l,i){Ha(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Ys(t,n,!1),St(e,t,i);r=t.stateNode,ld.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Sn(t,e.child,null,i),t.child=Sn(t,null,a,i)):Le(e,t,a,i),t.memoizedState=r.state,l&&Ys(t,n,!0),t.child}function Wa(e){var t=e.stateNode;t.pendingContext?qs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qs(e,t.context,!1),Di(e,t.containerInfo)}function Qa(e,t,n,r,l){return Nn(),Ci(l),t.flags|=256,Le(e,t,n,r),t.child}var Zi={dehydrated:null,treeContext:null,retryLane:0};function Ji(e){return{baseLanes:e,cachePool:null,transitions:null}}function qa(e,t,n){var r=t.pendingProps,l=oe.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),b(oe,l&1),e===null)return Ei(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=jl(o,r,0,null),e=on(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ji(n),t.memoizedState=Zi,e):bi(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return id(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Wt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=Wt(a,i):(i=on(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Ji(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Zi,r}return i=e.child,e=i.sibling,r=Wt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bi(e,t){return t=jl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ul(e,t,n,r){return r!==null&&Ci(r),Sn(t,e.child,null,n),e=bi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function id(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Ki(Error(h(422))),ul(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=jl({mode:"visible",children:r.children},l,0,null),i=on(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Sn(t,e.child,null,o),t.child.memoizedState=Ji(o),t.memoizedState=Zi,i);if((t.mode&1)===0)return ul(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(h(419)),r=Ki(i,r,void 0),ul(e,t,o,r)}if(a=(o&e.childLanes)!==0,Ie||a){if(r=ve,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|o))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,jt(e,l),ut(r,e,l,-1))}return go(),r=Ki(Error(h(421))),ul(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=xd.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Qe=Dt(l.nextSibling),We=t,le=!0,it=null,e!==null&&(Xe[Ge++]=wt,Xe[Ge++]=kt,Xe[Ge++]=Gt,wt=e.id,kt=e.overflow,Gt=t),t=bi(t,r.children),t.flags|=4096,t)}function Ka(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Li(e.return,t,n)}function eo(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Ya(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(Le(e,t,r.children,n),r=oe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ka(e,n,t);else if(e.tag===19)Ka(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(b(oe,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&nl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),eo(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&nl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}eo(t,!0,n,null,i);break;case"together":eo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function cl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function od(e,t,n){switch(t.tag){case 3:Wa(t),Nn();break;case 5:aa(t);break;case 1:Me(t.type)&&qr(t);break;case 4:Di(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;b(Jr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(b(oe,oe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?qa(e,t,n):(b(oe,oe.current&1),e=St(e,t,n),e!==null?e.sibling:null);b(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ya(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),b(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,Ba(e,t,n)}return St(e,t,n)}var Xa,to,Ga,Za;Xa=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},to=function(){},Ga=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,bt(mt.current);var i=null;switch(n){case"input":l=Ll(e,l),r=Ll(e,r),i=[];break;case"select":l=E({},l,{value:void 0}),r=E({},r,{value:void 0}),i=[];break;case"textarea":l=Dl(e,l),r=Dl(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$r)}Ol(n,r);var o;n=null;for(m in l)if(!r.hasOwnProperty(m)&&l.hasOwnProperty(m)&&l[m]!=null)if(m==="style"){var a=l[m];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(D.hasOwnProperty(m)?i||(i=[]):(i=i||[]).push(m,null));for(m in r){var u=r[m];if(a=l!=null?l[m]:void 0,r.hasOwnProperty(m)&&u!==a&&(u!=null||a!=null))if(m==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(m,n)),n=u;else m==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(m,u)):m==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(m,""+u):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(D.hasOwnProperty(m)?(u!=null&&m==="onScroll"&&te("scroll",e),i||a===u||(i=[])):(i=i||[]).push(m,u))}n&&(i=i||[]).push("style",n);var m=i;(t.updateQueue=m)&&(t.flags|=4)}},Za=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sd(e,t,n){var r=t.pendingProps;switch(Ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Me(t.type)&&Qr(),Ce(t),null;case 3:return r=t.stateNode,zn(),ne(Oe),ne(Se),Mi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Gr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,it!==null&&(po(it),it=null))),to(e,t),Ce(t),null;case 5:Fi(t);var l=bt(sr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ga(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(h(166));return Ce(t),null}if(e=bt(mt.current),Gr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pt]=t,r[nr]=i,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(l=0;l<bn.length;l++)te(bn[l],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":To(r,i),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},te("invalid",r);break;case"textarea":Fo(r,i),te("invalid",r)}Ol(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,a,e),l=["children",""+a]):D.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":yr(r),Do(r,i,!0);break;case"textarea":yr(r),Mo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$r)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Io(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[pt]=t,e[nr]=r,Xa(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ml(n,r),n){case"dialog":te("cancel",e),te("close",e),l=r;break;case"iframe":case"object":case"embed":te("load",e),l=r;break;case"video":case"audio":for(l=0;l<bn.length;l++)te(bn[l],e);l=r;break;case"source":te("error",e),l=r;break;case"img":case"image":case"link":te("error",e),te("load",e),l=r;break;case"details":te("toggle",e),l=r;break;case"input":To(e,r),l=Ll(e,r),te("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=E({},r,{value:void 0}),te("invalid",e);break;case"textarea":Fo(e,r),l=Dl(e,r),te("invalid",e);break;default:l=r}Ol(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Vo(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Uo(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Fn(e,u):typeof u=="number"&&Fn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(D.hasOwnProperty(i)?u!=null&&i==="onScroll"&&te("scroll",e):u!=null&&fe(e,i,u,o))}switch(n){case"input":yr(e),Do(e,r,!1);break;case"textarea":yr(e),Mo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+q(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?an(e,!!r.multiple,i,!1):r.defaultValue!=null&&an(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=$r)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)Za(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(h(166));if(n=bt(sr.current),bt(mt.current),Gr(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(i=r.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:Hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return Ce(t),null;case 13:if(ne(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&Qe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ea(),Nn(),t.flags|=98560,i=!1;else if(i=Gr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(h(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(h(317));i[pt]=t}else Nn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),i=!1}else it!==null&&(po(it),it=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(oe.current&1)!==0?he===0&&(he=3):go())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return zn(),to(e,t),e===null&&er(t.stateNode.containerInfo),Ce(t),null;case 10:return Pi(t.type._context),Ce(t),null;case 17:return Me(t.type)&&Qr(),Ce(t),null;case 19:if(ne(oe),i=t.memoizedState,i===null)return Ce(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)fr(i,!1);else{if(he!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=nl(e),o!==null){for(t.flags|=128,fr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return b(oe,oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&ce()>Tn&&(t.flags|=128,r=!0,fr(i,!1),t.lanes=4194304)}else{if(!r)if(e=nl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!le)return Ce(t),null}else 2*ce()-i.renderingStartTime>Tn&&n!==1073741824&&(t.flags|=128,r=!0,fr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ce(),t.sibling=null,n=oe.current,b(oe,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return ho(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(qe&1073741824)!==0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function ad(e,t){switch(Ni(t),t.tag){case 1:return Me(t.type)&&Qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(),ne(Oe),ne(Se),Mi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Fi(t),null;case 13:if(ne(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(oe),null;case 4:return zn(),null;case 10:return Pi(t.type._context),null;case 22:case 23:return ho(),null;case 24:return null;default:return null}}var dl=!1,ze=!1,ud=typeof WeakSet=="function"?WeakSet:Set,S=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function no(e,t,n){try{n()}catch(r){ue(e,t,r)}}var Ja=!1;function cd(e,t){if(mi=Tr,e=Ls(),oi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,m=0,x=0,y=e,g=null;t:for(;;){for(var j;y!==n||l!==0&&y.nodeType!==3||(a=o+l),y!==i||r!==0&&y.nodeType!==3||(u=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(j=y.firstChild)!==null;)g=y,y=j;for(;;){if(y===e)break t;if(g===n&&++m===l&&(a=o),g===i&&++x===r&&(u=o),(j=y.nextSibling)!==null)break;y=g,g=y.parentNode}y=j}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(hi={focusedElem:e,selectionRange:n},Tr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var C=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var z=C.memoizedProps,de=C.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?z:ot(t.type,z),de);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(w){ue(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return C=Ja,Ja=!1,C}function pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&no(t,n,i)}l=l.next}while(l!==r)}}function fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ro(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ba(e){var t=e.alternate;t!==null&&(e.alternate=null,ba(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[nr],delete t[yi],delete t[qc],delete t[Kc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function eu(e){return e.tag===5||e.tag===3||e.tag===4}function tu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||eu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$r));else if(r!==4&&(e=e.child,e!==null))for(lo(e,t,n),e=e.sibling;e!==null;)lo(e,t,n),e=e.sibling}function io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(io(e,t,n),e=e.sibling;e!==null;)io(e,t,n),e=e.sibling}var we=null,st=!1;function At(e,t,n){for(n=n.child;n!==null;)nu(e,t,n),n=n.sibling}function nu(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Er,n)}catch{}switch(n.tag){case 5:ze||Pn(n,t);case 6:var r=we,l=st;we=null,At(e,t,n),we=r,st=l,we!==null&&(st?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(st?(e=we,n=n.stateNode,e.nodeType===8?xi(e.parentNode,n):e.nodeType===1&&xi(e,n),Qn(e)):xi(we,n.stateNode));break;case 4:r=we,l=st,we=n.stateNode.containerInfo,st=!0,At(e,t,n),we=r,st=l;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&no(n,t,o),l=l.next}while(l!==r)}At(e,t,n);break;case 1:if(!ze&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ue(n,t,a)}At(e,t,n);break;case 21:At(e,t,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,At(e,t,n),ze=r):At(e,t,n);break;default:At(e,t,n)}}function ru(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ud),t.forEach(function(r){var l=yd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:we=a.stateNode,st=!1;break e;case 3:we=a.stateNode.containerInfo,st=!0;break e;case 4:we=a.stateNode.containerInfo,st=!0;break e}a=a.return}if(we===null)throw Error(h(160));nu(i,o,l),we=null,st=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(m){ue(l,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lu(t,e),t=t.sibling}function lu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),gt(e),r&4){try{pr(3,e,e.return),fl(3,e)}catch(z){ue(e,e.return,z)}try{pr(5,e,e.return)}catch(z){ue(e,e.return,z)}}break;case 1:at(t,e),gt(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(at(t,e),gt(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var l=e.stateNode;try{Fn(l,"")}catch(z){ue(e,e.return,z)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Ro(l,i),Ml(a,o);var m=Ml(a,i);for(o=0;o<u.length;o+=2){var x=u[o],y=u[o+1];x==="style"?Vo(l,y):x==="dangerouslySetInnerHTML"?Uo(l,y):x==="children"?Fn(l,y):fe(l,x,y,m)}switch(a){case"input":Tl(l,i);break;case"textarea":Oo(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var j=i.value;j!=null?an(l,!!i.multiple,j,!1):g!==!!i.multiple&&(i.defaultValue!=null?an(l,!!i.multiple,i.defaultValue,!0):an(l,!!i.multiple,i.multiple?[]:"",!1))}l[nr]=i}catch(z){ue(e,e.return,z)}}break;case 6:if(at(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(h(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(z){ue(e,e.return,z)}}break;case 3:if(at(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(z){ue(e,e.return,z)}break;case 4:at(t,e),gt(e);break;case 13:at(t,e),gt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ao=ce())),r&4&&ru(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(m=ze)||x,at(t,e),ze=m):at(t,e),gt(e),r&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!x&&(e.mode&1)!==0)for(S=e,x=e.child;x!==null;){for(y=S=x;S!==null;){switch(g=S,j=g.child,g.tag){case 0:case 11:case 14:case 15:pr(4,g,g.return);break;case 1:Pn(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(z){ue(r,n,z)}}break;case 5:Pn(g,g.return);break;case 22:if(g.memoizedState!==null){su(y);continue}}j!==null?(j.return=g,S=j):su(y)}x=x.sibling}e:for(x=null,y=e;;){if(y.tag===5){if(x===null){x=y;try{l=y.stateNode,m?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Ao("display",o))}catch(z){ue(e,e.return,z)}}}else if(y.tag===6){if(x===null)try{y.stateNode.nodeValue=m?"":y.memoizedProps}catch(z){ue(e,e.return,z)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;x===y&&(x=null),y=y.return}x===y&&(x=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:at(t,e),gt(e),r&4&&ru(e);break;case 21:break;default:at(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(eu(n)){var r=n;break e}n=n.return}throw Error(h(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Fn(l,""),r.flags&=-33);var i=tu(e);io(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=tu(e);lo(e,a,o);break;default:throw Error(h(161))}}catch(u){ue(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dd(e,t,n){S=e,iu(e)}function iu(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||dl;if(!o){var a=l.alternate,u=a!==null&&a.memoizedState!==null||ze;a=dl;var m=ze;if(dl=o,(ze=u)&&!m)for(S=l;S!==null;)o=S,u=o.child,o.tag===22&&o.memoizedState!==null?au(l):u!==null?(u.return=o,S=u):au(l);for(;i!==null;)S=i,iu(i),i=i.sibling;S=l,dl=a,ze=m}ou(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,S=i):ou(e)}}function ou(e){for(;S!==null;){var t=S;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ze||fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ze)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&sa(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}sa(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var x=m.memoizedState;if(x!==null){var y=x.dehydrated;y!==null&&Qn(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}ze||t.flags&512&&ro(t)}catch(g){ue(t,t.return,g)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function su(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function au(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fl(4,t)}catch(u){ue(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){ue(t,l,u)}}var i=t.return;try{ro(t)}catch(u){ue(t,i,u)}break;case 5:var o=t.return;try{ro(t)}catch(u){ue(t,o,u)}}}catch(u){ue(t,t.return,u)}if(t===e){S=null;break}var a=t.sibling;if(a!==null){a.return=t.return,S=a;break}S=t.return}}var fd=Math.ceil,pl=Ne.ReactCurrentDispatcher,oo=Ne.ReactCurrentOwner,be=Ne.ReactCurrentBatchConfig,A=0,ve=null,pe=null,ke=0,qe=0,Ln=Ft(0),he=0,mr=null,tn=0,ml=0,so=0,hr=null,Ue=null,ao=0,Tn=1/0,Et=null,hl=!1,uo=null,Vt=null,gl=!1,Bt=null,vl=0,gr=0,co=null,xl=-1,yl=0;function Te(){return(A&6)!==0?ce():xl!==-1?xl:xl=ce()}function Ht(e){return(e.mode&1)===0?1:(A&2)!==0&&ke!==0?ke&-ke:Xc.transition!==null?(yl===0&&(yl=ts()),yl):(e=K,e!==0||(e=window.event,e=e===void 0?16:cs(e.type)),e)}function ut(e,t,n,r){if(50<gr)throw gr=0,co=null,Error(h(185));Vn(e,n,r),((A&2)===0||e!==ve)&&(e===ve&&((A&2)===0&&(ml|=n),he===4&&$t(e,ke)),Ae(e,r),n===1&&A===0&&(t.mode&1)===0&&(Tn=ce()+500,Kr&&Mt()))}function Ae(e,t){var n=e.callbackNode;Xu(e,t);var r=_r(e,e===ve?ke:0);if(r===0)n!==null&&Jo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Jo(n),t===1)e.tag===0?Yc(cu.bind(null,e)):Xs(cu.bind(null,e)),Wc(function(){(A&6)===0&&Mt()}),n=null;else{switch(ns(r)){case 1:n=$l;break;case 4:n=bo;break;case 16:n=Sr;break;case 536870912:n=es;break;default:n=Sr}n=xu(n,uu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function uu(e,t){if(xl=-1,yl=0,(A&6)!==0)throw Error(h(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=_r(e,e===ve?ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=wl(e,r);else{t=r;var l=A;A|=2;var i=fu();(ve!==e||ke!==t)&&(Et=null,Tn=ce()+500,rn(e,t));do try{hd();break}catch(a){du(e,a)}while(!0);_i(),pl.current=i,A=l,pe!==null?t=0:(ve=null,ke=0,t=he)}if(t!==0){if(t===2&&(l=Wl(e),l!==0&&(r=l,t=fo(e,l))),t===1)throw n=mr,rn(e,0),$t(e,r),Ae(e,ce()),n;if(t===6)$t(e,r);else{if(l=e.current.alternate,(r&30)===0&&!pd(l)&&(t=wl(e,r),t===2&&(i=Wl(e),i!==0&&(r=i,t=fo(e,i))),t===1))throw n=mr,rn(e,0),$t(e,r),Ae(e,ce()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(h(345));case 2:ln(e,Ue,Et);break;case 3:if($t(e,r),(r&130023424)===r&&(t=ao+500-ce(),10<t)){if(_r(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=vi(ln.bind(null,e,Ue,Et),t);break}ln(e,Ue,Et);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-rt(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fd(r/1960))-r,10<r){e.timeoutHandle=vi(ln.bind(null,e,Ue,Et),r);break}ln(e,Ue,Et);break;case 5:ln(e,Ue,Et);break;default:throw Error(h(329))}}}return Ae(e,ce()),e.callbackNode===n?uu.bind(null,e):null}function fo(e,t){var n=hr;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=wl(e,t),e!==2&&(t=Ue,Ue=n,t!==null&&po(t)),e}function po(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function pd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!lt(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~so,t&=~ml,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function cu(e){if((A&6)!==0)throw Error(h(327));Rn();var t=_r(e,0);if((t&1)===0)return Ae(e,ce()),null;var n=wl(e,t);if(e.tag!==0&&n===2){var r=Wl(e);r!==0&&(t=r,n=fo(e,r))}if(n===1)throw n=mr,rn(e,0),$t(e,t),Ae(e,ce()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ln(e,Ue,Et),Ae(e,ce()),null}function mo(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(Tn=ce()+500,Kr&&Mt())}}function nn(e){Bt!==null&&Bt.tag===0&&(A&6)===0&&Rn();var t=A;A|=1;var n=be.transition,r=K;try{if(be.transition=null,K=1,e)return e()}finally{K=r,be.transition=n,A=t,(A&6)===0&&Mt()}}function ho(){qe=Ln.current,ne(Ln)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$c(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(Ni(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qr();break;case 3:zn(),ne(Oe),ne(Se),Mi();break;case 5:Fi(r);break;case 4:zn();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:Pi(r.type._context);break;case 22:case 23:ho()}n=n.return}if(ve=e,pe=e=Wt(e.current,null),ke=qe=t,he=0,mr=null,so=ml=tn=0,Ue=hr=null,Jt!==null){for(t=0;t<Jt.length;t++)if(n=Jt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Jt=null}return e}function du(e,t){do{var n=pe;try{if(_i(),rl.current=sl,ll){for(var r=se.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ll=!1}if(en=0,ge=me=se=null,ar=!1,ur=0,oo.current=null,n===null||n.return===null){he=1,mr=t,pe=null;break}e:{var i=e,o=n.return,a=n,u=t;if(t=ke,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var m=u,x=a,y=x.tag;if((x.mode&1)===0&&(y===0||y===11||y===15)){var g=x.alternate;g?(x.updateQueue=g.updateQueue,x.memoizedState=g.memoizedState,x.lanes=g.lanes):(x.updateQueue=null,x.memoizedState=null)}var j=Ma(o);if(j!==null){j.flags&=-257,Ia(j,o,a,i,t),j.mode&1&&Oa(i,m,t),t=j,u=m;var C=t.updateQueue;if(C===null){var z=new Set;z.add(u),t.updateQueue=z}else C.add(u);break e}else{if((t&1)===0){Oa(i,m,t),go();break e}u=Error(h(426))}}else if(le&&a.mode&1){var de=Ma(o);if(de!==null){(de.flags&65536)===0&&(de.flags|=256),Ia(de,o,a,i,t),Ci(_n(u,a));break e}}i=u=_n(u,a),he!==4&&(he=2),hr===null?hr=[i]:hr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Da(i,u,t);oa(i,f);break e;case 1:a=u;var c=i.type,p=i.stateNode;if((i.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Vt===null||!Vt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Fa(i,a,t);oa(i,w);break e}}i=i.return}while(i!==null)}mu(n)}catch(_){t=_,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function fu(){var e=pl.current;return pl.current=sl,e===null?sl:e}function go(){(he===0||he===3||he===2)&&(he=4),ve===null||(tn&268435455)===0&&(ml&268435455)===0||$t(ve,ke)}function wl(e,t){var n=A;A|=2;var r=fu();(ve!==e||ke!==t)&&(Et=null,rn(e,t));do try{md();break}catch(l){du(e,l)}while(!0);if(_i(),A=n,pl.current=r,pe!==null)throw Error(h(261));return ve=null,ke=0,he}function md(){for(;pe!==null;)pu(pe)}function hd(){for(;pe!==null&&!Vu();)pu(pe)}function pu(e){var t=vu(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?mu(e):pe=t,oo.current=null}function mu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=sd(n,t,qe),n!==null){pe=n;return}}else{if(n=ad(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,pe=null;return}}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);he===0&&(he=5)}function ln(e,t,n){var r=K,l=be.transition;try{be.transition=null,K=1,gd(e,t,n,r)}finally{be.transition=l,K=r}return null}function gd(e,t,n,r){do Rn();while(Bt!==null);if((A&6)!==0)throw Error(h(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Gu(e,i),e===ve&&(pe=ve=null,ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||gl||(gl=!0,xu(Sr,function(){return Rn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=be.transition,be.transition=null;var o=K;K=1;var a=A;A|=4,oo.current=null,cd(e,n),lu(n,e),Mc(hi),Tr=!!mi,hi=mi=null,e.current=n,dd(n),Bu(),A=a,K=o,be.transition=i}else e.current=n;if(gl&&(gl=!1,Bt=e,vl=l),i=e.pendingLanes,i===0&&(Vt=null),Wu(n.stateNode),Ae(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(hl)throw hl=!1,e=uo,uo=null,e;return(vl&1)!==0&&e.tag!==0&&Rn(),i=e.pendingLanes,(i&1)!==0?e===co?gr++:(gr=0,co=e):gr=0,Mt(),null}function Rn(){if(Bt!==null){var e=ns(vl),t=be.transition,n=K;try{if(be.transition=null,K=16>e?16:e,Bt===null)var r=!1;else{if(e=Bt,Bt=null,vl=0,(A&6)!==0)throw Error(h(331));var l=A;for(A|=4,S=e.current;S!==null;){var i=S,o=i.child;if((S.flags&16)!==0){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var m=a[u];for(S=m;S!==null;){var x=S;switch(x.tag){case 0:case 11:case 15:pr(8,x,i)}var y=x.child;if(y!==null)y.return=x,S=y;else for(;S!==null;){x=S;var g=x.sibling,j=x.return;if(ba(x),x===m){S=null;break}if(g!==null){g.return=j,S=g;break}S=j}}}var C=i.alternate;if(C!==null){var z=C.child;if(z!==null){C.child=null;do{var de=z.sibling;z.sibling=null,z=de}while(z!==null)}}S=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:pr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,S=f;break e}S=i.return}}var c=e.current;for(S=c;S!==null;){o=S;var p=o.child;if((o.subtreeFlags&2064)!==0&&p!==null)p.return=o,S=p;else e:for(o=c;S!==null;){if(a=S,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:fl(9,a)}}catch(_){ue(a,a.return,_)}if(a===o){S=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,S=w;break e}S=a.return}}if(A=l,Mt(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Er,e)}catch{}r=!0}return r}finally{K=n,be.transition=t}}return!1}function hu(e,t,n){t=_n(n,t),t=Da(e,t,1),e=Ut(e,t,1),t=Te(),e!==null&&(Vn(e,1,t),Ae(e,t))}function ue(e,t,n){if(e.tag===3)hu(e,e,n);else for(;t!==null;){if(t.tag===3){hu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=_n(n,e),e=Fa(t,e,1),t=Ut(t,e,1),e=Te(),t!==null&&(Vn(t,1,e),Ae(t,e));break}}t=t.return}}function vd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(ke&n)===n&&(he===4||he===3&&(ke&130023424)===ke&&500>ce()-ao?rn(e,0):so|=n),Ae(e,t)}function gu(e,t){t===0&&((e.mode&1)===0?t=1:(t=zr,zr<<=1,(zr&130023424)===0&&(zr=4194304)));var n=Te();e=jt(e,t),e!==null&&(Vn(e,t,n),Ae(e,n))}function xd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gu(e,n)}function yd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(t),gu(e,n)}var vu;vu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)Ie=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ie=!1,od(e,t,n);Ie=(e.flags&131072)!==0}else Ie=!1,le&&(t.flags&1048576)!==0&&Gs(t,Xr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;cl(e,t),e=t.pendingProps;var l=wn(t,Se.current);Cn(t,n),l=Ai(null,t,r,e,l,n);var i=Vi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(i=!0,qr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ri(t),l.updater=al,t.stateNode=l,l._reactInternals=t,qi(t,r,e,n),t=Gi(null,t,r,!0,i,n)):(t.tag=0,le&&i&&ji(t),Le(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(cl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=kd(r),e=ot(r,e),l){case 0:t=Xi(null,t,r,e,n);break e;case 1:t=$a(null,t,r,e,n);break e;case 11:t=Ua(null,t,r,e,n);break e;case 14:t=Aa(null,t,r,ot(r.type,e),n);break e}throw Error(h(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Xi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),$a(e,t,r,l,n);case 3:e:{if(Wa(t),e===null)throw Error(h(387));r=t.pendingProps,i=t.memoizedState,l=i.element,ia(e,t),tl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=_n(Error(h(423)),t),t=Qa(e,t,r,n,l);break e}else if(r!==l){l=_n(Error(h(424)),t),t=Qa(e,t,r,n,l);break e}else for(Qe=Dt(t.stateNode.containerInfo.firstChild),We=t,le=!0,it=null,n=ra(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nn(),r===l){t=St(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return aa(t),e===null&&Ei(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,gi(r,l)?o=null:i!==null&&gi(r,i)&&(t.flags|=32),Ha(e,t),Le(e,t,o,n),t.child;case 6:return e===null&&Ei(t),null;case 13:return qa(e,t,n);case 4:return Di(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sn(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Ua(e,t,r,l,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,b(Jr,r._currentValue),r._currentValue=o,i!==null)if(lt(i.value,o)){if(i.children===l.children&&!Oe.current){t=St(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Nt(-1,n&-n),u.tag=2;var m=i.updateQueue;if(m!==null){m=m.shared;var x=m.pending;x===null?u.next=u:(u.next=x.next,x.next=u),m.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Li(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(h(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Li(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Le(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Cn(t,n),l=Ze(l),r=r(l),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,l=ot(r,t.pendingProps),l=ot(r.type,l),Aa(e,t,r,l,n);case 15:return Va(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),cl(e,t),t.tag=1,Me(r)?(e=!0,qr(t)):e=!1,Cn(t,n),Ta(t,r,l),qi(t,r,l,n),Gi(null,t,r,!0,e,n);case 19:return Ya(e,t,n);case 22:return Ba(e,t,n)}throw Error(h(156,t.tag))};function xu(e,t){return Zo(e,t)}function wd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new wd(e,t,n,r)}function vo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kd(e){if(typeof e=="function")return vo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ct)return 11;if(e===dt)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function kl(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")vo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case De:return on(n.children,l,i,t);case Ye:o=8,l|=8;break;case Ct:return e=et(12,n,t,l|2),e.elementType=Ct,e.lanes=i,e;case Be:return e=et(13,n,t,l),e.elementType=Be,e.lanes=i,e;case nt:return e=et(19,n,t,l),e.elementType=nt,e.lanes=i,e;case ae:return jl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vt:o=10;break e;case qt:o=9;break e;case ct:o=11;break e;case dt:o=14;break e;case Fe:o=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=et(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function on(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function jl(e,t,n,r){return e=et(22,e,r,t),e.elementType=ae,e.lanes=n,e.stateNode={isHidden:!1},e}function xo(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function yo(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jd(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function wo(e,t,n,r,l,i,o,a,u){return e=new jd(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=et(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ri(i),e}function Nd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pe,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function yu(e){if(!e)return Ot;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(Me(n))return Ks(e,n,t)}return t}function wu(e,t,n,r,l,i,o,a,u){return e=wo(n,r,!0,e,l,i,o,a,u),e.context=yu(null),n=e.current,r=Te(),l=Ht(n),i=Nt(r,l),i.callback=t??null,Ut(n,i,l),e.current.lanes=l,Vn(e,l,r),Ae(e,r),e}function Nl(e,t,n,r){var l=t.current,i=Te(),o=Ht(l);return n=yu(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(l,t,o),e!==null&&(ut(e,l,o,i),el(e,l,o)),o}function Sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ku(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ko(e,t){ku(e,t),(e=e.alternate)&&ku(e,t)}function Sd(){return null}var ju=typeof reportError=="function"?reportError:function(e){console.error(e)};function jo(e){this._internalRoot=e}El.prototype.render=jo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));Nl(e,t,null,null)},El.prototype.unmount=jo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){Nl(null,e,null,null)}),t[xt]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var t=is();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&as(e)}};function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nu(){}function Ed(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var m=Sl(o);i.call(m)}}var o=wu(t,r,e,0,null,!1,!1,"",Nu);return e._reactRootContainer=o,e[xt]=o.current,er(e.nodeType===8?e.parentNode:e),nn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var m=Sl(u);a.call(m)}}var u=wo(e,0,!1,null,null,!1,!1,"",Nu);return e._reactRootContainer=u,e[xt]=u.current,er(e.nodeType===8?e.parentNode:e),nn(function(){Nl(t,u,n,r)}),u}function zl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var u=Sl(o);a.call(u)}}Nl(t,o,e,l)}else o=Ed(n,t,e,l,r);return Sl(o)}rs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=An(t.pendingLanes);n!==0&&(ql(t,n|1),Ae(t,ce()),(A&6)===0&&(Tn=ce()+500,Mt()))}break;case 13:nn(function(){var r=jt(e,1);if(r!==null){var l=Te();ut(r,e,1,l)}}),ko(e,1)}},Kl=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=Te();ut(t,e,134217728,n)}ko(e,134217728)}},ls=function(e){if(e.tag===13){var t=Ht(e),n=jt(e,t);if(n!==null){var r=Te();ut(n,e,t,r)}ko(e,t)}},is=function(){return K},os=function(e,t){var n=K;try{return K=e,t()}finally{K=n}},Al=function(e,t,n){switch(t){case"input":if(Tl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Wr(r);if(!l)throw Error(h(90));Lo(r),Tl(r,l)}}}break;case"textarea":Oo(e,n);break;case"select":t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}},Wo=mo,Qo=nn;var Cd={usingClientEntryPoint:!1,Events:[rr,xn,Wr,Ho,$o,mo]},vr={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zd={bundleType:vr.bundleType,version:vr.version,rendererPackageName:vr.rendererPackageName,rendererConfig:vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xo(e),e===null?null:e.stateNode},findFiberByHostInstance:vr.findFiberByHostInstance||Sd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{Er=_l.inject(zd),ft=_l}catch{}}return Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cd,Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!No(t))throw Error(h(200));return Nd(e,t,null,n)},Ve.createRoot=function(e,t){if(!No(e))throw Error(h(299));var n=!1,r="",l=ju;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=wo(e,1,!1,null,null,n,!1,r,l),e[xt]=t.current,er(e.nodeType===8?e.parentNode:e),new jo(t)},Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=Xo(t),e=e===null?null:e.stateNode,e},Ve.flushSync=function(e){return nn(e)},Ve.hydrate=function(e,t,n){if(!Cl(t))throw Error(h(200));return zl(null,e,t,!0,n)},Ve.hydrateRoot=function(e,t,n){if(!No(e))throw Error(h(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=ju;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=wu(t,null,e,1,n??null,l,!1,i,o),e[xt]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new El(t)},Ve.render=function(e,t,n){if(!Cl(t))throw Error(h(200));return zl(null,e,t,!1,n)},Ve.unmountComponentAtNode=function(e){if(!Cl(e))throw Error(h(40));return e._reactRootContainer?(nn(function(){zl(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1},Ve.unstable_batchedUpdates=mo,Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Cl(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return zl(e,t,n,!1,r)},Ve.version="18.3.1-next-f1338f8080-20240426",Ve}var Tu;function Od(){if(Tu)return Co.exports;Tu=1;function N(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N)}catch(F){console.error(F)}}return N(),Co.exports=Fd(),Co.exports}var Ru;function Md(){if(Ru)return Pl;Ru=1;var N=Od();return Pl.createRoot=N.createRoot,Pl.hydrateRoot=N.hydrateRoot,Pl}var Id=Md();function Ud(){return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
        }

        .nav {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 20;
          padding: 24px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a2e;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          color: #1a1a2e;
          text-decoration: none;
          font-weight: 500;
          transition: opacity 0.3s;
        }

        .nav-link:hover {
          opacity: 0.7;
        }

        .cta-button {
          background: #6366f1;
          color: white;
          border: none;
          padding: 12px 32px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 120px 24px 60px;
          max-width: 1200px;
        }

        .rating-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.9);
          padding: 8px 20px;
          border-radius: 50px;
          margin-bottom: 32px;
          font-size: 14px;
          font-weight: 600;
          color: #1a1a2e;
          backdrop-filter: blur(10px);
        }

        .hero-title {
          font-size: 72px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 24px;
          line-height: 1.1;
          text-shadow: 0px 0px 10px #9fb1ffff, 0px 0px 10px #97aaffff;
        }

        .hero-title-accent {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0px 0px 10px #667eea;
        }

        .hero-subtitle {
          font-size: 20px;
          color: #ffffffff;
          margin-bottom: 40px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
          text-shadow: 0px 0px 5px #9fb1ffff, 0px 0px 5px #9fb1ffff, 0px 0px 5px #9fb1ffff, 0px 0px 5px #9fb1ffff, 0px 0px 5px #9fb1ffff;
        }

        .hero-button {
          background: #6366f1;
          color: white;
          border: none;
          padding: 16px 48px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .hero-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(99, 102, 241, 0.4);
        }

        .floating-cards {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }

        .floating-card {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 60px;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1));
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .floating-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-1 {
          top: 15%;
          left: 10%;
          animation-delay: 0s;
        }

        .card-2 {
          top: 20%;
          right: 15%;
          animation-delay: 1s;
        }

        .card-3 {
          bottom: 25%;
          left: 8%;
          animation-delay: 2s;
        }

        .card-4 {
          bottom: 20%;
          right: 12%;
          animation-delay: 1.5s;
        }

        .decorative-star {
          position: absolute;
          font-size: 24px;
          animation: rotate 10s linear infinite;
        }

        .star-1 {
          top: 30%;
          left: 25%;
        }

        .star-2 {
          bottom: 35%;
          right: 30%;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 48px;
          }
          .nav-links {
            gap: 16px;
          }
          .floating-card {
            width: 120px;
            height: 120px;
          }
        }
      `}),s.jsxs("section",{className:"hero-section",children:[s.jsxs("nav",{className:"nav",children:[s.jsx("div",{className:"logo",children:"ESSE.KZ"}),s.jsxs("div",{className:"nav-links",children:[s.jsx("a",{href:"#products",className:"nav-link",children:"Продукты"}),s.jsx("a",{href:"#shop",className:"nav-link",children:"Магазин"}),s.jsx("a",{href:"#solutions",className:"nav-link",children:"Решения"}),s.jsx("button",{className:"cta-button",children:"Связаться"})]})]}),s.jsxs("div",{className:"floating-cards",children:[s.jsx("div",{className:"floating-card card-1",children:s.jsx("img",{src:"https://www.techbusinessnews.com.au/wp-content/uploads/2021/05/types-of-technology.jpg",alt:"Barista"})}),s.jsx("div",{className:"floating-card card-2",children:s.jsx("img",{src:"https://mccabecoffee.com/cdn/shop/files/barista-course.jpg?v=1729846579&width=2048",alt:"Cafe"})}),s.jsx("div",{className:"floating-card card-3",children:s.jsx("img",{src:"https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",alt:"Technology"})}),s.jsx("div",{className:"floating-card card-4",children:s.jsx("img",{src:"https://shopcafebueno.com/cdn/shop/files/Group_1321315547.jpg?v=1731952312",alt:"Customer"})}),s.jsx("div",{className:"decorative-star star-1",children:"✦"}),s.jsx("div",{className:"decorative-star star-2",children:"★"})]}),s.jsxs("div",{className:"hero-content",children:[s.jsxs("div",{className:"rating-badge",children:[s.jsx("span",{children:"⭐ 4.9/5 Рейтинг"}),s.jsx("span",{children:"•"}),s.jsx("span",{children:"4800+ Отзывов"})]}),s.jsxs("h1",{className:"hero-title",children:["Умные Решения",s.jsx("br",{}),"Создают ",s.jsx("span",{className:"hero-title-accent",children:"Сильные Бренды"})]}),s.jsx("p",{className:"hero-subtitle",children:"Партнёр с креативной командой, создающей смелые бренды, повышающей узнаваемость и масштабирующей рост через дизайн и технологии для вашего кафе"}),s.jsx("button",{className:"hero-button",children:"Бесплатный План Бренда"})]})]})]})}function Ad(){return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .features-section {
          padding: 120px 48px;
          background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
        }

        .features-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .features-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .features-subtitle {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: #6366f1;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .features-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .features-description {
          font-size: 18px;
          color: #6b7280;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .feature-card {
          background: white;
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          transform: scaleX(0);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(99, 102, 241, 0.2);
        }

        .feature-card:hover::before {
          transform: scaleX(1);
        }

        .feature-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          margin-bottom: 24px;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .feature-title {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 16px;
        }

        .feature-description {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .features-section {
            padding: 80px 24px;
          }
          .features-title {
            font-size: 36px;
          }
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}),s.jsx("section",{className:"features-section",children:s.jsxs("div",{className:"features-container",children:[s.jsxs("div",{className:"features-header",children:[s.jsx("div",{className:"features-subtitle",children:"Наши Решения"}),s.jsx("h2",{className:"features-title",children:"Технологии для вашего успеха"}),s.jsx("p",{className:"features-description",children:"Комплексные решения для автоматизации и оптимизации работы вашего кафе с использованием передовых технологий"})]}),s.jsxs("div",{className:"features-grid",children:[s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:"⚡"}),s.jsx("h3",{className:"feature-title",children:"Умные POS-системы"}),s.jsx("p",{className:"feature-description",children:"Оптимизируйте операции с интеллектуальными кассовыми системами, разработанными для кафе с высокой проходимостью"})]}),s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:"📱"}),s.jsx("h3",{className:"feature-title",children:"Цифровые меню"}),s.jsx("p",{className:"feature-description",children:"Привлекайте клиентов динамическими дисплеями высокого разрешения, демонстрирующими ваши предложения"})]}),s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:"🤖"}),s.jsx("h3",{className:"feature-title",children:"Автоматизация кухни"}),s.jsx("p",{className:"feature-description",children:"Оптимизируйте рабочий процесс с автоматизированным управлением заказами и системами отслеживания"})]}),s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:"📊"}),s.jsx("h3",{className:"feature-title",children:"Аналитика клиентов"}),s.jsx("p",{className:"feature-description",children:"Лучше понимайте своих клиентов с помощью расширенной аналитики данных и инсайтов"})]}),s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:"☁️"}),s.jsx("h3",{className:"feature-title",children:"Облачное управление"}),s.jsx("p",{className:"feature-description",children:"Управляйте всеми точками из одного места с облачной системой управления и мониторинга"})]}),s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:"🔒"}),s.jsx("h3",{className:"feature-title",children:"Безопасность данных"}),s.jsx("p",{className:"feature-description",children:"Защитите данные клиентов и бизнеса с помощью современных систем шифрования и резервного копирования"})]})]})]})})]})}function Vd(){return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .about-section {
          padding: 120px 48px;
          background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
        }

        .about-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .about-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .about-subtitle {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: #6366f1;
          letter-spacing: 2px;
        }

        .about-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a2e;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .about-description {
          font-size: 18px;
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .about-features {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          flex-shrink: 0;
        }

        .feature-text {
          flex: 1;
        }

        .feature-title {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 8px;
        }

        .feature-description {
          font-size: 15px;
          color: #6b7280;
          line-height: 1.6;
        }

        .about-image-container {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .about-image {
          width: 100%;
          height: 600px;
          object-fit: cover;
        }

        .stats-overlay {
          position: absolute;
          bottom: 40px;
          left: 40px;
          right: 40px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 32px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 36px;
          font-weight: 700;
          color: #6366f1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: #6b7280;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .stats-overlay {
            grid-template-columns: repeat(3, 1fr);
            padding: 24px;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 80px 24px;
          }
          .about-title {
            font-size: 36px;
          }
          .stats-overlay {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}),s.jsx("section",{id:"about",className:"about-section",children:s.jsx("div",{className:"about-container",children:s.jsxs("div",{className:"about-grid",children:[s.jsxs("div",{className:"about-content",children:[s.jsx("div",{className:"about-subtitle",children:"О Нас"}),s.jsx("h2",{className:"about-title",children:"Мы создаём будущее кафе-технологий"}),s.jsx("p",{className:"about-description",children:"С 2015 года мы помогаем владельцам кафе и ресторанов трансформировать их бизнес с помощью передовых технологий. Наша миссия — сделать профессиональное оборудование доступным и простым в использовании."}),s.jsxs("div",{className:"about-features",children:[s.jsxs("div",{className:"feature-item",children:[s.jsx("div",{className:"feature-icon",children:"🏆"}),s.jsxs("div",{className:"feature-text",children:[s.jsx("div",{className:"feature-title",children:"Премиум качество"}),s.jsx("div",{className:"feature-description",children:"Работаем только с проверенными производителями и предоставляем расширенную гарантию на всё оборудование"})]})]}),s.jsxs("div",{className:"feature-item",children:[s.jsx("div",{className:"feature-icon",children:"🔧"}),s.jsxs("div",{className:"feature-text",children:[s.jsx("div",{className:"feature-title",children:"Полная поддержка"}),s.jsx("div",{className:"feature-description",children:"Бесплатная установка, обучение персонала и круглосуточная техническая поддержка для всех клиентов"})]})]}),s.jsxs("div",{className:"feature-item",children:[s.jsx("div",{className:"feature-icon",children:"💡"}),s.jsxs("div",{className:"feature-text",children:[s.jsx("div",{className:"feature-title",children:"Инновации"}),s.jsx("div",{className:"feature-description",children:"Постоянно обновляем каталог новейшими технологиями и умными решениями для вашего бизнеса"})]})]})]})]}),s.jsxs("div",{className:"about-image-container",children:[s.jsx("img",{src:"https://www.indesignlive.sg/wp-content/uploads/2019/11/03_KaizenCoffeeCoSpacecraftccKetsireeWongwan_interior-768x1024.jpg",alt:"Современное кафе с технологиями",className:"about-image"}),s.jsxs("div",{className:"stats-overlay",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("div",{className:"stat-number",children:"500+"}),s.jsx("div",{className:"stat-label",children:"Довольных клиентов"})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("div",{className:"stat-number",children:"98%"}),s.jsx("div",{className:"stat-label",children:"Рейтинг качества"})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("div",{className:"stat-number",children:"24/7"}),s.jsx("div",{className:"stat-label",children:"Поддержка"})]})]})]})]})})})]})}function Bd(){const[N,F]=sn.useState(null),[h,ee]=sn.useState(0),[D,Y]=sn.useState("equipment"),[X,ie]=sn.useState(1),$=6,G=D==="equipment"?[{id:3,name:"Эспрессо Машина Elite",category:"Оборудование",price:"379 990 ₽",images:["/professional-espresso-machine-modern-design.jpg","/espresso-machine-making-coffee.jpg","/espresso-machine-control-panel.jpg"],description:"Профессиональная эспрессо-машина с двойным бойлером",fullDescription:"Топовая эспрессо-машина с двумя бойлерами, PID-контроллером температуры, программируемыми настройками и возможностью приготовления до 200 чашек в день.",specs:["Бойлеры: 2 независимых","Группы: 2 профессиональные","Давление: 9 бар","Производительность: 200 чашек/день"]},{id:4,name:"Умная Кофемолка",category:"Оборудование",price:"98 990 ₽",images:["/modern-coffee-grinder-with-digital-display.jpg","/coffee-grinder-grinding-beans.jpg","/coffee-grinder-close-up-burrs.jpg"],description:"Прецизионная кофемолка с программируемыми настройками",fullDescription:"Профессиональная кофемолка с коническими жерновами из закалённой стали, 40 степеней помола, цифровым дисплеем и программируемой дозировкой.",specs:["Жернова: Конические 64мм","Степени помола: 40","Бункер: 1.2 кг","Скорость: 3-5 сек/порция"]},{id:2,name:"Система Витринных Полок",category:"Витрины",price:"67 990 ₽",images:["/modern-glass-display-shelf-with-led-lights.jpg","/display-shelf-with-pastries.jpg","/display-shelf-side-angle.jpg"],description:"Элегантная стеклянная витрина с LED-подсветкой",fullDescription:"Современная витринная система с закалённым стеклом, регулируемыми полками и встроенной LED-подсветкой. Создаёт привлекательную презентацию ваших продуктов.",specs:["Размер: 120x60x180 см","Материал: Закалённое стекло","LED-подсветка: RGB","Полки: 4 регулируемые"]},{id:7,name:"Профессиональный Блендер",category:"Оборудование",price:"45 990 ₽",images:["/placeholder.svg?height=600&width=600","/placeholder.svg?height=600&width=600","/placeholder.svg?height=600&width=600"],description:"Мощный блендер для смузи и коктейлей",fullDescription:"Профессиональный блендер с мощностью 2000 Вт, программируемыми режимами и самоочисткой.",specs:["Мощность: 2000 Вт","Объём: 2 литра","Скорости: 10 программ","Материал: Нержавеющая сталь"]},{id:8,name:"Тостер Конвейерный",category:"Оборудование",price:"78 990 ₽",images:["/placeholder.svg?height=600&width=600","/placeholder.svg?height=600&width=600","/placeholder.svg?height=600&width=600"],description:"Конвейерный тостер для высокой производительности",fullDescription:"Профессиональный конвейерный тостер с регулируемой скоростью и температурой для идеальных тостов.",specs:["Производительность: 300 тостов/час","Ширина: 35 см","Регулировка: Температура и скорость","Гарантия: 2 года"]},{id:9,name:"Посудомоечная Машина",category:"Оборудование",price:"156 990 ₽",images:["/placeholder.svg?height=600&width=600","/placeholder.svg?height=600&width=600","/placeholder.svg?height=600&width=600"],description:"Коммерческая посудомоечная машина",fullDescription:"Высокоскоростная посудомоечная машина с циклом 90 секунд и низким потреблением воды.",specs:["Цикл: 90 секунд","Корзины: 40 в час","Потребление воды: 2.5 л/цикл","Температура: 85°C"]},{id:10,name:"Микроволновая Печь Pro",category:"Оборудование",price:"34 990 ₽",images:["/placeholder.svg?height=600&width=600","/placeholder.svg?height=600&width=600","/placeholder.svg?height=600&width=600"],description:"Коммерческая микроволновая печь",fullDescription:"Мощная микроволновая печь с программируемыми настройками для быстрого разогрева.",specs:["Мощность: 1800 Вт","Объём: 34 литра","Программы: 10","Материал: Нержавеющая сталь"]}]:[{id:1,name:"Коммерческий Холодильник Pro",category:"Холодильное оборудование",price:"189 990 ₽",images:["/commercial-refrigerator-stainless-steel-front-view.jpg","/commercial-refrigerator-interior-shelves.jpg","/commercial-refrigerator-side-view.jpg"],description:"Премиальный холодильник из нержавеющей стали с умным контролем температуры",fullDescription:"Профессиональный коммерческий холодильник с системой No Frost, цифровым управлением температурой, LED-подсветкой и энергоэффективностью класса A++. Идеально подходит для хранения продуктов и напитков в кафе.",specs:["Объём: 600 литров","Температура: -2°C до +8°C","Энергопотребление: A++","Гарантия: 3 года"]},{id:5,name:"Витрина для Выпечки",category:"Витрины",price:"136 990 ₽",images:["/curved-glass-pastry-display-case.jpg","/pastry-display-case-with-cakes.jpg","/placeholder.svg?height=600&width=600"],description:"Витрина с изогнутым стеклом и охлаждением",fullDescription:"Элегантная холодильная витрина с панорамным изогнутым стеклом, регулируемой температурой и влажностью, идеальна для демонстрации выпечки и десертов.",specs:["Объём: 400 литров","Температура: +2°C до +10°C","Стекло: Панорамное изогнутое","Полки: 3 уровня"]},{id:6,name:"Коммерческий Морозильник",category:"Холодильное оборудование",price:"249 990 ₽",images:["/placeholder.svg?height=600&width=600","/placeholder.svg?height=600&width=600","/placeholder.svg?height=600&width=600"],description:"Энергоэффективный морозильник с цифровым управлением",fullDescription:"Мощный коммерческий морозильник с системой быстрой заморозки, цифровым контролем температуры, автоматической разморозкой и низким энергопотреблением.",specs:["Объём: 700 литров","Температура: -18°C до -25°C","Энергокласс: A+++","Быстрая заморозка: Да"]},{id:11,name:"Ледогенератор",category:"Холодильное оборудование",price:"89 990 ₽",images:["/placeholder.svg?height=600&width=600","/placeholder.svg?height=600&width=600","/placeholder.svg?height=600&width=600"],description:"Автоматический ледогенератор высокой производительности",fullDescription:"Профессиональный ледогенератор с производительностью 50 кг льда в сутки и встроенным хранилищем.",specs:["Производительность: 50 кг/сутки","Хранилище: 25 кг","Тип льда: Кубики","Охлаждение: Воздушное"]},{id:12,name:"Барная Холодильная Витрина",category:"Витрины",price:"112 990 ₽",images:["/placeholder.svg?height=600&width=600","/placeholder.svg?height=600&width=600","/placeholder.svg?height=600&width=600"],description:"Стильная барная витрина для напитков",fullDescription:"Элегантная холодильная витрина с LED-подсветкой и стеклянными дверцами для демонстрации напитков.",specs:["Объём: 300 литров","Температура: +2°C до +8°C","Дверцы: Стеклянные раздвижные","LED-подсветка: Да"]}],W=Math.ceil(G.length/$),_e=(X-1)*$,Re=_e+$,Z=G.slice(_e,Re),Q=U=>{F(U),ee(0)},Ke=U=>{Y(U),ie(1)};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .shop-section {
          padding: 120px 48px;
          background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
        }

        .shop-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .shop-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .shop-subtitle {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: #6366f1;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .shop-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 24px;
        }

        .shop-description {
          font-size: 18px;
          color: #6b7280;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 32px;
          margin-bottom: 60px;
        }

        .category-tabs {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 60px;
        }

        .category-tab {
          background: white;
          border: 2px solid #e5e7eb;
          color: #6b7280;
          padding: 16px 40px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .category-tab:hover {
          border-color: #6366f1;
          color: #6366f1;
        }

        .category-tab.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-color: transparent;
          color: white;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }

        .product-card {
          background: white;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(99, 102, 241, 0.2);
        }

        .product-image-container {
          position: relative;
          width: 100%;
          padding-top: 100%;
          overflow: hidden;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .product-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .product-card:hover .product-image {
          transform: scale(1.1);
        }

        .product-category {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(99, 102, 241, 0.95);
          color: white;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .product-info {
          padding: 28px;
        }

        .product-name {
          font-size: 22px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 12px;
        }

        .product-description {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .product-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .product-price {
          font-size: 28px;
          font-weight: 700;
          color: #6366f1;
        }

        .view-details-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .view-details-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.3s ease-out;
        }

        .modal-content {
          background: white;
          border-radius: 32px;
          max-width: 1100px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.3);
        }

        .modal-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-close:hover {
          background: #f3f4f6;
          transform: rotate(90deg);
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          padding: 48px;
        }

        .modal-images {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .main-modal-image {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 24px;
          object-fit: cover;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .thumbnail-images {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .thumbnail {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 16px;
          object-fit: cover;
          cursor: pointer;
          transition: all 0.3s;
          border: 3px solid transparent;
        }

        .thumbnail:hover {
          border-color: #6366f1;
          transform: scale(1.05);
        }

        .thumbnail.active {
          border-color: #6366f1;
          box-shadow: 0 0 0 2px white, 0 0 0 4px #6366f1;
        }

        .modal-details {
          display: flex;
          flex-direction: column;
        }

        .modal-category {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 16px;
          width: fit-content;
        }

        .modal-name {
          font-size: 36px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .modal-price {
          font-size: 42px;
          font-weight: 700;
          color: #6366f1;
          margin-bottom: 24px;
        }

        .modal-description {
          font-size: 16px;
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .modal-specs {
          background: #f9fafb;
          border-radius: 20px;
          padding: 24px;
          margin-bottom: 32px;
        }

        .specs-title {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 16px;
        }

        .specs-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .specs-list li {
          padding: 12px 0;
          border-bottom: 1px solid #e5e7eb;
          color: #4b5563;
          font-size: 15px;
        }

        .specs-list li:last-child {
          border-bottom: none;
        }

        .modal-actions {
          display: flex;
          gap: 16px;
        }

        .add-to-cart-btn {
          flex: 1;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 18px 32px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .add-to-cart-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(99, 102, 241, 0.4);
        }

        .contact-btn {
          background: white;
          color: #6366f1;
          border: 2px solid #6366f1;
          padding: 18px 32px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .contact-btn:hover {
          background: #6366f1;
          color: white;
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-top: 60px;
        }

        .pagination-btn {
          background: white;
          border: 2px solid #e5e7eb;
          color: #6b7280;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pagination-btn:hover:not(:disabled) {
          border-color: #6366f1;
          color: #6366f1;
          transform: scale(1.05);
        }

        .pagination-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .pagination-btn.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-color: transparent;
          color: white;
        }

        .pagination-info {
          color: #6b7280;
          font-size: 14px;
          font-weight: 500;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
          .modal-grid {
            grid-template-columns: 1fr;
          }
          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .shop-section {
            padding: 80px 24px;
          }
          .shop-title {
            font-size: 36px;
          }
          .products-grid {
            grid-template-columns: 1fr;
          }
          .modal-grid {
            padding: 24px;
            gap: 24px;
          }
        }
      `}),s.jsxs("section",{id:"shop",className:"shop-section",children:[s.jsxs("div",{className:"shop-container",children:[s.jsxs("div",{className:"shop-header",children:[s.jsx("div",{className:"shop-subtitle",children:"Премиум Оборудование"}),s.jsx("h2",{className:"shop-title",children:"Магазин эксклюзивной коллекции"}),s.jsx("p",{className:"shop-description",children:"Профессиональное оборудование, разработанное для современных кафе. Все продукты поставляются с гарантией и поддержкой установки."})]}),s.jsxs("div",{className:"category-tabs",children:[s.jsx("button",{className:`category-tab ${D==="equipment"?"active":""}`,onClick:()=>Ke("equipment"),children:"Оборудование и Витрины"}),s.jsx("button",{className:`category-tab ${D==="refrigeration"?"active":""}`,onClick:()=>Ke("refrigeration"),children:"Холодильное Оборудование"})]}),s.jsx("div",{className:"products-grid",children:Z.map(U=>s.jsxs("div",{className:"product-card",onClick:()=>Q(U),children:[s.jsxs("div",{className:"product-image-container",children:[s.jsx("img",{src:U.images[0]||"/placeholder.svg",alt:U.name,className:"product-image"}),s.jsx("div",{className:"product-category",children:U.category})]}),s.jsxs("div",{className:"product-info",children:[s.jsx("h3",{className:"product-name",children:U.name}),s.jsx("p",{className:"product-description",children:U.description}),s.jsxs("div",{className:"product-footer",children:[s.jsx("span",{className:"product-price",children:U.price}),s.jsx("button",{className:"view-details-btn",children:"Подробнее"})]})]})]},U.id))}),W>1&&s.jsxs("div",{className:"pagination",children:[s.jsx("button",{className:"pagination-btn",onClick:()=>ie(X-1),disabled:X===1,children:"←"}),Array.from({length:W},(U,fe)=>fe+1).map(U=>s.jsx("button",{className:`pagination-btn ${X===U?"active":""}`,onClick:()=>ie(U),children:U},U)),s.jsx("button",{className:"pagination-btn",onClick:()=>ie(X+1),disabled:X===W,children:"→"}),s.jsxs("span",{className:"pagination-info",children:["Страница ",X," из ",W]})]})]}),N&&s.jsx("div",{className:"modal-overlay",onClick:()=>F(null),children:s.jsxs("div",{className:"modal-content",onClick:U=>U.stopPropagation(),children:[s.jsx("button",{className:"modal-close",onClick:()=>F(null),children:"×"}),s.jsxs("div",{className:"modal-grid",children:[s.jsxs("div",{className:"modal-images",children:[s.jsx("img",{src:N.images[h]||"/placeholder.svg",alt:N.name,className:"main-modal-image"}),s.jsx("div",{className:"thumbnail-images",children:N.images.map((U,fe)=>s.jsx("img",{src:U||"/placeholder.svg",alt:`${N.name} ${fe+1}`,className:`thumbnail ${fe===h?"active":""}`,onClick:()=>ee(fe)},fe))})]}),s.jsxs("div",{className:"modal-details",children:[s.jsx("span",{className:"modal-category",children:N.category}),s.jsx("h2",{className:"modal-name",children:N.name}),s.jsx("div",{className:"modal-price",children:N.price}),s.jsx("p",{className:"modal-description",children:N.fullDescription}),s.jsxs("div",{className:"modal-specs",children:[s.jsx("h3",{className:"specs-title",children:"Технические характеристики"}),s.jsx("ul",{className:"specs-list",children:N.specs.map((U,fe)=>s.jsx("li",{children:U},fe))})]}),s.jsxs("div",{className:"modal-actions",children:[s.jsx("button",{className:"add-to-cart-btn",children:"🛒 Добавить в корзину"}),s.jsx("button",{className:"contact-btn",children:"Связаться"})]})]})]})]})})]})]})}function Hd(){const N=[{number:"01",title:"Консультация",description:"Обсуждаем ваши потребности и подбираем оптимальное оборудование для вашего кафе",icon:"💬"},{number:"02",title:"Подбор решения",description:"Составляем индивидуальное коммерческое предложение с учётом вашего бюджета",icon:"📋"},{number:"03",title:"Оформление заказа",description:"Заключаем договор и согласовываем сроки поставки и установки",icon:"✍️"},{number:"04",title:"Доставка и установка",description:"Доставляем оборудование и выполняем профессиональный монтаж",icon:"🚚"},{number:"05",title:"Обучение персонала",description:"Проводим обучение вашего персонала работе с оборудованием",icon:"👨‍🏫"},{number:"06",title:"Поддержка",description:"Обеспечиваем техническую поддержку и сервисное обслуживание",icon:"🛠️"}];return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .process-section {
          padding: 120px 48px;
          background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
          position: relative;
          overflow: hidden;
        }

        .process-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .process-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .process-subtitle {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: #6366f1;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .process-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 24px;
        }

        .process-description {
          font-size: 18px;
          color: #6b7280;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .process-card {
          background: white;
          padding: 40px;
          border-radius: 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s;
          position: relative;
        }

        .process-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(99, 102, 241, 0.2);
        }

        .process-number {
          position: absolute;
          top: -20px;
          right: 30px;
          font-size: 72px;
          font-weight: 700;
          color: #f3f4f6;
          line-height: 1;
        }

        .process-icon {
          font-size: 56px;
          margin-bottom: 24px;
          display: block;
        }

        .process-card-title {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 16px;
        }

        .process-card-description {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .process-section {
            padding: 80px 24px;
          }
          
          .process-title {
            font-size: 36px;
          }
          
          .process-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}),s.jsx("section",{id:"process",className:"process-section",children:s.jsxs("div",{className:"process-container",children:[s.jsxs("div",{className:"process-header",children:[s.jsx("div",{className:"process-subtitle",children:"Как Мы Работаем"}),s.jsx("h2",{className:"process-title",children:"Простой процесс сотрудничества"}),s.jsx("p",{className:"process-description",children:"От первой консультации до послепродажного обслуживания — мы сопровождаем вас на каждом этапе"})]}),s.jsx("div",{className:"process-grid",children:N.map((F,h)=>s.jsxs("div",{className:"process-card",children:[s.jsx("div",{className:"process-number",children:F.number}),s.jsx("span",{className:"process-icon",children:F.icon}),s.jsx("h3",{className:"process-card-title",children:F.title}),s.jsx("p",{className:"process-card-description",children:F.description})]},h))})]})})]})}function $d(){return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .location-section {
          padding: 120px 48px;
          background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
        }

        .location-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .location-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .location-subtitle {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: #6366f1;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .location-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 24px;
        }

        .location-description {
          font-size: 18px;
          color: #6b7280;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .location-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .location-info {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .info-card {
          background: white;
          padding: 32px;
          border-radius: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s;
        }

        .info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(99, 102, 241, 0.15);
        }

        .info-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin-bottom: 20px;
        }

        .info-title {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 12px;
        }

        .info-text {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.6;
        }

        .map-container {
          position: relative;
          width: 100%;
          height: 600px;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .map-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          color: white;
          font-size: 24px;
          font-weight: 600;
        }

        .map-icon {
          font-size: 80px;
          margin-bottom: 20px;
        }

        @media (max-width: 1024px) {
          .location-content {
            grid-template-columns: 1fr;
          }
          
          .map-container {
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .location-section {
            padding: 80px 24px;
          }
          
          .location-title {
            font-size: 36px;
          }
          
          .map-container {
            height: 300px;
          }
        }
      `}),s.jsx("section",{id:"location",className:"location-section",children:s.jsxs("div",{className:"location-container",children:[s.jsxs("div",{className:"location-header",children:[s.jsx("div",{className:"location-subtitle",children:"Наше Местоположение"}),s.jsx("h2",{className:"location-title",children:"Посетите наш шоурум"}),s.jsx("p",{className:"location-description",children:"Приглашаем вас посетить наш выставочный зал, где вы сможете увидеть всё оборудование в действии и получить профессиональную консультацию."})]}),s.jsxs("div",{className:"location-content",children:[s.jsxs("div",{className:"location-info",children:[s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:"📍"}),s.jsx("h3",{className:"info-title",children:"Адрес"}),s.jsxs("p",{className:"info-text",children:["г. Москва, ул. Тверская, д. 15, стр. 1",s.jsx("br",{}),'БЦ "Технопарк", 3 этаж']})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:"🕐"}),s.jsx("h3",{className:"info-title",children:"Часы работы"}),s.jsxs("p",{className:"info-text",children:["Понедельник - Пятница: 9:00 - 20:00",s.jsx("br",{}),"Суббота: 10:00 - 18:00",s.jsx("br",{}),"Воскресенье: Выходной"]})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:"📞"}),s.jsx("h3",{className:"info-title",children:"Контакты"}),s.jsxs("p",{className:"info-text",children:["Телефон: +7 (495) 123-45-67",s.jsx("br",{}),"Email: info@essekz.ru",s.jsx("br",{}),"WhatsApp: +7 (999) 888-77-66"]})]})]}),s.jsx("div",{className:"map-container",children:s.jsxs("div",{className:"map-placeholder",children:[s.jsx("div",{className:"map-icon",children:"🗺️"}),s.jsx("div",{children:"Интерактивная карта"}),s.jsx("div",{style:{fontSize:"16px",marginTop:"12px",opacity:.9},children:"г. Москва, ул. Тверская, д. 15"})]})})]})]})})]})}function Wd(){const[N,F]=sn.useState(0),h=[{question:"Какая гарантия на оборудование?",answer:"Мы предоставляем официальную гарантию от производителя на всё оборудование. Стандартный срок гарантии составляет от 1 до 3 лет в зависимости от типа оборудования. Также доступно расширенное гарантийное обслуживание."},{question:"Предоставляете ли вы услуги по установке?",answer:"Да, мы предлагаем полный комплекс услуг по установке и настройке оборудования. Наши сертифицированные специалисты выполнят монтаж, подключение и пусконаладочные работы. Также проводим обучение персонала работе с оборудованием."},{question:"Возможна ли рассрочка или лизинг?",answer:"Мы работаем с ведущими банками и лизинговыми компаниями. Доступна рассрочка до 12 месяцев без процентов и лизинг на срок до 5 лет. Наши менеджеры помогут подобрать оптимальную схему финансирования."},{question:"Как быстро доставляется оборудование?",answer:"Оборудование, имеющееся на складе, доставляется в течение 1-3 рабочих дней по Москве и области. Доставка в регионы занимает 3-7 дней. Оборудование под заказ поставляется в течение 2-4 недель."},{question:"Предоставляете ли вы техническое обслуживание?",answer:"Да, мы предлагаем договоры на регулярное техническое обслуживание. Это включает профилактические осмотры, чистку, настройку и замену расходных материалов. Также доступна экстренная техподдержка 24/7."},{question:"Можно ли протестировать оборудование перед покупкой?",answer:"Конечно! В нашем шоуруме вы можете протестировать любое оборудование. Мы также предлагаем демонстрацию оборудования на вашей площадке. Для крупных заказов возможна аренда оборудования на тестовый период."}];return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .faq-section {
          padding: 120px 48px;
          background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .faq-subtitle {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: #6366f1;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .faq-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 24px;
        }

        .faq-description {
          font-size: 18px;
          color: #6b7280;
          line-height: 1.6;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .faq-item {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s;
        }

        .faq-item:hover {
          box-shadow: 0 8px 30px rgba(99, 102, 241, 0.15);
        }

        .faq-question {
          width: 100%;
          padding: 28px 32px;
          background: none;
          border: none;
          text-align: left;
          font-size: 18px;
          font-weight: 700;
          color: #1a1a2e;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s;
        }

        .faq-question:hover {
          color: #6366f1;
        }

        .faq-icon {
          font-size: 24px;
          transition: transform 0.3s;
          color: #6366f1;
        }

        .faq-icon.open {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease-out, padding 0.4s ease-out;
        }

        .faq-answer.open {
          max-height: 500px;
          padding: 0 32px 28px 32px;
        }

        .faq-answer-text {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.8;
        }

        @media (max-width: 768px) {
          .faq-section {
            padding: 80px 24px;
          }
          
          .faq-title {
            font-size: 36px;
          }
          
          .faq-question {
            font-size: 16px;
            padding: 20px 24px;
          }
          
          .faq-answer.open {
            padding: 0 24px 20px 24px;
          }
        }
      `}),s.jsx("section",{id:"faq",className:"faq-section",children:s.jsxs("div",{className:"faq-container",children:[s.jsxs("div",{className:"faq-header",children:[s.jsx("div",{className:"faq-subtitle",children:"Часто Задаваемые Вопросы"}),s.jsx("h2",{className:"faq-title",children:"Ответы на ваши вопросы"}),s.jsx("p",{className:"faq-description",children:"Собрали самые популярные вопросы от наших клиентов. Не нашли ответ? Свяжитесь с нами!"})]}),s.jsx("div",{className:"faq-list",children:h.map((ee,D)=>s.jsxs("div",{className:"faq-item",children:[s.jsxs("button",{className:"faq-question",onClick:()=>F(N===D?null:D),children:[s.jsx("span",{children:ee.question}),s.jsx("span",{className:`faq-icon ${N===D?"open":""}`,children:"▼"})]}),s.jsx("div",{className:`faq-answer ${N===D?"open":""}`,children:s.jsx("p",{className:"faq-answer-text",children:ee.answer})})]},D))})]})})]})}function Qd(){return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .testimonials-section {
          padding: 120px 48px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
        }

        .testimonials-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="1" fill="white" opacity="0.1"/></svg>');
          pointer-events: none;
        }

        .testimonials-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .testimonials-subtitle {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .testimonials-title {
          font-size: 48px;
          font-weight: 700;
          color: white;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .testimonial-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .testimonial-author-info {
          flex: 1;
        }

        .testimonial-author {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 4px;
        }

        .testimonial-role {
          font-size: 14px;
          color: #6b7280;
        }

        .testimonial-quote {
          font-size: 16px;
          color: #4b5563;
          line-height: 1.8;
          font-style: italic;
          position: relative;
          padding-left: 24px;
        }

        .testimonial-quote::before {
          content: """;
          position: absolute;
          left: 0;
          top: -8px;
          font-size: 48px;
          color: #6366f1;
          opacity: 0.3;
          font-family: Georgia, serif;
        }

        .testimonial-rating {
          display: flex;
          gap: 4px;
          margin-top: 20px;
        }

        .star {
          color: #fbbf24;
          font-size: 18px;
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 80px 24px;
          }
          .testimonials-title {
            font-size: 36px;
          }
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}),s.jsx("section",{className:"testimonials-section",children:s.jsxs("div",{className:"testimonials-container",children:[s.jsxs("div",{className:"testimonials-header",children:[s.jsx("div",{className:"testimonials-subtitle",children:"Отзывы клиентов"}),s.jsx("h2",{className:"testimonials-title",children:"Нам доверяют лучшие заведения"})]}),s.jsxs("div",{className:"testimonials-grid",children:[s.jsxs("div",{className:"testimonial-card",children:[s.jsxs("div",{className:"testimonial-header",children:[s.jsx("img",{src:"/professional-woman-cafe-owner-portrait.jpg",alt:"Сара Митчелл",className:"testimonial-avatar"}),s.jsxs("div",{className:"testimonial-author-info",children:[s.jsx("div",{className:"testimonial-author",children:"Сара Митчелл"}),s.jsx("div",{className:"testimonial-role",children:"Владелец, Artisan Coffee House"})]})]}),s.jsx("p",{className:"testimonial-quote",children:"ESSE.KZ полностью трансформировал наши операции. Прирост эффективности просто поразительный. Мы увеличили оборот на 40% за первые три месяца."}),s.jsxs("div",{className:"testimonial-rating",children:[s.jsx("span",{className:"star",children:"★"}),s.jsx("span",{className:"star",children:"★"}),s.jsx("span",{className:"star",children:"★"}),s.jsx("span",{className:"star",children:"★"}),s.jsx("span",{className:"star",children:"★"})]})]}),s.jsxs("div",{className:"testimonial-card",children:[s.jsxs("div",{className:"testimonial-header",children:[s.jsx("img",{src:"/professional-man-restaurant-manager-portrait.jpg",alt:"Джеймс Чен",className:"testimonial-avatar"}),s.jsxs("div",{className:"testimonial-author-info",children:[s.jsx("div",{className:"testimonial-author",children:"Джеймс Чен"}),s.jsx("div",{className:"testimonial-role",children:"Менеджер, Urban Brew"})]})]}),s.jsx("p",{className:"testimonial-quote",children:"Технология интуитивно понятна, и наш персонал адаптировался мгновенно. Удовлетворённость клиентов взлетела до небес. Лучшее решение для нашего бизнеса."}),s.jsxs("div",{className:"testimonial-rating",children:[s.jsx("span",{className:"star",children:"★"}),s.jsx("span",{className:"star",children:"★"}),s.jsx("span",{className:"star",children:"★"}),s.jsx("span",{className:"star",children:"★"}),s.jsx("span",{className:"star",children:"★"})]})]}),s.jsxs("div",{className:"testimonial-card",children:[s.jsxs("div",{className:"testimonial-header",children:[s.jsx("img",{src:"/professional-woman-business-director-portrait.jpg",alt:"Мария Родригес",className:"testimonial-avatar"}),s.jsxs("div",{className:"testimonial-author-info",children:[s.jsx("div",{className:"testimonial-author",children:"Мария Родригес"}),s.jsx("div",{className:"testimonial-role",children:"Директор, Cafe Collective"})]})]}),s.jsx("p",{className:"testimonial-quote",children:"Инвестиция, которая окупилась за несколько месяцев. Одна только аналитика стоит своих денег. Теперь мы принимаем решения на основе данных."}),s.jsxs("div",{className:"testimonial-rating",children:[s.jsx("span",{className:"star",children:"★"}),s.jsx("span",{className:"star",children:"★"}),s.jsx("span",{className:"star",children:"★"}),s.jsx("span",{className:"star",children:"★"}),s.jsx("span",{className:"star",children:"★"})]})]})]})]})})]})}function qd(){const[N,F]=sn.useState({name:"",email:"",phone:"",message:""}),h=D=>{D.preventDefault(),console.log("[v0] Form submitted:",N),alert("Спасибо за обращение! Мы свяжемся с вами в ближайш��е время."),F({name:"",email:"",phone:"",message:""})},ee=D=>{F({...N,[D.target.name]:D.target.value})};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .contact-section {
          padding: 120px 48px;
          background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
        }

        .contact-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .contact-content {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .contact-subtitle {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: #6366f1;
          letter-spacing: 2px;
        }

        .contact-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a2e;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .contact-description {
          font-size: 18px;
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .contact-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          flex-shrink: 0;
        }

        .contact-info-text {
          flex: 1;
        }

        .contact-info-label {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 4px;
        }

        .contact-info-value {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a2e;
        }

        .contact-form {
          background: white;
          padding: 48px;
          border-radius: 32px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 8px;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 16px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 16px;
          font-family: inherit;
          transition: all 0.3s;
          background: #f9fafb;
          color: #1a1a2e;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #6366f1;
          background: white;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
        }

        .form-textarea {
          min-height: 150px;
          resize: vertical;
        }

        .submit-button {
          width: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 18px 32px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(99, 102, 241, 0.4);
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 80px 24px;
          }
          .contact-title {
            font-size: 36px;
          }
          .contact-form {
            padding: 32px 24px;
          }
        }
      `}),s.jsx("section",{id:"contact",className:"contact-section",children:s.jsx("div",{className:"contact-container",children:s.jsxs("div",{className:"contact-grid",children:[s.jsxs("div",{className:"contact-content",children:[s.jsx("div",{className:"contact-subtitle",children:"Свяжитесь с нами"}),s.jsx("h2",{className:"contact-title",children:"Готовы трансформировать ваше кафе?"}),s.jsx("p",{className:"contact-description",children:"Наша команда экспертов готова помочь вам выбрать идеальное решение для вашего бизнеса. Получите бесплатную консультацию и персональное предложение."}),s.jsxs("div",{className:"contact-info",children:[s.jsxs("div",{className:"contact-info-item",children:[s.jsx("div",{className:"contact-icon",children:"📞"}),s.jsxs("div",{className:"contact-info-text",children:[s.jsx("div",{className:"contact-info-label",children:"Телефон"}),s.jsx("div",{className:"contact-info-value",children:"+7 (495) 123-45-67"})]})]}),s.jsxs("div",{className:"contact-info-item",children:[s.jsx("div",{className:"contact-icon",children:"✉️"}),s.jsxs("div",{className:"contact-info-text",children:[s.jsx("div",{className:"contact-info-label",children:"Email"}),s.jsx("div",{className:"contact-info-value",children:"info@essekz.ru"})]})]}),s.jsxs("div",{className:"contact-info-item",children:[s.jsx("div",{className:"contact-icon",children:"📍"}),s.jsxs("div",{className:"contact-info-text",children:[s.jsx("div",{className:"contact-info-label",children:"Адрес"}),s.jsx("div",{className:"contact-info-value",children:"Москва, ул. Тверская, 15"})]})]})]})]}),s.jsxs("form",{className:"contact-form",onSubmit:h,children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",htmlFor:"name",children:"Имя *"}),s.jsx("input",{type:"text",id:"name",name:"name",className:"form-input",value:N.name,onChange:ee,required:!0,placeholder:"Ваше имя"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",htmlFor:"email",children:"Email *"}),s.jsx("input",{type:"email",id:"email",name:"email",className:"form-input",value:N.email,onChange:ee,required:!0,placeholder:"your@email.com"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",htmlFor:"phone",children:"Телефон"}),s.jsx("input",{type:"tel",id:"phone",name:"phone",className:"form-input",value:N.phone,onChange:ee,placeholder:"+7 (___) ___-__-__"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",htmlFor:"message",children:"Сообщение *"}),s.jsx("textarea",{id:"message",name:"message",className:"form-textarea",value:N.message,onChange:ee,required:!0,placeholder:"Расскажите о вашем проекте..."})]}),s.jsx("button",{type:"submit",className:"submit-button",children:"Отправить заявку"})]})]})})})]})}function Kd(){return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .footer {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: white;
          padding: 80px 48px 40px;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-logo {
          font-size: 32px;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-description {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          max-width: 350px;
        }

        .footer-column h4 {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 24px;
          color: rgba(255, 255, 255, 0.8);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 15px;
          transition: all 0.3s;
        }

        .footer-links a:hover {
          color: white;
          padding-left: 8px;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-copyright {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
        }

        .footer-social {
          display: flex;
          gap: 24px;
        }

        .footer-social a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s;
        }

        .footer-social a:hover {
          color: #667eea;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 60px 24px 32px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 24px;
            text-align: center;
          }
        }
      `}),s.jsx("footer",{className:"footer",children:s.jsxs("div",{className:"footer-container",children:[s.jsxs("div",{className:"footer-grid",children:[s.jsxs("div",{className:"footer-brand",children:[s.jsx("div",{className:"footer-logo",children:"ESSE.KZ Premium"}),s.jsx("p",{className:"footer-description",children:"Премиальные технологические решения для современных кафе и ресторанов. Инновации, качество и поддержка на высшем уровне."})]}),s.jsxs("div",{className:"footer-column",children:[s.jsx("h4",{children:"Продукты"}),s.jsxs("ul",{className:"footer-links",children:[s.jsx("li",{children:s.jsx("a",{href:"#shop",children:"Оборудование"})}),s.jsx("li",{children:s.jsx("a",{href:"#shop",children:"Холодильники"})}),s.jsx("li",{children:s.jsx("a",{href:"#shop",children:"Витрины"})}),s.jsx("li",{children:s.jsx("a",{href:"#shop",children:"Кофемашины"})})]})]}),s.jsxs("div",{className:"footer-column",children:[s.jsx("h4",{children:"Компания"}),s.jsxs("ul",{className:"footer-links",children:[s.jsx("li",{children:s.jsx("a",{href:"#about",children:"О нас"})}),s.jsx("li",{children:s.jsx("a",{href:"#about",children:"Наша миссия"})}),s.jsx("li",{children:s.jsx("a",{href:"#about",children:"Партнёры"})}),s.jsx("li",{children:s.jsx("a",{href:"#about",children:"Контакты"})})]})]}),s.jsxs("div",{className:"footer-column",children:[s.jsx("h4",{children:"Поддержка"}),s.jsxs("ul",{className:"footer-links",children:[s.jsx("li",{children:s.jsx("a",{href:"#",children:"Документация"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Центр помощи"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Политика конфиденциальности"})}),s.jsx("li",{children:s.jsx("a",{href:"#",children:"Условия использования"})})]})]})]}),s.jsxs("div",{className:"footer-bottom",children:[s.jsx("p",{className:"footer-copyright",children:"© 2025 ESSE.KZ Premium. Все права защищены."}),s.jsxs("div",{className:"footer-social",children:[s.jsx("a",{href:"#",children:"LinkedIn"}),s.jsx("a",{href:"#",children:"Instagram"}),s.jsx("a",{href:"#",children:"Twitter"}),s.jsx("a",{href:"#",children:"Facebook"})]})]})]})})]})}function Yd(){return s.jsxs("main",{children:[s.jsx(Ud,{}),s.jsx(Ad,{}),s.jsx(Vd,{}),s.jsx(Bd,{}),s.jsx(Hd,{}),s.jsx($d,{}),s.jsx(Wd,{}),s.jsx(Qd,{}),s.jsx(qd,{}),s.jsx(Kd,{})]})}Id.createRoot(document.getElementById("root")).render(s.jsx(sn.StrictMode,{children:s.jsx(Yd,{})}));
