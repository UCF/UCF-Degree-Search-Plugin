"use strict";(self.webpackChunkDegree_Search=self.webpackChunkDegree_Search||[]).push([[179],{659:()=>{function le(e){return"function"==typeof e}function Ao(e){const n=e(r=>{Error.call(r),r.stack=(new Error).stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}const Yi=Ao(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:\n${n.map((r,o)=>`${o+1}) ${r.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=n});function Ar(e,t){if(e){const n=e.indexOf(t);0<=n&&e.splice(n,1)}}class ct{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;const{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(const i of n)i.remove(this);else n.remove(this);const{initialTeardown:r}=this;if(le(r))try{r()}catch(i){t=i instanceof Yi?i.errors:[i]}const{_finalizers:o}=this;if(o){this._finalizers=null;for(const i of o)try{$f(i)}catch(s){t=t??[],s instanceof Yi?t=[...t,...s.errors]:t.push(s)}}if(t)throw new Yi(t)}}add(t){var n;if(t&&t!==this)if(this.closed)$f(t);else{if(t instanceof ct){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(t)}}_hasParent(t){const{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){const{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){const{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&Ar(n,t)}remove(t){const{_finalizers:n}=this;n&&Ar(n,t),t instanceof ct&&t._removeParent(this)}}ct.EMPTY=(()=>{const e=new ct;return e.closed=!0,e})();const Lf=ct.EMPTY;function Vf(e){return e instanceof ct||e&&"closed"in e&&le(e.remove)&&le(e.add)&&le(e.unsubscribe)}function $f(e){le(e)?e():e.unsubscribe()}const rr={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Ji={setTimeout(e,t,...n){const{delegate:r}=Ji;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){const{delegate:t}=Ji;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function jf(e){Ji.setTimeout(()=>{const{onUnhandledError:t}=rr;if(!t)throw e;t(e)})}function Bf(){}const ww=cl("C",void 0,void 0);function cl(e,t,n){return{kind:e,value:t,error:n}}let or=null;function Xi(e){if(rr.useDeprecatedSynchronousErrorHandling){const t=!or;if(t&&(or={errorThrown:!1,error:null}),e(),t){const{errorThrown:n,error:r}=or;if(or=null,n)throw r}}else e()}class dl extends ct{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,Vf(t)&&t.add(this)):this.destination=Tw}static create(t,n,r){return new To(t,n,r)}next(t){this.isStopped?hl(function bw(e){return cl("N",e,void 0)}(t),this):this._next(t)}error(t){this.isStopped?hl(function Ew(e){return cl("E",void 0,e)}(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?hl(ww,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const Mw=Function.prototype.bind;function fl(e,t){return Mw.call(e,t)}class Iw{constructor(t){this.partialObserver=t}next(t){const{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){es(r)}}error(t){const{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){es(r)}else es(t)}complete(){const{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){es(n)}}}class To extends dl{constructor(t,n,r){let o;if(super(),le(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&rr.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&fl(t.next,i),error:t.error&&fl(t.error,i),complete:t.complete&&fl(t.complete,i)}):o=t}this.destination=new Iw(o)}}function es(e){rr.useDeprecatedSynchronousErrorHandling?function Sw(e){rr.useDeprecatedSynchronousErrorHandling&&or&&(or.errorThrown=!0,or.error=e)}(e):jf(e)}function hl(e,t){const{onStoppedNotification:n}=rr;n&&Ji.setTimeout(()=>n(e,t))}const Tw={closed:!0,next:Bf,error:function Aw(e){throw e},complete:Bf},pl="function"==typeof Symbol&&Symbol.observable||"@@observable";function $n(e){return e}function Hf(e){return 0===e.length?$n:1===e.length?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}let Ee=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){const r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){const i=function Nw(e){return e&&e instanceof dl||function Rw(e){return e&&le(e.next)&&le(e.error)&&le(e.complete)}(e)&&Vf(e)}(n)?n:new To(n,r,o);return Xi(()=>{const{operator:s,source:a}=this;i.add(s?s.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return new(r=Uf(r))((o,i)=>{const s=new To({next:a=>{try{n(a)}catch(l){i(l),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return null===(r=this.source)||void 0===r?void 0:r.subscribe(n)}[pl](){return this}pipe(...n){return Hf(n)(this)}toPromise(n){return new(n=Uf(n))((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return e.create=t=>new e(t),e})();function Uf(e){var t;return null!==(t=e??rr.Promise)&&void 0!==t?t:Promise}const Fw=Ao(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});let Ze=(()=>{class e extends Ee{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){const r=new Gf(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new Fw}next(n){Xi(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const r of this.currentObservers)r.next(n)}})}error(n){Xi(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;const{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){Xi(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return(null===(n=this.observers)||void 0===n?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){const{hasError:r,isStopped:o,observers:i}=this;return r||o?Lf:(this.currentObservers=null,i.push(n),new ct(()=>{this.currentObservers=null,Ar(i,n)}))}_checkFinalizedStatuses(n){const{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){const n=new Ee;return n.source=this,n}}return e.create=(t,n)=>new Gf(t,n),e})();class Gf extends Ze{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.next)||void 0===r||r.call(n,t)}error(t){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.error)||void 0===r||r.call(n,t)}complete(){var t,n;null===(n=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===n||n.call(t)}_subscribe(t){var n,r;return null!==(r=null===(n=this.source)||void 0===n?void 0:n.subscribe(t))&&void 0!==r?r:Lf}}function zf(e){return le(e?.lift)}function Ie(e){return t=>{if(zf(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function be(e,t,n,r,o){return new Pw(e,t,n,r,o)}class Pw extends dl{constructor(t,n,r,o,i,s){super(t),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(l){t.error(l)}}:super._next,this._error=o?function(a){try{o(a)}catch(l){t.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){t.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:n}=this;super.unsubscribe(),!n&&(null===(t=this.onFinalize)||void 0===t||t.call(this))}}}function q(e,t){return Ie((n,r)=>{let o=0;n.subscribe(be(r,i=>{r.next(e.call(t,i,o++))}))})}function ir(e){return this instanceof ir?(this.v=e,this):new ir(e)}function Lw(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,r=n.apply(e,t||[]),i=[];return o={},s("next"),s("throw"),s("return"),o[Symbol.asyncIterator]=function(){return this},o;function s(f){r[f]&&(o[f]=function(h){return new Promise(function(p,g){i.push([f,h,p,g])>1||a(f,h)})})}function a(f,h){try{!function l(f){f.value instanceof ir?Promise.resolve(f.value.v).then(u,c):d(i[0][2],f)}(r[f](h))}catch(p){d(i[0][3],p)}}function u(f){a("next",f)}function c(f){a("throw",f)}function d(f,h){f(h),i.shift(),i.length&&a(i[0][0],i[0][1])}}function Vw(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,t=e[Symbol.asyncIterator];return t?t.call(e):(e=function Qf(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(e),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(a,l){!function o(i,s,a,l){Promise.resolve(l).then(function(u){i({value:u,done:a})},s)}(a,l,(s=e[i](s)).done,s.value)})}}}const Kf=e=>e&&"number"==typeof e.length&&"function"!=typeof e;function Zf(e){return le(e?.then)}function Yf(e){return le(e[pl])}function Jf(e){return Symbol.asyncIterator&&le(e?.[Symbol.asyncIterator])}function Xf(e){return new TypeError(`You provided ${null!==e&&"object"==typeof e?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}const eh=function jw(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}();function th(e){return le(e?.[eh])}function nh(e){return Lw(this,arguments,function*(){const n=e.getReader();try{for(;;){const{value:r,done:o}=yield ir(n.read());if(o)return yield ir(void 0);yield yield ir(r)}}finally{n.releaseLock()}})}function rh(e){return le(e?.getReader)}function Nt(e){if(e instanceof Ee)return e;if(null!=e){if(Yf(e))return function Bw(e){return new Ee(t=>{const n=e[pl]();if(le(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(e);if(Kf(e))return function Hw(e){return new Ee(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}(e);if(Zf(e))return function Uw(e){return new Ee(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,jf)})}(e);if(Jf(e))return oh(e);if(th(e))return function Gw(e){return new Ee(t=>{for(const n of e)if(t.next(n),t.closed)return;t.complete()})}(e);if(rh(e))return function zw(e){return oh(nh(e))}(e)}throw Xf(e)}function oh(e){return new Ee(t=>{(function Ww(e,t){var n,r,o,i;return function Ow(e,t,n,r){return new(n||(n=Promise))(function(i,s){function a(c){try{u(r.next(c))}catch(d){s(d)}}function l(c){try{u(r.throw(c))}catch(d){s(d)}}function u(c){c.done?i(c.value):function o(i){return i instanceof n?i:new n(function(s){s(i)})}(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}(this,void 0,void 0,function*(){try{for(n=Vw(e);!(r=yield n.next()).done;)if(t.next(r.value),t.closed)return}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}t.complete()})})(e,t).catch(n=>t.error(n))})}function fn(e,t,n,r=0,o=!1){const i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function je(e,t,n=1/0){return le(t)?je((r,o)=>q((i,s)=>t(r,i,o,s))(Nt(e(r,o))),n):("number"==typeof t&&(n=t),Ie((r,o)=>function qw(e,t,n,r,o,i,s,a){const l=[];let u=0,c=0,d=!1;const f=()=>{d&&!l.length&&!u&&t.complete()},h=g=>u<r?p(g):l.push(g),p=g=>{i&&t.next(g),u++;let _=!1;Nt(n(g,c++)).subscribe(be(t,y=>{o?.(y),i?h(y):t.next(y)},()=>{_=!0},void 0,()=>{if(_)try{for(u--;l.length&&u<r;){const y=l.shift();s?fn(t,s,()=>p(y)):p(y)}f()}catch(y){t.error(y)}}))};return e.subscribe(be(t,h,()=>{d=!0,f()})),()=>{a?.()}}(r,o,e,n)))}function Tr(e=1/0){return je($n,e)}const hn=new Ee(e=>e.complete());function ml(e){return e[e.length-1]}function ih(e){return le(ml(e))?e.pop():void 0}function xo(e){return function Kw(e){return e&&le(e.schedule)}(ml(e))?e.pop():void 0}function sh(e,t=0){return Ie((n,r)=>{n.subscribe(be(r,o=>fn(r,e,()=>r.next(o),t),()=>fn(r,e,()=>r.complete(),t),o=>fn(r,e,()=>r.error(o),t)))})}function ah(e,t=0){return Ie((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function lh(e,t){if(!e)throw new Error("Iterable cannot be null");return new Ee(n=>{fn(n,t,()=>{const r=e[Symbol.asyncIterator]();fn(n,t,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function Ae(e,t){return t?function nE(e,t){if(null!=e){if(Yf(e))return function Yw(e,t){return Nt(e).pipe(ah(t),sh(t))}(e,t);if(Kf(e))return function Xw(e,t){return new Ee(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}(e,t);if(Zf(e))return function Jw(e,t){return Nt(e).pipe(ah(t),sh(t))}(e,t);if(Jf(e))return lh(e,t);if(th(e))return function eE(e,t){return new Ee(n=>{let r;return fn(n,t,()=>{r=e[eh](),fn(n,t,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){return void n.error(s)}i?n.complete():n.next(o)},0,!0)}),()=>le(r?.return)&&r.return()})}(e,t);if(rh(e))return function tE(e,t){return lh(nh(e),t)}(e,t)}throw Xf(e)}(e,t):Nt(e)}function yl(e,t,...n){if(!0===t)return void e();if(!1===t)return;const r=new To({next:()=>{r.unsubscribe(),e()}});return t(...n).subscribe(r)}
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
       */function ie(e){for(let t in e)if(e[t]===ie)return t;throw Error("Could not find renamed property on target object.")}function vl(e,t){for(const n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function se(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(se).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function _l(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const iE=ie({__forward_ref__:ie});function ue(e){return e.__forward_ref__=ue,e.toString=function(){return se(this())},e}function k(e){return Dl(e)?e():e}function Dl(e){return"function"==typeof e&&e.hasOwnProperty(iE)&&e.__forward_ref__===ue}
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
class C extends Error{constructor(t,n){super(function ts(e,t){return`NG0${Math.abs(e)}${t?": "+t.trim():""}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t,n)),this.code=t}}function $(e){return"string"==typeof e?e:null==e?"":String(e)}function ns(e,t){throw new C(-201,!1)}
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
function F(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function ht(e){return{providers:e.providers||[],imports:e.imports||[]}}function rs(e){return uh(e,os)||uh(e,dh)}function uh(e,t){return e.hasOwnProperty(t)?e[t]:null}function ch(e){return e&&(e.hasOwnProperty(Cl)||e.hasOwnProperty(pE))?e[Cl]:null}const os=ie({\u0275prov:ie}),Cl=ie({\u0275inj:ie}),dh=ie({ngInjectableDef:ie}),pE=ie({ngInjectorDef:ie});
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
       */let wl;function wt(e){const t=wl;return wl=e,t}function fh(e,t,n){const r=rs(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&P.Optional?null:void 0!==t?t:void ns(se(e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function jn(e){return{toString:e}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Ft=(()=>((Ft=Ft||{})[Ft.OnPush=0]="OnPush",Ft[Ft.Default=1]="Default",Ft))(),Yt=(()=>{return(e=Yt||(Yt={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",Yt;var e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ae=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),xr={},X=[],is=ie({\u0275cmp:ie}),El=ie({\u0275dir:ie}),bl=ie({\u0275pipe:ie}),hh=ie({\u0275mod:ie}),gn=ie({\u0275fac:ie}),Ro=ie({__NG_ELEMENT_ID__:ie});
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
let mE=0;function Pt(e){return jn(()=>{const n=!0===e.standalone,r={},o={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===Ft.OnPush,directiveDefs:null,pipeDefs:null,standalone:n,dependencies:n&&e.dependencies||null,getStandaloneInjector:null,selectors:e.selectors||X,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||Yt.Emulated,id:"c"+mE++,styles:e.styles||X,_:null,setInput:null,schemas:e.schemas||null,tView:null},i=e.dependencies,s=e.features;return o.inputs=mh(e.inputs,r),o.outputs=mh(e.outputs),s&&s.forEach(a=>a(o)),o.directiveDefs=i?()=>("function"==typeof i?i():i).map(ph).filter(gh):null,o.pipeDefs=i?()=>("function"==typeof i?i():i).map(Je).filter(gh):null,o})}function ph(e){return ne(e)||Ye(e)}function gh(e){return null!==e}function Et(e){return jn(()=>({type:e.type,bootstrap:e.bootstrap||X,declarations:e.declarations||X,imports:e.imports||X,exports:e.exports||X,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function mh(e,t){if(null==e)return xr;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const L=Pt;function ne(e){return e[is]||null}function Ye(e){return e[El]||null}function Je(e){return e[bl]||null}function pt(e,t){const n=e[hh]||null;if(!n&&!0===t)throw new Error(`Type ${se(e)} does not have '\u0275mod' property.`);return n}
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
function at(e){return Array.isArray(e)&&"object"==typeof e[1]}function kt(e){return Array.isArray(e)&&!0===e[1]}function Il(e){return 0!=(8&e.flags)}function us(e){return 2==(2&e.flags)}function cs(e){return 1==(1&e.flags)}function Lt(e){return null!==e.template}function wE(e){return 0!=(256&e[2])}
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
function cr(e,t){return e.hasOwnProperty(gn)?e[gn]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class SE{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function St(){return _h}function _h(e){return e.type.prototype.ngOnChanges&&(e.setInput=IE),ME}function ME(){const e=Ch(this),t=e?.current;if(t){const n=e.previous;if(n===xr)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function IE(e,t,n,r){const o=Ch(e)||function AE(e,t){return e[Dh]=t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,{previous:xr,current:null}),i=o.current||(o.current={}),s=o.previous,a=this.declaredInputs[n],l=s[a];i[a]=new SE(l&&l.currentValue,t,s===xr),e[r]=t}St.ngInherit=!0;const Dh="__ngSimpleChanges__";function Ch(e){return e[Dh]||null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Te(e){for(;Array.isArray(e);)e=e[0];return e}function ds(e,t){return Te(t[e])}function It(e,t){return Te(t[e.index])}function Nl(e,t){return e.data[t]}function mt(e,t){const n=t[e];return at(n)?n:n[0]}function fs(e){return 64==(64&e[2])}function Bn(e,t){return null==t?null:e[t]}function wh(e){e[18]=0}function Fl(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const V={lFrame:Nh(null),bindingsEnabled:!0};function bh(){return V.bindingsEnabled}function D(){return V.lFrame.lView}function Y(){return V.lFrame.tView}function Jt(e){return V.lFrame.contextLView=e,e[8]}function Xt(e){return V.lFrame.contextLView=null,e}function Pe(){let e=Sh();for(;null!==e&&64===e.type;)e=e.parent;return e}function Sh(){return V.lFrame.currentTNode}function en(e,t){const n=V.lFrame;n.currentTNode=e,n.isParent=t}function Pl(){return V.lFrame.isParent}function Ol(){V.lFrame.isParent=!1}function kr(){return V.lFrame.bindingIndex++}function UE(e,t){const n=V.lFrame;n.bindingIndex=n.bindingRootIndex=e,kl(t)}function kl(e){V.lFrame.currentDirectiveIndex=e}function Th(){return V.lFrame.currentQueryIndex}function Vl(e){V.lFrame.currentQueryIndex=e}function zE(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function xh(e,t,n){if(n&P.SkipSelf){let o=t,i=e;for(;!(o=o.parent,null!==o||n&P.Host||(o=zE(i),null===o||(i=i[15],10&o.type))););if(null===o)return!1;t=o,e=i}const r=V.lFrame=Rh();return r.currentTNode=t,r.lView=e,!0}function $l(e){const t=Rh(),n=e[1];V.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function Rh(){const e=V.lFrame,t=null===e?null:e.child;return null===t?Nh(e):t}function Nh(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function Fh(){const e=V.lFrame;return V.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const Ph=Fh;function jl(){const e=Fh();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function et(){return V.lFrame.selectedIndex}function Hn(e){V.lFrame.selectedIndex=e}function De(){const e=V.lFrame;return Nl(e.tView,e.selectedIndex)}function hs(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:u,ngOnDestroy:c}=i;s&&(e.contentHooks||(e.contentHooks=[])).push(-n,s),a&&((e.contentHooks||(e.contentHooks=[])).push(n,a),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,a)),l&&(e.viewHooks||(e.viewHooks=[])).push(-n,l),u&&((e.viewHooks||(e.viewHooks=[])).push(n,u),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,u)),null!=c&&(e.destroyHooks||(e.destroyHooks=[])).push(n,c)}}function ps(e,t,n){Oh(e,t,3,n)}function gs(e,t,n,r){(3&e[2])===n&&Oh(e,t,n,r)}function Bl(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function Oh(e,t,n,r){const i=r??-1,s=t.length-1;let a=0;for(let l=void 0!==r?65535&e[18]:0;l<s;l++)if("number"==typeof t[l+1]){if(a=t[l],null!=r&&a>=r)break}else t[l]<0&&(e[18]+=65536),(a<i||-1==i)&&(eb(e,n,t,l),e[18]=(4294901760&e[18])+l+2),l++}function eb(e,t,n,r){const o=n[r]<0,i=n[r+1],a=e[o?-n[r]:n[r]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{i.call(a)}finally{}}}else try{i.call(a)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Lo{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function ms(e,t,n){let r=0;for(;r<n.length;){const o=n[r];if("number"==typeof o){if(0!==o)break;r++;const i=n[r++],s=n[r++],a=n[r++];e.setAttribute(t,s,a,i)}else{const i=o,s=n[++r];Lh(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function kh(e){return 3===e||4===e||6===e}function Lh(e){return 64===e.charCodeAt(0)}function ys(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||Vh(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function Vh(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const a=e[i++];if("number"==typeof a){if(a===t){s=-1;break}if(a>t){s=i-1;break}}}for(;i<e.length;){const a=e[i];if("number"==typeof a)break;if(a===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $h(e){return-1!==e}function Lr(e){return 32767&e}function Vr(e,t){let n=function ib(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ul=!0;function vs(e){const t=Ul;return Ul=e,t}let sb=0;const tn={};function $o(e,t){const n=zl(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,Gl(r.data,e),Gl(t,null),Gl(r.blueprint,null));const o=_s(e,t),i=e.injectorIndex;if($h(o)){const s=Lr(o),a=Vr(o,t),l=a[1].data;for(let u=0;u<8;u++)t[i+u]=a[s+u]|l[s+u]}return t[i+8]=o,i}function Gl(e,t){e.push(0,0,0,0,0,0,0,0,t)}function zl(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function _s(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){if(r=Qh(o),null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function Ds(e,t,n){!function ab(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Ro)&&(r=n[Ro]),null==r&&(r=n[Ro]=sb++);const o=255&r;t.data[e+(o>>5)]|=1<<o}(e,t,n)}function Hh(e,t,n){if(n&P.Optional||void 0!==e)return e;ns()}function Uh(e,t,n,r){if(n&P.Optional&&void 0===r&&(r=null),0==(n&(P.Self|P.Host))){const o=e[9],i=wt(void 0);try{return o?o.get(t,r,n&P.Optional):fh(t,r,n&P.Optional)}finally{wt(i)}}return Hh(r,0,n)}function Gh(e,t,n,r=P.Default,o){if(null!==e){if(1024&t[2]){const s=function fb(e,t,n,r,o){let i=e,s=t;for(;null!==i&&null!==s&&1024&s[2]&&!(256&s[2]);){const a=zh(i,s,n,r|P.Self,tn);if(a!==tn)return a;let l=i.parent;if(!l){const u=s[21];if(u){const c=u.get(n,tn,r);if(c!==tn)return c}l=Qh(s),s=s[15]}i=l}return o}(e,t,n,r,tn);if(s!==tn)return s}const i=zh(e,t,n,r,tn);if(i!==tn)return i}return Uh(t,n,r,o)}function zh(e,t,n,r,o){const i=function cb(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(Ro)?e[Ro]:void 0;return"number"==typeof t?t>=0?255&t:db:t}(n);if("function"==typeof i){if(!xh(t,e,r))return r&P.Host?Hh(o,0,r):Uh(t,n,r,o);try{const s=i(r);if(null!=s||r&P.Optional)return s;ns()}finally{Ph()}}else if("number"==typeof i){let s=null,a=zl(e,t),l=-1,u=r&P.Host?t[16][6]:null;for((-1===a||r&P.SkipSelf)&&(l=-1===a?_s(e,t):t[a+8],-1!==l&&qh(r,!1)?(s=t[1],a=Lr(l),t=Vr(l,t)):a=-1);-1!==a;){const c=t[1];if(Wh(i,a,c.data)){const d=ub(a,t,n,s,r,u);if(d!==tn)return d}l=t[a+8],-1!==l&&qh(r,t[1].data[a+8]===u)&&Wh(i,a,t)?(s=c,a=Lr(l),t=Vr(l,t)):a=-1}}return o}function ub(e,t,n,r,o,i){const s=t[1],a=s.data[e+8],c=Cs(a,s,n,null==r?us(a)&&Ul:r!=s&&0!=(3&a.type),o&P.Host&&i===a);return null!==c?jo(t,s,c,a):tn}function Cs(e,t,n,r,o){const i=e.providerIndexes,s=t.data,a=1048575&i,l=e.directiveStart,c=i>>20,f=o?a+c:e.directiveEnd;for(let h=r?a:a+c;h<f;h++){const p=s[h];if(h<l&&n===p||h>=l&&p.type===n)return h}if(o){const h=s[l];if(h&&Lt(h)&&h.type===n)return l}return null}function jo(e,t,n,r){let o=e[n];const i=t.data;if(function tb(e){return e instanceof Lo}(o)){const s=o;s.resolving&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function sE(e,t){const n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new C(-200,`Circular dependency in DI detected for ${e}${n}`)}(function J(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():$(e)}(i[n]));const a=vs(s.canSeeViewProviders);s.resolving=!0;const l=s.injectImpl?wt(s.injectImpl):null;xh(e,r,P.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function XE(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const s=_h(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==l&&wt(l),vs(a),s.resolving=!1,Ph()}}return o}function Wh(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function qh(e,t){return!(e&P.Self||e&P.Host&&t)}class $r{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return Gh(this._tNode,this._lView,t,r,n)}}function db(){return new $r(Pe(),D())}function Wl(e){return Dl(e)?()=>{const t=Wl(k(e));return t&&t()}:cr(e)}function Qh(e){const t=e[1],n=t.type;return 2===n?t.declTNode:1===n?e[6]:null}
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
const Br="__parameters__";function Ur(e,t,n){return jn(()=>{const r=function ql(e){return function(...n){if(e){const r=e(...n);for(const o in r)this[o]=r[o]}}}(t);function o(...i){if(this instanceof o)return r.apply(this,i),this;const s=new o(...i);return a.annotation=s,a;function a(l,u,c){const d=l.hasOwnProperty(Br)?l[Br]:Object.defineProperty(l,Br,{value:[]})[Br];for(;d.length<=c;)d.push(null);return(d[c]=d[c]||[]).push(s),l}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}
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
       */function yt(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),yt(r,t)):t!==e&&t.push(r)}return t}function vn(e,t){e.forEach(n=>Array.isArray(n)?vn(n,t):t(n))}function Zh(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function ws(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function vt(e,t,n){let r=Gr(e,t);return r>=0?e[1|r]=n:(r=~r,function mb(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(1===o)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function Kl(e,t){const n=Gr(e,t);if(n>=0)return e[1|n]}function Gr(e,t){return function Xh(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}
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
const zo={},Yl="__NG_DI_FLAG__",bs="ngTempTokenPath",bb=/\n/gm,ep="__source";let Wo;function zr(e){const t=Wo;return Wo=e,t}function Mb(e,t=P.Default){if(void 0===Wo)throw new C(-203,!1);return null===Wo?fh(e,void 0,t):Wo.get(e,t&P.Optional?null:void 0,t)}function M(e,t=P.Default){return(function gE(){return wl}()||Mb)(k(e),t)}function Se(e,t=P.Default){return"number"!=typeof t&&(t=0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)),M(e,t)}function Jl(e){const t=[];for(let n=0;n<e.length;n++){const r=k(e[n]);if(Array.isArray(r)){if(0===r.length)throw new C(900,!1);let o,i=P.Default;for(let s=0;s<r.length;s++){const a=r[s],l=Ib(a);"number"==typeof l?-1===l?o=a.token:i|=l:o=a}t.push(M(o,i))}else t.push(M(r))}return t}function qo(e,t){return e[Yl]=t,e.prototype[Yl]=t,e}function Ib(e){return e[Yl]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Qo=qo(Ur("Optional"),8),Ko=qo(Ur("SkipSelf"),4);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let eu;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class hp{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}function Gn(e){return e instanceof hp?e.changingThisBreaksApplicationSecurity:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Yb=/^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;
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
       */function ei(e){const t=function ti(){const e=D();return e&&e[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();return t?t.sanitize(xe.URL,e)||"":function Jo(e,t){const n=function qb(e){return e instanceof hp&&e.getTypeName()||null}(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}(e,"URL")?Gn(e):function ru(e){return(e=String(e)).match(Yb)?e:"unsafe:"+e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */($(e))}const au=new x("ENVIRONMENT_INITIALIZER"),Cp=new x("INJECTOR",-1),wp=new x("INJECTOR_DEF_TYPES");
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
class Ep{get(t,n=zo){if(n===zo){const r=new Error(`NullInjectorError: No provider for ${se(t)}!`);throw r.name="NullInjectorError",r}return n}}
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
       */function f0(...e){return{\u0275providers:bp(0,e)}}function bp(e,...t){const n=[],r=new Set;let o;return vn(t,i=>{const s=i;lu(s,n,[],r)&&(o||(o=[]),o.push(s))}),void 0!==o&&Sp(o,n),n}function Sp(e,t){for(let n=0;n<e.length;n++){const{providers:o}=e[n];vn(o,i=>{t.push(i)})}}function lu(e,t,n,r){if(!(e=k(e)))return!1;let o=null,i=ch(e);const s=!i&&ne(e);if(i||s){if(s&&!s.standalone)return!1;o=e}else{const l=e.ngModule;if(i=ch(l),!i)return!1;o=l}const a=r.has(o);if(s){if(a)return!1;if(r.add(o),s.dependencies){const l="function"==typeof s.dependencies?s.dependencies():s.dependencies;for(const u of l)lu(u,t,n,r)}}else{if(!i)return!1;{if(null!=i.imports&&!a){let u;r.add(o);try{vn(i.imports,c=>{lu(c,t,n,r)&&(u||(u=[]),u.push(c))})}finally{}void 0!==u&&Sp(u,t)}if(!a){const u=cr(o)||(()=>new o);t.push({provide:o,useFactory:u,deps:X},{provide:wp,useValue:o,multi:!0},{provide:au,useValue:()=>M(o),multi:!0})}const l=i.providers;null==l||a||vn(l,c=>{t.push(c)})}}return o!==e&&void 0!==e.providers}const h0=ie({provide:String,useValue:ie});function uu(e){return null!==e&&"object"==typeof e&&h0 in e}function dr(e){return"function"==typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const cu=new x("Set Injector scope."),xs={},g0={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let du;function Rs(){return void 0===du&&(du=new Ep),du}class zn{}class Ap extends zn{constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,hu(t,s=>this.processProvider(s)),this.records.set(Cp,Qr(void 0,this)),o.has("environment")&&this.records.set(zn,Qr(void 0,this));const i=this.records.get(cu);null!=i&&"string"==typeof i.value&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(wp.multi,X,P.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const t of this._ngOnDestroyHooks)t.ngOnDestroy();for(const t of this._onDestroyHooks)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(t){this._onDestroyHooks.push(t)}runInContext(t){this.assertNotDestroyed();const n=zr(this),r=wt(void 0);try{return t()}finally{zr(n),wt(r)}}get(t,n=zo,r=P.Default){this.assertNotDestroyed();const o=zr(this),i=wt(void 0);try{if(!(r&P.SkipSelf)){let a=this.records.get(t);if(void 0===a){const l=function D0(e){return"function"==typeof e||"object"==typeof e&&e instanceof x}(t)&&rs(t);a=l&&this.injectableDefInScope(l)?Qr(fu(t),xs):null,this.records.set(t,a)}if(null!=a)return this.hydrate(t,a)}return(r&P.Self?Rs():this.parent).get(t,n=r&P.Optional&&n===zo?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[bs]=s[bs]||[]).unshift(se(t)),o)throw s;return function Ab(e,t,n,r){const o=e[bs];throw t[ep]&&o.unshift(t[ep]),e.message=function Tb(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.slice(2):e;let o=se(t);if(Array.isArray(t))o=t.map(se).join(" -> ");else if("object"==typeof t){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let a=t[s];i.push(s+":"+("string"==typeof a?JSON.stringify(a):se(a)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(bb,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e[bs]=null,e}(s,t,"R3InjectorError",this.source)}throw s}finally{wt(i),zr(o)}}resolveInjectorInitializers(){const t=zr(this),n=wt(void 0);try{const r=this.get(au.multi,X,P.Self);for(const o of r)o()}finally{zr(t),wt(n)}}toString(){const t=[],n=this.records;for(const r of n.keys())t.push(se(r));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new C(205,!1)}processProvider(t){let n=dr(t=k(t))?t:k(t&&t.provide);const r=function y0(e){return uu(e)?Qr(void 0,e.useValue):Qr(Tp(e),xs)}(t);if(dr(t)||!0!==t.multi)this.records.get(n);else{let o=this.records.get(n);o||(o=Qr(void 0,xs,!0),o.factory=()=>Jl(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n){return n.value===xs&&(n.value=g0,n.value=n.factory()),"object"==typeof n.value&&n.value&&function _0(e){return null!==e&&"object"==typeof e&&"function"==typeof e.ngOnDestroy}(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}injectableDefInScope(t){if(!t.providedIn)return!1;const n=k(t.providedIn);return"string"==typeof n?"any"===n||this.scopes.has(n):this.injectorDefTypes.has(n)}}function fu(e){const t=rs(e),n=null!==t?t.factory:cr(e);if(null!==n)return n;if(e instanceof x)throw new C(204,!1);if(e instanceof Function)return function m0(e){const t=e.length;if(t>0)throw function Go(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}(t,"?"),new C(204,!1);const n=function fE(e){const t=e&&(e[os]||e[dh]);if(t){const n=function hE(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new C(204,!1)}function Tp(e,t,n){let r;if(dr(e)){const o=k(e);return cr(o)||fu(o)}if(uu(e))r=()=>k(e.useValue);else if(function Ip(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...Jl(e.deps||[]));else if(function Mp(e){return!(!e||!e.useExisting)}(e))r=()=>M(k(e.useExisting));else{const o=k(e&&(e.useClass||e.provide));if(!function v0(e){return!!e.deps}(e))return cr(o)||fu(o);r=()=>new o(...Jl(e.deps))}return r}function Qr(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function C0(e){return!!e.\u0275providers}function hu(e,t){for(const n of e)Array.isArray(n)?hu(n,t):C0(n)?hu(n.\u0275providers,t):t(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class xp{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class b0{resolveComponentFactory(t){throw function E0(e){const t=Error(`No component factory found for ${se(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let ni=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.NULL=new b0,e})();function S0(){return Kr(Pe(),D())}function Kr(e,t){return new _t(It(e,t))}let _t=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=S0,e})();function M0(e){return e instanceof _t?e.nativeElement:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Np{}let Dn=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function I0(){const e=D(),n=mt(Pe().index,e);return(at(n)?n:e)[z]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),e})(),A0=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=F({token:e,providedIn:"root",factory:()=>null}),e})();class ri{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const T0=new ri("14.2.3"),pu={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _u(e){return e.ngOriginalError}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Zr{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&_u(t);for(;n&&_u(n);)n=_u(n);return n||null}}
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
const Du=new Map;let B0=0;const wu="__ngContext__";function ze(e,t){at(t)?(e[wu]=t[20],function U0(e){Du.set(e[20],e)}(t)):e[wu]=t}function Cn(e){return e instanceof Function?e():e}
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
       */function bu(e,t){return undefined(e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ii(e){const t=e[3];return kt(t)?t[3]:t}function Su(e){return Wp(e[13])}function Mu(e){return Wp(e[4])}function Wp(e){for(;null!==e&&!kt(e);)e=e[4];return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Jr(e,t,n,r,o){if(null!=r){let i,s=!1;kt(r)?i=r:at(r)&&(s=!0,r=r[0]);const a=Te(r);0===e&&null!==n?null==o?Jp(t,n,a):fr(t,n,a,o||null,!0):1===e&&null!==n?fr(t,n,a,o||null,!0):2===e?function ig(e,t,n){const r=Ns(e,t);r&&function mS(e,t,n,r){e.removeChild(t,n,r)}(e,r,t,n)}(t,a,s):3===e&&t.destroyNode(a),null!=i&&function _S(e,t,n,r,o){const i=n[7];i!==Te(n)&&Jr(t,e,r,i,o);for(let a=10;a<n.length;a++){const l=n[a];si(l[1],l,e,t,r,i)}}(t,e,i,n,o)}}function Au(e,t,n){return e.createElement(t,n)}function Qp(e,t){const n=e[9],r=n.indexOf(t),o=t[3];512&t[2]&&(t[2]&=-513,Fl(o,-1)),n.splice(r,1)}function Tu(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&Qp(o,r),t>0&&(e[n-1][4]=r[4]);const i=ws(e,10+t);!function lS(e,t){si(e,t,t[z],2,null,null),t[0]=null,t[6]=null}(r[1],r);const s=i[19];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-65}return r}function Kp(e,t){if(!(128&t[2])){const n=t[z];n.destroyNode&&si(e,t,n,3,null,null),function dS(e){let t=e[13];if(!t)return xu(e[1],e);for(;t;){let n=null;if(at(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)at(t)&&xu(t[1],t),t=t[3];null===t&&(t=e),at(t)&&xu(t[1],t),n=t&&t[4]}t=n}}(t)}}function xu(e,t){if(!(128&t[2])){t[2]&=-65,t[2]|=128,function gS(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const o=t[n[r]];if(!(o instanceof Lo)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const a=o[i[s]],l=i[s+1];try{l.call(a)}finally{}}else try{i.call(o)}finally{}}}}(e,t),function pS(e,t){const n=e.cleanup,r=t[7];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+1],a="function"==typeof s?s(t):Te(t[s]),l=r[o=n[i+2]],u=n[i+3];"boolean"==typeof u?a.removeEventListener(n[i],l,u):u>=0?r[o=u]():r[o=-u].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++)(0,r[i])();t[7]=null}}(e,t),1===t[1].type&&t[z].destroy();const n=t[17];if(null!==n&&kt(t[3])){n!==t[3]&&Qp(n,t);const r=t[19];null!==r&&r.detachView(e)}!function G0(e){Du.delete(e[20])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)}}function Zp(e,t,n){return function Yp(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const o=e.data[r.directiveStart].encapsulation;if(o===Yt.None||o===Yt.Emulated)return null}return It(r,n)}(e,t.parent,n)}function fr(e,t,n,r,o){e.insertBefore(t,n,r,o)}function Jp(e,t,n){e.appendChild(t,n)}function Xp(e,t,n,r,o){null!==r?fr(e,t,n,r,o):Jp(e,t,n)}function Ns(e,t){return e.parentNode(t)}let ng=function tg(e,t,n){return 40&e.type?It(e,n):null};function Fs(e,t,n,r){const o=Zp(e,r,t),i=t[z],a=function eg(e,t,n){return ng(e,t,n)}(r.parent||t[6],r,t);if(null!=o)if(Array.isArray(n))for(let l=0;l<n.length;l++)Xp(i,o,n[l],a,!1);else Xp(i,o,n,a,!1)}function Ps(e,t){if(null!==t){const n=t.type;if(3&n)return It(t,e);if(4&n)return Nu(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return Ps(e,r);{const o=e[t.index];return kt(o)?Nu(-1,o):Te(o)}}if(32&n)return bu(t,e)()||Te(e[t.index]);{const r=og(e,t);return null!==r?Array.isArray(r)?r[0]:Ps(ii(e[16]),r):Ps(e,t.next)}}return null}function og(e,t){return null!==t?e[16][6].projection[t.projection]:null}function Nu(e,t){const n=10+e+1;if(n<t.length){const r=t[n],o=r[1].firstChild;if(null!==o)return Ps(r,o)}return t[7]}function Fu(e,t,n,r,o,i,s){for(;null!=n;){const a=r[n.index],l=n.type;if(s&&0===t&&(a&&ze(Te(a),r),n.flags|=4),64!=(64&n.flags))if(8&l)Fu(e,t,n.child,r,o,i,!1),Jr(t,e,o,a,i);else if(32&l){const u=bu(n,r);let c;for(;c=u();)Jr(t,e,o,c,i);Jr(t,e,o,a,i)}else 16&l?sg(e,t,r,n,o,i):Jr(t,e,o,a,i);n=s?n.projectionNext:n.next}}function si(e,t,n,r,o,i){Fu(n,r,e.firstChild,t,o,i,!1)}function sg(e,t,n,r,o,i){const s=n[16],l=s[6].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++)Jr(t,e,o,l[u],i);else Fu(e,t,l,s[3],o,i,!0)}function ag(e,t,n){e.setAttribute(t,"style",n)}function Pu(e,t,n){""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function lg(e,t,n){let r=e.length;for(;;){const o=e.indexOf(t,n);if(-1===o)return o;if(0===o||e.charCodeAt(o-1)<=32){const i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ug="ng-template";function CS(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==lg(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function cg(e){return 4===e.type&&e.value!==ug}function wS(e,t,n){return t===(4!==e.type||n?e.value:ug)}function ES(e,t,n){let r=4;const o=e.attrs||[],i=function MS(e){for(let t=0;t<e.length;t++)if(kh(e[t]))return t;return e.length}(o);let s=!1;for(let a=0;a<t.length;a++){const l=t[a];if("number"!=typeof l){if(!s)if(4&r){if(r=2|1&r,""!==l&&!wS(e,l,n)||""===l&&1===t.length){if(Vt(r))return!1;s=!0}}else{const u=8&r?l:t[++a];if(8&r&&null!==e.attrs){if(!CS(e.attrs,u,n)){if(Vt(r))return!1;s=!0}continue}const d=bS(8&r?"class":l,o,cg(e),n);if(-1===d){if(Vt(r))return!1;s=!0;continue}if(""!==u){let f;f=d>i?"":o[d+1].toLowerCase();const h=8&r?f:null;if(h&&-1!==lg(h,u,0)||2&r&&u!==f){if(Vt(r))return!1;s=!0}}}}else{if(!s&&!Vt(r)&&!Vt(l))return!1;if(s&&Vt(l))continue;s=!1,r=l|1&r}}return Vt(r)||s}function Vt(e){return 0==(1&e)}function bS(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){const s=t[o];if(s===e)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let a=t[++o];for(;"string"==typeof a;)a=t[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function IS(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function dg(e,t,n=!1){for(let r=0;r<t.length;r++)if(ES(e,t[r],n))return!0;return!1}function fg(e,t){return e?":not("+t.trim()+")":t}function TS(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const a=e[++n];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!Vt(s)&&(t+=fg(i,o),o=""),r=s,i=i||!Vt(r);n++}return""!==o&&(t+=fg(i,o)),t}
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
       */function T(e){hg(Y(),D(),et()+e,!1)}function hg(e,t,n,r){if(!r)if(3==(3&t[2])){const i=e.preOrderCheckHooks;null!==i&&ps(t,i,n)}else{const i=e.preOrderHooks;null!==i&&gs(t,i,0,n)}Hn(n)}
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
function yg(e,t=null,n=null,r){const o=vg(e,t,n,r);return o.resolveInjectorInitializers(),o}function vg(e,t=null,n=null,r,o=new Set){const i=[n||X,f0(e)];return r=r||("object"==typeof e?void 0:se(e)),new Ap(i,t||Rs(),r||null,o)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}let Dt=(()=>{class e{static create(n,r){if(Array.isArray(n))return yg({name:""},r,n,"");{var o;const i=null!==(o=n.name)&&void 0!==o?o:"";return yg({name:i},n.parent,n.providers,i)}}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.THROW_IF_NOT_FOUND=zo,e.NULL=new Ep,e.\u0275prov=F({token:e,providedIn:"any",factory:()=>M(Cp)}),e.__NG_ELEMENT_ID__=-1,e})();
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
function v(e,t=P.Default){const n=D();return null===n?M(e,t):Gh(Pe(),n,k(e),t)}function $u(){throw new Error("invalid")}
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
function ks(e,t){return e<<17|t<<2}function $t(e){return e>>17&32767}function ju(e){return 2|e}function wn(e){return(131068&e)>>2}function Bu(e,t){return-131069&e|t<<2}function Hu(e){return 1|e}function Og(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const s=e.data[i];Vl(o),s.contentQueries(2,t[i],i)}}}function $s(e,t,n,r,o,i,s,a,l,u,c){const d=t.blueprint.slice();return d[0]=o,d[2]=76|r,(null!==c||e&&1024&e[2])&&(d[2]|=1024),wh(d),d[3]=d[15]=e,d[8]=n,d[10]=s||e&&e[10],d[z]=a||e&&e[z],d[12]=l||e&&e[12]||null,d[9]=u||e&&e[9]||null,d[6]=i,d[20]=function H0(){return B0++}(),d[21]=c,d[16]=2==t.type?e[16]:d,d}function eo(e,t,n,r,o){let i=e.data[t];if(null===i)i=function Zu(e,t,n,r,o){const i=Sh(),s=Pl(),l=e.data[t]=function dM(e,t,n,r,o,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=l),null!==i&&(s?null==i.child&&null!==l.parent&&(i.child=l):null===i.next&&(i.next=l)),l}(e,t,n,r,o),function HE(){return V.lFrame.inI18n}()&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=function ko(){const e=V.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();i.injectorIndex=null===s?-1:s.injectorIndex}return en(i,!0),i}function to(e,t,n,r){if(0===n)return-1;const o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function Yu(e,t,n){$l(t);try{const r=e.viewQuery;null!==r&&ic(1,r,n);const o=e.template;null!==o&&kg(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Og(e,t),e.staticViewQueries&&ic(2,e.viewQuery,n);const i=e.components;null!==i&&function lM(e,t){for(let n=0;n<t.length;n++)IM(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,jl()}}function js(e,t,n,r){const o=t[2];if(128!=(128&o)){$l(t);try{wh(t),function Ih(e){return V.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&kg(e,t,n,2,r);const s=3==(3&o);if(s){const u=e.preOrderCheckHooks;null!==u&&ps(t,u,null)}else{const u=e.preOrderHooks;null!==u&&gs(t,u,0,null),Bl(t,0)}if(function SM(e){for(let t=Su(e);null!==t;t=Mu(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const o=n[r],i=o[3];0==(512&o[2])&&Fl(i,1),o[2]|=512}}}(t),function bM(e){for(let t=Su(e);null!==t;t=Mu(t))for(let n=10;n<t.length;n++){const r=t[n],o=r[1];fs(r)&&js(o,r,o.template,r[8])}}(t),null!==e.contentQueries&&Og(e,t),s){const u=e.contentCheckHooks;null!==u&&ps(t,u)}else{const u=e.contentHooks;null!==u&&gs(t,u,1),Bl(t,1)}!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function sM(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)Hn(~o);else{const i=o,s=n[++r],a=n[++r];UE(s,i),a(2,t[i])}}}finally{Hn(-1)}}(e,t);const a=e.components;null!==a&&function aM(e,t){for(let n=0;n<t.length;n++)MM(e,t[n])}(t,a);const l=e.viewQuery;if(null!==l&&ic(2,l,r),s){const u=e.viewCheckHooks;null!==u&&ps(t,u)}else{const u=e.viewHooks;null!==u&&gs(t,u,2),Bl(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),t[2]&=-41,512&t[2]&&(t[2]&=-513,Fl(t[3],-1))}finally{jl()}}}function kg(e,t,n,r,o){const i=et(),s=2&r;try{Hn(-1),s&&t.length>22&&hg(e,t,22,!1),n(r,o)}finally{Hn(i)}}function Lg(e,t,n){if(Il(t)){const o=t.directiveEnd;for(let i=t.directiveStart;i<o;i++){const s=e.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}function Ju(e,t,n){!bh()||(function mM(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||$o(n,t),ze(r,t);const s=n.initialInputs;for(let a=o;a<i;a++){const l=e.data[a],u=Lt(l);u&&CM(t,n,l);const c=jo(t,e,a,n);ze(c,t),null!==s&&wM(0,a-o,c,l,0,s),u&&(mt(n.index,t)[8]=c)}}(e,t,n,It(n,t)),128==(128&n.flags)&&function yM(e,t,n){const r=n.directiveStart,o=n.directiveEnd,i=n.index,s=function GE(){return V.lFrame.currentDirectiveIndex}();try{Hn(i);for(let a=r;a<o;a++){const l=e.data[a],u=t[a];kl(a),(null!==l.hostBindings||0!==l.hostVars||null!==l.hostAttrs)&&Gg(l,u)}}finally{Hn(-1),kl(s)}}(e,t,n))}function Xu(e,t,n=It){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],a=-1===s?n(t,e):e[s];e[o++]=a}}}function Vg(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=ec(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function ec(e,t,n,r,o,i,s,a,l,u){const c=22+r,d=c+o,f=function uM(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:j);return n}(c,d),h="function"==typeof u?u():u;return f[1]={type:e,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:t,data:f.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:l,consts:h,incompleteFirstPass:!1}}function $g(e,t,n,r){const o=Kg(t);null===n?o.push(r):(o.push(n),e.firstCreatePass&&Zg(e).push(r,o.length-1))}function jg(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function Bg(e,t){const r=t.directiveEnd,o=e.data,i=t.attrs,s=[];let a=null,l=null;for(let u=t.directiveStart;u<r;u++){const c=o[u],d=c.inputs,f=null===i||cg(t)?null:EM(d,i);s.push(f),a=jg(d,u,a),l=jg(c.outputs,u,l)}null!==a&&(a.hasOwnProperty("class")&&(t.flags|=16),a.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=s,t.inputs=a,t.outputs=l}function Ct(e,t,n,r,o,i,s,a){const l=It(t,n);let c,u=t.inputs;!a&&null!=u&&(c=u[r])?(sc(e,n,c,r,o),us(t)&&Hg(n,t.index)):3&t.type&&(r=function fM(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(r),o=null!=s?s(o,t.value||"",r):o,i.setProperty(l,r,o))}function Hg(e,t){const n=mt(t,e);16&n[2]||(n[2]|=32)}function tc(e,t,n,r){let o=!1;if(bh()){const i=function vM(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];dg(n,s.selectors,!1)&&(o||(o=[]),Ds($o(n,t),e,s.type),Lt(s)?(zg(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){o=!0,Wg(n,e.data.length,i.length);for(let c=0;c<i.length;c++){const d=i[c];d.providersResolver&&d.providersResolver(d)}let a=!1,l=!1,u=to(e,t,i.length,null);for(let c=0;c<i.length;c++){const d=i[c];n.mergedAttrs=ys(n.mergedAttrs,d.hostAttrs),qg(e,n,t,u,d),DM(u,d,s),null!==d.contentQueries&&(n.flags|=8),(null!==d.hostBindings||null!==d.hostAttrs||0!==d.hostVars)&&(n.flags|=128);const f=d.type.prototype;!a&&(f.ngOnChanges||f.ngOnInit||f.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),a=!0),!l&&(f.ngOnChanges||f.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),l=!0),u++}Bg(e,n)}s&&function _M(e,t,n){if(t){const r=e.localNames=[];for(let o=0;o<t.length;o+=2){const i=n[t[o+1]];if(null==i)throw new C(-301,!1);r.push(t[o],i)}}}(n,r,s)}return n.mergedAttrs=ys(n.mergedAttrs,n.attrs),o}function Ug(e,t,n,r,o,i){const s=i.hostBindings;if(s){let a=e.hostBindingOpCodes;null===a&&(a=e.hostBindingOpCodes=[]);const l=~t.index;(function gM(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(a)!=l&&a.push(l),a.push(r,o,s)}}function Gg(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function zg(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function DM(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;Lt(t)&&(n[""]=e)}}function Wg(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function qg(e,t,n,r,o){e.data[r]=o;const i=o.factory||(o.factory=cr(o.type)),s=new Lo(i,Lt(o),v);e.blueprint[r]=s,n[r]=s,Ug(e,t,0,r,to(e,n,o.hostVars,j),o)}function CM(e,t,n){const r=It(t,e),o=Vg(n),i=e[10],s=Bs(e,$s(e,o,null,n.onPush?32:16,r,t,i,i.createRenderer(r,n),null,null,null));e[t.index]=s}function nn(e,t,n,r,o,i){const s=It(e,t);!function nc(e,t,n,r,o,i,s){if(null==i)e.removeAttribute(t,o,n);else{const a=null==s?$(i):s(i,r||"",o);e.setAttribute(t,o,a,n)}}(t[z],s,i,e.value,n,r,o)}function wM(e,t,n,r,o,i){const s=i[t];if(null!==s){const a=r.setInput;for(let l=0;l<s.length;){const u=s[l++],c=s[l++],d=s[l++];null!==a?r.setInput(n,d,u,c):n[c]=d}}}function EM(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function Qg(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function MM(e,t){const n=mt(t,e);if(fs(n)){const r=n[1];48&n[2]?js(r,n,r.template,n[8]):n[5]>0&&rc(n)}}function rc(e){for(let r=Su(e);null!==r;r=Mu(r))for(let o=10;o<r.length;o++){const i=r[o];if(fs(i))if(512&i[2]){const s=i[1];js(s,i,s.template,i[8])}else i[5]>0&&rc(i)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=mt(n[r],e);fs(o)&&o[5]>0&&rc(o)}}function IM(e,t){const n=mt(t,e),r=n[1];(function AM(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),Yu(r,n,n[8])}function Bs(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function oc(e){for(;e;){e[2]|=32;const t=ii(e);if(wE(e)&&!t)return e;e=t}return null}function Hs(e,t,n,r=!0){const o=t[10];o.begin&&o.begin();try{js(e,t,e.template,n)}catch(s){throw r&&Jg(t,s),s}finally{o.end&&o.end()}}function ic(e,t,n){Vl(0),t(e,n)}function Kg(e){return e[7]||(e[7]=[])}function Zg(e){return e.cleanup||(e.cleanup=[])}function Jg(e,t){const n=e[9],r=n?n.get(Zr,null):null;r&&r.handleError(t)}function sc(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],a=n[i++],l=t[s],u=e.data[s];null!==u.setInput?u.setInput(l,o,r,a):l[a]=o}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Us(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let s=0;s<t.length;s++){const a=t[s];"number"==typeof a?i=a:1==i?o=_l(o,a):2==i&&(r=_l(r,a+": "+t[++s]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Gs(e,t,n,r,o=!1){for(;null!==n;){const i=t[n.index];if(null!==i&&r.push(Te(i)),kt(i))for(let a=10;a<i.length;a++){const l=i[a],u=l[1].firstChild;null!==u&&Gs(l[1],l,u,r)}const s=n.type;if(8&s)Gs(e,t,n.child,r);else if(32&s){const a=bu(n,t);let l;for(;l=a();)r.push(l)}else if(16&s){const a=og(t,n);if(Array.isArray(a))r.push(...a);else{const l=ii(t[16]);Gs(l[1],l,a,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ai{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return Gs(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(kt(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(Tu(t,r),ws(n,r))}this._attachedToViewContainer=!1}Kp(this._lView[1],this._lView)}onDestroy(t){$g(this._lView[1],this._lView,null,t)}markForCheck(){oc(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){Hs(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new C(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function cS(e,t){si(e,t,t[z],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new C(902,!1);this._appRef=t}}class TM extends ai{constructor(t){super(t),this._view=t}detectChanges(){const t=this._view;Hs(t[1],t,t[8],!1)}checkNoChanges(){}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ac extends ni{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=ne(t);return new li(n,this.ngModule)}}function Xg(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}class RM{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){const o=this.injector.get(t,pu,r);return o!==pu||n===pu?o:this.parentInjector.get(t,n,r)}}class li extends xp{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=function xS(e){return e.map(TS).join(",")}(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return Xg(this.componentDef.inputs)}get outputs(){return Xg(this.componentDef.outputs)}create(t,n,r,o){var i;let s=(o=o||this.ngModule)instanceof zn?o:null===(i=o)||void 0===i?void 0:i.injector;s&&null!==this.componentDef.getStandaloneInjector&&(s=this.componentDef.getStandaloneInjector(s)||s);const a=s?new RM(t,s):t,l=a.get(Np,null);if(null===l)throw new C(407,!1);const u=a.get(A0,null),c=l.createRenderer(null,this.componentDef),d=this.componentDef.selectors[0][0]||"div",f=r?function cM(e,t,n){return e.selectRootElement(t,n===Yt.ShadowDom)}(c,r,this.componentDef.encapsulation):Au(l.createRenderer(null,this.componentDef),d,function xM(e){const t=e.toLowerCase();return"svg"===t?"svg":"math"===t?"math":null}(d)),h=this.componentDef.onPush?288:272,p=ec(0,null,null,1,0,null,null,null,null,null),g=$s(null,p,null,h,null,null,l,c,u,a,null);let _,y;$l(g);try{const w=function PM(e,t,n,r,o,i){const s=n[1];n[22]=e;const l=eo(s,22,2,"#host",null),u=l.mergedAttrs=t.hostAttrs;null!==u&&(Us(l,u,!0),null!==e&&(ms(o,e,u),null!==l.classes&&Pu(o,e,l.classes),null!==l.styles&&ag(o,e,l.styles)));const c=r.createRenderer(e,t),d=$s(n,Vg(t),null,t.onPush?32:16,n[22],l,r,c,i||null,null,null);return s.firstCreatePass&&(Ds($o(l,n),s,t.type),zg(s,l),Wg(l,n.length,1)),Bs(n,d),n[22]=d}(f,this.componentDef,g,l,c);if(f)if(r)ms(c,f,["ng-version",T0.full]);else{const{attrs:m,classes:b}=function RS(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!Vt(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);m&&ms(c,f,m),b&&b.length>0&&Pu(c,f,b.join(" "))}if(y=Nl(p,22),void 0!==n){const m=y.projection=[];for(let b=0;b<this.ngContentSelectors.length;b++){const U=n[b];m.push(null!=U?Array.from(U):null)}}_=function OM(e,t,n,r){const o=n[1],i=function pM(e,t,n){const r=Pe();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),qg(e,r,t,to(e,t,1,null),n),Bg(e,r));const o=jo(t,e,r.directiveStart,r);ze(o,t);const i=It(r,t);return i&&ze(i,t),o}(o,n,t);if(e[8]=n[8]=i,null!==r)for(const a of r)a(i,t);if(t.contentQueries){const a=Pe();t.contentQueries(1,i,a.directiveStart)}const s=Pe();return!o.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(Hn(s.index),Ug(n[1],s,0,s.directiveStart,s.directiveEnd,t),Gg(t,i)),i}(w,this.componentDef,g,[kM]),Yu(p,g,null)}finally{jl()}return new FM(this.componentType,_,Kr(y,g),g,y)}}class FM extends class w0{}{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.instance=n,this.hostView=this.changeDetectorRef=new TM(o),this.componentType=t}setInput(t,n){const r=this._tNode.inputs;let o;if(null!==r&&(o=r[t])){const i=this._rootLView;sc(i[1],i,o,t,n),Hg(i,this._tNode.index)}}get injector(){return new $r(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}function kM(){const e=Pe();hs(D()[1],e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function re(e){let t=function em(e){return Object.getPrototypeOf(e.prototype).constructor}(e.type),n=!0;const r=[e];for(;t;){let o;if(Lt(e))o=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new C(903,!1);o=t.\u0275dir}if(o){if(n){r.push(o);const s=e;s.inputs=lc(e.inputs),s.declaredInputs=lc(e.declaredInputs),s.outputs=lc(e.outputs);const a=o.hostBindings;a&&jM(e,a);const l=o.viewQuery,u=o.contentQueries;if(l&&VM(e,l),u&&$M(e,u),vl(e.inputs,o.inputs),vl(e.declaredInputs,o.declaredInputs),vl(e.outputs,o.outputs),Lt(o)&&o.data.animation){const c=e.data;c.animation=(c.animation||[]).concat(o.data.animation)}}const i=o.features;if(i)for(let s=0;s<i.length;s++){const a=i[s];a&&a.ngInherit&&a(e),a===re&&(n=!1)}}t=Object.getPrototypeOf(t)}!function LM(e){let t=0,n=null;for(let r=e.length-1;r>=0;r--){const o=e[r];o.hostVars=t+=o.hostVars,o.hostAttrs=ys(o.hostAttrs,n=ys(n,o.hostAttrs))}}(r)}function lc(e){return e===xr?{}:e===X?[]:e}function VM(e,t){const n=e.viewQuery;e.viewQuery=n?(r,o)=>{t(r,o),n(r,o)}:t}function $M(e,t){const n=e.contentQueries;e.contentQueries=n?(r,o,i)=>{t(r,o,i),n(r,o,i)}:t}function jM(e,t){const n=e.hostBindings;e.hostBindings=n?(r,o)=>{t(r,o),n(r,o)}:t}
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
let zs=null;function hr(){if(!zs){const e=ae.Symbol;if(e&&e.iterator)zs=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(zs=r)}}}return zs}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ui(e){return!!uc(e)&&(Array.isArray(e)||!(e instanceof Map)&&hr()in e)}function uc(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function We(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function jt(e,t,n,r){const o=D();return We(o,kr(),t)&&(Y(),nn(De(),o,e,t,n,r)),jt}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ro(e,t,n,r){return We(e,kr(),n)?t+$(n)+r:j}function oe(e,t,n,r,o,i,s,a){const l=D(),u=Y(),c=e+22,d=u.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function QM(e,t,n,r,o,i,s,a,l){const u=t.consts,c=eo(t,e,4,s||null,Bn(u,a));tc(t,n,c,Bn(u,l)),hs(t,c);const d=c.tViews=ec(2,c,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,u);return null!==t.queries&&(t.queries.template(t,c),d.queries=t.queries.embeddedTView(c)),c}(c,u,l,t,n,r,o,i,s):u.data[c];en(d,!1);const f=l[z].createComment("");Fs(u,l,f,d),ze(f,l),Bs(l,l[c]=Qg(f,l,f,d)),cs(d)&&Ju(u,l,d),null!=s&&Xu(l,d,a)}
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
function B(e,t,n){const r=D();return We(r,kr(),t)&&Ct(Y(),De(),r,e,t,r[z],n,!1),B}function cc(e,t,n,r,o){const s=o?"class":"style";sc(e,n,t.inputs[s],s,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function A(e,t,n,r){const o=D(),i=Y(),s=22+e,a=o[z],l=o[s]=Au(a,t,function JE(){return V.lFrame.currentNamespace}()),u=i.firstCreatePass?function YM(e,t,n,r,o,i,s){const a=t.consts,u=eo(t,e,2,o,Bn(a,i));return tc(t,n,u,Bn(a,s)),null!==u.attrs&&Us(u,u.attrs,!1),null!==u.mergedAttrs&&Us(u,u.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,u),u}(s,i,o,0,t,n,r):i.data[s];en(u,!0);const c=u.mergedAttrs;null!==c&&ms(a,l,c);const d=u.classes;null!==d&&Pu(a,l,d);const f=u.styles;return null!==f&&ag(a,l,f),64!=(64&u.flags)&&Fs(i,o,l,u),0===function kE(){return V.lFrame.elementDepthCount}()&&ze(l,o),function LE(){V.lFrame.elementDepthCount++}(),cs(u)&&(Ju(i,o,u),Lg(i,u,o)),null!==r&&Xu(o,u),A}function I(){let e=Pe();Pl()?Ol():(e=e.parent,en(e,!1));const t=e;!function VE(){V.lFrame.elementDepthCount--}();const n=Y();return n.firstCreatePass&&(hs(n,e),Il(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function rb(e){return 0!=(16&e.flags)}(t)&&cc(n,t,D(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function ob(e){return 0!=(32&e.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)&&cc(n,t,D(),t.stylesWithoutHost,!1),I}function pe(e,t,n,r){return A(e,t,n,r),I(),pe
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function bn(e,t,n){const r=D(),o=Y(),i=e+22,s=o.firstCreatePass?function JM(e,t,n,r,o){const i=t.consts,s=Bn(i,r),a=eo(t,e,8,"ng-container",s);return null!==s&&Us(a,s,!0),tc(t,n,a,Bn(i,o)),null!==t.queries&&t.queries.elementStart(t,a),a}(i,o,r,t,n):o.data[i];en(s,!0);const a=r[i]=r[z].createComment("");return Fs(o,r,a,s),ze(a,r),cs(s)&&(Ju(o,r,s),Lg(o,s,r)),null!=n&&Xu(r,s),bn}function Sn(){let e=Pe();const t=Y();return Pl()?Ol():(e=e.parent,en(e,!1)),t.firstCreatePass&&(hs(t,e),Il(e)&&t.queries.elementEnd(e)),Sn}function Mn(){return D()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function di(e){return!!e&&"function"==typeof e.then}const dc=function dm(e){return!!e&&"function"==typeof e.subscribe};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function fe(e,t,n,r){const o=D(),i=Y(),s=Pe();return function hm(e,t,n,r,o,i,s,a){const l=cs(r),c=e.firstCreatePass&&Zg(e),d=t[8],f=Kg(t);let h=!0;if(3&r.type||a){const _=It(r,t),y=a?a(_):_,w=f.length,m=a?U=>a(Te(U[r.index])):r.index;let b=null;if(!a&&l&&(b=function XM(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const a=t[7],l=o[i+2];return a.length>l?a[l]:null}"string"==typeof s&&(i+=2)}return null}(e,t,o,r.index)),null!==b)(b.__ngLastListenerFn__||b).__ngNextListenerFn__=i,b.__ngLastListenerFn__=i,h=!1;else{i=gm(r,t,d,i,!1);const U=n.listen(y,o,i);f.push(i,U),c&&c.push(o,m,w,w+1)}}else i=gm(r,t,d,i,!1);const p=r.outputs;let g;if(h&&null!==p&&(g=p[o])){const _=g.length;if(_)for(let y=0;y<_;y+=2){const me=t[g[y]][g[y+1]].subscribe(i),Ir=f.length;f.push(i,me),c&&c.push(o,r.index,Ir,-(Ir+1))}}}(i,o,o[z],s,e,t,0,r),fe}function pm(e,t,n,r){try{return!1!==n(r)}catch(o){return Jg(e,o),!1}}function gm(e,t,n,r,o){return function i(s){if(s===Function)return r;oc(2&e.flags?mt(e.index,t):t);let l=pm(t,0,r,s),u=i.__ngNextListenerFn__;for(;u;)l=pm(t,0,u,s)&&l,u=u.__ngNextListenerFn__;return o&&!1===l&&(s.preventDefault(),s.returnValue=!1),l}}
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
       */function ee(e=1){return function WE(e){return(V.lFrame.contextLView=function qE(e,t){for(;e>0;)t=t[15],e--;return t}(e,V.lFrame.contextLView))[8]}(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gr(e,t,n){return fc(e,"",t,"",n),gr}function fc(e,t,n,r,o){const i=D(),s=ro(i,t,n,r);return s!==j&&Ct(Y(),De(),i,e,s,i[z],o,!1),fc}function bm(e,t,n,r,o){const i=e[n+1],s=null===t;let a=r?$t(i):wn(i),l=!1;for(;0!==a&&(!1===l||s);){const c=e[a+1];iI(e[a],t)&&(l=!0,e[a+1]=r?Hu(c):ju(c)),a=r?$t(c):wn(c)}l&&(e[n+1]=r?ju(i):Hu(i))}function iI(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&Gr(e,t)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function qs(e,t){return function Bt(e,t,n,r){const o=D(),i=Y(),s=function yn(e){const t=V.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}(2);i.firstUpdatePass&&function Fm(e,t,n,r){const o=e.data;if(null===o[n+1]){const i=o[et()],s=function Nm(e,t){return t>=e.expandoStartIndex}(e,n);(function Lm(e,t){return 0!=(e.flags&(t?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */)(i,r)&&null===t&&!s&&(t=!1),t=function pI(e,t,n,r){const o=function Ll(e){const t=V.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let i=r?t.residualClasses:t.residualStyles;if(null===o)0===(r?t.classBindings:t.styleBindings)&&(n=fi(n=hc(null,e,t,n,r),t.attrs,r),i=null);else{const s=t.directiveStylingLast;if(-1===s||e[s]!==o)if(n=hc(o,e,t,n,r),null===i){let l=function gI(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==wn(r))return e[$t(r)]}(e,t,r);void 0!==l&&Array.isArray(l)&&(l=hc(null,e,t,l[1],r),l=fi(l,t.attrs,r),function mI(e,t,n,r){e[$t(n?t.classBindings:t.styleBindings)]=r}(e,t,r,l))}else i=function yI(e,t,n){let r;const o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++)r=fi(r,e[i].hostAttrs,n);return fi(r,t.attrs,n)}(e,t,r)}return void 0!==i&&(r?t.residualClasses=i:t.residualStyles=i),n}(o,i,t,r),function rI(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,a=$t(s),l=wn(s);e[r]=n;let c,u=!1;if(Array.isArray(n)){const d=n;c=d[1],(null===c||Gr(d,c)>0)&&(u=!0)}else c=n;if(o)if(0!==l){const f=$t(e[a+1]);e[r+1]=ks(f,a),0!==f&&(e[f+1]=Bu(e[f+1],r)),e[a+1]=function ZS(e,t){return 131071&e|t<<17}(e[a+1],r)}else e[r+1]=ks(a,0),0!==a&&(e[a+1]=Bu(e[a+1],r)),a=r;else e[r+1]=ks(l,0),0===a?a=r:e[l+1]=Bu(e[l+1],r),l=r;u&&(e[r+1]=ju(e[r+1])),bm(e,c,r,!0),bm(e,c,r,!1),function oI(e,t,n,r,o){const i=o?e.residualClasses:e.residualStyles;null!=i&&"string"==typeof t&&Gr(i,t)>=0&&(n[r+1]=Hu(n[r+1]))}(t,c,e,r,i),s=ks(a,l),i?t.classBindings=s:t.styleBindings=s}(o,i,t,n,s,r)}}(i,e,s,r),t!==j&&We(o,s,t)&&function Om(e,t,n,r,o,i,s,a){if(!(3&t.type))return;const l=e.data,u=l[a+1];Qs(function Ig(e){return 1==(1&e)}(u)?km(l,t,n,o,wn(u),s):void 0)||(Qs(i)||function Mg(e){return 2==(2&e)}(u)&&(i=km(l,null,n,o,a,s)),function DS(e,t,n,r,o){if(t)o?e.addClass(n,r):e.removeClass(n,r);else{let i=-1===r.indexOf("-")?void 0:lt.DashCase;null==o?e.removeStyle(n,r,i):("string"==typeof o&&o.endsWith("!important")&&(o=o.slice(0,-10),i|=lt.Important),e.setStyle(n,r,o,i))}}(r,s,ds(et(),n),o,i))}(i,i.data[et()],o,o[z],e,o[s+1]=function DI(e,t){return null==e||("string"==typeof t?e+=t:"object"==typeof e&&(e=se(Gn(e)))),e}(t,n),r,s)}(e,t,null,!0),qs}function hc(e,t,n,r,o){let i=null;const s=n.directiveEnd;let a=n.directiveStylingLast;for(-1===a?a=n.directiveStart:a++;a<s&&(i=t[a],r=fi(r,i.hostAttrs,o),i!==e);)a++;return null!==e&&(n.directiveStylingLast=a),r}function fi(e,t,n){const r=n?1:2;let o=-1;if(null!==t)for(let i=0;i<t.length;i++){const s=t[i];"number"==typeof s?o=s:o===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),vt(e,s,!!n||t[++i]))}return void 0===e?null:e}function km(e,t,n,r,o,i){const s=null===t;let a;for(;o>0;){const l=e[o],u=Array.isArray(l),c=u?l[1]:l,d=null===c;let f=n[o+1];f===j&&(f=d?X:void 0);let h=d?Kl(f,r):c===r?f:void 0;if(u&&!Qs(h)&&(h=Kl(l,r)),Qs(h)&&(a=h,s))return a;const p=e[o+1];o=s?$t(p):wn(p)}if(null!==t){let l=i?t.residualClasses:t.residualStyles;null!=l&&(a=Kl(l,r))}return a}function Qs(e){return void 0!==e}function K(e,t=""){const n=D(),r=Y(),o=e+22,i=r.firstCreatePass?eo(r,o,1,t,null):r.data[o],s=n[o]=function Iu(e,t){return e.createText(t)}(n[z],t);Fs(r,n,s,i),en(i,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function In(e){return an("",e,""),In}function an(e,t,n){const r=D(),o=ro(r,e,t,n);return o!==j&&function En(e,t,n){const r=ds(t,e);!function qp(e,t,n){e.setValue(t,n)}(e[z],r,n)}(r,et(),o),an}const po="en-US";
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
let iy=po;function mc(e,t,n,r,o){if(e=k(e),Array.isArray(e))for(let i=0;i<e.length;i++)mc(e[i],t,n,r,o);else{const i=Y(),s=D();let a=dr(e)?e:k(e.provide),l=Tp(e);const u=Pe(),c=1048575&u.providerIndexes,d=u.directiveStart,f=u.providerIndexes>>20;if(dr(e)||!e.multi){const h=new Lo(l,o,v),p=vc(a,t,o?c:c+f,d);-1===p?(Ds($o(u,s),i,a),yc(i,e,t.length),t.push(a),u.directiveStart++,u.directiveEnd++,o&&(u.providerIndexes+=1048576),n.push(h),s.push(h)):(n[p]=h,s[p]=h)}else{const h=vc(a,t,c+f,d),p=vc(a,t,c,c+f),g=h>=0&&n[h],_=p>=0&&n[p];if(o&&!_||!o&&!g){Ds($o(u,s),i,a);const y=function VA(e,t,n,r,o){const i=new Lo(e,n,v);return i.multi=[],i.index=t,i.componentProviders=0,xy(i,o,r&&!n),i}(o?LA:kA,n.length,o,r,l);!o&&_&&(n[p].providerFactory=y),yc(i,e,t.length,0),t.push(a),u.directiveStart++,u.directiveEnd++,o&&(u.providerIndexes+=1048576),n.push(y),s.push(y)}else yc(i,e,h>-1?h:p,xy(n[o?p:h],l,!o&&r));!o&&r&&_&&n[p].componentProviders++}}}function yc(e,t,n,r){const o=dr(t),i=function p0(e){return!!e.useClass}(t);if(o||i){const l=(i?k(t.useClass):t).prototype.ngOnDestroy;if(l){const u=e.destroyHooks||(e.destroyHooks=[]);if(!o&&t.multi){const c=u.indexOf(n);-1===c?u.push(n,[r,l]):u[c+1].push(r,l)}else u.push(n,l)}}}function xy(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function vc(e,t,n,r){for(let o=n;o<r;o++)if(t[o]===e)return o;return-1}function kA(e,t,n,r){return _c(this.multi,[])}function LA(e,t,n,r){const o=this.multi;let i;if(this.providerFactory){const s=this.providerFactory.componentProviders,a=jo(n,n[1],this.providerFactory.index,r);i=a.slice(0,s),_c(o,i);for(let l=s;l<a.length;l++)i.push(a[l])}else i=[],_c(o,i);return i}function _c(e,t){for(let n=0;n<e.length;n++)t.push((0,e[n])());return t}function ge(e,t=[]){return n=>{n.providersResolver=(r,o)=>
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
function OA(e,t,n){const r=Y();if(r.firstCreatePass){const o=Lt(e);mc(n,r.data,r.blueprint,o,!0),mc(t,r.data,r.blueprint,o,!1)}}(r,o?o(e):e,t)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class yr{}class Ry{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ny extends yr{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new ac(this);const r=pt(t);this._bootstrapComponents=Cn(r.bootstrap),this._r3Injector=vg(t,n,[{provide:yr,useValue:this},{provide:ni,useValue:this.componentFactoryResolver}],se(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(t)}get injector(){return this._r3Injector}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class Dc extends Ry{constructor(t){super(),this.moduleType=t}create(t){return new Ny(this.moduleType,t)}}class jA extends yr{constructor(t,n,r){super(),this.componentFactoryResolver=new ac(this),this.instance=null;const o=new Ap([...t,{provide:yr,useValue:this},{provide:ni,useValue:this.componentFactoryResolver}],n||Rs(),r,new Set(["environment"]));this.injector=o,o.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}}function Xs(e,t,n=null){return new jA(e,t,n).injector}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let BA=(()=>{class e{constructor(n){this._injector=n,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n.id)){const r=bp(0,n.type),o=r.length>0?Xs([r],this._injector,`Standalone[${n.type.name}]`):null;this.cachedInjectors.set(n.id,o)}return this.cachedInjectors.get(n.id)}ngOnDestroy(){try{for(const n of this.cachedInjectors.values())null!==n&&n.destroy()}finally{this.cachedInjectors.clear()}}}return e.\u0275prov=F({token:e,providedIn:"environment",factory:()=>new e(M(zn))}),e})();function Fy(e){e.getStandaloneInjector=t=>t.get(BA).getOrCreateStandaloneInjector(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function jy(e,t,n,r){return function By(e,t,n,r,o,i){const s=t+n;return We(e,s,o)?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function rn(e,t,n){return e[t]=n}(e,s+1,i?r.call(i,o):r(o)):function vi(e,t){const n=e[t];return n===j?void 0:n}(e,s+1)}(D(),function Xe(){const e=V.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}(),e,t,n,r)}function wc(e){return t=>{setTimeout(e,void 0,t)}}const we=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class fT extends Ze{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&"object"==typeof t){var a,l,u;const d=t;o=null===(a=d.next)||void 0===a?void 0:a.bind(d),i=null===(l=d.error)||void 0===l?void 0:l.bind(d),s=null===(u=d.complete)||void 0===u?void 0:u.bind(d)}this.__isAsync&&(i=wc(i),o&&(o=wc(o)),s&&(s=wc(s)));const c=super.subscribe({next:o,error:i,complete:s});return t instanceof ct&&t.add(c),c}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function hT(){return this._results[hr()]()}class Ec{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=hr(),r=Ec.prototype;r[n]||(r[n]=hT)}get changes(){return this._changes||(this._changes=new we)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const r=this;r.dirty=!1;const o=yt(t);(this._changesDetected=!function pb(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}(r._results,o,n))&&(r._results=o,r.length=o.length,r.last=o[this.length-1],r.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let An=(()=>{class e{}return e.__NG_ELEMENT_ID__=mT,e})();const pT=An,gT=class extends pT{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t,n){const r=this._declarationTContainer.tViews,o=$s(this._declarationLView,r,t,16,null,r.declTNode,null,null,null,null,n||null);o[17]=this._declarationLView[this._declarationTContainer.index];const s=this._declarationLView[19];return null!==s&&(o[19]=s.createEmbeddedView(r)),Yu(r,o,t),new ai(o)}};function mT(){return ea(Pe(),D())}function ea(e,t){return 4&e.type?new gT(t,e,Kr(e,t)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ut=(()=>{class e{}return e.__NG_ELEMENT_ID__=yT,e})();function yT(){return Qy(Pe(),D())}const vT=Ut,Wy=class extends vT{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return Kr(this._hostTNode,this._hostLView)}get injector(){return new $r(this._hostTNode,this._hostLView)}get parentInjector(){const t=_s(this._hostTNode,this._hostLView);if($h(t)){const n=Vr(t,this._hostLView),r=Lr(t);return new $r(n[1].data[r+8],n)}return new $r(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=qy(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){let o,i;"number"==typeof r?o=r:null!=r&&(o=r.index,i=r.injector);const s=t.createEmbeddedView(n||{},i);return this.insert(s,o),s}createComponent(t,n,r,o,i){const s=t&&!function Uo(e){return"function"==typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t);let a;if(s)a=n;else{const d=n||{};a=d.index,r=d.injector,o=d.projectableNodes,i=d.environmentInjector||d.ngModuleRef}const l=s?t:new li(ne(t)),u=r||this.parentInjector;if(!i&&null==l.ngModule){const f=(s?u:this.parentInjector).get(zn,null);f&&(i=f)}const c=l.create(u,o,void 0,i);return this.insert(c.hostView,a),c}insert(t,n){const r=t._lView,o=r[1];if(function OE(e){return kt(e[3])}(r)){const c=this.indexOf(t);if(-1!==c)this.detach(c);else{const d=r[3],f=new Wy(d,d[6],d[3]);f.detach(f.indexOf(t))}}const i=this._adjustIndex(n),s=this._lContainer;!function fS(e,t,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-10?(t[4]=n[o],Zh(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function hS(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const a=t[19];null!==a&&a.insertView(e),t[2]|=64}(o,r,s,i);const a=Nu(i,s),l=r[z],u=Ns(l,s[7]);return null!==u&&function uS(e,t,n,r,o,i){r[0]=o,r[6]=t,si(e,r,n,1,o,i)}(o,s[6],l,r,u,a),t.attachToViewContainerRef(),Zh(bc(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=qy(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=Tu(this._lContainer,n);r&&(ws(bc(this._lContainer),n),Kp(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=Tu(this._lContainer,n);return r&&null!=ws(bc(this._lContainer),n)?new ai(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function qy(e){return e[8]}function bc(e){return e[8]||(e[8]=[])}function Qy(e,t){let n;const r=t[e.index];if(kt(r))n=r;else{let o;if(8&e.type)o=Te(r);else{const i=t[z];o=i.createComment("");const s=It(e,t);fr(i,Ns(i,s),o,function yS(e,t){return e.nextSibling(t)}(i,s),!1)}t[e.index]=n=Qg(r,t,o,e),Bs(t,n)}return new Wy(n,e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Sc{constructor(t){this.queryList=t,this.matches=null}clone(){return new Sc(this.queryList)}setDirty(){this.queryList.setDirty()}}class Mc{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const r=null!==t.contentQueries?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){const s=n.getByIndex(i);o.push(this.queries[s.indexInDeclarationView].clone())}return new Mc(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==Xy(t,n).matches&&this.queries[n].setDirty()}}class Ky{constructor(t,n,r=null){this.predicate=t,this.flags=n,this.read=r}}class Ic{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){const o=null!==n?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,null!==n?n.push(i):n=[i])}return null!==n?new Ic(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class Ac{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new Ac(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=t.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];this.matchTNodeWithReadOption(t,n,CT(n,i)),this.matchTNodeWithReadOption(t,n,Cs(n,t,i,!1,!1))}else r===An?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,Cs(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(null!==r){const o=this.metadata.read;if(null!==o)if(o===_t||o===Ut||o===An&&4&n.type)this.addMatch(n.index,-2);else{const i=Cs(n,t,o,!1,!1);null!==i&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function CT(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function ET(e,t,n,r){return-1===n?function wT(e,t){return 11&e.type?Kr(e,t):4&e.type?ea(e,t):null}(t,e):-2===n?function bT(e,t,n){return n===_t?Kr(t,e):n===An?ea(t,e):n===Ut?Qy(t,e):void 0}(e,t,r):jo(e,e[1],n,t)}function Zy(e,t,n,r){const o=t[19].queries[r];if(null===o.matches){const i=e.data,s=n.matches,a=[];for(let l=0;l<s.length;l+=2){const u=s[l];a.push(u<0?null:ET(t,i[u],s[l+1],n.metadata.read))}o.matches=a}return o.matches}function Tc(e,t,n,r){const o=e.queries.getByIndex(n),i=o.matches;if(null!==i){const s=Zy(e,t,o,n);for(let a=0;a<i.length;a+=2){const l=i[a];if(l>0)r.push(s[a/2]);else{const u=i[a+1],c=t[-l];for(let d=10;d<c.length;d++){const f=c[d];f[17]===f[3]&&Tc(f[1],f,u,r)}if(null!==c[9]){const d=c[9];for(let f=0;f<d.length;f++){const h=d[f];Tc(h[1],h,u,r)}}}}}return r}function go(e){const t=D(),n=Y(),r=Th();Vl(r+1);const o=Xy(n,r);if(e.dirty&&function PE(e){return 4==(4&e[2])}(t)===(2==(2&o.metadata.flags))){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?Tc(n,t,r,[]):Zy(n,t,o,r);e.reset(i,M0),e.notifyOnChanges()}return!0}return!1}function ta(e,t,n){const r=Y();r.firstCreatePass&&(function Jy(e,t,n){null===e.queries&&(e.queries=new Ic),e.queries.track(new Ac(t,n))}(r,new Ky(e,t,n),-1),2==(2&t)&&(r.staticViewQueries=!0)),function Yy(e,t,n){const r=new Ec(4==(4&n));$g(e,t,r,r.destroy),null===t[19]&&(t[19]=new Mc),t[19].queries.push(new Sc(r))}(r,D(),t)}function mo(){return function ST(e,t){return e[19].queries[t].queryList}(D(),Th())}function Xy(e,t){return e.queries.getByIndex(t)}
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
function ra(...e){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const oa=new x("Application Initializer");let ia=(()=>{class e{constructor(n){this.appInits=n,this.resolve=ra,this.reject=ra,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const i=this.appInits[o]();if(di(i))n.push(i);else if(dc(i)){const s=new Promise((a,l)=>{i.subscribe({complete:a,error:l})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(M(oa,8))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ci=new x("AppId",{providedIn:"root",factory:function vv(){return`${Oc()}${Oc()}${Oc()}`}});function Oc(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const _v=new x("Platform Initializer"),kc=new x("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),Dv=new x("appBootstrapListener");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let qT=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Tn=new x("LocaleId",{providedIn:"root",factory:()=>Se(Tn,P.Optional|P.SkipSelf)||function QT(){return typeof $localize<"u"&&$localize.locale||po}()});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ZT{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let Lc=(()=>{class e{compileModuleSync(n){return new Dc(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const r=this.compileModuleSync(n),i=Cn(pt(n).declarations).reduce((s,a)=>{const l=ne(a);return l&&s.push(new li(l)),s},[]);return new ZT(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const XT=(()=>Promise.resolve(0))();function Vc(e){typeof Zone>"u"?XT.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
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
class Le{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new we(!1),this.onMicrotaskEmpty=new we(!1),this.onStable=new we(!1),this.onError=new we(!1),typeof Zone>"u")throw new C(908,!1);Zone.assertZonePatched();const o=this;if(o._nesting=0,o._outer=o._inner=Zone.current,Zone.AsyncStackTaggingZoneSpec){const i=Zone.AsyncStackTaggingZoneSpec;o._inner=o._inner.fork(new i("Angular"))}Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function ex(){let e=ae.requestAnimationFrame,t=ae.cancelAnimationFrame;if(typeof Zone<"u"&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function rx(e){const t=()=>{!function nx(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(ae,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,jc(e),e.isCheckStableRunning=!0,$c(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),jc(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,a)=>{try{return Ev(e),n.invokeTask(o,i,s,a)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),bv(e)}},onInvoke:(n,r,o,i,s,a,l)=>{try{return Ev(e),n.invoke(o,i,s,a,l)}finally{e.shouldCoalesceRunChangeDetection&&t(),bv(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(e._hasPendingMicrotasks=i.microTask,jc(e),$c(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Le.isInAngularZone())throw new C(909,!1)}static assertNotInAngularZone(){if(Le.isInAngularZone())throw new C(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,tx,ra,ra);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const tx={};function $c(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function jc(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function Ev(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function bv(e){e._nesting--,$c(e)}class ox{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new we,this.onMicrotaskEmpty=new we,this.onStable=new we,this.onError=new we}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Sv=new x(""),sa=new x("");let Uc,Bc=(()=>{class e{constructor(n,r,o){this._ngZone=n,this.registry=r,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,Uc||(function ix(e){Uc=e}(o),o.addToWindow(r)),this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Le.assertNotInAngularZone(),Vc(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Vc(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let i=-1;r&&r>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(n){this.registry.registerApplication(n,this)}unregisterApplication(n){this.registry.unregisterApplication(n)}findProviders(n,r,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(M(Le),M(Hc),M(sa))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})(),Hc=(()=>{class e{constructor(){this._applications=new Map}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){var o,i;return null!==(o=null===(i=Uc)||void 0===i?void 0:i.findTestabilityInTree(this,n,r))&&void 0!==o?o:null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})(),Qn=null;const Mv=new x("AllowMultipleToken"),Gc=new x("PlatformDestroyListeners");class Iv{constructor(t,n){this.name=t,this.token=n}}function Tv(e,t,n=[]){const r=`Platform: ${t}`,o=new x(r);return(i=[])=>{let s=zc();if(!s||s.injector.get(Mv,!1)){const a=[...n,...i,{provide:o,useValue:!0}];e?e(a):function lx(e){if(Qn&&!Qn.get(Mv,!1))throw new C(400,!1);Qn=e;const t=e.get(Rv);(function Av(e){const t=e.get(_v,null);t&&t.forEach(n=>n())})(e)}(function xv(e=[],t){return Dt.create({name:t,providers:[{provide:cu,useValue:"platform"},{provide:Gc,useValue:new Set([()=>Qn=null])},...e]})}(a,r))}return function cx(e){const t=zc();if(!t)throw new C(401,!1);return t}()}}function zc(){var e,t;return null!==(e=null===(t=Qn)||void 0===t?void 0:t.get(Rv))&&void 0!==e?e:null}let Rv=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const o=function Fv(e,t){let n;return n="noop"===e?new ox:("zone.js"===e?void 0:e)||new Le(t),n}(r?.ngZone,function Nv(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!e||!e.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!e||!e.ngZoneRunCoalescing)||!1}}(r)),i=[{provide:Le,useValue:o}];return o.run(()=>{const s=Dt.create({providers:i,parent:this.injector,name:n.moduleType.name}),a=n.create(s),l=a.injector.get(Zr,null);if(!l)throw new C(402,!1);return o.runOutsideAngular(()=>{const u=o.onError.subscribe({next:c=>{l.handleError(c)}});a.onDestroy(()=>{la(this._modules,a),u.unsubscribe()})}),function Pv(e,t,n){try{const r=n();return di(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(l,o,()=>{const u=a.injector.get(ia);return u.runInitializers(),u.donePromise.then(()=>(function sy(e){ft(e,"Expected localeId to be defined"),"string"==typeof e&&(iy=e.toLowerCase().replace(/_/g,"-"))}(a.injector.get(Tn,po)||po),this._moduleDoBootstrap(a),a))})})}bootstrapModule(n,r=[]){const o=Ov({},r);return function sx(e,t,n){const r=new Dc(n);return Promise.resolve(r)}(0,0,n).then(i=>this.bootstrapModuleFactory(i,o))}_moduleDoBootstrap(n){const r=n.injector.get(aa);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new C(403,!1);n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new C(404,!1);this._modules.slice().forEach(r=>r.destroy()),this._destroyListeners.forEach(r=>r());const n=this._injector.get(Gc,null);n&&(n.forEach(r=>r()),n.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(M(Dt))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();function Ov(e,t){return Array.isArray(t)?t.reduce(Ov,e):{...e,...t}}let aa=(()=>{class e{constructor(n,r,o){this._zone=n,this._injector=r,this._exceptionHandler=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const i=new Ee(a=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{a.next(this._stable),a.complete()})}),s=new Ee(a=>{let l;this._zone.runOutsideAngular(()=>{l=this._zone.onStable.subscribe(()=>{Le.assertNotInAngularZone(),Vc(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,a.next(!0))})})});const u=this._zone.onUnstable.subscribe(()=>{Le.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{a.next(!1)}))});return()=>{l.unsubscribe(),u.unsubscribe()}});this.isStable=function rE(...e){const t=xo(e),n=function Zw(e,t){return"number"==typeof ml(e)?e.pop():t}(e,1/0),r=e;return r.length?1===r.length?Nt(r[0]):Tr(n)(Ae(r,t)):hn}(i,s.pipe(function oE(e={}){const{connector:t=(()=>new Ze),resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:o=!0}=e;return i=>{let s,a,l,u=0,c=!1,d=!1;const f=()=>{a?.unsubscribe(),a=void 0},h=()=>{f(),s=l=void 0,c=d=!1},p=()=>{const g=s;h(),g?.unsubscribe()};return Ie((g,_)=>{u++,!d&&!c&&f();const y=l=l??t();_.add(()=>{u--,0===u&&!d&&!c&&(a=yl(p,o))}),y.subscribe(_),!s&&u>0&&(s=new To({next:w=>y.next(w),error:w=>{d=!0,f(),a=yl(h,n,w),y.error(w)},complete:()=>{c=!0,f(),a=yl(h,r),y.complete()}}),Nt(g).subscribe(s))})(i)}}()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(n,r){const o=n instanceof xp;if(!this._injector.get(ia).done)throw!o&&function Rr(e){const t=ne(e)||Ye(e)||Je(e);return null!==t&&t.standalone}(n),new C(405,false);let s;s=o?n:this._injector.get(ni).resolveComponentFactory(n),this.componentTypes.push(s.componentType);const a=function ax(e){return e.isBoundToModule}(s)?void 0:this._injector.get(yr),u=s.create(Dt.NULL,[],r||s.selector,a),c=u.location.nativeElement,d=u.injector.get(Sv,null);return d?.registerApplication(c),u.onDestroy(()=>{this.detachView(u.hostView),la(this.components,u),d?.unregisterApplication(c)}),this._loadComponent(u),u}tick(){if(this._runningTick)throw new C(101,!1);try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;la(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(Dv,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>la(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new C(406,!1);const n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return e.\u0275fac=function(n){return new(n||e)(M(Le),M(zn),M(Zr))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function la(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Lv=!0,ua=(()=>{class e{}return e.__NG_ELEMENT_ID__=hx,e})();function hx(e){return function px(e,t,n){if(us(e)&&!n){const r=mt(e.index,t);return new ai(r,r)}return 47&e.type?new ai(t[16],t):null}
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
class Hv{constructor(){}supports(t){return ui(t)}create(t){return new Dx(t)}}const _x=(e,t)=>t;class Dx{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||_x}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){const s=!r||n&&n.currentIndex<Gv(r,o,i)?n:r,a=Gv(s,o,i),l=s.currentIndex;if(s===r)o--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)o++;else{i||(i=[]);const u=a-o,c=l-o;if(u!=c){for(let f=0;f<u;f++){const h=f<i.length?i[f]:i[f]=0,p=h+f;c<=p&&p<u&&(i[f]=h+1)}i[s.previousIndex]=c-u}}a!==l&&t(s,a,l)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!ui(t))throw new C(900,!1);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let o,i,s,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let a=0;a<this.length;a++)i=t[a],s=this._trackByFn(a,i),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,i,s,a)),Object.is(n.item,i)||this._addIdentityChange(n,i)):(n=this._mismatch(n,i,s,a),r=!0),n=n._next}else o=0,function zM(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[hr()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,a=>{s=this._trackByFn(o,a),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,a,s,o)),Object.is(n.item,a)||this._addIdentityChange(n,a)):(n=this._mismatch(n,a,s,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,o){let i;return null===t?i=this._itTail:(i=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,o)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,o)):t=this._addAfter(new Cx(n,r),i,o),t}_verifyReinsertion(t,n,r,o){let i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==i?t=this._reinsertAfter(i,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const o=t._prevRemoved,i=t._nextRemoved;return null===o?this._removalsHead=i:o._nextRemoved=i,null===i?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const o=null===n?this._itHead:n._next;return t._next=o,t._prev=n,null===o?this._itTail=t:o._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new Uv),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Uv),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class Cx{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class wx{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class Uv{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new wx,this.map.set(n,r)),r.add(t)}get(t,n){const o=this.map.get(t);return o?o.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Gv(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class zv{constructor(){}supports(t){return t instanceof Map||uc(t)}create(){return new Ex}}class Ex{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||uc(t)))throw new C(900,!1)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const i=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,i)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const r=t._prev;return n._next=t,n._prev=r,t._prev=n,r&&(r._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const o=this._records.get(t);this._maybeAddToChanges(o,n);const i=o._prev,s=o._next;return i&&(i._next=s),s&&(s._prev=i),o._next=null,o._prev=null,o}const r=new bx(t);return this._records.set(t,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(r=>n(t[r],r))}}class bx{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Wv(){return new fa([new Hv])}let fa=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||Wv()),deps:[[e,new Ko,new Qo]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new C(901,!1)}}return e.\u0275prov=F({token:e,providedIn:"root",factory:Wv}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function qv(){return new wi([new zv])}let wi=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||qv()),deps:[[e,new Ko,new Qo]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(r)return r;throw new C(901,!1)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=F({token:e,providedIn:"root",factory:qv}),e})();const Ix=Tv(null,"core",[]);
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
let Ax=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(M(aa))},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({}),e})(),ha=null;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ln(){return ha}
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
       */let Zc=(()=>{class e{historyGo(n){throw new Error("Not implemented")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:function(){return function Nx(){return M(Qv)}()},providedIn:"platform"}),e})();const Fx=new x("Location Initialized");let Qv=(()=>{class e extends Zc{constructor(n){super(),this._doc=n,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ln().getBaseHref(this._doc)}onPopState(n){const r=ln().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){const r=ln().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(n){this.location.pathname=n}pushState(n,r,o){Kv()?this._history.pushState(n,r,o):this.location.hash=o}replaceState(n,r,o){Kv()?this._history.replaceState(n,r,o):this.location.hash=o}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}}return e.\u0275fac=function(n){return new(n||e)(M(ot))},e.\u0275prov=F({token:e,factory:function(){return function Px(){return new Qv(M(ot))}
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
       */()},providedIn:"platform"}),e})();function Kv(){return!!window.history.pushState}function Yc(e,t){if(0==e.length)return t;if(0==t.length)return e;let n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,2==n?e+t.substring(1):1==n?e+t:e+"/"+t}function Zv(e){const t=e.match(/#|\?|$/),n=t&&t.index||e.length;return e.slice(0,n-("/"===e[n-1]?1:0))+e.slice(n)}function Nn(e){return e&&"?"!==e[0]?"?"+e:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let _r=(()=>{class e{historyGo(n){throw new Error("Not implemented")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:function(){return Se(Jv)},providedIn:"root"}),e})();const Yv=new x("appBaseHref");let Jv=(()=>{class e extends _r{constructor(n,r){var o,i,s;super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=null!==(o=null!==(i=r??this._platformLocation.getBaseHrefFromDOM())&&void 0!==i?i:null===(s=Se(ot).location)||void 0===s?void 0:s.origin)&&void 0!==o?o:""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Yc(this._baseHref,n)}path(n=!1){const r=this._platformLocation.pathname+Nn(this._platformLocation.search),o=this._platformLocation.hash;return o&&n?`${r}${o}`:r}pushState(n,r,o,i){const s=this.prepareExternalUrl(o+Nn(i));this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){const s=this.prepareExternalUrl(o+Nn(i));this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){var r,o;null===(r=(o=this._platformLocation).historyGo)||void 0===r||r.call(o,n)}}return e.\u0275fac=function(n){return new(n||e)(M(Zc),M(Yv,8))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Ox=(()=>{class e extends _r{constructor(n,r){super(),this._platformLocation=n,this._baseHref="",this._removeListenerFns=[],null!=r&&(this._baseHref=r)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}path(n=!1){let r=this._platformLocation.hash;return null==r&&(r="#"),r.length>0?r.substring(1):r}prepareExternalUrl(n){const r=Yc(this._baseHref,n);return r.length>0?"#"+r:r}pushState(n,r,o,i){let s=this.prepareExternalUrl(o+Nn(i));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){let s=this.prepareExternalUrl(o+Nn(i));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){var r,o;null===(r=(o=this._platformLocation).historyGo)||void 0===r||r.call(o,n)}}return e.\u0275fac=function(n){return new(n||e)(M(Zc),M(Yv,8))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})(),Jc=(()=>{class e{constructor(n){this._subject=new we,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;const r=this._locationStrategy.getBaseHref();this._baseHref=Zv(Xv(r)),this._locationStrategy.onPopState(o=>{this._subject.emit({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){var n;null===(n=this._urlChangeSubscription)||void 0===n||n.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+Nn(r))}normalize(n){return e.stripTrailingSlash(function Lx(e,t){return e&&t.startsWith(e)?t.substring(e.length):t}(this._baseHref,Xv(n)))}prepareExternalUrl(n){return n&&"/"!==n[0]&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",o=null){this._locationStrategy.pushState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+Nn(r)),o)}replaceState(n,r="",o=null){this._locationStrategy.replaceState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+Nn(r)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){var r,o;null===(r=(o=this._locationStrategy).historyGo)||void 0===r||r.call(o,n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)})),()=>{const r=this._urlChangeListeners.indexOf(n);var o;this._urlChangeListeners.splice(r,1),0===this._urlChangeListeners.length&&(null===(o=this._urlChangeSubscription)||void 0===o||o.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(o=>o(n,r))}subscribe(n,r,o){return this._subject.subscribe({next:n,error:r,complete:o})}}return e.normalizeQueryParams=Nn,e.joinWithSlash=Yc,e.stripTrailingSlash=Zv,e.\u0275fac=function(n){return new(n||e)(M(_r))},e.\u0275prov=F({token:e,factory:function(){return function kx(){return new Jc(M(_r))}()},providedIn:"root"}),e})();
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
       */let Si=(()=>{class e{constructor(n,r,o,i){this._iterableDiffers=n,this._keyValueDiffers=r,this._ngEl=o,this._renderer=i,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(n){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof n?n.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(n){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof n?n.split(/\s+/):n,this._rawClass&&(ui(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const n=this._iterableDiffer.diff(this._rawClass);n&&this._applyIterableChanges(n)}else if(this._keyValueDiffer){const n=this._keyValueDiffer.diff(this._rawClass);n&&this._applyKeyValueChanges(n)}}_applyKeyValueChanges(n){n.forEachAddedItem(r=>this._toggleClass(r.key,r.currentValue)),n.forEachChangedItem(r=>this._toggleClass(r.key,r.currentValue)),n.forEachRemovedItem(r=>{r.previousValue&&this._toggleClass(r.key,!1)})}_applyIterableChanges(n){n.forEachAddedItem(r=>{if("string"!=typeof r.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${se(r.item)}`);this._toggleClass(r.item,!0)}),n.forEachRemovedItem(r=>this._toggleClass(r.item,!1))}_applyClasses(n){n&&(Array.isArray(n)||n instanceof Set?n.forEach(r=>this._toggleClass(r,!0)):Object.keys(n).forEach(r=>this._toggleClass(r,!!n[r])))}_removeClasses(n){n&&(Array.isArray(n)||n instanceof Set?n.forEach(r=>this._toggleClass(r,!1)):Object.keys(n).forEach(r=>this._toggleClass(r,!1)))}_toggleClass(n,r){(n=n.trim())&&n.split(/\s+/g).forEach(o=>{r?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}}return e.\u0275fac=function(n){return new(n||e)(v(fa),v(wi),v(_t),v(Dn))},e.\u0275dir=L({type:e,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"},standalone:!0}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class C1{constructor(t,n,r,o){this.$implicit=t,this.ngForOf=n,this.index=r,this.count=o}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let Mi=(()=>{class e{constructor(n,r,o){this._viewContainer=n,this._template=r,this._differs=o,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const n=this._ngForOf;!this._differ&&n&&(this._differ=this._differs.find(n).create(this.ngForTrackBy))}if(this._differ){const n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){const r=this._viewContainer;n.forEachOperation((o,i,s)=>{if(null==o.previousIndex)r.createEmbeddedView(this._template,new C1(o.item,this._ngForOf,-1,-1),null===s?void 0:s);else if(null==s)r.remove(null===i?void 0:i);else if(null!==i){const a=r.get(i);r.move(a,s),d_(a,o)}});for(let o=0,i=r.length;o<i;o++){const a=r.get(o).context;a.index=o,a.count=i,a.ngForOf=this._ngForOf}n.forEachIdentityChange(o=>{d_(r.get(o.currentIndex),o)})}static ngTemplateContextGuard(n,r){return!0}}return e.\u0275fac=function(n){return new(n||e)(v(Ut),v(An),v(fa))},e.\u0275dir=L({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0}),e})();function d_(e,t){e.context.$implicit=t.item}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Dr=(()=>{class e{constructor(n,r){this._viewContainer=n,this._context=new E1,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=r}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){f_("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){f_("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,r){return!0}}return e.\u0275fac=function(n){return new(n||e)(v(Ut),v(An))},e.\u0275dir=L({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0}),e})();class E1{constructor(){this.$implicit=null,this.ngIf=null}}function f_(e,t){if(t&&!t.createEmbeddedView)throw new Error(`${e} must be a TemplateRef, but received '${se(t)}'.`)}
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
let Z1=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({}),e})();
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
let eR=(()=>{class e{}return e.\u0275prov=F({token:e,providedIn:"root",factory:()=>new tR(M(ot),window)}),e})();class tR{constructor(t,n){this.document=t,this.window=n,this.offset=()=>[0,0]}setOffset(t){this.offset=Array.isArray(t)?()=>t:t}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(t){this.supportsScrolling()&&this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){if(!this.supportsScrolling())return;const n=function nR(e,t){const n=e.getElementById(t)||e.getElementsByName(t)[0];if(n)return n;if("function"==typeof e.createTreeWalker&&e.body&&(e.body.createShadowRoot||e.body.attachShadow)){const r=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT);let o=r.currentNode;for(;o;){const i=o.shadowRoot;if(i){const s=i.getElementById(t)||i.querySelector(`[name="${t}"]`);if(s)return s}o=r.nextNode()}}return null}(this.document,t);n&&(this.scrollToElement(n),n.focus())}setHistoryScrollRestoration(t){if(this.supportScrollRestoration()){const n=this.window.history;n&&n.scrollRestoration&&(n.scrollRestoration=t)}}scrollToElement(t){const n=t.getBoundingClientRect(),r=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,i=this.offset();this.window.scrollTo(r-i[0],o-i[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const t=m_(this.window.history)||m_(Object.getPrototypeOf(this.window.history));return!(!t||!t.writable&&!t.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function m_(e){return Object.getOwnPropertyDescriptor(e,"scrollRestoration")}
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
class DR extends class Rx{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function xx(e){ha||(ha=e)}(new pd)}onAndCancel(t,n,r){return t.addEventListener(n,r,!1),()=>{t.removeEventListener(n,r,!1)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,n){return(n=n||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return"window"===n?window:"document"===n?t:"body"===n?t.body:null}getBaseHref(t){const n=function CR(){return Ai=Ai||document.querySelector("base"),Ai?Ai.getAttribute("href"):null}();return null==n?null:function wR(e){ba=ba||document.createElement("a"),ba.setAttribute("href",e);const t=ba.pathname;return"/"===t.charAt(0)?t:`/${t}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}resetBaseElement(){Ai=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return l_(document.cookie,t)}}let ba,Ai=null;const C_=new x("TRANSITION_ID"),bR=[{provide:oa,useFactory:function ER(e,t,n){return()=>{n.get(ia).donePromise.then(()=>{const r=ln(),o=t.querySelectorAll(`style[ng-transition="${e}"]`);for(let i=0;i<o.length;i++)r.remove(o[i])})}},deps:[C_,ot,Dt],multi:!0}];let MR=(()=>{class e{build(){return new XMLHttpRequest}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Sa=new x("EventManagerPlugins");let Ma=(()=>{class e{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(o=>o.manager=this),this._plugins=n.slice().reverse()}addEventListener(n,r,o){return this._findPluginFor(r).addEventListener(n,r,o)}addGlobalEventListener(n,r,o){return this._findPluginFor(r).addGlobalEventListener(n,r,o)}getZone(){return this._zone}_findPluginFor(n){const r=this._eventNameToPlugin.get(n);if(r)return r;const o=this._plugins;for(let i=0;i<o.length;i++){const s=o[i];if(s.supports(n))return this._eventNameToPlugin.set(n,s),s}throw new Error(`No event manager plugin found for event ${n}`)}}return e.\u0275fac=function(n){return new(n||e)(M(Sa),M(Le))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})();class w_{constructor(t){this._doc=t}addGlobalEventListener(t,n,r){const o=ln().getGlobalEventTarget(this._doc,t);if(!o)throw new Error(`Unsupported event target ${o} for event ${n}`);return this.addEventListener(o,n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let E_=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(n){const r=new Set;n.forEach(o=>{this._stylesSet.has(o)||(this._stylesSet.add(o),r.add(o))}),this.onStylesAdded(r)}onStylesAdded(n){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})(),Ti=(()=>{class e extends E_{constructor(n){super(),this._doc=n,this._hostNodes=new Map,this._hostNodes.set(n.head,[])}_addStylesToHost(n,r,o){n.forEach(i=>{const s=this._doc.createElement("style");s.textContent=i,o.push(r.appendChild(s))})}addHost(n){const r=[];this._addStylesToHost(this._stylesSet,n,r),this._hostNodes.set(n,r)}removeHost(n){const r=this._hostNodes.get(n);r&&r.forEach(b_),this._hostNodes.delete(n)}onStylesAdded(n){this._hostNodes.forEach((r,o)=>{this._addStylesToHost(n,o,r)})}ngOnDestroy(){this._hostNodes.forEach(n=>n.forEach(b_))}}return e.\u0275fac=function(n){return new(n||e)(M(ot))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})();function b_(e){ln().remove(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const gd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},md=/%COMP%/g;function Ia(e,t,n){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?Ia(e,o,n):(o=o.replace(md,e),n.push(o))}return n}function I_(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let yd=(()=>{class e{constructor(n,r,o){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.rendererByCompId=new Map,this.defaultRenderer=new vd(n)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;switch(r.encapsulation){case Yt.Emulated:{let o=this.rendererByCompId.get(r.id);return o||(o=new NR(this.eventManager,this.sharedStylesHost,r,this.appId),this.rendererByCompId.set(r.id,o)),o.applyToHost(n),o}case 1:case Yt.ShadowDom:return new FR(this.eventManager,this.sharedStylesHost,n,r);default:if(!this.rendererByCompId.has(r.id)){const o=Ia(r.id,r.styles,[]);this.sharedStylesHost.addStyles(o),this.rendererByCompId.set(r.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(n){return new(n||e)(M(Ma),M(Ti),M(Ci))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})();class vd{constructor(t){this.eventManager=t,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(t,n){return n?document.createElementNS(gd[n]||n,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,n){(T_(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){t&&(T_(t)?t.content:t).insertBefore(n,r)}removeChild(t,n){t&&t.removeChild(n)}selectRootElement(t,n){let r="string"==typeof t?document.querySelector(t):t;if(!r)throw new Error(`The selector "${t}" did not match any elements`);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+":"+n;const i=gd[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){const o=gd[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){o&(lt.DashCase|lt.Important)?t.style.setProperty(n,r,o&lt.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&lt.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t[n]=r}setValue(t,n){t.nodeValue=n}listen(t,n,r){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,n,I_(r)):this.eventManager.addEventListener(t,n,I_(r))}}function T_(e){return"TEMPLATE"===e.tagName&&void 0!==e.content}class NR extends vd{constructor(t,n,r,o){super(t),this.component=r;const i=Ia(o+"-"+r.id,r.styles,[]);n.addStyles(i),this.contentAttr=function TR(e){return"_ngcontent-%COMP%".replace(md,e)}(o+"-"+r.id),this.hostAttr=function xR(e){return"_nghost-%COMP%".replace(md,e)}(o+"-"+r.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,n){const r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}}class FR extends vd{constructor(t,n,r,o){super(t),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const i=Ia(o.id,o.styles,[]);for(let s=0;s<i.length;s++){const a=document.createElement("style");a.textContent=i[s],this.shadowRoot.appendChild(a)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(this.nodeOrShadowRoot(t),n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let PR=(()=>{class e extends w_{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o){return n.addEventListener(r,o,!1),()=>this.removeEventListener(n,r,o)}removeEventListener(n,r,o){return n.removeEventListener(r,o)}}return e.\u0275fac=function(n){return new(n||e)(M(ot))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const x_=["alt","control","meta","shift"],OR={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},kR={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let LR=(()=>{class e extends w_{constructor(n){super(n)}supports(n){return null!=e.parseEventName(n)}addEventListener(n,r,o){const i=e.parseEventName(r),s=e.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ln().onAndCancel(n,i.domEventName,s))}static parseEventName(n){const r=n.toLowerCase().split("."),o=r.shift();if(0===r.length||"keydown"!==o&&"keyup"!==o)return null;const i=e._normalizeKey(r.pop());let s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),x_.forEach(u=>{const c=r.indexOf(u);c>-1&&(r.splice(c,1),s+=u+".")}),s+=i,0!=r.length||0===i.length)return null;const l={};return l.domEventName=o,l.fullKey=s,l}static matchEventFullKeyCode(n,r){let o=OR[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),!(null==o||!o)&&(o=o.toLowerCase()," "===o?o="space":"."===o&&(o="dot"),x_.forEach(s=>{s!==o&&(0,kR[s])(n)&&(i+=s+".")}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{e.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return"esc"===n?"escape":n}}return e.\u0275fac=function(n){return new(n||e)(M(ot))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const BR=Tv(Ix,"browser",[{provide:kc,useValue:"browser"},{provide:_v,useValue:function VR(){pd.makeCurrent()},multi:!0},{provide:ot,useFactory:function jR(){return function $b(e){eu=e}(document),document},deps:[]}]),F_=new x(""),P_=[{provide:sa,useClass:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class SR{addToWindow(t){ae.getAngularTestability=(r,o=!0)=>{const i=t.findTestabilityInTree(r,o);if(null==i)throw new Error("Could not find testability for element.");return i},ae.getAllAngularTestabilities=()=>t.getAllTestabilities(),ae.getAllAngularRootElements=()=>t.getAllRootElements(),ae.frameworkStabilizers||(ae.frameworkStabilizers=[]),ae.frameworkStabilizers.push(r=>{const o=ae.getAllAngularTestabilities();let i=o.length,s=!1;const a=function(l){s=s||l,i--,0==i&&r(s)};o.forEach(function(l){l.whenStable(a)})})}findTestabilityInTree(t,n,r){return null==n?null:t.getTestability(n)??(r?ln().isShadowRoot(n)?this.findTestabilityInTree(t,n.host,!0):this.findTestabilityInTree(t,n.parentElement,!0):null)}},deps:[]},{provide:Sv,useClass:Bc,deps:[Le,Hc,sa]},{provide:Bc,useClass:Bc,deps:[Le,Hc,sa]}],O_=[{provide:cu,useValue:"root"},{provide:Zr,useFactory:function $R(){return new Zr},deps:[]},{provide:Sa,useClass:PR,multi:!0,deps:[ot,Le,kc]},{provide:Sa,useClass:LR,multi:!0,deps:[ot]},{provide:yd,useClass:yd,deps:[Ma,Ti,Ci]},{provide:Np,useExisting:yd},{provide:E_,useExisting:Ti},{provide:Ti,useClass:Ti,deps:[ot]},{provide:Ma,useClass:Ma,deps:[Sa,Le]},{provide:y_,useClass:MR,deps:[]},[]];let HR=(()=>{class e{constructor(n){}static withServerTransition(n){return{ngModule:e,providers:[{provide:Ci,useValue:n.appId},{provide:C_,useExisting:Ci},bR]}}}return e.\u0275fac=function(n){return new(n||e)(M(F_,12))},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({providers:[...O_,...P_],imports:[Z1,Ax]}),e})(),k_=(()=>{class e{constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}}return e.\u0275fac=function(n){return new(n||e)(M(ot))},e.\u0275prov=F({token:e,factory:function(n){let r=null;return r=n?new n:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function GR(){return new k_(M(ot))}(),r},providedIn:"root"}),e})();
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
function R(...e){return Ae(e,xo(e))}function Zn(e,t){return le(t)?je(e,t,1):je(e,1)}function Pn(e,t){return Ie((n,r)=>{let o=0;n.subscribe(be(r,i=>e.call(t,i,o++)&&r.next(i)))})}
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
       */class On{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(n=>{const r=n.indexOf(":");if(r>0){const o=n.slice(0,r),i=o.toLowerCase(),s=n.slice(r+1).trim();this.maybeSetNormalizedName(o,i),this.headers.has(i)?this.headers.get(i).push(s):this.headers.set(i,[s])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(n=>{let r=t[n];const o=n.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(o,r),this.maybeSetNormalizedName(n,o))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const n=this.headers.get(t.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,n){return this.clone({name:t,value:n,op:"a"})}set(t,n){return this.clone({name:t,value:n,op:"s"})}delete(t,n){return this.clone({name:t,value:n,op:"d"})}maybeSetNormalizedName(t,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,t)}init(){this.lazyInit&&(this.lazyInit instanceof On?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(n=>{this.headers.set(n,t.headers.get(n)),this.normalizedNames.set(n,t.normalizedNames.get(n))})}clone(t){const n=new On;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof On?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}applyUpdate(t){const n=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,n);const o=("a"===t.op?this.headers.get(n):void 0)||[];o.push(...r),this.headers.set(n,o);break;case"d":const i=t.value;if(i){let s=this.headers.get(n);if(!s)return;s=s.filter(a=>-1===i.indexOf(a)),0===s.length?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,s)}else this.headers.delete(n),this.normalizedNames.delete(n)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>t(this.normalizedNames.get(n),this.headers.get(n)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class JR{encodeKey(t){return B_(t)}encodeValue(t){return B_(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const eN=/%(\d[a-f0-9])/gi,tN={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function B_(e){return encodeURIComponent(e).replace(eN,(t,n)=>{var r;return null!==(r=tN[n])&&void 0!==r?r:t})}function Aa(e){return`${e}`}class kn{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new JR,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function XR(e,t){const n=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{const i=o.indexOf("="),[s,a]=-1==i?[t.decodeKey(o),""]:[t.decodeKey(o.slice(0,i)),t.decodeValue(o.slice(i+1))],l=n.get(s)||[];l.push(a),n.set(s,l)}),n}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(n=>{const r=t.fromObject[n],o=Array.isArray(r)?r.map(Aa):[Aa(r)];this.map.set(n,o)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const n=this.map.get(t);return n?n[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,n){return this.clone({param:t,value:n,op:"a"})}appendAll(t){const n=[];return Object.keys(t).forEach(r=>{const o=t[r];Array.isArray(o)?o.forEach(i=>{n.push({param:r,value:i,op:"a"})}):n.push({param:r,value:o,op:"a"})}),this.clone(n)}set(t,n){return this.clone({param:t,value:n,op:"s"})}delete(t,n){return this.clone({param:t,value:n,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const n=this.encoder.encodeKey(t);return this.map.get(t).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const n=new kn({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(t),n}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const n=("a"===t.op?this.map.get(t.param):void 0)||[];n.push(Aa(t.value)),this.map.set(t.param,n);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const o=r.indexOf(Aa(t.value));-1!==o&&r.splice(o,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class nN{constructor(){this.map=new Map}set(t,n){return this.map.set(t,n),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function H_(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function U_(e){return typeof Blob<"u"&&e instanceof Blob}function G_(e){return typeof FormData<"u"&&e instanceof FormData}class xi{constructor(t,n,r,o){let i;if(this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function rN(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==r?r:null,i=o):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new On),this.context||(this.context=new nN),this.params){const s=this.params.toString();if(0===s.length)this.urlWithParams=n;else{const a=n.indexOf("?");this.urlWithParams=n+(-1===a?"?":a<n.length-1?"&":"")+s}}else this.params=new kn,this.urlWithParams=n}serializeBody(){return null===this.body?null:H_(this.body)||U_(this.body)||G_(this.body)||function oN(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof kn?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||G_(this.body)?null:U_(this.body)?this.body.type||null:H_(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof kn?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){var n;const r=t.method||this.method,o=t.url||this.url,i=t.responseType||this.responseType,s=void 0!==t.body?t.body:this.body,a=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,l=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let u=t.headers||this.headers,c=t.params||this.params;const d=null!==(n=t.context)&&void 0!==n?n:this.context;return void 0!==t.setHeaders&&(u=Object.keys(t.setHeaders).reduce((f,h)=>f.set(h,t.setHeaders[h]),u)),t.setParams&&(c=Object.keys(t.setParams).reduce((f,h)=>f.set(h,t.setParams[h]),c)),new xi(r,o,s,{params:c,headers:u,context:d,reportProgress:l,responseType:i,withCredentials:a})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Fe=(()=>((Fe=Fe||{})[Fe.Sent=0]="Sent",Fe[Fe.UploadProgress=1]="UploadProgress",Fe[Fe.ResponseHeader=2]="ResponseHeader",Fe[Fe.DownloadProgress=3]="DownloadProgress",Fe[Fe.Response=4]="Response",Fe[Fe.User=5]="User",Fe))();class Cd{constructor(t,n=200,r="OK"){this.headers=t.headers||new On,this.status=void 0!==t.status?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class wd extends Cd{constructor(t={}){super(t),this.type=Fe.ResponseHeader}clone(t={}){return new wd({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class Ta extends Cd{constructor(t={}){super(t),this.type=Fe.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new Ta({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class z_ extends Cd{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ed(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}let xa=(()=>{class e{constructor(n){this.handler=n}request(n,r,o={}){let i;if(n instanceof xi)i=n;else{let l,u;l=o.headers instanceof On?o.headers:new On(o.headers),o.params&&(u=o.params instanceof kn?o.params:new kn({fromObject:o.params})),i=new xi(n,r,void 0!==o.body?o.body:null,{headers:l,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials})}const s=R(i).pipe(Zn(l=>this.handler.handle(l)));if(n instanceof xi||"events"===o.observe)return s;const a=s.pipe(Pn(l=>l instanceof Ta));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return a.pipe(q(l=>{if(null!==l.body&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return a.pipe(q(l=>{if(null!==l.body&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return a.pipe(q(l=>{if(null!==l.body&&"string"!=typeof l.body)throw new Error("Response is not a string.");return l.body}));default:return a.pipe(q(l=>l.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:(new kn).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,Ed(o,r))}post(n,r,o={}){return this.request("POST",n,Ed(o,r))}put(n,r,o={}){return this.request("PUT",n,Ed(o,r))}}return e.\u0275fac=function(n){return new(n||e)(M($_))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class W_{constructor(t,n){this.next=t,this.interceptor=n}handle(t){return this.interceptor.intercept(t,this.next)}}const q_=new x("HTTP_INTERCEPTORS");let iN=(()=>{class e{intercept(n,r){return r.handle(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})();
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
const sN=/^\)\]\}',?\n/;let Q_=(()=>{class e{constructor(n){this.xhrFactory=n}handle(n){if("JSONP"===n.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new Ee(r=>{const o=this.xhrFactory.build();if(o.open(n.method,n.urlWithParams),n.withCredentials&&(o.withCredentials=!0),n.headers.forEach((h,p)=>o.setRequestHeader(h,p.join(","))),n.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){const h=n.detectContentTypeHeader();null!==h&&o.setRequestHeader("Content-Type",h)}if(n.responseType){const h=n.responseType.toLowerCase();o.responseType="json"!==h?h:"text"}const i=n.serializeBody();let s=null;const a=()=>{if(null!==s)return s;const h=o.statusText||"OK",p=new On(o.getAllResponseHeaders()),g=function aN(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(o)||n.url;return s=new wd({headers:p,status:o.status,statusText:h,url:g}),s},l=()=>{let{headers:h,status:p,statusText:g,url:_}=a(),y=null;204!==p&&(y=typeof o.response>"u"?o.responseText:o.response),0===p&&(p=y?200:0);let w=p>=200&&p<300;if("json"===n.responseType&&"string"==typeof y){const m=y;y=y.replace(sN,"");try{y=""!==y?JSON.parse(y):null}catch(b){y=m,w&&(w=!1,y={error:b,text:y})}}w?(r.next(new Ta({body:y,headers:h,status:p,statusText:g,url:_||void 0})),r.complete()):r.error(new z_({error:y,headers:h,status:p,statusText:g,url:_||void 0}))},u=h=>{const{url:p}=a(),g=new z_({error:h,status:o.status||0,statusText:o.statusText||"Unknown Error",url:p||void 0});r.error(g)};let c=!1;const d=h=>{c||(r.next(a()),c=!0);let p={type:Fe.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),"text"===n.responseType&&!!o.responseText&&(p.partialText=o.responseText),r.next(p)},f=h=>{let p={type:Fe.UploadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),r.next(p)};return o.addEventListener("load",l),o.addEventListener("error",u),o.addEventListener("timeout",u),o.addEventListener("abort",u),n.reportProgress&&(o.addEventListener("progress",d),null!==i&&o.upload&&o.upload.addEventListener("progress",f)),o.send(i),r.next({type:Fe.Sent}),()=>{o.removeEventListener("error",u),o.removeEventListener("abort",u),o.removeEventListener("load",l),o.removeEventListener("timeout",u),n.reportProgress&&(o.removeEventListener("progress",d),null!==i&&o.upload&&o.upload.removeEventListener("progress",f)),o.readyState!==o.DONE&&o.abort()}})}}return e.\u0275fac=function(n){return new(n||e)(M(y_))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const bd=new x("XSRF_COOKIE_NAME"),Sd=new x("XSRF_HEADER_NAME");class K_{}let lN=(()=>{class e{constructor(n,r,o){this.doc=n,this.platform=r,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=l_(n,this.cookieName),this.lastCookieString=n),this.lastToken}}return e.\u0275fac=function(n){return new(n||e)(M(ot),M(kc),M(bd))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})(),Md=(()=>{class e{constructor(n,r){this.tokenService=n,this.headerName=r}intercept(n,r){const o=n.url.toLowerCase();if("GET"===n.method||"HEAD"===n.method||o.startsWith("http://")||o.startsWith("https://"))return r.handle(n);const i=this.tokenService.getToken();return null!==i&&!n.headers.has(this.headerName)&&(n=n.clone({headers:n.headers.set(this.headerName,i)})),r.handle(n)}}return e.\u0275fac=function(n){return new(n||e)(M(K_),M(Sd))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})(),uN=(()=>{class e{constructor(n,r){this.backend=n,this.injector=r,this.chain=null}handle(n){if(null===this.chain){const r=this.injector.get(q_,[]);this.chain=r.reduceRight((o,i)=>new W_(o,i),this.backend)}return this.chain.handle(n)}}return e.\u0275fac=function(n){return new(n||e)(M(j_),M(Dt))},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})(),cN=(()=>{class e{static disable(){return{ngModule:e,providers:[{provide:Md,useClass:iN}]}}static withOptions(n={}){return{ngModule:e,providers:[n.cookieName?{provide:bd,useValue:n.cookieName}:[],n.headerName?{provide:Sd,useValue:n.headerName}:[]]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({providers:[Md,{provide:q_,useExisting:Md,multi:!0},{provide:K_,useClass:lN},{provide:bd,useValue:"XSRF-TOKEN"},{provide:Sd,useValue:"X-XSRF-TOKEN"}]}),e})(),dN=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({providers:[xa,{provide:$_,useClass:uN},Q_,{provide:j_,useExisting:Q_}],imports:[cN.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]}),e})();
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
class qt extends Ze{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){const n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){const{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}}const Ra=Ao(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}),{isArray:fN}=Array,{getPrototypeOf:hN,prototype:pN,keys:gN}=Object;function Z_(e){if(1===e.length){const t=e[0];if(fN(t))return{args:t,keys:null};if(function mN(e){return e&&"object"==typeof e&&hN(e)===pN}(t)){const n=gN(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}const{isArray:yN}=Array;function Y_(e){return q(t=>function vN(e,t){return yN(t)?e(...t):e(t)}(e,t))}function J_(e,t){return e.reduce((n,r,o)=>(n[r]=t[o],n),{})}function X_(...e){const t=xo(e),n=ih(e),{args:r,keys:o}=Z_(e);if(0===r.length)return Ae([],t);const i=new Ee(function _N(e,t,n=$n){return r=>{eD(t,()=>{const{length:o}=e,i=new Array(o);let s=o,a=o;for(let l=0;l<o;l++)eD(t,()=>{const u=Ae(e[l],t);let c=!1;u.subscribe(be(r,d=>{i[l]=d,c||(c=!0,a--),a||r.next(n(i.slice()))},()=>{--s||r.complete()}))},r)},r)}}(r,t,o?s=>J_(o,s):$n));return n?i.pipe(Y_(n)):i}function eD(e,t,n){e?fn(n,e,t):t()}function Id(...e){return function DN(){return Tr(1)}()(Ae(e,xo(e)))}function tD(e){return new Ee(t=>{Nt(e()).subscribe(t)})}function Yn(e,t){const n=le(e)?e:()=>e,r=o=>o.error(n());return new Ee(t?o=>t.schedule(r,0,o):r)}function Ad(){return Ie((e,t)=>{let n=null;e._refCount++;const r=be(t,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount)return void(n=null);const o=e._connection,i=n;n=null,o&&(!i||o===i)&&o.unsubscribe(),t.unsubscribe()});e.subscribe(r),r.closed||(n=e.connect())})}class nD extends Ee{constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,zf(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){const t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new ct;const n=this.getSubject();t.add(this.source.subscribe(be(n,void 0,()=>{this._teardown(),n.complete()},r=>{this._teardown(),n.error(r)},()=>this._teardown()))),t.closed&&(this._connection=null,t=ct.EMPTY)}return t}refCount(){return Ad()(this)}}function un(e,t){return Ie((n,r)=>{let o=null,i=0,s=!1;const a=()=>s&&!o&&r.complete();n.subscribe(be(r,l=>{o?.unsubscribe();let u=0;const c=i++;Nt(e(l,c)).subscribe(o=be(r,d=>r.next(t?t(l,d,c,u++):d),()=>{o=null,a()}))},()=>{s=!0,a()}))})}function Ri(e){return e<=0?()=>hn:Ie((t,n)=>{let r=0;t.subscribe(be(n,o=>{++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function Na(e){return Ie((t,n)=>{let r=!1;t.subscribe(be(n,o=>{r=!0,n.next(o)},()=>{r||n.next(e),n.complete()}))})}function rD(e=wN){return Ie((t,n)=>{let r=!1;t.subscribe(be(n,o=>{r=!0,n.next(o)},()=>r?n.complete():n.error(e())))})}function wN(){return new Ra}function Jn(e,t){const n=arguments.length>=2;return r=>r.pipe(e?Pn((o,i)=>e(o,i,r)):$n,Ri(1),n?Na(t):rD(()=>new Ra))}function Qe(e,t,n){const r=le(e)||t||n?{next:e,error:t,complete:n}:e;return r?Ie((o,i)=>{var s;null===(s=r.subscribe)||void 0===s||s.call(r);let a=!0;o.subscribe(be(i,l=>{var u;null===(u=r.next)||void 0===u||u.call(r,l),i.next(l)},()=>{var l;a=!1,null===(l=r.complete)||void 0===l||l.call(r),i.complete()},l=>{var u;a=!1,null===(u=r.error)||void 0===u||u.call(r,l),i.error(l)},()=>{var l,u;a&&(null===(l=r.unsubscribe)||void 0===l||l.call(r)),null===(u=r.finalize)||void 0===u||u.call(r)}))}):$n}function Qt(e){return Ie((t,n)=>{let i,r=null,o=!1;r=t.subscribe(be(n,void 0,void 0,s=>{i=Nt(e(s,Qt(e)(t))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function EN(e,t,n,r,o){return(i,s)=>{let a=n,l=t,u=0;i.subscribe(be(s,c=>{const d=u++;l=a?e(l,c,d):(a=!0,c),r&&s.next(l)},o&&(()=>{a&&s.next(l),s.complete()})))}}function oD(e,t){return Ie(EN(e,t,arguments.length>=2,!0))}function Td(e){return e<=0?()=>hn:Ie((t,n)=>{let r=[];t.subscribe(be(n,o=>{r.push(o),e<r.length&&r.shift()},()=>{for(const o of r)n.next(o);n.complete()},void 0,()=>{r=null}))})}function iD(e,t){const n=arguments.length>=2;return r=>r.pipe(e?Pn((o,i)=>e(o,i,r)):$n,Td(1),n?Na(t):rD(()=>new Ra))}function xd(e){return Ie((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}
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
       */const W="primary",Ni=Symbol("RouteTitle");class MN{constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){const n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){const n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}}function _o(e){return new MN(e)}function IN(e,t,n){const r=n.path.split("/");if(r.length>e.length||"full"===n.pathMatch&&(t.hasChildren()||r.length<e.length))return null;const o={};for(let i=0;i<r.length;i++){const s=r[i],a=e[i];if(s.startsWith(":"))o[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,r.length),posParams:o}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function cn(e,t){const n=e?Object.keys(e):void 0,r=t?Object.keys(t):void 0;if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!sD(e[o],t[o]))return!1;return!0}function sD(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const n=[...e].sort(),r=[...t].sort();return n.every((o,i)=>r[i]===o)}return e===t}function aD(e){return Array.prototype.concat.apply([],e)}function lD(e){return e.length>0?e[e.length-1]:null}function Be(e,t){for(const n in e)e.hasOwnProperty(n)&&t(e[n],n)}function Xn(e){return dc(e)?e:di(e)?Ae(Promise.resolve(e)):R(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const xN={exact:function dD(e,t,n){if(!wr(e.segments,t.segments)||!Fa(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(const r in t.children)if(!e.children[r]||!dD(e.children[r],t.children[r],n))return!1;return!0},subset:fD},uD={exact:function RN(e,t){return cn(e,t)},subset:function NN(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>sD(e[n],t[n]))},ignored:()=>!0};function cD(e,t,n){return xN[n.paths](e.root,t.root,n.matrixParams)&&uD[n.queryParams](e.queryParams,t.queryParams)&&!("exact"===n.fragment&&e.fragment!==t.fragment)}function fD(e,t,n){return hD(e,t,t.segments,n)}function hD(e,t,n,r){if(e.segments.length>n.length){const o=e.segments.slice(0,n.length);return!(!wr(o,n)||t.hasChildren()||!Fa(o,n,r))}if(e.segments.length===n.length){if(!wr(e.segments,n)||!Fa(e.segments,n,r))return!1;for(const o in t.children)if(!e.children[o]||!fD(e.children[o],t.children[o],r))return!1;return!0}{const o=n.slice(0,e.segments.length),i=n.slice(e.segments.length);return!!(wr(e.segments,o)&&Fa(e.segments,o,r)&&e.children[W])&&hD(e.children[W],t,i,r)}}function Fa(e,t,n){return t.every((r,o)=>uD[n](e[o].parameters,r.parameters))}class Cr{constructor(t,n,r){this.root=t,this.queryParams=n,this.fragment=r}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=_o(this.queryParams)),this._queryParamMap}toString(){return ON.serialize(this)}}class Q{constructor(t,n){this.segments=t,this.children=n,this.parent=null,Be(n,(r,o)=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Pa(this)}}class Fi{constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap||(this._parameterMap=_o(this.parameters)),this._parameterMap}toString(){return yD(this)}}function wr(e,t){return e.length===t.length&&e.every((n,r)=>n.path===t[r].path)}let pD=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:function(){return new Nd},providedIn:"root"}),e})();class Nd{parse(t){const n=new GN(t);return new Cr(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){const n=`/${Pi(t.root,!0)}`,r=function VN(e){const t=Object.keys(e).map(n=>{const r=e[n];return Array.isArray(r)?r.map(o=>`${Oa(n)}=${Oa(o)}`).join("&"):`${Oa(n)}=${Oa(r)}`}).filter(n=>!!n);return t.length?`?${t.join("&")}`:""}(t.queryParams);return`${n}${r}${"string"==typeof t.fragment?`#${function kN(e){return encodeURI(e)}(t.fragment)}`:""}`}}const ON=new Nd;function Pa(e){return e.segments.map(t=>yD(t)).join("/")}function Pi(e,t){if(!e.hasChildren())return Pa(e);if(t){const n=e.children[W]?Pi(e.children[W],!1):"",r=[];return Be(e.children,(o,i)=>{i!==W&&r.push(`${i}:${Pi(o,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}{const n=function PN(e,t){let n=[];return Be(e.children,(r,o)=>{o===W&&(n=n.concat(t(r,o)))}),Be(e.children,(r,o)=>{o!==W&&(n=n.concat(t(r,o)))}),n}(e,(r,o)=>o===W?[Pi(e.children[W],!1)]:[`${o}:${Pi(r,!1)}`]);return 1===Object.keys(e.children).length&&null!=e.children[W]?`${Pa(e)}/${n[0]}`:`${Pa(e)}/(${n.join("//")})`}}function gD(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Oa(e){return gD(e).replace(/%3B/gi,";")}function Fd(e){return gD(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ka(e){return decodeURIComponent(e)}function mD(e){return ka(e.replace(/\+/g,"%20"))}function yD(e){return`${Fd(e.path)}${function LN(e){return Object.keys(e).map(t=>`;${Fd(t)}=${Fd(e[t])}`).join("")}(e.parameters)}`}const $N=/^[^\/()?;=#]+/;function La(e){const t=e.match($N);return t?t[0]:""}const jN=/^[^=?&#]+/,HN=/^[^&#]+/;class GN{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new Q([],{}):new Q([],this.parseChildren())}parseQueryParams(){const t={};if(this.consumeOptional("?"))do{this.parseQueryParam(t)}while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(t.length>0||Object.keys(n).length>0)&&(r[W]=new Q(t,n)),r}parseSegment(){const t=La(this.remaining);if(""===t&&this.peekStartsWith(";"))throw new C(4009,!1);return this.capture(t),new Fi(ka(t),this.parseMatrixParams())}parseMatrixParams(){const t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){const n=La(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){const o=La(this.remaining);o&&(r=o,this.capture(r))}t[ka(n)]=ka(r)}parseQueryParam(t){const n=function BN(e){const t=e.match(jN);return t?t[0]:""}(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){const s=function UN(e){const t=e.match(HN);return t?t[0]:""}(this.remaining);s&&(r=s,this.capture(r))}const o=mD(n),i=mD(r);if(t.hasOwnProperty(o)){let s=t[o];Array.isArray(s)||(s=[s],t[o]=s),s.push(i)}else t[o]=i}parseParens(t){const n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const r=La(this.remaining),o=this.remaining[r.length];if("/"!==o&&")"!==o&&";"!==o)throw new C(4010,!1);let i;r.indexOf(":")>-1?(i=r.slice(0,r.indexOf(":")),this.capture(i),this.capture(":")):t&&(i=W);const s=this.parseChildren();n[i]=1===Object.keys(s).length?s[W]:new Q([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return!!this.peekStartsWith(t)&&(this.remaining=this.remaining.substring(t.length),!0)}capture(t){if(!this.consumeOptional(t))throw new C(4011,!1)}}function Pd(e){return e.segments.length>0?new Q([],{[W]:e}):e}function Va(e){const t={};for(const r of Object.keys(e.children)){const i=Va(e.children[r]);(i.segments.length>0||i.hasChildren())&&(t[r]=i)}return function zN(e){if(1===e.numberOfChildren&&e.children[W]){const t=e.children[W];return new Q(e.segments.concat(t.segments),t.children)}return e}(new Q(e.segments,t))}function Er(e){return e instanceof Cr}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function QN(e,t,n,r,o){var i;if(0===n.length)return Do(t.root,t.root,t.root,r,o);const s=function DD(e){if("string"==typeof e[0]&&1===e.length&&"/"===e[0])return new _D(!0,0,e);let t=0,n=!1;const r=e.reduce((o,i,s)=>{if("object"==typeof i&&null!=i){if(i.outlets){const a={};return Be(i.outlets,(l,u)=>{a[u]="string"==typeof l?l.split("/"):l}),[...o,{outlets:a}]}if(i.segmentPath)return[...o,i.segmentPath]}return"string"!=typeof i?[...o,i]:0===s?(i.split("/").forEach((a,l)=>{0==l&&"."===a||(0==l&&""===a?n=!0:".."===a?t++:""!=a&&o.push(a))}),o):[...o,i]},[]);return new _D(n,t,r)}(n);if(s.toRoot())return Do(t.root,t.root,new Q([],{}),r,o);const l=function a(c){var d;const f=function ZN(e,t,n,r){if(e.isAbsolute)return new Co(t.root,!0,0);if(-1===r)return new Co(n,n===t.root,0);return function CD(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new C(4005,!1);o=r.segments.length}return new Co(r,!1,o-i)}(n,r+(Oi(e.commands[0])?0:1),e.numberOfDoubleDots)}(s,t,null===(d=e.snapshot)||void 0===d?void 0:d._urlSegment,c),h=f.processChildren?Li(f.segmentGroup,f.index,s.commands):kd(f.segmentGroup,f.index,s.commands);return Do(t.root,f.segmentGroup,h,r,o)}(null===(i=e.snapshot)||void 0===i?void 0:i._lastPathIndex);return l}function Oi(e){return"object"==typeof e&&null!=e&&!e.outlets&&!e.segmentPath}function ki(e){return"object"==typeof e&&null!=e&&e.outlets}function Do(e,t,n,r,o){let s,i={};r&&Be(r,(l,u)=>{i[u]=Array.isArray(l)?l.map(c=>`${c}`):`${l}`}),s=e===t?n:vD(e,t,n);const a=Pd(Va(s));return new Cr(a,i,o)}function vD(e,t,n){const r={};return Be(e.children,(o,i)=>{r[i]=o===t?n:vD(o,t,n)}),new Q(e.segments,r)}class _D{constructor(t,n,r){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=r,t&&r.length>0&&Oi(r[0]))throw new C(4003,!1);const o=r.find(ki);if(o&&o!==lD(r))throw new C(4004,!1)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class Co{constructor(t,n,r){this.segmentGroup=t,this.processChildren=n,this.index=r}}function kd(e,t,n){if(e||(e=new Q([],{})),0===e.segments.length&&e.hasChildren())return Li(e,t,n);const r=function JN(e,t,n){let r=0,o=t;const i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;const s=e.segments[o],a=n[r];if(ki(a))break;const l=`${a}`,u=r<n.length-1?n[r+1]:null;if(o>0&&void 0===l)break;if(l&&u&&"object"==typeof u&&void 0===u.outlets){if(!ED(l,u,s))return i;r+=2}else{if(!ED(l,{},s))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){const i=new Q(e.segments.slice(0,r.pathIndex),{});return i.children[W]=new Q(e.segments.slice(r.pathIndex),e.children),Li(i,0,o)}return r.match&&0===o.length?new Q(e.segments,{}):r.match&&!e.hasChildren()?Ld(e,t,n):r.match?Li(e,0,o):Ld(e,t,n)}function Li(e,t,n){if(0===n.length)return new Q(e.segments,{});{const r=function YN(e){return ki(e[0])?e[0].outlets:{[W]:e}}(n),o={};return Be(r,(i,s)=>{"string"==typeof i&&(i=[i]),null!==i&&(o[s]=kd(e.children[s],t,i))}),Be(e.children,(i,s)=>{void 0===r[s]&&(o[s]=i)}),new Q(e.segments,o)}}function Ld(e,t,n){const r=e.segments.slice(0,t);let o=0;for(;o<n.length;){const i=n[o];if(ki(i)){const l=XN(i.outlets);return new Q(r,l)}if(0===o&&Oi(n[0])){r.push(new Fi(e.segments[t].path,wD(n[0]))),o++;continue}const s=ki(i)?i.outlets[W]:`${i}`,a=o<n.length-1?n[o+1]:null;s&&a&&Oi(a)?(r.push(new Fi(s,wD(a))),o+=2):(r.push(new Fi(s,{})),o++)}return new Q(r,{})}function XN(e){const t={};return Be(e,(n,r)=>{"string"==typeof n&&(n=[n]),null!==n&&(t[r]=Ld(new Q([],{}),0,n))}),t}function wD(e){const t={};return Be(e,(n,r)=>t[r]=`${n}`),t}function ED(e,t,n){return e==n.path&&cn(t,n.parameters)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ln{constructor(t,n){this.id=t,this.url=n}}class Vi extends Ln{constructor(t,n,r="imperative",o=null){super(t,n),this.type=0,this.navigationTrigger=r,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class Kt extends Ln{constructor(t,n,r){super(t,n),this.urlAfterRedirects=r,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class $a extends Ln{constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class bD extends Ln{constructor(t,n,r,o){super(t,n),this.error=r,this.target=o,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class eF extends Ln{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class tF extends Ln{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class nF extends Ln{constructor(t,n,r,o,i){super(t,n),this.urlAfterRedirects=r,this.state=o,this.shouldActivate=i,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class rF extends Ln{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class oF extends Ln{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class iF{constructor(t){this.route=t,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class sF{constructor(t){this.route=t,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class aF{constructor(t){this.snapshot=t,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class lF{constructor(t){this.snapshot=t,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class uF{constructor(t){this.snapshot=t,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class cF{constructor(t){this.snapshot=t,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class SD{constructor(t,n,r){this.routerEvent=t,this.position=n,this.anchor=r,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class MD{constructor(t){this._root=t}get root(){return this._root.value}parent(t){const n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){const n=Vd(t,this._root);return n?n.children.map(r=>r.value):[]}firstChild(t){const n=Vd(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){const n=$d(t,this._root);return n.length<2?[]:n[n.length-2].children.map(o=>o.value).filter(o=>o!==t)}pathFromRoot(t){return $d(t,this._root).map(n=>n.value)}}function Vd(e,t){if(e===t.value)return t;for(const n of t.children){const r=Vd(e,n);if(r)return r}return null}function $d(e,t){if(e===t.value)return[t];for(const n of t.children){const r=$d(e,n);if(r.length)return r.unshift(t),r}return[]}class Vn{constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}}function wo(e){const t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class ID extends MD{constructor(t,n){super(t),this.snapshot=n,jd(this,t)}toString(){return this.snapshot.toString()}}function AD(e,t){const n=function fF(e,t){const s=new ja([],{},{},"",{},W,t,null,e.root,-1,{});return new xD("",new Vn(s,[]))}(e,t),r=new qt([new Fi("",{})]),o=new qt({}),i=new qt({}),s=new qt({}),a=new qt(""),l=new br(r,o,s,a,i,W,t,n.root);return l.snapshot=n.root,new ID(new Vn(l,[]),n)}class br{constructor(t,n,r,o,i,s,a,l){var u,c;this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.title=null!==(u=null===(c=this.data)||void 0===c?void 0:c.pipe(q(d=>d[Ni])))&&void 0!==u?u:R(void 0),this._futureSnapshot=l}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(q(t=>_o(t)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(q(t=>_o(t)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function TD(e,t="emptyOnly"){const n=e.pathFromRoot;let r=0;if("always"!==t)for(r=n.length-1;r>=1;){const o=n[r],i=n[r-1];if(o.routeConfig&&""===o.routeConfig.path)r--;else{if(i.component)break;r--}}return function hF(e){return e.reduce((t,n)=>{var r;return{params:{...t.params,...n.params},data:{...t.data,...n.data},resolve:{...n.data,...t.resolve,...null===(r=n.routeConfig)||void 0===r?void 0:r.data,...n._resolvedData}}},{params:{},data:{},resolve:{}})}(n.slice(r))}class ja{constructor(t,n,r,o,i,s,a,l,u,c,d,f){var h;this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.title=null===(h=this.data)||void 0===h?void 0:h[Ni],this.routeConfig=l,this._urlSegment=u,this._lastPathIndex=c,this._correctedLastPathIndex=f??c,this._resolve=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=_o(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=_o(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class xD extends MD{constructor(t,n){super(n),this.url=t,jd(this,n)}toString(){return RD(this._root)}}function jd(e,t){t.value._routerState=e,t.children.forEach(n=>jd(e,n))}function RD(e){const t=e.children.length>0?` { ${e.children.map(RD).join(", ")} } `:"";return`${e.value}${t}`}function Bd(e){if(e.snapshot){const t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,cn(t.queryParams,n.queryParams)||e.queryParams.next(n.queryParams),t.fragment!==n.fragment&&e.fragment.next(n.fragment),cn(t.params,n.params)||e.params.next(n.params),function AN(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!cn(e[n],t[n]))return!1;return!0}(t.url,n.url)||e.url.next(n.url),cn(t.data,n.data)||e.data.next(n.data)}else e.snapshot=e._futureSnapshot,e.data.next(e._futureSnapshot.data)}function Hd(e,t){const n=cn(e.params,t.params)&&function FN(e,t){return wr(e,t)&&e.every((n,r)=>cn(n.parameters,t[r].parameters))}(e.url,t.url);return n&&!(!e.parent!=!t.parent)&&(!e.parent||Hd(e.parent,t.parent))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $i(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){const r=n.value;r._futureSnapshot=t.value;const o=function gF(e,t,n){return t.children.map(r=>{for(const o of n.children)if(e.shouldReuseRoute(r.value,o.value.snapshot))return $i(e,r,o);return $i(e,r)})}(e,t,n);return new Vn(r,o)}{if(e.shouldAttach(t.value)){const i=e.retrieve(t.value);if(null!==i){const s=i.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(a=>$i(e,a)),s}}const r=function mF(e){return new br(new qt(e.url),new qt(e.params),new qt(e.queryParams),new qt(e.fragment),new qt(e.data),e.outlet,e.component,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t.value),o=t.children.map(i=>$i(e,i));return new Vn(r,o)}}const Ud="ngNavigationCancelingError";function ND(e,t){const{redirectTo:n,navigationBehaviorOptions:r}=Er(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,o=FD(!1,0,t);return o.url=n,o.navigationBehaviorOptions=r,o}function FD(e,t,n){const r=new Error("NavigationCancelingError: "+(e||""));return r[Ud]=!0,r.cancellationCode=t,n&&(r.url=n),r}function PD(e){return OD(e)&&Er(e.url)}function OD(e){return e&&e[Ud]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class yF{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.injector=null,this.children=new ji,this.attachRef=null}}let ji=(()=>{class e{constructor(){this.contexts=new Map}onChildOutletCreated(n,r){const o=this.getOrCreateContext(n);o.outlet=r,this.contexts.set(n,o)}onChildOutletDestroyed(n){const r=this.getContext(n);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){const n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let r=this.getContext(n);return r||(r=new yF,this.contexts.set(n,r)),r}getContext(n){return this.contexts.get(n)||null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ba=!1;let kD=(()=>{class e{constructor(n,r,o,i,s){this.parentContexts=n,this.location=r,this.changeDetector=i,this.environmentInjector=s,this.activated=null,this._activatedRoute=null,this.activateEvents=new we,this.deactivateEvents=new we,this.attachEvents=new we,this.detachEvents=new we,this.name=o||W,n.onChildOutletCreated(this.name,this)}ngOnDestroy(){var n;(null===(n=this.parentContexts.getContext(this.name))||void 0===n?void 0:n.outlet)===this&&this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const n=this.parentContexts.getContext(this.name);n&&n.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new C(4012,Ba);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new C(4012,Ba);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new C(4012,Ba);this.location.detach();const n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,r){this.activated=n,this._activatedRoute=r,this.location.insert(n.hostView),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){const n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,r){if(this.isActivated)throw new C(4013,Ba);this._activatedRoute=n;const o=this.location,s=n._futureSnapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new vF(n,a,o.injector);if(r&&function _F(e){return!!e.resolveComponentFactory}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(r)){const u=r.resolveComponentFactory(s);this.activated=o.createComponent(u,o.length,l)}else this.activated=o.createComponent(s,{index:o.length,injector:l,environmentInjector:r??this.environmentInjector});this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return e.\u0275fac=function(n){return new(n||e)(v(ji),v(Ut),function Bo(e){return function lb(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const r=n.length;let o=0;for(;o<r;){const i=n[o];if(kh(i))break;if(0===i)o+=2;else if("number"==typeof i)for(o++;o<r&&"string"==typeof n[o];)o++;else{if(i===t)return n[o+1];o+=2}}}return null}(Pe(),e)}("name"),v(ua),v(zn))},e.\u0275dir=L({type:e,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0}),e})();class vF{constructor(t,n,r){this.route=t,this.childContexts=n,this.parent=r}get(t,n){return t===br?this.route:t===ji?this.childContexts:this.parent.get(t,n)}}let Gd=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=Pt({type:e,selectors:[["ng-component"]],standalone:!0,features:[Fy],decls:1,vars:0,template:function(n,r){1&n&&pe(0,"router-outlet")},dependencies:[kD],encapsulation:2}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function LD(e,t){var n;return e.providers&&!e._injector&&(e._injector=Xs(e.providers,t,`Route: ${e.path}`)),null!==(n=e._injector)&&void 0!==n?n:t}function Wd(e){const t=e.children&&e.children.map(Wd),n=t?{...e,children:t}:{...e};return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==W&&(n.component=Gd),n}function Rt(e){return e.outlet||W}function VD(e,t){const n=e.filter(r=>Rt(r)===t);return n.push(...e.filter(r=>Rt(r)!==t)),n}function Bi(e){var t;if(!e)return null;if(null!==(t=e.routeConfig)&&void 0!==t&&t._injector)return e.routeConfig._injector;for(let n=e.parent;n;n=n.parent){const r=n.routeConfig;if(null!=r&&r._loadedInjector)return r._loadedInjector;if(null!=r&&r._injector)return r._injector}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class bF{constructor(t,n,r,o){this.routeReuseStrategy=t,this.futureState=n,this.currState=r,this.forwardEvent=o}activate(t){const n=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,r,t),Bd(this.futureState.root),this.activateChildRoutes(n,r,t)}deactivateChildRoutes(t,n,r){const o=wo(n);t.children.forEach(i=>{const s=i.value.outlet;this.deactivateRoutes(i,o[s],r),delete o[s]}),Be(o,(i,s)=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(t,n,r){const o=t.value,i=n?n.value:null;if(o===i)if(o.component){const s=r.getContext(o.outlet);s&&this.deactivateChildRoutes(t,n,s.children)}else this.deactivateChildRoutes(t,n,r);else i&&this.deactivateRouteAndItsChildren(n,r)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){const r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=wo(t);for(const s of Object.keys(i))this.deactivateRouteAndItsChildren(i[s],o);if(r&&r.outlet){const s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:a})}}deactivateRouteAndOutlet(t,n){const r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=wo(t);for(const s of Object.keys(i))this.deactivateRouteAndItsChildren(i[s],o);r&&r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated(),r.attachRef=null,r.resolver=null,r.route=null)}activateChildRoutes(t,n,r){const o=wo(n);t.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],r),this.forwardEvent(new cF(i.value.snapshot))}),t.children.length&&this.forwardEvent(new lF(t.value.snapshot))}activateRoutes(t,n,r){const o=t.value,i=n?n.value:null;if(Bd(o),o===i)if(o.component){const a=r.getOrCreateContext(o.outlet);this.activateChildRoutes(t,n,a.children)}else this.activateChildRoutes(t,n,r);else if(o.component){const a=r.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){const l=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),a.children.onOutletReAttached(l.contexts),a.attachRef=l.componentRef,a.route=l.route.value,a.outlet&&a.outlet.attach(l.componentRef,l.route.value),Bd(l.route.value),this.activateChildRoutes(t,null,a.children)}else{var s;const l=Bi(o.snapshot),u=null!==(s=l?.get(ni))&&void 0!==s?s:null;a.attachRef=null,a.route=o,a.resolver=u,a.injector=l,a.outlet&&a.outlet.activateWith(o,a.injector),this.activateChildRoutes(t,null,a.children)}}else this.activateChildRoutes(t,null,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class $D{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}}class Ha{constructor(t,n){this.component=t,this.route=n}}function SF(e,t,n){const r=e._root;return Hi(r,t?t._root:null,n,[r.value])}function Eo(e,t){const n=Symbol(),r=t.get(e,n);return r===n?"function"!=typeof e||function dE(e){return null!==rs(e)}(e)?t.get(e):e:r}function Hi(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){const i=wo(t);return e.children.forEach(s=>{(function IF(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){const i=e.value,s=t?t.value:null,a=n?n.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){const l=function AF(e,t,n){if("function"==typeof n)return n(e,t);switch(n){case"pathParamsChange":return!wr(e.url,t.url);case"pathParamsOrQueryParamsChange":return!wr(e.url,t.url)||!cn(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Hd(e,t)||!cn(e.queryParams,t.queryParams);default:return!Hd(e,t)}}(s,i,i.routeConfig.runGuardsAndResolvers);l?o.canActivateChecks.push(new $D(r)):(i.data=s.data,i._resolvedData=s._resolvedData),Hi(e,t,i.component?a?a.children:null:n,r,o),l&&a&&a.outlet&&a.outlet.isActivated&&o.canDeactivateChecks.push(new Ha(a.outlet.component,s))}else s&&Ui(t,a,o),o.canActivateChecks.push(new $D(r)),Hi(e,null,i.component?a?a.children:null:n,r,o)})(s,i[s.value.outlet],n,r.concat([s.value]),o),delete i[s.value.outlet]}),Be(i,(s,a)=>Ui(s,n.getContext(a),o)),o}function Ui(e,t,n){const r=wo(e),o=e.value;Be(r,(i,s)=>{Ui(i,o.component?t?t.children.getContext(s):null:t,n)}),n.canDeactivateChecks.push(new Ha(o.component&&t&&t.outlet&&t.outlet.isActivated?t.outlet.component:null,o))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Gi(e){return"function"==typeof e}function qd(e){return e instanceof Ra||"EmptyError"===e?.name}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ua=Symbol("INITIAL_VALUE");function bo(){return un(e=>X_(e.map(t=>t.pipe(Ri(1),function CN(...e){const t=xo(e);return Ie((n,r)=>{(t?Id(e,n,t):Id(e,n)).subscribe(r)})}(Ua)))).pipe(q(t=>{for(const n of t)if(!0!==n){if(n===Ua)return Ua;if(!1===n||n instanceof Cr)return n}return!0}),Pn(t=>t!==Ua),Ri(1)))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function jD(e){return function xw(...e){return Hf(e)}(Qe(t=>{if(Er(t))throw ND(0,t)}),q(t=>!0===t))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Qd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function BD(e,t,n,r,o){const i=Kd(e,t,n);return i.matched?function zF(e,t,n,r){const o=t.canMatch;return o&&0!==o.length?R(o.map(s=>{const a=Eo(s,e);return Xn(function PF(e){return e&&Gi(e.canMatch)}(a)?a.canMatch(t,n):e.runInContext(()=>a(t,n)))})).pipe(bo(),jD()):R(!0)}(r=LD(t,r),t,n).pipe(q(s=>!0===s?i:{...Qd})):R(i)}function Kd(e,t,n){var r;if(""===t.path)return"full"===t.pathMatch&&(e.hasChildren()||n.length>0)?{...Qd}:{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};const i=(t.matcher||IN)(n,e,t);if(!i)return{...Qd};const s={};Be(i.posParams,(l,u)=>{s[u]=l.path});const a=i.consumed.length>0?{...s,...i.consumed[i.consumed.length-1].parameters}:s;return{matched:!0,consumedSegments:i.consumed,remainingSegments:n.slice(i.consumed.length),parameters:a,positionalParamSegments:null!==(r=i.posParams)&&void 0!==r?r:{}}}function Ga(e,t,n,r,o="corrected"){if(n.length>0&&function QF(e,t,n){return n.some(r=>za(e,t,r)&&Rt(r)!==W)}(e,n,r)){const s=new Q(t,function qF(e,t,n,r){const o={};o[W]=r,r._sourceSegment=e,r._segmentIndexShift=t.length;for(const i of n)if(""===i.path&&Rt(i)!==W){const s=new Q([],{});s._sourceSegment=e,s._segmentIndexShift=t.length,o[Rt(i)]=s}return o}(e,t,r,new Q(n,e.children)));return s._sourceSegment=e,s._segmentIndexShift=t.length,{segmentGroup:s,slicedSegments:[]}}if(0===n.length&&function KF(e,t,n){return n.some(r=>za(e,t,r))}(e,n,r)){const s=new Q(e.segments,function WF(e,t,n,r,o,i){const s={};for(const a of r)if(za(e,n,a)&&!o[Rt(a)]){const l=new Q([],{});l._sourceSegment=e,l._segmentIndexShift="legacy"===i?e.segments.length:t.length,s[Rt(a)]=l}return{...o,...s}}(e,t,n,r,e.children,o));return s._sourceSegment=e,s._segmentIndexShift=t.length,{segmentGroup:s,slicedSegments:n}}const i=new Q(e.segments,e.children);return i._sourceSegment=e,i._segmentIndexShift=t.length,{segmentGroup:i,slicedSegments:n}}function za(e,t,n){return(!(e.hasChildren()||t.length>0)||"full"!==n.pathMatch)&&""===n.path}function HD(e,t,n,r){return!!(Rt(e)===r||r!==W&&za(t,n,e))&&("**"===e.path||Kd(t,e,n).matched)}function UD(e,t,n){return 0===t.length&&!e.children[n]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Wa=!1;class qa{constructor(t){this.segmentGroup=t||null}}class GD{constructor(t){this.urlTree=t}}function zi(e){return Yn(new qa(e))}function zD(e){return Yn(new GD(e))}class XF{constructor(t,n,r,o,i){this.injector=t,this.configLoader=n,this.urlSerializer=r,this.urlTree=o,this.config=i,this.allowRedirects=!0}apply(){const t=Ga(this.urlTree.root,[],[],this.config).segmentGroup,n=new Q(t.segments,t.children);return this.expandSegmentGroup(this.injector,this.config,n,W).pipe(q(i=>this.createUrlTree(Va(i),this.urlTree.queryParams,this.urlTree.fragment))).pipe(Qt(i=>{if(i instanceof GD)return this.allowRedirects=!1,this.match(i.urlTree);throw i instanceof qa?this.noMatchError(i):i}))}match(t){return this.expandSegmentGroup(this.injector,this.config,t.root,W).pipe(q(o=>this.createUrlTree(Va(o),t.queryParams,t.fragment))).pipe(Qt(o=>{throw o instanceof qa?this.noMatchError(o):o}))}noMatchError(t){return new C(4002,Wa)}createUrlTree(t,n,r){const o=Pd(t);return new Cr(o,n,r)}expandSegmentGroup(t,n,r,o){return 0===r.segments.length&&r.hasChildren()?this.expandChildren(t,n,r).pipe(q(i=>new Q([],i))):this.expandSegment(t,r,n,r.segments,o,!0)}expandChildren(t,n,r){const o=[];for(const i of Object.keys(r.children))"primary"===i?o.unshift(i):o.push(i);return Ae(o).pipe(Zn(i=>{const s=r.children[i],a=VD(n,i);return this.expandSegmentGroup(t,a,s,i).pipe(q(l=>({segment:l,outlet:i})))}),oD((i,s)=>(i[s.outlet]=s.segment,i),{}),iD())}expandSegment(t,n,r,o,i,s){return Ae(r).pipe(Zn(a=>this.expandSegmentAgainstRoute(t,n,r,a,o,i,s).pipe(Qt(u=>{if(u instanceof qa)return R(null);throw u}))),Jn(a=>!!a),Qt((a,l)=>{if(qd(a))return UD(n,o,i)?R(new Q([],{})):zi(n);throw a}))}expandSegmentAgainstRoute(t,n,r,o,i,s,a){return HD(o,n,i,s)?void 0===o.redirectTo?this.matchSegmentAgainstRoute(t,n,o,i,s):a&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s):zi(n):zi(n)}expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s){return"**"===o.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(t,r,o,s):this.expandRegularSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s)}expandWildCardWithParamsAgainstRouteUsingRedirect(t,n,r,o){const i=this.applyRedirectCommands([],r.redirectTo,{});return r.redirectTo.startsWith("/")?zD(i):this.lineralizeSegments(r,i).pipe(je(s=>{const a=new Q(s,{});return this.expandSegment(t,a,n,s,o,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s){const{matched:a,consumedSegments:l,remainingSegments:u,positionalParamSegments:c}=Kd(n,o,i);if(!a)return zi(n);const d=this.applyRedirectCommands(l,o.redirectTo,c);return o.redirectTo.startsWith("/")?zD(d):this.lineralizeSegments(o,d).pipe(je(f=>this.expandSegment(t,n,r,f.concat(u),s,!1)))}matchSegmentAgainstRoute(t,n,r,o,i){return"**"===r.path?(t=LD(r,t),r.loadChildren?(r._loadedRoutes?R({routes:r._loadedRoutes,injector:r._loadedInjector}):this.configLoader.loadChildren(t,r)).pipe(q(a=>(r._loadedRoutes=a.routes,r._loadedInjector=a.injector,new Q(o,{})))):R(new Q(o,{}))):BD(n,r,o,t).pipe(un(({matched:s,consumedSegments:a,remainingSegments:l})=>{var u;return s?(t=null!==(u=r._injector)&&void 0!==u?u:t,this.getChildConfig(t,r,o).pipe(je(d=>{var f;const h=null!==(f=d.injector)&&void 0!==f?f:t,p=d.routes,{segmentGroup:g,slicedSegments:_}=Ga(n,a,l,p),y=new Q(g.segments,g.children);if(0===_.length&&y.hasChildren())return this.expandChildren(h,p,y).pipe(q(U=>new Q(a,U)));if(0===p.length&&0===_.length)return R(new Q(a,{}));const w=Rt(r)===i;return this.expandSegment(h,y,p,_,w?W:i,!0).pipe(q(b=>new Q(a.concat(b.segments),b.children)))}))):zi(n)}))}getChildConfig(t,n,r){return n.children?R({routes:n.children,injector:t}):n.loadChildren?void 0!==n._loadedRoutes?R({routes:n._loadedRoutes,injector:n._loadedInjector}):function GF(e,t,n,r){const o=t.canLoad;return void 0===o||0===o.length?R(!0):R(o.map(s=>{const a=Eo(s,e);return Xn(function xF(e){return e&&Gi(e.canLoad)}(a)?a.canLoad(t,n):e.runInContext(()=>a(t,n)))})).pipe(bo(),jD())}(t,n,r).pipe(je(o=>o?this.configLoader.loadChildren(t,n).pipe(Qe(i=>{n._loadedRoutes=i.routes,n._loadedInjector=i.injector})):function YF(e){return Yn(FD(Wa,3))}())):R({routes:[],injector:t})}lineralizeSegments(t,n){let r=[],o=n.root;for(;;){if(r=r.concat(o.segments),0===o.numberOfChildren)return R(r);if(o.numberOfChildren>1||!o.children[W])return Yn(new C(4e3,Wa));o=o.children[W]}}applyRedirectCommands(t,n,r){return this.applyRedirectCreateUrlTree(n,this.urlSerializer.parse(n),t,r)}applyRedirectCreateUrlTree(t,n,r,o){const i=this.createSegmentGroup(t,n.root,r,o);return new Cr(i,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){const r={};return Be(t,(o,i)=>{if("string"==typeof o&&o.startsWith(":")){const a=o.substring(1);r[i]=n[a]}else r[i]=o}),r}createSegmentGroup(t,n,r,o){const i=this.createSegments(t,n.segments,r,o);let s={};return Be(n.children,(a,l)=>{s[l]=this.createSegmentGroup(t,a,r,o)}),new Q(i,s)}createSegments(t,n,r,o){return n.map(i=>i.path.startsWith(":")?this.findPosParam(t,i,o):this.findOrReturn(i,r))}findPosParam(t,n,r){const o=r[n.path.substring(1)];if(!o)throw new C(4001,Wa);return o}findOrReturn(t,n){let r=0;for(const o of n){if(o.path===t.path)return n.splice(r),o;r++}return t}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class tP{}class oP{constructor(t,n,r,o,i,s,a,l){this.injector=t,this.rootComponentType=n,this.config=r,this.urlTree=o,this.url=i,this.paramsInheritanceStrategy=s,this.relativeLinkResolution=a,this.urlSerializer=l}recognize(){const t=Ga(this.urlTree.root,[],[],this.config.filter(n=>void 0===n.redirectTo),this.relativeLinkResolution).segmentGroup;return this.processSegmentGroup(this.injector,this.config,t,W).pipe(q(n=>{if(null===n)return null;const r=new ja([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},W,this.rootComponentType,null,this.urlTree.root,-1,{}),o=new Vn(r,n),i=new xD(this.url,o);return this.inheritParamsAndData(i._root),i}))}inheritParamsAndData(t){const n=t.value,r=TD(n,this.paramsInheritanceStrategy);n.params=Object.freeze(r.params),n.data=Object.freeze(r.data),t.children.forEach(o=>this.inheritParamsAndData(o))}processSegmentGroup(t,n,r,o){return 0===r.segments.length&&r.hasChildren()?this.processChildren(t,n,r):this.processSegment(t,n,r,r.segments,o)}processChildren(t,n,r){return Ae(Object.keys(r.children)).pipe(Zn(o=>{const i=r.children[o],s=VD(n,o);return this.processSegmentGroup(t,s,i,o)}),oD((o,i)=>o&&i?(o.push(...i),o):null),function bN(e,t=!1){return Ie((n,r)=>{let o=0;n.subscribe(be(r,i=>{const s=e(i,o++);(s||t)&&r.next(i),!s&&r.complete()}))})}(o=>null!==o),Na(null),iD(),q(o=>{if(null===o)return null;const i=WD(o);return function iP(e){e.sort((t,n)=>t.value.outlet===W?-1:n.value.outlet===W?1:t.value.outlet.localeCompare(n.value.outlet))}(i),i}))}processSegment(t,n,r,o,i){return Ae(n).pipe(Zn(s=>{var a;return this.processSegmentAgainstRoute(null!==(a=s._injector)&&void 0!==a?a:t,s,r,o,i)}),Jn(s=>!!s),Qt(s=>{if(qd(s))return UD(r,o,i)?R([]):R(null);throw s}))}processSegmentAgainstRoute(t,n,r,o,i){if(n.redirectTo||!HD(n,r,o,i))return R(null);let s;if("**"===n.path){var a,l;const u=o.length>0?lD(o).parameters:{},c=QD(r)+o.length;s=R({snapshot:new ja(o,u,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,ZD(n),Rt(n),null!==(a=null!==(l=n.component)&&void 0!==l?l:n._loadedComponent)&&void 0!==a?a:null,n,qD(r),c,YD(n),c),consumedSegments:[],remainingSegments:[]})}else s=BD(r,n,o,t).pipe(q(({matched:u,consumedSegments:c,remainingSegments:d,parameters:f})=>{var h,p;if(!u)return null;const g=QD(r)+c.length;return{snapshot:new ja(c,f,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,ZD(n),Rt(n),null!==(h=null!==(p=n.component)&&void 0!==p?p:n._loadedComponent)&&void 0!==h?h:null,n,qD(r),g,YD(n),g),consumedSegments:c,remainingSegments:d}}));return s.pipe(un(u=>{var c,d;if(null===u)return R(null);const{snapshot:f,consumedSegments:h,remainingSegments:p}=u;t=null!==(c=n._injector)&&void 0!==c?c:t;const g=null!==(d=n._loadedInjector)&&void 0!==d?d:t,_=function sP(e){return e.children?e.children:e.loadChildren?e._loadedRoutes:[]}(n),{segmentGroup:y,slicedSegments:w}=Ga(r,h,p,_.filter(b=>void 0===b.redirectTo),this.relativeLinkResolution);if(0===w.length&&y.hasChildren())return this.processChildren(g,_,y).pipe(q(b=>null===b?null:[new Vn(f,b)]));if(0===_.length&&0===w.length)return R([new Vn(f,[])]);const m=Rt(n)===i;return this.processSegment(g,_,y,w,m?W:i).pipe(q(b=>null===b?null:[new Vn(f,b)]))}))}}function aP(e){const t=e.value.routeConfig;return t&&""===t.path&&void 0===t.redirectTo}function WD(e){const t=[],n=new Set;for(const r of e){if(!aP(r)){t.push(r);continue}const o=t.find(i=>r.value.routeConfig===i.value.routeConfig);void 0!==o?(o.children.push(...r.children),n.add(o)):t.push(r)}for(const r of n){const o=WD(r.children);t.push(new Vn(r.value,o))}return t.filter(r=>!n.has(r))}function qD(e){let t=e;for(;t._sourceSegment;)t=t._sourceSegment;return t}function QD(e){var t;let n=e,r=null!==(t=n._segmentIndexShift)&&void 0!==t?t:0;for(;n._sourceSegment;){var o;n=n._sourceSegment,r+=null!==(o=n._segmentIndexShift)&&void 0!==o?o:0}return r-1}function ZD(e){return e.data||{}}function YD(e){return e.resolve||{}}
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
       */function Zd(e){return un(t=>{const n=e(t);return n?Ae(n).pipe(q(()=>t)):R(t)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let XD=(()=>{class e{buildTitle(n){let r,o=n.root;for(;void 0!==o;){var i;r=null!==(i=this.getResolvedTitleForRoute(o))&&void 0!==i?i:r,o=o.children.find(s=>s.outlet===W)}return r}getResolvedTitleForRoute(n){return n.data[Ni]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=F({token:e,factory:function(){return Se(eC)},providedIn:"root"}),e})(),eC=(()=>{class e extends XD{constructor(n){super(),this.title=n}updateTitle(n){const r=this.buildTitle(n);void 0!==r&&this.title.setTitle(r)}}return e.\u0275fac=function(n){return new(n||e)(M(k_))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
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
       */const Ka=new x("",{providedIn:"root",factory:()=>({})}),Yd=new x("ROUTES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Jd=(()=>{class e{constructor(n,r){this.injector=n,this.compiler=r,this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap}loadComponent(n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return R(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);const r=Xn(n.loadComponent()).pipe(Qe(i=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=i}),xd(()=>{this.componentLoaders.delete(n)})),o=new nD(r,()=>new Ze).pipe(Ad());return this.componentLoaders.set(n,o),o}loadChildren(n,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return R({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);const i=this.loadModuleFactoryOrRoutes(r.loadChildren).pipe(q(a=>{this.onLoadEndListener&&this.onLoadEndListener(r);let l,u,c=!1;Array.isArray(a)?u=a:(l=a.create(n).injector,u=aD(l.get(Yd,[],P.Self|P.Optional)));return{routes:u.map(Wd),injector:l}}),xd(()=>{this.childrenLoaders.delete(r)})),s=new nD(i,()=>new Ze).pipe(Ad());return this.childrenLoaders.set(r,s),s}loadModuleFactoryOrRoutes(n){return Xn(n()).pipe(je(r=>r instanceof Ry||Array.isArray(r)?R(r):Ae(this.compiler.compileModuleAsync(r))))}}return e.\u0275fac=function(n){return new(n||e)(M(Dt),M(Lc))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
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
       */function CP(e){throw e}function wP(e,t,n){return t.parse("/")}const EP={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},bP={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function nC(){var e,t;const n=Se(pD),r=Se(ji),o=Se(Jc),i=Se(Dt),s=Se(Lc),a=null!==(e=Se(Yd,{optional:!0}))&&void 0!==e?e:[],l=null!==(t=Se(Ka,{optional:!0}))&&void 0!==t?t:{},u=Se(eC),c=Se(XD,{optional:!0}),d=Se(_P,{optional:!0}),f=Se(gP,{optional:!0}),h=new ve(null,n,r,o,i,s,aD(a));return d&&(h.urlHandlingStrategy=d),f&&(h.routeReuseStrategy=f),h.titleStrategy=c??u,function SP(e,t){e.errorHandler&&(t.errorHandler=e.errorHandler),e.malformedUriErrorHandler&&(t.malformedUriErrorHandler=e.malformedUriErrorHandler),e.onSameUrlNavigation&&(t.onSameUrlNavigation=e.onSameUrlNavigation),e.paramsInheritanceStrategy&&(t.paramsInheritanceStrategy=e.paramsInheritanceStrategy),e.relativeLinkResolution&&(t.relativeLinkResolution=e.relativeLinkResolution),e.urlUpdateStrategy&&(t.urlUpdateStrategy=e.urlUpdateStrategy),e.canceledNavigationResolution&&(t.canceledNavigationResolution=e.canceledNavigationResolution)}(l,h),h}let ve=(()=>{class e{constructor(n,r,o,i,s,a,l){this.rootComponentType=n,this.urlSerializer=r,this.rootContexts=o,this.location=i,this.config=l,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new Ze,this.errorHandler=CP,this.malformedUriErrorHandler=wP,this.navigated=!1,this.lastSuccessfulId=-1,this.afterPreactivation=()=>R(void 0),this.urlHandlingStrategy=new DP,this.routeReuseStrategy=new yP,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.configLoader=s.get(Jd),this.configLoader.onLoadEndListener=f=>this.triggerEvent(new sF(f)),this.configLoader.onLoadStartListener=f=>this.triggerEvent(new iF(f)),this.ngModule=s.get(yr),this.console=s.get(qT);const d=s.get(Le);this.isNgZoneEnabled=d instanceof Le&&Le.isInAngularZone(),this.resetConfig(l),this.currentUrlTree=function TN(){return new Cr(new Q([],{}),{},null)}(),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=AD(this.currentUrlTree,this.rootComponentType),this.transitions=new qt({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){var n;return null===(n=this.location.getState())||void 0===n?void 0:n.\u0275routerPageId}setupNavigations(n){const r=this.events;return n.pipe(Pn(o=>0!==o.id),q(o=>({...o,extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),un(o=>{let i=!1,s=!1;return R(o).pipe(Qe(a=>{this.currentNavigation={id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,trigger:a.source,extras:a.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),un(a=>{const l=this.browserUrlTree.toString(),u=!this.navigated||a.extractedUrl.toString()!==l||l!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||u)&&this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return rC(a.source)&&(this.browserUrlTree=a.extractedUrl),R(a).pipe(un(d=>{const f=this.transitions.getValue();return r.next(new Vi(d.id,this.serializeUrl(d.extractedUrl),d.source,d.restoredState)),f!==this.transitions.getValue()?hn:Promise.resolve(d)}),function eP(e,t,n,r){return un(o=>function JF(e,t,n,r,o){return new XF(e,t,n,r,o).apply()}(e,t,n,o.extractedUrl,r).pipe(q(i=>({...o,urlAfterRedirects:i}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),Qe(d=>{this.currentNavigation={...this.currentNavigation,finalUrl:d.urlAfterRedirects},o.urlAfterRedirects=d.urlAfterRedirects}),function uP(e,t,n,r,o,i){return je(s=>function rP(e,t,n,r,o,i,s="emptyOnly",a="legacy"){return new oP(e,t,n,r,o,s,a,i).recognize().pipe(un(l=>null===l?function nP(e){return new Ee(t=>t.error(e))}(new tP):R(l)))}(e,t,n,s.urlAfterRedirects,r.serialize(s.urlAfterRedirects),r,o,i).pipe(q(a=>({...s,targetSnapshot:a}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.rootComponentType,this.config,this.urlSerializer,this.paramsInheritanceStrategy,this.relativeLinkResolution),Qe(d=>{if(o.targetSnapshot=d.targetSnapshot,"eager"===this.urlUpdateStrategy){if(!d.extras.skipLocationChange){const h=this.urlHandlingStrategy.merge(d.urlAfterRedirects,d.rawUrl);this.setBrowserUrl(h,d)}this.browserUrlTree=d.urlAfterRedirects}const f=new eF(d.id,this.serializeUrl(d.extractedUrl),this.serializeUrl(d.urlAfterRedirects),d.targetSnapshot);r.next(f)}));if(u&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:f,extractedUrl:h,source:p,restoredState:g,extras:_}=a,y=new Vi(f,this.serializeUrl(h),p,g);r.next(y);const w=AD(h,this.rootComponentType).snapshot;return R(o={...a,targetSnapshot:w,urlAfterRedirects:h,extras:{..._,skipLocationChange:!1,replaceUrl:!1}})}return this.rawUrlTree=a.rawUrl,a.resolve(null),hn}),Qe(a=>{const l=new tF(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot);this.triggerEvent(l)}),q(a=>o={...a,guards:SF(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),function kF(e,t){return je(n=>{const{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return 0===s.length&&0===i.length?R({...n,guardsResult:!0}):function LF(e,t,n,r){return Ae(e).pipe(je(o=>function UF(e,t,n,r,o){const i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;return i&&0!==i.length?R(i.map(a=>{var l;const u=null!==(l=Bi(t))&&void 0!==l?l:o,c=Eo(a,u);return Xn(function FF(e){return e&&Gi(e.canDeactivate)}(c)?c.canDeactivate(e,t,n,r):u.runInContext(()=>c(e,t,n,r))).pipe(Jn())})).pipe(bo()):R(!0)}(o.component,o.route,n,t,r)),Jn(o=>!0!==o,!0))}(s,r,o,e).pipe(je(a=>a&&function TF(e){return"boolean"==typeof e}(a)?function VF(e,t,n,r){return Ae(t).pipe(Zn(o=>Id(function jF(e,t){return null!==e&&t&&t(new aF(e)),R(!0)}(o.route.parent,r),function $F(e,t){return null!==e&&t&&t(new uF(e)),R(!0)}(o.route,r),function HF(e,t,n){const r=t[t.length-1],i=t.slice(0,t.length-1).reverse().map(s=>function MF(e){const t=e.routeConfig?e.routeConfig.canActivateChild:null;return t&&0!==t.length?{node:e,guards:t}:null}(s)).filter(s=>null!==s).map(s=>tD(()=>R(s.guards.map(l=>{var u;const c=null!==(u=Bi(s.node))&&void 0!==u?u:n,d=Eo(l,c);return Xn(function NF(e){return e&&Gi(e.canActivateChild)}(d)?d.canActivateChild(r,e):c.runInContext(()=>d(r,e))).pipe(Jn())})).pipe(bo())));return R(i).pipe(bo())}(e,o.path,n),function BF(e,t,n){const r=t.routeConfig?t.routeConfig.canActivate:null;if(!r||0===r.length)return R(!0);const o=r.map(i=>tD(()=>{var s;const a=null!==(s=Bi(t))&&void 0!==s?s:n,l=Eo(i,a);return Xn(function RF(e){return e&&Gi(e.canActivate)}(l)?l.canActivate(t,e):a.runInContext(()=>l(t,e))).pipe(Jn())}));return R(o).pipe(bo())}(e,o.route,n))),Jn(o=>!0!==o,!0))}(r,i,e,t):R(a)),q(a=>({...n,guardsResult:a})))})}(this.ngModule.injector,a=>this.triggerEvent(a)),Qe(a=>{if(o.guardsResult=a.guardsResult,Er(a.guardsResult))throw ND(0,a.guardsResult);const l=new nF(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);this.triggerEvent(l)}),Pn(a=>!!a.guardsResult||(this.restoreHistory(a),this.cancelNavigationTransition(a,"",3),!1)),Zd(a=>{if(a.guards.canActivateChecks.length)return R(a).pipe(Qe(l=>{const u=new rF(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(l.urlAfterRedirects),l.targetSnapshot);this.triggerEvent(u)}),un(l=>{let u=!1;return R(l).pipe(function cP(e,t){return je(n=>{const{targetSnapshot:r,guards:{canActivateChecks:o}}=n;if(!o.length)return R(n);let i=0;return Ae(o).pipe(Zn(s=>function dP(e,t,n,r){const o=e.routeConfig,i=e._resolve;return void 0!==o?.title&&!JD(o)&&(i[Ni]=o.title),function fP(e,t,n,r){const o=function hP(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}(e);if(0===o.length)return R({});const i={};return Ae(o).pipe(je(s=>function pP(e,t,n,r){var o;const i=null!==(o=Bi(t))&&void 0!==o?o:r,s=Eo(e,i);return Xn(s.resolve?s.resolve(t,n):i.runInContext(()=>s(t,n)))}(e[s],t,n,r).pipe(Jn(),Qe(a=>{i[s]=a}))),Td(1),function SN(e){return q(()=>e)}(i),Qt(s=>qd(s)?hn:Yn(s)))}(i,e,t,r).pipe(q(s=>(e._resolvedData=s,e.data=TD(e,n).resolve,o&&JD(o)&&(e.data[Ni]=o.title),null)))}(s.route,r,e,t)),Qe(()=>i++),Td(1),je(s=>i===o.length?R(n):hn))})}(this.paramsInheritanceStrategy,this.ngModule.injector),Qe({next:()=>u=!0,complete:()=>{u||(this.restoreHistory(l),this.cancelNavigationTransition(l,"",2))}}))}),Qe(l=>{const u=new oF(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(l.urlAfterRedirects),l.targetSnapshot);this.triggerEvent(u)}))}),Zd(a=>{const l=u=>{var c;const d=[];null!==(c=u.routeConfig)&&void 0!==c&&c.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(Qe(f=>{u.component=f}),q(()=>{})));for(const f of u.children)d.push(...l(f));return d};return X_(l(a.targetSnapshot.root)).pipe(Na(),Ri(1))}),Zd(()=>this.afterPreactivation()),q(a=>{const l=function pF(e,t,n){const r=$i(e,t._root,n?n._root:void 0);return new ID(r,t)}(this.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return o={...a,targetRouterState:l}}),Qe(a=>{this.currentUrlTree=a.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(a.urlAfterRedirects,a.rawUrl),this.routerState=a.targetRouterState,"deferred"===this.urlUpdateStrategy&&(a.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,a),this.browserUrlTree=a.urlAfterRedirects)}),((e,t,n)=>q(r=>(new bF(t,r.targetRouterState,r.currentRouterState,n).activate(e),r)))(this.rootContexts,this.routeReuseStrategy,a=>this.triggerEvent(a)),Qe({next(){i=!0},complete(){i=!0}}),xd(()=>{var a;i||s||this.cancelNavigationTransition(o,"",1),(null===(a=this.currentNavigation)||void 0===a?void 0:a.id)===o.id&&(this.currentNavigation=null)}),Qt(a=>{if(s=!0,OD(a)){PD(a)||(this.navigated=!0,this.restoreHistory(o,!0));const u=new $a(o.id,this.serializeUrl(o.extractedUrl),a.message,a.cancellationCode);if(r.next(u),PD(a)){const c=this.urlHandlingStrategy.merge(a.url,this.rawUrlTree),d={skipLocationChange:o.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||rC(o.source)};this.scheduleNavigation(c,"imperative",null,d,{resolve:o.resolve,reject:o.reject,promise:o.promise})}else o.resolve(!1)}else{var l;this.restoreHistory(o,!0);const u=new bD(o.id,this.serializeUrl(o.extractedUrl),a,null!==(l=o.targetSnapshot)&&void 0!==l?l:void 0);r.next(u);try{o.resolve(this.errorHandler(a))}catch(c){o.reject(c)}}return hn}))}))}resetRootComponentType(n){this.rootComponentType=n,this.routerState.root.component=this.rootComponentType}setTransition(n){this.transitions.next({...this.transitions.value,...n})}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(n=>{const r="popstate"===n.type?"popstate":"hashchange";"popstate"===r&&setTimeout(()=>{var o;const i={replaceUrl:!0},s=null!==(o=n.state)&&void 0!==o&&o.navigationId?n.state:null;if(s){const l={...s};delete l.navigationId,delete l.\u0275routerPageId,0!==Object.keys(l).length&&(i.state=l)}const a=this.parseUrl(n.url);this.scheduleNavigation(a,r,s,i)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(n){this.events.next(n)}resetConfig(n){this.config=n.map(Wd),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(n,r={}){const{relativeTo:o,queryParams:i,fragment:s,queryParamsHandling:a,preserveFragment:l}=r,u=o||this.routerState.root,c=l?this.currentUrlTree.fragment:s;let d=null;switch(a){case"merge":d={...this.currentUrlTree.queryParams,...i};break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=i||null}return null!==d&&(d=this.removeEmptyProps(d)),QN(u,this.currentUrlTree,n,d,c??null)}navigateByUrl(n,r={skipLocationChange:!1}){const o=Er(n)?n:this.parseUrl(n),i=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(i,"imperative",null,r)}navigate(n,r={skipLocationChange:!1}){return function MP(e){for(let t=0;t<e.length;t++){if(null==e[t])throw new C(4008,false)}}(n),this.navigateByUrl(this.createUrlTree(n,r),r)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){let r;try{r=this.urlSerializer.parse(n)}catch(o){r=this.malformedUriErrorHandler(o,this.urlSerializer,n)}return r}isActive(n,r){let o;if(o=!0===r?{...EP}:!1===r?{...bP}:r,Er(n))return cD(this.currentUrlTree,n,o);const i=this.parseUrl(n);return cD(this.currentUrlTree,i,o)}removeEmptyProps(n){return Object.keys(n).reduce((r,o)=>{const i=n[o];return null!=i&&(r[o]=i),r},{})}processNavigations(){this.navigations.subscribe(n=>{var r;this.navigated=!0,this.lastSuccessfulId=n.id,this.currentPageId=n.targetPageId,this.events.next(new Kt(n.id,this.serializeUrl(n.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,null===(r=this.titleStrategy)||void 0===r||r.updateTitle(this.routerState.snapshot),n.resolve(!0)},n=>{this.console.warn(`Unhandled Navigation Error: ${n}`)})}scheduleNavigation(n,r,o,i,s){if(this.disposed)return Promise.resolve(!1);let a,l,u;s?(a=s.resolve,l=s.reject,u=s.promise):u=new Promise((p,g)=>{a=p,l=g});const c=++this.navigationId;let d;if("computed"===this.canceledNavigationResolution)if(0===this.currentPageId&&(o=this.location.getState()),o&&o.\u0275routerPageId)d=o.\u0275routerPageId;else if(i.replaceUrl||i.skipLocationChange){var f;d=null!==(f=this.browserPageId)&&void 0!==f?f:0}else{var h;d=(null!==(h=this.browserPageId)&&void 0!==h?h:0)+1}else d=0;return this.setTransition({id:c,targetPageId:d,source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:n,extras:i,resolve:a,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(p=>Promise.reject(p))}setBrowserUrl(n,r){const o=this.urlSerializer.serialize(n),i={...r.extras.state,...this.generateNgRouterState(r.id,r.targetPageId)};this.location.isCurrentPathEqualTo(o)||r.extras.replaceUrl?this.location.replaceState(o,"",i):this.location.go(o,"",i)}restoreHistory(n,r=!1){if("computed"===this.canceledNavigationResolution){var o,i;const s=this.currentPageId-n.targetPageId;"popstate"!==n.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==(null===(o=this.currentNavigation)||void 0===o?void 0:o.finalUrl)||0===s?this.currentUrlTree===(null===(i=this.currentNavigation)||void 0===i?void 0:i.finalUrl)&&0===s&&(this.resetState(n),this.browserUrlTree=n.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(s)}else"replace"===this.canceledNavigationResolution&&(r&&this.resetState(n),this.resetUrlToCurrentUrlTree())}resetState(n){this.routerState=n.currentRouterState,this.currentUrlTree=n.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(n,r,o){const i=new $a(n.id,this.serializeUrl(n.extractedUrl),r,o);this.triggerEvent(i),n.resolve(!1)}generateNgRouterState(n,r){return"computed"===this.canceledNavigationResolution?{navigationId:n,\u0275routerPageId:r}:{navigationId:n}}}return e.\u0275fac=function(n){$u()},e.\u0275prov=F({token:e,factory:function(){return nC()},providedIn:"root"}),e})();function rC(e){return"imperative"!==e}
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
class oC{}let TP=(()=>{class e{constructor(n,r,o,i,s){this.router=n,this.injector=o,this.preloadingStrategy=i,this.loader=s}setUpPreloading(){this.subscription=this.router.events.pipe(Pn(n=>n instanceof Kt),Zn(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(n,r){const o=[];for(const l of r){var i,s;l.providers&&!l._injector&&(l._injector=Xs(l.providers,n,`Route: ${l.path}`));const u=null!==(i=l._injector)&&void 0!==i?i:n,c=null!==(s=l._loadedInjector)&&void 0!==s?s:u;if(l.loadChildren&&!l._loadedRoutes&&void 0===l.canLoad||l.loadComponent&&!l._loadedComponent)o.push(this.preloadConfig(u,l));else if(l.children||l._loadedRoutes){var a;o.push(this.processRoutes(c,null!==(a=l.children)&&void 0!==a?a:l._loadedRoutes))}}return Ae(o).pipe(Tr())}preloadConfig(n,r){return this.preloadingStrategy.preload(r,()=>{let o;o=r.loadChildren&&void 0===r.canLoad?this.loader.loadChildren(n,r):R(null);const i=o.pipe(je(s=>{var a;return null===s?R(void 0):(r._loadedRoutes=s.routes,r._loadedInjector=s.injector,this.processRoutes(null!==(a=s.injector)&&void 0!==a?a:n,s.routes))}));return r.loadComponent&&!r._loadedComponent?Ae([i,this.loader.loadComponent(r)]).pipe(Tr()):i})}}return e.\u0275fac=function(n){return new(n||e)(M(ve),M(Lc),M(zn),M(oC),M(Jd))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const tf=new x("");let iC=(()=>{class e{constructor(n,r,o={}){this.router=n,this.viewportScroller=r,this.options=o,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},o.scrollPositionRestoration=o.scrollPositionRestoration||"disabled",o.anchorScrolling=o.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(n=>{n instanceof Vi?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=n.navigationTrigger,this.restoredId=n.restoredState?n.restoredState.navigationId:0):n instanceof Kt&&(this.lastId=n.id,this.scheduleScrollEvent(n,this.router.parseUrl(n.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(n=>{n instanceof SD&&(n.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(n.position):n.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(n.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(n,r){this.router.triggerEvent(new SD(n,"popstate"===this.lastSource?this.store[this.restoredId]:null,r))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return e.\u0275fac=function(n){$u()},e.\u0275prov=F({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function So(e,t){return{\u0275kind:e,\u0275providers:t}}function nf(e){return[{provide:Yd,multi:!0,useValue:e}]}function aC(){const e=Se(Dt);return t=>{var n,r;const o=e.get(aa);if(t!==o.components[0])return;const i=e.get(ve),s=e.get(lC);1===e.get(rf)&&i.initialNavigation(),null===(n=e.get(uC,null,P.Optional))||void 0===n||n.setUpPreloading(),null===(r=e.get(tf,null,P.Optional))||void 0===r||r.init(),i.resetRootComponentType(o.componentTypes[0]),s.next(),s.complete()}}const lC=new x("",{factory:()=>new Ze}),rf=new x("",{providedIn:"root",factory:()=>1});const uC=new x("");function FP(e){return So(0,[{provide:uC,useExisting:TP},{provide:oC,useExisting:e}])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const cC=new x("ROUTER_FORROOT_GUARD"),PP=[Jc,{provide:pD,useClass:Nd},{provide:ve,useFactory:nC},ji,{provide:br,useFactory:function sC(e){return e.routerState.root},deps:[ve]},Jd];function OP(){return new Iv("Router",ve)}let dC=(()=>{class e{constructor(n){}static forRoot(n,r){return{ngModule:e,providers:[PP,[],nf(n),{provide:cC,useFactory:$P,deps:[[ve,new Qo,new Ko]]},{provide:Ka,useValue:r||{}},null!=r&&r.useHash?{provide:_r,useClass:Ox}:{provide:_r,useClass:Jv},{provide:tf,useFactory:()=>{const e=Se(ve),t=Se(eR),n=Se(Ka);return n.scrollOffset&&t.setOffset(n.scrollOffset),new iC(e,t,n)}},null!=r&&r.preloadingStrategy?FP(r.preloadingStrategy).\u0275providers:[],{provide:Iv,multi:!0,useFactory:OP},null!=r&&r.initialNavigation?jP(r):[],[{provide:fC,useFactory:aC},{provide:Dv,multi:!0,useExisting:fC}]]}}static forChild(n){return{ngModule:e,providers:[nf(n)]}}}return e.\u0275fac=function(n){return new(n||e)(M(cC,8))},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({imports:[Gd]}),e})();function $P(e){return"guarded"}function jP(e){return["disabled"===e.initialNavigation?So(3,[{provide:oa,multi:!0,useFactory:()=>{const t=Se(ve);return()=>{t.setUpLocationChangeListener()}}},{provide:rf,useValue:2}]).\u0275providers:[],"enabledBlocking"===e.initialNavigation?So(2,[{provide:rf,useValue:0},{provide:oa,multi:!0,deps:[Dt],useFactory:t=>{const n=t.get(Fx,Promise.resolve());let r=!1;return()=>n.then(()=>new Promise(i=>{const s=t.get(ve),a=t.get(lC);(function o(i){t.get(ve).events.pipe(Pn(a=>a instanceof Kt||a instanceof $a||a instanceof bD),q(a=>a instanceof Kt||a instanceof $a&&(0===a.code||1===a.code)&&null),Pn(a=>null!==a),Ri(1)).subscribe(()=>{i()})})(()=>{i(!0),r=!0}),s.afterPreactivation=()=>(i(!0),r||a.closed?R(void 0):a),s.initialNavigation()}))}}]).\u0275providers:[]]}const fC=new x("");
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
let Mo=(()=>{class e{constructor(n,r){this.http=n,this.isLoading=!0,this.query="init",this.params={selectedCollege:"init",collegeFullName:"",selectedProgramType:"init",programTypeFullName:"",limit:25,page:1},this.resultsSource=new Ze,this.querySource=new Ze,this.paramsSource=new Ze,this.isLoadingSource=new Ze,this.results$=this.resultsSource.asObservable(),this.query$=this.querySource.asObservable(),this.params$=this.paramsSource.asObservable(),this.isLoading$=this.isLoadingSource.asObservable(),this.searchUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/degrees",this.router=r;let o=this.router.events.subscribe(i=>{i instanceof Kt&&setTimeout(()=>{""===i.url&&this.getResults(),o.unsubscribe()})});this.subscription=this.query$.subscribe(i=>{this.query=decodeURIComponent(i),this.getResults()}),this.subscription=this.params$.subscribe(i=>{this.params=i,this.getResults()})}setQuery(n){this.query=n,this.querySource.next(n),this.setRoute()}setProgramType(n,r){this.params.selectedProgramType=n,this.params.programTypeFullName=r,this.paramsSource.next(this.params),this.setRoute()}setCollege(n,r){this.params.selectedCollege=n,this.params.collegeFullName=r,this.paramsSource.next(this.params),this.setRoute()}updateCollege(n,r){this.params.selectedCollege=n,this.params.collegeFullName=r}updateProgramType(n,r){this.params.selectedProgramType=n,this.params.programTypeFullName=r}setRoute(){if("init"!==this.params.selectedCollege&&"init"!==this.params.selectedProgramType&&"init"!==this.query){let n=this.params.selectedProgramType&&"init"!==this.params.selectedProgramType?[this.params.selectedProgramType]:[],r=this.params.selectedCollege&&"init"!==this.params.selectedCollege?["college",this.params.selectedCollege]:[],o=this.query&&"init"!==this.query?["search",this.query]:[];this.router&&this.router.navigate([...n,...r,...o],{queryParamsHandling:"preserve"})}}setPage(n){this.params.page=this.params.page+n,this.paramsSource.next(this.params)}gotoPage(n,r){this.params.page=n,r&&this.paramsSource.next(this.params)}getResults(){if("init"!==this.params.selectedCollege&&"init"!==this.params.selectedProgramType&&"init"!==this.query){const n={params:(new kn).set("colleges",this.params.selectedCollege).set("limit",this.params.limit).set("page",this.params.page).set("program_types",this.params.selectedProgramType).set("search",this.query)};this.isLoadingSource.next(!0),this.resultsSource.next(this.results),this.http.get(this.searchUrl,n).pipe(Qt(this.handleError)).subscribe(r=>{this.isLoadingSource.next(!1),this.resultsSource.next(r),this.updateHeader()})}}updateHeader(){const n=document.getElementsByClassName("header-title")[0];if(n){let r=""!==this.params.programTypeFullName?this.params.programTypeFullName:"";const o=""!==this.params.collegeFullName?" in "+this.params.collegeFullName:"",i=document.getElementsByClassName("header-subtitle");if(i&&i[0]&&null!==i[0].parentNode&&i[0].parentNode.removeChild(i[0]),""!==r||""!==o){const s=document.createElement("span");let a="Bachelor"===r||"Master"===r?"'s":"";r=r.replace("Program","").replace("Professional","MD"),r=r+a+" Degrees ",s.classList.add("degree-search-secondary-heading","header-subtitle","d-inline-block","bg-inverse"),s.innerText="Find "+r+o.replace("College of ","")+" at UCF.",n.after(s)}}}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),Yn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(M(xa),M(ve))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),HP=(()=>{class e{constructor(n){this.http=n,this.collegesUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/colleges"}getColleges(){return this.http.get(this.collegesUrl).pipe(Qt(this.handleError))}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),Yn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(M(xa))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function UP(e,t){1&e&&(A(0,"p",4),pe(1,"span",5),K(2," Loading Areas of Study"),I())}function GP(e,t){if(1&e){const n=Mn();A(0,"li",14)(1,"label",15)(2,"input",16),fe("click",function(){const i=Jt(n).$implicit;return Xt(ee(2).setCollege(i.slug,i.fullname))}),I(),pe(3,"span",17),A(4,"span",12),K(5),I()()()}if(2&e){const n=t.$implicit,r=ee(2);T(2),gr("value",n.slug),B("checked",r.isCollegeChecked(n)),T(3),In(n.name)}}function zP(e,t){if(1&e){const n=Mn();A(0,"div",6)(1,"ul",7)(2,"li",8)(3,"a",9)(4,"label",10)(5,"input",11),fe("click",function(){return Jt(n),Xt(ee().setCollege("",""))}),I(),A(6,"span",12),K(7,"View All"),I()()()(),oe(8,GP,6,3,"li",13),I()()}if(2&e){const n=ee();T(8),B("ngForOf",n.colleges)}}let WP=(()=>{class e{constructor(n,r,o){this.collegeService=n,this.searchService=r,this.router=o,this.isLoading=!0,this.isCollegesOpen=!1;let i=this.router.events.subscribe(s=>{s instanceof Kt&&setTimeout(()=>{let a=s.url.split("/"),l=a.indexOf("college");-1!==l?(this.selectedCollege=a[l+1],this.searchService.setCollege(this.selectedCollege,"")):this.searchService.setCollege("",""),i.unsubscribe()})})}ngOnInit(){this.collegeService.getColleges().subscribe(n=>{this.colleges=n,this.isLoading=!1})}isCollegeChecked(n){return this.selectedCollege===n.slug&&(this.searchService.updateCollege(n.slug,n.fullname),!0)}setCollege(n,r){this.selectedCollege=n,this.searchService.gotoPage(1,!1),this.searchService.setCollege(n,r)}}return e.\u0275fac=function(n){return new(n||e)(v(HP),v(Mo),v(ve))},e.\u0275cmp=Pt({type:e,selectors:[["app-colleges"]],decls:5,vars:2,consts:[[1,"h6","pb-2","mt-4"],[1,"mb-4"],["class","my-3",4,"ngIf"],["class","degree-search-colleges",4,"ngIf"],[1,"my-3"],[1,"fa","fa-spinner","fa-spin"],[1,"degree-search-colleges"],[1,"degree-search-colleges","list-unstyled"],[1,"mb-2"],["href","#"],[1,"custom-control","custom-radio","mb-0","pl-0"],["type","radio","name","college","value","",1,"custom-control-input",3,"click"],[1,"custom-control-description"],["class","degree-search-college",4,"ngFor","ngForOf"],[1,"degree-search-college"],[1,"custom-control","custom-radio","mb-0"],["type","radio","name","college",1,"custom-control-input",3,"value","checked","click"],[1,"custom-control-indicator"]],template:function(n,r){1&n&&(A(0,"h3",0),K(1," Select Area of Study\n"),I(),A(2,"div",1),oe(3,UP,3,0,"p",2),oe(4,zP,9,1,"div",3),I()),2&n&&(T(3),B("ngIf",r.isLoading),T(1),B("ngIf",r.colleges&&r.colleges.length))},dependencies:[Mi,Dr]}),e})(),qP=(()=>{class e{constructor(n){this.http=n,this.programTypesUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/program-types",this.programTypesSource=new Ze,this.programTypes$=this.programTypesSource.asObservable()}getprogramTypes(){return this.http.get(this.programTypesUrl).pipe(Qt(this.handleError))}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),Yn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(M(xa))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function QP(e,t){if(1&e&&(A(0,"span",2),pe(1,"span",3),A(2,"span",4),K(3),I()()),2&e){const n=ee();T(1),B("ngClass",n.getProgamClass(n.degreeType)),T(2),In(n.getProgramType(n.degreeType))}}function KP(e,t){if(1&e&&(bn(0),K(1),Sn()),2&e){const n=ee();T(1),an("(",n.getProgramType(n.degreeType),")")}}let hC=(()=>{class e{constructor(){this.degreeType="",this.textLabel=""}getProgamClass(n){return"bachelor"===n||"undergraduate-program"===n||"minor"===n||"undergraduate-certificate"===n?"fa fa-bookmark fa-2x text-primary":"doctorate"===n||"master"===n||"specialist"===n||"graduate-certificate"===n||"graduate-program"===n?"fa fa-bookmark fa-2x text-danger":"fa fa-bookmark fa-2x text-complementary"}getProgramType(n){if("flagOnly"===this.textLabel)return"";switch(n){case"bachelor":return"B";case"undergraduate-program":default:return"";case"minor":return"Mn";case"undergraduate-certificate":return"UC";case"doctorate":return"D";case"graduate-certificate":return"GC";case"master":case"graduate-program":return"M";case"specialist":return"Sp";case"professional-program":return"MD"}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=Pt({type:e,selectors:[["app-programs-label"]],inputs:{degreeType:"degreeType",textLabel:"textLabel"},decls:2,vars:2,consts:[["class","fa-stack","style","line-height:1.6em",4,"ngIf"],[4,"ngIf"],[1,"fa-stack",2,"line-height","1.6em"],[1,"fa","fa-stack-2x",3,"ngClass"],[1,"fa-stack-1x","font-sans-serif","small"]],template:function(n,r){1&n&&(oe(0,QP,4,2,"span",0),oe(1,KP,2,1,"ng-container",1)),2&n&&(B("ngIf","flagOnly"===r.textLabel||""===r.textLabel),T(1),B("ngIf","textOnly"===r.textLabel))},dependencies:[Si,Dr]}),e})();function ZP(e,t){1&e&&(A(0,"p",3),pe(1,"span",4),K(2," Loading Degree Levels"),I())}function YP(e,t){if(1&e){const n=Mn();bn(0),A(1,"li")(2,"label",17)(3,"input",12),fe("click",function(){const i=Jt(n).$implicit;return Xt(ee(4).setProgramType(i.slug,i.name))}),I(),pe(4,"span",18),A(5,"span",10),K(6),pe(7,"app-programs-label",13),I()()(),Sn()}if(2&e){const n=t.$implicit,r=ee(4);T(3),gr("value",n.name),B("checked",r.isProgramTypeChecked(n)),T(3),an(" ",n.name.replace("Undergraduate ","").replace("Graduate ","")," "),T(1),B("degreeType",n.slug)("textLabel","textOnly")}}function JP(e,t){if(1&e&&(A(0,"ul",16),oe(1,YP,8,5,"ng-container",11),I()),2&e){const n=ee().$implicit;B("ngClass",ee(2).isProgramTypeVisible(n)?"":"d-none"),T(1),B("ngForOf",n.children)}}function XP(e,t){if(1&e){const n=Mn();bn(0),A(1,"li")(2,"label",8)(3,"input",12),fe("click",function(){const i=Jt(n).$implicit;return Xt(ee(2).setProgramType(i.slug,i.name))}),I(),A(4,"span",10),pe(5,"app-programs-label",13),A(6,"a",14),fe("click",function(){const i=Jt(n).$implicit;return Xt(ee(2).setProgramType(i.slug,i.name))}),K(7),I()()()(),oe(8,JP,2,2,"ul",15),Sn()}if(2&e){const n=t.$implicit,r=ee(2);T(3),gr("value",n.name),B("checked",r.isProgramTypeChecked(n)),T(2),B("degreeType",n.slug)("textLabel","flagOnly"),T(2),In(n.name.replace(" Program","").replace("Professional","MD")),T(1),B("ngIf",n.children.length)}}function eO(e,t){if(1&e){const n=Mn();A(0,"ul",5)(1,"li",6)(2,"a",7)(3,"label",8)(4,"input",9),fe("click",function(){return Jt(n),Xt(ee().setProgramType("",""))}),I(),A(5,"span",10),K(6," View All "),I()()()(),oe(7,XP,9,6,"ng-container",11),I()}if(2&e){const n=ee();T(7),B("ngForOf",n.programTypes)}}let tO=(()=>{class e{constructor(n,r,o){this.programTypeService=n,this.searchService=r,this.router=o,this.isLoading=!0,this.isProgramTypeOpen=!1;let i=this.router.events.subscribe(s=>{s instanceof Kt&&setTimeout(()=>{let a=s.url.split("/");if(a?.length){let l=a.indexOf("college");-1!==l&&a.splice(l,2);let u=a.indexOf("search");-1!==u&&a.splice(u,2);let c=a[1];c&&c.startsWith("?")&&(c=""),c&&""!==c?(this.selectedProgramType=c,this.searchService.setProgramType(this.selectedProgramType,"")):this.searchService.setProgramType("","")}i.unsubscribe()})})}ngOnInit(){this.programTypeService.getprogramTypes().subscribe(n=>{n.length&&(n[1].children.splice(0,0,n[1].children.splice(2,1)[0]),this.programTypes=n,this.isLoading=!1)})}isProgramTypeVisible(n){let r=!1;return n.slug===this.selectedProgramType?r=!0:n.children.forEach(o=>{o.slug===this.selectedProgramType&&(r=!0)}),r}isProgramTypeChecked(n){return this.selectedProgramType===n.slug&&(this.searchService.updateProgramType(n.slug,n.name),!0)}setProgramType(n,r){this.selectedProgramType=n,this.searchService.gotoPage(1,!1),this.searchService.setProgramType(n,r)}}return e.\u0275fac=function(n){return new(n||e)(v(qP),v(Mo),v(ve))},e.\u0275cmp=Pt({type:e,selectors:[["app-program-types"]],decls:4,vars:2,consts:[[1,"h6","pb-2","mt-4"],["class","my-3",4,"ngIf"],["class","degree-search-programTypes list-unstyled",4,"ngIf"],[1,"my-3"],[1,"fa","fa-spinner","fa-spin"],[1,"degree-search-programTypes","list-unstyled"],[1,"mb-2"],["href","#"],[1,"custom-control","custom-radio","mb-0","pl-0"],["type","radio","name","programType","value","",1,"custom-control-input",3,"click"],[1,"custom-control-description"],[4,"ngFor","ngForOf"],["type","radio","name","programType",1,"custom-control-input",3,"value","checked","click"],[1,"d-none","d-md-inline-block","mr-1",3,"degreeType","textLabel"],["href","javascript:;",1,"text-secondary",3,"click"],["class","list-unstyled ml-3 pl-md-3",3,"ngClass",4,"ngIf"],[1,"list-unstyled","ml-3","pl-md-3",3,"ngClass"],[1,"custom-control","custom-radio","mb-0"],[1,"custom-control-indicator"]],template:function(n,r){1&n&&(A(0,"h3",0),K(1," Select Degree Level\n"),I(),oe(2,ZP,3,0,"p",1),oe(3,eO,8,1,"ul",2)),2&n&&(T(2),B("ngIf",r.isLoading),T(1),B("ngIf",r.programTypes&&r.programTypes.length))},dependencies:[Si,Mi,Dr,hC]}),e})(),pC=(()=>{class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}}return e.\u0275fac=function(n){return new(n||e)(v(Dn),v(_t))},e.\u0275dir=L({type:e}),e})(),Sr=(()=>{class e extends pC{}return e.\u0275fac=function(){let t;return function(r){return(t||(t=function Ge(e){return jn(()=>{const t=e.prototype.constructor,n=t[gn]||Wl(t),r=Object.prototype;let o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){const i=o[gn]||Wl(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}(e)))(r||e)}}(),e.\u0275dir=L({type:e,features:[re]}),e})();const dn=new x("NgValueAccessor"),oO={provide:dn,useExisting:ue(()=>Xa),multi:!0},sO=new x("CompositionEventMode");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Xa=(()=>{class e extends pC{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function iO(){const e=ln()?ln().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(n){this.setProperty("value",n??"")}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}}return e.\u0275fac=function(n){return new(n||e)(v(Dn),v(_t),v(sO,8))},e.\u0275dir=L({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){1&n&&fe("input",function(i){return r._handleInput(i.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(i){return r._compositionEnd(i.target.value)})},features:[ge([oO]),re]}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ke=new x("NgValidators"),tr=new x("NgAsyncValidators");function SC(e){return null!=e}function MC(e){return di(e)?Ae(e):e}function IC(e){let t={};return e.forEach(n=>{t=null!=n?{...t,...n}:t}),0===Object.keys(t).length?null:t}function AC(e,t){return t.map(n=>n(e))}function TC(e){return e.map(t=>function uO(e){return!e.validate}(t)?t:n=>t.validate(n))}function sf(e){return null!=e?function xC(e){if(!e)return null;const t=e.filter(SC);return 0==t.length?null:function(n){return IC(AC(n,t))}}(TC(e)):null}function af(e){return null!=e?function RC(e){if(!e)return null;const t=e.filter(SC);return 0==t.length?null:function(n){return function nO(...e){const t=ih(e),{args:n,keys:r}=Z_(e),o=new Ee(i=>{const{length:s}=n;if(!s)return void i.complete();const a=new Array(s);let l=s,u=s;for(let c=0;c<s;c++){let d=!1;Nt(n[c]).subscribe(be(i,f=>{d||(d=!0,u--),a[c]=f},()=>l--,void 0,()=>{(!l||!d)&&(u||i.next(r?J_(r,a):a),i.complete())}))}});return t?o.pipe(Y_(t)):o}
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
       */(AC(n,t).map(MC)).pipe(q(IC))}}(TC(e)):null}function NC(e,t){return null===e?[t]:Array.isArray(e)?[...e,t]:[e,t]}function FC(e){return e._rawValidators}function PC(e){return e._rawAsyncValidators}function lf(e){return e?Array.isArray(e)?e:[e]:[]}function tl(e,t){return Array.isArray(e)?e.includes(t):e===t}function OC(e,t){const n=lf(t);return lf(e).forEach(o=>{tl(n,o)||n.push(o)}),n}function kC(e,t){return lf(t).filter(n=>!tl(e,n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class LC{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=sf(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=af(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,n){return!!this.control&&this.control.hasError(t,n)}getError(t,n){return this.control?this.control.getError(t,n):null}}
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
       */class nr extends LC{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class VC{constructor(t){this._cd=t}get isTouched(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.touched)}get isUntouched(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.untouched)}get isPristine(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.pristine)}get isDirty(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.dirty)}get isValid(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.valid)}get isInvalid(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.invalid)}get isPending(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.pending)}get isSubmitted(){var t;return!(null===(t=this._cd)||void 0===t||!t.submitted)}}let $C=(()=>{class e extends VC{constructor(n){super(n)}}return e.\u0275fac=function(n){return new(n||e)(v(nr,2))},e.\u0275dir=L({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){2&n&&qs("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[re]}),e})(),jC=(()=>{class e extends VC{constructor(n){super(n)}}return e.\u0275fac=function(n){return new(n||e)(v(it,10))},e.\u0275dir=L({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){2&n&&qs("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[re]}),e})();
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
const Wi="VALID",rl="INVALID",Io="PENDING",qi="DISABLED";function HC(e){return Array.isArray(e)?sf(e):e||null}function UC(e){return Array.isArray(e)?af(e):e||null}function ol(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}function Qi(e,t){var n,r;(function gf(e,t){const n=FC(e);null!==t.validator?e.setValidators(NC(n,t.validator)):"function"==typeof n&&e.setValidators([n]);const r=PC(e);null!==t.asyncValidator?e.setAsyncValidators(NC(r,t.asyncValidator)):"function"==typeof r&&e.setAsyncValidators([r]);const o=()=>e.updateValueAndValidity();al(t._rawValidators,o),al(t._rawAsyncValidators,o)})(e,t),t.valueAccessor.writeValue(e.value),e.disabled&&(null===(n=(r=t.valueAccessor).setDisabledState)||void 0===n||n.call(r,!0)),function vO(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&qC(e,t)})}(e,t),function DO(e,t){const n=(r,o)=>{t.valueAccessor.writeValue(r),o&&t.viewToModelUpdate(r)};e.registerOnChange(n),t._registerOnDestroy(()=>{e._unregisterOnChange(n)})}(e,t),function _O(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&qC(e,t),"submit"!==e.updateOn&&e.markAsTouched()})}(e,t),function yO(e,t){if(t.valueAccessor.setDisabledState){const n=r=>{t.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(n),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(n)})}}(e,t)}function sl(e,t,n=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),function ll(e,t){let n=!1;if(null!==e){if(null!==t.validator){const o=FC(e);if(Array.isArray(o)&&o.length>0){const i=o.filter(s=>s!==t.validator);i.length!==o.length&&(n=!0,e.setValidators(i))}}if(null!==t.asyncValidator){const o=PC(e);if(Array.isArray(o)&&o.length>0){const i=o.filter(s=>s!==t.asyncValidator);i.length!==o.length&&(n=!0,e.setAsyncValidators(i))}}}const r=()=>{};return al(t._rawValidators,r),al(t._rawAsyncValidators,r),n}(e,t),e&&(t._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function al(e,t){e.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(t)})}function qC(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}
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
const Df=new x("NgModelWithFormControlWarning"),FO={provide:nr,useExisting:ue(()=>Cf)};let Cf=(()=>{class e extends nr{constructor(n,r,o,i){super(),this._ngModelWarningConfig=i,this.update=new we,this._ngModelWarningSent=!1,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=function yf(e,t){if(!t)return null;let n,r,o;return Array.isArray(t),t.forEach(i=>{i.constructor===Xa?n=i:function EO(e){return Object.getPrototypeOf(e.constructor)===Sr}(i)?r=i:o=i}),o||r||n||null}(0,o)}set isDisabled(n){}ngOnChanges(n){if(this._isControlChanged(n)){const r=n.form.previousValue;r&&sl(r,this,!1),Qi(this.form,this),this.form.updateValueAndValidity({emitEvent:!1})}(function mf(e,t){if(!e.hasOwnProperty("model"))return!1;const n=e.model;return!!n.isFirstChange()||!Object.is(t,n.currentValue)})(n,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&sl(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_isControlChanged(n){return n.hasOwnProperty("form")}}return e._ngModelWarningSentOnce=!1,e.\u0275fac=function(n){return new(n||e)(v(Ke,10),v(tr,10),v(dn,10),v(Df,8))},e.\u0275dir=L({type:e,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[ge([FO]),re,St]}),e})(),JO=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({imports:[iw]}),e})(),XO=(()=>{class e{static withConfig(n){return{ngModule:e,providers:[{provide:Df,useValue:n.warnOnNgModelWithFormControl}]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({imports:[JO]}),e})();
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
class tk extends ct{constructor(t,n){super()}schedule(t,n=0){return this}}const ul={setInterval(e,t,...n){const{delegate:r}=ul;return r?.setInterval?r.setInterval(e,t,...n):setInterval(e,t,...n)},clearInterval(e){const{delegate:t}=ul;return(t?.clearInterval||clearInterval)(e)},delegate:void 0},Cw={now:()=>(Cw.delegate||Date).now(),delegate:void 0};class Zi{constructor(t,n=Zi.now){this.schedulerActionCtor=t,this.now=n}schedule(t,n=0,r){return new this.schedulerActionCtor(this,t).schedule(r,n)}}Zi.now=Cw.now;const ok=new class rk extends Zi{constructor(t,n=Zi.now){super(t,n),this.actions=[],this._active=!1}flush(t){const{actions:n}=this;if(this._active)return void n.push(t);let r;this._active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=n.shift());if(this._active=!1,r){for(;t=n.shift();)t.unsubscribe();throw r}}}(class nk extends tk{constructor(t,n){super(t,n),this.scheduler=t,this.work=n,this.pending=!1}schedule(t,n=0){var r;if(this.closed)return this;this.state=t;const o=this.id,i=this.scheduler;return null!=o&&(this.id=this.recycleAsyncId(i,o,n)),this.pending=!0,this.delay=n,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(i,this.id,n),this}requestAsyncId(t,n,r=0){return ul.setInterval(t.flush.bind(t,this),r)}recycleAsyncId(t,n,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return n;null!=n&&ul.clearInterval(n)}execute(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(t,n);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,n){let o,r=!1;try{this.work(t)}catch(i){r=!0,o=i||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:t,scheduler:n}=this,{actions:r}=n;this.work=this.state=this.scheduler=null,this.pending=!1,Ar(r,this),null!=t&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null,super.unsubscribe()}}});function ak(e,t){return e===t}let lk=(()=>{class e{constructor(n,r){this.searchService=n,this.router=r;let o=this.router.events.subscribe(i=>{i instanceof Kt&&setTimeout(()=>{let s=i.url.split("/"),a=s.indexOf("search");if(-1!==a){let l=decodeURIComponent(s[a+1]);l=l.includes("?")?l.split("?")[0]:l,this.searchField.setValue(l)}else this.searchService.setQuery("");o.unsubscribe()})})}ngOnInit(){this.searchField=new class extends class WC{constructor(t,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=n,this._composedValidatorFn=HC(this._rawValidators),this._composedAsyncValidatorFn=UC(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===Wi}get invalid(){return this.status===rl}get pending(){return this.status==Io}get disabled(){return this.status===qi}get enabled(){return this.status!==qi}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=HC(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=UC(t)}addValidators(t){this.setValidators(OC(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(OC(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(kC(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(kC(t,this._rawAsyncValidators))}hasValidator(t){return tl(this._rawValidators,t)}hasAsyncValidator(t){return tl(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=Io,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const n=this._parentMarkedDirty(t.onlySelf);this.status=qi,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:n}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const n=this._parentMarkedDirty(t.onlySelf);this.status=Wi,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:n}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Wi||this.status===Io)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?qi:Wi}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=Io,this._hasOwnPendingAsyncValidator=!0;const n=MC(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,n={}){this.errors=t,this._updateControlsErrors(!1!==n.emitEvent)}get(t){let n=t;return null==n||(Array.isArray(n)||(n=n.split(".")),0===n.length)?null:n.reduce((r,o)=>r&&r._find(o),this)}getError(t,n){const r=n?this.get(n):this;return r&&r.errors?r.errors[t]:null}hasError(t,n){return!!this.getError(t,n)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new we,this.statusChanges=new we}_calculateStatus(){return this._allControlsDisabled()?qi:this.errors?rl:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Io)?Io:this._anyControlsHaveStatus(rl)?rl:Wi}_anyControlsHaveStatus(t){return this._anyControls(n=>n.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){ol(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */{constructor(t=null,n,r){super(function ff(e){return(ol(e)?e.validators:e)||null}(n),function hf(e,t){return(ol(t)?t.asyncValidators:e)||null}(r,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ol(n)&&(n.nonNullable||n.initialValueIsDefault)&&(this.defaultValue=JC(t)?t.value:t)}setValue(t,n={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==n.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==n.emitViewToModelChange)),this.updateValueAndValidity(n)}patchValue(t,n={}){this.setValue(t,n)}reset(t=this.defaultValue,n={}){this._applyFormState(t),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){YC(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){YC(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){JC(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}},this.searchField.valueChanges.pipe(function ik(e,t=ok){return Ie((n,r)=>{let o=null,i=null,s=null;const a=()=>{if(o){o.unsubscribe(),o=null;const u=i;i=null,r.next(u)}};function l(){const u=s+e,c=t.now();if(c<u)return o=this.schedule(void 0,u-c),void r.add(o);a()}n.subscribe(be(r,u=>{i=u,s=t.now(),o||(o=t.schedule(l,e),r.add(o))},()=>{a(),r.complete()},void 0,()=>{i=o=null}))})}(600),function sk(e,t=$n){return e=e??ak,Ie((n,r)=>{let o,i=!0;n.subscribe(be(r,s=>{const a=t(s);(i||!e(o,a))&&(i=!1,o=a,r.next(s))}))})}()).subscribe(n=>{(0===n.length||n.length>2)&&(this.searchService.gotoPage(1,!1),this.searchService.setQuery(n))})}}return e.\u0275fac=function(n){return new(n||e)(v(Mo),v(ve))},e.\u0275cmp=Pt({type:e,selectors:[["app-search-form"]],decls:7,vars:1,consts:[[1,"jumbotron","jumbotron-fluid","bg-primary","py-3","mb-0"],[1,"container","bg-primary"],[1,"row"],[1,"col-12"],["id","degree-search-form","role","search","placeholder","Search for a degree..."],[1,"search-form-inner"],["id","degree-search-query","name","degree-search-query","type","search","autocomplete","off","aria-controls","searchResults","placeholder","Search for a degree...",1,"form-control",3,"formControl","keydown.enter"]],template:function(n,r){1&n&&(A(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"form",4)(5,"div",5)(6,"input",6),fe("keydown.enter",function(i){return i.preventDefault()}),I()()()()()()()),2&n&&(T(6),B("formControl",r.searchField))},dependencies:[rw,Xa,$C,jC,Cf]}),e})();const uk=["paginationContainer"];function ck(e,t){if(1&e){const n=Mn();A(0,"li",7)(1,"button",8),fe("click",function(){return Jt(n),Xt(ee(2).setPage(-1))}),A(2,"span",9),K(3,"\xab"),I(),A(4,"span",10),K(5,"Previous"),I()()()}}const dk=function(e){return{active:e}};function fk(e,t){if(1&e){const n=Mn();A(0,"li",11)(1,"button",8),fe("click",function(){const i=Jt(n).$implicit;return Xt(ee(2).goToPage(i))}),K(2),I()()}if(2&e){const n=t.$implicit,r=ee(2);B("ngClass",jy(2,dk,r.results.currentPage===n)),T(2),an(" ",n," ")}}function hk(e,t){if(1&e){const n=Mn();A(0,"li",7)(1,"button",8),fe("click",function(){return Jt(n),Xt(ee(2).setPage(1))}),A(2,"span",9),K(3,"\xbb"),I(),A(4,"span",10),K(5,"Next"),I()()()}}function pk(e,t){if(1&e&&(A(0,"div",1,2)(2,"nav",3)(3,"ul",4),oe(4,ck,6,0,"li",5),oe(5,fk,3,4,"li",6),oe(6,hk,6,0,"li",5),I()()()),2&e){const n=ee();T(4),B("ngIf",n.results.currentPage>1),T(1),B("ngForOf",n.pages),T(1),B("ngIf",n.results.currentPage<n.results.totalPages)}}let gk=(()=>{class e{constructor(n){this.searchService=n}ngOnInit(){}ngAfterViewInit(){setTimeout(()=>{this.paginationContainer&&this.pagination(this.paginationContainer.nativeElement.offsetWidth)})}setPage(n){this.searchService.setPage(n)}goToPage(n){n!==this.results?.currentPage&&this.searchService.gotoPage(n,!0)}pagination(n){if(this.results){let o=n<600?2:4,i=this.results.currentPage-o<1?1:this.results.currentPage-o,s=this.results.currentPage+o>this.results.totalPages?this.results.totalPages:this.results.currentPage+o;this.pages=new Array;for(var r=i;r<=s;r++)this.pages.push(r)}}}return e.\u0275fac=function(n){return new(n||e)(v(Mo))},e.\u0275cmp=Pt({type:e,selectors:[["app-pagination"]],viewQuery:function(n,r){if(1&n&&ta(uk,5),2&n){let o;go(o=mo())&&(r.paginationContainer=o.first)}},inputs:{results:"results"},decls:1,vars:1,consts:[["class","mt-5",4,"ngIf"],[1,"mt-5"],["paginationContainer",""],["aria-label","Degree Results Pagination"],[1,"pagination","pagination-lg","justify-content-center"],["class","page-item",4,"ngIf"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item"],[1,"page-link",3,"click"],["aria-hidden","true"],[1,"sr-only"],[1,"page-item",3,"ngClass"]],template:function(n,r){1&n&&oe(0,pk,7,3,"div",0),2&n&&B("ngIf",r.results&&r.results.totalPages>1)},dependencies:[Si,Mi,Dr]}),e})();const mk=["searchResultsContainer"],yk=["degreeLinks"];function vk(e,t){if(1&e&&(A(0,"span"),K(1," for the "),A(2,"strong"),K(3),I(),K(4," program"),I()),2&e){const n=ee(2);T(3),In(n.params.programTypeFullName)}}function _k(e,t){if(1&e&&(A(0,"span"),K(1," at the "),A(2,"strong"),K(3),I()()),2&e){const n=ee(2);T(3),In(n.params.collegeFullName)}}function Dk(e,t){if(1&e&&(A(0,"p",1),K(1," No degrees found "),oe(2,vk,5,1,"span",2),oe(3,_k,4,1,"span",2),K(4," at UCF.\n"),I()),2&e){const n=ee();T(2),B("ngIf",n.params&&""!=n.params.programTypeFullName),T(1),B("ngIf",n.params&&""!=n.params.collegeFullName)}}function Ck(e,t){if(1&e&&(A(0,"div",22),K(1),I()),2&e){const n=ee().$implicit;T(1),In(n.excerpt)}}function wk(e,t){if(1&e&&(bn(0),pe(1,"span",23),K(2),Sn()),2&e){const n=ee().$implicit;T(2),an(" ",n.hours,"")}}function Ek(e,t){if(1&e&&(A(0,"div",30),K(1),I()),2&e){const n=ee().$implicit;T(1),In(n.excerpt)}}function bk(e,t){if(1&e&&(bn(0),pe(1,"span",23),K(2),Sn()),2&e){const n=ee().$implicit;T(2),an(" ",n.hours,"")}}function Sk(e,t){if(1&e&&(A(0,"div",26)(1,"div",12)(2,"div",27)(3,"div",15)(4,"div",28)(5,"a",16),K(6),I(),oe(7,Ek,2,1,"div",29),I()(),A(8,"div",19),oe(9,bk,3,1,"ng-container",2),I(),A(10,"div",19),pe(11,"app-programs-label",20),I()()()()),2&e){const n=t.$implicit;T(5),gr("href",n.url,ei),jt("aria-label",n.title),T(1),an(" ",n.nameShort," "),T(1),B("ngIf",n.excerpt),T(2),B("ngIf",n.hours),T(2),B("degreeType",n.type)}}function Mk(e,t){if(1&e&&(A(0,"div",24),oe(1,Sk,12,6,"div",25),I()),2&e){const n=ee().$implicit;T(1),B("ngForOf",n.subplans)}}function Ik(e,t){if(1&e&&(A(0,"div"),pe(1,"hr",11),A(2,"div",12)(3,"div",13,14)(5,"div",15)(6,"div",5)(7,"a",16,17),K(9),I(),oe(10,Ck,2,1,"div",18),I()(),A(11,"div",19),oe(12,wk,3,1,"ng-container",2),I(),A(13,"div",19),pe(14,"app-programs-label",20),I()()(),oe(15,Mk,2,1,"div",21),I()),2&e){const n=t.$implicit;T(7),gr("href",n.url,ei),T(2),an(" ",n.title," "),T(1),B("ngIf",n.excerpt),T(2),B("ngIf",n.hours),T(2),B("degreeType",n.type),T(1),B("ngIf",n.subplans)}}function Ak(e,t){if(1&e&&(A(0,"div",10),oe(1,Ik,16,6,"div",7),I()),2&e){const n=ee().$implicit;T(1),B("ngForOf",n.degrees)}}function Tk(e,t){if(1&e&&(bn(0),oe(1,Ak,2,1,"div",9),Sn()),2&e){const n=t.$implicit;T(1),B("ngIf",n.degrees)}}function xk(e,t){if(1&e&&(A(0,"div",1)(1,"div",3)(2,"div",4)(3,"div",5),K(4," Programs "),I()(),A(5,"div",6),K(6," Hours to Complete "),I(),A(7,"div",6),K(8," Degree Level "),I()(),oe(9,Tk,2,1,"ng-container",7),pe(10,"app-pagination",8),I()),2&e){const n=ee();T(9),B("ngForOf",n.results.types),T(1),B("results",n.results)}}let Rk=(()=>{class e{constructor(n){this.searchService=n,this.isLoading=!0,this.subscription=this.searchService.results$.subscribe(r=>{this.results=r}),this.subscription=this.searchService.params$.subscribe(r=>{this.params=r}),this.subscription=this.searchService.isLoading$.subscribe(r=>{this.isLoading=r})}ngOnInit(){}ngAfterViewInit(){this.degreeLinks?.changes.subscribe(()=>{setTimeout(()=>{this.degreeLinks&&this.degreeLinks.first&&this.degreeLinks.first.nativeElement&&this.searchResultsContainer?.nativeElement.offsetWidth>600&&this.degreeLinks.first.nativeElement.focus()})})}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(v(Mo))},e.\u0275cmp=Pt({type:e,selectors:[["app-search-results"]],viewQuery:function(n,r){if(1&n&&(ta(mk,5),ta(yk,5)),2&n){let o;go(o=mo())&&(r.searchResultsContainer=o.first),go(o=mo())&&(r.degreeLinks=o)}},decls:2,vars:2,consts:[["class","mt-4",4,"ngIf"],[1,"mt-4"],[4,"ngIf"],[1,"row","align-items-end","d-none","d-md-flex","mb-3"],[1,"col-md-6","program-header"],[1,"pl-3"],[1,"col-md-3","text-center","program-header"],[4,"ngFor","ngForOf"],[3,"results"],["class","degree-search-results-container list-unstyled",4,"ngIf"],[1,"degree-search-results-container","list-unstyled"],[1,"hr-primary","m-0"],[1,"degree-hover"],[1,"row","degree","position-relative","py-3"],["searchResultsContainer",""],[1,"col-12","col-md-6"],[1,"stretched-link",3,"href"],["degreeLinks",""],["class","degree-description small mt-2 mb-0",4,"ngIf"],[1,"col-md-3","text-center","d-none","d-md-block"],[3,"degreeType"],["class","degree-search-subplan-results-container list-unstyled ml-0",4,"ngIf"],[1,"degree-description","small","mt-2","mb-0"],["aria-hidden","true",1,"fa","fa-clock-o"],[1,"degree-search-subplan-results-container","list-unstyled","ml-0"],["class","search-result-subplan",4,"ngFor","ngForOf"],[1,"search-result-subplan"],[1,"row","degree-subplan","position-relative","py-3"],[1,"pl-4","ml-2"],["class","degree-description small mt-2",4,"ngIf"],[1,"degree-description","small","mt-2"]],template:function(n,r){1&n&&(oe(0,Dk,5,2,"p",0),oe(1,xk,11,2,"div",0)),2&n&&(B("ngIf",!r.isLoading&&0===r.results.endIndex),T(1),B("ngIf",!r.isLoading&&r.results.endIndex>0))},dependencies:[Mi,Dr,gk,hC]}),e})();function Nk(e,t){1&e&&(A(0,"div",13)(1,"div",14)(2,"p",15),pe(3,"span",16),K(4," Loading degrees"),I()()())}let Zt=(()=>{class e{constructor(n,r){this.searchService=n,this.router=r,this.isLoading=!0,this.isFilterVisible=!1,this.router.events.subscribe(o=>{o instanceof Vi&&o.url&&o.url.match(/^\/#!/)&&this.router.navigate([o.url.replace("/#!","")],{queryParamsHandling:"preserve"})}),this.subscription=this.searchService.isLoading$.subscribe(o=>{this.isLoading=o}),this.subscription=this.searchService.results$.subscribe(o=>{this.results=o}),this.subscription=this.searchService.params$.subscribe(o=>{this.params=o})}toggleFilters(){this.isFilterVisible=!this.isFilterVisible}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(v(Mo),v(ve))},e.\u0275cmp=Pt({type:e,selectors:[["app-home"]],decls:21,vars:3,consts:[[1,"container","mb-5"],[1,"row"],[1,"col-md-5","col-lg-4","mb-2","degree-search-sidebar"],[1,"text-center","d-md-none","mt-4",3,"ngClass"],[1,"btn","btn-sm","text-transform-none","btn-outline-secondary","px-5",3,"click"],["aria-hidden","true",1,"fa","fa-filter"],[1,"bg-faded","px-4","py-2","mr-md-4","d-none","d-md-block",3,"ngClass"],[1,"close","d-md-none",3,"click"],[1,"pb-2","mt-4"],["href","https://www.ucf.edu/online/",1,"d-inline-block","mr-2","custom-control-description"],[1,"fa","fa-external-link","text-primary","ml-2","mr-2"],["id","searchResults","role","region","aria-live","polite","aria-label","Search results",1,"col-md-7","col-lg-8"],["class","row mb-4 mt-4",4,"ngIf"],[1,"row","mb-4","mt-4"],[1,"col-md-12"],[1,"mb-0"],[1,"fa","fa-spinner","fa-spin"]],template:function(n,r){1&n&&(pe(0,"app-search-form"),A(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"button",4),fe("click",function(){return r.toggleFilters()}),pe(6,"span",5),K(7," Filter "),I()(),A(8,"div",6)(9,"span",7),fe("click",function(){return r.toggleFilters()}),K(10,"x"),I(),pe(11,"app-program-types"),A(12,"p",8)(13,"a",9),pe(14,"span",10),K(15," Online Programs "),I()(),pe(16,"hr")(17,"app-colleges"),I()(),A(18,"div",11),oe(19,Nk,5,0,"div",12),pe(20,"app-search-results"),I()()()),2&n&&(T(4),B("ngClass",r.isFilterVisible?"d-none":""),T(4),B("ngClass",r.isFilterVisible?"d-block":"d-none"),T(11),B("ngIf",r.isLoading))},dependencies:[Si,Dr,WP,tO,lk,Rk]}),e})();const Fk=[{path:"",component:Zt},{path:"college/:selectedCollege",component:Zt},{path:"college/:selectedCollege/:selectedProgramType",component:Zt},{path:"college/:selectedCollege/search/:search",component:Zt},{path:"college/:selectedCollege/:selectedProgramType/search/:search",component:Zt},{path:"search/:search",component:Zt},{path:":selectedProgramType",component:Zt},{path:":selectedProgramType/college/:selectedCollege/search/:search",component:Zt},{path:":selectedProgramType/college/:selectedCollege",component:Zt},{path:":selectedProgramType/search/:search",component:Zt}];let Pk=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=ht({imports:[dC.forRoot(Fk),dC]}),e})(),Ok=(()=>{class e{constructor(n){this.router=n}ngOnInit(){this.router.events.subscribe(n=>{if(n instanceof Vi&&n.url&&n.url.match(/^\/#\!/)){const r=n.url.replace("/#!/","").split("/");r.map((i,s)=>{r[s]=decodeURIComponent(i)});const o=r.filter(i=>""!==i);this.router.navigate([...o],{queryParamsHandling:"preserve"})}})}}return e.\u0275fac=function(n){return new(n||e)(v(ve))},e.\u0275cmp=Pt({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(n,r){1&n&&pe(0,"app-home")},dependencies:[Zt]}),e})(),kk=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Et({type:e,bootstrap:[Ok]}),e.\u0275inj=ht({imports:[Pk,HR,dN,XO]}),e})();(function fx(){Lv=!1}
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
       */)(),BR().bootstrapModule(kk).catch(e=>console.error(e))}},le=>{le(le.s=659)}]);