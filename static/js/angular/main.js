"use strict";(self.webpackChunkDegree_Search=self.webpackChunkDegree_Search||[]).push([[179],{316:()=>{function ie(e){return"function"==typeof e}function bo(e){const n=e(r=>{Error.call(r),r.stack=(new Error).stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}const qi=bo(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:\n${n.map((r,o)=>`${o+1}) ${r.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=n});function Cr(e,t){if(e){const n=e.indexOf(t);0<=n&&e.splice(n,1)}}class ut{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;const{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(const i of n)i.remove(this);else n.remove(this);const{initialTeardown:r}=this;if(ie(r))try{r()}catch(i){t=i instanceof qi?i.errors:[i]}const{_finalizers:o}=this;if(o){this._finalizers=null;for(const i of o)try{Bf(i)}catch(s){t=t??[],s instanceof qi?t=[...t,...s.errors]:t.push(s)}}if(t)throw new qi(t)}}add(t){var n;if(t&&t!==this)if(this.closed)Bf(t);else{if(t instanceof ut){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(t)}}_hasParent(t){const{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){const{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){const{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&Cr(n,t)}remove(t){const{_finalizers:n}=this;n&&Cr(n,t),t instanceof ut&&t._removeParent(this)}}ut.EMPTY=(()=>{const e=new ut;return e.closed=!0,e})();const $f=ut.EMPTY;function jf(e){return e instanceof ut||e&&"closed"in e&&ie(e.remove)&&ie(e.add)&&ie(e.unsubscribe)}function Bf(e){ie(e)?e():e.unsubscribe()}const Yn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Qi={setTimeout(e,t,...n){const{delegate:r}=Qi;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){const{delegate:t}=Qi;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function Hf(e){Qi.setTimeout(()=>{const{onUnhandledError:t}=Yn;if(!t)throw e;t(e)})}function Uf(){}const bw=ll("C",void 0,void 0);function ll(e,t,n){return{kind:e,value:t,error:n}}let Jn=null;function Ki(e){if(Yn.useDeprecatedSynchronousErrorHandling){const t=!Jn;if(t&&(Jn={errorThrown:!1,error:null}),e(),t){const{errorThrown:n,error:r}=Jn;if(Jn=null,n)throw r}}else e()}class ul extends ut{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,jf(t)&&t.add(this)):this.destination=Nw}static create(t,n,r){return new So(t,n,r)}next(t){this.isStopped?dl(function Mw(e){return ll("N",e,void 0)}(t),this):this._next(t)}error(t){this.isStopped?dl(function Sw(e){return ll("E",void 0,e)}(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?dl(bw,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const Aw=Function.prototype.bind;function cl(e,t){return Aw.call(e,t)}class Tw{constructor(t){this.partialObserver=t}next(t){const{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){Zi(r)}}error(t){const{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){Zi(r)}else Zi(t)}complete(){const{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){Zi(n)}}}class So extends ul{constructor(t,n,r){let o;if(super(),ie(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&Yn.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&cl(t.next,i),error:t.error&&cl(t.error,i),complete:t.complete&&cl(t.complete,i)}):o=t}this.destination=new Tw(o)}}function Zi(e){Yn.useDeprecatedSynchronousErrorHandling?function Iw(e){Yn.useDeprecatedSynchronousErrorHandling&&Jn&&(Jn.errorThrown=!0,Jn.error=e)}(e):Hf(e)}function dl(e,t){const{onStoppedNotification:n}=Yn;n&&Qi.setTimeout(()=>n(e,t))}const Nw={closed:!0,next:Uf,error:function xw(e){throw e},complete:Uf},fl="function"==typeof Symbol&&Symbol.observable||"@@observable";function xn(e){return e}function Gf(e){return 0===e.length?xn:1===e.length?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}let ve=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){const r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){const i=function Ow(e){return e&&e instanceof ul||function Fw(e){return e&&ie(e.next)&&ie(e.error)&&ie(e.complete)}(e)&&jf(e)}(n)?n:new So(n,r,o);return Ki(()=>{const{operator:s,source:a}=this;i.add(s?s.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return new(r=zf(r))((o,i)=>{const s=new So({next:a=>{try{n(a)}catch(l){i(l),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return null===(r=this.source)||void 0===r?void 0:r.subscribe(n)}[fl](){return this}pipe(...n){return Gf(n)(this)}toPromise(n){return new(n=zf(n))((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return e.create=t=>new e(t),e})();function zf(e){var t;return null!==(t=e??Yn.Promise)&&void 0!==t?t:Promise}const Pw=bo(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});let ct=(()=>{class e extends ve{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){const r=new Wf(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new Pw}next(n){Ki(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const r of this.currentObservers)r.next(n)}})}error(n){Ki(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;const{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){Ki(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return(null===(n=this.observers)||void 0===n?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){const{hasError:r,isStopped:o,observers:i}=this;return r||o?$f:(this.currentObservers=null,i.push(n),new ut(()=>{this.currentObservers=null,Cr(i,n)}))}_checkFinalizedStatuses(n){const{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){const n=new ve;return n.source=this,n}}return e.create=(t,n)=>new Wf(t,n),e})();class Wf extends ct{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.next)||void 0===r||r.call(n,t)}error(t){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.error)||void 0===r||r.call(n,t)}complete(){var t,n;null===(n=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===n||n.call(t)}_subscribe(t){var n,r;return null!==(r=null===(n=this.source)||void 0===n?void 0:n.subscribe(t))&&void 0!==r?r:$f}}function qf(e){return ie(e?.lift)}function Ee(e){return t=>{if(qf(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function _e(e,t,n,r,o){return new kw(e,t,n,r,o)}class kw extends ul{constructor(t,n,r,o,i,s){super(t),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(l){t.error(l)}}:super._next,this._error=o?function(a){try{o(a)}catch(l){t.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){t.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:n}=this;super.unsubscribe(),!n&&(null===(t=this.onFinalize)||void 0===t||t.call(this))}}}function G(e,t){return Ee((n,r)=>{let o=0;n.subscribe(_e(r,i=>{r.next(e.call(t,i,o++))}))})}function Xn(e){return this instanceof Xn?(this.v=e,this):new Xn(e)}function $w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,r=n.apply(e,t||[]),i=[];return o={},s("next"),s("throw"),s("return"),o[Symbol.asyncIterator]=function(){return this},o;function s(f){r[f]&&(o[f]=function(h){return new Promise(function(p,g){i.push([f,h,p,g])>1||a(f,h)})})}function a(f,h){try{!function l(f){f.value instanceof Xn?Promise.resolve(f.value.v).then(u,c):d(i[0][2],f)}(r[f](h))}catch(p){d(i[0][3],p)}}function u(f){a("next",f)}function c(f){a("throw",f)}function d(f,h){f(h),i.shift(),i.length&&a(i[0][0],i[0][1])}}function jw(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,t=e[Symbol.asyncIterator];return t?t.call(e):(e=function Zf(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(e),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(a,l){!function o(i,s,a,l){Promise.resolve(l).then(function(u){i({value:u,done:a})},s)}(a,l,(s=e[i](s)).done,s.value)})}}}const Yf=e=>e&&"number"==typeof e.length&&"function"!=typeof e;function Jf(e){return ie(e?.then)}function Xf(e){return ie(e[fl])}function eh(e){return Symbol.asyncIterator&&ie(e?.[Symbol.asyncIterator])}function th(e){return new TypeError(`You provided ${null!==e&&"object"==typeof e?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}const nh=function Hw(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}();function rh(e){return ie(e?.[nh])}function oh(e){return $w(this,arguments,function*(){const n=e.getReader();try{for(;;){const{value:r,done:o}=yield Xn(n.read());if(o)return yield Xn(void 0);yield yield Xn(r)}}finally{n.releaseLock()}})}function ih(e){return ie(e?.getReader)}function Rt(e){if(e instanceof ve)return e;if(null!=e){if(Xf(e))return function Uw(e){return new ve(t=>{const n=e[fl]();if(ie(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(e);if(Yf(e))return function Gw(e){return new ve(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}(e);if(Jf(e))return function zw(e){return new ve(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,Hf)})}(e);if(eh(e))return sh(e);if(rh(e))return function Ww(e){return new ve(t=>{for(const n of e)if(t.next(n),t.closed)return;t.complete()})}(e);if(ih(e))return function qw(e){return sh(oh(e))}(e)}throw th(e)}function sh(e){return new ve(t=>{(function Qw(e,t){var n,r,o,i;return function Lw(e,t,n,r){return new(n||(n=Promise))(function(i,s){function a(c){try{u(r.next(c))}catch(d){s(d)}}function l(c){try{u(r.throw(c))}catch(d){s(d)}}function u(c){c.done?i(c.value):function o(i){return i instanceof n?i:new n(function(s){s(i)})}(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}(this,void 0,void 0,function*(){try{for(n=jw(e);!(r=yield n.next()).done;)if(t.next(r.value),t.closed)return}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}t.complete()})})(e,t).catch(n=>t.error(n))})}function an(e,t,n,r=0,o=!1){const i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function Ve(e,t,n=1/0){return ie(t)?Ve((r,o)=>G((i,s)=>t(r,i,o,s))(Rt(e(r,o))),n):("number"==typeof t&&(n=t),Ee((r,o)=>function Kw(e,t,n,r,o,i,s,a){const l=[];let u=0,c=0,d=!1;const f=()=>{d&&!l.length&&!u&&t.complete()},h=g=>u<r?p(g):l.push(g),p=g=>{i&&t.next(g),u++;let v=!1;Rt(n(g,c++)).subscribe(_e(t,y=>{o?.(y),i?h(y):t.next(y)},()=>{v=!0},void 0,()=>{if(v)try{for(u--;l.length&&u<r;){const y=l.shift();s?an(t,s,()=>p(y)):p(y)}f()}catch(y){t.error(y)}}))};return e.subscribe(_e(t,h,()=>{d=!0,f()})),()=>{a?.()}}(r,o,e,n)))}function wr(e=1/0){return Ve(xn,e)}const ln=new ve(e=>e.complete());function pl(e){return e[e.length-1]}function ah(e){return ie(pl(e))?e.pop():void 0}function Mo(e){return function Yw(e){return e&&ie(e.schedule)}(pl(e))?e.pop():void 0}function lh(e,t=0){return Ee((n,r)=>{n.subscribe(_e(r,o=>an(r,e,()=>r.next(o),t),()=>an(r,e,()=>r.complete(),t),o=>an(r,e,()=>r.error(o),t)))})}function uh(e,t=0){return Ee((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function ch(e,t){if(!e)throw new Error("Iterable cannot be null");return new ve(n=>{an(n,t,()=>{const r=e[Symbol.asyncIterator]();an(n,t,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function be(e,t){return t?function oE(e,t){if(null!=e){if(Xf(e))return function Xw(e,t){return Rt(e).pipe(uh(t),lh(t))}(e,t);if(Yf(e))return function tE(e,t){return new ve(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}(e,t);if(Jf(e))return function eE(e,t){return Rt(e).pipe(uh(t),lh(t))}(e,t);if(eh(e))return ch(e,t);if(rh(e))return function nE(e,t){return new ve(n=>{let r;return an(n,t,()=>{r=e[nh](),an(n,t,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){return void n.error(s)}i?n.complete():n.next(o)},0,!0)}),()=>ie(r?.return)&&r.return()})}(e,t);if(ih(e))return function rE(e,t){return ch(oh(e),t)}(e,t)}throw th(e)}(e,t):Rt(e)}function gl(e,t,...n){if(!0===t)return void e();if(!1===t)return;const r=new So({next:()=>{r.unsubscribe(),e()}});return t(...n).subscribe(r)}
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
       */function ne(e){for(let t in e)if(e[t]===ne)return t;throw Error("Could not find renamed property on target object.")}function ml(e,t){for(const n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function re(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(re).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function yl(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const aE=ne({__forward_ref__:ne});function se(e){return e.__forward_ref__=se,e.toString=function(){return re(this())},e}function F(e){return vl(e)?e():e}function vl(e){return"function"==typeof e&&e.hasOwnProperty(aE)&&e.__forward_ref__===se}
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
class C extends Error{constructor(t,n){super(function Yi(e,t){return`NG0${Math.abs(e)}${t?": "+t.trim():""}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t,n)),this.code=t}}function k(e){return"string"==typeof e?e:null==e?"":String(e)}function Ji(e,t){throw new C(-201,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ft(e,t){null==e&&function X(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}(t,e,null,"!=")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function x(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function ht(e){return{providers:e.providers||[],imports:e.imports||[]}}function Xi(e){return dh(e,es)||dh(e,hh)}function dh(e,t){return e.hasOwnProperty(t)?e[t]:null}function fh(e){return e&&(e.hasOwnProperty(_l)||e.hasOwnProperty(mE))?e[_l]:null}const es=ne({\u0275prov:ne}),_l=ne({\u0275inj:ne}),hh=ne({ngInjectableDef:ne}),mE=ne({ngInjectorDef:ne});
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
       */let Dl;function wt(e){const t=Dl;return Dl=e,t}function ph(e,t,n){const r=Xi(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&N.Optional?null:void 0!==t?t:void Ji(re(e))}
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
       */var Ft=(()=>((Ft=Ft||{})[Ft.OnPush=0]="OnPush",Ft[Ft.Default=1]="Default",Ft))(),Qt=(()=>{return(e=Qt||(Qt={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",Qt;var e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const oe=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),Er={},J=[],ts=ne({\u0275cmp:ne}),Cl=ne({\u0275dir:ne}),wl=ne({\u0275pipe:ne}),gh=ne({\u0275mod:ne}),cn=ne({\u0275fac:ne}),Io=ne({__NG_ELEMENT_ID__:ne});
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
let vE=0;function Rn(e){return Nn(()=>{const n=!0===e.standalone,r={},o={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===Ft.OnPush,directiveDefs:null,pipeDefs:null,standalone:n,dependencies:n&&e.dependencies||null,getStandaloneInjector:null,selectors:e.selectors||J,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||Qt.Emulated,id:"c"+vE++,styles:e.styles||J,_:null,setInput:null,schemas:e.schemas||null,tView:null},i=e.dependencies,s=e.features;return o.inputs=vh(e.inputs,r),o.outputs=vh(e.outputs),s&&s.forEach(a=>a(o)),o.directiveDefs=i?()=>("function"==typeof i?i():i).map(mh).filter(yh):null,o.pipeDefs=i?()=>("function"==typeof i?i():i).map(Ze).filter(yh):null,o})}function mh(e){return ee(e)||Ke(e)}function yh(e){return null!==e}function Et(e){return Nn(()=>({type:e.type,bootstrap:e.bootstrap||J,declarations:e.declarations||J,imports:e.imports||J,exports:e.exports||J,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function vh(e,t){if(null==e)return Er;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const O=Rn;function ee(e){return e[ts]||null}function Ke(e){return e[Cl]||null}function Ze(e){return e[wl]||null}function pt(e,t){const n=e[gh]||null;if(!n&&!0===t)throw new Error(`Type ${re(e)} does not have '\u0275mod' property.`);return n}
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
function st(e){return Array.isArray(e)&&"object"==typeof e[1]}function Pt(e){return Array.isArray(e)&&!0===e[1]}function Sl(e){return 0!=(8&e.flags)}function is(e){return 2==(2&e.flags)}function ss(e){return 1==(1&e.flags)}function kt(e){return null!==e.template}function bE(e){return 0!=(256&e[2])}
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
function or(e,t){return e.hasOwnProperty(cn)?e[cn]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class IE{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function St(){return Ch}function Ch(e){return e.type.prototype.ngOnChanges&&(e.setInput=TE),AE}function AE(){const e=Eh(this),t=e?.current;if(t){const n=e.previous;if(n===Er)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function TE(e,t,n,r){const o=Eh(e)||function xE(e,t){return e[wh]=t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,{previous:Er,current:null}),i=o.current||(o.current={}),s=o.previous,a=this.declaredInputs[n],l=s[a];i[a]=new IE(l&&l.currentValue,t,s===Er),e[r]=t}St.ngInherit=!0;const wh="__ngSimpleChanges__";function Eh(e){return e[wh]||null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Se(e){for(;Array.isArray(e);)e=e[0];return e}function as(e,t){return Se(t[e])}function It(e,t){return Se(t[e.index])}function xl(e,t){return e.data[t]}function mt(e,t){const n=t[e];return st(n)?n:n[0]}function ls(e){return 64==(64&e[2])}function Fn(e,t){return null==t?null:e[t]}function bh(e){e[18]=0}function Nl(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const P={lFrame:Oh(null),bindingsEnabled:!0};function Mh(){return P.bindingsEnabled}function _(){return P.lFrame.lView}function Q(){return P.lFrame.tView}function Tr(e){return P.lFrame.contextLView=e,e[8]}function xr(e){return P.lFrame.contextLView=null,e}function Re(){let e=Ih();for(;null!==e&&64===e.type;)e=e.parent;return e}function Ih(){return P.lFrame.currentTNode}function Kt(e,t){const n=P.lFrame;n.currentTNode=e,n.isParent=t}function Rl(){return P.lFrame.isParent}function Fl(){P.lFrame.isParent=!1}function Nr(){return P.lFrame.bindingIndex++}function fn(e){const t=P.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function zE(e,t){const n=P.lFrame;n.bindingIndex=n.bindingRootIndex=e,Ol(t)}function Ol(e){P.lFrame.currentDirectiveIndex=e}function Nh(){return P.lFrame.currentQueryIndex}function kl(e){P.lFrame.currentQueryIndex=e}function qE(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function Rh(e,t,n){if(n&N.SkipSelf){let o=t,i=e;for(;!(o=o.parent,null!==o||n&N.Host||(o=qE(i),null===o||(i=i[15],10&o.type))););if(null===o)return!1;t=o,e=i}const r=P.lFrame=Fh();return r.currentTNode=t,r.lView=e,!0}function Ll(e){const t=Fh(),n=e[1];P.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function Fh(){const e=P.lFrame,t=null===e?null:e.child;return null===t?Oh(e):t}function Oh(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function Ph(){const e=P.lFrame;return P.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const kh=Ph;function Vl(){const e=Ph();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Je(){return P.lFrame.selectedIndex}function On(e){P.lFrame.selectedIndex=e}function ge(){const e=P.lFrame;return xl(e.tView,e.selectedIndex)}function us(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:u,ngOnDestroy:c}=i;s&&(e.contentHooks||(e.contentHooks=[])).push(-n,s),a&&((e.contentHooks||(e.contentHooks=[])).push(n,a),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,a)),l&&(e.viewHooks||(e.viewHooks=[])).push(-n,l),u&&((e.viewHooks||(e.viewHooks=[])).push(n,u),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,u)),null!=c&&(e.destroyHooks||(e.destroyHooks=[])).push(n,c)}}function cs(e,t,n){Lh(e,t,3,n)}function ds(e,t,n,r){(3&e[2])===n&&Lh(e,t,n,r)}function $l(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function Lh(e,t,n,r){const i=r??-1,s=t.length-1;let a=0;for(let l=void 0!==r?65535&e[18]:0;l<s;l++)if("number"==typeof t[l+1]){if(a=t[l],null!=r&&a>=r)break}else t[l]<0&&(e[18]+=65536),(a<i||-1==i)&&(nb(e,n,t,l),e[18]=(4294901760&e[18])+l+2),l++}function nb(e,t,n,r){const o=n[r]<0,i=n[r+1],a=e[o?-n[r]:n[r]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{i.call(a)}finally{}}}else try{i.call(a)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Fo{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function fs(e,t,n){let r=0;for(;r<n.length;){const o=n[r];if("number"==typeof o){if(0!==o)break;r++;const i=n[r++],s=n[r++],a=n[r++];e.setAttribute(t,s,a,i)}else{const i=o,s=n[++r];$h(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function Vh(e){return 3===e||4===e||6===e}function $h(e){return 64===e.charCodeAt(0)}function hs(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||jh(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function jh(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const a=e[i++];if("number"==typeof a){if(a===t){s=-1;break}if(a>t){s=i-1;break}}}for(;i<e.length;){const a=e[i];if("number"==typeof a)break;if(a===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Bh(e){return-1!==e}function Rr(e){return 32767&e}function Fr(e,t){let n=function ab(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Bl=!0;function ps(e){const t=Bl;return Bl=e,t}let lb=0;const Zt={};function Po(e,t){const n=Ul(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,Hl(r.data,e),Hl(t,null),Hl(r.blueprint,null));const o=gs(e,t),i=e.injectorIndex;if(Bh(o)){const s=Rr(o),a=Fr(o,t),l=a[1].data;for(let u=0;u<8;u++)t[i+u]=a[s+u]|l[s+u]}return t[i+8]=o,i}function Hl(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Ul(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function gs(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){if(r=Zh(o),null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function ms(e,t,n){!function ub(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Io)&&(r=n[Io]),null==r&&(r=n[Io]=lb++);const o=255&r;t.data[e+(o>>5)]|=1<<o}(e,t,n)}function Gh(e,t,n){if(n&N.Optional||void 0!==e)return e;Ji()}function zh(e,t,n,r){if(n&N.Optional&&void 0===r&&(r=null),0==(n&(N.Self|N.Host))){const o=e[9],i=wt(void 0);try{return o?o.get(t,r,n&N.Optional):ph(t,r,n&N.Optional)}finally{wt(i)}}return Gh(r,0,n)}function Wh(e,t,n,r=N.Default,o){if(null!==e){if(1024&t[2]){const s=function pb(e,t,n,r,o){let i=e,s=t;for(;null!==i&&null!==s&&1024&s[2]&&!(256&s[2]);){const a=qh(i,s,n,r|N.Self,Zt);if(a!==Zt)return a;let l=i.parent;if(!l){const u=s[21];if(u){const c=u.get(n,Zt,r);if(c!==Zt)return c}l=Zh(s),s=s[15]}i=l}return o}(e,t,n,r,Zt);if(s!==Zt)return s}const i=qh(e,t,n,r,Zt);if(i!==Zt)return i}return zh(t,n,r,o)}function qh(e,t,n,r,o){const i=function fb(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(Io)?e[Io]:void 0;return"number"==typeof t?t>=0?255&t:hb:t}(n);if("function"==typeof i){if(!Rh(t,e,r))return r&N.Host?Gh(o,0,r):zh(t,n,r,o);try{const s=i(r);if(null!=s||r&N.Optional)return s;Ji()}finally{kh()}}else if("number"==typeof i){let s=null,a=Ul(e,t),l=-1,u=r&N.Host?t[16][6]:null;for((-1===a||r&N.SkipSelf)&&(l=-1===a?gs(e,t):t[a+8],-1!==l&&Kh(r,!1)?(s=t[1],a=Rr(l),t=Fr(l,t)):a=-1);-1!==a;){const c=t[1];if(Qh(i,a,c.data)){const d=db(a,t,n,s,r,u);if(d!==Zt)return d}l=t[a+8],-1!==l&&Kh(r,t[1].data[a+8]===u)&&Qh(i,a,t)?(s=c,a=Rr(l),t=Fr(l,t)):a=-1}}return o}function db(e,t,n,r,o,i){const s=t[1],a=s.data[e+8],c=ys(a,s,n,null==r?is(a)&&Bl:r!=s&&0!=(3&a.type),o&N.Host&&i===a);return null!==c?ko(t,s,c,a):Zt}function ys(e,t,n,r,o){const i=e.providerIndexes,s=t.data,a=1048575&i,l=e.directiveStart,c=i>>20,f=o?a+c:e.directiveEnd;for(let h=r?a:a+c;h<f;h++){const p=s[h];if(h<l&&n===p||h>=l&&p.type===n)return h}if(o){const h=s[l];if(h&&kt(h)&&h.type===n)return l}return null}function ko(e,t,n,r){let o=e[n];const i=t.data;if(function rb(e){return e instanceof Fo}(o)){const s=o;s.resolving&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function lE(e,t){const n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new C(-200,`Circular dependency in DI detected for ${e}${n}`)}(function Y(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():k(e)}(i[n]));const a=ps(s.canSeeViewProviders);s.resolving=!0;const l=s.injectImpl?wt(s.injectImpl):null;Rh(e,r,N.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function tb(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const s=Ch(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==l&&wt(l),ps(a),s.resolving=!1,kh()}}return o}function Qh(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function Kh(e,t){return!(e&N.Self||e&N.Host&&t)}class Or{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return Wh(this._tNode,this._lView,t,r,n)}}function hb(){return new Or(Re(),_())}function Gl(e){return vl(e)?()=>{const t=Gl(F(e));return t&&t()}:or(e)}function Zh(e){const t=e[1],n=t.type;return 2===n?t.declTNode:1===n?e[6]:null}
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
const kr="__parameters__";function Vr(e,t,n){return Nn(()=>{const r=function zl(e){return function(...n){if(e){const r=e(...n);for(const o in r)this[o]=r[o]}}}(t);function o(...i){if(this instanceof o)return r.apply(this,i),this;const s=new o(...i);return a.annotation=s,a;function a(l,u,c){const d=l.hasOwnProperty(kr)?l[kr]:Object.defineProperty(l,kr,{value:[]})[kr];for(;d.length<=c;)d.push(null);return(d[c]=d[c]||[]).push(s),l}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}
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
       */function yt(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),yt(r,t)):t!==e&&t.push(r)}return t}function hn(e,t){e.forEach(n=>Array.isArray(n)?hn(n,t):t(n))}function Jh(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function vs(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function vt(e,t,n){let r=$r(e,t);return r>=0?e[1|r]=n:(r=~r,function vb(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(1===o)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function ql(e,t){const n=$r(e,t);if(n>=0)return e[1|n]}function $r(e,t){return function tp(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}
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
const Bo={},Kl="__NG_DI_FLAG__",Ds="ngTempTokenPath",Mb=/\n/gm,np="__source";let Ho;function jr(e){const t=Ho;return Ho=e,t}function Ab(e,t=N.Default){if(void 0===Ho)throw new C(-203,!1);return null===Ho?ph(e,void 0,t):Ho.get(e,t&N.Optional?null:void 0,t)}function M(e,t=N.Default){return(function yE(){return Dl}()||Ab)(F(e),t)}function De(e,t=N.Default){return"number"!=typeof t&&(t=0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)),M(e,t)}function Zl(e){const t=[];for(let n=0;n<e.length;n++){const r=F(e[n]);if(Array.isArray(r)){if(0===r.length)throw new C(900,!1);let o,i=N.Default;for(let s=0;s<r.length;s++){const a=r[s],l=Tb(a);"number"==typeof l?-1===l?o=a.token:i|=l:o=a}t.push(M(o,i))}else t.push(M(r))}return t}function Uo(e,t){return e[Kl]=t,e.prototype[Kl]=t,e}function Tb(e){return e[Kl]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Go=Uo(Vr("Optional"),8),zo=Uo(Vr("SkipSelf"),4);
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
class gp{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}function kn(e){return e instanceof gp?e.changingThisBreaksApplicationSecurity:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Xb=/^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;
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
       */function Ln(e){const t=function Zo(){const e=_();return e&&e[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();return t?t.sanitize(Me.URL,e)||"":function Qo(e,t){const n=function Kb(e){return e instanceof gp&&e.getTypeName()||null}(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}(e,"URL")?kn(e):function tu(e){return(e=String(e)).match(Xb)?e:"unsafe:"+e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(k(e))}const iu=new I("ENVIRONMENT_INITIALIZER"),Ep=new I("INJECTOR",-1),bp=new I("INJECTOR_DEF_TYPES");
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
class Sp{get(t,n=Bo){if(n===Bo){const r=new Error(`NullInjectorError: No provider for ${re(t)}!`);throw r.name="NullInjectorError",r}return n}}
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
       */function p0(...e){return{\u0275providers:Mp(0,e)}}function Mp(e,...t){const n=[],r=new Set;let o;return hn(t,i=>{const s=i;su(s,n,[],r)&&(o||(o=[]),o.push(s))}),void 0!==o&&Ip(o,n),n}function Ip(e,t){for(let n=0;n<e.length;n++){const{providers:o}=e[n];hn(o,i=>{t.push(i)})}}function su(e,t,n,r){if(!(e=F(e)))return!1;let o=null,i=fh(e);const s=!i&&ee(e);if(i||s){if(s&&!s.standalone)return!1;o=e}else{const l=e.ngModule;if(i=fh(l),!i)return!1;o=l}const a=r.has(o);if(s){if(a)return!1;if(r.add(o),s.dependencies){const l="function"==typeof s.dependencies?s.dependencies():s.dependencies;for(const u of l)su(u,t,n,r)}}else{if(!i)return!1;{if(null!=i.imports&&!a){let u;r.add(o);try{hn(i.imports,c=>{su(c,t,n,r)&&(u||(u=[]),u.push(c))})}finally{}void 0!==u&&Ip(u,t)}if(!a){const u=or(o)||(()=>new o);t.push({provide:o,useFactory:u,deps:J},{provide:bp,useValue:o,multi:!0},{provide:iu,useValue:()=>M(o),multi:!0})}const l=i.providers;null==l||a||hn(l,c=>{t.push(c)})}}return o!==e&&void 0!==e.providers}const g0=ne({provide:String,useValue:ne});function au(e){return null!==e&&"object"==typeof e&&g0 in e}function ir(e){return"function"==typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const lu=new I("Set Injector scope."),Ms={},y0={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let uu;function Is(){return void 0===uu&&(uu=new Sp),uu}class Vn{}class xp extends Vn{constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,du(t,s=>this.processProvider(s)),this.records.set(Ep,Ur(void 0,this)),o.has("environment")&&this.records.set(Vn,Ur(void 0,this));const i=this.records.get(lu);null!=i&&"string"==typeof i.value&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(bp.multi,J,N.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const t of this._ngOnDestroyHooks)t.ngOnDestroy();for(const t of this._onDestroyHooks)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(t){this._onDestroyHooks.push(t)}runInContext(t){this.assertNotDestroyed();const n=jr(this),r=wt(void 0);try{return t()}finally{jr(n),wt(r)}}get(t,n=Bo,r=N.Default){this.assertNotDestroyed();const o=jr(this),i=wt(void 0);try{if(!(r&N.SkipSelf)){let a=this.records.get(t);if(void 0===a){const l=function w0(e){return"function"==typeof e||"object"==typeof e&&e instanceof I}(t)&&Xi(t);a=l&&this.injectableDefInScope(l)?Ur(cu(t),Ms):null,this.records.set(t,a)}if(null!=a)return this.hydrate(t,a)}return(r&N.Self?Is():this.parent).get(t,n=r&N.Optional&&n===Bo?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[Ds]=s[Ds]||[]).unshift(re(t)),o)throw s;return function xb(e,t,n,r){const o=e[Ds];throw t[np]&&o.unshift(t[np]),e.message=function Nb(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.slice(2):e;let o=re(t);if(Array.isArray(t))o=t.map(re).join(" -> ");else if("object"==typeof t){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let a=t[s];i.push(s+":"+("string"==typeof a?JSON.stringify(a):re(a)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(Mb,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e[Ds]=null,e}(s,t,"R3InjectorError",this.source)}throw s}finally{wt(i),jr(o)}}resolveInjectorInitializers(){const t=jr(this),n=wt(void 0);try{const r=this.get(iu.multi,J,N.Self);for(const o of r)o()}finally{jr(t),wt(n)}}toString(){const t=[],n=this.records;for(const r of n.keys())t.push(re(r));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new C(205,!1)}processProvider(t){let n=ir(t=F(t))?t:F(t&&t.provide);const r=function _0(e){return au(e)?Ur(void 0,e.useValue):Ur(Np(e),Ms)}(t);if(ir(t)||!0!==t.multi)this.records.get(n);else{let o=this.records.get(n);o||(o=Ur(void 0,Ms,!0),o.factory=()=>Zl(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n){return n.value===Ms&&(n.value=y0,n.value=n.factory()),"object"==typeof n.value&&n.value&&function C0(e){return null!==e&&"object"==typeof e&&"function"==typeof e.ngOnDestroy}(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}injectableDefInScope(t){if(!t.providedIn)return!1;const n=F(t.providedIn);return"string"==typeof n?"any"===n||this.scopes.has(n):this.injectorDefTypes.has(n)}}function cu(e){const t=Xi(e),n=null!==t?t.factory:or(e);if(null!==n)return n;if(e instanceof I)throw new C(204,!1);if(e instanceof Function)return function v0(e){const t=e.length;if(t>0)throw function jo(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}(t,"?"),new C(204,!1);const n=function pE(e){const t=e&&(e[es]||e[hh]);if(t){const n=function gE(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new C(204,!1)}function Np(e,t,n){let r;if(ir(e)){const o=F(e);return or(o)||cu(o)}if(au(e))r=()=>F(e.useValue);else if(function Tp(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...Zl(e.deps||[]));else if(function Ap(e){return!(!e||!e.useExisting)}(e))r=()=>M(F(e.useExisting));else{const o=F(e&&(e.useClass||e.provide));if(!function D0(e){return!!e.deps}(e))return or(o)||cu(o);r=()=>new o(...Zl(e.deps))}return r}function Ur(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function E0(e){return!!e.\u0275providers}function du(e,t){for(const n of e)Array.isArray(n)?du(n,t):E0(n)?du(n.\u0275providers,t):t(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Rp{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class M0{resolveComponentFactory(t){throw function S0(e){const t=Error(`No component factory found for ${re(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let Yo=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.NULL=new M0,e})();function I0(){return Gr(Re(),_())}function Gr(e,t){return new _t(It(e,t))}let _t=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=I0,e})();function A0(e){return e instanceof _t?e.nativeElement:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Op{}let gn=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function T0(){const e=_(),n=mt(Re().index,e);return(st(n)?n:e)[B]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),e})(),x0=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=x({token:e,providedIn:"root",factory:()=>null}),e})();class Jo{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const N0=new Jo("14.2.3"),fu={};
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
       */class zr{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&yu(t);for(;n&&yu(n);)n=yu(n);return n||null}}
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
const vu=new Map;let U0=0;const Du="__ngContext__";function Ge(e,t){st(t)?(e[Du]=t[20],function z0(e){vu.set(e[20],e)}(t)):e[Du]=t}function mn(e){return e instanceof Function?e():e}
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
var at=(()=>((at=at||{})[at.Important=1]="Important",at[at.DashCase=2]="DashCase",at))();
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
function ei(e){const t=e[3];return Pt(t)?t[3]:t}function Eu(e){return Qp(e[13])}function bu(e){return Qp(e[4])}function Qp(e){for(;null!==e&&!Pt(e);)e=e[4];return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function qr(e,t,n,r,o){if(null!=r){let i,s=!1;Pt(r)?i=r:st(r)&&(s=!0,r=r[0]);const a=Se(r);0===e&&null!==n?null==o?eg(t,n,a):sr(t,n,a,o||null,!0):1===e&&null!==n?sr(t,n,a,o||null,!0):2===e?function ag(e,t,n){const r=As(e,t);r&&function vS(e,t,n,r){e.removeChild(t,n,r)}(e,r,t,n)}(t,a,s):3===e&&t.destroyNode(a),null!=i&&function CS(e,t,n,r,o){const i=n[7];i!==Se(n)&&qr(t,e,r,i,o);for(let a=10;a<n.length;a++){const l=n[a];ti(l[1],l,e,t,r,i)}}(t,e,i,n,o)}}function Mu(e,t,n){return e.createElement(t,n)}function Zp(e,t){const n=e[9],r=n.indexOf(t),o=t[3];512&t[2]&&(t[2]&=-513,Nl(o,-1)),n.splice(r,1)}function Iu(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&Zp(o,r),t>0&&(e[n-1][4]=r[4]);const i=vs(e,10+t);!function cS(e,t){ti(e,t,t[B],2,null,null),t[0]=null,t[6]=null}(r[1],r);const s=i[19];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-65}return r}function Yp(e,t){if(!(128&t[2])){const n=t[B];n.destroyNode&&ti(e,t,n,3,null,null),function hS(e){let t=e[13];if(!t)return Au(e[1],e);for(;t;){let n=null;if(st(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)st(t)&&Au(t[1],t),t=t[3];null===t&&(t=e),st(t)&&Au(t[1],t),n=t&&t[4]}t=n}}(t)}}function Au(e,t){if(!(128&t[2])){t[2]&=-65,t[2]|=128,function yS(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const o=t[n[r]];if(!(o instanceof Fo)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const a=o[i[s]],l=i[s+1];try{l.call(a)}finally{}}else try{i.call(o)}finally{}}}}(e,t),function mS(e,t){const n=e.cleanup,r=t[7];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+1],a="function"==typeof s?s(t):Se(t[s]),l=r[o=n[i+2]],u=n[i+3];"boolean"==typeof u?a.removeEventListener(n[i],l,u):u>=0?r[o=u]():r[o=-u].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++)(0,r[i])();t[7]=null}}(e,t),1===t[1].type&&t[B].destroy();const n=t[17];if(null!==n&&Pt(t[3])){n!==t[3]&&Zp(n,t);const r=t[19];null!==r&&r.detachView(e)}!function W0(e){vu.delete(e[20])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)}}function Jp(e,t,n){return function Xp(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const o=e.data[r.directiveStart].encapsulation;if(o===Qt.None||o===Qt.Emulated)return null}return It(r,n)}(e,t.parent,n)}function sr(e,t,n,r,o){e.insertBefore(t,n,r,o)}function eg(e,t,n){e.appendChild(t,n)}function tg(e,t,n,r,o){null!==r?sr(e,t,n,r,o):eg(e,t,n)}function As(e,t){return e.parentNode(t)}let og=function rg(e,t,n){return 40&e.type?It(e,n):null};function Ts(e,t,n,r){const o=Jp(e,r,t),i=t[B],a=function ng(e,t,n){return og(e,t,n)}(r.parent||t[6],r,t);if(null!=o)if(Array.isArray(n))for(let l=0;l<n.length;l++)tg(i,o,n[l],a,!1);else tg(i,o,n,a,!1)}function xs(e,t){if(null!==t){const n=t.type;if(3&n)return It(t,e);if(4&n)return xu(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return xs(e,r);{const o=e[t.index];return Pt(o)?xu(-1,o):Se(o)}}if(32&n)return wu(t,e)()||Se(e[t.index]);{const r=sg(e,t);return null!==r?Array.isArray(r)?r[0]:xs(ei(e[16]),r):xs(e,t.next)}}return null}function sg(e,t){return null!==t?e[16][6].projection[t.projection]:null}function xu(e,t){const n=10+e+1;if(n<t.length){const r=t[n],o=r[1].firstChild;if(null!==o)return xs(r,o)}return t[7]}function Nu(e,t,n,r,o,i,s){for(;null!=n;){const a=r[n.index],l=n.type;if(s&&0===t&&(a&&Ge(Se(a),r),n.flags|=4),64!=(64&n.flags))if(8&l)Nu(e,t,n.child,r,o,i,!1),qr(t,e,o,a,i);else if(32&l){const u=wu(n,r);let c;for(;c=u();)qr(t,e,o,c,i);qr(t,e,o,a,i)}else 16&l?lg(e,t,r,n,o,i):qr(t,e,o,a,i);n=s?n.projectionNext:n.next}}function ti(e,t,n,r,o,i){Nu(n,r,e.firstChild,t,o,i,!1)}function lg(e,t,n,r,o,i){const s=n[16],l=s[6].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++)qr(t,e,o,l[u],i);else Nu(e,t,l,s[3],o,i,!0)}function ug(e,t,n){e.setAttribute(t,"style",n)}function Ru(e,t,n){""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function cg(e,t,n){let r=e.length;for(;;){const o=e.indexOf(t,n);if(-1===o)return o;if(0===o||e.charCodeAt(o-1)<=32){const i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const dg="ng-template";function ES(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==cg(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function fg(e){return 4===e.type&&e.value!==dg}function bS(e,t,n){return t===(4!==e.type||n?e.value:dg)}function SS(e,t,n){let r=4;const o=e.attrs||[],i=function AS(e){for(let t=0;t<e.length;t++)if(Vh(e[t]))return t;return e.length}(o);let s=!1;for(let a=0;a<t.length;a++){const l=t[a];if("number"!=typeof l){if(!s)if(4&r){if(r=2|1&r,""!==l&&!bS(e,l,n)||""===l&&1===t.length){if(Lt(r))return!1;s=!0}}else{const u=8&r?l:t[++a];if(8&r&&null!==e.attrs){if(!ES(e.attrs,u,n)){if(Lt(r))return!1;s=!0}continue}const d=MS(8&r?"class":l,o,fg(e),n);if(-1===d){if(Lt(r))return!1;s=!0;continue}if(""!==u){let f;f=d>i?"":o[d+1].toLowerCase();const h=8&r?f:null;if(h&&-1!==cg(h,u,0)||2&r&&u!==f){if(Lt(r))return!1;s=!0}}}}else{if(!s&&!Lt(r)&&!Lt(l))return!1;if(s&&Lt(l))continue;s=!1,r=l|1&r}}return Lt(r)||s}function Lt(e){return 0==(1&e)}function MS(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){const s=t[o];if(s===e)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let a=t[++o];for(;"string"==typeof a;)a=t[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function TS(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function hg(e,t,n=!1){for(let r=0;r<t.length;r++)if(SS(e,t[r],n))return!0;return!1}function pg(e,t){return e?":not("+t.trim()+")":t}function NS(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const a=e[++n];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!Lt(s)&&(t+=pg(i,o),o=""),r=s,i=i||!Lt(r);n++}return""!==o&&(t+=pg(i,o)),t}
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
       */function H(e){gg(Q(),_(),Je()+e,!1)}function gg(e,t,n,r){if(!r)if(3==(3&t[2])){const i=e.preOrderCheckHooks;null!==i&&cs(t,i,n)}else{const i=e.preOrderHooks;null!==i&&ds(t,i,0,n)}On(n)}
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
function _g(e,t=null,n=null,r){const o=Dg(e,t,n,r);return o.resolveInjectorInitializers(),o}function Dg(e,t=null,n=null,r,o=new Set){const i=[n||J,p0(e)];return r=r||("object"==typeof e?void 0:re(e)),new xp(i,t||Is(),r||null,o)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}let Dt=(()=>{class e{static create(n,r){if(Array.isArray(n))return _g({name:""},r,n,"");{var o;const i=null!==(o=n.name)&&void 0!==o?o:"";return _g({name:i},n.parent,n.providers,i)}}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.THROW_IF_NOT_FOUND=Bo,e.NULL=new Sp,e.\u0275prov=x({token:e,providedIn:"any",factory:()=>M(Ep)}),e.__NG_ELEMENT_ID__=-1,e})();
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
function D(e,t=N.Default){const n=_();return null===n?M(e,t):Wh(Re(),n,F(e),t)}function Lu(){throw new Error("invalid")}
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
function Rs(e,t){return e<<17|t<<2}function Vt(e){return e>>17&32767}function Vu(e){return 2|e}function yn(e){return(131068&e)>>2}function $u(e,t){return-131069&e|t<<2}function ju(e){return 1|e}function Lg(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const s=e.data[i];kl(o),s.contentQueries(2,t[i],i)}}}function Ps(e,t,n,r,o,i,s,a,l,u,c){const d=t.blueprint.slice();return d[0]=o,d[2]=76|r,(null!==c||e&&1024&e[2])&&(d[2]|=1024),bh(d),d[3]=d[15]=e,d[8]=n,d[10]=s||e&&e[10],d[B]=a||e&&e[B],d[12]=l||e&&e[12]||null,d[9]=u||e&&e[9]||null,d[6]=i,d[20]=function G0(){return U0++}(),d[21]=c,d[16]=2==t.type?e[16]:d,d}function Kr(e,t,n,r,o){let i=e.data[t];if(null===i)i=function Qu(e,t,n,r,o){const i=Ih(),s=Rl(),l=e.data[t]=function hM(e,t,n,r,o,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=l),null!==i&&(s?null==i.child&&null!==l.parent&&(i.child=l):null===i.next&&(i.next=l)),l}(e,t,n,r,o),function GE(){return P.lFrame.inI18n}()&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=function Ro(){const e=P.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();i.injectorIndex=null===s?-1:s.injectorIndex}return Kt(i,!0),i}function Zr(e,t,n,r){if(0===n)return-1;const o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function Ku(e,t,n){Ll(t);try{const r=e.viewQuery;null!==r&&rc(1,r,n);const o=e.template;null!==o&&Vg(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Lg(e,t),e.staticViewQueries&&rc(2,e.viewQuery,n);const i=e.components;null!==i&&function cM(e,t){for(let n=0;n<t.length;n++)TM(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,Vl()}}function ks(e,t,n,r){const o=t[2];if(128!=(128&o)){Ll(t);try{bh(t),function Th(e){return P.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&Vg(e,t,n,2,r);const s=3==(3&o);if(s){const u=e.preOrderCheckHooks;null!==u&&cs(t,u,null)}else{const u=e.preOrderHooks;null!==u&&ds(t,u,0,null),$l(t,0)}if(function IM(e){for(let t=Eu(e);null!==t;t=bu(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const o=n[r],i=o[3];0==(512&o[2])&&Nl(i,1),o[2]|=512}}}(t),function MM(e){for(let t=Eu(e);null!==t;t=bu(t))for(let n=10;n<t.length;n++){const r=t[n],o=r[1];ls(r)&&ks(o,r,o.template,r[8])}}(t),null!==e.contentQueries&&Lg(e,t),s){const u=e.contentCheckHooks;null!==u&&cs(t,u)}else{const u=e.contentHooks;null!==u&&ds(t,u,1),$l(t,1)}!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function lM(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)On(~o);else{const i=o,s=n[++r],a=n[++r];zE(s,i),a(2,t[i])}}}finally{On(-1)}}(e,t);const a=e.components;null!==a&&function uM(e,t){for(let n=0;n<t.length;n++)AM(e,t[n])}(t,a);const l=e.viewQuery;if(null!==l&&rc(2,l,r),s){const u=e.viewCheckHooks;null!==u&&cs(t,u)}else{const u=e.viewHooks;null!==u&&ds(t,u,2),$l(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),t[2]&=-41,512&t[2]&&(t[2]&=-513,Nl(t[3],-1))}finally{Vl()}}}function Vg(e,t,n,r,o){const i=Je(),s=2&r;try{On(-1),s&&t.length>22&&gg(e,t,22,!1),n(r,o)}finally{On(i)}}function $g(e,t,n){if(Sl(t)){const o=t.directiveEnd;for(let i=t.directiveStart;i<o;i++){const s=e.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}function Zu(e,t,n){!Mh()||(function vM(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||Po(n,t),Ge(r,t);const s=n.initialInputs;for(let a=o;a<i;a++){const l=e.data[a],u=kt(l);u&&EM(t,n,l);const c=ko(t,e,a,n);Ge(c,t),null!==s&&bM(0,a-o,c,l,0,s),u&&(mt(n.index,t)[8]=c)}}(e,t,n,It(n,t)),128==(128&n.flags)&&function _M(e,t,n){const r=n.directiveStart,o=n.directiveEnd,i=n.index,s=function WE(){return P.lFrame.currentDirectiveIndex}();try{On(i);for(let a=r;a<o;a++){const l=e.data[a],u=t[a];Ol(a),(null!==l.hostBindings||0!==l.hostVars||null!==l.hostAttrs)&&Wg(l,u)}}finally{On(-1),Ol(s)}}(e,t,n))}function Yu(e,t,n=It){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],a=-1===s?n(t,e):e[s];e[o++]=a}}}function jg(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=Ju(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function Ju(e,t,n,r,o,i,s,a,l,u){const c=22+r,d=c+o,f=function dM(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:L);return n}(c,d),h="function"==typeof u?u():u;return f[1]={type:e,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:t,data:f.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:l,consts:h,incompleteFirstPass:!1}}function Bg(e,t,n,r){const o=Yg(t);null===n?o.push(r):(o.push(n),e.firstCreatePass&&Jg(e).push(r,o.length-1))}function Hg(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function Ug(e,t){const r=t.directiveEnd,o=e.data,i=t.attrs,s=[];let a=null,l=null;for(let u=t.directiveStart;u<r;u++){const c=o[u],d=c.inputs,f=null===i||fg(t)?null:SM(d,i);s.push(f),a=Hg(d,u,a),l=Hg(c.outputs,u,l)}null!==a&&(a.hasOwnProperty("class")&&(t.flags|=16),a.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=s,t.inputs=a,t.outputs=l}function Ct(e,t,n,r,o,i,s,a){const l=It(t,n);let c,u=t.inputs;!a&&null!=u&&(c=u[r])?(oc(e,n,c,r,o),is(t)&&Gg(n,t.index)):3&t.type&&(r=function pM(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(r),o=null!=s?s(o,t.value||"",r):o,i.setProperty(l,r,o))}function Gg(e,t){const n=mt(t,e);16&n[2]||(n[2]|=32)}function Xu(e,t,n,r){let o=!1;if(Mh()){const i=function DM(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];hg(n,s.selectors,!1)&&(o||(o=[]),ms(Po(n,t),e,s.type),kt(s)?(qg(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){o=!0,Qg(n,e.data.length,i.length);for(let c=0;c<i.length;c++){const d=i[c];d.providersResolver&&d.providersResolver(d)}let a=!1,l=!1,u=Zr(e,t,i.length,null);for(let c=0;c<i.length;c++){const d=i[c];n.mergedAttrs=hs(n.mergedAttrs,d.hostAttrs),Kg(e,n,t,u,d),wM(u,d,s),null!==d.contentQueries&&(n.flags|=8),(null!==d.hostBindings||null!==d.hostAttrs||0!==d.hostVars)&&(n.flags|=128);const f=d.type.prototype;!a&&(f.ngOnChanges||f.ngOnInit||f.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),a=!0),!l&&(f.ngOnChanges||f.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),l=!0),u++}Ug(e,n)}s&&function CM(e,t,n){if(t){const r=e.localNames=[];for(let o=0;o<t.length;o+=2){const i=n[t[o+1]];if(null==i)throw new C(-301,!1);r.push(t[o],i)}}}(n,r,s)}return n.mergedAttrs=hs(n.mergedAttrs,n.attrs),o}function zg(e,t,n,r,o,i){const s=i.hostBindings;if(s){let a=e.hostBindingOpCodes;null===a&&(a=e.hostBindingOpCodes=[]);const l=~t.index;(function yM(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(a)!=l&&a.push(l),a.push(r,o,s)}}function Wg(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function qg(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function wM(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;kt(t)&&(n[""]=e)}}function Qg(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Kg(e,t,n,r,o){e.data[r]=o;const i=o.factory||(o.factory=or(o.type)),s=new Fo(i,kt(o),D);e.blueprint[r]=s,n[r]=s,zg(e,t,0,r,Zr(e,n,o.hostVars,L),o)}function EM(e,t,n){const r=It(t,e),o=jg(n),i=e[10],s=Ls(e,Ps(e,o,null,n.onPush?32:16,r,t,i,i.createRenderer(r,n),null,null,null));e[t.index]=s}function bM(e,t,n,r,o,i){const s=i[t];if(null!==s){const a=r.setInput;for(let l=0;l<s.length;){const u=s[l++],c=s[l++],d=s[l++];null!==a?r.setInput(n,d,u,c):n[c]=d}}}function SM(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function Zg(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function AM(e,t){const n=mt(t,e);if(ls(n)){const r=n[1];48&n[2]?ks(r,n,r.template,n[8]):n[5]>0&&tc(n)}}function tc(e){for(let r=Eu(e);null!==r;r=bu(r))for(let o=10;o<r.length;o++){const i=r[o];if(ls(i))if(512&i[2]){const s=i[1];ks(s,i,s.template,i[8])}else i[5]>0&&tc(i)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=mt(n[r],e);ls(o)&&o[5]>0&&tc(o)}}function TM(e,t){const n=mt(t,e),r=n[1];(function xM(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),Ku(r,n,n[8])}function Ls(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function nc(e){for(;e;){e[2]|=32;const t=ei(e);if(bE(e)&&!t)return e;e=t}return null}function Vs(e,t,n,r=!0){const o=t[10];o.begin&&o.begin();try{ks(e,t,e.template,n)}catch(s){throw r&&em(t,s),s}finally{o.end&&o.end()}}function rc(e,t,n){kl(0),t(e,n)}function Yg(e){return e[7]||(e[7]=[])}function Jg(e){return e.cleanup||(e.cleanup=[])}function em(e,t){const n=e[9],r=n?n.get(zr,null):null;r&&r.handleError(t)}function oc(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],a=n[i++],l=t[s],u=e.data[s];null!==u.setInput?u.setInput(l,o,r,a):l[a]=o}}function vn(e,t,n){const r=as(t,e);!function Kp(e,t,n){e.setValue(t,n)}(e[B],r,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $s(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let s=0;s<t.length;s++){const a=t[s];"number"==typeof a?i=a:1==i?o=yl(o,a):2==i&&(r=yl(r,a+": "+t[++s]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function js(e,t,n,r,o=!1){for(;null!==n;){const i=t[n.index];if(null!==i&&r.push(Se(i)),Pt(i))for(let a=10;a<i.length;a++){const l=i[a],u=l[1].firstChild;null!==u&&js(l[1],l,u,r)}const s=n.type;if(8&s)js(e,t,n.child,r);else if(32&s){const a=wu(n,t);let l;for(;l=a();)r.push(l)}else if(16&s){const a=sg(t,n);if(Array.isArray(a))r.push(...a);else{const l=ei(t[16]);js(l[1],l,a,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ni{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return js(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(Pt(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(Iu(t,r),vs(n,r))}this._attachedToViewContainer=!1}Yp(this._lView[1],this._lView)}onDestroy(t){Bg(this._lView[1],this._lView,null,t)}markForCheck(){nc(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){Vs(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new C(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function fS(e,t){ti(e,t,t[B],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new C(902,!1);this._appRef=t}}class NM extends ni{constructor(t){super(t),this._view=t}detectChanges(){const t=this._view;Vs(t[1],t,t[8],!1)}checkNoChanges(){}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ic extends Yo{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=ee(t);return new ri(n,this.ngModule)}}function tm(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}class FM{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){const o=this.injector.get(t,fu,r);return o!==fu||n===fu?o:this.parentInjector.get(t,n,r)}}class ri extends Rp{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=function RS(e){return e.map(NS).join(",")}(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return tm(this.componentDef.inputs)}get outputs(){return tm(this.componentDef.outputs)}create(t,n,r,o){var i;let s=(o=o||this.ngModule)instanceof Vn?o:null===(i=o)||void 0===i?void 0:i.injector;s&&null!==this.componentDef.getStandaloneInjector&&(s=this.componentDef.getStandaloneInjector(s)||s);const a=s?new FM(t,s):t,l=a.get(Op,null);if(null===l)throw new C(407,!1);const u=a.get(x0,null),c=l.createRenderer(null,this.componentDef),d=this.componentDef.selectors[0][0]||"div",f=r?function fM(e,t,n){return e.selectRootElement(t,n===Qt.ShadowDom)}(c,r,this.componentDef.encapsulation):Mu(l.createRenderer(null,this.componentDef),d,function RM(e){const t=e.toLowerCase();return"svg"===t?"svg":"math"===t?"math":null}(d)),h=this.componentDef.onPush?288:272,p=Ju(0,null,null,1,0,null,null,null,null,null),g=Ps(null,p,null,h,null,null,l,c,u,a,null);let v,y;Ll(g);try{const w=function kM(e,t,n,r,o,i){const s=n[1];n[22]=e;const l=Kr(s,22,2,"#host",null),u=l.mergedAttrs=t.hostAttrs;null!==u&&($s(l,u,!0),null!==e&&(fs(o,e,u),null!==l.classes&&Ru(o,e,l.classes),null!==l.styles&&ug(o,e,l.styles)));const c=r.createRenderer(e,t),d=Ps(n,jg(t),null,t.onPush?32:16,n[22],l,r,c,i||null,null,null);return s.firstCreatePass&&(ms(Po(l,n),s,t.type),qg(s,l),Qg(l,n.length,1)),Ls(n,d),n[22]=d}(f,this.componentDef,g,l,c);if(f)if(r)fs(c,f,["ng-version",N0.full]);else{const{attrs:m,classes:b}=function FS(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!Lt(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);m&&fs(c,f,m),b&&b.length>0&&Ru(c,f,b.join(" "))}if(y=xl(p,22),void 0!==n){const m=y.projection=[];for(let b=0;b<this.ngContentSelectors.length;b++){const $=n[b];m.push(null!=$?Array.from($):null)}}v=function LM(e,t,n,r){const o=n[1],i=function mM(e,t,n){const r=Re();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Kg(e,r,t,Zr(e,t,1,null),n),Ug(e,r));const o=ko(t,e,r.directiveStart,r);Ge(o,t);const i=It(r,t);return i&&Ge(i,t),o}(o,n,t);if(e[8]=n[8]=i,null!==r)for(const a of r)a(i,t);if(t.contentQueries){const a=Re();t.contentQueries(1,i,a.directiveStart)}const s=Re();return!o.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(On(s.index),zg(n[1],s,0,s.directiveStart,s.directiveEnd,t),Wg(t,i)),i}(w,this.componentDef,g,[VM]),Ku(p,g,null)}finally{Vl()}return new PM(this.componentType,v,Gr(y,g),g,y)}}class PM extends class b0{}{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.instance=n,this.hostView=this.changeDetectorRef=new NM(o),this.componentType=t}setInput(t,n){const r=this._tNode.inputs;let o;if(null!==r&&(o=r[t])){const i=this._rootLView;oc(i[1],i,o,t,n),Gg(i,this._tNode.index)}}get injector(){return new Or(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}function VM(){const e=Re();us(_()[1],e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function te(e){let t=function nm(e){return Object.getPrototypeOf(e.prototype).constructor}(e.type),n=!0;const r=[e];for(;t;){let o;if(kt(e))o=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new C(903,!1);o=t.\u0275dir}if(o){if(n){r.push(o);const s=e;s.inputs=sc(e.inputs),s.declaredInputs=sc(e.declaredInputs),s.outputs=sc(e.outputs);const a=o.hostBindings;a&&HM(e,a);const l=o.viewQuery,u=o.contentQueries;if(l&&jM(e,l),u&&BM(e,u),ml(e.inputs,o.inputs),ml(e.declaredInputs,o.declaredInputs),ml(e.outputs,o.outputs),kt(o)&&o.data.animation){const c=e.data;c.animation=(c.animation||[]).concat(o.data.animation)}}const i=o.features;if(i)for(let s=0;s<i.length;s++){const a=i[s];a&&a.ngInherit&&a(e),a===te&&(n=!1)}}t=Object.getPrototypeOf(t)}!function $M(e){let t=0,n=null;for(let r=e.length-1;r>=0;r--){const o=e[r];o.hostVars=t+=o.hostVars,o.hostAttrs=hs(o.hostAttrs,n=hs(n,o.hostAttrs))}}(r)}function sc(e){return e===Er?{}:e===J?[]:e}function jM(e,t){const n=e.viewQuery;e.viewQuery=n?(r,o)=>{t(r,o),n(r,o)}:t}function BM(e,t){const n=e.contentQueries;e.contentQueries=n?(r,o,i)=>{t(r,o,i),n(r,o,i)}:t}function HM(e,t){const n=e.hostBindings;e.hostBindings=n?(r,o)=>{t(r,o),n(r,o)}:t}
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
let Bs=null;function ar(){if(!Bs){const e=oe.Symbol;if(e&&e.iterator)Bs=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(Bs=r)}}}return Bs}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function oi(e){return!!ac(e)&&(Array.isArray(e)||!(e instanceof Map)&&ar()in e)}function ac(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ze(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}function Hs(e,t,n,r,o){const i=function lr(e,t,n,r){const o=ze(e,t,n);return ze(e,t+1,r)||o}(e,t,n,r);return ze(e,t+2,o)||i}function Jr(e,t,n,r){return ze(e,Nr(),n)?t+k(n)+r:L}function eo(e,t,n,r,o,i,s,a){const u=Hs(e,function dn(){return P.lFrame.bindingIndex}(),n,o,s);return fn(3),u?t+k(n)+r+k(o)+i+k(s)+a:L}function Ce(e,t,n,r,o,i,s,a){const l=_(),u=Q(),c=e+22,d=u.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ZM(e,t,n,r,o,i,s,a,l){const u=t.consts,c=Kr(t,e,4,s||null,Fn(u,a));Xu(t,n,c,Fn(u,l)),us(t,c);const d=c.tViews=Ju(2,c,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,u);return null!==t.queries&&(t.queries.template(t,c),d.queries=t.queries.embeddedTView(c)),c}(c,u,l,t,n,r,o,i,s):u.data[c];Kt(d,!1);const f=l[B].createComment("");Ts(u,l,f,d),Ge(f,l),Ls(l,l[c]=Zg(f,l,f,d)),ss(d)&&Zu(u,l,d),null!=s&&Yu(l,d,a)}
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
function K(e,t,n){const r=_();return ze(r,Nr(),t)&&Ct(Q(),ge(),r,e,t,r[B],n,!1),K}function lc(e,t,n,r,o){const s=o?"class":"style";oc(e,n,t.inputs[s],s,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Z(e,t,n,r){const o=_(),i=Q(),s=22+e,a=o[B],l=o[s]=Mu(a,t,function eb(){return P.lFrame.currentNamespace}()),u=i.firstCreatePass?function XM(e,t,n,r,o,i,s){const a=t.consts,u=Kr(t,e,2,o,Fn(a,i));return Xu(t,n,u,Fn(a,s)),null!==u.attrs&&$s(u,u.attrs,!1),null!==u.mergedAttrs&&$s(u,u.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,u),u}(s,i,o,0,t,n,r):i.data[s];Kt(u,!0);const c=u.mergedAttrs;null!==c&&fs(a,l,c);const d=u.classes;null!==d&&Ru(a,l,d);const f=u.styles;return null!==f&&ug(a,l,f),64!=(64&u.flags)&&Ts(i,o,l,u),0===function VE(){return P.lFrame.elementDepthCount}()&&Ge(l,o),function $E(){P.lFrame.elementDepthCount++}(),ss(u)&&(Zu(i,o,u),$g(i,u,o)),null!==r&&Yu(o,u),Z}function q(){let e=Re();Rl()?Fl():(e=e.parent,Kt(e,!1));const t=e;!function jE(){P.lFrame.elementDepthCount--}();const n=Q();return n.firstCreatePass&&(us(n,e),Sl(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function ib(e){return 0!=(16&e.flags)}(t)&&lc(n,t,_(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function sb(e){return 0!=(32&e.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)&&lc(n,t,_(),t.stylesWithoutHost,!1),q}function et(e,t,n,r){return Z(e,t,n,r),q(),et
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function so(e,t,n){const r=_(),o=Q(),i=e+22,s=o.firstCreatePass?function eI(e,t,n,r,o){const i=t.consts,s=Fn(i,r),a=Kr(t,e,8,"ng-container",s);return null!==s&&$s(a,s,!0),Xu(t,n,a,Fn(i,o)),null!==t.queries&&t.queries.elementStart(t,a),a}(i,o,r,t,n):o.data[i];Kt(s,!0);const a=r[i]=r[B].createComment("");return Ts(o,r,a,s),Ge(a,r),ss(s)&&(Zu(o,r,s),$g(o,s,r)),null!=n&&Yu(r,s),so}function ao(){let e=Re();const t=Q();return Rl()?Fl():(e=e.parent,Kt(e,!1)),t.firstCreatePass&&(us(t,e),Sl(e)&&t.queries.elementEnd(e)),ao}function lo(){return _()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function si(e){return!!e&&"function"==typeof e.then}const uc=function hm(e){return!!e&&"function"==typeof e.subscribe};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ie(e,t,n,r){const o=_(),i=Q(),s=Re();return function gm(e,t,n,r,o,i,s,a){const l=ss(r),c=e.firstCreatePass&&Jg(e),d=t[8],f=Yg(t);let h=!0;if(3&r.type||a){const v=It(r,t),y=a?a(v):v,w=f.length,m=a?$=>a(Se($[r.index])):r.index;let b=null;if(!a&&l&&(b=function tI(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const a=t[7],l=o[i+2];return a.length>l?a[l]:null}"string"==typeof s&&(i+=2)}return null}(e,t,o,r.index)),null!==b)(b.__ngLastListenerFn__||b).__ngNextListenerFn__=i,b.__ngLastListenerFn__=i,h=!1;else{i=ym(r,t,d,i,!1);const $=n.listen(y,o,i);f.push(i,$),c&&c.push(o,m,w,w+1)}}else i=ym(r,t,d,i,!1);const p=r.outputs;let g;if(h&&null!==p&&(g=p[o])){const v=g.length;if(v)for(let y=0;y<v;y+=2){const de=t[g[y]][g[y+1]].subscribe(i),Dr=f.length;f.push(i,de),c&&c.push(o,r.index,Dr,-(Dr+1))}}}(i,o,o[B],s,e,t,0,r),Ie}function mm(e,t,n,r){try{return!1!==n(r)}catch(o){return em(e,o),!1}}function ym(e,t,n,r,o){return function i(s){if(s===Function)return r;nc(2&e.flags?mt(e.index,t):t);let l=mm(t,0,r,s),u=i.__ngNextListenerFn__;for(;u;)l=mm(t,0,u,s)&&l,u=u.__ngNextListenerFn__;return o&&!1===l&&(s.preventDefault(),s.returnValue=!1),l}}
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
       */function Ae(e=1){return function QE(e){return(P.lFrame.contextLView=function KE(e,t){for(;e>0;)t=t[15],e--;return t}(e,P.lFrame.contextLView))[8]}(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Us(e,t,n){return uo(e,"",t,"",n),Us}function uo(e,t,n,r,o){const i=_(),s=Jr(i,t,n,r);return s!==L&&Ct(Q(),ge(),i,e,s,i[B],o,!1),uo}function Mm(e,t,n,r,o){const i=e[n+1],s=null===t;let a=r?Vt(i):yn(i),l=!1;for(;0!==a&&(!1===l||s);){const c=e[a+1];aI(e[a],t)&&(l=!0,e[a+1]=r?ju(c):Vu(c)),a=r?Vt(c):yn(c)}l&&(e[n+1]=r?Vu(i):ju(i))}function aI(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&$r(e,t)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Gs(e,t){return function $t(e,t,n,r){const o=_(),i=Q(),s=fn(2);i.firstUpdatePass&&function Pm(e,t,n,r){const o=e.data;if(null===o[n+1]){const i=o[Je()],s=function Om(e,t){return t>=e.expandoStartIndex}(e,n);(function $m(e,t){return 0!=(e.flags&(t?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */)(i,r)&&null===t&&!s&&(t=!1),t=function mI(e,t,n,r){const o=function Pl(e){const t=P.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let i=r?t.residualClasses:t.residualStyles;if(null===o)0===(r?t.classBindings:t.styleBindings)&&(n=ai(n=cc(null,e,t,n,r),t.attrs,r),i=null);else{const s=t.directiveStylingLast;if(-1===s||e[s]!==o)if(n=cc(o,e,t,n,r),null===i){let l=function yI(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==yn(r))return e[Vt(r)]}(e,t,r);void 0!==l&&Array.isArray(l)&&(l=cc(null,e,t,l[1],r),l=ai(l,t.attrs,r),function vI(e,t,n,r){e[Vt(n?t.classBindings:t.styleBindings)]=r}(e,t,r,l))}else i=function _I(e,t,n){let r;const o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++)r=ai(r,e[i].hostAttrs,n);return ai(r,t.attrs,n)}(e,t,r)}return void 0!==i&&(r?t.residualClasses=i:t.residualStyles=i),n}(o,i,t,r),function iI(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,a=Vt(s),l=yn(s);e[r]=n;let c,u=!1;if(Array.isArray(n)){const d=n;c=d[1],(null===c||$r(d,c)>0)&&(u=!0)}else c=n;if(o)if(0!==l){const f=Vt(e[a+1]);e[r+1]=Rs(f,a),0!==f&&(e[f+1]=$u(e[f+1],r)),e[a+1]=function JS(e,t){return 131071&e|t<<17}(e[a+1],r)}else e[r+1]=Rs(a,0),0!==a&&(e[a+1]=$u(e[a+1],r)),a=r;else e[r+1]=Rs(l,0),0===a?a=r:e[l+1]=$u(e[l+1],r),l=r;u&&(e[r+1]=Vu(e[r+1])),Mm(e,c,r,!0),Mm(e,c,r,!1),function sI(e,t,n,r,o){const i=o?e.residualClasses:e.residualStyles;null!=i&&"string"==typeof t&&$r(i,t)>=0&&(n[r+1]=ju(n[r+1]))}(t,c,e,r,i),s=Rs(a,l),i?t.classBindings=s:t.styleBindings=s}(o,i,t,n,s,r)}}(i,e,s,r),t!==L&&ze(o,s,t)&&function Lm(e,t,n,r,o,i,s,a){if(!(3&t.type))return;const l=e.data,u=l[a+1];zs(function Tg(e){return 1==(1&e)}(u)?Vm(l,t,n,o,yn(u),s):void 0)||(zs(i)||function Ag(e){return 2==(2&e)}(u)&&(i=Vm(l,null,n,o,a,s)),function wS(e,t,n,r,o){if(t)o?e.addClass(n,r):e.removeClass(n,r);else{let i=-1===r.indexOf("-")?void 0:at.DashCase;null==o?e.removeStyle(n,r,i):("string"==typeof o&&o.endsWith("!important")&&(o=o.slice(0,-10),i|=at.Important),e.setStyle(n,r,o,i))}}(r,s,as(Je(),n),o,i))}(i,i.data[Je()],o,o[B],e,o[s+1]=function wI(e,t){return null==e||("string"==typeof t?e+=t:"object"==typeof e&&(e=re(kn(e)))),e}(t,n),r,s)}(e,t,null,!0),Gs}function cc(e,t,n,r,o){let i=null;const s=n.directiveEnd;let a=n.directiveStylingLast;for(-1===a?a=n.directiveStart:a++;a<s&&(i=t[a],r=ai(r,i.hostAttrs,o),i!==e);)a++;return null!==e&&(n.directiveStylingLast=a),r}function ai(e,t,n){const r=n?1:2;let o=-1;if(null!==t)for(let i=0;i<t.length;i++){const s=t[i];"number"==typeof s?o=s:o===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),vt(e,s,!!n||t[++i]))}return void 0===e?null:e}function Vm(e,t,n,r,o,i){const s=null===t;let a;for(;o>0;){const l=e[o],u=Array.isArray(l),c=u?l[1]:l,d=null===c;let f=n[o+1];f===L&&(f=d?J:void 0);let h=d?ql(f,r):c===r?f:void 0;if(u&&!zs(h)&&(h=ql(l,r)),zs(h)&&(a=h,s))return a;const p=e[o+1];o=s?Vt(p):yn(p)}if(null!==t){let l=i?t.residualClasses:t.residualStyles;null!=l&&(a=ql(l,r))}return a}function zs(e){return void 0!==e}function fe(e,t=""){const n=_(),r=Q(),o=e+22,i=r.firstCreatePass?Kr(r,o,1,t,null):r.data[o],s=n[o]=function Su(e,t){return e.createText(t)}(n[B],t);Ts(r,n,s,i),Kt(i,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function dc(e){return Bt("",e,""),dc}function Bt(e,t,n){const r=_(),o=Jr(r,e,t,n);return o!==L&&vn(r,Je(),o),Bt}function fc(e,t,n,r,o,i,s){const a=_(),l=eo(a,e,t,n,r,o,i,s);return l!==L&&vn(a,Je(),l),fc}const ho="en-US";
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
let sy=ho;function gc(e,t,n,r,o){if(e=F(e),Array.isArray(e))for(let i=0;i<e.length;i++)gc(e[i],t,n,r,o);else{const i=Q(),s=_();let a=ir(e)?e:F(e.provide),l=Np(e);const u=Re(),c=1048575&u.providerIndexes,d=u.directiveStart,f=u.providerIndexes>>20;if(ir(e)||!e.multi){const h=new Fo(l,o,D),p=yc(a,t,o?c:c+f,d);-1===p?(ms(Po(u,s),i,a),mc(i,e,t.length),t.push(a),u.directiveStart++,u.directiveEnd++,o&&(u.providerIndexes+=1048576),n.push(h),s.push(h)):(n[p]=h,s[p]=h)}else{const h=yc(a,t,c+f,d),p=yc(a,t,c,c+f),g=h>=0&&n[h],v=p>=0&&n[p];if(o&&!v||!o&&!g){ms(Po(u,s),i,a);const y=function jA(e,t,n,r,o){const i=new Fo(e,n,D);return i.multi=[],i.index=t,i.componentProviders=0,Ny(i,o,r&&!n),i}(o?$A:VA,n.length,o,r,l);!o&&v&&(n[p].providerFactory=y),mc(i,e,t.length,0),t.push(a),u.directiveStart++,u.directiveEnd++,o&&(u.providerIndexes+=1048576),n.push(y),s.push(y)}else mc(i,e,h>-1?h:p,Ny(n[o?p:h],l,!o&&r));!o&&r&&v&&n[p].componentProviders++}}}function mc(e,t,n,r){const o=ir(t),i=function m0(e){return!!e.useClass}(t);if(o||i){const l=(i?F(t.useClass):t).prototype.ngOnDestroy;if(l){const u=e.destroyHooks||(e.destroyHooks=[]);if(!o&&t.multi){const c=u.indexOf(n);-1===c?u.push(n,[r,l]):u[c+1].push(r,l)}else u.push(n,l)}}}function Ny(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function yc(e,t,n,r){for(let o=n;o<r;o++)if(t[o]===e)return o;return-1}function VA(e,t,n,r){return vc(this.multi,[])}function $A(e,t,n,r){const o=this.multi;let i;if(this.providerFactory){const s=this.providerFactory.componentProviders,a=ko(n,n[1],this.providerFactory.index,r);i=a.slice(0,s),vc(o,i);for(let l=s;l<a.length;l++)i.push(a[l])}else i=[],vc(o,i);return i}function vc(e,t){for(let n=0;n<e.length;n++)t.push((0,e[n])());return t}function ce(e,t=[]){return n=>{n.providersResolver=(r,o)=>
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
function LA(e,t,n){const r=Q();if(r.firstCreatePass){const o=kt(e);gc(n,r.data,r.blueprint,o,!0),gc(t,r.data,r.blueprint,o,!1)}}(r,o?o(e):e,t)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class cr{}class Ry{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Fy extends cr{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new ic(this);const r=pt(t);this._bootstrapComponents=mn(r.bootstrap),this._r3Injector=Dg(t,n,[{provide:cr,useValue:this},{provide:Yo,useValue:this.componentFactoryResolver}],re(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(t)}get injector(){return this._r3Injector}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class _c extends Ry{constructor(t){super(),this.moduleType=t}create(t){return new Fy(this.moduleType,t)}}class HA extends cr{constructor(t,n,r){super(),this.componentFactoryResolver=new ic(this),this.instance=null;const o=new xp([...t,{provide:cr,useValue:this},{provide:Yo,useValue:this.componentFactoryResolver}],n||Is(),r,new Set(["environment"]));this.injector=o,o.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}}function Zs(e,t,n=null){return new HA(e,t,n).injector}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let UA=(()=>{class e{constructor(n){this._injector=n,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n.id)){const r=Mp(0,n.type),o=r.length>0?Zs([r],this._injector,`Standalone[${n.type.name}]`):null;this.cachedInjectors.set(n.id,o)}return this.cachedInjectors.get(n.id)}ngOnDestroy(){try{for(const n of this.cachedInjectors.values())null!==n&&n.destroy()}finally{this.cachedInjectors.clear()}}}return e.\u0275prov=x({token:e,providedIn:"environment",factory:()=>new e(M(Vn))}),e})();function Oy(e){e.getStandaloneInjector=t=>t.get(UA).getOrCreateStandaloneInjector(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Bn(e,t,n,r){return function By(e,t,n,r,o,i){const s=t+n;return ze(e,s,o)?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Jt(e,t,n){return e[t]=n}(e,s+1,i?r.call(i,o):r(o)):function hi(e,t){const n=e[t];return n===L?void 0:n}(e,s+1)}(_(),function Ye(){const e=P.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}(),e,t,n,r)}function Cc(e){return t=>{setTimeout(e,void 0,t)}}const ye=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class pT extends ct{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&"object"==typeof t){var a,l,u;const d=t;o=null===(a=d.next)||void 0===a?void 0:a.bind(d),i=null===(l=d.error)||void 0===l?void 0:l.bind(d),s=null===(u=d.complete)||void 0===u?void 0:u.bind(d)}this.__isAsync&&(i=Cc(i),o&&(o=Cc(o)),s&&(s=Cc(s)));const c=super.subscribe({next:o,error:i,complete:s});return t instanceof ut&&t.add(c),c}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gT(){return this._results[ar()]()}class wc{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=ar(),r=wc.prototype;r[n]||(r[n]=gT)}get changes(){return this._changes||(this._changes=new ye)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const r=this;r.dirty=!1;const o=yt(t);(this._changesDetected=!function mb(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}(r._results,o,n))&&(r._results=o,r.length=o.length,r.last=o[this.length-1],r.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let _n=(()=>{class e{}return e.__NG_ELEMENT_ID__=vT,e})();const mT=_n,yT=class extends mT{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t,n){const r=this._declarationTContainer.tViews,o=Ps(this._declarationLView,r,t,16,null,r.declTNode,null,null,null,null,n||null);o[17]=this._declarationLView[this._declarationTContainer.index];const s=this._declarationLView[19];return null!==s&&(o[19]=s.createEmbeddedView(r)),Ku(r,o,t),new ni(o)}};function vT(){return Ys(Re(),_())}function Ys(e,t){return 4&e.type?new yT(t,e,Gr(e,t)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ht=(()=>{class e{}return e.__NG_ELEMENT_ID__=_T,e})();function _T(){return Qy(Re(),_())}const DT=Ht,Wy=class extends DT{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return Gr(this._hostTNode,this._hostLView)}get injector(){return new Or(this._hostTNode,this._hostLView)}get parentInjector(){const t=gs(this._hostTNode,this._hostLView);if(Bh(t)){const n=Fr(t,this._hostLView),r=Rr(t);return new Or(n[1].data[r+8],n)}return new Or(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=qy(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){let o,i;"number"==typeof r?o=r:null!=r&&(o=r.index,i=r.injector);const s=t.createEmbeddedView(n||{},i);return this.insert(s,o),s}createComponent(t,n,r,o,i){const s=t&&!function $o(e){return"function"==typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t);let a;if(s)a=n;else{const d=n||{};a=d.index,r=d.injector,o=d.projectableNodes,i=d.environmentInjector||d.ngModuleRef}const l=s?t:new ri(ee(t)),u=r||this.parentInjector;if(!i&&null==l.ngModule){const f=(s?u:this.parentInjector).get(Vn,null);f&&(i=f)}const c=l.create(u,o,void 0,i);return this.insert(c.hostView,a),c}insert(t,n){const r=t._lView,o=r[1];if(function LE(e){return Pt(e[3])}(r)){const c=this.indexOf(t);if(-1!==c)this.detach(c);else{const d=r[3],f=new Wy(d,d[6],d[3]);f.detach(f.indexOf(t))}}const i=this._adjustIndex(n),s=this._lContainer;!function pS(e,t,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-10?(t[4]=n[o],Jh(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function gS(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const a=t[19];null!==a&&a.insertView(e),t[2]|=64}(o,r,s,i);const a=xu(i,s),l=r[B],u=As(l,s[7]);return null!==u&&function dS(e,t,n,r,o,i){r[0]=o,r[6]=t,ti(e,r,n,1,o,i)}(o,s[6],l,r,u,a),t.attachToViewContainerRef(),Jh(Ec(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=qy(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=Iu(this._lContainer,n);r&&(vs(Ec(this._lContainer),n),Yp(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=Iu(this._lContainer,n);return r&&null!=vs(Ec(this._lContainer),n)?new ni(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function qy(e){return e[8]}function Ec(e){return e[8]||(e[8]=[])}function Qy(e,t){let n;const r=t[e.index];if(Pt(r))n=r;else{let o;if(8&e.type)o=Se(r);else{const i=t[B];o=i.createComment("");const s=It(e,t);sr(i,As(i,s),o,function _S(e,t){return e.nextSibling(t)}(i,s),!1)}t[e.index]=n=Zg(r,t,o,e),Ls(t,n)}return new Wy(n,e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class bc{constructor(t){this.queryList=t,this.matches=null}clone(){return new bc(this.queryList)}setDirty(){this.queryList.setDirty()}}class Sc{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const r=null!==t.contentQueries?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){const s=n.getByIndex(i);o.push(this.queries[s.indexInDeclarationView].clone())}return new Sc(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==Xy(t,n).matches&&this.queries[n].setDirty()}}class Ky{constructor(t,n,r=null){this.predicate=t,this.flags=n,this.read=r}}class Mc{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){const o=null!==n?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,null!==n?n.push(i):n=[i])}return null!==n?new Mc(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class Ic{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new Ic(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=t.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];this.matchTNodeWithReadOption(t,n,ET(n,i)),this.matchTNodeWithReadOption(t,n,ys(n,t,i,!1,!1))}else r===_n?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,ys(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(null!==r){const o=this.metadata.read;if(null!==o)if(o===_t||o===Ht||o===_n&&4&n.type)this.addMatch(n.index,-2);else{const i=ys(n,t,o,!1,!1);null!==i&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function ET(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function ST(e,t,n,r){return-1===n?function bT(e,t){return 11&e.type?Gr(e,t):4&e.type?Ys(e,t):null}(t,e):-2===n?function MT(e,t,n){return n===_t?Gr(t,e):n===_n?Ys(t,e):n===Ht?Qy(t,e):void 0}(e,t,r):ko(e,e[1],n,t)}function Zy(e,t,n,r){const o=t[19].queries[r];if(null===o.matches){const i=e.data,s=n.matches,a=[];for(let l=0;l<s.length;l+=2){const u=s[l];a.push(u<0?null:ST(t,i[u],s[l+1],n.metadata.read))}o.matches=a}return o.matches}function Ac(e,t,n,r){const o=e.queries.getByIndex(n),i=o.matches;if(null!==i){const s=Zy(e,t,o,n);for(let a=0;a<i.length;a+=2){const l=i[a];if(l>0)r.push(s[a/2]);else{const u=i[a+1],c=t[-l];for(let d=10;d<c.length;d++){const f=c[d];f[17]===f[3]&&Ac(f[1],f,u,r)}if(null!==c[9]){const d=c[9];for(let f=0;f<d.length;f++){const h=d[f];Ac(h[1],h,u,r)}}}}}return r}function gi(e){const t=_(),n=Q(),r=Nh();kl(r+1);const o=Xy(n,r);if(e.dirty&&function kE(e){return 4==(4&e[2])}(t)===(2==(2&o.metadata.flags))){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?Ac(n,t,r,[]):Zy(n,t,o,r);e.reset(i,A0),e.notifyOnChanges()}return!0}return!1}function Tc(e,t,n){const r=Q();r.firstCreatePass&&(function Jy(e,t,n){null===e.queries&&(e.queries=new Mc),e.queries.track(new Ic(t,n))}(r,new Ky(e,t,n),-1),2==(2&t)&&(r.staticViewQueries=!0)),function Yy(e,t,n){const r=new wc(4==(4&n));Bg(e,t,r,r.destroy),null===t[19]&&(t[19]=new Sc),t[19].queries.push(new bc(r))}(r,_(),t)}function mi(){return function IT(e,t){return e[19].queries[t].queryList}(_(),Nh())}function Xy(e,t){return e.queries.getByIndex(t)}
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
function Xs(...e){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ea=new I("Application Initializer");let ta=(()=>{class e{constructor(n){this.appInits=n,this.resolve=Xs,this.reject=Xs,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const i=this.appInits[o]();if(si(i))n.push(i);else if(uc(i)){const s=new Promise((a,l)=>{i.subscribe({complete:a,error:l})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(M(ea,8))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const vi=new I("AppId",{providedIn:"root",factory:function vv(){return`${Pc()}${Pc()}${Pc()}`}});function Pc(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const _v=new I("Platform Initializer"),kc=new I("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),Dv=new I("appBootstrapListener");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let KT=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Dn=new I("LocaleId",{providedIn:"root",factory:()=>De(Dn,N.Optional|N.SkipSelf)||function ZT(){return typeof $localize<"u"&&$localize.locale||ho}()});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class JT{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let Lc=(()=>{class e{compileModuleSync(n){return new _c(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const r=this.compileModuleSync(n),i=mn(pt(n).declarations).reduce((s,a)=>{const l=ee(a);return l&&s.push(new ri(l)),s},[]);return new JT(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const tx=(()=>Promise.resolve(0))();function Vc(e){typeof Zone>"u"?tx.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
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
class Pe{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new ye(!1),this.onMicrotaskEmpty=new ye(!1),this.onStable=new ye(!1),this.onError=new ye(!1),typeof Zone>"u")throw new C(908,!1);Zone.assertZonePatched();const o=this;if(o._nesting=0,o._outer=o._inner=Zone.current,Zone.AsyncStackTaggingZoneSpec){const i=Zone.AsyncStackTaggingZoneSpec;o._inner=o._inner.fork(new i("Angular"))}Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function nx(){let e=oe.requestAnimationFrame,t=oe.cancelAnimationFrame;if(typeof Zone<"u"&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function ix(e){const t=()=>{!function ox(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(oe,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,jc(e),e.isCheckStableRunning=!0,$c(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),jc(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,a)=>{try{return Ev(e),n.invokeTask(o,i,s,a)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),bv(e)}},onInvoke:(n,r,o,i,s,a,l)=>{try{return Ev(e),n.invoke(o,i,s,a,l)}finally{e.shouldCoalesceRunChangeDetection&&t(),bv(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(e._hasPendingMicrotasks=i.microTask,jc(e),$c(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Pe.isInAngularZone())throw new C(909,!1)}static assertNotInAngularZone(){if(Pe.isInAngularZone())throw new C(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,rx,Xs,Xs);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const rx={};function $c(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function jc(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function Ev(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function bv(e){e._nesting--,$c(e)}class sx{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new ye,this.onMicrotaskEmpty=new ye,this.onStable=new ye,this.onError=new ye}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Sv=new I(""),na=new I("");let Uc,Bc=(()=>{class e{constructor(n,r,o){this._ngZone=n,this.registry=r,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,Uc||(function ax(e){Uc=e}(o),o.addToWindow(r)),this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Pe.assertNotInAngularZone(),Vc(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Vc(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let i=-1;r&&r>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(n){this.registry.registerApplication(n,this)}unregisterApplication(n){this.registry.unregisterApplication(n)}findProviders(n,r,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(M(Pe),M(Hc),M(na))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})(),Hc=(()=>{class e{constructor(){this._applications=new Map}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){var o,i;return null!==(o=null===(i=Uc)||void 0===i?void 0:i.findTestabilityInTree(this,n,r))&&void 0!==o?o:null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})(),Hn=null;const Mv=new I("AllowMultipleToken"),Gc=new I("PlatformDestroyListeners");class Iv{constructor(t,n){this.name=t,this.token=n}}function Tv(e,t,n=[]){const r=`Platform: ${t}`,o=new I(r);return(i=[])=>{let s=zc();if(!s||s.injector.get(Mv,!1)){const a=[...n,...i,{provide:o,useValue:!0}];e?e(a):function cx(e){if(Hn&&!Hn.get(Mv,!1))throw new C(400,!1);Hn=e;const t=e.get(Nv);(function Av(e){const t=e.get(_v,null);t&&t.forEach(n=>n())})(e)}(function xv(e=[],t){return Dt.create({name:t,providers:[{provide:lu,useValue:"platform"},{provide:Gc,useValue:new Set([()=>Hn=null])},...e]})}(a,r))}return function fx(e){const t=zc();if(!t)throw new C(401,!1);return t}()}}function zc(){var e,t;return null!==(e=null===(t=Hn)||void 0===t?void 0:t.get(Nv))&&void 0!==e?e:null}let Nv=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const o=function Fv(e,t){let n;return n="noop"===e?new sx:("zone.js"===e?void 0:e)||new Pe(t),n}(r?.ngZone,function Rv(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!e||!e.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!e||!e.ngZoneRunCoalescing)||!1}}(r)),i=[{provide:Pe,useValue:o}];return o.run(()=>{const s=Dt.create({providers:i,parent:this.injector,name:n.moduleType.name}),a=n.create(s),l=a.injector.get(zr,null);if(!l)throw new C(402,!1);return o.runOutsideAngular(()=>{const u=o.onError.subscribe({next:c=>{l.handleError(c)}});a.onDestroy(()=>{oa(this._modules,a),u.unsubscribe()})}),function Ov(e,t,n){try{const r=n();return si(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(l,o,()=>{const u=a.injector.get(ta);return u.runInitializers(),u.donePromise.then(()=>(function ay(e){ft(e,"Expected localeId to be defined"),"string"==typeof e&&(sy=e.toLowerCase().replace(/_/g,"-"))}(a.injector.get(Dn,ho)||ho),this._moduleDoBootstrap(a),a))})})}bootstrapModule(n,r=[]){const o=Pv({},r);return function lx(e,t,n){const r=new _c(n);return Promise.resolve(r)}(0,0,n).then(i=>this.bootstrapModuleFactory(i,o))}_moduleDoBootstrap(n){const r=n.injector.get(ra);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new C(403,!1);n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new C(404,!1);this._modules.slice().forEach(r=>r.destroy()),this._destroyListeners.forEach(r=>r());const n=this._injector.get(Gc,null);n&&(n.forEach(r=>r()),n.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(M(Dt))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();function Pv(e,t){return Array.isArray(t)?t.reduce(Pv,e):{...e,...t}}let ra=(()=>{class e{constructor(n,r,o){this._zone=n,this._injector=r,this._exceptionHandler=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const i=new ve(a=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{a.next(this._stable),a.complete()})}),s=new ve(a=>{let l;this._zone.runOutsideAngular(()=>{l=this._zone.onStable.subscribe(()=>{Pe.assertNotInAngularZone(),Vc(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,a.next(!0))})})});const u=this._zone.onUnstable.subscribe(()=>{Pe.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{a.next(!1)}))});return()=>{l.unsubscribe(),u.unsubscribe()}});this.isStable=function iE(...e){const t=Mo(e),n=function Jw(e,t){return"number"==typeof pl(e)?e.pop():t}(e,1/0),r=e;return r.length?1===r.length?Rt(r[0]):wr(n)(be(r,t)):ln}(i,s.pipe(function sE(e={}){const{connector:t=(()=>new ct),resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:o=!0}=e;return i=>{let s,a,l,u=0,c=!1,d=!1;const f=()=>{a?.unsubscribe(),a=void 0},h=()=>{f(),s=l=void 0,c=d=!1},p=()=>{const g=s;h(),g?.unsubscribe()};return Ee((g,v)=>{u++,!d&&!c&&f();const y=l=l??t();v.add(()=>{u--,0===u&&!d&&!c&&(a=gl(p,o))}),y.subscribe(v),!s&&u>0&&(s=new So({next:w=>y.next(w),error:w=>{d=!0,f(),a=gl(h,n,w),y.error(w)},complete:()=>{c=!0,f(),a=gl(h,r),y.complete()}}),Rt(g).subscribe(s))})(i)}}()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(n,r){const o=n instanceof Rp;if(!this._injector.get(ta).done)throw!o&&function br(e){const t=ee(e)||Ke(e)||Ze(e);return null!==t&&t.standalone}(n),new C(405,false);let s;s=o?n:this._injector.get(Yo).resolveComponentFactory(n),this.componentTypes.push(s.componentType);const a=function ux(e){return e.isBoundToModule}(s)?void 0:this._injector.get(cr),u=s.create(Dt.NULL,[],r||s.selector,a),c=u.location.nativeElement,d=u.injector.get(Sv,null);return d?.registerApplication(c),u.onDestroy(()=>{this.detachView(u.hostView),oa(this.components,u),d?.unregisterApplication(c)}),this._loadComponent(u),u}tick(){if(this._runningTick)throw new C(101,!1);try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;oa(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(Dv,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>oa(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new C(406,!1);const n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return e.\u0275fac=function(n){return new(n||e)(M(Pe),M(Vn),M(zr))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function oa(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Lv=!0,ia=(()=>{class e{}return e.__NG_ELEMENT_ID__=gx,e})();function gx(e){return function mx(e,t,n){if(is(e)&&!n){const r=mt(e.index,t);return new ni(r,r)}return 47&e.type?new ni(t[16],t):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Re(),_(),16==(16&e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Hv{constructor(){}supports(t){return oi(t)}create(t){return new wx(t)}}const Cx=(e,t)=>t;class wx{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||Cx}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){const s=!r||n&&n.currentIndex<Gv(r,o,i)?n:r,a=Gv(s,o,i),l=s.currentIndex;if(s===r)o--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)o++;else{i||(i=[]);const u=a-o,c=l-o;if(u!=c){for(let f=0;f<u;f++){const h=f<i.length?i[f]:i[f]=0,p=h+f;c<=p&&p<u&&(i[f]=h+1)}i[s.previousIndex]=c-u}}a!==l&&t(s,a,l)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!oi(t))throw new C(900,!1);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let o,i,s,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let a=0;a<this.length;a++)i=t[a],s=this._trackByFn(a,i),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,i,s,a)),Object.is(n.item,i)||this._addIdentityChange(n,i)):(n=this._mismatch(n,i,s,a),r=!0),n=n._next}else o=0,function qM(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[ar()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,a=>{s=this._trackByFn(o,a),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,a,s,o)),Object.is(n.item,a)||this._addIdentityChange(n,a)):(n=this._mismatch(n,a,s,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,o){let i;return null===t?i=this._itTail:(i=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,o)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,o)):t=this._addAfter(new Ex(n,r),i,o),t}_verifyReinsertion(t,n,r,o){let i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==i?t=this._reinsertAfter(i,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const o=t._prevRemoved,i=t._nextRemoved;return null===o?this._removalsHead=i:o._nextRemoved=i,null===i?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const o=null===n?this._itHead:n._next;return t._next=o,t._prev=n,null===o?this._itTail=t:o._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new Uv),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Uv),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class Ex{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class bx{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class Uv{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new bx,this.map.set(n,r)),r.add(t)}get(t,n){const o=this.map.get(t);return o?o.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Gv(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class zv{constructor(){}supports(t){return t instanceof Map||ac(t)}create(){return new Sx}}class Sx{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||ac(t)))throw new C(900,!1)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const i=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,i)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const r=t._prev;return n._next=t,n._prev=r,t._prev=n,r&&(r._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const o=this._records.get(t);this._maybeAddToChanges(o,n);const i=o._prev,s=o._next;return i&&(i._next=s),s&&(s._prev=i),o._next=null,o._prev=null,o}const r=new Mx(t);return this._records.set(t,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(r=>n(t[r],r))}}class Mx{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Wv(){return new la([new Hv])}let la=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||Wv()),deps:[[e,new zo,new Go]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new C(901,!1)}}return e.\u0275prov=x({token:e,providedIn:"root",factory:Wv}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function qv(){return new _i([new zv])}let _i=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||qv()),deps:[[e,new zo,new Go]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(r)return r;throw new C(901,!1)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=x({token:e,providedIn:"root",factory:qv}),e})();const Tx=Tv(null,"core",[]);
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
let xx=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(M(ra))},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({}),e})(),ua=null;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function nn(){return ua}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const rt=new I("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Zc=(()=>{class e{historyGo(n){throw new Error("Not implemented")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:function(){return function Ox(){return M(Qv)}()},providedIn:"platform"}),e})();const Px=new I("Location Initialized");let Qv=(()=>{class e extends Zc{constructor(n){super(),this._doc=n,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return nn().getBaseHref(this._doc)}onPopState(n){const r=nn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){const r=nn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(n){this.location.pathname=n}pushState(n,r,o){Kv()?this._history.pushState(n,r,o):this.location.hash=o}replaceState(n,r,o){Kv()?this._history.replaceState(n,r,o):this.location.hash=o}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}}return e.\u0275fac=function(n){return new(n||e)(M(rt))},e.\u0275prov=x({token:e,factory:function(){return function kx(){return new Qv(M(rt))}
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
       */()},providedIn:"platform"}),e})();function Kv(){return!!window.history.pushState}function Yc(e,t){if(0==e.length)return t;if(0==t.length)return e;let n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,2==n?e+t.substring(1):1==n?e+t:e+"/"+t}function Zv(e){const t=e.match(/#|\?|$/),n=t&&t.index||e.length;return e.slice(0,n-("/"===e[n-1]?1:0))+e.slice(n)}function En(e){return e&&"?"!==e[0]?"?"+e:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let fr=(()=>{class e{historyGo(n){throw new Error("Not implemented")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:function(){return De(Jv)},providedIn:"root"}),e})();const Yv=new I("appBaseHref");let Jv=(()=>{class e extends fr{constructor(n,r){var o,i,s;super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=null!==(o=null!==(i=r??this._platformLocation.getBaseHrefFromDOM())&&void 0!==i?i:null===(s=De(rt).location)||void 0===s?void 0:s.origin)&&void 0!==o?o:""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Yc(this._baseHref,n)}path(n=!1){const r=this._platformLocation.pathname+En(this._platformLocation.search),o=this._platformLocation.hash;return o&&n?`${r}${o}`:r}pushState(n,r,o,i){const s=this.prepareExternalUrl(o+En(i));this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){const s=this.prepareExternalUrl(o+En(i));this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){var r,o;null===(r=(o=this._platformLocation).historyGo)||void 0===r||r.call(o,n)}}return e.\u0275fac=function(n){return new(n||e)(M(Zc),M(Yv,8))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Lx=(()=>{class e extends fr{constructor(n,r){super(),this._platformLocation=n,this._baseHref="",this._removeListenerFns=[],null!=r&&(this._baseHref=r)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}path(n=!1){let r=this._platformLocation.hash;return null==r&&(r="#"),r.length>0?r.substring(1):r}prepareExternalUrl(n){const r=Yc(this._baseHref,n);return r.length>0?"#"+r:r}pushState(n,r,o,i){let s=this.prepareExternalUrl(o+En(i));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){let s=this.prepareExternalUrl(o+En(i));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){var r,o;null===(r=(o=this._platformLocation).historyGo)||void 0===r||r.call(o,n)}}return e.\u0275fac=function(n){return new(n||e)(M(Zc),M(Yv,8))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})(),Jc=(()=>{class e{constructor(n){this._subject=new ye,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;const r=this._locationStrategy.getBaseHref();this._baseHref=Zv(Xv(r)),this._locationStrategy.onPopState(o=>{this._subject.emit({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){var n;null===(n=this._urlChangeSubscription)||void 0===n||n.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+En(r))}normalize(n){return e.stripTrailingSlash(function $x(e,t){return e&&t.startsWith(e)?t.substring(e.length):t}(this._baseHref,Xv(n)))}prepareExternalUrl(n){return n&&"/"!==n[0]&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",o=null){this._locationStrategy.pushState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+En(r)),o)}replaceState(n,r="",o=null){this._locationStrategy.replaceState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+En(r)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){var r,o;null===(r=(o=this._locationStrategy).historyGo)||void 0===r||r.call(o,n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)})),()=>{const r=this._urlChangeListeners.indexOf(n);var o;this._urlChangeListeners.splice(r,1),0===this._urlChangeListeners.length&&(null===(o=this._urlChangeSubscription)||void 0===o||o.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(o=>o(n,r))}subscribe(n,r,o){return this._subject.subscribe({next:n,error:r,complete:o})}}return e.normalizeQueryParams=En,e.joinWithSlash=Yc,e.stripTrailingSlash=Zv,e.\u0275fac=function(n){return new(n||e)(M(fr))},e.\u0275prov=x({token:e,factory:function(){return function Vx(){return new Jc(M(fr))}()},providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Xv(e){return e.replace(/\/index.html$/,"")}
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
function l_(e,t){t=encodeURIComponent(t);for(const n of e.split(";")){const r=n.indexOf("="),[o,i]=-1==r?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===t)return decodeURIComponent(i)}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let _a=(()=>{class e{constructor(n,r,o,i){this._iterableDiffers=n,this._keyValueDiffers=r,this._ngEl=o,this._renderer=i,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(n){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof n?n.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(n){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof n?n.split(/\s+/):n,this._rawClass&&(oi(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const n=this._iterableDiffer.diff(this._rawClass);n&&this._applyIterableChanges(n)}else if(this._keyValueDiffer){const n=this._keyValueDiffer.diff(this._rawClass);n&&this._applyKeyValueChanges(n)}}_applyKeyValueChanges(n){n.forEachAddedItem(r=>this._toggleClass(r.key,r.currentValue)),n.forEachChangedItem(r=>this._toggleClass(r.key,r.currentValue)),n.forEachRemovedItem(r=>{r.previousValue&&this._toggleClass(r.key,!1)})}_applyIterableChanges(n){n.forEachAddedItem(r=>{if("string"!=typeof r.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${re(r.item)}`);this._toggleClass(r.item,!0)}),n.forEachRemovedItem(r=>this._toggleClass(r.item,!1))}_applyClasses(n){n&&(Array.isArray(n)||n instanceof Set?n.forEach(r=>this._toggleClass(r,!0)):Object.keys(n).forEach(r=>this._toggleClass(r,!!n[r])))}_removeClasses(n){n&&(Array.isArray(n)||n instanceof Set?n.forEach(r=>this._toggleClass(r,!1)):Object.keys(n).forEach(r=>this._toggleClass(r,!1)))}_toggleClass(n,r){(n=n.trim())&&n.split(/\s+/g).forEach(o=>{r?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}}return e.\u0275fac=function(n){return new(n||e)(D(la),D(_i),D(_t),D(gn))},e.\u0275dir=O({type:e,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"},standalone:!0}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class EN{constructor(t,n,r,o){this.$implicit=t,this.ngForOf=n,this.index=r,this.count=o}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let Da=(()=>{class e{constructor(n,r,o){this._viewContainer=n,this._template=r,this._differs=o,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const n=this._ngForOf;!this._differ&&n&&(this._differ=this._differs.find(n).create(this.ngForTrackBy))}if(this._differ){const n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){const r=this._viewContainer;n.forEachOperation((o,i,s)=>{if(null==o.previousIndex)r.createEmbeddedView(this._template,new EN(o.item,this._ngForOf,-1,-1),null===s?void 0:s);else if(null==s)r.remove(null===i?void 0:i);else if(null!==i){const a=r.get(i);r.move(a,s),d_(a,o)}});for(let o=0,i=r.length;o<i;o++){const a=r.get(o).context;a.index=o,a.count=i,a.ngForOf=this._ngForOf}n.forEachIdentityChange(o=>{d_(r.get(o.currentIndex),o)})}static ngTemplateContextGuard(n,r){return!0}}return e.\u0275fac=function(n){return new(n||e)(D(Ht),D(_n),D(la))},e.\u0275dir=O({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0}),e})();function d_(e,t){e.context.$implicit=t.item}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let wi=(()=>{class e{constructor(n,r){this._viewContainer=n,this._context=new SN,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=r}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){f_("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){f_("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,r){return!0}}return e.\u0275fac=function(n){return new(n||e)(D(Ht),D(_n))},e.\u0275dir=O({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0}),e})();class SN{constructor(){this.$implicit=null,this.ngIf=null}}function f_(e,t){if(t&&!t.createEmbeddedView)throw new Error(`${e} must be a TemplateRef, but received '${re(t)}'.`)}
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
let JN=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({}),e})();
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
let nR=(()=>{class e{}return e.\u0275prov=x({token:e,providedIn:"root",factory:()=>new rR(M(rt),window)}),e})();class rR{constructor(t,n){this.document=t,this.window=n,this.offset=()=>[0,0]}setOffset(t){this.offset=Array.isArray(t)?()=>t:t}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(t){this.supportsScrolling()&&this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){if(!this.supportsScrolling())return;const n=function oR(e,t){const n=e.getElementById(t)||e.getElementsByName(t)[0];if(n)return n;if("function"==typeof e.createTreeWalker&&e.body&&(e.body.createShadowRoot||e.body.attachShadow)){const r=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT);let o=r.currentNode;for(;o;){const i=o.shadowRoot;if(i){const s=i.getElementById(t)||i.querySelector(`[name="${t}"]`);if(s)return s}o=r.nextNode()}}return null}(this.document,t);n&&(this.scrollToElement(n),n.focus())}setHistoryScrollRestoration(t){if(this.supportScrollRestoration()){const n=this.window.history;n&&n.scrollRestoration&&(n.scrollRestoration=t)}}scrollToElement(t){const n=t.getBoundingClientRect(),r=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,i=this.offset();this.window.scrollTo(r-i[0],o-i[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const t=m_(this.window.history)||m_(Object.getPrototypeOf(this.window.history));return!(!t||!t.writable&&!t.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function m_(e){return Object.getOwnPropertyDescriptor(e,"scrollRestoration")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class y_{}
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
class pd extends
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
class wR extends class Fx{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function Rx(e){ua||(ua=e)}(new pd)}onAndCancel(t,n,r){return t.addEventListener(n,r,!1),()=>{t.removeEventListener(n,r,!1)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,n){return(n=n||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return"window"===n?window:"document"===n?t:"body"===n?t.body:null}getBaseHref(t){const n=function ER(){return bi=bi||document.querySelector("base"),bi?bi.getAttribute("href"):null}();return null==n?null:function bR(e){wa=wa||document.createElement("a"),wa.setAttribute("href",e);const t=wa.pathname;return"/"===t.charAt(0)?t:`/${t}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}resetBaseElement(){bi=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return l_(document.cookie,t)}}let wa,bi=null;const C_=new I("TRANSITION_ID"),MR=[{provide:ea,useFactory:function SR(e,t,n){return()=>{n.get(ta).donePromise.then(()=>{const r=nn(),o=t.querySelectorAll(`style[ng-transition="${e}"]`);for(let i=0;i<o.length;i++)r.remove(o[i])})}},deps:[C_,rt,Dt],multi:!0}];let AR=(()=>{class e{build(){return new XMLHttpRequest}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ea=new I("EventManagerPlugins");let ba=(()=>{class e{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(o=>o.manager=this),this._plugins=n.slice().reverse()}addEventListener(n,r,o){return this._findPluginFor(r).addEventListener(n,r,o)}addGlobalEventListener(n,r,o){return this._findPluginFor(r).addGlobalEventListener(n,r,o)}getZone(){return this._zone}_findPluginFor(n){const r=this._eventNameToPlugin.get(n);if(r)return r;const o=this._plugins;for(let i=0;i<o.length;i++){const s=o[i];if(s.supports(n))return this._eventNameToPlugin.set(n,s),s}throw new Error(`No event manager plugin found for event ${n}`)}}return e.\u0275fac=function(n){return new(n||e)(M(Ea),M(Pe))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();class w_{constructor(t){this._doc=t}addGlobalEventListener(t,n,r){const o=nn().getGlobalEventTarget(this._doc,t);if(!o)throw new Error(`Unsupported event target ${o} for event ${n}`);return this.addEventListener(o,n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let E_=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(n){const r=new Set;n.forEach(o=>{this._stylesSet.has(o)||(this._stylesSet.add(o),r.add(o))}),this.onStylesAdded(r)}onStylesAdded(n){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})(),Si=(()=>{class e extends E_{constructor(n){super(),this._doc=n,this._hostNodes=new Map,this._hostNodes.set(n.head,[])}_addStylesToHost(n,r,o){n.forEach(i=>{const s=this._doc.createElement("style");s.textContent=i,o.push(r.appendChild(s))})}addHost(n){const r=[];this._addStylesToHost(this._stylesSet,n,r),this._hostNodes.set(n,r)}removeHost(n){const r=this._hostNodes.get(n);r&&r.forEach(b_),this._hostNodes.delete(n)}onStylesAdded(n){this._hostNodes.forEach((r,o)=>{this._addStylesToHost(n,o,r)})}ngOnDestroy(){this._hostNodes.forEach(n=>n.forEach(b_))}}return e.\u0275fac=function(n){return new(n||e)(M(rt))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();function b_(e){nn().remove(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const gd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},md=/%COMP%/g;function Sa(e,t,n){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?Sa(e,o,n):(o=o.replace(md,e),n.push(o))}return n}function I_(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let yd=(()=>{class e{constructor(n,r,o){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.rendererByCompId=new Map,this.defaultRenderer=new vd(n)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;switch(r.encapsulation){case Qt.Emulated:{let o=this.rendererByCompId.get(r.id);return o||(o=new OR(this.eventManager,this.sharedStylesHost,r,this.appId),this.rendererByCompId.set(r.id,o)),o.applyToHost(n),o}case 1:case Qt.ShadowDom:return new PR(this.eventManager,this.sharedStylesHost,n,r);default:if(!this.rendererByCompId.has(r.id)){const o=Sa(r.id,r.styles,[]);this.sharedStylesHost.addStyles(o),this.rendererByCompId.set(r.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(n){return new(n||e)(M(ba),M(Si),M(vi))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();class vd{constructor(t){this.eventManager=t,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(t,n){return n?document.createElementNS(gd[n]||n,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,n){(T_(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){t&&(T_(t)?t.content:t).insertBefore(n,r)}removeChild(t,n){t&&t.removeChild(n)}selectRootElement(t,n){let r="string"==typeof t?document.querySelector(t):t;if(!r)throw new Error(`The selector "${t}" did not match any elements`);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+":"+n;const i=gd[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){const o=gd[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){o&(at.DashCase|at.Important)?t.style.setProperty(n,r,o&at.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&at.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t[n]=r}setValue(t,n){t.nodeValue=n}listen(t,n,r){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,n,I_(r)):this.eventManager.addEventListener(t,n,I_(r))}}function T_(e){return"TEMPLATE"===e.tagName&&void 0!==e.content}class OR extends vd{constructor(t,n,r,o){super(t),this.component=r;const i=Sa(o+"-"+r.id,r.styles,[]);n.addStyles(i),this.contentAttr=function NR(e){return"_ngcontent-%COMP%".replace(md,e)}(o+"-"+r.id),this.hostAttr=function RR(e){return"_nghost-%COMP%".replace(md,e)}(o+"-"+r.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,n){const r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}}class PR extends vd{constructor(t,n,r,o){super(t),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const i=Sa(o.id,o.styles,[]);for(let s=0;s<i.length;s++){const a=document.createElement("style");a.textContent=i[s],this.shadowRoot.appendChild(a)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(this.nodeOrShadowRoot(t),n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let kR=(()=>{class e extends w_{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o){return n.addEventListener(r,o,!1),()=>this.removeEventListener(n,r,o)}removeEventListener(n,r,o){return n.removeEventListener(r,o)}}return e.\u0275fac=function(n){return new(n||e)(M(rt))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const x_=["alt","control","meta","shift"],LR={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},VR={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let $R=(()=>{class e extends w_{constructor(n){super(n)}supports(n){return null!=e.parseEventName(n)}addEventListener(n,r,o){const i=e.parseEventName(r),s=e.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>nn().onAndCancel(n,i.domEventName,s))}static parseEventName(n){const r=n.toLowerCase().split("."),o=r.shift();if(0===r.length||"keydown"!==o&&"keyup"!==o)return null;const i=e._normalizeKey(r.pop());let s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),x_.forEach(u=>{const c=r.indexOf(u);c>-1&&(r.splice(c,1),s+=u+".")}),s+=i,0!=r.length||0===i.length)return null;const l={};return l.domEventName=o,l.fullKey=s,l}static matchEventFullKeyCode(n,r){let o=LR[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),!(null==o||!o)&&(o=o.toLowerCase()," "===o?o="space":"."===o&&(o="dot"),x_.forEach(s=>{s!==o&&(0,VR[s])(n)&&(i+=s+".")}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{e.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return"esc"===n?"escape":n}}return e.\u0275fac=function(n){return new(n||e)(M(rt))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const UR=Tv(Tx,"browser",[{provide:kc,useValue:"browser"},{provide:_v,useValue:function jR(){pd.makeCurrent()},multi:!0},{provide:rt,useFactory:function HR(){return function Bb(e){Jl=e}(document),document},deps:[]}]),F_=new I(""),O_=[{provide:na,useClass:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class IR{addToWindow(t){oe.getAngularTestability=(r,o=!0)=>{const i=t.findTestabilityInTree(r,o);if(null==i)throw new Error("Could not find testability for element.");return i},oe.getAllAngularTestabilities=()=>t.getAllTestabilities(),oe.getAllAngularRootElements=()=>t.getAllRootElements(),oe.frameworkStabilizers||(oe.frameworkStabilizers=[]),oe.frameworkStabilizers.push(r=>{const o=oe.getAllAngularTestabilities();let i=o.length,s=!1;const a=function(l){s=s||l,i--,0==i&&r(s)};o.forEach(function(l){l.whenStable(a)})})}findTestabilityInTree(t,n,r){return null==n?null:t.getTestability(n)??(r?nn().isShadowRoot(n)?this.findTestabilityInTree(t,n.host,!0):this.findTestabilityInTree(t,n.parentElement,!0):null)}},deps:[]},{provide:Sv,useClass:Bc,deps:[Pe,Hc,na]},{provide:Bc,useClass:Bc,deps:[Pe,Hc,na]}],P_=[{provide:lu,useValue:"root"},{provide:zr,useFactory:function BR(){return new zr},deps:[]},{provide:Ea,useClass:kR,multi:!0,deps:[rt,Pe,kc]},{provide:Ea,useClass:$R,multi:!0,deps:[rt]},{provide:yd,useClass:yd,deps:[ba,Si,vi]},{provide:Op,useExisting:yd},{provide:E_,useExisting:Si},{provide:Si,useClass:Si,deps:[rt]},{provide:ba,useClass:ba,deps:[Ea,Pe]},{provide:y_,useClass:AR,deps:[]},[]];let GR=(()=>{class e{constructor(n){}static withServerTransition(n){return{ngModule:e,providers:[{provide:vi,useValue:n.appId},{provide:C_,useExisting:vi},MR]}}}return e.\u0275fac=function(n){return new(n||e)(M(F_,12))},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({providers:[...P_,...O_],imports:[JN,xx]}),e})(),k_=(()=>{class e{constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}}return e.\u0275fac=function(n){return new(n||e)(M(rt))},e.\u0275prov=x({token:e,factory:function(n){let r=null;return r=n?new n:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function WR(){return new k_(M(rt))}(),r},providedIn:"root"}),e})();
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
function A(...e){return be(e,Mo(e))}function Gn(e,t){return ie(t)?Ve(e,t,1):Ve(e,1)}function Sn(e,t){return Ee((n,r)=>{let o=0;n.subscribe(_e(r,i=>e.call(t,i,o++)&&r.next(i)))})}
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
       */typeof window<"u"&&window;class $_{}class j_{}
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
class eF{encodeKey(t){return B_(t)}encodeValue(t){return B_(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const nF=/%(\d[a-f0-9])/gi,rF={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function B_(e){return encodeURIComponent(e).replace(nF,(t,n)=>{var r;return null!==(r=rF[n])&&void 0!==r?r:t})}function Ma(e){return`${e}`}class In{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new eF,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function tF(e,t){const n=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{const i=o.indexOf("="),[s,a]=-1==i?[t.decodeKey(o),""]:[t.decodeKey(o.slice(0,i)),t.decodeValue(o.slice(i+1))],l=n.get(s)||[];l.push(a),n.set(s,l)}),n}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(n=>{const r=t.fromObject[n],o=Array.isArray(r)?r.map(Ma):[Ma(r)];this.map.set(n,o)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const n=this.map.get(t);return n?n[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,n){return this.clone({param:t,value:n,op:"a"})}appendAll(t){const n=[];return Object.keys(t).forEach(r=>{const o=t[r];Array.isArray(o)?o.forEach(i=>{n.push({param:r,value:i,op:"a"})}):n.push({param:r,value:o,op:"a"})}),this.clone(n)}set(t,n){return this.clone({param:t,value:n,op:"s"})}delete(t,n){return this.clone({param:t,value:n,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const n=this.encoder.encodeKey(t);return this.map.get(t).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const n=new In({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(t),n}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const n=("a"===t.op?this.map.get(t.param):void 0)||[];n.push(Ma(t.value)),this.map.set(t.param,n);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const o=r.indexOf(Ma(t.value));-1!==o&&r.splice(o,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class oF{constructor(){this.map=new Map}set(t,n){return this.map.set(t,n),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function H_(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function U_(e){return typeof Blob<"u"&&e instanceof Blob}function G_(e){return typeof FormData<"u"&&e instanceof FormData}class Mi{constructor(t,n,r,o){let i;if(this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function iF(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==r?r:null,i=o):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new Mn),this.context||(this.context=new oF),this.params){const s=this.params.toString();if(0===s.length)this.urlWithParams=n;else{const a=n.indexOf("?");this.urlWithParams=n+(-1===a?"?":a<n.length-1?"&":"")+s}}else this.params=new In,this.urlWithParams=n}serializeBody(){return null===this.body?null:H_(this.body)||U_(this.body)||G_(this.body)||function sF(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof In?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||G_(this.body)?null:U_(this.body)?this.body.type||null:H_(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof In?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){var n;const r=t.method||this.method,o=t.url||this.url,i=t.responseType||this.responseType,s=void 0!==t.body?t.body:this.body,a=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,l=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let u=t.headers||this.headers,c=t.params||this.params;const d=null!==(n=t.context)&&void 0!==n?n:this.context;return void 0!==t.setHeaders&&(u=Object.keys(t.setHeaders).reduce((f,h)=>f.set(h,t.setHeaders[h]),u)),t.setParams&&(c=Object.keys(t.setParams).reduce((f,h)=>f.set(h,t.setParams[h]),c)),new Mi(r,o,s,{params:c,headers:u,context:d,reportProgress:l,responseType:i,withCredentials:a})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Ne=(()=>((Ne=Ne||{})[Ne.Sent=0]="Sent",Ne[Ne.UploadProgress=1]="UploadProgress",Ne[Ne.ResponseHeader=2]="ResponseHeader",Ne[Ne.DownloadProgress=3]="DownloadProgress",Ne[Ne.Response=4]="Response",Ne[Ne.User=5]="User",Ne))();class Cd{constructor(t,n=200,r="OK"){this.headers=t.headers||new Mn,this.status=void 0!==t.status?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class wd extends Cd{constructor(t={}){super(t),this.type=Ne.ResponseHeader}clone(t={}){return new wd({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class Ia extends Cd{constructor(t={}){super(t),this.type=Ne.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new Ia({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class z_ extends Cd{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ed(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}let Aa=(()=>{class e{constructor(n){this.handler=n}request(n,r,o={}){let i;if(n instanceof Mi)i=n;else{let l,u;l=o.headers instanceof Mn?o.headers:new Mn(o.headers),o.params&&(u=o.params instanceof In?o.params:new In({fromObject:o.params})),i=new Mi(n,r,void 0!==o.body?o.body:null,{headers:l,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials})}const s=A(i).pipe(Gn(l=>this.handler.handle(l)));if(n instanceof Mi||"events"===o.observe)return s;const a=s.pipe(Sn(l=>l instanceof Ia));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return a.pipe(G(l=>{if(null!==l.body&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return a.pipe(G(l=>{if(null!==l.body&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return a.pipe(G(l=>{if(null!==l.body&&"string"!=typeof l.body)throw new Error("Response is not a string.");return l.body}));default:return a.pipe(G(l=>l.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:(new In).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,Ed(o,r))}post(n,r,o={}){return this.request("POST",n,Ed(o,r))}put(n,r,o={}){return this.request("PUT",n,Ed(o,r))}}return e.\u0275fac=function(n){return new(n||e)(M($_))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class W_{constructor(t,n){this.next=t,this.interceptor=n}handle(t){return this.interceptor.intercept(t,this.next)}}const q_=new I("HTTP_INTERCEPTORS");let aF=(()=>{class e{intercept(n,r){return r.handle(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
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
const lF=/^\)\]\}',?\n/;let Q_=(()=>{class e{constructor(n){this.xhrFactory=n}handle(n){if("JSONP"===n.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new ve(r=>{const o=this.xhrFactory.build();if(o.open(n.method,n.urlWithParams),n.withCredentials&&(o.withCredentials=!0),n.headers.forEach((h,p)=>o.setRequestHeader(h,p.join(","))),n.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){const h=n.detectContentTypeHeader();null!==h&&o.setRequestHeader("Content-Type",h)}if(n.responseType){const h=n.responseType.toLowerCase();o.responseType="json"!==h?h:"text"}const i=n.serializeBody();let s=null;const a=()=>{if(null!==s)return s;const h=o.statusText||"OK",p=new Mn(o.getAllResponseHeaders()),g=function uF(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(o)||n.url;return s=new wd({headers:p,status:o.status,statusText:h,url:g}),s},l=()=>{let{headers:h,status:p,statusText:g,url:v}=a(),y=null;204!==p&&(y=typeof o.response>"u"?o.responseText:o.response),0===p&&(p=y?200:0);let w=p>=200&&p<300;if("json"===n.responseType&&"string"==typeof y){const m=y;y=y.replace(lF,"");try{y=""!==y?JSON.parse(y):null}catch(b){y=m,w&&(w=!1,y={error:b,text:y})}}w?(r.next(new Ia({body:y,headers:h,status:p,statusText:g,url:v||void 0})),r.complete()):r.error(new z_({error:y,headers:h,status:p,statusText:g,url:v||void 0}))},u=h=>{const{url:p}=a(),g=new z_({error:h,status:o.status||0,statusText:o.statusText||"Unknown Error",url:p||void 0});r.error(g)};let c=!1;const d=h=>{c||(r.next(a()),c=!0);let p={type:Ne.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),"text"===n.responseType&&!!o.responseText&&(p.partialText=o.responseText),r.next(p)},f=h=>{let p={type:Ne.UploadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),r.next(p)};return o.addEventListener("load",l),o.addEventListener("error",u),o.addEventListener("timeout",u),o.addEventListener("abort",u),n.reportProgress&&(o.addEventListener("progress",d),null!==i&&o.upload&&o.upload.addEventListener("progress",f)),o.send(i),r.next({type:Ne.Sent}),()=>{o.removeEventListener("error",u),o.removeEventListener("abort",u),o.removeEventListener("load",l),o.removeEventListener("timeout",u),n.reportProgress&&(o.removeEventListener("progress",d),null!==i&&o.upload&&o.upload.removeEventListener("progress",f)),o.readyState!==o.DONE&&o.abort()}})}}return e.\u0275fac=function(n){return new(n||e)(M(y_))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const bd=new I("XSRF_COOKIE_NAME"),Sd=new I("XSRF_HEADER_NAME");class K_{}let cF=(()=>{class e{constructor(n,r,o){this.doc=n,this.platform=r,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=l_(n,this.cookieName),this.lastCookieString=n),this.lastToken}}return e.\u0275fac=function(n){return new(n||e)(M(rt),M(kc),M(bd))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})(),Md=(()=>{class e{constructor(n,r){this.tokenService=n,this.headerName=r}intercept(n,r){const o=n.url.toLowerCase();if("GET"===n.method||"HEAD"===n.method||o.startsWith("http://")||o.startsWith("https://"))return r.handle(n);const i=this.tokenService.getToken();return null!==i&&!n.headers.has(this.headerName)&&(n=n.clone({headers:n.headers.set(this.headerName,i)})),r.handle(n)}}return e.\u0275fac=function(n){return new(n||e)(M(K_),M(Sd))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})(),dF=(()=>{class e{constructor(n,r){this.backend=n,this.injector=r,this.chain=null}handle(n){if(null===this.chain){const r=this.injector.get(q_,[]);this.chain=r.reduceRight((o,i)=>new W_(o,i),this.backend)}return this.chain.handle(n)}}return e.\u0275fac=function(n){return new(n||e)(M(j_),M(Dt))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})(),fF=(()=>{class e{static disable(){return{ngModule:e,providers:[{provide:Md,useClass:aF}]}}static withOptions(n={}){return{ngModule:e,providers:[n.cookieName?{provide:bd,useValue:n.cookieName}:[],n.headerName?{provide:Sd,useValue:n.headerName}:[]]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({providers:[Md,{provide:q_,useExisting:Md,multi:!0},{provide:K_,useClass:cF},{provide:bd,useValue:"XSRF-TOKEN"},{provide:Sd,useValue:"X-XSRF-TOKEN"}]}),e})(),hF=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({providers:[Aa,{provide:$_,useClass:dF},Q_,{provide:j_,useExisting:Q_}],imports:[fF.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]}),e})();
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
class Wt extends ct{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){const n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){const{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}}const Ta=bo(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}),{isArray:pF}=Array,{getPrototypeOf:gF,prototype:mF,keys:yF}=Object;function Z_(e){if(1===e.length){const t=e[0];if(pF(t))return{args:t,keys:null};if(function vF(e){return e&&"object"==typeof e&&gF(e)===mF}(t)){const n=yF(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}const{isArray:_F}=Array;function Y_(e){return G(t=>function DF(e,t){return _F(t)?e(...t):e(t)}(e,t))}function J_(e,t){return e.reduce((n,r,o)=>(n[r]=t[o],n),{})}function X_(...e){const t=Mo(e),n=ah(e),{args:r,keys:o}=Z_(e);if(0===r.length)return be([],t);const i=new ve(function CF(e,t,n=xn){return r=>{eD(t,()=>{const{length:o}=e,i=new Array(o);let s=o,a=o;for(let l=0;l<o;l++)eD(t,()=>{const u=be(e[l],t);let c=!1;u.subscribe(_e(r,d=>{i[l]=d,c||(c=!0,a--),a||r.next(n(i.slice()))},()=>{--s||r.complete()}))},r)},r)}}(r,t,o?s=>J_(o,s):xn));return n?i.pipe(Y_(n)):i}function eD(e,t,n){e?an(n,e,t):t()}function Id(...e){return function wF(){return wr(1)}()(be(e,Mo(e)))}function tD(e){return new ve(t=>{Rt(e()).subscribe(t)})}function zn(e,t){const n=ie(e)?e:()=>e,r=o=>o.error(n());return new ve(t?o=>t.schedule(r,0,o):r)}function Ad(){return Ee((e,t)=>{let n=null;e._refCount++;const r=_e(t,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount)return void(n=null);const o=e._connection,i=n;n=null,o&&(!i||o===i)&&o.unsubscribe(),t.unsubscribe()});e.subscribe(r),r.closed||(n=e.connect())})}class nD extends ve{constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,qf(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){const t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new ut;const n=this.getSubject();t.add(this.source.subscribe(_e(n,void 0,()=>{this._teardown(),n.complete()},r=>{this._teardown(),n.error(r)},()=>this._teardown()))),t.closed&&(this._connection=null,t=ut.EMPTY)}return t}refCount(){return Ad()(this)}}function rn(e,t){return Ee((n,r)=>{let o=null,i=0,s=!1;const a=()=>s&&!o&&r.complete();n.subscribe(_e(r,l=>{o?.unsubscribe();let u=0;const c=i++;Rt(e(l,c)).subscribe(o=_e(r,d=>r.next(t?t(l,d,c,u++):d),()=>{o=null,a()}))},()=>{s=!0,a()}))})}function Ii(e){return e<=0?()=>ln:Ee((t,n)=>{let r=0;t.subscribe(_e(n,o=>{++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function xa(e){return Ee((t,n)=>{let r=!1;t.subscribe(_e(n,o=>{r=!0,n.next(o)},()=>{r||n.next(e),n.complete()}))})}function rD(e=bF){return Ee((t,n)=>{let r=!1;t.subscribe(_e(n,o=>{r=!0,n.next(o)},()=>r?n.complete():n.error(e())))})}function bF(){return new Ta}function Wn(e,t){const n=arguments.length>=2;return r=>r.pipe(e?Sn((o,i)=>e(o,i,r)):xn,Ii(1),n?xa(t):rD(()=>new Ta))}function qe(e,t,n){const r=ie(e)||t||n?{next:e,error:t,complete:n}:e;return r?Ee((o,i)=>{var s;null===(s=r.subscribe)||void 0===s||s.call(r);let a=!0;o.subscribe(_e(i,l=>{var u;null===(u=r.next)||void 0===u||u.call(r,l),i.next(l)},()=>{var l;a=!1,null===(l=r.complete)||void 0===l||l.call(r),i.complete()},l=>{var u;a=!1,null===(u=r.error)||void 0===u||u.call(r,l),i.error(l)},()=>{var l,u;a&&(null===(l=r.unsubscribe)||void 0===l||l.call(r)),null===(u=r.finalize)||void 0===u||u.call(r)}))}):xn}function qt(e){return Ee((t,n)=>{let i,r=null,o=!1;r=t.subscribe(_e(n,void 0,void 0,s=>{i=Rt(e(s,qt(e)(t))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function SF(e,t,n,r,o){return(i,s)=>{let a=n,l=t,u=0;i.subscribe(_e(s,c=>{const d=u++;l=a?e(l,c,d):(a=!0,c),r&&s.next(l)},o&&(()=>{a&&s.next(l),s.complete()})))}}function oD(e,t){return Ee(SF(e,t,arguments.length>=2,!0))}function Td(e){return e<=0?()=>ln:Ee((t,n)=>{let r=[];t.subscribe(_e(n,o=>{r.push(o),e<r.length&&r.shift()},()=>{for(const o of r)n.next(o);n.complete()},void 0,()=>{r=null}))})}function iD(e,t){const n=arguments.length>=2;return r=>r.pipe(e?Sn((o,i)=>e(o,i,r)):xn,Td(1),n?xa(t):rD(()=>new Ta))}function xd(e){return Ee((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}
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
       */const U="primary",Ai=Symbol("RouteTitle");class AF{constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){const n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){const n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}}function mo(e){return new AF(e)}function TF(e,t,n){const r=n.path.split("/");if(r.length>e.length||"full"===n.pathMatch&&(t.hasChildren()||r.length<e.length))return null;const o={};for(let i=0;i<r.length;i++){const s=r[i],a=e[i];if(s.startsWith(":"))o[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,r.length),posParams:o}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function on(e,t){const n=e?Object.keys(e):void 0,r=t?Object.keys(t):void 0;if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!sD(e[o],t[o]))return!1;return!0}function sD(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const n=[...e].sort(),r=[...t].sort();return n.every((o,i)=>r[i]===o)}return e===t}function aD(e){return Array.prototype.concat.apply([],e)}function lD(e){return e.length>0?e[e.length-1]:null}function $e(e,t){for(const n in e)e.hasOwnProperty(n)&&t(e[n],n)}function qn(e){return uc(e)?e:si(e)?be(Promise.resolve(e)):A(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const RF={exact:function dD(e,t,n){if(!pr(e.segments,t.segments)||!Na(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(const r in t.children)if(!e.children[r]||!dD(e.children[r],t.children[r],n))return!1;return!0},subset:fD},uD={exact:function FF(e,t){return on(e,t)},subset:function OF(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>sD(e[n],t[n]))},ignored:()=>!0};function cD(e,t,n){return RF[n.paths](e.root,t.root,n.matrixParams)&&uD[n.queryParams](e.queryParams,t.queryParams)&&!("exact"===n.fragment&&e.fragment!==t.fragment)}function fD(e,t,n){return hD(e,t,t.segments,n)}function hD(e,t,n,r){if(e.segments.length>n.length){const o=e.segments.slice(0,n.length);return!(!pr(o,n)||t.hasChildren()||!Na(o,n,r))}if(e.segments.length===n.length){if(!pr(e.segments,n)||!Na(e.segments,n,r))return!1;for(const o in t.children)if(!e.children[o]||!fD(e.children[o],t.children[o],r))return!1;return!0}{const o=n.slice(0,e.segments.length),i=n.slice(e.segments.length);return!!(pr(e.segments,o)&&Na(e.segments,o,r)&&e.children[U])&&hD(e.children[U],t,i,r)}}function Na(e,t,n){return t.every((r,o)=>uD[n](e[o].parameters,r.parameters))}class hr{constructor(t,n,r){this.root=t,this.queryParams=n,this.fragment=r}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=mo(this.queryParams)),this._queryParamMap}toString(){return LF.serialize(this)}}class z{constructor(t,n){this.segments=t,this.children=n,this.parent=null,$e(n,(r,o)=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ra(this)}}class Ti{constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap||(this._parameterMap=mo(this.parameters)),this._parameterMap}toString(){return yD(this)}}function pr(e,t){return e.length===t.length&&e.every((n,r)=>n.path===t[r].path)}let pD=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:function(){return new Rd},providedIn:"root"}),e})();class Rd{parse(t){const n=new WF(t);return new hr(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){const n=`/${xi(t.root,!0)}`,r=function jF(e){const t=Object.keys(e).map(n=>{const r=e[n];return Array.isArray(r)?r.map(o=>`${Fa(n)}=${Fa(o)}`).join("&"):`${Fa(n)}=${Fa(r)}`}).filter(n=>!!n);return t.length?`?${t.join("&")}`:""}(t.queryParams);return`${n}${r}${"string"==typeof t.fragment?`#${function VF(e){return encodeURI(e)}(t.fragment)}`:""}`}}const LF=new Rd;function Ra(e){return e.segments.map(t=>yD(t)).join("/")}function xi(e,t){if(!e.hasChildren())return Ra(e);if(t){const n=e.children[U]?xi(e.children[U],!1):"",r=[];return $e(e.children,(o,i)=>{i!==U&&r.push(`${i}:${xi(o,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}{const n=function kF(e,t){let n=[];return $e(e.children,(r,o)=>{o===U&&(n=n.concat(t(r,o)))}),$e(e.children,(r,o)=>{o!==U&&(n=n.concat(t(r,o)))}),n}(e,(r,o)=>o===U?[xi(e.children[U],!1)]:[`${o}:${xi(r,!1)}`]);return 1===Object.keys(e.children).length&&null!=e.children[U]?`${Ra(e)}/${n[0]}`:`${Ra(e)}/(${n.join("//")})`}}function gD(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Fa(e){return gD(e).replace(/%3B/gi,";")}function Fd(e){return gD(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Oa(e){return decodeURIComponent(e)}function mD(e){return Oa(e.replace(/\+/g,"%20"))}function yD(e){return`${Fd(e.path)}${function $F(e){return Object.keys(e).map(t=>`;${Fd(t)}=${Fd(e[t])}`).join("")}(e.parameters)}`}const BF=/^[^\/()?;=#]+/;function Pa(e){const t=e.match(BF);return t?t[0]:""}const HF=/^[^=?&#]+/,GF=/^[^&#]+/;class WF{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new z([],{}):new z([],this.parseChildren())}parseQueryParams(){const t={};if(this.consumeOptional("?"))do{this.parseQueryParam(t)}while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(t.length>0||Object.keys(n).length>0)&&(r[U]=new z(t,n)),r}parseSegment(){const t=Pa(this.remaining);if(""===t&&this.peekStartsWith(";"))throw new C(4009,!1);return this.capture(t),new Ti(Oa(t),this.parseMatrixParams())}parseMatrixParams(){const t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){const n=Pa(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){const o=Pa(this.remaining);o&&(r=o,this.capture(r))}t[Oa(n)]=Oa(r)}parseQueryParam(t){const n=function UF(e){const t=e.match(HF);return t?t[0]:""}(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){const s=function zF(e){const t=e.match(GF);return t?t[0]:""}(this.remaining);s&&(r=s,this.capture(r))}const o=mD(n),i=mD(r);if(t.hasOwnProperty(o)){let s=t[o];Array.isArray(s)||(s=[s],t[o]=s),s.push(i)}else t[o]=i}parseParens(t){const n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const r=Pa(this.remaining),o=this.remaining[r.length];if("/"!==o&&")"!==o&&";"!==o)throw new C(4010,!1);let i;r.indexOf(":")>-1?(i=r.slice(0,r.indexOf(":")),this.capture(i),this.capture(":")):t&&(i=U);const s=this.parseChildren();n[i]=1===Object.keys(s).length?s[U]:new z([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return!!this.peekStartsWith(t)&&(this.remaining=this.remaining.substring(t.length),!0)}capture(t){if(!this.consumeOptional(t))throw new C(4011,!1)}}function Od(e){return e.segments.length>0?new z([],{[U]:e}):e}function ka(e){const t={};for(const r of Object.keys(e.children)){const i=ka(e.children[r]);(i.segments.length>0||i.hasChildren())&&(t[r]=i)}return function qF(e){if(1===e.numberOfChildren&&e.children[U]){const t=e.children[U];return new z(e.segments.concat(t.segments),t.children)}return e}(new z(e.segments,t))}function gr(e){return e instanceof hr}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ZF(e,t,n,r,o){var i;if(0===n.length)return yo(t.root,t.root,t.root,r,o);const s=function DD(e){if("string"==typeof e[0]&&1===e.length&&"/"===e[0])return new _D(!0,0,e);let t=0,n=!1;const r=e.reduce((o,i,s)=>{if("object"==typeof i&&null!=i){if(i.outlets){const a={};return $e(i.outlets,(l,u)=>{a[u]="string"==typeof l?l.split("/"):l}),[...o,{outlets:a}]}if(i.segmentPath)return[...o,i.segmentPath]}return"string"!=typeof i?[...o,i]:0===s?(i.split("/").forEach((a,l)=>{0==l&&"."===a||(0==l&&""===a?n=!0:".."===a?t++:""!=a&&o.push(a))}),o):[...o,i]},[]);return new _D(n,t,r)}(n);if(s.toRoot())return yo(t.root,t.root,new z([],{}),r,o);const l=function a(c){var d;const f=function JF(e,t,n,r){if(e.isAbsolute)return new vo(t.root,!0,0);if(-1===r)return new vo(n,n===t.root,0);return function CD(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new C(4005,!1);o=r.segments.length}return new vo(r,!1,o-i)}(n,r+(Ni(e.commands[0])?0:1),e.numberOfDoubleDots)}(s,t,null===(d=e.snapshot)||void 0===d?void 0:d._urlSegment,c),h=f.processChildren?Fi(f.segmentGroup,f.index,s.commands):kd(f.segmentGroup,f.index,s.commands);return yo(t.root,f.segmentGroup,h,r,o)}(null===(i=e.snapshot)||void 0===i?void 0:i._lastPathIndex);return l}function Ni(e){return"object"==typeof e&&null!=e&&!e.outlets&&!e.segmentPath}function Ri(e){return"object"==typeof e&&null!=e&&e.outlets}function yo(e,t,n,r,o){let s,i={};r&&$e(r,(l,u)=>{i[u]=Array.isArray(l)?l.map(c=>`${c}`):`${l}`}),s=e===t?n:vD(e,t,n);const a=Od(ka(s));return new hr(a,i,o)}function vD(e,t,n){const r={};return $e(e.children,(o,i)=>{r[i]=o===t?n:vD(o,t,n)}),new z(e.segments,r)}class _D{constructor(t,n,r){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=r,t&&r.length>0&&Ni(r[0]))throw new C(4003,!1);const o=r.find(Ri);if(o&&o!==lD(r))throw new C(4004,!1)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class vo{constructor(t,n,r){this.segmentGroup=t,this.processChildren=n,this.index=r}}function kd(e,t,n){if(e||(e=new z([],{})),0===e.segments.length&&e.hasChildren())return Fi(e,t,n);const r=function e1(e,t,n){let r=0,o=t;const i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;const s=e.segments[o],a=n[r];if(Ri(a))break;const l=`${a}`,u=r<n.length-1?n[r+1]:null;if(o>0&&void 0===l)break;if(l&&u&&"object"==typeof u&&void 0===u.outlets){if(!ED(l,u,s))return i;r+=2}else{if(!ED(l,{},s))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){const i=new z(e.segments.slice(0,r.pathIndex),{});return i.children[U]=new z(e.segments.slice(r.pathIndex),e.children),Fi(i,0,o)}return r.match&&0===o.length?new z(e.segments,{}):r.match&&!e.hasChildren()?Ld(e,t,n):r.match?Fi(e,0,o):Ld(e,t,n)}function Fi(e,t,n){if(0===n.length)return new z(e.segments,{});{const r=function XF(e){return Ri(e[0])?e[0].outlets:{[U]:e}}(n),o={};return $e(r,(i,s)=>{"string"==typeof i&&(i=[i]),null!==i&&(o[s]=kd(e.children[s],t,i))}),$e(e.children,(i,s)=>{void 0===r[s]&&(o[s]=i)}),new z(e.segments,o)}}function Ld(e,t,n){const r=e.segments.slice(0,t);let o=0;for(;o<n.length;){const i=n[o];if(Ri(i)){const l=t1(i.outlets);return new z(r,l)}if(0===o&&Ni(n[0])){r.push(new Ti(e.segments[t].path,wD(n[0]))),o++;continue}const s=Ri(i)?i.outlets[U]:`${i}`,a=o<n.length-1?n[o+1]:null;s&&a&&Ni(a)?(r.push(new Ti(s,wD(a))),o+=2):(r.push(new Ti(s,{})),o++)}return new z(r,{})}function t1(e){const t={};return $e(e,(n,r)=>{"string"==typeof n&&(n=[n]),null!==n&&(t[r]=Ld(new z([],{}),0,n))}),t}function wD(e){const t={};return $e(e,(n,r)=>t[r]=`${n}`),t}function ED(e,t,n){return e==n.path&&on(t,n.parameters)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class An{constructor(t,n){this.id=t,this.url=n}}class Vd extends An{constructor(t,n,r="imperative",o=null){super(t,n),this.type=0,this.navigationTrigger=r,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class mr extends An{constructor(t,n,r){super(t,n),this.urlAfterRedirects=r,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class La extends An{constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class bD extends An{constructor(t,n,r,o){super(t,n),this.error=r,this.target=o,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class n1 extends An{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class r1 extends An{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class o1 extends An{constructor(t,n,r,o,i){super(t,n),this.urlAfterRedirects=r,this.state=o,this.shouldActivate=i,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class i1 extends An{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class s1 extends An{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class a1{constructor(t){this.route=t,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class l1{constructor(t){this.route=t,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class u1{constructor(t){this.snapshot=t,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class c1{constructor(t){this.snapshot=t,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class d1{constructor(t){this.snapshot=t,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class f1{constructor(t){this.snapshot=t,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class SD{constructor(t,n,r){this.routerEvent=t,this.position=n,this.anchor=r,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class MD{constructor(t){this._root=t}get root(){return this._root.value}parent(t){const n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){const n=$d(t,this._root);return n?n.children.map(r=>r.value):[]}firstChild(t){const n=$d(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){const n=jd(t,this._root);return n.length<2?[]:n[n.length-2].children.map(o=>o.value).filter(o=>o!==t)}pathFromRoot(t){return jd(t,this._root).map(n=>n.value)}}function $d(e,t){if(e===t.value)return t;for(const n of t.children){const r=$d(e,n);if(r)return r}return null}function jd(e,t){if(e===t.value)return[t];for(const n of t.children){const r=jd(e,n);if(r.length)return r.unshift(t),r}return[]}class Tn{constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}}function _o(e){const t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class ID extends MD{constructor(t,n){super(t),this.snapshot=n,Bd(this,t)}toString(){return this.snapshot.toString()}}function AD(e,t){const n=function p1(e,t){const s=new Va([],{},{},"",{},U,t,null,e.root,-1,{});return new xD("",new Tn(s,[]))}(e,t),r=new Wt([new Ti("",{})]),o=new Wt({}),i=new Wt({}),s=new Wt({}),a=new Wt(""),l=new yr(r,o,s,a,i,U,t,n.root);return l.snapshot=n.root,new ID(new Tn(l,[]),n)}class yr{constructor(t,n,r,o,i,s,a,l){var u,c;this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.title=null!==(u=null===(c=this.data)||void 0===c?void 0:c.pipe(G(d=>d[Ai])))&&void 0!==u?u:A(void 0),this._futureSnapshot=l}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(G(t=>mo(t)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(G(t=>mo(t)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function TD(e,t="emptyOnly"){const n=e.pathFromRoot;let r=0;if("always"!==t)for(r=n.length-1;r>=1;){const o=n[r],i=n[r-1];if(o.routeConfig&&""===o.routeConfig.path)r--;else{if(i.component)break;r--}}return function g1(e){return e.reduce((t,n)=>{var r;return{params:{...t.params,...n.params},data:{...t.data,...n.data},resolve:{...n.data,...t.resolve,...null===(r=n.routeConfig)||void 0===r?void 0:r.data,...n._resolvedData}}},{params:{},data:{},resolve:{}})}(n.slice(r))}class Va{constructor(t,n,r,o,i,s,a,l,u,c,d,f){var h;this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.title=null===(h=this.data)||void 0===h?void 0:h[Ai],this.routeConfig=l,this._urlSegment=u,this._lastPathIndex=c,this._correctedLastPathIndex=f??c,this._resolve=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=mo(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=mo(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class xD extends MD{constructor(t,n){super(n),this.url=t,Bd(this,n)}toString(){return ND(this._root)}}function Bd(e,t){t.value._routerState=e,t.children.forEach(n=>Bd(e,n))}function ND(e){const t=e.children.length>0?` { ${e.children.map(ND).join(", ")} } `:"";return`${e.value}${t}`}function Hd(e){if(e.snapshot){const t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,on(t.queryParams,n.queryParams)||e.queryParams.next(n.queryParams),t.fragment!==n.fragment&&e.fragment.next(n.fragment),on(t.params,n.params)||e.params.next(n.params),function xF(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!on(e[n],t[n]))return!1;return!0}(t.url,n.url)||e.url.next(n.url),on(t.data,n.data)||e.data.next(n.data)}else e.snapshot=e._futureSnapshot,e.data.next(e._futureSnapshot.data)}function Ud(e,t){const n=on(e.params,t.params)&&function PF(e,t){return pr(e,t)&&e.every((n,r)=>on(n.parameters,t[r].parameters))}(e.url,t.url);return n&&!(!e.parent!=!t.parent)&&(!e.parent||Ud(e.parent,t.parent))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Oi(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){const r=n.value;r._futureSnapshot=t.value;const o=function y1(e,t,n){return t.children.map(r=>{for(const o of n.children)if(e.shouldReuseRoute(r.value,o.value.snapshot))return Oi(e,r,o);return Oi(e,r)})}(e,t,n);return new Tn(r,o)}{if(e.shouldAttach(t.value)){const i=e.retrieve(t.value);if(null!==i){const s=i.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(a=>Oi(e,a)),s}}const r=function v1(e){return new yr(new Wt(e.url),new Wt(e.params),new Wt(e.queryParams),new Wt(e.fragment),new Wt(e.data),e.outlet,e.component,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t.value),o=t.children.map(i=>Oi(e,i));return new Tn(r,o)}}const Gd="ngNavigationCancelingError";function RD(e,t){const{redirectTo:n,navigationBehaviorOptions:r}=gr(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,o=FD(!1,0,t);return o.url=n,o.navigationBehaviorOptions=r,o}function FD(e,t,n){const r=new Error("NavigationCancelingError: "+(e||""));return r[Gd]=!0,r.cancellationCode=t,n&&(r.url=n),r}function OD(e){return PD(e)&&gr(e.url)}function PD(e){return e&&e[Gd]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class _1{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.injector=null,this.children=new Pi,this.attachRef=null}}let Pi=(()=>{class e{constructor(){this.contexts=new Map}onChildOutletCreated(n,r){const o=this.getOrCreateContext(n);o.outlet=r,this.contexts.set(n,o)}onChildOutletDestroyed(n){const r=this.getContext(n);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){const n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let r=this.getContext(n);return r||(r=new _1,this.contexts.set(n,r)),r}getContext(n){return this.contexts.get(n)||null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const $a=!1;let kD=(()=>{class e{constructor(n,r,o,i,s){this.parentContexts=n,this.location=r,this.changeDetector=i,this.environmentInjector=s,this.activated=null,this._activatedRoute=null,this.activateEvents=new ye,this.deactivateEvents=new ye,this.attachEvents=new ye,this.detachEvents=new ye,this.name=o||U,n.onChildOutletCreated(this.name,this)}ngOnDestroy(){var n;(null===(n=this.parentContexts.getContext(this.name))||void 0===n?void 0:n.outlet)===this&&this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const n=this.parentContexts.getContext(this.name);n&&n.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new C(4012,$a);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new C(4012,$a);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new C(4012,$a);this.location.detach();const n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,r){this.activated=n,this._activatedRoute=r,this.location.insert(n.hostView),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){const n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,r){if(this.isActivated)throw new C(4013,$a);this._activatedRoute=n;const o=this.location,s=n._futureSnapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new D1(n,a,o.injector);if(r&&function C1(e){return!!e.resolveComponentFactory}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(r)){const u=r.resolveComponentFactory(s);this.activated=o.createComponent(u,o.length,l)}else this.activated=o.createComponent(s,{index:o.length,injector:l,environmentInjector:r??this.environmentInjector});this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return e.\u0275fac=function(n){return new(n||e)(D(Pi),D(Ht),function Lo(e){return function cb(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const r=n.length;let o=0;for(;o<r;){const i=n[o];if(Vh(i))break;if(0===i)o+=2;else if("number"==typeof i)for(o++;o<r&&"string"==typeof n[o];)o++;else{if(i===t)return n[o+1];o+=2}}}return null}(Re(),e)}("name"),D(ia),D(Vn))},e.\u0275dir=O({type:e,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0}),e})();class D1{constructor(t,n,r){this.route=t,this.childContexts=n,this.parent=r}get(t,n){return t===yr?this.route:t===Pi?this.childContexts:this.parent.get(t,n)}}let zd=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=Rn({type:e,selectors:[["ng-component"]],standalone:!0,features:[Oy],decls:1,vars:0,template:function(n,r){1&n&&et(0,"router-outlet")},dependencies:[kD],encapsulation:2}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function LD(e,t){var n;return e.providers&&!e._injector&&(e._injector=Zs(e.providers,t,`Route: ${e.path}`)),null!==(n=e._injector)&&void 0!==n?n:t}function qd(e){const t=e.children&&e.children.map(qd),n=t?{...e,children:t}:{...e};return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==U&&(n.component=zd),n}function Nt(e){return e.outlet||U}function VD(e,t){const n=e.filter(r=>Nt(r)===t);return n.push(...e.filter(r=>Nt(r)!==t)),n}function ki(e){var t;if(!e)return null;if(null!==(t=e.routeConfig)&&void 0!==t&&t._injector)return e.routeConfig._injector;for(let n=e.parent;n;n=n.parent){const r=n.routeConfig;if(null!=r&&r._loadedInjector)return r._loadedInjector;if(null!=r&&r._injector)return r._injector}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class M1{constructor(t,n,r,o){this.routeReuseStrategy=t,this.futureState=n,this.currState=r,this.forwardEvent=o}activate(t){const n=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,r,t),Hd(this.futureState.root),this.activateChildRoutes(n,r,t)}deactivateChildRoutes(t,n,r){const o=_o(n);t.children.forEach(i=>{const s=i.value.outlet;this.deactivateRoutes(i,o[s],r),delete o[s]}),$e(o,(i,s)=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(t,n,r){const o=t.value,i=n?n.value:null;if(o===i)if(o.component){const s=r.getContext(o.outlet);s&&this.deactivateChildRoutes(t,n,s.children)}else this.deactivateChildRoutes(t,n,r);else i&&this.deactivateRouteAndItsChildren(n,r)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){const r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=_o(t);for(const s of Object.keys(i))this.deactivateRouteAndItsChildren(i[s],o);if(r&&r.outlet){const s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:a})}}deactivateRouteAndOutlet(t,n){const r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=_o(t);for(const s of Object.keys(i))this.deactivateRouteAndItsChildren(i[s],o);r&&r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated(),r.attachRef=null,r.resolver=null,r.route=null)}activateChildRoutes(t,n,r){const o=_o(n);t.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],r),this.forwardEvent(new f1(i.value.snapshot))}),t.children.length&&this.forwardEvent(new c1(t.value.snapshot))}activateRoutes(t,n,r){const o=t.value,i=n?n.value:null;if(Hd(o),o===i)if(o.component){const a=r.getOrCreateContext(o.outlet);this.activateChildRoutes(t,n,a.children)}else this.activateChildRoutes(t,n,r);else if(o.component){const a=r.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){const l=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),a.children.onOutletReAttached(l.contexts),a.attachRef=l.componentRef,a.route=l.route.value,a.outlet&&a.outlet.attach(l.componentRef,l.route.value),Hd(l.route.value),this.activateChildRoutes(t,null,a.children)}else{var s;const l=ki(o.snapshot),u=null!==(s=l?.get(Yo))&&void 0!==s?s:null;a.attachRef=null,a.route=o,a.resolver=u,a.injector=l,a.outlet&&a.outlet.activateWith(o,a.injector),this.activateChildRoutes(t,null,a.children)}}else this.activateChildRoutes(t,null,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class $D{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}}class ja{constructor(t,n){this.component=t,this.route=n}}function I1(e,t,n){const r=e._root;return Li(r,t?t._root:null,n,[r.value])}function Do(e,t){const n=Symbol(),r=t.get(e,n);return r===n?"function"!=typeof e||function hE(e){return null!==Xi(e)}(e)?t.get(e):e:r}function Li(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){const i=_o(t);return e.children.forEach(s=>{(function T1(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){const i=e.value,s=t?t.value:null,a=n?n.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){const l=function x1(e,t,n){if("function"==typeof n)return n(e,t);switch(n){case"pathParamsChange":return!pr(e.url,t.url);case"pathParamsOrQueryParamsChange":return!pr(e.url,t.url)||!on(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Ud(e,t)||!on(e.queryParams,t.queryParams);default:return!Ud(e,t)}}(s,i,i.routeConfig.runGuardsAndResolvers);l?o.canActivateChecks.push(new $D(r)):(i.data=s.data,i._resolvedData=s._resolvedData),Li(e,t,i.component?a?a.children:null:n,r,o),l&&a&&a.outlet&&a.outlet.isActivated&&o.canDeactivateChecks.push(new ja(a.outlet.component,s))}else s&&Vi(t,a,o),o.canActivateChecks.push(new $D(r)),Li(e,null,i.component?a?a.children:null:n,r,o)})(s,i[s.value.outlet],n,r.concat([s.value]),o),delete i[s.value.outlet]}),$e(i,(s,a)=>Vi(s,n.getContext(a),o)),o}function Vi(e,t,n){const r=_o(e),o=e.value;$e(r,(i,s)=>{Vi(i,o.component?t?t.children.getContext(s):null:t,n)}),n.canDeactivateChecks.push(new ja(o.component&&t&&t.outlet&&t.outlet.isActivated?t.outlet.component:null,o))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $i(e){return"function"==typeof e}function Qd(e){return e instanceof Ta||"EmptyError"===e?.name}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ba=Symbol("INITIAL_VALUE");function Co(){return rn(e=>X_(e.map(t=>t.pipe(Ii(1),function EF(...e){const t=Mo(e);return Ee((n,r)=>{(t?Id(e,n,t):Id(e,n)).subscribe(r)})}(Ba)))).pipe(G(t=>{for(const n of t)if(!0!==n){if(n===Ba)return Ba;if(!1===n||n instanceof hr)return n}return!0}),Sn(t=>t!==Ba),Ii(1)))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function jD(e){return function Rw(...e){return Gf(e)}(qe(t=>{if(gr(t))throw RD(0,t)}),G(t=>!0===t))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Kd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function BD(e,t,n,r,o){const i=Zd(e,t,n);return i.matched?function q1(e,t,n,r){const o=t.canMatch;return o&&0!==o.length?A(o.map(s=>{const a=Do(s,e);return qn(function k1(e){return e&&$i(e.canMatch)}(a)?a.canMatch(t,n):e.runInContext(()=>a(t,n)))})).pipe(Co(),jD()):A(!0)}(r=LD(t,r),t,n).pipe(G(s=>!0===s?i:{...Kd})):A(i)}function Zd(e,t,n){var r;if(""===t.path)return"full"===t.pathMatch&&(e.hasChildren()||n.length>0)?{...Kd}:{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};const i=(t.matcher||TF)(n,e,t);if(!i)return{...Kd};const s={};$e(i.posParams,(l,u)=>{s[u]=l.path});const a=i.consumed.length>0?{...s,...i.consumed[i.consumed.length-1].parameters}:s;return{matched:!0,consumedSegments:i.consumed,remainingSegments:n.slice(i.consumed.length),parameters:a,positionalParamSegments:null!==(r=i.posParams)&&void 0!==r?r:{}}}function Ha(e,t,n,r,o="corrected"){if(n.length>0&&function Z1(e,t,n){return n.some(r=>Ua(e,t,r)&&Nt(r)!==U)}(e,n,r)){const s=new z(t,function K1(e,t,n,r){const o={};o[U]=r,r._sourceSegment=e,r._segmentIndexShift=t.length;for(const i of n)if(""===i.path&&Nt(i)!==U){const s=new z([],{});s._sourceSegment=e,s._segmentIndexShift=t.length,o[Nt(i)]=s}return o}(e,t,r,new z(n,e.children)));return s._sourceSegment=e,s._segmentIndexShift=t.length,{segmentGroup:s,slicedSegments:[]}}if(0===n.length&&function Y1(e,t,n){return n.some(r=>Ua(e,t,r))}(e,n,r)){const s=new z(e.segments,function Q1(e,t,n,r,o,i){const s={};for(const a of r)if(Ua(e,n,a)&&!o[Nt(a)]){const l=new z([],{});l._sourceSegment=e,l._segmentIndexShift="legacy"===i?e.segments.length:t.length,s[Nt(a)]=l}return{...o,...s}}(e,t,n,r,e.children,o));return s._sourceSegment=e,s._segmentIndexShift=t.length,{segmentGroup:s,slicedSegments:n}}const i=new z(e.segments,e.children);return i._sourceSegment=e,i._segmentIndexShift=t.length,{segmentGroup:i,slicedSegments:n}}function Ua(e,t,n){return(!(e.hasChildren()||t.length>0)||"full"!==n.pathMatch)&&""===n.path}function HD(e,t,n,r){return!!(Nt(e)===r||r!==U&&Ua(t,n,e))&&("**"===e.path||Zd(t,e,n).matched)}function UD(e,t,n){return 0===t.length&&!e.children[n]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ga=!1;class za{constructor(t){this.segmentGroup=t||null}}class GD{constructor(t){this.urlTree=t}}function ji(e){return zn(new za(e))}function zD(e){return zn(new GD(e))}class tO{constructor(t,n,r,o,i){this.injector=t,this.configLoader=n,this.urlSerializer=r,this.urlTree=o,this.config=i,this.allowRedirects=!0}apply(){const t=Ha(this.urlTree.root,[],[],this.config).segmentGroup,n=new z(t.segments,t.children);return this.expandSegmentGroup(this.injector,this.config,n,U).pipe(G(i=>this.createUrlTree(ka(i),this.urlTree.queryParams,this.urlTree.fragment))).pipe(qt(i=>{if(i instanceof GD)return this.allowRedirects=!1,this.match(i.urlTree);throw i instanceof za?this.noMatchError(i):i}))}match(t){return this.expandSegmentGroup(this.injector,this.config,t.root,U).pipe(G(o=>this.createUrlTree(ka(o),t.queryParams,t.fragment))).pipe(qt(o=>{throw o instanceof za?this.noMatchError(o):o}))}noMatchError(t){return new C(4002,Ga)}createUrlTree(t,n,r){const o=Od(t);return new hr(o,n,r)}expandSegmentGroup(t,n,r,o){return 0===r.segments.length&&r.hasChildren()?this.expandChildren(t,n,r).pipe(G(i=>new z([],i))):this.expandSegment(t,r,n,r.segments,o,!0)}expandChildren(t,n,r){const o=[];for(const i of Object.keys(r.children))"primary"===i?o.unshift(i):o.push(i);return be(o).pipe(Gn(i=>{const s=r.children[i],a=VD(n,i);return this.expandSegmentGroup(t,a,s,i).pipe(G(l=>({segment:l,outlet:i})))}),oD((i,s)=>(i[s.outlet]=s.segment,i),{}),iD())}expandSegment(t,n,r,o,i,s){return be(r).pipe(Gn(a=>this.expandSegmentAgainstRoute(t,n,r,a,o,i,s).pipe(qt(u=>{if(u instanceof za)return A(null);throw u}))),Wn(a=>!!a),qt((a,l)=>{if(Qd(a))return UD(n,o,i)?A(new z([],{})):ji(n);throw a}))}expandSegmentAgainstRoute(t,n,r,o,i,s,a){return HD(o,n,i,s)?void 0===o.redirectTo?this.matchSegmentAgainstRoute(t,n,o,i,s):a&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s):ji(n):ji(n)}expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s){return"**"===o.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(t,r,o,s):this.expandRegularSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s)}expandWildCardWithParamsAgainstRouteUsingRedirect(t,n,r,o){const i=this.applyRedirectCommands([],r.redirectTo,{});return r.redirectTo.startsWith("/")?zD(i):this.lineralizeSegments(r,i).pipe(Ve(s=>{const a=new z(s,{});return this.expandSegment(t,a,n,s,o,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s){const{matched:a,consumedSegments:l,remainingSegments:u,positionalParamSegments:c}=Zd(n,o,i);if(!a)return ji(n);const d=this.applyRedirectCommands(l,o.redirectTo,c);return o.redirectTo.startsWith("/")?zD(d):this.lineralizeSegments(o,d).pipe(Ve(f=>this.expandSegment(t,n,r,f.concat(u),s,!1)))}matchSegmentAgainstRoute(t,n,r,o,i){return"**"===r.path?(t=LD(r,t),r.loadChildren?(r._loadedRoutes?A({routes:r._loadedRoutes,injector:r._loadedInjector}):this.configLoader.loadChildren(t,r)).pipe(G(a=>(r._loadedRoutes=a.routes,r._loadedInjector=a.injector,new z(o,{})))):A(new z(o,{}))):BD(n,r,o,t).pipe(rn(({matched:s,consumedSegments:a,remainingSegments:l})=>{var u;return s?(t=null!==(u=r._injector)&&void 0!==u?u:t,this.getChildConfig(t,r,o).pipe(Ve(d=>{var f;const h=null!==(f=d.injector)&&void 0!==f?f:t,p=d.routes,{segmentGroup:g,slicedSegments:v}=Ha(n,a,l,p),y=new z(g.segments,g.children);if(0===v.length&&y.hasChildren())return this.expandChildren(h,p,y).pipe(G($=>new z(a,$)));if(0===p.length&&0===v.length)return A(new z(a,{}));const w=Nt(r)===i;return this.expandSegment(h,y,p,v,w?U:i,!0).pipe(G(b=>new z(a.concat(b.segments),b.children)))}))):ji(n)}))}getChildConfig(t,n,r){return n.children?A({routes:n.children,injector:t}):n.loadChildren?void 0!==n._loadedRoutes?A({routes:n._loadedRoutes,injector:n._loadedInjector}):function W1(e,t,n,r){const o=t.canLoad;return void 0===o||0===o.length?A(!0):A(o.map(s=>{const a=Do(s,e);return qn(function R1(e){return e&&$i(e.canLoad)}(a)?a.canLoad(t,n):e.runInContext(()=>a(t,n)))})).pipe(Co(),jD())}(t,n,r).pipe(Ve(o=>o?this.configLoader.loadChildren(t,n).pipe(qe(i=>{n._loadedRoutes=i.routes,n._loadedInjector=i.injector})):function X1(e){return zn(FD(Ga,3))}())):A({routes:[],injector:t})}lineralizeSegments(t,n){let r=[],o=n.root;for(;;){if(r=r.concat(o.segments),0===o.numberOfChildren)return A(r);if(o.numberOfChildren>1||!o.children[U])return zn(new C(4e3,Ga));o=o.children[U]}}applyRedirectCommands(t,n,r){return this.applyRedirectCreateUrlTree(n,this.urlSerializer.parse(n),t,r)}applyRedirectCreateUrlTree(t,n,r,o){const i=this.createSegmentGroup(t,n.root,r,o);return new hr(i,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){const r={};return $e(t,(o,i)=>{if("string"==typeof o&&o.startsWith(":")){const a=o.substring(1);r[i]=n[a]}else r[i]=o}),r}createSegmentGroup(t,n,r,o){const i=this.createSegments(t,n.segments,r,o);let s={};return $e(n.children,(a,l)=>{s[l]=this.createSegmentGroup(t,a,r,o)}),new z(i,s)}createSegments(t,n,r,o){return n.map(i=>i.path.startsWith(":")?this.findPosParam(t,i,o):this.findOrReturn(i,r))}findPosParam(t,n,r){const o=r[n.path.substring(1)];if(!o)throw new C(4001,Ga);return o}findOrReturn(t,n){let r=0;for(const o of n){if(o.path===t.path)return n.splice(r),o;r++}return t}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class rO{}class sO{constructor(t,n,r,o,i,s,a,l){this.injector=t,this.rootComponentType=n,this.config=r,this.urlTree=o,this.url=i,this.paramsInheritanceStrategy=s,this.relativeLinkResolution=a,this.urlSerializer=l}recognize(){const t=Ha(this.urlTree.root,[],[],this.config.filter(n=>void 0===n.redirectTo),this.relativeLinkResolution).segmentGroup;return this.processSegmentGroup(this.injector,this.config,t,U).pipe(G(n=>{if(null===n)return null;const r=new Va([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},U,this.rootComponentType,null,this.urlTree.root,-1,{}),o=new Tn(r,n),i=new xD(this.url,o);return this.inheritParamsAndData(i._root),i}))}inheritParamsAndData(t){const n=t.value,r=TD(n,this.paramsInheritanceStrategy);n.params=Object.freeze(r.params),n.data=Object.freeze(r.data),t.children.forEach(o=>this.inheritParamsAndData(o))}processSegmentGroup(t,n,r,o){return 0===r.segments.length&&r.hasChildren()?this.processChildren(t,n,r):this.processSegment(t,n,r,r.segments,o)}processChildren(t,n,r){return be(Object.keys(r.children)).pipe(Gn(o=>{const i=r.children[o],s=VD(n,o);return this.processSegmentGroup(t,s,i,o)}),oD((o,i)=>o&&i?(o.push(...i),o):null),function MF(e,t=!1){return Ee((n,r)=>{let o=0;n.subscribe(_e(r,i=>{const s=e(i,o++);(s||t)&&r.next(i),!s&&r.complete()}))})}(o=>null!==o),xa(null),iD(),G(o=>{if(null===o)return null;const i=WD(o);return function aO(e){e.sort((t,n)=>t.value.outlet===U?-1:n.value.outlet===U?1:t.value.outlet.localeCompare(n.value.outlet))}(i),i}))}processSegment(t,n,r,o,i){return be(n).pipe(Gn(s=>{var a;return this.processSegmentAgainstRoute(null!==(a=s._injector)&&void 0!==a?a:t,s,r,o,i)}),Wn(s=>!!s),qt(s=>{if(Qd(s))return UD(r,o,i)?A([]):A(null);throw s}))}processSegmentAgainstRoute(t,n,r,o,i){if(n.redirectTo||!HD(n,r,o,i))return A(null);let s;if("**"===n.path){var a,l;const u=o.length>0?lD(o).parameters:{},c=QD(r)+o.length;s=A({snapshot:new Va(o,u,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,ZD(n),Nt(n),null!==(a=null!==(l=n.component)&&void 0!==l?l:n._loadedComponent)&&void 0!==a?a:null,n,qD(r),c,YD(n),c),consumedSegments:[],remainingSegments:[]})}else s=BD(r,n,o,t).pipe(G(({matched:u,consumedSegments:c,remainingSegments:d,parameters:f})=>{var h,p;if(!u)return null;const g=QD(r)+c.length;return{snapshot:new Va(c,f,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,ZD(n),Nt(n),null!==(h=null!==(p=n.component)&&void 0!==p?p:n._loadedComponent)&&void 0!==h?h:null,n,qD(r),g,YD(n),g),consumedSegments:c,remainingSegments:d}}));return s.pipe(rn(u=>{var c,d;if(null===u)return A(null);const{snapshot:f,consumedSegments:h,remainingSegments:p}=u;t=null!==(c=n._injector)&&void 0!==c?c:t;const g=null!==(d=n._loadedInjector)&&void 0!==d?d:t,v=function lO(e){return e.children?e.children:e.loadChildren?e._loadedRoutes:[]}(n),{segmentGroup:y,slicedSegments:w}=Ha(r,h,p,v.filter(b=>void 0===b.redirectTo),this.relativeLinkResolution);if(0===w.length&&y.hasChildren())return this.processChildren(g,v,y).pipe(G(b=>null===b?null:[new Tn(f,b)]));if(0===v.length&&0===w.length)return A([new Tn(f,[])]);const m=Nt(n)===i;return this.processSegment(g,v,y,w,m?U:i).pipe(G(b=>null===b?null:[new Tn(f,b)]))}))}}function uO(e){const t=e.value.routeConfig;return t&&""===t.path&&void 0===t.redirectTo}function WD(e){const t=[],n=new Set;for(const r of e){if(!uO(r)){t.push(r);continue}const o=t.find(i=>r.value.routeConfig===i.value.routeConfig);void 0!==o?(o.children.push(...r.children),n.add(o)):t.push(r)}for(const r of n){const o=WD(r.children);t.push(new Tn(r.value,o))}return t.filter(r=>!n.has(r))}function qD(e){let t=e;for(;t._sourceSegment;)t=t._sourceSegment;return t}function QD(e){var t;let n=e,r=null!==(t=n._segmentIndexShift)&&void 0!==t?t:0;for(;n._sourceSegment;){var o;n=n._sourceSegment,r+=null!==(o=n._segmentIndexShift)&&void 0!==o?o:0}return r-1}function ZD(e){return e.data||{}}function YD(e){return e.resolve||{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function JD(e){return"string"==typeof e.title||null===e.title}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Yd(e){return rn(t=>{const n=e(t);return n?be(n).pipe(G(()=>t)):A(t)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let XD=(()=>{class e{buildTitle(n){let r,o=n.root;for(;void 0!==o;){var i;r=null!==(i=this.getResolvedTitleForRoute(o))&&void 0!==i?i:r,o=o.children.find(s=>s.outlet===U)}return r}getResolvedTitleForRoute(n){return n.data[Ai]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:function(){return De(eC)},providedIn:"root"}),e})(),eC=(()=>{class e extends XD{constructor(n){super(),this.title=n}updateTitle(n){const r=this.buildTitle(n);void 0!==r&&this.title.setTitle(r)}}return e.\u0275fac=function(n){return new(n||e)(M(k_))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
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
class yO{}class _O extends class vO{shouldDetach(t){return!1}store(t,n){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,n){return t.routeConfig===n.routeConfig}}{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const qa=new I("",{providedIn:"root",factory:()=>({})}),Jd=new I("ROUTES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Xd=(()=>{class e{constructor(n,r){this.injector=n,this.compiler=r,this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap}loadComponent(n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return A(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);const r=qn(n.loadComponent()).pipe(qe(i=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=i}),xd(()=>{this.componentLoaders.delete(n)})),o=new nD(r,()=>new ct).pipe(Ad());return this.componentLoaders.set(n,o),o}loadChildren(n,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return A({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);const i=this.loadModuleFactoryOrRoutes(r.loadChildren).pipe(G(a=>{this.onLoadEndListener&&this.onLoadEndListener(r);let l,u,c=!1;Array.isArray(a)?u=a:(l=a.create(n).injector,u=aD(l.get(Jd,[],N.Self|N.Optional)));return{routes:u.map(qd),injector:l}}),xd(()=>{this.childrenLoaders.delete(r)})),s=new nD(i,()=>new ct).pipe(Ad());return this.childrenLoaders.set(r,s),s}loadModuleFactoryOrRoutes(n){return qn(n()).pipe(Ve(r=>r instanceof Ry||Array.isArray(r)?A(r):be(this.compiler.compileModuleAsync(r))))}}return e.\u0275fac=function(n){return new(n||e)(M(Dt),M(Lc))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class CO{}class wO{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,n){return t}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function EO(e){throw e}function bO(e,t,n){return t.parse("/")}const SO={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},MO={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function nC(){var e,t;const n=De(pD),r=De(Pi),o=De(Jc),i=De(Dt),s=De(Lc),a=null!==(e=De(Jd,{optional:!0}))&&void 0!==e?e:[],l=null!==(t=De(qa,{optional:!0}))&&void 0!==t?t:{},u=De(eC),c=De(XD,{optional:!0}),d=De(CO,{optional:!0}),f=De(yO,{optional:!0}),h=new je(null,n,r,o,i,s,aD(a));return d&&(h.urlHandlingStrategy=d),f&&(h.routeReuseStrategy=f),h.titleStrategy=c??u,function IO(e,t){e.errorHandler&&(t.errorHandler=e.errorHandler),e.malformedUriErrorHandler&&(t.malformedUriErrorHandler=e.malformedUriErrorHandler),e.onSameUrlNavigation&&(t.onSameUrlNavigation=e.onSameUrlNavigation),e.paramsInheritanceStrategy&&(t.paramsInheritanceStrategy=e.paramsInheritanceStrategy),e.relativeLinkResolution&&(t.relativeLinkResolution=e.relativeLinkResolution),e.urlUpdateStrategy&&(t.urlUpdateStrategy=e.urlUpdateStrategy),e.canceledNavigationResolution&&(t.canceledNavigationResolution=e.canceledNavigationResolution)}(l,h),h}let je=(()=>{class e{constructor(n,r,o,i,s,a,l){this.rootComponentType=n,this.urlSerializer=r,this.rootContexts=o,this.location=i,this.config=l,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new ct,this.errorHandler=EO,this.malformedUriErrorHandler=bO,this.navigated=!1,this.lastSuccessfulId=-1,this.afterPreactivation=()=>A(void 0),this.urlHandlingStrategy=new wO,this.routeReuseStrategy=new _O,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.configLoader=s.get(Xd),this.configLoader.onLoadEndListener=f=>this.triggerEvent(new l1(f)),this.configLoader.onLoadStartListener=f=>this.triggerEvent(new a1(f)),this.ngModule=s.get(cr),this.console=s.get(KT);const d=s.get(Pe);this.isNgZoneEnabled=d instanceof Pe&&Pe.isInAngularZone(),this.resetConfig(l),this.currentUrlTree=function NF(){return new hr(new z([],{}),{},null)}(),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=AD(this.currentUrlTree,this.rootComponentType),this.transitions=new Wt({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){var n;return null===(n=this.location.getState())||void 0===n?void 0:n.\u0275routerPageId}setupNavigations(n){const r=this.events;return n.pipe(Sn(o=>0!==o.id),G(o=>({...o,extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),rn(o=>{let i=!1,s=!1;return A(o).pipe(qe(a=>{this.currentNavigation={id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,trigger:a.source,extras:a.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),rn(a=>{const l=this.browserUrlTree.toString(),u=!this.navigated||a.extractedUrl.toString()!==l||l!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||u)&&this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return rC(a.source)&&(this.browserUrlTree=a.extractedUrl),A(a).pipe(rn(d=>{const f=this.transitions.getValue();return r.next(new Vd(d.id,this.serializeUrl(d.extractedUrl),d.source,d.restoredState)),f!==this.transitions.getValue()?ln:Promise.resolve(d)}),function nO(e,t,n,r){return rn(o=>function eO(e,t,n,r,o){return new tO(e,t,n,r,o).apply()}(e,t,n,o.extractedUrl,r).pipe(G(i=>({...o,urlAfterRedirects:i}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),qe(d=>{this.currentNavigation={...this.currentNavigation,finalUrl:d.urlAfterRedirects},o.urlAfterRedirects=d.urlAfterRedirects}),function dO(e,t,n,r,o,i){return Ve(s=>function iO(e,t,n,r,o,i,s="emptyOnly",a="legacy"){return new sO(e,t,n,r,o,s,a,i).recognize().pipe(rn(l=>null===l?function oO(e){return new ve(t=>t.error(e))}(new rO):A(l)))}(e,t,n,s.urlAfterRedirects,r.serialize(s.urlAfterRedirects),r,o,i).pipe(G(a=>({...s,targetSnapshot:a}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.rootComponentType,this.config,this.urlSerializer,this.paramsInheritanceStrategy,this.relativeLinkResolution),qe(d=>{if(o.targetSnapshot=d.targetSnapshot,"eager"===this.urlUpdateStrategy){if(!d.extras.skipLocationChange){const h=this.urlHandlingStrategy.merge(d.urlAfterRedirects,d.rawUrl);this.setBrowserUrl(h,d)}this.browserUrlTree=d.urlAfterRedirects}const f=new n1(d.id,this.serializeUrl(d.extractedUrl),this.serializeUrl(d.urlAfterRedirects),d.targetSnapshot);r.next(f)}));if(u&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:f,extractedUrl:h,source:p,restoredState:g,extras:v}=a,y=new Vd(f,this.serializeUrl(h),p,g);r.next(y);const w=AD(h,this.rootComponentType).snapshot;return A(o={...a,targetSnapshot:w,urlAfterRedirects:h,extras:{...v,skipLocationChange:!1,replaceUrl:!1}})}return this.rawUrlTree=a.rawUrl,a.resolve(null),ln}),qe(a=>{const l=new r1(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot);this.triggerEvent(l)}),G(a=>o={...a,guards:I1(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),function V1(e,t){return Ve(n=>{const{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return 0===s.length&&0===i.length?A({...n,guardsResult:!0}):function $1(e,t,n,r){return be(e).pipe(Ve(o=>function z1(e,t,n,r,o){const i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;return i&&0!==i.length?A(i.map(a=>{var l;const u=null!==(l=ki(t))&&void 0!==l?l:o,c=Do(a,u);return qn(function P1(e){return e&&$i(e.canDeactivate)}(c)?c.canDeactivate(e,t,n,r):u.runInContext(()=>c(e,t,n,r))).pipe(Wn())})).pipe(Co()):A(!0)}(o.component,o.route,n,t,r)),Wn(o=>!0!==o,!0))}(s,r,o,e).pipe(Ve(a=>a&&function N1(e){return"boolean"==typeof e}(a)?function j1(e,t,n,r){return be(t).pipe(Gn(o=>Id(function H1(e,t){return null!==e&&t&&t(new u1(e)),A(!0)}(o.route.parent,r),function B1(e,t){return null!==e&&t&&t(new d1(e)),A(!0)}(o.route,r),function G1(e,t,n){const r=t[t.length-1],i=t.slice(0,t.length-1).reverse().map(s=>function A1(e){const t=e.routeConfig?e.routeConfig.canActivateChild:null;return t&&0!==t.length?{node:e,guards:t}:null}(s)).filter(s=>null!==s).map(s=>tD(()=>A(s.guards.map(l=>{var u;const c=null!==(u=ki(s.node))&&void 0!==u?u:n,d=Do(l,c);return qn(function O1(e){return e&&$i(e.canActivateChild)}(d)?d.canActivateChild(r,e):c.runInContext(()=>d(r,e))).pipe(Wn())})).pipe(Co())));return A(i).pipe(Co())}(e,o.path,n),function U1(e,t,n){const r=t.routeConfig?t.routeConfig.canActivate:null;if(!r||0===r.length)return A(!0);const o=r.map(i=>tD(()=>{var s;const a=null!==(s=ki(t))&&void 0!==s?s:n,l=Do(i,a);return qn(function F1(e){return e&&$i(e.canActivate)}(l)?l.canActivate(t,e):a.runInContext(()=>l(t,e))).pipe(Wn())}));return A(o).pipe(Co())}(e,o.route,n))),Wn(o=>!0!==o,!0))}(r,i,e,t):A(a)),G(a=>({...n,guardsResult:a})))})}(this.ngModule.injector,a=>this.triggerEvent(a)),qe(a=>{if(o.guardsResult=a.guardsResult,gr(a.guardsResult))throw RD(0,a.guardsResult);const l=new o1(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);this.triggerEvent(l)}),Sn(a=>!!a.guardsResult||(this.restoreHistory(a),this.cancelNavigationTransition(a,"",3),!1)),Yd(a=>{if(a.guards.canActivateChecks.length)return A(a).pipe(qe(l=>{const u=new i1(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(l.urlAfterRedirects),l.targetSnapshot);this.triggerEvent(u)}),rn(l=>{let u=!1;return A(l).pipe(function fO(e,t){return Ve(n=>{const{targetSnapshot:r,guards:{canActivateChecks:o}}=n;if(!o.length)return A(n);let i=0;return be(o).pipe(Gn(s=>function hO(e,t,n,r){const o=e.routeConfig,i=e._resolve;return void 0!==o?.title&&!JD(o)&&(i[Ai]=o.title),function pO(e,t,n,r){const o=function gO(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}(e);if(0===o.length)return A({});const i={};return be(o).pipe(Ve(s=>function mO(e,t,n,r){var o;const i=null!==(o=ki(t))&&void 0!==o?o:r,s=Do(e,i);return qn(s.resolve?s.resolve(t,n):i.runInContext(()=>s(t,n)))}(e[s],t,n,r).pipe(Wn(),qe(a=>{i[s]=a}))),Td(1),function IF(e){return G(()=>e)}(i),qt(s=>Qd(s)?ln:zn(s)))}(i,e,t,r).pipe(G(s=>(e._resolvedData=s,e.data=TD(e,n).resolve,o&&JD(o)&&(e.data[Ai]=o.title),null)))}(s.route,r,e,t)),qe(()=>i++),Td(1),Ve(s=>i===o.length?A(n):ln))})}(this.paramsInheritanceStrategy,this.ngModule.injector),qe({next:()=>u=!0,complete:()=>{u||(this.restoreHistory(l),this.cancelNavigationTransition(l,"",2))}}))}),qe(l=>{const u=new s1(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(l.urlAfterRedirects),l.targetSnapshot);this.triggerEvent(u)}))}),Yd(a=>{const l=u=>{var c;const d=[];null!==(c=u.routeConfig)&&void 0!==c&&c.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(qe(f=>{u.component=f}),G(()=>{})));for(const f of u.children)d.push(...l(f));return d};return X_(l(a.targetSnapshot.root)).pipe(xa(),Ii(1))}),Yd(()=>this.afterPreactivation()),G(a=>{const l=function m1(e,t,n){const r=Oi(e,t._root,n?n._root:void 0);return new ID(r,t)}(this.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return o={...a,targetRouterState:l}}),qe(a=>{this.currentUrlTree=a.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(a.urlAfterRedirects,a.rawUrl),this.routerState=a.targetRouterState,"deferred"===this.urlUpdateStrategy&&(a.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,a),this.browserUrlTree=a.urlAfterRedirects)}),((e,t,n)=>G(r=>(new M1(t,r.targetRouterState,r.currentRouterState,n).activate(e),r)))(this.rootContexts,this.routeReuseStrategy,a=>this.triggerEvent(a)),qe({next(){i=!0},complete(){i=!0}}),xd(()=>{var a;i||s||this.cancelNavigationTransition(o,"",1),(null===(a=this.currentNavigation)||void 0===a?void 0:a.id)===o.id&&(this.currentNavigation=null)}),qt(a=>{if(s=!0,PD(a)){OD(a)||(this.navigated=!0,this.restoreHistory(o,!0));const u=new La(o.id,this.serializeUrl(o.extractedUrl),a.message,a.cancellationCode);if(r.next(u),OD(a)){const c=this.urlHandlingStrategy.merge(a.url,this.rawUrlTree),d={skipLocationChange:o.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||rC(o.source)};this.scheduleNavigation(c,"imperative",null,d,{resolve:o.resolve,reject:o.reject,promise:o.promise})}else o.resolve(!1)}else{var l;this.restoreHistory(o,!0);const u=new bD(o.id,this.serializeUrl(o.extractedUrl),a,null!==(l=o.targetSnapshot)&&void 0!==l?l:void 0);r.next(u);try{o.resolve(this.errorHandler(a))}catch(c){o.reject(c)}}return ln}))}))}resetRootComponentType(n){this.rootComponentType=n,this.routerState.root.component=this.rootComponentType}setTransition(n){this.transitions.next({...this.transitions.value,...n})}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(n=>{const r="popstate"===n.type?"popstate":"hashchange";"popstate"===r&&setTimeout(()=>{var o;const i={replaceUrl:!0},s=null!==(o=n.state)&&void 0!==o&&o.navigationId?n.state:null;if(s){const l={...s};delete l.navigationId,delete l.\u0275routerPageId,0!==Object.keys(l).length&&(i.state=l)}const a=this.parseUrl(n.url);this.scheduleNavigation(a,r,s,i)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(n){this.events.next(n)}resetConfig(n){this.config=n.map(qd),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(n,r={}){const{relativeTo:o,queryParams:i,fragment:s,queryParamsHandling:a,preserveFragment:l}=r,u=o||this.routerState.root,c=l?this.currentUrlTree.fragment:s;let d=null;switch(a){case"merge":d={...this.currentUrlTree.queryParams,...i};break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=i||null}return null!==d&&(d=this.removeEmptyProps(d)),ZF(u,this.currentUrlTree,n,d,c??null)}navigateByUrl(n,r={skipLocationChange:!1}){const o=gr(n)?n:this.parseUrl(n),i=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(i,"imperative",null,r)}navigate(n,r={skipLocationChange:!1}){return function AO(e){for(let t=0;t<e.length;t++){if(null==e[t])throw new C(4008,false)}}(n),this.navigateByUrl(this.createUrlTree(n,r),r)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){let r;try{r=this.urlSerializer.parse(n)}catch(o){r=this.malformedUriErrorHandler(o,this.urlSerializer,n)}return r}isActive(n,r){let o;if(o=!0===r?{...SO}:!1===r?{...MO}:r,gr(n))return cD(this.currentUrlTree,n,o);const i=this.parseUrl(n);return cD(this.currentUrlTree,i,o)}removeEmptyProps(n){return Object.keys(n).reduce((r,o)=>{const i=n[o];return null!=i&&(r[o]=i),r},{})}processNavigations(){this.navigations.subscribe(n=>{var r;this.navigated=!0,this.lastSuccessfulId=n.id,this.currentPageId=n.targetPageId,this.events.next(new mr(n.id,this.serializeUrl(n.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,null===(r=this.titleStrategy)||void 0===r||r.updateTitle(this.routerState.snapshot),n.resolve(!0)},n=>{this.console.warn(`Unhandled Navigation Error: ${n}`)})}scheduleNavigation(n,r,o,i,s){if(this.disposed)return Promise.resolve(!1);let a,l,u;s?(a=s.resolve,l=s.reject,u=s.promise):u=new Promise((p,g)=>{a=p,l=g});const c=++this.navigationId;let d;if("computed"===this.canceledNavigationResolution)if(0===this.currentPageId&&(o=this.location.getState()),o&&o.\u0275routerPageId)d=o.\u0275routerPageId;else if(i.replaceUrl||i.skipLocationChange){var f;d=null!==(f=this.browserPageId)&&void 0!==f?f:0}else{var h;d=(null!==(h=this.browserPageId)&&void 0!==h?h:0)+1}else d=0;return this.setTransition({id:c,targetPageId:d,source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:n,extras:i,resolve:a,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(p=>Promise.reject(p))}setBrowserUrl(n,r){const o=this.urlSerializer.serialize(n),i={...r.extras.state,...this.generateNgRouterState(r.id,r.targetPageId)};this.location.isCurrentPathEqualTo(o)||r.extras.replaceUrl?this.location.replaceState(o,"",i):this.location.go(o,"",i)}restoreHistory(n,r=!1){if("computed"===this.canceledNavigationResolution){var o,i;const s=this.currentPageId-n.targetPageId;"popstate"!==n.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==(null===(o=this.currentNavigation)||void 0===o?void 0:o.finalUrl)||0===s?this.currentUrlTree===(null===(i=this.currentNavigation)||void 0===i?void 0:i.finalUrl)&&0===s&&(this.resetState(n),this.browserUrlTree=n.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(s)}else"replace"===this.canceledNavigationResolution&&(r&&this.resetState(n),this.resetUrlToCurrentUrlTree())}resetState(n){this.routerState=n.currentRouterState,this.currentUrlTree=n.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(n,r,o){const i=new La(n.id,this.serializeUrl(n.extractedUrl),r,o);this.triggerEvent(i),n.resolve(!1)}generateNgRouterState(n,r){return"computed"===this.canceledNavigationResolution?{navigationId:n,\u0275routerPageId:r}:{navigationId:n}}}return e.\u0275fac=function(n){Lu()},e.\u0275prov=x({token:e,factory:function(){return nC()},providedIn:"root"}),e})();function rC(e){return"imperative"!==e}
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
class oC{}let NO=(()=>{class e{constructor(n,r,o,i,s){this.router=n,this.injector=o,this.preloadingStrategy=i,this.loader=s}setUpPreloading(){this.subscription=this.router.events.pipe(Sn(n=>n instanceof mr),Gn(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(n,r){const o=[];for(const l of r){var i,s;l.providers&&!l._injector&&(l._injector=Zs(l.providers,n,`Route: ${l.path}`));const u=null!==(i=l._injector)&&void 0!==i?i:n,c=null!==(s=l._loadedInjector)&&void 0!==s?s:u;if(l.loadChildren&&!l._loadedRoutes&&void 0===l.canLoad||l.loadComponent&&!l._loadedComponent)o.push(this.preloadConfig(u,l));else if(l.children||l._loadedRoutes){var a;o.push(this.processRoutes(c,null!==(a=l.children)&&void 0!==a?a:l._loadedRoutes))}}return be(o).pipe(wr())}preloadConfig(n,r){return this.preloadingStrategy.preload(r,()=>{let o;o=r.loadChildren&&void 0===r.canLoad?this.loader.loadChildren(n,r):A(null);const i=o.pipe(Ve(s=>{var a;return null===s?A(void 0):(r._loadedRoutes=s.routes,r._loadedInjector=s.injector,this.processRoutes(null!==(a=s.injector)&&void 0!==a?a:n,s.routes))}));return r.loadComponent&&!r._loadedComponent?be([i,this.loader.loadComponent(r)]).pipe(wr()):i})}}return e.\u0275fac=function(n){return new(n||e)(M(je),M(Lc),M(Vn),M(oC),M(Xd))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const nf=new I("");let iC=(()=>{class e{constructor(n,r,o={}){this.router=n,this.viewportScroller=r,this.options=o,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},o.scrollPositionRestoration=o.scrollPositionRestoration||"disabled",o.anchorScrolling=o.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(n=>{n instanceof Vd?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=n.navigationTrigger,this.restoredId=n.restoredState?n.restoredState.navigationId:0):n instanceof mr&&(this.lastId=n.id,this.scheduleScrollEvent(n,this.router.parseUrl(n.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(n=>{n instanceof SD&&(n.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(n.position):n.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(n.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(n,r){this.router.triggerEvent(new SD(n,"popstate"===this.lastSource?this.store[this.restoredId]:null,r))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return e.\u0275fac=function(n){Lu()},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function wo(e,t){return{\u0275kind:e,\u0275providers:t}}function rf(e){return[{provide:Jd,multi:!0,useValue:e}]}function aC(){const e=De(Dt);return t=>{var n,r;const o=e.get(ra);if(t!==o.components[0])return;const i=e.get(je),s=e.get(lC);1===e.get(sf)&&i.initialNavigation(),null===(n=e.get(uC,null,N.Optional))||void 0===n||n.setUpPreloading(),null===(r=e.get(nf,null,N.Optional))||void 0===r||r.init(),i.resetRootComponentType(o.componentTypes[0]),s.next(),s.complete()}}const lC=new I("",{factory:()=>new ct}),sf=new I("",{providedIn:"root",factory:()=>1});const uC=new I("");function PO(e){return wo(0,[{provide:uC,useExisting:NO},{provide:oC,useExisting:e}])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const cC=new I("ROUTER_FORROOT_GUARD"),kO=[Jc,{provide:pD,useClass:Rd},{provide:je,useFactory:nC},Pi,{provide:yr,useFactory:function sC(e){return e.routerState.root},deps:[je]},Xd];function LO(){return new Iv("Router",je)}let dC=(()=>{class e{constructor(n){}static forRoot(n,r){return{ngModule:e,providers:[kO,[],rf(n),{provide:cC,useFactory:BO,deps:[[je,new Go,new zo]]},{provide:qa,useValue:r||{}},null!=r&&r.useHash?{provide:fr,useClass:Lx}:{provide:fr,useClass:Jv},{provide:nf,useFactory:()=>{const e=De(je),t=De(nR),n=De(qa);return n.scrollOffset&&t.setOffset(n.scrollOffset),new iC(e,t,n)}},null!=r&&r.preloadingStrategy?PO(r.preloadingStrategy).\u0275providers:[],{provide:Iv,multi:!0,useFactory:LO},null!=r&&r.initialNavigation?HO(r):[],[{provide:fC,useFactory:aC},{provide:Dv,multi:!0,useExisting:fC}]]}}static forChild(n){return{ngModule:e,providers:[rf(n)]}}}return e.\u0275fac=function(n){return new(n||e)(M(cC,8))},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({imports:[zd]}),e})();function BO(e){return"guarded"}function HO(e){return["disabled"===e.initialNavigation?wo(3,[{provide:ea,multi:!0,useFactory:()=>{const t=De(je);return()=>{t.setUpLocationChangeListener()}}},{provide:sf,useValue:2}]).\u0275providers:[],"enabledBlocking"===e.initialNavigation?wo(2,[{provide:sf,useValue:0},{provide:ea,multi:!0,deps:[Dt],useFactory:t=>{const n=t.get(Px,Promise.resolve());let r=!1;return()=>n.then(()=>new Promise(i=>{const s=t.get(je),a=t.get(lC);(function o(i){t.get(je).events.pipe(Sn(a=>a instanceof mr||a instanceof La||a instanceof bD),G(a=>a instanceof mr||a instanceof La&&(0===a.code||1===a.code)&&null),Sn(a=>null!==a),Ii(1)).subscribe(()=>{i()})})(()=>{i(!0),r=!0}),s.afterPreactivation=()=>(i(!0),r||a.closed?A(void 0):a),s.initialNavigation()}))}}]).\u0275providers:[]]}const fC=new I(""),GO=[];let zO=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({imports:[dC.forRoot(GO),dC]}),e})(),WO=(()=>{class e{constructor(n){this.http=n,this.programTypesUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/program-types"}getprogramTypes(){return this.http.get(this.programTypesUrl).pipe(qt(this.handleError))}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),zn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(M(Aa))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Bi=(()=>{class e{constructor(n){this.http=n,this.query="",this.results={isLoading:!0,count:0,totalPosts:0,startIndex:0,endIndex:0,currentPage:0,totalPages:0,types:[]},this.params={selectedCollege:"",collegeFullName:"",selectedProgramType:"",programTypeFullName:"",limit:25,page:1},this.resultsSource=new ct,this.querySource=new ct,this.paramsSource=new ct,this.results$=this.resultsSource.asObservable(),this.query$=this.querySource.asObservable(),this.params$=this.paramsSource.asObservable(),this.searchUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/degrees",this.subscription=this.query$.subscribe(r=>{this.query=r,this.getResults()}),this.subscription=this.params$.subscribe(r=>{this.params=r,this.getResults()})}setQuery(n){this.querySource.next(n)}setProgramType(n,r){this.params.selectedProgramType=n,this.params.programTypeFullName=r,this.paramsSource.next(this.params)}setCollege(n,r){this.params.selectedCollege=n,this.params.collegeFullName=r,this.paramsSource.next(this.params)}getResults(){const n={params:(new In).set("colleges",this.params.selectedCollege).set("limit",this.params.limit).set("page",this.params.page).set("program_types",this.params.selectedProgramType).set("search",this.query)};this.results.isLoading=!0,this.resultsSource.next(this.results),this.http.get(this.searchUrl,n).pipe(qt(this.handleError)).subscribe(r=>{r.isLoading=!1,this.resultsSource.next(r)})}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),zn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(M(Aa))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function qO(e,t){1&e&&(Z(0,"p",4),et(1,"span",5),fe(2," Loading program types"),q())}const af=function(e){return{"font-weight-bold":e}};function QO(e,t){if(1&e){const n=lo();Z(0,"ul",16)(1,"li",17)(2,"a",13),Ie("click",function(){const i=Tr(n).$implicit;return xr(Ae(4).setProgramType(i.slug,i.name,!1))}),fe(3),q()()()}if(2&e){const n=t.$implicit,r=Ae(4);H(2),uo("href","#",n.slug,"",Ln),K("ngClass",Bn(3,af,r.selectedProgramType===n.slug)),H(1),Bt(" ",n.name," ")}}function KO(e,t){if(1&e&&(so(0),Ce(1,QO,4,5,"ul",15),ao()),2&e){const n=Ae().$implicit;H(1),K("ngForOf",n.children)}}function ZO(e,t){if(1&e){const n=lo();so(0),Z(1,"li",8)(2,"a",13),Ie("click",function(){const i=Tr(n).$implicit;return xr(Ae(2).setProgramType(i.slug,i.name,!0))}),fe(3),q()(),Ce(4,KO,2,1,"ng-container",14),ao()}if(2&e){const n=t.$implicit,r=Ae(2);H(2),uo("href","#",n.slug,"",Ln),K("ngClass",Bn(4,af,r.selectedProgramType===n.slug)),H(1),Bt(" ",n.name," "),H(1),K("ngIf",r.selectedParent===n.slug)}}function YO(e,t){if(1&e){const n=lo();Z(0,"div",6)(1,"ul",7)(2,"li",8)(3,"a",9),Ie("click",function(){return Tr(n),xr(Ae().setProgramType("","",!0))}),fe(4," View All "),q()(),Ce(5,ZO,5,6,"ng-container",10),Z(6,"li"),et(7,"hr"),q(),Z(8,"li")(9,"a",11),fe(10," Online Programs "),et(11,"span",12),q()()()()}if(2&e){const n=Ae();H(3),K("ngClass",Bn(2,af,""===n.selectedProgramType)),H(2),K("ngForOf",n.programTypes)}}const JO=function(e){return{"d-block":e}};let hC=(()=>{class e{constructor(n,r){this.programTypeService=n,this.searchService=r,this.isLoading=!0,this.isProgamTypesOpen=!1}ngOnInit(){this.programTypeService.getprogramTypes().subscribe(n=>{this.programTypes=n,this.isLoading=!1})}toggleProgramTypes(){this.isProgamTypesOpen=!this.isProgamTypesOpen}setProgramType(n,r,o){o&&(this.selectedParent=n),this.selectedProgramType=n,this.searchService.setProgramType(n,r)}}return e.\u0275fac=function(n){return new(n||e)(D(WO),D(Bi))},e.\u0275cmp=Rn({type:e,selectors:[["app-program-types"]],decls:4,vars:5,consts:[[1,"card","mb-4","d-none","d-md-block",3,"ngClass"],[1,"card-block"],["class","my-3",4,"ngIf"],["class","degree-search-types",4,"ngIf"],[1,"my-3"],[1,"fa","fa-spinner","fa-spin"],[1,"degree-search-types"],[1,"degree-search-program-types","list-unstyled","mb-0"],[1,"degree-search-type"],["href","#view-all",1,"text-decoration-none","hover-text-underline",3,"ngClass","click"],[4,"ngFor","ngForOf"],["href","/online/programs/",1,"text-decoration-none","hover-text-underline"],["aria-hidden","true",1,"fa","fa-external-link"],[1,"text-decoration-none","hover-text-underline",3,"href","ngClass","click"],[4,"ngIf"],["class","degree-search-type-children list-unstyled ml-3",4,"ngFor","ngForOf"],[1,"degree-search-type-children","list-unstyled","ml-3"],[1,"degree-search-child-type"]],template:function(n,r){1&n&&(Z(0,"div",0)(1,"div",1),Ce(2,qO,3,0,"p",2),Ce(3,YO,12,4,"div",3),q()()),2&n&&(K("ngClass",Bn(3,JO,r.isProgamTypesOpen)),H(2),K("ngIf",r.isLoading),H(1),K("ngIf",r.programTypes&&r.programTypes.length>0))},dependencies:[_a,Da,wi]}),e})(),XO=(()=>{class e{constructor(n){this.http=n,this.collegesUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/colleges"}getColleges(){return this.http.get(this.collegesUrl).pipe(qt(this.handleError))}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),zn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(M(Aa))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function eP(e,t){1&e&&(Z(0,"p",4),et(1,"span",5),fe(2," Loading colleges"),q())}const pC=function(e){return{"font-weight-bold":e}};function tP(e,t){if(1&e){const n=lo();Z(0,"li",8)(1,"a",11),Ie("click",function(){const i=Tr(n).$implicit;return xr(Ae(2).setCollege(i.slug,i.fullname))}),fe(2),q()()}if(2&e){const n=t.$implicit,r=Ae(2);H(1),uo("href","#",n.slug,"",Ln),K("ngClass",Bn(3,pC,r.selectedCollege===n.slug)),H(1),Bt(" ",n.name," ")}}function nP(e,t){if(1&e){const n=lo();Z(0,"div",6)(1,"ul",7)(2,"li",8)(3,"a",9),Ie("click",function(){return Tr(n),xr(Ae().setCollege("",""))}),fe(4," View All "),q()(),Ce(5,tP,3,5,"li",10),q()()}if(2&e){const n=Ae();H(3),K("ngClass",Bn(2,pC,""===n.selectedCollege)),H(2),K("ngForOf",n.colleges)}}const rP=function(e){return{"d-block":e}};let gC=(()=>{class e{constructor(n,r){this.collegeService=n,this.searchService=r,this.isLoading=!0,this.isCollegesOpen=!1}ngOnInit(){this.collegeService.getColleges().subscribe(n=>{this.colleges=n,this.isLoading=!1})}toggleColleges(){this.isCollegesOpen=!this.isCollegesOpen}setCollege(n,r){this.selectedCollege=n,this.searchService.setCollege(n,r)}}return e.\u0275fac=function(n){return new(n||e)(D(XO),D(Bi))},e.\u0275cmp=Rn({type:e,selectors:[["app-colleges"]],decls:4,vars:5,consts:[[1,"card","mb-4","d-none","d-md-block",3,"ngClass"],[1,"card-block"],["class","my-3",4,"ngIf"],["class","degree-search-colleges",4,"ngIf"],[1,"my-3"],[1,"fa","fa-spinner","fa-spin"],[1,"degree-search-colleges"],[1,"degree-search-colleges","list-unstyled","mb-0"],[1,"degree-search-college"],["href","#view-all",1,"text-decoration-none","hover-text-underline",3,"ngClass","click"],["class","degree-search-college",4,"ngFor","ngForOf"],[1,"text-decoration-none","hover-text-underline",3,"href","ngClass","click"]],template:function(n,r){1&n&&(Z(0,"div",0)(1,"div",1),Ce(2,eP,3,0,"p",2),Ce(3,nP,6,4,"div",3),q()()),2&n&&(K("ngClass",Bn(3,rP,r.isCollegesOpen)),H(2),K("ngIf",r.isLoading),H(1),K("ngIf",r.colleges&&r.colleges.length>0))},dependencies:[_a,Da,wi]}),e})(),mC=(()=>{class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}}return e.\u0275fac=function(n){return new(n||e)(D(gn),D(_t))},e.\u0275dir=O({type:e}),e})(),vr=(()=>{class e extends mC{}return e.\u0275fac=function(){let t;return function(r){return(t||(t=function Ue(e){return Nn(()=>{const t=e.prototype.constructor,n=t[cn]||Gl(t),r=Object.prototype;let o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){const i=o[cn]||Gl(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}(e)))(r||e)}}(),e.\u0275dir=O({type:e,features:[te]}),e})();const sn=new I("NgValueAccessor"),sP={provide:sn,useExisting:se(()=>Ya),multi:!0},lP=new I("CompositionEventMode");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ya=(()=>{class e extends mC{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function aP(){const e=nn()?nn().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(n){this.setProperty("value",n??"")}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}}return e.\u0275fac=function(n){return new(n||e)(D(gn),D(_t),D(lP,8))},e.\u0275dir=O({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){1&n&&Ie("input",function(i){return r._handleInput(i.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(i){return r._compositionEnd(i.target.value)})},features:[ce([sP]),te]}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Qe=new I("NgValidators"),Kn=new I("NgAsyncValidators");function IC(e){return null!=e}function AC(e){return si(e)?be(e):e}function TC(e){let t={};return e.forEach(n=>{t=null!=n?{...t,...n}:t}),0===Object.keys(t).length?null:t}function xC(e,t){return t.map(n=>n(e))}function NC(e){return e.map(t=>function dP(e){return!e.validate}(t)?t:n=>t.validate(n))}function lf(e){return null!=e?function RC(e){if(!e)return null;const t=e.filter(IC);return 0==t.length?null:function(n){return TC(xC(n,t))}}(NC(e)):null}function uf(e){return null!=e?function FC(e){if(!e)return null;const t=e.filter(IC);return 0==t.length?null:function(n){return function oP(...e){const t=ah(e),{args:n,keys:r}=Z_(e),o=new ve(i=>{const{length:s}=n;if(!s)return void i.complete();const a=new Array(s);let l=s,u=s;for(let c=0;c<s;c++){let d=!1;Rt(n[c]).subscribe(_e(i,f=>{d||(d=!0,u--),a[c]=f},()=>l--,void 0,()=>{(!l||!d)&&(u||i.next(r?J_(r,a):a),i.complete())}))}});return t?o.pipe(Y_(t)):o}
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
       */(xC(n,t).map(AC)).pipe(G(TC))}}(NC(e)):null}function OC(e,t){return null===e?[t]:Array.isArray(e)?[...e,t]:[e,t]}function PC(e){return e._rawValidators}function kC(e){return e._rawAsyncValidators}function cf(e){return e?Array.isArray(e)?e:[e]:[]}function Xa(e,t){return Array.isArray(e)?e.includes(t):e===t}function LC(e,t){const n=cf(t);return cf(e).forEach(o=>{Xa(n,o)||n.push(o)}),n}function VC(e,t){return cf(t).filter(n=>!Xa(e,n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class $C{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=lf(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=uf(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,n){return!!this.control&&this.control.hasError(t,n)}getError(t,n){return this.control?this.control.getError(t,n):null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ot extends $C{get formDirective(){return null}get path(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Zn extends $C{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class jC{constructor(t){this._cd=t}get isTouched(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.touched)}get isUntouched(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.untouched)}get isPristine(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.pristine)}get isDirty(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.dirty)}get isValid(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.valid)}get isInvalid(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.invalid)}get isPending(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.pending)}get isSubmitted(){var t;return!(null===(t=this._cd)||void 0===t||!t.submitted)}}let BC=(()=>{class e extends jC{constructor(n){super(n)}}return e.\u0275fac=function(n){return new(n||e)(D(Zn,2))},e.\u0275dir=O({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){2&n&&Gs("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[te]}),e})(),HC=(()=>{class e extends jC{constructor(n){super(n)}}return e.\u0275fac=function(n){return new(n||e)(D(ot,10))},e.\u0275dir=O({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){2&n&&Gs("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[te]}),e})();
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
const Hi="VALID",tl="INVALID",Eo="PENDING",Ui="DISABLED";function GC(e){return Array.isArray(e)?lf(e):e||null}function zC(e){return Array.isArray(e)?uf(e):e||null}function nl(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}function Gi(e,t){var n,r;(function yf(e,t){const n=PC(e);null!==t.validator?e.setValidators(OC(n,t.validator)):"function"==typeof n&&e.setValidators([n]);const r=kC(e);null!==t.asyncValidator?e.setAsyncValidators(OC(r,t.asyncValidator)):"function"==typeof r&&e.setAsyncValidators([r]);const o=()=>e.updateValueAndValidity();il(t._rawValidators,o),il(t._rawAsyncValidators,o)})(e,t),t.valueAccessor.writeValue(e.value),e.disabled&&(null===(n=(r=t.valueAccessor).setDisabledState)||void 0===n||n.call(r,!0)),function DP(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&KC(e,t)})}(e,t),function wP(e,t){const n=(r,o)=>{t.valueAccessor.writeValue(r),o&&t.viewToModelUpdate(r)};e.registerOnChange(n),t._registerOnDestroy(()=>{e._unregisterOnChange(n)})}(e,t),function CP(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&KC(e,t),"submit"!==e.updateOn&&e.markAsTouched()})}(e,t),function _P(e,t){if(t.valueAccessor.setDisabledState){const n=r=>{t.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(n),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(n)})}}(e,t)}function ol(e,t,n=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),function sl(e,t){let n=!1;if(null!==e){if(null!==t.validator){const o=PC(e);if(Array.isArray(o)&&o.length>0){const i=o.filter(s=>s!==t.validator);i.length!==o.length&&(n=!0,e.setValidators(i))}}if(null!==t.asyncValidator){const o=kC(e);if(Array.isArray(o)&&o.length>0){const i=o.filter(s=>s!==t.asyncValidator);i.length!==o.length&&(n=!0,e.setAsyncValidators(i))}}}const r=()=>{};return il(t._rawValidators,r),il(t._rawAsyncValidators,r),n}(e,t),e&&(t._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function il(e,t){e.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(t)})}function KC(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function XC(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ew(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}let iw=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=O({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),e})(),aw=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({}),e})();
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
const wf=new I("NgModelWithFormControlWarning"),PP={provide:Zn,useExisting:se(()=>Ef)};let Ef=(()=>{class e extends Zn{constructor(n,r,o,i){super(),this._ngModelWarningConfig=i,this.update=new ye,this._ngModelWarningSent=!1,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=function _f(e,t){if(!t)return null;let n,r,o;return Array.isArray(t),t.forEach(i=>{i.constructor===Ya?n=i:function SP(e){return Object.getPrototypeOf(e.constructor)===vr}(i)?r=i:o=i}),o||r||n||null}(0,o)}set isDisabled(n){}ngOnChanges(n){if(this._isControlChanged(n)){const r=n.form.previousValue;r&&ol(r,this,!1),Gi(this.form,this),this.form.updateValueAndValidity({emitEvent:!1})}(function vf(e,t){if(!e.hasOwnProperty("model"))return!1;const n=e.model;return!!n.isFirstChange()||!Object.is(t,n.currentValue)})(n,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&ol(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_isControlChanged(n){return n.hasOwnProperty("form")}}return e._ngModelWarningSentOnce=!1,e.\u0275fac=function(n){return new(n||e)(D(Qe,10),D(Kn,10),D(sn,10),D(wf,8))},e.\u0275dir=O({type:e,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[ce([PP]),te,St]}),e})(),ek=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({imports:[aw]}),e})(),tk=(()=>{class e{static withConfig(n){return{ngModule:e,providers:[{provide:wf,useValue:n.warnOnNgModelWithFormControl}]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({imports:[ek]}),e})();
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
class rk extends ut{constructor(t,n){super()}schedule(t,n=0){return this}}const al={setInterval(e,t,...n){const{delegate:r}=al;return r?.setInterval?r.setInterval(e,t,...n):setInterval(e,t,...n)},clearInterval(e){const{delegate:t}=al;return(t?.clearInterval||clearInterval)(e)},delegate:void 0},Ew={now:()=>(Ew.delegate||Date).now(),delegate:void 0};class Wi{constructor(t,n=Wi.now){this.schedulerActionCtor=t,this.now=n}schedule(t,n=0,r){return new this.schedulerActionCtor(this,t).schedule(r,n)}}Wi.now=Ew.now;const sk=new class ik extends Wi{constructor(t,n=Wi.now){super(t,n),this.actions=[],this._active=!1}flush(t){const{actions:n}=this;if(this._active)return void n.push(t);let r;this._active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=n.shift());if(this._active=!1,r){for(;t=n.shift();)t.unsubscribe();throw r}}}(class ok extends rk{constructor(t,n){super(t,n),this.scheduler=t,this.work=n,this.pending=!1}schedule(t,n=0){var r;if(this.closed)return this;this.state=t;const o=this.id,i=this.scheduler;return null!=o&&(this.id=this.recycleAsyncId(i,o,n)),this.pending=!0,this.delay=n,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(i,this.id,n),this}requestAsyncId(t,n,r=0){return al.setInterval(t.flush.bind(t,this),r)}recycleAsyncId(t,n,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return n;null!=n&&al.clearInterval(n)}execute(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(t,n);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,n){let o,r=!1;try{this.work(t)}catch(i){r=!0,o=i||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:t,scheduler:n}=this,{actions:r}=n;this.work=this.state=this.scheduler=null,this.pending=!1,Cr(r,this),null!=t&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null,super.unsubscribe()}}});function uk(e,t){return e===t}let ck=(()=>{class e{constructor(n){this.searchService=n}ngOnInit(){this.searchField=new class extends class QC{constructor(t,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=n,this._composedValidatorFn=GC(this._rawValidators),this._composedAsyncValidatorFn=zC(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===Hi}get invalid(){return this.status===tl}get pending(){return this.status==Eo}get disabled(){return this.status===Ui}get enabled(){return this.status!==Ui}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=GC(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=zC(t)}addValidators(t){this.setValidators(LC(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(LC(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(VC(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(VC(t,this._rawAsyncValidators))}hasValidator(t){return Xa(this._rawValidators,t)}hasAsyncValidator(t){return Xa(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=Eo,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const n=this._parentMarkedDirty(t.onlySelf);this.status=Ui,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:n}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const n=this._parentMarkedDirty(t.onlySelf);this.status=Hi,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:n}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Hi||this.status===Eo)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ui:Hi}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=Eo,this._hasOwnPendingAsyncValidator=!0;const n=AC(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,n={}){this.errors=t,this._updateControlsErrors(!1!==n.emitEvent)}get(t){let n=t;return null==n||(Array.isArray(n)||(n=n.split(".")),0===n.length)?null:n.reduce((r,o)=>r&&r._find(o),this)}getError(t,n){const r=n?this.get(n):this;return r&&r.errors?r.errors[t]:null}hasError(t,n){return!!this.getError(t,n)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new ye,this.statusChanges=new ye}_calculateStatus(){return this._allControlsDisabled()?Ui:this.errors?tl:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Eo)?Eo:this._anyControlsHaveStatus(tl)?tl:Hi}_anyControlsHaveStatus(t){return this._anyControls(n=>n.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){nl(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */{constructor(t=null,n,r){super(function pf(e){return(nl(e)?e.validators:e)||null}(n),function gf(e,t){return(nl(t)?t.asyncValidators:e)||null}(r,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),nl(n)&&(n.nonNullable||n.initialValueIsDefault)&&(this.defaultValue=ew(t)?t.value:t)}setValue(t,n={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==n.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==n.emitViewToModelChange)),this.updateValueAndValidity(n)}patchValue(t,n={}){this.setValue(t,n)}reset(t=this.defaultValue,n={}){this._applyFormState(t),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){XC(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){XC(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){ew(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}},this.searchField.valueChanges.pipe(function ak(e,t=sk){return Ee((n,r)=>{let o=null,i=null,s=null;const a=()=>{if(o){o.unsubscribe(),o=null;const u=i;i=null,r.next(u)}};function l(){const u=s+e,c=t.now();if(c<u)return o=this.schedule(void 0,u-c),void r.add(o);a()}n.subscribe(_e(r,u=>{i=u,s=t.now(),o||(o=t.schedule(l,e),r.add(o))},()=>{a(),r.complete()},void 0,()=>{i=o=null}))})}(600),function lk(e,t=xn){return e=e??uk,Ee((n,r)=>{let o,i=!0;n.subscribe(_e(r,s=>{const a=t(s);(i||!e(o,a))&&(i=!1,o=a,r.next(s))}))})}()).subscribe(n=>{n&&n.length>2&&this.searchService.setQuery(n)})}}return e.\u0275fac=function(n){return new(n||e)(D(Bi))},e.\u0275cmp=Rn({type:e,selectors:[["app-search-form"]],decls:7,vars:1,consts:[[1,"jumbotron","jumbotron-fluid","bg-primary","py-3"],[1,"container"],["id","degree-search-form","role","search","placeholder","Search for a degree..."],[1,"search-form-inner"],["for","degree-search-query",1,"sr-only"],["id","degree-search-query","name","degree-search-query","type","search","autocomplete","off","placeholder","Search for a degree...",1,"form-control",3,"formControl"]],template:function(n,r){1&n&&(Z(0,"div",0)(1,"div",1)(2,"form",2)(3,"div",3)(4,"label",4),fe(5,"Search Degrees"),q(),et(6,"input",5),q()()()()),2&n&&(H(6),K("formControl",r.searchField))},dependencies:[iw,Ya,BC,HC,Ef]}),e})();function dk(e,t){1&e&&(Z(0,"p"),fe(1,"No degrees found."),q())}function fk(e,t){if(1&e&&(Z(0,"span"),fe(1),q()),2&e){const n=Ae(3);H(1),Bt("at the ",n.params.collegeFullName,"")}}function hk(e,t){if(1&e&&(Z(0,"li",9)(1,"a",5)(2,"span",10),fe(3),q()()()),2&e){const n=t.$implicit;H(1),Us("href",n.url,Ln),H(2),dc(n.nameShort)}}function pk(e,t){if(1&e&&(Z(0,"ul",7),Ce(1,hk,4,2,"li",8),q()),2&e){const n=Ae().$implicit;H(1),K("ngForOf",n.subplans)}}function gk(e,t){if(1&e&&(Z(0,"li")(1,"a",5),fe(2),q(),Ce(3,pk,2,1,"ul",6),q()),2&e){const n=t.$implicit;H(1),Us("href",n.url,Ln),H(1),Bt(" ",n.title," "),H(1),K("ngIf",n.subplans)}}function mk(e,t){if(1&e&&(Z(0,"ul",4),Ce(1,gk,4,3,"li",1),q()),2&e){const n=Ae().$implicit;H(1),K("ngForOf",n.degrees)}}function yk(e,t){if(1&e&&(so(0),Z(1,"h2",2),fe(2),Ce(3,fk,2,1,"span",0),q(),Ce(4,mk,2,1,"ul",3),ao()),2&e){const n=t.$implicit,r=Ae(2);H(2),Bt("",n.alias,"s "),H(1),K("ngIf",r.params&&""!=r.params.collegeFullName),H(1),K("ngIf",n.degrees)}}function vk(e,t){if(1&e&&(Z(0,"div"),Ce(1,yk,5,3,"ng-container",1),q()),2&e){const n=Ae();H(1),K("ngForOf",n.results.types)}}let _k=(()=>{class e{constructor(n){this.searchService=n,this.subscription=this.searchService.results$.subscribe(r=>{this.results=r}),this.subscription=this.searchService.params$.subscribe(r=>{this.params=r})}ngOnInit(){this.searchService.getResults()}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(D(Bi))},e.\u0275cmp=Rn({type:e,selectors:[["app-search-results"]],decls:2,vars:2,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"degree-search-group-title"],["class","degree-search-results-container list-unstyled",4,"ngIf"],[1,"degree-search-results-container","list-unstyled"],[1,"degree-title-wrap",3,"href"],["class","degree-search-subplan-results-container list-unstyled",4,"ngIf"],[1,"degree-search-subplan-results-container","list-unstyled"],["class","search-result-subplan",4,"ngFor","ngForOf"],[1,"search-result-subplan"],[1,"degree-title"]],template:function(n,r){1&n&&(Ce(0,dk,2,0,"p",0),Ce(1,vk,2,1,"div",0)),2&n&&(K("ngIf",r.results&&0===r.results.endIndex&&!1===r.results.isLoading),H(1),K("ngIf",r.results))},dependencies:[Da,wi]}),e})();function Dk(e,t){1&e&&(Z(0,"p",12),et(1,"span",13),fe(2," Loading degrees"),q())}function Ck(e,t){if(1&e&&(Z(0,"span"),fe(1),q()),2&e){const n=Ae(2);H(1),Bt(" in ",n.params.programTypeFullName,"")}}function wk(e,t){if(1&e&&(Z(0,"span"),fe(1),q()),2&e){const n=Ae(2);H(1),Bt(" at the ",n.params.collegeFullName,"")}}function Ek(e,t){if(1&e&&(Z(0,"p",14),fe(1),Ce(2,Ck,2,1,"span",15),Ce(3,wk,2,1,"span",15),fe(4," at UCF. "),q()),2&e){const n=Ae();H(1),fc(" Showing ",n.results.startIndex," through ",n.results.endIndex," of ",n.results.totalPosts," degrees "),H(1),K("ngIf",n.params&&""!=n.params.programTypeFullName),H(1),K("ngIf",n.params&&""!=n.params.collegeFullName)}}let bk=(()=>{class e{constructor(n){this.searchService=n,this.subscription=this.searchService.results$.subscribe(r=>{this.results=r}),this.subscription=this.searchService.params$.subscribe(r=>{this.params=r})}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(D(Bi))},e.\u0275cmp=Rn({type:e,selectors:[["app-root"]],viewQuery:function(n,r){if(1&n&&(Tc(hC,5),Tc(gC,5)),2&n){let o;gi(o=mi())&&(r.programTypesComponent=o.first),gi(o=mi())&&(r.collegesComponent=o.first)}},decls:20,vars:4,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],["class","my-3",4,"ngIf"],["class","text-muted my-3 ng-binding ng-scope","aria-live","polite",4,"ngIf"],[1,"row","mt-4"],[1,"col-md-4","push-md-8","col-lg-3","push-lg-9","mb-4"],[1,"h5","heading-underline","visible-sm","mt-3","mb-4"],[1,"h5","py-2",3,"click"],["aria-hidden","true",1,"fa","d-md-none",3,"ngClass"],[1,"h5","pb-2","mt-4",3,"click"],[1,"col-md-8","pull-md-4","col-lg-9","pull-lg-3"],[1,"my-3"],[1,"fa","fa-spinner","fa-spin"],["aria-live","polite",1,"text-muted","my-3","ng-binding","ng-scope"],[4,"ngIf"]],template:function(n,r){1&n&&(et(0,"app-search-form"),Z(1,"div",0)(2,"div",1)(3,"div",2),Ce(4,Dk,3,0,"p",3),Ce(5,Ek,5,5,"p",4),q()(),Z(6,"div",5)(7,"div",6)(8,"h2",7),fe(9,"View Degrees By"),q(),Z(10,"h3",8),Ie("click",function(){return null==r.programTypesComponent?null:r.programTypesComponent.toggleProgramTypes()}),fe(11," Program Types "),et(12,"span",9),q(),et(13,"app-program-types"),Z(14,"h3",10),Ie("click",function(){return null==r.collegesComponent?null:r.collegesComponent.toggleColleges()}),fe(15," Colleges "),et(16,"span",9),q(),et(17,"app-colleges"),q(),Z(18,"div",11),et(19,"app-search-results"),q()()()),2&n&&(H(4),K("ngIf",r.results&&r.results.isLoading),H(1),K("ngIf",r.results&&r.results.endIndex>0),H(7),K("ngClass",null!=r.programTypesComponent&&r.programTypesComponent.isProgamTypesOpen?"fa-arrow-circle-up":"fa-arrow-circle-down"),H(4),K("ngClass",null!=r.collegesComponent&&r.collegesComponent.isCollegesOpen?"fa-arrow-circle-up":"fa-arrow-circle-down"))},dependencies:[_a,wi,ck,_k,gC,hC]}),e})(),Sk=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e,bootstrap:[bk]}),e.\u0275inj=ht({imports:[GR,tk,hF,zO]}),e})();(function px(){Lv=!1}
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
       */)(),UR().bootstrapModule(Sk).catch(e=>console.error(e))}},ie=>{ie(ie.s=316)}]);