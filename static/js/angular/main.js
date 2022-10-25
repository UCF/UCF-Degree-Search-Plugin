"use strict";(self.webpackChunkDegree_Search=self.webpackChunkDegree_Search||[]).push([[179],{316:()=>{function ie(e){return"function"==typeof e}function bo(e){const n=e(r=>{Error.call(r),r.stack=(new Error).stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}const zi=bo(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:\n${n.map((r,o)=>`${o+1}) ${r.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=n});function Dr(e,t){if(e){const n=e.indexOf(t);0<=n&&e.splice(n,1)}}class lt{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;const{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(const i of n)i.remove(this);else n.remove(this);const{initialTeardown:r}=this;if(ie(r))try{r()}catch(i){t=i instanceof zi?i.errors:[i]}const{_finalizers:o}=this;if(o){this._finalizers=null;for(const i of o)try{jf(i)}catch(s){t=t??[],s instanceof zi?t=[...t,...s.errors]:t.push(s)}}if(t)throw new zi(t)}}add(t){var n;if(t&&t!==this)if(this.closed)jf(t);else{if(t instanceof lt){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(t)}}_hasParent(t){const{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){const{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){const{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&Dr(n,t)}remove(t){const{_finalizers:n}=this;n&&Dr(n,t),t instanceof lt&&t._removeParent(this)}}lt.EMPTY=(()=>{const e=new lt;return e.closed=!0,e})();const Vf=lt.EMPTY;function $f(e){return e instanceof lt||e&&"closed"in e&&ie(e.remove)&&ie(e.add)&&ie(e.unsubscribe)}function jf(e){ie(e)?e():e.unsubscribe()}const Qn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Wi={setTimeout(e,t,...n){const{delegate:r}=Wi;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){const{delegate:t}=Wi;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function Bf(e){Wi.setTimeout(()=>{const{onUnhandledError:t}=Qn;if(!t)throw e;t(e)})}function Hf(){}const Cw=il("C",void 0,void 0);function il(e,t,n){return{kind:e,value:t,error:n}}let Yn=null;function qi(e){if(Qn.useDeprecatedSynchronousErrorHandling){const t=!Yn;if(t&&(Yn={errorThrown:!1,error:null}),e(),t){const{errorThrown:n,error:r}=Yn;if(Yn=null,n)throw r}}else e()}class sl extends lt{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,$f(t)&&t.add(this)):this.destination=Aw}static create(t,n,r){return new So(t,n,r)}next(t){this.isStopped?ll(function Ew(e){return il("N",e,void 0)}(t),this):this._next(t)}error(t){this.isStopped?ll(function ww(e){return il("E",void 0,e)}(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?ll(Cw,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const Sw=Function.prototype.bind;function al(e,t){return Sw.call(e,t)}class Mw{constructor(t){this.partialObserver=t}next(t){const{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){Ki(r)}}error(t){const{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){Ki(r)}else Ki(t)}complete(){const{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){Ki(n)}}}class So extends sl{constructor(t,n,r){let o;if(super(),ie(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&Qn.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&al(t.next,i),error:t.error&&al(t.error,i),complete:t.complete&&al(t.complete,i)}):o=t}this.destination=new Mw(o)}}function Ki(e){Qn.useDeprecatedSynchronousErrorHandling?function bw(e){Qn.useDeprecatedSynchronousErrorHandling&&Yn&&(Yn.errorThrown=!0,Yn.error=e)}(e):Bf(e)}function ll(e,t){const{onStoppedNotification:n}=Qn;n&&Wi.setTimeout(()=>n(e,t))}const Aw={closed:!0,next:Hf,error:function Iw(e){throw e},complete:Hf},ul="function"==typeof Symbol&&Symbol.observable||"@@observable";function xn(e){return e}function Uf(e){return 0===e.length?xn:1===e.length?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}let ve=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){const r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){const i=function Nw(e){return e&&e instanceof sl||function xw(e){return e&&ie(e.next)&&ie(e.error)&&ie(e.complete)}(e)&&$f(e)}(n)?n:new So(n,r,o);return qi(()=>{const{operator:s,source:a}=this;i.add(s?s.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return new(r=Gf(r))((o,i)=>{const s=new So({next:a=>{try{n(a)}catch(l){i(l),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return null===(r=this.source)||void 0===r?void 0:r.subscribe(n)}[ul](){return this}pipe(...n){return Uf(n)(this)}toPromise(n){return new(n=Gf(n))((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return e.create=t=>new e(t),e})();function Gf(e){var t;return null!==(t=e??Qn.Promise)&&void 0!==t?t:Promise}const Rw=bo(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});let ut=(()=>{class e extends ve{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){const r=new zf(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new Rw}next(n){qi(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const r of this.currentObservers)r.next(n)}})}error(n){qi(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;const{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){qi(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return(null===(n=this.observers)||void 0===n?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){const{hasError:r,isStopped:o,observers:i}=this;return r||o?Vf:(this.currentObservers=null,i.push(n),new lt(()=>{this.currentObservers=null,Dr(i,n)}))}_checkFinalizedStatuses(n){const{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){const n=new ve;return n.source=this,n}}return e.create=(t,n)=>new zf(t,n),e})();class zf extends ut{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.next)||void 0===r||r.call(n,t)}error(t){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.error)||void 0===r||r.call(n,t)}complete(){var t,n;null===(n=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===n||n.call(t)}_subscribe(t){var n,r;return null!==(r=null===(n=this.source)||void 0===n?void 0:n.subscribe(t))&&void 0!==r?r:Vf}}function Wf(e){return ie(e?.lift)}function Ee(e){return t=>{if(Wf(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function _e(e,t,n,r,o){return new Fw(e,t,n,r,o)}class Fw extends sl{constructor(t,n,r,o,i,s){super(t),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(l){t.error(l)}}:super._next,this._error=o?function(a){try{o(a)}catch(l){t.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){t.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:n}=this;super.unsubscribe(),!n&&(null===(t=this.onFinalize)||void 0===t||t.call(this))}}}function U(e,t){return Ee((n,r)=>{let o=0;n.subscribe(_e(r,i=>{r.next(e.call(t,i,o++))}))})}function Jn(e){return this instanceof Jn?(this.v=e,this):new Jn(e)}function kw(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,r=n.apply(e,t||[]),i=[];return o={},s("next"),s("throw"),s("return"),o[Symbol.asyncIterator]=function(){return this},o;function s(f){r[f]&&(o[f]=function(h){return new Promise(function(p,g){i.push([f,h,p,g])>1||a(f,h)})})}function a(f,h){try{!function l(f){f.value instanceof Jn?Promise.resolve(f.value.v).then(u,c):d(i[0][2],f)}(r[f](h))}catch(p){d(i[0][3],p)}}function u(f){a("next",f)}function c(f){a("throw",f)}function d(f,h){f(h),i.shift(),i.length&&a(i[0][0],i[0][1])}}function Lw(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,t=e[Symbol.asyncIterator];return t?t.call(e):(e=function Zf(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(e),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(a,l){!function o(i,s,a,l){Promise.resolve(l).then(function(u){i({value:u,done:a})},s)}(a,l,(s=e[i](s)).done,s.value)})}}}const Qf=e=>e&&"number"==typeof e.length&&"function"!=typeof e;function Yf(e){return ie(e?.then)}function Jf(e){return ie(e[ul])}function Xf(e){return Symbol.asyncIterator&&ie(e?.[Symbol.asyncIterator])}function eh(e){return new TypeError(`You provided ${null!==e&&"object"==typeof e?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}const th=function $w(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}();function nh(e){return ie(e?.[th])}function rh(e){return kw(this,arguments,function*(){const n=e.getReader();try{for(;;){const{value:r,done:o}=yield Jn(n.read());if(o)return yield Jn(void 0);yield yield Jn(r)}}finally{n.releaseLock()}})}function oh(e){return ie(e?.getReader)}function Rt(e){if(e instanceof ve)return e;if(null!=e){if(Jf(e))return function jw(e){return new ve(t=>{const n=e[ul]();if(ie(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(e);if(Qf(e))return function Bw(e){return new ve(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}(e);if(Yf(e))return function Hw(e){return new ve(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,Bf)})}(e);if(Xf(e))return ih(e);if(nh(e))return function Uw(e){return new ve(t=>{for(const n of e)if(t.next(n),t.closed)return;t.complete()})}(e);if(oh(e))return function Gw(e){return ih(rh(e))}(e)}throw eh(e)}function ih(e){return new ve(t=>{(function zw(e,t){var n,r,o,i;return function Pw(e,t,n,r){return new(n||(n=Promise))(function(i,s){function a(c){try{u(r.next(c))}catch(d){s(d)}}function l(c){try{u(r.throw(c))}catch(d){s(d)}}function u(c){c.done?i(c.value):function o(i){return i instanceof n?i:new n(function(s){s(i)})}(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}(this,void 0,void 0,function*(){try{for(n=Lw(e);!(r=yield n.next()).done;)if(t.next(r.value),t.closed)return}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}t.complete()})})(e,t).catch(n=>t.error(n))})}function an(e,t,n,r=0,o=!1){const i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function Ve(e,t,n=1/0){return ie(t)?Ve((r,o)=>U((i,s)=>t(r,i,o,s))(Rt(e(r,o))),n):("number"==typeof t&&(n=t),Ee((r,o)=>function Ww(e,t,n,r,o,i,s,a){const l=[];let u=0,c=0,d=!1;const f=()=>{d&&!l.length&&!u&&t.complete()},h=g=>u<r?p(g):l.push(g),p=g=>{i&&t.next(g),u++;let v=!1;Rt(n(g,c++)).subscribe(_e(t,y=>{o?.(y),i?h(y):t.next(y)},()=>{v=!0},void 0,()=>{if(v)try{for(u--;l.length&&u<r;){const y=l.shift();s?an(t,s,()=>p(y)):p(y)}f()}catch(y){t.error(y)}}))};return e.subscribe(_e(t,h,()=>{d=!0,f()})),()=>{a?.()}}(r,o,e,n)))}function Cr(e=1/0){return Ve(xn,e)}const ln=new ve(e=>e.complete());function dl(e){return e[e.length-1]}function sh(e){return ie(dl(e))?e.pop():void 0}function Mo(e){return function Kw(e){return e&&ie(e.schedule)}(dl(e))?e.pop():void 0}function ah(e,t=0){return Ee((n,r)=>{n.subscribe(_e(r,o=>an(r,e,()=>r.next(o),t),()=>an(r,e,()=>r.complete(),t),o=>an(r,e,()=>r.error(o),t)))})}function lh(e,t=0){return Ee((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function uh(e,t){if(!e)throw new Error("Iterable cannot be null");return new ve(n=>{an(n,t,()=>{const r=e[Symbol.asyncIterator]();an(n,t,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function be(e,t){return t?function tE(e,t){if(null!=e){if(Jf(e))return function Qw(e,t){return Rt(e).pipe(lh(t),ah(t))}(e,t);if(Qf(e))return function Jw(e,t){return new ve(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}(e,t);if(Yf(e))return function Yw(e,t){return Rt(e).pipe(lh(t),ah(t))}(e,t);if(Xf(e))return uh(e,t);if(nh(e))return function Xw(e,t){return new ve(n=>{let r;return an(n,t,()=>{r=e[th](),an(n,t,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){return void n.error(s)}i?n.complete():n.next(o)},0,!0)}),()=>ie(r?.return)&&r.return()})}(e,t);if(oh(e))return function eE(e,t){return uh(rh(e),t)}(e,t)}throw eh(e)}(e,t):Rt(e)}function fl(e,t,...n){if(!0===t)return void e();if(!1===t)return;const r=new So({next:()=>{r.unsubscribe(),e()}});return t(...n).subscribe(r)}
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
       */function ne(e){for(let t in e)if(e[t]===ne)return t;throw Error("Could not find renamed property on target object.")}function hl(e,t){for(const n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function re(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(re).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function pl(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const oE=ne({__forward_ref__:ne});function se(e){return e.__forward_ref__=se,e.toString=function(){return re(this())},e}function F(e){return gl(e)?e():e}function gl(e){return"function"==typeof e&&e.hasOwnProperty(oE)&&e.__forward_ref__===se}
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
class C extends Error{constructor(t,n){super(function Zi(e,t){return`NG0${Math.abs(e)}${t?": "+t.trim():""}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t,n)),this.code=t}}function k(e){return"string"==typeof e?e:null==e?"":String(e)}function Qi(e,t){throw new C(-201,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function dt(e,t){null==e&&function J(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}(t,e,null,"!=")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function x(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function ft(e){return{providers:e.providers||[],imports:e.imports||[]}}function Yi(e){return ch(e,Ji)||ch(e,fh)}function ch(e,t){return e.hasOwnProperty(t)?e[t]:null}function dh(e){return e&&(e.hasOwnProperty(ml)||e.hasOwnProperty(hE))?e[ml]:null}const Ji=ne({\u0275prov:ne}),ml=ne({\u0275inj:ne}),fh=ne({ngInjectableDef:ne}),hE=ne({ngInjectorDef:ne});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var N=(()=>((N=N||{})[N.Default=0]="Default",N[N.Host=1]="Host",N[N.Self=2]="Self",N[N.SkipSelf=4]="SkipSelf",N[N.Optional=8]="Optional",N))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let yl;function wt(e){const t=yl;return yl=e,t}function hh(e,t,n){const r=Yi(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&N.Optional?null:void 0!==t?t:void Qi(re(e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Nn(e){return{toString:e}.toString()}
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
const oe=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),wr={},Y=[],Xi=ne({\u0275cmp:ne}),vl=ne({\u0275dir:ne}),_l=ne({\u0275pipe:ne}),ph=ne({\u0275mod:ne}),cn=ne({\u0275fac:ne}),Io=ne({__NG_ELEMENT_ID__:ne});
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
let gE=0;function Rn(e){return Nn(()=>{const n=!0===e.standalone,r={},o={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===Ft.OnPush,directiveDefs:null,pipeDefs:null,standalone:n,dependencies:n&&e.dependencies||null,getStandaloneInjector:null,selectors:e.selectors||Y,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||Kt.Emulated,id:"c"+gE++,styles:e.styles||Y,_:null,setInput:null,schemas:e.schemas||null,tView:null},i=e.dependencies,s=e.features;return o.inputs=yh(e.inputs,r),o.outputs=yh(e.outputs),s&&s.forEach(a=>a(o)),o.directiveDefs=i?()=>("function"==typeof i?i():i).map(gh).filter(mh):null,o.pipeDefs=i?()=>("function"==typeof i?i():i).map(Qe).filter(mh):null,o})}function gh(e){return X(e)||Ze(e)}function mh(e){return null!==e}function Et(e){return Nn(()=>({type:e.type,bootstrap:e.bootstrap||Y,declarations:e.declarations||Y,imports:e.imports||Y,exports:e.exports||Y,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function yh(e,t){if(null==e)return wr;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const P=Rn;function X(e){return e[Xi]||null}function Ze(e){return e[vl]||null}function Qe(e){return e[_l]||null}function ht(e,t){const n=e[ph]||null;if(!n&&!0===t)throw new Error(`Type ${re(e)} does not have '\u0275mod' property.`);return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const B=11;
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
function it(e){return Array.isArray(e)&&"object"==typeof e[1]}function Ot(e){return Array.isArray(e)&&!0===e[1]}function wl(e){return 0!=(8&e.flags)}function rs(e){return 2==(2&e.flags)}function os(e){return 1==(1&e.flags)}function kt(e){return null!==e.template}function CE(e){return 0!=(256&e[2])}
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
function rr(e,t){return e.hasOwnProperty(cn)?e[cn]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class bE{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function St(){return Dh}function Dh(e){return e.type.prototype.ngOnChanges&&(e.setInput=ME),SE}function SE(){const e=wh(this),t=e?.current;if(t){const n=e.previous;if(n===wr)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function ME(e,t,n,r){const o=wh(e)||function IE(e,t){return e[Ch]=t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,{previous:wr,current:null}),i=o.current||(o.current={}),s=o.previous,a=this.declaredInputs[n],l=s[a];i[a]=new bE(l&&l.currentValue,t,s===wr),e[r]=t}St.ngInherit=!0;const Ch="__ngSimpleChanges__";function wh(e){return e[Ch]||null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Se(e){for(;Array.isArray(e);)e=e[0];return e}function is(e,t){return Se(t[e])}function It(e,t){return Se(t[e.index])}function Il(e,t){return e.data[t]}function gt(e,t){const n=t[e];return it(n)?n:n[0]}function ss(e){return 64==(64&e[2])}function Fn(e,t){return null==t?null:e[t]}function Eh(e){e[18]=0}function Al(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const O={lFrame:Fh(null),bindingsEnabled:!0};function Sh(){return O.bindingsEnabled}function _(){return O.lFrame.lView}function K(){return O.lFrame.tView}function Ar(e){return O.lFrame.contextLView=e,e[8]}function Tr(e){return O.lFrame.contextLView=null,e}function Ne(){let e=Mh();for(;null!==e&&64===e.type;)e=e.parent;return e}function Mh(){return O.lFrame.currentTNode}function Zt(e,t){const n=O.lFrame;n.currentTNode=e,n.isParent=t}function Tl(){return O.lFrame.isParent}function xl(){O.lFrame.isParent=!1}function xr(){return O.lFrame.bindingIndex++}function fn(e){const t=O.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function HE(e,t){const n=O.lFrame;n.bindingIndex=n.bindingRootIndex=e,Nl(t)}function Nl(e){O.lFrame.currentDirectiveIndex=e}function Fl(e){O.lFrame.currentQueryIndex=e}function GE(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function Nh(e,t,n){if(n&N.SkipSelf){let o=t,i=e;for(;!(o=o.parent,null!==o||n&N.Host||(o=GE(i),null===o||(i=i[15],10&o.type))););if(null===o)return!1;t=o,e=i}const r=O.lFrame=Rh();return r.currentTNode=t,r.lView=e,!0}function Pl(e){const t=Rh(),n=e[1];O.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function Rh(){const e=O.lFrame,t=null===e?null:e.child;return null===t?Fh(e):t}function Fh(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function Ph(){const e=O.lFrame;return O.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const Oh=Ph;function Ol(){const e=Ph();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Je(){return O.lFrame.selectedIndex}function Pn(e){O.lFrame.selectedIndex=e}function ge(){const e=O.lFrame;return Il(e.tView,e.selectedIndex)}function as(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:u,ngOnDestroy:c}=i;s&&(e.contentHooks||(e.contentHooks=[])).push(-n,s),a&&((e.contentHooks||(e.contentHooks=[])).push(n,a),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,a)),l&&(e.viewHooks||(e.viewHooks=[])).push(-n,l),u&&((e.viewHooks||(e.viewHooks=[])).push(n,u),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,u)),null!=c&&(e.destroyHooks||(e.destroyHooks=[])).push(n,c)}}function ls(e,t,n){kh(e,t,3,n)}function us(e,t,n,r){(3&e[2])===n&&kh(e,t,n,r)}function kl(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function kh(e,t,n,r){const i=r??-1,s=t.length-1;let a=0;for(let l=void 0!==r?65535&e[18]:0;l<s;l++)if("number"==typeof t[l+1]){if(a=t[l],null!=r&&a>=r)break}else t[l]<0&&(e[18]+=65536),(a<i||-1==i)&&(XE(e,n,t,l),e[18]=(4294901760&e[18])+l+2),l++}function XE(e,t,n,r){const o=n[r]<0,i=n[r+1],a=e[o?-n[r]:n[r]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{i.call(a)}finally{}}}else try{i.call(a)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Fo{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function cs(e,t,n){let r=0;for(;r<n.length;){const o=n[r];if("number"==typeof o){if(0!==o)break;r++;const i=n[r++],s=n[r++],a=n[r++];e.setAttribute(t,s,a,i)}else{const i=o,s=n[++r];Vh(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function Lh(e){return 3===e||4===e||6===e}function Vh(e){return 64===e.charCodeAt(0)}function ds(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||$h(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function $h(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const a=e[i++];if("number"==typeof a){if(a===t){s=-1;break}if(a>t){s=i-1;break}}}for(;i<e.length;){const a=e[i];if("number"==typeof a)break;if(a===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function jh(e){return-1!==e}function Nr(e){return 32767&e}function Rr(e,t){let n=function ob(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Vl=!0;function fs(e){const t=Vl;return Vl=e,t}let ib=0;const Qt={};function Oo(e,t){const n=jl(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,$l(r.data,e),$l(t,null),$l(r.blueprint,null));const o=hs(e,t),i=e.injectorIndex;if(jh(o)){const s=Nr(o),a=Rr(o,t),l=a[1].data;for(let u=0;u<8;u++)t[i+u]=a[s+u]|l[s+u]}return t[i+8]=o,i}function $l(e,t){e.push(0,0,0,0,0,0,0,0,t)}function jl(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function hs(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){if(r=Zh(o),null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function ps(e,t,n){!function sb(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Io)&&(r=n[Io]),null==r&&(r=n[Io]=ib++);const o=255&r;t.data[e+(o>>5)]|=1<<o}(e,t,n)}function Uh(e,t,n){if(n&N.Optional||void 0!==e)return e;Qi()}function Gh(e,t,n,r){if(n&N.Optional&&void 0===r&&(r=null),0==(n&(N.Self|N.Host))){const o=e[9],i=wt(void 0);try{return o?o.get(t,r,n&N.Optional):hh(t,r,n&N.Optional)}finally{wt(i)}}return Uh(r,0,n)}function zh(e,t,n,r=N.Default,o){if(null!==e){if(1024&t[2]){const s=function db(e,t,n,r,o){let i=e,s=t;for(;null!==i&&null!==s&&1024&s[2]&&!(256&s[2]);){const a=Wh(i,s,n,r|N.Self,Qt);if(a!==Qt)return a;let l=i.parent;if(!l){const u=s[21];if(u){const c=u.get(n,Qt,r);if(c!==Qt)return c}l=Zh(s),s=s[15]}i=l}return o}(e,t,n,r,Qt);if(s!==Qt)return s}const i=Wh(e,t,n,r,Qt);if(i!==Qt)return i}return Gh(t,n,r,o)}function Wh(e,t,n,r,o){const i=function ub(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(Io)?e[Io]:void 0;return"number"==typeof t?t>=0?255&t:cb:t}(n);if("function"==typeof i){if(!Nh(t,e,r))return r&N.Host?Uh(o,0,r):Gh(t,n,r,o);try{const s=i(r);if(null!=s||r&N.Optional)return s;Qi()}finally{Oh()}}else if("number"==typeof i){let s=null,a=jl(e,t),l=-1,u=r&N.Host?t[16][6]:null;for((-1===a||r&N.SkipSelf)&&(l=-1===a?hs(e,t):t[a+8],-1!==l&&Kh(r,!1)?(s=t[1],a=Nr(l),t=Rr(l,t)):a=-1);-1!==a;){const c=t[1];if(qh(i,a,c.data)){const d=lb(a,t,n,s,r,u);if(d!==Qt)return d}l=t[a+8],-1!==l&&Kh(r,t[1].data[a+8]===u)&&qh(i,a,t)?(s=c,a=Nr(l),t=Rr(l,t)):a=-1}}return o}function lb(e,t,n,r,o,i){const s=t[1],a=s.data[e+8],c=function gs(e,t,n,r,o){const i=e.providerIndexes,s=t.data,a=1048575&i,l=e.directiveStart,c=i>>20,f=o?a+c:e.directiveEnd;for(let h=r?a:a+c;h<f;h++){const p=s[h];if(h<l&&n===p||h>=l&&p.type===n)return h}if(o){const h=s[l];if(h&&kt(h)&&h.type===n)return l}return null}(a,s,n,null==r?rs(a)&&Vl:r!=s&&0!=(3&a.type),o&N.Host&&i===a);return null!==c?ko(t,s,c,a):Qt}function ko(e,t,n,r){let o=e[n];const i=t.data;if(function eb(e){return e instanceof Fo}(o)){const s=o;s.resolving&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function iE(e,t){const n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new C(-200,`Circular dependency in DI detected for ${e}${n}`)}(function Q(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():k(e)}(i[n]));const a=fs(s.canSeeViewProviders);s.resolving=!0;const l=s.injectImpl?wt(s.injectImpl):null;Nh(e,r,N.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function JE(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const s=Dh(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==l&&wt(l),fs(a),s.resolving=!1,Oh()}}return o}function qh(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function Kh(e,t){return!(e&N.Self||e&N.Host&&t)}class Fr{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return zh(this._tNode,this._lView,t,r,n)}}function cb(){return new Fr(Ne(),_())}function Bl(e){return gl(e)?()=>{const t=Bl(F(e));return t&&t()}:rr(e)}function Zh(e){const t=e[1],n=t.type;return 2===n?t.declTNode:1===n?e[6]:null}
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
const Or="__parameters__";function Lr(e,t,n){return Nn(()=>{const r=function Hl(e){return function(...n){if(e){const r=e(...n);for(const o in r)this[o]=r[o]}}}(t);function o(...i){if(this instanceof o)return r.apply(this,i),this;const s=new o(...i);return a.annotation=s,a;function a(l,u,c){const d=l.hasOwnProperty(Or)?l[Or]:Object.defineProperty(l,Or,{value:[]})[Or];for(;d.length<=c;)d.push(null);return(d[c]=d[c]||[]).push(s),l}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class I{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=x({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function hn(e,t){e.forEach(n=>Array.isArray(n)?hn(n,t):t(n))}function Yh(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function ms(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function yt(e,t,n){let r=Vr(e,t);return r>=0?e[1|r]=n:(r=~r,function gb(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(1===o)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function Gl(e,t){const n=Vr(e,t);if(n>=0)return e[1|n]}function Vr(e,t){return function ep(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}
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
const Bo={},Wl="__NG_DI_FLAG__",vs="ngTempTokenPath",Eb=/\n/gm,tp="__source";let Ho;function $r(e){const t=Ho;return Ho=e,t}function Sb(e,t=N.Default){if(void 0===Ho)throw new C(-203,!1);return null===Ho?hh(e,void 0,t):Ho.get(e,t&N.Optional?null:void 0,t)}function M(e,t=N.Default){return(function pE(){return yl}()||Sb)(F(e),t)}function De(e,t=N.Default){return"number"!=typeof t&&(t=0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)),M(e,t)}function ql(e){const t=[];for(let n=0;n<e.length;n++){const r=F(e[n]);if(Array.isArray(r)){if(0===r.length)throw new C(900,!1);let o,i=N.Default;for(let s=0;s<r.length;s++){const a=r[s],l=Mb(a);"number"==typeof l?-1===l?o=a.token:i|=l:o=a}t.push(M(o,i))}else t.push(M(r))}return t}function Uo(e,t){return e[Wl]=t,e.prototype[Wl]=t,e}function Mb(e){return e[Wl]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Go=Uo(Lr("Optional"),8),zo=Uo(Lr("SkipSelf"),4);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Zl;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class pp{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}function kn(e){return e instanceof pp?e.changingThisBreaksApplicationSecurity:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Qb=/^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var Me=(()=>((Me=Me||{})[Me.NONE=0]="NONE",Me[Me.HTML=1]="HTML",Me[Me.STYLE=2]="STYLE",Me[Me.SCRIPT=3]="SCRIPT",Me[Me.URL=4]="URL",Me[Me.RESOURCE_URL=5]="RESOURCE_URL",Me))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ln(e){const t=function Qo(){const e=_();return e&&e[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();return t?t.sanitize(Me.URL,e)||"":function Ko(e,t){const n=function Wb(e){return e instanceof pp&&e.getTypeName()||null}(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}(e,"URL")?kn(e):function Jl(e){return(e=String(e)).match(Qb)?e:"unsafe:"+e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(k(e))}const nu=new I("ENVIRONMENT_INITIALIZER"),wp=new I("INJECTOR",-1),Ep=new I("INJECTOR_DEF_TYPES");
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
class bp{get(t,n=Bo){if(n===Bo){const r=new Error(`NullInjectorError: No provider for ${re(t)}!`);throw r.name="NullInjectorError",r}return n}}
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
       */function d0(...e){return{\u0275providers:Sp(0,e)}}function Sp(e,...t){const n=[],r=new Set;let o;return hn(t,i=>{const s=i;ru(s,n,[],r)&&(o||(o=[]),o.push(s))}),void 0!==o&&Mp(o,n),n}function Mp(e,t){for(let n=0;n<e.length;n++){const{providers:o}=e[n];hn(o,i=>{t.push(i)})}}function ru(e,t,n,r){if(!(e=F(e)))return!1;let o=null,i=dh(e);const s=!i&&X(e);if(i||s){if(s&&!s.standalone)return!1;o=e}else{const l=e.ngModule;if(i=dh(l),!i)return!1;o=l}const a=r.has(o);if(s){if(a)return!1;if(r.add(o),s.dependencies){const l="function"==typeof s.dependencies?s.dependencies():s.dependencies;for(const u of l)ru(u,t,n,r)}}else{if(!i)return!1;{if(null!=i.imports&&!a){let u;r.add(o);try{hn(i.imports,c=>{ru(c,t,n,r)&&(u||(u=[]),u.push(c))})}finally{}void 0!==u&&Mp(u,t)}if(!a){const u=rr(o)||(()=>new o);t.push({provide:o,useFactory:u,deps:Y},{provide:Ep,useValue:o,multi:!0},{provide:nu,useValue:()=>M(o),multi:!0})}const l=i.providers;null==l||a||hn(l,c=>{t.push(c)})}}return o!==e&&void 0!==e.providers}const f0=ne({provide:String,useValue:ne});function ou(e){return null!==e&&"object"==typeof e&&f0 in e}function or(e){return"function"==typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const iu=new I("Set Injector scope."),bs={},p0={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let su;function Ss(){return void 0===su&&(su=new bp),su}class Vn{}class Tp extends Vn{constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,lu(t,s=>this.processProvider(s)),this.records.set(wp,Hr(void 0,this)),o.has("environment")&&this.records.set(Vn,Hr(void 0,this));const i=this.records.get(iu);null!=i&&"string"==typeof i.value&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(Ep.multi,Y,N.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const t of this._ngOnDestroyHooks)t.ngOnDestroy();for(const t of this._onDestroyHooks)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(t){this._onDestroyHooks.push(t)}runInContext(t){this.assertNotDestroyed();const n=$r(this),r=wt(void 0);try{return t()}finally{$r(n),wt(r)}}get(t,n=Bo,r=N.Default){this.assertNotDestroyed();const o=$r(this),i=wt(void 0);try{if(!(r&N.SkipSelf)){let a=this.records.get(t);if(void 0===a){const l=function _0(e){return"function"==typeof e||"object"==typeof e&&e instanceof I}(t)&&Yi(t);a=l&&this.injectableDefInScope(l)?Hr(au(t),bs):null,this.records.set(t,a)}if(null!=a)return this.hydrate(t,a)}return(r&N.Self?Ss():this.parent).get(t,n=r&N.Optional&&n===Bo?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[vs]=s[vs]||[]).unshift(re(t)),o)throw s;return function Ib(e,t,n,r){const o=e[vs];throw t[tp]&&o.unshift(t[tp]),e.message=function Ab(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.slice(2):e;let o=re(t);if(Array.isArray(t))o=t.map(re).join(" -> ");else if("object"==typeof t){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let a=t[s];i.push(s+":"+("string"==typeof a?JSON.stringify(a):re(a)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(Eb,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e[vs]=null,e}(s,t,"R3InjectorError",this.source)}throw s}finally{wt(i),$r(o)}}resolveInjectorInitializers(){const t=$r(this),n=wt(void 0);try{const r=this.get(nu.multi,Y,N.Self);for(const o of r)o()}finally{$r(t),wt(n)}}toString(){const t=[],n=this.records;for(const r of n.keys())t.push(re(r));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new C(205,!1)}processProvider(t){let n=or(t=F(t))?t:F(t&&t.provide);const r=function m0(e){return ou(e)?Hr(void 0,e.useValue):Hr(xp(e),bs)}(t);if(or(t)||!0!==t.multi)this.records.get(n);else{let o=this.records.get(n);o||(o=Hr(void 0,bs,!0),o.factory=()=>ql(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n){return n.value===bs&&(n.value=p0,n.value=n.factory()),"object"==typeof n.value&&n.value&&function v0(e){return null!==e&&"object"==typeof e&&"function"==typeof e.ngOnDestroy}(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}injectableDefInScope(t){if(!t.providedIn)return!1;const n=F(t.providedIn);return"string"==typeof n?"any"===n||this.scopes.has(n):this.injectorDefTypes.has(n)}}function au(e){const t=Yi(e),n=null!==t?t.factory:rr(e);if(null!==n)return n;if(e instanceof I)throw new C(204,!1);if(e instanceof Function)return function g0(e){const t=e.length;if(t>0)throw function jo(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}(t,"?"),new C(204,!1);const n=function dE(e){const t=e&&(e[Ji]||e[fh]);if(t){const n=function fE(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new C(204,!1)}function xp(e,t,n){let r;if(or(e)){const o=F(e);return rr(o)||au(o)}if(ou(e))r=()=>F(e.useValue);else if(function Ap(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...ql(e.deps||[]));else if(function Ip(e){return!(!e||!e.useExisting)}(e))r=()=>M(F(e.useExisting));else{const o=F(e&&(e.useClass||e.provide));if(!function y0(e){return!!e.deps}(e))return rr(o)||au(o);r=()=>new o(...ql(e.deps))}return r}function Hr(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function D0(e){return!!e.\u0275providers}function lu(e,t){for(const n of e)Array.isArray(n)?lu(n,t):D0(n)?lu(n.\u0275providers,t):t(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Np{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class E0{resolveComponentFactory(t){throw function w0(e){const t=Error(`No component factory found for ${re(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let Yo=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.NULL=new E0,e})();function b0(){return Ur(Ne(),_())}function Ur(e,t){return new vt(It(e,t))}let vt=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=b0,e})();class Fp{}let gn=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function M0(){const e=_(),n=gt(Ne().index,e);return(it(n)?n:e)[B]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),e})(),I0=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=x({token:e,providedIn:"root",factory:()=>null}),e})();class Jo{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const A0=new Jo("14.2.3"),uu={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function pu(e){return e.ngOriginalError}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Gr{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&pu(t);for(;n&&pu(n);)n=pu(n);return n||null}}
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
const gu=new Map;let j0=0;const yu="__ngContext__";function Ge(e,t){it(t)?(e[yu]=t[20],function H0(e){gu.set(e[20],e)}(t)):e[yu]=t}function mn(e){return e instanceof Function?e():e}
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
var st=(()=>((st=st||{})[st.Important=1]="Important",st[st.DashCase=2]="DashCase",st))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _u(e,t){return undefined(e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ei(e){const t=e[3];return Ot(t)?t[3]:t}function Du(e){return qp(e[13])}function Cu(e){return qp(e[4])}function qp(e){for(;null!==e&&!Ot(e);)e=e[4];return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Wr(e,t,n,r,o){if(null!=r){let i,s=!1;Ot(r)?i=r:it(r)&&(s=!0,r=r[0]);const a=Se(r);0===e&&null!==n?null==o?Xp(t,n,a):ir(t,n,a,o||null,!0):1===e&&null!==n?ir(t,n,a,o||null,!0):2===e?function sg(e,t,n){const r=Ms(e,t);r&&function gS(e,t,n,r){e.removeChild(t,n,r)}(e,r,t,n)}(t,a,s):3===e&&t.destroyNode(a),null!=i&&function vS(e,t,n,r,o){const i=n[7];i!==Se(n)&&Wr(t,e,r,i,o);for(let a=10;a<n.length;a++){const l=n[a];ti(l[1],l,e,t,r,i)}}(t,e,i,n,o)}}function Eu(e,t,n){return e.createElement(t,n)}function Zp(e,t){const n=e[9],r=n.indexOf(t),o=t[3];512&t[2]&&(t[2]&=-513,Al(o,-1)),n.splice(r,1)}function bu(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&Zp(o,r),t>0&&(e[n-1][4]=r[4]);const i=ms(e,10+t);!function aS(e,t){ti(e,t,t[B],2,null,null),t[0]=null,t[6]=null}(r[1],r);const s=i[19];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-65}return r}function Qp(e,t){if(!(128&t[2])){const n=t[B];n.destroyNode&&ti(e,t,n,3,null,null),function cS(e){let t=e[13];if(!t)return Su(e[1],e);for(;t;){let n=null;if(it(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)it(t)&&Su(t[1],t),t=t[3];null===t&&(t=e),it(t)&&Su(t[1],t),n=t&&t[4]}t=n}}(t)}}function Su(e,t){if(!(128&t[2])){t[2]&=-65,t[2]|=128,function pS(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const o=t[n[r]];if(!(o instanceof Fo)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const a=o[i[s]],l=i[s+1];try{l.call(a)}finally{}}else try{i.call(o)}finally{}}}}(e,t),function hS(e,t){const n=e.cleanup,r=t[7];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+1],a="function"==typeof s?s(t):Se(t[s]),l=r[o=n[i+2]],u=n[i+3];"boolean"==typeof u?a.removeEventListener(n[i],l,u):u>=0?r[o=u]():r[o=-u].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++)(0,r[i])();t[7]=null}}(e,t),1===t[1].type&&t[B].destroy();const n=t[17];if(null!==n&&Ot(t[3])){n!==t[3]&&Zp(n,t);const r=t[19];null!==r&&r.detachView(e)}!function U0(e){gu.delete(e[20])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)}}function Yp(e,t,n){return function Jp(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const o=e.data[r.directiveStart].encapsulation;if(o===Kt.None||o===Kt.Emulated)return null}return It(r,n)}(e,t.parent,n)}function ir(e,t,n,r,o){e.insertBefore(t,n,r,o)}function Xp(e,t,n){e.appendChild(t,n)}function eg(e,t,n,r,o){null!==r?ir(e,t,n,r,o):Xp(e,t,n)}function Ms(e,t){return e.parentNode(t)}let rg=function ng(e,t,n){return 40&e.type?It(e,n):null};function Is(e,t,n,r){const o=Yp(e,r,t),i=t[B],a=function tg(e,t,n){return rg(e,t,n)}(r.parent||t[6],r,t);if(null!=o)if(Array.isArray(n))for(let l=0;l<n.length;l++)eg(i,o,n[l],a,!1);else eg(i,o,n,a,!1)}function As(e,t){if(null!==t){const n=t.type;if(3&n)return It(t,e);if(4&n)return Iu(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return As(e,r);{const o=e[t.index];return Ot(o)?Iu(-1,o):Se(o)}}if(32&n)return _u(t,e)()||Se(e[t.index]);{const r=ig(e,t);return null!==r?Array.isArray(r)?r[0]:As(ei(e[16]),r):As(e,t.next)}}return null}function ig(e,t){return null!==t?e[16][6].projection[t.projection]:null}function Iu(e,t){const n=10+e+1;if(n<t.length){const r=t[n],o=r[1].firstChild;if(null!==o)return As(r,o)}return t[7]}function Au(e,t,n,r,o,i,s){for(;null!=n;){const a=r[n.index],l=n.type;if(s&&0===t&&(a&&Ge(Se(a),r),n.flags|=4),64!=(64&n.flags))if(8&l)Au(e,t,n.child,r,o,i,!1),Wr(t,e,o,a,i);else if(32&l){const u=_u(n,r);let c;for(;c=u();)Wr(t,e,o,c,i);Wr(t,e,o,a,i)}else 16&l?ag(e,t,r,n,o,i):Wr(t,e,o,a,i);n=s?n.projectionNext:n.next}}function ti(e,t,n,r,o,i){Au(n,r,e.firstChild,t,o,i,!1)}function ag(e,t,n,r,o,i){const s=n[16],l=s[6].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++)Wr(t,e,o,l[u],i);else Au(e,t,l,s[3],o,i,!0)}function lg(e,t,n){e.setAttribute(t,"style",n)}function Tu(e,t,n){""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ug(e,t,n){let r=e.length;for(;;){const o=e.indexOf(t,n);if(-1===o)return o;if(0===o||e.charCodeAt(o-1)<=32){const i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const cg="ng-template";function DS(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==ug(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function dg(e){return 4===e.type&&e.value!==cg}function CS(e,t,n){return t===(4!==e.type||n?e.value:cg)}function wS(e,t,n){let r=4;const o=e.attrs||[],i=function SS(e){for(let t=0;t<e.length;t++)if(Lh(e[t]))return t;return e.length}(o);let s=!1;for(let a=0;a<t.length;a++){const l=t[a];if("number"!=typeof l){if(!s)if(4&r){if(r=2|1&r,""!==l&&!CS(e,l,n)||""===l&&1===t.length){if(Lt(r))return!1;s=!0}}else{const u=8&r?l:t[++a];if(8&r&&null!==e.attrs){if(!DS(e.attrs,u,n)){if(Lt(r))return!1;s=!0}continue}const d=ES(8&r?"class":l,o,dg(e),n);if(-1===d){if(Lt(r))return!1;s=!0;continue}if(""!==u){let f;f=d>i?"":o[d+1].toLowerCase();const h=8&r?f:null;if(h&&-1!==ug(h,u,0)||2&r&&u!==f){if(Lt(r))return!1;s=!0}}}}else{if(!s&&!Lt(r)&&!Lt(l))return!1;if(s&&Lt(l))continue;s=!1,r=l|1&r}}return Lt(r)||s}function Lt(e){return 0==(1&e)}function ES(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){const s=t[o];if(s===e)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let a=t[++o];for(;"string"==typeof a;)a=t[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function MS(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function fg(e,t,n=!1){for(let r=0;r<t.length;r++)if(wS(e,t[r],n))return!0;return!1}function hg(e,t){return e?":not("+t.trim()+")":t}function AS(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const a=e[++n];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!Lt(s)&&(t+=hg(i,o),o=""),r=s,i=i||!Lt(r);n++}return""!==o&&(t+=hg(i,o)),t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const L={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function G(e){pg(K(),_(),Je()+e,!1)}function pg(e,t,n,r){if(!r)if(3==(3&t[2])){const i=e.preOrderCheckHooks;null!==i&&ls(t,i,n)}else{const i=e.preOrderHooks;null!==i&&us(t,i,0,n)}Pn(n)}
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
function vg(e,t=null,n=null,r){const o=_g(e,t,n,r);return o.resolveInjectorInitializers(),o}function _g(e,t=null,n=null,r,o=new Set){const i=[n||Y,d0(e)];return r=r||("object"==typeof e?void 0:re(e)),new Tp(i,t||Ss(),r||null,o)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}let _t=(()=>{class e{static create(n,r){if(Array.isArray(n))return vg({name:""},r,n,"");{var o;const i=null!==(o=n.name)&&void 0!==o?o:"";return vg({name:i},n.parent,n.providers,i)}}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.THROW_IF_NOT_FOUND=Bo,e.NULL=new bp,e.\u0275prov=x({token:e,providedIn:"any",factory:()=>M(wp)}),e.__NG_ELEMENT_ID__=-1,e})();
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
function D(e,t=N.Default){const n=_();return null===n?M(e,t):zh(Ne(),n,F(e),t)}function Pu(){throw new Error("invalid")}
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
function xs(e,t){return e<<17|t<<2}function Vt(e){return e>>17&32767}function Ou(e){return 2|e}function yn(e){return(131068&e)>>2}function ku(e,t){return-131069&e|t<<2}function Lu(e){return 1|e}function kg(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const s=e.data[i];Fl(o),s.contentQueries(2,t[i],i)}}}function Fs(e,t,n,r,o,i,s,a,l,u,c){const d=t.blueprint.slice();return d[0]=o,d[2]=76|r,(null!==c||e&&1024&e[2])&&(d[2]|=1024),Eh(d),d[3]=d[15]=e,d[8]=n,d[10]=s||e&&e[10],d[B]=a||e&&e[B],d[12]=l||e&&e[12]||null,d[9]=u||e&&e[9]||null,d[6]=i,d[20]=function B0(){return j0++}(),d[21]=c,d[16]=2==t.type?e[16]:d,d}function Kr(e,t,n,r,o){let i=e.data[t];if(null===i)i=function zu(e,t,n,r,o){const i=Mh(),s=Tl(),l=e.data[t]=function cM(e,t,n,r,o,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=l),null!==i&&(s?null==i.child&&null!==l.parent&&(i.child=l):null===i.next&&(i.next=l)),l}(e,t,n,r,o),function BE(){return O.lFrame.inI18n}()&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=function Ro(){const e=O.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();i.injectorIndex=null===s?-1:s.injectorIndex}return Zt(i,!0),i}function Zr(e,t,n,r){if(0===n)return-1;const o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function Wu(e,t,n){Pl(t);try{const r=e.viewQuery;null!==r&&ec(1,r,n);const o=e.template;null!==o&&Lg(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&kg(e,t),e.staticViewQueries&&ec(2,e.viewQuery,n);const i=e.components;null!==i&&function aM(e,t){for(let n=0;n<t.length;n++)MM(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,Ol()}}function Ps(e,t,n,r){const o=t[2];if(128!=(128&o)){Pl(t);try{Eh(t),function Ah(e){return O.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&Lg(e,t,n,2,r);const s=3==(3&o);if(s){const u=e.preOrderCheckHooks;null!==u&&ls(t,u,null)}else{const u=e.preOrderHooks;null!==u&&us(t,u,0,null),kl(t,0)}if(function bM(e){for(let t=Du(e);null!==t;t=Cu(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const o=n[r],i=o[3];0==(512&o[2])&&Al(i,1),o[2]|=512}}}(t),function EM(e){for(let t=Du(e);null!==t;t=Cu(t))for(let n=10;n<t.length;n++){const r=t[n],o=r[1];ss(r)&&Ps(o,r,o.template,r[8])}}(t),null!==e.contentQueries&&kg(e,t),s){const u=e.contentCheckHooks;null!==u&&ls(t,u)}else{const u=e.contentHooks;null!==u&&us(t,u,1),kl(t,1)}!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function iM(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)Pn(~o);else{const i=o,s=n[++r],a=n[++r];HE(s,i),a(2,t[i])}}}finally{Pn(-1)}}(e,t);const a=e.components;null!==a&&function sM(e,t){for(let n=0;n<t.length;n++)SM(e,t[n])}(t,a);const l=e.viewQuery;if(null!==l&&ec(2,l,r),s){const u=e.viewCheckHooks;null!==u&&ls(t,u)}else{const u=e.viewHooks;null!==u&&us(t,u,2),kl(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),t[2]&=-41,512&t[2]&&(t[2]&=-513,Al(t[3],-1))}finally{Ol()}}}function Lg(e,t,n,r,o){const i=Je(),s=2&r;try{Pn(-1),s&&t.length>22&&pg(e,t,22,!1),n(r,o)}finally{Pn(i)}}function Vg(e,t,n){if(wl(t)){const o=t.directiveEnd;for(let i=t.directiveStart;i<o;i++){const s=e.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}function qu(e,t,n){!Sh()||(function gM(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||Oo(n,t),Ge(r,t);const s=n.initialInputs;for(let a=o;a<i;a++){const l=e.data[a],u=kt(l);u&&DM(t,n,l);const c=ko(t,e,a,n);Ge(c,t),null!==s&&CM(0,a-o,c,l,0,s),u&&(gt(n.index,t)[8]=c)}}(e,t,n,It(n,t)),128==(128&n.flags)&&function mM(e,t,n){const r=n.directiveStart,o=n.directiveEnd,i=n.index,s=function UE(){return O.lFrame.currentDirectiveIndex}();try{Pn(i);for(let a=r;a<o;a++){const l=e.data[a],u=t[a];Nl(a),(null!==l.hostBindings||0!==l.hostVars||null!==l.hostAttrs)&&zg(l,u)}}finally{Pn(-1),Nl(s)}}(e,t,n))}function Ku(e,t,n=It){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],a=-1===s?n(t,e):e[s];e[o++]=a}}}function $g(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=Zu(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function Zu(e,t,n,r,o,i,s,a,l,u){const c=22+r,d=c+o,f=function lM(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:L);return n}(c,d),h="function"==typeof u?u():u;return f[1]={type:e,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:t,data:f.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:l,consts:h,incompleteFirstPass:!1}}function Bg(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function Hg(e,t){const r=t.directiveEnd,o=e.data,i=t.attrs,s=[];let a=null,l=null;for(let u=t.directiveStart;u<r;u++){const c=o[u],d=c.inputs,f=null===i||dg(t)?null:wM(d,i);s.push(f),a=Bg(d,u,a),l=Bg(c.outputs,u,l)}null!==a&&(a.hasOwnProperty("class")&&(t.flags|=16),a.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=s,t.inputs=a,t.outputs=l}function Dt(e,t,n,r,o,i,s,a){const l=It(t,n);let c,u=t.inputs;!a&&null!=u&&(c=u[r])?(tc(e,n,c,r,o),rs(t)&&Ug(n,t.index)):3&t.type&&(r=function dM(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(r),o=null!=s?s(o,t.value||"",r):o,i.setProperty(l,r,o))}function Ug(e,t){const n=gt(t,e);16&n[2]||(n[2]|=32)}function Qu(e,t,n,r){let o=!1;if(Sh()){const i=function yM(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];fg(n,s.selectors,!1)&&(o||(o=[]),ps(Oo(n,t),e,s.type),kt(s)?(Wg(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){o=!0,qg(n,e.data.length,i.length);for(let c=0;c<i.length;c++){const d=i[c];d.providersResolver&&d.providersResolver(d)}let a=!1,l=!1,u=Zr(e,t,i.length,null);for(let c=0;c<i.length;c++){const d=i[c];n.mergedAttrs=ds(n.mergedAttrs,d.hostAttrs),Kg(e,n,t,u,d),_M(u,d,s),null!==d.contentQueries&&(n.flags|=8),(null!==d.hostBindings||null!==d.hostAttrs||0!==d.hostVars)&&(n.flags|=128);const f=d.type.prototype;!a&&(f.ngOnChanges||f.ngOnInit||f.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),a=!0),!l&&(f.ngOnChanges||f.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),l=!0),u++}Hg(e,n)}s&&function vM(e,t,n){if(t){const r=e.localNames=[];for(let o=0;o<t.length;o+=2){const i=n[t[o+1]];if(null==i)throw new C(-301,!1);r.push(t[o],i)}}}(n,r,s)}return n.mergedAttrs=ds(n.mergedAttrs,n.attrs),o}function Gg(e,t,n,r,o,i){const s=i.hostBindings;if(s){let a=e.hostBindingOpCodes;null===a&&(a=e.hostBindingOpCodes=[]);const l=~t.index;(function pM(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(a)!=l&&a.push(l),a.push(r,o,s)}}function zg(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Wg(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function _M(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;kt(t)&&(n[""]=e)}}function qg(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Kg(e,t,n,r,o){e.data[r]=o;const i=o.factory||(o.factory=rr(o.type)),s=new Fo(i,kt(o),D);e.blueprint[r]=s,n[r]=s,Gg(e,t,0,r,Zr(e,n,o.hostVars,L),o)}function DM(e,t,n){const r=It(t,e),o=$g(n),i=e[10],s=Os(e,Fs(e,o,null,n.onPush?32:16,r,t,i,i.createRenderer(r,n),null,null,null));e[t.index]=s}function CM(e,t,n,r,o,i){const s=i[t];if(null!==s){const a=r.setInput;for(let l=0;l<s.length;){const u=s[l++],c=s[l++],d=s[l++];null!==a?r.setInput(n,d,u,c):n[c]=d}}}function wM(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function Zg(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function SM(e,t){const n=gt(t,e);if(ss(n)){const r=n[1];48&n[2]?Ps(r,n,r.template,n[8]):n[5]>0&&Ju(n)}}function Ju(e){for(let r=Du(e);null!==r;r=Cu(r))for(let o=10;o<r.length;o++){const i=r[o];if(ss(i))if(512&i[2]){const s=i[1];Ps(s,i,s.template,i[8])}else i[5]>0&&Ju(i)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=gt(n[r],e);ss(o)&&o[5]>0&&Ju(o)}}function MM(e,t){const n=gt(t,e),r=n[1];(function IM(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),Wu(r,n,n[8])}function Os(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function Xu(e){for(;e;){e[2]|=32;const t=ei(e);if(CE(e)&&!t)return e;e=t}return null}function ks(e,t,n,r=!0){const o=t[10];o.begin&&o.begin();try{Ps(e,t,e.template,n)}catch(s){throw r&&Xg(t,s),s}finally{o.end&&o.end()}}function ec(e,t,n){Fl(0),t(e,n)}function Qg(e){return e[7]||(e[7]=[])}function Yg(e){return e.cleanup||(e.cleanup=[])}function Xg(e,t){const n=e[9],r=n?n.get(Gr,null):null;r&&r.handleError(t)}function tc(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],a=n[i++],l=t[s],u=e.data[s];null!==u.setInput?u.setInput(l,o,r,a):l[a]=o}}function vn(e,t,n){const r=is(t,e);!function Kp(e,t,n){e.setValue(t,n)}(e[B],r,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ls(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let s=0;s<t.length;s++){const a=t[s];"number"==typeof a?i=a:1==i?o=pl(o,a):2==i&&(r=pl(r,a+": "+t[++s]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Vs(e,t,n,r,o=!1){for(;null!==n;){const i=t[n.index];if(null!==i&&r.push(Se(i)),Ot(i))for(let a=10;a<i.length;a++){const l=i[a],u=l[1].firstChild;null!==u&&Vs(l[1],l,u,r)}const s=n.type;if(8&s)Vs(e,t,n.child,r);else if(32&s){const a=_u(n,t);let l;for(;l=a();)r.push(l)}else if(16&s){const a=ig(t,n);if(Array.isArray(a))r.push(...a);else{const l=ei(t[16]);Vs(l[1],l,a,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ni{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return Vs(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(Ot(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(bu(t,r),ms(n,r))}this._attachedToViewContainer=!1}Qp(this._lView[1],this._lView)}onDestroy(t){!function jg(e,t,n,r){const o=Qg(t);null===n?o.push(r):(o.push(n),e.firstCreatePass&&Yg(e).push(r,o.length-1))}(this._lView[1],this._lView,null,t)}markForCheck(){Xu(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){ks(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new C(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function uS(e,t){ti(e,t,t[B],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new C(902,!1);this._appRef=t}}class AM extends ni{constructor(t){super(t),this._view=t}detectChanges(){const t=this._view;ks(t[1],t,t[8],!1)}checkNoChanges(){}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class nc extends Yo{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=X(t);return new ri(n,this.ngModule)}}function em(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}class xM{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){const o=this.injector.get(t,uu,r);return o!==uu||n===uu?o:this.parentInjector.get(t,n,r)}}class ri extends Np{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=function TS(e){return e.map(AS).join(",")}(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return em(this.componentDef.inputs)}get outputs(){return em(this.componentDef.outputs)}create(t,n,r,o){var i;let s=(o=o||this.ngModule)instanceof Vn?o:null===(i=o)||void 0===i?void 0:i.injector;s&&null!==this.componentDef.getStandaloneInjector&&(s=this.componentDef.getStandaloneInjector(s)||s);const a=s?new xM(t,s):t,l=a.get(Fp,null);if(null===l)throw new C(407,!1);const u=a.get(I0,null),c=l.createRenderer(null,this.componentDef),d=this.componentDef.selectors[0][0]||"div",f=r?function uM(e,t,n){return e.selectRootElement(t,n===Kt.ShadowDom)}(c,r,this.componentDef.encapsulation):Eu(l.createRenderer(null,this.componentDef),d,function TM(e){const t=e.toLowerCase();return"svg"===t?"svg":"math"===t?"math":null}(d)),h=this.componentDef.onPush?288:272,p=Zu(0,null,null,1,0,null,null,null,null,null),g=Fs(null,p,null,h,null,null,l,c,u,a,null);let v,y;Pl(g);try{const w=function FM(e,t,n,r,o,i){const s=n[1];n[22]=e;const l=Kr(s,22,2,"#host",null),u=l.mergedAttrs=t.hostAttrs;null!==u&&(Ls(l,u,!0),null!==e&&(cs(o,e,u),null!==l.classes&&Tu(o,e,l.classes),null!==l.styles&&lg(o,e,l.styles)));const c=r.createRenderer(e,t),d=Fs(n,$g(t),null,t.onPush?32:16,n[22],l,r,c,i||null,null,null);return s.firstCreatePass&&(ps(Oo(l,n),s,t.type),Wg(s,l),qg(l,n.length,1)),Os(n,d),n[22]=d}(f,this.componentDef,g,l,c);if(f)if(r)cs(c,f,["ng-version",A0.full]);else{const{attrs:m,classes:b}=function xS(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!Lt(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);m&&cs(c,f,m),b&&b.length>0&&Tu(c,f,b.join(" "))}if(y=Il(p,22),void 0!==n){const m=y.projection=[];for(let b=0;b<this.ngContentSelectors.length;b++){const $=n[b];m.push(null!=$?Array.from($):null)}}v=function PM(e,t,n,r){const o=n[1],i=function hM(e,t,n){const r=Ne();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Kg(e,r,t,Zr(e,t,1,null),n),Hg(e,r));const o=ko(t,e,r.directiveStart,r);Ge(o,t);const i=It(r,t);return i&&Ge(i,t),o}(o,n,t);if(e[8]=n[8]=i,null!==r)for(const a of r)a(i,t);if(t.contentQueries){const a=Ne();t.contentQueries(1,i,a.directiveStart)}const s=Ne();return!o.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(Pn(s.index),Gg(n[1],s,0,s.directiveStart,s.directiveEnd,t),zg(t,i)),i}(w,this.componentDef,g,[OM]),Wu(p,g,null)}finally{Ol()}return new RM(this.componentType,v,Ur(y,g),g,y)}}class RM extends class C0{}{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.instance=n,this.hostView=this.changeDetectorRef=new AM(o),this.componentType=t}setInput(t,n){const r=this._tNode.inputs;let o;if(null!==r&&(o=r[t])){const i=this._rootLView;tc(i[1],i,o,t,n),Ug(i,this._tNode.index)}}get injector(){return new Fr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}function OM(){const e=Ne();as(_()[1],e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ee(e){let t=function tm(e){return Object.getPrototypeOf(e.prototype).constructor}(e.type),n=!0;const r=[e];for(;t;){let o;if(kt(e))o=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new C(903,!1);o=t.\u0275dir}if(o){if(n){r.push(o);const s=e;s.inputs=rc(e.inputs),s.declaredInputs=rc(e.declaredInputs),s.outputs=rc(e.outputs);const a=o.hostBindings;a&&$M(e,a);const l=o.viewQuery,u=o.contentQueries;if(l&&LM(e,l),u&&VM(e,u),hl(e.inputs,o.inputs),hl(e.declaredInputs,o.declaredInputs),hl(e.outputs,o.outputs),kt(o)&&o.data.animation){const c=e.data;c.animation=(c.animation||[]).concat(o.data.animation)}}const i=o.features;if(i)for(let s=0;s<i.length;s++){const a=i[s];a&&a.ngInherit&&a(e),a===ee&&(n=!1)}}t=Object.getPrototypeOf(t)}!function kM(e){let t=0,n=null;for(let r=e.length-1;r>=0;r--){const o=e[r];o.hostVars=t+=o.hostVars,o.hostAttrs=ds(o.hostAttrs,n=ds(n,o.hostAttrs))}}(r)}function rc(e){return e===wr?{}:e===Y?[]:e}function LM(e,t){const n=e.viewQuery;e.viewQuery=n?(r,o)=>{t(r,o),n(r,o)}:t}function VM(e,t){const n=e.contentQueries;e.contentQueries=n?(r,o,i)=>{t(r,o,i),n(r,o,i)}:t}function $M(e,t){const n=e.hostBindings;e.hostBindings=n?(r,o)=>{t(r,o),n(r,o)}:t}
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
let $s=null;function sr(){if(!$s){const e=oe.Symbol;if(e&&e.iterator)$s=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&($s=r)}}}return $s}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function oi(e){return!!oc(e)&&(Array.isArray(e)||!(e instanceof Map)&&sr()in e)}function oc(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ze(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}function js(e,t,n,r,o){const i=function ar(e,t,n,r){const o=ze(e,t,n);return ze(e,t+1,r)||o}(e,t,n,r);return ze(e,t+2,o)||i}function Yr(e,t,n,r){return ze(e,xr(),n)?t+k(n)+r:L}function Xr(e,t,n,r,o,i,s,a){const u=js(e,function dn(){return O.lFrame.bindingIndex}(),n,o,s);return fn(3),u?t+k(n)+r+k(o)+i+k(s)+a:L}function Ce(e,t,n,r,o,i,s,a){const l=_(),u=K(),c=e+22,d=u.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function qM(e,t,n,r,o,i,s,a,l){const u=t.consts,c=Kr(t,e,4,s||null,Fn(u,a));Qu(t,n,c,Fn(u,l)),as(t,c);const d=c.tViews=Zu(2,c,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,u);return null!==t.queries&&(t.queries.template(t,c),d.queries=t.queries.embeddedTView(c)),c}(c,u,l,t,n,r,o,i,s):u.data[c];Zt(d,!1);const f=l[B].createComment("");Is(u,l,f,d),Ge(f,l),Os(l,l[c]=Zg(f,l,f,d)),os(d)&&qu(u,l,d),null!=s&&Ku(l,d,a)}
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
function te(e,t,n){const r=_();return ze(r,xr(),t)&&Dt(K(),ge(),r,e,t,r[B],n,!1),te}function ic(e,t,n,r,o){const s=o?"class":"style";tc(e,n,t.inputs[s],s,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Z(e,t,n,r){const o=_(),i=K(),s=22+e,a=o[B],l=o[s]=Eu(a,t,function YE(){return O.lFrame.currentNamespace}()),u=i.firstCreatePass?function QM(e,t,n,r,o,i,s){const a=t.consts,u=Kr(t,e,2,o,Fn(a,i));return Qu(t,n,u,Fn(a,s)),null!==u.attrs&&Ls(u,u.attrs,!1),null!==u.mergedAttrs&&Ls(u,u.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,u),u}(s,i,o,0,t,n,r):i.data[s];Zt(u,!0);const c=u.mergedAttrs;null!==c&&cs(a,l,c);const d=u.classes;null!==d&&Tu(a,l,d);const f=u.styles;return null!==f&&lg(a,l,f),64!=(64&u.flags)&&Is(i,o,l,u),0===function OE(){return O.lFrame.elementDepthCount}()&&Ge(l,o),function kE(){O.lFrame.elementDepthCount++}(),os(u)&&(qu(i,o,u),Vg(i,u,o)),null!==r&&Ku(o,u),Z}function q(){let e=Ne();Tl()?xl():(e=e.parent,Zt(e,!1));const t=e;!function LE(){O.lFrame.elementDepthCount--}();const n=K();return n.firstCreatePass&&(as(n,e),wl(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function nb(e){return 0!=(16&e.flags)}(t)&&ic(n,t,_(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function rb(e){return 0!=(32&e.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)&&ic(n,t,_(),t.stylesWithoutHost,!1),q}function Ct(e,t,n,r){return Z(e,t,n,r),q(),Ct
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function io(e,t,n){const r=_(),o=K(),i=e+22,s=o.firstCreatePass?function YM(e,t,n,r,o){const i=t.consts,s=Fn(i,r),a=Kr(t,e,8,"ng-container",s);return null!==s&&Ls(a,s,!0),Qu(t,n,a,Fn(i,o)),null!==t.queries&&t.queries.elementStart(t,a),a}(i,o,r,t,n):o.data[i];Zt(s,!0);const a=r[i]=r[B].createComment("");return Is(o,r,a,s),Ge(a,r),os(s)&&(qu(o,r,s),Vg(o,s,r)),null!=n&&Ku(r,s),io}function so(){let e=Ne();const t=K();return Tl()?xl():(e=e.parent,Zt(e,!1)),t.firstCreatePass&&(as(t,e),wl(e)&&t.queries.elementEnd(e)),so}function ao(){return _()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function si(e){return!!e&&"function"==typeof e.then}const sc=function fm(e){return!!e&&"function"==typeof e.subscribe};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Le(e,t,n,r){const o=_(),i=K(),s=Ne();return function pm(e,t,n,r,o,i,s,a){const l=os(r),c=e.firstCreatePass&&Yg(e),d=t[8],f=Qg(t);let h=!0;if(3&r.type||a){const v=It(r,t),y=a?a(v):v,w=f.length,m=a?$=>a(Se($[r.index])):r.index;let b=null;if(!a&&l&&(b=function JM(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const a=t[7],l=o[i+2];return a.length>l?a[l]:null}"string"==typeof s&&(i+=2)}return null}(e,t,o,r.index)),null!==b)(b.__ngLastListenerFn__||b).__ngNextListenerFn__=i,b.__ngLastListenerFn__=i,h=!1;else{i=mm(r,t,d,i,!1);const $=n.listen(y,o,i);f.push(i,$),c&&c.push(o,m,w,w+1)}}else i=mm(r,t,d,i,!1);const p=r.outputs;let g;if(h&&null!==p&&(g=p[o])){const v=g.length;if(v)for(let y=0;y<v;y+=2){const de=t[g[y]][g[y+1]].subscribe(i),_r=f.length;f.push(i,de),c&&c.push(o,r.index,_r,-(_r+1))}}}(i,o,o[B],s,e,t,0,r),Le}function gm(e,t,n,r){try{return!1!==n(r)}catch(o){return Xg(e,o),!1}}function mm(e,t,n,r,o){return function i(s){if(s===Function)return r;Xu(2&e.flags?gt(e.index,t):t);let l=gm(t,0,r,s),u=i.__ngNextListenerFn__;for(;u;)l=gm(t,0,u,s)&&l,u=u.__ngNextListenerFn__;return o&&!1===l&&(s.preventDefault(),s.returnValue=!1),l}}
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
       */function Ie(e=1){return function zE(e){return(O.lFrame.contextLView=function WE(e,t){for(;e>0;)t=t[15],e--;return t}(e,O.lFrame.contextLView))[8]}(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Bs(e,t,n){return lo(e,"",t,"",n),Bs}function lo(e,t,n,r,o){const i=_(),s=Yr(i,t,n,r);return s!==L&&Dt(K(),ge(),i,e,s,i[B],o,!1),lo}function Sm(e,t,n,r,o){const i=e[n+1],s=null===t;let a=r?Vt(i):yn(i),l=!1;for(;0!==a&&(!1===l||s);){const c=e[a+1];oI(e[a],t)&&(l=!0,e[a+1]=r?Lu(c):Ou(c)),a=r?Vt(c):yn(c)}l&&(e[n+1]=r?Ou(i):Lu(i))}function oI(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&Vr(e,t)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Hs(e,t){return function $t(e,t,n,r){const o=_(),i=K(),s=fn(2);i.firstUpdatePass&&function Pm(e,t,n,r){const o=e.data;if(null===o[n+1]){const i=o[Je()],s=function Fm(e,t){return t>=e.expandoStartIndex}(e,n);(function Vm(e,t){return 0!=(e.flags&(t?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */)(i,r)&&null===t&&!s&&(t=!1),t=function hI(e,t,n,r){const o=function Rl(e){const t=O.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let i=r?t.residualClasses:t.residualStyles;if(null===o)0===(r?t.classBindings:t.styleBindings)&&(n=ai(n=ac(null,e,t,n,r),t.attrs,r),i=null);else{const s=t.directiveStylingLast;if(-1===s||e[s]!==o)if(n=ac(o,e,t,n,r),null===i){let l=function pI(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==yn(r))return e[Vt(r)]}(e,t,r);void 0!==l&&Array.isArray(l)&&(l=ac(null,e,t,l[1],r),l=ai(l,t.attrs,r),function gI(e,t,n,r){e[Vt(n?t.classBindings:t.styleBindings)]=r}(e,t,r,l))}else i=function mI(e,t,n){let r;const o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++)r=ai(r,e[i].hostAttrs,n);return ai(r,t.attrs,n)}(e,t,r)}return void 0!==i&&(r?t.residualClasses=i:t.residualStyles=i),n}(o,i,t,r),function nI(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,a=Vt(s),l=yn(s);e[r]=n;let c,u=!1;if(Array.isArray(n)){const d=n;c=d[1],(null===c||Vr(d,c)>0)&&(u=!0)}else c=n;if(o)if(0!==l){const f=Vt(e[a+1]);e[r+1]=xs(f,a),0!==f&&(e[f+1]=ku(e[f+1],r)),e[a+1]=function ZS(e,t){return 131071&e|t<<17}(e[a+1],r)}else e[r+1]=xs(a,0),0!==a&&(e[a+1]=ku(e[a+1],r)),a=r;else e[r+1]=xs(l,0),0===a?a=r:e[l+1]=ku(e[l+1],r),l=r;u&&(e[r+1]=Ou(e[r+1])),Sm(e,c,r,!0),Sm(e,c,r,!1),function rI(e,t,n,r,o){const i=o?e.residualClasses:e.residualStyles;null!=i&&"string"==typeof t&&Vr(i,t)>=0&&(n[r+1]=Lu(n[r+1]))}(t,c,e,r,i),s=xs(a,l),i?t.classBindings=s:t.styleBindings=s}(o,i,t,n,s,r)}}(i,e,s,r),t!==L&&ze(o,s,t)&&function km(e,t,n,r,o,i,s,a){if(!(3&t.type))return;const l=e.data,u=l[a+1];Us(function Ag(e){return 1==(1&e)}(u)?Lm(l,t,n,o,yn(u),s):void 0)||(Us(i)||function Ig(e){return 2==(2&e)}(u)&&(i=Lm(l,null,n,o,a,s)),function _S(e,t,n,r,o){if(t)o?e.addClass(n,r):e.removeClass(n,r);else{let i=-1===r.indexOf("-")?void 0:st.DashCase;null==o?e.removeStyle(n,r,i):("string"==typeof o&&o.endsWith("!important")&&(o=o.slice(0,-10),i|=st.Important),e.setStyle(n,r,o,i))}}(r,s,is(Je(),n),o,i))}(i,i.data[Je()],o,o[B],e,o[s+1]=function _I(e,t){return null==e||("string"==typeof t?e+=t:"object"==typeof e&&(e=re(kn(e)))),e}(t,n),r,s)}(e,t,null,!0),Hs}function ac(e,t,n,r,o){let i=null;const s=n.directiveEnd;let a=n.directiveStylingLast;for(-1===a?a=n.directiveStart:a++;a<s&&(i=t[a],r=ai(r,i.hostAttrs,o),i!==e);)a++;return null!==e&&(n.directiveStylingLast=a),r}function ai(e,t,n){const r=n?1:2;let o=-1;if(null!==t)for(let i=0;i<t.length;i++){const s=t[i];"number"==typeof s?o=s:o===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),yt(e,s,!!n||t[++i]))}return void 0===e?null:e}function Lm(e,t,n,r,o,i){const s=null===t;let a;for(;o>0;){const l=e[o],u=Array.isArray(l),c=u?l[1]:l,d=null===c;let f=n[o+1];f===L&&(f=d?Y:void 0);let h=d?Gl(f,r):c===r?f:void 0;if(u&&!Us(h)&&(h=Gl(l,r)),Us(h)&&(a=h,s))return a;const p=e[o+1];o=s?Vt(p):yn(p)}if(null!==t){let l=i?t.residualClasses:t.residualStyles;null!=l&&(a=Gl(l,r))}return a}function Us(e){return void 0!==e}function fe(e,t=""){const n=_(),r=K(),o=e+22,i=r.firstCreatePass?Kr(r,o,1,t,null):r.data[o],s=n[o]=function wu(e,t){return e.createText(t)}(n[B],t);Is(r,n,s,i),Zt(i,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function lc(e){return Bt("",e,""),lc}function Bt(e,t,n){const r=_(),o=Yr(r,e,t,n);return o!==L&&vn(r,Je(),o),Bt}function uc(e,t,n,r,o,i,s){const a=_(),l=Xr(a,e,t,n,r,o,i,s);return l!==L&&vn(a,Je(),l),uc}const fo="en-US";
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
let iy=fo;function fc(e,t,n,r,o){if(e=F(e),Array.isArray(e))for(let i=0;i<e.length;i++)fc(e[i],t,n,r,o);else{const i=K(),s=_();let a=or(e)?e:F(e.provide),l=xp(e);const u=Ne(),c=1048575&u.providerIndexes,d=u.directiveStart,f=u.providerIndexes>>20;if(or(e)||!e.multi){const h=new Fo(l,o,D),p=pc(a,t,o?c:c+f,d);-1===p?(ps(Oo(u,s),i,a),hc(i,e,t.length),t.push(a),u.directiveStart++,u.directiveEnd++,o&&(u.providerIndexes+=1048576),n.push(h),s.push(h)):(n[p]=h,s[p]=h)}else{const h=pc(a,t,c+f,d),p=pc(a,t,c,c+f),g=h>=0&&n[h],v=p>=0&&n[p];if(o&&!v||!o&&!g){ps(Oo(u,s),i,a);const y=function LA(e,t,n,r,o){const i=new Fo(e,n,D);return i.multi=[],i.index=t,i.componentProviders=0,xy(i,o,r&&!n),i}(o?kA:OA,n.length,o,r,l);!o&&v&&(n[p].providerFactory=y),hc(i,e,t.length,0),t.push(a),u.directiveStart++,u.directiveEnd++,o&&(u.providerIndexes+=1048576),n.push(y),s.push(y)}else hc(i,e,h>-1?h:p,xy(n[o?p:h],l,!o&&r));!o&&r&&v&&n[p].componentProviders++}}}function hc(e,t,n,r){const o=or(t),i=function h0(e){return!!e.useClass}(t);if(o||i){const l=(i?F(t.useClass):t).prototype.ngOnDestroy;if(l){const u=e.destroyHooks||(e.destroyHooks=[]);if(!o&&t.multi){const c=u.indexOf(n);-1===c?u.push(n,[r,l]):u[c+1].push(r,l)}else u.push(n,l)}}}function xy(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function pc(e,t,n,r){for(let o=n;o<r;o++)if(t[o]===e)return o;return-1}function OA(e,t,n,r){return gc(this.multi,[])}function kA(e,t,n,r){const o=this.multi;let i;if(this.providerFactory){const s=this.providerFactory.componentProviders,a=ko(n,n[1],this.providerFactory.index,r);i=a.slice(0,s),gc(o,i);for(let l=s;l<a.length;l++)i.push(a[l])}else i=[],gc(o,i);return i}function gc(e,t){for(let n=0;n<e.length;n++)t.push((0,e[n])());return t}function ce(e,t=[]){return n=>{n.providersResolver=(r,o)=>
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
function PA(e,t,n){const r=K();if(r.firstCreatePass){const o=kt(e);fc(n,r.data,r.blueprint,o,!0),fc(t,r.data,r.blueprint,o,!1)}}(r,o?o(e):e,t)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ur{}class Ny{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ry extends ur{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new nc(this);const r=ht(t);this._bootstrapComponents=mn(r.bootstrap),this._r3Injector=_g(t,n,[{provide:ur,useValue:this},{provide:Yo,useValue:this.componentFactoryResolver}],re(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(t)}get injector(){return this._r3Injector}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class mc extends Ny{constructor(t){super(),this.moduleType=t}create(t){return new Ry(this.moduleType,t)}}class $A extends ur{constructor(t,n,r){super(),this.componentFactoryResolver=new nc(this),this.instance=null;const o=new Tp([...t,{provide:ur,useValue:this},{provide:Yo,useValue:this.componentFactoryResolver}],n||Ss(),r,new Set(["environment"]));this.injector=o,o.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}}function Ks(e,t,n=null){return new $A(e,t,n).injector}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let jA=(()=>{class e{constructor(n){this._injector=n,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n.id)){const r=Sp(0,n.type),o=r.length>0?Ks([r],this._injector,`Standalone[${n.type.name}]`):null;this.cachedInjectors.set(n.id,o)}return this.cachedInjectors.get(n.id)}ngOnDestroy(){try{for(const n of this.cachedInjectors.values())null!==n&&n.destroy()}finally{this.cachedInjectors.clear()}}}return e.\u0275prov=x({token:e,providedIn:"environment",factory:()=>new e(M(Vn))}),e})();function Fy(e){e.getStandaloneInjector=t=>t.get(jA).getOrCreateStandaloneInjector(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ho(e,t,n,r){return function jy(e,t,n,r,o,i){const s=t+n;return ze(e,s,o)?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Jt(e,t,n){return e[t]=n}(e,s+1,i?r.call(i,o):r(o)):function hi(e,t){const n=e[t];return n===L?void 0:n}(e,s+1)}(_(),function Ye(){const e=O.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}(),e,t,n,r)}function vc(e){return t=>{setTimeout(e,void 0,t)}}const ye=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class dT extends ut{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&"object"==typeof t){var a,l,u;const d=t;o=null===(a=d.next)||void 0===a?void 0:a.bind(d),i=null===(l=d.error)||void 0===l?void 0:l.bind(d),s=null===(u=d.complete)||void 0===u?void 0:u.bind(d)}this.__isAsync&&(i=vc(i),o&&(o=vc(o)),s&&(s=vc(s)));const c=super.subscribe({next:o,error:i,complete:s});return t instanceof lt&&t.add(c),c}};
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
let _n=(()=>{class e{}return e.__NG_ELEMENT_ID__=gT,e})();const hT=_n,pT=class extends hT{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t,n){const r=this._declarationTContainer.tViews,o=Fs(this._declarationLView,r,t,16,null,r.declTNode,null,null,null,null,n||null);o[17]=this._declarationLView[this._declarationTContainer.index];const s=this._declarationLView[19];return null!==s&&(o[19]=s.createEmbeddedView(r)),Wu(r,o,t),new ni(o)}};function gT(){return function Zs(e,t){return 4&e.type?new pT(t,e,Ur(e,t)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Ne(),_())}let Ht=(()=>{class e{}return e.__NG_ELEMENT_ID__=mT,e})();function mT(){return function qy(e,t){let n;const r=t[e.index];if(Ot(r))n=r;else{let o;if(8&e.type)o=Se(r);else{const i=t[B];o=i.createComment("");const s=It(e,t);ir(i,Ms(i,s),o,function mS(e,t){return e.nextSibling(t)}(i,s),!1)}t[e.index]=n=Zg(r,t,o,e),Os(t,n)}return new zy(n,e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Ne(),_())}const yT=Ht,zy=class extends yT{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return Ur(this._hostTNode,this._hostLView)}get injector(){return new Fr(this._hostTNode,this._hostLView)}get parentInjector(){const t=hs(this._hostTNode,this._hostLView);if(jh(t)){const n=Rr(t,this._hostLView),r=Nr(t);return new Fr(n[1].data[r+8],n)}return new Fr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=Wy(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){let o,i;"number"==typeof r?o=r:null!=r&&(o=r.index,i=r.injector);const s=t.createEmbeddedView(n||{},i);return this.insert(s,o),s}createComponent(t,n,r,o,i){const s=t&&!function $o(e){return"function"==typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t);let a;if(s)a=n;else{const d=n||{};a=d.index,r=d.injector,o=d.projectableNodes,i=d.environmentInjector||d.ngModuleRef}const l=s?t:new ri(X(t)),u=r||this.parentInjector;if(!i&&null==l.ngModule){const f=(s?u:this.parentInjector).get(Vn,null);f&&(i=f)}const c=l.create(u,o,void 0,i);return this.insert(c.hostView,a),c}insert(t,n){const r=t._lView,o=r[1];if(function PE(e){return Ot(e[3])}(r)){const c=this.indexOf(t);if(-1!==c)this.detach(c);else{const d=r[3],f=new zy(d,d[6],d[3]);f.detach(f.indexOf(t))}}const i=this._adjustIndex(n),s=this._lContainer;!function dS(e,t,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-10?(t[4]=n[o],Yh(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function fS(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const a=t[19];null!==a&&a.insertView(e),t[2]|=64}(o,r,s,i);const a=Iu(i,s),l=r[B],u=Ms(l,s[7]);return null!==u&&function lS(e,t,n,r,o,i){r[0]=o,r[6]=t,ti(e,r,n,1,o,i)}(o,s[6],l,r,u,a),t.attachToViewContainerRef(),Yh(Dc(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=Wy(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=bu(this._lContainer,n);r&&(ms(Dc(this._lContainer),n),Qp(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=bu(this._lContainer,n);return r&&null!=ms(Dc(this._lContainer),n)?new ni(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function Wy(e){return e[8]}function Dc(e){return e[8]||(e[8]=[])}
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
function Ys(...e){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Js=new I("Application Initializer");let Xs=(()=>{class e{constructor(n){this.appInits=n,this.resolve=Ys,this.reject=Ys,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const i=this.appInits[o]();if(si(i))n.push(i);else if(sc(i)){const s=new Promise((a,l)=>{i.subscribe({complete:a,error:l})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(M(Js,8))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const mi=new I("AppId",{providedIn:"root",factory:function yv(){return`${Fc()}${Fc()}${Fc()}`}});function Fc(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const vv=new I("Platform Initializer"),Pc=new I("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),_v=new I("appBootstrapListener");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let qT=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Dn=new I("LocaleId",{providedIn:"root",factory:()=>De(Dn,N.Optional|N.SkipSelf)||function KT(){return typeof $localize<"u"&&$localize.locale||fo}()});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class QT{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let Oc=(()=>{class e{compileModuleSync(n){return new mc(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const r=this.compileModuleSync(n),i=mn(ht(n).declarations).reduce((s,a)=>{const l=X(a);return l&&s.push(new ri(l)),s},[]);return new QT(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const XT=(()=>Promise.resolve(0))();function kc(e){typeof Zone>"u"?XT.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
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
class Pe{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new ye(!1),this.onMicrotaskEmpty=new ye(!1),this.onStable=new ye(!1),this.onError=new ye(!1),typeof Zone>"u")throw new C(908,!1);Zone.assertZonePatched();const o=this;if(o._nesting=0,o._outer=o._inner=Zone.current,Zone.AsyncStackTaggingZoneSpec){const i=Zone.AsyncStackTaggingZoneSpec;o._inner=o._inner.fork(new i("Angular"))}Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function ex(){let e=oe.requestAnimationFrame,t=oe.cancelAnimationFrame;if(typeof Zone<"u"&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function rx(e){const t=()=>{!function nx(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(oe,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,Vc(e),e.isCheckStableRunning=!0,Lc(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),Vc(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,a)=>{try{return wv(e),n.invokeTask(o,i,s,a)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),Ev(e)}},onInvoke:(n,r,o,i,s,a,l)=>{try{return wv(e),n.invoke(o,i,s,a,l)}finally{e.shouldCoalesceRunChangeDetection&&t(),Ev(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(e._hasPendingMicrotasks=i.microTask,Vc(e),Lc(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Pe.isInAngularZone())throw new C(909,!1)}static assertNotInAngularZone(){if(Pe.isInAngularZone())throw new C(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,tx,Ys,Ys);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const tx={};function Lc(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Vc(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function wv(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Ev(e){e._nesting--,Lc(e)}class ox{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new ye,this.onMicrotaskEmpty=new ye,this.onStable=new ye,this.onError=new ye}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const bv=new I(""),ea=new I("");let Bc,$c=(()=>{class e{constructor(n,r,o){this._ngZone=n,this.registry=r,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,Bc||(function ix(e){Bc=e}(o),o.addToWindow(r)),this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Pe.assertNotInAngularZone(),kc(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())kc(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let i=-1;r&&r>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(n){this.registry.registerApplication(n,this)}unregisterApplication(n){this.registry.unregisterApplication(n)}findProviders(n,r,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(M(Pe),M(jc),M(ea))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})(),jc=(()=>{class e{constructor(){this._applications=new Map}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){var o,i;return null!==(o=null===(i=Bc)||void 0===i?void 0:i.findTestabilityInTree(this,n,r))&&void 0!==o?o:null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})(),Bn=null;const Sv=new I("AllowMultipleToken"),Hc=new I("PlatformDestroyListeners");class Mv{constructor(t,n){this.name=t,this.token=n}}function Av(e,t,n=[]){const r=`Platform: ${t}`,o=new I(r);return(i=[])=>{let s=Uc();if(!s||s.injector.get(Sv,!1)){const a=[...n,...i,{provide:o,useValue:!0}];e?e(a):function lx(e){if(Bn&&!Bn.get(Sv,!1))throw new C(400,!1);Bn=e;const t=e.get(xv);(function Iv(e){const t=e.get(vv,null);t&&t.forEach(n=>n())})(e)}(function Tv(e=[],t){return _t.create({name:t,providers:[{provide:iu,useValue:"platform"},{provide:Hc,useValue:new Set([()=>Bn=null])},...e]})}(a,r))}return function cx(e){const t=Uc();if(!t)throw new C(401,!1);return t}()}}function Uc(){var e,t;return null!==(e=null===(t=Bn)||void 0===t?void 0:t.get(xv))&&void 0!==e?e:null}let xv=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const o=function Rv(e,t){let n;return n="noop"===e?new ox:("zone.js"===e?void 0:e)||new Pe(t),n}(r?.ngZone,function Nv(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!e||!e.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!e||!e.ngZoneRunCoalescing)||!1}}(r)),i=[{provide:Pe,useValue:o}];return o.run(()=>{const s=_t.create({providers:i,parent:this.injector,name:n.moduleType.name}),a=n.create(s),l=a.injector.get(Gr,null);if(!l)throw new C(402,!1);return o.runOutsideAngular(()=>{const u=o.onError.subscribe({next:c=>{l.handleError(c)}});a.onDestroy(()=>{na(this._modules,a),u.unsubscribe()})}),function Fv(e,t,n){try{const r=n();return si(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(l,o,()=>{const u=a.injector.get(Xs);return u.runInitializers(),u.donePromise.then(()=>(function sy(e){dt(e,"Expected localeId to be defined"),"string"==typeof e&&(iy=e.toLowerCase().replace(/_/g,"-"))}(a.injector.get(Dn,fo)||fo),this._moduleDoBootstrap(a),a))})})}bootstrapModule(n,r=[]){const o=Pv({},r);return function sx(e,t,n){const r=new mc(n);return Promise.resolve(r)}(0,0,n).then(i=>this.bootstrapModuleFactory(i,o))}_moduleDoBootstrap(n){const r=n.injector.get(ta);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new C(403,!1);n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new C(404,!1);this._modules.slice().forEach(r=>r.destroy()),this._destroyListeners.forEach(r=>r());const n=this._injector.get(Hc,null);n&&(n.forEach(r=>r()),n.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(M(_t))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();function Pv(e,t){return Array.isArray(t)?t.reduce(Pv,e):{...e,...t}}let ta=(()=>{class e{constructor(n,r,o){this._zone=n,this._injector=r,this._exceptionHandler=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const i=new ve(a=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{a.next(this._stable),a.complete()})}),s=new ve(a=>{let l;this._zone.runOutsideAngular(()=>{l=this._zone.onStable.subscribe(()=>{Pe.assertNotInAngularZone(),kc(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,a.next(!0))})})});const u=this._zone.onUnstable.subscribe(()=>{Pe.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{a.next(!1)}))});return()=>{l.unsubscribe(),u.unsubscribe()}});this.isStable=function nE(...e){const t=Mo(e),n=function Zw(e,t){return"number"==typeof dl(e)?e.pop():t}(e,1/0),r=e;return r.length?1===r.length?Rt(r[0]):Cr(n)(be(r,t)):ln}(i,s.pipe(function rE(e={}){const{connector:t=(()=>new ut),resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:o=!0}=e;return i=>{let s,a,l,u=0,c=!1,d=!1;const f=()=>{a?.unsubscribe(),a=void 0},h=()=>{f(),s=l=void 0,c=d=!1},p=()=>{const g=s;h(),g?.unsubscribe()};return Ee((g,v)=>{u++,!d&&!c&&f();const y=l=l??t();v.add(()=>{u--,0===u&&!d&&!c&&(a=fl(p,o))}),y.subscribe(v),!s&&u>0&&(s=new So({next:w=>y.next(w),error:w=>{d=!0,f(),a=fl(h,n,w),y.error(w)},complete:()=>{c=!0,f(),a=fl(h,r),y.complete()}}),Rt(g).subscribe(s))})(i)}}()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(n,r){const o=n instanceof Np;if(!this._injector.get(Xs).done)throw!o&&function Er(e){const t=X(e)||Ze(e)||Qe(e);return null!==t&&t.standalone}(n),new C(405,false);let s;s=o?n:this._injector.get(Yo).resolveComponentFactory(n),this.componentTypes.push(s.componentType);const a=function ax(e){return e.isBoundToModule}(s)?void 0:this._injector.get(ur),u=s.create(_t.NULL,[],r||s.selector,a),c=u.location.nativeElement,d=u.injector.get(bv,null);return d?.registerApplication(c),u.onDestroy(()=>{this.detachView(u.hostView),na(this.components,u),d?.unregisterApplication(c)}),this._loadComponent(u),u}tick(){if(this._runningTick)throw new C(101,!1);try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;na(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(_v,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>na(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new C(406,!1);const n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return e.\u0275fac=function(n){return new(n||e)(M(Pe),M(Vn),M(Gr))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function na(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let kv=!0,ra=(()=>{class e{}return e.__NG_ELEMENT_ID__=hx,e})();function hx(e){return function px(e,t,n){if(rs(e)&&!n){const r=gt(e.index,t);return new ni(r,r)}return 47&e.type?new ni(t[16],t):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Ne(),_(),16==(16&e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Bv{constructor(){}supports(t){return oi(t)}create(t){return new Dx(t)}}const _x=(e,t)=>t;class Dx{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||_x}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){const s=!r||n&&n.currentIndex<Uv(r,o,i)?n:r,a=Uv(s,o,i),l=s.currentIndex;if(s===r)o--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)o++;else{i||(i=[]);const u=a-o,c=l-o;if(u!=c){for(let f=0;f<u;f++){const h=f<i.length?i[f]:i[f]=0,p=h+f;c<=p&&p<u&&(i[f]=h+1)}i[s.previousIndex]=c-u}}a!==l&&t(s,a,l)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!oi(t))throw new C(900,!1);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let o,i,s,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let a=0;a<this.length;a++)i=t[a],s=this._trackByFn(a,i),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,i,s,a)),Object.is(n.item,i)||this._addIdentityChange(n,i)):(n=this._mismatch(n,i,s,a),r=!0),n=n._next}else o=0,function GM(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[sr()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,a=>{s=this._trackByFn(o,a),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,a,s,o)),Object.is(n.item,a)||this._addIdentityChange(n,a)):(n=this._mismatch(n,a,s,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,o){let i;return null===t?i=this._itTail:(i=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,o)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,o)):t=this._addAfter(new Cx(n,r),i,o),t}_verifyReinsertion(t,n,r,o){let i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==i?t=this._reinsertAfter(i,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const o=t._prevRemoved,i=t._nextRemoved;return null===o?this._removalsHead=i:o._nextRemoved=i,null===i?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const o=null===n?this._itHead:n._next;return t._next=o,t._prev=n,null===o?this._itTail=t:o._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new Hv),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Hv),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class Cx{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class wx{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class Hv{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new wx,this.map.set(n,r)),r.add(t)}get(t,n){const o=this.map.get(t);return o?o.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Uv(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class Gv{constructor(){}supports(t){return t instanceof Map||oc(t)}create(){return new Ex}}class Ex{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||oc(t)))throw new C(900,!1)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const i=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,i)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const r=t._prev;return n._next=t,n._prev=r,t._prev=n,r&&(r._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const o=this._records.get(t);this._maybeAddToChanges(o,n);const i=o._prev,s=o._next;return i&&(i._next=s),s&&(s._prev=i),o._next=null,o._prev=null,o}const r=new bx(t);return this._records.set(t,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(r=>n(t[r],r))}}class bx{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zv(){return new sa([new Bv])}let sa=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||zv()),deps:[[e,new zo,new Go]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new C(901,!1)}}return e.\u0275prov=x({token:e,providedIn:"root",factory:zv}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Wv(){return new yi([new Gv])}let yi=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||Wv()),deps:[[e,new zo,new Go]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(r)return r;throw new C(901,!1)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=x({token:e,providedIn:"root",factory:Wv}),e})();const Ix=Av(null,"core",[]);
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
let Ax=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(M(ta))},e.\u0275mod=Et({type:e}),e.\u0275inj=ft({}),e})(),aa=null;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function nn(){return aa}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const nt=new I("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Kc=(()=>{class e{historyGo(n){throw new Error("Not implemented")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:function(){return function Rx(){return M(qv)}()},providedIn:"platform"}),e})();const Fx=new I("Location Initialized");let qv=(()=>{class e extends Kc{constructor(n){super(),this._doc=n,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return nn().getBaseHref(this._doc)}onPopState(n){const r=nn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){const r=nn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(n){this.location.pathname=n}pushState(n,r,o){Kv()?this._history.pushState(n,r,o):this.location.hash=o}replaceState(n,r,o){Kv()?this._history.replaceState(n,r,o):this.location.hash=o}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}}return e.\u0275fac=function(n){return new(n||e)(M(nt))},e.\u0275prov=x({token:e,factory:function(){return function Px(){return new qv(M(nt))}
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
       */()},providedIn:"platform"}),e})();function Kv(){return!!window.history.pushState}function Zc(e,t){if(0==e.length)return t;if(0==t.length)return e;let n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,2==n?e+t.substring(1):1==n?e+t:e+"/"+t}function Zv(e){const t=e.match(/#|\?|$/),n=t&&t.index||e.length;return e.slice(0,n-("/"===e[n-1]?1:0))+e.slice(n)}function En(e){return e&&"?"!==e[0]?"?"+e:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let dr=(()=>{class e{historyGo(n){throw new Error("Not implemented")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:function(){return De(Yv)},providedIn:"root"}),e})();const Qv=new I("appBaseHref");let Yv=(()=>{class e extends dr{constructor(n,r){var o,i,s;super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=null!==(o=null!==(i=r??this._platformLocation.getBaseHrefFromDOM())&&void 0!==i?i:null===(s=De(nt).location)||void 0===s?void 0:s.origin)&&void 0!==o?o:""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Zc(this._baseHref,n)}path(n=!1){const r=this._platformLocation.pathname+En(this._platformLocation.search),o=this._platformLocation.hash;return o&&n?`${r}${o}`:r}pushState(n,r,o,i){const s=this.prepareExternalUrl(o+En(i));this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){const s=this.prepareExternalUrl(o+En(i));this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){var r,o;null===(r=(o=this._platformLocation).historyGo)||void 0===r||r.call(o,n)}}return e.\u0275fac=function(n){return new(n||e)(M(Kc),M(Qv,8))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Ox=(()=>{class e extends dr{constructor(n,r){super(),this._platformLocation=n,this._baseHref="",this._removeListenerFns=[],null!=r&&(this._baseHref=r)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}path(n=!1){let r=this._platformLocation.hash;return null==r&&(r="#"),r.length>0?r.substring(1):r}prepareExternalUrl(n){const r=Zc(this._baseHref,n);return r.length>0?"#"+r:r}pushState(n,r,o,i){let s=this.prepareExternalUrl(o+En(i));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){let s=this.prepareExternalUrl(o+En(i));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){var r,o;null===(r=(o=this._platformLocation).historyGo)||void 0===r||r.call(o,n)}}return e.\u0275fac=function(n){return new(n||e)(M(Kc),M(Qv,8))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})(),Qc=(()=>{class e{constructor(n){this._subject=new ye,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;const r=this._locationStrategy.getBaseHref();this._baseHref=Zv(Jv(r)),this._locationStrategy.onPopState(o=>{this._subject.emit({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){var n;null===(n=this._urlChangeSubscription)||void 0===n||n.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+En(r))}normalize(n){return e.stripTrailingSlash(function Lx(e,t){return e&&t.startsWith(e)?t.substring(e.length):t}(this._baseHref,Jv(n)))}prepareExternalUrl(n){return n&&"/"!==n[0]&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",o=null){this._locationStrategy.pushState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+En(r)),o)}replaceState(n,r="",o=null){this._locationStrategy.replaceState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+En(r)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){var r,o;null===(r=(o=this._locationStrategy).historyGo)||void 0===r||r.call(o,n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)})),()=>{const r=this._urlChangeListeners.indexOf(n);var o;this._urlChangeListeners.splice(r,1),0===this._urlChangeListeners.length&&(null===(o=this._urlChangeSubscription)||void 0===o||o.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(o=>o(n,r))}subscribe(n,r,o){return this._subject.subscribe({next:n,error:r,complete:o})}}return e.normalizeQueryParams=En,e.joinWithSlash=Zc,e.stripTrailingSlash=Zv,e.\u0275fac=function(n){return new(n||e)(M(dr))},e.\u0275prov=x({token:e,factory:function(){return function kx(){return new Qc(M(dr))}()},providedIn:"root"}),e})();
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
       */let sd=(()=>{class e{constructor(n,r,o,i){this._iterableDiffers=n,this._keyValueDiffers=r,this._ngEl=o,this._renderer=i,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(n){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof n?n.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(n){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof n?n.split(/\s+/):n,this._rawClass&&(oi(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const n=this._iterableDiffer.diff(this._rawClass);n&&this._applyIterableChanges(n)}else if(this._keyValueDiffer){const n=this._keyValueDiffer.diff(this._rawClass);n&&this._applyKeyValueChanges(n)}}_applyKeyValueChanges(n){n.forEachAddedItem(r=>this._toggleClass(r.key,r.currentValue)),n.forEachChangedItem(r=>this._toggleClass(r.key,r.currentValue)),n.forEachRemovedItem(r=>{r.previousValue&&this._toggleClass(r.key,!1)})}_applyIterableChanges(n){n.forEachAddedItem(r=>{if("string"!=typeof r.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${re(r.item)}`);this._toggleClass(r.item,!0)}),n.forEachRemovedItem(r=>this._toggleClass(r.item,!1))}_applyClasses(n){n&&(Array.isArray(n)||n instanceof Set?n.forEach(r=>this._toggleClass(r,!0)):Object.keys(n).forEach(r=>this._toggleClass(r,!!n[r])))}_removeClasses(n){n&&(Array.isArray(n)||n instanceof Set?n.forEach(r=>this._toggleClass(r,!1)):Object.keys(n).forEach(r=>this._toggleClass(r,!1)))}_toggleClass(n,r){(n=n.trim())&&n.split(/\s+/g).forEach(o=>{r?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}}return e.\u0275fac=function(n){return new(n||e)(D(sa),D(yi),D(vt),D(gn))},e.\u0275dir=P({type:e,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"},standalone:!0}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class CN{constructor(t,n,r,o){this.$implicit=t,this.ngForOf=n,this.index=r,this.count=o}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let ya=(()=>{class e{constructor(n,r,o){this._viewContainer=n,this._template=r,this._differs=o,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const n=this._ngForOf;!this._differ&&n&&(this._differ=this._differs.find(n).create(this.ngForTrackBy))}if(this._differ){const n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){const r=this._viewContainer;n.forEachOperation((o,i,s)=>{if(null==o.previousIndex)r.createEmbeddedView(this._template,new CN(o.item,this._ngForOf,-1,-1),null===s?void 0:s);else if(null==s)r.remove(null===i?void 0:i);else if(null!==i){const a=r.get(i);r.move(a,s),c_(a,o)}});for(let o=0,i=r.length;o<i;o++){const a=r.get(o).context;a.index=o,a.count=i,a.ngForOf=this._ngForOf}n.forEachIdentityChange(o=>{c_(r.get(o.currentIndex),o)})}static ngTemplateContextGuard(n,r){return!0}}return e.\u0275fac=function(n){return new(n||e)(D(Ht),D(_n),D(sa))},e.\u0275dir=P({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0}),e})();function c_(e,t){e.context.$implicit=t.item}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Di=(()=>{class e{constructor(n,r){this._viewContainer=n,this._context=new EN,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=r}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){d_("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){d_("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,r){return!0}}return e.\u0275fac=function(n){return new(n||e)(D(Ht),D(_n))},e.\u0275dir=P({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0}),e})();class EN{constructor(){this.$implicit=null,this.ngIf=null}}function d_(e,t){if(t&&!t.createEmbeddedView)throw new Error(`${e} must be a TemplateRef, but received '${re(t)}'.`)}
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
let QN=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ft({}),e})();
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
let eR=(()=>{class e{}return e.\u0275prov=x({token:e,providedIn:"root",factory:()=>new tR(M(nt),window)}),e})();class tR{constructor(t,n){this.document=t,this.window=n,this.offset=()=>[0,0]}setOffset(t){this.offset=Array.isArray(t)?()=>t:t}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(t){this.supportsScrolling()&&this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){if(!this.supportsScrolling())return;const n=function nR(e,t){const n=e.getElementById(t)||e.getElementsByName(t)[0];if(n)return n;if("function"==typeof e.createTreeWalker&&e.body&&(e.body.createShadowRoot||e.body.attachShadow)){const r=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT);let o=r.currentNode;for(;o;){const i=o.shadowRoot;if(i){const s=i.getElementById(t)||i.querySelector(`[name="${t}"]`);if(s)return s}o=r.nextNode()}}return null}(this.document,t);n&&(this.scrollToElement(n),n.focus())}setHistoryScrollRestoration(t){if(this.supportScrollRestoration()){const n=this.window.history;n&&n.scrollRestoration&&(n.scrollRestoration=t)}}scrollToElement(t){const n=t.getBoundingClientRect(),r=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,i=this.offset();this.window.scrollTo(r-i[0],o-i[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const t=g_(this.window.history)||g_(Object.getPrototypeOf(this.window.history));return!(!t||!t.writable&&!t.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function g_(e){return Object.getOwnPropertyDescriptor(e,"scrollRestoration")}
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
class hd extends
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
class DR extends class Nx{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function xx(e){aa||(aa=e)}(new hd)}onAndCancel(t,n,r){return t.addEventListener(n,r,!1),()=>{t.removeEventListener(n,r,!1)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,n){return(n=n||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return"window"===n?window:"document"===n?t:"body"===n?t.body:null}getBaseHref(t){const n=function CR(){return wi=wi||document.querySelector("base"),wi?wi.getAttribute("href"):null}();return null==n?null:function wR(e){_a=_a||document.createElement("a"),_a.setAttribute("href",e);const t=_a.pathname;return"/"===t.charAt(0)?t:`/${t}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}resetBaseElement(){wi=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return a_(document.cookie,t)}}let _a,wi=null;const D_=new I("TRANSITION_ID"),bR=[{provide:Js,useFactory:function ER(e,t,n){return()=>{n.get(Xs).donePromise.then(()=>{const r=nn(),o=t.querySelectorAll(`style[ng-transition="${e}"]`);for(let i=0;i<o.length;i++)r.remove(o[i])})}},deps:[D_,nt,_t],multi:!0}];let MR=(()=>{class e{build(){return new XMLHttpRequest}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Da=new I("EventManagerPlugins");let Ca=(()=>{class e{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(o=>o.manager=this),this._plugins=n.slice().reverse()}addEventListener(n,r,o){return this._findPluginFor(r).addEventListener(n,r,o)}addGlobalEventListener(n,r,o){return this._findPluginFor(r).addGlobalEventListener(n,r,o)}getZone(){return this._zone}_findPluginFor(n){const r=this._eventNameToPlugin.get(n);if(r)return r;const o=this._plugins;for(let i=0;i<o.length;i++){const s=o[i];if(s.supports(n))return this._eventNameToPlugin.set(n,s),s}throw new Error(`No event manager plugin found for event ${n}`)}}return e.\u0275fac=function(n){return new(n||e)(M(Da),M(Pe))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();class C_{constructor(t){this._doc=t}addGlobalEventListener(t,n,r){const o=nn().getGlobalEventTarget(this._doc,t);if(!o)throw new Error(`Unsupported event target ${o} for event ${n}`);return this.addEventListener(o,n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let w_=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(n){const r=new Set;n.forEach(o=>{this._stylesSet.has(o)||(this._stylesSet.add(o),r.add(o))}),this.onStylesAdded(r)}onStylesAdded(n){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})(),Ei=(()=>{class e extends w_{constructor(n){super(),this._doc=n,this._hostNodes=new Map,this._hostNodes.set(n.head,[])}_addStylesToHost(n,r,o){n.forEach(i=>{const s=this._doc.createElement("style");s.textContent=i,o.push(r.appendChild(s))})}addHost(n){const r=[];this._addStylesToHost(this._stylesSet,n,r),this._hostNodes.set(n,r)}removeHost(n){const r=this._hostNodes.get(n);r&&r.forEach(E_),this._hostNodes.delete(n)}onStylesAdded(n){this._hostNodes.forEach((r,o)=>{this._addStylesToHost(n,o,r)})}ngOnDestroy(){this._hostNodes.forEach(n=>n.forEach(E_))}}return e.\u0275fac=function(n){return new(n||e)(M(nt))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();function E_(e){nn().remove(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const pd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},gd=/%COMP%/g;function wa(e,t,n){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?wa(e,o,n):(o=o.replace(gd,e),n.push(o))}return n}function M_(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let md=(()=>{class e{constructor(n,r,o){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.rendererByCompId=new Map,this.defaultRenderer=new yd(n)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;switch(r.encapsulation){case Kt.Emulated:{let o=this.rendererByCompId.get(r.id);return o||(o=new RR(this.eventManager,this.sharedStylesHost,r,this.appId),this.rendererByCompId.set(r.id,o)),o.applyToHost(n),o}case 1:case Kt.ShadowDom:return new FR(this.eventManager,this.sharedStylesHost,n,r);default:if(!this.rendererByCompId.has(r.id)){const o=wa(r.id,r.styles,[]);this.sharedStylesHost.addStyles(o),this.rendererByCompId.set(r.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(n){return new(n||e)(M(Ca),M(Ei),M(mi))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();class yd{constructor(t){this.eventManager=t,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(t,n){return n?document.createElementNS(pd[n]||n,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,n){(A_(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){t&&(A_(t)?t.content:t).insertBefore(n,r)}removeChild(t,n){t&&t.removeChild(n)}selectRootElement(t,n){let r="string"==typeof t?document.querySelector(t):t;if(!r)throw new Error(`The selector "${t}" did not match any elements`);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+":"+n;const i=pd[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){const o=pd[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){o&(st.DashCase|st.Important)?t.style.setProperty(n,r,o&st.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&st.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t[n]=r}setValue(t,n){t.nodeValue=n}listen(t,n,r){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,n,M_(r)):this.eventManager.addEventListener(t,n,M_(r))}}function A_(e){return"TEMPLATE"===e.tagName&&void 0!==e.content}class RR extends yd{constructor(t,n,r,o){super(t),this.component=r;const i=wa(o+"-"+r.id,r.styles,[]);n.addStyles(i),this.contentAttr=function TR(e){return"_ngcontent-%COMP%".replace(gd,e)}(o+"-"+r.id),this.hostAttr=function xR(e){return"_nghost-%COMP%".replace(gd,e)}(o+"-"+r.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,n){const r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}}class FR extends yd{constructor(t,n,r,o){super(t),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const i=wa(o.id,o.styles,[]);for(let s=0;s<i.length;s++){const a=document.createElement("style");a.textContent=i[s],this.shadowRoot.appendChild(a)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(this.nodeOrShadowRoot(t),n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let PR=(()=>{class e extends C_{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o){return n.addEventListener(r,o,!1),()=>this.removeEventListener(n,r,o)}removeEventListener(n,r,o){return n.removeEventListener(r,o)}}return e.\u0275fac=function(n){return new(n||e)(M(nt))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const T_=["alt","control","meta","shift"],OR={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},kR={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let LR=(()=>{class e extends C_{constructor(n){super(n)}supports(n){return null!=e.parseEventName(n)}addEventListener(n,r,o){const i=e.parseEventName(r),s=e.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>nn().onAndCancel(n,i.domEventName,s))}static parseEventName(n){const r=n.toLowerCase().split("."),o=r.shift();if(0===r.length||"keydown"!==o&&"keyup"!==o)return null;const i=e._normalizeKey(r.pop());let s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),T_.forEach(u=>{const c=r.indexOf(u);c>-1&&(r.splice(c,1),s+=u+".")}),s+=i,0!=r.length||0===i.length)return null;const l={};return l.domEventName=o,l.fullKey=s,l}static matchEventFullKeyCode(n,r){let o=OR[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),!(null==o||!o)&&(o=o.toLowerCase()," "===o?o="space":"."===o&&(o="dot"),T_.forEach(s=>{s!==o&&(0,kR[s])(n)&&(i+=s+".")}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{e.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return"esc"===n?"escape":n}}return e.\u0275fac=function(n){return new(n||e)(M(nt))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const BR=Av(Ix,"browser",[{provide:Pc,useValue:"browser"},{provide:vv,useValue:function VR(){hd.makeCurrent()},multi:!0},{provide:nt,useFactory:function jR(){return function Vb(e){Zl=e}(document),document},deps:[]}]),R_=new I(""),F_=[{provide:ea,useClass:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class SR{addToWindow(t){oe.getAngularTestability=(r,o=!0)=>{const i=t.findTestabilityInTree(r,o);if(null==i)throw new Error("Could not find testability for element.");return i},oe.getAllAngularTestabilities=()=>t.getAllTestabilities(),oe.getAllAngularRootElements=()=>t.getAllRootElements(),oe.frameworkStabilizers||(oe.frameworkStabilizers=[]),oe.frameworkStabilizers.push(r=>{const o=oe.getAllAngularTestabilities();let i=o.length,s=!1;const a=function(l){s=s||l,i--,0==i&&r(s)};o.forEach(function(l){l.whenStable(a)})})}findTestabilityInTree(t,n,r){return null==n?null:t.getTestability(n)??(r?nn().isShadowRoot(n)?this.findTestabilityInTree(t,n.host,!0):this.findTestabilityInTree(t,n.parentElement,!0):null)}},deps:[]},{provide:bv,useClass:$c,deps:[Pe,jc,ea]},{provide:$c,useClass:$c,deps:[Pe,jc,ea]}],P_=[{provide:iu,useValue:"root"},{provide:Gr,useFactory:function $R(){return new Gr},deps:[]},{provide:Da,useClass:PR,multi:!0,deps:[nt,Pe,Pc]},{provide:Da,useClass:LR,multi:!0,deps:[nt]},{provide:md,useClass:md,deps:[Ca,Ei,mi]},{provide:Fp,useExisting:md},{provide:w_,useExisting:Ei},{provide:Ei,useClass:Ei,deps:[nt]},{provide:Ca,useClass:Ca,deps:[Da,Pe]},{provide:m_,useClass:MR,deps:[]},[]];let HR=(()=>{class e{constructor(n){}static withServerTransition(n){return{ngModule:e,providers:[{provide:mi,useValue:n.appId},{provide:D_,useExisting:mi},bR]}}}return e.\u0275fac=function(n){return new(n||e)(M(R_,12))},e.\u0275mod=Et({type:e}),e.\u0275inj=ft({providers:[...P_,...F_],imports:[QN,Ax]}),e})(),O_=(()=>{class e{constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}}return e.\u0275fac=function(n){return new(n||e)(M(nt))},e.\u0275prov=x({token:e,factory:function(n){let r=null;return r=n?new n:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function GR(){return new O_(M(nt))}(),r},providedIn:"root"}),e})();
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
function A(...e){return be(e,Mo(e))}function Un(e,t){return ie(t)?Ve(e,t,1):Ve(e,1)}function Sn(e,t){return Ee((n,r)=>{let o=0;n.subscribe(_e(r,i=>e.call(t,i,o++)&&r.next(i)))})}
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
       */class Mn{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(n=>{const r=n.indexOf(":");if(r>0){const o=n.slice(0,r),i=o.toLowerCase(),s=n.slice(r+1).trim();this.maybeSetNormalizedName(o,i),this.headers.has(i)?this.headers.get(i).push(s):this.headers.set(i,[s])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(n=>{let r=t[n];const o=n.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(o,r),this.maybeSetNormalizedName(n,o))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const n=this.headers.get(t.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,n){return this.clone({name:t,value:n,op:"a"})}set(t,n){return this.clone({name:t,value:n,op:"s"})}delete(t,n){return this.clone({name:t,value:n,op:"d"})}maybeSetNormalizedName(t,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,t)}init(){this.lazyInit&&(this.lazyInit instanceof Mn?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(n=>{this.headers.set(n,t.headers.get(n)),this.normalizedNames.set(n,t.normalizedNames.get(n))})}clone(t){const n=new Mn;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof Mn?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}applyUpdate(t){const n=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,n);const o=("a"===t.op?this.headers.get(n):void 0)||[];o.push(...r),this.headers.set(n,o);break;case"d":const i=t.value;if(i){let s=this.headers.get(n);if(!s)return;s=s.filter(a=>-1===i.indexOf(a)),0===s.length?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,s)}else this.headers.delete(n),this.normalizedNames.delete(n)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>t(this.normalizedNames.get(n),this.headers.get(n)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class JR{encodeKey(t){return j_(t)}encodeValue(t){return j_(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const eF=/%(\d[a-f0-9])/gi,tF={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function j_(e){return encodeURIComponent(e).replace(eF,(t,n)=>{var r;return null!==(r=tF[n])&&void 0!==r?r:t})}function Ea(e){return`${e}`}class In{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new JR,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function XR(e,t){const n=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{const i=o.indexOf("="),[s,a]=-1==i?[t.decodeKey(o),""]:[t.decodeKey(o.slice(0,i)),t.decodeValue(o.slice(i+1))],l=n.get(s)||[];l.push(a),n.set(s,l)}),n}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(n=>{const r=t.fromObject[n],o=Array.isArray(r)?r.map(Ea):[Ea(r)];this.map.set(n,o)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const n=this.map.get(t);return n?n[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,n){return this.clone({param:t,value:n,op:"a"})}appendAll(t){const n=[];return Object.keys(t).forEach(r=>{const o=t[r];Array.isArray(o)?o.forEach(i=>{n.push({param:r,value:i,op:"a"})}):n.push({param:r,value:o,op:"a"})}),this.clone(n)}set(t,n){return this.clone({param:t,value:n,op:"s"})}delete(t,n){return this.clone({param:t,value:n,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const n=this.encoder.encodeKey(t);return this.map.get(t).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const n=new In({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(t),n}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const n=("a"===t.op?this.map.get(t.param):void 0)||[];n.push(Ea(t.value)),this.map.set(t.param,n);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const o=r.indexOf(Ea(t.value));-1!==o&&r.splice(o,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class nF{constructor(){this.map=new Map}set(t,n){return this.map.set(t,n),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function B_(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function H_(e){return typeof Blob<"u"&&e instanceof Blob}function U_(e){return typeof FormData<"u"&&e instanceof FormData}class bi{constructor(t,n,r,o){let i;if(this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function rF(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==r?r:null,i=o):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new Mn),this.context||(this.context=new nF),this.params){const s=this.params.toString();if(0===s.length)this.urlWithParams=n;else{const a=n.indexOf("?");this.urlWithParams=n+(-1===a?"?":a<n.length-1?"&":"")+s}}else this.params=new In,this.urlWithParams=n}serializeBody(){return null===this.body?null:B_(this.body)||H_(this.body)||U_(this.body)||function oF(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof In?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||U_(this.body)?null:H_(this.body)?this.body.type||null:B_(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof In?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){var n;const r=t.method||this.method,o=t.url||this.url,i=t.responseType||this.responseType,s=void 0!==t.body?t.body:this.body,a=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,l=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let u=t.headers||this.headers,c=t.params||this.params;const d=null!==(n=t.context)&&void 0!==n?n:this.context;return void 0!==t.setHeaders&&(u=Object.keys(t.setHeaders).reduce((f,h)=>f.set(h,t.setHeaders[h]),u)),t.setParams&&(c=Object.keys(t.setParams).reduce((f,h)=>f.set(h,t.setParams[h]),c)),new bi(r,o,s,{params:c,headers:u,context:d,reportProgress:l,responseType:i,withCredentials:a})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var xe=(()=>((xe=xe||{})[xe.Sent=0]="Sent",xe[xe.UploadProgress=1]="UploadProgress",xe[xe.ResponseHeader=2]="ResponseHeader",xe[xe.DownloadProgress=3]="DownloadProgress",xe[xe.Response=4]="Response",xe[xe.User=5]="User",xe))();class Dd{constructor(t,n=200,r="OK"){this.headers=t.headers||new Mn,this.status=void 0!==t.status?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class Cd extends Dd{constructor(t={}){super(t),this.type=xe.ResponseHeader}clone(t={}){return new Cd({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class ba extends Dd{constructor(t={}){super(t),this.type=xe.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new ba({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class G_ extends Dd{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function wd(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}let Sa=(()=>{class e{constructor(n){this.handler=n}request(n,r,o={}){let i;if(n instanceof bi)i=n;else{let l,u;l=o.headers instanceof Mn?o.headers:new Mn(o.headers),o.params&&(u=o.params instanceof In?o.params:new In({fromObject:o.params})),i=new bi(n,r,void 0!==o.body?o.body:null,{headers:l,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials})}const s=A(i).pipe(Un(l=>this.handler.handle(l)));if(n instanceof bi||"events"===o.observe)return s;const a=s.pipe(Sn(l=>l instanceof ba));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return a.pipe(U(l=>{if(null!==l.body&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return a.pipe(U(l=>{if(null!==l.body&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return a.pipe(U(l=>{if(null!==l.body&&"string"!=typeof l.body)throw new Error("Response is not a string.");return l.body}));default:return a.pipe(U(l=>l.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:(new In).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,wd(o,r))}post(n,r,o={}){return this.request("POST",n,wd(o,r))}put(n,r,o={}){return this.request("PUT",n,wd(o,r))}}return e.\u0275fac=function(n){return new(n||e)(M(V_))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class z_{constructor(t,n){this.next=t,this.interceptor=n}handle(t){return this.interceptor.intercept(t,this.next)}}const W_=new I("HTTP_INTERCEPTORS");let iF=(()=>{class e{intercept(n,r){return r.handle(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
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
const sF=/^\)\]\}',?\n/;let q_=(()=>{class e{constructor(n){this.xhrFactory=n}handle(n){if("JSONP"===n.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new ve(r=>{const o=this.xhrFactory.build();if(o.open(n.method,n.urlWithParams),n.withCredentials&&(o.withCredentials=!0),n.headers.forEach((h,p)=>o.setRequestHeader(h,p.join(","))),n.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){const h=n.detectContentTypeHeader();null!==h&&o.setRequestHeader("Content-Type",h)}if(n.responseType){const h=n.responseType.toLowerCase();o.responseType="json"!==h?h:"text"}const i=n.serializeBody();let s=null;const a=()=>{if(null!==s)return s;const h=o.statusText||"OK",p=new Mn(o.getAllResponseHeaders()),g=function aF(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(o)||n.url;return s=new Cd({headers:p,status:o.status,statusText:h,url:g}),s},l=()=>{let{headers:h,status:p,statusText:g,url:v}=a(),y=null;204!==p&&(y=typeof o.response>"u"?o.responseText:o.response),0===p&&(p=y?200:0);let w=p>=200&&p<300;if("json"===n.responseType&&"string"==typeof y){const m=y;y=y.replace(sF,"");try{y=""!==y?JSON.parse(y):null}catch(b){y=m,w&&(w=!1,y={error:b,text:y})}}w?(r.next(new ba({body:y,headers:h,status:p,statusText:g,url:v||void 0})),r.complete()):r.error(new G_({error:y,headers:h,status:p,statusText:g,url:v||void 0}))},u=h=>{const{url:p}=a(),g=new G_({error:h,status:o.status||0,statusText:o.statusText||"Unknown Error",url:p||void 0});r.error(g)};let c=!1;const d=h=>{c||(r.next(a()),c=!0);let p={type:xe.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),"text"===n.responseType&&!!o.responseText&&(p.partialText=o.responseText),r.next(p)},f=h=>{let p={type:xe.UploadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),r.next(p)};return o.addEventListener("load",l),o.addEventListener("error",u),o.addEventListener("timeout",u),o.addEventListener("abort",u),n.reportProgress&&(o.addEventListener("progress",d),null!==i&&o.upload&&o.upload.addEventListener("progress",f)),o.send(i),r.next({type:xe.Sent}),()=>{o.removeEventListener("error",u),o.removeEventListener("abort",u),o.removeEventListener("load",l),o.removeEventListener("timeout",u),n.reportProgress&&(o.removeEventListener("progress",d),null!==i&&o.upload&&o.upload.removeEventListener("progress",f)),o.readyState!==o.DONE&&o.abort()}})}}return e.\u0275fac=function(n){return new(n||e)(M(m_))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ed=new I("XSRF_COOKIE_NAME"),bd=new I("XSRF_HEADER_NAME");class K_{}let lF=(()=>{class e{constructor(n,r,o){this.doc=n,this.platform=r,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=a_(n,this.cookieName),this.lastCookieString=n),this.lastToken}}return e.\u0275fac=function(n){return new(n||e)(M(nt),M(Pc),M(Ed))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})(),Sd=(()=>{class e{constructor(n,r){this.tokenService=n,this.headerName=r}intercept(n,r){const o=n.url.toLowerCase();if("GET"===n.method||"HEAD"===n.method||o.startsWith("http://")||o.startsWith("https://"))return r.handle(n);const i=this.tokenService.getToken();return null!==i&&!n.headers.has(this.headerName)&&(n=n.clone({headers:n.headers.set(this.headerName,i)})),r.handle(n)}}return e.\u0275fac=function(n){return new(n||e)(M(K_),M(bd))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})(),uF=(()=>{class e{constructor(n,r){this.backend=n,this.injector=r,this.chain=null}handle(n){if(null===this.chain){const r=this.injector.get(W_,[]);this.chain=r.reduceRight((o,i)=>new z_(o,i),this.backend)}return this.chain.handle(n)}}return e.\u0275fac=function(n){return new(n||e)(M($_),M(_t))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})(),cF=(()=>{class e{static disable(){return{ngModule:e,providers:[{provide:Sd,useClass:iF}]}}static withOptions(n={}){return{ngModule:e,providers:[n.cookieName?{provide:Ed,useValue:n.cookieName}:[],n.headerName?{provide:bd,useValue:n.headerName}:[]]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ft({providers:[Sd,{provide:W_,useExisting:Sd,multi:!0},{provide:K_,useClass:lF},{provide:Ed,useValue:"XSRF-TOKEN"},{provide:bd,useValue:"X-XSRF-TOKEN"}]}),e})(),dF=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ft({providers:[Sa,{provide:V_,useClass:uF},q_,{provide:$_,useExisting:q_}],imports:[cF.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]}),e})();
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
class Wt extends ut{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){const n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){const{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}}const Ma=bo(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}),{isArray:fF}=Array,{getPrototypeOf:hF,prototype:pF,keys:gF}=Object;function Z_(e){if(1===e.length){const t=e[0];if(fF(t))return{args:t,keys:null};if(function mF(e){return e&&"object"==typeof e&&hF(e)===pF}(t)){const n=gF(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}const{isArray:yF}=Array;function Q_(e){return U(t=>function vF(e,t){return yF(t)?e(...t):e(t)}(e,t))}function Y_(e,t){return e.reduce((n,r,o)=>(n[r]=t[o],n),{})}function J_(...e){const t=Mo(e),n=sh(e),{args:r,keys:o}=Z_(e);if(0===r.length)return be([],t);const i=new ve(function _F(e,t,n=xn){return r=>{X_(t,()=>{const{length:o}=e,i=new Array(o);let s=o,a=o;for(let l=0;l<o;l++)X_(t,()=>{const u=be(e[l],t);let c=!1;u.subscribe(_e(r,d=>{i[l]=d,c||(c=!0,a--),a||r.next(n(i.slice()))},()=>{--s||r.complete()}))},r)},r)}}(r,t,o?s=>Y_(o,s):xn));return n?i.pipe(Q_(n)):i}function X_(e,t,n){e?an(n,e,t):t()}function Md(...e){return function DF(){return Cr(1)}()(be(e,Mo(e)))}function eD(e){return new ve(t=>{Rt(e()).subscribe(t)})}function Gn(e,t){const n=ie(e)?e:()=>e,r=o=>o.error(n());return new ve(t?o=>t.schedule(r,0,o):r)}function Id(){return Ee((e,t)=>{let n=null;e._refCount++;const r=_e(t,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount)return void(n=null);const o=e._connection,i=n;n=null,o&&(!i||o===i)&&o.unsubscribe(),t.unsubscribe()});e.subscribe(r),r.closed||(n=e.connect())})}class tD extends ve{constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,Wf(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){const t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new lt;const n=this.getSubject();t.add(this.source.subscribe(_e(n,void 0,()=>{this._teardown(),n.complete()},r=>{this._teardown(),n.error(r)},()=>this._teardown()))),t.closed&&(this._connection=null,t=lt.EMPTY)}return t}refCount(){return Id()(this)}}function rn(e,t){return Ee((n,r)=>{let o=null,i=0,s=!1;const a=()=>s&&!o&&r.complete();n.subscribe(_e(r,l=>{o?.unsubscribe();let u=0;const c=i++;Rt(e(l,c)).subscribe(o=_e(r,d=>r.next(t?t(l,d,c,u++):d),()=>{o=null,a()}))},()=>{s=!0,a()}))})}function Si(e){return e<=0?()=>ln:Ee((t,n)=>{let r=0;t.subscribe(_e(n,o=>{++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function Ia(e){return Ee((t,n)=>{let r=!1;t.subscribe(_e(n,o=>{r=!0,n.next(o)},()=>{r||n.next(e),n.complete()}))})}function nD(e=wF){return Ee((t,n)=>{let r=!1;t.subscribe(_e(n,o=>{r=!0,n.next(o)},()=>r?n.complete():n.error(e())))})}function wF(){return new Ma}function zn(e,t){const n=arguments.length>=2;return r=>r.pipe(e?Sn((o,i)=>e(o,i,r)):xn,Si(1),n?Ia(t):nD(()=>new Ma))}function qe(e,t,n){const r=ie(e)||t||n?{next:e,error:t,complete:n}:e;return r?Ee((o,i)=>{var s;null===(s=r.subscribe)||void 0===s||s.call(r);let a=!0;o.subscribe(_e(i,l=>{var u;null===(u=r.next)||void 0===u||u.call(r,l),i.next(l)},()=>{var l;a=!1,null===(l=r.complete)||void 0===l||l.call(r),i.complete()},l=>{var u;a=!1,null===(u=r.error)||void 0===u||u.call(r,l),i.error(l)},()=>{var l,u;a&&(null===(l=r.unsubscribe)||void 0===l||l.call(r)),null===(u=r.finalize)||void 0===u||u.call(r)}))}):xn}function qt(e){return Ee((t,n)=>{let i,r=null,o=!1;r=t.subscribe(_e(n,void 0,void 0,s=>{i=Rt(e(s,qt(e)(t))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function EF(e,t,n,r,o){return(i,s)=>{let a=n,l=t,u=0;i.subscribe(_e(s,c=>{const d=u++;l=a?e(l,c,d):(a=!0,c),r&&s.next(l)},o&&(()=>{a&&s.next(l),s.complete()})))}}function rD(e,t){return Ee(EF(e,t,arguments.length>=2,!0))}function Ad(e){return e<=0?()=>ln:Ee((t,n)=>{let r=[];t.subscribe(_e(n,o=>{r.push(o),e<r.length&&r.shift()},()=>{for(const o of r)n.next(o);n.complete()},void 0,()=>{r=null}))})}function oD(e,t){const n=arguments.length>=2;return r=>r.pipe(e?Sn((o,i)=>e(o,i,r)):xn,Ad(1),n?Ia(t):nD(()=>new Ma))}function Td(e){return Ee((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}
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
       */const H="primary",Mi=Symbol("RouteTitle");class MF{constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){const n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){const n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}}function mo(e){return new MF(e)}function IF(e,t,n){const r=n.path.split("/");if(r.length>e.length||"full"===n.pathMatch&&(t.hasChildren()||r.length<e.length))return null;const o={};for(let i=0;i<r.length;i++){const s=r[i],a=e[i];if(s.startsWith(":"))o[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,r.length),posParams:o}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function on(e,t){const n=e?Object.keys(e):void 0,r=t?Object.keys(t):void 0;if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!iD(e[o],t[o]))return!1;return!0}function iD(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const n=[...e].sort(),r=[...t].sort();return n.every((o,i)=>r[i]===o)}return e===t}function sD(e){return Array.prototype.concat.apply([],e)}function aD(e){return e.length>0?e[e.length-1]:null}function $e(e,t){for(const n in e)e.hasOwnProperty(n)&&t(e[n],n)}function Wn(e){return sc(e)?e:si(e)?be(Promise.resolve(e)):A(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const xF={exact:function cD(e,t,n){if(!hr(e.segments,t.segments)||!Aa(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(const r in t.children)if(!e.children[r]||!cD(e.children[r],t.children[r],n))return!1;return!0},subset:dD},lD={exact:function NF(e,t){return on(e,t)},subset:function RF(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>iD(e[n],t[n]))},ignored:()=>!0};function uD(e,t,n){return xF[n.paths](e.root,t.root,n.matrixParams)&&lD[n.queryParams](e.queryParams,t.queryParams)&&!("exact"===n.fragment&&e.fragment!==t.fragment)}function dD(e,t,n){return fD(e,t,t.segments,n)}function fD(e,t,n,r){if(e.segments.length>n.length){const o=e.segments.slice(0,n.length);return!(!hr(o,n)||t.hasChildren()||!Aa(o,n,r))}if(e.segments.length===n.length){if(!hr(e.segments,n)||!Aa(e.segments,n,r))return!1;for(const o in t.children)if(!e.children[o]||!dD(e.children[o],t.children[o],r))return!1;return!0}{const o=n.slice(0,e.segments.length),i=n.slice(e.segments.length);return!!(hr(e.segments,o)&&Aa(e.segments,o,r)&&e.children[H])&&fD(e.children[H],t,i,r)}}function Aa(e,t,n){return t.every((r,o)=>lD[n](e[o].parameters,r.parameters))}class fr{constructor(t,n,r){this.root=t,this.queryParams=n,this.fragment=r}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=mo(this.queryParams)),this._queryParamMap}toString(){return OF.serialize(this)}}class z{constructor(t,n){this.segments=t,this.children=n,this.parent=null,$e(n,(r,o)=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ta(this)}}class Ii{constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap||(this._parameterMap=mo(this.parameters)),this._parameterMap}toString(){return mD(this)}}function hr(e,t){return e.length===t.length&&e.every((n,r)=>n.path===t[r].path)}let hD=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:function(){return new Nd},providedIn:"root"}),e})();class Nd{parse(t){const n=new GF(t);return new fr(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){const n=`/${Ai(t.root,!0)}`,r=function VF(e){const t=Object.keys(e).map(n=>{const r=e[n];return Array.isArray(r)?r.map(o=>`${xa(n)}=${xa(o)}`).join("&"):`${xa(n)}=${xa(r)}`}).filter(n=>!!n);return t.length?`?${t.join("&")}`:""}(t.queryParams);return`${n}${r}${"string"==typeof t.fragment?`#${function kF(e){return encodeURI(e)}(t.fragment)}`:""}`}}const OF=new Nd;function Ta(e){return e.segments.map(t=>mD(t)).join("/")}function Ai(e,t){if(!e.hasChildren())return Ta(e);if(t){const n=e.children[H]?Ai(e.children[H],!1):"",r=[];return $e(e.children,(o,i)=>{i!==H&&r.push(`${i}:${Ai(o,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}{const n=function PF(e,t){let n=[];return $e(e.children,(r,o)=>{o===H&&(n=n.concat(t(r,o)))}),$e(e.children,(r,o)=>{o!==H&&(n=n.concat(t(r,o)))}),n}(e,(r,o)=>o===H?[Ai(e.children[H],!1)]:[`${o}:${Ai(r,!1)}`]);return 1===Object.keys(e.children).length&&null!=e.children[H]?`${Ta(e)}/${n[0]}`:`${Ta(e)}/(${n.join("//")})`}}function pD(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function xa(e){return pD(e).replace(/%3B/gi,";")}function Rd(e){return pD(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Na(e){return decodeURIComponent(e)}function gD(e){return Na(e.replace(/\+/g,"%20"))}function mD(e){return`${Rd(e.path)}${function LF(e){return Object.keys(e).map(t=>`;${Rd(t)}=${Rd(e[t])}`).join("")}(e.parameters)}`}const $F=/^[^\/()?;=#]+/;function Ra(e){const t=e.match($F);return t?t[0]:""}const jF=/^[^=?&#]+/,HF=/^[^&#]+/;class GF{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new z([],{}):new z([],this.parseChildren())}parseQueryParams(){const t={};if(this.consumeOptional("?"))do{this.parseQueryParam(t)}while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(t.length>0||Object.keys(n).length>0)&&(r[H]=new z(t,n)),r}parseSegment(){const t=Ra(this.remaining);if(""===t&&this.peekStartsWith(";"))throw new C(4009,!1);return this.capture(t),new Ii(Na(t),this.parseMatrixParams())}parseMatrixParams(){const t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){const n=Ra(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){const o=Ra(this.remaining);o&&(r=o,this.capture(r))}t[Na(n)]=Na(r)}parseQueryParam(t){const n=function BF(e){const t=e.match(jF);return t?t[0]:""}(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){const s=function UF(e){const t=e.match(HF);return t?t[0]:""}(this.remaining);s&&(r=s,this.capture(r))}const o=gD(n),i=gD(r);if(t.hasOwnProperty(o)){let s=t[o];Array.isArray(s)||(s=[s],t[o]=s),s.push(i)}else t[o]=i}parseParens(t){const n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const r=Ra(this.remaining),o=this.remaining[r.length];if("/"!==o&&")"!==o&&";"!==o)throw new C(4010,!1);let i;r.indexOf(":")>-1?(i=r.slice(0,r.indexOf(":")),this.capture(i),this.capture(":")):t&&(i=H);const s=this.parseChildren();n[i]=1===Object.keys(s).length?s[H]:new z([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return!!this.peekStartsWith(t)&&(this.remaining=this.remaining.substring(t.length),!0)}capture(t){if(!this.consumeOptional(t))throw new C(4011,!1)}}function Fd(e){return e.segments.length>0?new z([],{[H]:e}):e}function Fa(e){const t={};for(const r of Object.keys(e.children)){const i=Fa(e.children[r]);(i.segments.length>0||i.hasChildren())&&(t[r]=i)}return function zF(e){if(1===e.numberOfChildren&&e.children[H]){const t=e.children[H];return new z(e.segments.concat(t.segments),t.children)}return e}(new z(e.segments,t))}function pr(e){return e instanceof fr}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function KF(e,t,n,r,o){var i;if(0===n.length)return yo(t.root,t.root,t.root,r,o);const s=function _D(e){if("string"==typeof e[0]&&1===e.length&&"/"===e[0])return new vD(!0,0,e);let t=0,n=!1;const r=e.reduce((o,i,s)=>{if("object"==typeof i&&null!=i){if(i.outlets){const a={};return $e(i.outlets,(l,u)=>{a[u]="string"==typeof l?l.split("/"):l}),[...o,{outlets:a}]}if(i.segmentPath)return[...o,i.segmentPath]}return"string"!=typeof i?[...o,i]:0===s?(i.split("/").forEach((a,l)=>{0==l&&"."===a||(0==l&&""===a?n=!0:".."===a?t++:""!=a&&o.push(a))}),o):[...o,i]},[]);return new vD(n,t,r)}(n);if(s.toRoot())return yo(t.root,t.root,new z([],{}),r,o);const l=function a(c){var d;const f=function QF(e,t,n,r){if(e.isAbsolute)return new vo(t.root,!0,0);if(-1===r)return new vo(n,n===t.root,0);return function DD(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new C(4005,!1);o=r.segments.length}return new vo(r,!1,o-i)}(n,r+(Ti(e.commands[0])?0:1),e.numberOfDoubleDots)}(s,t,null===(d=e.snapshot)||void 0===d?void 0:d._urlSegment,c),h=f.processChildren?Ni(f.segmentGroup,f.index,s.commands):Od(f.segmentGroup,f.index,s.commands);return yo(t.root,f.segmentGroup,h,r,o)}(null===(i=e.snapshot)||void 0===i?void 0:i._lastPathIndex);return l}function Ti(e){return"object"==typeof e&&null!=e&&!e.outlets&&!e.segmentPath}function xi(e){return"object"==typeof e&&null!=e&&e.outlets}function yo(e,t,n,r,o){let s,i={};r&&$e(r,(l,u)=>{i[u]=Array.isArray(l)?l.map(c=>`${c}`):`${l}`}),s=e===t?n:yD(e,t,n);const a=Fd(Fa(s));return new fr(a,i,o)}function yD(e,t,n){const r={};return $e(e.children,(o,i)=>{r[i]=o===t?n:yD(o,t,n)}),new z(e.segments,r)}class vD{constructor(t,n,r){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=r,t&&r.length>0&&Ti(r[0]))throw new C(4003,!1);const o=r.find(xi);if(o&&o!==aD(r))throw new C(4004,!1)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class vo{constructor(t,n,r){this.segmentGroup=t,this.processChildren=n,this.index=r}}function Od(e,t,n){if(e||(e=new z([],{})),0===e.segments.length&&e.hasChildren())return Ni(e,t,n);const r=function JF(e,t,n){let r=0,o=t;const i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;const s=e.segments[o],a=n[r];if(xi(a))break;const l=`${a}`,u=r<n.length-1?n[r+1]:null;if(o>0&&void 0===l)break;if(l&&u&&"object"==typeof u&&void 0===u.outlets){if(!wD(l,u,s))return i;r+=2}else{if(!wD(l,{},s))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){const i=new z(e.segments.slice(0,r.pathIndex),{});return i.children[H]=new z(e.segments.slice(r.pathIndex),e.children),Ni(i,0,o)}return r.match&&0===o.length?new z(e.segments,{}):r.match&&!e.hasChildren()?kd(e,t,n):r.match?Ni(e,0,o):kd(e,t,n)}function Ni(e,t,n){if(0===n.length)return new z(e.segments,{});{const r=function YF(e){return xi(e[0])?e[0].outlets:{[H]:e}}(n),o={};return $e(r,(i,s)=>{"string"==typeof i&&(i=[i]),null!==i&&(o[s]=Od(e.children[s],t,i))}),$e(e.children,(i,s)=>{void 0===r[s]&&(o[s]=i)}),new z(e.segments,o)}}function kd(e,t,n){const r=e.segments.slice(0,t);let o=0;for(;o<n.length;){const i=n[o];if(xi(i)){const l=XF(i.outlets);return new z(r,l)}if(0===o&&Ti(n[0])){r.push(new Ii(e.segments[t].path,CD(n[0]))),o++;continue}const s=xi(i)?i.outlets[H]:`${i}`,a=o<n.length-1?n[o+1]:null;s&&a&&Ti(a)?(r.push(new Ii(s,CD(a))),o+=2):(r.push(new Ii(s,{})),o++)}return new z(r,{})}function XF(e){const t={};return $e(e,(n,r)=>{"string"==typeof n&&(n=[n]),null!==n&&(t[r]=kd(new z([],{}),0,n))}),t}function CD(e){const t={};return $e(e,(n,r)=>t[r]=`${n}`),t}function wD(e,t,n){return e==n.path&&on(t,n.parameters)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class An{constructor(t,n){this.id=t,this.url=n}}class Ld extends An{constructor(t,n,r="imperative",o=null){super(t,n),this.type=0,this.navigationTrigger=r,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class gr extends An{constructor(t,n,r){super(t,n),this.urlAfterRedirects=r,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class Pa extends An{constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class ED extends An{constructor(t,n,r,o){super(t,n),this.error=r,this.target=o,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class e1 extends An{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class t1 extends An{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class n1 extends An{constructor(t,n,r,o,i){super(t,n),this.urlAfterRedirects=r,this.state=o,this.shouldActivate=i,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class r1 extends An{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class o1 extends An{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class i1{constructor(t){this.route=t,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class s1{constructor(t){this.route=t,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class a1{constructor(t){this.snapshot=t,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class l1{constructor(t){this.snapshot=t,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class u1{constructor(t){this.snapshot=t,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class c1{constructor(t){this.snapshot=t,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class bD{constructor(t,n,r){this.routerEvent=t,this.position=n,this.anchor=r,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class SD{constructor(t){this._root=t}get root(){return this._root.value}parent(t){const n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){const n=Vd(t,this._root);return n?n.children.map(r=>r.value):[]}firstChild(t){const n=Vd(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){const n=$d(t,this._root);return n.length<2?[]:n[n.length-2].children.map(o=>o.value).filter(o=>o!==t)}pathFromRoot(t){return $d(t,this._root).map(n=>n.value)}}function Vd(e,t){if(e===t.value)return t;for(const n of t.children){const r=Vd(e,n);if(r)return r}return null}function $d(e,t){if(e===t.value)return[t];for(const n of t.children){const r=$d(e,n);if(r.length)return r.unshift(t),r}return[]}class Tn{constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}}function _o(e){const t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class MD extends SD{constructor(t,n){super(t),this.snapshot=n,jd(this,t)}toString(){return this.snapshot.toString()}}function ID(e,t){const n=function f1(e,t){const s=new Oa([],{},{},"",{},H,t,null,e.root,-1,{});return new TD("",new Tn(s,[]))}(e,t),r=new Wt([new Ii("",{})]),o=new Wt({}),i=new Wt({}),s=new Wt({}),a=new Wt(""),l=new mr(r,o,s,a,i,H,t,n.root);return l.snapshot=n.root,new MD(new Tn(l,[]),n)}class mr{constructor(t,n,r,o,i,s,a,l){var u,c;this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.title=null!==(u=null===(c=this.data)||void 0===c?void 0:c.pipe(U(d=>d[Mi])))&&void 0!==u?u:A(void 0),this._futureSnapshot=l}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(U(t=>mo(t)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(U(t=>mo(t)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function AD(e,t="emptyOnly"){const n=e.pathFromRoot;let r=0;if("always"!==t)for(r=n.length-1;r>=1;){const o=n[r],i=n[r-1];if(o.routeConfig&&""===o.routeConfig.path)r--;else{if(i.component)break;r--}}return function h1(e){return e.reduce((t,n)=>{var r;return{params:{...t.params,...n.params},data:{...t.data,...n.data},resolve:{...n.data,...t.resolve,...null===(r=n.routeConfig)||void 0===r?void 0:r.data,...n._resolvedData}}},{params:{},data:{},resolve:{}})}(n.slice(r))}class Oa{constructor(t,n,r,o,i,s,a,l,u,c,d,f){var h;this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.title=null===(h=this.data)||void 0===h?void 0:h[Mi],this.routeConfig=l,this._urlSegment=u,this._lastPathIndex=c,this._correctedLastPathIndex=f??c,this._resolve=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=mo(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=mo(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class TD extends SD{constructor(t,n){super(n),this.url=t,jd(this,n)}toString(){return xD(this._root)}}function jd(e,t){t.value._routerState=e,t.children.forEach(n=>jd(e,n))}function xD(e){const t=e.children.length>0?` { ${e.children.map(xD).join(", ")} } `:"";return`${e.value}${t}`}function Bd(e){if(e.snapshot){const t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,on(t.queryParams,n.queryParams)||e.queryParams.next(n.queryParams),t.fragment!==n.fragment&&e.fragment.next(n.fragment),on(t.params,n.params)||e.params.next(n.params),function AF(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!on(e[n],t[n]))return!1;return!0}(t.url,n.url)||e.url.next(n.url),on(t.data,n.data)||e.data.next(n.data)}else e.snapshot=e._futureSnapshot,e.data.next(e._futureSnapshot.data)}function Hd(e,t){const n=on(e.params,t.params)&&function FF(e,t){return hr(e,t)&&e.every((n,r)=>on(n.parameters,t[r].parameters))}(e.url,t.url);return n&&!(!e.parent!=!t.parent)&&(!e.parent||Hd(e.parent,t.parent))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ri(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){const r=n.value;r._futureSnapshot=t.value;const o=function g1(e,t,n){return t.children.map(r=>{for(const o of n.children)if(e.shouldReuseRoute(r.value,o.value.snapshot))return Ri(e,r,o);return Ri(e,r)})}(e,t,n);return new Tn(r,o)}{if(e.shouldAttach(t.value)){const i=e.retrieve(t.value);if(null!==i){const s=i.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(a=>Ri(e,a)),s}}const r=function m1(e){return new mr(new Wt(e.url),new Wt(e.params),new Wt(e.queryParams),new Wt(e.fragment),new Wt(e.data),e.outlet,e.component,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t.value),o=t.children.map(i=>Ri(e,i));return new Tn(r,o)}}const Ud="ngNavigationCancelingError";function ND(e,t){const{redirectTo:n,navigationBehaviorOptions:r}=pr(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,o=RD(!1,0,t);return o.url=n,o.navigationBehaviorOptions=r,o}function RD(e,t,n){const r=new Error("NavigationCancelingError: "+(e||""));return r[Ud]=!0,r.cancellationCode=t,n&&(r.url=n),r}function FD(e){return PD(e)&&pr(e.url)}function PD(e){return e&&e[Ud]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class y1{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.injector=null,this.children=new Fi,this.attachRef=null}}let Fi=(()=>{class e{constructor(){this.contexts=new Map}onChildOutletCreated(n,r){const o=this.getOrCreateContext(n);o.outlet=r,this.contexts.set(n,o)}onChildOutletDestroyed(n){const r=this.getContext(n);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){const n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let r=this.getContext(n);return r||(r=new y1,this.contexts.set(n,r)),r}getContext(n){return this.contexts.get(n)||null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ka=!1;let OD=(()=>{class e{constructor(n,r,o,i,s){this.parentContexts=n,this.location=r,this.changeDetector=i,this.environmentInjector=s,this.activated=null,this._activatedRoute=null,this.activateEvents=new ye,this.deactivateEvents=new ye,this.attachEvents=new ye,this.detachEvents=new ye,this.name=o||H,n.onChildOutletCreated(this.name,this)}ngOnDestroy(){var n;(null===(n=this.parentContexts.getContext(this.name))||void 0===n?void 0:n.outlet)===this&&this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const n=this.parentContexts.getContext(this.name);n&&n.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new C(4012,ka);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new C(4012,ka);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new C(4012,ka);this.location.detach();const n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,r){this.activated=n,this._activatedRoute=r,this.location.insert(n.hostView),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){const n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,r){if(this.isActivated)throw new C(4013,ka);this._activatedRoute=n;const o=this.location,s=n._futureSnapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new v1(n,a,o.injector);if(r&&function _1(e){return!!e.resolveComponentFactory}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(r)){const u=r.resolveComponentFactory(s);this.activated=o.createComponent(u,o.length,l)}else this.activated=o.createComponent(s,{index:o.length,injector:l,environmentInjector:r??this.environmentInjector});this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return e.\u0275fac=function(n){return new(n||e)(D(Fi),D(Ht),function Lo(e){return function ab(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const r=n.length;let o=0;for(;o<r;){const i=n[o];if(Lh(i))break;if(0===i)o+=2;else if("number"==typeof i)for(o++;o<r&&"string"==typeof n[o];)o++;else{if(i===t)return n[o+1];o+=2}}}return null}(Ne(),e)}("name"),D(ra),D(Vn))},e.\u0275dir=P({type:e,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0}),e})();class v1{constructor(t,n,r){this.route=t,this.childContexts=n,this.parent=r}get(t,n){return t===mr?this.route:t===Fi?this.childContexts:this.parent.get(t,n)}}let Gd=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=Rn({type:e,selectors:[["ng-component"]],standalone:!0,features:[Fy],decls:1,vars:0,template:function(n,r){1&n&&Ct(0,"router-outlet")},dependencies:[OD],encapsulation:2}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function kD(e,t){var n;return e.providers&&!e._injector&&(e._injector=Ks(e.providers,t,`Route: ${e.path}`)),null!==(n=e._injector)&&void 0!==n?n:t}function Wd(e){const t=e.children&&e.children.map(Wd),n=t?{...e,children:t}:{...e};return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==H&&(n.component=Gd),n}function Nt(e){return e.outlet||H}function LD(e,t){const n=e.filter(r=>Nt(r)===t);return n.push(...e.filter(r=>Nt(r)!==t)),n}function Pi(e){var t;if(!e)return null;if(null!==(t=e.routeConfig)&&void 0!==t&&t._injector)return e.routeConfig._injector;for(let n=e.parent;n;n=n.parent){const r=n.routeConfig;if(null!=r&&r._loadedInjector)return r._loadedInjector;if(null!=r&&r._injector)return r._injector}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class b1{constructor(t,n,r,o){this.routeReuseStrategy=t,this.futureState=n,this.currState=r,this.forwardEvent=o}activate(t){const n=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,r,t),Bd(this.futureState.root),this.activateChildRoutes(n,r,t)}deactivateChildRoutes(t,n,r){const o=_o(n);t.children.forEach(i=>{const s=i.value.outlet;this.deactivateRoutes(i,o[s],r),delete o[s]}),$e(o,(i,s)=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(t,n,r){const o=t.value,i=n?n.value:null;if(o===i)if(o.component){const s=r.getContext(o.outlet);s&&this.deactivateChildRoutes(t,n,s.children)}else this.deactivateChildRoutes(t,n,r);else i&&this.deactivateRouteAndItsChildren(n,r)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){const r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=_o(t);for(const s of Object.keys(i))this.deactivateRouteAndItsChildren(i[s],o);if(r&&r.outlet){const s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:a})}}deactivateRouteAndOutlet(t,n){const r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=_o(t);for(const s of Object.keys(i))this.deactivateRouteAndItsChildren(i[s],o);r&&r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated(),r.attachRef=null,r.resolver=null,r.route=null)}activateChildRoutes(t,n,r){const o=_o(n);t.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],r),this.forwardEvent(new c1(i.value.snapshot))}),t.children.length&&this.forwardEvent(new l1(t.value.snapshot))}activateRoutes(t,n,r){const o=t.value,i=n?n.value:null;if(Bd(o),o===i)if(o.component){const a=r.getOrCreateContext(o.outlet);this.activateChildRoutes(t,n,a.children)}else this.activateChildRoutes(t,n,r);else if(o.component){const a=r.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){const l=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),a.children.onOutletReAttached(l.contexts),a.attachRef=l.componentRef,a.route=l.route.value,a.outlet&&a.outlet.attach(l.componentRef,l.route.value),Bd(l.route.value),this.activateChildRoutes(t,null,a.children)}else{var s;const l=Pi(o.snapshot),u=null!==(s=l?.get(Yo))&&void 0!==s?s:null;a.attachRef=null,a.route=o,a.resolver=u,a.injector=l,a.outlet&&a.outlet.activateWith(o,a.injector),this.activateChildRoutes(t,null,a.children)}}else this.activateChildRoutes(t,null,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class VD{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}}class La{constructor(t,n){this.component=t,this.route=n}}function S1(e,t,n){const r=e._root;return Oi(r,t?t._root:null,n,[r.value])}function Do(e,t){const n=Symbol(),r=t.get(e,n);return r===n?"function"!=typeof e||function cE(e){return null!==Yi(e)}(e)?t.get(e):e:r}function Oi(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){const i=_o(t);return e.children.forEach(s=>{(function I1(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){const i=e.value,s=t?t.value:null,a=n?n.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){const l=function A1(e,t,n){if("function"==typeof n)return n(e,t);switch(n){case"pathParamsChange":return!hr(e.url,t.url);case"pathParamsOrQueryParamsChange":return!hr(e.url,t.url)||!on(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Hd(e,t)||!on(e.queryParams,t.queryParams);default:return!Hd(e,t)}}(s,i,i.routeConfig.runGuardsAndResolvers);l?o.canActivateChecks.push(new VD(r)):(i.data=s.data,i._resolvedData=s._resolvedData),Oi(e,t,i.component?a?a.children:null:n,r,o),l&&a&&a.outlet&&a.outlet.isActivated&&o.canDeactivateChecks.push(new La(a.outlet.component,s))}else s&&ki(t,a,o),o.canActivateChecks.push(new VD(r)),Oi(e,null,i.component?a?a.children:null:n,r,o)})(s,i[s.value.outlet],n,r.concat([s.value]),o),delete i[s.value.outlet]}),$e(i,(s,a)=>ki(s,n.getContext(a),o)),o}function ki(e,t,n){const r=_o(e),o=e.value;$e(r,(i,s)=>{ki(i,o.component?t?t.children.getContext(s):null:t,n)}),n.canDeactivateChecks.push(new La(o.component&&t&&t.outlet&&t.outlet.isActivated?t.outlet.component:null,o))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Li(e){return"function"==typeof e}function qd(e){return e instanceof Ma||"EmptyError"===e?.name}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Va=Symbol("INITIAL_VALUE");function Co(){return rn(e=>J_(e.map(t=>t.pipe(Si(1),function CF(...e){const t=Mo(e);return Ee((n,r)=>{(t?Md(e,n,t):Md(e,n)).subscribe(r)})}(Va)))).pipe(U(t=>{for(const n of t)if(!0!==n){if(n===Va)return Va;if(!1===n||n instanceof fr)return n}return!0}),Sn(t=>t!==Va),Si(1)))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $D(e){return function Tw(...e){return Uf(e)}(qe(t=>{if(pr(t))throw ND(0,t)}),U(t=>!0===t))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Kd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function jD(e,t,n,r,o){const i=Zd(e,t,n);return i.matched?function z1(e,t,n,r){const o=t.canMatch;return o&&0!==o.length?A(o.map(s=>{const a=Do(s,e);return Wn(function P1(e){return e&&Li(e.canMatch)}(a)?a.canMatch(t,n):e.runInContext(()=>a(t,n)))})).pipe(Co(),$D()):A(!0)}(r=kD(t,r),t,n).pipe(U(s=>!0===s?i:{...Kd})):A(i)}function Zd(e,t,n){var r;if(""===t.path)return"full"===t.pathMatch&&(e.hasChildren()||n.length>0)?{...Kd}:{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};const i=(t.matcher||IF)(n,e,t);if(!i)return{...Kd};const s={};$e(i.posParams,(l,u)=>{s[u]=l.path});const a=i.consumed.length>0?{...s,...i.consumed[i.consumed.length-1].parameters}:s;return{matched:!0,consumedSegments:i.consumed,remainingSegments:n.slice(i.consumed.length),parameters:a,positionalParamSegments:null!==(r=i.posParams)&&void 0!==r?r:{}}}function $a(e,t,n,r,o="corrected"){if(n.length>0&&function K1(e,t,n){return n.some(r=>ja(e,t,r)&&Nt(r)!==H)}(e,n,r)){const s=new z(t,function q1(e,t,n,r){const o={};o[H]=r,r._sourceSegment=e,r._segmentIndexShift=t.length;for(const i of n)if(""===i.path&&Nt(i)!==H){const s=new z([],{});s._sourceSegment=e,s._segmentIndexShift=t.length,o[Nt(i)]=s}return o}(e,t,r,new z(n,e.children)));return s._sourceSegment=e,s._segmentIndexShift=t.length,{segmentGroup:s,slicedSegments:[]}}if(0===n.length&&function Z1(e,t,n){return n.some(r=>ja(e,t,r))}(e,n,r)){const s=new z(e.segments,function W1(e,t,n,r,o,i){const s={};for(const a of r)if(ja(e,n,a)&&!o[Nt(a)]){const l=new z([],{});l._sourceSegment=e,l._segmentIndexShift="legacy"===i?e.segments.length:t.length,s[Nt(a)]=l}return{...o,...s}}(e,t,n,r,e.children,o));return s._sourceSegment=e,s._segmentIndexShift=t.length,{segmentGroup:s,slicedSegments:n}}const i=new z(e.segments,e.children);return i._sourceSegment=e,i._segmentIndexShift=t.length,{segmentGroup:i,slicedSegments:n}}function ja(e,t,n){return(!(e.hasChildren()||t.length>0)||"full"!==n.pathMatch)&&""===n.path}function BD(e,t,n,r){return!!(Nt(e)===r||r!==H&&ja(t,n,e))&&("**"===e.path||Zd(t,e,n).matched)}function HD(e,t,n){return 0===t.length&&!e.children[n]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ba=!1;class Ha{constructor(t){this.segmentGroup=t||null}}class UD{constructor(t){this.urlTree=t}}function Vi(e){return Gn(new Ha(e))}function GD(e){return Gn(new UD(e))}class X1{constructor(t,n,r,o,i){this.injector=t,this.configLoader=n,this.urlSerializer=r,this.urlTree=o,this.config=i,this.allowRedirects=!0}apply(){const t=$a(this.urlTree.root,[],[],this.config).segmentGroup,n=new z(t.segments,t.children);return this.expandSegmentGroup(this.injector,this.config,n,H).pipe(U(i=>this.createUrlTree(Fa(i),this.urlTree.queryParams,this.urlTree.fragment))).pipe(qt(i=>{if(i instanceof UD)return this.allowRedirects=!1,this.match(i.urlTree);throw i instanceof Ha?this.noMatchError(i):i}))}match(t){return this.expandSegmentGroup(this.injector,this.config,t.root,H).pipe(U(o=>this.createUrlTree(Fa(o),t.queryParams,t.fragment))).pipe(qt(o=>{throw o instanceof Ha?this.noMatchError(o):o}))}noMatchError(t){return new C(4002,Ba)}createUrlTree(t,n,r){const o=Fd(t);return new fr(o,n,r)}expandSegmentGroup(t,n,r,o){return 0===r.segments.length&&r.hasChildren()?this.expandChildren(t,n,r).pipe(U(i=>new z([],i))):this.expandSegment(t,r,n,r.segments,o,!0)}expandChildren(t,n,r){const o=[];for(const i of Object.keys(r.children))"primary"===i?o.unshift(i):o.push(i);return be(o).pipe(Un(i=>{const s=r.children[i],a=LD(n,i);return this.expandSegmentGroup(t,a,s,i).pipe(U(l=>({segment:l,outlet:i})))}),rD((i,s)=>(i[s.outlet]=s.segment,i),{}),oD())}expandSegment(t,n,r,o,i,s){return be(r).pipe(Un(a=>this.expandSegmentAgainstRoute(t,n,r,a,o,i,s).pipe(qt(u=>{if(u instanceof Ha)return A(null);throw u}))),zn(a=>!!a),qt((a,l)=>{if(qd(a))return HD(n,o,i)?A(new z([],{})):Vi(n);throw a}))}expandSegmentAgainstRoute(t,n,r,o,i,s,a){return BD(o,n,i,s)?void 0===o.redirectTo?this.matchSegmentAgainstRoute(t,n,o,i,s):a&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s):Vi(n):Vi(n)}expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s){return"**"===o.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(t,r,o,s):this.expandRegularSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s)}expandWildCardWithParamsAgainstRouteUsingRedirect(t,n,r,o){const i=this.applyRedirectCommands([],r.redirectTo,{});return r.redirectTo.startsWith("/")?GD(i):this.lineralizeSegments(r,i).pipe(Ve(s=>{const a=new z(s,{});return this.expandSegment(t,a,n,s,o,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s){const{matched:a,consumedSegments:l,remainingSegments:u,positionalParamSegments:c}=Zd(n,o,i);if(!a)return Vi(n);const d=this.applyRedirectCommands(l,o.redirectTo,c);return o.redirectTo.startsWith("/")?GD(d):this.lineralizeSegments(o,d).pipe(Ve(f=>this.expandSegment(t,n,r,f.concat(u),s,!1)))}matchSegmentAgainstRoute(t,n,r,o,i){return"**"===r.path?(t=kD(r,t),r.loadChildren?(r._loadedRoutes?A({routes:r._loadedRoutes,injector:r._loadedInjector}):this.configLoader.loadChildren(t,r)).pipe(U(a=>(r._loadedRoutes=a.routes,r._loadedInjector=a.injector,new z(o,{})))):A(new z(o,{}))):jD(n,r,o,t).pipe(rn(({matched:s,consumedSegments:a,remainingSegments:l})=>{var u;return s?(t=null!==(u=r._injector)&&void 0!==u?u:t,this.getChildConfig(t,r,o).pipe(Ve(d=>{var f;const h=null!==(f=d.injector)&&void 0!==f?f:t,p=d.routes,{segmentGroup:g,slicedSegments:v}=$a(n,a,l,p),y=new z(g.segments,g.children);if(0===v.length&&y.hasChildren())return this.expandChildren(h,p,y).pipe(U($=>new z(a,$)));if(0===p.length&&0===v.length)return A(new z(a,{}));const w=Nt(r)===i;return this.expandSegment(h,y,p,v,w?H:i,!0).pipe(U(b=>new z(a.concat(b.segments),b.children)))}))):Vi(n)}))}getChildConfig(t,n,r){return n.children?A({routes:n.children,injector:t}):n.loadChildren?void 0!==n._loadedRoutes?A({routes:n._loadedRoutes,injector:n._loadedInjector}):function G1(e,t,n,r){const o=t.canLoad;return void 0===o||0===o.length?A(!0):A(o.map(s=>{const a=Do(s,e);return Wn(function x1(e){return e&&Li(e.canLoad)}(a)?a.canLoad(t,n):e.runInContext(()=>a(t,n)))})).pipe(Co(),$D())}(t,n,r).pipe(Ve(o=>o?this.configLoader.loadChildren(t,n).pipe(qe(i=>{n._loadedRoutes=i.routes,n._loadedInjector=i.injector})):function Y1(e){return Gn(RD(Ba,3))}())):A({routes:[],injector:t})}lineralizeSegments(t,n){let r=[],o=n.root;for(;;){if(r=r.concat(o.segments),0===o.numberOfChildren)return A(r);if(o.numberOfChildren>1||!o.children[H])return Gn(new C(4e3,Ba));o=o.children[H]}}applyRedirectCommands(t,n,r){return this.applyRedirectCreateUrlTree(n,this.urlSerializer.parse(n),t,r)}applyRedirectCreateUrlTree(t,n,r,o){const i=this.createSegmentGroup(t,n.root,r,o);return new fr(i,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){const r={};return $e(t,(o,i)=>{if("string"==typeof o&&o.startsWith(":")){const a=o.substring(1);r[i]=n[a]}else r[i]=o}),r}createSegmentGroup(t,n,r,o){const i=this.createSegments(t,n.segments,r,o);let s={};return $e(n.children,(a,l)=>{s[l]=this.createSegmentGroup(t,a,r,o)}),new z(i,s)}createSegments(t,n,r,o){return n.map(i=>i.path.startsWith(":")?this.findPosParam(t,i,o):this.findOrReturn(i,r))}findPosParam(t,n,r){const o=r[n.path.substring(1)];if(!o)throw new C(4001,Ba);return o}findOrReturn(t,n){let r=0;for(const o of n){if(o.path===t.path)return n.splice(r),o;r++}return t}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class tP{}class oP{constructor(t,n,r,o,i,s,a,l){this.injector=t,this.rootComponentType=n,this.config=r,this.urlTree=o,this.url=i,this.paramsInheritanceStrategy=s,this.relativeLinkResolution=a,this.urlSerializer=l}recognize(){const t=$a(this.urlTree.root,[],[],this.config.filter(n=>void 0===n.redirectTo),this.relativeLinkResolution).segmentGroup;return this.processSegmentGroup(this.injector,this.config,t,H).pipe(U(n=>{if(null===n)return null;const r=new Oa([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},H,this.rootComponentType,null,this.urlTree.root,-1,{}),o=new Tn(r,n),i=new TD(this.url,o);return this.inheritParamsAndData(i._root),i}))}inheritParamsAndData(t){const n=t.value,r=AD(n,this.paramsInheritanceStrategy);n.params=Object.freeze(r.params),n.data=Object.freeze(r.data),t.children.forEach(o=>this.inheritParamsAndData(o))}processSegmentGroup(t,n,r,o){return 0===r.segments.length&&r.hasChildren()?this.processChildren(t,n,r):this.processSegment(t,n,r,r.segments,o)}processChildren(t,n,r){return be(Object.keys(r.children)).pipe(Un(o=>{const i=r.children[o],s=LD(n,o);return this.processSegmentGroup(t,s,i,o)}),rD((o,i)=>o&&i?(o.push(...i),o):null),function bF(e,t=!1){return Ee((n,r)=>{let o=0;n.subscribe(_e(r,i=>{const s=e(i,o++);(s||t)&&r.next(i),!s&&r.complete()}))})}(o=>null!==o),Ia(null),oD(),U(o=>{if(null===o)return null;const i=zD(o);return function iP(e){e.sort((t,n)=>t.value.outlet===H?-1:n.value.outlet===H?1:t.value.outlet.localeCompare(n.value.outlet))}(i),i}))}processSegment(t,n,r,o,i){return be(n).pipe(Un(s=>{var a;return this.processSegmentAgainstRoute(null!==(a=s._injector)&&void 0!==a?a:t,s,r,o,i)}),zn(s=>!!s),qt(s=>{if(qd(s))return HD(r,o,i)?A([]):A(null);throw s}))}processSegmentAgainstRoute(t,n,r,o,i){if(n.redirectTo||!BD(n,r,o,i))return A(null);let s;if("**"===n.path){var a,l;const u=o.length>0?aD(o).parameters:{},c=qD(r)+o.length;s=A({snapshot:new Oa(o,u,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,ZD(n),Nt(n),null!==(a=null!==(l=n.component)&&void 0!==l?l:n._loadedComponent)&&void 0!==a?a:null,n,WD(r),c,QD(n),c),consumedSegments:[],remainingSegments:[]})}else s=jD(r,n,o,t).pipe(U(({matched:u,consumedSegments:c,remainingSegments:d,parameters:f})=>{var h,p;if(!u)return null;const g=qD(r)+c.length;return{snapshot:new Oa(c,f,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,ZD(n),Nt(n),null!==(h=null!==(p=n.component)&&void 0!==p?p:n._loadedComponent)&&void 0!==h?h:null,n,WD(r),g,QD(n),g),consumedSegments:c,remainingSegments:d}}));return s.pipe(rn(u=>{var c,d;if(null===u)return A(null);const{snapshot:f,consumedSegments:h,remainingSegments:p}=u;t=null!==(c=n._injector)&&void 0!==c?c:t;const g=null!==(d=n._loadedInjector)&&void 0!==d?d:t,v=function sP(e){return e.children?e.children:e.loadChildren?e._loadedRoutes:[]}(n),{segmentGroup:y,slicedSegments:w}=$a(r,h,p,v.filter(b=>void 0===b.redirectTo),this.relativeLinkResolution);if(0===w.length&&y.hasChildren())return this.processChildren(g,v,y).pipe(U(b=>null===b?null:[new Tn(f,b)]));if(0===v.length&&0===w.length)return A([new Tn(f,[])]);const m=Nt(n)===i;return this.processSegment(g,v,y,w,m?H:i).pipe(U(b=>null===b?null:[new Tn(f,b)]))}))}}function aP(e){const t=e.value.routeConfig;return t&&""===t.path&&void 0===t.redirectTo}function zD(e){const t=[],n=new Set;for(const r of e){if(!aP(r)){t.push(r);continue}const o=t.find(i=>r.value.routeConfig===i.value.routeConfig);void 0!==o?(o.children.push(...r.children),n.add(o)):t.push(r)}for(const r of n){const o=zD(r.children);t.push(new Tn(r.value,o))}return t.filter(r=>!n.has(r))}function WD(e){let t=e;for(;t._sourceSegment;)t=t._sourceSegment;return t}function qD(e){var t;let n=e,r=null!==(t=n._segmentIndexShift)&&void 0!==t?t:0;for(;n._sourceSegment;){var o;n=n._sourceSegment,r+=null!==(o=n._segmentIndexShift)&&void 0!==o?o:0}return r-1}function ZD(e){return e.data||{}}function QD(e){return e.resolve||{}}
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
       */function Qd(e){return rn(t=>{const n=e(t);return n?be(n).pipe(U(()=>t)):A(t)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let JD=(()=>{class e{buildTitle(n){let r,o=n.root;for(;void 0!==o;){var i;r=null!==(i=this.getResolvedTitleForRoute(o))&&void 0!==i?i:r,o=o.children.find(s=>s.outlet===H)}return r}getResolvedTitleForRoute(n){return n.data[Mi]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:function(){return De(XD)},providedIn:"root"}),e})(),XD=(()=>{class e extends JD{constructor(n){super(),this.title=n}updateTitle(n){const r=this.buildTitle(n);void 0!==r&&this.title.setTitle(r)}}return e.\u0275fac=function(n){return new(n||e)(M(O_))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
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
class gP{}class yP extends class mP{shouldDetach(t){return!1}store(t,n){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,n){return t.routeConfig===n.routeConfig}}{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ga=new I("",{providedIn:"root",factory:()=>({})}),Yd=new I("ROUTES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Jd=(()=>{class e{constructor(n,r){this.injector=n,this.compiler=r,this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap}loadComponent(n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return A(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);const r=Wn(n.loadComponent()).pipe(qe(i=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=i}),Td(()=>{this.componentLoaders.delete(n)})),o=new tD(r,()=>new ut).pipe(Id());return this.componentLoaders.set(n,o),o}loadChildren(n,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return A({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);const i=this.loadModuleFactoryOrRoutes(r.loadChildren).pipe(U(a=>{this.onLoadEndListener&&this.onLoadEndListener(r);let l,u,c=!1;Array.isArray(a)?u=a:(l=a.create(n).injector,u=sD(l.get(Yd,[],N.Self|N.Optional)));return{routes:u.map(Wd),injector:l}}),Td(()=>{this.childrenLoaders.delete(r)})),s=new tD(i,()=>new ut).pipe(Id());return this.childrenLoaders.set(r,s),s}loadModuleFactoryOrRoutes(n){return Wn(n()).pipe(Ve(r=>r instanceof Ny||Array.isArray(r)?A(r):be(this.compiler.compileModuleAsync(r))))}}return e.\u0275fac=function(n){return new(n||e)(M(_t),M(Oc))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class _P{}class DP{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,n){return t}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function CP(e){throw e}function wP(e,t,n){return t.parse("/")}const EP={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},bP={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function tC(){var e,t;const n=De(hD),r=De(Fi),o=De(Qc),i=De(_t),s=De(Oc),a=null!==(e=De(Yd,{optional:!0}))&&void 0!==e?e:[],l=null!==(t=De(Ga,{optional:!0}))&&void 0!==t?t:{},u=De(XD),c=De(JD,{optional:!0}),d=De(_P,{optional:!0}),f=De(gP,{optional:!0}),h=new je(null,n,r,o,i,s,sD(a));return d&&(h.urlHandlingStrategy=d),f&&(h.routeReuseStrategy=f),h.titleStrategy=c??u,function SP(e,t){e.errorHandler&&(t.errorHandler=e.errorHandler),e.malformedUriErrorHandler&&(t.malformedUriErrorHandler=e.malformedUriErrorHandler),e.onSameUrlNavigation&&(t.onSameUrlNavigation=e.onSameUrlNavigation),e.paramsInheritanceStrategy&&(t.paramsInheritanceStrategy=e.paramsInheritanceStrategy),e.relativeLinkResolution&&(t.relativeLinkResolution=e.relativeLinkResolution),e.urlUpdateStrategy&&(t.urlUpdateStrategy=e.urlUpdateStrategy),e.canceledNavigationResolution&&(t.canceledNavigationResolution=e.canceledNavigationResolution)}(l,h),h}let je=(()=>{class e{constructor(n,r,o,i,s,a,l){this.rootComponentType=n,this.urlSerializer=r,this.rootContexts=o,this.location=i,this.config=l,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new ut,this.errorHandler=CP,this.malformedUriErrorHandler=wP,this.navigated=!1,this.lastSuccessfulId=-1,this.afterPreactivation=()=>A(void 0),this.urlHandlingStrategy=new DP,this.routeReuseStrategy=new yP,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.configLoader=s.get(Jd),this.configLoader.onLoadEndListener=f=>this.triggerEvent(new s1(f)),this.configLoader.onLoadStartListener=f=>this.triggerEvent(new i1(f)),this.ngModule=s.get(ur),this.console=s.get(qT);const d=s.get(Pe);this.isNgZoneEnabled=d instanceof Pe&&Pe.isInAngularZone(),this.resetConfig(l),this.currentUrlTree=function TF(){return new fr(new z([],{}),{},null)}(),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=ID(this.currentUrlTree,this.rootComponentType),this.transitions=new Wt({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){var n;return null===(n=this.location.getState())||void 0===n?void 0:n.\u0275routerPageId}setupNavigations(n){const r=this.events;return n.pipe(Sn(o=>0!==o.id),U(o=>({...o,extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),rn(o=>{let i=!1,s=!1;return A(o).pipe(qe(a=>{this.currentNavigation={id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,trigger:a.source,extras:a.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),rn(a=>{const l=this.browserUrlTree.toString(),u=!this.navigated||a.extractedUrl.toString()!==l||l!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||u)&&this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return nC(a.source)&&(this.browserUrlTree=a.extractedUrl),A(a).pipe(rn(d=>{const f=this.transitions.getValue();return r.next(new Ld(d.id,this.serializeUrl(d.extractedUrl),d.source,d.restoredState)),f!==this.transitions.getValue()?ln:Promise.resolve(d)}),function eP(e,t,n,r){return rn(o=>function J1(e,t,n,r,o){return new X1(e,t,n,r,o).apply()}(e,t,n,o.extractedUrl,r).pipe(U(i=>({...o,urlAfterRedirects:i}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),qe(d=>{this.currentNavigation={...this.currentNavigation,finalUrl:d.urlAfterRedirects},o.urlAfterRedirects=d.urlAfterRedirects}),function uP(e,t,n,r,o,i){return Ve(s=>function rP(e,t,n,r,o,i,s="emptyOnly",a="legacy"){return new oP(e,t,n,r,o,s,a,i).recognize().pipe(rn(l=>null===l?function nP(e){return new ve(t=>t.error(e))}(new tP):A(l)))}(e,t,n,s.urlAfterRedirects,r.serialize(s.urlAfterRedirects),r,o,i).pipe(U(a=>({...s,targetSnapshot:a}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.rootComponentType,this.config,this.urlSerializer,this.paramsInheritanceStrategy,this.relativeLinkResolution),qe(d=>{if(o.targetSnapshot=d.targetSnapshot,"eager"===this.urlUpdateStrategy){if(!d.extras.skipLocationChange){const h=this.urlHandlingStrategy.merge(d.urlAfterRedirects,d.rawUrl);this.setBrowserUrl(h,d)}this.browserUrlTree=d.urlAfterRedirects}const f=new e1(d.id,this.serializeUrl(d.extractedUrl),this.serializeUrl(d.urlAfterRedirects),d.targetSnapshot);r.next(f)}));if(u&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:f,extractedUrl:h,source:p,restoredState:g,extras:v}=a,y=new Ld(f,this.serializeUrl(h),p,g);r.next(y);const w=ID(h,this.rootComponentType).snapshot;return A(o={...a,targetSnapshot:w,urlAfterRedirects:h,extras:{...v,skipLocationChange:!1,replaceUrl:!1}})}return this.rawUrlTree=a.rawUrl,a.resolve(null),ln}),qe(a=>{const l=new t1(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot);this.triggerEvent(l)}),U(a=>o={...a,guards:S1(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),function k1(e,t){return Ve(n=>{const{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return 0===s.length&&0===i.length?A({...n,guardsResult:!0}):function L1(e,t,n,r){return be(e).pipe(Ve(o=>function U1(e,t,n,r,o){const i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;return i&&0!==i.length?A(i.map(a=>{var l;const u=null!==(l=Pi(t))&&void 0!==l?l:o,c=Do(a,u);return Wn(function F1(e){return e&&Li(e.canDeactivate)}(c)?c.canDeactivate(e,t,n,r):u.runInContext(()=>c(e,t,n,r))).pipe(zn())})).pipe(Co()):A(!0)}(o.component,o.route,n,t,r)),zn(o=>!0!==o,!0))}(s,r,o,e).pipe(Ve(a=>a&&function T1(e){return"boolean"==typeof e}(a)?function V1(e,t,n,r){return be(t).pipe(Un(o=>Md(function j1(e,t){return null!==e&&t&&t(new a1(e)),A(!0)}(o.route.parent,r),function $1(e,t){return null!==e&&t&&t(new u1(e)),A(!0)}(o.route,r),function H1(e,t,n){const r=t[t.length-1],i=t.slice(0,t.length-1).reverse().map(s=>function M1(e){const t=e.routeConfig?e.routeConfig.canActivateChild:null;return t&&0!==t.length?{node:e,guards:t}:null}(s)).filter(s=>null!==s).map(s=>eD(()=>A(s.guards.map(l=>{var u;const c=null!==(u=Pi(s.node))&&void 0!==u?u:n,d=Do(l,c);return Wn(function R1(e){return e&&Li(e.canActivateChild)}(d)?d.canActivateChild(r,e):c.runInContext(()=>d(r,e))).pipe(zn())})).pipe(Co())));return A(i).pipe(Co())}(e,o.path,n),function B1(e,t,n){const r=t.routeConfig?t.routeConfig.canActivate:null;if(!r||0===r.length)return A(!0);const o=r.map(i=>eD(()=>{var s;const a=null!==(s=Pi(t))&&void 0!==s?s:n,l=Do(i,a);return Wn(function N1(e){return e&&Li(e.canActivate)}(l)?l.canActivate(t,e):a.runInContext(()=>l(t,e))).pipe(zn())}));return A(o).pipe(Co())}(e,o.route,n))),zn(o=>!0!==o,!0))}(r,i,e,t):A(a)),U(a=>({...n,guardsResult:a})))})}(this.ngModule.injector,a=>this.triggerEvent(a)),qe(a=>{if(o.guardsResult=a.guardsResult,pr(a.guardsResult))throw ND(0,a.guardsResult);const l=new n1(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);this.triggerEvent(l)}),Sn(a=>!!a.guardsResult||(this.restoreHistory(a),this.cancelNavigationTransition(a,"",3),!1)),Qd(a=>{if(a.guards.canActivateChecks.length)return A(a).pipe(qe(l=>{const u=new r1(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(l.urlAfterRedirects),l.targetSnapshot);this.triggerEvent(u)}),rn(l=>{let u=!1;return A(l).pipe(function cP(e,t){return Ve(n=>{const{targetSnapshot:r,guards:{canActivateChecks:o}}=n;if(!o.length)return A(n);let i=0;return be(o).pipe(Un(s=>function dP(e,t,n,r){const o=e.routeConfig,i=e._resolve;return void 0!==o?.title&&!YD(o)&&(i[Mi]=o.title),function fP(e,t,n,r){const o=function hP(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}(e);if(0===o.length)return A({});const i={};return be(o).pipe(Ve(s=>function pP(e,t,n,r){var o;const i=null!==(o=Pi(t))&&void 0!==o?o:r,s=Do(e,i);return Wn(s.resolve?s.resolve(t,n):i.runInContext(()=>s(t,n)))}(e[s],t,n,r).pipe(zn(),qe(a=>{i[s]=a}))),Ad(1),function SF(e){return U(()=>e)}(i),qt(s=>qd(s)?ln:Gn(s)))}(i,e,t,r).pipe(U(s=>(e._resolvedData=s,e.data=AD(e,n).resolve,o&&YD(o)&&(e.data[Mi]=o.title),null)))}(s.route,r,e,t)),qe(()=>i++),Ad(1),Ve(s=>i===o.length?A(n):ln))})}(this.paramsInheritanceStrategy,this.ngModule.injector),qe({next:()=>u=!0,complete:()=>{u||(this.restoreHistory(l),this.cancelNavigationTransition(l,"",2))}}))}),qe(l=>{const u=new o1(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(l.urlAfterRedirects),l.targetSnapshot);this.triggerEvent(u)}))}),Qd(a=>{const l=u=>{var c;const d=[];null!==(c=u.routeConfig)&&void 0!==c&&c.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(qe(f=>{u.component=f}),U(()=>{})));for(const f of u.children)d.push(...l(f));return d};return J_(l(a.targetSnapshot.root)).pipe(Ia(),Si(1))}),Qd(()=>this.afterPreactivation()),U(a=>{const l=function p1(e,t,n){const r=Ri(e,t._root,n?n._root:void 0);return new MD(r,t)}(this.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return o={...a,targetRouterState:l}}),qe(a=>{this.currentUrlTree=a.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(a.urlAfterRedirects,a.rawUrl),this.routerState=a.targetRouterState,"deferred"===this.urlUpdateStrategy&&(a.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,a),this.browserUrlTree=a.urlAfterRedirects)}),((e,t,n)=>U(r=>(new b1(t,r.targetRouterState,r.currentRouterState,n).activate(e),r)))(this.rootContexts,this.routeReuseStrategy,a=>this.triggerEvent(a)),qe({next(){i=!0},complete(){i=!0}}),Td(()=>{var a;i||s||this.cancelNavigationTransition(o,"",1),(null===(a=this.currentNavigation)||void 0===a?void 0:a.id)===o.id&&(this.currentNavigation=null)}),qt(a=>{if(s=!0,PD(a)){FD(a)||(this.navigated=!0,this.restoreHistory(o,!0));const u=new Pa(o.id,this.serializeUrl(o.extractedUrl),a.message,a.cancellationCode);if(r.next(u),FD(a)){const c=this.urlHandlingStrategy.merge(a.url,this.rawUrlTree),d={skipLocationChange:o.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||nC(o.source)};this.scheduleNavigation(c,"imperative",null,d,{resolve:o.resolve,reject:o.reject,promise:o.promise})}else o.resolve(!1)}else{var l;this.restoreHistory(o,!0);const u=new ED(o.id,this.serializeUrl(o.extractedUrl),a,null!==(l=o.targetSnapshot)&&void 0!==l?l:void 0);r.next(u);try{o.resolve(this.errorHandler(a))}catch(c){o.reject(c)}}return ln}))}))}resetRootComponentType(n){this.rootComponentType=n,this.routerState.root.component=this.rootComponentType}setTransition(n){this.transitions.next({...this.transitions.value,...n})}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(n=>{const r="popstate"===n.type?"popstate":"hashchange";"popstate"===r&&setTimeout(()=>{var o;const i={replaceUrl:!0},s=null!==(o=n.state)&&void 0!==o&&o.navigationId?n.state:null;if(s){const l={...s};delete l.navigationId,delete l.\u0275routerPageId,0!==Object.keys(l).length&&(i.state=l)}const a=this.parseUrl(n.url);this.scheduleNavigation(a,r,s,i)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(n){this.events.next(n)}resetConfig(n){this.config=n.map(Wd),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(n,r={}){const{relativeTo:o,queryParams:i,fragment:s,queryParamsHandling:a,preserveFragment:l}=r,u=o||this.routerState.root,c=l?this.currentUrlTree.fragment:s;let d=null;switch(a){case"merge":d={...this.currentUrlTree.queryParams,...i};break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=i||null}return null!==d&&(d=this.removeEmptyProps(d)),KF(u,this.currentUrlTree,n,d,c??null)}navigateByUrl(n,r={skipLocationChange:!1}){const o=pr(n)?n:this.parseUrl(n),i=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(i,"imperative",null,r)}navigate(n,r={skipLocationChange:!1}){return function MP(e){for(let t=0;t<e.length;t++){if(null==e[t])throw new C(4008,false)}}(n),this.navigateByUrl(this.createUrlTree(n,r),r)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){let r;try{r=this.urlSerializer.parse(n)}catch(o){r=this.malformedUriErrorHandler(o,this.urlSerializer,n)}return r}isActive(n,r){let o;if(o=!0===r?{...EP}:!1===r?{...bP}:r,pr(n))return uD(this.currentUrlTree,n,o);const i=this.parseUrl(n);return uD(this.currentUrlTree,i,o)}removeEmptyProps(n){return Object.keys(n).reduce((r,o)=>{const i=n[o];return null!=i&&(r[o]=i),r},{})}processNavigations(){this.navigations.subscribe(n=>{var r;this.navigated=!0,this.lastSuccessfulId=n.id,this.currentPageId=n.targetPageId,this.events.next(new gr(n.id,this.serializeUrl(n.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,null===(r=this.titleStrategy)||void 0===r||r.updateTitle(this.routerState.snapshot),n.resolve(!0)},n=>{this.console.warn(`Unhandled Navigation Error: ${n}`)})}scheduleNavigation(n,r,o,i,s){if(this.disposed)return Promise.resolve(!1);let a,l,u;s?(a=s.resolve,l=s.reject,u=s.promise):u=new Promise((p,g)=>{a=p,l=g});const c=++this.navigationId;let d;if("computed"===this.canceledNavigationResolution)if(0===this.currentPageId&&(o=this.location.getState()),o&&o.\u0275routerPageId)d=o.\u0275routerPageId;else if(i.replaceUrl||i.skipLocationChange){var f;d=null!==(f=this.browserPageId)&&void 0!==f?f:0}else{var h;d=(null!==(h=this.browserPageId)&&void 0!==h?h:0)+1}else d=0;return this.setTransition({id:c,targetPageId:d,source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:n,extras:i,resolve:a,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(p=>Promise.reject(p))}setBrowserUrl(n,r){const o=this.urlSerializer.serialize(n),i={...r.extras.state,...this.generateNgRouterState(r.id,r.targetPageId)};this.location.isCurrentPathEqualTo(o)||r.extras.replaceUrl?this.location.replaceState(o,"",i):this.location.go(o,"",i)}restoreHistory(n,r=!1){if("computed"===this.canceledNavigationResolution){var o,i;const s=this.currentPageId-n.targetPageId;"popstate"!==n.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==(null===(o=this.currentNavigation)||void 0===o?void 0:o.finalUrl)||0===s?this.currentUrlTree===(null===(i=this.currentNavigation)||void 0===i?void 0:i.finalUrl)&&0===s&&(this.resetState(n),this.browserUrlTree=n.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(s)}else"replace"===this.canceledNavigationResolution&&(r&&this.resetState(n),this.resetUrlToCurrentUrlTree())}resetState(n){this.routerState=n.currentRouterState,this.currentUrlTree=n.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(n,r,o){const i=new Pa(n.id,this.serializeUrl(n.extractedUrl),r,o);this.triggerEvent(i),n.resolve(!1)}generateNgRouterState(n,r){return"computed"===this.canceledNavigationResolution?{navigationId:n,\u0275routerPageId:r}:{navigationId:n}}}return e.\u0275fac=function(n){Pu()},e.\u0275prov=x({token:e,factory:function(){return tC()},providedIn:"root"}),e})();function nC(e){return"imperative"!==e}
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
class rC{}let TP=(()=>{class e{constructor(n,r,o,i,s){this.router=n,this.injector=o,this.preloadingStrategy=i,this.loader=s}setUpPreloading(){this.subscription=this.router.events.pipe(Sn(n=>n instanceof gr),Un(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(n,r){const o=[];for(const l of r){var i,s;l.providers&&!l._injector&&(l._injector=Ks(l.providers,n,`Route: ${l.path}`));const u=null!==(i=l._injector)&&void 0!==i?i:n,c=null!==(s=l._loadedInjector)&&void 0!==s?s:u;if(l.loadChildren&&!l._loadedRoutes&&void 0===l.canLoad||l.loadComponent&&!l._loadedComponent)o.push(this.preloadConfig(u,l));else if(l.children||l._loadedRoutes){var a;o.push(this.processRoutes(c,null!==(a=l.children)&&void 0!==a?a:l._loadedRoutes))}}return be(o).pipe(Cr())}preloadConfig(n,r){return this.preloadingStrategy.preload(r,()=>{let o;o=r.loadChildren&&void 0===r.canLoad?this.loader.loadChildren(n,r):A(null);const i=o.pipe(Ve(s=>{var a;return null===s?A(void 0):(r._loadedRoutes=s.routes,r._loadedInjector=s.injector,this.processRoutes(null!==(a=s.injector)&&void 0!==a?a:n,s.routes))}));return r.loadComponent&&!r._loadedComponent?be([i,this.loader.loadComponent(r)]).pipe(Cr()):i})}}return e.\u0275fac=function(n){return new(n||e)(M(je),M(Oc),M(Vn),M(rC),M(Jd))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const tf=new I("");let oC=(()=>{class e{constructor(n,r,o={}){this.router=n,this.viewportScroller=r,this.options=o,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},o.scrollPositionRestoration=o.scrollPositionRestoration||"disabled",o.anchorScrolling=o.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(n=>{n instanceof Ld?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=n.navigationTrigger,this.restoredId=n.restoredState?n.restoredState.navigationId:0):n instanceof gr&&(this.lastId=n.id,this.scheduleScrollEvent(n,this.router.parseUrl(n.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(n=>{n instanceof bD&&(n.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(n.position):n.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(n.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(n,r){this.router.triggerEvent(new bD(n,"popstate"===this.lastSource?this.store[this.restoredId]:null,r))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return e.\u0275fac=function(n){Pu()},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function wo(e,t){return{\u0275kind:e,\u0275providers:t}}function nf(e){return[{provide:Yd,multi:!0,useValue:e}]}function sC(){const e=De(_t);return t=>{var n,r;const o=e.get(ta);if(t!==o.components[0])return;const i=e.get(je),s=e.get(aC);1===e.get(rf)&&i.initialNavigation(),null===(n=e.get(lC,null,N.Optional))||void 0===n||n.setUpPreloading(),null===(r=e.get(tf,null,N.Optional))||void 0===r||r.init(),i.resetRootComponentType(o.componentTypes[0]),s.next(),s.complete()}}const aC=new I("",{factory:()=>new ut}),rf=new I("",{providedIn:"root",factory:()=>1});const lC=new I("");function FP(e){return wo(0,[{provide:lC,useExisting:TP},{provide:rC,useExisting:e}])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const uC=new I("ROUTER_FORROOT_GUARD"),PP=[Qc,{provide:hD,useClass:Nd},{provide:je,useFactory:tC},Fi,{provide:mr,useFactory:function iC(e){return e.routerState.root},deps:[je]},Jd];function OP(){return new Mv("Router",je)}let cC=(()=>{class e{constructor(n){}static forRoot(n,r){return{ngModule:e,providers:[PP,[],nf(n),{provide:uC,useFactory:$P,deps:[[je,new Go,new zo]]},{provide:Ga,useValue:r||{}},null!=r&&r.useHash?{provide:dr,useClass:Ox}:{provide:dr,useClass:Yv},{provide:tf,useFactory:()=>{const e=De(je),t=De(eR),n=De(Ga);return n.scrollOffset&&t.setOffset(n.scrollOffset),new oC(e,t,n)}},null!=r&&r.preloadingStrategy?FP(r.preloadingStrategy).\u0275providers:[],{provide:Mv,multi:!0,useFactory:OP},null!=r&&r.initialNavigation?jP(r):[],[{provide:dC,useFactory:sC},{provide:_v,multi:!0,useExisting:dC}]]}}static forChild(n){return{ngModule:e,providers:[nf(n)]}}}return e.\u0275fac=function(n){return new(n||e)(M(uC,8))},e.\u0275mod=Et({type:e}),e.\u0275inj=ft({imports:[Gd]}),e})();function $P(e){return"guarded"}function jP(e){return["disabled"===e.initialNavigation?wo(3,[{provide:Js,multi:!0,useFactory:()=>{const t=De(je);return()=>{t.setUpLocationChangeListener()}}},{provide:rf,useValue:2}]).\u0275providers:[],"enabledBlocking"===e.initialNavigation?wo(2,[{provide:rf,useValue:0},{provide:Js,multi:!0,deps:[_t],useFactory:t=>{const n=t.get(Fx,Promise.resolve());let r=!1;return()=>n.then(()=>new Promise(i=>{const s=t.get(je),a=t.get(aC);(function o(i){t.get(je).events.pipe(Sn(a=>a instanceof gr||a instanceof Pa||a instanceof ED),U(a=>a instanceof gr||a instanceof Pa&&(0===a.code||1===a.code)&&null),Sn(a=>null!==a),Si(1)).subscribe(()=>{i()})})(()=>{i(!0),r=!0}),s.afterPreactivation=()=>(i(!0),r||a.closed?A(void 0):a),s.initialNavigation()}))}}]).\u0275providers:[]]}const dC=new I(""),HP=[];let UP=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ft({imports:[cC.forRoot(HP),cC]}),e})(),$i=(()=>{class e{constructor(n){this.http=n,this.query="",this.results={isLoading:!0,count:0,totalPosts:0,startIndex:0,endIndex:0,currentPage:0,totalPages:0,types:[]},this.params={selectedCollege:"",collegeFullName:"",selectedProgramType:"",programTypeFullName:"",limit:25,page:1},this.resultsSource=new ut,this.querySource=new ut,this.paramsSource=new ut,this.results$=this.resultsSource.asObservable(),this.query$=this.querySource.asObservable(),this.params$=this.paramsSource.asObservable(),this.searchUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/degrees",this.subscription=this.query$.subscribe(r=>{this.query=r,this.getResults()}),this.subscription=this.params$.subscribe(r=>{this.params=r,this.getResults()})}setQuery(n){this.querySource.next(n)}setProgramType(n,r){this.params.selectedProgramType=n,this.params.programTypeFullName=r,this.paramsSource.next(this.params)}setCollege(n,r){this.params.selectedCollege=n,this.params.collegeFullName=r,this.paramsSource.next(this.params)}getResults(){const n={params:(new In).set("colleges",this.params.selectedCollege).set("limit",this.params.limit).set("page",this.params.page).set("program_types",this.params.selectedProgramType).set("search",this.query)};this.results.isLoading=!0,this.resultsSource.next(this.results),this.http.get(this.searchUrl,n).pipe(qt(this.handleError)).subscribe(r=>{r.isLoading=!1,this.resultsSource.next(r)})}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),Gn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(M(Sa))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),fC=(()=>{class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}}return e.\u0275fac=function(n){return new(n||e)(D(gn),D(vt))},e.\u0275dir=P({type:e}),e})(),yr=(()=>{class e extends fC{}return e.\u0275fac=function(){let t;return function(r){return(t||(t=function Ue(e){return Nn(()=>{const t=e.prototype.constructor,n=t[cn]||Bl(t),r=Object.prototype;let o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){const i=o[cn]||Bl(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}(e)))(r||e)}}(),e.\u0275dir=P({type:e,features:[ee]}),e})();const sn=new I("NgValueAccessor"),WP={provide:sn,useExisting:se(()=>Ka),multi:!0},KP=new I("CompositionEventMode");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ka=(()=>{class e extends fC{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function qP(){const e=nn()?nn().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(n){this.setProperty("value",n??"")}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}}return e.\u0275fac=function(n){return new(n||e)(D(gn),D(vt),D(KP,8))},e.\u0275dir=P({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){1&n&&Le("input",function(i){return r._handleInput(i.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(i){return r._compositionEnd(i.target.value)})},features:[ce([WP]),ee]}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ke=new I("NgValidators"),Kn=new I("NgAsyncValidators");function EC(e){return null!=e}function bC(e){return si(e)?be(e):e}function SC(e){let t={};return e.forEach(n=>{t=null!=n?{...t,...n}:t}),0===Object.keys(t).length?null:t}function MC(e,t){return t.map(n=>n(e))}function IC(e){return e.map(t=>function YP(e){return!e.validate}(t)?t:n=>t.validate(n))}function sf(e){return null!=e?function AC(e){if(!e)return null;const t=e.filter(EC);return 0==t.length?null:function(n){return SC(MC(n,t))}}(IC(e)):null}function af(e){return null!=e?function TC(e){if(!e)return null;const t=e.filter(EC);return 0==t.length?null:function(n){return function GP(...e){const t=sh(e),{args:n,keys:r}=Z_(e),o=new ve(i=>{const{length:s}=n;if(!s)return void i.complete();const a=new Array(s);let l=s,u=s;for(let c=0;c<s;c++){let d=!1;Rt(n[c]).subscribe(_e(i,f=>{d||(d=!0,u--),a[c]=f},()=>l--,void 0,()=>{(!l||!d)&&(u||i.next(r?Y_(r,a):a),i.complete())}))}});return t?o.pipe(Q_(t)):o}
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
       */(MC(n,t).map(bC)).pipe(U(SC))}}(IC(e)):null}function xC(e,t){return null===e?[t]:Array.isArray(e)?[...e,t]:[e,t]}function NC(e){return e._rawValidators}function RC(e){return e._rawAsyncValidators}function lf(e){return e?Array.isArray(e)?e:[e]:[]}function Qa(e,t){return Array.isArray(e)?e.includes(t):e===t}function FC(e,t){const n=lf(t);return lf(e).forEach(o=>{Qa(n,o)||n.push(o)}),n}function PC(e,t){return lf(t).filter(n=>!Qa(e,n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class OC{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=sf(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=af(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,n){return!!this.control&&this.control.hasError(t,n)}getError(t,n){return this.control?this.control.getError(t,n):null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class rt extends OC{get formDirective(){return null}get path(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Zn extends OC{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class kC{constructor(t){this._cd=t}get isTouched(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.touched)}get isUntouched(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.untouched)}get isPristine(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.pristine)}get isDirty(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.dirty)}get isValid(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.valid)}get isInvalid(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.invalid)}get isPending(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.pending)}get isSubmitted(){var t;return!(null===(t=this._cd)||void 0===t||!t.submitted)}}let LC=(()=>{class e extends kC{constructor(n){super(n)}}return e.\u0275fac=function(n){return new(n||e)(D(Zn,2))},e.\u0275dir=P({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){2&n&&Hs("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[ee]}),e})(),VC=(()=>{class e extends kC{constructor(n){super(n)}}return e.\u0275fac=function(n){return new(n||e)(D(rt,10))},e.\u0275dir=P({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){2&n&&Hs("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[ee]}),e})();
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
const ji="VALID",Ja="INVALID",Eo="PENDING",Bi="DISABLED";function jC(e){return Array.isArray(e)?sf(e):e||null}function BC(e){return Array.isArray(e)?af(e):e||null}function Xa(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}function Hi(e,t){var n,r;(function gf(e,t){const n=NC(e);null!==t.validator?e.setValidators(xC(n,t.validator)):"function"==typeof n&&e.setValidators([n]);const r=RC(e);null!==t.asyncValidator?e.setAsyncValidators(xC(r,t.asyncValidator)):"function"==typeof r&&e.setAsyncValidators([r]);const o=()=>e.updateValueAndValidity();nl(t._rawValidators,o),nl(t._rawAsyncValidators,o)})(e,t),t.valueAccessor.writeValue(e.value),e.disabled&&(null===(n=(r=t.valueAccessor).setDisabledState)||void 0===n||n.call(r,!0)),function sO(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&zC(e,t)})}(e,t),function lO(e,t){const n=(r,o)=>{t.valueAccessor.writeValue(r),o&&t.viewToModelUpdate(r)};e.registerOnChange(n),t._registerOnDestroy(()=>{e._unregisterOnChange(n)})}(e,t),function aO(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&zC(e,t),"submit"!==e.updateOn&&e.markAsTouched()})}(e,t),function iO(e,t){if(t.valueAccessor.setDisabledState){const n=r=>{t.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(n),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(n)})}}(e,t)}function tl(e,t,n=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),function rl(e,t){let n=!1;if(null!==e){if(null!==t.validator){const o=NC(e);if(Array.isArray(o)&&o.length>0){const i=o.filter(s=>s!==t.validator);i.length!==o.length&&(n=!0,e.setValidators(i))}}if(null!==t.asyncValidator){const o=RC(e);if(Array.isArray(o)&&o.length>0){const i=o.filter(s=>s!==t.asyncValidator);i.length!==o.length&&(n=!0,e.setAsyncValidators(i))}}}const r=()=>{};return nl(t._rawValidators,r),nl(t._rawAsyncValidators,r),n}(e,t),e&&(t._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function nl(e,t){e.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(t)})}function zC(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ZC(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function QC(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}let tw=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=P({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),e})(),rw=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ft({}),e})();
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
const Df=new I("NgModelWithFormControlWarning"),CO={provide:Zn,useExisting:se(()=>Cf)};let Cf=(()=>{class e extends Zn{constructor(n,r,o,i){super(),this._ngModelWarningConfig=i,this.update=new ye,this._ngModelWarningSent=!1,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=function yf(e,t){if(!t)return null;let n,r,o;return Array.isArray(t),t.forEach(i=>{i.constructor===Ka?n=i:function dO(e){return Object.getPrototypeOf(e.constructor)===yr}(i)?r=i:o=i}),o||r||n||null}(0,o)}set isDisabled(n){}ngOnChanges(n){if(this._isControlChanged(n)){const r=n.form.previousValue;r&&tl(r,this,!1),Hi(this.form,this),this.form.updateValueAndValidity({emitEvent:!1})}(function mf(e,t){if(!e.hasOwnProperty("model"))return!1;const n=e.model;return!!n.isFirstChange()||!Object.is(t,n.currentValue)})(n,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&tl(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_isControlChanged(n){return n.hasOwnProperty("form")}}return e._ngModelWarningSentOnce=!1,e.\u0275fac=function(n){return new(n||e)(D(Ke,10),D(Kn,10),D(sn,10),D(Df,8))},e.\u0275dir=P({type:e,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[ce([CO]),ee,St]}),e})(),jO=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ft({imports:[rw]}),e})(),BO=(()=>{class e{static withConfig(n){return{ngModule:e,providers:[{provide:Df,useValue:n.warnOnNgModelWithFormControl}]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ft({imports:[jO]}),e})();
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
class UO extends lt{constructor(t,n){super()}schedule(t,n=0){return this}}const ol={setInterval(e,t,...n){const{delegate:r}=ol;return r?.setInterval?r.setInterval(e,t,...n):setInterval(e,t,...n)},clearInterval(e){const{delegate:t}=ol;return(t?.clearInterval||clearInterval)(e)},delegate:void 0},_w={now:()=>(_w.delegate||Date).now(),delegate:void 0};class Gi{constructor(t,n=Gi.now){this.schedulerActionCtor=t,this.now=n}schedule(t,n=0,r){return new this.schedulerActionCtor(this,t).schedule(r,n)}}Gi.now=_w.now;const WO=new class zO extends Gi{constructor(t,n=Gi.now){super(t,n),this.actions=[],this._active=!1}flush(t){const{actions:n}=this;if(this._active)return void n.push(t);let r;this._active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=n.shift());if(this._active=!1,r){for(;t=n.shift();)t.unsubscribe();throw r}}}(class GO extends UO{constructor(t,n){super(t,n),this.scheduler=t,this.work=n,this.pending=!1}schedule(t,n=0){var r;if(this.closed)return this;this.state=t;const o=this.id,i=this.scheduler;return null!=o&&(this.id=this.recycleAsyncId(i,o,n)),this.pending=!0,this.delay=n,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(i,this.id,n),this}requestAsyncId(t,n,r=0){return ol.setInterval(t.flush.bind(t,this),r)}recycleAsyncId(t,n,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return n;null!=n&&ol.clearInterval(n)}execute(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(t,n);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,n){let o,r=!1;try{this.work(t)}catch(i){r=!0,o=i||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:t,scheduler:n}=this,{actions:r}=n;this.work=this.state=this.scheduler=null,this.pending=!1,Dr(r,this),null!=t&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null,super.unsubscribe()}}});function ZO(e,t){return e===t}let QO=(()=>{class e{constructor(n){this.searchService=n}ngOnInit(){this.searchField=new class extends class GC{constructor(t,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=n,this._composedValidatorFn=jC(this._rawValidators),this._composedAsyncValidatorFn=BC(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===ji}get invalid(){return this.status===Ja}get pending(){return this.status==Eo}get disabled(){return this.status===Bi}get enabled(){return this.status!==Bi}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=jC(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=BC(t)}addValidators(t){this.setValidators(FC(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(FC(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(PC(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(PC(t,this._rawAsyncValidators))}hasValidator(t){return Qa(this._rawValidators,t)}hasAsyncValidator(t){return Qa(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=Eo,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const n=this._parentMarkedDirty(t.onlySelf);this.status=Bi,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:n}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const n=this._parentMarkedDirty(t.onlySelf);this.status=ji,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:n}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ji||this.status===Eo)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Bi:ji}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=Eo,this._hasOwnPendingAsyncValidator=!0;const n=bC(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,n={}){this.errors=t,this._updateControlsErrors(!1!==n.emitEvent)}get(t){let n=t;return null==n||(Array.isArray(n)||(n=n.split(".")),0===n.length)?null:n.reduce((r,o)=>r&&r._find(o),this)}getError(t,n){const r=n?this.get(n):this;return r&&r.errors?r.errors[t]:null}hasError(t,n){return!!this.getError(t,n)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new ye,this.statusChanges=new ye}_calculateStatus(){return this._allControlsDisabled()?Bi:this.errors?Ja:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Eo)?Eo:this._anyControlsHaveStatus(Ja)?Ja:ji}_anyControlsHaveStatus(t){return this._anyControls(n=>n.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Xa(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */{constructor(t=null,n,r){super(function ff(e){return(Xa(e)?e.validators:e)||null}(n),function hf(e,t){return(Xa(t)?t.asyncValidators:e)||null}(r,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Xa(n)&&(n.nonNullable||n.initialValueIsDefault)&&(this.defaultValue=QC(t)?t.value:t)}setValue(t,n={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==n.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==n.emitViewToModelChange)),this.updateValueAndValidity(n)}patchValue(t,n={}){this.setValue(t,n)}reset(t=this.defaultValue,n={}){this._applyFormState(t),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){ZC(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){ZC(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){QC(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}},this.searchField.valueChanges.pipe(function qO(e,t=WO){return Ee((n,r)=>{let o=null,i=null,s=null;const a=()=>{if(o){o.unsubscribe(),o=null;const u=i;i=null,r.next(u)}};function l(){const u=s+e,c=t.now();if(c<u)return o=this.schedule(void 0,u-c),void r.add(o);a()}n.subscribe(_e(r,u=>{i=u,s=t.now(),o||(o=t.schedule(l,e),r.add(o))},()=>{a(),r.complete()},void 0,()=>{i=o=null}))})}(600),function KO(e,t=xn){return e=e??ZO,Ee((n,r)=>{let o,i=!0;n.subscribe(_e(r,s=>{const a=t(s);(i||!e(o,a))&&(i=!1,o=a,r.next(s))}))})}()).subscribe(n=>{n&&n.length>2&&this.searchService.setQuery(n)})}}return e.\u0275fac=function(n){return new(n||e)(D($i))},e.\u0275cmp=Rn({type:e,selectors:[["app-search-form"]],decls:7,vars:1,consts:[[1,"jumbotron","jumbotron-fluid","bg-primary","py-3"],[1,"container"],["id","degree-search-form","role","search","placeholder","Search for a degree..."],[1,"search-form-inner"],["for","degree-search-query",1,"sr-only"],["id","degree-search-query","name","degree-search-query","type","search","autocomplete","off","placeholder","Search for a degree...",1,"form-control",3,"formControl"]],template:function(n,r){1&n&&(Z(0,"div",0)(1,"div",1)(2,"form",2)(3,"div",3)(4,"label",4),fe(5,"Search Degrees"),q(),Ct(6,"input",5),q()()()()),2&n&&(G(6),te("formControl",r.searchField))},dependencies:[tw,Ka,LC,VC,Cf]}),e})();function YO(e,t){1&e&&(Z(0,"p"),fe(1,"No degrees found."),q())}function JO(e,t){if(1&e&&(Z(0,"span"),fe(1),q()),2&e){const n=Ie(3);G(1),Bt("at the ",n.params.collegeFullName,"")}}function XO(e,t){if(1&e&&(Z(0,"li",9)(1,"a",5)(2,"span",10),fe(3),q()()()),2&e){const n=t.$implicit;G(1),Bs("href",n.url,Ln),G(2),lc(n.nameShort)}}function ek(e,t){if(1&e&&(Z(0,"ul",7),Ce(1,XO,4,2,"li",8),q()),2&e){const n=Ie().$implicit;G(1),te("ngForOf",n.subplans)}}function tk(e,t){if(1&e&&(Z(0,"li")(1,"a",5),fe(2),q(),Ce(3,ek,2,1,"ul",6),q()),2&e){const n=t.$implicit;G(1),Bs("href",n.url,Ln),G(1),Bt(" ",n.title," "),G(1),te("ngIf",n.subplans)}}function nk(e,t){if(1&e&&(Z(0,"ul",4),Ce(1,tk,4,3,"li",1),q()),2&e){const n=Ie().$implicit;G(1),te("ngForOf",n.degrees)}}function rk(e,t){if(1&e&&(io(0),Z(1,"h2",2),fe(2),Ce(3,JO,2,1,"span",0),q(),Ce(4,nk,2,1,"ul",3),so()),2&e){const n=t.$implicit,r=Ie(2);G(2),Bt("",n.alias,"s "),G(1),te("ngIf",r.params&&""!=r.params.collegeFullName),G(1),te("ngIf",n.degrees)}}function ok(e,t){if(1&e&&(Z(0,"div"),Ce(1,rk,5,3,"ng-container",1),q()),2&e){const n=Ie();G(1),te("ngForOf",n.results.types)}}let ik=(()=>{class e{constructor(n){this.searchService=n,this.subscription=this.searchService.results$.subscribe(r=>{this.results=r}),this.subscription=this.searchService.params$.subscribe(r=>{this.params=r})}ngOnInit(){this.searchService.getResults()}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(D($i))},e.\u0275cmp=Rn({type:e,selectors:[["app-search-results"]],decls:2,vars:2,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"degree-search-group-title"],["class","degree-search-results-container list-unstyled",4,"ngIf"],[1,"degree-search-results-container","list-unstyled"],[1,"degree-title-wrap",3,"href"],["class","degree-search-subplan-results-container list-unstyled",4,"ngIf"],[1,"degree-search-subplan-results-container","list-unstyled"],["class","search-result-subplan",4,"ngFor","ngForOf"],[1,"search-result-subplan"],[1,"degree-title"]],template:function(n,r){1&n&&(Ce(0,YO,2,0,"p",0),Ce(1,ok,2,1,"div",0)),2&n&&(te("ngIf",r.results&&0===r.results.endIndex&&!1===r.results.isLoading),G(1),te("ngIf",r.results))},dependencies:[ya,Di]}),e})(),sk=(()=>{class e{constructor(n){this.http=n,this.collegesUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/colleges"}getColleges(){return this.http.get(this.collegesUrl).pipe(qt(this.handleError))}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),Gn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(M(Sa))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function ak(e,t){1&e&&(Z(0,"p",4),Ct(1,"span",5),fe(2," Loading colleges"),q())}const Dw=function(e){return{"font-weight-bold":e}};function lk(e,t){if(1&e){const n=ao();Z(0,"li",8)(1,"a",11),Le("click",function(){const i=Ar(n).$implicit;return Tr(Ie(2).setCollege(i.slug,i.fullname))}),fe(2),q()()}if(2&e){const n=t.$implicit,r=Ie(2);G(1),lo("href","#",n.slug,"",Ln),te("ngClass",ho(3,Dw,r.selectedCollege===n.slug)),G(1),Bt(" ",n.name," ")}}function uk(e,t){if(1&e){const n=ao();Z(0,"div",6)(1,"ul",7)(2,"li",8)(3,"a",9),Le("click",function(){return Ar(n),Tr(Ie().setCollege("",""))}),fe(4," View All "),q()(),Ce(5,lk,3,5,"li",10),q()()}if(2&e){const n=Ie();G(3),te("ngClass",ho(2,Dw,""===n.selectedCollege)),G(2),te("ngForOf",n.colleges)}}let ck=(()=>{class e{constructor(n,r){this.collegeService=n,this.searchService=r,this.isLoading=!0}ngOnInit(){this.collegeService.getColleges().subscribe(n=>{this.colleges=n,this.isLoading=!1})}setCollege(n,r){this.selectedCollege=n,this.searchService.setCollege(n,r)}}return e.\u0275fac=function(n){return new(n||e)(D(sk),D($i))},e.\u0275cmp=Rn({type:e,selectors:[["app-colleges"]],decls:4,vars:2,consts:[[1,"card","mb-4"],[1,"card-block"],["class","my-3",4,"ngIf"],["class","degree-search-colleges",4,"ngIf"],[1,"my-3"],[1,"fa","fa-spinner","fa-spin"],[1,"degree-search-colleges"],[1,"degree-search-colleges","list-unstyled"],[1,"degree-search-college"],["href","#",1,"text-decoration-none","hover-text-underline",3,"ngClass","click"],["class","degree-search-college",4,"ngFor","ngForOf"],[1,"text-decoration-none","hover-text-underline",3,"href","ngClass","click"]],template:function(n,r){1&n&&(Z(0,"div",0)(1,"div",1),Ce(2,ak,3,0,"p",2),Ce(3,uk,6,4,"div",3),q()()),2&n&&(G(2),te("ngIf",r.isLoading),G(1),te("ngIf",r.colleges&&r.colleges.length>0))},dependencies:[sd,ya,Di]}),e})(),dk=(()=>{class e{constructor(n){this.http=n,this.programTypesUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/program-types"}getprogramTypes(){return this.http.get(this.programTypesUrl).pipe(qt(this.handleError))}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),Gn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(M(Sa))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function fk(e,t){1&e&&(Z(0,"p",4),Ct(1,"span",5),fe(2," Loading program types"),q())}const Af=function(e){return{"font-weight-bold":e}};function hk(e,t){if(1&e){const n=ao();Z(0,"ul",16)(1,"li",17)(2,"a",13),Le("click",function(){const i=Ar(n).$implicit;return Tr(Ie(4).setProgramType(i.slug,i.name,!1))}),fe(3),q()()()}if(2&e){const n=t.$implicit,r=Ie(4);G(2),lo("href","#",n.slug,"",Ln),te("ngClass",ho(3,Af,r.selectedProgramType===n.slug)),G(1),Bt(" ",n.name," ")}}function pk(e,t){if(1&e&&(io(0),Ce(1,hk,4,5,"ul",15),so()),2&e){const n=Ie().$implicit;G(1),te("ngForOf",n.children)}}function gk(e,t){if(1&e){const n=ao();io(0),Z(1,"li",8)(2,"a",13),Le("click",function(){const i=Ar(n).$implicit;return Tr(Ie(2).setProgramType(i.slug,i.name,!0))}),fe(3),q()(),Ce(4,pk,2,1,"ng-container",14),so()}if(2&e){const n=t.$implicit,r=Ie(2);G(2),lo("href","#",n.slug,"",Ln),te("ngClass",ho(4,Af,r.selectedProgramType===n.slug)),G(1),Bt(" ",n.name," "),G(1),te("ngIf",r.selectedParent===n.slug)}}function mk(e,t){if(1&e){const n=ao();Z(0,"div",6)(1,"ul",7)(2,"li",8)(3,"a",9),Le("click",function(){return Ar(n),Tr(Ie().setProgramType("","",!0))}),fe(4," View All "),q()(),Ce(5,gk,5,6,"ng-container",10),Z(6,"li"),Ct(7,"hr"),q(),Z(8,"li")(9,"a",11),fe(10," Online Programs "),Ct(11,"span",12),q()()()()}if(2&e){const n=Ie();G(3),te("ngClass",ho(2,Af,""===n.selectedProgramType)),G(2),te("ngForOf",n.programTypes)}}let yk=(()=>{class e{constructor(n,r){this.programTypeService=n,this.searchService=r,this.isLoading=!0}ngOnInit(){this.programTypeService.getprogramTypes().subscribe(n=>{this.programTypes=n,this.isLoading=!1})}setProgramType(n,r,o){o&&(this.selectedParent=n),this.selectedProgramType=n,this.searchService.setProgramType(n,r)}}return e.\u0275fac=function(n){return new(n||e)(D(dk),D($i))},e.\u0275cmp=Rn({type:e,selectors:[["app-program-types"]],decls:4,vars:2,consts:[[1,"card","mb-4"],[1,"card-block"],["class","my-3",4,"ngIf"],["class","degree-search-types",4,"ngIf"],[1,"my-3"],[1,"fa","fa-spinner","fa-spin"],[1,"degree-search-types"],[1,"degree-search-program-types","list-unstyled","list-unstyled"],[1,"degree-search-type"],["href","#",1,"text-decoration-none","hover-text-underline",3,"ngClass","click"],[4,"ngFor","ngForOf"],["href","/online/programs/",1,"text-decoration-none","hover-text-underline"],["aria-hidden","true",1,"fa","fa-external-link"],[1,"text-decoration-none","hover-text-underline",3,"href","ngClass","click"],[4,"ngIf"],["class","degree-search-type-children list-unstyled ml-3",4,"ngFor","ngForOf"],[1,"degree-search-type-children","list-unstyled","ml-3"],[1,"degree-search-child-type"]],template:function(n,r){1&n&&(Z(0,"div",0)(1,"div",1),Ce(2,fk,3,0,"p",2),Ce(3,mk,12,4,"div",3),q()()),2&n&&(G(2),te("ngIf",r.isLoading),G(1),te("ngIf",r.programTypes&&r.programTypes.length>0))},dependencies:[sd,ya,Di]}),e})();function vk(e,t){1&e&&(Z(0,"p",11),Ct(1,"span",12),fe(2," Loading degrees"),q())}function _k(e,t){if(1&e&&(Z(0,"span"),fe(1),q()),2&e){const n=Ie(2);G(1),Bt(" in ",n.params.programTypeFullName,"")}}function Dk(e,t){if(1&e&&(Z(0,"span"),fe(1),q()),2&e){const n=Ie(2);G(1),Bt(" at the ",n.params.collegeFullName,"")}}function Ck(e,t){if(1&e&&(Z(0,"p",13),fe(1),Ce(2,_k,2,1,"span",14),Ce(3,Dk,2,1,"span",14),fe(4," at UCF. "),q()),2&e){const n=Ie();G(1),uc(" Showing ",n.results.startIndex," through ",n.results.endIndex," of ",n.results.totalPosts," degrees "),G(1),te("ngIf",n.params&&""!=n.params.programTypeFullName),G(1),te("ngIf",n.params&&""!=n.params.collegeFullName)}}let wk=(()=>{class e{constructor(n){this.searchService=n,this.subscription=this.searchService.results$.subscribe(r=>{this.results=r}),this.subscription=this.searchService.params$.subscribe(r=>{this.params=r})}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(D($i))},e.\u0275cmp=Rn({type:e,selectors:[["app-root"]],decls:18,vars:2,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],["class","my-3",4,"ngIf"],["class","text-muted my-3 ng-binding ng-scope","aria-live","polite",4,"ngIf"],[1,"row","mt-4"],[1,"col-md-4","push-md-8","col-lg-3","push-lg-9"],[1,"h5","heading-underline","visible-sm","mt-3","mb-4"],[1,"h5","py-2"],[1,"h5","pb-2","mt-4"],[1,"col-md-8","pull-md-4","col-lg-9","pull-lg-3"],[1,"my-3"],[1,"fa","fa-spinner","fa-spin"],["aria-live","polite",1,"text-muted","my-3","ng-binding","ng-scope"],[4,"ngIf"]],template:function(n,r){1&n&&(Ct(0,"app-search-form"),Z(1,"div",0)(2,"div",1)(3,"div",2),Ce(4,vk,3,0,"p",3),Ce(5,Ck,5,5,"p",4),q()(),Z(6,"div",5)(7,"div",6)(8,"h2",7),fe(9,"View Degrees By"),q(),Z(10,"h3",8),fe(11,"Program Types"),q(),Ct(12,"app-program-types"),Z(13,"h3",9),fe(14,"Colleges"),q(),Ct(15,"app-colleges"),q(),Z(16,"div",10),Ct(17,"app-search-results"),q()()()),2&n&&(G(4),te("ngIf",r.results&&r.results.isLoading),G(1),te("ngIf",r.results&&r.results.endIndex>0))},dependencies:[Di,QO,ik,ck,yk]}),e})(),Ek=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e,bootstrap:[wk]}),e.\u0275inj=ft({imports:[HR,BO,dF,UP]}),e})();(function fx(){kv=!1}
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
       */)(),BR().bootstrapModule(Ek).catch(e=>console.error(e))}},ie=>{ie(ie.s=316)}]);