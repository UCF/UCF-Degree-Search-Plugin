"use strict";(self.webpackChunkDegree_Search=self.webpackChunkDegree_Search||[]).push([[179],{659:()=>{function le(e){return"function"==typeof e}function Io(e){const n=e(r=>{Error.call(r),r.stack=(new Error).stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}const Ki=Io(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:\n${n.map((r,o)=>`${o+1}) ${r.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=n});function Ir(e,t){if(e){const n=e.indexOf(t);0<=n&&e.splice(n,1)}}class ct{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;const{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(const i of n)i.remove(this);else n.remove(this);const{initialTeardown:r}=this;if(le(r))try{r()}catch(i){t=i instanceof Ki?i.errors:[i]}const{_finalizers:o}=this;if(o){this._finalizers=null;for(const i of o)try{Vf(i)}catch(s){t=t??[],s instanceof Ki?t=[...t,...s.errors]:t.push(s)}}if(t)throw new Ki(t)}}add(t){var n;if(t&&t!==this)if(this.closed)Vf(t);else{if(t instanceof ct){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(t)}}_hasParent(t){const{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){const{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){const{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&Ir(n,t)}remove(t){const{_finalizers:n}=this;n&&Ir(n,t),t instanceof ct&&t._removeParent(this)}}ct.EMPTY=(()=>{const e=new ct;return e.closed=!0,e})();const kf=ct.EMPTY;function Lf(e){return e instanceof ct||e&&"closed"in e&&le(e.remove)&&le(e.add)&&le(e.unsubscribe)}function Vf(e){le(e)?e():e.unsubscribe()}const nr={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Zi={setTimeout(e,t,...n){const{delegate:r}=Zi;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){const{delegate:t}=Zi;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function $f(e){Zi.setTimeout(()=>{const{onUnhandledError:t}=nr;if(!t)throw e;t(e)})}function jf(){}const Ew=ll("C",void 0,void 0);function ll(e,t,n){return{kind:e,value:t,error:n}}let rr=null;function Yi(e){if(nr.useDeprecatedSynchronousErrorHandling){const t=!rr;if(t&&(rr={errorThrown:!1,error:null}),e(),t){const{errorThrown:n,error:r}=rr;if(rr=null,n)throw r}}else e()}class ul extends ct{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,Lf(t)&&t.add(this)):this.destination=xw}static create(t,n,r){return new Ao(t,n,r)}next(t){this.isStopped?dl(function Sw(e){return ll("N",e,void 0)}(t),this):this._next(t)}error(t){this.isStopped?dl(function bw(e){return ll("E",void 0,e)}(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?dl(Ew,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const Iw=Function.prototype.bind;function cl(e,t){return Iw.call(e,t)}class Aw{constructor(t){this.partialObserver=t}next(t){const{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){Ji(r)}}error(t){const{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){Ji(r)}else Ji(t)}complete(){const{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){Ji(n)}}}class Ao extends ul{constructor(t,n,r){let o;if(super(),le(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&nr.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&cl(t.next,i),error:t.error&&cl(t.error,i),complete:t.complete&&cl(t.complete,i)}):o=t}this.destination=new Aw(o)}}function Ji(e){nr.useDeprecatedSynchronousErrorHandling?function Mw(e){nr.useDeprecatedSynchronousErrorHandling&&rr&&(rr.errorThrown=!0,rr.error=e)}(e):$f(e)}function dl(e,t){const{onStoppedNotification:n}=nr;n&&Zi.setTimeout(()=>n(e,t))}const xw={closed:!0,next:jf,error:function Tw(e){throw e},complete:jf},fl="function"==typeof Symbol&&Symbol.observable||"@@observable";function Vn(e){return e}function Bf(e){return 0===e.length?Vn:1===e.length?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}let we=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){const r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){const i=function Fw(e){return e&&e instanceof ul||function Rw(e){return e&&le(e.next)&&le(e.error)&&le(e.complete)}(e)&&Lf(e)}(n)?n:new Ao(n,r,o);return Yi(()=>{const{operator:s,source:a}=this;i.add(s?s.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return new(r=Hf(r))((o,i)=>{const s=new Ao({next:a=>{try{n(a)}catch(l){i(l),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return null===(r=this.source)||void 0===r?void 0:r.subscribe(n)}[fl](){return this}pipe(...n){return Bf(n)(this)}toPromise(n){return new(n=Hf(n))((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return e.create=t=>new e(t),e})();function Hf(e){var t;return null!==(t=e??nr.Promise)&&void 0!==t?t:Promise}const Pw=Io(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});let Ze=(()=>{class e extends we{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){const r=new Uf(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new Pw}next(n){Yi(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const r of this.currentObservers)r.next(n)}})}error(n){Yi(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;const{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){Yi(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return(null===(n=this.observers)||void 0===n?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){const{hasError:r,isStopped:o,observers:i}=this;return r||o?kf:(this.currentObservers=null,i.push(n),new ct(()=>{this.currentObservers=null,Ir(i,n)}))}_checkFinalizedStatuses(n){const{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){const n=new we;return n.source=this,n}}return e.create=(t,n)=>new Uf(t,n),e})();class Uf extends Ze{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.next)||void 0===r||r.call(n,t)}error(t){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.error)||void 0===r||r.call(n,t)}complete(){var t,n;null===(n=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===n||n.call(t)}_subscribe(t){var n,r;return null!==(r=null===(n=this.source)||void 0===n?void 0:n.subscribe(t))&&void 0!==r?r:kf}}function Gf(e){return le(e?.lift)}function Ie(e){return t=>{if(Gf(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Ee(e,t,n,r,o){return new Ow(e,t,n,r,o)}class Ow extends ul{constructor(t,n,r,o,i,s){super(t),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(l){t.error(l)}}:super._next,this._error=o?function(a){try{o(a)}catch(l){t.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){t.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:n}=this;super.unsubscribe(),!n&&(null===(t=this.onFinalize)||void 0===t||t.call(this))}}}function q(e,t){return Ie((n,r)=>{let o=0;n.subscribe(Ee(r,i=>{r.next(e.call(t,i,o++))}))})}function or(e){return this instanceof or?(this.v=e,this):new or(e)}function Vw(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,r=n.apply(e,t||[]),i=[];return o={},s("next"),s("throw"),s("return"),o[Symbol.asyncIterator]=function(){return this},o;function s(f){r[f]&&(o[f]=function(h){return new Promise(function(p,g){i.push([f,h,p,g])>1||a(f,h)})})}function a(f,h){try{!function l(f){f.value instanceof or?Promise.resolve(f.value.v).then(u,c):d(i[0][2],f)}(r[f](h))}catch(p){d(i[0][3],p)}}function u(f){a("next",f)}function c(f){a("throw",f)}function d(f,h){f(h),i.shift(),i.length&&a(i[0][0],i[0][1])}}function $w(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,t=e[Symbol.asyncIterator];return t?t.call(e):(e=function qf(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(e),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(a,l){!function o(i,s,a,l){Promise.resolve(l).then(function(u){i({value:u,done:a})},s)}(a,l,(s=e[i](s)).done,s.value)})}}}const Qf=e=>e&&"number"==typeof e.length&&"function"!=typeof e;function Kf(e){return le(e?.then)}function Zf(e){return le(e[fl])}function Yf(e){return Symbol.asyncIterator&&le(e?.[Symbol.asyncIterator])}function Jf(e){return new TypeError(`You provided ${null!==e&&"object"==typeof e?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}const Xf=function Bw(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}();function eh(e){return le(e?.[Xf])}function th(e){return Vw(this,arguments,function*(){const n=e.getReader();try{for(;;){const{value:r,done:o}=yield or(n.read());if(o)return yield or(void 0);yield yield or(r)}}finally{n.releaseLock()}})}function nh(e){return le(e?.getReader)}function Rt(e){if(e instanceof we)return e;if(null!=e){if(Zf(e))return function Hw(e){return new we(t=>{const n=e[fl]();if(le(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(e);if(Qf(e))return function Uw(e){return new we(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}(e);if(Kf(e))return function Gw(e){return new we(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,$f)})}(e);if(Yf(e))return rh(e);if(eh(e))return function zw(e){return new we(t=>{for(const n of e)if(t.next(n),t.closed)return;t.complete()})}(e);if(nh(e))return function Ww(e){return rh(th(e))}(e)}throw Jf(e)}function rh(e){return new we(t=>{(function qw(e,t){var n,r,o,i;return function kw(e,t,n,r){return new(n||(n=Promise))(function(i,s){function a(c){try{u(r.next(c))}catch(d){s(d)}}function l(c){try{u(r.throw(c))}catch(d){s(d)}}function u(c){c.done?i(c.value):function o(i){return i instanceof n?i:new n(function(s){s(i)})}(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}(this,void 0,void 0,function*(){try{for(n=$w(e);!(r=yield n.next()).done;)if(t.next(r.value),t.closed)return}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}t.complete()})})(e,t).catch(n=>t.error(n))})}function fn(e,t,n,r=0,o=!1){const i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function je(e,t,n=1/0){return le(t)?je((r,o)=>q((i,s)=>t(r,i,o,s))(Rt(e(r,o))),n):("number"==typeof t&&(n=t),Ie((r,o)=>function Qw(e,t,n,r,o,i,s,a){const l=[];let u=0,c=0,d=!1;const f=()=>{d&&!l.length&&!u&&t.complete()},h=g=>u<r?p(g):l.push(g),p=g=>{i&&t.next(g),u++;let _=!1;Rt(n(g,c++)).subscribe(Ee(t,y=>{o?.(y),i?h(y):t.next(y)},()=>{_=!0},void 0,()=>{if(_)try{for(u--;l.length&&u<r;){const y=l.shift();s?fn(t,s,()=>p(y)):p(y)}f()}catch(y){t.error(y)}}))};return e.subscribe(Ee(t,h,()=>{d=!0,f()})),()=>{a?.()}}(r,o,e,n)))}function Ar(e=1/0){return je(Vn,e)}const hn=new we(e=>e.complete());function pl(e){return e[e.length-1]}function oh(e){return le(pl(e))?e.pop():void 0}function To(e){return function Zw(e){return e&&le(e.schedule)}(pl(e))?e.pop():void 0}function ih(e,t=0){return Ie((n,r)=>{n.subscribe(Ee(r,o=>fn(r,e,()=>r.next(o),t),()=>fn(r,e,()=>r.complete(),t),o=>fn(r,e,()=>r.error(o),t)))})}function sh(e,t=0){return Ie((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function ah(e,t){if(!e)throw new Error("Iterable cannot be null");return new we(n=>{fn(n,t,()=>{const r=e[Symbol.asyncIterator]();fn(n,t,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function Ae(e,t){return t?function rE(e,t){if(null!=e){if(Zf(e))return function Jw(e,t){return Rt(e).pipe(sh(t),ih(t))}(e,t);if(Qf(e))return function eE(e,t){return new we(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}(e,t);if(Kf(e))return function Xw(e,t){return Rt(e).pipe(sh(t),ih(t))}(e,t);if(Yf(e))return ah(e,t);if(eh(e))return function tE(e,t){return new we(n=>{let r;return fn(n,t,()=>{r=e[Xf](),fn(n,t,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){return void n.error(s)}i?n.complete():n.next(o)},0,!0)}),()=>le(r?.return)&&r.return()})}(e,t);if(nh(e))return function nE(e,t){return ah(th(e),t)}(e,t)}throw Jf(e)}(e,t):Rt(e)}function gl(e,t,...n){if(!0===t)return void e();if(!1===t)return;const r=new Ao({next:()=>{r.unsubscribe(),e()}});return t(...n).subscribe(r)}
/**
       * @license Angular v14.2.3
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ie(e){for(let t in e)if(e[t]===ie)return t;throw Error("Could not find renamed property on target object.")}function ml(e,t){for(const n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function se(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(se).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function yl(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const sE=ie({__forward_ref__:ie});function ue(e){return e.__forward_ref__=ue,e.toString=function(){return se(this())},e}function k(e){return vl(e)?e():e}function vl(e){return"function"==typeof e&&e.hasOwnProperty(sE)&&e.__forward_ref__===ue}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class C extends Error{constructor(t,n){super(function Xi(e,t){return`NG0${Math.abs(e)}${t?": "+t.trim():""}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t,n)),this.code=t}}function $(e){return"string"==typeof e?e:null==e?"":String(e)}function es(e,t){throw new C(-201,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ft(e,t){null==e&&function te(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}(t,e,null,"!=")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function F(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function ht(e){return{providers:e.providers||[],imports:e.imports||[]}}function ts(e){return lh(e,ns)||lh(e,ch)}function lh(e,t){return e.hasOwnProperty(t)?e[t]:null}function uh(e){return e&&(e.hasOwnProperty(_l)||e.hasOwnProperty(gE))?e[_l]:null}const ns=ie({\u0275prov:ie}),_l=ie({\u0275inj:ie}),ch=ie({ngInjectableDef:ie}),gE=ie({ngInjectorDef:ie});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var P=(()=>((P=P||{})[P.Default=0]="Default",P[P.Host=1]="Host",P[P.Self=2]="Self",P[P.SkipSelf=4]="SkipSelf",P[P.Optional=8]="Optional",P))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Dl;function wt(e){const t=Dl;return Dl=e,t}function dh(e,t,n){const r=ts(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&P.Optional?null:void 0!==t?t:void es(se(e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function $n(e){return{toString:e}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Ft=(()=>((Ft=Ft||{})[Ft.OnPush=0]="OnPush",Ft[Ft.Default=1]="Default",Ft))(),Kt=(()=>{return(e=Kt||(Kt={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",Kt;var e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ae=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),Tr={},X=[],rs=ie({\u0275cmp:ie}),Cl=ie({\u0275dir:ie}),wl=ie({\u0275pipe:ie}),fh=ie({\u0275mod:ie}),gn=ie({\u0275fac:ie}),xo=ie({__NG_ELEMENT_ID__:ie});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let yE=0;function Pt(e){return $n(()=>{const n=!0===e.standalone,r={},o={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===Ft.OnPush,directiveDefs:null,pipeDefs:null,standalone:n,dependencies:n&&e.dependencies||null,getStandaloneInjector:null,selectors:e.selectors||X,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||Kt.Emulated,id:"c"+yE++,styles:e.styles||X,_:null,setInput:null,schemas:e.schemas||null,tView:null},i=e.dependencies,s=e.features;return o.inputs=gh(e.inputs,r),o.outputs=gh(e.outputs),s&&s.forEach(a=>a(o)),o.directiveDefs=i?()=>("function"==typeof i?i():i).map(hh).filter(ph):null,o.pipeDefs=i?()=>("function"==typeof i?i():i).map(Je).filter(ph):null,o})}function hh(e){return ne(e)||Ye(e)}function ph(e){return null!==e}function Et(e){return $n(()=>({type:e.type,bootstrap:e.bootstrap||X,declarations:e.declarations||X,imports:e.imports||X,exports:e.exports||X,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function gh(e,t){if(null==e)return Tr;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const L=Pt;function ne(e){return e[rs]||null}function Ye(e){return e[Cl]||null}function Je(e){return e[wl]||null}function pt(e,t){const n=e[fh]||null;if(!n&&!0===t)throw new Error(`Type ${se(e)} does not have '\u0275mod' property.`);return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const z=11;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function at(e){return Array.isArray(e)&&"object"==typeof e[1]}function kt(e){return Array.isArray(e)&&!0===e[1]}function Sl(e){return 0!=(8&e.flags)}function as(e){return 2==(2&e.flags)}function ls(e){return 1==(1&e.flags)}function Lt(e){return null!==e.template}function EE(e){return 0!=(256&e[2])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ur(e,t){return e.hasOwnProperty(gn)?e[gn]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ME{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function St(){return vh}function vh(e){return e.type.prototype.ngOnChanges&&(e.setInput=AE),IE}function IE(){const e=Dh(this),t=e?.current;if(t){const n=e.previous;if(n===Tr)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function AE(e,t,n,r){const o=Dh(e)||function TE(e,t){return e[_h]=t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,{previous:Tr,current:null}),i=o.current||(o.current={}),s=o.previous,a=this.declaredInputs[n],l=s[a];i[a]=new ME(l&&l.currentValue,t,s===Tr),e[r]=t}St.ngInherit=!0;const _h="__ngSimpleChanges__";function Dh(e){return e[_h]||null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Te(e){for(;Array.isArray(e);)e=e[0];return e}function us(e,t){return Te(t[e])}function It(e,t){return Te(t[e.index])}function xl(e,t){return e.data[t]}function mt(e,t){const n=t[e];return at(n)?n:n[0]}function cs(e){return 64==(64&e[2])}function jn(e,t){return null==t?null:e[t]}function Ch(e){e[18]=0}function Nl(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const V={lFrame:Nh(null),bindingsEnabled:!0};function Eh(){return V.bindingsEnabled}function D(){return V.lFrame.lView}function Y(){return V.lFrame.tView}function Zt(e){return V.lFrame.contextLView=e,e[8]}function Yt(e){return V.lFrame.contextLView=null,e}function Pe(){let e=bh();for(;null!==e&&64===e.type;)e=e.parent;return e}function bh(){return V.lFrame.currentTNode}function Jt(e,t){const n=V.lFrame;n.currentTNode=e,n.isParent=t}function Rl(){return V.lFrame.isParent}function Fl(){V.lFrame.isParent=!1}function Or(){return V.lFrame.bindingIndex++}function GE(e,t){const n=V.lFrame;n.bindingIndex=n.bindingRootIndex=e,Pl(t)}function Pl(e){V.lFrame.currentDirectiveIndex=e}function Ah(){return V.lFrame.currentQueryIndex}function kl(e){V.lFrame.currentQueryIndex=e}function WE(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function Th(e,t,n){if(n&P.SkipSelf){let o=t,i=e;for(;!(o=o.parent,null!==o||n&P.Host||(o=WE(i),null===o||(i=i[15],10&o.type))););if(null===o)return!1;t=o,e=i}const r=V.lFrame=xh();return r.currentTNode=t,r.lView=e,!0}function Ll(e){const t=xh(),n=e[1];V.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function xh(){const e=V.lFrame,t=null===e?null:e.child;return null===t?Nh(e):t}function Nh(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function Rh(){const e=V.lFrame;return V.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const Fh=Rh;function Vl(){const e=Rh();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function et(){return V.lFrame.selectedIndex}function Bn(e){V.lFrame.selectedIndex=e}function _e(){const e=V.lFrame;return xl(e.tView,e.selectedIndex)}function ds(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:u,ngOnDestroy:c}=i;s&&(e.contentHooks||(e.contentHooks=[])).push(-n,s),a&&((e.contentHooks||(e.contentHooks=[])).push(n,a),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,a)),l&&(e.viewHooks||(e.viewHooks=[])).push(-n,l),u&&((e.viewHooks||(e.viewHooks=[])).push(n,u),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,u)),null!=c&&(e.destroyHooks||(e.destroyHooks=[])).push(n,c)}}function fs(e,t,n){Ph(e,t,3,n)}function hs(e,t,n,r){(3&e[2])===n&&Ph(e,t,n,r)}function $l(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function Ph(e,t,n,r){const i=r??-1,s=t.length-1;let a=0;for(let l=void 0!==r?65535&e[18]:0;l<s;l++)if("number"==typeof t[l+1]){if(a=t[l],null!=r&&a>=r)break}else t[l]<0&&(e[18]+=65536),(a<i||-1==i)&&(tb(e,n,t,l),e[18]=(4294901760&e[18])+l+2),l++}function tb(e,t,n,r){const o=n[r]<0,i=n[r+1],a=e[o?-n[r]:n[r]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{i.call(a)}finally{}}}else try{i.call(a)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ko{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function ps(e,t,n){let r=0;for(;r<n.length;){const o=n[r];if("number"==typeof o){if(0!==o)break;r++;const i=n[r++],s=n[r++],a=n[r++];e.setAttribute(t,s,a,i)}else{const i=o,s=n[++r];kh(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function Oh(e){return 3===e||4===e||6===e}function kh(e){return 64===e.charCodeAt(0)}function gs(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||Lh(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function Lh(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const a=e[i++];if("number"==typeof a){if(a===t){s=-1;break}if(a>t){s=i-1;break}}}for(;i<e.length;){const a=e[i];if("number"==typeof a)break;if(a===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Vh(e){return-1!==e}function kr(e){return 32767&e}function Lr(e,t){let n=function sb(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Bl=!0;function ms(e){const t=Bl;return Bl=e,t}let ab=0;const Xt={};function Vo(e,t){const n=Ul(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,Hl(r.data,e),Hl(t,null),Hl(r.blueprint,null));const o=ys(e,t),i=e.injectorIndex;if(Vh(o)){const s=kr(o),a=Lr(o,t),l=a[1].data;for(let u=0;u<8;u++)t[i+u]=a[s+u]|l[s+u]}return t[i+8]=o,i}function Hl(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Ul(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function ys(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){if(r=qh(o),null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function vs(e,t,n){!function lb(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(xo)&&(r=n[xo]),null==r&&(r=n[xo]=ab++);const o=255&r;t.data[e+(o>>5)]|=1<<o}(e,t,n)}function Bh(e,t,n){if(n&P.Optional||void 0!==e)return e;es()}function Hh(e,t,n,r){if(n&P.Optional&&void 0===r&&(r=null),0==(n&(P.Self|P.Host))){const o=e[9],i=wt(void 0);try{return o?o.get(t,r,n&P.Optional):dh(t,r,n&P.Optional)}finally{wt(i)}}return Bh(r,0,n)}function Uh(e,t,n,r=P.Default,o){if(null!==e){if(1024&t[2]){const s=function hb(e,t,n,r,o){let i=e,s=t;for(;null!==i&&null!==s&&1024&s[2]&&!(256&s[2]);){const a=Gh(i,s,n,r|P.Self,Xt);if(a!==Xt)return a;let l=i.parent;if(!l){const u=s[21];if(u){const c=u.get(n,Xt,r);if(c!==Xt)return c}l=qh(s),s=s[15]}i=l}return o}(e,t,n,r,Xt);if(s!==Xt)return s}const i=Gh(e,t,n,r,Xt);if(i!==Xt)return i}return Hh(t,n,r,o)}function Gh(e,t,n,r,o){const i=function db(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(xo)?e[xo]:void 0;return"number"==typeof t?t>=0?255&t:fb:t}(n);if("function"==typeof i){if(!Th(t,e,r))return r&P.Host?Bh(o,0,r):Hh(t,n,r,o);try{const s=i(r);if(null!=s||r&P.Optional)return s;es()}finally{Fh()}}else if("number"==typeof i){let s=null,a=Ul(e,t),l=-1,u=r&P.Host?t[16][6]:null;for((-1===a||r&P.SkipSelf)&&(l=-1===a?ys(e,t):t[a+8],-1!==l&&Wh(r,!1)?(s=t[1],a=kr(l),t=Lr(l,t)):a=-1);-1!==a;){const c=t[1];if(zh(i,a,c.data)){const d=cb(a,t,n,s,r,u);if(d!==Xt)return d}l=t[a+8],-1!==l&&Wh(r,t[1].data[a+8]===u)&&zh(i,a,t)?(s=c,a=kr(l),t=Lr(l,t)):a=-1}}return o}function cb(e,t,n,r,o,i){const s=t[1],a=s.data[e+8],c=_s(a,s,n,null==r?as(a)&&Bl:r!=s&&0!=(3&a.type),o&P.Host&&i===a);return null!==c?$o(t,s,c,a):Xt}function _s(e,t,n,r,o){const i=e.providerIndexes,s=t.data,a=1048575&i,l=e.directiveStart,c=i>>20,f=o?a+c:e.directiveEnd;for(let h=r?a:a+c;h<f;h++){const p=s[h];if(h<l&&n===p||h>=l&&p.type===n)return h}if(o){const h=s[l];if(h&&Lt(h)&&h.type===n)return l}return null}function $o(e,t,n,r){let o=e[n];const i=t.data;if(function nb(e){return e instanceof ko}(o)){const s=o;s.resolving&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function aE(e,t){const n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new C(-200,`Circular dependency in DI detected for ${e}${n}`)}(function J(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():$(e)}(i[n]));const a=ms(s.canSeeViewProviders);s.resolving=!0;const l=s.injectImpl?wt(s.injectImpl):null;Th(e,r,P.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function eb(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const s=vh(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==l&&wt(l),ms(a),s.resolving=!1,Fh()}}return o}function zh(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function Wh(e,t){return!(e&P.Self||e&P.Host&&t)}class Vr{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return Uh(this._tNode,this._lView,t,r,n)}}function fb(){return new Vr(Pe(),D())}function Gl(e){return vl(e)?()=>{const t=Gl(k(e));return t&&t()}:ur(e)}function qh(e){const t=e[1],n=t.type;return 2===n?t.declTNode:1===n?e[6]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const jr="__parameters__";function Hr(e,t,n){return $n(()=>{const r=function zl(e){return function(...n){if(e){const r=e(...n);for(const o in r)this[o]=r[o]}}}(t);function o(...i){if(this instanceof o)return r.apply(this,i),this;const s=new o(...i);return a.annotation=s,a;function a(l,u,c){const d=l.hasOwnProperty(jr)?l[jr]:Object.defineProperty(l,jr,{value:[]})[jr];for(;d.length<=c;)d.push(null);return(d[c]=d[c]||[]).push(s),l}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class x{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=F({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function yt(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),yt(r,t)):t!==e&&t.push(r)}return t}function vn(e,t){e.forEach(n=>Array.isArray(n)?vn(n,t):t(n))}function Kh(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function Ds(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function vt(e,t,n){let r=Ur(e,t);return r>=0?e[1|r]=n:(r=~r,function yb(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(1===o)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function ql(e,t){const n=Ur(e,t);if(n>=0)return e[1|n]}function Ur(e,t){return function Jh(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,t,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Go={},Kl="__NG_DI_FLAG__",ws="ngTempTokenPath",Sb=/\n/gm,Xh="__source";let zo;function Gr(e){const t=zo;return zo=e,t}function Ib(e,t=P.Default){if(void 0===zo)throw new C(-203,!1);return null===zo?dh(e,void 0,t):zo.get(e,t&P.Optional?null:void 0,t)}function M(e,t=P.Default){return(function mE(){return Dl}()||Ib)(k(e),t)}function be(e,t=P.Default){return"number"!=typeof t&&(t=0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)),M(e,t)}function Zl(e){const t=[];for(let n=0;n<e.length;n++){const r=k(e[n]);if(Array.isArray(r)){if(0===r.length)throw new C(900,!1);let o,i=P.Default;for(let s=0;s<r.length;s++){const a=r[s],l=Ab(a);"number"==typeof l?-1===l?o=a.token:i|=l:o=a}t.push(M(o,i))}else t.push(M(r))}return t}function Wo(e,t){return e[Kl]=t,e.prototype[Kl]=t,e}function Ab(e){return e[Kl]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const qo=Wo(Hr("Optional"),8),Qo=Wo(Hr("SkipSelf"),4);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Jl;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class fp{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}function Un(e){return e instanceof fp?e.changingThisBreaksApplicationSecurity:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Jb=/^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var xe=(()=>((xe=xe||{})[xe.NONE=0]="NONE",xe[xe.HTML=1]="HTML",xe[xe.STYLE=2]="STYLE",xe[xe.SCRIPT=3]="SCRIPT",xe[xe.URL=4]="URL",xe[xe.RESOURCE_URL=5]="RESOURCE_URL",xe))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Xo(e){const t=function ei(){const e=D();return e&&e[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();return t?t.sanitize(xe.URL,e)||"":function Yo(e,t){const n=function Qb(e){return e instanceof fp&&e.getTypeName()||null}(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}(e,"URL")?Un(e):function tu(e){return(e=String(e)).match(Jb)?e:"unsafe:"+e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */($(e))}const iu=new x("ENVIRONMENT_INITIALIZER"),Dp=new x("INJECTOR",-1),Cp=new x("INJECTOR_DEF_TYPES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class wp{get(t,n=Go){if(n===Go){const r=new Error(`NullInjectorError: No provider for ${se(t)}!`);throw r.name="NullInjectorError",r}return n}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function h0(...e){return{\u0275providers:Ep(0,e)}}function Ep(e,...t){const n=[],r=new Set;let o;return vn(t,i=>{const s=i;su(s,n,[],r)&&(o||(o=[]),o.push(s))}),void 0!==o&&bp(o,n),n}function bp(e,t){for(let n=0;n<e.length;n++){const{providers:o}=e[n];vn(o,i=>{t.push(i)})}}function su(e,t,n,r){if(!(e=k(e)))return!1;let o=null,i=uh(e);const s=!i&&ne(e);if(i||s){if(s&&!s.standalone)return!1;o=e}else{const l=e.ngModule;if(i=uh(l),!i)return!1;o=l}const a=r.has(o);if(s){if(a)return!1;if(r.add(o),s.dependencies){const l="function"==typeof s.dependencies?s.dependencies():s.dependencies;for(const u of l)su(u,t,n,r)}}else{if(!i)return!1;{if(null!=i.imports&&!a){let u;r.add(o);try{vn(i.imports,c=>{su(c,t,n,r)&&(u||(u=[]),u.push(c))})}finally{}void 0!==u&&bp(u,t)}if(!a){const u=ur(o)||(()=>new o);t.push({provide:o,useFactory:u,deps:X},{provide:Cp,useValue:o,multi:!0},{provide:iu,useValue:()=>M(o),multi:!0})}const l=i.providers;null==l||a||vn(l,c=>{t.push(c)})}}return o!==e&&void 0!==e.providers}const p0=ie({provide:String,useValue:ie});function au(e){return null!==e&&"object"==typeof e&&p0 in e}function cr(e){return"function"==typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const lu=new x("Set Injector scope."),As={},m0={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let uu;function Ts(){return void 0===uu&&(uu=new wp),uu}class Gn{}class Ip extends Gn{constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,du(t,s=>this.processProvider(s)),this.records.set(Dp,qr(void 0,this)),o.has("environment")&&this.records.set(Gn,qr(void 0,this));const i=this.records.get(lu);null!=i&&"string"==typeof i.value&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(Cp.multi,X,P.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const t of this._ngOnDestroyHooks)t.ngOnDestroy();for(const t of this._onDestroyHooks)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(t){this._onDestroyHooks.push(t)}runInContext(t){this.assertNotDestroyed();const n=Gr(this),r=wt(void 0);try{return t()}finally{Gr(n),wt(r)}}get(t,n=Go,r=P.Default){this.assertNotDestroyed();const o=Gr(this),i=wt(void 0);try{if(!(r&P.SkipSelf)){let a=this.records.get(t);if(void 0===a){const l=function C0(e){return"function"==typeof e||"object"==typeof e&&e instanceof x}(t)&&ts(t);a=l&&this.injectableDefInScope(l)?qr(cu(t),As):null,this.records.set(t,a)}if(null!=a)return this.hydrate(t,a)}return(r&P.Self?Ts():this.parent).get(t,n=r&P.Optional&&n===Go?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[ws]=s[ws]||[]).unshift(se(t)),o)throw s;return function Tb(e,t,n,r){const o=e[ws];throw t[Xh]&&o.unshift(t[Xh]),e.message=function xb(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.slice(2):e;let o=se(t);if(Array.isArray(t))o=t.map(se).join(" -> ");else if("object"==typeof t){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let a=t[s];i.push(s+":"+("string"==typeof a?JSON.stringify(a):se(a)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(Sb,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e[ws]=null,e}(s,t,"R3InjectorError",this.source)}throw s}finally{wt(i),Gr(o)}}resolveInjectorInitializers(){const t=Gr(this),n=wt(void 0);try{const r=this.get(iu.multi,X,P.Self);for(const o of r)o()}finally{Gr(t),wt(n)}}toString(){const t=[],n=this.records;for(const r of n.keys())t.push(se(r));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new C(205,!1)}processProvider(t){let n=cr(t=k(t))?t:k(t&&t.provide);const r=function v0(e){return au(e)?qr(void 0,e.useValue):qr(Ap(e),As)}(t);if(cr(t)||!0!==t.multi)this.records.get(n);else{let o=this.records.get(n);o||(o=qr(void 0,As,!0),o.factory=()=>Zl(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n){return n.value===As&&(n.value=m0,n.value=n.factory()),"object"==typeof n.value&&n.value&&function D0(e){return null!==e&&"object"==typeof e&&"function"==typeof e.ngOnDestroy}(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}injectableDefInScope(t){if(!t.providedIn)return!1;const n=k(t.providedIn);return"string"==typeof n?"any"===n||this.scopes.has(n):this.injectorDefTypes.has(n)}}function cu(e){const t=ts(e),n=null!==t?t.factory:ur(e);if(null!==n)return n;if(e instanceof x)throw new C(204,!1);if(e instanceof Function)return function y0(e){const t=e.length;if(t>0)throw function Uo(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}(t,"?"),new C(204,!1);const n=function hE(e){const t=e&&(e[ns]||e[ch]);if(t){const n=function pE(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new C(204,!1)}function Ap(e,t,n){let r;if(cr(e)){const o=k(e);return ur(o)||cu(o)}if(au(e))r=()=>k(e.useValue);else if(function Mp(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...Zl(e.deps||[]));else if(function Sp(e){return!(!e||!e.useExisting)}(e))r=()=>M(k(e.useExisting));else{const o=k(e&&(e.useClass||e.provide));if(!function _0(e){return!!e.deps}(e))return ur(o)||cu(o);r=()=>new o(...Zl(e.deps))}return r}function qr(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function w0(e){return!!e.\u0275providers}function du(e,t){for(const n of e)Array.isArray(n)?du(n,t):w0(n)?du(n.\u0275providers,t):t(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Tp{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class S0{resolveComponentFactory(t){throw function b0(e){const t=Error(`No component factory found for ${se(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let ti=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.NULL=new S0,e})();function M0(){return Qr(Pe(),D())}function Qr(e,t){return new _t(It(e,t))}let _t=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=M0,e})();function I0(e){return e instanceof _t?e.nativeElement:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Np{}let Dn=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function A0(){const e=D(),n=mt(Pe().index,e);return(at(n)?n:e)[z]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),e})(),T0=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=F({token:e,providedIn:"root",factory:()=>null}),e})();class ni{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const x0=new ni("14.2.3"),fu={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function yu(e){return e.ngOriginalError}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Kr{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&yu(t);for(;n&&yu(n);)n=yu(n);return n||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const vu=new Map;let H0=0;const Du="__ngContext__";function ze(e,t){at(t)?(e[Du]=t[20],function G0(e){vu.set(e[20],e)}(t)):e[Du]=t}function Cn(e){return e instanceof Function?e():e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var lt=(()=>((lt=lt||{})[lt.Important=1]="Important",lt[lt.DashCase=2]="DashCase",lt))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function wu(e,t){return undefined(e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function oi(e){const t=e[3];return kt(t)?t[3]:t}function Eu(e){return zp(e[13])}function bu(e){return zp(e[4])}function zp(e){for(;null!==e&&!kt(e);)e=e[4];return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Yr(e,t,n,r,o){if(null!=r){let i,s=!1;kt(r)?i=r:at(r)&&(s=!0,r=r[0]);const a=Te(r);0===e&&null!==n?null==o?Yp(t,n,a):dr(t,n,a,o||null,!0):1===e&&null!==n?dr(t,n,a,o||null,!0):2===e?function og(e,t,n){const r=xs(e,t);r&&function yS(e,t,n,r){e.removeChild(t,n,r)}(e,r,t,n)}(t,a,s):3===e&&t.destroyNode(a),null!=i&&function DS(e,t,n,r,o){const i=n[7];i!==Te(n)&&Yr(t,e,r,i,o);for(let a=10;a<n.length;a++){const l=n[a];ii(l[1],l,e,t,r,i)}}(t,e,i,n,o)}}function Mu(e,t,n){return e.createElement(t,n)}function qp(e,t){const n=e[9],r=n.indexOf(t),o=t[3];512&t[2]&&(t[2]&=-513,Nl(o,-1)),n.splice(r,1)}function Iu(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&qp(o,r),t>0&&(e[n-1][4]=r[4]);const i=Ds(e,10+t);!function uS(e,t){ii(e,t,t[z],2,null,null),t[0]=null,t[6]=null}(r[1],r);const s=i[19];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-65}return r}function Qp(e,t){if(!(128&t[2])){const n=t[z];n.destroyNode&&ii(e,t,n,3,null,null),function fS(e){let t=e[13];if(!t)return Au(e[1],e);for(;t;){let n=null;if(at(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)at(t)&&Au(t[1],t),t=t[3];null===t&&(t=e),at(t)&&Au(t[1],t),n=t&&t[4]}t=n}}(t)}}function Au(e,t){if(!(128&t[2])){t[2]&=-65,t[2]|=128,function mS(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const o=t[n[r]];if(!(o instanceof ko)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const a=o[i[s]],l=i[s+1];try{l.call(a)}finally{}}else try{i.call(o)}finally{}}}}(e,t),function gS(e,t){const n=e.cleanup,r=t[7];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+1],a="function"==typeof s?s(t):Te(t[s]),l=r[o=n[i+2]],u=n[i+3];"boolean"==typeof u?a.removeEventListener(n[i],l,u):u>=0?r[o=u]():r[o=-u].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++)(0,r[i])();t[7]=null}}(e,t),1===t[1].type&&t[z].destroy();const n=t[17];if(null!==n&&kt(t[3])){n!==t[3]&&qp(n,t);const r=t[19];null!==r&&r.detachView(e)}!function z0(e){vu.delete(e[20])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)}}function Kp(e,t,n){return function Zp(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const o=e.data[r.directiveStart].encapsulation;if(o===Kt.None||o===Kt.Emulated)return null}return It(r,n)}(e,t.parent,n)}function dr(e,t,n,r,o){e.insertBefore(t,n,r,o)}function Yp(e,t,n){e.appendChild(t,n)}function Jp(e,t,n,r,o){null!==r?dr(e,t,n,r,o):Yp(e,t,n)}function xs(e,t){return e.parentNode(t)}let tg=function eg(e,t,n){return 40&e.type?It(e,n):null};function Ns(e,t,n,r){const o=Kp(e,r,t),i=t[z],a=function Xp(e,t,n){return tg(e,t,n)}(r.parent||t[6],r,t);if(null!=o)if(Array.isArray(n))for(let l=0;l<n.length;l++)Jp(i,o,n[l],a,!1);else Jp(i,o,n,a,!1)}function Rs(e,t){if(null!==t){const n=t.type;if(3&n)return It(t,e);if(4&n)return xu(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return Rs(e,r);{const o=e[t.index];return kt(o)?xu(-1,o):Te(o)}}if(32&n)return wu(t,e)()||Te(e[t.index]);{const r=rg(e,t);return null!==r?Array.isArray(r)?r[0]:Rs(oi(e[16]),r):Rs(e,t.next)}}return null}function rg(e,t){return null!==t?e[16][6].projection[t.projection]:null}function xu(e,t){const n=10+e+1;if(n<t.length){const r=t[n],o=r[1].firstChild;if(null!==o)return Rs(r,o)}return t[7]}function Nu(e,t,n,r,o,i,s){for(;null!=n;){const a=r[n.index],l=n.type;if(s&&0===t&&(a&&ze(Te(a),r),n.flags|=4),64!=(64&n.flags))if(8&l)Nu(e,t,n.child,r,o,i,!1),Yr(t,e,o,a,i);else if(32&l){const u=wu(n,r);let c;for(;c=u();)Yr(t,e,o,c,i);Yr(t,e,o,a,i)}else 16&l?ig(e,t,r,n,o,i):Yr(t,e,o,a,i);n=s?n.projectionNext:n.next}}function ii(e,t,n,r,o,i){Nu(n,r,e.firstChild,t,o,i,!1)}function ig(e,t,n,r,o,i){const s=n[16],l=s[6].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++)Yr(t,e,o,l[u],i);else Nu(e,t,l,s[3],o,i,!0)}function sg(e,t,n){e.setAttribute(t,"style",n)}function Ru(e,t,n){""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ag(e,t,n){let r=e.length;for(;;){const o=e.indexOf(t,n);if(-1===o)return o;if(0===o||e.charCodeAt(o-1)<=32){const i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const lg="ng-template";function wS(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==ag(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function ug(e){return 4===e.type&&e.value!==lg}function ES(e,t,n){return t===(4!==e.type||n?e.value:lg)}function bS(e,t,n){let r=4;const o=e.attrs||[],i=function IS(e){for(let t=0;t<e.length;t++)if(Oh(e[t]))return t;return e.length}(o);let s=!1;for(let a=0;a<t.length;a++){const l=t[a];if("number"!=typeof l){if(!s)if(4&r){if(r=2|1&r,""!==l&&!ES(e,l,n)||""===l&&1===t.length){if(Vt(r))return!1;s=!0}}else{const u=8&r?l:t[++a];if(8&r&&null!==e.attrs){if(!wS(e.attrs,u,n)){if(Vt(r))return!1;s=!0}continue}const d=SS(8&r?"class":l,o,ug(e),n);if(-1===d){if(Vt(r))return!1;s=!0;continue}if(""!==u){let f;f=d>i?"":o[d+1].toLowerCase();const h=8&r?f:null;if(h&&-1!==ag(h,u,0)||2&r&&u!==f){if(Vt(r))return!1;s=!0}}}}else{if(!s&&!Vt(r)&&!Vt(l))return!1;if(s&&Vt(l))continue;s=!1,r=l|1&r}}return Vt(r)||s}function Vt(e){return 0==(1&e)}function SS(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){const s=t[o];if(s===e)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let a=t[++o];for(;"string"==typeof a;)a=t[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function AS(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function cg(e,t,n=!1){for(let r=0;r<t.length;r++)if(bS(e,t[r],n))return!0;return!1}function dg(e,t){return e?":not("+t.trim()+")":t}function xS(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const a=e[++n];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!Vt(s)&&(t+=dg(i,o),o=""),r=s,i=i||!Vt(r);n++}return""!==o&&(t+=dg(i,o)),t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const j={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function T(e){fg(Y(),D(),et()+e,!1)}function fg(e,t,n,r){if(!r)if(3==(3&t[2])){const i=e.preOrderCheckHooks;null!==i&&fs(t,i,n)}else{const i=e.preOrderHooks;null!==i&&hs(t,i,0,n)}Bn(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function mg(e,t=null,n=null,r){const o=yg(e,t,n,r);return o.resolveInjectorInitializers(),o}function yg(e,t=null,n=null,r,o=new Set){const i=[n||X,h0(e)];return r=r||("object"==typeof e?void 0:se(e)),new Ip(i,t||Ts(),r||null,o)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}let Dt=(()=>{class e{static create(n,r){if(Array.isArray(n))return mg({name:""},r,n,"");{var o;const i=null!==(o=n.name)&&void 0!==o?o:"";return mg({name:i},n.parent,n.providers,i)}}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.THROW_IF_NOT_FOUND=Go,e.NULL=new wp,e.\u0275prov=F({token:e,providedIn:"any",factory:()=>M(Dp)}),e.__NG_ELEMENT_ID__=-1,e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function v(e,t=P.Default){const n=D();return null===n?M(e,t):Uh(Pe(),n,k(e),t)}function Lu(){throw new Error("invalid")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ps(e,t){return e<<17|t<<2}function $t(e){return e>>17&32767}function Vu(e){return 2|e}function wn(e){return(131068&e)>>2}function $u(e,t){return-131069&e|t<<2}function ju(e){return 1|e}function Pg(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const s=e.data[i];kl(o),s.contentQueries(2,t[i],i)}}}function Ls(e,t,n,r,o,i,s,a,l,u,c){const d=t.blueprint.slice();return d[0]=o,d[2]=76|r,(null!==c||e&&1024&e[2])&&(d[2]|=1024),Ch(d),d[3]=d[15]=e,d[8]=n,d[10]=s||e&&e[10],d[z]=a||e&&e[z],d[12]=l||e&&e[12]||null,d[9]=u||e&&e[9]||null,d[6]=i,d[20]=function U0(){return H0++}(),d[21]=c,d[16]=2==t.type?e[16]:d,d}function Xr(e,t,n,r,o){let i=e.data[t];if(null===i)i=function Qu(e,t,n,r,o){const i=bh(),s=Rl(),l=e.data[t]=function fM(e,t,n,r,o,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=l),null!==i&&(s?null==i.child&&null!==l.parent&&(i.child=l):null===i.next&&(i.next=l)),l}(e,t,n,r,o),function UE(){return V.lFrame.inI18n}()&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=function Oo(){const e=V.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();i.injectorIndex=null===s?-1:s.injectorIndex}return Jt(i,!0),i}function eo(e,t,n,r){if(0===n)return-1;const o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function Ku(e,t,n){Ll(t);try{const r=e.viewQuery;null!==r&&rc(1,r,n);const o=e.template;null!==o&&Og(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Pg(e,t),e.staticViewQueries&&rc(2,e.viewQuery,n);const i=e.components;null!==i&&function uM(e,t){for(let n=0;n<t.length;n++)AM(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,Vl()}}function Vs(e,t,n,r){const o=t[2];if(128!=(128&o)){Ll(t);try{Ch(t),function Mh(e){return V.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&Og(e,t,n,2,r);const s=3==(3&o);if(s){const u=e.preOrderCheckHooks;null!==u&&fs(t,u,null)}else{const u=e.preOrderHooks;null!==u&&hs(t,u,0,null),$l(t,0)}if(function MM(e){for(let t=Eu(e);null!==t;t=bu(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const o=n[r],i=o[3];0==(512&o[2])&&Nl(i,1),o[2]|=512}}}(t),function SM(e){for(let t=Eu(e);null!==t;t=bu(t))for(let n=10;n<t.length;n++){const r=t[n],o=r[1];cs(r)&&Vs(o,r,o.template,r[8])}}(t),null!==e.contentQueries&&Pg(e,t),s){const u=e.contentCheckHooks;null!==u&&fs(t,u)}else{const u=e.contentHooks;null!==u&&hs(t,u,1),$l(t,1)}!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function aM(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)Bn(~o);else{const i=o,s=n[++r],a=n[++r];GE(s,i),a(2,t[i])}}}finally{Bn(-1)}}(e,t);const a=e.components;null!==a&&function lM(e,t){for(let n=0;n<t.length;n++)IM(e,t[n])}(t,a);const l=e.viewQuery;if(null!==l&&rc(2,l,r),s){const u=e.viewCheckHooks;null!==u&&fs(t,u)}else{const u=e.viewHooks;null!==u&&hs(t,u,2),$l(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),t[2]&=-41,512&t[2]&&(t[2]&=-513,Nl(t[3],-1))}finally{Vl()}}}function Og(e,t,n,r,o){const i=et(),s=2&r;try{Bn(-1),s&&t.length>22&&fg(e,t,22,!1),n(r,o)}finally{Bn(i)}}function kg(e,t,n){if(Sl(t)){const o=t.directiveEnd;for(let i=t.directiveStart;i<o;i++){const s=e.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}function Zu(e,t,n){!Eh()||(function yM(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||Vo(n,t),ze(r,t);const s=n.initialInputs;for(let a=o;a<i;a++){const l=e.data[a],u=Lt(l);u&&wM(t,n,l);const c=$o(t,e,a,n);ze(c,t),null!==s&&EM(0,a-o,c,l,0,s),u&&(mt(n.index,t)[8]=c)}}(e,t,n,It(n,t)),128==(128&n.flags)&&function vM(e,t,n){const r=n.directiveStart,o=n.directiveEnd,i=n.index,s=function zE(){return V.lFrame.currentDirectiveIndex}();try{Bn(i);for(let a=r;a<o;a++){const l=e.data[a],u=t[a];Pl(a),(null!==l.hostBindings||0!==l.hostVars||null!==l.hostAttrs)&&Ug(l,u)}}finally{Bn(-1),Pl(s)}}(e,t,n))}function Yu(e,t,n=It){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],a=-1===s?n(t,e):e[s];e[o++]=a}}}function Lg(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=Ju(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function Ju(e,t,n,r,o,i,s,a,l,u){const c=22+r,d=c+o,f=function cM(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:j);return n}(c,d),h="function"==typeof u?u():u;return f[1]={type:e,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:t,data:f.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:l,consts:h,incompleteFirstPass:!1}}function Vg(e,t,n,r){const o=Qg(t);null===n?o.push(r):(o.push(n),e.firstCreatePass&&Kg(e).push(r,o.length-1))}function $g(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function jg(e,t){const r=t.directiveEnd,o=e.data,i=t.attrs,s=[];let a=null,l=null;for(let u=t.directiveStart;u<r;u++){const c=o[u],d=c.inputs,f=null===i||ug(t)?null:bM(d,i);s.push(f),a=$g(d,u,a),l=$g(c.outputs,u,l)}null!==a&&(a.hasOwnProperty("class")&&(t.flags|=16),a.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=s,t.inputs=a,t.outputs=l}function Ct(e,t,n,r,o,i,s,a){const l=It(t,n);let c,u=t.inputs;!a&&null!=u&&(c=u[r])?(oc(e,n,c,r,o),as(t)&&Bg(n,t.index)):3&t.type&&(r=function hM(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(r),o=null!=s?s(o,t.value||"",r):o,i.setProperty(l,r,o))}function Bg(e,t){const n=mt(t,e);16&n[2]||(n[2]|=32)}function Xu(e,t,n,r){let o=!1;if(Eh()){const i=function _M(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];cg(n,s.selectors,!1)&&(o||(o=[]),vs(Vo(n,t),e,s.type),Lt(s)?(Gg(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){o=!0,zg(n,e.data.length,i.length);for(let c=0;c<i.length;c++){const d=i[c];d.providersResolver&&d.providersResolver(d)}let a=!1,l=!1,u=eo(e,t,i.length,null);for(let c=0;c<i.length;c++){const d=i[c];n.mergedAttrs=gs(n.mergedAttrs,d.hostAttrs),Wg(e,n,t,u,d),CM(u,d,s),null!==d.contentQueries&&(n.flags|=8),(null!==d.hostBindings||null!==d.hostAttrs||0!==d.hostVars)&&(n.flags|=128);const f=d.type.prototype;!a&&(f.ngOnChanges||f.ngOnInit||f.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),a=!0),!l&&(f.ngOnChanges||f.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),l=!0),u++}jg(e,n)}s&&function DM(e,t,n){if(t){const r=e.localNames=[];for(let o=0;o<t.length;o+=2){const i=n[t[o+1]];if(null==i)throw new C(-301,!1);r.push(t[o],i)}}}(n,r,s)}return n.mergedAttrs=gs(n.mergedAttrs,n.attrs),o}function Hg(e,t,n,r,o,i){const s=i.hostBindings;if(s){let a=e.hostBindingOpCodes;null===a&&(a=e.hostBindingOpCodes=[]);const l=~t.index;(function mM(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(a)!=l&&a.push(l),a.push(r,o,s)}}function Ug(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Gg(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function CM(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;Lt(t)&&(n[""]=e)}}function zg(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Wg(e,t,n,r,o){e.data[r]=o;const i=o.factory||(o.factory=ur(o.type)),s=new ko(i,Lt(o),v);e.blueprint[r]=s,n[r]=s,Hg(e,t,0,r,eo(e,n,o.hostVars,j),o)}function wM(e,t,n){const r=It(t,e),o=Lg(n),i=e[10],s=$s(e,Ls(e,o,null,n.onPush?32:16,r,t,i,i.createRenderer(r,n),null,null,null));e[t.index]=s}function EM(e,t,n,r,o,i){const s=i[t];if(null!==s){const a=r.setInput;for(let l=0;l<s.length;){const u=s[l++],c=s[l++],d=s[l++];null!==a?r.setInput(n,d,u,c):n[c]=d}}}function bM(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function qg(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function IM(e,t){const n=mt(t,e);if(cs(n)){const r=n[1];48&n[2]?Vs(r,n,r.template,n[8]):n[5]>0&&tc(n)}}function tc(e){for(let r=Eu(e);null!==r;r=bu(r))for(let o=10;o<r.length;o++){const i=r[o];if(cs(i))if(512&i[2]){const s=i[1];Vs(s,i,s.template,i[8])}else i[5]>0&&tc(i)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=mt(n[r],e);cs(o)&&o[5]>0&&tc(o)}}function AM(e,t){const n=mt(t,e),r=n[1];(function TM(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),Ku(r,n,n[8])}function $s(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function nc(e){for(;e;){e[2]|=32;const t=oi(e);if(EE(e)&&!t)return e;e=t}return null}function js(e,t,n,r=!0){const o=t[10];o.begin&&o.begin();try{Vs(e,t,e.template,n)}catch(s){throw r&&Yg(t,s),s}finally{o.end&&o.end()}}function rc(e,t,n){kl(0),t(e,n)}function Qg(e){return e[7]||(e[7]=[])}function Kg(e){return e.cleanup||(e.cleanup=[])}function Yg(e,t){const n=e[9],r=n?n.get(Kr,null):null;r&&r.handleError(t)}function oc(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],a=n[i++],l=t[s],u=e.data[s];null!==u.setInput?u.setInput(l,o,r,a):l[a]=o}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Bs(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let s=0;s<t.length;s++){const a=t[s];"number"==typeof a?i=a:1==i?o=yl(o,a):2==i&&(r=yl(r,a+": "+t[++s]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Hs(e,t,n,r,o=!1){for(;null!==n;){const i=t[n.index];if(null!==i&&r.push(Te(i)),kt(i))for(let a=10;a<i.length;a++){const l=i[a],u=l[1].firstChild;null!==u&&Hs(l[1],l,u,r)}const s=n.type;if(8&s)Hs(e,t,n.child,r);else if(32&s){const a=wu(n,t);let l;for(;l=a();)r.push(l)}else if(16&s){const a=rg(t,n);if(Array.isArray(a))r.push(...a);else{const l=oi(t[16]);Hs(l[1],l,a,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class si{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return Hs(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(kt(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(Iu(t,r),Ds(n,r))}this._attachedToViewContainer=!1}Qp(this._lView[1],this._lView)}onDestroy(t){Vg(this._lView[1],this._lView,null,t)}markForCheck(){nc(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){js(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new C(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function dS(e,t){ii(e,t,t[z],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new C(902,!1);this._appRef=t}}class xM extends si{constructor(t){super(t),this._view=t}detectChanges(){const t=this._view;js(t[1],t,t[8],!1)}checkNoChanges(){}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ic extends ti{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=ne(t);return new ai(n,this.ngModule)}}function Jg(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}class RM{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){const o=this.injector.get(t,fu,r);return o!==fu||n===fu?o:this.parentInjector.get(t,n,r)}}class ai extends Tp{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=function NS(e){return e.map(xS).join(",")}(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return Jg(this.componentDef.inputs)}get outputs(){return Jg(this.componentDef.outputs)}create(t,n,r,o){var i;let s=(o=o||this.ngModule)instanceof Gn?o:null===(i=o)||void 0===i?void 0:i.injector;s&&null!==this.componentDef.getStandaloneInjector&&(s=this.componentDef.getStandaloneInjector(s)||s);const a=s?new RM(t,s):t,l=a.get(Np,null);if(null===l)throw new C(407,!1);const u=a.get(T0,null),c=l.createRenderer(null,this.componentDef),d=this.componentDef.selectors[0][0]||"div",f=r?function dM(e,t,n){return e.selectRootElement(t,n===Kt.ShadowDom)}(c,r,this.componentDef.encapsulation):Mu(l.createRenderer(null,this.componentDef),d,function NM(e){const t=e.toLowerCase();return"svg"===t?"svg":"math"===t?"math":null}(d)),h=this.componentDef.onPush?288:272,p=Ju(0,null,null,1,0,null,null,null,null,null),g=Ls(null,p,null,h,null,null,l,c,u,a,null);let _,y;Ll(g);try{const w=function OM(e,t,n,r,o,i){const s=n[1];n[22]=e;const l=Xr(s,22,2,"#host",null),u=l.mergedAttrs=t.hostAttrs;null!==u&&(Bs(l,u,!0),null!==e&&(ps(o,e,u),null!==l.classes&&Ru(o,e,l.classes),null!==l.styles&&sg(o,e,l.styles)));const c=r.createRenderer(e,t),d=Ls(n,Lg(t),null,t.onPush?32:16,n[22],l,r,c,i||null,null,null);return s.firstCreatePass&&(vs(Vo(l,n),s,t.type),Gg(s,l),zg(l,n.length,1)),$s(n,d),n[22]=d}(f,this.componentDef,g,l,c);if(f)if(r)ps(c,f,["ng-version",x0.full]);else{const{attrs:m,classes:b}=function RS(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!Vt(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);m&&ps(c,f,m),b&&b.length>0&&Ru(c,f,b.join(" "))}if(y=xl(p,22),void 0!==n){const m=y.projection=[];for(let b=0;b<this.ngContentSelectors.length;b++){const U=n[b];m.push(null!=U?Array.from(U):null)}}_=function kM(e,t,n,r){const o=n[1],i=function gM(e,t,n){const r=Pe();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Wg(e,r,t,eo(e,t,1,null),n),jg(e,r));const o=$o(t,e,r.directiveStart,r);ze(o,t);const i=It(r,t);return i&&ze(i,t),o}(o,n,t);if(e[8]=n[8]=i,null!==r)for(const a of r)a(i,t);if(t.contentQueries){const a=Pe();t.contentQueries(1,i,a.directiveStart)}const s=Pe();return!o.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(Bn(s.index),Hg(n[1],s,0,s.directiveStart,s.directiveEnd,t),Ug(t,i)),i}(w,this.componentDef,g,[LM]),Ku(p,g,null)}finally{Vl()}return new PM(this.componentType,_,Qr(y,g),g,y)}}class PM extends class E0{}{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.instance=n,this.hostView=this.changeDetectorRef=new xM(o),this.componentType=t}setInput(t,n){const r=this._tNode.inputs;let o;if(null!==r&&(o=r[t])){const i=this._rootLView;oc(i[1],i,o,t,n),Bg(i,this._tNode.index)}}get injector(){return new Vr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}function LM(){const e=Pe();ds(D()[1],e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function re(e){let t=function Xg(e){return Object.getPrototypeOf(e.prototype).constructor}(e.type),n=!0;const r=[e];for(;t;){let o;if(Lt(e))o=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new C(903,!1);o=t.\u0275dir}if(o){if(n){r.push(o);const s=e;s.inputs=sc(e.inputs),s.declaredInputs=sc(e.declaredInputs),s.outputs=sc(e.outputs);const a=o.hostBindings;a&&BM(e,a);const l=o.viewQuery,u=o.contentQueries;if(l&&$M(e,l),u&&jM(e,u),ml(e.inputs,o.inputs),ml(e.declaredInputs,o.declaredInputs),ml(e.outputs,o.outputs),Lt(o)&&o.data.animation){const c=e.data;c.animation=(c.animation||[]).concat(o.data.animation)}}const i=o.features;if(i)for(let s=0;s<i.length;s++){const a=i[s];a&&a.ngInherit&&a(e),a===re&&(n=!1)}}t=Object.getPrototypeOf(t)}!function VM(e){let t=0,n=null;for(let r=e.length-1;r>=0;r--){const o=e[r];o.hostVars=t+=o.hostVars,o.hostAttrs=gs(o.hostAttrs,n=gs(n,o.hostAttrs))}}(r)}function sc(e){return e===Tr?{}:e===X?[]:e}function $M(e,t){const n=e.viewQuery;e.viewQuery=n?(r,o)=>{t(r,o),n(r,o)}:t}function jM(e,t){const n=e.contentQueries;e.contentQueries=n?(r,o,i)=>{t(r,o,i),n(r,o,i)}:t}function BM(e,t){const n=e.hostBindings;e.hostBindings=n?(r,o)=>{t(r,o),n(r,o)}:t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Us=null;function fr(){if(!Us){const e=ae.Symbol;if(e&&e.iterator)Us=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(Us=r)}}}return Us}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function li(e){return!!ac(e)&&(Array.isArray(e)||!(e instanceof Map)&&fr()in e)}function ac(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function We(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}function no(e,t,n,r){return We(e,Or(),n)?t+$(n)+r:j}function oe(e,t,n,r,o,i,s,a){const l=D(),u=Y(),c=e+22,d=u.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function KM(e,t,n,r,o,i,s,a,l){const u=t.consts,c=Xr(t,e,4,s||null,jn(u,a));Xu(t,n,c,jn(u,l)),ds(t,c);const d=c.tViews=Ju(2,c,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,u);return null!==t.queries&&(t.queries.template(t,c),d.queries=t.queries.embeddedTView(c)),c}(c,u,l,t,n,r,o,i,s):u.data[c];Jt(d,!1);const f=l[z].createComment("");Ns(u,l,f,d),ze(f,l),$s(l,l[c]=qg(f,l,f,d)),ls(d)&&Zu(u,l,d),null!=s&&Yu(l,d,a)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function B(e,t,n){const r=D();return We(r,Or(),t)&&Ct(Y(),_e(),r,e,t,r[z],n,!1),B}function lc(e,t,n,r,o){const s=o?"class":"style";oc(e,n,t.inputs[s],s,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function A(e,t,n,r){const o=D(),i=Y(),s=22+e,a=o[z],l=o[s]=Mu(a,t,function XE(){return V.lFrame.currentNamespace}()),u=i.firstCreatePass?function JM(e,t,n,r,o,i,s){const a=t.consts,u=Xr(t,e,2,o,jn(a,i));return Xu(t,n,u,jn(a,s)),null!==u.attrs&&Bs(u,u.attrs,!1),null!==u.mergedAttrs&&Bs(u,u.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,u),u}(s,i,o,0,t,n,r):i.data[s];Jt(u,!0);const c=u.mergedAttrs;null!==c&&ps(a,l,c);const d=u.classes;null!==d&&Ru(a,l,d);const f=u.styles;return null!==f&&sg(a,l,f),64!=(64&u.flags)&&Ns(i,o,l,u),0===function LE(){return V.lFrame.elementDepthCount}()&&ze(l,o),function VE(){V.lFrame.elementDepthCount++}(),ls(u)&&(Zu(i,o,u),kg(i,u,o)),null!==r&&Yu(o,u),A}function I(){let e=Pe();Rl()?Fl():(e=e.parent,Jt(e,!1));const t=e;!function $E(){V.lFrame.elementDepthCount--}();const n=Y();return n.firstCreatePass&&(ds(n,e),Sl(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function ob(e){return 0!=(16&e.flags)}(t)&&lc(n,t,D(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function ib(e){return 0!=(32&e.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)&&lc(n,t,D(),t.stylesWithoutHost,!1),I}function pe(e,t,n,r){return A(e,t,n,r),I(),pe
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function bn(e,t,n){const r=D(),o=Y(),i=e+22,s=o.firstCreatePass?function XM(e,t,n,r,o){const i=t.consts,s=jn(i,r),a=Xr(t,e,8,"ng-container",s);return null!==s&&Bs(a,s,!0),Xu(t,n,a,jn(i,o)),null!==t.queries&&t.queries.elementStart(t,a),a}(i,o,r,t,n):o.data[i];Jt(s,!0);const a=r[i]=r[z].createComment("");return Ns(o,r,a,s),ze(a,r),ls(s)&&(Zu(o,r,s),kg(o,s,r)),null!=n&&Yu(r,s),bn}function Sn(){let e=Pe();const t=Y();return Rl()?Fl():(e=e.parent,Jt(e,!1)),t.firstCreatePass&&(ds(t,e),Sl(e)&&t.queries.elementEnd(e)),Sn}function Mn(){return D()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ci(e){return!!e&&"function"==typeof e.then}const uc=function cm(e){return!!e&&"function"==typeof e.subscribe};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function fe(e,t,n,r){const o=D(),i=Y(),s=Pe();return function fm(e,t,n,r,o,i,s,a){const l=ls(r),c=e.firstCreatePass&&Kg(e),d=t[8],f=Qg(t);let h=!0;if(3&r.type||a){const _=It(r,t),y=a?a(_):_,w=f.length,m=a?U=>a(Te(U[r.index])):r.index;let b=null;if(!a&&l&&(b=function eI(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const a=t[7],l=o[i+2];return a.length>l?a[l]:null}"string"==typeof s&&(i+=2)}return null}(e,t,o,r.index)),null!==b)(b.__ngLastListenerFn__||b).__ngNextListenerFn__=i,b.__ngLastListenerFn__=i,h=!1;else{i=pm(r,t,d,i,!1);const U=n.listen(y,o,i);f.push(i,U),c&&c.push(o,m,w,w+1)}}else i=pm(r,t,d,i,!1);const p=r.outputs;let g;if(h&&null!==p&&(g=p[o])){const _=g.length;if(_)for(let y=0;y<_;y+=2){const me=t[g[y]][g[y+1]].subscribe(i),Mr=f.length;f.push(i,me),c&&c.push(o,r.index,Mr,-(Mr+1))}}}(i,o,o[z],s,e,t,0,r),fe}function hm(e,t,n,r){try{return!1!==n(r)}catch(o){return Yg(e,o),!1}}function pm(e,t,n,r,o){return function i(s){if(s===Function)return r;nc(2&e.flags?mt(e.index,t):t);let l=hm(t,0,r,s),u=i.__ngNextListenerFn__;for(;u;)l=hm(t,0,u,s)&&l,u=u.__ngNextListenerFn__;return o&&!1===l&&(s.preventDefault(),s.returnValue=!1),l}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ee(e=1){return function qE(e){return(V.lFrame.contextLView=function QE(e,t){for(;e>0;)t=t[15],e--;return t}(e,V.lFrame.contextLView))[8]}(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function pr(e,t,n){return cc(e,"",t,"",n),pr}function cc(e,t,n,r,o){const i=D(),s=no(i,t,n,r);return s!==j&&Ct(Y(),_e(),i,e,s,i[z],o,!1),cc}function Em(e,t,n,r,o){const i=e[n+1],s=null===t;let a=r?$t(i):wn(i),l=!1;for(;0!==a&&(!1===l||s);){const c=e[a+1];sI(e[a],t)&&(l=!0,e[a+1]=r?ju(c):Vu(c)),a=r?$t(c):wn(c)}l&&(e[n+1]=r?Vu(i):ju(i))}function sI(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&Ur(e,t)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zs(e,t){return function jt(e,t,n,r){const o=D(),i=Y(),s=function yn(e){const t=V.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}(2);i.firstUpdatePass&&function Rm(e,t,n,r){const o=e.data;if(null===o[n+1]){const i=o[et()],s=function Nm(e,t){return t>=e.expandoStartIndex}(e,n);(function km(e,t){return 0!=(e.flags&(t?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */)(i,r)&&null===t&&!s&&(t=!1),t=function gI(e,t,n,r){const o=function Ol(e){const t=V.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let i=r?t.residualClasses:t.residualStyles;if(null===o)0===(r?t.classBindings:t.styleBindings)&&(n=di(n=dc(null,e,t,n,r),t.attrs,r),i=null);else{const s=t.directiveStylingLast;if(-1===s||e[s]!==o)if(n=dc(o,e,t,n,r),null===i){let l=function mI(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==wn(r))return e[$t(r)]}(e,t,r);void 0!==l&&Array.isArray(l)&&(l=dc(null,e,t,l[1],r),l=di(l,t.attrs,r),function yI(e,t,n,r){e[$t(n?t.classBindings:t.styleBindings)]=r}(e,t,r,l))}else i=function vI(e,t,n){let r;const o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++)r=di(r,e[i].hostAttrs,n);return di(r,t.attrs,n)}(e,t,r)}return void 0!==i&&(r?t.residualClasses=i:t.residualStyles=i),n}(o,i,t,r),function oI(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,a=$t(s),l=wn(s);e[r]=n;let c,u=!1;if(Array.isArray(n)){const d=n;c=d[1],(null===c||Ur(d,c)>0)&&(u=!0)}else c=n;if(o)if(0!==l){const f=$t(e[a+1]);e[r+1]=Ps(f,a),0!==f&&(e[f+1]=$u(e[f+1],r)),e[a+1]=function YS(e,t){return 131071&e|t<<17}(e[a+1],r)}else e[r+1]=Ps(a,0),0!==a&&(e[a+1]=$u(e[a+1],r)),a=r;else e[r+1]=Ps(l,0),0===a?a=r:e[l+1]=$u(e[l+1],r),l=r;u&&(e[r+1]=Vu(e[r+1])),Em(e,c,r,!0),Em(e,c,r,!1),function iI(e,t,n,r,o){const i=o?e.residualClasses:e.residualStyles;null!=i&&"string"==typeof t&&Ur(i,t)>=0&&(n[r+1]=ju(n[r+1]))}(t,c,e,r,i),s=Ps(a,l),i?t.classBindings=s:t.styleBindings=s}(o,i,t,n,s,r)}}(i,e,s,r),t!==j&&We(o,s,t)&&function Pm(e,t,n,r,o,i,s,a){if(!(3&t.type))return;const l=e.data,u=l[a+1];Ws(function Mg(e){return 1==(1&e)}(u)?Om(l,t,n,o,wn(u),s):void 0)||(Ws(i)||function Sg(e){return 2==(2&e)}(u)&&(i=Om(l,null,n,o,a,s)),function CS(e,t,n,r,o){if(t)o?e.addClass(n,r):e.removeClass(n,r);else{let i=-1===r.indexOf("-")?void 0:lt.DashCase;null==o?e.removeStyle(n,r,i):("string"==typeof o&&o.endsWith("!important")&&(o=o.slice(0,-10),i|=lt.Important),e.setStyle(n,r,o,i))}}(r,s,us(et(),n),o,i))}(i,i.data[et()],o,o[z],e,o[s+1]=function CI(e,t){return null==e||("string"==typeof t?e+=t:"object"==typeof e&&(e=se(Un(e)))),e}(t,n),r,s)}(e,t,null,!0),zs}function dc(e,t,n,r,o){let i=null;const s=n.directiveEnd;let a=n.directiveStylingLast;for(-1===a?a=n.directiveStart:a++;a<s&&(i=t[a],r=di(r,i.hostAttrs,o),i!==e);)a++;return null!==e&&(n.directiveStylingLast=a),r}function di(e,t,n){const r=n?1:2;let o=-1;if(null!==t)for(let i=0;i<t.length;i++){const s=t[i];"number"==typeof s?o=s:o===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),vt(e,s,!!n||t[++i]))}return void 0===e?null:e}function Om(e,t,n,r,o,i){const s=null===t;let a;for(;o>0;){const l=e[o],u=Array.isArray(l),c=u?l[1]:l,d=null===c;let f=n[o+1];f===j&&(f=d?X:void 0);let h=d?ql(f,r):c===r?f:void 0;if(u&&!Ws(h)&&(h=ql(l,r)),Ws(h)&&(a=h,s))return a;const p=e[o+1];o=s?$t(p):wn(p)}if(null!==t){let l=i?t.residualClasses:t.residualStyles;null!=l&&(a=ql(l,r))}return a}function Ws(e){return void 0!==e}function K(e,t=""){const n=D(),r=Y(),o=e+22,i=r.firstCreatePass?Xr(r,o,1,t,null):r.data[o],s=n[o]=function Su(e,t){return e.createText(t)}(n[z],t);Ns(r,n,s,i),Jt(i,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function In(e){return sn("",e,""),In}function sn(e,t,n){const r=D(),o=no(r,e,t,n);return o!==j&&function En(e,t,n){const r=us(t,e);!function Wp(e,t,n){e.setValue(t,n)}(e[z],r,n)}(r,et(),o),sn}const ho="en-US";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let oy=ho;function pc(e,t,n,r,o){if(e=k(e),Array.isArray(e))for(let i=0;i<e.length;i++)pc(e[i],t,n,r,o);else{const i=Y(),s=D();let a=cr(e)?e:k(e.provide),l=Ap(e);const u=Pe(),c=1048575&u.providerIndexes,d=u.directiveStart,f=u.providerIndexes>>20;if(cr(e)||!e.multi){const h=new ko(l,o,v),p=mc(a,t,o?c:c+f,d);-1===p?(vs(Vo(u,s),i,a),gc(i,e,t.length),t.push(a),u.directiveStart++,u.directiveEnd++,o&&(u.providerIndexes+=1048576),n.push(h),s.push(h)):(n[p]=h,s[p]=h)}else{const h=mc(a,t,c+f,d),p=mc(a,t,c,c+f),g=h>=0&&n[h],_=p>=0&&n[p];if(o&&!_||!o&&!g){vs(Vo(u,s),i,a);const y=function $A(e,t,n,r,o){const i=new ko(e,n,v);return i.multi=[],i.index=t,i.componentProviders=0,Ty(i,o,r&&!n),i}(o?VA:LA,n.length,o,r,l);!o&&_&&(n[p].providerFactory=y),gc(i,e,t.length,0),t.push(a),u.directiveStart++,u.directiveEnd++,o&&(u.providerIndexes+=1048576),n.push(y),s.push(y)}else gc(i,e,h>-1?h:p,Ty(n[o?p:h],l,!o&&r));!o&&r&&_&&n[p].componentProviders++}}}function gc(e,t,n,r){const o=cr(t),i=function g0(e){return!!e.useClass}(t);if(o||i){const l=(i?k(t.useClass):t).prototype.ngOnDestroy;if(l){const u=e.destroyHooks||(e.destroyHooks=[]);if(!o&&t.multi){const c=u.indexOf(n);-1===c?u.push(n,[r,l]):u[c+1].push(r,l)}else u.push(n,l)}}}function Ty(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function mc(e,t,n,r){for(let o=n;o<r;o++)if(t[o]===e)return o;return-1}function LA(e,t,n,r){return yc(this.multi,[])}function VA(e,t,n,r){const o=this.multi;let i;if(this.providerFactory){const s=this.providerFactory.componentProviders,a=$o(n,n[1],this.providerFactory.index,r);i=a.slice(0,s),yc(o,i);for(let l=s;l<a.length;l++)i.push(a[l])}else i=[],yc(o,i);return i}function yc(e,t){for(let n=0;n<e.length;n++)t.push((0,e[n])());return t}function ge(e,t=[]){return n=>{n.providersResolver=(r,o)=>
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function kA(e,t,n){const r=Y();if(r.firstCreatePass){const o=Lt(e);pc(n,r.data,r.blueprint,o,!0),pc(t,r.data,r.blueprint,o,!1)}}(r,o?o(e):e,t)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class mr{}class xy{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ny extends mr{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new ic(this);const r=pt(t);this._bootstrapComponents=Cn(r.bootstrap),this._r3Injector=yg(t,n,[{provide:mr,useValue:this},{provide:ti,useValue:this.componentFactoryResolver}],se(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(t)}get injector(){return this._r3Injector}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class vc extends xy{constructor(t){super(),this.moduleType=t}create(t){return new Ny(this.moduleType,t)}}class BA extends mr{constructor(t,n,r){super(),this.componentFactoryResolver=new ic(this),this.instance=null;const o=new Ip([...t,{provide:mr,useValue:this},{provide:ti,useValue:this.componentFactoryResolver}],n||Ts(),r,new Set(["environment"]));this.injector=o,o.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}}function Ys(e,t,n=null){return new BA(e,t,n).injector}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let HA=(()=>{class e{constructor(n){this._injector=n,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n.id)){const r=Ep(0,n.type),o=r.length>0?Ys([r],this._injector,`Standalone[${n.type.name}]`):null;this.cachedInjectors.set(n.id,o)}return this.cachedInjectors.get(n.id)}ngOnDestroy(){try{for(const n of this.cachedInjectors.values())null!==n&&n.destroy()}finally{this.cachedInjectors.clear()}}}return e.\u0275prov=F({token:e,providedIn:"environment",factory:()=>new e(M(Gn))}),e})();function Ry(e){e.getStandaloneInjector=t=>t.get(HA).getOrCreateStandaloneInjector(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $y(e,t,n,r){return function jy(e,t,n,r,o,i){const s=t+n;return We(e,s,o)?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function tn(e,t,n){return e[t]=n}(e,s+1,i?r.call(i,o):r(o)):function yi(e,t){const n=e[t];return n===j?void 0:n}(e,s+1)}(D(),function Xe(){const e=V.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}(),e,t,n,r)}function Dc(e){return t=>{setTimeout(e,void 0,t)}}const Ce=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class hT extends Ze{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&"object"==typeof t){var a,l,u;const d=t;o=null===(a=d.next)||void 0===a?void 0:a.bind(d),i=null===(l=d.error)||void 0===l?void 0:l.bind(d),s=null===(u=d.complete)||void 0===u?void 0:u.bind(d)}this.__isAsync&&(i=Dc(i),o&&(o=Dc(o)),s&&(s=Dc(s)));const c=super.subscribe({next:o,error:i,complete:s});return t instanceof ct&&t.add(c),c}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function pT(){return this._results[fr()]()}class Cc{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=fr(),r=Cc.prototype;r[n]||(r[n]=pT)}get changes(){return this._changes||(this._changes=new Ce)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const r=this;r.dirty=!1;const o=yt(t);(this._changesDetected=!function gb(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}(r._results,o,n))&&(r._results=o,r.length=o.length,r.last=o[this.length-1],r.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let An=(()=>{class e{}return e.__NG_ELEMENT_ID__=yT,e})();const gT=An,mT=class extends gT{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t,n){const r=this._declarationTContainer.tViews,o=Ls(this._declarationLView,r,t,16,null,r.declTNode,null,null,null,null,n||null);o[17]=this._declarationLView[this._declarationTContainer.index];const s=this._declarationLView[19];return null!==s&&(o[19]=s.createEmbeddedView(r)),Ku(r,o,t),new si(o)}};function yT(){return Js(Pe(),D())}function Js(e,t){return 4&e.type?new mT(t,e,Qr(e,t)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ht=(()=>{class e{}return e.__NG_ELEMENT_ID__=vT,e})();function vT(){return qy(Pe(),D())}const _T=Ht,zy=class extends _T{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return Qr(this._hostTNode,this._hostLView)}get injector(){return new Vr(this._hostTNode,this._hostLView)}get parentInjector(){const t=ys(this._hostTNode,this._hostLView);if(Vh(t)){const n=Lr(t,this._hostLView),r=kr(t);return new Vr(n[1].data[r+8],n)}return new Vr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=Wy(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){let o,i;"number"==typeof r?o=r:null!=r&&(o=r.index,i=r.injector);const s=t.createEmbeddedView(n||{},i);return this.insert(s,o),s}createComponent(t,n,r,o,i){const s=t&&!function Ho(e){return"function"==typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t);let a;if(s)a=n;else{const d=n||{};a=d.index,r=d.injector,o=d.projectableNodes,i=d.environmentInjector||d.ngModuleRef}const l=s?t:new ai(ne(t)),u=r||this.parentInjector;if(!i&&null==l.ngModule){const f=(s?u:this.parentInjector).get(Gn,null);f&&(i=f)}const c=l.create(u,o,void 0,i);return this.insert(c.hostView,a),c}insert(t,n){const r=t._lView,o=r[1];if(function kE(e){return kt(e[3])}(r)){const c=this.indexOf(t);if(-1!==c)this.detach(c);else{const d=r[3],f=new zy(d,d[6],d[3]);f.detach(f.indexOf(t))}}const i=this._adjustIndex(n),s=this._lContainer;!function hS(e,t,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-10?(t[4]=n[o],Kh(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function pS(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const a=t[19];null!==a&&a.insertView(e),t[2]|=64}(o,r,s,i);const a=xu(i,s),l=r[z],u=xs(l,s[7]);return null!==u&&function cS(e,t,n,r,o,i){r[0]=o,r[6]=t,ii(e,r,n,1,o,i)}(o,s[6],l,r,u,a),t.attachToViewContainerRef(),Kh(wc(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=Wy(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=Iu(this._lContainer,n);r&&(Ds(wc(this._lContainer),n),Qp(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=Iu(this._lContainer,n);return r&&null!=Ds(wc(this._lContainer),n)?new si(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function Wy(e){return e[8]}function wc(e){return e[8]||(e[8]=[])}function qy(e,t){let n;const r=t[e.index];if(kt(r))n=r;else{let o;if(8&e.type)o=Te(r);else{const i=t[z];o=i.createComment("");const s=It(e,t);dr(i,xs(i,s),o,function vS(e,t){return e.nextSibling(t)}(i,s),!1)}t[e.index]=n=qg(r,t,o,e),$s(t,n)}return new zy(n,e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ec{constructor(t){this.queryList=t,this.matches=null}clone(){return new Ec(this.queryList)}setDirty(){this.queryList.setDirty()}}class bc{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const r=null!==t.contentQueries?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){const s=n.getByIndex(i);o.push(this.queries[s.indexInDeclarationView].clone())}return new bc(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==Jy(t,n).matches&&this.queries[n].setDirty()}}class Qy{constructor(t,n,r=null){this.predicate=t,this.flags=n,this.read=r}}class Sc{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){const o=null!==n?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,null!==n?n.push(i):n=[i])}return null!==n?new Sc(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class Mc{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new Mc(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=t.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];this.matchTNodeWithReadOption(t,n,wT(n,i)),this.matchTNodeWithReadOption(t,n,_s(n,t,i,!1,!1))}else r===An?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,_s(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(null!==r){const o=this.metadata.read;if(null!==o)if(o===_t||o===Ht||o===An&&4&n.type)this.addMatch(n.index,-2);else{const i=_s(n,t,o,!1,!1);null!==i&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function wT(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function bT(e,t,n,r){return-1===n?function ET(e,t){return 11&e.type?Qr(e,t):4&e.type?Js(e,t):null}(t,e):-2===n?function ST(e,t,n){return n===_t?Qr(t,e):n===An?Js(t,e):n===Ht?qy(t,e):void 0}(e,t,r):$o(e,e[1],n,t)}function Ky(e,t,n,r){const o=t[19].queries[r];if(null===o.matches){const i=e.data,s=n.matches,a=[];for(let l=0;l<s.length;l+=2){const u=s[l];a.push(u<0?null:bT(t,i[u],s[l+1],n.metadata.read))}o.matches=a}return o.matches}function Ic(e,t,n,r){const o=e.queries.getByIndex(n),i=o.matches;if(null!==i){const s=Ky(e,t,o,n);for(let a=0;a<i.length;a+=2){const l=i[a];if(l>0)r.push(s[a/2]);else{const u=i[a+1],c=t[-l];for(let d=10;d<c.length;d++){const f=c[d];f[17]===f[3]&&Ic(f[1],f,u,r)}if(null!==c[9]){const d=c[9];for(let f=0;f<d.length;f++){const h=d[f];Ic(h[1],h,u,r)}}}}}return r}function po(e){const t=D(),n=Y(),r=Ah();kl(r+1);const o=Jy(n,r);if(e.dirty&&function OE(e){return 4==(4&e[2])}(t)===(2==(2&o.metadata.flags))){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?Ic(n,t,r,[]):Ky(n,t,o,r);e.reset(i,I0),e.notifyOnChanges()}return!0}return!1}function Xs(e,t,n){const r=Y();r.firstCreatePass&&(function Yy(e,t,n){null===e.queries&&(e.queries=new Sc),e.queries.track(new Mc(t,n))}(r,new Qy(e,t,n),-1),2==(2&t)&&(r.staticViewQueries=!0)),function Zy(e,t,n){const r=new Cc(4==(4&n));Vg(e,t,r,r.destroy),null===t[19]&&(t[19]=new bc),t[19].queries.push(new Ec(r))}(r,D(),t)}function go(){return function MT(e,t){return e[19].queries[t].queryList}(D(),Ah())}function Jy(e,t){return e.queries.getByIndex(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ta(...e){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const na=new x("Application Initializer");let ra=(()=>{class e{constructor(n){this.appInits=n,this.resolve=ta,this.reject=ta,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const i=this.appInits[o]();if(ci(i))n.push(i);else if(uc(i)){const s=new Promise((a,l)=>{i.subscribe({complete:a,error:l})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(M(na,8))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Di=new x("AppId",{providedIn:"root",factory:function yv(){return`${Fc()}${Fc()}${Fc()}`}});function Fc(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const vv=new x("Platform Initializer"),Pc=new x("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),_v=new x("appBootstrapListener");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let QT=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Tn=new x("LocaleId",{providedIn:"root",factory:()=>be(Tn,P.Optional|P.SkipSelf)||function KT(){return typeof $localize<"u"&&$localize.locale||ho}()});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class YT{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let Oc=(()=>{class e{compileModuleSync(n){return new vc(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const r=this.compileModuleSync(n),i=Cn(pt(n).declarations).reduce((s,a)=>{const l=ne(a);return l&&s.push(new ai(l)),s},[]);return new YT(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ex=(()=>Promise.resolve(0))();function kc(e){typeof Zone>"u"?ex.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Le{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Ce(!1),this.onMicrotaskEmpty=new Ce(!1),this.onStable=new Ce(!1),this.onError=new Ce(!1),typeof Zone>"u")throw new C(908,!1);Zone.assertZonePatched();const o=this;if(o._nesting=0,o._outer=o._inner=Zone.current,Zone.AsyncStackTaggingZoneSpec){const i=Zone.AsyncStackTaggingZoneSpec;o._inner=o._inner.fork(new i("Angular"))}Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function tx(){let e=ae.requestAnimationFrame,t=ae.cancelAnimationFrame;if(typeof Zone<"u"&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function ox(e){const t=()=>{!function rx(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(ae,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,Vc(e),e.isCheckStableRunning=!0,Lc(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),Vc(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,a)=>{try{return wv(e),n.invokeTask(o,i,s,a)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),Ev(e)}},onInvoke:(n,r,o,i,s,a,l)=>{try{return wv(e),n.invoke(o,i,s,a,l)}finally{e.shouldCoalesceRunChangeDetection&&t(),Ev(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(e._hasPendingMicrotasks=i.microTask,Vc(e),Lc(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Le.isInAngularZone())throw new C(909,!1)}static assertNotInAngularZone(){if(Le.isInAngularZone())throw new C(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,nx,ta,ta);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const nx={};function Lc(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Vc(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function wv(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Ev(e){e._nesting--,Lc(e)}class ix{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Ce,this.onMicrotaskEmpty=new Ce,this.onStable=new Ce,this.onError=new Ce}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const bv=new x(""),oa=new x("");let Bc,$c=(()=>{class e{constructor(n,r,o){this._ngZone=n,this.registry=r,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,Bc||(function sx(e){Bc=e}(o),o.addToWindow(r)),this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Le.assertNotInAngularZone(),kc(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())kc(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let i=-1;r&&r>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(n){this.registry.registerApplication(n,this)}unregisterApplication(n){this.registry.unregisterApplication(n)}findProviders(n,r,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(M(Le),M(jc),M(oa))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})(),jc=(()=>{class e{constructor(){this._applications=new Map}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){var o,i;return null!==(o=null===(i=Bc)||void 0===i?void 0:i.findTestabilityInTree(this,n,r))&&void 0!==o?o:null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})(),qn=null;const Sv=new x("AllowMultipleToken"),Hc=new x("PlatformDestroyListeners");class Mv{constructor(t,n){this.name=t,this.token=n}}function Av(e,t,n=[]){const r=`Platform: ${t}`,o=new x(r);return(i=[])=>{let s=Uc();if(!s||s.injector.get(Sv,!1)){const a=[...n,...i,{provide:o,useValue:!0}];e?e(a):function ux(e){if(qn&&!qn.get(Sv,!1))throw new C(400,!1);qn=e;const t=e.get(xv);(function Iv(e){const t=e.get(vv,null);t&&t.forEach(n=>n())})(e)}(function Tv(e=[],t){return Dt.create({name:t,providers:[{provide:lu,useValue:"platform"},{provide:Hc,useValue:new Set([()=>qn=null])},...e]})}(a,r))}return function dx(e){const t=Uc();if(!t)throw new C(401,!1);return t}()}}function Uc(){var e,t;return null!==(e=null===(t=qn)||void 0===t?void 0:t.get(xv))&&void 0!==e?e:null}let xv=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const o=function Rv(e,t){let n;return n="noop"===e?new ix:("zone.js"===e?void 0:e)||new Le(t),n}(r?.ngZone,function Nv(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!e||!e.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!e||!e.ngZoneRunCoalescing)||!1}}(r)),i=[{provide:Le,useValue:o}];return o.run(()=>{const s=Dt.create({providers:i,parent:this.injector,name:n.moduleType.name}),a=n.create(s),l=a.injector.get(Kr,null);if(!l)throw new C(402,!1);return o.runOutsideAngular(()=>{const u=o.onError.subscribe({next:c=>{l.handleError(c)}});a.onDestroy(()=>{sa(this._modules,a),u.unsubscribe()})}),function Fv(e,t,n){try{const r=n();return ci(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(l,o,()=>{const u=a.injector.get(ra);return u.runInitializers(),u.donePromise.then(()=>(function iy(e){ft(e,"Expected localeId to be defined"),"string"==typeof e&&(oy=e.toLowerCase().replace(/_/g,"-"))}(a.injector.get(Tn,ho)||ho),this._moduleDoBootstrap(a),a))})})}bootstrapModule(n,r=[]){const o=Pv({},r);return function ax(e,t,n){const r=new vc(n);return Promise.resolve(r)}(0,0,n).then(i=>this.bootstrapModuleFactory(i,o))}_moduleDoBootstrap(n){const r=n.injector.get(ia);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new C(403,!1);n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new C(404,!1);this._modules.slice().forEach(r=>r.destroy()),this._destroyListeners.forEach(r=>r());const n=this._injector.get(Hc,null);n&&(n.forEach(r=>r()),n.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(M(Dt))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();function Pv(e,t){return Array.isArray(t)?t.reduce(Pv,e):{...e,...t}}let ia=(()=>{class e{constructor(n,r,o){this._zone=n,this._injector=r,this._exceptionHandler=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const i=new we(a=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{a.next(this._stable),a.complete()})}),s=new we(a=>{let l;this._zone.runOutsideAngular(()=>{l=this._zone.onStable.subscribe(()=>{Le.assertNotInAngularZone(),kc(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,a.next(!0))})})});const u=this._zone.onUnstable.subscribe(()=>{Le.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{a.next(!1)}))});return()=>{l.unsubscribe(),u.unsubscribe()}});this.isStable=function oE(...e){const t=To(e),n=function Yw(e,t){return"number"==typeof pl(e)?e.pop():t}(e,1/0),r=e;return r.length?1===r.length?Rt(r[0]):Ar(n)(Ae(r,t)):hn}(i,s.pipe(function iE(e={}){const{connector:t=(()=>new Ze),resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:o=!0}=e;return i=>{let s,a,l,u=0,c=!1,d=!1;const f=()=>{a?.unsubscribe(),a=void 0},h=()=>{f(),s=l=void 0,c=d=!1},p=()=>{const g=s;h(),g?.unsubscribe()};return Ie((g,_)=>{u++,!d&&!c&&f();const y=l=l??t();_.add(()=>{u--,0===u&&!d&&!c&&(a=gl(p,o))}),y.subscribe(_),!s&&u>0&&(s=new Ao({next:w=>y.next(w),error:w=>{d=!0,f(),a=gl(h,n,w),y.error(w)},complete:()=>{c=!0,f(),a=gl(h,r),y.complete()}}),Rt(g).subscribe(s))})(i)}}()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(n,r){const o=n instanceof Tp;if(!this._injector.get(ra).done)throw!o&&function xr(e){const t=ne(e)||Ye(e)||Je(e);return null!==t&&t.standalone}(n),new C(405,false);let s;s=o?n:this._injector.get(ti).resolveComponentFactory(n),this.componentTypes.push(s.componentType);const a=function lx(e){return e.isBoundToModule}(s)?void 0:this._injector.get(mr),u=s.create(Dt.NULL,[],r||s.selector,a),c=u.location.nativeElement,d=u.injector.get(bv,null);return d?.registerApplication(c),u.onDestroy(()=>{this.detachView(u.hostView),sa(this.components,u),d?.unregisterApplication(c)}),this._loadComponent(u),u}tick(){if(this._runningTick)throw new C(101,!1);try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;sa(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(_v,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>sa(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new C(406,!1);const n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return e.\u0275fac=function(n){return new(n||e)(M(Le),M(Gn),M(Kr))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function sa(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let kv=!0,aa=(()=>{class e{}return e.__NG_ELEMENT_ID__=px,e})();function px(e){return function gx(e,t,n){if(as(e)&&!n){const r=mt(e.index,t);return new si(r,r)}return 47&e.type?new si(t[16],t):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Pe(),D(),16==(16&e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Bv{constructor(){}supports(t){return li(t)}create(t){return new Cx(t)}}const Dx=(e,t)=>t;class Cx{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||Dx}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){const s=!r||n&&n.currentIndex<Uv(r,o,i)?n:r,a=Uv(s,o,i),l=s.currentIndex;if(s===r)o--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)o++;else{i||(i=[]);const u=a-o,c=l-o;if(u!=c){for(let f=0;f<u;f++){const h=f<i.length?i[f]:i[f]=0,p=h+f;c<=p&&p<u&&(i[f]=h+1)}i[s.previousIndex]=c-u}}a!==l&&t(s,a,l)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!li(t))throw new C(900,!1);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let o,i,s,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let a=0;a<this.length;a++)i=t[a],s=this._trackByFn(a,i),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,i,s,a)),Object.is(n.item,i)||this._addIdentityChange(n,i)):(n=this._mismatch(n,i,s,a),r=!0),n=n._next}else o=0,function WM(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[fr()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,a=>{s=this._trackByFn(o,a),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,a,s,o)),Object.is(n.item,a)||this._addIdentityChange(n,a)):(n=this._mismatch(n,a,s,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,o){let i;return null===t?i=this._itTail:(i=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,o)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,o)):t=this._addAfter(new wx(n,r),i,o),t}_verifyReinsertion(t,n,r,o){let i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==i?t=this._reinsertAfter(i,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const o=t._prevRemoved,i=t._nextRemoved;return null===o?this._removalsHead=i:o._nextRemoved=i,null===i?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const o=null===n?this._itHead:n._next;return t._next=o,t._prev=n,null===o?this._itTail=t:o._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new Hv),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Hv),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class wx{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class Ex{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class Hv{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new Ex,this.map.set(n,r)),r.add(t)}get(t,n){const o=this.map.get(t);return o?o.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Uv(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class Gv{constructor(){}supports(t){return t instanceof Map||ac(t)}create(){return new bx}}class bx{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||ac(t)))throw new C(900,!1)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const i=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,i)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const r=t._prev;return n._next=t,n._prev=r,t._prev=n,r&&(r._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const o=this._records.get(t);this._maybeAddToChanges(o,n);const i=o._prev,s=o._next;return i&&(i._next=s),s&&(s._prev=i),o._next=null,o._prev=null,o}const r=new Sx(t);return this._records.set(t,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(r=>n(t[r],r))}}class Sx{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zv(){return new ca([new Bv])}let ca=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||zv()),deps:[[e,new Qo,new qo]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new C(901,!1)}}return e.\u0275prov=F({token:e,providedIn:"root",factory:zv}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Wv(){return new Ci([new Gv])}let Ci=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||Wv()),deps:[[e,new Qo,new qo]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(r)return r;throw new C(901,!1)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=F({token:e,providedIn:"root",factory:Wv}),e})();const Ax=Av(null,"core",[]);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Tx=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(M(ia))},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({}),e})(),da=null;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function an(){return da}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ot=new x("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Qc=(()=>{class e{historyGo(n){throw new Error("Not implemented")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:function(){return function Fx(){return M(qv)}()},providedIn:"platform"}),e})();const Px=new x("Location Initialized");let qv=(()=>{class e extends Qc{constructor(n){super(),this._doc=n,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return an().getBaseHref(this._doc)}onPopState(n){const r=an().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){const r=an().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(n){this.location.pathname=n}pushState(n,r,o){Qv()?this._history.pushState(n,r,o):this.location.hash=o}replaceState(n,r,o){Qv()?this._history.replaceState(n,r,o):this.location.hash=o}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}}return e.\u0275fac=function(n){return new(n||e)(M(ot))},e.\u0275prov=F({token:e,factory:function(){return function Ox(){return new qv(M(ot))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */()},providedIn:"platform"}),e})();function Qv(){return!!window.history.pushState}function Kc(e,t){if(0==e.length)return t;if(0==t.length)return e;let n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,2==n?e+t.substring(1):1==n?e+t:e+"/"+t}function Kv(e){const t=e.match(/#|\?|$/),n=t&&t.index||e.length;return e.slice(0,n-("/"===e[n-1]?1:0))+e.slice(n)}function Rn(e){return e&&"?"!==e[0]?"?"+e:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let vr=(()=>{class e{historyGo(n){throw new Error("Not implemented")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:function(){return be(Yv)},providedIn:"root"}),e})();const Zv=new x("appBaseHref");let Yv=(()=>{class e extends vr{constructor(n,r){var o,i,s;super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=null!==(o=null!==(i=r??this._platformLocation.getBaseHrefFromDOM())&&void 0!==i?i:null===(s=be(ot).location)||void 0===s?void 0:s.origin)&&void 0!==o?o:""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Kc(this._baseHref,n)}path(n=!1){const r=this._platformLocation.pathname+Rn(this._platformLocation.search),o=this._platformLocation.hash;return o&&n?`${r}${o}`:r}pushState(n,r,o,i){const s=this.prepareExternalUrl(o+Rn(i));this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){const s=this.prepareExternalUrl(o+Rn(i));this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){var r,o;null===(r=(o=this._platformLocation).historyGo)||void 0===r||r.call(o,n)}}return e.\u0275fac=function(n){return new(n||e)(M(Qc),M(Zv,8))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),kx=(()=>{class e extends vr{constructor(n,r){super(),this._platformLocation=n,this._baseHref="",this._removeListenerFns=[],null!=r&&(this._baseHref=r)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}path(n=!1){let r=this._platformLocation.hash;return null==r&&(r="#"),r.length>0?r.substring(1):r}prepareExternalUrl(n){const r=Kc(this._baseHref,n);return r.length>0?"#"+r:r}pushState(n,r,o,i){let s=this.prepareExternalUrl(o+Rn(i));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){let s=this.prepareExternalUrl(o+Rn(i));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){var r,o;null===(r=(o=this._platformLocation).historyGo)||void 0===r||r.call(o,n)}}return e.\u0275fac=function(n){return new(n||e)(M(Qc),M(Zv,8))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})(),Zc=(()=>{class e{constructor(n){this._subject=new Ce,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;const r=this._locationStrategy.getBaseHref();this._baseHref=Kv(Jv(r)),this._locationStrategy.onPopState(o=>{this._subject.emit({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){var n;null===(n=this._urlChangeSubscription)||void 0===n||n.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+Rn(r))}normalize(n){return e.stripTrailingSlash(function Vx(e,t){return e&&t.startsWith(e)?t.substring(e.length):t}(this._baseHref,Jv(n)))}prepareExternalUrl(n){return n&&"/"!==n[0]&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",o=null){this._locationStrategy.pushState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+Rn(r)),o)}replaceState(n,r="",o=null){this._locationStrategy.replaceState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+Rn(r)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){var r,o;null===(r=(o=this._locationStrategy).historyGo)||void 0===r||r.call(o,n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)})),()=>{const r=this._urlChangeListeners.indexOf(n);var o;this._urlChangeListeners.splice(r,1),0===this._urlChangeListeners.length&&(null===(o=this._urlChangeSubscription)||void 0===o||o.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(o=>o(n,r))}subscribe(n,r,o){return this._subject.subscribe({next:n,error:r,complete:o})}}return e.normalizeQueryParams=Rn,e.joinWithSlash=Kc,e.stripTrailingSlash=Kv,e.\u0275fac=function(n){return new(n||e)(M(vr))},e.\u0275prov=F({token:e,factory:function(){return function Lx(){return new Zc(M(vr))}()},providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Jv(e){return e.replace(/\/index.html$/,"")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function a_(e,t){t=encodeURIComponent(t);for(const n of e.split(";")){const r=n.indexOf("="),[o,i]=-1==r?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===t)return decodeURIComponent(i)}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let bi=(()=>{class e{constructor(n,r,o,i){this._iterableDiffers=n,this._keyValueDiffers=r,this._ngEl=o,this._renderer=i,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(n){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof n?n.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(n){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof n?n.split(/\s+/):n,this._rawClass&&(li(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const n=this._iterableDiffer.diff(this._rawClass);n&&this._applyIterableChanges(n)}else if(this._keyValueDiffer){const n=this._keyValueDiffer.diff(this._rawClass);n&&this._applyKeyValueChanges(n)}}_applyKeyValueChanges(n){n.forEachAddedItem(r=>this._toggleClass(r.key,r.currentValue)),n.forEachChangedItem(r=>this._toggleClass(r.key,r.currentValue)),n.forEachRemovedItem(r=>{r.previousValue&&this._toggleClass(r.key,!1)})}_applyIterableChanges(n){n.forEachAddedItem(r=>{if("string"!=typeof r.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${se(r.item)}`);this._toggleClass(r.item,!0)}),n.forEachRemovedItem(r=>this._toggleClass(r.item,!1))}_applyClasses(n){n&&(Array.isArray(n)||n instanceof Set?n.forEach(r=>this._toggleClass(r,!0)):Object.keys(n).forEach(r=>this._toggleClass(r,!!n[r])))}_removeClasses(n){n&&(Array.isArray(n)||n instanceof Set?n.forEach(r=>this._toggleClass(r,!1)):Object.keys(n).forEach(r=>this._toggleClass(r,!1)))}_toggleClass(n,r){(n=n.trim())&&n.split(/\s+/g).forEach(o=>{r?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}}return e.\u0275fac=function(n){return new(n||e)(v(ca),v(Ci),v(_t),v(Dn))},e.\u0275dir=L({type:e,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"},standalone:!0}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class w1{constructor(t,n,r,o){this.$implicit=t,this.ngForOf=n,this.index=r,this.count=o}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let Si=(()=>{class e{constructor(n,r,o){this._viewContainer=n,this._template=r,this._differs=o,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const n=this._ngForOf;!this._differ&&n&&(this._differ=this._differs.find(n).create(this.ngForTrackBy))}if(this._differ){const n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){const r=this._viewContainer;n.forEachOperation((o,i,s)=>{if(null==o.previousIndex)r.createEmbeddedView(this._template,new w1(o.item,this._ngForOf,-1,-1),null===s?void 0:s);else if(null==s)r.remove(null===i?void 0:i);else if(null!==i){const a=r.get(i);r.move(a,s),c_(a,o)}});for(let o=0,i=r.length;o<i;o++){const a=r.get(o).context;a.index=o,a.count=i,a.ngForOf=this._ngForOf}n.forEachIdentityChange(o=>{c_(r.get(o.currentIndex),o)})}static ngTemplateContextGuard(n,r){return!0}}return e.\u0275fac=function(n){return new(n||e)(v(Ht),v(An),v(ca))},e.\u0275dir=L({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0}),e})();function c_(e,t){e.context.$implicit=t.item}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let _r=(()=>{class e{constructor(n,r){this._viewContainer=n,this._context=new b1,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=r}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){d_("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){d_("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,r){return!0}}return e.\u0275fac=function(n){return new(n||e)(v(Ht),v(An))},e.\u0275dir=L({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0}),e})();class b1{constructor(){this.$implicit=null,this.ngIf=null}}function d_(e,t){if(t&&!t.createEmbeddedView)throw new Error(`${e} must be a TemplateRef, but received '${se(t)}'.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Y1=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let tN=(()=>{class e{}return e.\u0275prov=F({token:e,providedIn:"root",factory:()=>new nN(M(ot),window)}),e})();class nN{constructor(t,n){this.document=t,this.window=n,this.offset=()=>[0,0]}setOffset(t){this.offset=Array.isArray(t)?()=>t:t}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(t){this.supportsScrolling()&&this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){if(!this.supportsScrolling())return;const n=function rN(e,t){const n=e.getElementById(t)||e.getElementsByName(t)[0];if(n)return n;if("function"==typeof e.createTreeWalker&&e.body&&(e.body.createShadowRoot||e.body.attachShadow)){const r=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT);let o=r.currentNode;for(;o;){const i=o.shadowRoot;if(i){const s=i.getElementById(t)||i.querySelector(`[name="${t}"]`);if(s)return s}o=r.nextNode()}}return null}(this.document,t);n&&(this.scrollToElement(n),n.focus())}setHistoryScrollRestoration(t){if(this.supportScrollRestoration()){const n=this.window.history;n&&n.scrollRestoration&&(n.scrollRestoration=t)}}scrollToElement(t){const n=t.getBoundingClientRect(),r=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,i=this.offset();this.window.scrollTo(r-i[0],o-i[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const t=g_(this.window.history)||g_(Object.getPrototypeOf(this.window.history));return!(!t||!t.writable&&!t.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function g_(e){return Object.getOwnPropertyDescriptor(e,"scrollRestoration")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class m_{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class fd extends
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.2.3
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class CN extends class Rx{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function Nx(e){da||(da=e)}(new fd)}onAndCancel(t,n,r){return t.addEventListener(n,r,!1),()=>{t.removeEventListener(n,r,!1)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,n){return(n=n||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return"window"===n?window:"document"===n?t:"body"===n?t.body:null}getBaseHref(t){const n=function wN(){return Ii=Ii||document.querySelector("base"),Ii?Ii.getAttribute("href"):null}();return null==n?null:function EN(e){wa=wa||document.createElement("a"),wa.setAttribute("href",e);const t=wa.pathname;return"/"===t.charAt(0)?t:`/${t}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}resetBaseElement(){Ii=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return a_(document.cookie,t)}}let wa,Ii=null;const D_=new x("TRANSITION_ID"),SN=[{provide:na,useFactory:function bN(e,t,n){return()=>{n.get(ra).donePromise.then(()=>{const r=an(),o=t.querySelectorAll(`style[ng-transition="${e}"]`);for(let i=0;i<o.length;i++)r.remove(o[i])})}},deps:[D_,ot,Dt],multi:!0}];let IN=(()=>{class e{build(){return new XMLHttpRequest}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ea=new x("EventManagerPlugins");let ba=(()=>{class e{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(o=>o.manager=this),this._plugins=n.slice().reverse()}addEventListener(n,r,o){return this._findPluginFor(r).addEventListener(n,r,o)}addGlobalEventListener(n,r,o){return this._findPluginFor(r).addGlobalEventListener(n,r,o)}getZone(){return this._zone}_findPluginFor(n){const r=this._eventNameToPlugin.get(n);if(r)return r;const o=this._plugins;for(let i=0;i<o.length;i++){const s=o[i];if(s.supports(n))return this._eventNameToPlugin.set(n,s),s}throw new Error(`No event manager plugin found for event ${n}`)}}return e.\u0275fac=function(n){return new(n||e)(M(Ea),M(Le))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})();class C_{constructor(t){this._doc=t}addGlobalEventListener(t,n,r){const o=an().getGlobalEventTarget(this._doc,t);if(!o)throw new Error(`Unsupported event target ${o} for event ${n}`);return this.addEventListener(o,n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let w_=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(n){const r=new Set;n.forEach(o=>{this._stylesSet.has(o)||(this._stylesSet.add(o),r.add(o))}),this.onStylesAdded(r)}onStylesAdded(n){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})(),Ai=(()=>{class e extends w_{constructor(n){super(),this._doc=n,this._hostNodes=new Map,this._hostNodes.set(n.head,[])}_addStylesToHost(n,r,o){n.forEach(i=>{const s=this._doc.createElement("style");s.textContent=i,o.push(r.appendChild(s))})}addHost(n){const r=[];this._addStylesToHost(this._stylesSet,n,r),this._hostNodes.set(n,r)}removeHost(n){const r=this._hostNodes.get(n);r&&r.forEach(E_),this._hostNodes.delete(n)}onStylesAdded(n){this._hostNodes.forEach((r,o)=>{this._addStylesToHost(n,o,r)})}ngOnDestroy(){this._hostNodes.forEach(n=>n.forEach(E_))}}return e.\u0275fac=function(n){return new(n||e)(M(ot))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})();function E_(e){an().remove(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const hd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},pd=/%COMP%/g;function Sa(e,t,n){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?Sa(e,o,n):(o=o.replace(pd,e),n.push(o))}return n}function M_(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let gd=(()=>{class e{constructor(n,r,o){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.rendererByCompId=new Map,this.defaultRenderer=new md(n)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;switch(r.encapsulation){case Kt.Emulated:{let o=this.rendererByCompId.get(r.id);return o||(o=new FN(this.eventManager,this.sharedStylesHost,r,this.appId),this.rendererByCompId.set(r.id,o)),o.applyToHost(n),o}case 1:case Kt.ShadowDom:return new PN(this.eventManager,this.sharedStylesHost,n,r);default:if(!this.rendererByCompId.has(r.id)){const o=Sa(r.id,r.styles,[]);this.sharedStylesHost.addStyles(o),this.rendererByCompId.set(r.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(n){return new(n||e)(M(ba),M(Ai),M(Di))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})();class md{constructor(t){this.eventManager=t,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(t,n){return n?document.createElementNS(hd[n]||n,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,n){(A_(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){t&&(A_(t)?t.content:t).insertBefore(n,r)}removeChild(t,n){t&&t.removeChild(n)}selectRootElement(t,n){let r="string"==typeof t?document.querySelector(t):t;if(!r)throw new Error(`The selector "${t}" did not match any elements`);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+":"+n;const i=hd[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){const o=hd[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){o&(lt.DashCase|lt.Important)?t.style.setProperty(n,r,o&lt.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&lt.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t[n]=r}setValue(t,n){t.nodeValue=n}listen(t,n,r){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,n,M_(r)):this.eventManager.addEventListener(t,n,M_(r))}}function A_(e){return"TEMPLATE"===e.tagName&&void 0!==e.content}class FN extends md{constructor(t,n,r,o){super(t),this.component=r;const i=Sa(o+"-"+r.id,r.styles,[]);n.addStyles(i),this.contentAttr=function xN(e){return"_ngcontent-%COMP%".replace(pd,e)}(o+"-"+r.id),this.hostAttr=function NN(e){return"_nghost-%COMP%".replace(pd,e)}(o+"-"+r.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,n){const r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}}class PN extends md{constructor(t,n,r,o){super(t),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const i=Sa(o.id,o.styles,[]);for(let s=0;s<i.length;s++){const a=document.createElement("style");a.textContent=i[s],this.shadowRoot.appendChild(a)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(this.nodeOrShadowRoot(t),n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ON=(()=>{class e extends C_{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o){return n.addEventListener(r,o,!1),()=>this.removeEventListener(n,r,o)}removeEventListener(n,r,o){return n.removeEventListener(r,o)}}return e.\u0275fac=function(n){return new(n||e)(M(ot))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const T_=["alt","control","meta","shift"],kN={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},LN={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let VN=(()=>{class e extends C_{constructor(n){super(n)}supports(n){return null!=e.parseEventName(n)}addEventListener(n,r,o){const i=e.parseEventName(r),s=e.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>an().onAndCancel(n,i.domEventName,s))}static parseEventName(n){const r=n.toLowerCase().split("."),o=r.shift();if(0===r.length||"keydown"!==o&&"keyup"!==o)return null;const i=e._normalizeKey(r.pop());let s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),T_.forEach(u=>{const c=r.indexOf(u);c>-1&&(r.splice(c,1),s+=u+".")}),s+=i,0!=r.length||0===i.length)return null;const l={};return l.domEventName=o,l.fullKey=s,l}static matchEventFullKeyCode(n,r){let o=kN[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),!(null==o||!o)&&(o=o.toLowerCase()," "===o?o="space":"."===o&&(o="dot"),T_.forEach(s=>{s!==o&&(0,LN[s])(n)&&(i+=s+".")}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{e.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return"esc"===n?"escape":n}}return e.\u0275fac=function(n){return new(n||e)(M(ot))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const HN=Av(Ax,"browser",[{provide:Pc,useValue:"browser"},{provide:vv,useValue:function $N(){fd.makeCurrent()},multi:!0},{provide:ot,useFactory:function BN(){return function jb(e){Jl=e}(document),document},deps:[]}]),R_=new x(""),F_=[{provide:oa,useClass:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class MN{addToWindow(t){ae.getAngularTestability=(r,o=!0)=>{const i=t.findTestabilityInTree(r,o);if(null==i)throw new Error("Could not find testability for element.");return i},ae.getAllAngularTestabilities=()=>t.getAllTestabilities(),ae.getAllAngularRootElements=()=>t.getAllRootElements(),ae.frameworkStabilizers||(ae.frameworkStabilizers=[]),ae.frameworkStabilizers.push(r=>{const o=ae.getAllAngularTestabilities();let i=o.length,s=!1;const a=function(l){s=s||l,i--,0==i&&r(s)};o.forEach(function(l){l.whenStable(a)})})}findTestabilityInTree(t,n,r){return null==n?null:t.getTestability(n)??(r?an().isShadowRoot(n)?this.findTestabilityInTree(t,n.host,!0):this.findTestabilityInTree(t,n.parentElement,!0):null)}},deps:[]},{provide:bv,useClass:$c,deps:[Le,jc,oa]},{provide:$c,useClass:$c,deps:[Le,jc,oa]}],P_=[{provide:lu,useValue:"root"},{provide:Kr,useFactory:function jN(){return new Kr},deps:[]},{provide:Ea,useClass:ON,multi:!0,deps:[ot,Le,Pc]},{provide:Ea,useClass:VN,multi:!0,deps:[ot]},{provide:gd,useClass:gd,deps:[ba,Ai,Di]},{provide:Np,useExisting:gd},{provide:w_,useExisting:Ai},{provide:Ai,useClass:Ai,deps:[ot]},{provide:ba,useClass:ba,deps:[Ea,Le]},{provide:m_,useClass:IN,deps:[]},[]];let UN=(()=>{class e{constructor(n){}static withServerTransition(n){return{ngModule:e,providers:[{provide:Di,useValue:n.appId},{provide:D_,useExisting:Di},SN]}}}return e.\u0275fac=function(n){return new(n||e)(M(R_,12))},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({providers:[...P_,...F_],imports:[Y1,Tx]}),e})(),O_=(()=>{class e{constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}}return e.\u0275fac=function(n){return new(n||e)(M(ot))},e.\u0275prov=F({token:e,factory:function(n){let r=null;return r=n?new n:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function zN(){return new O_(M(ot))}(),r},providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function N(...e){return Ae(e,To(e))}function Kn(e,t){return le(t)?je(e,t,1):je(e,1)}function ln(e,t){return Ie((n,r)=>{let o=0;n.subscribe(Ee(r,i=>e.call(t,i,o++)&&r.next(i)))})}
/**
       * @license Angular v14.2.3
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */typeof window<"u"&&window;class V_{}class $_{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Pn{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(n=>{const r=n.indexOf(":");if(r>0){const o=n.slice(0,r),i=o.toLowerCase(),s=n.slice(r+1).trim();this.maybeSetNormalizedName(o,i),this.headers.has(i)?this.headers.get(i).push(s):this.headers.set(i,[s])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(n=>{let r=t[n];const o=n.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(o,r),this.maybeSetNormalizedName(n,o))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const n=this.headers.get(t.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,n){return this.clone({name:t,value:n,op:"a"})}set(t,n){return this.clone({name:t,value:n,op:"s"})}delete(t,n){return this.clone({name:t,value:n,op:"d"})}maybeSetNormalizedName(t,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,t)}init(){this.lazyInit&&(this.lazyInit instanceof Pn?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(n=>{this.headers.set(n,t.headers.get(n)),this.normalizedNames.set(n,t.normalizedNames.get(n))})}clone(t){const n=new Pn;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof Pn?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}applyUpdate(t){const n=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,n);const o=("a"===t.op?this.headers.get(n):void 0)||[];o.push(...r),this.headers.set(n,o);break;case"d":const i=t.value;if(i){let s=this.headers.get(n);if(!s)return;s=s.filter(a=>-1===i.indexOf(a)),0===s.length?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,s)}else this.headers.delete(n),this.normalizedNames.delete(n)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>t(this.normalizedNames.get(n),this.headers.get(n)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class XN{encodeKey(t){return j_(t)}encodeValue(t){return j_(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const tR=/%(\d[a-f0-9])/gi,nR={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function j_(e){return encodeURIComponent(e).replace(tR,(t,n)=>{var r;return null!==(r=nR[n])&&void 0!==r?r:t})}function Ma(e){return`${e}`}class On{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new XN,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function eR(e,t){const n=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{const i=o.indexOf("="),[s,a]=-1==i?[t.decodeKey(o),""]:[t.decodeKey(o.slice(0,i)),t.decodeValue(o.slice(i+1))],l=n.get(s)||[];l.push(a),n.set(s,l)}),n}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(n=>{const r=t.fromObject[n],o=Array.isArray(r)?r.map(Ma):[Ma(r)];this.map.set(n,o)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const n=this.map.get(t);return n?n[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,n){return this.clone({param:t,value:n,op:"a"})}appendAll(t){const n=[];return Object.keys(t).forEach(r=>{const o=t[r];Array.isArray(o)?o.forEach(i=>{n.push({param:r,value:i,op:"a"})}):n.push({param:r,value:o,op:"a"})}),this.clone(n)}set(t,n){return this.clone({param:t,value:n,op:"s"})}delete(t,n){return this.clone({param:t,value:n,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const n=this.encoder.encodeKey(t);return this.map.get(t).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const n=new On({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(t),n}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const n=("a"===t.op?this.map.get(t.param):void 0)||[];n.push(Ma(t.value)),this.map.set(t.param,n);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const o=r.indexOf(Ma(t.value));-1!==o&&r.splice(o,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class rR{constructor(){this.map=new Map}set(t,n){return this.map.set(t,n),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function B_(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function H_(e){return typeof Blob<"u"&&e instanceof Blob}function U_(e){return typeof FormData<"u"&&e instanceof FormData}class Ti{constructor(t,n,r,o){let i;if(this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function oR(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==r?r:null,i=o):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new Pn),this.context||(this.context=new rR),this.params){const s=this.params.toString();if(0===s.length)this.urlWithParams=n;else{const a=n.indexOf("?");this.urlWithParams=n+(-1===a?"?":a<n.length-1?"&":"")+s}}else this.params=new On,this.urlWithParams=n}serializeBody(){return null===this.body?null:B_(this.body)||H_(this.body)||U_(this.body)||function iR(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof On?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||U_(this.body)?null:H_(this.body)?this.body.type||null:B_(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof On?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){var n;const r=t.method||this.method,o=t.url||this.url,i=t.responseType||this.responseType,s=void 0!==t.body?t.body:this.body,a=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,l=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let u=t.headers||this.headers,c=t.params||this.params;const d=null!==(n=t.context)&&void 0!==n?n:this.context;return void 0!==t.setHeaders&&(u=Object.keys(t.setHeaders).reduce((f,h)=>f.set(h,t.setHeaders[h]),u)),t.setParams&&(c=Object.keys(t.setParams).reduce((f,h)=>f.set(h,t.setParams[h]),c)),new Ti(r,o,s,{params:c,headers:u,context:d,reportProgress:l,responseType:i,withCredentials:a})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Fe=(()=>((Fe=Fe||{})[Fe.Sent=0]="Sent",Fe[Fe.UploadProgress=1]="UploadProgress",Fe[Fe.ResponseHeader=2]="ResponseHeader",Fe[Fe.DownloadProgress=3]="DownloadProgress",Fe[Fe.Response=4]="Response",Fe[Fe.User=5]="User",Fe))();class _d{constructor(t,n=200,r="OK"){this.headers=t.headers||new Pn,this.status=void 0!==t.status?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class Dd extends _d{constructor(t={}){super(t),this.type=Fe.ResponseHeader}clone(t={}){return new Dd({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class Ia extends _d{constructor(t={}){super(t),this.type=Fe.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new Ia({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class G_ extends _d{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Cd(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}let Aa=(()=>{class e{constructor(n){this.handler=n}request(n,r,o={}){let i;if(n instanceof Ti)i=n;else{let l,u;l=o.headers instanceof Pn?o.headers:new Pn(o.headers),o.params&&(u=o.params instanceof On?o.params:new On({fromObject:o.params})),i=new Ti(n,r,void 0!==o.body?o.body:null,{headers:l,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials})}const s=N(i).pipe(Kn(l=>this.handler.handle(l)));if(n instanceof Ti||"events"===o.observe)return s;const a=s.pipe(ln(l=>l instanceof Ia));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return a.pipe(q(l=>{if(null!==l.body&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return a.pipe(q(l=>{if(null!==l.body&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return a.pipe(q(l=>{if(null!==l.body&&"string"!=typeof l.body)throw new Error("Response is not a string.");return l.body}));default:return a.pipe(q(l=>l.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:(new On).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,Cd(o,r))}post(n,r,o={}){return this.request("POST",n,Cd(o,r))}put(n,r,o={}){return this.request("PUT",n,Cd(o,r))}}return e.\u0275fac=function(n){return new(n||e)(M(V_))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class z_{constructor(t,n){this.next=t,this.interceptor=n}handle(t){return this.interceptor.intercept(t,this.next)}}const W_=new x("HTTP_INTERCEPTORS");let sR=(()=>{class e{intercept(n,r){return r.handle(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const aR=/^\)\]\}',?\n/;let q_=(()=>{class e{constructor(n){this.xhrFactory=n}handle(n){if("JSONP"===n.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new we(r=>{const o=this.xhrFactory.build();if(o.open(n.method,n.urlWithParams),n.withCredentials&&(o.withCredentials=!0),n.headers.forEach((h,p)=>o.setRequestHeader(h,p.join(","))),n.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){const h=n.detectContentTypeHeader();null!==h&&o.setRequestHeader("Content-Type",h)}if(n.responseType){const h=n.responseType.toLowerCase();o.responseType="json"!==h?h:"text"}const i=n.serializeBody();let s=null;const a=()=>{if(null!==s)return s;const h=o.statusText||"OK",p=new Pn(o.getAllResponseHeaders()),g=function lR(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(o)||n.url;return s=new Dd({headers:p,status:o.status,statusText:h,url:g}),s},l=()=>{let{headers:h,status:p,statusText:g,url:_}=a(),y=null;204!==p&&(y=typeof o.response>"u"?o.responseText:o.response),0===p&&(p=y?200:0);let w=p>=200&&p<300;if("json"===n.responseType&&"string"==typeof y){const m=y;y=y.replace(aR,"");try{y=""!==y?JSON.parse(y):null}catch(b){y=m,w&&(w=!1,y={error:b,text:y})}}w?(r.next(new Ia({body:y,headers:h,status:p,statusText:g,url:_||void 0})),r.complete()):r.error(new G_({error:y,headers:h,status:p,statusText:g,url:_||void 0}))},u=h=>{const{url:p}=a(),g=new G_({error:h,status:o.status||0,statusText:o.statusText||"Unknown Error",url:p||void 0});r.error(g)};let c=!1;const d=h=>{c||(r.next(a()),c=!0);let p={type:Fe.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),"text"===n.responseType&&!!o.responseText&&(p.partialText=o.responseText),r.next(p)},f=h=>{let p={type:Fe.UploadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),r.next(p)};return o.addEventListener("load",l),o.addEventListener("error",u),o.addEventListener("timeout",u),o.addEventListener("abort",u),n.reportProgress&&(o.addEventListener("progress",d),null!==i&&o.upload&&o.upload.addEventListener("progress",f)),o.send(i),r.next({type:Fe.Sent}),()=>{o.removeEventListener("error",u),o.removeEventListener("abort",u),o.removeEventListener("load",l),o.removeEventListener("timeout",u),n.reportProgress&&(o.removeEventListener("progress",d),null!==i&&o.upload&&o.upload.removeEventListener("progress",f)),o.readyState!==o.DONE&&o.abort()}})}}return e.\u0275fac=function(n){return new(n||e)(M(m_))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const wd=new x("XSRF_COOKIE_NAME"),Ed=new x("XSRF_HEADER_NAME");class Q_{}let uR=(()=>{class e{constructor(n,r,o){this.doc=n,this.platform=r,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=a_(n,this.cookieName),this.lastCookieString=n),this.lastToken}}return e.\u0275fac=function(n){return new(n||e)(M(ot),M(Pc),M(wd))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})(),bd=(()=>{class e{constructor(n,r){this.tokenService=n,this.headerName=r}intercept(n,r){const o=n.url.toLowerCase();if("GET"===n.method||"HEAD"===n.method||o.startsWith("http://")||o.startsWith("https://"))return r.handle(n);const i=this.tokenService.getToken();return null!==i&&!n.headers.has(this.headerName)&&(n=n.clone({headers:n.headers.set(this.headerName,i)})),r.handle(n)}}return e.\u0275fac=function(n){return new(n||e)(M(Q_),M(Ed))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})(),cR=(()=>{class e{constructor(n,r){this.backend=n,this.injector=r,this.chain=null}handle(n){if(null===this.chain){const r=this.injector.get(W_,[]);this.chain=r.reduceRight((o,i)=>new z_(o,i),this.backend)}return this.chain.handle(n)}}return e.\u0275fac=function(n){return new(n||e)(M($_),M(Dt))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})(),dR=(()=>{class e{static disable(){return{ngModule:e,providers:[{provide:bd,useClass:sR}]}}static withOptions(n={}){return{ngModule:e,providers:[n.cookieName?{provide:wd,useValue:n.cookieName}:[],n.headerName?{provide:Ed,useValue:n.headerName}:[]]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({providers:[bd,{provide:W_,useExisting:bd,multi:!0},{provide:Q_,useClass:uR},{provide:wd,useValue:"XSRF-TOKEN"},{provide:Ed,useValue:"X-XSRF-TOKEN"}]}),e})(),fR=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({providers:[Aa,{provide:V_,useClass:cR},q_,{provide:$_,useExisting:q_}],imports:[dR.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Wt extends Ze{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){const n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){const{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}}const Ta=Io(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}),{isArray:hR}=Array,{getPrototypeOf:pR,prototype:gR,keys:mR}=Object;function K_(e){if(1===e.length){const t=e[0];if(hR(t))return{args:t,keys:null};if(function yR(e){return e&&"object"==typeof e&&pR(e)===gR}(t)){const n=mR(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}const{isArray:vR}=Array;function Z_(e){return q(t=>function _R(e,t){return vR(t)?e(...t):e(t)}(e,t))}function Y_(e,t){return e.reduce((n,r,o)=>(n[r]=t[o],n),{})}function J_(...e){const t=To(e),n=oh(e),{args:r,keys:o}=K_(e);if(0===r.length)return Ae([],t);const i=new we(function DR(e,t,n=Vn){return r=>{X_(t,()=>{const{length:o}=e,i=new Array(o);let s=o,a=o;for(let l=0;l<o;l++)X_(t,()=>{const u=Ae(e[l],t);let c=!1;u.subscribe(Ee(r,d=>{i[l]=d,c||(c=!0,a--),a||r.next(n(i.slice()))},()=>{--s||r.complete()}))},r)},r)}}(r,t,o?s=>Y_(o,s):Vn));return n?i.pipe(Z_(n)):i}function X_(e,t,n){e?fn(n,e,t):t()}function Sd(...e){return function CR(){return Ar(1)}()(Ae(e,To(e)))}function eD(e){return new we(t=>{Rt(e()).subscribe(t)})}function Zn(e,t){const n=le(e)?e:()=>e,r=o=>o.error(n());return new we(t?o=>t.schedule(r,0,o):r)}function Md(){return Ie((e,t)=>{let n=null;e._refCount++;const r=Ee(t,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount)return void(n=null);const o=e._connection,i=n;n=null,o&&(!i||o===i)&&o.unsubscribe(),t.unsubscribe()});e.subscribe(r),r.closed||(n=e.connect())})}class tD extends we{constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,Gf(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){const t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new ct;const n=this.getSubject();t.add(this.source.subscribe(Ee(n,void 0,()=>{this._teardown(),n.complete()},r=>{this._teardown(),n.error(r)},()=>this._teardown()))),t.closed&&(this._connection=null,t=ct.EMPTY)}return t}refCount(){return Md()(this)}}function un(e,t){return Ie((n,r)=>{let o=null,i=0,s=!1;const a=()=>s&&!o&&r.complete();n.subscribe(Ee(r,l=>{o?.unsubscribe();let u=0;const c=i++;Rt(e(l,c)).subscribe(o=Ee(r,d=>r.next(t?t(l,d,c,u++):d),()=>{o=null,a()}))},()=>{s=!0,a()}))})}function xi(e){return e<=0?()=>hn:Ie((t,n)=>{let r=0;t.subscribe(Ee(n,o=>{++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function xa(e){return Ie((t,n)=>{let r=!1;t.subscribe(Ee(n,o=>{r=!0,n.next(o)},()=>{r||n.next(e),n.complete()}))})}function nD(e=ER){return Ie((t,n)=>{let r=!1;t.subscribe(Ee(n,o=>{r=!0,n.next(o)},()=>r?n.complete():n.error(e())))})}function ER(){return new Ta}function Yn(e,t){const n=arguments.length>=2;return r=>r.pipe(e?ln((o,i)=>e(o,i,r)):Vn,xi(1),n?xa(t):nD(()=>new Ta))}function Qe(e,t,n){const r=le(e)||t||n?{next:e,error:t,complete:n}:e;return r?Ie((o,i)=>{var s;null===(s=r.subscribe)||void 0===s||s.call(r);let a=!0;o.subscribe(Ee(i,l=>{var u;null===(u=r.next)||void 0===u||u.call(r,l),i.next(l)},()=>{var l;a=!1,null===(l=r.complete)||void 0===l||l.call(r),i.complete()},l=>{var u;a=!1,null===(u=r.error)||void 0===u||u.call(r,l),i.error(l)},()=>{var l,u;a&&(null===(l=r.unsubscribe)||void 0===l||l.call(r)),null===(u=r.finalize)||void 0===u||u.call(r)}))}):Vn}function qt(e){return Ie((t,n)=>{let i,r=null,o=!1;r=t.subscribe(Ee(n,void 0,void 0,s=>{i=Rt(e(s,qt(e)(t))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function bR(e,t,n,r,o){return(i,s)=>{let a=n,l=t,u=0;i.subscribe(Ee(s,c=>{const d=u++;l=a?e(l,c,d):(a=!0,c),r&&s.next(l)},o&&(()=>{a&&s.next(l),s.complete()})))}}function rD(e,t){return Ie(bR(e,t,arguments.length>=2,!0))}function Id(e){return e<=0?()=>hn:Ie((t,n)=>{let r=[];t.subscribe(Ee(n,o=>{r.push(o),e<r.length&&r.shift()},()=>{for(const o of r)n.next(o);n.complete()},void 0,()=>{r=null}))})}function oD(e,t){const n=arguments.length>=2;return r=>r.pipe(e?ln((o,i)=>e(o,i,r)):Vn,Id(1),n?xa(t):nD(()=>new Ta))}function Ad(e){return Ie((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}
/**
       * @license Angular v14.2.3
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const W="primary",Ni=Symbol("RouteTitle");class IR{constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){const n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){const n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}}function vo(e){return new IR(e)}function AR(e,t,n){const r=n.path.split("/");if(r.length>e.length||"full"===n.pathMatch&&(t.hasChildren()||r.length<e.length))return null;const o={};for(let i=0;i<r.length;i++){const s=r[i],a=e[i];if(s.startsWith(":"))o[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,r.length),posParams:o}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function cn(e,t){const n=e?Object.keys(e):void 0,r=t?Object.keys(t):void 0;if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!iD(e[o],t[o]))return!1;return!0}function iD(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const n=[...e].sort(),r=[...t].sort();return n.every((o,i)=>r[i]===o)}return e===t}function sD(e){return Array.prototype.concat.apply([],e)}function aD(e){return e.length>0?e[e.length-1]:null}function Be(e,t){for(const n in e)e.hasOwnProperty(n)&&t(e[n],n)}function Jn(e){return uc(e)?e:ci(e)?Ae(Promise.resolve(e)):N(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const NR={exact:function cD(e,t,n){if(!Cr(e.segments,t.segments)||!Na(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(const r in t.children)if(!e.children[r]||!cD(e.children[r],t.children[r],n))return!1;return!0},subset:dD},lD={exact:function RR(e,t){return cn(e,t)},subset:function FR(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>iD(e[n],t[n]))},ignored:()=>!0};function uD(e,t,n){return NR[n.paths](e.root,t.root,n.matrixParams)&&lD[n.queryParams](e.queryParams,t.queryParams)&&!("exact"===n.fragment&&e.fragment!==t.fragment)}function dD(e,t,n){return fD(e,t,t.segments,n)}function fD(e,t,n,r){if(e.segments.length>n.length){const o=e.segments.slice(0,n.length);return!(!Cr(o,n)||t.hasChildren()||!Na(o,n,r))}if(e.segments.length===n.length){if(!Cr(e.segments,n)||!Na(e.segments,n,r))return!1;for(const o in t.children)if(!e.children[o]||!dD(e.children[o],t.children[o],r))return!1;return!0}{const o=n.slice(0,e.segments.length),i=n.slice(e.segments.length);return!!(Cr(e.segments,o)&&Na(e.segments,o,r)&&e.children[W])&&fD(e.children[W],t,i,r)}}function Na(e,t,n){return t.every((r,o)=>lD[n](e[o].parameters,r.parameters))}class Dr{constructor(t,n,r){this.root=t,this.queryParams=n,this.fragment=r}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=vo(this.queryParams)),this._queryParamMap}toString(){return kR.serialize(this)}}class Q{constructor(t,n){this.segments=t,this.children=n,this.parent=null,Be(n,(r,o)=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ra(this)}}class Ri{constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap||(this._parameterMap=vo(this.parameters)),this._parameterMap}toString(){return mD(this)}}function Cr(e,t){return e.length===t.length&&e.every((n,r)=>n.path===t[r].path)}let hD=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:function(){return new xd},providedIn:"root"}),e})();class xd{parse(t){const n=new zR(t);return new Dr(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){const n=`/${Fi(t.root,!0)}`,r=function $R(e){const t=Object.keys(e).map(n=>{const r=e[n];return Array.isArray(r)?r.map(o=>`${Fa(n)}=${Fa(o)}`).join("&"):`${Fa(n)}=${Fa(r)}`}).filter(n=>!!n);return t.length?`?${t.join("&")}`:""}(t.queryParams);return`${n}${r}${"string"==typeof t.fragment?`#${function LR(e){return encodeURI(e)}(t.fragment)}`:""}`}}const kR=new xd;function Ra(e){return e.segments.map(t=>mD(t)).join("/")}function Fi(e,t){if(!e.hasChildren())return Ra(e);if(t){const n=e.children[W]?Fi(e.children[W],!1):"",r=[];return Be(e.children,(o,i)=>{i!==W&&r.push(`${i}:${Fi(o,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}{const n=function OR(e,t){let n=[];return Be(e.children,(r,o)=>{o===W&&(n=n.concat(t(r,o)))}),Be(e.children,(r,o)=>{o!==W&&(n=n.concat(t(r,o)))}),n}(e,(r,o)=>o===W?[Fi(e.children[W],!1)]:[`${o}:${Fi(r,!1)}`]);return 1===Object.keys(e.children).length&&null!=e.children[W]?`${Ra(e)}/${n[0]}`:`${Ra(e)}/(${n.join("//")})`}}function pD(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Fa(e){return pD(e).replace(/%3B/gi,";")}function Nd(e){return pD(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Pa(e){return decodeURIComponent(e)}function gD(e){return Pa(e.replace(/\+/g,"%20"))}function mD(e){return`${Nd(e.path)}${function VR(e){return Object.keys(e).map(t=>`;${Nd(t)}=${Nd(e[t])}`).join("")}(e.parameters)}`}const jR=/^[^\/()?;=#]+/;function Oa(e){const t=e.match(jR);return t?t[0]:""}const BR=/^[^=?&#]+/,UR=/^[^&#]+/;class zR{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new Q([],{}):new Q([],this.parseChildren())}parseQueryParams(){const t={};if(this.consumeOptional("?"))do{this.parseQueryParam(t)}while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(t.length>0||Object.keys(n).length>0)&&(r[W]=new Q(t,n)),r}parseSegment(){const t=Oa(this.remaining);if(""===t&&this.peekStartsWith(";"))throw new C(4009,!1);return this.capture(t),new Ri(Pa(t),this.parseMatrixParams())}parseMatrixParams(){const t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){const n=Oa(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){const o=Oa(this.remaining);o&&(r=o,this.capture(r))}t[Pa(n)]=Pa(r)}parseQueryParam(t){const n=function HR(e){const t=e.match(BR);return t?t[0]:""}(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){const s=function GR(e){const t=e.match(UR);return t?t[0]:""}(this.remaining);s&&(r=s,this.capture(r))}const o=gD(n),i=gD(r);if(t.hasOwnProperty(o)){let s=t[o];Array.isArray(s)||(s=[s],t[o]=s),s.push(i)}else t[o]=i}parseParens(t){const n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const r=Oa(this.remaining),o=this.remaining[r.length];if("/"!==o&&")"!==o&&";"!==o)throw new C(4010,!1);let i;r.indexOf(":")>-1?(i=r.slice(0,r.indexOf(":")),this.capture(i),this.capture(":")):t&&(i=W);const s=this.parseChildren();n[i]=1===Object.keys(s).length?s[W]:new Q([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return!!this.peekStartsWith(t)&&(this.remaining=this.remaining.substring(t.length),!0)}capture(t){if(!this.consumeOptional(t))throw new C(4011,!1)}}function Rd(e){return e.segments.length>0?new Q([],{[W]:e}):e}function ka(e){const t={};for(const r of Object.keys(e.children)){const i=ka(e.children[r]);(i.segments.length>0||i.hasChildren())&&(t[r]=i)}return function WR(e){if(1===e.numberOfChildren&&e.children[W]){const t=e.children[W];return new Q(e.segments.concat(t.segments),t.children)}return e}(new Q(e.segments,t))}function wr(e){return e instanceof Dr}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function KR(e,t,n,r,o){var i;if(0===n.length)return _o(t.root,t.root,t.root,r,o);const s=function _D(e){if("string"==typeof e[0]&&1===e.length&&"/"===e[0])return new vD(!0,0,e);let t=0,n=!1;const r=e.reduce((o,i,s)=>{if("object"==typeof i&&null!=i){if(i.outlets){const a={};return Be(i.outlets,(l,u)=>{a[u]="string"==typeof l?l.split("/"):l}),[...o,{outlets:a}]}if(i.segmentPath)return[...o,i.segmentPath]}return"string"!=typeof i?[...o,i]:0===s?(i.split("/").forEach((a,l)=>{0==l&&"."===a||(0==l&&""===a?n=!0:".."===a?t++:""!=a&&o.push(a))}),o):[...o,i]},[]);return new vD(n,t,r)}(n);if(s.toRoot())return _o(t.root,t.root,new Q([],{}),r,o);const l=function a(c){var d;const f=function YR(e,t,n,r){if(e.isAbsolute)return new Do(t.root,!0,0);if(-1===r)return new Do(n,n===t.root,0);return function DD(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new C(4005,!1);o=r.segments.length}return new Do(r,!1,o-i)}(n,r+(Pi(e.commands[0])?0:1),e.numberOfDoubleDots)}(s,t,null===(d=e.snapshot)||void 0===d?void 0:d._urlSegment,c),h=f.processChildren?ki(f.segmentGroup,f.index,s.commands):Pd(f.segmentGroup,f.index,s.commands);return _o(t.root,f.segmentGroup,h,r,o)}(null===(i=e.snapshot)||void 0===i?void 0:i._lastPathIndex);return l}function Pi(e){return"object"==typeof e&&null!=e&&!e.outlets&&!e.segmentPath}function Oi(e){return"object"==typeof e&&null!=e&&e.outlets}function _o(e,t,n,r,o){let s,i={};r&&Be(r,(l,u)=>{i[u]=Array.isArray(l)?l.map(c=>`${c}`):`${l}`}),s=e===t?n:yD(e,t,n);const a=Rd(ka(s));return new Dr(a,i,o)}function yD(e,t,n){const r={};return Be(e.children,(o,i)=>{r[i]=o===t?n:yD(o,t,n)}),new Q(e.segments,r)}class vD{constructor(t,n,r){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=r,t&&r.length>0&&Pi(r[0]))throw new C(4003,!1);const o=r.find(Oi);if(o&&o!==aD(r))throw new C(4004,!1)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class Do{constructor(t,n,r){this.segmentGroup=t,this.processChildren=n,this.index=r}}function Pd(e,t,n){if(e||(e=new Q([],{})),0===e.segments.length&&e.hasChildren())return ki(e,t,n);const r=function XR(e,t,n){let r=0,o=t;const i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;const s=e.segments[o],a=n[r];if(Oi(a))break;const l=`${a}`,u=r<n.length-1?n[r+1]:null;if(o>0&&void 0===l)break;if(l&&u&&"object"==typeof u&&void 0===u.outlets){if(!wD(l,u,s))return i;r+=2}else{if(!wD(l,{},s))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){const i=new Q(e.segments.slice(0,r.pathIndex),{});return i.children[W]=new Q(e.segments.slice(r.pathIndex),e.children),ki(i,0,o)}return r.match&&0===o.length?new Q(e.segments,{}):r.match&&!e.hasChildren()?Od(e,t,n):r.match?ki(e,0,o):Od(e,t,n)}function ki(e,t,n){if(0===n.length)return new Q(e.segments,{});{const r=function JR(e){return Oi(e[0])?e[0].outlets:{[W]:e}}(n),o={};return Be(r,(i,s)=>{"string"==typeof i&&(i=[i]),null!==i&&(o[s]=Pd(e.children[s],t,i))}),Be(e.children,(i,s)=>{void 0===r[s]&&(o[s]=i)}),new Q(e.segments,o)}}function Od(e,t,n){const r=e.segments.slice(0,t);let o=0;for(;o<n.length;){const i=n[o];if(Oi(i)){const l=eF(i.outlets);return new Q(r,l)}if(0===o&&Pi(n[0])){r.push(new Ri(e.segments[t].path,CD(n[0]))),o++;continue}const s=Oi(i)?i.outlets[W]:`${i}`,a=o<n.length-1?n[o+1]:null;s&&a&&Pi(a)?(r.push(new Ri(s,CD(a))),o+=2):(r.push(new Ri(s,{})),o++)}return new Q(r,{})}function eF(e){const t={};return Be(e,(n,r)=>{"string"==typeof n&&(n=[n]),null!==n&&(t[r]=Od(new Q([],{}),0,n))}),t}function CD(e){const t={};return Be(e,(n,r)=>t[r]=`${n}`),t}function wD(e,t,n){return e==n.path&&cn(t,n.parameters)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class kn{constructor(t,n){this.id=t,this.url=n}}class kd extends kn{constructor(t,n,r="imperative",o=null){super(t,n),this.type=0,this.navigationTrigger=r,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class Qt extends kn{constructor(t,n,r){super(t,n),this.urlAfterRedirects=r,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class La extends kn{constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class ED extends kn{constructor(t,n,r,o){super(t,n),this.error=r,this.target=o,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class tF extends kn{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class nF extends kn{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class rF extends kn{constructor(t,n,r,o,i){super(t,n),this.urlAfterRedirects=r,this.state=o,this.shouldActivate=i,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class oF extends kn{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class iF extends kn{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class sF{constructor(t){this.route=t,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class aF{constructor(t){this.route=t,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class lF{constructor(t){this.snapshot=t,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class uF{constructor(t){this.snapshot=t,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class cF{constructor(t){this.snapshot=t,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class dF{constructor(t){this.snapshot=t,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class bD{constructor(t,n,r){this.routerEvent=t,this.position=n,this.anchor=r,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class SD{constructor(t){this._root=t}get root(){return this._root.value}parent(t){const n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){const n=Ld(t,this._root);return n?n.children.map(r=>r.value):[]}firstChild(t){const n=Ld(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){const n=Vd(t,this._root);return n.length<2?[]:n[n.length-2].children.map(o=>o.value).filter(o=>o!==t)}pathFromRoot(t){return Vd(t,this._root).map(n=>n.value)}}function Ld(e,t){if(e===t.value)return t;for(const n of t.children){const r=Ld(e,n);if(r)return r}return null}function Vd(e,t){if(e===t.value)return[t];for(const n of t.children){const r=Vd(e,n);if(r.length)return r.unshift(t),r}return[]}class Ln{constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}}function Co(e){const t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class MD extends SD{constructor(t,n){super(t),this.snapshot=n,$d(this,t)}toString(){return this.snapshot.toString()}}function ID(e,t){const n=function hF(e,t){const s=new Va([],{},{},"",{},W,t,null,e.root,-1,{});return new TD("",new Ln(s,[]))}(e,t),r=new Wt([new Ri("",{})]),o=new Wt({}),i=new Wt({}),s=new Wt({}),a=new Wt(""),l=new Er(r,o,s,a,i,W,t,n.root);return l.snapshot=n.root,new MD(new Ln(l,[]),n)}class Er{constructor(t,n,r,o,i,s,a,l){var u,c;this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.title=null!==(u=null===(c=this.data)||void 0===c?void 0:c.pipe(q(d=>d[Ni])))&&void 0!==u?u:N(void 0),this._futureSnapshot=l}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(q(t=>vo(t)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(q(t=>vo(t)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function AD(e,t="emptyOnly"){const n=e.pathFromRoot;let r=0;if("always"!==t)for(r=n.length-1;r>=1;){const o=n[r],i=n[r-1];if(o.routeConfig&&""===o.routeConfig.path)r--;else{if(i.component)break;r--}}return function pF(e){return e.reduce((t,n)=>{var r;return{params:{...t.params,...n.params},data:{...t.data,...n.data},resolve:{...n.data,...t.resolve,...null===(r=n.routeConfig)||void 0===r?void 0:r.data,...n._resolvedData}}},{params:{},data:{},resolve:{}})}(n.slice(r))}class Va{constructor(t,n,r,o,i,s,a,l,u,c,d,f){var h;this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.title=null===(h=this.data)||void 0===h?void 0:h[Ni],this.routeConfig=l,this._urlSegment=u,this._lastPathIndex=c,this._correctedLastPathIndex=f??c,this._resolve=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=vo(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=vo(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class TD extends SD{constructor(t,n){super(n),this.url=t,$d(this,n)}toString(){return xD(this._root)}}function $d(e,t){t.value._routerState=e,t.children.forEach(n=>$d(e,n))}function xD(e){const t=e.children.length>0?` { ${e.children.map(xD).join(", ")} } `:"";return`${e.value}${t}`}function jd(e){if(e.snapshot){const t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,cn(t.queryParams,n.queryParams)||e.queryParams.next(n.queryParams),t.fragment!==n.fragment&&e.fragment.next(n.fragment),cn(t.params,n.params)||e.params.next(n.params),function TR(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!cn(e[n],t[n]))return!1;return!0}(t.url,n.url)||e.url.next(n.url),cn(t.data,n.data)||e.data.next(n.data)}else e.snapshot=e._futureSnapshot,e.data.next(e._futureSnapshot.data)}function Bd(e,t){const n=cn(e.params,t.params)&&function PR(e,t){return Cr(e,t)&&e.every((n,r)=>cn(n.parameters,t[r].parameters))}(e.url,t.url);return n&&!(!e.parent!=!t.parent)&&(!e.parent||Bd(e.parent,t.parent))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Li(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){const r=n.value;r._futureSnapshot=t.value;const o=function mF(e,t,n){return t.children.map(r=>{for(const o of n.children)if(e.shouldReuseRoute(r.value,o.value.snapshot))return Li(e,r,o);return Li(e,r)})}(e,t,n);return new Ln(r,o)}{if(e.shouldAttach(t.value)){const i=e.retrieve(t.value);if(null!==i){const s=i.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(a=>Li(e,a)),s}}const r=function yF(e){return new Er(new Wt(e.url),new Wt(e.params),new Wt(e.queryParams),new Wt(e.fragment),new Wt(e.data),e.outlet,e.component,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t.value),o=t.children.map(i=>Li(e,i));return new Ln(r,o)}}const Hd="ngNavigationCancelingError";function ND(e,t){const{redirectTo:n,navigationBehaviorOptions:r}=wr(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,o=RD(!1,0,t);return o.url=n,o.navigationBehaviorOptions=r,o}function RD(e,t,n){const r=new Error("NavigationCancelingError: "+(e||""));return r[Hd]=!0,r.cancellationCode=t,n&&(r.url=n),r}function FD(e){return PD(e)&&wr(e.url)}function PD(e){return e&&e[Hd]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class vF{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.injector=null,this.children=new Vi,this.attachRef=null}}let Vi=(()=>{class e{constructor(){this.contexts=new Map}onChildOutletCreated(n,r){const o=this.getOrCreateContext(n);o.outlet=r,this.contexts.set(n,o)}onChildOutletDestroyed(n){const r=this.getContext(n);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){const n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let r=this.getContext(n);return r||(r=new vF,this.contexts.set(n,r)),r}getContext(n){return this.contexts.get(n)||null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const $a=!1;let OD=(()=>{class e{constructor(n,r,o,i,s){this.parentContexts=n,this.location=r,this.changeDetector=i,this.environmentInjector=s,this.activated=null,this._activatedRoute=null,this.activateEvents=new Ce,this.deactivateEvents=new Ce,this.attachEvents=new Ce,this.detachEvents=new Ce,this.name=o||W,n.onChildOutletCreated(this.name,this)}ngOnDestroy(){var n;(null===(n=this.parentContexts.getContext(this.name))||void 0===n?void 0:n.outlet)===this&&this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const n=this.parentContexts.getContext(this.name);n&&n.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new C(4012,$a);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new C(4012,$a);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new C(4012,$a);this.location.detach();const n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,r){this.activated=n,this._activatedRoute=r,this.location.insert(n.hostView),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){const n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,r){if(this.isActivated)throw new C(4013,$a);this._activatedRoute=n;const o=this.location,s=n._futureSnapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new _F(n,a,o.injector);if(r&&function DF(e){return!!e.resolveComponentFactory}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(r)){const u=r.resolveComponentFactory(s);this.activated=o.createComponent(u,o.length,l)}else this.activated=o.createComponent(s,{index:o.length,injector:l,environmentInjector:r??this.environmentInjector});this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return e.\u0275fac=function(n){return new(n||e)(v(Vi),v(Ht),function jo(e){return function ub(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const r=n.length;let o=0;for(;o<r;){const i=n[o];if(Oh(i))break;if(0===i)o+=2;else if("number"==typeof i)for(o++;o<r&&"string"==typeof n[o];)o++;else{if(i===t)return n[o+1];o+=2}}}return null}(Pe(),e)}("name"),v(aa),v(Gn))},e.\u0275dir=L({type:e,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0}),e})();class _F{constructor(t,n,r){this.route=t,this.childContexts=n,this.parent=r}get(t,n){return t===Er?this.route:t===Vi?this.childContexts:this.parent.get(t,n)}}let Ud=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=Pt({type:e,selectors:[["ng-component"]],standalone:!0,features:[Ry],decls:1,vars:0,template:function(n,r){1&n&&pe(0,"router-outlet")},dependencies:[OD],encapsulation:2}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function kD(e,t){var n;return e.providers&&!e._injector&&(e._injector=Ys(e.providers,t,`Route: ${e.path}`)),null!==(n=e._injector)&&void 0!==n?n:t}function zd(e){const t=e.children&&e.children.map(zd),n=t?{...e,children:t}:{...e};return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==W&&(n.component=Ud),n}function Nt(e){return e.outlet||W}function LD(e,t){const n=e.filter(r=>Nt(r)===t);return n.push(...e.filter(r=>Nt(r)!==t)),n}function $i(e){var t;if(!e)return null;if(null!==(t=e.routeConfig)&&void 0!==t&&t._injector)return e.routeConfig._injector;for(let n=e.parent;n;n=n.parent){const r=n.routeConfig;if(null!=r&&r._loadedInjector)return r._loadedInjector;if(null!=r&&r._injector)return r._injector}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class SF{constructor(t,n,r,o){this.routeReuseStrategy=t,this.futureState=n,this.currState=r,this.forwardEvent=o}activate(t){const n=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,r,t),jd(this.futureState.root),this.activateChildRoutes(n,r,t)}deactivateChildRoutes(t,n,r){const o=Co(n);t.children.forEach(i=>{const s=i.value.outlet;this.deactivateRoutes(i,o[s],r),delete o[s]}),Be(o,(i,s)=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(t,n,r){const o=t.value,i=n?n.value:null;if(o===i)if(o.component){const s=r.getContext(o.outlet);s&&this.deactivateChildRoutes(t,n,s.children)}else this.deactivateChildRoutes(t,n,r);else i&&this.deactivateRouteAndItsChildren(n,r)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){const r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=Co(t);for(const s of Object.keys(i))this.deactivateRouteAndItsChildren(i[s],o);if(r&&r.outlet){const s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:a})}}deactivateRouteAndOutlet(t,n){const r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=Co(t);for(const s of Object.keys(i))this.deactivateRouteAndItsChildren(i[s],o);r&&r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated(),r.attachRef=null,r.resolver=null,r.route=null)}activateChildRoutes(t,n,r){const o=Co(n);t.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],r),this.forwardEvent(new dF(i.value.snapshot))}),t.children.length&&this.forwardEvent(new uF(t.value.snapshot))}activateRoutes(t,n,r){const o=t.value,i=n?n.value:null;if(jd(o),o===i)if(o.component){const a=r.getOrCreateContext(o.outlet);this.activateChildRoutes(t,n,a.children)}else this.activateChildRoutes(t,n,r);else if(o.component){const a=r.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){const l=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),a.children.onOutletReAttached(l.contexts),a.attachRef=l.componentRef,a.route=l.route.value,a.outlet&&a.outlet.attach(l.componentRef,l.route.value),jd(l.route.value),this.activateChildRoutes(t,null,a.children)}else{var s;const l=$i(o.snapshot),u=null!==(s=l?.get(ti))&&void 0!==s?s:null;a.attachRef=null,a.route=o,a.resolver=u,a.injector=l,a.outlet&&a.outlet.activateWith(o,a.injector),this.activateChildRoutes(t,null,a.children)}}else this.activateChildRoutes(t,null,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class VD{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}}class ja{constructor(t,n){this.component=t,this.route=n}}function MF(e,t,n){const r=e._root;return ji(r,t?t._root:null,n,[r.value])}function wo(e,t){const n=Symbol(),r=t.get(e,n);return r===n?"function"!=typeof e||function fE(e){return null!==ts(e)}(e)?t.get(e):e:r}function ji(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){const i=Co(t);return e.children.forEach(s=>{(function AF(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){const i=e.value,s=t?t.value:null,a=n?n.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){const l=function TF(e,t,n){if("function"==typeof n)return n(e,t);switch(n){case"pathParamsChange":return!Cr(e.url,t.url);case"pathParamsOrQueryParamsChange":return!Cr(e.url,t.url)||!cn(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Bd(e,t)||!cn(e.queryParams,t.queryParams);default:return!Bd(e,t)}}(s,i,i.routeConfig.runGuardsAndResolvers);l?o.canActivateChecks.push(new VD(r)):(i.data=s.data,i._resolvedData=s._resolvedData),ji(e,t,i.component?a?a.children:null:n,r,o),l&&a&&a.outlet&&a.outlet.isActivated&&o.canDeactivateChecks.push(new ja(a.outlet.component,s))}else s&&Bi(t,a,o),o.canActivateChecks.push(new VD(r)),ji(e,null,i.component?a?a.children:null:n,r,o)})(s,i[s.value.outlet],n,r.concat([s.value]),o),delete i[s.value.outlet]}),Be(i,(s,a)=>Bi(s,n.getContext(a),o)),o}function Bi(e,t,n){const r=Co(e),o=e.value;Be(r,(i,s)=>{Bi(i,o.component?t?t.children.getContext(s):null:t,n)}),n.canDeactivateChecks.push(new ja(o.component&&t&&t.outlet&&t.outlet.isActivated?t.outlet.component:null,o))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Hi(e){return"function"==typeof e}function Wd(e){return e instanceof Ta||"EmptyError"===e?.name}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ba=Symbol("INITIAL_VALUE");function Eo(){return un(e=>J_(e.map(t=>t.pipe(xi(1),function wR(...e){const t=To(e);return Ie((n,r)=>{(t?Sd(e,n,t):Sd(e,n)).subscribe(r)})}(Ba)))).pipe(q(t=>{for(const n of t)if(!0!==n){if(n===Ba)return Ba;if(!1===n||n instanceof Dr)return n}return!0}),ln(t=>t!==Ba),xi(1)))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $D(e){return function Nw(...e){return Bf(e)}(Qe(t=>{if(wr(t))throw ND(0,t)}),q(t=>!0===t))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const qd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function jD(e,t,n,r,o){const i=Qd(e,t,n);return i.matched?function WF(e,t,n,r){const o=t.canMatch;return o&&0!==o.length?N(o.map(s=>{const a=wo(s,e);return Jn(function OF(e){return e&&Hi(e.canMatch)}(a)?a.canMatch(t,n):e.runInContext(()=>a(t,n)))})).pipe(Eo(),$D()):N(!0)}(r=kD(t,r),t,n).pipe(q(s=>!0===s?i:{...qd})):N(i)}function Qd(e,t,n){var r;if(""===t.path)return"full"===t.pathMatch&&(e.hasChildren()||n.length>0)?{...qd}:{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};const i=(t.matcher||AR)(n,e,t);if(!i)return{...qd};const s={};Be(i.posParams,(l,u)=>{s[u]=l.path});const a=i.consumed.length>0?{...s,...i.consumed[i.consumed.length-1].parameters}:s;return{matched:!0,consumedSegments:i.consumed,remainingSegments:n.slice(i.consumed.length),parameters:a,positionalParamSegments:null!==(r=i.posParams)&&void 0!==r?r:{}}}function Ha(e,t,n,r,o="corrected"){if(n.length>0&&function KF(e,t,n){return n.some(r=>Ua(e,t,r)&&Nt(r)!==W)}(e,n,r)){const s=new Q(t,function QF(e,t,n,r){const o={};o[W]=r,r._sourceSegment=e,r._segmentIndexShift=t.length;for(const i of n)if(""===i.path&&Nt(i)!==W){const s=new Q([],{});s._sourceSegment=e,s._segmentIndexShift=t.length,o[Nt(i)]=s}return o}(e,t,r,new Q(n,e.children)));return s._sourceSegment=e,s._segmentIndexShift=t.length,{segmentGroup:s,slicedSegments:[]}}if(0===n.length&&function ZF(e,t,n){return n.some(r=>Ua(e,t,r))}(e,n,r)){const s=new Q(e.segments,function qF(e,t,n,r,o,i){const s={};for(const a of r)if(Ua(e,n,a)&&!o[Nt(a)]){const l=new Q([],{});l._sourceSegment=e,l._segmentIndexShift="legacy"===i?e.segments.length:t.length,s[Nt(a)]=l}return{...o,...s}}(e,t,n,r,e.children,o));return s._sourceSegment=e,s._segmentIndexShift=t.length,{segmentGroup:s,slicedSegments:n}}const i=new Q(e.segments,e.children);return i._sourceSegment=e,i._segmentIndexShift=t.length,{segmentGroup:i,slicedSegments:n}}function Ua(e,t,n){return(!(e.hasChildren()||t.length>0)||"full"!==n.pathMatch)&&""===n.path}function BD(e,t,n,r){return!!(Nt(e)===r||r!==W&&Ua(t,n,e))&&("**"===e.path||Qd(t,e,n).matched)}function HD(e,t,n){return 0===t.length&&!e.children[n]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ga=!1;class za{constructor(t){this.segmentGroup=t||null}}class UD{constructor(t){this.urlTree=t}}function Ui(e){return Zn(new za(e))}function GD(e){return Zn(new UD(e))}class eP{constructor(t,n,r,o,i){this.injector=t,this.configLoader=n,this.urlSerializer=r,this.urlTree=o,this.config=i,this.allowRedirects=!0}apply(){const t=Ha(this.urlTree.root,[],[],this.config).segmentGroup,n=new Q(t.segments,t.children);return this.expandSegmentGroup(this.injector,this.config,n,W).pipe(q(i=>this.createUrlTree(ka(i),this.urlTree.queryParams,this.urlTree.fragment))).pipe(qt(i=>{if(i instanceof UD)return this.allowRedirects=!1,this.match(i.urlTree);throw i instanceof za?this.noMatchError(i):i}))}match(t){return this.expandSegmentGroup(this.injector,this.config,t.root,W).pipe(q(o=>this.createUrlTree(ka(o),t.queryParams,t.fragment))).pipe(qt(o=>{throw o instanceof za?this.noMatchError(o):o}))}noMatchError(t){return new C(4002,Ga)}createUrlTree(t,n,r){const o=Rd(t);return new Dr(o,n,r)}expandSegmentGroup(t,n,r,o){return 0===r.segments.length&&r.hasChildren()?this.expandChildren(t,n,r).pipe(q(i=>new Q([],i))):this.expandSegment(t,r,n,r.segments,o,!0)}expandChildren(t,n,r){const o=[];for(const i of Object.keys(r.children))"primary"===i?o.unshift(i):o.push(i);return Ae(o).pipe(Kn(i=>{const s=r.children[i],a=LD(n,i);return this.expandSegmentGroup(t,a,s,i).pipe(q(l=>({segment:l,outlet:i})))}),rD((i,s)=>(i[s.outlet]=s.segment,i),{}),oD())}expandSegment(t,n,r,o,i,s){return Ae(r).pipe(Kn(a=>this.expandSegmentAgainstRoute(t,n,r,a,o,i,s).pipe(qt(u=>{if(u instanceof za)return N(null);throw u}))),Yn(a=>!!a),qt((a,l)=>{if(Wd(a))return HD(n,o,i)?N(new Q([],{})):Ui(n);throw a}))}expandSegmentAgainstRoute(t,n,r,o,i,s,a){return BD(o,n,i,s)?void 0===o.redirectTo?this.matchSegmentAgainstRoute(t,n,o,i,s):a&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s):Ui(n):Ui(n)}expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s){return"**"===o.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(t,r,o,s):this.expandRegularSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s)}expandWildCardWithParamsAgainstRouteUsingRedirect(t,n,r,o){const i=this.applyRedirectCommands([],r.redirectTo,{});return r.redirectTo.startsWith("/")?GD(i):this.lineralizeSegments(r,i).pipe(je(s=>{const a=new Q(s,{});return this.expandSegment(t,a,n,s,o,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s){const{matched:a,consumedSegments:l,remainingSegments:u,positionalParamSegments:c}=Qd(n,o,i);if(!a)return Ui(n);const d=this.applyRedirectCommands(l,o.redirectTo,c);return o.redirectTo.startsWith("/")?GD(d):this.lineralizeSegments(o,d).pipe(je(f=>this.expandSegment(t,n,r,f.concat(u),s,!1)))}matchSegmentAgainstRoute(t,n,r,o,i){return"**"===r.path?(t=kD(r,t),r.loadChildren?(r._loadedRoutes?N({routes:r._loadedRoutes,injector:r._loadedInjector}):this.configLoader.loadChildren(t,r)).pipe(q(a=>(r._loadedRoutes=a.routes,r._loadedInjector=a.injector,new Q(o,{})))):N(new Q(o,{}))):jD(n,r,o,t).pipe(un(({matched:s,consumedSegments:a,remainingSegments:l})=>{var u;return s?(t=null!==(u=r._injector)&&void 0!==u?u:t,this.getChildConfig(t,r,o).pipe(je(d=>{var f;const h=null!==(f=d.injector)&&void 0!==f?f:t,p=d.routes,{segmentGroup:g,slicedSegments:_}=Ha(n,a,l,p),y=new Q(g.segments,g.children);if(0===_.length&&y.hasChildren())return this.expandChildren(h,p,y).pipe(q(U=>new Q(a,U)));if(0===p.length&&0===_.length)return N(new Q(a,{}));const w=Nt(r)===i;return this.expandSegment(h,y,p,_,w?W:i,!0).pipe(q(b=>new Q(a.concat(b.segments),b.children)))}))):Ui(n)}))}getChildConfig(t,n,r){return n.children?N({routes:n.children,injector:t}):n.loadChildren?void 0!==n._loadedRoutes?N({routes:n._loadedRoutes,injector:n._loadedInjector}):function zF(e,t,n,r){const o=t.canLoad;return void 0===o||0===o.length?N(!0):N(o.map(s=>{const a=wo(s,e);return Jn(function NF(e){return e&&Hi(e.canLoad)}(a)?a.canLoad(t,n):e.runInContext(()=>a(t,n)))})).pipe(Eo(),$D())}(t,n,r).pipe(je(o=>o?this.configLoader.loadChildren(t,n).pipe(Qe(i=>{n._loadedRoutes=i.routes,n._loadedInjector=i.injector})):function JF(e){return Zn(RD(Ga,3))}())):N({routes:[],injector:t})}lineralizeSegments(t,n){let r=[],o=n.root;for(;;){if(r=r.concat(o.segments),0===o.numberOfChildren)return N(r);if(o.numberOfChildren>1||!o.children[W])return Zn(new C(4e3,Ga));o=o.children[W]}}applyRedirectCommands(t,n,r){return this.applyRedirectCreateUrlTree(n,this.urlSerializer.parse(n),t,r)}applyRedirectCreateUrlTree(t,n,r,o){const i=this.createSegmentGroup(t,n.root,r,o);return new Dr(i,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){const r={};return Be(t,(o,i)=>{if("string"==typeof o&&o.startsWith(":")){const a=o.substring(1);r[i]=n[a]}else r[i]=o}),r}createSegmentGroup(t,n,r,o){const i=this.createSegments(t,n.segments,r,o);let s={};return Be(n.children,(a,l)=>{s[l]=this.createSegmentGroup(t,a,r,o)}),new Q(i,s)}createSegments(t,n,r,o){return n.map(i=>i.path.startsWith(":")?this.findPosParam(t,i,o):this.findOrReturn(i,r))}findPosParam(t,n,r){const o=r[n.path.substring(1)];if(!o)throw new C(4001,Ga);return o}findOrReturn(t,n){let r=0;for(const o of n){if(o.path===t.path)return n.splice(r),o;r++}return t}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class nP{}class iP{constructor(t,n,r,o,i,s,a,l){this.injector=t,this.rootComponentType=n,this.config=r,this.urlTree=o,this.url=i,this.paramsInheritanceStrategy=s,this.relativeLinkResolution=a,this.urlSerializer=l}recognize(){const t=Ha(this.urlTree.root,[],[],this.config.filter(n=>void 0===n.redirectTo),this.relativeLinkResolution).segmentGroup;return this.processSegmentGroup(this.injector,this.config,t,W).pipe(q(n=>{if(null===n)return null;const r=new Va([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},W,this.rootComponentType,null,this.urlTree.root,-1,{}),o=new Ln(r,n),i=new TD(this.url,o);return this.inheritParamsAndData(i._root),i}))}inheritParamsAndData(t){const n=t.value,r=AD(n,this.paramsInheritanceStrategy);n.params=Object.freeze(r.params),n.data=Object.freeze(r.data),t.children.forEach(o=>this.inheritParamsAndData(o))}processSegmentGroup(t,n,r,o){return 0===r.segments.length&&r.hasChildren()?this.processChildren(t,n,r):this.processSegment(t,n,r,r.segments,o)}processChildren(t,n,r){return Ae(Object.keys(r.children)).pipe(Kn(o=>{const i=r.children[o],s=LD(n,o);return this.processSegmentGroup(t,s,i,o)}),rD((o,i)=>o&&i?(o.push(...i),o):null),function SR(e,t=!1){return Ie((n,r)=>{let o=0;n.subscribe(Ee(r,i=>{const s=e(i,o++);(s||t)&&r.next(i),!s&&r.complete()}))})}(o=>null!==o),xa(null),oD(),q(o=>{if(null===o)return null;const i=zD(o);return function sP(e){e.sort((t,n)=>t.value.outlet===W?-1:n.value.outlet===W?1:t.value.outlet.localeCompare(n.value.outlet))}(i),i}))}processSegment(t,n,r,o,i){return Ae(n).pipe(Kn(s=>{var a;return this.processSegmentAgainstRoute(null!==(a=s._injector)&&void 0!==a?a:t,s,r,o,i)}),Yn(s=>!!s),qt(s=>{if(Wd(s))return HD(r,o,i)?N([]):N(null);throw s}))}processSegmentAgainstRoute(t,n,r,o,i){if(n.redirectTo||!BD(n,r,o,i))return N(null);let s;if("**"===n.path){var a,l;const u=o.length>0?aD(o).parameters:{},c=qD(r)+o.length;s=N({snapshot:new Va(o,u,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,KD(n),Nt(n),null!==(a=null!==(l=n.component)&&void 0!==l?l:n._loadedComponent)&&void 0!==a?a:null,n,WD(r),c,ZD(n),c),consumedSegments:[],remainingSegments:[]})}else s=jD(r,n,o,t).pipe(q(({matched:u,consumedSegments:c,remainingSegments:d,parameters:f})=>{var h,p;if(!u)return null;const g=qD(r)+c.length;return{snapshot:new Va(c,f,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,KD(n),Nt(n),null!==(h=null!==(p=n.component)&&void 0!==p?p:n._loadedComponent)&&void 0!==h?h:null,n,WD(r),g,ZD(n),g),consumedSegments:c,remainingSegments:d}}));return s.pipe(un(u=>{var c,d;if(null===u)return N(null);const{snapshot:f,consumedSegments:h,remainingSegments:p}=u;t=null!==(c=n._injector)&&void 0!==c?c:t;const g=null!==(d=n._loadedInjector)&&void 0!==d?d:t,_=function aP(e){return e.children?e.children:e.loadChildren?e._loadedRoutes:[]}(n),{segmentGroup:y,slicedSegments:w}=Ha(r,h,p,_.filter(b=>void 0===b.redirectTo),this.relativeLinkResolution);if(0===w.length&&y.hasChildren())return this.processChildren(g,_,y).pipe(q(b=>null===b?null:[new Ln(f,b)]));if(0===_.length&&0===w.length)return N([new Ln(f,[])]);const m=Nt(n)===i;return this.processSegment(g,_,y,w,m?W:i).pipe(q(b=>null===b?null:[new Ln(f,b)]))}))}}function lP(e){const t=e.value.routeConfig;return t&&""===t.path&&void 0===t.redirectTo}function zD(e){const t=[],n=new Set;for(const r of e){if(!lP(r)){t.push(r);continue}const o=t.find(i=>r.value.routeConfig===i.value.routeConfig);void 0!==o?(o.children.push(...r.children),n.add(o)):t.push(r)}for(const r of n){const o=zD(r.children);t.push(new Ln(r.value,o))}return t.filter(r=>!n.has(r))}function WD(e){let t=e;for(;t._sourceSegment;)t=t._sourceSegment;return t}function qD(e){var t;let n=e,r=null!==(t=n._segmentIndexShift)&&void 0!==t?t:0;for(;n._sourceSegment;){var o;n=n._sourceSegment,r+=null!==(o=n._segmentIndexShift)&&void 0!==o?o:0}return r-1}function KD(e){return e.data||{}}function ZD(e){return e.resolve||{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function YD(e){return"string"==typeof e.title||null===e.title}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Kd(e){return un(t=>{const n=e(t);return n?Ae(n).pipe(q(()=>t)):N(t)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let JD=(()=>{class e{buildTitle(n){let r,o=n.root;for(;void 0!==o;){var i;r=null!==(i=this.getResolvedTitleForRoute(o))&&void 0!==i?i:r,o=o.children.find(s=>s.outlet===W)}return r}getResolvedTitleForRoute(n){return n.data[Ni]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:function(){return be(XD)},providedIn:"root"}),e})(),XD=(()=>{class e extends JD{constructor(n){super(),this.title=n}updateTitle(n){const r=this.buildTitle(n);void 0!==r&&this.title.setTitle(r)}}return e.\u0275fac=function(n){return new(n||e)(M(O_))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class mP{}class vP extends class yP{shouldDetach(t){return!1}store(t,n){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,n){return t.routeConfig===n.routeConfig}}{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const qa=new x("",{providedIn:"root",factory:()=>({})}),Zd=new x("ROUTES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Yd=(()=>{class e{constructor(n,r){this.injector=n,this.compiler=r,this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap}loadComponent(n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return N(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);const r=Jn(n.loadComponent()).pipe(Qe(i=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=i}),Ad(()=>{this.componentLoaders.delete(n)})),o=new tD(r,()=>new Ze).pipe(Md());return this.componentLoaders.set(n,o),o}loadChildren(n,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return N({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);const i=this.loadModuleFactoryOrRoutes(r.loadChildren).pipe(q(a=>{this.onLoadEndListener&&this.onLoadEndListener(r);let l,u,c=!1;Array.isArray(a)?u=a:(l=a.create(n).injector,u=sD(l.get(Zd,[],P.Self|P.Optional)));return{routes:u.map(zd),injector:l}}),Ad(()=>{this.childrenLoaders.delete(r)})),s=new tD(i,()=>new Ze).pipe(Md());return this.childrenLoaders.set(r,s),s}loadModuleFactoryOrRoutes(n){return Jn(n()).pipe(je(r=>r instanceof xy||Array.isArray(r)?N(r):Ae(this.compiler.compileModuleAsync(r))))}}return e.\u0275fac=function(n){return new(n||e)(M(Dt),M(Oc))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class DP{}class CP{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,n){return t}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function wP(e){throw e}function EP(e,t,n){return t.parse("/")}const bP={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},SP={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function tC(){var e,t;const n=be(hD),r=be(Vi),o=be(Zc),i=be(Dt),s=be(Oc),a=null!==(e=be(Zd,{optional:!0}))&&void 0!==e?e:[],l=null!==(t=be(qa,{optional:!0}))&&void 0!==t?t:{},u=be(XD),c=be(JD,{optional:!0}),d=be(DP,{optional:!0}),f=be(mP,{optional:!0}),h=new Me(null,n,r,o,i,s,sD(a));return d&&(h.urlHandlingStrategy=d),f&&(h.routeReuseStrategy=f),h.titleStrategy=c??u,function MP(e,t){e.errorHandler&&(t.errorHandler=e.errorHandler),e.malformedUriErrorHandler&&(t.malformedUriErrorHandler=e.malformedUriErrorHandler),e.onSameUrlNavigation&&(t.onSameUrlNavigation=e.onSameUrlNavigation),e.paramsInheritanceStrategy&&(t.paramsInheritanceStrategy=e.paramsInheritanceStrategy),e.relativeLinkResolution&&(t.relativeLinkResolution=e.relativeLinkResolution),e.urlUpdateStrategy&&(t.urlUpdateStrategy=e.urlUpdateStrategy),e.canceledNavigationResolution&&(t.canceledNavigationResolution=e.canceledNavigationResolution)}(l,h),h}let Me=(()=>{class e{constructor(n,r,o,i,s,a,l){this.rootComponentType=n,this.urlSerializer=r,this.rootContexts=o,this.location=i,this.config=l,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new Ze,this.errorHandler=wP,this.malformedUriErrorHandler=EP,this.navigated=!1,this.lastSuccessfulId=-1,this.afterPreactivation=()=>N(void 0),this.urlHandlingStrategy=new CP,this.routeReuseStrategy=new vP,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.configLoader=s.get(Yd),this.configLoader.onLoadEndListener=f=>this.triggerEvent(new aF(f)),this.configLoader.onLoadStartListener=f=>this.triggerEvent(new sF(f)),this.ngModule=s.get(mr),this.console=s.get(QT);const d=s.get(Le);this.isNgZoneEnabled=d instanceof Le&&Le.isInAngularZone(),this.resetConfig(l),this.currentUrlTree=function xR(){return new Dr(new Q([],{}),{},null)}(),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=ID(this.currentUrlTree,this.rootComponentType),this.transitions=new Wt({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){var n;return null===(n=this.location.getState())||void 0===n?void 0:n.\u0275routerPageId}setupNavigations(n){const r=this.events;return n.pipe(ln(o=>0!==o.id),q(o=>({...o,extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),un(o=>{let i=!1,s=!1;return N(o).pipe(Qe(a=>{this.currentNavigation={id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,trigger:a.source,extras:a.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),un(a=>{const l=this.browserUrlTree.toString(),u=!this.navigated||a.extractedUrl.toString()!==l||l!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||u)&&this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return nC(a.source)&&(this.browserUrlTree=a.extractedUrl),N(a).pipe(un(d=>{const f=this.transitions.getValue();return r.next(new kd(d.id,this.serializeUrl(d.extractedUrl),d.source,d.restoredState)),f!==this.transitions.getValue()?hn:Promise.resolve(d)}),function tP(e,t,n,r){return un(o=>function XF(e,t,n,r,o){return new eP(e,t,n,r,o).apply()}(e,t,n,o.extractedUrl,r).pipe(q(i=>({...o,urlAfterRedirects:i}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),Qe(d=>{this.currentNavigation={...this.currentNavigation,finalUrl:d.urlAfterRedirects},o.urlAfterRedirects=d.urlAfterRedirects}),function cP(e,t,n,r,o,i){return je(s=>function oP(e,t,n,r,o,i,s="emptyOnly",a="legacy"){return new iP(e,t,n,r,o,s,a,i).recognize().pipe(un(l=>null===l?function rP(e){return new we(t=>t.error(e))}(new nP):N(l)))}(e,t,n,s.urlAfterRedirects,r.serialize(s.urlAfterRedirects),r,o,i).pipe(q(a=>({...s,targetSnapshot:a}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.rootComponentType,this.config,this.urlSerializer,this.paramsInheritanceStrategy,this.relativeLinkResolution),Qe(d=>{if(o.targetSnapshot=d.targetSnapshot,"eager"===this.urlUpdateStrategy){if(!d.extras.skipLocationChange){const h=this.urlHandlingStrategy.merge(d.urlAfterRedirects,d.rawUrl);this.setBrowserUrl(h,d)}this.browserUrlTree=d.urlAfterRedirects}const f=new tF(d.id,this.serializeUrl(d.extractedUrl),this.serializeUrl(d.urlAfterRedirects),d.targetSnapshot);r.next(f)}));if(u&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:f,extractedUrl:h,source:p,restoredState:g,extras:_}=a,y=new kd(f,this.serializeUrl(h),p,g);r.next(y);const w=ID(h,this.rootComponentType).snapshot;return N(o={...a,targetSnapshot:w,urlAfterRedirects:h,extras:{..._,skipLocationChange:!1,replaceUrl:!1}})}return this.rawUrlTree=a.rawUrl,a.resolve(null),hn}),Qe(a=>{const l=new nF(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot);this.triggerEvent(l)}),q(a=>o={...a,guards:MF(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),function LF(e,t){return je(n=>{const{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return 0===s.length&&0===i.length?N({...n,guardsResult:!0}):function VF(e,t,n,r){return Ae(e).pipe(je(o=>function GF(e,t,n,r,o){const i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;return i&&0!==i.length?N(i.map(a=>{var l;const u=null!==(l=$i(t))&&void 0!==l?l:o,c=wo(a,u);return Jn(function PF(e){return e&&Hi(e.canDeactivate)}(c)?c.canDeactivate(e,t,n,r):u.runInContext(()=>c(e,t,n,r))).pipe(Yn())})).pipe(Eo()):N(!0)}(o.component,o.route,n,t,r)),Yn(o=>!0!==o,!0))}(s,r,o,e).pipe(je(a=>a&&function xF(e){return"boolean"==typeof e}(a)?function $F(e,t,n,r){return Ae(t).pipe(Kn(o=>Sd(function BF(e,t){return null!==e&&t&&t(new lF(e)),N(!0)}(o.route.parent,r),function jF(e,t){return null!==e&&t&&t(new cF(e)),N(!0)}(o.route,r),function UF(e,t,n){const r=t[t.length-1],i=t.slice(0,t.length-1).reverse().map(s=>function IF(e){const t=e.routeConfig?e.routeConfig.canActivateChild:null;return t&&0!==t.length?{node:e,guards:t}:null}(s)).filter(s=>null!==s).map(s=>eD(()=>N(s.guards.map(l=>{var u;const c=null!==(u=$i(s.node))&&void 0!==u?u:n,d=wo(l,c);return Jn(function FF(e){return e&&Hi(e.canActivateChild)}(d)?d.canActivateChild(r,e):c.runInContext(()=>d(r,e))).pipe(Yn())})).pipe(Eo())));return N(i).pipe(Eo())}(e,o.path,n),function HF(e,t,n){const r=t.routeConfig?t.routeConfig.canActivate:null;if(!r||0===r.length)return N(!0);const o=r.map(i=>eD(()=>{var s;const a=null!==(s=$i(t))&&void 0!==s?s:n,l=wo(i,a);return Jn(function RF(e){return e&&Hi(e.canActivate)}(l)?l.canActivate(t,e):a.runInContext(()=>l(t,e))).pipe(Yn())}));return N(o).pipe(Eo())}(e,o.route,n))),Yn(o=>!0!==o,!0))}(r,i,e,t):N(a)),q(a=>({...n,guardsResult:a})))})}(this.ngModule.injector,a=>this.triggerEvent(a)),Qe(a=>{if(o.guardsResult=a.guardsResult,wr(a.guardsResult))throw ND(0,a.guardsResult);const l=new rF(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);this.triggerEvent(l)}),ln(a=>!!a.guardsResult||(this.restoreHistory(a),this.cancelNavigationTransition(a,"",3),!1)),Kd(a=>{if(a.guards.canActivateChecks.length)return N(a).pipe(Qe(l=>{const u=new oF(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(l.urlAfterRedirects),l.targetSnapshot);this.triggerEvent(u)}),un(l=>{let u=!1;return N(l).pipe(function dP(e,t){return je(n=>{const{targetSnapshot:r,guards:{canActivateChecks:o}}=n;if(!o.length)return N(n);let i=0;return Ae(o).pipe(Kn(s=>function fP(e,t,n,r){const o=e.routeConfig,i=e._resolve;return void 0!==o?.title&&!YD(o)&&(i[Ni]=o.title),function hP(e,t,n,r){const o=function pP(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}(e);if(0===o.length)return N({});const i={};return Ae(o).pipe(je(s=>function gP(e,t,n,r){var o;const i=null!==(o=$i(t))&&void 0!==o?o:r,s=wo(e,i);return Jn(s.resolve?s.resolve(t,n):i.runInContext(()=>s(t,n)))}(e[s],t,n,r).pipe(Yn(),Qe(a=>{i[s]=a}))),Id(1),function MR(e){return q(()=>e)}(i),qt(s=>Wd(s)?hn:Zn(s)))}(i,e,t,r).pipe(q(s=>(e._resolvedData=s,e.data=AD(e,n).resolve,o&&YD(o)&&(e.data[Ni]=o.title),null)))}(s.route,r,e,t)),Qe(()=>i++),Id(1),je(s=>i===o.length?N(n):hn))})}(this.paramsInheritanceStrategy,this.ngModule.injector),Qe({next:()=>u=!0,complete:()=>{u||(this.restoreHistory(l),this.cancelNavigationTransition(l,"",2))}}))}),Qe(l=>{const u=new iF(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(l.urlAfterRedirects),l.targetSnapshot);this.triggerEvent(u)}))}),Kd(a=>{const l=u=>{var c;const d=[];null!==(c=u.routeConfig)&&void 0!==c&&c.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(Qe(f=>{u.component=f}),q(()=>{})));for(const f of u.children)d.push(...l(f));return d};return J_(l(a.targetSnapshot.root)).pipe(xa(),xi(1))}),Kd(()=>this.afterPreactivation()),q(a=>{const l=function gF(e,t,n){const r=Li(e,t._root,n?n._root:void 0);return new MD(r,t)}(this.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return o={...a,targetRouterState:l}}),Qe(a=>{this.currentUrlTree=a.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(a.urlAfterRedirects,a.rawUrl),this.routerState=a.targetRouterState,"deferred"===this.urlUpdateStrategy&&(a.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,a),this.browserUrlTree=a.urlAfterRedirects)}),((e,t,n)=>q(r=>(new SF(t,r.targetRouterState,r.currentRouterState,n).activate(e),r)))(this.rootContexts,this.routeReuseStrategy,a=>this.triggerEvent(a)),Qe({next(){i=!0},complete(){i=!0}}),Ad(()=>{var a;i||s||this.cancelNavigationTransition(o,"",1),(null===(a=this.currentNavigation)||void 0===a?void 0:a.id)===o.id&&(this.currentNavigation=null)}),qt(a=>{if(s=!0,PD(a)){FD(a)||(this.navigated=!0,this.restoreHistory(o,!0));const u=new La(o.id,this.serializeUrl(o.extractedUrl),a.message,a.cancellationCode);if(r.next(u),FD(a)){const c=this.urlHandlingStrategy.merge(a.url,this.rawUrlTree),d={skipLocationChange:o.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||nC(o.source)};this.scheduleNavigation(c,"imperative",null,d,{resolve:o.resolve,reject:o.reject,promise:o.promise})}else o.resolve(!1)}else{var l;this.restoreHistory(o,!0);const u=new ED(o.id,this.serializeUrl(o.extractedUrl),a,null!==(l=o.targetSnapshot)&&void 0!==l?l:void 0);r.next(u);try{o.resolve(this.errorHandler(a))}catch(c){o.reject(c)}}return hn}))}))}resetRootComponentType(n){this.rootComponentType=n,this.routerState.root.component=this.rootComponentType}setTransition(n){this.transitions.next({...this.transitions.value,...n})}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(n=>{const r="popstate"===n.type?"popstate":"hashchange";"popstate"===r&&setTimeout(()=>{var o;const i={replaceUrl:!0},s=null!==(o=n.state)&&void 0!==o&&o.navigationId?n.state:null;if(s){const l={...s};delete l.navigationId,delete l.\u0275routerPageId,0!==Object.keys(l).length&&(i.state=l)}const a=this.parseUrl(n.url);this.scheduleNavigation(a,r,s,i)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(n){this.events.next(n)}resetConfig(n){this.config=n.map(zd),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(n,r={}){const{relativeTo:o,queryParams:i,fragment:s,queryParamsHandling:a,preserveFragment:l}=r,u=o||this.routerState.root,c=l?this.currentUrlTree.fragment:s;let d=null;switch(a){case"merge":d={...this.currentUrlTree.queryParams,...i};break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=i||null}return null!==d&&(d=this.removeEmptyProps(d)),KR(u,this.currentUrlTree,n,d,c??null)}navigateByUrl(n,r={skipLocationChange:!1}){const o=wr(n)?n:this.parseUrl(n),i=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(i,"imperative",null,r)}navigate(n,r={skipLocationChange:!1}){return function IP(e){for(let t=0;t<e.length;t++){if(null==e[t])throw new C(4008,false)}}(n),this.navigateByUrl(this.createUrlTree(n,r),r)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){let r;try{r=this.urlSerializer.parse(n)}catch(o){r=this.malformedUriErrorHandler(o,this.urlSerializer,n)}return r}isActive(n,r){let o;if(o=!0===r?{...bP}:!1===r?{...SP}:r,wr(n))return uD(this.currentUrlTree,n,o);const i=this.parseUrl(n);return uD(this.currentUrlTree,i,o)}removeEmptyProps(n){return Object.keys(n).reduce((r,o)=>{const i=n[o];return null!=i&&(r[o]=i),r},{})}processNavigations(){this.navigations.subscribe(n=>{var r;this.navigated=!0,this.lastSuccessfulId=n.id,this.currentPageId=n.targetPageId,this.events.next(new Qt(n.id,this.serializeUrl(n.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,null===(r=this.titleStrategy)||void 0===r||r.updateTitle(this.routerState.snapshot),n.resolve(!0)},n=>{this.console.warn(`Unhandled Navigation Error: ${n}`)})}scheduleNavigation(n,r,o,i,s){if(this.disposed)return Promise.resolve(!1);let a,l,u;s?(a=s.resolve,l=s.reject,u=s.promise):u=new Promise((p,g)=>{a=p,l=g});const c=++this.navigationId;let d;if("computed"===this.canceledNavigationResolution)if(0===this.currentPageId&&(o=this.location.getState()),o&&o.\u0275routerPageId)d=o.\u0275routerPageId;else if(i.replaceUrl||i.skipLocationChange){var f;d=null!==(f=this.browserPageId)&&void 0!==f?f:0}else{var h;d=(null!==(h=this.browserPageId)&&void 0!==h?h:0)+1}else d=0;return this.setTransition({id:c,targetPageId:d,source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:n,extras:i,resolve:a,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(p=>Promise.reject(p))}setBrowserUrl(n,r){const o=this.urlSerializer.serialize(n),i={...r.extras.state,...this.generateNgRouterState(r.id,r.targetPageId)};this.location.isCurrentPathEqualTo(o)||r.extras.replaceUrl?this.location.replaceState(o,"",i):this.location.go(o,"",i)}restoreHistory(n,r=!1){if("computed"===this.canceledNavigationResolution){var o,i;const s=this.currentPageId-n.targetPageId;"popstate"!==n.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==(null===(o=this.currentNavigation)||void 0===o?void 0:o.finalUrl)||0===s?this.currentUrlTree===(null===(i=this.currentNavigation)||void 0===i?void 0:i.finalUrl)&&0===s&&(this.resetState(n),this.browserUrlTree=n.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(s)}else"replace"===this.canceledNavigationResolution&&(r&&this.resetState(n),this.resetUrlToCurrentUrlTree())}resetState(n){this.routerState=n.currentRouterState,this.currentUrlTree=n.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(n,r,o){const i=new La(n.id,this.serializeUrl(n.extractedUrl),r,o);this.triggerEvent(i),n.resolve(!1)}generateNgRouterState(n,r){return"computed"===this.canceledNavigationResolution?{navigationId:n,\u0275routerPageId:r}:{navigationId:n}}}return e.\u0275fac=function(n){Lu()},e.\u0275prov=F({token:e,factory:function(){return tC()},providedIn:"root"}),e})();function nC(e){return"imperative"!==e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class rC{}let xP=(()=>{class e{constructor(n,r,o,i,s){this.router=n,this.injector=o,this.preloadingStrategy=i,this.loader=s}setUpPreloading(){this.subscription=this.router.events.pipe(ln(n=>n instanceof Qt),Kn(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(n,r){const o=[];for(const l of r){var i,s;l.providers&&!l._injector&&(l._injector=Ys(l.providers,n,`Route: ${l.path}`));const u=null!==(i=l._injector)&&void 0!==i?i:n,c=null!==(s=l._loadedInjector)&&void 0!==s?s:u;if(l.loadChildren&&!l._loadedRoutes&&void 0===l.canLoad||l.loadComponent&&!l._loadedComponent)o.push(this.preloadConfig(u,l));else if(l.children||l._loadedRoutes){var a;o.push(this.processRoutes(c,null!==(a=l.children)&&void 0!==a?a:l._loadedRoutes))}}return Ae(o).pipe(Ar())}preloadConfig(n,r){return this.preloadingStrategy.preload(r,()=>{let o;o=r.loadChildren&&void 0===r.canLoad?this.loader.loadChildren(n,r):N(null);const i=o.pipe(je(s=>{var a;return null===s?N(void 0):(r._loadedRoutes=s.routes,r._loadedInjector=s.injector,this.processRoutes(null!==(a=s.injector)&&void 0!==a?a:n,s.routes))}));return r.loadComponent&&!r._loadedComponent?Ae([i,this.loader.loadComponent(r)]).pipe(Ar()):i})}}return e.\u0275fac=function(n){return new(n||e)(M(Me),M(Oc),M(Gn),M(rC),M(Yd))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ef=new x("");let oC=(()=>{class e{constructor(n,r,o={}){this.router=n,this.viewportScroller=r,this.options=o,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},o.scrollPositionRestoration=o.scrollPositionRestoration||"disabled",o.anchorScrolling=o.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(n=>{n instanceof kd?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=n.navigationTrigger,this.restoredId=n.restoredState?n.restoredState.navigationId:0):n instanceof Qt&&(this.lastId=n.id,this.scheduleScrollEvent(n,this.router.parseUrl(n.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(n=>{n instanceof bD&&(n.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(n.position):n.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(n.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(n,r){this.router.triggerEvent(new bD(n,"popstate"===this.lastSource?this.store[this.restoredId]:null,r))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return e.\u0275fac=function(n){Lu()},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function bo(e,t){return{\u0275kind:e,\u0275providers:t}}function tf(e){return[{provide:Zd,multi:!0,useValue:e}]}function sC(){const e=be(Dt);return t=>{var n,r;const o=e.get(ia);if(t!==o.components[0])return;const i=e.get(Me),s=e.get(aC);1===e.get(nf)&&i.initialNavigation(),null===(n=e.get(lC,null,P.Optional))||void 0===n||n.setUpPreloading(),null===(r=e.get(ef,null,P.Optional))||void 0===r||r.init(),i.resetRootComponentType(o.componentTypes[0]),s.next(),s.complete()}}const aC=new x("",{factory:()=>new Ze}),nf=new x("",{providedIn:"root",factory:()=>1});const lC=new x("");function PP(e){return bo(0,[{provide:lC,useExisting:xP},{provide:rC,useExisting:e}])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const uC=new x("ROUTER_FORROOT_GUARD"),OP=[Zc,{provide:hD,useClass:xd},{provide:Me,useFactory:tC},Vi,{provide:Er,useFactory:function iC(e){return e.routerState.root},deps:[Me]},Yd];function kP(){return new Mv("Router",Me)}let cC=(()=>{class e{constructor(n){}static forRoot(n,r){return{ngModule:e,providers:[OP,[],tf(n),{provide:uC,useFactory:jP,deps:[[Me,new qo,new Qo]]},{provide:qa,useValue:r||{}},null!=r&&r.useHash?{provide:vr,useClass:kx}:{provide:vr,useClass:Yv},{provide:ef,useFactory:()=>{const e=be(Me),t=be(tN),n=be(qa);return n.scrollOffset&&t.setOffset(n.scrollOffset),new oC(e,t,n)}},null!=r&&r.preloadingStrategy?PP(r.preloadingStrategy).\u0275providers:[],{provide:Mv,multi:!0,useFactory:kP},null!=r&&r.initialNavigation?BP(r):[],[{provide:dC,useFactory:sC},{provide:_v,multi:!0,useExisting:dC}]]}}static forChild(n){return{ngModule:e,providers:[tf(n)]}}}return e.\u0275fac=function(n){return new(n||e)(M(uC,8))},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({imports:[Ud]}),e})();function jP(e){return"guarded"}function BP(e){return["disabled"===e.initialNavigation?bo(3,[{provide:na,multi:!0,useFactory:()=>{const t=be(Me);return()=>{t.setUpLocationChangeListener()}}},{provide:nf,useValue:2}]).\u0275providers:[],"enabledBlocking"===e.initialNavigation?bo(2,[{provide:nf,useValue:0},{provide:na,multi:!0,deps:[Dt],useFactory:t=>{const n=t.get(Px,Promise.resolve());let r=!1;return()=>n.then(()=>new Promise(i=>{const s=t.get(Me),a=t.get(aC);(function o(i){t.get(Me).events.pipe(ln(a=>a instanceof Qt||a instanceof La||a instanceof ED),q(a=>a instanceof Qt||a instanceof La&&(0===a.code||1===a.code)&&null),ln(a=>null!==a),xi(1)).subscribe(()=>{i()})})(()=>{i(!0),r=!0}),s.afterPreactivation=()=>(i(!0),r||a.closed?N(void 0):a),s.initialNavigation()}))}}]).\u0275providers:[]]}const dC=new x("");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let fC=(()=>{class e{constructor(n){this.http=n,this.collegesUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/colleges"}getColleges(){return this.http.get(this.collegesUrl).pipe(qt(this.handleError))}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),Zn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(M(Aa))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),So=(()=>{class e{constructor(n,r,o){this.http=n,this.isLoading=!0,this.query="",this.params={selectedCollege:"",collegeFullName:"",selectedProgramType:"",programTypeFullName:"",limit:25,page:1},this.resultsSource=new Ze,this.querySource=new Ze,this.paramsSource=new Ze,this.isLoadingSource=new Ze,this.results$=this.resultsSource.asObservable(),this.query$=this.querySource.asObservable(),this.params$=this.paramsSource.asObservable(),this.isLoading$=this.isLoadingSource.asObservable(),this.searchUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/degrees",this.router=r,this.collegeService=o;let i=this.router.events.subscribe(s=>{s instanceof Qt&&setTimeout(()=>{"/"===s.url&&this.getResults(),i.unsubscribe()})});this.subscription=this.query$.subscribe(s=>{this.query=s,this.getResults()}),this.subscription=this.params$.subscribe(s=>{this.params=s,this.getResults()})}setQuery(n){this.query=n,this.querySource.next(n),this.setRoute()}setProgramType(n,r){this.params.selectedProgramType=n,this.params.programTypeFullName=r,this.paramsSource.next(this.params),this.setRoute()}setCollege(n,r){this.params.selectedCollege=n,this.params.collegeFullName=r,this.paramsSource.next(this.params),this.setRoute()}updateCollege(n,r){this.params.selectedCollege=n,this.params.collegeFullName=r}updateProgramType(n,r){this.params.selectedProgramType=n,this.params.programTypeFullName=r}setRoute(){this.router&&this.router.navigate([...this.params.selectedProgramType?[this.params.selectedProgramType]:[],...this.params.selectedCollege?["college",this.params.selectedCollege]:[],...this.query?["search",this.query]:[]])}setPage(n){this.params.page=this.params.page+n,this.paramsSource.next(this.params)}gotoPage(n,r){this.params.page=n,r&&this.paramsSource.next(this.params)}getResults(){const n={params:(new On).set("colleges",this.params.selectedCollege).set("limit",this.params.limit).set("page",this.params.page).set("program_types",this.params.selectedProgramType).set("search",this.query)};this.isLoadingSource.next(!0),this.resultsSource.next(this.results),this.http.get(this.searchUrl,n).pipe(qt(this.handleError)).subscribe(r=>{this.isLoadingSource.next(!1),this.resultsSource.next(r),this.updateHeader()})}updateHeader(){let n=""!==this.params.programTypeFullName?this.params.programTypeFullName:"";const r=""!==this.params.collegeFullName?" in "+this.params.collegeFullName:"",o=document.getElementsByClassName("header-subtitle");if(o&&o[0]&&null!==o[0].parentNode&&o[0].parentNode.removeChild(o[0]),""!==n||""!==r){const i=document.createElement("span");n=n.replace("Program",""),n+="'s Degrees ",i.classList.add("degree-search-secondary-heading","header-subtitle","d-inline-block","bg-inverse"),i.innerText="Find "+n+r.replace("College of ","")+" at UCF.",document.getElementsByClassName("header-title")[0].after(i)}}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),Zn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(M(Aa),M(Me),M(fC))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function UP(e,t){1&e&&(A(0,"p",4),pe(1,"span",5),K(2," Loading Areas of Study"),I())}function GP(e,t){if(1&e){const n=Mn();A(0,"li",14)(1,"label",15)(2,"input",16),fe("click",function(){const i=Zt(n).$implicit;return Yt(ee(2).setCollege(i.slug,i.fullname))}),I(),pe(3,"span",17),A(4,"span",12),K(5),I()()()}if(2&e){const n=t.$implicit,r=ee(2);T(2),pr("value",n.slug),B("checked",r.isCollegeChecked(n)),T(3),In(n.name)}}function zP(e,t){if(1&e){const n=Mn();A(0,"div",6)(1,"ul",7)(2,"li",8)(3,"a",9)(4,"label",10)(5,"input",11),fe("click",function(){return Zt(n),Yt(ee().setCollege("",""))}),I(),A(6,"span",12),K(7,"View All"),I()()()(),oe(8,GP,6,3,"li",13),I()()}if(2&e){const n=ee();T(8),B("ngForOf",n.colleges)}}let WP=(()=>{class e{constructor(n,r,o){this.collegeService=n,this.searchService=r,this.router=o,this.isLoading=!0,this.isCollegesOpen=!1;let i=this.router.events.subscribe(s=>{s instanceof Qt&&setTimeout(()=>{let a=s.url.split("/"),l=a.indexOf("college");-1!==l&&(this.selectedCollege=a[l+1],this.searchService.setCollege(this.selectedCollege,"")),i.unsubscribe()})})}ngOnInit(){this.collegeService.getColleges().subscribe(n=>{this.colleges=n,this.isLoading=!1})}isCollegeChecked(n){return this.selectedCollege===n.slug&&(this.searchService.updateCollege(n.slug,n.fullname),!0)}setCollege(n,r){this.selectedCollege=n,this.searchService.gotoPage(1,!1),this.searchService.setCollege(n,r)}}return e.\u0275fac=function(n){return new(n||e)(v(fC),v(So),v(Me))},e.\u0275cmp=Pt({type:e,selectors:[["app-colleges"]],decls:5,vars:2,consts:[[1,"h6","pb-2","mt-4"],[1,"mb-4"],["class","my-3",4,"ngIf"],["class","degree-search-colleges",4,"ngIf"],[1,"my-3"],[1,"fa","fa-spinner","fa-spin"],[1,"degree-search-colleges"],[1,"degree-search-colleges","list-unstyled"],[1,"mb-2"],["href","#"],[1,"custom-control","custom-radio","mb-0","pl-0"],["type","radio","name","college","value","",1,"custom-control-input",3,"click"],[1,"custom-control-description"],["class","degree-search-college",4,"ngFor","ngForOf"],[1,"degree-search-college"],[1,"custom-control","custom-radio","mb-0"],["type","radio","name","college",1,"custom-control-input",3,"value","checked","click"],[1,"custom-control-indicator"]],template:function(n,r){1&n&&(A(0,"h3",0),K(1," Select Area of Study\n"),I(),A(2,"div",1),oe(3,UP,3,0,"p",2),oe(4,zP,9,1,"div",3),I()),2&n&&(T(3),B("ngIf",r.isLoading),T(1),B("ngIf",r.colleges&&r.colleges.length))},dependencies:[Si,_r]}),e})(),qP=(()=>{class e{constructor(n){this.http=n,this.programTypesUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/program-types",this.programTypesSource=new Ze,this.programTypes$=this.programTypesSource.asObservable()}getprogramTypes(){return this.http.get(this.programTypesUrl).pipe(qt(this.handleError))}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),Zn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(M(Aa))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function QP(e,t){if(1&e&&(A(0,"span",2),pe(1,"span",3),A(2,"span",4),K(3),I()()),2&e){const n=ee();T(1),B("ngClass",n.getProgamClass(n.degreeType)),T(2),In(n.getProgramType(n.degreeType))}}function KP(e,t){if(1&e&&(bn(0),K(1),Sn()),2&e){const n=ee();T(1),sn("(",n.getProgramType(n.degreeType),")")}}let hC=(()=>{class e{constructor(){this.degreeType="",this.textLabel=""}getProgamClass(n){return"bachelor"===n||"undergraduate-program"===n||"minor"===n||"undergraduate-certificate"===n?"fa fa-bookmark fa-2x text-primary":"doctorate"===n||"master"===n||"specialist"===n||"graduate-certificate"===n||"graduate-program"===n?"fa fa-bookmark fa-2x text-danger":"fa fa-bookmark fa-2x text-complementary"}getProgramType(n){if("flagOnly"===this.textLabel)return"";switch(n){case"bachelor":return"B";case"undergraduate-program":default:return"";case"minor":return"Mn";case"undergraduate-certificate":return"UC";case"doctorate":return"D";case"graduate-certificate":return"GC";case"master":case"graduate-program":return"M";case"specialist":return"Sp";case"professional-program":return"MD"}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=Pt({type:e,selectors:[["app-programs-label"]],inputs:{degreeType:"degreeType",textLabel:"textLabel"},decls:2,vars:2,consts:[["class","fa-stack","style","line-height:1.6em",4,"ngIf"],[4,"ngIf"],[1,"fa-stack",2,"line-height","1.6em"],[1,"fa","fa-stack-2x",3,"ngClass"],[1,"fa-stack-1x","font-sans-serif","small"]],template:function(n,r){1&n&&(oe(0,QP,4,2,"span",0),oe(1,KP,2,1,"ng-container",1)),2&n&&(B("ngIf","flagOnly"===r.textLabel||""===r.textLabel),T(1),B("ngIf","textOnly"===r.textLabel))},dependencies:[bi,_r]}),e})();function ZP(e,t){1&e&&(A(0,"p",3),pe(1,"span",4),K(2," Loading Degree Levels"),I())}function YP(e,t){if(1&e){const n=Mn();bn(0),A(1,"li")(2,"label",17)(3,"input",12),fe("click",function(){const i=Zt(n).$implicit;return Yt(ee(4).setProgramType(i.slug,i.name))}),I(),pe(4,"span",18),A(5,"span",10),K(6),pe(7,"app-programs-label",13),I()()(),Sn()}if(2&e){const n=t.$implicit,r=ee(4);T(3),pr("value",n.name),B("checked",r.isProgramTypeChecked(n)),T(3),sn(" ",n.name.replace("Undergraduate ","").replace("Graduate ","")," "),T(1),B("degreeType",n.slug)("textLabel","textOnly")}}function JP(e,t){if(1&e&&(A(0,"ul",16),oe(1,YP,8,5,"ng-container",11),I()),2&e){const n=ee().$implicit;B("ngClass",ee(2).isProgramTypeVisible(n)?"":"d-none"),T(1),B("ngForOf",n.children)}}function XP(e,t){if(1&e){const n=Mn();bn(0),A(1,"li")(2,"label",8)(3,"input",12),fe("click",function(){const i=Zt(n).$implicit;return Yt(ee(2).setProgramType(i.slug,i.name))}),I(),A(4,"span",10),pe(5,"app-programs-label",13),A(6,"a",14),fe("click",function(){const i=Zt(n).$implicit;return Yt(ee(2).setProgramType(i.slug,i.name))}),K(7),I()()()(),oe(8,JP,2,2,"ul",15),Sn()}if(2&e){const n=t.$implicit,r=ee(2);T(3),pr("value",n.name),B("checked",r.isProgramTypeChecked(n)),T(2),B("degreeType",n.slug)("textLabel","flagOnly"),T(2),In(n.name.replace(" Program","").replace("Professional","MD")),T(1),B("ngIf",n.children.length)}}function eO(e,t){if(1&e){const n=Mn();A(0,"ul",5)(1,"li",6)(2,"a",7)(3,"label",8)(4,"input",9),fe("click",function(){return Zt(n),Yt(ee().setProgramType("",""))}),I(),A(5,"span",10),K(6," View All "),I()()()(),oe(7,XP,9,6,"ng-container",11),I()}if(2&e){const n=ee();T(7),B("ngForOf",n.programTypes)}}let tO=(()=>{class e{constructor(n,r,o){this.programTypeService=n,this.searchService=r,this.router=o,this.isLoading=!0,this.isProgramTypeOpen=!1;let i=this.router.events.subscribe(s=>{s instanceof Qt&&setTimeout(()=>{let a=s.url.split("/");if(a?.length){let l=a[1];""!==l&&"college"!==l&&"search"!==l&&(this.selectedProgramType=l,this.searchService.setProgramType(this.selectedProgramType,""))}i.unsubscribe()})})}ngOnInit(){this.programTypeService.getprogramTypes().subscribe(n=>{n.length&&(n[1].children.splice(0,0,n[1].children.splice(2,1)[0]),this.programTypes=n,this.isLoading=!1)})}isProgramTypeVisible(n){let r=!1;return n.slug===this.selectedProgramType?r=!0:n.children.forEach(o=>{o.slug===this.selectedProgramType&&(r=!0)}),r}isProgramTypeChecked(n){return this.selectedProgramType===n.slug&&(this.searchService.updateProgramType(n.slug,n.name),!0)}setProgramType(n,r){this.selectedProgramType=n,this.searchService.gotoPage(1,!1),this.searchService.setProgramType(n,r)}}return e.\u0275fac=function(n){return new(n||e)(v(qP),v(So),v(Me))},e.\u0275cmp=Pt({type:e,selectors:[["app-program-types"]],decls:4,vars:2,consts:[[1,"h6","pb-2","mt-4"],["class","my-3",4,"ngIf"],["class","degree-search-programTypes list-unstyled",4,"ngIf"],[1,"my-3"],[1,"fa","fa-spinner","fa-spin"],[1,"degree-search-programTypes","list-unstyled"],[1,"mb-2"],["href","#"],[1,"custom-control","custom-radio","mb-0","pl-0"],["type","radio","name","programType","value","",1,"custom-control-input",3,"click"],[1,"custom-control-description"],[4,"ngFor","ngForOf"],["type","radio","name","programType",1,"custom-control-input",3,"value","checked","click"],[1,"d-none","d-md-inline-block","mr-1",3,"degreeType","textLabel"],["href","javascript:;",1,"text-secondary",3,"click"],["class","list-unstyled ml-3 pl-md-3",3,"ngClass",4,"ngIf"],[1,"list-unstyled","ml-3","pl-md-3",3,"ngClass"],[1,"custom-control","custom-radio","mb-0"],[1,"custom-control-indicator"]],template:function(n,r){1&n&&(A(0,"h3",0),K(1," Select Degree Level\n"),I(),oe(2,ZP,3,0,"p",1),oe(3,eO,8,1,"ul",2)),2&n&&(T(2),B("ngIf",r.isLoading),T(1),B("ngIf",r.programTypes&&r.programTypes.length))},dependencies:[bi,Si,_r,hC]}),e})(),pC=(()=>{class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}}return e.\u0275fac=function(n){return new(n||e)(v(Dn),v(_t))},e.\u0275dir=L({type:e}),e})(),br=(()=>{class e extends pC{}return e.\u0275fac=function(){let t;return function(r){return(t||(t=function Ge(e){return $n(()=>{const t=e.prototype.constructor,n=t[gn]||Gl(t),r=Object.prototype;let o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){const i=o[gn]||Gl(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}(e)))(r||e)}}(),e.\u0275dir=L({type:e,features:[re]}),e})();const dn=new x("NgValueAccessor"),oO={provide:dn,useExisting:ue(()=>Ya),multi:!0},sO=new x("CompositionEventMode");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ya=(()=>{class e extends pC{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function iO(){const e=an()?an().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(n){this.setProperty("value",n??"")}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}}return e.\u0275fac=function(n){return new(n||e)(v(Dn),v(_t),v(sO,8))},e.\u0275dir=L({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){1&n&&fe("input",function(i){return r._handleInput(i.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(i){return r._compositionEnd(i.target.value)})},features:[ge([oO]),re]}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ke=new x("NgValidators"),er=new x("NgAsyncValidators");function SC(e){return null!=e}function MC(e){return ci(e)?Ae(e):e}function IC(e){let t={};return e.forEach(n=>{t=null!=n?{...t,...n}:t}),0===Object.keys(t).length?null:t}function AC(e,t){return t.map(n=>n(e))}function TC(e){return e.map(t=>function uO(e){return!e.validate}(t)?t:n=>t.validate(n))}function rf(e){return null!=e?function xC(e){if(!e)return null;const t=e.filter(SC);return 0==t.length?null:function(n){return IC(AC(n,t))}}(TC(e)):null}function sf(e){return null!=e?function NC(e){if(!e)return null;const t=e.filter(SC);return 0==t.length?null:function(n){return function nO(...e){const t=oh(e),{args:n,keys:r}=K_(e),o=new we(i=>{const{length:s}=n;if(!s)return void i.complete();const a=new Array(s);let l=s,u=s;for(let c=0;c<s;c++){let d=!1;Rt(n[c]).subscribe(Ee(i,f=>{d||(d=!0,u--),a[c]=f},()=>l--,void 0,()=>{(!l||!d)&&(u||i.next(r?Y_(r,a):a),i.complete())}))}});return t?o.pipe(Z_(t)):o}
/**
       * @license Angular v14.2.3
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(AC(n,t).map(MC)).pipe(q(IC))}}(TC(e)):null}function RC(e,t){return null===e?[t]:Array.isArray(e)?[...e,t]:[e,t]}function FC(e){return e._rawValidators}function PC(e){return e._rawAsyncValidators}function af(e){return e?Array.isArray(e)?e:[e]:[]}function Xa(e,t){return Array.isArray(e)?e.includes(t):e===t}function OC(e,t){const n=af(t);return af(e).forEach(o=>{Xa(n,o)||n.push(o)}),n}function kC(e,t){return af(t).filter(n=>!Xa(e,n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class LC{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=rf(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=sf(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,n){return!!this.control&&this.control.hasError(t,n)}getError(t,n){return this.control?this.control.getError(t,n):null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class it extends LC{get formDirective(){return null}get path(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class tr extends LC{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class VC{constructor(t){this._cd=t}get isTouched(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.touched)}get isUntouched(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.untouched)}get isPristine(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.pristine)}get isDirty(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.dirty)}get isValid(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.valid)}get isInvalid(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.invalid)}get isPending(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.pending)}get isSubmitted(){var t;return!(null===(t=this._cd)||void 0===t||!t.submitted)}}let $C=(()=>{class e extends VC{constructor(n){super(n)}}return e.\u0275fac=function(n){return new(n||e)(v(tr,2))},e.\u0275dir=L({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){2&n&&zs("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[re]}),e})(),jC=(()=>{class e extends VC{constructor(n){super(n)}}return e.\u0275fac=function(n){return new(n||e)(v(it,10))},e.\u0275dir=L({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){2&n&&zs("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[re]}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Gi="VALID",tl="INVALID",Mo="PENDING",zi="DISABLED";function HC(e){return Array.isArray(e)?rf(e):e||null}function UC(e){return Array.isArray(e)?sf(e):e||null}function nl(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}function Wi(e,t){var n,r;(function pf(e,t){const n=FC(e);null!==t.validator?e.setValidators(RC(n,t.validator)):"function"==typeof n&&e.setValidators([n]);const r=PC(e);null!==t.asyncValidator?e.setAsyncValidators(RC(r,t.asyncValidator)):"function"==typeof r&&e.setAsyncValidators([r]);const o=()=>e.updateValueAndValidity();il(t._rawValidators,o),il(t._rawAsyncValidators,o)})(e,t),t.valueAccessor.writeValue(e.value),e.disabled&&(null===(n=(r=t.valueAccessor).setDisabledState)||void 0===n||n.call(r,!0)),function vO(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&qC(e,t)})}(e,t),function DO(e,t){const n=(r,o)=>{t.valueAccessor.writeValue(r),o&&t.viewToModelUpdate(r)};e.registerOnChange(n),t._registerOnDestroy(()=>{e._unregisterOnChange(n)})}(e,t),function _O(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&qC(e,t),"submit"!==e.updateOn&&e.markAsTouched()})}(e,t),function yO(e,t){if(t.valueAccessor.setDisabledState){const n=r=>{t.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(n),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(n)})}}(e,t)}function ol(e,t,n=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),function sl(e,t){let n=!1;if(null!==e){if(null!==t.validator){const o=FC(e);if(Array.isArray(o)&&o.length>0){const i=o.filter(s=>s!==t.validator);i.length!==o.length&&(n=!0,e.setValidators(i))}}if(null!==t.asyncValidator){const o=PC(e);if(Array.isArray(o)&&o.length>0){const i=o.filter(s=>s!==t.asyncValidator);i.length!==o.length&&(n=!0,e.setAsyncValidators(i))}}}const r=()=>{};return il(t._rawValidators,r),il(t._rawAsyncValidators,r),n}(e,t),e&&(t._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function il(e,t){e.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(t)})}function qC(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function YC(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function JC(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}let rw=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=L({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),e})(),iw=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const _f=new x("NgModelWithFormControlWarning"),FO={provide:tr,useExisting:ue(()=>Df)};let Df=(()=>{class e extends tr{constructor(n,r,o,i){super(),this._ngModelWarningConfig=i,this.update=new Ce,this._ngModelWarningSent=!1,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=function mf(e,t){if(!t)return null;let n,r,o;return Array.isArray(t),t.forEach(i=>{i.constructor===Ya?n=i:function EO(e){return Object.getPrototypeOf(e.constructor)===br}(i)?r=i:o=i}),o||r||n||null}(0,o)}set isDisabled(n){}ngOnChanges(n){if(this._isControlChanged(n)){const r=n.form.previousValue;r&&ol(r,this,!1),Wi(this.form,this),this.form.updateValueAndValidity({emitEvent:!1})}(function gf(e,t){if(!e.hasOwnProperty("model"))return!1;const n=e.model;return!!n.isFirstChange()||!Object.is(t,n.currentValue)})(n,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&ol(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_isControlChanged(n){return n.hasOwnProperty("form")}}return e._ngModelWarningSentOnce=!1,e.\u0275fac=function(n){return new(n||e)(v(Ke,10),v(er,10),v(dn,10),v(_f,8))},e.\u0275dir=L({type:e,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[ge([FO]),re,St]}),e})(),JO=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({imports:[iw]}),e})(),XO=(()=>{class e{static withConfig(n){return{ngModule:e,providers:[{provide:_f,useValue:n.warnOnNgModelWithFormControl}]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({imports:[JO]}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class tk extends ct{constructor(t,n){super()}schedule(t,n=0){return this}}const al={setInterval(e,t,...n){const{delegate:r}=al;return r?.setInterval?r.setInterval(e,t,...n):setInterval(e,t,...n)},clearInterval(e){const{delegate:t}=al;return(t?.clearInterval||clearInterval)(e)},delegate:void 0},Cw={now:()=>(Cw.delegate||Date).now(),delegate:void 0};class Qi{constructor(t,n=Qi.now){this.schedulerActionCtor=t,this.now=n}schedule(t,n=0,r){return new this.schedulerActionCtor(this,t).schedule(r,n)}}Qi.now=Cw.now;const ok=new class rk extends Qi{constructor(t,n=Qi.now){super(t,n),this.actions=[],this._active=!1}flush(t){const{actions:n}=this;if(this._active)return void n.push(t);let r;this._active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=n.shift());if(this._active=!1,r){for(;t=n.shift();)t.unsubscribe();throw r}}}(class nk extends tk{constructor(t,n){super(t,n),this.scheduler=t,this.work=n,this.pending=!1}schedule(t,n=0){var r;if(this.closed)return this;this.state=t;const o=this.id,i=this.scheduler;return null!=o&&(this.id=this.recycleAsyncId(i,o,n)),this.pending=!0,this.delay=n,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(i,this.id,n),this}requestAsyncId(t,n,r=0){return al.setInterval(t.flush.bind(t,this),r)}recycleAsyncId(t,n,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return n;null!=n&&al.clearInterval(n)}execute(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(t,n);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,n){let o,r=!1;try{this.work(t)}catch(i){r=!0,o=i||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:t,scheduler:n}=this,{actions:r}=n;this.work=this.state=this.scheduler=null,this.pending=!1,Ir(r,this),null!=t&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null,super.unsubscribe()}}});function ak(e,t){return e===t}let lk=(()=>{class e{constructor(n,r){this.searchService=n,this.router=r;let o=this.router.events.subscribe(i=>{i instanceof Qt&&setTimeout(()=>{let s=i.url.split("/"),a=s.indexOf("search");-1!==a&&this.searchField.setValue(s[a+1]),o.unsubscribe()})})}ngOnInit(){this.searchField=new class extends class WC{constructor(t,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=n,this._composedValidatorFn=HC(this._rawValidators),this._composedAsyncValidatorFn=UC(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===Gi}get invalid(){return this.status===tl}get pending(){return this.status==Mo}get disabled(){return this.status===zi}get enabled(){return this.status!==zi}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=HC(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=UC(t)}addValidators(t){this.setValidators(OC(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(OC(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(kC(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(kC(t,this._rawAsyncValidators))}hasValidator(t){return Xa(this._rawValidators,t)}hasAsyncValidator(t){return Xa(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=Mo,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const n=this._parentMarkedDirty(t.onlySelf);this.status=zi,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:n}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const n=this._parentMarkedDirty(t.onlySelf);this.status=Gi,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:n}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Gi||this.status===Mo)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?zi:Gi}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=Mo,this._hasOwnPendingAsyncValidator=!0;const n=MC(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,n={}){this.errors=t,this._updateControlsErrors(!1!==n.emitEvent)}get(t){let n=t;return null==n||(Array.isArray(n)||(n=n.split(".")),0===n.length)?null:n.reduce((r,o)=>r&&r._find(o),this)}getError(t,n){const r=n?this.get(n):this;return r&&r.errors?r.errors[t]:null}hasError(t,n){return!!this.getError(t,n)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new Ce,this.statusChanges=new Ce}_calculateStatus(){return this._allControlsDisabled()?zi:this.errors?tl:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Mo)?Mo:this._anyControlsHaveStatus(tl)?tl:Gi}_anyControlsHaveStatus(t){return this._anyControls(n=>n.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){nl(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */{constructor(t=null,n,r){super(function df(e){return(nl(e)?e.validators:e)||null}(n),function ff(e,t){return(nl(t)?t.asyncValidators:e)||null}(r,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),nl(n)&&(n.nonNullable||n.initialValueIsDefault)&&(this.defaultValue=JC(t)?t.value:t)}setValue(t,n={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==n.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==n.emitViewToModelChange)),this.updateValueAndValidity(n)}patchValue(t,n={}){this.setValue(t,n)}reset(t=this.defaultValue,n={}){this._applyFormState(t),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){YC(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){YC(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){JC(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}},this.searchField.valueChanges.pipe(ln(n=>n.length>2),function ik(e,t=ok){return Ie((n,r)=>{let o=null,i=null,s=null;const a=()=>{if(o){o.unsubscribe(),o=null;const u=i;i=null,r.next(u)}};function l(){const u=s+e,c=t.now();if(c<u)return o=this.schedule(void 0,u-c),void r.add(o);a()}n.subscribe(Ee(r,u=>{i=u,s=t.now(),o||(o=t.schedule(l,e),r.add(o))},()=>{a(),r.complete()},void 0,()=>{i=o=null}))})}(600),function sk(e,t=Vn){return e=e??ak,Ie((n,r)=>{let o,i=!0;n.subscribe(Ee(r,s=>{const a=t(s);(i||!e(o,a))&&(i=!1,o=a,r.next(s))}))})}()).subscribe(n=>{n&&(this.searchService.gotoPage(1,!1),this.searchService.setQuery(n))})}}return e.\u0275fac=function(n){return new(n||e)(v(So),v(Me))},e.\u0275cmp=Pt({type:e,selectors:[["app-search-form"]],decls:7,vars:1,consts:[[1,"jumbotron","jumbotron-fluid","bg-primary","py-3","mb-0"],[1,"container","bg-primary"],[1,"row"],[1,"col-12"],["id","degree-search-form","role","search","placeholder","Search for a degree..."],[1,"search-form-inner"],["id","degree-search-query","name","degree-search-query","type","search","autocomplete","off","aria-controls","searchResults","placeholder","Search for a degree...",1,"form-control",3,"formControl","keydown.enter"]],template:function(n,r){1&n&&(A(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"form",4)(5,"div",5)(6,"input",6),fe("keydown.enter",function(i){return i.preventDefault()}),I()()()()()()()),2&n&&(T(6),B("formControl",r.searchField))},dependencies:[rw,Ya,$C,jC,Df]}),e})();const uk=["paginationContainer"];function ck(e,t){if(1&e){const n=Mn();A(0,"li",7)(1,"a",8),fe("click",function(){return Zt(n),Yt(ee(2).setPage(-1))}),A(2,"span",9),K(3,"\xab"),I(),A(4,"span",10),K(5,"Previous"),I()()()}}const dk=function(e){return{active:e}};function fk(e,t){if(1&e){const n=Mn();A(0,"li",11)(1,"a",8),fe("click",function(){const i=Zt(n).$implicit;return Yt(ee(2).goToPage(i))}),K(2),I()()}if(2&e){const n=t.$implicit,r=ee(2);B("ngClass",$y(2,dk,r.results.currentPage===n)),T(2),sn(" ",n," ")}}function hk(e,t){if(1&e){const n=Mn();A(0,"li",7)(1,"a",8),fe("click",function(){return Zt(n),Yt(ee(2).setPage(1))}),A(2,"span",9),K(3,"\xbb"),I(),A(4,"span",10),K(5,"Next"),I()()()}}function pk(e,t){if(1&e&&(A(0,"div",1,2)(2,"nav",3)(3,"ul",4),oe(4,ck,6,0,"li",5),oe(5,fk,3,4,"li",6),oe(6,hk,6,0,"li",5),I()()()),2&e){const n=ee();T(4),B("ngIf",n.results.currentPage>1),T(1),B("ngForOf",n.pages),T(1),B("ngIf",n.results.currentPage<n.results.totalPages)}}let gk=(()=>{class e{constructor(n){this.searchService=n}ngOnInit(){}ngAfterViewInit(){setTimeout(()=>{this.paginationContainer&&this.pagination(this.paginationContainer.nativeElement.offsetWidth)})}setPage(n){this.searchService.setPage(n)}goToPage(n){n!==this.results?.currentPage&&this.searchService.gotoPage(n,!0)}pagination(n){if(this.results){let o=n<600?2:4,i=this.results.currentPage-o<1?1:this.results.currentPage-o,s=this.results.currentPage+o>this.results.totalPages?this.results.totalPages:this.results.currentPage+o;this.pages=new Array;for(var r=i;r<=s;r++)this.pages.push(r)}}}return e.\u0275fac=function(n){return new(n||e)(v(So))},e.\u0275cmp=Pt({type:e,selectors:[["app-pagination"]],viewQuery:function(n,r){if(1&n&&Xs(uk,5),2&n){let o;po(o=go())&&(r.paginationContainer=o.first)}},inputs:{results:"results"},decls:1,vars:1,consts:[["class","mt-5",4,"ngIf"],[1,"mt-5"],["paginationContainer",""],["aria-label","Degree Results Pagination"],[1,"pagination","pagination-lg","justify-content-center"],["class","page-item",4,"ngIf"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item"],["href","#",1,"page-link",3,"click"],["aria-hidden","true"],[1,"sr-only"],[1,"page-item",3,"ngClass"]],template:function(n,r){1&n&&oe(0,pk,7,3,"div",0),2&n&&B("ngIf",r.results&&r.results.totalPages>1)},dependencies:[bi,Si,_r]}),e})();const mk=["searchResultsContainer"],yk=["degreeLinks"];function vk(e,t){if(1&e&&(A(0,"span"),K(1," for the "),A(2,"strong"),K(3),I(),K(4," program"),I()),2&e){const n=ee(2);T(3),In(n.params.programTypeFullName)}}function _k(e,t){if(1&e&&(A(0,"span"),K(1," at the "),A(2,"strong"),K(3),I()()),2&e){const n=ee(2);T(3),In(n.params.collegeFullName)}}function Dk(e,t){if(1&e&&(A(0,"p",1),K(1," No degrees found "),oe(2,vk,5,1,"span",2),oe(3,_k,4,1,"span",2),K(4," at UCF.\n"),I()),2&e){const n=ee();T(2),B("ngIf",n.params&&""!=n.params.programTypeFullName),T(1),B("ngIf",n.params&&""!=n.params.collegeFullName)}}function Ck(e,t){if(1&e&&(A(0,"div",22),K(1),I()),2&e){const n=ee().$implicit;T(1),In(n.excerpt)}}function wk(e,t){if(1&e&&(bn(0),pe(1,"span",23),K(2),Sn()),2&e){const n=ee().$implicit;T(2),sn(" ",n.hours,"")}}function Ek(e,t){if(1&e&&(A(0,"div",29),K(1),I()),2&e){const n=ee().$implicit;T(1),In(n.excerpt)}}function bk(e,t){if(1&e&&(bn(0),pe(1,"span",23),K(2),Sn()),2&e){const n=ee().$implicit;T(2),sn(" ",n.hours,"")}}function Sk(e,t){if(1&e&&(A(0,"div",26)(1,"div",12)(2,"div",27)(3,"div",15)(4,"div",5)(5,"a",16),K(6),I(),oe(7,Ek,2,1,"div",28),I()(),A(8,"div",19),oe(9,bk,3,1,"ng-container",2),I(),A(10,"div",19),pe(11,"app-programs-label",20),I()()()()),2&e){const n=t.$implicit;T(5),pr("href",n.url,Xo),T(1),sn(" ",n.nameShort," "),T(1),B("ngIf",n.excerpt),T(2),B("ngIf",n.hours),T(2),B("degreeType",n.type)}}function Mk(e,t){if(1&e&&(A(0,"div",24),oe(1,Sk,12,5,"div",25),I()),2&e){const n=ee().$implicit;T(1),B("ngForOf",n.subplans)}}function Ik(e,t){if(1&e&&(A(0,"div"),pe(1,"hr",11),A(2,"div",12)(3,"div",13,14)(5,"div",15)(6,"div",5)(7,"a",16,17),K(9),I(),oe(10,Ck,2,1,"div",18),I()(),A(11,"div",19),oe(12,wk,3,1,"ng-container",2),I(),A(13,"div",19),pe(14,"app-programs-label",20),I()()(),oe(15,Mk,2,1,"div",21),I()),2&e){const n=t.$implicit;T(7),pr("href",n.url,Xo),T(2),sn(" ",n.title," "),T(1),B("ngIf",n.excerpt),T(2),B("ngIf",n.hours),T(2),B("degreeType",n.type),T(1),B("ngIf",n.subplans)}}function Ak(e,t){if(1&e&&(A(0,"div",10),oe(1,Ik,16,6,"div",7),I()),2&e){const n=ee().$implicit;T(1),B("ngForOf",n.degrees)}}function Tk(e,t){if(1&e&&(bn(0),oe(1,Ak,2,1,"div",9),Sn()),2&e){const n=t.$implicit;T(1),B("ngIf",n.degrees)}}function xk(e,t){if(1&e&&(A(0,"div",1)(1,"div",3)(2,"div",4)(3,"div",5),K(4," Programs "),I()(),A(5,"div",6),K(6," Hours to Complete "),I(),A(7,"div",6),K(8," Degree Level "),I()(),oe(9,Tk,2,1,"ng-container",7),pe(10,"app-pagination",8),I()),2&e){const n=ee();T(9),B("ngForOf",n.results.types),T(1),B("results",n.results)}}let Nk=(()=>{class e{constructor(n){this.searchService=n,this.isLoading=!0,this.subscription=this.searchService.results$.subscribe(r=>{this.results=r}),this.subscription=this.searchService.params$.subscribe(r=>{this.params=r}),this.subscription=this.searchService.isLoading$.subscribe(r=>{this.isLoading=r})}ngOnInit(){}ngAfterViewInit(){this.degreeLinks?.changes.subscribe(()=>{setTimeout(()=>{this.degreeLinks&&this.degreeLinks.first&&this.degreeLinks.first.nativeElement&&this.searchResultsContainer?.nativeElement.offsetWidth>600&&this.degreeLinks.first.nativeElement.focus()})})}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(v(So))},e.\u0275cmp=Pt({type:e,selectors:[["app-search-results"]],viewQuery:function(n,r){if(1&n&&(Xs(mk,5),Xs(yk,5)),2&n){let o;po(o=go())&&(r.searchResultsContainer=o.first),po(o=go())&&(r.degreeLinks=o)}},decls:2,vars:2,consts:[["class","mt-4",4,"ngIf"],[1,"mt-4"],[4,"ngIf"],[1,"row","align-items-end","d-none","d-md-flex","mb-3"],[1,"col-md-6","program-header"],[1,"pl-3"],[1,"col-md-3","text-center","program-header"],[4,"ngFor","ngForOf"],[3,"results"],["class","degree-search-results-container list-unstyled",4,"ngIf"],[1,"degree-search-results-container","list-unstyled"],[1,"hr-primary","m-0"],[1,"degree-hover"],[1,"row","degree","position-relative","py-3"],["searchResultsContainer",""],[1,"col-12","col-md-6"],[1,"stretched-link",3,"href"],["degreeLinks",""],["class","degree-description small mt-2 mb-0",4,"ngIf"],[1,"col-md-3","text-center","d-none","d-md-block"],[3,"degreeType"],["class","degree-search-subplan-results-container list-unstyled",4,"ngIf"],[1,"degree-description","small","mt-2","mb-0"],["aria-hidden","true",1,"fa","fa-clock-o"],[1,"degree-search-subplan-results-container","list-unstyled"],["class","search-result-subplan",4,"ngFor","ngForOf"],[1,"search-result-subplan"],[1,"row","degree-subplan","position-relative","py-3"],["class","degree-description small mt-2",4,"ngIf"],[1,"degree-description","small","mt-2"]],template:function(n,r){1&n&&(oe(0,Dk,5,2,"p",0),oe(1,xk,11,2,"div",0)),2&n&&(B("ngIf",!r.isLoading&&0===r.results.endIndex),T(1),B("ngIf",!r.isLoading&&r.results.endIndex>0))},dependencies:[Si,_r,gk,hC]}),e})();function Rk(e,t){1&e&&(A(0,"div",14)(1,"div",15)(2,"p",16),pe(3,"span",17),K(4," Loading degrees"),I()()())}let ww=(()=>{class e{constructor(n){this.searchService=n,this.isLoading=!0,this.isFilterVisible=!1,this.subscription=this.searchService.isLoading$.subscribe(r=>{this.isLoading=r}),this.subscription=this.searchService.results$.subscribe(r=>{this.results=r}),this.subscription=this.searchService.params$.subscribe(r=>{this.params=r})}toggleFilters(){this.isFilterVisible=!this.isFilterVisible}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(v(So))},e.\u0275cmp=Pt({type:e,selectors:[["app-home"]],decls:22,vars:3,consts:[[1,"container","mb-5"],[1,"row"],[1,"col-md-5","col-lg-4","mb-2","degree-search-sidebar"],[1,"text-center","d-md-none","mt-4",3,"ngClass"],[1,"btn","btn-sm","text-transform-none","btn-outline-secondary","px-5",3,"click"],["aria-hidden","true",1,"fa","fa-filter"],[1,"bg-faded","px-4","py-2","mr-md-4","d-none","d-md-block",3,"ngClass"],[1,"close","d-md-none",3,"click"],[1,"pb-2","mt-4"],["href","https://www.ucf.edu/online/",1,"ml-2","mr-3"],[1,"fa","fa-external-link","text-primary"],["href","https://www.ucf.edu/online/",1,"d-inline-block","mr-2","custom-control-description"],["id","searchResults","role","region","aria-live","polite",1,"col-md-7","col-lg-8"],["class","row mb-4 mt-4",4,"ngIf"],[1,"row","mb-4","mt-4"],[1,"col-md-12"],[1,"mb-0"],[1,"fa","fa-spinner","fa-spin"]],template:function(n,r){1&n&&(pe(0,"app-search-form"),A(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"button",4),fe("click",function(){return r.toggleFilters()}),pe(6,"span",5),K(7," Filter "),I()(),A(8,"div",6)(9,"span",7),fe("click",function(){return r.toggleFilters()}),K(10,"x"),I(),pe(11,"app-program-types"),A(12,"p",8)(13,"a",9),pe(14,"span",10),I(),A(15,"a",11),K(16," Online Programs"),I()(),pe(17,"hr")(18,"app-colleges"),I()(),A(19,"div",12),oe(20,Rk,5,0,"div",13),pe(21,"app-search-results"),I()()()),2&n&&(T(4),B("ngClass",r.isFilterVisible?"d-none":""),T(4),B("ngClass",r.isFilterVisible?"d-block":"d-none"),T(12),B("ngIf",r.isLoading))},dependencies:[bi,_r,WP,tO,lk,Nk]}),e})();const Fk=[{path:"**",component:ww}];let Pk=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({imports:[cC.forRoot(Fk),cC]}),e})(),Ok=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=Pt({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(n,r){1&n&&pe(0,"app-home")},dependencies:[ww]}),e})(),kk=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e,bootstrap:[Ok]}),e.\u0275inj=ht({imports:[Pk,UN,fR,XO]}),e})();(function hx(){kv=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */)(),HN().bootstrapModule(kk).catch(e=>console.error(e))}},le=>{le(le.s=659)}]);