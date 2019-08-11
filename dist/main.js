!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!S[e]||!g[e])return;for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(f[n]=t[n]);0==--y&&0===v&&P()}(e,n),t&&t(e,n)};var n,r=!0,s="a95ce783912e11a8ebbd",i=1e4,o={},a=[],c=[];function d(e){var t=E[e];if(!t)return N;var r=function(r){return t.hot.active?(E[r]?-1===E[r].parents.indexOf(e)&&E[r].parents.push(e):(a=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),N(r)},s=function(e){return{configurable:!0,enumerable:!0,get:function(){return N[e]},set:function(t){N[e]=t}}};for(var i in N)Object.prototype.hasOwnProperty.call(N,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,s(i));return r.e=function(e){return"ready"===p&&u("prepare"),v++,N.e(e).then(t,function(e){throw t(),e});function t(){v--,"prepare"===p&&(_[e]||x(e),0===v&&0===y&&P())}},r.t=function(e,t){return 1&t&&(e=r(e)),N.t(e,-2&t)},r}var l=[],p="idle";function u(e){p=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var h,f,m,y=0,v=0,_={},g={},S={};function w(e){return+e+""===e?+e:e}function b(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return r=e,u("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=N.p+""+s+".hot-update.json";r.open("GET",i,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(i).then(function(e){if(!e)return u("idle"),null;g={},_={},S=e.c,m=e.h,u("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});f={};return x(0),"prepare"===p&&0===v&&0===y&&P(),t})}function x(e){S[e]?(g[e]=!0,y++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=N.p+""+e+"."+s+".hot-update.js",t.appendChild(n)}(e)):_[e]=!0}function P(){u("ready");var e=h;if(h=null,e)if(r)Promise.resolve().then(function(){return C(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in f)Object.prototype.hasOwnProperty.call(f,n)&&t.push(w(n));e.resolve(t)}}function C(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,i,c,d;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var s=r.pop(),i=s.id,o=s.chain;if((c=E[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:o,moduleId:i};for(var a=0;a<c.parents.length;a++){var d=c.parents[a],l=E[d];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:o.concat([d]),moduleId:i,parentId:d};-1===t.indexOf(d)&&(l.hot._acceptedDependencies[i]?(n[d]||(n[d]=[]),h(n[d],[i])):(delete n[d],t.push(d),r.push({chain:o.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var y={},v=[],_={},g=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var b in f)if(Object.prototype.hasOwnProperty.call(f,b)){var x;d=w(b);var P=!1,C=!1,A=!1,O="";switch((x=f[b]?l(d):{type:"disposed",moduleId:b}).chain&&(O="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":t.onDeclined&&t.onDeclined(x),t.ignoreDeclined||(P=new Error("Aborted because of self decline: "+x.moduleId+O));break;case"declined":t.onDeclined&&t.onDeclined(x),t.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+O));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(x),t.ignoreUnaccepted||(P=new Error("Aborted because "+d+" is not accepted"+O));break;case"accepted":t.onAccepted&&t.onAccepted(x),C=!0;break;case"disposed":t.onDisposed&&t.onDisposed(x),A=!0;break;default:throw new Error("Unexception type "+x.type)}if(P)return u("abort"),Promise.reject(P);if(C)for(d in _[d]=f[d],h(v,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,d)&&(y[d]||(y[d]=[]),h(y[d],x.outdatedDependencies[d]));A&&(h(v,[x.moduleId]),_[d]=g)}var T,k=[];for(r=0;r<v.length;r++)d=v[r],E[d]&&E[d].hot._selfAccepted&&k.push({module:d,errorHandler:E[d].hot._selfAccepted});u("dispose"),Object.keys(S).forEach(function(e){!1===S[e]&&function(e){delete installedChunks[e]}(e)});for(var V,j,M=v.slice();M.length>0;)if(d=M.pop(),c=E[d]){var D={},H=c.hot._disposeHandlers;for(i=0;i<H.length;i++)(n=H[i])(D);for(o[d]=D,c.hot.active=!1,delete E[d],delete y[d],i=0;i<c.children.length;i++){var R=E[c.children[i]];R&&((T=R.parents.indexOf(d))>=0&&R.parents.splice(T,1))}}for(d in y)if(Object.prototype.hasOwnProperty.call(y,d)&&(c=E[d]))for(j=y[d],i=0;i<j.length;i++)V=j[i],(T=c.children.indexOf(V))>=0&&c.children.splice(T,1);for(d in u("apply"),s=m,_)Object.prototype.hasOwnProperty.call(_,d)&&(e[d]=_[d]);var U=null;for(d in y)if(Object.prototype.hasOwnProperty.call(y,d)&&(c=E[d])){j=y[d];var I=[];for(r=0;r<j.length;r++)if(V=j[r],n=c.hot._acceptedDependencies[V]){if(-1!==I.indexOf(n))continue;I.push(n)}for(r=0;r<I.length;r++){n=I[r];try{n(j)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:d,dependencyId:j[r],error:e}),t.ignoreErrored||U||(U=e)}}}for(r=0;r<k.length;r++){var q=k[r];d=q.module,a=[d];try{N(d)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:n,originalError:e}),t.ignoreErrored||U||(U=n),U||(U=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:d,error:e}),t.ignoreErrored||U||(U=e)}}return U?(u("fail"),Promise.reject(U)):(u("idle"),new Promise(function(e){e(v)}))}var E={};function N(t){if(E[t])return E[t].exports;var r=E[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:b,apply:C,status:function(e){if(!e)return p;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:o[e]};return n=void 0,t}(t),parents:(c=a,a=[],c),children:[]};return e[t].call(r.exports,r,r.exports,d(t)),r.l=!0,r.exports}N.m=e,N.c=E,N.d=function(e,t,n){N.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},N.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},N.t=function(e,t){if(1&t&&(e=N(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(N.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)N.d(n,r,function(t){return e[t]}.bind(null,r));return n},N.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return N.d(t,"a",t),t},N.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},N.p="",N.h=function(){return s},d(0)(N.s=0)}([function(e,t,n){"use strict";n.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=new WeakMap,s=e=>"function"==typeof e&&r.has(e),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,n=null)=>{let r=t;for(;r!==n;){const t=r.nextSibling;e.removeChild(r),r=t}},a={},c={},d=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${d}--\x3e`,p=new RegExp(`${d}|${l}`),u="$lit$";class h{constructor(e,t){this.parts=[],this.element=t;let n=-1,r=0;const s=[],i=t=>{const o=t.content,a=document.createTreeWalker(o,133,null,!1);let c=0;for(;a.nextNode();){n++;const t=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const s=t.attributes;let i=0;for(let e=0;e<s.length;e++)s[e].value.indexOf(d)>=0&&i++;for(;i-- >0;){const s=e.strings[r],i=y.exec(s)[2],o=i.toLowerCase()+u,a=t.getAttribute(o).split(p);this.parts.push({type:"attribute",index:n,name:i,strings:a}),t.removeAttribute(o),r+=a.length-1}}"TEMPLATE"===t.tagName&&i(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(d)>=0){const i=t.parentNode,o=e.split(p),a=o.length-1;for(let e=0;e<a;e++)i.insertBefore(""===o[e]?m():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++n});""===o[a]?(i.insertBefore(m(),t),s.push(t)):t.data=o[a],r+=a}}else if(8===t.nodeType)if(t.data===d){const e=t.parentNode;null!==t.previousSibling&&n!==c||(n++,e.insertBefore(m(),t)),c=n,this.parts.push({type:"node",index:n}),null===t.nextSibling?t.data="":(s.push(t),n--),r++}else{let e=-1;for(;-1!==(e=t.data.indexOf(d,e+1));)this.parts.push({type:"node",index:-1})}}};i(t);for(const e of s)e.parentNode.removeChild(e)}}const f=e=>-1!==e.index,m=()=>document.createComment(""),y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,r=0;const s=e=>{const i=document.createTreeWalker(e,133,null,!1);let o=i.nextNode();for(;n<t.length&&null!==o;){const e=t[n];if(f(e))if(r===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(o.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(o,e.name,e.strings,this.options));n++}else r++,"TEMPLATE"===o.nodeName&&s(o.content),o=i.nextNode();else this._parts.push(void 0),n++}};return s(e),i&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class _{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){const e=this.strings[n],r=y.exec(e);t+=r?e.substr(0,r.index)+r[1]+r[2]+u+r[3]+d:e+l}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const g=e=>null===e||!("object"==typeof e||"function"==typeof e);class S{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new w(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||g(e)&&e===this.value||(this.value=e,s(e)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class b{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(m()),this.endNode=e.appendChild(m())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=m()),e._insert(this.endNode=m())}insertAfterPart(e){e._insert(this.startNode=m()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;s(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(g(e)?e!==this.value&&this._commitText(e):e instanceof _?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===c?(this.value=c,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const n=new v(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const s of e)void 0===(n=t[r])&&(n=new b(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(s),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class x{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;s(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class P extends S{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends w{}let E=!1;try{const e={get capture(){return E=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class N{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;s(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),r&&(this._options=A(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(E?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const O=new class{handleAttributeExpressions(e,t,n,r){const s=t[0];return"."===s?new P(e,t.slice(1),n).parts:"@"===s?[new N(e,t.slice(1),r.eventContext)]:"?"===s?[new x(e,t.slice(1),n)]:new S(e,t,n).parts}handleTextExpression(e){return new b(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function T(e){let t=k.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},k.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(d);return void 0===(n=t.keyString.get(r))&&(n=new h(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const k=new Map,V=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const j=(e,...t)=>new _(e,t,"html",O),M=133;function D(e,t){const{element:{content:n},parts:r}=e,s=document.createTreeWalker(n,M,null,!1);let i=R(r),o=r[i],a=-1,c=0;const d=[];let l=null;for(;s.nextNode();){a++;const e=s.currentNode;for(e.previousSibling===l&&(l=null),t.has(e)&&(d.push(e),null===l&&(l=e)),null!==l&&c++;void 0!==o&&o.index===a;)o.index=null!==l?-1:o.index-c,o=r[i=R(r,i)]}d.forEach(e=>e.parentNode.removeChild(e))}const H=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,M,null,!1);for(;n.nextNode();)t++;return t},R=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(f(t))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const U=(e,t)=>`${e}--${t}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),I=!1);const q=["html","svg"],z=new Set,L=(e,t,n)=>{z.add(n);const r=e.querySelectorAll("style");if(0===r.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,n);const s=document.createElement("style");for(let e=0;e<r.length;e++){const t=r[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}if((e=>{q.forEach(t=>{const n=k.get(U(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),D(e,n)})})})(n),function(e,t,n=null){const{element:{content:r},parts:s}=e;if(null===n||void 0===n)return void r.appendChild(t);const i=document.createTreeWalker(r,M,null,!1);let o=R(s),a=0,c=-1;for(;i.nextNode();)for(c++,i.currentNode===n&&(a=H(t),n.parentNode.insertBefore(t,n));-1!==o&&s[o].index===c;){if(a>0){for(;-1!==o;)s[o].index+=a,o=R(s,o);return}o=R(s,o)}}(t,s,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(s,t.element.content.firstChild);const e=new Set;e.add(s),D(t,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=((e,t)=>e);const F={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},$=(e,t)=>t!==e&&(t==t||e==e),B={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:$},W=Promise.resolve(!0),J=1,X=4,G=8,K=16,Q=32;class Y extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=W,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=B){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const r=this[e];this[n]=t,this.requestUpdate(e,r)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=$){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||F,s="function"==typeof r?r:r.fromAttribute;return s?s(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||F.toAttribute)(e,n)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Q,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=B){const r=this.constructor,s=r._attributeNameForProperty(e,n);if(void 0!==s){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|G,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=this._updateState&~G}}_attributeToProperty(e,t){if(this._updateState&G)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r)||B;this._updateState=this._updateState|K,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~K}}requestUpdate(e,t){let n=!0;if(void 0!==e&&!this._changedProperties.has(e)){const r=this.constructor,s=r._classProperties.get(e)||B;r._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.set(e,t),!0!==s.reflect||this._updateState&K||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):n=!1}return!this._hasRequestedUpdate&&n&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let e;this._updateState=this._updateState|X;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);const n=this.performUpdate();null!=n&&"function"==typeof n.then&&await n,e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Q}get _hasRequestedUpdate(){return this._updateState&X}get hasUpdated(){return this._updateState&J}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&J||(this._updateState=this._updateState|J,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~X}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Y.finalized=!0;te((e,t)=>e.querySelector(t)),te((e,t)=>e.querySelectorAll(t));const Z=(e,t,n)=>{Object.defineProperty(t,n,e)},ee=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function te(e){return t=>(n,r)=>{const s={get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0};return void 0!==r?Z(s,n,r):ee(s,n)}}const ne="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const re=e=>e.flat?e.flat(1/0):function e(t,n=[]){for(let r=0,s=t.length;r<s;r++){const s=t[r];Array.isArray(s)?e(s,n):n.push(s)}return n}(e);class se extends Y{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){re(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ne?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof _&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}se.finalized=!0,se.render=((e,t,n)=>{const r=n.scopeName,s=V.has(t),i=t instanceof ShadowRoot&&I&&e instanceof _,a=i&&!z.has(r),c=a?document.createDocumentFragment():t;if(((e,t,n)=>{let r=V.get(t);void 0===r&&(o(t,t.firstChild),V.set(t,r=new b(Object.assign({templateFactory:T},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,c,Object.assign({templateFactory:(e=>t=>{const n=U(t.type,e);let r=k.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},k.set(n,r));let s=r.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(d);if(void 0===(s=r.keyString.get(i))){const n=t.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(n,e),s=new h(t,n),r.keyString.set(i,s)}return r.stringsArray.set(t.strings,s),s})(r)},n)),a){const e=V.get(c);V.delete(c),e.value instanceof v&&L(c,e.value.template,r),o(t,t.firstChild),t.appendChild(c),V.set(t,e)}!s&&i&&window.ShadyCSS.styleElement(t.host)});customElements.define("hello-world",class extends se{constructor(){super()}render(){return j`<style>
    div {
        color: blue;
        font-family: Sans-Serif;
    }
    </style>
        <div>
            <h1>Hello world!</h1>
        </div>
    `}});customElements.define("button-example",class extends se{static get properties(){return{count:Number}}constructor(){super(),this.count=0}increment(){this.count++}decrement(){this.count--}render(){return j`<style>
    div {
        font-family: Sans-Serif;
    }
    button {
        border: none;
        color: #fff;
        background-color: rgb(48, 147, 228);
        padding: 0.5rem;
        font-weight: bold;
        border-radius: 5px;
    }
    .count {
        margin-bottom: 0.5rem;
    }
    </style>
        <!-- eslint-disable -->
        <div>
            <div class="count">Count: ${this.count}</div>
            <button @click="'${this.increment}'">Increment</button>
            <button @click="'${this.decrement}'">Decrement</button>
        </div>
    `}})}]);
//# sourceMappingURL=main.js.map