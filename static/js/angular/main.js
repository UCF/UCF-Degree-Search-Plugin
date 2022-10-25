"use strict";(self.webpackChunkDegree_Search=self.webpackChunkDegree_Search||[]).push([[179],{316:()=>{function ne(e){return"function"==typeof e}function vo(e){const n=e(r=>{Error.call(r),r.stack=(new Error).stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}const Vi=vo(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:\n${n.map((r,o)=>`${o+1}) ${r.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=n});function Cr(e,t){if(e){const n=e.indexOf(t);0<=n&&e.splice(n,1)}}class at{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;const{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(const i of n)i.remove(this);else n.remove(this);const{initialTeardown:r}=this;if(ne(r))try{r()}catch(i){t=i instanceof Vi?i.errors:[i]}const{_finalizers:o}=this;if(o){this._finalizers=null;for(const i of o)try{Rf(i)}catch(s){t=t??[],s instanceof Vi?t=[...t,...s.errors]:t.push(s)}}if(t)throw new Vi(t)}}add(t){var n;if(t&&t!==this)if(this.closed)Rf(t);else{if(t instanceof at){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(t)}}_hasParent(t){const{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){const{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){const{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&Cr(n,t)}remove(t){const{_finalizers:n}=this;n&&Cr(n,t),t instanceof at&&t._removeParent(this)}}at.EMPTY=(()=>{const e=new at;return e.closed=!0,e})();const xf=at.EMPTY;function Nf(e){return e instanceof at||e&&"closed"in e&&ne(e.remove)&&ne(e.add)&&ne(e.unsubscribe)}function Rf(e){ne(e)?e():e.unsubscribe()}const Kn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},$i={setTimeout(e,t,...n){const{delegate:r}=$i;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){const{delegate:t}=$i;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function Ff(e){$i.setTimeout(()=>{const{onUnhandledError:t}=Kn;if(!t)throw e;t(e)})}function Of(){}const pw=Xa("C",void 0,void 0);function Xa(e,t,n){return{kind:e,value:t,error:n}}let Zn=null;function ji(e){if(Kn.useDeprecatedSynchronousErrorHandling){const t=!Zn;if(t&&(Zn={errorThrown:!1,error:null}),e(),t){const{errorThrown:n,error:r}=Zn;if(Zn=null,n)throw r}}else e()}class el extends at{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,Nf(t)&&t.add(this)):this.destination=Cw}static create(t,n,r){return new _o(t,n,r)}next(t){this.isStopped?nl(function mw(e){return Xa("N",e,void 0)}(t),this):this._next(t)}error(t){this.isStopped?nl(function gw(e){return Xa("E",void 0,e)}(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?nl(pw,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const vw=Function.prototype.bind;function tl(e,t){return vw.call(e,t)}class _w{constructor(t){this.partialObserver=t}next(t){const{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){Bi(r)}}error(t){const{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){Bi(r)}else Bi(t)}complete(){const{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){Bi(n)}}}class _o extends el{constructor(t,n,r){let o;if(super(),ne(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&Kn.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&tl(t.next,i),error:t.error&&tl(t.error,i),complete:t.complete&&tl(t.complete,i)}):o=t}this.destination=new _w(o)}}function Bi(e){Kn.useDeprecatedSynchronousErrorHandling?function yw(e){Kn.useDeprecatedSynchronousErrorHandling&&Zn&&(Zn.errorThrown=!0,Zn.error=e)}(e):Ff(e)}function nl(e,t){const{onStoppedNotification:n}=Kn;n&&$i.setTimeout(()=>n(e,t))}const Cw={closed:!0,next:Of,error:function Dw(e){throw e},complete:Of},rl="function"==typeof Symbol&&Symbol.observable||"@@observable";function Tn(e){return e}function Pf(e){return 0===e.length?Tn:1===e.length?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}let me=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){const r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){const i=function bw(e){return e&&e instanceof el||function Ew(e){return e&&ne(e.next)&&ne(e.error)&&ne(e.complete)}(e)&&Nf(e)}(n)?n:new _o(n,r,o);return ji(()=>{const{operator:s,source:a}=this;i.add(s?s.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return new(r=kf(r))((o,i)=>{const s=new _o({next:a=>{try{n(a)}catch(l){i(l),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return null===(r=this.source)||void 0===r?void 0:r.subscribe(n)}[rl](){return this}pipe(...n){return Pf(n)(this)}toPromise(n){return new(n=kf(n))((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return e.create=t=>new e(t),e})();function kf(e){var t;return null!==(t=e??Kn.Promise)&&void 0!==t?t:Promise}const Sw=vo(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});let Ve=(()=>{class e extends me{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){const r=new Lf(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new Sw}next(n){ji(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const r of this.currentObservers)r.next(n)}})}error(n){ji(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;const{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){ji(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return(null===(n=this.observers)||void 0===n?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){const{hasError:r,isStopped:o,observers:i}=this;return r||o?xf:(this.currentObservers=null,i.push(n),new at(()=>{this.currentObservers=null,Cr(i,n)}))}_checkFinalizedStatuses(n){const{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){const n=new me;return n.source=this,n}}return e.create=(t,n)=>new Lf(t,n),e})();class Lf extends Ve{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.next)||void 0===r||r.call(n,t)}error(t){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.error)||void 0===r||r.call(n,t)}complete(){var t,n;null===(n=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===n||n.call(t)}_subscribe(t){var n,r;return null!==(r=null===(n=this.source)||void 0===n?void 0:n.subscribe(t))&&void 0!==r?r:xf}}function Vf(e){return ne(e?.lift)}function De(e){return t=>{if(Vf(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function ye(e,t,n,r,o){return new Mw(e,t,n,r,o)}class Mw extends el{constructor(t,n,r,o,i,s){super(t),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(l){t.error(l)}}:super._next,this._error=o?function(a){try{o(a)}catch(l){t.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){t.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:n}=this;super.unsubscribe(),!n&&(null===(t=this.onFinalize)||void 0===t||t.call(this))}}}function U(e,t){return De((n,r)=>{let o=0;n.subscribe(ye(r,i=>{r.next(e.call(t,i,o++))}))})}function Qn(e){return this instanceof Qn?(this.v=e,this):new Qn(e)}function Tw(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,r=n.apply(e,t||[]),i=[];return o={},s("next"),s("throw"),s("return"),o[Symbol.asyncIterator]=function(){return this},o;function s(f){r[f]&&(o[f]=function(h){return new Promise(function(p,g){i.push([f,h,p,g])>1||a(f,h)})})}function a(f,h){try{!function l(f){f.value instanceof Qn?Promise.resolve(f.value.v).then(u,c):d(i[0][2],f)}(r[f](h))}catch(p){d(i[0][3],p)}}function u(f){a("next",f)}function c(f){a("throw",f)}function d(f,h){f(h),i.shift(),i.length&&a(i[0][0],i[0][1])}}function xw(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,t=e[Symbol.asyncIterator];return t?t.call(e):(e=function Bf(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(e),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(a,l){!function o(i,s,a,l){Promise.resolve(l).then(function(u){i({value:u,done:a})},s)}(a,l,(s=e[i](s)).done,s.value)})}}}const Hf=e=>e&&"number"==typeof e.length&&"function"!=typeof e;function Uf(e){return ne(e?.then)}function Gf(e){return ne(e[rl])}function zf(e){return Symbol.asyncIterator&&ne(e?.[Symbol.asyncIterator])}function Wf(e){return new TypeError(`You provided ${null!==e&&"object"==typeof e?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}const qf=function Rw(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}();function Kf(e){return ne(e?.[qf])}function Zf(e){return Tw(this,arguments,function*(){const n=e.getReader();try{for(;;){const{value:r,done:o}=yield Qn(n.read());if(o)return yield Qn(void 0);yield yield Qn(r)}}finally{n.releaseLock()}})}function Qf(e){return ne(e?.getReader)}function xt(e){if(e instanceof me)return e;if(null!=e){if(Gf(e))return function Fw(e){return new me(t=>{const n=e[rl]();if(ne(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(e);if(Hf(e))return function Ow(e){return new me(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}(e);if(Uf(e))return function Pw(e){return new me(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,Ff)})}(e);if(zf(e))return Yf(e);if(Kf(e))return function kw(e){return new me(t=>{for(const n of e)if(t.next(n),t.closed)return;t.complete()})}(e);if(Qf(e))return function Lw(e){return Yf(Zf(e))}(e)}throw Wf(e)}function Yf(e){return new me(t=>{(function Vw(e,t){var n,r,o,i;return function Iw(e,t,n,r){return new(n||(n=Promise))(function(i,s){function a(c){try{u(r.next(c))}catch(d){s(d)}}function l(c){try{u(r.throw(c))}catch(d){s(d)}}function u(c){c.done?i(c.value):function o(i){return i instanceof n?i:new n(function(s){s(i)})}(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}(this,void 0,void 0,function*(){try{for(n=xw(e);!(r=yield n.next()).done;)if(t.next(r.value),t.closed)return}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}t.complete()})})(e,t).catch(n=>t.error(n))})}function sn(e,t,n,r=0,o=!1){const i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function Oe(e,t,n=1/0){return ne(t)?Oe((r,o)=>U((i,s)=>t(r,i,o,s))(xt(e(r,o))),n):("number"==typeof t&&(n=t),De((r,o)=>function $w(e,t,n,r,o,i,s,a){const l=[];let u=0,c=0,d=!1;const f=()=>{d&&!l.length&&!u&&t.complete()},h=g=>u<r?p(g):l.push(g),p=g=>{i&&t.next(g),u++;let v=!1;xt(n(g,c++)).subscribe(ye(t,y=>{o?.(y),i?h(y):t.next(y)},()=>{v=!0},void 0,()=>{if(v)try{for(u--;l.length&&u<r;){const y=l.shift();s?sn(t,s,()=>p(y)):p(y)}f()}catch(y){t.error(y)}}))};return e.subscribe(ye(t,h,()=>{d=!0,f()})),()=>{a?.()}}(r,o,e,n)))}function wr(e=1/0){return Oe(Tn,e)}const an=new me(e=>e.complete());function il(e){return e[e.length-1]}function Jf(e){return ne(il(e))?e.pop():void 0}function Do(e){return function Bw(e){return e&&ne(e.schedule)}(il(e))?e.pop():void 0}function Xf(e,t=0){return De((n,r)=>{n.subscribe(ye(r,o=>sn(r,e,()=>r.next(o),t),()=>sn(r,e,()=>r.complete(),t),o=>sn(r,e,()=>r.error(o),t)))})}function eh(e,t=0){return De((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function th(e,t){if(!e)throw new Error("Iterable cannot be null");return new me(n=>{sn(n,t,()=>{const r=e[Symbol.asyncIterator]();sn(n,t,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function Ce(e,t){return t?function Kw(e,t){if(null!=e){if(Gf(e))return function Uw(e,t){return xt(e).pipe(eh(t),Xf(t))}(e,t);if(Hf(e))return function zw(e,t){return new me(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}(e,t);if(Uf(e))return function Gw(e,t){return xt(e).pipe(eh(t),Xf(t))}(e,t);if(zf(e))return th(e,t);if(Kf(e))return function Ww(e,t){return new me(n=>{let r;return sn(n,t,()=>{r=e[qf](),sn(n,t,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){return void n.error(s)}i?n.complete():n.next(o)},0,!0)}),()=>ne(r?.return)&&r.return()})}(e,t);if(Qf(e))return function qw(e,t){return th(Zf(e),t)}(e,t)}throw Wf(e)}(e,t):xt(e)}function sl(e,t,...n){if(!0===t)return void e();if(!1===t)return;const r=new _o({next:()=>{r.unsubscribe(),e()}});return t(...n).subscribe(r)}
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
       */function J(e){for(let t in e)if(e[t]===J)return t;throw Error("Could not find renamed property on target object.")}function al(e,t){for(const n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function X(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(X).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function ll(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Yw=J({__forward_ref__:J});function re(e){return e.__forward_ref__=re,e.toString=function(){return X(this())},e}function F(e){return ul(e)?e():e}function ul(e){return"function"==typeof e&&e.hasOwnProperty(Yw)&&e.__forward_ref__===re}
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
class C extends Error{constructor(t,n){super(function Hi(e,t){return`NG0${Math.abs(e)}${t?": "+t.trim():""}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t,n)),this.code=t}}function k(e){return"string"==typeof e?e:null==e?"":String(e)}function Ui(e,t){throw new C(-201,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ut(e,t){null==e&&function Z(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}(t,e,null,"!=")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function x(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function ct(e){return{providers:e.providers||[],imports:e.imports||[]}}function Gi(e){return nh(e,zi)||nh(e,oh)}function nh(e,t){return e.hasOwnProperty(t)?e[t]:null}function rh(e){return e&&(e.hasOwnProperty(cl)||e.hasOwnProperty(sE))?e[cl]:null}const zi=J({\u0275prov:J}),cl=J({\u0275inj:J}),oh=J({ngInjectableDef:J}),sE=J({ngInjectorDef:J});
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
       */let dl;function Dt(e){const t=dl;return dl=e,t}function ih(e,t,n){const r=Gi(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&N.Optional?null:void 0!==t?t:void Ui(X(e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function xn(e){return{toString:e}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Nt=(()=>((Nt=Nt||{})[Nt.OnPush=0]="OnPush",Nt[Nt.Default=1]="Default",Nt))(),Wt=(()=>{return(e=Wt||(Wt={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",Wt;var e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ee=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),Er={},K=[],Wi=J({\u0275cmp:J}),fl=J({\u0275dir:J}),hl=J({\u0275pipe:J}),sh=J({\u0275mod:J}),un=J({\u0275fac:J}),Co=J({__NG_ELEMENT_ID__:J});
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
let lE=0;function Nn(e){return xn(()=>{const n=!0===e.standalone,r={},o={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===Nt.OnPush,directiveDefs:null,pipeDefs:null,standalone:n,dependencies:n&&e.dependencies||null,getStandaloneInjector:null,selectors:e.selectors||K,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||Wt.Emulated,id:"c"+lE++,styles:e.styles||K,_:null,setInput:null,schemas:e.schemas||null,tView:null},i=e.dependencies,s=e.features;return o.inputs=uh(e.inputs,r),o.outputs=uh(e.outputs),s&&s.forEach(a=>a(o)),o.directiveDefs=i?()=>("function"==typeof i?i():i).map(ah).filter(lh):null,o.pipeDefs=i?()=>("function"==typeof i?i():i).map(Ke).filter(lh):null,o})}function ah(e){return Q(e)||qe(e)}function lh(e){return null!==e}function Ct(e){return xn(()=>({type:e.type,bootstrap:e.bootstrap||K,declarations:e.declarations||K,imports:e.imports||K,exports:e.exports||K,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function uh(e,t){if(null==e)return Er;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const O=Nn;function Q(e){return e[Wi]||null}function qe(e){return e[fl]||null}function Ke(e){return e[hl]||null}function dt(e,t){const n=e[sh]||null;if(!n&&!0===t)throw new Error(`Type ${X(e)} does not have '\u0275mod' property.`);return n}
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
function ot(e){return Array.isArray(e)&&"object"==typeof e[1]}function Ft(e){return Array.isArray(e)&&!0===e[1]}function ml(e){return 0!=(8&e.flags)}function Qi(e){return 2==(2&e.flags)}function Yi(e){return 1==(1&e.flags)}function Ot(e){return null!==e.template}function pE(e){return 0!=(256&e[2])}
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
function tr(e,t){return e.hasOwnProperty(un)?e[un]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class yE{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Et(){return fh}function fh(e){return e.type.prototype.ngOnChanges&&(e.setInput=_E),vE}function vE(){const e=ph(this),t=e?.current;if(t){const n=e.previous;if(n===Er)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function _E(e,t,n,r){const o=ph(e)||function DE(e,t){return e[hh]=t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,{previous:Er,current:null}),i=o.current||(o.current={}),s=o.previous,a=this.declaredInputs[n],l=s[a];i[a]=new yE(l&&l.currentValue,t,s===Er),e[r]=t}Et.ngInherit=!0;const hh="__ngSimpleChanges__";function ph(e){return e[hh]||null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function we(e){for(;Array.isArray(e);)e=e[0];return e}function Ji(e,t){return we(t[e])}function St(e,t){return we(t[e.index])}function Cl(e,t){return e.data[t]}function ht(e,t){const n=t[e];return ot(n)?n:n[0]}function Xi(e){return 64==(64&e[2])}function Rn(e,t){return null==t?null:e[t]}function gh(e){e[18]=0}function wl(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const P={lFrame:Sh(null),bindingsEnabled:!0};function yh(){return P.bindingsEnabled}function _(){return P.lFrame.lView}function W(){return P.lFrame.tView}function Ie(){let e=vh();for(;null!==e&&64===e.type;)e=e.parent;return e}function vh(){return P.lFrame.currentTNode}function qt(e,t){const n=P.lFrame;n.currentTNode=e,n.isParent=t}function El(){return P.lFrame.isParent}function bl(){P.lFrame.isParent=!1}function Tr(){return P.lFrame.bindingIndex++}function dn(e){const t=P.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function LE(e,t){const n=P.lFrame;n.bindingIndex=n.bindingRootIndex=e,Sl(t)}function Sl(e){P.lFrame.currentDirectiveIndex=e}function Il(e){P.lFrame.currentQueryIndex=e}function $E(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function Eh(e,t,n){if(n&N.SkipSelf){let o=t,i=e;for(;!(o=o.parent,null!==o||n&N.Host||(o=$E(i),null===o||(i=i[15],10&o.type))););if(null===o)return!1;t=o,e=i}const r=P.lFrame=bh();return r.currentTNode=t,r.lView=e,!0}function Al(e){const t=bh(),n=e[1];P.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function bh(){const e=P.lFrame,t=null===e?null:e.child;return null===t?Sh(e):t}function Sh(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function Mh(){const e=P.lFrame;return P.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const Ih=Mh;function Tl(){const e=Mh();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Qe(){return P.lFrame.selectedIndex}function Fn(e){P.lFrame.selectedIndex=e}function he(){const e=P.lFrame;return Cl(e.tView,e.selectedIndex)}function es(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:u,ngOnDestroy:c}=i;s&&(e.contentHooks||(e.contentHooks=[])).push(-n,s),a&&((e.contentHooks||(e.contentHooks=[])).push(n,a),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,a)),l&&(e.viewHooks||(e.viewHooks=[])).push(-n,l),u&&((e.viewHooks||(e.viewHooks=[])).push(n,u),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,u)),null!=c&&(e.destroyHooks||(e.destroyHooks=[])).push(n,c)}}function ts(e,t,n){Ah(e,t,3,n)}function ns(e,t,n,r){(3&e[2])===n&&Ah(e,t,n,r)}function xl(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function Ah(e,t,n,r){const i=r??-1,s=t.length-1;let a=0;for(let l=void 0!==r?65535&e[18]:0;l<s;l++)if("number"==typeof t[l+1]){if(a=t[l],null!=r&&a>=r)break}else t[l]<0&&(e[18]+=65536),(a<i||-1==i)&&(KE(e,n,t,l),e[18]=(4294901760&e[18])+l+2),l++}function KE(e,t,n,r){const o=n[r]<0,i=n[r+1],a=e[o?-n[r]:n[r]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{i.call(a)}finally{}}}else try{i.call(a)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Io{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function rs(e,t,n){let r=0;for(;r<n.length;){const o=n[r];if("number"==typeof o){if(0!==o)break;r++;const i=n[r++],s=n[r++],a=n[r++];e.setAttribute(t,s,a,i)}else{const i=o,s=n[++r];xh(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function Th(e){return 3===e||4===e||6===e}function xh(e){return 64===e.charCodeAt(0)}function os(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||Nh(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function Nh(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const a=e[i++];if("number"==typeof a){if(a===t){s=-1;break}if(a>t){s=i-1;break}}}for(;i<e.length;){const a=e[i];if("number"==typeof a)break;if(a===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Rh(e){return-1!==e}function xr(e){return 32767&e}function Nr(e,t){let n=function XE(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Rl=!0;function is(e){const t=Rl;return Rl=e,t}let eb=0;const Kt={};function To(e,t){const n=Ol(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,Fl(r.data,e),Fl(t,null),Fl(r.blueprint,null));const o=ss(e,t),i=e.injectorIndex;if(Rh(o)){const s=xr(o),a=Nr(o,t),l=a[1].data;for(let u=0;u<8;u++)t[i+u]=a[s+u]|l[s+u]}return t[i+8]=o,i}function Fl(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Ol(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function ss(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){if(r=Bh(o),null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function as(e,t,n){!function tb(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Co)&&(r=n[Co]),null==r&&(r=n[Co]=eb++);const o=255&r;t.data[e+(o>>5)]|=1<<o}(e,t,n)}function Ph(e,t,n){if(n&N.Optional||void 0!==e)return e;Ui()}function kh(e,t,n,r){if(n&N.Optional&&void 0===r&&(r=null),0==(n&(N.Self|N.Host))){const o=e[9],i=Dt(void 0);try{return o?o.get(t,r,n&N.Optional):ih(t,r,n&N.Optional)}finally{Dt(i)}}return Ph(r,0,n)}function Lh(e,t,n,r=N.Default,o){if(null!==e){if(1024&t[2]){const s=function sb(e,t,n,r,o){let i=e,s=t;for(;null!==i&&null!==s&&1024&s[2]&&!(256&s[2]);){const a=Vh(i,s,n,r|N.Self,Kt);if(a!==Kt)return a;let l=i.parent;if(!l){const u=s[21];if(u){const c=u.get(n,Kt,r);if(c!==Kt)return c}l=Bh(s),s=s[15]}i=l}return o}(e,t,n,r,Kt);if(s!==Kt)return s}const i=Vh(e,t,n,r,Kt);if(i!==Kt)return i}return kh(t,n,r,o)}function Vh(e,t,n,r,o){const i=function ob(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(Co)?e[Co]:void 0;return"number"==typeof t?t>=0?255&t:ib:t}(n);if("function"==typeof i){if(!Eh(t,e,r))return r&N.Host?Ph(o,0,r):kh(t,n,r,o);try{const s=i(r);if(null!=s||r&N.Optional)return s;Ui()}finally{Ih()}}else if("number"==typeof i){let s=null,a=Ol(e,t),l=-1,u=r&N.Host?t[16][6]:null;for((-1===a||r&N.SkipSelf)&&(l=-1===a?ss(e,t):t[a+8],-1!==l&&jh(r,!1)?(s=t[1],a=xr(l),t=Nr(l,t)):a=-1);-1!==a;){const c=t[1];if($h(i,a,c.data)){const d=rb(a,t,n,s,r,u);if(d!==Kt)return d}l=t[a+8],-1!==l&&jh(r,t[1].data[a+8]===u)&&$h(i,a,t)?(s=c,a=xr(l),t=Nr(l,t)):a=-1}}return o}function rb(e,t,n,r,o,i){const s=t[1],a=s.data[e+8],c=function ls(e,t,n,r,o){const i=e.providerIndexes,s=t.data,a=1048575&i,l=e.directiveStart,c=i>>20,f=o?a+c:e.directiveEnd;for(let h=r?a:a+c;h<f;h++){const p=s[h];if(h<l&&n===p||h>=l&&p.type===n)return h}if(o){const h=s[l];if(h&&Ot(h)&&h.type===n)return l}return null}(a,s,n,null==r?Qi(a)&&Rl:r!=s&&0!=(3&a.type),o&N.Host&&i===a);return null!==c?xo(t,s,c,a):Kt}function xo(e,t,n,r){let o=e[n];const i=t.data;if(function ZE(e){return e instanceof Io}(o)){const s=o;s.resolving&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Jw(e,t){const n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new C(-200,`Circular dependency in DI detected for ${e}${n}`)}(function q(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():k(e)}(i[n]));const a=is(s.canSeeViewProviders);s.resolving=!0;const l=s.injectImpl?Dt(s.injectImpl):null;Eh(e,r,N.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function qE(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const s=fh(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==l&&Dt(l),is(a),s.resolving=!1,Ih()}}return o}function $h(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function jh(e,t){return!(e&N.Self||e&N.Host&&t)}class Rr{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return Lh(this._tNode,this._lView,t,r,n)}}function ib(){return new Rr(Ie(),_())}function Pl(e){return ul(e)?()=>{const t=Pl(F(e));return t&&t()}:tr(e)}function Bh(e){const t=e[1],n=t.type;return 2===n?t.declTNode:1===n?e[6]:null}
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
const Or="__parameters__";function kr(e,t,n){return xn(()=>{const r=function kl(e){return function(...n){if(e){const r=e(...n);for(const o in r)this[o]=r[o]}}}(t);function o(...i){if(this instanceof o)return r.apply(this,i),this;const s=new o(...i);return a.annotation=s,a;function a(l,u,c){const d=l.hasOwnProperty(Or)?l[Or]:Object.defineProperty(l,Or,{value:[]})[Or];for(;d.length<=c;)d.push(null);return(d[c]=d[c]||[]).push(s),l}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}
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
       */function fn(e,t){e.forEach(n=>Array.isArray(n)?fn(n,t):t(n))}function Uh(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function us(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function gt(e,t,n){let r=Lr(e,t);return r>=0?e[1|r]=n:(r=~r,function cb(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(1===o)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function Vl(e,t){const n=Lr(e,t);if(n>=0)return e[1|n]}function Lr(e,t){return function Wh(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}
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
const Po={},jl="__NG_DI_FLAG__",ds="ngTempTokenPath",vb=/\n/gm,qh="__source";let ko;function Vr(e){const t=ko;return ko=e,t}function Db(e,t=N.Default){if(void 0===ko)throw new C(-203,!1);return null===ko?ih(e,void 0,t):ko.get(e,t&N.Optional?null:void 0,t)}function M(e,t=N.Default){return(function aE(){return dl}()||Db)(F(e),t)}function ve(e,t=N.Default){return"number"!=typeof t&&(t=0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)),M(e,t)}function Bl(e){const t=[];for(let n=0;n<e.length;n++){const r=F(e[n]);if(Array.isArray(r)){if(0===r.length)throw new C(900,!1);let o,i=N.Default;for(let s=0;s<r.length;s++){const a=r[s],l=Cb(a);"number"==typeof l?-1===l?o=a.token:i|=l:o=a}t.push(M(o,i))}else t.push(M(r))}return t}function Lo(e,t){return e[jl]=t,e.prototype[jl]=t,e}function Cb(e){return e[jl]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Vo=Lo(kr("Optional"),8),$o=Lo(kr("SkipSelf"),4);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ul;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class sp{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}function Pn(e){return e instanceof sp?e.changingThisBreaksApplicationSecurity:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const zb=/^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var Ee=(()=>((Ee=Ee||{})[Ee.NONE=0]="NONE",Ee[Ee.HTML=1]="HTML",Ee[Ee.STYLE=2]="STYLE",Ee[Ee.SCRIPT=3]="SCRIPT",Ee[Ee.URL=4]="URL",Ee[Ee.RESOURCE_URL=5]="RESOURCE_URL",Ee))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Go(e){const t=function zo(){const e=_();return e&&e[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();return t?t.sanitize(Ee.URL,e)||"":function Ho(e,t){const n=function Bb(e){return e instanceof sp&&e.getTypeName()||null}(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}(e,"URL")?Pn(e):function Wl(e){return(e=String(e)).match(zb)?e:"unsafe:"+e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(k(e))}const Ql=new I("ENVIRONMENT_INITIALIZER"),pp=new I("INJECTOR",-1),gp=new I("INJECTOR_DEF_TYPES");
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
class mp{get(t,n=Po){if(n===Po){const r=new Error(`NullInjectorError: No provider for ${X(t)}!`);throw r.name="NullInjectorError",r}return n}}
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
       */function s0(...e){return{\u0275providers:yp(0,e)}}function yp(e,...t){const n=[],r=new Set;let o;return fn(t,i=>{const s=i;Yl(s,n,[],r)&&(o||(o=[]),o.push(s))}),void 0!==o&&vp(o,n),n}function vp(e,t){for(let n=0;n<e.length;n++){const{providers:o}=e[n];fn(o,i=>{t.push(i)})}}function Yl(e,t,n,r){if(!(e=F(e)))return!1;let o=null,i=rh(e);const s=!i&&Q(e);if(i||s){if(s&&!s.standalone)return!1;o=e}else{const l=e.ngModule;if(i=rh(l),!i)return!1;o=l}const a=r.has(o);if(s){if(a)return!1;if(r.add(o),s.dependencies){const l="function"==typeof s.dependencies?s.dependencies():s.dependencies;for(const u of l)Yl(u,t,n,r)}}else{if(!i)return!1;{if(null!=i.imports&&!a){let u;r.add(o);try{fn(i.imports,c=>{Yl(c,t,n,r)&&(u||(u=[]),u.push(c))})}finally{}void 0!==u&&vp(u,t)}if(!a){const u=tr(o)||(()=>new o);t.push({provide:o,useFactory:u,deps:K},{provide:gp,useValue:o,multi:!0},{provide:Ql,useValue:()=>M(o),multi:!0})}const l=i.providers;null==l||a||fn(l,c=>{t.push(c)})}}return o!==e&&void 0!==e.providers}const a0=J({provide:String,useValue:J});function Jl(e){return null!==e&&"object"==typeof e&&a0 in e}function nr(e){return"function"==typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Xl=new I("Set Injector scope."),ys={},u0={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let eu;function vs(){return void 0===eu&&(eu=new mp),eu}class kn{}class Cp extends kn{constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,nu(t,s=>this.processProvider(s)),this.records.set(pp,Br(void 0,this)),o.has("environment")&&this.records.set(kn,Br(void 0,this));const i=this.records.get(Xl);null!=i&&"string"==typeof i.value&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(gp.multi,K,N.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const t of this._ngOnDestroyHooks)t.ngOnDestroy();for(const t of this._onDestroyHooks)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(t){this._onDestroyHooks.push(t)}runInContext(t){this.assertNotDestroyed();const n=Vr(this),r=Dt(void 0);try{return t()}finally{Vr(n),Dt(r)}}get(t,n=Po,r=N.Default){this.assertNotDestroyed();const o=Vr(this),i=Dt(void 0);try{if(!(r&N.SkipSelf)){let a=this.records.get(t);if(void 0===a){const l=function p0(e){return"function"==typeof e||"object"==typeof e&&e instanceof I}(t)&&Gi(t);a=l&&this.injectableDefInScope(l)?Br(tu(t),ys):null,this.records.set(t,a)}if(null!=a)return this.hydrate(t,a)}return(r&N.Self?vs():this.parent).get(t,n=r&N.Optional&&n===Po?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[ds]=s[ds]||[]).unshift(X(t)),o)throw s;return function wb(e,t,n,r){const o=e[ds];throw t[qh]&&o.unshift(t[qh]),e.message=function Eb(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.slice(2):e;let o=X(t);if(Array.isArray(t))o=t.map(X).join(" -> ");else if("object"==typeof t){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let a=t[s];i.push(s+":"+("string"==typeof a?JSON.stringify(a):X(a)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(vb,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e[ds]=null,e}(s,t,"R3InjectorError",this.source)}throw s}finally{Dt(i),Vr(o)}}resolveInjectorInitializers(){const t=Vr(this),n=Dt(void 0);try{const r=this.get(Ql.multi,K,N.Self);for(const o of r)o()}finally{Vr(t),Dt(n)}}toString(){const t=[],n=this.records;for(const r of n.keys())t.push(X(r));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new C(205,!1)}processProvider(t){let n=nr(t=F(t))?t:F(t&&t.provide);const r=function d0(e){return Jl(e)?Br(void 0,e.useValue):Br(wp(e),ys)}(t);if(nr(t)||!0!==t.multi)this.records.get(n);else{let o=this.records.get(n);o||(o=Br(void 0,ys,!0),o.factory=()=>Bl(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n){return n.value===ys&&(n.value=u0,n.value=n.factory()),"object"==typeof n.value&&n.value&&function h0(e){return null!==e&&"object"==typeof e&&"function"==typeof e.ngOnDestroy}(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}injectableDefInScope(t){if(!t.providedIn)return!1;const n=F(t.providedIn);return"string"==typeof n?"any"===n||this.scopes.has(n):this.injectorDefTypes.has(n)}}function tu(e){const t=Gi(e),n=null!==t?t.factory:tr(e);if(null!==n)return n;if(e instanceof I)throw new C(204,!1);if(e instanceof Function)return function c0(e){const t=e.length;if(t>0)throw function Oo(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}(t,"?"),new C(204,!1);const n=function oE(e){const t=e&&(e[zi]||e[oh]);if(t){const n=function iE(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new C(204,!1)}function wp(e,t,n){let r;if(nr(e)){const o=F(e);return tr(o)||tu(o)}if(Jl(e))r=()=>F(e.useValue);else if(function Dp(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...Bl(e.deps||[]));else if(function _p(e){return!(!e||!e.useExisting)}(e))r=()=>M(F(e.useExisting));else{const o=F(e&&(e.useClass||e.provide));if(!function f0(e){return!!e.deps}(e))return tr(o)||tu(o);r=()=>new o(...Bl(e.deps))}return r}function Br(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function g0(e){return!!e.\u0275providers}function nu(e,t){for(const n of e)Array.isArray(n)?nu(n,t):g0(n)?nu(n.\u0275providers,t):t(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ep{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class v0{resolveComponentFactory(t){throw function y0(e){const t=Error(`No component factory found for ${X(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let Wo=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.NULL=new v0,e})();function _0(){return Hr(Ie(),_())}function Hr(e,t){return new mt(St(e,t))}let mt=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=_0,e})();class Sp{}let pn=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function C0(){const e=_(),n=ht(Ie().index,e);return(ot(n)?n:e)[B]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),e})(),w0=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=x({token:e,providedIn:"root",factory:()=>null}),e})();class qo{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const E0=new qo("14.2.3"),ru={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function lu(e){return e.ngOriginalError}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ur{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&lu(t);for(;n&&lu(n);)n=lu(n);return n||null}}
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
const uu=new Map;let P0=0;const du="__ngContext__";function He(e,t){ot(t)?(e[du]=t[20],function L0(e){uu.set(e[20],e)}(t)):e[du]=t}function gn(e){return e instanceof Function?e():e}
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
var it=(()=>((it=it||{})[it.Important=1]="Important",it[it.DashCase=2]="DashCase",it))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function hu(e,t){return undefined(e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Zo(e){const t=e[3];return Ft(t)?t[3]:t}function pu(e){return $p(e[13])}function gu(e){return $p(e[4])}function $p(e){for(;null!==e&&!Ft(e);)e=e[4];return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zr(e,t,n,r,o){if(null!=r){let i,s=!1;Ft(r)?i=r:ot(r)&&(s=!0,r=r[0]);const a=we(r);0===e&&null!==n?null==o?zp(t,n,a):rr(t,n,a,o||null,!0):1===e&&null!==n?rr(t,n,a,o||null,!0):2===e?function Jp(e,t,n){const r=_s(e,t);r&&function cS(e,t,n,r){e.removeChild(t,n,r)}(e,r,t,n)}(t,a,s):3===e&&t.destroyNode(a),null!=i&&function hS(e,t,n,r,o){const i=n[7];i!==we(n)&&zr(t,e,r,i,o);for(let a=10;a<n.length;a++){const l=n[a];Qo(l[1],l,e,t,r,i)}}(t,e,i,n,o)}}function yu(e,t,n){return e.createElement(t,n)}function Bp(e,t){const n=e[9],r=n.indexOf(t),o=t[3];512&t[2]&&(t[2]&=-513,wl(o,-1)),n.splice(r,1)}function vu(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&Bp(o,r),t>0&&(e[n-1][4]=r[4]);const i=us(e,10+t);!function nS(e,t){Qo(e,t,t[B],2,null,null),t[0]=null,t[6]=null}(r[1],r);const s=i[19];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-65}return r}function Hp(e,t){if(!(128&t[2])){const n=t[B];n.destroyNode&&Qo(e,t,n,3,null,null),function iS(e){let t=e[13];if(!t)return _u(e[1],e);for(;t;){let n=null;if(ot(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)ot(t)&&_u(t[1],t),t=t[3];null===t&&(t=e),ot(t)&&_u(t[1],t),n=t&&t[4]}t=n}}(t)}}function _u(e,t){if(!(128&t[2])){t[2]&=-65,t[2]|=128,function uS(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const o=t[n[r]];if(!(o instanceof Io)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const a=o[i[s]],l=i[s+1];try{l.call(a)}finally{}}else try{i.call(o)}finally{}}}}(e,t),function lS(e,t){const n=e.cleanup,r=t[7];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+1],a="function"==typeof s?s(t):we(t[s]),l=r[o=n[i+2]],u=n[i+3];"boolean"==typeof u?a.removeEventListener(n[i],l,u):u>=0?r[o=u]():r[o=-u].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++)(0,r[i])();t[7]=null}}(e,t),1===t[1].type&&t[B].destroy();const n=t[17];if(null!==n&&Ft(t[3])){n!==t[3]&&Bp(n,t);const r=t[19];null!==r&&r.detachView(e)}!function V0(e){uu.delete(e[20])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)}}function Up(e,t,n){return function Gp(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const o=e.data[r.directiveStart].encapsulation;if(o===Wt.None||o===Wt.Emulated)return null}return St(r,n)}(e,t.parent,n)}function rr(e,t,n,r,o){e.insertBefore(t,n,r,o)}function zp(e,t,n){e.appendChild(t,n)}function Wp(e,t,n,r,o){null!==r?rr(e,t,n,r,o):zp(e,t,n)}function _s(e,t){return e.parentNode(t)}let Zp=function Kp(e,t,n){return 40&e.type?St(e,n):null};function Ds(e,t,n,r){const o=Up(e,r,t),i=t[B],a=function qp(e,t,n){return Zp(e,t,n)}(r.parent||t[6],r,t);if(null!=o)if(Array.isArray(n))for(let l=0;l<n.length;l++)Wp(i,o,n[l],a,!1);else Wp(i,o,n,a,!1)}function Cs(e,t){if(null!==t){const n=t.type;if(3&n)return St(t,e);if(4&n)return Cu(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return Cs(e,r);{const o=e[t.index];return Ft(o)?Cu(-1,o):we(o)}}if(32&n)return hu(t,e)()||we(e[t.index]);{const r=Yp(e,t);return null!==r?Array.isArray(r)?r[0]:Cs(Zo(e[16]),r):Cs(e,t.next)}}return null}function Yp(e,t){return null!==t?e[16][6].projection[t.projection]:null}function Cu(e,t){const n=10+e+1;if(n<t.length){const r=t[n],o=r[1].firstChild;if(null!==o)return Cs(r,o)}return t[7]}function wu(e,t,n,r,o,i,s){for(;null!=n;){const a=r[n.index],l=n.type;if(s&&0===t&&(a&&He(we(a),r),n.flags|=4),64!=(64&n.flags))if(8&l)wu(e,t,n.child,r,o,i,!1),zr(t,e,o,a,i);else if(32&l){const u=hu(n,r);let c;for(;c=u();)zr(t,e,o,c,i);zr(t,e,o,a,i)}else 16&l?Xp(e,t,r,n,o,i):zr(t,e,o,a,i);n=s?n.projectionNext:n.next}}function Qo(e,t,n,r,o,i){wu(n,r,e.firstChild,t,o,i,!1)}function Xp(e,t,n,r,o,i){const s=n[16],l=s[6].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++)zr(t,e,o,l[u],i);else wu(e,t,l,s[3],o,i,!0)}function eg(e,t,n){e.setAttribute(t,"style",n)}function Eu(e,t,n){""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function tg(e,t,n){let r=e.length;for(;;){const o=e.indexOf(t,n);if(-1===o)return o;if(0===o||e.charCodeAt(o-1)<=32){const i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ng="ng-template";function gS(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==tg(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function rg(e){return 4===e.type&&e.value!==ng}function mS(e,t,n){return t===(4!==e.type||n?e.value:ng)}function yS(e,t,n){let r=4;const o=e.attrs||[],i=function DS(e){for(let t=0;t<e.length;t++)if(Th(e[t]))return t;return e.length}(o);let s=!1;for(let a=0;a<t.length;a++){const l=t[a];if("number"!=typeof l){if(!s)if(4&r){if(r=2|1&r,""!==l&&!mS(e,l,n)||""===l&&1===t.length){if(Pt(r))return!1;s=!0}}else{const u=8&r?l:t[++a];if(8&r&&null!==e.attrs){if(!gS(e.attrs,u,n)){if(Pt(r))return!1;s=!0}continue}const d=vS(8&r?"class":l,o,rg(e),n);if(-1===d){if(Pt(r))return!1;s=!0;continue}if(""!==u){let f;f=d>i?"":o[d+1].toLowerCase();const h=8&r?f:null;if(h&&-1!==tg(h,u,0)||2&r&&u!==f){if(Pt(r))return!1;s=!0}}}}else{if(!s&&!Pt(r)&&!Pt(l))return!1;if(s&&Pt(l))continue;s=!1,r=l|1&r}}return Pt(r)||s}function Pt(e){return 0==(1&e)}function vS(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){const s=t[o];if(s===e)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let a=t[++o];for(;"string"==typeof a;)a=t[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function CS(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function og(e,t,n=!1){for(let r=0;r<t.length;r++)if(yS(e,t[r],n))return!0;return!1}function ig(e,t){return e?":not("+t.trim()+")":t}function ES(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const a=e[++n];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!Pt(s)&&(t+=ig(i,o),o=""),r=s,i=i||!Pt(r);n++}return""!==o&&(t+=ig(i,o)),t}
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
       */function ce(e){sg(W(),_(),Qe()+e,!1)}function sg(e,t,n,r){if(!r)if(3==(3&t[2])){const i=e.preOrderCheckHooks;null!==i&&ts(t,i,n)}else{const i=e.preOrderHooks;null!==i&&ns(t,i,0,n)}Fn(n)}
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
function cg(e,t=null,n=null,r){const o=dg(e,t,n,r);return o.resolveInjectorInitializers(),o}function dg(e,t=null,n=null,r,o=new Set){const i=[n||K,s0(e)];return r=r||("object"==typeof e?void 0:X(e)),new Cp(i,t||vs(),r||null,o)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}let yt=(()=>{class e{static create(n,r){if(Array.isArray(n))return cg({name:""},r,n,"");{var o;const i=null!==(o=n.name)&&void 0!==o?o:"";return cg({name:i},n.parent,n.providers,i)}}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.THROW_IF_NOT_FOUND=Po,e.NULL=new mp,e.\u0275prov=x({token:e,providedIn:"any",factory:()=>M(pp)}),e.__NG_ELEMENT_ID__=-1,e})();
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
function D(e,t=N.Default){const n=_();return null===n?M(e,t):Lh(Ie(),n,F(e),t)}function Au(){throw new Error("invalid")}
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
function Es(e,t){return e<<17|t<<2}function kt(e){return e>>17&32767}function Tu(e){return 2|e}function mn(e){return(131068&e)>>2}function xu(e,t){return-131069&e|t<<2}function Nu(e){return 1|e}function Ag(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const s=e.data[i];Il(o),s.contentQueries(2,t[i],i)}}}function Ms(e,t,n,r,o,i,s,a,l,u,c){const d=t.blueprint.slice();return d[0]=o,d[2]=76|r,(null!==c||e&&1024&e[2])&&(d[2]|=1024),gh(d),d[3]=d[15]=e,d[8]=n,d[10]=s||e&&e[10],d[B]=a||e&&e[B],d[12]=l||e&&e[12]||null,d[9]=u||e&&e[9]||null,d[6]=i,d[20]=function k0(){return P0++}(),d[21]=c,d[16]=2==t.type?e[16]:d,d}function qr(e,t,n,r,o){let i=e.data[t];if(null===i)i=function $u(e,t,n,r,o){const i=vh(),s=El(),l=e.data[t]=function iM(e,t,n,r,o,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=l),null!==i&&(s?null==i.child&&null!==l.parent&&(i.child=l):null===i.next&&(i.next=l)),l}(e,t,n,r,o),function kE(){return P.lFrame.inI18n}()&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=function Mo(){const e=P.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();i.injectorIndex=null===s?-1:s.injectorIndex}return qt(i,!0),i}function Kr(e,t,n,r){if(0===n)return-1;const o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function ju(e,t,n){Al(t);try{const r=e.viewQuery;null!==r&&Ku(1,r,n);const o=e.template;null!==o&&Tg(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Ag(e,t),e.staticViewQueries&&Ku(2,e.viewQuery,n);const i=e.components;null!==i&&function nM(e,t){for(let n=0;n<t.length;n++)CM(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,Tl()}}function Is(e,t,n,r){const o=t[2];if(128!=(128&o)){Al(t);try{gh(t),function Dh(e){return P.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&Tg(e,t,n,2,r);const s=3==(3&o);if(s){const u=e.preOrderCheckHooks;null!==u&&ts(t,u,null)}else{const u=e.preOrderHooks;null!==u&&ns(t,u,0,null),xl(t,0)}if(function _M(e){for(let t=pu(e);null!==t;t=gu(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const o=n[r],i=o[3];0==(512&o[2])&&wl(i,1),o[2]|=512}}}(t),function vM(e){for(let t=pu(e);null!==t;t=gu(t))for(let n=10;n<t.length;n++){const r=t[n],o=r[1];Xi(r)&&Is(o,r,o.template,r[8])}}(t),null!==e.contentQueries&&Ag(e,t),s){const u=e.contentCheckHooks;null!==u&&ts(t,u)}else{const u=e.contentHooks;null!==u&&ns(t,u,1),xl(t,1)}!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function eM(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)Fn(~o);else{const i=o,s=n[++r],a=n[++r];LE(s,i),a(2,t[i])}}}finally{Fn(-1)}}(e,t);const a=e.components;null!==a&&function tM(e,t){for(let n=0;n<t.length;n++)DM(e,t[n])}(t,a);const l=e.viewQuery;if(null!==l&&Ku(2,l,r),s){const u=e.viewCheckHooks;null!==u&&ts(t,u)}else{const u=e.viewHooks;null!==u&&ns(t,u,2),xl(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),t[2]&=-41,512&t[2]&&(t[2]&=-513,wl(t[3],-1))}finally{Tl()}}}function Tg(e,t,n,r,o){const i=Qe(),s=2&r;try{Fn(-1),s&&t.length>22&&sg(e,t,22,!1),n(r,o)}finally{Fn(i)}}function xg(e,t,n){if(ml(t)){const o=t.directiveEnd;for(let i=t.directiveStart;i<o;i++){const s=e.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}function Bu(e,t,n){!yh()||(function cM(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||To(n,t),He(r,t);const s=n.initialInputs;for(let a=o;a<i;a++){const l=e.data[a],u=Ot(l);u&&gM(t,n,l);const c=xo(t,e,a,n);He(c,t),null!==s&&mM(0,a-o,c,l,0,s),u&&(ht(n.index,t)[8]=c)}}(e,t,n,St(n,t)),128==(128&n.flags)&&function dM(e,t,n){const r=n.directiveStart,o=n.directiveEnd,i=n.index,s=function VE(){return P.lFrame.currentDirectiveIndex}();try{Fn(i);for(let a=r;a<o;a++){const l=e.data[a],u=t[a];Sl(a),(null!==l.hostBindings||0!==l.hostVars||null!==l.hostAttrs)&&Lg(l,u)}}finally{Fn(-1),Sl(s)}}(e,t,n))}function Hu(e,t,n=St){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],a=-1===s?n(t,e):e[s];e[o++]=a}}}function Ng(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=Uu(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function Uu(e,t,n,r,o,i,s,a,l,u){const c=22+r,d=c+o,f=function rM(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:L);return n}(c,d),h="function"==typeof u?u():u;return f[1]={type:e,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:t,data:f.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:l,consts:h,incompleteFirstPass:!1}}function Fg(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function Og(e,t){const r=t.directiveEnd,o=e.data,i=t.attrs,s=[];let a=null,l=null;for(let u=t.directiveStart;u<r;u++){const c=o[u],d=c.inputs,f=null===i||rg(t)?null:yM(d,i);s.push(f),a=Fg(d,u,a),l=Fg(c.outputs,u,l)}null!==a&&(a.hasOwnProperty("class")&&(t.flags|=16),a.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=s,t.inputs=a,t.outputs=l}function vt(e,t,n,r,o,i,s,a){const l=St(t,n);let c,u=t.inputs;!a&&null!=u&&(c=u[r])?(Zu(e,n,c,r,o),Qi(t)&&Pg(n,t.index)):3&t.type&&(r=function sM(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(r),o=null!=s?s(o,t.value||"",r):o,i.setProperty(l,r,o))}function Pg(e,t){const n=ht(t,e);16&n[2]||(n[2]|=32)}function Gu(e,t,n,r){let o=!1;if(yh()){const i=function fM(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];og(n,s.selectors,!1)&&(o||(o=[]),as(To(n,t),e,s.type),Ot(s)?(Vg(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){o=!0,$g(n,e.data.length,i.length);for(let c=0;c<i.length;c++){const d=i[c];d.providersResolver&&d.providersResolver(d)}let a=!1,l=!1,u=Kr(e,t,i.length,null);for(let c=0;c<i.length;c++){const d=i[c];n.mergedAttrs=os(n.mergedAttrs,d.hostAttrs),jg(e,n,t,u,d),pM(u,d,s),null!==d.contentQueries&&(n.flags|=8),(null!==d.hostBindings||null!==d.hostAttrs||0!==d.hostVars)&&(n.flags|=128);const f=d.type.prototype;!a&&(f.ngOnChanges||f.ngOnInit||f.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),a=!0),!l&&(f.ngOnChanges||f.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),l=!0),u++}Og(e,n)}s&&function hM(e,t,n){if(t){const r=e.localNames=[];for(let o=0;o<t.length;o+=2){const i=n[t[o+1]];if(null==i)throw new C(-301,!1);r.push(t[o],i)}}}(n,r,s)}return n.mergedAttrs=os(n.mergedAttrs,n.attrs),o}function kg(e,t,n,r,o,i){const s=i.hostBindings;if(s){let a=e.hostBindingOpCodes;null===a&&(a=e.hostBindingOpCodes=[]);const l=~t.index;(function uM(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(a)!=l&&a.push(l),a.push(r,o,s)}}function Lg(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Vg(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function pM(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;Ot(t)&&(n[""]=e)}}function $g(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function jg(e,t,n,r,o){e.data[r]=o;const i=o.factory||(o.factory=tr(o.type)),s=new Io(i,Ot(o),D);e.blueprint[r]=s,n[r]=s,kg(e,t,0,r,Kr(e,n,o.hostVars,L),o)}function gM(e,t,n){const r=St(t,e),o=Ng(n),i=e[10],s=As(e,Ms(e,o,null,n.onPush?32:16,r,t,i,i.createRenderer(r,n),null,null,null));e[t.index]=s}function mM(e,t,n,r,o,i){const s=i[t];if(null!==s){const a=r.setInput;for(let l=0;l<s.length;){const u=s[l++],c=s[l++],d=s[l++];null!==a?r.setInput(n,d,u,c):n[c]=d}}}function yM(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function Bg(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function DM(e,t){const n=ht(t,e);if(Xi(n)){const r=n[1];48&n[2]?Is(r,n,r.template,n[8]):n[5]>0&&Wu(n)}}function Wu(e){for(let r=pu(e);null!==r;r=gu(r))for(let o=10;o<r.length;o++){const i=r[o];if(Xi(i))if(512&i[2]){const s=i[1];Is(s,i,s.template,i[8])}else i[5]>0&&Wu(i)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=ht(n[r],e);Xi(o)&&o[5]>0&&Wu(o)}}function CM(e,t){const n=ht(t,e),r=n[1];(function wM(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),ju(r,n,n[8])}function As(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function qu(e){for(;e;){e[2]|=32;const t=Zo(e);if(pE(e)&&!t)return e;e=t}return null}function Ts(e,t,n,r=!0){const o=t[10];o.begin&&o.begin();try{Is(e,t,e.template,n)}catch(s){throw r&&zg(t,s),s}finally{o.end&&o.end()}}function Ku(e,t,n){Il(0),t(e,n)}function Hg(e){return e[7]||(e[7]=[])}function Ug(e){return e.cleanup||(e.cleanup=[])}function zg(e,t){const n=e[9],r=n?n.get(Ur,null):null;r&&r.handleError(t)}function Zu(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],a=n[i++],l=t[s],u=e.data[s];null!==u.setInput?u.setInput(l,o,r,a):l[a]=o}}function yn(e,t,n){const r=Ji(t,e);!function jp(e,t,n){e.setValue(t,n)}(e[B],r,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function xs(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let s=0;s<t.length;s++){const a=t[s];"number"==typeof a?i=a:1==i?o=ll(o,a):2==i&&(r=ll(r,a+": "+t[++s]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ns(e,t,n,r,o=!1){for(;null!==n;){const i=t[n.index];if(null!==i&&r.push(we(i)),Ft(i))for(let a=10;a<i.length;a++){const l=i[a],u=l[1].firstChild;null!==u&&Ns(l[1],l,u,r)}const s=n.type;if(8&s)Ns(e,t,n.child,r);else if(32&s){const a=hu(n,t);let l;for(;l=a();)r.push(l)}else if(16&s){const a=Yp(t,n);if(Array.isArray(a))r.push(...a);else{const l=Zo(t[16]);Ns(l[1],l,a,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Yo{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return Ns(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(Ft(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(vu(t,r),us(n,r))}this._attachedToViewContainer=!1}Hp(this._lView[1],this._lView)}onDestroy(t){!function Rg(e,t,n,r){const o=Hg(t);null===n?o.push(r):(o.push(n),e.firstCreatePass&&Ug(e).push(r,o.length-1))}(this._lView[1],this._lView,null,t)}markForCheck(){qu(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){Ts(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new C(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function oS(e,t){Qo(e,t,t[B],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new C(902,!1);this._appRef=t}}class EM extends Yo{constructor(t){super(t),this._view=t}detectChanges(){const t=this._view;Ts(t[1],t,t[8],!1)}checkNoChanges(){}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Qu extends Wo{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=Q(t);return new Jo(n,this.ngModule)}}function Wg(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}class SM{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){const o=this.injector.get(t,ru,r);return o!==ru||n===ru?o:this.parentInjector.get(t,n,r)}}class Jo extends Ep{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=function bS(e){return e.map(ES).join(",")}(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return Wg(this.componentDef.inputs)}get outputs(){return Wg(this.componentDef.outputs)}create(t,n,r,o){var i;let s=(o=o||this.ngModule)instanceof kn?o:null===(i=o)||void 0===i?void 0:i.injector;s&&null!==this.componentDef.getStandaloneInjector&&(s=this.componentDef.getStandaloneInjector(s)||s);const a=s?new SM(t,s):t,l=a.get(Sp,null);if(null===l)throw new C(407,!1);const u=a.get(w0,null),c=l.createRenderer(null,this.componentDef),d=this.componentDef.selectors[0][0]||"div",f=r?function oM(e,t,n){return e.selectRootElement(t,n===Wt.ShadowDom)}(c,r,this.componentDef.encapsulation):yu(l.createRenderer(null,this.componentDef),d,function bM(e){const t=e.toLowerCase();return"svg"===t?"svg":"math"===t?"math":null}(d)),h=this.componentDef.onPush?288:272,p=Uu(0,null,null,1,0,null,null,null,null,null),g=Ms(null,p,null,h,null,null,l,c,u,a,null);let v,y;Al(g);try{const w=function AM(e,t,n,r,o,i){const s=n[1];n[22]=e;const l=qr(s,22,2,"#host",null),u=l.mergedAttrs=t.hostAttrs;null!==u&&(xs(l,u,!0),null!==e&&(rs(o,e,u),null!==l.classes&&Eu(o,e,l.classes),null!==l.styles&&eg(o,e,l.styles)));const c=r.createRenderer(e,t),d=Ms(n,Ng(t),null,t.onPush?32:16,n[22],l,r,c,i||null,null,null);return s.firstCreatePass&&(as(To(l,n),s,t.type),Vg(s,l),$g(l,n.length,1)),As(n,d),n[22]=d}(f,this.componentDef,g,l,c);if(f)if(r)rs(c,f,["ng-version",E0.full]);else{const{attrs:m,classes:b}=function SS(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!Pt(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);m&&rs(c,f,m),b&&b.length>0&&Eu(c,f,b.join(" "))}if(y=Cl(p,22),void 0!==n){const m=y.projection=[];for(let b=0;b<this.ngContentSelectors.length;b++){const $=n[b];m.push(null!=$?Array.from($):null)}}v=function TM(e,t,n,r){const o=n[1],i=function lM(e,t,n){const r=Ie();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),jg(e,r,t,Kr(e,t,1,null),n),Og(e,r));const o=xo(t,e,r.directiveStart,r);He(o,t);const i=St(r,t);return i&&He(i,t),o}(o,n,t);if(e[8]=n[8]=i,null!==r)for(const a of r)a(i,t);if(t.contentQueries){const a=Ie();t.contentQueries(1,i,a.directiveStart)}const s=Ie();return!o.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(Fn(s.index),kg(n[1],s,0,s.directiveStart,s.directiveEnd,t),Lg(t,i)),i}(w,this.componentDef,g,[xM]),ju(p,g,null)}finally{Tl()}return new IM(this.componentType,v,Hr(y,g),g,y)}}class IM extends class m0{}{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.instance=n,this.hostView=this.changeDetectorRef=new EM(o),this.componentType=t}setInput(t,n){const r=this._tNode.inputs;let o;if(null!==r&&(o=r[t])){const i=this._rootLView;Zu(i[1],i,o,t,n),Pg(i,this._tNode.index)}}get injector(){return new Rr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}function xM(){const e=Ie();es(_()[1],e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Y(e){let t=function qg(e){return Object.getPrototypeOf(e.prototype).constructor}(e.type),n=!0;const r=[e];for(;t;){let o;if(Ot(e))o=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new C(903,!1);o=t.\u0275dir}if(o){if(n){r.push(o);const s=e;s.inputs=Yu(e.inputs),s.declaredInputs=Yu(e.declaredInputs),s.outputs=Yu(e.outputs);const a=o.hostBindings;a&&OM(e,a);const l=o.viewQuery,u=o.contentQueries;if(l&&RM(e,l),u&&FM(e,u),al(e.inputs,o.inputs),al(e.declaredInputs,o.declaredInputs),al(e.outputs,o.outputs),Ot(o)&&o.data.animation){const c=e.data;c.animation=(c.animation||[]).concat(o.data.animation)}}const i=o.features;if(i)for(let s=0;s<i.length;s++){const a=i[s];a&&a.ngInherit&&a(e),a===Y&&(n=!1)}}t=Object.getPrototypeOf(t)}!function NM(e){let t=0,n=null;for(let r=e.length-1;r>=0;r--){const o=e[r];o.hostVars=t+=o.hostVars,o.hostAttrs=os(o.hostAttrs,n=os(n,o.hostAttrs))}}(r)}function Yu(e){return e===Er?{}:e===K?[]:e}function RM(e,t){const n=e.viewQuery;e.viewQuery=n?(r,o)=>{t(r,o),n(r,o)}:t}function FM(e,t){const n=e.contentQueries;e.contentQueries=n?(r,o,i)=>{t(r,o,i),n(r,o,i)}:t}function OM(e,t){const n=e.hostBindings;e.hostBindings=n?(r,o)=>{t(r,o),n(r,o)}:t}
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
let Rs=null;function or(){if(!Rs){const e=ee.Symbol;if(e&&e.iterator)Rs=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(Rs=r)}}}return Rs}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Xo(e){return!!function Ju(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)&&(Array.isArray(e)||!(e instanceof Map)&&or()in e)}function Ue(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}function Fs(e,t,n,r,o){const i=function ir(e,t,n,r){const o=Ue(e,t,n);return Ue(e,t+1,r)||o}(e,t,n,r);return Ue(e,t+2,o)||i}function Qr(e,t,n,r){return Ue(e,Tr(),n)?t+k(n)+r:L}function Jr(e,t,n,r,o,i,s,a){const u=Fs(e,function cn(){return P.lFrame.bindingIndex}(),n,o,s);return dn(3),u?t+k(n)+r+k(o)+i+k(s)+a:L}function Je(e,t,n,r,o,i,s,a){const l=_(),u=W(),c=e+22,d=u.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function HM(e,t,n,r,o,i,s,a,l){const u=t.consts,c=qr(t,e,4,s||null,Rn(u,a));Gu(t,n,c,Rn(u,l)),es(t,c);const d=c.tViews=Uu(2,c,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,u);return null!==t.queries&&(t.queries.template(t,c),d.queries=t.queries.embeddedTView(c)),c}(c,u,l,t,n,r,o,i,s):u.data[c];qt(d,!1);const f=l[B].createComment("");Ds(u,l,f,d),He(f,l),As(l,l[c]=Bg(f,l,f,d)),Yi(d)&&Bu(u,l,d),null!=s&&Hu(l,d,a)}
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
function Pe(e,t,n){const r=_();return Ue(r,Tr(),t)&&vt(W(),he(),r,e,t,r[B],n,!1),Pe}function Xu(e,t,n,r,o){const s=o?"class":"style";Zu(e,n,t.inputs[s],s,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ae(e,t,n,r){const o=_(),i=W(),s=22+e,a=o[B],l=o[s]=yu(a,t,function WE(){return P.lFrame.currentNamespace}()),u=i.firstCreatePass?function zM(e,t,n,r,o,i,s){const a=t.consts,u=qr(t,e,2,o,Rn(a,i));return Gu(t,n,u,Rn(a,s)),null!==u.attrs&&xs(u,u.attrs,!1),null!==u.mergedAttrs&&xs(u,u.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,u),u}(s,i,o,0,t,n,r):i.data[s];qt(u,!0);const c=u.mergedAttrs;null!==c&&rs(a,l,c);const d=u.classes;null!==d&&Eu(a,l,d);const f=u.styles;return null!==f&&eg(a,l,f),64!=(64&u.flags)&&Ds(i,o,l,u),0===function AE(){return P.lFrame.elementDepthCount}()&&He(l,o),function TE(){P.lFrame.elementDepthCount++}(),Yi(u)&&(Bu(i,o,u),xg(i,u,o)),null!==r&&Hu(o,u),ae}function te(){let e=Ie();El()?bl():(e=e.parent,qt(e,!1));const t=e;!function xE(){P.lFrame.elementDepthCount--}();const n=W();return n.firstCreatePass&&(es(n,e),ml(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function YE(e){return 0!=(16&e.flags)}(t)&&Xu(n,t,_(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function JE(e){return 0!=(32&e.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)&&Xu(n,t,_(),t.stylesWithoutHost,!1),te}function Lt(e,t,n,r){return ae(e,t,n,r),te(),Lt
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function sr(e,t,n){const r=_(),o=W(),i=e+22,s=o.firstCreatePass?function WM(e,t,n,r,o){const i=t.consts,s=Rn(i,r),a=qr(t,e,8,"ng-container",s);return null!==s&&xs(a,s,!0),Gu(t,n,a,Rn(i,o)),null!==t.queries&&t.queries.elementStart(t,a),a}(i,o,r,t,n):o.data[i];qt(s,!0);const a=r[i]=r[B].createComment("");return Ds(o,r,a,s),He(a,r),Yi(s)&&(Bu(o,r,s),xg(o,s,r)),null!=n&&Hu(r,s),sr}function ar(){let e=Ie();const t=W();return El()?bl():(e=e.parent,qt(e,!1)),t.firstCreatePass&&(es(t,e),ml(e)&&t.queries.elementEnd(e)),ar}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ti(e){return!!e&&"function"==typeof e.then}const ec=function om(e){return!!e&&"function"==typeof e.subscribe};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _t(e,t,n,r){const o=_(),i=W(),s=Ie();return function sm(e,t,n,r,o,i,s,a){const l=Yi(r),c=e.firstCreatePass&&Ug(e),d=t[8],f=Hg(t);let h=!0;if(3&r.type||a){const v=St(r,t),y=a?a(v):v,w=f.length,m=a?$=>a(we($[r.index])):r.index;let b=null;if(!a&&l&&(b=function KM(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const a=t[7],l=o[i+2];return a.length>l?a[l]:null}"string"==typeof s&&(i+=2)}return null}(e,t,o,r.index)),null!==b)(b.__ngLastListenerFn__||b).__ngNextListenerFn__=i,b.__ngLastListenerFn__=i,h=!1;else{i=lm(r,t,d,i,!1);const $=n.listen(y,o,i);f.push(i,$),c&&c.push(o,m,w,w+1)}}else i=lm(r,t,d,i,!1);const p=r.outputs;let g;if(h&&null!==p&&(g=p[o])){const v=g.length;if(v)for(let y=0;y<v;y+=2){const ue=t[g[y]][g[y+1]].subscribe(i),Dr=f.length;f.push(i,ue),c&&c.push(o,r.index,Dr,-(Dr+1))}}}(i,o,o[B],s,e,t,0,r),_t}function am(e,t,n,r){try{return!1!==n(r)}catch(o){return zg(e,o),!1}}function lm(e,t,n,r,o){return function i(s){if(s===Function)return r;qu(2&e.flags?ht(e.index,t):t);let l=am(t,0,r,s),u=i.__ngNextListenerFn__;for(;u;)l=am(t,0,u,s)&&l,u=u.__ngNextListenerFn__;return o&&!1===l&&(s.preventDefault(),s.returnValue=!1),l}}
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
       */function lr(e=1){return function jE(e){return(P.lFrame.contextLView=function BE(e,t){for(;e>0;)t=t[15],e--;return t}(e,P.lFrame.contextLView))[8]}(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Os(e,t,n){return tc(e,"",t,"",n),Os}function tc(e,t,n,r,o){const i=_(),s=Qr(i,t,n,r);return s!==L&&vt(W(),he(),i,e,s,i[B],o,!1),tc}function ym(e,t,n,r,o){const i=e[n+1],s=null===t;let a=r?kt(i):mn(i),l=!1;for(;0!==a&&(!1===l||s);){const c=e[a+1];eI(e[a],t)&&(l=!0,e[a+1]=r?Nu(c):Tu(c)),a=r?kt(c):mn(c)}l&&(e[n+1]=r?Tu(i):Nu(i))}function eI(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&Lr(e,t)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ps(e,t){return function Vt(e,t,n,r){const o=_(),i=W(),s=dn(2);i.firstUpdatePass&&function Mm(e,t,n,r){const o=e.data;if(null===o[n+1]){const i=o[Qe()],s=function Sm(e,t){return t>=e.expandoStartIndex}(e,n);(function xm(e,t){return 0!=(e.flags&(t?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */)(i,r)&&null===t&&!s&&(t=!1),t=function uI(e,t,n,r){const o=function Ml(e){const t=P.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let i=r?t.residualClasses:t.residualStyles;if(null===o)0===(r?t.classBindings:t.styleBindings)&&(n=ni(n=nc(null,e,t,n,r),t.attrs,r),i=null);else{const s=t.directiveStylingLast;if(-1===s||e[s]!==o)if(n=nc(o,e,t,n,r),null===i){let l=function cI(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==mn(r))return e[kt(r)]}(e,t,r);void 0!==l&&Array.isArray(l)&&(l=nc(null,e,t,l[1],r),l=ni(l,t.attrs,r),function dI(e,t,n,r){e[kt(n?t.classBindings:t.styleBindings)]=r}(e,t,r,l))}else i=function fI(e,t,n){let r;const o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++)r=ni(r,e[i].hostAttrs,n);return ni(r,t.attrs,n)}(e,t,r)}return void 0!==i&&(r?t.residualClasses=i:t.residualStyles=i),n}(o,i,t,r),function JM(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,a=kt(s),l=mn(s);e[r]=n;let c,u=!1;if(Array.isArray(n)){const d=n;c=d[1],(null===c||Lr(d,c)>0)&&(u=!0)}else c=n;if(o)if(0!==l){const f=kt(e[a+1]);e[r+1]=Es(f,a),0!==f&&(e[f+1]=xu(e[f+1],r)),e[a+1]=function GS(e,t){return 131071&e|t<<17}(e[a+1],r)}else e[r+1]=Es(a,0),0!==a&&(e[a+1]=xu(e[a+1],r)),a=r;else e[r+1]=Es(l,0),0===a?a=r:e[l+1]=xu(e[l+1],r),l=r;u&&(e[r+1]=Tu(e[r+1])),ym(e,c,r,!0),ym(e,c,r,!1),function XM(e,t,n,r,o){const i=o?e.residualClasses:e.residualStyles;null!=i&&"string"==typeof t&&Lr(i,t)>=0&&(n[r+1]=Nu(n[r+1]))}(t,c,e,r,i),s=Es(a,l),i?t.classBindings=s:t.styleBindings=s}(o,i,t,n,s,r)}}(i,e,s,r),t!==L&&Ue(o,s,t)&&function Am(e,t,n,r,o,i,s,a){if(!(3&t.type))return;const l=e.data,u=l[a+1];ks(function Dg(e){return 1==(1&e)}(u)?Tm(l,t,n,o,mn(u),s):void 0)||(ks(i)||function _g(e){return 2==(2&e)}(u)&&(i=Tm(l,null,n,o,a,s)),function pS(e,t,n,r,o){if(t)o?e.addClass(n,r):e.removeClass(n,r);else{let i=-1===r.indexOf("-")?void 0:it.DashCase;null==o?e.removeStyle(n,r,i):("string"==typeof o&&o.endsWith("!important")&&(o=o.slice(0,-10),i|=it.Important),e.setStyle(n,r,o,i))}}(r,s,Ji(Qe(),n),o,i))}(i,i.data[Qe()],o,o[B],e,o[s+1]=function gI(e,t){return null==e||("string"==typeof t?e+=t:"object"==typeof e&&(e=X(Pn(e)))),e}(t,n),r,s)}(e,t,null,!0),Ps}function nc(e,t,n,r,o){let i=null;const s=n.directiveEnd;let a=n.directiveStylingLast;for(-1===a?a=n.directiveStart:a++;a<s&&(i=t[a],r=ni(r,i.hostAttrs,o),i!==e);)a++;return null!==e&&(n.directiveStylingLast=a),r}function ni(e,t,n){const r=n?1:2;let o=-1;if(null!==t)for(let i=0;i<t.length;i++){const s=t[i];"number"==typeof s?o=s:o===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),gt(e,s,!!n||t[++i]))}return void 0===e?null:e}function Tm(e,t,n,r,o,i){const s=null===t;let a;for(;o>0;){const l=e[o],u=Array.isArray(l),c=u?l[1]:l,d=null===c;let f=n[o+1];f===L&&(f=d?K:void 0);let h=d?Vl(f,r):c===r?f:void 0;if(u&&!ks(h)&&(h=Vl(l,r)),ks(h)&&(a=h,s))return a;const p=e[o+1];o=s?kt(p):mn(p)}if(null!==t){let l=i?t.residualClasses:t.residualStyles;null!=l&&(a=Vl(l,r))}return a}function ks(e){return void 0!==e}function Fe(e,t=""){const n=_(),r=W(),o=e+22,i=r.firstCreatePass?qr(r,o,1,t,null):r.data[o],s=n[o]=function mu(e,t){return e.createText(t)}(n[B],t);Ds(r,n,s,i),qt(i,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function en(e,t,n){const r=_(),o=Qr(r,e,t,n);return o!==L&&yn(r,Qe(),o),en}function rc(e,t,n,r,o,i,s){const a=_(),l=Jr(a,e,t,n,r,o,i,s);return l!==L&&yn(a,Qe(),l),rc}const so="en-US";
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
let Jm=so;function sc(e,t,n,r,o){if(e=F(e),Array.isArray(e))for(let i=0;i<e.length;i++)sc(e[i],t,n,r,o);else{const i=W(),s=_();let a=nr(e)?e:F(e.provide),l=wp(e);const u=Ie(),c=1048575&u.providerIndexes,d=u.directiveStart,f=u.providerIndexes>>20;if(nr(e)||!e.multi){const h=new Io(l,o,D),p=lc(a,t,o?c:c+f,d);-1===p?(as(To(u,s),i,a),ac(i,e,t.length),t.push(a),u.directiveStart++,u.directiveEnd++,o&&(u.providerIndexes+=1048576),n.push(h),s.push(h)):(n[p]=h,s[p]=h)}else{const h=lc(a,t,c+f,d),p=lc(a,t,c,c+f),g=h>=0&&n[h],v=p>=0&&n[p];if(o&&!v||!o&&!g){as(To(u,s),i,a);const y=function FA(e,t,n,r,o){const i=new Io(e,n,D);return i.multi=[],i.index=t,i.componentProviders=0,Ey(i,o,r&&!n),i}(o?RA:NA,n.length,o,r,l);!o&&v&&(n[p].providerFactory=y),ac(i,e,t.length,0),t.push(a),u.directiveStart++,u.directiveEnd++,o&&(u.providerIndexes+=1048576),n.push(y),s.push(y)}else ac(i,e,h>-1?h:p,Ey(n[o?p:h],l,!o&&r));!o&&r&&v&&n[p].componentProviders++}}}function ac(e,t,n,r){const o=nr(t),i=function l0(e){return!!e.useClass}(t);if(o||i){const l=(i?F(t.useClass):t).prototype.ngOnDestroy;if(l){const u=e.destroyHooks||(e.destroyHooks=[]);if(!o&&t.multi){const c=u.indexOf(n);-1===c?u.push(n,[r,l]):u[c+1].push(r,l)}else u.push(n,l)}}}function Ey(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function lc(e,t,n,r){for(let o=n;o<r;o++)if(t[o]===e)return o;return-1}function NA(e,t,n,r){return uc(this.multi,[])}function RA(e,t,n,r){const o=this.multi;let i;if(this.providerFactory){const s=this.providerFactory.componentProviders,a=xo(n,n[1],this.providerFactory.index,r);i=a.slice(0,s),uc(o,i);for(let l=s;l<a.length;l++)i.push(a[l])}else i=[],uc(o,i);return i}function uc(e,t){for(let n=0;n<e.length;n++)t.push((0,e[n])());return t}function le(e,t=[]){return n=>{n.providersResolver=(r,o)=>
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
function xA(e,t,n){const r=W();if(r.firstCreatePass){const o=Ot(e);sc(n,r.data,r.blueprint,o,!0),sc(t,r.data,r.blueprint,o,!1)}}(r,o?o(e):e,t)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class cr{}class by{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Sy extends cr{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Qu(this);const r=dt(t);this._bootstrapComponents=gn(r.bootstrap),this._r3Injector=dg(t,n,[{provide:cr,useValue:this},{provide:Wo,useValue:this.componentFactoryResolver}],X(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(t)}get injector(){return this._r3Injector}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class cc extends by{constructor(t){super(),this.moduleType=t}create(t){return new Sy(this.moduleType,t)}}class PA extends cr{constructor(t,n,r){super(),this.componentFactoryResolver=new Qu(this),this.instance=null;const o=new Cp([...t,{provide:cr,useValue:this},{provide:Wo,useValue:this.componentFactoryResolver}],n||vs(),r,new Set(["environment"]));this.injector=o,o.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}}function Bs(e,t,n=null){return new PA(e,t,n).injector}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let kA=(()=>{class e{constructor(n){this._injector=n,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n.id)){const r=yp(0,n.type),o=r.length>0?Bs([r],this._injector,`Standalone[${n.type.name}]`):null;this.cachedInjectors.set(n.id,o)}return this.cachedInjectors.get(n.id)}ngOnDestroy(){try{for(const n of this.cachedInjectors.values())null!==n&&n.destroy()}finally{this.cachedInjectors.clear()}}}return e.\u0275prov=x({token:e,providedIn:"environment",factory:()=>new e(M(kn))}),e})();function My(e){e.getStandaloneInjector=t=>t.get(kA).getOrCreateStandaloneInjector(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function fc(e){return t=>{setTimeout(e,void 0,t)}}const ge=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class lT extends Ve{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&"object"==typeof t){var a,l,u;const d=t;o=null===(a=d.next)||void 0===a?void 0:a.bind(d),i=null===(l=d.error)||void 0===l?void 0:l.bind(d),s=null===(u=d.complete)||void 0===u?void 0:u.bind(d)}this.__isAsync&&(i=fc(i),o&&(o=fc(o)),s&&(s=fc(s)));const c=super.subscribe({next:o,error:i,complete:s});return t instanceof at&&t.add(c),c}};
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
let vn=(()=>{class e{}return e.__NG_ELEMENT_ID__=fT,e})();const cT=vn,dT=class extends cT{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t,n){const r=this._declarationTContainer.tViews,o=Ms(this._declarationLView,r,t,16,null,r.declTNode,null,null,null,null,n||null);o[17]=this._declarationLView[this._declarationTContainer.index];const s=this._declarationLView[19];return null!==s&&(o[19]=s.createEmbeddedView(r)),ju(r,o,t),new Yo(o)}};function fT(){return function Hs(e,t){return 4&e.type?new dT(t,e,Hr(e,t)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Ie(),_())}let jt=(()=>{class e{}return e.__NG_ELEMENT_ID__=hT,e})();function hT(){return function jy(e,t){let n;const r=t[e.index];if(Ft(r))n=r;else{let o;if(8&e.type)o=we(r);else{const i=t[B];o=i.createComment("");const s=St(e,t);rr(i,_s(i,s),o,function dS(e,t){return e.nextSibling(t)}(i,s),!1)}t[e.index]=n=Bg(r,t,o,e),As(t,n)}return new Vy(n,e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Ie(),_())}const pT=jt,Vy=class extends pT{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return Hr(this._hostTNode,this._hostLView)}get injector(){return new Rr(this._hostTNode,this._hostLView)}get parentInjector(){const t=ss(this._hostTNode,this._hostLView);if(Rh(t)){const n=Nr(t,this._hostLView),r=xr(t);return new Rr(n[1].data[r+8],n)}return new Rr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=$y(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){let o,i;"number"==typeof r?o=r:null!=r&&(o=r.index,i=r.injector);const s=t.createEmbeddedView(n||{},i);return this.insert(s,o),s}createComponent(t,n,r,o,i){const s=t&&!function Fo(e){return"function"==typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t);let a;if(s)a=n;else{const d=n||{};a=d.index,r=d.injector,o=d.projectableNodes,i=d.environmentInjector||d.ngModuleRef}const l=s?t:new Jo(Q(t)),u=r||this.parentInjector;if(!i&&null==l.ngModule){const f=(s?u:this.parentInjector).get(kn,null);f&&(i=f)}const c=l.create(u,o,void 0,i);return this.insert(c.hostView,a),c}insert(t,n){const r=t._lView,o=r[1];if(function IE(e){return Ft(e[3])}(r)){const c=this.indexOf(t);if(-1!==c)this.detach(c);else{const d=r[3],f=new Vy(d,d[6],d[3]);f.detach(f.indexOf(t))}}const i=this._adjustIndex(n),s=this._lContainer;!function sS(e,t,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-10?(t[4]=n[o],Uh(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function aS(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const a=t[19];null!==a&&a.insertView(e),t[2]|=64}(o,r,s,i);const a=Cu(i,s),l=r[B],u=_s(l,s[7]);return null!==u&&function rS(e,t,n,r,o,i){r[0]=o,r[6]=t,Qo(e,r,n,1,o,i)}(o,s[6],l,r,u,a),t.attachToViewContainerRef(),Uh(pc(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=$y(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=vu(this._lContainer,n);r&&(us(pc(this._lContainer),n),Hp(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=vu(this._lContainer,n);return r&&null!=us(pc(this._lContainer),n)?new Yo(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function $y(e){return e[8]}function pc(e){return e[8]||(e[8]=[])}
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
function Gs(...e){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const zs=new I("Application Initializer");let Ws=(()=>{class e{constructor(n){this.appInits=n,this.resolve=Gs,this.reject=Gs,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const i=this.appInits[o]();if(ti(i))n.push(i);else if(ec(i)){const s=new Promise((a,l)=>{i.subscribe({complete:a,error:l})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(M(zs,8))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const di=new I("AppId",{providedIn:"root",factory:function cv(){return`${Ic()}${Ic()}${Ic()}`}});function Ic(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const dv=new I("Platform Initializer"),Ac=new I("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),fv=new I("appBootstrapListener");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let GT=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const _n=new I("LocaleId",{providedIn:"root",factory:()=>ve(_n,N.Optional|N.SkipSelf)||function zT(){return typeof $localize<"u"&&$localize.locale||so}()});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class qT{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let Tc=(()=>{class e{compileModuleSync(n){return new cc(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const r=this.compileModuleSync(n),i=gn(dt(n).declarations).reduce((s,a)=>{const l=Q(a);return l&&s.push(new Jo(l)),s},[]);return new qT(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const QT=(()=>Promise.resolve(0))();function xc(e){typeof Zone>"u"?QT.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
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
class xe{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new ge(!1),this.onMicrotaskEmpty=new ge(!1),this.onStable=new ge(!1),this.onError=new ge(!1),typeof Zone>"u")throw new C(908,!1);Zone.assertZonePatched();const o=this;if(o._nesting=0,o._outer=o._inner=Zone.current,Zone.AsyncStackTaggingZoneSpec){const i=Zone.AsyncStackTaggingZoneSpec;o._inner=o._inner.fork(new i("Angular"))}Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function YT(){let e=ee.requestAnimationFrame,t=ee.cancelAnimationFrame;if(typeof Zone<"u"&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function ex(e){const t=()=>{!function XT(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(ee,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,Rc(e),e.isCheckStableRunning=!0,Nc(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),Rc(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,a)=>{try{return gv(e),n.invokeTask(o,i,s,a)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),mv(e)}},onInvoke:(n,r,o,i,s,a,l)=>{try{return gv(e),n.invoke(o,i,s,a,l)}finally{e.shouldCoalesceRunChangeDetection&&t(),mv(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(e._hasPendingMicrotasks=i.microTask,Rc(e),Nc(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!xe.isInAngularZone())throw new C(909,!1)}static assertNotInAngularZone(){if(xe.isInAngularZone())throw new C(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,JT,Gs,Gs);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const JT={};function Nc(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Rc(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function gv(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function mv(e){e._nesting--,Nc(e)}class tx{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new ge,this.onMicrotaskEmpty=new ge,this.onStable=new ge,this.onError=new ge}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const yv=new I(""),qs=new I("");let Pc,Fc=(()=>{class e{constructor(n,r,o){this._ngZone=n,this.registry=r,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,Pc||(function nx(e){Pc=e}(o),o.addToWindow(r)),this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{xe.assertNotInAngularZone(),xc(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())xc(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let i=-1;r&&r>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(n){this.registry.registerApplication(n,this)}unregisterApplication(n){this.registry.unregisterApplication(n)}findProviders(n,r,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(M(xe),M(Oc),M(qs))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})(),Oc=(()=>{class e{constructor(){this._applications=new Map}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){var o,i;return null!==(o=null===(i=Pc)||void 0===i?void 0:i.findTestabilityInTree(this,n,r))&&void 0!==o?o:null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})(),$n=null;const vv=new I("AllowMultipleToken"),kc=new I("PlatformDestroyListeners");class _v{constructor(t,n){this.name=t,this.token=n}}function Cv(e,t,n=[]){const r=`Platform: ${t}`,o=new I(r);return(i=[])=>{let s=Lc();if(!s||s.injector.get(vv,!1)){const a=[...n,...i,{provide:o,useValue:!0}];e?e(a):function ix(e){if($n&&!$n.get(vv,!1))throw new C(400,!1);$n=e;const t=e.get(Ev);(function Dv(e){const t=e.get(dv,null);t&&t.forEach(n=>n())})(e)}(function wv(e=[],t){return yt.create({name:t,providers:[{provide:Xl,useValue:"platform"},{provide:kc,useValue:new Set([()=>$n=null])},...e]})}(a,r))}return function ax(e){const t=Lc();if(!t)throw new C(401,!1);return t}()}}function Lc(){var e,t;return null!==(e=null===(t=$n)||void 0===t?void 0:t.get(Ev))&&void 0!==e?e:null}let Ev=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const o=function Sv(e,t){let n;return n="noop"===e?new tx:("zone.js"===e?void 0:e)||new xe(t),n}(r?.ngZone,function bv(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!e||!e.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!e||!e.ngZoneRunCoalescing)||!1}}(r)),i=[{provide:xe,useValue:o}];return o.run(()=>{const s=yt.create({providers:i,parent:this.injector,name:n.moduleType.name}),a=n.create(s),l=a.injector.get(Ur,null);if(!l)throw new C(402,!1);return o.runOutsideAngular(()=>{const u=o.onError.subscribe({next:c=>{l.handleError(c)}});a.onDestroy(()=>{Zs(this._modules,a),u.unsubscribe()})}),function Mv(e,t,n){try{const r=n();return ti(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(l,o,()=>{const u=a.injector.get(Ws);return u.runInitializers(),u.donePromise.then(()=>(function Xm(e){ut(e,"Expected localeId to be defined"),"string"==typeof e&&(Jm=e.toLowerCase().replace(/_/g,"-"))}(a.injector.get(_n,so)||so),this._moduleDoBootstrap(a),a))})})}bootstrapModule(n,r=[]){const o=Iv({},r);return function rx(e,t,n){const r=new cc(n);return Promise.resolve(r)}(0,0,n).then(i=>this.bootstrapModuleFactory(i,o))}_moduleDoBootstrap(n){const r=n.injector.get(Ks);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new C(403,!1);n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new C(404,!1);this._modules.slice().forEach(r=>r.destroy()),this._destroyListeners.forEach(r=>r());const n=this._injector.get(kc,null);n&&(n.forEach(r=>r()),n.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(M(yt))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();function Iv(e,t){return Array.isArray(t)?t.reduce(Iv,e):{...e,...t}}let Ks=(()=>{class e{constructor(n,r,o){this._zone=n,this._injector=r,this._exceptionHandler=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const i=new me(a=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{a.next(this._stable),a.complete()})}),s=new me(a=>{let l;this._zone.runOutsideAngular(()=>{l=this._zone.onStable.subscribe(()=>{xe.assertNotInAngularZone(),xc(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,a.next(!0))})})});const u=this._zone.onUnstable.subscribe(()=>{xe.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{a.next(!1)}))});return()=>{l.unsubscribe(),u.unsubscribe()}});this.isStable=function Zw(...e){const t=Do(e),n=function Hw(e,t){return"number"==typeof il(e)?e.pop():t}(e,1/0),r=e;return r.length?1===r.length?xt(r[0]):wr(n)(Ce(r,t)):an}(i,s.pipe(function Qw(e={}){const{connector:t=(()=>new Ve),resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:o=!0}=e;return i=>{let s,a,l,u=0,c=!1,d=!1;const f=()=>{a?.unsubscribe(),a=void 0},h=()=>{f(),s=l=void 0,c=d=!1},p=()=>{const g=s;h(),g?.unsubscribe()};return De((g,v)=>{u++,!d&&!c&&f();const y=l=l??t();v.add(()=>{u--,0===u&&!d&&!c&&(a=sl(p,o))}),y.subscribe(v),!s&&u>0&&(s=new _o({next:w=>y.next(w),error:w=>{d=!0,f(),a=sl(h,n,w),y.error(w)},complete:()=>{c=!0,f(),a=sl(h,r),y.complete()}}),xt(g).subscribe(s))})(i)}}()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(n,r){const o=n instanceof Ep;if(!this._injector.get(Ws).done)throw!o&&function br(e){const t=Q(e)||qe(e)||Ke(e);return null!==t&&t.standalone}(n),new C(405,false);let s;s=o?n:this._injector.get(Wo).resolveComponentFactory(n),this.componentTypes.push(s.componentType);const a=function ox(e){return e.isBoundToModule}(s)?void 0:this._injector.get(cr),u=s.create(yt.NULL,[],r||s.selector,a),c=u.location.nativeElement,d=u.injector.get(yv,null);return d?.registerApplication(c),u.onDestroy(()=>{this.detachView(u.hostView),Zs(this.components,u),d?.unregisterApplication(c)}),this._loadComponent(u),u}tick(){if(this._runningTick)throw new C(101,!1);try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;Zs(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(fv,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>Zs(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new C(406,!1);const n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return e.\u0275fac=function(n){return new(n||e)(M(xe),M(kn),M(Ur))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function Zs(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Tv=!0,Qs=(()=>{class e{}return e.__NG_ELEMENT_ID__=cx,e})();function cx(e){return function dx(e,t,n){if(Qi(e)&&!n){const r=ht(e.index,t);return new Yo(r,r)}return 47&e.type?new Yo(t[16],t):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Ie(),_(),16==(16&e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ov{constructor(){}supports(t){return Xo(t)}create(t){return new yx(t)}}const mx=(e,t)=>t;class yx{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||mx}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){const s=!r||n&&n.currentIndex<kv(r,o,i)?n:r,a=kv(s,o,i),l=s.currentIndex;if(s===r)o--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)o++;else{i||(i=[]);const u=a-o,c=l-o;if(u!=c){for(let f=0;f<u;f++){const h=f<i.length?i[f]:i[f]=0,p=h+f;c<=p&&p<u&&(i[f]=h+1)}i[s.previousIndex]=c-u}}a!==l&&t(s,a,l)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!Xo(t))throw new C(900,!1);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let o,i,s,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let a=0;a<this.length;a++)i=t[a],s=this._trackByFn(a,i),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,i,s,a)),Object.is(n.item,i)||this._addIdentityChange(n,i)):(n=this._mismatch(n,i,s,a),r=!0),n=n._next}else o=0,function $M(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[or()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,a=>{s=this._trackByFn(o,a),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,a,s,o)),Object.is(n.item,a)||this._addIdentityChange(n,a)):(n=this._mismatch(n,a,s,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,o){let i;return null===t?i=this._itTail:(i=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,o)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,o)):t=this._addAfter(new vx(n,r),i,o),t}_verifyReinsertion(t,n,r,o){let i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==i?t=this._reinsertAfter(i,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const o=t._prevRemoved,i=t._nextRemoved;return null===o?this._removalsHead=i:o._nextRemoved=i,null===i?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const o=null===n?this._itHead:n._next;return t._next=o,t._prev=n,null===o?this._itTail=t:o._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new Pv),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Pv),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class vx{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class _x{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class Pv{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new _x,this.map.set(n,r)),r.add(t)}get(t,n){const o=this.map.get(t);return o?o.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function kv(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Vv(){return new Xs([new Ov])}let Xs=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||Vv()),deps:[[e,new $o,new Vo]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new C(901,!1)}}return e.\u0275prov=x({token:e,providedIn:"root",factory:Vv}),e})();const bx=Cv(null,"core",[]);
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
let Sx=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(M(Ks))},e.\u0275mod=Ct({type:e}),e.\u0275inj=ct({}),e})(),ea=null;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function tn(){return ea}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const tt=new I("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Hc=(()=>{class e{historyGo(n){throw new Error("Not implemented")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:function(){return function Tx(){return M(jv)}()},providedIn:"platform"}),e})();const xx=new I("Location Initialized");let jv=(()=>{class e extends Hc{constructor(n){super(),this._doc=n,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return tn().getBaseHref(this._doc)}onPopState(n){const r=tn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){const r=tn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(n){this.location.pathname=n}pushState(n,r,o){Bv()?this._history.pushState(n,r,o):this.location.hash=o}replaceState(n,r,o){Bv()?this._history.replaceState(n,r,o):this.location.hash=o}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}}return e.\u0275fac=function(n){return new(n||e)(M(tt))},e.\u0275prov=x({token:e,factory:function(){return function Nx(){return new jv(M(tt))}
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
       */()},providedIn:"platform"}),e})();function Bv(){return!!window.history.pushState}function Uc(e,t){if(0==e.length)return t;if(0==t.length)return e;let n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,2==n?e+t.substring(1):1==n?e+t:e+"/"+t}function Hv(e){const t=e.match(/#|\?|$/),n=t&&t.index||e.length;return e.slice(0,n-("/"===e[n-1]?1:0))+e.slice(n)}function wn(e){return e&&"?"!==e[0]?"?"+e:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let fr=(()=>{class e{historyGo(n){throw new Error("Not implemented")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:function(){return ve(Gv)},providedIn:"root"}),e})();const Uv=new I("appBaseHref");let Gv=(()=>{class e extends fr{constructor(n,r){var o,i,s;super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=null!==(o=null!==(i=r??this._platformLocation.getBaseHrefFromDOM())&&void 0!==i?i:null===(s=ve(tt).location)||void 0===s?void 0:s.origin)&&void 0!==o?o:""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Uc(this._baseHref,n)}path(n=!1){const r=this._platformLocation.pathname+wn(this._platformLocation.search),o=this._platformLocation.hash;return o&&n?`${r}${o}`:r}pushState(n,r,o,i){const s=this.prepareExternalUrl(o+wn(i));this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){const s=this.prepareExternalUrl(o+wn(i));this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){var r,o;null===(r=(o=this._platformLocation).historyGo)||void 0===r||r.call(o,n)}}return e.\u0275fac=function(n){return new(n||e)(M(Hc),M(Uv,8))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Rx=(()=>{class e extends fr{constructor(n,r){super(),this._platformLocation=n,this._baseHref="",this._removeListenerFns=[],null!=r&&(this._baseHref=r)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}path(n=!1){let r=this._platformLocation.hash;return null==r&&(r="#"),r.length>0?r.substring(1):r}prepareExternalUrl(n){const r=Uc(this._baseHref,n);return r.length>0?"#"+r:r}pushState(n,r,o,i){let s=this.prepareExternalUrl(o+wn(i));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){let s=this.prepareExternalUrl(o+wn(i));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){var r,o;null===(r=(o=this._platformLocation).historyGo)||void 0===r||r.call(o,n)}}return e.\u0275fac=function(n){return new(n||e)(M(Hc),M(Uv,8))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})(),Gc=(()=>{class e{constructor(n){this._subject=new ge,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;const r=this._locationStrategy.getBaseHref();this._baseHref=Hv(zv(r)),this._locationStrategy.onPopState(o=>{this._subject.emit({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){var n;null===(n=this._urlChangeSubscription)||void 0===n||n.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+wn(r))}normalize(n){return e.stripTrailingSlash(function Ox(e,t){return e&&t.startsWith(e)?t.substring(e.length):t}(this._baseHref,zv(n)))}prepareExternalUrl(n){return n&&"/"!==n[0]&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",o=null){this._locationStrategy.pushState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+wn(r)),o)}replaceState(n,r="",o=null){this._locationStrategy.replaceState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+wn(r)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){var r,o;null===(r=(o=this._locationStrategy).historyGo)||void 0===r||r.call(o,n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)})),()=>{const r=this._urlChangeListeners.indexOf(n);var o;this._urlChangeListeners.splice(r,1),0===this._urlChangeListeners.length&&(null===(o=this._urlChangeSubscription)||void 0===o||o.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(o=>o(n,r))}subscribe(n,r,o){return this._subject.subscribe({next:n,error:r,complete:o})}}return e.normalizeQueryParams=wn,e.joinWithSlash=Uc,e.stripTrailingSlash=Hv,e.\u0275fac=function(n){return new(n||e)(M(fr))},e.\u0275prov=x({token:e,factory:function(){return function Fx(){return new Gc(M(fr))}()},providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zv(e){return e.replace(/\/index.html$/,"")}
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
function e_(e,t){t=encodeURIComponent(t);for(const n of e.split(";")){const r=n.indexOf("="),[o,i]=-1==r?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===t)return decodeURIComponent(i)}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class _N{constructor(t,n,r,o){this.$implicit=t,this.ngForOf=n,this.index=r,this.count=o}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let ca=(()=>{class e{constructor(n,r,o){this._viewContainer=n,this._template=r,this._differs=o,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const n=this._ngForOf;!this._differ&&n&&(this._differ=this._differs.find(n).create(this.ngForTrackBy))}if(this._differ){const n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){const r=this._viewContainer;n.forEachOperation((o,i,s)=>{if(null==o.previousIndex)r.createEmbeddedView(this._template,new _N(o.item,this._ngForOf,-1,-1),null===s?void 0:s);else if(null==s)r.remove(null===i?void 0:i);else if(null!==i){const a=r.get(i);r.move(a,s),r_(a,o)}});for(let o=0,i=r.length;o<i;o++){const a=r.get(o).context;a.index=o,a.count=i,a.ngForOf=this._ngForOf}n.forEachIdentityChange(o=>{r_(r.get(o.currentIndex),o)})}static ngTemplateContextGuard(n,r){return!0}}return e.\u0275fac=function(n){return new(n||e)(D(jt),D(vn),D(Xs))},e.\u0275dir=O({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0}),e})();function r_(e,t){e.context.$implicit=t.item}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let da=(()=>{class e{constructor(n,r){this._viewContainer=n,this._context=new CN,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=r}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){o_("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){o_("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,r){return!0}}return e.\u0275fac=function(n){return new(n||e)(D(jt),D(vn))},e.\u0275dir=O({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0}),e})();class CN{constructor(){this.$implicit=null,this.ngIf=null}}function o_(e,t){if(t&&!t.createEmbeddedView)throw new Error(`${e} must be a TemplateRef, but received '${X(t)}'.`)}
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
let KN=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Ct({type:e}),e.\u0275inj=ct({}),e})();
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
let JN=(()=>{class e{}return e.\u0275prov=x({token:e,providedIn:"root",factory:()=>new XN(M(tt),window)}),e})();class XN{constructor(t,n){this.document=t,this.window=n,this.offset=()=>[0,0]}setOffset(t){this.offset=Array.isArray(t)?()=>t:t}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(t){this.supportsScrolling()&&this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){if(!this.supportsScrolling())return;const n=function eR(e,t){const n=e.getElementById(t)||e.getElementsByName(t)[0];if(n)return n;if("function"==typeof e.createTreeWalker&&e.body&&(e.body.createShadowRoot||e.body.attachShadow)){const r=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT);let o=r.currentNode;for(;o;){const i=o.shadowRoot;if(i){const s=i.getElementById(t)||i.querySelector(`[name="${t}"]`);if(s)return s}o=r.nextNode()}}return null}(this.document,t);n&&(this.scrollToElement(n),n.focus())}setHistoryScrollRestoration(t){if(this.supportScrollRestoration()){const n=this.window.history;n&&n.scrollRestoration&&(n.scrollRestoration=t)}}scrollToElement(t){const n=t.getBoundingClientRect(),r=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,i=this.offset();this.window.scrollTo(r-i[0],o-i[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const t=l_(this.window.history)||l_(Object.getPrototypeOf(this.window.history));return!(!t||!t.writable&&!t.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function l_(e){return Object.getOwnPropertyDescriptor(e,"scrollRestoration")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class u_{}
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
class sd extends
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
class vR extends class Ax{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function Ix(e){ea||(ea=e)}(new sd)}onAndCancel(t,n,r){return t.addEventListener(n,r,!1),()=>{t.removeEventListener(n,r,!1)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,n){return(n=n||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return"window"===n?window:"document"===n?t:"body"===n?t.body:null}getBaseHref(t){const n=function _R(){return mi=mi||document.querySelector("base"),mi?mi.getAttribute("href"):null}();return null==n?null:function DR(e){ha=ha||document.createElement("a"),ha.setAttribute("href",e);const t=ha.pathname;return"/"===t.charAt(0)?t:`/${t}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}resetBaseElement(){mi=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return e_(document.cookie,t)}}let ha,mi=null;const h_=new I("TRANSITION_ID"),wR=[{provide:zs,useFactory:function CR(e,t,n){return()=>{n.get(Ws).donePromise.then(()=>{const r=tn(),o=t.querySelectorAll(`style[ng-transition="${e}"]`);for(let i=0;i<o.length;i++)r.remove(o[i])})}},deps:[h_,tt,yt],multi:!0}];let bR=(()=>{class e{build(){return new XMLHttpRequest}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const pa=new I("EventManagerPlugins");let ga=(()=>{class e{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(o=>o.manager=this),this._plugins=n.slice().reverse()}addEventListener(n,r,o){return this._findPluginFor(r).addEventListener(n,r,o)}addGlobalEventListener(n,r,o){return this._findPluginFor(r).addGlobalEventListener(n,r,o)}getZone(){return this._zone}_findPluginFor(n){const r=this._eventNameToPlugin.get(n);if(r)return r;const o=this._plugins;for(let i=0;i<o.length;i++){const s=o[i];if(s.supports(n))return this._eventNameToPlugin.set(n,s),s}throw new Error(`No event manager plugin found for event ${n}`)}}return e.\u0275fac=function(n){return new(n||e)(M(pa),M(xe))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();class p_{constructor(t){this._doc=t}addGlobalEventListener(t,n,r){const o=tn().getGlobalEventTarget(this._doc,t);if(!o)throw new Error(`Unsupported event target ${o} for event ${n}`);return this.addEventListener(o,n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let g_=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(n){const r=new Set;n.forEach(o=>{this._stylesSet.has(o)||(this._stylesSet.add(o),r.add(o))}),this.onStylesAdded(r)}onStylesAdded(n){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})(),yi=(()=>{class e extends g_{constructor(n){super(),this._doc=n,this._hostNodes=new Map,this._hostNodes.set(n.head,[])}_addStylesToHost(n,r,o){n.forEach(i=>{const s=this._doc.createElement("style");s.textContent=i,o.push(r.appendChild(s))})}addHost(n){const r=[];this._addStylesToHost(this._stylesSet,n,r),this._hostNodes.set(n,r)}removeHost(n){const r=this._hostNodes.get(n);r&&r.forEach(m_),this._hostNodes.delete(n)}onStylesAdded(n){this._hostNodes.forEach((r,o)=>{this._addStylesToHost(n,o,r)})}ngOnDestroy(){this._hostNodes.forEach(n=>n.forEach(m_))}}return e.\u0275fac=function(n){return new(n||e)(M(tt))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();function m_(e){tn().remove(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ad={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},ld=/%COMP%/g;function ma(e,t,n){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?ma(e,o,n):(o=o.replace(ld,e),n.push(o))}return n}function __(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let ud=(()=>{class e{constructor(n,r,o){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.rendererByCompId=new Map,this.defaultRenderer=new cd(n)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;switch(r.encapsulation){case Wt.Emulated:{let o=this.rendererByCompId.get(r.id);return o||(o=new xR(this.eventManager,this.sharedStylesHost,r,this.appId),this.rendererByCompId.set(r.id,o)),o.applyToHost(n),o}case 1:case Wt.ShadowDom:return new NR(this.eventManager,this.sharedStylesHost,n,r);default:if(!this.rendererByCompId.has(r.id)){const o=ma(r.id,r.styles,[]);this.sharedStylesHost.addStyles(o),this.rendererByCompId.set(r.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(n){return new(n||e)(M(ga),M(yi),M(di))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();class cd{constructor(t){this.eventManager=t,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(t,n){return n?document.createElementNS(ad[n]||n,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,n){(C_(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){t&&(C_(t)?t.content:t).insertBefore(n,r)}removeChild(t,n){t&&t.removeChild(n)}selectRootElement(t,n){let r="string"==typeof t?document.querySelector(t):t;if(!r)throw new Error(`The selector "${t}" did not match any elements`);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+":"+n;const i=ad[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){const o=ad[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){o&(it.DashCase|it.Important)?t.style.setProperty(n,r,o&it.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&it.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t[n]=r}setValue(t,n){t.nodeValue=n}listen(t,n,r){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,n,__(r)):this.eventManager.addEventListener(t,n,__(r))}}function C_(e){return"TEMPLATE"===e.tagName&&void 0!==e.content}class xR extends cd{constructor(t,n,r,o){super(t),this.component=r;const i=ma(o+"-"+r.id,r.styles,[]);n.addStyles(i),this.contentAttr=function IR(e){return"_ngcontent-%COMP%".replace(ld,e)}(o+"-"+r.id),this.hostAttr=function AR(e){return"_nghost-%COMP%".replace(ld,e)}(o+"-"+r.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,n){const r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}}class NR extends cd{constructor(t,n,r,o){super(t),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const i=ma(o.id,o.styles,[]);for(let s=0;s<i.length;s++){const a=document.createElement("style");a.textContent=i[s],this.shadowRoot.appendChild(a)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(this.nodeOrShadowRoot(t),n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let RR=(()=>{class e extends p_{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o){return n.addEventListener(r,o,!1),()=>this.removeEventListener(n,r,o)}removeEventListener(n,r,o){return n.removeEventListener(r,o)}}return e.\u0275fac=function(n){return new(n||e)(M(tt))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const w_=["alt","control","meta","shift"],FR={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},OR={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let PR=(()=>{class e extends p_{constructor(n){super(n)}supports(n){return null!=e.parseEventName(n)}addEventListener(n,r,o){const i=e.parseEventName(r),s=e.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>tn().onAndCancel(n,i.domEventName,s))}static parseEventName(n){const r=n.toLowerCase().split("."),o=r.shift();if(0===r.length||"keydown"!==o&&"keyup"!==o)return null;const i=e._normalizeKey(r.pop());let s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),w_.forEach(u=>{const c=r.indexOf(u);c>-1&&(r.splice(c,1),s+=u+".")}),s+=i,0!=r.length||0===i.length)return null;const l={};return l.domEventName=o,l.fullKey=s,l}static matchEventFullKeyCode(n,r){let o=FR[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),!(null==o||!o)&&(o=o.toLowerCase()," "===o?o="space":"."===o&&(o="dot"),w_.forEach(s=>{s!==o&&(0,OR[s])(n)&&(i+=s+".")}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{e.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return"esc"===n?"escape":n}}return e.\u0275fac=function(n){return new(n||e)(M(tt))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const $R=Cv(bx,"browser",[{provide:Ac,useValue:"browser"},{provide:dv,useValue:function kR(){sd.makeCurrent()},multi:!0},{provide:tt,useFactory:function VR(){return function Fb(e){Ul=e}(document),document},deps:[]}]),S_=new I(""),M_=[{provide:qs,useClass:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ER{addToWindow(t){ee.getAngularTestability=(r,o=!0)=>{const i=t.findTestabilityInTree(r,o);if(null==i)throw new Error("Could not find testability for element.");return i},ee.getAllAngularTestabilities=()=>t.getAllTestabilities(),ee.getAllAngularRootElements=()=>t.getAllRootElements(),ee.frameworkStabilizers||(ee.frameworkStabilizers=[]),ee.frameworkStabilizers.push(r=>{const o=ee.getAllAngularTestabilities();let i=o.length,s=!1;const a=function(l){s=s||l,i--,0==i&&r(s)};o.forEach(function(l){l.whenStable(a)})})}findTestabilityInTree(t,n,r){return null==n?null:t.getTestability(n)??(r?tn().isShadowRoot(n)?this.findTestabilityInTree(t,n.host,!0):this.findTestabilityInTree(t,n.parentElement,!0):null)}},deps:[]},{provide:yv,useClass:Fc,deps:[xe,Oc,qs]},{provide:Fc,useClass:Fc,deps:[xe,Oc,qs]}],I_=[{provide:Xl,useValue:"root"},{provide:Ur,useFactory:function LR(){return new Ur},deps:[]},{provide:pa,useClass:RR,multi:!0,deps:[tt,xe,Ac]},{provide:pa,useClass:PR,multi:!0,deps:[tt]},{provide:ud,useClass:ud,deps:[ga,yi,di]},{provide:Sp,useExisting:ud},{provide:g_,useExisting:yi},{provide:yi,useClass:yi,deps:[tt]},{provide:ga,useClass:ga,deps:[pa,xe]},{provide:u_,useClass:bR,deps:[]},[]];let jR=(()=>{class e{constructor(n){}static withServerTransition(n){return{ngModule:e,providers:[{provide:di,useValue:n.appId},{provide:h_,useExisting:di},wR]}}}return e.\u0275fac=function(n){return new(n||e)(M(S_,12))},e.\u0275mod=Ct({type:e}),e.\u0275inj=ct({providers:[...I_,...M_],imports:[KN,Sx]}),e})(),A_=(()=>{class e{constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}}return e.\u0275fac=function(n){return new(n||e)(M(tt))},e.\u0275prov=x({token:e,factory:function(n){let r=null;return r=n?new n:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function HR(){return new A_(M(tt))}(),r},providedIn:"root"}),e})();
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
function A(...e){return Ce(e,Do(e))}function Bn(e,t){return ne(t)?Oe(e,t,1):Oe(e,1)}function bn(e,t){return De((n,r)=>{let o=0;n.subscribe(ye(r,i=>e.call(t,i,o++)&&r.next(i)))})}
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
       */typeof window<"u"&&window;class N_{}class R_{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Sn{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(n=>{const r=n.indexOf(":");if(r>0){const o=n.slice(0,r),i=o.toLowerCase(),s=n.slice(r+1).trim();this.maybeSetNormalizedName(o,i),this.headers.has(i)?this.headers.get(i).push(s):this.headers.set(i,[s])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(n=>{let r=t[n];const o=n.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(o,r),this.maybeSetNormalizedName(n,o))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const n=this.headers.get(t.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,n){return this.clone({name:t,value:n,op:"a"})}set(t,n){return this.clone({name:t,value:n,op:"s"})}delete(t,n){return this.clone({name:t,value:n,op:"d"})}maybeSetNormalizedName(t,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,t)}init(){this.lazyInit&&(this.lazyInit instanceof Sn?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(n=>{this.headers.set(n,t.headers.get(n)),this.normalizedNames.set(n,t.normalizedNames.get(n))})}clone(t){const n=new Sn;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof Sn?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}applyUpdate(t){const n=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,n);const o=("a"===t.op?this.headers.get(n):void 0)||[];o.push(...r),this.headers.set(n,o);break;case"d":const i=t.value;if(i){let s=this.headers.get(n);if(!s)return;s=s.filter(a=>-1===i.indexOf(a)),0===s.length?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,s)}else this.headers.delete(n),this.normalizedNames.delete(n)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>t(this.normalizedNames.get(n),this.headers.get(n)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class QR{encodeKey(t){return F_(t)}encodeValue(t){return F_(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const JR=/%(\d[a-f0-9])/gi,XR={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function F_(e){return encodeURIComponent(e).replace(JR,(t,n)=>{var r;return null!==(r=XR[n])&&void 0!==r?r:t})}function ya(e){return`${e}`}class Mn{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new QR,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function YR(e,t){const n=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{const i=o.indexOf("="),[s,a]=-1==i?[t.decodeKey(o),""]:[t.decodeKey(o.slice(0,i)),t.decodeValue(o.slice(i+1))],l=n.get(s)||[];l.push(a),n.set(s,l)}),n}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(n=>{const r=t.fromObject[n],o=Array.isArray(r)?r.map(ya):[ya(r)];this.map.set(n,o)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const n=this.map.get(t);return n?n[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,n){return this.clone({param:t,value:n,op:"a"})}appendAll(t){const n=[];return Object.keys(t).forEach(r=>{const o=t[r];Array.isArray(o)?o.forEach(i=>{n.push({param:r,value:i,op:"a"})}):n.push({param:r,value:o,op:"a"})}),this.clone(n)}set(t,n){return this.clone({param:t,value:n,op:"s"})}delete(t,n){return this.clone({param:t,value:n,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const n=this.encoder.encodeKey(t);return this.map.get(t).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const n=new Mn({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(t),n}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const n=("a"===t.op?this.map.get(t.param):void 0)||[];n.push(ya(t.value)),this.map.set(t.param,n);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const o=r.indexOf(ya(t.value));-1!==o&&r.splice(o,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class eF{constructor(){this.map=new Map}set(t,n){return this.map.set(t,n),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function O_(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function P_(e){return typeof Blob<"u"&&e instanceof Blob}function k_(e){return typeof FormData<"u"&&e instanceof FormData}class vi{constructor(t,n,r,o){let i;if(this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function tF(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==r?r:null,i=o):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new Sn),this.context||(this.context=new eF),this.params){const s=this.params.toString();if(0===s.length)this.urlWithParams=n;else{const a=n.indexOf("?");this.urlWithParams=n+(-1===a?"?":a<n.length-1?"&":"")+s}}else this.params=new Mn,this.urlWithParams=n}serializeBody(){return null===this.body?null:O_(this.body)||P_(this.body)||k_(this.body)||function nF(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof Mn?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||k_(this.body)?null:P_(this.body)?this.body.type||null:O_(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof Mn?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){var n;const r=t.method||this.method,o=t.url||this.url,i=t.responseType||this.responseType,s=void 0!==t.body?t.body:this.body,a=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,l=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let u=t.headers||this.headers,c=t.params||this.params;const d=null!==(n=t.context)&&void 0!==n?n:this.context;return void 0!==t.setHeaders&&(u=Object.keys(t.setHeaders).reduce((f,h)=>f.set(h,t.setHeaders[h]),u)),t.setParams&&(c=Object.keys(t.setParams).reduce((f,h)=>f.set(h,t.setParams[h]),c)),new vi(r,o,s,{params:c,headers:u,context:d,reportProgress:l,responseType:i,withCredentials:a})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Me=(()=>((Me=Me||{})[Me.Sent=0]="Sent",Me[Me.UploadProgress=1]="UploadProgress",Me[Me.ResponseHeader=2]="ResponseHeader",Me[Me.DownloadProgress=3]="DownloadProgress",Me[Me.Response=4]="Response",Me[Me.User=5]="User",Me))();class hd{constructor(t,n=200,r="OK"){this.headers=t.headers||new Sn,this.status=void 0!==t.status?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class pd extends hd{constructor(t={}){super(t),this.type=Me.ResponseHeader}clone(t={}){return new pd({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class va extends hd{constructor(t={}){super(t),this.type=Me.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new va({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class L_ extends hd{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gd(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}let _a=(()=>{class e{constructor(n){this.handler=n}request(n,r,o={}){let i;if(n instanceof vi)i=n;else{let l,u;l=o.headers instanceof Sn?o.headers:new Sn(o.headers),o.params&&(u=o.params instanceof Mn?o.params:new Mn({fromObject:o.params})),i=new vi(n,r,void 0!==o.body?o.body:null,{headers:l,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials})}const s=A(i).pipe(Bn(l=>this.handler.handle(l)));if(n instanceof vi||"events"===o.observe)return s;const a=s.pipe(bn(l=>l instanceof va));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return a.pipe(U(l=>{if(null!==l.body&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return a.pipe(U(l=>{if(null!==l.body&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return a.pipe(U(l=>{if(null!==l.body&&"string"!=typeof l.body)throw new Error("Response is not a string.");return l.body}));default:return a.pipe(U(l=>l.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:(new Mn).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,gd(o,r))}post(n,r,o={}){return this.request("POST",n,gd(o,r))}put(n,r,o={}){return this.request("PUT",n,gd(o,r))}}return e.\u0275fac=function(n){return new(n||e)(M(N_))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class V_{constructor(t,n){this.next=t,this.interceptor=n}handle(t){return this.interceptor.intercept(t,this.next)}}const $_=new I("HTTP_INTERCEPTORS");let rF=(()=>{class e{intercept(n,r){return r.handle(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
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
const oF=/^\)\]\}',?\n/;let j_=(()=>{class e{constructor(n){this.xhrFactory=n}handle(n){if("JSONP"===n.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new me(r=>{const o=this.xhrFactory.build();if(o.open(n.method,n.urlWithParams),n.withCredentials&&(o.withCredentials=!0),n.headers.forEach((h,p)=>o.setRequestHeader(h,p.join(","))),n.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){const h=n.detectContentTypeHeader();null!==h&&o.setRequestHeader("Content-Type",h)}if(n.responseType){const h=n.responseType.toLowerCase();o.responseType="json"!==h?h:"text"}const i=n.serializeBody();let s=null;const a=()=>{if(null!==s)return s;const h=o.statusText||"OK",p=new Sn(o.getAllResponseHeaders()),g=function iF(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(o)||n.url;return s=new pd({headers:p,status:o.status,statusText:h,url:g}),s},l=()=>{let{headers:h,status:p,statusText:g,url:v}=a(),y=null;204!==p&&(y=typeof o.response>"u"?o.responseText:o.response),0===p&&(p=y?200:0);let w=p>=200&&p<300;if("json"===n.responseType&&"string"==typeof y){const m=y;y=y.replace(oF,"");try{y=""!==y?JSON.parse(y):null}catch(b){y=m,w&&(w=!1,y={error:b,text:y})}}w?(r.next(new va({body:y,headers:h,status:p,statusText:g,url:v||void 0})),r.complete()):r.error(new L_({error:y,headers:h,status:p,statusText:g,url:v||void 0}))},u=h=>{const{url:p}=a(),g=new L_({error:h,status:o.status||0,statusText:o.statusText||"Unknown Error",url:p||void 0});r.error(g)};let c=!1;const d=h=>{c||(r.next(a()),c=!0);let p={type:Me.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),"text"===n.responseType&&!!o.responseText&&(p.partialText=o.responseText),r.next(p)},f=h=>{let p={type:Me.UploadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),r.next(p)};return o.addEventListener("load",l),o.addEventListener("error",u),o.addEventListener("timeout",u),o.addEventListener("abort",u),n.reportProgress&&(o.addEventListener("progress",d),null!==i&&o.upload&&o.upload.addEventListener("progress",f)),o.send(i),r.next({type:Me.Sent}),()=>{o.removeEventListener("error",u),o.removeEventListener("abort",u),o.removeEventListener("load",l),o.removeEventListener("timeout",u),n.reportProgress&&(o.removeEventListener("progress",d),null!==i&&o.upload&&o.upload.removeEventListener("progress",f)),o.readyState!==o.DONE&&o.abort()}})}}return e.\u0275fac=function(n){return new(n||e)(M(u_))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const md=new I("XSRF_COOKIE_NAME"),yd=new I("XSRF_HEADER_NAME");class B_{}let sF=(()=>{class e{constructor(n,r,o){this.doc=n,this.platform=r,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=e_(n,this.cookieName),this.lastCookieString=n),this.lastToken}}return e.\u0275fac=function(n){return new(n||e)(M(tt),M(Ac),M(md))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})(),vd=(()=>{class e{constructor(n,r){this.tokenService=n,this.headerName=r}intercept(n,r){const o=n.url.toLowerCase();if("GET"===n.method||"HEAD"===n.method||o.startsWith("http://")||o.startsWith("https://"))return r.handle(n);const i=this.tokenService.getToken();return null!==i&&!n.headers.has(this.headerName)&&(n=n.clone({headers:n.headers.set(this.headerName,i)})),r.handle(n)}}return e.\u0275fac=function(n){return new(n||e)(M(B_),M(yd))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})(),aF=(()=>{class e{constructor(n,r){this.backend=n,this.injector=r,this.chain=null}handle(n){if(null===this.chain){const r=this.injector.get($_,[]);this.chain=r.reduceRight((o,i)=>new V_(o,i),this.backend)}return this.chain.handle(n)}}return e.\u0275fac=function(n){return new(n||e)(M(R_),M(yt))},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})(),lF=(()=>{class e{static disable(){return{ngModule:e,providers:[{provide:vd,useClass:rF}]}}static withOptions(n={}){return{ngModule:e,providers:[n.cookieName?{provide:md,useValue:n.cookieName}:[],n.headerName?{provide:yd,useValue:n.headerName}:[]]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Ct({type:e}),e.\u0275inj=ct({providers:[vd,{provide:$_,useExisting:vd,multi:!0},{provide:B_,useClass:sF},{provide:md,useValue:"XSRF-TOKEN"},{provide:yd,useValue:"X-XSRF-TOKEN"}]}),e})(),uF=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Ct({type:e}),e.\u0275inj=ct({providers:[_a,{provide:N_,useClass:aF},j_,{provide:R_,useExisting:j_}],imports:[lF.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]}),e})();
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
class Gt extends Ve{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){const n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){const{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}}const Da=vo(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}),{isArray:cF}=Array,{getPrototypeOf:dF,prototype:fF,keys:hF}=Object;function H_(e){if(1===e.length){const t=e[0];if(cF(t))return{args:t,keys:null};if(function pF(e){return e&&"object"==typeof e&&dF(e)===fF}(t)){const n=hF(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}const{isArray:gF}=Array;function U_(e){return U(t=>function mF(e,t){return gF(t)?e(...t):e(t)}(e,t))}function G_(e,t){return e.reduce((n,r,o)=>(n[r]=t[o],n),{})}function z_(...e){const t=Do(e),n=Jf(e),{args:r,keys:o}=H_(e);if(0===r.length)return Ce([],t);const i=new me(function yF(e,t,n=Tn){return r=>{W_(t,()=>{const{length:o}=e,i=new Array(o);let s=o,a=o;for(let l=0;l<o;l++)W_(t,()=>{const u=Ce(e[l],t);let c=!1;u.subscribe(ye(r,d=>{i[l]=d,c||(c=!0,a--),a||r.next(n(i.slice()))},()=>{--s||r.complete()}))},r)},r)}}(r,t,o?s=>G_(o,s):Tn));return n?i.pipe(U_(n)):i}function W_(e,t,n){e?sn(n,e,t):t()}function _d(...e){return function vF(){return wr(1)}()(Ce(e,Do(e)))}function q_(e){return new me(t=>{xt(e()).subscribe(t)})}function Hn(e,t){const n=ne(e)?e:()=>e,r=o=>o.error(n());return new me(t?o=>t.schedule(r,0,o):r)}function Dd(){return De((e,t)=>{let n=null;e._refCount++;const r=ye(t,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount)return void(n=null);const o=e._connection,i=n;n=null,o&&(!i||o===i)&&o.unsubscribe(),t.unsubscribe()});e.subscribe(r),r.closed||(n=e.connect())})}class K_ extends me{constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,Vf(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){const t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new at;const n=this.getSubject();t.add(this.source.subscribe(ye(n,void 0,()=>{this._teardown(),n.complete()},r=>{this._teardown(),n.error(r)},()=>this._teardown()))),t.closed&&(this._connection=null,t=at.EMPTY)}return t}refCount(){return Dd()(this)}}function nn(e,t){return De((n,r)=>{let o=null,i=0,s=!1;const a=()=>s&&!o&&r.complete();n.subscribe(ye(r,l=>{o?.unsubscribe();let u=0;const c=i++;xt(e(l,c)).subscribe(o=ye(r,d=>r.next(t?t(l,d,c,u++):d),()=>{o=null,a()}))},()=>{s=!0,a()}))})}function _i(e){return e<=0?()=>an:De((t,n)=>{let r=0;t.subscribe(ye(n,o=>{++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function Ca(e){return De((t,n)=>{let r=!1;t.subscribe(ye(n,o=>{r=!0,n.next(o)},()=>{r||n.next(e),n.complete()}))})}function Z_(e=DF){return De((t,n)=>{let r=!1;t.subscribe(ye(n,o=>{r=!0,n.next(o)},()=>r?n.complete():n.error(e())))})}function DF(){return new Da}function Un(e,t){const n=arguments.length>=2;return r=>r.pipe(e?bn((o,i)=>e(o,i,r)):Tn,_i(1),n?Ca(t):Z_(()=>new Da))}function ze(e,t,n){const r=ne(e)||t||n?{next:e,error:t,complete:n}:e;return r?De((o,i)=>{var s;null===(s=r.subscribe)||void 0===s||s.call(r);let a=!0;o.subscribe(ye(i,l=>{var u;null===(u=r.next)||void 0===u||u.call(r,l),i.next(l)},()=>{var l;a=!1,null===(l=r.complete)||void 0===l||l.call(r),i.complete()},l=>{var u;a=!1,null===(u=r.error)||void 0===u||u.call(r,l),i.error(l)},()=>{var l,u;a&&(null===(l=r.unsubscribe)||void 0===l||l.call(r)),null===(u=r.finalize)||void 0===u||u.call(r)}))}):Tn}function zt(e){return De((t,n)=>{let i,r=null,o=!1;r=t.subscribe(ye(n,void 0,void 0,s=>{i=xt(e(s,zt(e)(t))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function CF(e,t,n,r,o){return(i,s)=>{let a=n,l=t,u=0;i.subscribe(ye(s,c=>{const d=u++;l=a?e(l,c,d):(a=!0,c),r&&s.next(l)},o&&(()=>{a&&s.next(l),s.complete()})))}}function Q_(e,t){return De(CF(e,t,arguments.length>=2,!0))}function Cd(e){return e<=0?()=>an:De((t,n)=>{let r=[];t.subscribe(ye(n,o=>{r.push(o),e<r.length&&r.shift()},()=>{for(const o of r)n.next(o);n.complete()},void 0,()=>{r=null}))})}function Y_(e,t){const n=arguments.length>=2;return r=>r.pipe(e?bn((o,i)=>e(o,i,r)):Tn,Cd(1),n?Ca(t):Z_(()=>new Da))}function wd(e){return De((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}
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
       */const H="primary",Di=Symbol("RouteTitle");class bF{constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){const n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){const n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}}function uo(e){return new bF(e)}function SF(e,t,n){const r=n.path.split("/");if(r.length>e.length||"full"===n.pathMatch&&(t.hasChildren()||r.length<e.length))return null;const o={};for(let i=0;i<r.length;i++){const s=r[i],a=e[i];if(s.startsWith(":"))o[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,r.length),posParams:o}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function rn(e,t){const n=e?Object.keys(e):void 0,r=t?Object.keys(t):void 0;if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!J_(e[o],t[o]))return!1;return!0}function J_(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const n=[...e].sort(),r=[...t].sort();return n.every((o,i)=>r[i]===o)}return e===t}function X_(e){return Array.prototype.concat.apply([],e)}function eD(e){return e.length>0?e[e.length-1]:null}function ke(e,t){for(const n in e)e.hasOwnProperty(n)&&t(e[n],n)}function Gn(e){return ec(e)?e:ti(e)?Ce(Promise.resolve(e)):A(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const AF={exact:function rD(e,t,n){if(!pr(e.segments,t.segments)||!wa(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(const r in t.children)if(!e.children[r]||!rD(e.children[r],t.children[r],n))return!1;return!0},subset:oD},tD={exact:function TF(e,t){return rn(e,t)},subset:function xF(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>J_(e[n],t[n]))},ignored:()=>!0};function nD(e,t,n){return AF[n.paths](e.root,t.root,n.matrixParams)&&tD[n.queryParams](e.queryParams,t.queryParams)&&!("exact"===n.fragment&&e.fragment!==t.fragment)}function oD(e,t,n){return iD(e,t,t.segments,n)}function iD(e,t,n,r){if(e.segments.length>n.length){const o=e.segments.slice(0,n.length);return!(!pr(o,n)||t.hasChildren()||!wa(o,n,r))}if(e.segments.length===n.length){if(!pr(e.segments,n)||!wa(e.segments,n,r))return!1;for(const o in t.children)if(!e.children[o]||!oD(e.children[o],t.children[o],r))return!1;return!0}{const o=n.slice(0,e.segments.length),i=n.slice(e.segments.length);return!!(pr(e.segments,o)&&wa(e.segments,o,r)&&e.children[H])&&iD(e.children[H],t,i,r)}}function wa(e,t,n){return t.every((r,o)=>tD[n](e[o].parameters,r.parameters))}class hr{constructor(t,n,r){this.root=t,this.queryParams=n,this.fragment=r}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=uo(this.queryParams)),this._queryParamMap}toString(){return FF.serialize(this)}}class G{constructor(t,n){this.segments=t,this.children=n,this.parent=null,ke(n,(r,o)=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ea(this)}}class Ci{constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap||(this._parameterMap=uo(this.parameters)),this._parameterMap}toString(){return uD(this)}}function pr(e,t){return e.length===t.length&&e.every((n,r)=>n.path===t[r].path)}let sD=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:function(){return new bd},providedIn:"root"}),e})();class bd{parse(t){const n=new HF(t);return new hr(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){const n=`/${wi(t.root,!0)}`,r=function kF(e){const t=Object.keys(e).map(n=>{const r=e[n];return Array.isArray(r)?r.map(o=>`${ba(n)}=${ba(o)}`).join("&"):`${ba(n)}=${ba(r)}`}).filter(n=>!!n);return t.length?`?${t.join("&")}`:""}(t.queryParams);return`${n}${r}${"string"==typeof t.fragment?`#${function OF(e){return encodeURI(e)}(t.fragment)}`:""}`}}const FF=new bd;function Ea(e){return e.segments.map(t=>uD(t)).join("/")}function wi(e,t){if(!e.hasChildren())return Ea(e);if(t){const n=e.children[H]?wi(e.children[H],!1):"",r=[];return ke(e.children,(o,i)=>{i!==H&&r.push(`${i}:${wi(o,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}{const n=function RF(e,t){let n=[];return ke(e.children,(r,o)=>{o===H&&(n=n.concat(t(r,o)))}),ke(e.children,(r,o)=>{o!==H&&(n=n.concat(t(r,o)))}),n}(e,(r,o)=>o===H?[wi(e.children[H],!1)]:[`${o}:${wi(r,!1)}`]);return 1===Object.keys(e.children).length&&null!=e.children[H]?`${Ea(e)}/${n[0]}`:`${Ea(e)}/(${n.join("//")})`}}function aD(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ba(e){return aD(e).replace(/%3B/gi,";")}function Sd(e){return aD(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Sa(e){return decodeURIComponent(e)}function lD(e){return Sa(e.replace(/\+/g,"%20"))}function uD(e){return`${Sd(e.path)}${function PF(e){return Object.keys(e).map(t=>`;${Sd(t)}=${Sd(e[t])}`).join("")}(e.parameters)}`}const LF=/^[^\/()?;=#]+/;function Ma(e){const t=e.match(LF);return t?t[0]:""}const VF=/^[^=?&#]+/,jF=/^[^&#]+/;class HF{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new G([],{}):new G([],this.parseChildren())}parseQueryParams(){const t={};if(this.consumeOptional("?"))do{this.parseQueryParam(t)}while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(t.length>0||Object.keys(n).length>0)&&(r[H]=new G(t,n)),r}parseSegment(){const t=Ma(this.remaining);if(""===t&&this.peekStartsWith(";"))throw new C(4009,!1);return this.capture(t),new Ci(Sa(t),this.parseMatrixParams())}parseMatrixParams(){const t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){const n=Ma(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){const o=Ma(this.remaining);o&&(r=o,this.capture(r))}t[Sa(n)]=Sa(r)}parseQueryParam(t){const n=function $F(e){const t=e.match(VF);return t?t[0]:""}(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){const s=function BF(e){const t=e.match(jF);return t?t[0]:""}(this.remaining);s&&(r=s,this.capture(r))}const o=lD(n),i=lD(r);if(t.hasOwnProperty(o)){let s=t[o];Array.isArray(s)||(s=[s],t[o]=s),s.push(i)}else t[o]=i}parseParens(t){const n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const r=Ma(this.remaining),o=this.remaining[r.length];if("/"!==o&&")"!==o&&";"!==o)throw new C(4010,!1);let i;r.indexOf(":")>-1?(i=r.slice(0,r.indexOf(":")),this.capture(i),this.capture(":")):t&&(i=H);const s=this.parseChildren();n[i]=1===Object.keys(s).length?s[H]:new G([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return!!this.peekStartsWith(t)&&(this.remaining=this.remaining.substring(t.length),!0)}capture(t){if(!this.consumeOptional(t))throw new C(4011,!1)}}function Md(e){return e.segments.length>0?new G([],{[H]:e}):e}function Ia(e){const t={};for(const r of Object.keys(e.children)){const i=Ia(e.children[r]);(i.segments.length>0||i.hasChildren())&&(t[r]=i)}return function UF(e){if(1===e.numberOfChildren&&e.children[H]){const t=e.children[H];return new G(e.segments.concat(t.segments),t.children)}return e}(new G(e.segments,t))}function gr(e){return e instanceof hr}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function WF(e,t,n,r,o){var i;if(0===n.length)return co(t.root,t.root,t.root,r,o);const s=function fD(e){if("string"==typeof e[0]&&1===e.length&&"/"===e[0])return new dD(!0,0,e);let t=0,n=!1;const r=e.reduce((o,i,s)=>{if("object"==typeof i&&null!=i){if(i.outlets){const a={};return ke(i.outlets,(l,u)=>{a[u]="string"==typeof l?l.split("/"):l}),[...o,{outlets:a}]}if(i.segmentPath)return[...o,i.segmentPath]}return"string"!=typeof i?[...o,i]:0===s?(i.split("/").forEach((a,l)=>{0==l&&"."===a||(0==l&&""===a?n=!0:".."===a?t++:""!=a&&o.push(a))}),o):[...o,i]},[]);return new dD(n,t,r)}(n);if(s.toRoot())return co(t.root,t.root,new G([],{}),r,o);const l=function a(c){var d;const f=function KF(e,t,n,r){if(e.isAbsolute)return new fo(t.root,!0,0);if(-1===r)return new fo(n,n===t.root,0);return function hD(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new C(4005,!1);o=r.segments.length}return new fo(r,!1,o-i)}(n,r+(Ei(e.commands[0])?0:1),e.numberOfDoubleDots)}(s,t,null===(d=e.snapshot)||void 0===d?void 0:d._urlSegment,c),h=f.processChildren?Si(f.segmentGroup,f.index,s.commands):Ad(f.segmentGroup,f.index,s.commands);return co(t.root,f.segmentGroup,h,r,o)}(null===(i=e.snapshot)||void 0===i?void 0:i._lastPathIndex);return l}function Ei(e){return"object"==typeof e&&null!=e&&!e.outlets&&!e.segmentPath}function bi(e){return"object"==typeof e&&null!=e&&e.outlets}function co(e,t,n,r,o){let s,i={};r&&ke(r,(l,u)=>{i[u]=Array.isArray(l)?l.map(c=>`${c}`):`${l}`}),s=e===t?n:cD(e,t,n);const a=Md(Ia(s));return new hr(a,i,o)}function cD(e,t,n){const r={};return ke(e.children,(o,i)=>{r[i]=o===t?n:cD(o,t,n)}),new G(e.segments,r)}class dD{constructor(t,n,r){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=r,t&&r.length>0&&Ei(r[0]))throw new C(4003,!1);const o=r.find(bi);if(o&&o!==eD(r))throw new C(4004,!1)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class fo{constructor(t,n,r){this.segmentGroup=t,this.processChildren=n,this.index=r}}function Ad(e,t,n){if(e||(e=new G([],{})),0===e.segments.length&&e.hasChildren())return Si(e,t,n);const r=function QF(e,t,n){let r=0,o=t;const i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;const s=e.segments[o],a=n[r];if(bi(a))break;const l=`${a}`,u=r<n.length-1?n[r+1]:null;if(o>0&&void 0===l)break;if(l&&u&&"object"==typeof u&&void 0===u.outlets){if(!gD(l,u,s))return i;r+=2}else{if(!gD(l,{},s))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){const i=new G(e.segments.slice(0,r.pathIndex),{});return i.children[H]=new G(e.segments.slice(r.pathIndex),e.children),Si(i,0,o)}return r.match&&0===o.length?new G(e.segments,{}):r.match&&!e.hasChildren()?Td(e,t,n):r.match?Si(e,0,o):Td(e,t,n)}function Si(e,t,n){if(0===n.length)return new G(e.segments,{});{const r=function ZF(e){return bi(e[0])?e[0].outlets:{[H]:e}}(n),o={};return ke(r,(i,s)=>{"string"==typeof i&&(i=[i]),null!==i&&(o[s]=Ad(e.children[s],t,i))}),ke(e.children,(i,s)=>{void 0===r[s]&&(o[s]=i)}),new G(e.segments,o)}}function Td(e,t,n){const r=e.segments.slice(0,t);let o=0;for(;o<n.length;){const i=n[o];if(bi(i)){const l=YF(i.outlets);return new G(r,l)}if(0===o&&Ei(n[0])){r.push(new Ci(e.segments[t].path,pD(n[0]))),o++;continue}const s=bi(i)?i.outlets[H]:`${i}`,a=o<n.length-1?n[o+1]:null;s&&a&&Ei(a)?(r.push(new Ci(s,pD(a))),o+=2):(r.push(new Ci(s,{})),o++)}return new G(r,{})}function YF(e){const t={};return ke(e,(n,r)=>{"string"==typeof n&&(n=[n]),null!==n&&(t[r]=Td(new G([],{}),0,n))}),t}function pD(e){const t={};return ke(e,(n,r)=>t[r]=`${n}`),t}function gD(e,t,n){return e==n.path&&rn(t,n.parameters)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class In{constructor(t,n){this.id=t,this.url=n}}class xd extends In{constructor(t,n,r="imperative",o=null){super(t,n),this.type=0,this.navigationTrigger=r,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class mr extends In{constructor(t,n,r){super(t,n),this.urlAfterRedirects=r,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class Aa extends In{constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class mD extends In{constructor(t,n,r,o){super(t,n),this.error=r,this.target=o,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class JF extends In{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class XF extends In{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class eO extends In{constructor(t,n,r,o,i){super(t,n),this.urlAfterRedirects=r,this.state=o,this.shouldActivate=i,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class tO extends In{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class nO extends In{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class rO{constructor(t){this.route=t,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class oO{constructor(t){this.route=t,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class iO{constructor(t){this.snapshot=t,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class sO{constructor(t){this.snapshot=t,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class aO{constructor(t){this.snapshot=t,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class lO{constructor(t){this.snapshot=t,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class yD{constructor(t,n,r){this.routerEvent=t,this.position=n,this.anchor=r,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class vD{constructor(t){this._root=t}get root(){return this._root.value}parent(t){const n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){const n=Nd(t,this._root);return n?n.children.map(r=>r.value):[]}firstChild(t){const n=Nd(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){const n=Rd(t,this._root);return n.length<2?[]:n[n.length-2].children.map(o=>o.value).filter(o=>o!==t)}pathFromRoot(t){return Rd(t,this._root).map(n=>n.value)}}function Nd(e,t){if(e===t.value)return t;for(const n of t.children){const r=Nd(e,n);if(r)return r}return null}function Rd(e,t){if(e===t.value)return[t];for(const n of t.children){const r=Rd(e,n);if(r.length)return r.unshift(t),r}return[]}class An{constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}}function ho(e){const t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class _D extends vD{constructor(t,n){super(t),this.snapshot=n,Fd(this,t)}toString(){return this.snapshot.toString()}}function DD(e,t){const n=function cO(e,t){const s=new Ta([],{},{},"",{},H,t,null,e.root,-1,{});return new wD("",new An(s,[]))}(e,t),r=new Gt([new Ci("",{})]),o=new Gt({}),i=new Gt({}),s=new Gt({}),a=new Gt(""),l=new yr(r,o,s,a,i,H,t,n.root);return l.snapshot=n.root,new _D(new An(l,[]),n)}class yr{constructor(t,n,r,o,i,s,a,l){var u,c;this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.title=null!==(u=null===(c=this.data)||void 0===c?void 0:c.pipe(U(d=>d[Di])))&&void 0!==u?u:A(void 0),this._futureSnapshot=l}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(U(t=>uo(t)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(U(t=>uo(t)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function CD(e,t="emptyOnly"){const n=e.pathFromRoot;let r=0;if("always"!==t)for(r=n.length-1;r>=1;){const o=n[r],i=n[r-1];if(o.routeConfig&&""===o.routeConfig.path)r--;else{if(i.component)break;r--}}return function dO(e){return e.reduce((t,n)=>{var r;return{params:{...t.params,...n.params},data:{...t.data,...n.data},resolve:{...n.data,...t.resolve,...null===(r=n.routeConfig)||void 0===r?void 0:r.data,...n._resolvedData}}},{params:{},data:{},resolve:{}})}(n.slice(r))}class Ta{constructor(t,n,r,o,i,s,a,l,u,c,d,f){var h;this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.title=null===(h=this.data)||void 0===h?void 0:h[Di],this.routeConfig=l,this._urlSegment=u,this._lastPathIndex=c,this._correctedLastPathIndex=f??c,this._resolve=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=uo(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=uo(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class wD extends vD{constructor(t,n){super(n),this.url=t,Fd(this,n)}toString(){return ED(this._root)}}function Fd(e,t){t.value._routerState=e,t.children.forEach(n=>Fd(e,n))}function ED(e){const t=e.children.length>0?` { ${e.children.map(ED).join(", ")} } `:"";return`${e.value}${t}`}function Od(e){if(e.snapshot){const t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,rn(t.queryParams,n.queryParams)||e.queryParams.next(n.queryParams),t.fragment!==n.fragment&&e.fragment.next(n.fragment),rn(t.params,n.params)||e.params.next(n.params),function MF(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!rn(e[n],t[n]))return!1;return!0}(t.url,n.url)||e.url.next(n.url),rn(t.data,n.data)||e.data.next(n.data)}else e.snapshot=e._futureSnapshot,e.data.next(e._futureSnapshot.data)}function Pd(e,t){const n=rn(e.params,t.params)&&function NF(e,t){return pr(e,t)&&e.every((n,r)=>rn(n.parameters,t[r].parameters))}(e.url,t.url);return n&&!(!e.parent!=!t.parent)&&(!e.parent||Pd(e.parent,t.parent))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Mi(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){const r=n.value;r._futureSnapshot=t.value;const o=function hO(e,t,n){return t.children.map(r=>{for(const o of n.children)if(e.shouldReuseRoute(r.value,o.value.snapshot))return Mi(e,r,o);return Mi(e,r)})}(e,t,n);return new An(r,o)}{if(e.shouldAttach(t.value)){const i=e.retrieve(t.value);if(null!==i){const s=i.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(a=>Mi(e,a)),s}}const r=function pO(e){return new yr(new Gt(e.url),new Gt(e.params),new Gt(e.queryParams),new Gt(e.fragment),new Gt(e.data),e.outlet,e.component,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t.value),o=t.children.map(i=>Mi(e,i));return new An(r,o)}}const kd="ngNavigationCancelingError";function bD(e,t){const{redirectTo:n,navigationBehaviorOptions:r}=gr(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,o=SD(!1,0,t);return o.url=n,o.navigationBehaviorOptions=r,o}function SD(e,t,n){const r=new Error("NavigationCancelingError: "+(e||""));return r[kd]=!0,r.cancellationCode=t,n&&(r.url=n),r}function MD(e){return ID(e)&&gr(e.url)}function ID(e){return e&&e[kd]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class gO{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.injector=null,this.children=new Ii,this.attachRef=null}}let Ii=(()=>{class e{constructor(){this.contexts=new Map}onChildOutletCreated(n,r){const o=this.getOrCreateContext(n);o.outlet=r,this.contexts.set(n,o)}onChildOutletDestroyed(n){const r=this.getContext(n);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){const n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let r=this.getContext(n);return r||(r=new gO,this.contexts.set(n,r)),r}getContext(n){return this.contexts.get(n)||null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const xa=!1;let AD=(()=>{class e{constructor(n,r,o,i,s){this.parentContexts=n,this.location=r,this.changeDetector=i,this.environmentInjector=s,this.activated=null,this._activatedRoute=null,this.activateEvents=new ge,this.deactivateEvents=new ge,this.attachEvents=new ge,this.detachEvents=new ge,this.name=o||H,n.onChildOutletCreated(this.name,this)}ngOnDestroy(){var n;(null===(n=this.parentContexts.getContext(this.name))||void 0===n?void 0:n.outlet)===this&&this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const n=this.parentContexts.getContext(this.name);n&&n.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new C(4012,xa);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new C(4012,xa);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new C(4012,xa);this.location.detach();const n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,r){this.activated=n,this._activatedRoute=r,this.location.insert(n.hostView),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){const n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,r){if(this.isActivated)throw new C(4013,xa);this._activatedRoute=n;const o=this.location,s=n._futureSnapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new mO(n,a,o.injector);if(r&&function yO(e){return!!e.resolveComponentFactory}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(r)){const u=r.resolveComponentFactory(s);this.activated=o.createComponent(u,o.length,l)}else this.activated=o.createComponent(s,{index:o.length,injector:l,environmentInjector:r??this.environmentInjector});this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return e.\u0275fac=function(n){return new(n||e)(D(Ii),D(jt),function No(e){return function nb(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const r=n.length;let o=0;for(;o<r;){const i=n[o];if(Th(i))break;if(0===i)o+=2;else if("number"==typeof i)for(o++;o<r&&"string"==typeof n[o];)o++;else{if(i===t)return n[o+1];o+=2}}}return null}(Ie(),e)}("name"),D(Qs),D(kn))},e.\u0275dir=O({type:e,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0}),e})();class mO{constructor(t,n,r){this.route=t,this.childContexts=n,this.parent=r}get(t,n){return t===yr?this.route:t===Ii?this.childContexts:this.parent.get(t,n)}}let Ld=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=Nn({type:e,selectors:[["ng-component"]],standalone:!0,features:[My],decls:1,vars:0,template:function(n,r){1&n&&Lt(0,"router-outlet")},dependencies:[AD],encapsulation:2}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function TD(e,t){var n;return e.providers&&!e._injector&&(e._injector=Bs(e.providers,t,`Route: ${e.path}`)),null!==(n=e._injector)&&void 0!==n?n:t}function $d(e){const t=e.children&&e.children.map($d),n=t?{...e,children:t}:{...e};return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==H&&(n.component=Ld),n}function Tt(e){return e.outlet||H}function xD(e,t){const n=e.filter(r=>Tt(r)===t);return n.push(...e.filter(r=>Tt(r)!==t)),n}function Ai(e){var t;if(!e)return null;if(null!==(t=e.routeConfig)&&void 0!==t&&t._injector)return e.routeConfig._injector;for(let n=e.parent;n;n=n.parent){const r=n.routeConfig;if(null!=r&&r._loadedInjector)return r._loadedInjector;if(null!=r&&r._injector)return r._injector}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class wO{constructor(t,n,r,o){this.routeReuseStrategy=t,this.futureState=n,this.currState=r,this.forwardEvent=o}activate(t){const n=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,r,t),Od(this.futureState.root),this.activateChildRoutes(n,r,t)}deactivateChildRoutes(t,n,r){const o=ho(n);t.children.forEach(i=>{const s=i.value.outlet;this.deactivateRoutes(i,o[s],r),delete o[s]}),ke(o,(i,s)=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(t,n,r){const o=t.value,i=n?n.value:null;if(o===i)if(o.component){const s=r.getContext(o.outlet);s&&this.deactivateChildRoutes(t,n,s.children)}else this.deactivateChildRoutes(t,n,r);else i&&this.deactivateRouteAndItsChildren(n,r)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){const r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=ho(t);for(const s of Object.keys(i))this.deactivateRouteAndItsChildren(i[s],o);if(r&&r.outlet){const s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:a})}}deactivateRouteAndOutlet(t,n){const r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=ho(t);for(const s of Object.keys(i))this.deactivateRouteAndItsChildren(i[s],o);r&&r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated(),r.attachRef=null,r.resolver=null,r.route=null)}activateChildRoutes(t,n,r){const o=ho(n);t.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],r),this.forwardEvent(new lO(i.value.snapshot))}),t.children.length&&this.forwardEvent(new sO(t.value.snapshot))}activateRoutes(t,n,r){const o=t.value,i=n?n.value:null;if(Od(o),o===i)if(o.component){const a=r.getOrCreateContext(o.outlet);this.activateChildRoutes(t,n,a.children)}else this.activateChildRoutes(t,n,r);else if(o.component){const a=r.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){const l=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),a.children.onOutletReAttached(l.contexts),a.attachRef=l.componentRef,a.route=l.route.value,a.outlet&&a.outlet.attach(l.componentRef,l.route.value),Od(l.route.value),this.activateChildRoutes(t,null,a.children)}else{var s;const l=Ai(o.snapshot),u=null!==(s=l?.get(Wo))&&void 0!==s?s:null;a.attachRef=null,a.route=o,a.resolver=u,a.injector=l,a.outlet&&a.outlet.activateWith(o,a.injector),this.activateChildRoutes(t,null,a.children)}}else this.activateChildRoutes(t,null,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ND{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}}class Na{constructor(t,n){this.component=t,this.route=n}}function EO(e,t,n){const r=e._root;return Ti(r,t?t._root:null,n,[r.value])}function po(e,t){const n=Symbol(),r=t.get(e,n);return r===n?"function"!=typeof e||function rE(e){return null!==Gi(e)}(e)?t.get(e):e:r}function Ti(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){const i=ho(t);return e.children.forEach(s=>{(function SO(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){const i=e.value,s=t?t.value:null,a=n?n.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){const l=function MO(e,t,n){if("function"==typeof n)return n(e,t);switch(n){case"pathParamsChange":return!pr(e.url,t.url);case"pathParamsOrQueryParamsChange":return!pr(e.url,t.url)||!rn(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Pd(e,t)||!rn(e.queryParams,t.queryParams);default:return!Pd(e,t)}}(s,i,i.routeConfig.runGuardsAndResolvers);l?o.canActivateChecks.push(new ND(r)):(i.data=s.data,i._resolvedData=s._resolvedData),Ti(e,t,i.component?a?a.children:null:n,r,o),l&&a&&a.outlet&&a.outlet.isActivated&&o.canDeactivateChecks.push(new Na(a.outlet.component,s))}else s&&xi(t,a,o),o.canActivateChecks.push(new ND(r)),Ti(e,null,i.component?a?a.children:null:n,r,o)})(s,i[s.value.outlet],n,r.concat([s.value]),o),delete i[s.value.outlet]}),ke(i,(s,a)=>xi(s,n.getContext(a),o)),o}function xi(e,t,n){const r=ho(e),o=e.value;ke(r,(i,s)=>{xi(i,o.component?t?t.children.getContext(s):null:t,n)}),n.canDeactivateChecks.push(new Na(o.component&&t&&t.outlet&&t.outlet.isActivated?t.outlet.component:null,o))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ni(e){return"function"==typeof e}function jd(e){return e instanceof Da||"EmptyError"===e?.name}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ra=Symbol("INITIAL_VALUE");function go(){return nn(e=>z_(e.map(t=>t.pipe(_i(1),function _F(...e){const t=Do(e);return De((n,r)=>{(t?_d(e,n,t):_d(e,n)).subscribe(r)})}(Ra)))).pipe(U(t=>{for(const n of t)if(!0!==n){if(n===Ra)return Ra;if(!1===n||n instanceof hr)return n}return!0}),bn(t=>t!==Ra),_i(1)))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function RD(e){return function ww(...e){return Pf(e)}(ze(t=>{if(gr(t))throw bD(0,t)}),U(t=>!0===t))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Bd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function FD(e,t,n,r,o){const i=Hd(e,t,n);return i.matched?function UO(e,t,n,r){const o=t.canMatch;return o&&0!==o.length?A(o.map(s=>{const a=po(s,e);return Gn(function RO(e){return e&&Ni(e.canMatch)}(a)?a.canMatch(t,n):e.runInContext(()=>a(t,n)))})).pipe(go(),RD()):A(!0)}(r=TD(t,r),t,n).pipe(U(s=>!0===s?i:{...Bd})):A(i)}function Hd(e,t,n){var r;if(""===t.path)return"full"===t.pathMatch&&(e.hasChildren()||n.length>0)?{...Bd}:{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};const i=(t.matcher||SF)(n,e,t);if(!i)return{...Bd};const s={};ke(i.posParams,(l,u)=>{s[u]=l.path});const a=i.consumed.length>0?{...s,...i.consumed[i.consumed.length-1].parameters}:s;return{matched:!0,consumedSegments:i.consumed,remainingSegments:n.slice(i.consumed.length),parameters:a,positionalParamSegments:null!==(r=i.posParams)&&void 0!==r?r:{}}}function Fa(e,t,n,r,o="corrected"){if(n.length>0&&function WO(e,t,n){return n.some(r=>Oa(e,t,r)&&Tt(r)!==H)}(e,n,r)){const s=new G(t,function zO(e,t,n,r){const o={};o[H]=r,r._sourceSegment=e,r._segmentIndexShift=t.length;for(const i of n)if(""===i.path&&Tt(i)!==H){const s=new G([],{});s._sourceSegment=e,s._segmentIndexShift=t.length,o[Tt(i)]=s}return o}(e,t,r,new G(n,e.children)));return s._sourceSegment=e,s._segmentIndexShift=t.length,{segmentGroup:s,slicedSegments:[]}}if(0===n.length&&function qO(e,t,n){return n.some(r=>Oa(e,t,r))}(e,n,r)){const s=new G(e.segments,function GO(e,t,n,r,o,i){const s={};for(const a of r)if(Oa(e,n,a)&&!o[Tt(a)]){const l=new G([],{});l._sourceSegment=e,l._segmentIndexShift="legacy"===i?e.segments.length:t.length,s[Tt(a)]=l}return{...o,...s}}(e,t,n,r,e.children,o));return s._sourceSegment=e,s._segmentIndexShift=t.length,{segmentGroup:s,slicedSegments:n}}const i=new G(e.segments,e.children);return i._sourceSegment=e,i._segmentIndexShift=t.length,{segmentGroup:i,slicedSegments:n}}function Oa(e,t,n){return(!(e.hasChildren()||t.length>0)||"full"!==n.pathMatch)&&""===n.path}function OD(e,t,n,r){return!!(Tt(e)===r||r!==H&&Oa(t,n,e))&&("**"===e.path||Hd(t,e,n).matched)}function PD(e,t,n){return 0===t.length&&!e.children[n]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Pa=!1;class ka{constructor(t){this.segmentGroup=t||null}}class kD{constructor(t){this.urlTree=t}}function Ri(e){return Hn(new ka(e))}function LD(e){return Hn(new kD(e))}class YO{constructor(t,n,r,o,i){this.injector=t,this.configLoader=n,this.urlSerializer=r,this.urlTree=o,this.config=i,this.allowRedirects=!0}apply(){const t=Fa(this.urlTree.root,[],[],this.config).segmentGroup,n=new G(t.segments,t.children);return this.expandSegmentGroup(this.injector,this.config,n,H).pipe(U(i=>this.createUrlTree(Ia(i),this.urlTree.queryParams,this.urlTree.fragment))).pipe(zt(i=>{if(i instanceof kD)return this.allowRedirects=!1,this.match(i.urlTree);throw i instanceof ka?this.noMatchError(i):i}))}match(t){return this.expandSegmentGroup(this.injector,this.config,t.root,H).pipe(U(o=>this.createUrlTree(Ia(o),t.queryParams,t.fragment))).pipe(zt(o=>{throw o instanceof ka?this.noMatchError(o):o}))}noMatchError(t){return new C(4002,Pa)}createUrlTree(t,n,r){const o=Md(t);return new hr(o,n,r)}expandSegmentGroup(t,n,r,o){return 0===r.segments.length&&r.hasChildren()?this.expandChildren(t,n,r).pipe(U(i=>new G([],i))):this.expandSegment(t,r,n,r.segments,o,!0)}expandChildren(t,n,r){const o=[];for(const i of Object.keys(r.children))"primary"===i?o.unshift(i):o.push(i);return Ce(o).pipe(Bn(i=>{const s=r.children[i],a=xD(n,i);return this.expandSegmentGroup(t,a,s,i).pipe(U(l=>({segment:l,outlet:i})))}),Q_((i,s)=>(i[s.outlet]=s.segment,i),{}),Y_())}expandSegment(t,n,r,o,i,s){return Ce(r).pipe(Bn(a=>this.expandSegmentAgainstRoute(t,n,r,a,o,i,s).pipe(zt(u=>{if(u instanceof ka)return A(null);throw u}))),Un(a=>!!a),zt((a,l)=>{if(jd(a))return PD(n,o,i)?A(new G([],{})):Ri(n);throw a}))}expandSegmentAgainstRoute(t,n,r,o,i,s,a){return OD(o,n,i,s)?void 0===o.redirectTo?this.matchSegmentAgainstRoute(t,n,o,i,s):a&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s):Ri(n):Ri(n)}expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s){return"**"===o.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(t,r,o,s):this.expandRegularSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s)}expandWildCardWithParamsAgainstRouteUsingRedirect(t,n,r,o){const i=this.applyRedirectCommands([],r.redirectTo,{});return r.redirectTo.startsWith("/")?LD(i):this.lineralizeSegments(r,i).pipe(Oe(s=>{const a=new G(s,{});return this.expandSegment(t,a,n,s,o,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s){const{matched:a,consumedSegments:l,remainingSegments:u,positionalParamSegments:c}=Hd(n,o,i);if(!a)return Ri(n);const d=this.applyRedirectCommands(l,o.redirectTo,c);return o.redirectTo.startsWith("/")?LD(d):this.lineralizeSegments(o,d).pipe(Oe(f=>this.expandSegment(t,n,r,f.concat(u),s,!1)))}matchSegmentAgainstRoute(t,n,r,o,i){return"**"===r.path?(t=TD(r,t),r.loadChildren?(r._loadedRoutes?A({routes:r._loadedRoutes,injector:r._loadedInjector}):this.configLoader.loadChildren(t,r)).pipe(U(a=>(r._loadedRoutes=a.routes,r._loadedInjector=a.injector,new G(o,{})))):A(new G(o,{}))):FD(n,r,o,t).pipe(nn(({matched:s,consumedSegments:a,remainingSegments:l})=>{var u;return s?(t=null!==(u=r._injector)&&void 0!==u?u:t,this.getChildConfig(t,r,o).pipe(Oe(d=>{var f;const h=null!==(f=d.injector)&&void 0!==f?f:t,p=d.routes,{segmentGroup:g,slicedSegments:v}=Fa(n,a,l,p),y=new G(g.segments,g.children);if(0===v.length&&y.hasChildren())return this.expandChildren(h,p,y).pipe(U($=>new G(a,$)));if(0===p.length&&0===v.length)return A(new G(a,{}));const w=Tt(r)===i;return this.expandSegment(h,y,p,v,w?H:i,!0).pipe(U(b=>new G(a.concat(b.segments),b.children)))}))):Ri(n)}))}getChildConfig(t,n,r){return n.children?A({routes:n.children,injector:t}):n.loadChildren?void 0!==n._loadedRoutes?A({routes:n._loadedRoutes,injector:n._loadedInjector}):function HO(e,t,n,r){const o=t.canLoad;return void 0===o||0===o.length?A(!0):A(o.map(s=>{const a=po(s,e);return Gn(function AO(e){return e&&Ni(e.canLoad)}(a)?a.canLoad(t,n):e.runInContext(()=>a(t,n)))})).pipe(go(),RD())}(t,n,r).pipe(Oe(o=>o?this.configLoader.loadChildren(t,n).pipe(ze(i=>{n._loadedRoutes=i.routes,n._loadedInjector=i.injector})):function ZO(e){return Hn(SD(Pa,3))}())):A({routes:[],injector:t})}lineralizeSegments(t,n){let r=[],o=n.root;for(;;){if(r=r.concat(o.segments),0===o.numberOfChildren)return A(r);if(o.numberOfChildren>1||!o.children[H])return Hn(new C(4e3,Pa));o=o.children[H]}}applyRedirectCommands(t,n,r){return this.applyRedirectCreateUrlTree(n,this.urlSerializer.parse(n),t,r)}applyRedirectCreateUrlTree(t,n,r,o){const i=this.createSegmentGroup(t,n.root,r,o);return new hr(i,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){const r={};return ke(t,(o,i)=>{if("string"==typeof o&&o.startsWith(":")){const a=o.substring(1);r[i]=n[a]}else r[i]=o}),r}createSegmentGroup(t,n,r,o){const i=this.createSegments(t,n.segments,r,o);let s={};return ke(n.children,(a,l)=>{s[l]=this.createSegmentGroup(t,a,r,o)}),new G(i,s)}createSegments(t,n,r,o){return n.map(i=>i.path.startsWith(":")?this.findPosParam(t,i,o):this.findOrReturn(i,r))}findPosParam(t,n,r){const o=r[n.path.substring(1)];if(!o)throw new C(4001,Pa);return o}findOrReturn(t,n){let r=0;for(const o of n){if(o.path===t.path)return n.splice(r),o;r++}return t}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class XO{}class nP{constructor(t,n,r,o,i,s,a,l){this.injector=t,this.rootComponentType=n,this.config=r,this.urlTree=o,this.url=i,this.paramsInheritanceStrategy=s,this.relativeLinkResolution=a,this.urlSerializer=l}recognize(){const t=Fa(this.urlTree.root,[],[],this.config.filter(n=>void 0===n.redirectTo),this.relativeLinkResolution).segmentGroup;return this.processSegmentGroup(this.injector,this.config,t,H).pipe(U(n=>{if(null===n)return null;const r=new Ta([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},H,this.rootComponentType,null,this.urlTree.root,-1,{}),o=new An(r,n),i=new wD(this.url,o);return this.inheritParamsAndData(i._root),i}))}inheritParamsAndData(t){const n=t.value,r=CD(n,this.paramsInheritanceStrategy);n.params=Object.freeze(r.params),n.data=Object.freeze(r.data),t.children.forEach(o=>this.inheritParamsAndData(o))}processSegmentGroup(t,n,r,o){return 0===r.segments.length&&r.hasChildren()?this.processChildren(t,n,r):this.processSegment(t,n,r,r.segments,o)}processChildren(t,n,r){return Ce(Object.keys(r.children)).pipe(Bn(o=>{const i=r.children[o],s=xD(n,o);return this.processSegmentGroup(t,s,i,o)}),Q_((o,i)=>o&&i?(o.push(...i),o):null),function wF(e,t=!1){return De((n,r)=>{let o=0;n.subscribe(ye(r,i=>{const s=e(i,o++);(s||t)&&r.next(i),!s&&r.complete()}))})}(o=>null!==o),Ca(null),Y_(),U(o=>{if(null===o)return null;const i=VD(o);return function rP(e){e.sort((t,n)=>t.value.outlet===H?-1:n.value.outlet===H?1:t.value.outlet.localeCompare(n.value.outlet))}(i),i}))}processSegment(t,n,r,o,i){return Ce(n).pipe(Bn(s=>{var a;return this.processSegmentAgainstRoute(null!==(a=s._injector)&&void 0!==a?a:t,s,r,o,i)}),Un(s=>!!s),zt(s=>{if(jd(s))return PD(r,o,i)?A([]):A(null);throw s}))}processSegmentAgainstRoute(t,n,r,o,i){if(n.redirectTo||!OD(n,r,o,i))return A(null);let s;if("**"===n.path){var a,l;const u=o.length>0?eD(o).parameters:{},c=jD(r)+o.length;s=A({snapshot:new Ta(o,u,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,HD(n),Tt(n),null!==(a=null!==(l=n.component)&&void 0!==l?l:n._loadedComponent)&&void 0!==a?a:null,n,$D(r),c,UD(n),c),consumedSegments:[],remainingSegments:[]})}else s=FD(r,n,o,t).pipe(U(({matched:u,consumedSegments:c,remainingSegments:d,parameters:f})=>{var h,p;if(!u)return null;const g=jD(r)+c.length;return{snapshot:new Ta(c,f,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,HD(n),Tt(n),null!==(h=null!==(p=n.component)&&void 0!==p?p:n._loadedComponent)&&void 0!==h?h:null,n,$D(r),g,UD(n),g),consumedSegments:c,remainingSegments:d}}));return s.pipe(nn(u=>{var c,d;if(null===u)return A(null);const{snapshot:f,consumedSegments:h,remainingSegments:p}=u;t=null!==(c=n._injector)&&void 0!==c?c:t;const g=null!==(d=n._loadedInjector)&&void 0!==d?d:t,v=function oP(e){return e.children?e.children:e.loadChildren?e._loadedRoutes:[]}(n),{segmentGroup:y,slicedSegments:w}=Fa(r,h,p,v.filter(b=>void 0===b.redirectTo),this.relativeLinkResolution);if(0===w.length&&y.hasChildren())return this.processChildren(g,v,y).pipe(U(b=>null===b?null:[new An(f,b)]));if(0===v.length&&0===w.length)return A([new An(f,[])]);const m=Tt(n)===i;return this.processSegment(g,v,y,w,m?H:i).pipe(U(b=>null===b?null:[new An(f,b)]))}))}}function iP(e){const t=e.value.routeConfig;return t&&""===t.path&&void 0===t.redirectTo}function VD(e){const t=[],n=new Set;for(const r of e){if(!iP(r)){t.push(r);continue}const o=t.find(i=>r.value.routeConfig===i.value.routeConfig);void 0!==o?(o.children.push(...r.children),n.add(o)):t.push(r)}for(const r of n){const o=VD(r.children);t.push(new An(r.value,o))}return t.filter(r=>!n.has(r))}function $D(e){let t=e;for(;t._sourceSegment;)t=t._sourceSegment;return t}function jD(e){var t;let n=e,r=null!==(t=n._segmentIndexShift)&&void 0!==t?t:0;for(;n._sourceSegment;){var o;n=n._sourceSegment,r+=null!==(o=n._segmentIndexShift)&&void 0!==o?o:0}return r-1}function HD(e){return e.data||{}}function UD(e){return e.resolve||{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function GD(e){return"string"==typeof e.title||null===e.title}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ud(e){return nn(t=>{const n=e(t);return n?Ce(n).pipe(U(()=>t)):A(t)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let zD=(()=>{class e{buildTitle(n){let r,o=n.root;for(;void 0!==o;){var i;r=null!==(i=this.getResolvedTitleForRoute(o))&&void 0!==i?i:r,o=o.children.find(s=>s.outlet===H)}return r}getResolvedTitleForRoute(n){return n.data[Di]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x({token:e,factory:function(){return ve(WD)},providedIn:"root"}),e})(),WD=(()=>{class e extends zD{constructor(n){super(),this.title=n}updateTitle(n){const r=this.buildTitle(n);void 0!==r&&this.title.setTitle(r)}}return e.\u0275fac=function(n){return new(n||e)(M(A_))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
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
class hP{}class gP extends class pP{shouldDetach(t){return!1}store(t,n){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,n){return t.routeConfig===n.routeConfig}}{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Va=new I("",{providedIn:"root",factory:()=>({})}),Gd=new I("ROUTES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let zd=(()=>{class e{constructor(n,r){this.injector=n,this.compiler=r,this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap}loadComponent(n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return A(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);const r=Gn(n.loadComponent()).pipe(ze(i=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=i}),wd(()=>{this.componentLoaders.delete(n)})),o=new K_(r,()=>new Ve).pipe(Dd());return this.componentLoaders.set(n,o),o}loadChildren(n,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return A({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);const i=this.loadModuleFactoryOrRoutes(r.loadChildren).pipe(U(a=>{this.onLoadEndListener&&this.onLoadEndListener(r);let l,u,c=!1;Array.isArray(a)?u=a:(l=a.create(n).injector,u=X_(l.get(Gd,[],N.Self|N.Optional)));return{routes:u.map($d),injector:l}}),wd(()=>{this.childrenLoaders.delete(r)})),s=new K_(i,()=>new Ve).pipe(Dd());return this.childrenLoaders.set(r,s),s}loadModuleFactoryOrRoutes(n){return Gn(n()).pipe(Oe(r=>r instanceof by||Array.isArray(r)?A(r):Ce(this.compiler.compileModuleAsync(r))))}}return e.\u0275fac=function(n){return new(n||e)(M(yt),M(Tc))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class yP{}class vP{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,n){return t}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _P(e){throw e}function DP(e,t,n){return t.parse("/")}const CP={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},wP={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function KD(){var e,t;const n=ve(sD),r=ve(Ii),o=ve(Gc),i=ve(yt),s=ve(Tc),a=null!==(e=ve(Gd,{optional:!0}))&&void 0!==e?e:[],l=null!==(t=ve(Va,{optional:!0}))&&void 0!==t?t:{},u=ve(WD),c=ve(zD,{optional:!0}),d=ve(yP,{optional:!0}),f=ve(hP,{optional:!0}),h=new Le(null,n,r,o,i,s,X_(a));return d&&(h.urlHandlingStrategy=d),f&&(h.routeReuseStrategy=f),h.titleStrategy=c??u,function EP(e,t){e.errorHandler&&(t.errorHandler=e.errorHandler),e.malformedUriErrorHandler&&(t.malformedUriErrorHandler=e.malformedUriErrorHandler),e.onSameUrlNavigation&&(t.onSameUrlNavigation=e.onSameUrlNavigation),e.paramsInheritanceStrategy&&(t.paramsInheritanceStrategy=e.paramsInheritanceStrategy),e.relativeLinkResolution&&(t.relativeLinkResolution=e.relativeLinkResolution),e.urlUpdateStrategy&&(t.urlUpdateStrategy=e.urlUpdateStrategy),e.canceledNavigationResolution&&(t.canceledNavigationResolution=e.canceledNavigationResolution)}(l,h),h}let Le=(()=>{class e{constructor(n,r,o,i,s,a,l){this.rootComponentType=n,this.urlSerializer=r,this.rootContexts=o,this.location=i,this.config=l,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new Ve,this.errorHandler=_P,this.malformedUriErrorHandler=DP,this.navigated=!1,this.lastSuccessfulId=-1,this.afterPreactivation=()=>A(void 0),this.urlHandlingStrategy=new vP,this.routeReuseStrategy=new gP,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.configLoader=s.get(zd),this.configLoader.onLoadEndListener=f=>this.triggerEvent(new oO(f)),this.configLoader.onLoadStartListener=f=>this.triggerEvent(new rO(f)),this.ngModule=s.get(cr),this.console=s.get(GT);const d=s.get(xe);this.isNgZoneEnabled=d instanceof xe&&xe.isInAngularZone(),this.resetConfig(l),this.currentUrlTree=function IF(){return new hr(new G([],{}),{},null)}(),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=DD(this.currentUrlTree,this.rootComponentType),this.transitions=new Gt({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){var n;return null===(n=this.location.getState())||void 0===n?void 0:n.\u0275routerPageId}setupNavigations(n){const r=this.events;return n.pipe(bn(o=>0!==o.id),U(o=>({...o,extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),nn(o=>{let i=!1,s=!1;return A(o).pipe(ze(a=>{this.currentNavigation={id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,trigger:a.source,extras:a.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),nn(a=>{const l=this.browserUrlTree.toString(),u=!this.navigated||a.extractedUrl.toString()!==l||l!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||u)&&this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return ZD(a.source)&&(this.browserUrlTree=a.extractedUrl),A(a).pipe(nn(d=>{const f=this.transitions.getValue();return r.next(new xd(d.id,this.serializeUrl(d.extractedUrl),d.source,d.restoredState)),f!==this.transitions.getValue()?an:Promise.resolve(d)}),function JO(e,t,n,r){return nn(o=>function QO(e,t,n,r,o){return new YO(e,t,n,r,o).apply()}(e,t,n,o.extractedUrl,r).pipe(U(i=>({...o,urlAfterRedirects:i}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),ze(d=>{this.currentNavigation={...this.currentNavigation,finalUrl:d.urlAfterRedirects},o.urlAfterRedirects=d.urlAfterRedirects}),function aP(e,t,n,r,o,i){return Oe(s=>function tP(e,t,n,r,o,i,s="emptyOnly",a="legacy"){return new nP(e,t,n,r,o,s,a,i).recognize().pipe(nn(l=>null===l?function eP(e){return new me(t=>t.error(e))}(new XO):A(l)))}(e,t,n,s.urlAfterRedirects,r.serialize(s.urlAfterRedirects),r,o,i).pipe(U(a=>({...s,targetSnapshot:a}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.rootComponentType,this.config,this.urlSerializer,this.paramsInheritanceStrategy,this.relativeLinkResolution),ze(d=>{if(o.targetSnapshot=d.targetSnapshot,"eager"===this.urlUpdateStrategy){if(!d.extras.skipLocationChange){const h=this.urlHandlingStrategy.merge(d.urlAfterRedirects,d.rawUrl);this.setBrowserUrl(h,d)}this.browserUrlTree=d.urlAfterRedirects}const f=new JF(d.id,this.serializeUrl(d.extractedUrl),this.serializeUrl(d.urlAfterRedirects),d.targetSnapshot);r.next(f)}));if(u&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:f,extractedUrl:h,source:p,restoredState:g,extras:v}=a,y=new xd(f,this.serializeUrl(h),p,g);r.next(y);const w=DD(h,this.rootComponentType).snapshot;return A(o={...a,targetSnapshot:w,urlAfterRedirects:h,extras:{...v,skipLocationChange:!1,replaceUrl:!1}})}return this.rawUrlTree=a.rawUrl,a.resolve(null),an}),ze(a=>{const l=new XF(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot);this.triggerEvent(l)}),U(a=>o={...a,guards:EO(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),function OO(e,t){return Oe(n=>{const{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return 0===s.length&&0===i.length?A({...n,guardsResult:!0}):function PO(e,t,n,r){return Ce(e).pipe(Oe(o=>function BO(e,t,n,r,o){const i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;return i&&0!==i.length?A(i.map(a=>{var l;const u=null!==(l=Ai(t))&&void 0!==l?l:o,c=po(a,u);return Gn(function NO(e){return e&&Ni(e.canDeactivate)}(c)?c.canDeactivate(e,t,n,r):u.runInContext(()=>c(e,t,n,r))).pipe(Un())})).pipe(go()):A(!0)}(o.component,o.route,n,t,r)),Un(o=>!0!==o,!0))}(s,r,o,e).pipe(Oe(a=>a&&function IO(e){return"boolean"==typeof e}(a)?function kO(e,t,n,r){return Ce(t).pipe(Bn(o=>_d(function VO(e,t){return null!==e&&t&&t(new iO(e)),A(!0)}(o.route.parent,r),function LO(e,t){return null!==e&&t&&t(new aO(e)),A(!0)}(o.route,r),function jO(e,t,n){const r=t[t.length-1],i=t.slice(0,t.length-1).reverse().map(s=>function bO(e){const t=e.routeConfig?e.routeConfig.canActivateChild:null;return t&&0!==t.length?{node:e,guards:t}:null}(s)).filter(s=>null!==s).map(s=>q_(()=>A(s.guards.map(l=>{var u;const c=null!==(u=Ai(s.node))&&void 0!==u?u:n,d=po(l,c);return Gn(function xO(e){return e&&Ni(e.canActivateChild)}(d)?d.canActivateChild(r,e):c.runInContext(()=>d(r,e))).pipe(Un())})).pipe(go())));return A(i).pipe(go())}(e,o.path,n),function $O(e,t,n){const r=t.routeConfig?t.routeConfig.canActivate:null;if(!r||0===r.length)return A(!0);const o=r.map(i=>q_(()=>{var s;const a=null!==(s=Ai(t))&&void 0!==s?s:n,l=po(i,a);return Gn(function TO(e){return e&&Ni(e.canActivate)}(l)?l.canActivate(t,e):a.runInContext(()=>l(t,e))).pipe(Un())}));return A(o).pipe(go())}(e,o.route,n))),Un(o=>!0!==o,!0))}(r,i,e,t):A(a)),U(a=>({...n,guardsResult:a})))})}(this.ngModule.injector,a=>this.triggerEvent(a)),ze(a=>{if(o.guardsResult=a.guardsResult,gr(a.guardsResult))throw bD(0,a.guardsResult);const l=new eO(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);this.triggerEvent(l)}),bn(a=>!!a.guardsResult||(this.restoreHistory(a),this.cancelNavigationTransition(a,"",3),!1)),Ud(a=>{if(a.guards.canActivateChecks.length)return A(a).pipe(ze(l=>{const u=new tO(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(l.urlAfterRedirects),l.targetSnapshot);this.triggerEvent(u)}),nn(l=>{let u=!1;return A(l).pipe(function lP(e,t){return Oe(n=>{const{targetSnapshot:r,guards:{canActivateChecks:o}}=n;if(!o.length)return A(n);let i=0;return Ce(o).pipe(Bn(s=>function uP(e,t,n,r){const o=e.routeConfig,i=e._resolve;return void 0!==o?.title&&!GD(o)&&(i[Di]=o.title),function cP(e,t,n,r){const o=function dP(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}(e);if(0===o.length)return A({});const i={};return Ce(o).pipe(Oe(s=>function fP(e,t,n,r){var o;const i=null!==(o=Ai(t))&&void 0!==o?o:r,s=po(e,i);return Gn(s.resolve?s.resolve(t,n):i.runInContext(()=>s(t,n)))}(e[s],t,n,r).pipe(Un(),ze(a=>{i[s]=a}))),Cd(1),function EF(e){return U(()=>e)}(i),zt(s=>jd(s)?an:Hn(s)))}(i,e,t,r).pipe(U(s=>(e._resolvedData=s,e.data=CD(e,n).resolve,o&&GD(o)&&(e.data[Di]=o.title),null)))}(s.route,r,e,t)),ze(()=>i++),Cd(1),Oe(s=>i===o.length?A(n):an))})}(this.paramsInheritanceStrategy,this.ngModule.injector),ze({next:()=>u=!0,complete:()=>{u||(this.restoreHistory(l),this.cancelNavigationTransition(l,"",2))}}))}),ze(l=>{const u=new nO(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(l.urlAfterRedirects),l.targetSnapshot);this.triggerEvent(u)}))}),Ud(a=>{const l=u=>{var c;const d=[];null!==(c=u.routeConfig)&&void 0!==c&&c.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(ze(f=>{u.component=f}),U(()=>{})));for(const f of u.children)d.push(...l(f));return d};return z_(l(a.targetSnapshot.root)).pipe(Ca(),_i(1))}),Ud(()=>this.afterPreactivation()),U(a=>{const l=function fO(e,t,n){const r=Mi(e,t._root,n?n._root:void 0);return new _D(r,t)}(this.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return o={...a,targetRouterState:l}}),ze(a=>{this.currentUrlTree=a.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(a.urlAfterRedirects,a.rawUrl),this.routerState=a.targetRouterState,"deferred"===this.urlUpdateStrategy&&(a.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,a),this.browserUrlTree=a.urlAfterRedirects)}),((e,t,n)=>U(r=>(new wO(t,r.targetRouterState,r.currentRouterState,n).activate(e),r)))(this.rootContexts,this.routeReuseStrategy,a=>this.triggerEvent(a)),ze({next(){i=!0},complete(){i=!0}}),wd(()=>{var a;i||s||this.cancelNavigationTransition(o,"",1),(null===(a=this.currentNavigation)||void 0===a?void 0:a.id)===o.id&&(this.currentNavigation=null)}),zt(a=>{if(s=!0,ID(a)){MD(a)||(this.navigated=!0,this.restoreHistory(o,!0));const u=new Aa(o.id,this.serializeUrl(o.extractedUrl),a.message,a.cancellationCode);if(r.next(u),MD(a)){const c=this.urlHandlingStrategy.merge(a.url,this.rawUrlTree),d={skipLocationChange:o.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||ZD(o.source)};this.scheduleNavigation(c,"imperative",null,d,{resolve:o.resolve,reject:o.reject,promise:o.promise})}else o.resolve(!1)}else{var l;this.restoreHistory(o,!0);const u=new mD(o.id,this.serializeUrl(o.extractedUrl),a,null!==(l=o.targetSnapshot)&&void 0!==l?l:void 0);r.next(u);try{o.resolve(this.errorHandler(a))}catch(c){o.reject(c)}}return an}))}))}resetRootComponentType(n){this.rootComponentType=n,this.routerState.root.component=this.rootComponentType}setTransition(n){this.transitions.next({...this.transitions.value,...n})}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(n=>{const r="popstate"===n.type?"popstate":"hashchange";"popstate"===r&&setTimeout(()=>{var o;const i={replaceUrl:!0},s=null!==(o=n.state)&&void 0!==o&&o.navigationId?n.state:null;if(s){const l={...s};delete l.navigationId,delete l.\u0275routerPageId,0!==Object.keys(l).length&&(i.state=l)}const a=this.parseUrl(n.url);this.scheduleNavigation(a,r,s,i)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(n){this.events.next(n)}resetConfig(n){this.config=n.map($d),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(n,r={}){const{relativeTo:o,queryParams:i,fragment:s,queryParamsHandling:a,preserveFragment:l}=r,u=o||this.routerState.root,c=l?this.currentUrlTree.fragment:s;let d=null;switch(a){case"merge":d={...this.currentUrlTree.queryParams,...i};break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=i||null}return null!==d&&(d=this.removeEmptyProps(d)),WF(u,this.currentUrlTree,n,d,c??null)}navigateByUrl(n,r={skipLocationChange:!1}){const o=gr(n)?n:this.parseUrl(n),i=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(i,"imperative",null,r)}navigate(n,r={skipLocationChange:!1}){return function bP(e){for(let t=0;t<e.length;t++){if(null==e[t])throw new C(4008,false)}}(n),this.navigateByUrl(this.createUrlTree(n,r),r)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){let r;try{r=this.urlSerializer.parse(n)}catch(o){r=this.malformedUriErrorHandler(o,this.urlSerializer,n)}return r}isActive(n,r){let o;if(o=!0===r?{...CP}:!1===r?{...wP}:r,gr(n))return nD(this.currentUrlTree,n,o);const i=this.parseUrl(n);return nD(this.currentUrlTree,i,o)}removeEmptyProps(n){return Object.keys(n).reduce((r,o)=>{const i=n[o];return null!=i&&(r[o]=i),r},{})}processNavigations(){this.navigations.subscribe(n=>{var r;this.navigated=!0,this.lastSuccessfulId=n.id,this.currentPageId=n.targetPageId,this.events.next(new mr(n.id,this.serializeUrl(n.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,null===(r=this.titleStrategy)||void 0===r||r.updateTitle(this.routerState.snapshot),n.resolve(!0)},n=>{this.console.warn(`Unhandled Navigation Error: ${n}`)})}scheduleNavigation(n,r,o,i,s){if(this.disposed)return Promise.resolve(!1);let a,l,u;s?(a=s.resolve,l=s.reject,u=s.promise):u=new Promise((p,g)=>{a=p,l=g});const c=++this.navigationId;let d;if("computed"===this.canceledNavigationResolution)if(0===this.currentPageId&&(o=this.location.getState()),o&&o.\u0275routerPageId)d=o.\u0275routerPageId;else if(i.replaceUrl||i.skipLocationChange){var f;d=null!==(f=this.browserPageId)&&void 0!==f?f:0}else{var h;d=(null!==(h=this.browserPageId)&&void 0!==h?h:0)+1}else d=0;return this.setTransition({id:c,targetPageId:d,source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:n,extras:i,resolve:a,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(p=>Promise.reject(p))}setBrowserUrl(n,r){const o=this.urlSerializer.serialize(n),i={...r.extras.state,...this.generateNgRouterState(r.id,r.targetPageId)};this.location.isCurrentPathEqualTo(o)||r.extras.replaceUrl?this.location.replaceState(o,"",i):this.location.go(o,"",i)}restoreHistory(n,r=!1){if("computed"===this.canceledNavigationResolution){var o,i;const s=this.currentPageId-n.targetPageId;"popstate"!==n.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==(null===(o=this.currentNavigation)||void 0===o?void 0:o.finalUrl)||0===s?this.currentUrlTree===(null===(i=this.currentNavigation)||void 0===i?void 0:i.finalUrl)&&0===s&&(this.resetState(n),this.browserUrlTree=n.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(s)}else"replace"===this.canceledNavigationResolution&&(r&&this.resetState(n),this.resetUrlToCurrentUrlTree())}resetState(n){this.routerState=n.currentRouterState,this.currentUrlTree=n.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(n,r,o){const i=new Aa(n.id,this.serializeUrl(n.extractedUrl),r,o);this.triggerEvent(i),n.resolve(!1)}generateNgRouterState(n,r){return"computed"===this.canceledNavigationResolution?{navigationId:n,\u0275routerPageId:r}:{navigationId:n}}}return e.\u0275fac=function(n){Au()},e.\u0275prov=x({token:e,factory:function(){return KD()},providedIn:"root"}),e})();function ZD(e){return"imperative"!==e}
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
class QD{}let IP=(()=>{class e{constructor(n,r,o,i,s){this.router=n,this.injector=o,this.preloadingStrategy=i,this.loader=s}setUpPreloading(){this.subscription=this.router.events.pipe(bn(n=>n instanceof mr),Bn(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(n,r){const o=[];for(const l of r){var i,s;l.providers&&!l._injector&&(l._injector=Bs(l.providers,n,`Route: ${l.path}`));const u=null!==(i=l._injector)&&void 0!==i?i:n,c=null!==(s=l._loadedInjector)&&void 0!==s?s:u;if(l.loadChildren&&!l._loadedRoutes&&void 0===l.canLoad||l.loadComponent&&!l._loadedComponent)o.push(this.preloadConfig(u,l));else if(l.children||l._loadedRoutes){var a;o.push(this.processRoutes(c,null!==(a=l.children)&&void 0!==a?a:l._loadedRoutes))}}return Ce(o).pipe(wr())}preloadConfig(n,r){return this.preloadingStrategy.preload(r,()=>{let o;o=r.loadChildren&&void 0===r.canLoad?this.loader.loadChildren(n,r):A(null);const i=o.pipe(Oe(s=>{var a;return null===s?A(void 0):(r._loadedRoutes=s.routes,r._loadedInjector=s.injector,this.processRoutes(null!==(a=s.injector)&&void 0!==a?a:n,s.routes))}));return r.loadComponent&&!r._loadedComponent?Ce([i,this.loader.loadComponent(r)]).pipe(wr()):i})}}return e.\u0275fac=function(n){return new(n||e)(M(Le),M(Tc),M(kn),M(QD),M(zd))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Kd=new I("");let YD=(()=>{class e{constructor(n,r,o={}){this.router=n,this.viewportScroller=r,this.options=o,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},o.scrollPositionRestoration=o.scrollPositionRestoration||"disabled",o.anchorScrolling=o.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(n=>{n instanceof xd?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=n.navigationTrigger,this.restoredId=n.restoredState?n.restoredState.navigationId:0):n instanceof mr&&(this.lastId=n.id,this.scheduleScrollEvent(n,this.router.parseUrl(n.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(n=>{n instanceof yD&&(n.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(n.position):n.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(n.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(n,r){this.router.triggerEvent(new yD(n,"popstate"===this.lastSource?this.store[this.restoredId]:null,r))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return e.\u0275fac=function(n){Au()},e.\u0275prov=x({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function mo(e,t){return{\u0275kind:e,\u0275providers:t}}function Zd(e){return[{provide:Gd,multi:!0,useValue:e}]}function XD(){const e=ve(yt);return t=>{var n,r;const o=e.get(Ks);if(t!==o.components[0])return;const i=e.get(Le),s=e.get(eC);1===e.get(Qd)&&i.initialNavigation(),null===(n=e.get(tC,null,N.Optional))||void 0===n||n.setUpPreloading(),null===(r=e.get(Kd,null,N.Optional))||void 0===r||r.init(),i.resetRootComponentType(o.componentTypes[0]),s.next(),s.complete()}}const eC=new I("",{factory:()=>new Ve}),Qd=new I("",{providedIn:"root",factory:()=>1});const tC=new I("");function NP(e){return mo(0,[{provide:tC,useExisting:IP},{provide:QD,useExisting:e}])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const nC=new I("ROUTER_FORROOT_GUARD"),RP=[Gc,{provide:sD,useClass:bd},{provide:Le,useFactory:KD},Ii,{provide:yr,useFactory:function JD(e){return e.routerState.root},deps:[Le]},zd];function FP(){return new _v("Router",Le)}let rC=(()=>{class e{constructor(n){}static forRoot(n,r){return{ngModule:e,providers:[RP,[],Zd(n),{provide:nC,useFactory:LP,deps:[[Le,new Vo,new $o]]},{provide:Va,useValue:r||{}},null!=r&&r.useHash?{provide:fr,useClass:Rx}:{provide:fr,useClass:Gv},{provide:Kd,useFactory:()=>{const e=ve(Le),t=ve(JN),n=ve(Va);return n.scrollOffset&&t.setOffset(n.scrollOffset),new YD(e,t,n)}},null!=r&&r.preloadingStrategy?NP(r.preloadingStrategy).\u0275providers:[],{provide:_v,multi:!0,useFactory:FP},null!=r&&r.initialNavigation?VP(r):[],[{provide:oC,useFactory:XD},{provide:fv,multi:!0,useExisting:oC}]]}}static forChild(n){return{ngModule:e,providers:[Zd(n)]}}}return e.\u0275fac=function(n){return new(n||e)(M(nC,8))},e.\u0275mod=Ct({type:e}),e.\u0275inj=ct({imports:[Ld]}),e})();function LP(e){return"guarded"}function VP(e){return["disabled"===e.initialNavigation?mo(3,[{provide:zs,multi:!0,useFactory:()=>{const t=ve(Le);return()=>{t.setUpLocationChangeListener()}}},{provide:Qd,useValue:2}]).\u0275providers:[],"enabledBlocking"===e.initialNavigation?mo(2,[{provide:Qd,useValue:0},{provide:zs,multi:!0,deps:[yt],useFactory:t=>{const n=t.get(xx,Promise.resolve());let r=!1;return()=>n.then(()=>new Promise(i=>{const s=t.get(Le),a=t.get(eC);(function o(i){t.get(Le).events.pipe(bn(a=>a instanceof mr||a instanceof Aa||a instanceof mD),U(a=>a instanceof mr||a instanceof Aa&&(0===a.code||1===a.code)&&null),bn(a=>null!==a),_i(1)).subscribe(()=>{i()})})(()=>{i(!0),r=!0}),s.afterPreactivation=()=>(i(!0),r||a.closed?A(void 0):a),s.initialNavigation()}))}}]).\u0275providers:[]]}const oC=new I(""),jP=[];let BP=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Ct({type:e}),e.\u0275inj=ct({imports:[rC.forRoot(jP),rC]}),e})(),iC=(()=>{class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}}return e.\u0275fac=function(n){return new(n||e)(D(pn),D(mt))},e.\u0275dir=O({type:e}),e})(),vr=(()=>{class e extends iC{}return e.\u0275fac=function(){let t;return function(r){return(t||(t=function Be(e){return xn(()=>{const t=e.prototype.constructor,n=t[un]||Pl(t),r=Object.prototype;let o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){const i=o[un]||Pl(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}(e)))(r||e)}}(),e.\u0275dir=O({type:e,features:[Y]}),e})();const on=new I("NgValueAccessor"),GP={provide:on,useExisting:re(()=>Ha),multi:!0},WP=new I("CompositionEventMode");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ha=(()=>{class e extends iC{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function zP(){const e=tn()?tn().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(n){this.setProperty("value",n??"")}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}}return e.\u0275fac=function(n){return new(n||e)(D(pn),D(mt),D(WP,8))},e.\u0275dir=O({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){1&n&&_t("input",function(i){return r._handleInput(i.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(i){return r._compositionEnd(i.target.value)})},features:[le([GP]),Y]}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const We=new I("NgValidators"),Wn=new I("NgAsyncValidators");function mC(e){return null!=e}function yC(e){return ti(e)?Ce(e):e}function vC(e){let t={};return e.forEach(n=>{t=null!=n?{...t,...n}:t}),0===Object.keys(t).length?null:t}function _C(e,t){return t.map(n=>n(e))}function DC(e){return e.map(t=>function ZP(e){return!e.validate}(t)?t:n=>t.validate(n))}function Yd(e){return null!=e?function CC(e){if(!e)return null;const t=e.filter(mC);return 0==t.length?null:function(n){return vC(_C(n,t))}}(DC(e)):null}function Jd(e){return null!=e?function wC(e){if(!e)return null;const t=e.filter(mC);return 0==t.length?null:function(n){return function HP(...e){const t=Jf(e),{args:n,keys:r}=H_(e),o=new me(i=>{const{length:s}=n;if(!s)return void i.complete();const a=new Array(s);let l=s,u=s;for(let c=0;c<s;c++){let d=!1;xt(n[c]).subscribe(ye(i,f=>{d||(d=!0,u--),a[c]=f},()=>l--,void 0,()=>{(!l||!d)&&(u||i.next(r?G_(r,a):a),i.complete())}))}});return t?o.pipe(U_(t)):o}
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
       */(_C(n,t).map(yC)).pipe(U(vC))}}(DC(e)):null}function EC(e,t){return null===e?[t]:Array.isArray(e)?[...e,t]:[e,t]}function bC(e){return e._rawValidators}function SC(e){return e._rawAsyncValidators}function Xd(e){return e?Array.isArray(e)?e:[e]:[]}function Ga(e,t){return Array.isArray(e)?e.includes(t):e===t}function MC(e,t){const n=Xd(t);return Xd(e).forEach(o=>{Ga(n,o)||n.push(o)}),n}function IC(e,t){return Xd(t).filter(n=>!Ga(e,n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class AC{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Yd(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Jd(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,n){return!!this.control&&this.control.hasError(t,n)}getError(t,n){return this.control?this.control.getError(t,n):null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class nt extends AC{get formDirective(){return null}get path(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class qn extends AC{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class TC{constructor(t){this._cd=t}get isTouched(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.touched)}get isUntouched(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.untouched)}get isPristine(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.pristine)}get isDirty(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.dirty)}get isValid(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.valid)}get isInvalid(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.invalid)}get isPending(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.pending)}get isSubmitted(){var t;return!(null===(t=this._cd)||void 0===t||!t.submitted)}}let xC=(()=>{class e extends TC{constructor(n){super(n)}}return e.\u0275fac=function(n){return new(n||e)(D(qn,2))},e.\u0275dir=O({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){2&n&&Ps("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[Y]}),e})(),NC=(()=>{class e extends TC{constructor(n){super(n)}}return e.\u0275fac=function(n){return new(n||e)(D(nt,10))},e.\u0275dir=O({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){2&n&&Ps("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[Y]}),e})();
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
const Fi="VALID",Wa="INVALID",yo="PENDING",Oi="DISABLED";function FC(e){return Array.isArray(e)?Yd(e):e||null}function OC(e){return Array.isArray(e)?Jd(e):e||null}function qa(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}function Pi(e,t){var n,r;(function lf(e,t){const n=bC(e);null!==t.validator?e.setValidators(EC(n,t.validator)):"function"==typeof n&&e.setValidators([n]);const r=SC(e);null!==t.asyncValidator?e.setAsyncValidators(EC(r,t.asyncValidator)):"function"==typeof r&&e.setAsyncValidators([r]);const o=()=>e.updateValueAndValidity();Qa(t._rawValidators,o),Qa(t._rawAsyncValidators,o)})(e,t),t.valueAccessor.writeValue(e.value),e.disabled&&(null===(n=(r=t.valueAccessor).setDisabledState)||void 0===n||n.call(r,!0)),function o1(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&VC(e,t)})}(e,t),function s1(e,t){const n=(r,o)=>{t.valueAccessor.writeValue(r),o&&t.viewToModelUpdate(r)};e.registerOnChange(n),t._registerOnDestroy(()=>{e._unregisterOnChange(n)})}(e,t),function i1(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&VC(e,t),"submit"!==e.updateOn&&e.markAsTouched()})}(e,t),function r1(e,t){if(t.valueAccessor.setDisabledState){const n=r=>{t.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(n),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(n)})}}(e,t)}function Za(e,t,n=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),function Ya(e,t){let n=!1;if(null!==e){if(null!==t.validator){const o=bC(e);if(Array.isArray(o)&&o.length>0){const i=o.filter(s=>s!==t.validator);i.length!==o.length&&(n=!0,e.setValidators(i))}}if(null!==t.asyncValidator){const o=SC(e);if(Array.isArray(o)&&o.length>0){const i=o.filter(s=>s!==t.asyncValidator);i.length!==o.length&&(n=!0,e.setAsyncValidators(i))}}}const r=()=>{};return Qa(t._rawValidators,r),Qa(t._rawAsyncValidators,r),n}(e,t),e&&(t._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function Qa(e,t){e.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(t)})}function VC(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function HC(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function UC(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}let KC=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=O({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),e})(),QC=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Ct({type:e}),e.\u0275inj=ct({}),e})();
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
const hf=new I("NgModelWithFormControlWarning"),_1={provide:qn,useExisting:re(()=>pf)};let pf=(()=>{class e extends qn{constructor(n,r,o,i){super(),this._ngModelWarningConfig=i,this.update=new ge,this._ngModelWarningSent=!1,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=function cf(e,t){if(!t)return null;let n,r,o;return Array.isArray(t),t.forEach(i=>{i.constructor===Ha?n=i:function u1(e){return Object.getPrototypeOf(e.constructor)===vr}(i)?r=i:o=i}),o||r||n||null}(0,o)}set isDisabled(n){}ngOnChanges(n){if(this._isControlChanged(n)){const r=n.form.previousValue;r&&Za(r,this,!1),Pi(this.form,this),this.form.updateValueAndValidity({emitEvent:!1})}(function uf(e,t){if(!e.hasOwnProperty("model"))return!1;const n=e.model;return!!n.isFirstChange()||!Object.is(t,n.currentValue)})(n,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Za(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_isControlChanged(n){return n.hasOwnProperty("form")}}return e._ngModelWarningSentOnce=!1,e.\u0275fac=function(n){return new(n||e)(D(We,10),D(Wn,10),D(on,10),D(hf,8))},e.\u0275dir=O({type:e,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[le([_1]),Y,Et]}),e})(),V1=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Ct({type:e}),e.\u0275inj=ct({imports:[QC]}),e})(),$1=(()=>{class e{static withConfig(n){return{ngModule:e,providers:[{provide:hf,useValue:n.warnOnNgModelWithFormControl}]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Ct({type:e}),e.\u0275inj=ct({imports:[V1]}),e})();
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
class B1 extends at{constructor(t,n){super()}schedule(t,n=0){return this}}const Ja={setInterval(e,t,...n){const{delegate:r}=Ja;return r?.setInterval?r.setInterval(e,t,...n):setInterval(e,t,...n)},clearInterval(e){const{delegate:t}=Ja;return(t?.clearInterval||clearInterval)(e)},delegate:void 0},fw={now:()=>(fw.delegate||Date).now(),delegate:void 0};class Li{constructor(t,n=Li.now){this.schedulerActionCtor=t,this.now=n}schedule(t,n=0,r){return new this.schedulerActionCtor(this,t).schedule(r,n)}}Li.now=fw.now;const G1=new class U1 extends Li{constructor(t,n=Li.now){super(t,n),this.actions=[],this._active=!1}flush(t){const{actions:n}=this;if(this._active)return void n.push(t);let r;this._active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=n.shift());if(this._active=!1,r){for(;t=n.shift();)t.unsubscribe();throw r}}}(class H1 extends B1{constructor(t,n){super(t,n),this.scheduler=t,this.work=n,this.pending=!1}schedule(t,n=0){var r;if(this.closed)return this;this.state=t;const o=this.id,i=this.scheduler;return null!=o&&(this.id=this.recycleAsyncId(i,o,n)),this.pending=!0,this.delay=n,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(i,this.id,n),this}requestAsyncId(t,n,r=0){return Ja.setInterval(t.flush.bind(t,this),r)}recycleAsyncId(t,n,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return n;null!=n&&Ja.clearInterval(n)}execute(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(t,n);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,n){let o,r=!1;try{this.work(t)}catch(i){r=!0,o=i||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:t,scheduler:n}=this,{actions:r}=n;this.work=this.state=this.scheduler=null,this.pending=!1,Cr(r,this),null!=t&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null,super.unsubscribe()}}});function q1(e,t){return e===t}let hw=(()=>{class e{constructor(n){this.http=n,this.query="",this.college="",this.programType="",this.resultsSource=new Ve,this.querySource=new Ve,this.collegeSource=new Ve,this.programTypeSource=new Ve,this.results$=this.resultsSource.asObservable(),this.query$=this.querySource.asObservable(),this.college$=this.collegeSource.asObservable(),this.programType$=this.programTypeSource.asObservable(),this.searchUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/degrees",this.subscription=this.query$.subscribe(r=>{this.query=r,this.getResults()}),this.subscription=this.college$.subscribe(r=>{this.college=r,this.getResults()}),this.subscription=this.programType$.subscribe(r=>{this.programType=r,this.getResults()})}setQuery(n){this.querySource.next(n)}getResults(){const n=this.query?{params:(new Mn).set("search",this.query).set("page","1").set("program_types",this.programType).set("colleges",this.college).set("limit","25")}:{};this.http.get(this.searchUrl,n).pipe(zt(this.handleError)).subscribe(r=>{this.resultsSource.next(r)})}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),Hn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(M(_a))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),K1=(()=>{class e{constructor(n){this.searchService=n}ngOnInit(){this.searchField=new class extends class LC{constructor(t,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=n,this._composedValidatorFn=FC(this._rawValidators),this._composedAsyncValidatorFn=OC(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===Fi}get invalid(){return this.status===Wa}get pending(){return this.status==yo}get disabled(){return this.status===Oi}get enabled(){return this.status!==Oi}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=FC(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=OC(t)}addValidators(t){this.setValidators(MC(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(MC(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(IC(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(IC(t,this._rawAsyncValidators))}hasValidator(t){return Ga(this._rawValidators,t)}hasAsyncValidator(t){return Ga(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=yo,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const n=this._parentMarkedDirty(t.onlySelf);this.status=Oi,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:n}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const n=this._parentMarkedDirty(t.onlySelf);this.status=Fi,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:n}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Fi||this.status===yo)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Oi:Fi}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=yo,this._hasOwnPendingAsyncValidator=!0;const n=yC(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,n={}){this.errors=t,this._updateControlsErrors(!1!==n.emitEvent)}get(t){let n=t;return null==n||(Array.isArray(n)||(n=n.split(".")),0===n.length)?null:n.reduce((r,o)=>r&&r._find(o),this)}getError(t,n){const r=n?this.get(n):this;return r&&r.errors?r.errors[t]:null}hasError(t,n){return!!this.getError(t,n)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new ge,this.statusChanges=new ge}_calculateStatus(){return this._allControlsDisabled()?Oi:this.errors?Wa:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(yo)?yo:this._anyControlsHaveStatus(Wa)?Wa:Fi}_anyControlsHaveStatus(t){return this._anyControls(n=>n.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){qa(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */{constructor(t=null,n,r){super(function rf(e){return(qa(e)?e.validators:e)||null}(n),function sf(e,t){return(qa(t)?t.asyncValidators:e)||null}(r,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),qa(n)&&(n.nonNullable||n.initialValueIsDefault)&&(this.defaultValue=UC(t)?t.value:t)}setValue(t,n={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==n.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==n.emitViewToModelChange)),this.updateValueAndValidity(n)}patchValue(t,n={}){this.setValue(t,n)}reset(t=this.defaultValue,n={}){this._applyFormState(t),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){HC(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){HC(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){UC(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}},this.searchField.valueChanges.pipe(function z1(e,t=G1){return De((n,r)=>{let o=null,i=null,s=null;const a=()=>{if(o){o.unsubscribe(),o=null;const u=i;i=null,r.next(u)}};function l(){const u=s+e,c=t.now();if(c<u)return o=this.schedule(void 0,u-c),void r.add(o);a()}n.subscribe(ye(r,u=>{i=u,s=t.now(),o||(o=t.schedule(l,e),r.add(o))},()=>{a(),r.complete()},void 0,()=>{i=o=null}))})}(600),function W1(e,t=Tn){return e=e??q1,De((n,r)=>{let o,i=!0;n.subscribe(ye(r,s=>{const a=t(s);(i||!e(o,a))&&(i=!1,o=a,r.next(s))}))})}()).subscribe(n=>{n&&n.length>2&&this.searchService.setQuery(n)})}}return e.\u0275fac=function(n){return new(n||e)(D(hw))},e.\u0275cmp=Nn({type:e,selectors:[["app-search-form"]],decls:7,vars:1,consts:[[1,"jumbotron","jumbotron-fluid","bg-primary","py-3"],[1,"container"],["id","degree-search-form","role","search","placeholder","Search for a degree..."],[1,"search-form-inner"],["for","degree-search-query",1,"sr-only"],["id","degree-search-query","name","degree-search-query","type","search","autocomplete","off","placeholder","Search for a degree...",1,"form-control",3,"formControl"]],template:function(n,r){1&n&&(ae(0,"div",0)(1,"div",1)(2,"form",2)(3,"div",3)(4,"label",4),Fe(5,"Search Degrees"),te(),Lt(6,"input",5),te()()()()),2&n&&(ce(6),Pe("formControl",r.searchField))},dependencies:[KC,Ha,xC,NC,pf]}),e})();function Z1(e,t){if(1&e&&(ae(0,"p",2),Fe(1),te()),2&e){const n=lr();ce(1),rc(" Showing ",n.results.startIndex," through ",n.results.endIndex," of ",n.results.totalPosts," results in [TODO list filters] at UCF.\n")}}function Q1(e,t){1&e&&(ae(0,"p"),Fe(1,"No degrees found."),te())}function Y1(e,t){if(1&e&&(sr(0),Fe(1),ar()),2&e){const n=t.$implicit;ce(1),en(" ",n.name," ")}}function J1(e,t){if(1&e&&(ae(0,"li",10)(1,"a",11),Fe(2),te()()),2&e){const n=t.$implicit;ce(1),Os("href",n.url,Go),ce(1),en(" ",n.nameShort," ")}}function X1(e,t){if(1&e&&(ae(0,"ul",5),Je(1,J1,3,2,"li",9),te()),2&e){const n=lr().$implicit;ce(1),Pe("ngForOf",n.subplans)}}function ek(e,t){if(1&e&&(ae(0,"li",7)(1,"a",8),Fe(2),te(),Je(3,Y1,2,1,"ng-container",3),Je(4,X1,2,1,"ul",4),te()),2&e){const n=t.$implicit;ce(1),Os("href",n.url,Go),ce(1),en(" ",n.title," "),ce(1),Pe("ngForOf",n.colleges),ce(1),Pe("ngIf",n.subplans)}}function tk(e,t){if(1&e&&(ae(0,"ul",5),Je(1,ek,5,4,"li",6),te()),2&e){const n=lr().$implicit;ce(1),Pe("ngForOf",n.degrees)}}function nk(e,t){if(1&e&&(sr(0),ae(1,"h2"),Fe(2),ae(3,"span"),Fe(4,"[TODO Add at the College of...]"),te()(),Je(5,tk,2,1,"ul",4),ar()),2&e){const n=t.$implicit;ce(2),en("",n.alias,"s "),ce(3),Pe("ngIf",n.degrees)}}function rk(e,t){if(1&e&&(ae(0,"div"),Je(1,nk,6,2,"ng-container",3),te()),2&e){const n=lr();ce(1),Pe("ngForOf",n.results.types)}}let ok=(()=>{class e{constructor(n){this.searchService=n,this.subscription=this.searchService.results$.subscribe(r=>{this.results=r})}ngOnInit(){this.searchService.getResults()}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(D(hw))},e.\u0275cmp=Nn({type:e,selectors:[["app-search-results"]],decls:3,vars:3,consts:[["class","text-muted my-3 ng-binding ng-scope","aria-live","polite",4,"ngIf"],[4,"ngIf"],["aria-live","polite",1,"text-muted","my-3","ng-binding","ng-scope"],[4,"ngFor","ngForOf"],["class","list-unstyled",4,"ngIf"],[1,"list-unstyled"],["class","py-3",4,"ngFor","ngForOf"],[1,"py-3"],[1,"d-block","h5","font-weight-normal",3,"href"],["class","pt-2",4,"ngFor","ngForOf"],[1,"pt-2"],[1,"d-block","h6","font-weight-normal",3,"href"]],template:function(n,r){1&n&&(Je(0,Z1,2,3,"p",0),Je(1,Q1,2,0,"p",1),Je(2,rk,2,1,"div",1)),2&n&&(Pe("ngIf",r.results&&r.results.endIndex>0),ce(1),Pe("ngIf",r.results&&0===r.results.endIndex),ce(1),Pe("ngIf",r.results))},dependencies:[ca,da]}),e})(),ik=(()=>{class e{constructor(n){this.http=n,this.collegesUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/colleges",this.collegesSource=new Ve,this.colleges$=this.collegesSource.asObservable()}getColleges(){this.http.get(this.collegesUrl).pipe(zt(this.handleError)).subscribe(n=>{this.collegesSource.next(n)})}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),Hn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(M(_a))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function sk(e,t){if(1&e&&(sr(0),ae(1,"li",2)(2,"a",3),Fe(3),te()(),ar()),2&e){const n=t.$implicit;ce(3),en(" ",n.name," ")}}function ak(e,t){if(1&e&&(ae(0,"div")(1,"ul",1)(2,"li",2)(3,"a",3),Fe(4,"View All"),te()(),Je(5,sk,4,1,"ng-container",4),te()()),2&e){const n=lr();ce(5),Pe("ngForOf",n.colleges)}}let lk=(()=>{class e{constructor(n){this.collegeService=n,this.subscription=this.collegeService.colleges$.subscribe(r=>{this.colleges=r})}ngOnInit(){this.collegeService.getColleges()}}return e.\u0275fac=function(n){return new(n||e)(D(ik))},e.\u0275cmp=Nn({type:e,selectors:[["app-colleges"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"degree-search-colleges","list-unstyled"],[1,"py-1","mb-1"],["href","",1,"text-decoration-none","hover-text-underline"],[4,"ngFor","ngForOf"]],template:function(n,r){1&n&&Je(0,ak,6,1,"div",0),2&n&&Pe("ngIf",r.colleges&&r.colleges.length>0)},dependencies:[ca,da]}),e})(),uk=(()=>{class e{constructor(n){this.http=n,this.programTypesUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/program-types",this.programTypesSource=new Ve,this.programTypes$=this.programTypesSource.asObservable()}getprogramTypes(){this.http.get(this.programTypesUrl).pipe(zt(this.handleError)).subscribe(n=>{this.programTypesSource.next(n)})}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),Hn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(M(_a))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function ck(e,t){if(1&e&&(ae(0,"ul",8)(1,"li",2)(2,"a",3),Fe(3),Lt(4,"span",6),te()()()),2&e){const n=t.$implicit;ce(3),en(" ",n.name," ")}}function dk(e,t){if(1&e&&(sr(0),ae(1,"li",2)(2,"a",3),Fe(3),te()(),Je(4,ck,5,1,"ul",7),ar()),2&e){const n=t.$implicit;ce(3),en(" ",n.name," "),ce(1),Pe("ngForOf",n.children)}}function fk(e,t){if(1&e&&(ae(0,"div")(1,"ul",1)(2,"li",2)(3,"a",3),Fe(4,"View All"),te()(),Je(5,dk,5,2,"ng-container",4),ae(6,"li"),Lt(7,"hr"),te(),ae(8,"li")(9,"a",5),Fe(10," Online Programs "),Lt(11,"span",6),te()()()()),2&e){const n=lr();ce(5),Pe("ngForOf",n.programTypes)}}let hk=(()=>{class e{constructor(n){this.programTypeService=n,this.subscription=this.programTypeService.programTypes$.subscribe(r=>{this.programTypes=r})}ngOnInit(){this.programTypeService.getprogramTypes()}}return e.\u0275fac=function(n){return new(n||e)(D(uk))},e.\u0275cmp=Nn({type:e,selectors:[["app-program-types"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"degree-search-programTypes","list-unstyled"],[1,"py-1","mb-1"],["href","",1,"text-decoration-none","hover-text-underline"],[4,"ngFor","ngForOf"],["href","/online/programs/",1,"text-decoration-none","hover-text-underline"],["aria-hidden","true",1,"fa","fa-external-link"],["class","list-unstyled ml-3",4,"ngFor","ngForOf"],[1,"list-unstyled","ml-3"]],template:function(n,r){1&n&&Je(0,fk,12,1,"div",0),2&n&&Pe("ngIf",r.programTypes&&r.programTypes.length>0)},dependencies:[ca,da]}),e})(),pk=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=Nn({type:e,selectors:[["app-root"]],decls:14,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-md-4","push-md-8","col-lg-3","push-lg-9"],[1,"h5","heading-underline","visible-sm","mt-3","mb-4"],[1,"h5","py-2"],[1,"h5","pb-2"],[1,"col-md-8","pull-md-4","col-lg-9","pull-lg-3"]],template:function(n,r){1&n&&(Lt(0,"app-search-form"),ae(1,"div",0)(2,"div",1)(3,"div",2)(4,"h2",3),Fe(5,"View Degrees By"),te(),ae(6,"h3",4),Fe(7,"Program Types"),te(),Lt(8,"app-program-types"),ae(9,"h3",5),Fe(10,"Colleges"),te(),Lt(11,"app-colleges"),te(),ae(12,"div",6),Lt(13,"app-search-results"),te()()())},dependencies:[K1,ok,lk,hk]}),e})(),gk=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Ct({type:e,bootstrap:[pk]}),e.\u0275inj=ct({imports:[jR,$1,uF,BP]}),e})();(function ux(){Tv=!1}
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
       */)(),$R().bootstrapModule(gk).catch(e=>console.error(e))}},ne=>{ne(ne.s=316)}]);