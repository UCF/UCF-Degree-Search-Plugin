"use strict";(self.webpackChunkDegree_Search=self.webpackChunkDegree_Search||[]).push([[179],{654:()=>{function ae(e){return"function"==typeof e}function So(e){const n=e(r=>{Error.call(r),r.stack=(new Error).stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}const Qi=So(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:\n${n.map((r,o)=>`${o+1}) ${r.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=n});function Mr(e,t){if(e){const n=e.indexOf(t);0<=n&&e.splice(n,1)}}class ct{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;const{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(const i of n)i.remove(this);else n.remove(this);const{initialTeardown:r}=this;if(ae(r))try{r()}catch(i){t=i instanceof Qi?i.errors:[i]}const{_finalizers:o}=this;if(o){this._finalizers=null;for(const i of o)try{Vf(i)}catch(s){t=t??[],s instanceof Qi?t=[...t,...s.errors]:t.push(s)}}if(t)throw new Qi(t)}}add(t){var n;if(t&&t!==this)if(this.closed)Vf(t);else{if(t instanceof ct){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(t)}}_hasParent(t){const{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){const{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){const{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&Mr(n,t)}remove(t){const{_finalizers:n}=this;n&&Mr(n,t),t instanceof ct&&t._removeParent(this)}}ct.EMPTY=(()=>{const e=new ct;return e.closed=!0,e})();const kf=ct.EMPTY;function Lf(e){return e instanceof ct||e&&"closed"in e&&ae(e.remove)&&ae(e.add)&&ae(e.unsubscribe)}function Vf(e){ae(e)?e():e.unsubscribe()}const Jn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Ki={setTimeout(e,t,...n){const{delegate:r}=Ki;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){const{delegate:t}=Ki;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function $f(e){Ki.setTimeout(()=>{const{onUnhandledError:t}=Jn;if(!t)throw e;t(e)})}function jf(){}const Cw=al("C",void 0,void 0);function al(e,t,n){return{kind:e,value:t,error:n}}let Xn=null;function Zi(e){if(Jn.useDeprecatedSynchronousErrorHandling){const t=!Xn;if(t&&(Xn={errorThrown:!1,error:null}),e(),t){const{errorThrown:n,error:r}=Xn;if(Xn=null,n)throw r}}else e()}class ll extends ct{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,Lf(t)&&t.add(this)):this.destination=Aw}static create(t,n,r){return new Mo(t,n,r)}next(t){this.isStopped?cl(function Ew(e){return al("N",e,void 0)}(t),this):this._next(t)}error(t){this.isStopped?cl(function ww(e){return al("E",void 0,e)}(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?cl(Cw,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const Sw=Function.prototype.bind;function ul(e,t){return Sw.call(e,t)}class Mw{constructor(t){this.partialObserver=t}next(t){const{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){Yi(r)}}error(t){const{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){Yi(r)}else Yi(t)}complete(){const{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){Yi(n)}}}class Mo extends ll{constructor(t,n,r){let o;if(super(),ae(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&Jn.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&ul(t.next,i),error:t.error&&ul(t.error,i),complete:t.complete&&ul(t.complete,i)}):o=t}this.destination=new Mw(o)}}function Yi(e){Jn.useDeprecatedSynchronousErrorHandling?function bw(e){Jn.useDeprecatedSynchronousErrorHandling&&Xn&&(Xn.errorThrown=!0,Xn.error=e)}(e):$f(e)}function cl(e,t){const{onStoppedNotification:n}=Jn;n&&Ki.setTimeout(()=>n(e,t))}const Aw={closed:!0,next:jf,error:function Iw(e){throw e},complete:jf},dl="function"==typeof Symbol&&Symbol.observable||"@@observable";function Rn(e){return e}function Bf(e){return 0===e.length?Rn:1===e.length?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}let Ce=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){const r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){const i=function Nw(e){return e&&e instanceof ll||function xw(e){return e&&ae(e.next)&&ae(e.error)&&ae(e.complete)}(e)&&Lf(e)}(n)?n:new Mo(n,r,o);return Zi(()=>{const{operator:s,source:a}=this;i.add(s?s.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return new(r=Hf(r))((o,i)=>{const s=new Mo({next:a=>{try{n(a)}catch(l){i(l),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return null===(r=this.source)||void 0===r?void 0:r.subscribe(n)}[dl](){return this}pipe(...n){return Bf(n)(this)}toPromise(n){return new(n=Hf(n))((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return e.create=t=>new e(t),e})();function Hf(e){var t;return null!==(t=e??Jn.Promise)&&void 0!==t?t:Promise}const Rw=So(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});let Ze=(()=>{class e extends Ce{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){const r=new Uf(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new Rw}next(n){Zi(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const r of this.currentObservers)r.next(n)}})}error(n){Zi(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;const{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){Zi(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return(null===(n=this.observers)||void 0===n?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){const{hasError:r,isStopped:o,observers:i}=this;return r||o?kf:(this.currentObservers=null,i.push(n),new ct(()=>{this.currentObservers=null,Mr(i,n)}))}_checkFinalizedStatuses(n){const{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){const n=new Ce;return n.source=this,n}}return e.create=(t,n)=>new Uf(t,n),e})();class Uf extends Ze{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.next)||void 0===r||r.call(n,t)}error(t){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.error)||void 0===r||r.call(n,t)}complete(){var t,n;null===(n=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===n||n.call(t)}_subscribe(t){var n,r;return null!==(r=null===(n=this.source)||void 0===n?void 0:n.subscribe(t))&&void 0!==r?r:kf}}function Gf(e){return ae(e?.lift)}function Me(e){return t=>{if(Gf(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function we(e,t,n,r,o){return new Fw(e,t,n,r,o)}class Fw extends ll{constructor(t,n,r,o,i,s){super(t),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(l){t.error(l)}}:super._next,this._error=o?function(a){try{o(a)}catch(l){t.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){t.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:n}=this;super.unsubscribe(),!n&&(null===(t=this.onFinalize)||void 0===t||t.call(this))}}}function q(e,t){return Me((n,r)=>{let o=0;n.subscribe(we(r,i=>{r.next(e.call(t,i,o++))}))})}function er(e){return this instanceof er?(this.v=e,this):new er(e)}function kw(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,r=n.apply(e,t||[]),i=[];return o={},s("next"),s("throw"),s("return"),o[Symbol.asyncIterator]=function(){return this},o;function s(f){r[f]&&(o[f]=function(h){return new Promise(function(p,g){i.push([f,h,p,g])>1||a(f,h)})})}function a(f,h){try{!function l(f){f.value instanceof er?Promise.resolve(f.value.v).then(u,c):d(i[0][2],f)}(r[f](h))}catch(p){d(i[0][3],p)}}function u(f){a("next",f)}function c(f){a("throw",f)}function d(f,h){f(h),i.shift(),i.length&&a(i[0][0],i[0][1])}}function Lw(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,t=e[Symbol.asyncIterator];return t?t.call(e):(e=function qf(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(e),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(a,l){!function o(i,s,a,l){Promise.resolve(l).then(function(u){i({value:u,done:a})},s)}(a,l,(s=e[i](s)).done,s.value)})}}}const Qf=e=>e&&"number"==typeof e.length&&"function"!=typeof e;function Kf(e){return ae(e?.then)}function Zf(e){return ae(e[dl])}function Yf(e){return Symbol.asyncIterator&&ae(e?.[Symbol.asyncIterator])}function Jf(e){return new TypeError(`You provided ${null!==e&&"object"==typeof e?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}const Xf=function $w(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}();function eh(e){return ae(e?.[Xf])}function th(e){return kw(this,arguments,function*(){const n=e.getReader();try{for(;;){const{value:r,done:o}=yield er(n.read());if(o)return yield er(void 0);yield yield er(r)}}finally{n.releaseLock()}})}function nh(e){return ae(e?.getReader)}function Ft(e){if(e instanceof Ce)return e;if(null!=e){if(Zf(e))return function jw(e){return new Ce(t=>{const n=e[dl]();if(ae(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(e);if(Qf(e))return function Bw(e){return new Ce(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}(e);if(Kf(e))return function Hw(e){return new Ce(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,$f)})}(e);if(Yf(e))return rh(e);if(eh(e))return function Uw(e){return new Ce(t=>{for(const n of e)if(t.next(n),t.closed)return;t.complete()})}(e);if(nh(e))return function Gw(e){return rh(th(e))}(e)}throw Jf(e)}function rh(e){return new Ce(t=>{(function zw(e,t){var n,r,o,i;return function Pw(e,t,n,r){return new(n||(n=Promise))(function(i,s){function a(c){try{u(r.next(c))}catch(d){s(d)}}function l(c){try{u(r.throw(c))}catch(d){s(d)}}function u(c){c.done?i(c.value):function o(i){return i instanceof n?i:new n(function(s){s(i)})}(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}(this,void 0,void 0,function*(){try{for(n=Lw(e);!(r=yield n.next()).done;)if(t.next(r.value),t.closed)return}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}t.complete()})})(e,t).catch(n=>t.error(n))})}function ln(e,t,n,r=0,o=!1){const i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function $e(e,t,n=1/0){return ae(t)?$e((r,o)=>q((i,s)=>t(r,i,o,s))(Ft(e(r,o))),n):("number"==typeof t&&(n=t),Me((r,o)=>function Ww(e,t,n,r,o,i,s,a){const l=[];let u=0,c=0,d=!1;const f=()=>{d&&!l.length&&!u&&t.complete()},h=g=>u<r?p(g):l.push(g),p=g=>{i&&t.next(g),u++;let v=!1;Ft(n(g,c++)).subscribe(we(t,y=>{o?.(y),i?h(y):t.next(y)},()=>{v=!0},void 0,()=>{if(v)try{for(u--;l.length&&u<r;){const y=l.shift();s?ln(t,s,()=>p(y)):p(y)}f()}catch(y){t.error(y)}}))};return e.subscribe(we(t,h,()=>{d=!0,f()})),()=>{a?.()}}(r,o,e,n)))}function Ir(e=1/0){return $e(Rn,e)}const un=new Ce(e=>e.complete());function hl(e){return e[e.length-1]}function oh(e){return ae(hl(e))?e.pop():void 0}function Io(e){return function Qw(e){return e&&ae(e.schedule)}(hl(e))?e.pop():void 0}function ih(e,t=0){return Me((n,r)=>{n.subscribe(we(r,o=>ln(r,e,()=>r.next(o),t),()=>ln(r,e,()=>r.complete(),t),o=>ln(r,e,()=>r.error(o),t)))})}function sh(e,t=0){return Me((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function ah(e,t){if(!e)throw new Error("Iterable cannot be null");return new Ce(n=>{ln(n,t,()=>{const r=e[Symbol.asyncIterator]();ln(n,t,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function Ie(e,t){return t?function tE(e,t){if(null!=e){if(Zf(e))return function Zw(e,t){return Ft(e).pipe(sh(t),ih(t))}(e,t);if(Qf(e))return function Jw(e,t){return new Ce(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}(e,t);if(Kf(e))return function Yw(e,t){return Ft(e).pipe(sh(t),ih(t))}(e,t);if(Yf(e))return ah(e,t);if(eh(e))return function Xw(e,t){return new Ce(n=>{let r;return ln(n,t,()=>{r=e[Xf](),ln(n,t,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){return void n.error(s)}i?n.complete():n.next(o)},0,!0)}),()=>ae(r?.return)&&r.return()})}(e,t);if(nh(e))return function eE(e,t){return ah(th(e),t)}(e,t)}throw Jf(e)}(e,t):Ft(e)}function pl(e,t,...n){if(!0===t)return void e();if(!1===t)return;const r=new Mo({next:()=>{r.unsubscribe(),e()}});return t(...n).subscribe(r)}
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
       */function oe(e){for(let t in e)if(e[t]===oe)return t;throw Error("Could not find renamed property on target object.")}function gl(e,t){for(const n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ie(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(ie).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function ml(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const oE=oe({__forward_ref__:oe});function le(e){return e.__forward_ref__=le,e.toString=function(){return ie(this())},e}function k(e){return yl(e)?e():e}function yl(e){return"function"==typeof e&&e.hasOwnProperty(oE)&&e.__forward_ref__===le}
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
class C extends Error{constructor(t,n){super(function Ji(e,t){return`NG0${Math.abs(e)}${t?": "+t.trim():""}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t,n)),this.code=t}}function $(e){return"string"==typeof e?e:null==e?"":String(e)}function Xi(e,t){throw new C(-201,!1)}
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
function R(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function ht(e){return{providers:e.providers||[],imports:e.imports||[]}}function es(e){return lh(e,ts)||lh(e,ch)}function lh(e,t){return e.hasOwnProperty(t)?e[t]:null}function uh(e){return e&&(e.hasOwnProperty(vl)||e.hasOwnProperty(hE))?e[vl]:null}const ts=oe({\u0275prov:oe}),vl=oe({\u0275inj:oe}),ch=oe({ngInjectableDef:oe}),hE=oe({ngInjectorDef:oe});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var F=(()=>((F=F||{})[F.Default=0]="Default",F[F.Host=1]="Host",F[F.Self=2]="Self",F[F.SkipSelf=4]="SkipSelf",F[F.Optional=8]="Optional",F))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let _l;function wt(e){const t=_l;return _l=e,t}function dh(e,t,n){const r=es(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&F.Optional?null:void 0!==t?t:void Xi(ie(e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Fn(e){return{toString:e}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Pt=(()=>((Pt=Pt||{})[Pt.OnPush=0]="OnPush",Pt[Pt.Default=1]="Default",Pt))(),Qt=(()=>{return(e=Qt||(Qt={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",Qt;var e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const se=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),Ar={},ee=[],ns=oe({\u0275cmp:oe}),Dl=oe({\u0275dir:oe}),Cl=oe({\u0275pipe:oe}),fh=oe({\u0275mod:oe}),dn=oe({\u0275fac:oe}),Ao=oe({__NG_ELEMENT_ID__:oe});
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
let gE=0;function Et(e){return Fn(()=>{const n=!0===e.standalone,r={},o={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===Pt.OnPush,directiveDefs:null,pipeDefs:null,standalone:n,dependencies:n&&e.dependencies||null,getStandaloneInjector:null,selectors:e.selectors||ee,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||Qt.Emulated,id:"c"+gE++,styles:e.styles||ee,_:null,setInput:null,schemas:e.schemas||null,tView:null},i=e.dependencies,s=e.features;return o.inputs=gh(e.inputs,r),o.outputs=gh(e.outputs),s&&s.forEach(a=>a(o)),o.directiveDefs=i?()=>("function"==typeof i?i():i).map(hh).filter(ph):null,o.pipeDefs=i?()=>("function"==typeof i?i():i).map(Je).filter(ph):null,o})}function hh(e){return ne(e)||Ye(e)}function ph(e){return null!==e}function bt(e){return Fn(()=>({type:e.type,bootstrap:e.bootstrap||ee,declarations:e.declarations||ee,imports:e.imports||ee,exports:e.exports||ee,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function gh(e,t){if(null==e)return Ar;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const L=Et;function ne(e){return e[ns]||null}function Ye(e){return e[Dl]||null}function Je(e){return e[Cl]||null}function pt(e,t){const n=e[fh]||null;if(!n&&!0===t)throw new Error(`Type ${ie(e)} does not have '\u0275mod' property.`);return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const G=11;
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
function at(e){return Array.isArray(e)&&"object"==typeof e[1]}function kt(e){return Array.isArray(e)&&!0===e[1]}function bl(e){return 0!=(8&e.flags)}function ss(e){return 2==(2&e.flags)}function as(e){return 1==(1&e.flags)}function Lt(e){return null!==e.template}function CE(e){return 0!=(256&e[2])}
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
function ir(e,t){return e.hasOwnProperty(dn)?e[dn]:null}
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
       */function Mt(){return vh}function vh(e){return e.type.prototype.ngOnChanges&&(e.setInput=ME),SE}function SE(){const e=Dh(this),t=e?.current;if(t){const n=e.previous;if(n===Ar)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function ME(e,t,n,r){const o=Dh(e)||function IE(e,t){return e[_h]=t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,{previous:Ar,current:null}),i=o.current||(o.current={}),s=o.previous,a=this.declaredInputs[n],l=s[a];i[a]=new bE(l&&l.currentValue,t,s===Ar),e[r]=t}Mt.ngInherit=!0;const _h="__ngSimpleChanges__";function Dh(e){return e[_h]||null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ae(e){for(;Array.isArray(e);)e=e[0];return e}function ls(e,t){return Ae(t[e])}function At(e,t){return Ae(t[e.index])}function Tl(e,t){return e.data[t]}function mt(e,t){const n=t[e];return at(n)?n:n[0]}function us(e){return 64==(64&e[2])}function Pn(e,t){return null==t?null:e[t]}function Ch(e){e[18]=0}function xl(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const V={lFrame:Nh(null),bindingsEnabled:!0};function Eh(){return V.bindingsEnabled}function D(){return V.lFrame.lView}function Y(){return V.lFrame.tView}function sr(e){return V.lFrame.contextLView=e,e[8]}function ar(e){return V.lFrame.contextLView=null,e}function Fe(){let e=bh();for(;null!==e&&64===e.type;)e=e.parent;return e}function bh(){return V.lFrame.currentTNode}function Kt(e,t){const n=V.lFrame;n.currentTNode=e,n.isParent=t}function Nl(){return V.lFrame.isParent}function Rl(){V.lFrame.isParent=!1}function Pr(){return V.lFrame.bindingIndex++}function HE(e,t){const n=V.lFrame;n.bindingIndex=n.bindingRootIndex=e,Fl(t)}function Fl(e){V.lFrame.currentDirectiveIndex=e}function Ah(){return V.lFrame.currentQueryIndex}function Ol(e){V.lFrame.currentQueryIndex=e}function GE(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function Th(e,t,n){if(n&F.SkipSelf){let o=t,i=e;for(;!(o=o.parent,null!==o||n&F.Host||(o=GE(i),null===o||(i=i[15],10&o.type))););if(null===o)return!1;t=o,e=i}const r=V.lFrame=xh();return r.currentTNode=t,r.lView=e,!0}function kl(e){const t=xh(),n=e[1];V.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function xh(){const e=V.lFrame,t=null===e?null:e.child;return null===t?Nh(e):t}function Nh(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function Rh(){const e=V.lFrame;return V.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const Fh=Rh;function Ll(){const e=Rh();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function et(){return V.lFrame.selectedIndex}function On(e){V.lFrame.selectedIndex=e}function _e(){const e=V.lFrame;return Tl(e.tView,e.selectedIndex)}function cs(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:u,ngOnDestroy:c}=i;s&&(e.contentHooks||(e.contentHooks=[])).push(-n,s),a&&((e.contentHooks||(e.contentHooks=[])).push(n,a),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,a)),l&&(e.viewHooks||(e.viewHooks=[])).push(-n,l),u&&((e.viewHooks||(e.viewHooks=[])).push(n,u),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,u)),null!=c&&(e.destroyHooks||(e.destroyHooks=[])).push(n,c)}}function ds(e,t,n){Ph(e,t,3,n)}function fs(e,t,n,r){(3&e[2])===n&&Ph(e,t,n,r)}function Vl(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function Ph(e,t,n,r){const i=r??-1,s=t.length-1;let a=0;for(let l=void 0!==r?65535&e[18]:0;l<s;l++)if("number"==typeof t[l+1]){if(a=t[l],null!=r&&a>=r)break}else t[l]<0&&(e[18]+=65536),(a<i||-1==i)&&(XE(e,n,t,l),e[18]=(4294901760&e[18])+l+2),l++}function XE(e,t,n,r){const o=n[r]<0,i=n[r+1],a=e[o?-n[r]:n[r]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{i.call(a)}finally{}}}else try{i.call(a)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Po{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function hs(e,t,n){let r=0;for(;r<n.length;){const o=n[r];if("number"==typeof o){if(0!==o)break;r++;const i=n[r++],s=n[r++],a=n[r++];e.setAttribute(t,s,a,i)}else{const i=o,s=n[++r];kh(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function Oh(e){return 3===e||4===e||6===e}function kh(e){return 64===e.charCodeAt(0)}function ps(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||Lh(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function Lh(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const a=e[i++];if("number"==typeof a){if(a===t){s=-1;break}if(a>t){s=i-1;break}}}for(;i<e.length;){const a=e[i];if("number"==typeof a)break;if(a===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Vh(e){return-1!==e}function Or(e){return 32767&e}function kr(e,t){let n=function ob(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let jl=!0;function gs(e){const t=jl;return jl=e,t}let ib=0;const Zt={};function ko(e,t){const n=Hl(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,Bl(r.data,e),Bl(t,null),Bl(r.blueprint,null));const o=ms(e,t),i=e.injectorIndex;if(Vh(o)){const s=Or(o),a=kr(o,t),l=a[1].data;for(let u=0;u<8;u++)t[i+u]=a[s+u]|l[s+u]}return t[i+8]=o,i}function Bl(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Hl(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function ms(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){if(r=qh(o),null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function ys(e,t,n){!function sb(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Ao)&&(r=n[Ao]),null==r&&(r=n[Ao]=ib++);const o=255&r;t.data[e+(o>>5)]|=1<<o}(e,t,n)}function Bh(e,t,n){if(n&F.Optional||void 0!==e)return e;Xi()}function Hh(e,t,n,r){if(n&F.Optional&&void 0===r&&(r=null),0==(n&(F.Self|F.Host))){const o=e[9],i=wt(void 0);try{return o?o.get(t,r,n&F.Optional):dh(t,r,n&F.Optional)}finally{wt(i)}}return Bh(r,0,n)}function Uh(e,t,n,r=F.Default,o){if(null!==e){if(1024&t[2]){const s=function db(e,t,n,r,o){let i=e,s=t;for(;null!==i&&null!==s&&1024&s[2]&&!(256&s[2]);){const a=Gh(i,s,n,r|F.Self,Zt);if(a!==Zt)return a;let l=i.parent;if(!l){const u=s[21];if(u){const c=u.get(n,Zt,r);if(c!==Zt)return c}l=qh(s),s=s[15]}i=l}return o}(e,t,n,r,Zt);if(s!==Zt)return s}const i=Gh(e,t,n,r,Zt);if(i!==Zt)return i}return Hh(t,n,r,o)}function Gh(e,t,n,r,o){const i=function ub(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(Ao)?e[Ao]:void 0;return"number"==typeof t?t>=0?255&t:cb:t}(n);if("function"==typeof i){if(!Th(t,e,r))return r&F.Host?Bh(o,0,r):Hh(t,n,r,o);try{const s=i(r);if(null!=s||r&F.Optional)return s;Xi()}finally{Fh()}}else if("number"==typeof i){let s=null,a=Hl(e,t),l=-1,u=r&F.Host?t[16][6]:null;for((-1===a||r&F.SkipSelf)&&(l=-1===a?ms(e,t):t[a+8],-1!==l&&Wh(r,!1)?(s=t[1],a=Or(l),t=kr(l,t)):a=-1);-1!==a;){const c=t[1];if(zh(i,a,c.data)){const d=lb(a,t,n,s,r,u);if(d!==Zt)return d}l=t[a+8],-1!==l&&Wh(r,t[1].data[a+8]===u)&&zh(i,a,t)?(s=c,a=Or(l),t=kr(l,t)):a=-1}}return o}function lb(e,t,n,r,o,i){const s=t[1],a=s.data[e+8],c=vs(a,s,n,null==r?ss(a)&&jl:r!=s&&0!=(3&a.type),o&F.Host&&i===a);return null!==c?Lo(t,s,c,a):Zt}function vs(e,t,n,r,o){const i=e.providerIndexes,s=t.data,a=1048575&i,l=e.directiveStart,c=i>>20,f=o?a+c:e.directiveEnd;for(let h=r?a:a+c;h<f;h++){const p=s[h];if(h<l&&n===p||h>=l&&p.type===n)return h}if(o){const h=s[l];if(h&&Lt(h)&&h.type===n)return l}return null}function Lo(e,t,n,r){let o=e[n];const i=t.data;if(function eb(e){return e instanceof Po}(o)){const s=o;s.resolving&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function iE(e,t){const n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new C(-200,`Circular dependency in DI detected for ${e}${n}`)}(function X(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():$(e)}(i[n]));const a=gs(s.canSeeViewProviders);s.resolving=!0;const l=s.injectImpl?wt(s.injectImpl):null;Th(e,r,F.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function JE(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const s=vh(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==l&&wt(l),gs(a),s.resolving=!1,Fh()}}return o}function zh(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function Wh(e,t){return!(e&F.Self||e&F.Host&&t)}class Lr{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return Uh(this._tNode,this._lView,t,r,n)}}function cb(){return new Lr(Fe(),D())}function Ul(e){return yl(e)?()=>{const t=Ul(k(e));return t&&t()}:ir(e)}function qh(e){const t=e[1],n=t.type;return 2===n?t.declTNode:1===n?e[6]:null}
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
const $r="__parameters__";function Br(e,t,n){return Fn(()=>{const r=function Gl(e){return function(...n){if(e){const r=e(...n);for(const o in r)this[o]=r[o]}}}(t);function o(...i){if(this instanceof o)return r.apply(this,i),this;const s=new o(...i);return a.annotation=s,a;function a(l,u,c){const d=l.hasOwnProperty($r)?l[$r]:Object.defineProperty(l,$r,{value:[]})[$r];for(;d.length<=c;)d.push(null);return(d[c]=d[c]||[]).push(s),l}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class T{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=R({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function yt(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),yt(r,t)):t!==e&&t.push(r)}return t}function pn(e,t){e.forEach(n=>Array.isArray(n)?pn(n,t):t(n))}function Kh(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function _s(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function vt(e,t,n){let r=Hr(e,t);return r>=0?e[1|r]=n:(r=~r,function gb(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(1===o)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function Wl(e,t){const n=Hr(e,t);if(n>=0)return e[1|n]}function Hr(e,t){return function Jh(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}
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
const Ho={},Ql="__NG_DI_FLAG__",Cs="ngTempTokenPath",Eb=/\n/gm,Xh="__source";let Uo;function Ur(e){const t=Uo;return Uo=e,t}function Sb(e,t=F.Default){if(void 0===Uo)throw new C(-203,!1);return null===Uo?dh(e,void 0,t):Uo.get(e,t&F.Optional?null:void 0,t)}function I(e,t=F.Default){return(function pE(){return _l}()||Sb)(k(e),t)}function Ee(e,t=F.Default){return"number"!=typeof t&&(t=0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)),I(e,t)}function Kl(e){const t=[];for(let n=0;n<e.length;n++){const r=k(e[n]);if(Array.isArray(r)){if(0===r.length)throw new C(900,!1);let o,i=F.Default;for(let s=0;s<r.length;s++){const a=r[s],l=Mb(a);"number"==typeof l?-1===l?o=a.token:i|=l:o=a}t.push(I(o,i))}else t.push(I(r))}return t}function Go(e,t){return e[Ql]=t,e.prototype[Ql]=t,e}function Mb(e){return e[Ql]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const zo=Go(Br("Optional"),8),Wo=Go(Br("SkipSelf"),4);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Yl;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class fp{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}function Ln(e){return e instanceof fp?e.changingThisBreaksApplicationSecurity:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Zb=/^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var Te=(()=>((Te=Te||{})[Te.NONE=0]="NONE",Te[Te.HTML=1]="HTML",Te[Te.STYLE=2]="STYLE",Te[Te.SCRIPT=3]="SCRIPT",Te[Te.URL=4]="URL",Te[Te.RESOURCE_URL=5]="RESOURCE_URL",Te))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Yo(e){const t=function Jo(){const e=D();return e&&e[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();return t?t.sanitize(Te.URL,e)||"":function Ko(e,t){const n=function Wb(e){return e instanceof fp&&e.getTypeName()||null}(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}(e,"URL")?Ln(e):function eu(e){return(e=String(e)).match(Zb)?e:"unsafe:"+e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */($(e))}const ou=new T("ENVIRONMENT_INITIALIZER"),Dp=new T("INJECTOR",-1),Cp=new T("INJECTOR_DEF_TYPES");
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
class wp{get(t,n=Ho){if(n===Ho){const r=new Error(`NullInjectorError: No provider for ${ie(t)}!`);throw r.name="NullInjectorError",r}return n}}
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
       */function d0(...e){return{\u0275providers:Ep(0,e)}}function Ep(e,...t){const n=[],r=new Set;let o;return pn(t,i=>{const s=i;iu(s,n,[],r)&&(o||(o=[]),o.push(s))}),void 0!==o&&bp(o,n),n}function bp(e,t){for(let n=0;n<e.length;n++){const{providers:o}=e[n];pn(o,i=>{t.push(i)})}}function iu(e,t,n,r){if(!(e=k(e)))return!1;let o=null,i=uh(e);const s=!i&&ne(e);if(i||s){if(s&&!s.standalone)return!1;o=e}else{const l=e.ngModule;if(i=uh(l),!i)return!1;o=l}const a=r.has(o);if(s){if(a)return!1;if(r.add(o),s.dependencies){const l="function"==typeof s.dependencies?s.dependencies():s.dependencies;for(const u of l)iu(u,t,n,r)}}else{if(!i)return!1;{if(null!=i.imports&&!a){let u;r.add(o);try{pn(i.imports,c=>{iu(c,t,n,r)&&(u||(u=[]),u.push(c))})}finally{}void 0!==u&&bp(u,t)}if(!a){const u=ir(o)||(()=>new o);t.push({provide:o,useFactory:u,deps:ee},{provide:Cp,useValue:o,multi:!0},{provide:ou,useValue:()=>I(o),multi:!0})}const l=i.providers;null==l||a||pn(l,c=>{t.push(c)})}}return o!==e&&void 0!==e.providers}const f0=oe({provide:String,useValue:oe});function su(e){return null!==e&&"object"==typeof e&&f0 in e}function lr(e){return"function"==typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const au=new T("Set Injector scope."),Is={},p0={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let lu;function As(){return void 0===lu&&(lu=new wp),lu}class Vn{}class Ip extends Vn{constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,cu(t,s=>this.processProvider(s)),this.records.set(Dp,Wr(void 0,this)),o.has("environment")&&this.records.set(Vn,Wr(void 0,this));const i=this.records.get(au);null!=i&&"string"==typeof i.value&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(Cp.multi,ee,F.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const t of this._ngOnDestroyHooks)t.ngOnDestroy();for(const t of this._onDestroyHooks)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(t){this._onDestroyHooks.push(t)}runInContext(t){this.assertNotDestroyed();const n=Ur(this),r=wt(void 0);try{return t()}finally{Ur(n),wt(r)}}get(t,n=Ho,r=F.Default){this.assertNotDestroyed();const o=Ur(this),i=wt(void 0);try{if(!(r&F.SkipSelf)){let a=this.records.get(t);if(void 0===a){const l=function _0(e){return"function"==typeof e||"object"==typeof e&&e instanceof T}(t)&&es(t);a=l&&this.injectableDefInScope(l)?Wr(uu(t),Is):null,this.records.set(t,a)}if(null!=a)return this.hydrate(t,a)}return(r&F.Self?As():this.parent).get(t,n=r&F.Optional&&n===Ho?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[Cs]=s[Cs]||[]).unshift(ie(t)),o)throw s;return function Ib(e,t,n,r){const o=e[Cs];throw t[Xh]&&o.unshift(t[Xh]),e.message=function Ab(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.slice(2):e;let o=ie(t);if(Array.isArray(t))o=t.map(ie).join(" -> ");else if("object"==typeof t){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let a=t[s];i.push(s+":"+("string"==typeof a?JSON.stringify(a):ie(a)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(Eb,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e[Cs]=null,e}(s,t,"R3InjectorError",this.source)}throw s}finally{wt(i),Ur(o)}}resolveInjectorInitializers(){const t=Ur(this),n=wt(void 0);try{const r=this.get(ou.multi,ee,F.Self);for(const o of r)o()}finally{Ur(t),wt(n)}}toString(){const t=[],n=this.records;for(const r of n.keys())t.push(ie(r));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new C(205,!1)}processProvider(t){let n=lr(t=k(t))?t:k(t&&t.provide);const r=function m0(e){return su(e)?Wr(void 0,e.useValue):Wr(Ap(e),Is)}(t);if(lr(t)||!0!==t.multi)this.records.get(n);else{let o=this.records.get(n);o||(o=Wr(void 0,Is,!0),o.factory=()=>Kl(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n){return n.value===Is&&(n.value=p0,n.value=n.factory()),"object"==typeof n.value&&n.value&&function v0(e){return null!==e&&"object"==typeof e&&"function"==typeof e.ngOnDestroy}(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}injectableDefInScope(t){if(!t.providedIn)return!1;const n=k(t.providedIn);return"string"==typeof n?"any"===n||this.scopes.has(n):this.injectorDefTypes.has(n)}}function uu(e){const t=es(e),n=null!==t?t.factory:ir(e);if(null!==n)return n;if(e instanceof T)throw new C(204,!1);if(e instanceof Function)return function g0(e){const t=e.length;if(t>0)throw function Bo(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}(t,"?"),new C(204,!1);const n=function dE(e){const t=e&&(e[ts]||e[ch]);if(t){const n=function fE(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new C(204,!1)}function Ap(e,t,n){let r;if(lr(e)){const o=k(e);return ir(o)||uu(o)}if(su(e))r=()=>k(e.useValue);else if(function Mp(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...Kl(e.deps||[]));else if(function Sp(e){return!(!e||!e.useExisting)}(e))r=()=>I(k(e.useExisting));else{const o=k(e&&(e.useClass||e.provide));if(!function y0(e){return!!e.deps}(e))return ir(o)||uu(o);r=()=>new o(...Kl(e.deps))}return r}function Wr(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function D0(e){return!!e.\u0275providers}function cu(e,t){for(const n of e)Array.isArray(n)?cu(n,t):D0(n)?cu(n.\u0275providers,t):t(n)}
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
       */class E0{resolveComponentFactory(t){throw function w0(e){const t=Error(`No component factory found for ${ie(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let Xo=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.NULL=new E0,e})();function b0(){return qr(Fe(),D())}function qr(e,t){return new _t(At(e,t))}let _t=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=b0,e})();function S0(e){return e instanceof _t?e.nativeElement:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Np{}let mn=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function M0(){const e=D(),n=mt(Fe().index,e);return(at(n)?n:e)[G]}
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
return e.\u0275prov=R({token:e,providedIn:"root",factory:()=>null}),e})();class ei{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const A0=new ei("14.2.3"),du={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function mu(e){return e.ngOriginalError}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Qr{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&mu(t);for(;n&&mu(n);)n=mu(n);return n||null}}
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
const yu=new Map;let j0=0;const _u="__ngContext__";function ze(e,t){at(t)?(e[_u]=t[20],function H0(e){yu.set(e[20],e)}(t)):e[_u]=t}function yn(e){return e instanceof Function?e():e}
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
       */function Cu(e,t){return undefined(e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ni(e){const t=e[3];return kt(t)?t[3]:t}function wu(e){return zp(e[13])}function Eu(e){return zp(e[4])}function zp(e){for(;null!==e&&!kt(e);)e=e[4];return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Zr(e,t,n,r,o){if(null!=r){let i,s=!1;kt(r)?i=r:at(r)&&(s=!0,r=r[0]);const a=Ae(r);0===e&&null!==n?null==o?Yp(t,n,a):ur(t,n,a,o||null,!0):1===e&&null!==n?ur(t,n,a,o||null,!0):2===e?function og(e,t,n){const r=Ts(e,t);r&&function gS(e,t,n,r){e.removeChild(t,n,r)}(e,r,t,n)}(t,a,s):3===e&&t.destroyNode(a),null!=i&&function vS(e,t,n,r,o){const i=n[7];i!==Ae(n)&&Zr(t,e,r,i,o);for(let a=10;a<n.length;a++){const l=n[a];ri(l[1],l,e,t,r,i)}}(t,e,i,n,o)}}function Su(e,t,n){return e.createElement(t,n)}function qp(e,t){const n=e[9],r=n.indexOf(t),o=t[3];512&t[2]&&(t[2]&=-513,xl(o,-1)),n.splice(r,1)}function Mu(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&qp(o,r),t>0&&(e[n-1][4]=r[4]);const i=_s(e,10+t);!function aS(e,t){ri(e,t,t[G],2,null,null),t[0]=null,t[6]=null}(r[1],r);const s=i[19];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-65}return r}function Qp(e,t){if(!(128&t[2])){const n=t[G];n.destroyNode&&ri(e,t,n,3,null,null),function cS(e){let t=e[13];if(!t)return Iu(e[1],e);for(;t;){let n=null;if(at(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)at(t)&&Iu(t[1],t),t=t[3];null===t&&(t=e),at(t)&&Iu(t[1],t),n=t&&t[4]}t=n}}(t)}}function Iu(e,t){if(!(128&t[2])){t[2]&=-65,t[2]|=128,function pS(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const o=t[n[r]];if(!(o instanceof Po)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const a=o[i[s]],l=i[s+1];try{l.call(a)}finally{}}else try{i.call(o)}finally{}}}}(e,t),function hS(e,t){const n=e.cleanup,r=t[7];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+1],a="function"==typeof s?s(t):Ae(t[s]),l=r[o=n[i+2]],u=n[i+3];"boolean"==typeof u?a.removeEventListener(n[i],l,u):u>=0?r[o=u]():r[o=-u].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++)(0,r[i])();t[7]=null}}(e,t),1===t[1].type&&t[G].destroy();const n=t[17];if(null!==n&&kt(t[3])){n!==t[3]&&qp(n,t);const r=t[19];null!==r&&r.detachView(e)}!function U0(e){yu.delete(e[20])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)}}function Kp(e,t,n){return function Zp(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const o=e.data[r.directiveStart].encapsulation;if(o===Qt.None||o===Qt.Emulated)return null}return At(r,n)}(e,t.parent,n)}function ur(e,t,n,r,o){e.insertBefore(t,n,r,o)}function Yp(e,t,n){e.appendChild(t,n)}function Jp(e,t,n,r,o){null!==r?ur(e,t,n,r,o):Yp(e,t,n)}function Ts(e,t){return e.parentNode(t)}let tg=function eg(e,t,n){return 40&e.type?At(e,n):null};function xs(e,t,n,r){const o=Kp(e,r,t),i=t[G],a=function Xp(e,t,n){return tg(e,t,n)}(r.parent||t[6],r,t);if(null!=o)if(Array.isArray(n))for(let l=0;l<n.length;l++)Jp(i,o,n[l],a,!1);else Jp(i,o,n,a,!1)}function Ns(e,t){if(null!==t){const n=t.type;if(3&n)return At(t,e);if(4&n)return Tu(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return Ns(e,r);{const o=e[t.index];return kt(o)?Tu(-1,o):Ae(o)}}if(32&n)return Cu(t,e)()||Ae(e[t.index]);{const r=rg(e,t);return null!==r?Array.isArray(r)?r[0]:Ns(ni(e[16]),r):Ns(e,t.next)}}return null}function rg(e,t){return null!==t?e[16][6].projection[t.projection]:null}function Tu(e,t){const n=10+e+1;if(n<t.length){const r=t[n],o=r[1].firstChild;if(null!==o)return Ns(r,o)}return t[7]}function xu(e,t,n,r,o,i,s){for(;null!=n;){const a=r[n.index],l=n.type;if(s&&0===t&&(a&&ze(Ae(a),r),n.flags|=4),64!=(64&n.flags))if(8&l)xu(e,t,n.child,r,o,i,!1),Zr(t,e,o,a,i);else if(32&l){const u=Cu(n,r);let c;for(;c=u();)Zr(t,e,o,c,i);Zr(t,e,o,a,i)}else 16&l?ig(e,t,r,n,o,i):Zr(t,e,o,a,i);n=s?n.projectionNext:n.next}}function ri(e,t,n,r,o,i){xu(n,r,e.firstChild,t,o,i,!1)}function ig(e,t,n,r,o,i){const s=n[16],l=s[6].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++)Zr(t,e,o,l[u],i);else xu(e,t,l,s[3],o,i,!0)}function sg(e,t,n){e.setAttribute(t,"style",n)}function Nu(e,t,n){""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}
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
       */const lg="ng-template";function DS(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==ag(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function ug(e){return 4===e.type&&e.value!==lg}function CS(e,t,n){return t===(4!==e.type||n?e.value:lg)}function wS(e,t,n){let r=4;const o=e.attrs||[],i=function SS(e){for(let t=0;t<e.length;t++)if(Oh(e[t]))return t;return e.length}(o);let s=!1;for(let a=0;a<t.length;a++){const l=t[a];if("number"!=typeof l){if(!s)if(4&r){if(r=2|1&r,""!==l&&!CS(e,l,n)||""===l&&1===t.length){if(Vt(r))return!1;s=!0}}else{const u=8&r?l:t[++a];if(8&r&&null!==e.attrs){if(!DS(e.attrs,u,n)){if(Vt(r))return!1;s=!0}continue}const d=ES(8&r?"class":l,o,ug(e),n);if(-1===d){if(Vt(r))return!1;s=!0;continue}if(""!==u){let f;f=d>i?"":o[d+1].toLowerCase();const h=8&r?f:null;if(h&&-1!==ag(h,u,0)||2&r&&u!==f){if(Vt(r))return!1;s=!0}}}}else{if(!s&&!Vt(r)&&!Vt(l))return!1;if(s&&Vt(l))continue;s=!1,r=l|1&r}}return Vt(r)||s}function Vt(e){return 0==(1&e)}function ES(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){const s=t[o];if(s===e)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let a=t[++o];for(;"string"==typeof a;)a=t[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function MS(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function cg(e,t,n=!1){for(let r=0;r<t.length;r++)if(wS(e,t[r],n))return!0;return!1}function dg(e,t){return e?":not("+t.trim()+")":t}function AS(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const a=e[++n];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!Vt(s)&&(t+=dg(i,o),o=""),r=s,i=i||!Vt(r);n++}return""!==o&&(t+=dg(i,o)),t}
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
       */function P(e){fg(Y(),D(),et()+e,!1)}function fg(e,t,n,r){if(!r)if(3==(3&t[2])){const i=e.preOrderCheckHooks;null!==i&&ds(t,i,n)}else{const i=e.preOrderHooks;null!==i&&fs(t,i,0,n)}On(n)}
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
function mg(e,t=null,n=null,r){const o=yg(e,t,n,r);return o.resolveInjectorInitializers(),o}function yg(e,t=null,n=null,r,o=new Set){const i=[n||ee,d0(e)];return r=r||("object"==typeof e?void 0:ie(e)),new Ip(i,t||As(),r||null,o)
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
return e.THROW_IF_NOT_FOUND=Ho,e.NULL=new wp,e.\u0275prov=R({token:e,providedIn:"any",factory:()=>I(Dp)}),e.__NG_ELEMENT_ID__=-1,e})();
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
function _(e,t=F.Default){const n=D();return null===n?I(e,t):Uh(Fe(),n,k(e),t)}function ku(){throw new Error("invalid")}
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
function Fs(e,t){return e<<17|t<<2}function $t(e){return e>>17&32767}function Lu(e){return 2|e}function vn(e){return(131068&e)>>2}function Vu(e,t){return-131069&e|t<<2}function $u(e){return 1|e}function Pg(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const s=e.data[i];Ol(o),s.contentQueries(2,t[i],i)}}}function ks(e,t,n,r,o,i,s,a,l,u,c){const d=t.blueprint.slice();return d[0]=o,d[2]=76|r,(null!==c||e&&1024&e[2])&&(d[2]|=1024),Ch(d),d[3]=d[15]=e,d[8]=n,d[10]=s||e&&e[10],d[G]=a||e&&e[G],d[12]=l||e&&e[12]||null,d[9]=u||e&&e[9]||null,d[6]=i,d[20]=function B0(){return j0++}(),d[21]=c,d[16]=2==t.type?e[16]:d,d}function Jr(e,t,n,r,o){let i=e.data[t];if(null===i)i=function qu(e,t,n,r,o){const i=bh(),s=Nl(),l=e.data[t]=function cM(e,t,n,r,o,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=l),null!==i&&(s?null==i.child&&null!==l.parent&&(i.child=l):null===i.next&&(i.next=l)),l}(e,t,n,r,o),function BE(){return V.lFrame.inI18n}()&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=function Fo(){const e=V.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();i.injectorIndex=null===s?-1:s.injectorIndex}return Kt(i,!0),i}function Xr(e,t,n,r){if(0===n)return-1;const o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function Qu(e,t,n){kl(t);try{const r=e.viewQuery;null!==r&&nc(1,r,n);const o=e.template;null!==o&&Og(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Pg(e,t),e.staticViewQueries&&nc(2,e.viewQuery,n);const i=e.components;null!==i&&function aM(e,t){for(let n=0;n<t.length;n++)MM(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,Ll()}}function Ls(e,t,n,r){const o=t[2];if(128!=(128&o)){kl(t);try{Ch(t),function Mh(e){return V.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&Og(e,t,n,2,r);const s=3==(3&o);if(s){const u=e.preOrderCheckHooks;null!==u&&ds(t,u,null)}else{const u=e.preOrderHooks;null!==u&&fs(t,u,0,null),Vl(t,0)}if(function bM(e){for(let t=wu(e);null!==t;t=Eu(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const o=n[r],i=o[3];0==(512&o[2])&&xl(i,1),o[2]|=512}}}(t),function EM(e){for(let t=wu(e);null!==t;t=Eu(t))for(let n=10;n<t.length;n++){const r=t[n],o=r[1];us(r)&&Ls(o,r,o.template,r[8])}}(t),null!==e.contentQueries&&Pg(e,t),s){const u=e.contentCheckHooks;null!==u&&ds(t,u)}else{const u=e.contentHooks;null!==u&&fs(t,u,1),Vl(t,1)}!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function iM(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)On(~o);else{const i=o,s=n[++r],a=n[++r];HE(s,i),a(2,t[i])}}}finally{On(-1)}}(e,t);const a=e.components;null!==a&&function sM(e,t){for(let n=0;n<t.length;n++)SM(e,t[n])}(t,a);const l=e.viewQuery;if(null!==l&&nc(2,l,r),s){const u=e.viewCheckHooks;null!==u&&ds(t,u)}else{const u=e.viewHooks;null!==u&&fs(t,u,2),Vl(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),t[2]&=-41,512&t[2]&&(t[2]&=-513,xl(t[3],-1))}finally{Ll()}}}function Og(e,t,n,r,o){const i=et(),s=2&r;try{On(-1),s&&t.length>22&&fg(e,t,22,!1),n(r,o)}finally{On(i)}}function kg(e,t,n){if(bl(t)){const o=t.directiveEnd;for(let i=t.directiveStart;i<o;i++){const s=e.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}function Ku(e,t,n){!Eh()||(function gM(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||ko(n,t),ze(r,t);const s=n.initialInputs;for(let a=o;a<i;a++){const l=e.data[a],u=Lt(l);u&&DM(t,n,l);const c=Lo(t,e,a,n);ze(c,t),null!==s&&CM(0,a-o,c,l,0,s),u&&(mt(n.index,t)[8]=c)}}(e,t,n,At(n,t)),128==(128&n.flags)&&function mM(e,t,n){const r=n.directiveStart,o=n.directiveEnd,i=n.index,s=function UE(){return V.lFrame.currentDirectiveIndex}();try{On(i);for(let a=r;a<o;a++){const l=e.data[a],u=t[a];Fl(a),(null!==l.hostBindings||0!==l.hostVars||null!==l.hostAttrs)&&Ug(l,u)}}finally{On(-1),Fl(s)}}(e,t,n))}function Zu(e,t,n=At){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],a=-1===s?n(t,e):e[s];e[o++]=a}}}function Lg(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=Yu(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function Yu(e,t,n,r,o,i,s,a,l,u){const c=22+r,d=c+o,f=function lM(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:j);return n}(c,d),h="function"==typeof u?u():u;return f[1]={type:e,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:t,data:f.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:l,consts:h,incompleteFirstPass:!1}}function Vg(e,t,n,r){const o=Qg(t);null===n?o.push(r):(o.push(n),e.firstCreatePass&&Kg(e).push(r,o.length-1))}function $g(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function jg(e,t){const r=t.directiveEnd,o=e.data,i=t.attrs,s=[];let a=null,l=null;for(let u=t.directiveStart;u<r;u++){const c=o[u],d=c.inputs,f=null===i||ug(t)?null:wM(d,i);s.push(f),a=$g(d,u,a),l=$g(c.outputs,u,l)}null!==a&&(a.hasOwnProperty("class")&&(t.flags|=16),a.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=s,t.inputs=a,t.outputs=l}function Ct(e,t,n,r,o,i,s,a){const l=At(t,n);let c,u=t.inputs;!a&&null!=u&&(c=u[r])?(rc(e,n,c,r,o),ss(t)&&Bg(n,t.index)):3&t.type&&(r=function dM(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(r),o=null!=s?s(o,t.value||"",r):o,i.setProperty(l,r,o))}function Bg(e,t){const n=mt(t,e);16&n[2]||(n[2]|=32)}function Ju(e,t,n,r){let o=!1;if(Eh()){const i=function yM(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];cg(n,s.selectors,!1)&&(o||(o=[]),ys(ko(n,t),e,s.type),Lt(s)?(Gg(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){o=!0,zg(n,e.data.length,i.length);for(let c=0;c<i.length;c++){const d=i[c];d.providersResolver&&d.providersResolver(d)}let a=!1,l=!1,u=Xr(e,t,i.length,null);for(let c=0;c<i.length;c++){const d=i[c];n.mergedAttrs=ps(n.mergedAttrs,d.hostAttrs),Wg(e,n,t,u,d),_M(u,d,s),null!==d.contentQueries&&(n.flags|=8),(null!==d.hostBindings||null!==d.hostAttrs||0!==d.hostVars)&&(n.flags|=128);const f=d.type.prototype;!a&&(f.ngOnChanges||f.ngOnInit||f.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),a=!0),!l&&(f.ngOnChanges||f.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),l=!0),u++}jg(e,n)}s&&function vM(e,t,n){if(t){const r=e.localNames=[];for(let o=0;o<t.length;o+=2){const i=n[t[o+1]];if(null==i)throw new C(-301,!1);r.push(t[o],i)}}}(n,r,s)}return n.mergedAttrs=ps(n.mergedAttrs,n.attrs),o}function Hg(e,t,n,r,o,i){const s=i.hostBindings;if(s){let a=e.hostBindingOpCodes;null===a&&(a=e.hostBindingOpCodes=[]);const l=~t.index;(function pM(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(a)!=l&&a.push(l),a.push(r,o,s)}}function Ug(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Gg(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function _M(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;Lt(t)&&(n[""]=e)}}function zg(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Wg(e,t,n,r,o){e.data[r]=o;const i=o.factory||(o.factory=ir(o.type)),s=new Po(i,Lt(o),_);e.blueprint[r]=s,n[r]=s,Hg(e,t,0,r,Xr(e,n,o.hostVars,j),o)}function DM(e,t,n){const r=At(t,e),o=Lg(n),i=e[10],s=Vs(e,ks(e,o,null,n.onPush?32:16,r,t,i,i.createRenderer(r,n),null,null,null));e[t.index]=s}function CM(e,t,n,r,o,i){const s=i[t];if(null!==s){const a=r.setInput;for(let l=0;l<s.length;){const u=s[l++],c=s[l++],d=s[l++];null!==a?r.setInput(n,d,u,c):n[c]=d}}}function wM(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function qg(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function SM(e,t){const n=mt(t,e);if(us(n)){const r=n[1];48&n[2]?Ls(r,n,r.template,n[8]):n[5]>0&&ec(n)}}function ec(e){for(let r=wu(e);null!==r;r=Eu(r))for(let o=10;o<r.length;o++){const i=r[o];if(us(i))if(512&i[2]){const s=i[1];Ls(s,i,s.template,i[8])}else i[5]>0&&ec(i)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=mt(n[r],e);us(o)&&o[5]>0&&ec(o)}}function MM(e,t){const n=mt(t,e),r=n[1];(function IM(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),Qu(r,n,n[8])}function Vs(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function tc(e){for(;e;){e[2]|=32;const t=ni(e);if(CE(e)&&!t)return e;e=t}return null}function $s(e,t,n,r=!0){const o=t[10];o.begin&&o.begin();try{Ls(e,t,e.template,n)}catch(s){throw r&&Yg(t,s),s}finally{o.end&&o.end()}}function nc(e,t,n){Ol(0),t(e,n)}function Qg(e){return e[7]||(e[7]=[])}function Kg(e){return e.cleanup||(e.cleanup=[])}function Yg(e,t){const n=e[9],r=n?n.get(Qr,null):null;r&&r.handleError(t)}function rc(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],a=n[i++],l=t[s],u=e.data[s];null!==u.setInput?u.setInput(l,o,r,a):l[a]=o}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function js(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let s=0;s<t.length;s++){const a=t[s];"number"==typeof a?i=a:1==i?o=ml(o,a):2==i&&(r=ml(r,a+": "+t[++s]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Bs(e,t,n,r,o=!1){for(;null!==n;){const i=t[n.index];if(null!==i&&r.push(Ae(i)),kt(i))for(let a=10;a<i.length;a++){const l=i[a],u=l[1].firstChild;null!==u&&Bs(l[1],l,u,r)}const s=n.type;if(8&s)Bs(e,t,n.child,r);else if(32&s){const a=Cu(n,t);let l;for(;l=a();)r.push(l)}else if(16&s){const a=rg(t,n);if(Array.isArray(a))r.push(...a);else{const l=ni(t[16]);Bs(l[1],l,a,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class oi{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return Bs(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(kt(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(Mu(t,r),_s(n,r))}this._attachedToViewContainer=!1}Qp(this._lView[1],this._lView)}onDestroy(t){Vg(this._lView[1],this._lView,null,t)}markForCheck(){tc(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){$s(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new C(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function uS(e,t){ri(e,t,t[G],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new C(902,!1);this._appRef=t}}class AM extends oi{constructor(t){super(t),this._view=t}detectChanges(){const t=this._view;$s(t[1],t,t[8],!1)}checkNoChanges(){}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class oc extends Xo{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=ne(t);return new ii(n,this.ngModule)}}function Jg(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}class xM{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){const o=this.injector.get(t,du,r);return o!==du||n===du?o:this.parentInjector.get(t,n,r)}}class ii extends Tp{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=function TS(e){return e.map(AS).join(",")}(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return Jg(this.componentDef.inputs)}get outputs(){return Jg(this.componentDef.outputs)}create(t,n,r,o){var i;let s=(o=o||this.ngModule)instanceof Vn?o:null===(i=o)||void 0===i?void 0:i.injector;s&&null!==this.componentDef.getStandaloneInjector&&(s=this.componentDef.getStandaloneInjector(s)||s);const a=s?new xM(t,s):t,l=a.get(Np,null);if(null===l)throw new C(407,!1);const u=a.get(I0,null),c=l.createRenderer(null,this.componentDef),d=this.componentDef.selectors[0][0]||"div",f=r?function uM(e,t,n){return e.selectRootElement(t,n===Qt.ShadowDom)}(c,r,this.componentDef.encapsulation):Su(l.createRenderer(null,this.componentDef),d,function TM(e){const t=e.toLowerCase();return"svg"===t?"svg":"math"===t?"math":null}(d)),h=this.componentDef.onPush?288:272,p=Yu(0,null,null,1,0,null,null,null,null,null),g=ks(null,p,null,h,null,null,l,c,u,a,null);let v,y;kl(g);try{const w=function FM(e,t,n,r,o,i){const s=n[1];n[22]=e;const l=Jr(s,22,2,"#host",null),u=l.mergedAttrs=t.hostAttrs;null!==u&&(js(l,u,!0),null!==e&&(hs(o,e,u),null!==l.classes&&Nu(o,e,l.classes),null!==l.styles&&sg(o,e,l.styles)));const c=r.createRenderer(e,t),d=ks(n,Lg(t),null,t.onPush?32:16,n[22],l,r,c,i||null,null,null);return s.firstCreatePass&&(ys(ko(l,n),s,t.type),Gg(s,l),zg(l,n.length,1)),Vs(n,d),n[22]=d}(f,this.componentDef,g,l,c);if(f)if(r)hs(c,f,["ng-version",A0.full]);else{const{attrs:m,classes:b}=function xS(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!Vt(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);m&&hs(c,f,m),b&&b.length>0&&Nu(c,f,b.join(" "))}if(y=Tl(p,22),void 0!==n){const m=y.projection=[];for(let b=0;b<this.ngContentSelectors.length;b++){const H=n[b];m.push(null!=H?Array.from(H):null)}}v=function PM(e,t,n,r){const o=n[1],i=function hM(e,t,n){const r=Fe();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Wg(e,r,t,Xr(e,t,1,null),n),jg(e,r));const o=Lo(t,e,r.directiveStart,r);ze(o,t);const i=At(r,t);return i&&ze(i,t),o}(o,n,t);if(e[8]=n[8]=i,null!==r)for(const a of r)a(i,t);if(t.contentQueries){const a=Fe();t.contentQueries(1,i,a.directiveStart)}const s=Fe();return!o.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(On(s.index),Hg(n[1],s,0,s.directiveStart,s.directiveEnd,t),Ug(t,i)),i}(w,this.componentDef,g,[OM]),Qu(p,g,null)}finally{Ll()}return new RM(this.componentType,v,qr(y,g),g,y)}}class RM extends class C0{}{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.instance=n,this.hostView=this.changeDetectorRef=new AM(o),this.componentType=t}setInput(t,n){const r=this._tNode.inputs;let o;if(null!==r&&(o=r[t])){const i=this._rootLView;rc(i[1],i,o,t,n),Bg(i,this._tNode.index)}}get injector(){return new Lr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}function OM(){const e=Fe();cs(D()[1],e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function re(e){let t=function Xg(e){return Object.getPrototypeOf(e.prototype).constructor}(e.type),n=!0;const r=[e];for(;t;){let o;if(Lt(e))o=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new C(903,!1);o=t.\u0275dir}if(o){if(n){r.push(o);const s=e;s.inputs=ic(e.inputs),s.declaredInputs=ic(e.declaredInputs),s.outputs=ic(e.outputs);const a=o.hostBindings;a&&$M(e,a);const l=o.viewQuery,u=o.contentQueries;if(l&&LM(e,l),u&&VM(e,u),gl(e.inputs,o.inputs),gl(e.declaredInputs,o.declaredInputs),gl(e.outputs,o.outputs),Lt(o)&&o.data.animation){const c=e.data;c.animation=(c.animation||[]).concat(o.data.animation)}}const i=o.features;if(i)for(let s=0;s<i.length;s++){const a=i[s];a&&a.ngInherit&&a(e),a===re&&(n=!1)}}t=Object.getPrototypeOf(t)}!function kM(e){let t=0,n=null;for(let r=e.length-1;r>=0;r--){const o=e[r];o.hostVars=t+=o.hostVars,o.hostAttrs=ps(o.hostAttrs,n=ps(n,o.hostAttrs))}}(r)}function ic(e){return e===Ar?{}:e===ee?[]:e}function LM(e,t){const n=e.viewQuery;e.viewQuery=n?(r,o)=>{t(r,o),n(r,o)}:t}function VM(e,t){const n=e.contentQueries;e.contentQueries=n?(r,o,i)=>{t(r,o,i),n(r,o,i)}:t}function $M(e,t){const n=e.hostBindings;e.hostBindings=n?(r,o)=>{t(r,o),n(r,o)}:t}
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
let Hs=null;function cr(){if(!Hs){const e=se.Symbol;if(e&&e.iterator)Hs=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(Hs=r)}}}return Hs}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function si(e){return!!sc(e)&&(Array.isArray(e)||!(e instanceof Map)&&cr()in e)}function sc(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function We(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}function to(e,t,n,r){return We(e,Pr(),n)?t+$(n)+r:j}function de(e,t,n,r,o,i,s,a){const l=D(),u=Y(),c=e+22,d=u.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function qM(e,t,n,r,o,i,s,a,l){const u=t.consts,c=Jr(t,e,4,s||null,Pn(u,a));Ju(t,n,c,Pn(u,l)),cs(t,c);const d=c.tViews=Yu(2,c,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,u);return null!==t.queries&&(t.queries.template(t,c),d.queries=t.queries.embeddedTView(c)),c}(c,u,l,t,n,r,o,i,s):u.data[c];Kt(d,!1);const f=l[G].createComment("");xs(u,l,f,d),ze(f,l),Vs(l,l[c]=qg(f,l,f,d)),as(d)&&Ku(u,l,d),null!=s&&Zu(l,d,a)}
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
function Z(e,t,n){const r=D();return We(r,Pr(),t)&&Ct(Y(),_e(),r,e,t,r[G],n,!1),Z}function ac(e,t,n,r,o){const s=o?"class":"style";rc(e,n,t.inputs[s],s,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function M(e,t,n,r){const o=D(),i=Y(),s=22+e,a=o[G],l=o[s]=Su(a,t,function YE(){return V.lFrame.currentNamespace}()),u=i.firstCreatePass?function ZM(e,t,n,r,o,i,s){const a=t.consts,u=Jr(t,e,2,o,Pn(a,i));return Ju(t,n,u,Pn(a,s)),null!==u.attrs&&js(u,u.attrs,!1),null!==u.mergedAttrs&&js(u,u.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,u),u}(s,i,o,0,t,n,r):i.data[s];Kt(u,!0);const c=u.mergedAttrs;null!==c&&hs(a,l,c);const d=u.classes;null!==d&&Nu(a,l,d);const f=u.styles;return null!==f&&sg(a,l,f),64!=(64&u.flags)&&xs(i,o,l,u),0===function OE(){return V.lFrame.elementDepthCount}()&&ze(l,o),function kE(){V.lFrame.elementDepthCount++}(),as(u)&&(Ku(i,o,u),kg(i,u,o)),null!==r&&Zu(o,u),M}function A(){let e=Fe();Nl()?Rl():(e=e.parent,Kt(e,!1));const t=e;!function LE(){V.lFrame.elementDepthCount--}();const n=Y();return n.firstCreatePass&&(cs(n,e),bl(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function nb(e){return 0!=(16&e.flags)}(t)&&ac(n,t,D(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function rb(e){return 0!=(32&e.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)&&ac(n,t,D(),t.stylesWithoutHost,!1),A}function J(e,t,n,r){return M(e,t,n,r),A(),J
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function Bn(e,t,n){const r=D(),o=Y(),i=e+22,s=o.firstCreatePass?function YM(e,t,n,r,o){const i=t.consts,s=Pn(i,r),a=Jr(t,e,8,"ng-container",s);return null!==s&&js(a,s,!0),Ju(t,n,a,Pn(i,o)),null!==t.queries&&t.queries.elementStart(t,a),a}(i,o,r,t,n):o.data[i];Kt(s,!0);const a=r[i]=r[G].createComment("");return xs(o,r,a,s),ze(a,r),as(s)&&(Ku(o,r,s),kg(o,s,r)),null!=n&&Zu(r,s),Bn}function Hn(){let e=Fe();const t=Y();return Nl()?Rl():(e=e.parent,Kt(e,!1)),t.firstCreatePass&&(cs(t,e),bl(e)&&t.queries.elementEnd(e)),Hn}function fr(){return D()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function li(e){return!!e&&"function"==typeof e.then}const lc=function cm(e){return!!e&&"function"==typeof e.subscribe};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function he(e,t,n,r){const o=D(),i=Y(),s=Fe();return function fm(e,t,n,r,o,i,s,a){const l=as(r),c=e.firstCreatePass&&Kg(e),d=t[8],f=Qg(t);let h=!0;if(3&r.type||a){const v=At(r,t),y=a?a(v):v,w=f.length,m=a?H=>a(Ae(H[r.index])):r.index;let b=null;if(!a&&l&&(b=function JM(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const a=t[7],l=o[i+2];return a.length>l?a[l]:null}"string"==typeof s&&(i+=2)}return null}(e,t,o,r.index)),null!==b)(b.__ngLastListenerFn__||b).__ngNextListenerFn__=i,b.__ngLastListenerFn__=i,h=!1;else{i=pm(r,t,d,i,!1);const H=n.listen(y,o,i);f.push(i,H),c&&c.push(o,m,w,w+1)}}else i=pm(r,t,d,i,!1);const p=r.outputs;let g;if(h&&null!==p&&(g=p[o])){const v=g.length;if(v)for(let y=0;y<v;y+=2){const me=t[g[y]][g[y+1]].subscribe(i),Sr=f.length;f.push(i,me),c&&c.push(o,r.index,Sr,-(Sr+1))}}}(i,o,o[G],s,e,t,0,r),he}function hm(e,t,n,r){try{return!1!==n(r)}catch(o){return Yg(e,o),!1}}function pm(e,t,n,r,o){return function i(s){if(s===Function)return r;tc(2&e.flags?mt(e.index,t):t);let l=hm(t,0,r,s),u=i.__ngNextListenerFn__;for(;u;)l=hm(t,0,u,s)&&l,u=u.__ngNextListenerFn__;return o&&!1===l&&(s.preventDefault(),s.returnValue=!1),l}}
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
       */function be(e=1){return function zE(e){return(V.lFrame.contextLView=function WE(e,t){for(;e>0;)t=t[15],e--;return t}(e,V.lFrame.contextLView))[8]}(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function hr(e,t,n){return uc(e,"",t,"",n),hr}function uc(e,t,n,r,o){const i=D(),s=to(i,t,n,r);return s!==j&&Ct(Y(),_e(),i,e,s,i[G],o,!1),uc}function Em(e,t,n,r,o){const i=e[n+1],s=null===t;let a=r?$t(i):vn(i),l=!1;for(;0!==a&&(!1===l||s);){const c=e[a+1];oI(e[a],t)&&(l=!0,e[a+1]=r?$u(c):Lu(c)),a=r?$t(c):vn(c)}l&&(e[n+1]=r?Lu(i):$u(i))}function oI(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&Hr(e,t)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Gs(e,t){return function jt(e,t,n,r){const o=D(),i=Y(),s=function hn(e){const t=V.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}(2);i.firstUpdatePass&&function Rm(e,t,n,r){const o=e.data;if(null===o[n+1]){const i=o[et()],s=function Nm(e,t){return t>=e.expandoStartIndex}(e,n);(function km(e,t){return 0!=(e.flags&(t?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */)(i,r)&&null===t&&!s&&(t=!1),t=function hI(e,t,n,r){const o=function Pl(e){const t=V.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let i=r?t.residualClasses:t.residualStyles;if(null===o)0===(r?t.classBindings:t.styleBindings)&&(n=ui(n=cc(null,e,t,n,r),t.attrs,r),i=null);else{const s=t.directiveStylingLast;if(-1===s||e[s]!==o)if(n=cc(o,e,t,n,r),null===i){let l=function pI(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==vn(r))return e[$t(r)]}(e,t,r);void 0!==l&&Array.isArray(l)&&(l=cc(null,e,t,l[1],r),l=ui(l,t.attrs,r),function gI(e,t,n,r){e[$t(n?t.classBindings:t.styleBindings)]=r}(e,t,r,l))}else i=function mI(e,t,n){let r;const o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++)r=ui(r,e[i].hostAttrs,n);return ui(r,t.attrs,n)}(e,t,r)}return void 0!==i&&(r?t.residualClasses=i:t.residualStyles=i),n}(o,i,t,r),function nI(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,a=$t(s),l=vn(s);e[r]=n;let c,u=!1;if(Array.isArray(n)){const d=n;c=d[1],(null===c||Hr(d,c)>0)&&(u=!0)}else c=n;if(o)if(0!==l){const f=$t(e[a+1]);e[r+1]=Fs(f,a),0!==f&&(e[f+1]=Vu(e[f+1],r)),e[a+1]=function KS(e,t){return 131071&e|t<<17}(e[a+1],r)}else e[r+1]=Fs(a,0),0!==a&&(e[a+1]=Vu(e[a+1],r)),a=r;else e[r+1]=Fs(l,0),0===a?a=r:e[l+1]=Vu(e[l+1],r),l=r;u&&(e[r+1]=Lu(e[r+1])),Em(e,c,r,!0),Em(e,c,r,!1),function rI(e,t,n,r,o){const i=o?e.residualClasses:e.residualStyles;null!=i&&"string"==typeof t&&Hr(i,t)>=0&&(n[r+1]=$u(n[r+1]))}(t,c,e,r,i),s=Fs(a,l),i?t.classBindings=s:t.styleBindings=s}(o,i,t,n,s,r)}}(i,e,s,r),t!==j&&We(o,s,t)&&function Pm(e,t,n,r,o,i,s,a){if(!(3&t.type))return;const l=e.data,u=l[a+1];zs(function Mg(e){return 1==(1&e)}(u)?Om(l,t,n,o,vn(u),s):void 0)||(zs(i)||function Sg(e){return 2==(2&e)}(u)&&(i=Om(l,null,n,o,a,s)),function _S(e,t,n,r,o){if(t)o?e.addClass(n,r):e.removeClass(n,r);else{let i=-1===r.indexOf("-")?void 0:lt.DashCase;null==o?e.removeStyle(n,r,i):("string"==typeof o&&o.endsWith("!important")&&(o=o.slice(0,-10),i|=lt.Important),e.setStyle(n,r,o,i))}}(r,s,ls(et(),n),o,i))}(i,i.data[et()],o,o[G],e,o[s+1]=function _I(e,t){return null==e||("string"==typeof t?e+=t:"object"==typeof e&&(e=ie(Ln(e)))),e}(t,n),r,s)}(e,t,null,!0),Gs}function cc(e,t,n,r,o){let i=null;const s=n.directiveEnd;let a=n.directiveStylingLast;for(-1===a?a=n.directiveStart:a++;a<s&&(i=t[a],r=ui(r,i.hostAttrs,o),i!==e);)a++;return null!==e&&(n.directiveStylingLast=a),r}function ui(e,t,n){const r=n?1:2;let o=-1;if(null!==t)for(let i=0;i<t.length;i++){const s=t[i];"number"==typeof s?o=s:o===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),vt(e,s,!!n||t[++i]))}return void 0===e?null:e}function Om(e,t,n,r,o,i){const s=null===t;let a;for(;o>0;){const l=e[o],u=Array.isArray(l),c=u?l[1]:l,d=null===c;let f=n[o+1];f===j&&(f=d?ee:void 0);let h=d?Wl(f,r):c===r?f:void 0;if(u&&!zs(h)&&(h=Wl(l,r)),zs(h)&&(a=h,s))return a;const p=e[o+1];o=s?$t(p):vn(p)}if(null!==t){let l=i?t.residualClasses:t.residualStyles;null!=l&&(a=Wl(l,r))}return a}function zs(e){return void 0!==e}function z(e,t=""){const n=D(),r=Y(),o=e+22,i=r.firstCreatePass?Jr(r,o,1,t,null):r.data[o],s=n[o]=function bu(e,t){return e.createText(t)}(n[G],t);xs(r,n,s,i),Kt(i,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Dn(e){return Cn("",e,""),Dn}function Cn(e,t,n){const r=D(),o=to(r,e,t,n);return o!==j&&function _n(e,t,n){const r=ls(t,e);!function Wp(e,t,n){e.setValue(t,n)}(e[G],r,n)}(r,et(),o),Cn}const fo="en-US";
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
let oy=fo;function hc(e,t,n,r,o){if(e=k(e),Array.isArray(e))for(let i=0;i<e.length;i++)hc(e[i],t,n,r,o);else{const i=Y(),s=D();let a=lr(e)?e:k(e.provide),l=Ap(e);const u=Fe(),c=1048575&u.providerIndexes,d=u.directiveStart,f=u.providerIndexes>>20;if(lr(e)||!e.multi){const h=new Po(l,o,_),p=gc(a,t,o?c:c+f,d);-1===p?(ys(ko(u,s),i,a),pc(i,e,t.length),t.push(a),u.directiveStart++,u.directiveEnd++,o&&(u.providerIndexes+=1048576),n.push(h),s.push(h)):(n[p]=h,s[p]=h)}else{const h=gc(a,t,c+f,d),p=gc(a,t,c,c+f),g=h>=0&&n[h],v=p>=0&&n[p];if(o&&!v||!o&&!g){ys(ko(u,s),i,a);const y=function LA(e,t,n,r,o){const i=new Po(e,n,_);return i.multi=[],i.index=t,i.componentProviders=0,Ty(i,o,r&&!n),i}(o?kA:OA,n.length,o,r,l);!o&&v&&(n[p].providerFactory=y),pc(i,e,t.length,0),t.push(a),u.directiveStart++,u.directiveEnd++,o&&(u.providerIndexes+=1048576),n.push(y),s.push(y)}else pc(i,e,h>-1?h:p,Ty(n[o?p:h],l,!o&&r));!o&&r&&v&&n[p].componentProviders++}}}function pc(e,t,n,r){const o=lr(t),i=function h0(e){return!!e.useClass}(t);if(o||i){const l=(i?k(t.useClass):t).prototype.ngOnDestroy;if(l){const u=e.destroyHooks||(e.destroyHooks=[]);if(!o&&t.multi){const c=u.indexOf(n);-1===c?u.push(n,[r,l]):u[c+1].push(r,l)}else u.push(n,l)}}}function Ty(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function gc(e,t,n,r){for(let o=n;o<r;o++)if(t[o]===e)return o;return-1}function OA(e,t,n,r){return mc(this.multi,[])}function kA(e,t,n,r){const o=this.multi;let i;if(this.providerFactory){const s=this.providerFactory.componentProviders,a=Lo(n,n[1],this.providerFactory.index,r);i=a.slice(0,s),mc(o,i);for(let l=s;l<a.length;l++)i.push(a[l])}else i=[],mc(o,i);return i}function mc(e,t){for(let n=0;n<e.length;n++)t.push((0,e[n])());return t}function pe(e,t=[]){return n=>{n.providersResolver=(r,o)=>
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
function PA(e,t,n){const r=Y();if(r.firstCreatePass){const o=Lt(e);hc(n,r.data,r.blueprint,o,!0),hc(t,r.data,r.blueprint,o,!1)}}(r,o?o(e):e,t)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class gr{}class xy{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ny extends gr{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new oc(this);const r=pt(t);this._bootstrapComponents=yn(r.bootstrap),this._r3Injector=yg(t,n,[{provide:gr,useValue:this},{provide:Xo,useValue:this.componentFactoryResolver}],ie(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(t)}get injector(){return this._r3Injector}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class yc extends xy{constructor(t){super(),this.moduleType=t}create(t){return new Ny(this.moduleType,t)}}class $A extends gr{constructor(t,n,r){super(),this.componentFactoryResolver=new oc(this),this.instance=null;const o=new Ip([...t,{provide:gr,useValue:this},{provide:Xo,useValue:this.componentFactoryResolver}],n||As(),r,new Set(["environment"]));this.injector=o,o.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}}function Zs(e,t,n=null){return new $A(e,t,n).injector}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let jA=(()=>{class e{constructor(n){this._injector=n,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n.id)){const r=Ep(0,n.type),o=r.length>0?Zs([r],this._injector,`Standalone[${n.type.name}]`):null;this.cachedInjectors.set(n.id,o)}return this.cachedInjectors.get(n.id)}ngOnDestroy(){try{for(const n of this.cachedInjectors.values())null!==n&&n.destroy()}finally{this.cachedInjectors.clear()}}}return e.\u0275prov=R({token:e,providedIn:"environment",factory:()=>new e(I(Vn))}),e})();function Ry(e){e.getStandaloneInjector=t=>t.get(jA).getOrCreateStandaloneInjector(e)}
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
function Jt(e,t,n){return e[t]=n}(e,s+1,i?r.call(i,o):r(o)):function gi(e,t){const n=e[t];return n===j?void 0:n}(e,s+1)}(D(),function Xe(){const e=V.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}(),e,t,n,r)}function _c(e){return t=>{setTimeout(e,void 0,t)}}const ge=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class dT extends Ze{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&"object"==typeof t){var a,l,u;const d=t;o=null===(a=d.next)||void 0===a?void 0:a.bind(d),i=null===(l=d.error)||void 0===l?void 0:l.bind(d),s=null===(u=d.complete)||void 0===u?void 0:u.bind(d)}this.__isAsync&&(i=_c(i),o&&(o=_c(o)),s&&(s=_c(s)));const c=super.subscribe({next:o,error:i,complete:s});return t instanceof ct&&t.add(c),c}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function fT(){return this._results[cr()]()}class Dc{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=cr(),r=Dc.prototype;r[n]||(r[n]=fT)}get changes(){return this._changes||(this._changes=new ge)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const r=this;r.dirty=!1;const o=yt(t);(this._changesDetected=!function hb(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}(r._results,o,n))&&(r._results=o,r.length=o.length,r.last=o[this.length-1],r.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let wn=(()=>{class e{}return e.__NG_ELEMENT_ID__=gT,e})();const hT=wn,pT=class extends hT{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t,n){const r=this._declarationTContainer.tViews,o=ks(this._declarationLView,r,t,16,null,r.declTNode,null,null,null,null,n||null);o[17]=this._declarationLView[this._declarationTContainer.index];const s=this._declarationLView[19];return null!==s&&(o[19]=s.createEmbeddedView(r)),Qu(r,o,t),new oi(o)}};function gT(){return Ys(Fe(),D())}function Ys(e,t){return 4&e.type?new pT(t,e,qr(e,t)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ht=(()=>{class e{}return e.__NG_ELEMENT_ID__=mT,e})();function mT(){return qy(Fe(),D())}const yT=Ht,zy=class extends yT{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return qr(this._hostTNode,this._hostLView)}get injector(){return new Lr(this._hostTNode,this._hostLView)}get parentInjector(){const t=ms(this._hostTNode,this._hostLView);if(Vh(t)){const n=kr(t,this._hostLView),r=Or(t);return new Lr(n[1].data[r+8],n)}return new Lr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=Wy(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){let o,i;"number"==typeof r?o=r:null!=r&&(o=r.index,i=r.injector);const s=t.createEmbeddedView(n||{},i);return this.insert(s,o),s}createComponent(t,n,r,o,i){const s=t&&!function jo(e){return"function"==typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t);let a;if(s)a=n;else{const d=n||{};a=d.index,r=d.injector,o=d.projectableNodes,i=d.environmentInjector||d.ngModuleRef}const l=s?t:new ii(ne(t)),u=r||this.parentInjector;if(!i&&null==l.ngModule){const f=(s?u:this.parentInjector).get(Vn,null);f&&(i=f)}const c=l.create(u,o,void 0,i);return this.insert(c.hostView,a),c}insert(t,n){const r=t._lView,o=r[1];if(function PE(e){return kt(e[3])}(r)){const c=this.indexOf(t);if(-1!==c)this.detach(c);else{const d=r[3],f=new zy(d,d[6],d[3]);f.detach(f.indexOf(t))}}const i=this._adjustIndex(n),s=this._lContainer;!function dS(e,t,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-10?(t[4]=n[o],Kh(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function fS(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const a=t[19];null!==a&&a.insertView(e),t[2]|=64}(o,r,s,i);const a=Tu(i,s),l=r[G],u=Ts(l,s[7]);return null!==u&&function lS(e,t,n,r,o,i){r[0]=o,r[6]=t,ri(e,r,n,1,o,i)}(o,s[6],l,r,u,a),t.attachToViewContainerRef(),Kh(Cc(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=Wy(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=Mu(this._lContainer,n);r&&(_s(Cc(this._lContainer),n),Qp(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=Mu(this._lContainer,n);return r&&null!=_s(Cc(this._lContainer),n)?new oi(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function Wy(e){return e[8]}function Cc(e){return e[8]||(e[8]=[])}function qy(e,t){let n;const r=t[e.index];if(kt(r))n=r;else{let o;if(8&e.type)o=Ae(r);else{const i=t[G];o=i.createComment("");const s=At(e,t);ur(i,Ts(i,s),o,function mS(e,t){return e.nextSibling(t)}(i,s),!1)}t[e.index]=n=qg(r,t,o,e),Vs(t,n)}return new zy(n,e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class wc{constructor(t){this.queryList=t,this.matches=null}clone(){return new wc(this.queryList)}setDirty(){this.queryList.setDirty()}}class Ec{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const r=null!==t.contentQueries?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){const s=n.getByIndex(i);o.push(this.queries[s.indexInDeclarationView].clone())}return new Ec(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==Jy(t,n).matches&&this.queries[n].setDirty()}}class Qy{constructor(t,n,r=null){this.predicate=t,this.flags=n,this.read=r}}class bc{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){const o=null!==n?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,null!==n?n.push(i):n=[i])}return null!==n?new bc(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class Sc{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new Sc(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=t.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];this.matchTNodeWithReadOption(t,n,DT(n,i)),this.matchTNodeWithReadOption(t,n,vs(n,t,i,!1,!1))}else r===wn?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,vs(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(null!==r){const o=this.metadata.read;if(null!==o)if(o===_t||o===Ht||o===wn&&4&n.type)this.addMatch(n.index,-2);else{const i=vs(n,t,o,!1,!1);null!==i&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function DT(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function wT(e,t,n,r){return-1===n?function CT(e,t){return 11&e.type?qr(e,t):4&e.type?Ys(e,t):null}(t,e):-2===n?function ET(e,t,n){return n===_t?qr(t,e):n===wn?Ys(t,e):n===Ht?qy(t,e):void 0}(e,t,r):Lo(e,e[1],n,t)}function Ky(e,t,n,r){const o=t[19].queries[r];if(null===o.matches){const i=e.data,s=n.matches,a=[];for(let l=0;l<s.length;l+=2){const u=s[l];a.push(u<0?null:wT(t,i[u],s[l+1],n.metadata.read))}o.matches=a}return o.matches}function Mc(e,t,n,r){const o=e.queries.getByIndex(n),i=o.matches;if(null!==i){const s=Ky(e,t,o,n);for(let a=0;a<i.length;a+=2){const l=i[a];if(l>0)r.push(s[a/2]);else{const u=i[a+1],c=t[-l];for(let d=10;d<c.length;d++){const f=c[d];f[17]===f[3]&&Mc(f[1],f,u,r)}if(null!==c[9]){const d=c[9];for(let f=0;f<d.length;f++){const h=d[f];Mc(h[1],h,u,r)}}}}}return r}function yi(e){const t=D(),n=Y(),r=Ah();Ol(r+1);const o=Jy(n,r);if(e.dirty&&function FE(e){return 4==(4&e[2])}(t)===(2==(2&o.metadata.flags))){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?Mc(n,t,r,[]):Ky(n,t,o,r);e.reset(i,S0),e.notifyOnChanges()}return!0}return!1}function Ic(e,t,n){const r=Y();r.firstCreatePass&&(function Yy(e,t,n){null===e.queries&&(e.queries=new bc),e.queries.track(new Sc(t,n))}(r,new Qy(e,t,n),-1),2==(2&t)&&(r.staticViewQueries=!0)),function Zy(e,t,n){const r=new Dc(4==(4&n));Vg(e,t,r,r.destroy),null===t[19]&&(t[19]=new Ec),t[19].queries.push(new wc(r))}(r,D(),t)}function vi(){return function bT(e,t){return e[19].queries[t].queryList}(D(),Ah())}function Jy(e,t){return e.queries.getByIndex(t)}
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
       */const ea=new T("Application Initializer");let ta=(()=>{class e{constructor(n){this.appInits=n,this.resolve=Xs,this.reject=Xs,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const i=this.appInits[o]();if(li(i))n.push(i);else if(lc(i)){const s=new Promise((a,l)=>{i.subscribe({complete:a,error:l})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(I(ea,8))},e.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Di=new T("AppId",{providedIn:"root",factory:function yv(){return`${Fc()}${Fc()}${Fc()}`}});function Fc(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const vv=new T("Platform Initializer"),Pc=new T("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),_v=new T("appBootstrapListener");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let WT=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const En=new T("LocaleId",{providedIn:"root",factory:()=>Ee(En,F.Optional|F.SkipSelf)||function qT(){return typeof $localize<"u"&&$localize.locale||fo}()});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class KT{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let Oc=(()=>{class e{compileModuleSync(n){return new yc(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const r=this.compileModuleSync(n),i=yn(pt(n).declarations).reduce((s,a)=>{const l=ne(a);return l&&s.push(new ii(l)),s},[]);return new KT(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const JT=(()=>Promise.resolve(0))();function kc(e){typeof Zone>"u"?JT.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
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
class ke{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new ge(!1),this.onMicrotaskEmpty=new ge(!1),this.onStable=new ge(!1),this.onError=new ge(!1),typeof Zone>"u")throw new C(908,!1);Zone.assertZonePatched();const o=this;if(o._nesting=0,o._outer=o._inner=Zone.current,Zone.AsyncStackTaggingZoneSpec){const i=Zone.AsyncStackTaggingZoneSpec;o._inner=o._inner.fork(new i("Angular"))}Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function XT(){let e=se.requestAnimationFrame,t=se.cancelAnimationFrame;if(typeof Zone<"u"&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function nx(e){const t=()=>{!function tx(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(se,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,Vc(e),e.isCheckStableRunning=!0,Lc(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),Vc(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,a)=>{try{return wv(e),n.invokeTask(o,i,s,a)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),Ev(e)}},onInvoke:(n,r,o,i,s,a,l)=>{try{return wv(e),n.invoke(o,i,s,a,l)}finally{e.shouldCoalesceRunChangeDetection&&t(),Ev(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(e._hasPendingMicrotasks=i.microTask,Vc(e),Lc(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!ke.isInAngularZone())throw new C(909,!1)}static assertNotInAngularZone(){if(ke.isInAngularZone())throw new C(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,ex,Xs,Xs);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const ex={};function Lc(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Vc(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function wv(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Ev(e){e._nesting--,Lc(e)}class rx{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new ge,this.onMicrotaskEmpty=new ge,this.onStable=new ge,this.onError=new ge}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const bv=new T(""),na=new T("");let Bc,$c=(()=>{class e{constructor(n,r,o){this._ngZone=n,this.registry=r,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,Bc||(function ox(e){Bc=e}(o),o.addToWindow(r)),this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{ke.assertNotInAngularZone(),kc(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())kc(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let i=-1;r&&r>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(n){this.registry.registerApplication(n,this)}unregisterApplication(n){this.registry.unregisterApplication(n)}findProviders(n,r,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(I(ke),I(jc),I(na))},e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})(),jc=(()=>{class e{constructor(){this._applications=new Map}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){var o,i;return null!==(o=null===(i=Bc)||void 0===i?void 0:i.findTestabilityInTree(this,n,r))&&void 0!==o?o:null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})(),Un=null;const Sv=new T("AllowMultipleToken"),Hc=new T("PlatformDestroyListeners");class Mv{constructor(t,n){this.name=t,this.token=n}}function Av(e,t,n=[]){const r=`Platform: ${t}`,o=new T(r);return(i=[])=>{let s=Uc();if(!s||s.injector.get(Sv,!1)){const a=[...n,...i,{provide:o,useValue:!0}];e?e(a):function ax(e){if(Un&&!Un.get(Sv,!1))throw new C(400,!1);Un=e;const t=e.get(xv);(function Iv(e){const t=e.get(vv,null);t&&t.forEach(n=>n())})(e)}(function Tv(e=[],t){return Dt.create({name:t,providers:[{provide:au,useValue:"platform"},{provide:Hc,useValue:new Set([()=>Un=null])},...e]})}(a,r))}return function ux(e){const t=Uc();if(!t)throw new C(401,!1);return t}()}}function Uc(){var e,t;return null!==(e=null===(t=Un)||void 0===t?void 0:t.get(xv))&&void 0!==e?e:null}let xv=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const o=function Rv(e,t){let n;return n="noop"===e?new rx:("zone.js"===e?void 0:e)||new ke(t),n}(r?.ngZone,function Nv(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!e||!e.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!e||!e.ngZoneRunCoalescing)||!1}}(r)),i=[{provide:ke,useValue:o}];return o.run(()=>{const s=Dt.create({providers:i,parent:this.injector,name:n.moduleType.name}),a=n.create(s),l=a.injector.get(Qr,null);if(!l)throw new C(402,!1);return o.runOutsideAngular(()=>{const u=o.onError.subscribe({next:c=>{l.handleError(c)}});a.onDestroy(()=>{oa(this._modules,a),u.unsubscribe()})}),function Fv(e,t,n){try{const r=n();return li(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(l,o,()=>{const u=a.injector.get(ta);return u.runInitializers(),u.donePromise.then(()=>(function iy(e){ft(e,"Expected localeId to be defined"),"string"==typeof e&&(oy=e.toLowerCase().replace(/_/g,"-"))}(a.injector.get(En,fo)||fo),this._moduleDoBootstrap(a),a))})})}bootstrapModule(n,r=[]){const o=Pv({},r);return function ix(e,t,n){const r=new yc(n);return Promise.resolve(r)}(0,0,n).then(i=>this.bootstrapModuleFactory(i,o))}_moduleDoBootstrap(n){const r=n.injector.get(ra);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new C(403,!1);n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new C(404,!1);this._modules.slice().forEach(r=>r.destroy()),this._destroyListeners.forEach(r=>r());const n=this._injector.get(Hc,null);n&&(n.forEach(r=>r()),n.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(I(Dt))},e.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();function Pv(e,t){return Array.isArray(t)?t.reduce(Pv,e):{...e,...t}}let ra=(()=>{class e{constructor(n,r,o){this._zone=n,this._injector=r,this._exceptionHandler=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const i=new Ce(a=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{a.next(this._stable),a.complete()})}),s=new Ce(a=>{let l;this._zone.runOutsideAngular(()=>{l=this._zone.onStable.subscribe(()=>{ke.assertNotInAngularZone(),kc(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,a.next(!0))})})});const u=this._zone.onUnstable.subscribe(()=>{ke.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{a.next(!1)}))});return()=>{l.unsubscribe(),u.unsubscribe()}});this.isStable=function nE(...e){const t=Io(e),n=function Kw(e,t){return"number"==typeof hl(e)?e.pop():t}(e,1/0),r=e;return r.length?1===r.length?Ft(r[0]):Ir(n)(Ie(r,t)):un}(i,s.pipe(function rE(e={}){const{connector:t=(()=>new Ze),resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:o=!0}=e;return i=>{let s,a,l,u=0,c=!1,d=!1;const f=()=>{a?.unsubscribe(),a=void 0},h=()=>{f(),s=l=void 0,c=d=!1},p=()=>{const g=s;h(),g?.unsubscribe()};return Me((g,v)=>{u++,!d&&!c&&f();const y=l=l??t();v.add(()=>{u--,0===u&&!d&&!c&&(a=pl(p,o))}),y.subscribe(v),!s&&u>0&&(s=new Mo({next:w=>y.next(w),error:w=>{d=!0,f(),a=pl(h,n,w),y.error(w)},complete:()=>{c=!0,f(),a=pl(h,r),y.complete()}}),Ft(g).subscribe(s))})(i)}}()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(n,r){const o=n instanceof Tp;if(!this._injector.get(ta).done)throw!o&&function Tr(e){const t=ne(e)||Ye(e)||Je(e);return null!==t&&t.standalone}(n),new C(405,false);let s;s=o?n:this._injector.get(Xo).resolveComponentFactory(n),this.componentTypes.push(s.componentType);const a=function sx(e){return e.isBoundToModule}(s)?void 0:this._injector.get(gr),u=s.create(Dt.NULL,[],r||s.selector,a),c=u.location.nativeElement,d=u.injector.get(bv,null);return d?.registerApplication(c),u.onDestroy(()=>{this.detachView(u.hostView),oa(this.components,u),d?.unregisterApplication(c)}),this._loadComponent(u),u}tick(){if(this._runningTick)throw new C(101,!1);try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;oa(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(_v,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>oa(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new C(406,!1);const n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return e.\u0275fac=function(n){return new(n||e)(I(ke),I(Vn),I(Qr))},e.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function oa(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let kv=!0,ia=(()=>{class e{}return e.__NG_ELEMENT_ID__=fx,e})();function fx(e){return function hx(e,t,n){if(ss(e)&&!n){const r=mt(e.index,t);return new oi(r,r)}return 47&e.type?new oi(t[16],t):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Fe(),D(),16==(16&e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Bv{constructor(){}supports(t){return si(t)}create(t){return new _x(t)}}const vx=(e,t)=>t;class _x{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||vx}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){const s=!r||n&&n.currentIndex<Uv(r,o,i)?n:r,a=Uv(s,o,i),l=s.currentIndex;if(s===r)o--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)o++;else{i||(i=[]);const u=a-o,c=l-o;if(u!=c){for(let f=0;f<u;f++){const h=f<i.length?i[f]:i[f]=0,p=h+f;c<=p&&p<u&&(i[f]=h+1)}i[s.previousIndex]=c-u}}a!==l&&t(s,a,l)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!si(t))throw new C(900,!1);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let o,i,s,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let a=0;a<this.length;a++)i=t[a],s=this._trackByFn(a,i),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,i,s,a)),Object.is(n.item,i)||this._addIdentityChange(n,i)):(n=this._mismatch(n,i,s,a),r=!0),n=n._next}else o=0,function GM(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[cr()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,a=>{s=this._trackByFn(o,a),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,a,s,o)),Object.is(n.item,a)||this._addIdentityChange(n,a)):(n=this._mismatch(n,a,s,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,o){let i;return null===t?i=this._itTail:(i=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,o)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,o)):t=this._addAfter(new Dx(n,r),i,o),t}_verifyReinsertion(t,n,r,o){let i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==i?t=this._reinsertAfter(i,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const o=t._prevRemoved,i=t._nextRemoved;return null===o?this._removalsHead=i:o._nextRemoved=i,null===i?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const o=null===n?this._itHead:n._next;return t._next=o,t._prev=n,null===o?this._itTail=t:o._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new Hv),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Hv),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class Dx{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class Cx{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class Hv{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new Cx,this.map.set(n,r)),r.add(t)}get(t,n){const o=this.map.get(t);return o?o.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Uv(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class Gv{constructor(){}supports(t){return t instanceof Map||sc(t)}create(){return new wx}}class wx{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||sc(t)))throw new C(900,!1)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const i=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,i)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const r=t._prev;return n._next=t,n._prev=r,t._prev=n,r&&(r._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const o=this._records.get(t);this._maybeAddToChanges(o,n);const i=o._prev,s=o._next;return i&&(i._next=s),s&&(s._prev=i),o._next=null,o._prev=null,o}const r=new Ex(t);return this._records.set(t,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(r=>n(t[r],r))}}class Ex{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zv(){return new la([new Bv])}let la=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||zv()),deps:[[e,new Wo,new zo]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new C(901,!1)}}return e.\u0275prov=R({token:e,providedIn:"root",factory:zv}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Wv(){return new Ci([new Gv])}let Ci=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||Wv()),deps:[[e,new Wo,new zo]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(r)return r;throw new C(901,!1)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=R({token:e,providedIn:"root",factory:Wv}),e})();const Mx=Av(null,"core",[]);
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
let Ix=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(I(ra))},e.\u0275mod=bt({type:e}),e.\u0275inj=ht({}),e})(),ua=null;
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
const ot=new T("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Qc=(()=>{class e{historyGo(n){throw new Error("Not implemented")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=R({token:e,factory:function(){return function Nx(){return I(qv)}()},providedIn:"platform"}),e})();const Rx=new T("Location Initialized");let qv=(()=>{class e extends Qc{constructor(n){super(),this._doc=n,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return nn().getBaseHref(this._doc)}onPopState(n){const r=nn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){const r=nn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(n){this.location.pathname=n}pushState(n,r,o){Qv()?this._history.pushState(n,r,o):this.location.hash=o}replaceState(n,r,o){Qv()?this._history.replaceState(n,r,o):this.location.hash=o}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}}return e.\u0275fac=function(n){return new(n||e)(I(ot))},e.\u0275prov=R({token:e,factory:function(){return function Fx(){return new qv(I(ot))}
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
       */()},providedIn:"platform"}),e})();function Qv(){return!!window.history.pushState}function Kc(e,t){if(0==e.length)return t;if(0==t.length)return e;let n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,2==n?e+t.substring(1):1==n?e+t:e+"/"+t}function Kv(e){const t=e.match(/#|\?|$/),n=t&&t.index||e.length;return e.slice(0,n-("/"===e[n-1]?1:0))+e.slice(n)}function Mn(e){return e&&"?"!==e[0]?"?"+e:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let yr=(()=>{class e{historyGo(n){throw new Error("Not implemented")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=R({token:e,factory:function(){return Ee(Yv)},providedIn:"root"}),e})();const Zv=new T("appBaseHref");let Yv=(()=>{class e extends yr{constructor(n,r){var o,i,s;super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=null!==(o=null!==(i=r??this._platformLocation.getBaseHrefFromDOM())&&void 0!==i?i:null===(s=Ee(ot).location)||void 0===s?void 0:s.origin)&&void 0!==o?o:""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Kc(this._baseHref,n)}path(n=!1){const r=this._platformLocation.pathname+Mn(this._platformLocation.search),o=this._platformLocation.hash;return o&&n?`${r}${o}`:r}pushState(n,r,o,i){const s=this.prepareExternalUrl(o+Mn(i));this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){const s=this.prepareExternalUrl(o+Mn(i));this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){var r,o;null===(r=(o=this._platformLocation).historyGo)||void 0===r||r.call(o,n)}}return e.\u0275fac=function(n){return new(n||e)(I(Qc),I(Zv,8))},e.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Px=(()=>{class e extends yr{constructor(n,r){super(),this._platformLocation=n,this._baseHref="",this._removeListenerFns=[],null!=r&&(this._baseHref=r)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}path(n=!1){let r=this._platformLocation.hash;return null==r&&(r="#"),r.length>0?r.substring(1):r}prepareExternalUrl(n){const r=Kc(this._baseHref,n);return r.length>0?"#"+r:r}pushState(n,r,o,i){let s=this.prepareExternalUrl(o+Mn(i));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){let s=this.prepareExternalUrl(o+Mn(i));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){var r,o;null===(r=(o=this._platformLocation).historyGo)||void 0===r||r.call(o,n)}}return e.\u0275fac=function(n){return new(n||e)(I(Qc),I(Zv,8))},e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})(),Zc=(()=>{class e{constructor(n){this._subject=new ge,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;const r=this._locationStrategy.getBaseHref();this._baseHref=Kv(Jv(r)),this._locationStrategy.onPopState(o=>{this._subject.emit({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){var n;null===(n=this._urlChangeSubscription)||void 0===n||n.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+Mn(r))}normalize(n){return e.stripTrailingSlash(function kx(e,t){return e&&t.startsWith(e)?t.substring(e.length):t}(this._baseHref,Jv(n)))}prepareExternalUrl(n){return n&&"/"!==n[0]&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",o=null){this._locationStrategy.pushState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+Mn(r)),o)}replaceState(n,r="",o=null){this._locationStrategy.replaceState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+Mn(r)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){var r,o;null===(r=(o=this._locationStrategy).historyGo)||void 0===r||r.call(o,n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)})),()=>{const r=this._urlChangeListeners.indexOf(n);var o;this._urlChangeListeners.splice(r,1),0===this._urlChangeListeners.length&&(null===(o=this._urlChangeSubscription)||void 0===o||o.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(o=>o(n,r))}subscribe(n,r,o){return this._subject.subscribe({next:n,error:r,complete:o})}}return e.normalizeQueryParams=Mn,e.joinWithSlash=Kc,e.stripTrailingSlash=Kv,e.\u0275fac=function(n){return new(n||e)(I(yr))},e.\u0275prov=R({token:e,factory:function(){return function Ox(){return new Zc(I(yr))}()},providedIn:"root"}),e})();
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
       */let _a=(()=>{class e{constructor(n,r,o,i){this._iterableDiffers=n,this._keyValueDiffers=r,this._ngEl=o,this._renderer=i,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(n){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof n?n.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(n){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof n?n.split(/\s+/):n,this._rawClass&&(si(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const n=this._iterableDiffer.diff(this._rawClass);n&&this._applyIterableChanges(n)}else if(this._keyValueDiffer){const n=this._keyValueDiffer.diff(this._rawClass);n&&this._applyKeyValueChanges(n)}}_applyKeyValueChanges(n){n.forEachAddedItem(r=>this._toggleClass(r.key,r.currentValue)),n.forEachChangedItem(r=>this._toggleClass(r.key,r.currentValue)),n.forEachRemovedItem(r=>{r.previousValue&&this._toggleClass(r.key,!1)})}_applyIterableChanges(n){n.forEachAddedItem(r=>{if("string"!=typeof r.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${ie(r.item)}`);this._toggleClass(r.item,!0)}),n.forEachRemovedItem(r=>this._toggleClass(r.item,!1))}_applyClasses(n){n&&(Array.isArray(n)||n instanceof Set?n.forEach(r=>this._toggleClass(r,!0)):Object.keys(n).forEach(r=>this._toggleClass(r,!!n[r])))}_removeClasses(n){n&&(Array.isArray(n)||n instanceof Set?n.forEach(r=>this._toggleClass(r,!1)):Object.keys(n).forEach(r=>this._toggleClass(r,!1)))}_toggleClass(n,r){(n=n.trim())&&n.split(/\s+/g).forEach(o=>{r?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}}return e.\u0275fac=function(n){return new(n||e)(_(la),_(Ci),_(_t),_(mn))},e.\u0275dir=L({type:e,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"},standalone:!0}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class DN{constructor(t,n,r,o){this.$implicit=t,this.ngForOf=n,this.index=r,this.count=o}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let bi=(()=>{class e{constructor(n,r,o){this._viewContainer=n,this._template=r,this._differs=o,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const n=this._ngForOf;!this._differ&&n&&(this._differ=this._differs.find(n).create(this.ngForTrackBy))}if(this._differ){const n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){const r=this._viewContainer;n.forEachOperation((o,i,s)=>{if(null==o.previousIndex)r.createEmbeddedView(this._template,new DN(o.item,this._ngForOf,-1,-1),null===s?void 0:s);else if(null==s)r.remove(null===i?void 0:i);else if(null!==i){const a=r.get(i);r.move(a,s),c_(a,o)}});for(let o=0,i=r.length;o<i;o++){const a=r.get(o).context;a.index=o,a.count=i,a.ngForOf=this._ngForOf}n.forEachIdentityChange(o=>{c_(r.get(o.currentIndex),o)})}static ngTemplateContextGuard(n,r){return!0}}return e.\u0275fac=function(n){return new(n||e)(_(Ht),_(wn),_(la))},e.\u0275dir=L({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0}),e})();function c_(e,t){e.context.$implicit=t.item}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let go=(()=>{class e{constructor(n,r){this._viewContainer=n,this._context=new wN,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=r}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){d_("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){d_("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,r){return!0}}return e.\u0275fac=function(n){return new(n||e)(_(Ht),_(wn))},e.\u0275dir=L({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0}),e})();class wN{constructor(){this.$implicit=null,this.ngIf=null}}function d_(e,t){if(t&&!t.createEmbeddedView)throw new Error(`${e} must be a TemplateRef, but received '${ie(t)}'.`)}
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
let KN=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=bt({type:e}),e.\u0275inj=ht({}),e})();
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
let XN=(()=>{class e{}return e.\u0275prov=R({token:e,providedIn:"root",factory:()=>new eR(I(ot),window)}),e})();class eR{constructor(t,n){this.document=t,this.window=n,this.offset=()=>[0,0]}setOffset(t){this.offset=Array.isArray(t)?()=>t:t}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(t){this.supportsScrolling()&&this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){if(!this.supportsScrolling())return;const n=function tR(e,t){const n=e.getElementById(t)||e.getElementsByName(t)[0];if(n)return n;if("function"==typeof e.createTreeWalker&&e.body&&(e.body.createShadowRoot||e.body.attachShadow)){const r=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT);let o=r.currentNode;for(;o;){const i=o.shadowRoot;if(i){const s=i.getElementById(t)||i.querySelector(`[name="${t}"]`);if(s)return s}o=r.nextNode()}}return null}(this.document,t);n&&(this.scrollToElement(n),n.focus())}setHistoryScrollRestoration(t){if(this.supportScrollRestoration()){const n=this.window.history;n&&n.scrollRestoration&&(n.scrollRestoration=t)}}scrollToElement(t){const n=t.getBoundingClientRect(),r=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,i=this.offset();this.window.scrollTo(r-i[0],o-i[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const t=g_(this.window.history)||g_(Object.getPrototypeOf(this.window.history));return!(!t||!t.writable&&!t.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function g_(e){return Object.getOwnPropertyDescriptor(e,"scrollRestoration")}
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
class _R extends class xx{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function Tx(e){ua||(ua=e)}(new fd)}onAndCancel(t,n,r){return t.addEventListener(n,r,!1),()=>{t.removeEventListener(n,r,!1)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,n){return(n=n||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return"window"===n?window:"document"===n?t:"body"===n?t.body:null}getBaseHref(t){const n=function DR(){return Mi=Mi||document.querySelector("base"),Mi?Mi.getAttribute("href"):null}();return null==n?null:function CR(e){Ca=Ca||document.createElement("a"),Ca.setAttribute("href",e);const t=Ca.pathname;return"/"===t.charAt(0)?t:`/${t}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}resetBaseElement(){Mi=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return a_(document.cookie,t)}}let Ca,Mi=null;const D_=new T("TRANSITION_ID"),ER=[{provide:ea,useFactory:function wR(e,t,n){return()=>{n.get(ta).donePromise.then(()=>{const r=nn(),o=t.querySelectorAll(`style[ng-transition="${e}"]`);for(let i=0;i<o.length;i++)r.remove(o[i])})}},deps:[D_,ot,Dt],multi:!0}];let SR=(()=>{class e{build(){return new XMLHttpRequest}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const wa=new T("EventManagerPlugins");let Ea=(()=>{class e{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(o=>o.manager=this),this._plugins=n.slice().reverse()}addEventListener(n,r,o){return this._findPluginFor(r).addEventListener(n,r,o)}addGlobalEventListener(n,r,o){return this._findPluginFor(r).addGlobalEventListener(n,r,o)}getZone(){return this._zone}_findPluginFor(n){const r=this._eventNameToPlugin.get(n);if(r)return r;const o=this._plugins;for(let i=0;i<o.length;i++){const s=o[i];if(s.supports(n))return this._eventNameToPlugin.set(n,s),s}throw new Error(`No event manager plugin found for event ${n}`)}}return e.\u0275fac=function(n){return new(n||e)(I(wa),I(ke))},e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})();class C_{constructor(t){this._doc=t}addGlobalEventListener(t,n,r){const o=nn().getGlobalEventTarget(this._doc,t);if(!o)throw new Error(`Unsupported event target ${o} for event ${n}`);return this.addEventListener(o,n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let w_=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(n){const r=new Set;n.forEach(o=>{this._stylesSet.has(o)||(this._stylesSet.add(o),r.add(o))}),this.onStylesAdded(r)}onStylesAdded(n){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})(),Ii=(()=>{class e extends w_{constructor(n){super(),this._doc=n,this._hostNodes=new Map,this._hostNodes.set(n.head,[])}_addStylesToHost(n,r,o){n.forEach(i=>{const s=this._doc.createElement("style");s.textContent=i,o.push(r.appendChild(s))})}addHost(n){const r=[];this._addStylesToHost(this._stylesSet,n,r),this._hostNodes.set(n,r)}removeHost(n){const r=this._hostNodes.get(n);r&&r.forEach(E_),this._hostNodes.delete(n)}onStylesAdded(n){this._hostNodes.forEach((r,o)=>{this._addStylesToHost(n,o,r)})}ngOnDestroy(){this._hostNodes.forEach(n=>n.forEach(E_))}}return e.\u0275fac=function(n){return new(n||e)(I(ot))},e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})();function E_(e){nn().remove(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const hd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},pd=/%COMP%/g;function ba(e,t,n){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?ba(e,o,n):(o=o.replace(pd,e),n.push(o))}return n}function M_(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let gd=(()=>{class e{constructor(n,r,o){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.rendererByCompId=new Map,this.defaultRenderer=new md(n)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;switch(r.encapsulation){case Qt.Emulated:{let o=this.rendererByCompId.get(r.id);return o||(o=new NR(this.eventManager,this.sharedStylesHost,r,this.appId),this.rendererByCompId.set(r.id,o)),o.applyToHost(n),o}case 1:case Qt.ShadowDom:return new RR(this.eventManager,this.sharedStylesHost,n,r);default:if(!this.rendererByCompId.has(r.id)){const o=ba(r.id,r.styles,[]);this.sharedStylesHost.addStyles(o),this.rendererByCompId.set(r.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(n){return new(n||e)(I(Ea),I(Ii),I(Di))},e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})();class md{constructor(t){this.eventManager=t,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(t,n){return n?document.createElementNS(hd[n]||n,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,n){(A_(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){t&&(A_(t)?t.content:t).insertBefore(n,r)}removeChild(t,n){t&&t.removeChild(n)}selectRootElement(t,n){let r="string"==typeof t?document.querySelector(t):t;if(!r)throw new Error(`The selector "${t}" did not match any elements`);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+":"+n;const i=hd[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){const o=hd[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){o&(lt.DashCase|lt.Important)?t.style.setProperty(n,r,o&lt.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&lt.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t[n]=r}setValue(t,n){t.nodeValue=n}listen(t,n,r){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,n,M_(r)):this.eventManager.addEventListener(t,n,M_(r))}}function A_(e){return"TEMPLATE"===e.tagName&&void 0!==e.content}class NR extends md{constructor(t,n,r,o){super(t),this.component=r;const i=ba(o+"-"+r.id,r.styles,[]);n.addStyles(i),this.contentAttr=function AR(e){return"_ngcontent-%COMP%".replace(pd,e)}(o+"-"+r.id),this.hostAttr=function TR(e){return"_nghost-%COMP%".replace(pd,e)}(o+"-"+r.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,n){const r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}}class RR extends md{constructor(t,n,r,o){super(t),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const i=ba(o.id,o.styles,[]);for(let s=0;s<i.length;s++){const a=document.createElement("style");a.textContent=i[s],this.shadowRoot.appendChild(a)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(this.nodeOrShadowRoot(t),n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let FR=(()=>{class e extends C_{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o){return n.addEventListener(r,o,!1),()=>this.removeEventListener(n,r,o)}removeEventListener(n,r,o){return n.removeEventListener(r,o)}}return e.\u0275fac=function(n){return new(n||e)(I(ot))},e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const T_=["alt","control","meta","shift"],PR={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},OR={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let kR=(()=>{class e extends C_{constructor(n){super(n)}supports(n){return null!=e.parseEventName(n)}addEventListener(n,r,o){const i=e.parseEventName(r),s=e.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>nn().onAndCancel(n,i.domEventName,s))}static parseEventName(n){const r=n.toLowerCase().split("."),o=r.shift();if(0===r.length||"keydown"!==o&&"keyup"!==o)return null;const i=e._normalizeKey(r.pop());let s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),T_.forEach(u=>{const c=r.indexOf(u);c>-1&&(r.splice(c,1),s+=u+".")}),s+=i,0!=r.length||0===i.length)return null;const l={};return l.domEventName=o,l.fullKey=s,l}static matchEventFullKeyCode(n,r){let o=PR[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),!(null==o||!o)&&(o=o.toLowerCase()," "===o?o="space":"."===o&&(o="dot"),T_.forEach(s=>{s!==o&&(0,OR[s])(n)&&(i+=s+".")}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{e.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return"esc"===n?"escape":n}}return e.\u0275fac=function(n){return new(n||e)(I(ot))},e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const jR=Av(Mx,"browser",[{provide:Pc,useValue:"browser"},{provide:vv,useValue:function LR(){fd.makeCurrent()},multi:!0},{provide:ot,useFactory:function $R(){return function Vb(e){Yl=e}(document),document},deps:[]}]),R_=new T(""),F_=[{provide:na,useClass:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class bR{addToWindow(t){se.getAngularTestability=(r,o=!0)=>{const i=t.findTestabilityInTree(r,o);if(null==i)throw new Error("Could not find testability for element.");return i},se.getAllAngularTestabilities=()=>t.getAllTestabilities(),se.getAllAngularRootElements=()=>t.getAllRootElements(),se.frameworkStabilizers||(se.frameworkStabilizers=[]),se.frameworkStabilizers.push(r=>{const o=se.getAllAngularTestabilities();let i=o.length,s=!1;const a=function(l){s=s||l,i--,0==i&&r(s)};o.forEach(function(l){l.whenStable(a)})})}findTestabilityInTree(t,n,r){return null==n?null:t.getTestability(n)??(r?nn().isShadowRoot(n)?this.findTestabilityInTree(t,n.host,!0):this.findTestabilityInTree(t,n.parentElement,!0):null)}},deps:[]},{provide:bv,useClass:$c,deps:[ke,jc,na]},{provide:$c,useClass:$c,deps:[ke,jc,na]}],P_=[{provide:au,useValue:"root"},{provide:Qr,useFactory:function VR(){return new Qr},deps:[]},{provide:wa,useClass:FR,multi:!0,deps:[ot,ke,Pc]},{provide:wa,useClass:kR,multi:!0,deps:[ot]},{provide:gd,useClass:gd,deps:[Ea,Ii,Di]},{provide:Np,useExisting:gd},{provide:w_,useExisting:Ii},{provide:Ii,useClass:Ii,deps:[ot]},{provide:Ea,useClass:Ea,deps:[wa,ke]},{provide:m_,useClass:SR,deps:[]},[]];let BR=(()=>{class e{constructor(n){}static withServerTransition(n){return{ngModule:e,providers:[{provide:Di,useValue:n.appId},{provide:D_,useExisting:Di},ER]}}}return e.\u0275fac=function(n){return new(n||e)(I(R_,12))},e.\u0275mod=bt({type:e}),e.\u0275inj=ht({providers:[...P_,...F_],imports:[KN,Ix]}),e})(),O_=(()=>{class e{constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}}return e.\u0275fac=function(n){return new(n||e)(I(ot))},e.\u0275prov=R({token:e,factory:function(n){let r=null;return r=n?new n:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function UR(){return new O_(I(ot))}(),r},providedIn:"root"}),e})();
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
function x(...e){return Ie(e,Io(e))}function zn(e,t){return ae(t)?$e(e,t,1):$e(e,1)}function rn(e,t){return Me((n,r)=>{let o=0;n.subscribe(we(r,i=>e.call(t,i,o++)&&r.next(i)))})}
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
       */class An{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(n=>{const r=n.indexOf(":");if(r>0){const o=n.slice(0,r),i=o.toLowerCase(),s=n.slice(r+1).trim();this.maybeSetNormalizedName(o,i),this.headers.has(i)?this.headers.get(i).push(s):this.headers.set(i,[s])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(n=>{let r=t[n];const o=n.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(o,r),this.maybeSetNormalizedName(n,o))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const n=this.headers.get(t.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,n){return this.clone({name:t,value:n,op:"a"})}set(t,n){return this.clone({name:t,value:n,op:"s"})}delete(t,n){return this.clone({name:t,value:n,op:"d"})}maybeSetNormalizedName(t,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,t)}init(){this.lazyInit&&(this.lazyInit instanceof An?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(n=>{this.headers.set(n,t.headers.get(n)),this.normalizedNames.set(n,t.normalizedNames.get(n))})}clone(t){const n=new An;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof An?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}applyUpdate(t){const n=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,n);const o=("a"===t.op?this.headers.get(n):void 0)||[];o.push(...r),this.headers.set(n,o);break;case"d":const i=t.value;if(i){let s=this.headers.get(n);if(!s)return;s=s.filter(a=>-1===i.indexOf(a)),0===s.length?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,s)}else this.headers.delete(n),this.normalizedNames.delete(n)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>t(this.normalizedNames.get(n),this.headers.get(n)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class YR{encodeKey(t){return j_(t)}encodeValue(t){return j_(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const XR=/%(\d[a-f0-9])/gi,e1={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function j_(e){return encodeURIComponent(e).replace(XR,(t,n)=>{var r;return null!==(r=e1[n])&&void 0!==r?r:t})}function Sa(e){return`${e}`}class Tn{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new YR,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function JR(e,t){const n=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{const i=o.indexOf("="),[s,a]=-1==i?[t.decodeKey(o),""]:[t.decodeKey(o.slice(0,i)),t.decodeValue(o.slice(i+1))],l=n.get(s)||[];l.push(a),n.set(s,l)}),n}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(n=>{const r=t.fromObject[n],o=Array.isArray(r)?r.map(Sa):[Sa(r)];this.map.set(n,o)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const n=this.map.get(t);return n?n[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,n){return this.clone({param:t,value:n,op:"a"})}appendAll(t){const n=[];return Object.keys(t).forEach(r=>{const o=t[r];Array.isArray(o)?o.forEach(i=>{n.push({param:r,value:i,op:"a"})}):n.push({param:r,value:o,op:"a"})}),this.clone(n)}set(t,n){return this.clone({param:t,value:n,op:"s"})}delete(t,n){return this.clone({param:t,value:n,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const n=this.encoder.encodeKey(t);return this.map.get(t).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const n=new Tn({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(t),n}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const n=("a"===t.op?this.map.get(t.param):void 0)||[];n.push(Sa(t.value)),this.map.set(t.param,n);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const o=r.indexOf(Sa(t.value));-1!==o&&r.splice(o,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class t1{constructor(){this.map=new Map}set(t,n){return this.map.set(t,n),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function B_(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function H_(e){return typeof Blob<"u"&&e instanceof Blob}function U_(e){return typeof FormData<"u"&&e instanceof FormData}class Ai{constructor(t,n,r,o){let i;if(this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function n1(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==r?r:null,i=o):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new An),this.context||(this.context=new t1),this.params){const s=this.params.toString();if(0===s.length)this.urlWithParams=n;else{const a=n.indexOf("?");this.urlWithParams=n+(-1===a?"?":a<n.length-1?"&":"")+s}}else this.params=new Tn,this.urlWithParams=n}serializeBody(){return null===this.body?null:B_(this.body)||H_(this.body)||U_(this.body)||function r1(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof Tn?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||U_(this.body)?null:H_(this.body)?this.body.type||null:B_(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof Tn?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){var n;const r=t.method||this.method,o=t.url||this.url,i=t.responseType||this.responseType,s=void 0!==t.body?t.body:this.body,a=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,l=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let u=t.headers||this.headers,c=t.params||this.params;const d=null!==(n=t.context)&&void 0!==n?n:this.context;return void 0!==t.setHeaders&&(u=Object.keys(t.setHeaders).reduce((f,h)=>f.set(h,t.setHeaders[h]),u)),t.setParams&&(c=Object.keys(t.setParams).reduce((f,h)=>f.set(h,t.setParams[h]),c)),new Ai(r,o,s,{params:c,headers:u,context:d,reportProgress:l,responseType:i,withCredentials:a})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Re=(()=>((Re=Re||{})[Re.Sent=0]="Sent",Re[Re.UploadProgress=1]="UploadProgress",Re[Re.ResponseHeader=2]="ResponseHeader",Re[Re.DownloadProgress=3]="DownloadProgress",Re[Re.Response=4]="Response",Re[Re.User=5]="User",Re))();class _d{constructor(t,n=200,r="OK"){this.headers=t.headers||new An,this.status=void 0!==t.status?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class Dd extends _d{constructor(t={}){super(t),this.type=Re.ResponseHeader}clone(t={}){return new Dd({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class Ma extends _d{constructor(t={}){super(t),this.type=Re.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new Ma({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class G_ extends _d{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Cd(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}let Ia=(()=>{class e{constructor(n){this.handler=n}request(n,r,o={}){let i;if(n instanceof Ai)i=n;else{let l,u;l=o.headers instanceof An?o.headers:new An(o.headers),o.params&&(u=o.params instanceof Tn?o.params:new Tn({fromObject:o.params})),i=new Ai(n,r,void 0!==o.body?o.body:null,{headers:l,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials})}const s=x(i).pipe(zn(l=>this.handler.handle(l)));if(n instanceof Ai||"events"===o.observe)return s;const a=s.pipe(rn(l=>l instanceof Ma));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return a.pipe(q(l=>{if(null!==l.body&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return a.pipe(q(l=>{if(null!==l.body&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return a.pipe(q(l=>{if(null!==l.body&&"string"!=typeof l.body)throw new Error("Response is not a string.");return l.body}));default:return a.pipe(q(l=>l.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:(new Tn).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,Cd(o,r))}post(n,r,o={}){return this.request("POST",n,Cd(o,r))}put(n,r,o={}){return this.request("PUT",n,Cd(o,r))}}return e.\u0275fac=function(n){return new(n||e)(I(V_))},e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class z_{constructor(t,n){this.next=t,this.interceptor=n}handle(t){return this.interceptor.intercept(t,this.next)}}const W_=new T("HTTP_INTERCEPTORS");let o1=(()=>{class e{intercept(n,r){return r.handle(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})();
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
const i1=/^\)\]\}',?\n/;let q_=(()=>{class e{constructor(n){this.xhrFactory=n}handle(n){if("JSONP"===n.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new Ce(r=>{const o=this.xhrFactory.build();if(o.open(n.method,n.urlWithParams),n.withCredentials&&(o.withCredentials=!0),n.headers.forEach((h,p)=>o.setRequestHeader(h,p.join(","))),n.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){const h=n.detectContentTypeHeader();null!==h&&o.setRequestHeader("Content-Type",h)}if(n.responseType){const h=n.responseType.toLowerCase();o.responseType="json"!==h?h:"text"}const i=n.serializeBody();let s=null;const a=()=>{if(null!==s)return s;const h=o.statusText||"OK",p=new An(o.getAllResponseHeaders()),g=function s1(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(o)||n.url;return s=new Dd({headers:p,status:o.status,statusText:h,url:g}),s},l=()=>{let{headers:h,status:p,statusText:g,url:v}=a(),y=null;204!==p&&(y=typeof o.response>"u"?o.responseText:o.response),0===p&&(p=y?200:0);let w=p>=200&&p<300;if("json"===n.responseType&&"string"==typeof y){const m=y;y=y.replace(i1,"");try{y=""!==y?JSON.parse(y):null}catch(b){y=m,w&&(w=!1,y={error:b,text:y})}}w?(r.next(new Ma({body:y,headers:h,status:p,statusText:g,url:v||void 0})),r.complete()):r.error(new G_({error:y,headers:h,status:p,statusText:g,url:v||void 0}))},u=h=>{const{url:p}=a(),g=new G_({error:h,status:o.status||0,statusText:o.statusText||"Unknown Error",url:p||void 0});r.error(g)};let c=!1;const d=h=>{c||(r.next(a()),c=!0);let p={type:Re.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),"text"===n.responseType&&!!o.responseText&&(p.partialText=o.responseText),r.next(p)},f=h=>{let p={type:Re.UploadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),r.next(p)};return o.addEventListener("load",l),o.addEventListener("error",u),o.addEventListener("timeout",u),o.addEventListener("abort",u),n.reportProgress&&(o.addEventListener("progress",d),null!==i&&o.upload&&o.upload.addEventListener("progress",f)),o.send(i),r.next({type:Re.Sent}),()=>{o.removeEventListener("error",u),o.removeEventListener("abort",u),o.removeEventListener("load",l),o.removeEventListener("timeout",u),n.reportProgress&&(o.removeEventListener("progress",d),null!==i&&o.upload&&o.upload.removeEventListener("progress",f)),o.readyState!==o.DONE&&o.abort()}})}}return e.\u0275fac=function(n){return new(n||e)(I(m_))},e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const wd=new T("XSRF_COOKIE_NAME"),Ed=new T("XSRF_HEADER_NAME");class Q_{}let a1=(()=>{class e{constructor(n,r,o){this.doc=n,this.platform=r,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=a_(n,this.cookieName),this.lastCookieString=n),this.lastToken}}return e.\u0275fac=function(n){return new(n||e)(I(ot),I(Pc),I(wd))},e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})(),bd=(()=>{class e{constructor(n,r){this.tokenService=n,this.headerName=r}intercept(n,r){const o=n.url.toLowerCase();if("GET"===n.method||"HEAD"===n.method||o.startsWith("http://")||o.startsWith("https://"))return r.handle(n);const i=this.tokenService.getToken();return null!==i&&!n.headers.has(this.headerName)&&(n=n.clone({headers:n.headers.set(this.headerName,i)})),r.handle(n)}}return e.\u0275fac=function(n){return new(n||e)(I(Q_),I(Ed))},e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})(),l1=(()=>{class e{constructor(n,r){this.backend=n,this.injector=r,this.chain=null}handle(n){if(null===this.chain){const r=this.injector.get(W_,[]);this.chain=r.reduceRight((o,i)=>new z_(o,i),this.backend)}return this.chain.handle(n)}}return e.\u0275fac=function(n){return new(n||e)(I($_),I(Dt))},e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})(),u1=(()=>{class e{static disable(){return{ngModule:e,providers:[{provide:bd,useClass:o1}]}}static withOptions(n={}){return{ngModule:e,providers:[n.cookieName?{provide:wd,useValue:n.cookieName}:[],n.headerName?{provide:Ed,useValue:n.headerName}:[]]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=bt({type:e}),e.\u0275inj=ht({providers:[bd,{provide:W_,useExisting:bd,multi:!0},{provide:Q_,useClass:a1},{provide:wd,useValue:"XSRF-TOKEN"},{provide:Ed,useValue:"X-XSRF-TOKEN"}]}),e})(),c1=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=bt({type:e}),e.\u0275inj=ht({providers:[Ia,{provide:V_,useClass:l1},q_,{provide:$_,useExisting:q_}],imports:[u1.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]}),e})();
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
class Wt extends Ze{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){const n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){const{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}}const Aa=So(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}),{isArray:d1}=Array,{getPrototypeOf:f1,prototype:h1,keys:p1}=Object;function K_(e){if(1===e.length){const t=e[0];if(d1(t))return{args:t,keys:null};if(function g1(e){return e&&"object"==typeof e&&f1(e)===h1}(t)){const n=p1(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}const{isArray:m1}=Array;function Z_(e){return q(t=>function y1(e,t){return m1(t)?e(...t):e(t)}(e,t))}function Y_(e,t){return e.reduce((n,r,o)=>(n[r]=t[o],n),{})}function J_(...e){const t=Io(e),n=oh(e),{args:r,keys:o}=K_(e);if(0===r.length)return Ie([],t);const i=new Ce(function v1(e,t,n=Rn){return r=>{X_(t,()=>{const{length:o}=e,i=new Array(o);let s=o,a=o;for(let l=0;l<o;l++)X_(t,()=>{const u=Ie(e[l],t);let c=!1;u.subscribe(we(r,d=>{i[l]=d,c||(c=!0,a--),a||r.next(n(i.slice()))},()=>{--s||r.complete()}))},r)},r)}}(r,t,o?s=>Y_(o,s):Rn));return n?i.pipe(Z_(n)):i}function X_(e,t,n){e?ln(n,e,t):t()}function Sd(...e){return function _1(){return Ir(1)}()(Ie(e,Io(e)))}function eD(e){return new Ce(t=>{Ft(e()).subscribe(t)})}function Wn(e,t){const n=ae(e)?e:()=>e,r=o=>o.error(n());return new Ce(t?o=>t.schedule(r,0,o):r)}function Md(){return Me((e,t)=>{let n=null;e._refCount++;const r=we(t,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount)return void(n=null);const o=e._connection,i=n;n=null,o&&(!i||o===i)&&o.unsubscribe(),t.unsubscribe()});e.subscribe(r),r.closed||(n=e.connect())})}class tD extends Ce{constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,Gf(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){const t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new ct;const n=this.getSubject();t.add(this.source.subscribe(we(n,void 0,()=>{this._teardown(),n.complete()},r=>{this._teardown(),n.error(r)},()=>this._teardown()))),t.closed&&(this._connection=null,t=ct.EMPTY)}return t}refCount(){return Md()(this)}}function on(e,t){return Me((n,r)=>{let o=null,i=0,s=!1;const a=()=>s&&!o&&r.complete();n.subscribe(we(r,l=>{o?.unsubscribe();let u=0;const c=i++;Ft(e(l,c)).subscribe(o=we(r,d=>r.next(t?t(l,d,c,u++):d),()=>{o=null,a()}))},()=>{s=!0,a()}))})}function Ti(e){return e<=0?()=>un:Me((t,n)=>{let r=0;t.subscribe(we(n,o=>{++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function Ta(e){return Me((t,n)=>{let r=!1;t.subscribe(we(n,o=>{r=!0,n.next(o)},()=>{r||n.next(e),n.complete()}))})}function nD(e=C1){return Me((t,n)=>{let r=!1;t.subscribe(we(n,o=>{r=!0,n.next(o)},()=>r?n.complete():n.error(e())))})}function C1(){return new Aa}function qn(e,t){const n=arguments.length>=2;return r=>r.pipe(e?rn((o,i)=>e(o,i,r)):Rn,Ti(1),n?Ta(t):nD(()=>new Aa))}function Qe(e,t,n){const r=ae(e)||t||n?{next:e,error:t,complete:n}:e;return r?Me((o,i)=>{var s;null===(s=r.subscribe)||void 0===s||s.call(r);let a=!0;o.subscribe(we(i,l=>{var u;null===(u=r.next)||void 0===u||u.call(r,l),i.next(l)},()=>{var l;a=!1,null===(l=r.complete)||void 0===l||l.call(r),i.complete()},l=>{var u;a=!1,null===(u=r.error)||void 0===u||u.call(r,l),i.error(l)},()=>{var l,u;a&&(null===(l=r.unsubscribe)||void 0===l||l.call(r)),null===(u=r.finalize)||void 0===u||u.call(r)}))}):Rn}function qt(e){return Me((t,n)=>{let i,r=null,o=!1;r=t.subscribe(we(n,void 0,void 0,s=>{i=Ft(e(s,qt(e)(t))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function w1(e,t,n,r,o){return(i,s)=>{let a=n,l=t,u=0;i.subscribe(we(s,c=>{const d=u++;l=a?e(l,c,d):(a=!0,c),r&&s.next(l)},o&&(()=>{a&&s.next(l),s.complete()})))}}function rD(e,t){return Me(w1(e,t,arguments.length>=2,!0))}function Id(e){return e<=0?()=>un:Me((t,n)=>{let r=[];t.subscribe(we(n,o=>{r.push(o),e<r.length&&r.shift()},()=>{for(const o of r)n.next(o);n.complete()},void 0,()=>{r=null}))})}function oD(e,t){const n=arguments.length>=2;return r=>r.pipe(e?rn((o,i)=>e(o,i,r)):Rn,Id(1),n?Ta(t):nD(()=>new Aa))}function Ad(e){return Me((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}
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
       */const W="primary",xi=Symbol("RouteTitle");class S1{constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){const n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){const n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}}function mo(e){return new S1(e)}function M1(e,t,n){const r=n.path.split("/");if(r.length>e.length||"full"===n.pathMatch&&(t.hasChildren()||r.length<e.length))return null;const o={};for(let i=0;i<r.length;i++){const s=r[i],a=e[i];if(s.startsWith(":"))o[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,r.length),posParams:o}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function sn(e,t){const n=e?Object.keys(e):void 0,r=t?Object.keys(t):void 0;if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!iD(e[o],t[o]))return!1;return!0}function iD(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const n=[...e].sort(),r=[...t].sort();return n.every((o,i)=>r[i]===o)}return e===t}function sD(e){return Array.prototype.concat.apply([],e)}function aD(e){return e.length>0?e[e.length-1]:null}function je(e,t){for(const n in e)e.hasOwnProperty(n)&&t(e[n],n)}function Qn(e){return lc(e)?e:li(e)?Ie(Promise.resolve(e)):x(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const T1={exact:function cD(e,t,n){if(!_r(e.segments,t.segments)||!xa(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(const r in t.children)if(!e.children[r]||!cD(e.children[r],t.children[r],n))return!1;return!0},subset:dD},lD={exact:function x1(e,t){return sn(e,t)},subset:function N1(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>iD(e[n],t[n]))},ignored:()=>!0};function uD(e,t,n){return T1[n.paths](e.root,t.root,n.matrixParams)&&lD[n.queryParams](e.queryParams,t.queryParams)&&!("exact"===n.fragment&&e.fragment!==t.fragment)}function dD(e,t,n){return fD(e,t,t.segments,n)}function fD(e,t,n,r){if(e.segments.length>n.length){const o=e.segments.slice(0,n.length);return!(!_r(o,n)||t.hasChildren()||!xa(o,n,r))}if(e.segments.length===n.length){if(!_r(e.segments,n)||!xa(e.segments,n,r))return!1;for(const o in t.children)if(!e.children[o]||!dD(e.children[o],t.children[o],r))return!1;return!0}{const o=n.slice(0,e.segments.length),i=n.slice(e.segments.length);return!!(_r(e.segments,o)&&xa(e.segments,o,r)&&e.children[W])&&fD(e.children[W],t,i,r)}}function xa(e,t,n){return t.every((r,o)=>lD[n](e[o].parameters,r.parameters))}class vr{constructor(t,n,r){this.root=t,this.queryParams=n,this.fragment=r}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=mo(this.queryParams)),this._queryParamMap}toString(){return P1.serialize(this)}}class Q{constructor(t,n){this.segments=t,this.children=n,this.parent=null,je(n,(r,o)=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Na(this)}}class Ni{constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap||(this._parameterMap=mo(this.parameters)),this._parameterMap}toString(){return mD(this)}}function _r(e,t){return e.length===t.length&&e.every((n,r)=>n.path===t[r].path)}let hD=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=R({token:e,factory:function(){return new xd},providedIn:"root"}),e})();class xd{parse(t){const n=new U1(t);return new vr(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){const n=`/${Ri(t.root,!0)}`,r=function L1(e){const t=Object.keys(e).map(n=>{const r=e[n];return Array.isArray(r)?r.map(o=>`${Ra(n)}=${Ra(o)}`).join("&"):`${Ra(n)}=${Ra(r)}`}).filter(n=>!!n);return t.length?`?${t.join("&")}`:""}(t.queryParams);return`${n}${r}${"string"==typeof t.fragment?`#${function O1(e){return encodeURI(e)}(t.fragment)}`:""}`}}const P1=new xd;function Na(e){return e.segments.map(t=>mD(t)).join("/")}function Ri(e,t){if(!e.hasChildren())return Na(e);if(t){const n=e.children[W]?Ri(e.children[W],!1):"",r=[];return je(e.children,(o,i)=>{i!==W&&r.push(`${i}:${Ri(o,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}{const n=function F1(e,t){let n=[];return je(e.children,(r,o)=>{o===W&&(n=n.concat(t(r,o)))}),je(e.children,(r,o)=>{o!==W&&(n=n.concat(t(r,o)))}),n}(e,(r,o)=>o===W?[Ri(e.children[W],!1)]:[`${o}:${Ri(r,!1)}`]);return 1===Object.keys(e.children).length&&null!=e.children[W]?`${Na(e)}/${n[0]}`:`${Na(e)}/(${n.join("//")})`}}function pD(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ra(e){return pD(e).replace(/%3B/gi,";")}function Nd(e){return pD(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Fa(e){return decodeURIComponent(e)}function gD(e){return Fa(e.replace(/\+/g,"%20"))}function mD(e){return`${Nd(e.path)}${function k1(e){return Object.keys(e).map(t=>`;${Nd(t)}=${Nd(e[t])}`).join("")}(e.parameters)}`}const V1=/^[^\/()?;=#]+/;function Pa(e){const t=e.match(V1);return t?t[0]:""}const $1=/^[^=?&#]+/,B1=/^[^&#]+/;class U1{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new Q([],{}):new Q([],this.parseChildren())}parseQueryParams(){const t={};if(this.consumeOptional("?"))do{this.parseQueryParam(t)}while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(t.length>0||Object.keys(n).length>0)&&(r[W]=new Q(t,n)),r}parseSegment(){const t=Pa(this.remaining);if(""===t&&this.peekStartsWith(";"))throw new C(4009,!1);return this.capture(t),new Ni(Fa(t),this.parseMatrixParams())}parseMatrixParams(){const t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){const n=Pa(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){const o=Pa(this.remaining);o&&(r=o,this.capture(r))}t[Fa(n)]=Fa(r)}parseQueryParam(t){const n=function j1(e){const t=e.match($1);return t?t[0]:""}(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){const s=function H1(e){const t=e.match(B1);return t?t[0]:""}(this.remaining);s&&(r=s,this.capture(r))}const o=gD(n),i=gD(r);if(t.hasOwnProperty(o)){let s=t[o];Array.isArray(s)||(s=[s],t[o]=s),s.push(i)}else t[o]=i}parseParens(t){const n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const r=Pa(this.remaining),o=this.remaining[r.length];if("/"!==o&&")"!==o&&";"!==o)throw new C(4010,!1);let i;r.indexOf(":")>-1?(i=r.slice(0,r.indexOf(":")),this.capture(i),this.capture(":")):t&&(i=W);const s=this.parseChildren();n[i]=1===Object.keys(s).length?s[W]:new Q([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return!!this.peekStartsWith(t)&&(this.remaining=this.remaining.substring(t.length),!0)}capture(t){if(!this.consumeOptional(t))throw new C(4011,!1)}}function Rd(e){return e.segments.length>0?new Q([],{[W]:e}):e}function Oa(e){const t={};for(const r of Object.keys(e.children)){const i=Oa(e.children[r]);(i.segments.length>0||i.hasChildren())&&(t[r]=i)}return function G1(e){if(1===e.numberOfChildren&&e.children[W]){const t=e.children[W];return new Q(e.segments.concat(t.segments),t.children)}return e}(new Q(e.segments,t))}function Dr(e){return e instanceof vr}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function q1(e,t,n,r,o){var i;if(0===n.length)return yo(t.root,t.root,t.root,r,o);const s=function _D(e){if("string"==typeof e[0]&&1===e.length&&"/"===e[0])return new vD(!0,0,e);let t=0,n=!1;const r=e.reduce((o,i,s)=>{if("object"==typeof i&&null!=i){if(i.outlets){const a={};return je(i.outlets,(l,u)=>{a[u]="string"==typeof l?l.split("/"):l}),[...o,{outlets:a}]}if(i.segmentPath)return[...o,i.segmentPath]}return"string"!=typeof i?[...o,i]:0===s?(i.split("/").forEach((a,l)=>{0==l&&"."===a||(0==l&&""===a?n=!0:".."===a?t++:""!=a&&o.push(a))}),o):[...o,i]},[]);return new vD(n,t,r)}(n);if(s.toRoot())return yo(t.root,t.root,new Q([],{}),r,o);const l=function a(c){var d;const f=function K1(e,t,n,r){if(e.isAbsolute)return new vo(t.root,!0,0);if(-1===r)return new vo(n,n===t.root,0);return function DD(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new C(4005,!1);o=r.segments.length}return new vo(r,!1,o-i)}(n,r+(Fi(e.commands[0])?0:1),e.numberOfDoubleDots)}(s,t,null===(d=e.snapshot)||void 0===d?void 0:d._urlSegment,c),h=f.processChildren?Oi(f.segmentGroup,f.index,s.commands):Pd(f.segmentGroup,f.index,s.commands);return yo(t.root,f.segmentGroup,h,r,o)}(null===(i=e.snapshot)||void 0===i?void 0:i._lastPathIndex);return l}function Fi(e){return"object"==typeof e&&null!=e&&!e.outlets&&!e.segmentPath}function Pi(e){return"object"==typeof e&&null!=e&&e.outlets}function yo(e,t,n,r,o){let s,i={};r&&je(r,(l,u)=>{i[u]=Array.isArray(l)?l.map(c=>`${c}`):`${l}`}),s=e===t?n:yD(e,t,n);const a=Rd(Oa(s));return new vr(a,i,o)}function yD(e,t,n){const r={};return je(e.children,(o,i)=>{r[i]=o===t?n:yD(o,t,n)}),new Q(e.segments,r)}class vD{constructor(t,n,r){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=r,t&&r.length>0&&Fi(r[0]))throw new C(4003,!1);const o=r.find(Pi);if(o&&o!==aD(r))throw new C(4004,!1)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class vo{constructor(t,n,r){this.segmentGroup=t,this.processChildren=n,this.index=r}}function Pd(e,t,n){if(e||(e=new Q([],{})),0===e.segments.length&&e.hasChildren())return Oi(e,t,n);const r=function Y1(e,t,n){let r=0,o=t;const i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;const s=e.segments[o],a=n[r];if(Pi(a))break;const l=`${a}`,u=r<n.length-1?n[r+1]:null;if(o>0&&void 0===l)break;if(l&&u&&"object"==typeof u&&void 0===u.outlets){if(!wD(l,u,s))return i;r+=2}else{if(!wD(l,{},s))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){const i=new Q(e.segments.slice(0,r.pathIndex),{});return i.children[W]=new Q(e.segments.slice(r.pathIndex),e.children),Oi(i,0,o)}return r.match&&0===o.length?new Q(e.segments,{}):r.match&&!e.hasChildren()?Od(e,t,n):r.match?Oi(e,0,o):Od(e,t,n)}function Oi(e,t,n){if(0===n.length)return new Q(e.segments,{});{const r=function Z1(e){return Pi(e[0])?e[0].outlets:{[W]:e}}(n),o={};return je(r,(i,s)=>{"string"==typeof i&&(i=[i]),null!==i&&(o[s]=Pd(e.children[s],t,i))}),je(e.children,(i,s)=>{void 0===r[s]&&(o[s]=i)}),new Q(e.segments,o)}}function Od(e,t,n){const r=e.segments.slice(0,t);let o=0;for(;o<n.length;){const i=n[o];if(Pi(i)){const l=J1(i.outlets);return new Q(r,l)}if(0===o&&Fi(n[0])){r.push(new Ni(e.segments[t].path,CD(n[0]))),o++;continue}const s=Pi(i)?i.outlets[W]:`${i}`,a=o<n.length-1?n[o+1]:null;s&&a&&Fi(a)?(r.push(new Ni(s,CD(a))),o+=2):(r.push(new Ni(s,{})),o++)}return new Q(r,{})}function J1(e){const t={};return je(e,(n,r)=>{"string"==typeof n&&(n=[n]),null!==n&&(t[r]=Od(new Q([],{}),0,n))}),t}function CD(e){const t={};return je(e,(n,r)=>t[r]=`${n}`),t}function wD(e,t,n){return e==n.path&&sn(t,n.parameters)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class xn{constructor(t,n){this.id=t,this.url=n}}class kd extends xn{constructor(t,n,r="imperative",o=null){super(t,n),this.type=0,this.navigationTrigger=r,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class Cr extends xn{constructor(t,n,r){super(t,n),this.urlAfterRedirects=r,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class ka extends xn{constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class ED extends xn{constructor(t,n,r,o){super(t,n),this.error=r,this.target=o,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class X1 extends xn{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class eF extends xn{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class tF extends xn{constructor(t,n,r,o,i){super(t,n),this.urlAfterRedirects=r,this.state=o,this.shouldActivate=i,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class nF extends xn{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class rF extends xn{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class oF{constructor(t){this.route=t,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class iF{constructor(t){this.route=t,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class sF{constructor(t){this.snapshot=t,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class aF{constructor(t){this.snapshot=t,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class lF{constructor(t){this.snapshot=t,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class uF{constructor(t){this.snapshot=t,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class bD{constructor(t,n,r){this.routerEvent=t,this.position=n,this.anchor=r,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class SD{constructor(t){this._root=t}get root(){return this._root.value}parent(t){const n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){const n=Ld(t,this._root);return n?n.children.map(r=>r.value):[]}firstChild(t){const n=Ld(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){const n=Vd(t,this._root);return n.length<2?[]:n[n.length-2].children.map(o=>o.value).filter(o=>o!==t)}pathFromRoot(t){return Vd(t,this._root).map(n=>n.value)}}function Ld(e,t){if(e===t.value)return t;for(const n of t.children){const r=Ld(e,n);if(r)return r}return null}function Vd(e,t){if(e===t.value)return[t];for(const n of t.children){const r=Vd(e,n);if(r.length)return r.unshift(t),r}return[]}class Nn{constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}}function _o(e){const t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class MD extends SD{constructor(t,n){super(t),this.snapshot=n,$d(this,t)}toString(){return this.snapshot.toString()}}function ID(e,t){const n=function dF(e,t){const s=new La([],{},{},"",{},W,t,null,e.root,-1,{});return new TD("",new Nn(s,[]))}(e,t),r=new Wt([new Ni("",{})]),o=new Wt({}),i=new Wt({}),s=new Wt({}),a=new Wt(""),l=new wr(r,o,s,a,i,W,t,n.root);return l.snapshot=n.root,new MD(new Nn(l,[]),n)}class wr{constructor(t,n,r,o,i,s,a,l){var u,c;this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.title=null!==(u=null===(c=this.data)||void 0===c?void 0:c.pipe(q(d=>d[xi])))&&void 0!==u?u:x(void 0),this._futureSnapshot=l}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(q(t=>mo(t)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(q(t=>mo(t)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function AD(e,t="emptyOnly"){const n=e.pathFromRoot;let r=0;if("always"!==t)for(r=n.length-1;r>=1;){const o=n[r],i=n[r-1];if(o.routeConfig&&""===o.routeConfig.path)r--;else{if(i.component)break;r--}}return function fF(e){return e.reduce((t,n)=>{var r;return{params:{...t.params,...n.params},data:{...t.data,...n.data},resolve:{...n.data,...t.resolve,...null===(r=n.routeConfig)||void 0===r?void 0:r.data,...n._resolvedData}}},{params:{},data:{},resolve:{}})}(n.slice(r))}class La{constructor(t,n,r,o,i,s,a,l,u,c,d,f){var h;this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.title=null===(h=this.data)||void 0===h?void 0:h[xi],this.routeConfig=l,this._urlSegment=u,this._lastPathIndex=c,this._correctedLastPathIndex=f??c,this._resolve=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=mo(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=mo(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class TD extends SD{constructor(t,n){super(n),this.url=t,$d(this,n)}toString(){return xD(this._root)}}function $d(e,t){t.value._routerState=e,t.children.forEach(n=>$d(e,n))}function xD(e){const t=e.children.length>0?` { ${e.children.map(xD).join(", ")} } `:"";return`${e.value}${t}`}function jd(e){if(e.snapshot){const t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,sn(t.queryParams,n.queryParams)||e.queryParams.next(n.queryParams),t.fragment!==n.fragment&&e.fragment.next(n.fragment),sn(t.params,n.params)||e.params.next(n.params),function I1(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!sn(e[n],t[n]))return!1;return!0}(t.url,n.url)||e.url.next(n.url),sn(t.data,n.data)||e.data.next(n.data)}else e.snapshot=e._futureSnapshot,e.data.next(e._futureSnapshot.data)}function Bd(e,t){const n=sn(e.params,t.params)&&function R1(e,t){return _r(e,t)&&e.every((n,r)=>sn(n.parameters,t[r].parameters))}(e.url,t.url);return n&&!(!e.parent!=!t.parent)&&(!e.parent||Bd(e.parent,t.parent))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ki(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){const r=n.value;r._futureSnapshot=t.value;const o=function pF(e,t,n){return t.children.map(r=>{for(const o of n.children)if(e.shouldReuseRoute(r.value,o.value.snapshot))return ki(e,r,o);return ki(e,r)})}(e,t,n);return new Nn(r,o)}{if(e.shouldAttach(t.value)){const i=e.retrieve(t.value);if(null!==i){const s=i.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(a=>ki(e,a)),s}}const r=function gF(e){return new wr(new Wt(e.url),new Wt(e.params),new Wt(e.queryParams),new Wt(e.fragment),new Wt(e.data),e.outlet,e.component,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t.value),o=t.children.map(i=>ki(e,i));return new Nn(r,o)}}const Hd="ngNavigationCancelingError";function ND(e,t){const{redirectTo:n,navigationBehaviorOptions:r}=Dr(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,o=RD(!1,0,t);return o.url=n,o.navigationBehaviorOptions=r,o}function RD(e,t,n){const r=new Error("NavigationCancelingError: "+(e||""));return r[Hd]=!0,r.cancellationCode=t,n&&(r.url=n),r}function FD(e){return PD(e)&&Dr(e.url)}function PD(e){return e&&e[Hd]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class mF{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.injector=null,this.children=new Li,this.attachRef=null}}let Li=(()=>{class e{constructor(){this.contexts=new Map}onChildOutletCreated(n,r){const o=this.getOrCreateContext(n);o.outlet=r,this.contexts.set(n,o)}onChildOutletDestroyed(n){const r=this.getContext(n);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){const n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let r=this.getContext(n);return r||(r=new mF,this.contexts.set(n,r)),r}getContext(n){return this.contexts.get(n)||null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Va=!1;let OD=(()=>{class e{constructor(n,r,o,i,s){this.parentContexts=n,this.location=r,this.changeDetector=i,this.environmentInjector=s,this.activated=null,this._activatedRoute=null,this.activateEvents=new ge,this.deactivateEvents=new ge,this.attachEvents=new ge,this.detachEvents=new ge,this.name=o||W,n.onChildOutletCreated(this.name,this)}ngOnDestroy(){var n;(null===(n=this.parentContexts.getContext(this.name))||void 0===n?void 0:n.outlet)===this&&this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const n=this.parentContexts.getContext(this.name);n&&n.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new C(4012,Va);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new C(4012,Va);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new C(4012,Va);this.location.detach();const n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,r){this.activated=n,this._activatedRoute=r,this.location.insert(n.hostView),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){const n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,r){if(this.isActivated)throw new C(4013,Va);this._activatedRoute=n;const o=this.location,s=n._futureSnapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new yF(n,a,o.injector);if(r&&function vF(e){return!!e.resolveComponentFactory}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(r)){const u=r.resolveComponentFactory(s);this.activated=o.createComponent(u,o.length,l)}else this.activated=o.createComponent(s,{index:o.length,injector:l,environmentInjector:r??this.environmentInjector});this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return e.\u0275fac=function(n){return new(n||e)(_(Li),_(Ht),function Vo(e){return function ab(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const r=n.length;let o=0;for(;o<r;){const i=n[o];if(Oh(i))break;if(0===i)o+=2;else if("number"==typeof i)for(o++;o<r&&"string"==typeof n[o];)o++;else{if(i===t)return n[o+1];o+=2}}}return null}(Fe(),e)}("name"),_(ia),_(Vn))},e.\u0275dir=L({type:e,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0}),e})();class yF{constructor(t,n,r){this.route=t,this.childContexts=n,this.parent=r}get(t,n){return t===wr?this.route:t===Li?this.childContexts:this.parent.get(t,n)}}let Ud=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=Et({type:e,selectors:[["ng-component"]],standalone:!0,features:[Ry],decls:1,vars:0,template:function(n,r){1&n&&J(0,"router-outlet")},dependencies:[OD],encapsulation:2}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function kD(e,t){var n;return e.providers&&!e._injector&&(e._injector=Zs(e.providers,t,`Route: ${e.path}`)),null!==(n=e._injector)&&void 0!==n?n:t}function zd(e){const t=e.children&&e.children.map(zd),n=t?{...e,children:t}:{...e};return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==W&&(n.component=Ud),n}function Rt(e){return e.outlet||W}function LD(e,t){const n=e.filter(r=>Rt(r)===t);return n.push(...e.filter(r=>Rt(r)!==t)),n}function Vi(e){var t;if(!e)return null;if(null!==(t=e.routeConfig)&&void 0!==t&&t._injector)return e.routeConfig._injector;for(let n=e.parent;n;n=n.parent){const r=n.routeConfig;if(null!=r&&r._loadedInjector)return r._loadedInjector;if(null!=r&&r._injector)return r._injector}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class EF{constructor(t,n,r,o){this.routeReuseStrategy=t,this.futureState=n,this.currState=r,this.forwardEvent=o}activate(t){const n=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,r,t),jd(this.futureState.root),this.activateChildRoutes(n,r,t)}deactivateChildRoutes(t,n,r){const o=_o(n);t.children.forEach(i=>{const s=i.value.outlet;this.deactivateRoutes(i,o[s],r),delete o[s]}),je(o,(i,s)=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(t,n,r){const o=t.value,i=n?n.value:null;if(o===i)if(o.component){const s=r.getContext(o.outlet);s&&this.deactivateChildRoutes(t,n,s.children)}else this.deactivateChildRoutes(t,n,r);else i&&this.deactivateRouteAndItsChildren(n,r)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){const r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=_o(t);for(const s of Object.keys(i))this.deactivateRouteAndItsChildren(i[s],o);if(r&&r.outlet){const s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:a})}}deactivateRouteAndOutlet(t,n){const r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=_o(t);for(const s of Object.keys(i))this.deactivateRouteAndItsChildren(i[s],o);r&&r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated(),r.attachRef=null,r.resolver=null,r.route=null)}activateChildRoutes(t,n,r){const o=_o(n);t.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],r),this.forwardEvent(new uF(i.value.snapshot))}),t.children.length&&this.forwardEvent(new aF(t.value.snapshot))}activateRoutes(t,n,r){const o=t.value,i=n?n.value:null;if(jd(o),o===i)if(o.component){const a=r.getOrCreateContext(o.outlet);this.activateChildRoutes(t,n,a.children)}else this.activateChildRoutes(t,n,r);else if(o.component){const a=r.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){const l=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),a.children.onOutletReAttached(l.contexts),a.attachRef=l.componentRef,a.route=l.route.value,a.outlet&&a.outlet.attach(l.componentRef,l.route.value),jd(l.route.value),this.activateChildRoutes(t,null,a.children)}else{var s;const l=Vi(o.snapshot),u=null!==(s=l?.get(Xo))&&void 0!==s?s:null;a.attachRef=null,a.route=o,a.resolver=u,a.injector=l,a.outlet&&a.outlet.activateWith(o,a.injector),this.activateChildRoutes(t,null,a.children)}}else this.activateChildRoutes(t,null,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class VD{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}}class $a{constructor(t,n){this.component=t,this.route=n}}function bF(e,t,n){const r=e._root;return $i(r,t?t._root:null,n,[r.value])}function Do(e,t){const n=Symbol(),r=t.get(e,n);return r===n?"function"!=typeof e||function cE(e){return null!==es(e)}(e)?t.get(e):e:r}function $i(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){const i=_o(t);return e.children.forEach(s=>{(function MF(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){const i=e.value,s=t?t.value:null,a=n?n.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){const l=function IF(e,t,n){if("function"==typeof n)return n(e,t);switch(n){case"pathParamsChange":return!_r(e.url,t.url);case"pathParamsOrQueryParamsChange":return!_r(e.url,t.url)||!sn(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Bd(e,t)||!sn(e.queryParams,t.queryParams);default:return!Bd(e,t)}}(s,i,i.routeConfig.runGuardsAndResolvers);l?o.canActivateChecks.push(new VD(r)):(i.data=s.data,i._resolvedData=s._resolvedData),$i(e,t,i.component?a?a.children:null:n,r,o),l&&a&&a.outlet&&a.outlet.isActivated&&o.canDeactivateChecks.push(new $a(a.outlet.component,s))}else s&&ji(t,a,o),o.canActivateChecks.push(new VD(r)),$i(e,null,i.component?a?a.children:null:n,r,o)})(s,i[s.value.outlet],n,r.concat([s.value]),o),delete i[s.value.outlet]}),je(i,(s,a)=>ji(s,n.getContext(a),o)),o}function ji(e,t,n){const r=_o(e),o=e.value;je(r,(i,s)=>{ji(i,o.component?t?t.children.getContext(s):null:t,n)}),n.canDeactivateChecks.push(new $a(o.component&&t&&t.outlet&&t.outlet.isActivated?t.outlet.component:null,o))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Bi(e){return"function"==typeof e}function Wd(e){return e instanceof Aa||"EmptyError"===e?.name}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ja=Symbol("INITIAL_VALUE");function Co(){return on(e=>J_(e.map(t=>t.pipe(Ti(1),function D1(...e){const t=Io(e);return Me((n,r)=>{(t?Sd(e,n,t):Sd(e,n)).subscribe(r)})}(ja)))).pipe(q(t=>{for(const n of t)if(!0!==n){if(n===ja)return ja;if(!1===n||n instanceof vr)return n}return!0}),rn(t=>t!==ja),Ti(1)))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $D(e){return function Tw(...e){return Bf(e)}(Qe(t=>{if(Dr(t))throw ND(0,t)}),q(t=>!0===t))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const qd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function jD(e,t,n,r,o){const i=Qd(e,t,n);return i.matched?function GF(e,t,n,r){const o=t.canMatch;return o&&0!==o.length?x(o.map(s=>{const a=Do(s,e);return Qn(function FF(e){return e&&Bi(e.canMatch)}(a)?a.canMatch(t,n):e.runInContext(()=>a(t,n)))})).pipe(Co(),$D()):x(!0)}(r=kD(t,r),t,n).pipe(q(s=>!0===s?i:{...qd})):x(i)}function Qd(e,t,n){var r;if(""===t.path)return"full"===t.pathMatch&&(e.hasChildren()||n.length>0)?{...qd}:{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};const i=(t.matcher||M1)(n,e,t);if(!i)return{...qd};const s={};je(i.posParams,(l,u)=>{s[u]=l.path});const a=i.consumed.length>0?{...s,...i.consumed[i.consumed.length-1].parameters}:s;return{matched:!0,consumedSegments:i.consumed,remainingSegments:n.slice(i.consumed.length),parameters:a,positionalParamSegments:null!==(r=i.posParams)&&void 0!==r?r:{}}}function Ba(e,t,n,r,o="corrected"){if(n.length>0&&function qF(e,t,n){return n.some(r=>Ha(e,t,r)&&Rt(r)!==W)}(e,n,r)){const s=new Q(t,function WF(e,t,n,r){const o={};o[W]=r,r._sourceSegment=e,r._segmentIndexShift=t.length;for(const i of n)if(""===i.path&&Rt(i)!==W){const s=new Q([],{});s._sourceSegment=e,s._segmentIndexShift=t.length,o[Rt(i)]=s}return o}(e,t,r,new Q(n,e.children)));return s._sourceSegment=e,s._segmentIndexShift=t.length,{segmentGroup:s,slicedSegments:[]}}if(0===n.length&&function QF(e,t,n){return n.some(r=>Ha(e,t,r))}(e,n,r)){const s=new Q(e.segments,function zF(e,t,n,r,o,i){const s={};for(const a of r)if(Ha(e,n,a)&&!o[Rt(a)]){const l=new Q([],{});l._sourceSegment=e,l._segmentIndexShift="legacy"===i?e.segments.length:t.length,s[Rt(a)]=l}return{...o,...s}}(e,t,n,r,e.children,o));return s._sourceSegment=e,s._segmentIndexShift=t.length,{segmentGroup:s,slicedSegments:n}}const i=new Q(e.segments,e.children);return i._sourceSegment=e,i._segmentIndexShift=t.length,{segmentGroup:i,slicedSegments:n}}function Ha(e,t,n){return(!(e.hasChildren()||t.length>0)||"full"!==n.pathMatch)&&""===n.path}function BD(e,t,n,r){return!!(Rt(e)===r||r!==W&&Ha(t,n,e))&&("**"===e.path||Qd(t,e,n).matched)}function HD(e,t,n){return 0===t.length&&!e.children[n]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ua=!1;class Ga{constructor(t){this.segmentGroup=t||null}}class UD{constructor(t){this.urlTree=t}}function Hi(e){return Wn(new Ga(e))}function GD(e){return Wn(new UD(e))}class JF{constructor(t,n,r,o,i){this.injector=t,this.configLoader=n,this.urlSerializer=r,this.urlTree=o,this.config=i,this.allowRedirects=!0}apply(){const t=Ba(this.urlTree.root,[],[],this.config).segmentGroup,n=new Q(t.segments,t.children);return this.expandSegmentGroup(this.injector,this.config,n,W).pipe(q(i=>this.createUrlTree(Oa(i),this.urlTree.queryParams,this.urlTree.fragment))).pipe(qt(i=>{if(i instanceof UD)return this.allowRedirects=!1,this.match(i.urlTree);throw i instanceof Ga?this.noMatchError(i):i}))}match(t){return this.expandSegmentGroup(this.injector,this.config,t.root,W).pipe(q(o=>this.createUrlTree(Oa(o),t.queryParams,t.fragment))).pipe(qt(o=>{throw o instanceof Ga?this.noMatchError(o):o}))}noMatchError(t){return new C(4002,Ua)}createUrlTree(t,n,r){const o=Rd(t);return new vr(o,n,r)}expandSegmentGroup(t,n,r,o){return 0===r.segments.length&&r.hasChildren()?this.expandChildren(t,n,r).pipe(q(i=>new Q([],i))):this.expandSegment(t,r,n,r.segments,o,!0)}expandChildren(t,n,r){const o=[];for(const i of Object.keys(r.children))"primary"===i?o.unshift(i):o.push(i);return Ie(o).pipe(zn(i=>{const s=r.children[i],a=LD(n,i);return this.expandSegmentGroup(t,a,s,i).pipe(q(l=>({segment:l,outlet:i})))}),rD((i,s)=>(i[s.outlet]=s.segment,i),{}),oD())}expandSegment(t,n,r,o,i,s){return Ie(r).pipe(zn(a=>this.expandSegmentAgainstRoute(t,n,r,a,o,i,s).pipe(qt(u=>{if(u instanceof Ga)return x(null);throw u}))),qn(a=>!!a),qt((a,l)=>{if(Wd(a))return HD(n,o,i)?x(new Q([],{})):Hi(n);throw a}))}expandSegmentAgainstRoute(t,n,r,o,i,s,a){return BD(o,n,i,s)?void 0===o.redirectTo?this.matchSegmentAgainstRoute(t,n,o,i,s):a&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s):Hi(n):Hi(n)}expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s){return"**"===o.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(t,r,o,s):this.expandRegularSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s)}expandWildCardWithParamsAgainstRouteUsingRedirect(t,n,r,o){const i=this.applyRedirectCommands([],r.redirectTo,{});return r.redirectTo.startsWith("/")?GD(i):this.lineralizeSegments(r,i).pipe($e(s=>{const a=new Q(s,{});return this.expandSegment(t,a,n,s,o,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s){const{matched:a,consumedSegments:l,remainingSegments:u,positionalParamSegments:c}=Qd(n,o,i);if(!a)return Hi(n);const d=this.applyRedirectCommands(l,o.redirectTo,c);return o.redirectTo.startsWith("/")?GD(d):this.lineralizeSegments(o,d).pipe($e(f=>this.expandSegment(t,n,r,f.concat(u),s,!1)))}matchSegmentAgainstRoute(t,n,r,o,i){return"**"===r.path?(t=kD(r,t),r.loadChildren?(r._loadedRoutes?x({routes:r._loadedRoutes,injector:r._loadedInjector}):this.configLoader.loadChildren(t,r)).pipe(q(a=>(r._loadedRoutes=a.routes,r._loadedInjector=a.injector,new Q(o,{})))):x(new Q(o,{}))):jD(n,r,o,t).pipe(on(({matched:s,consumedSegments:a,remainingSegments:l})=>{var u;return s?(t=null!==(u=r._injector)&&void 0!==u?u:t,this.getChildConfig(t,r,o).pipe($e(d=>{var f;const h=null!==(f=d.injector)&&void 0!==f?f:t,p=d.routes,{segmentGroup:g,slicedSegments:v}=Ba(n,a,l,p),y=new Q(g.segments,g.children);if(0===v.length&&y.hasChildren())return this.expandChildren(h,p,y).pipe(q(H=>new Q(a,H)));if(0===p.length&&0===v.length)return x(new Q(a,{}));const w=Rt(r)===i;return this.expandSegment(h,y,p,v,w?W:i,!0).pipe(q(b=>new Q(a.concat(b.segments),b.children)))}))):Hi(n)}))}getChildConfig(t,n,r){return n.children?x({routes:n.children,injector:t}):n.loadChildren?void 0!==n._loadedRoutes?x({routes:n._loadedRoutes,injector:n._loadedInjector}):function UF(e,t,n,r){const o=t.canLoad;return void 0===o||0===o.length?x(!0):x(o.map(s=>{const a=Do(s,e);return Qn(function TF(e){return e&&Bi(e.canLoad)}(a)?a.canLoad(t,n):e.runInContext(()=>a(t,n)))})).pipe(Co(),$D())}(t,n,r).pipe($e(o=>o?this.configLoader.loadChildren(t,n).pipe(Qe(i=>{n._loadedRoutes=i.routes,n._loadedInjector=i.injector})):function ZF(e){return Wn(RD(Ua,3))}())):x({routes:[],injector:t})}lineralizeSegments(t,n){let r=[],o=n.root;for(;;){if(r=r.concat(o.segments),0===o.numberOfChildren)return x(r);if(o.numberOfChildren>1||!o.children[W])return Wn(new C(4e3,Ua));o=o.children[W]}}applyRedirectCommands(t,n,r){return this.applyRedirectCreateUrlTree(n,this.urlSerializer.parse(n),t,r)}applyRedirectCreateUrlTree(t,n,r,o){const i=this.createSegmentGroup(t,n.root,r,o);return new vr(i,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){const r={};return je(t,(o,i)=>{if("string"==typeof o&&o.startsWith(":")){const a=o.substring(1);r[i]=n[a]}else r[i]=o}),r}createSegmentGroup(t,n,r,o){const i=this.createSegments(t,n.segments,r,o);let s={};return je(n.children,(a,l)=>{s[l]=this.createSegmentGroup(t,a,r,o)}),new Q(i,s)}createSegments(t,n,r,o){return n.map(i=>i.path.startsWith(":")?this.findPosParam(t,i,o):this.findOrReturn(i,r))}findPosParam(t,n,r){const o=r[n.path.substring(1)];if(!o)throw new C(4001,Ua);return o}findOrReturn(t,n){let r=0;for(const o of n){if(o.path===t.path)return n.splice(r),o;r++}return t}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class eP{}class rP{constructor(t,n,r,o,i,s,a,l){this.injector=t,this.rootComponentType=n,this.config=r,this.urlTree=o,this.url=i,this.paramsInheritanceStrategy=s,this.relativeLinkResolution=a,this.urlSerializer=l}recognize(){const t=Ba(this.urlTree.root,[],[],this.config.filter(n=>void 0===n.redirectTo),this.relativeLinkResolution).segmentGroup;return this.processSegmentGroup(this.injector,this.config,t,W).pipe(q(n=>{if(null===n)return null;const r=new La([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},W,this.rootComponentType,null,this.urlTree.root,-1,{}),o=new Nn(r,n),i=new TD(this.url,o);return this.inheritParamsAndData(i._root),i}))}inheritParamsAndData(t){const n=t.value,r=AD(n,this.paramsInheritanceStrategy);n.params=Object.freeze(r.params),n.data=Object.freeze(r.data),t.children.forEach(o=>this.inheritParamsAndData(o))}processSegmentGroup(t,n,r,o){return 0===r.segments.length&&r.hasChildren()?this.processChildren(t,n,r):this.processSegment(t,n,r,r.segments,o)}processChildren(t,n,r){return Ie(Object.keys(r.children)).pipe(zn(o=>{const i=r.children[o],s=LD(n,o);return this.processSegmentGroup(t,s,i,o)}),rD((o,i)=>o&&i?(o.push(...i),o):null),function E1(e,t=!1){return Me((n,r)=>{let o=0;n.subscribe(we(r,i=>{const s=e(i,o++);(s||t)&&r.next(i),!s&&r.complete()}))})}(o=>null!==o),Ta(null),oD(),q(o=>{if(null===o)return null;const i=zD(o);return function oP(e){e.sort((t,n)=>t.value.outlet===W?-1:n.value.outlet===W?1:t.value.outlet.localeCompare(n.value.outlet))}(i),i}))}processSegment(t,n,r,o,i){return Ie(n).pipe(zn(s=>{var a;return this.processSegmentAgainstRoute(null!==(a=s._injector)&&void 0!==a?a:t,s,r,o,i)}),qn(s=>!!s),qt(s=>{if(Wd(s))return HD(r,o,i)?x([]):x(null);throw s}))}processSegmentAgainstRoute(t,n,r,o,i){if(n.redirectTo||!BD(n,r,o,i))return x(null);let s;if("**"===n.path){var a,l;const u=o.length>0?aD(o).parameters:{},c=qD(r)+o.length;s=x({snapshot:new La(o,u,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,KD(n),Rt(n),null!==(a=null!==(l=n.component)&&void 0!==l?l:n._loadedComponent)&&void 0!==a?a:null,n,WD(r),c,ZD(n),c),consumedSegments:[],remainingSegments:[]})}else s=jD(r,n,o,t).pipe(q(({matched:u,consumedSegments:c,remainingSegments:d,parameters:f})=>{var h,p;if(!u)return null;const g=qD(r)+c.length;return{snapshot:new La(c,f,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,KD(n),Rt(n),null!==(h=null!==(p=n.component)&&void 0!==p?p:n._loadedComponent)&&void 0!==h?h:null,n,WD(r),g,ZD(n),g),consumedSegments:c,remainingSegments:d}}));return s.pipe(on(u=>{var c,d;if(null===u)return x(null);const{snapshot:f,consumedSegments:h,remainingSegments:p}=u;t=null!==(c=n._injector)&&void 0!==c?c:t;const g=null!==(d=n._loadedInjector)&&void 0!==d?d:t,v=function iP(e){return e.children?e.children:e.loadChildren?e._loadedRoutes:[]}(n),{segmentGroup:y,slicedSegments:w}=Ba(r,h,p,v.filter(b=>void 0===b.redirectTo),this.relativeLinkResolution);if(0===w.length&&y.hasChildren())return this.processChildren(g,v,y).pipe(q(b=>null===b?null:[new Nn(f,b)]));if(0===v.length&&0===w.length)return x([new Nn(f,[])]);const m=Rt(n)===i;return this.processSegment(g,v,y,w,m?W:i).pipe(q(b=>null===b?null:[new Nn(f,b)]))}))}}function sP(e){const t=e.value.routeConfig;return t&&""===t.path&&void 0===t.redirectTo}function zD(e){const t=[],n=new Set;for(const r of e){if(!sP(r)){t.push(r);continue}const o=t.find(i=>r.value.routeConfig===i.value.routeConfig);void 0!==o?(o.children.push(...r.children),n.add(o)):t.push(r)}for(const r of n){const o=zD(r.children);t.push(new Nn(r.value,o))}return t.filter(r=>!n.has(r))}function WD(e){let t=e;for(;t._sourceSegment;)t=t._sourceSegment;return t}function qD(e){var t;let n=e,r=null!==(t=n._segmentIndexShift)&&void 0!==t?t:0;for(;n._sourceSegment;){var o;n=n._sourceSegment,r+=null!==(o=n._segmentIndexShift)&&void 0!==o?o:0}return r-1}function KD(e){return e.data||{}}function ZD(e){return e.resolve||{}}
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
       */function Kd(e){return on(t=>{const n=e(t);return n?Ie(n).pipe(q(()=>t)):x(t)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let JD=(()=>{class e{buildTitle(n){let r,o=n.root;for(;void 0!==o;){var i;r=null!==(i=this.getResolvedTitleForRoute(o))&&void 0!==i?i:r,o=o.children.find(s=>s.outlet===W)}return r}getResolvedTitleForRoute(n){return n.data[xi]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=R({token:e,factory:function(){return Ee(XD)},providedIn:"root"}),e})(),XD=(()=>{class e extends JD{constructor(n){super(),this.title=n}updateTitle(n){const r=this.buildTitle(n);void 0!==r&&this.title.setTitle(r)}}return e.\u0275fac=function(n){return new(n||e)(I(O_))},e.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
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
class pP{}class mP extends class gP{shouldDetach(t){return!1}store(t,n){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,n){return t.routeConfig===n.routeConfig}}{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Wa=new T("",{providedIn:"root",factory:()=>({})}),Zd=new T("ROUTES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Yd=(()=>{class e{constructor(n,r){this.injector=n,this.compiler=r,this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap}loadComponent(n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return x(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);const r=Qn(n.loadComponent()).pipe(Qe(i=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=i}),Ad(()=>{this.componentLoaders.delete(n)})),o=new tD(r,()=>new Ze).pipe(Md());return this.componentLoaders.set(n,o),o}loadChildren(n,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return x({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);const i=this.loadModuleFactoryOrRoutes(r.loadChildren).pipe(q(a=>{this.onLoadEndListener&&this.onLoadEndListener(r);let l,u,c=!1;Array.isArray(a)?u=a:(l=a.create(n).injector,u=sD(l.get(Zd,[],F.Self|F.Optional)));return{routes:u.map(zd),injector:l}}),Ad(()=>{this.childrenLoaders.delete(r)})),s=new tD(i,()=>new Ze).pipe(Md());return this.childrenLoaders.set(r,s),s}loadModuleFactoryOrRoutes(n){return Qn(n()).pipe($e(r=>r instanceof xy||Array.isArray(r)?x(r):Ie(this.compiler.compileModuleAsync(r))))}}return e.\u0275fac=function(n){return new(n||e)(I(Dt),I(Oc))},e.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class vP{}class _P{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,n){return t}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function DP(e){throw e}function CP(e,t,n){return t.parse("/")}const wP={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},EP={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function tC(){var e,t;const n=Ee(hD),r=Ee(Li),o=Ee(Zc),i=Ee(Dt),s=Ee(Oc),a=null!==(e=Ee(Zd,{optional:!0}))&&void 0!==e?e:[],l=null!==(t=Ee(Wa,{optional:!0}))&&void 0!==t?t:{},u=Ee(XD),c=Ee(JD,{optional:!0}),d=Ee(vP,{optional:!0}),f=Ee(pP,{optional:!0}),h=new Be(null,n,r,o,i,s,sD(a));return d&&(h.urlHandlingStrategy=d),f&&(h.routeReuseStrategy=f),h.titleStrategy=c??u,function bP(e,t){e.errorHandler&&(t.errorHandler=e.errorHandler),e.malformedUriErrorHandler&&(t.malformedUriErrorHandler=e.malformedUriErrorHandler),e.onSameUrlNavigation&&(t.onSameUrlNavigation=e.onSameUrlNavigation),e.paramsInheritanceStrategy&&(t.paramsInheritanceStrategy=e.paramsInheritanceStrategy),e.relativeLinkResolution&&(t.relativeLinkResolution=e.relativeLinkResolution),e.urlUpdateStrategy&&(t.urlUpdateStrategy=e.urlUpdateStrategy),e.canceledNavigationResolution&&(t.canceledNavigationResolution=e.canceledNavigationResolution)}(l,h),h}let Be=(()=>{class e{constructor(n,r,o,i,s,a,l){this.rootComponentType=n,this.urlSerializer=r,this.rootContexts=o,this.location=i,this.config=l,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new Ze,this.errorHandler=DP,this.malformedUriErrorHandler=CP,this.navigated=!1,this.lastSuccessfulId=-1,this.afterPreactivation=()=>x(void 0),this.urlHandlingStrategy=new _P,this.routeReuseStrategy=new mP,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.configLoader=s.get(Yd),this.configLoader.onLoadEndListener=f=>this.triggerEvent(new iF(f)),this.configLoader.onLoadStartListener=f=>this.triggerEvent(new oF(f)),this.ngModule=s.get(gr),this.console=s.get(WT);const d=s.get(ke);this.isNgZoneEnabled=d instanceof ke&&ke.isInAngularZone(),this.resetConfig(l),this.currentUrlTree=function A1(){return new vr(new Q([],{}),{},null)}(),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=ID(this.currentUrlTree,this.rootComponentType),this.transitions=new Wt({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){var n;return null===(n=this.location.getState())||void 0===n?void 0:n.\u0275routerPageId}setupNavigations(n){const r=this.events;return n.pipe(rn(o=>0!==o.id),q(o=>({...o,extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),on(o=>{let i=!1,s=!1;return x(o).pipe(Qe(a=>{this.currentNavigation={id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,trigger:a.source,extras:a.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),on(a=>{const l=this.browserUrlTree.toString(),u=!this.navigated||a.extractedUrl.toString()!==l||l!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||u)&&this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return nC(a.source)&&(this.browserUrlTree=a.extractedUrl),x(a).pipe(on(d=>{const f=this.transitions.getValue();return r.next(new kd(d.id,this.serializeUrl(d.extractedUrl),d.source,d.restoredState)),f!==this.transitions.getValue()?un:Promise.resolve(d)}),function XF(e,t,n,r){return on(o=>function YF(e,t,n,r,o){return new JF(e,t,n,r,o).apply()}(e,t,n,o.extractedUrl,r).pipe(q(i=>({...o,urlAfterRedirects:i}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),Qe(d=>{this.currentNavigation={...this.currentNavigation,finalUrl:d.urlAfterRedirects},o.urlAfterRedirects=d.urlAfterRedirects}),function lP(e,t,n,r,o,i){return $e(s=>function nP(e,t,n,r,o,i,s="emptyOnly",a="legacy"){return new rP(e,t,n,r,o,s,a,i).recognize().pipe(on(l=>null===l?function tP(e){return new Ce(t=>t.error(e))}(new eP):x(l)))}(e,t,n,s.urlAfterRedirects,r.serialize(s.urlAfterRedirects),r,o,i).pipe(q(a=>({...s,targetSnapshot:a}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.rootComponentType,this.config,this.urlSerializer,this.paramsInheritanceStrategy,this.relativeLinkResolution),Qe(d=>{if(o.targetSnapshot=d.targetSnapshot,"eager"===this.urlUpdateStrategy){if(!d.extras.skipLocationChange){const h=this.urlHandlingStrategy.merge(d.urlAfterRedirects,d.rawUrl);this.setBrowserUrl(h,d)}this.browserUrlTree=d.urlAfterRedirects}const f=new X1(d.id,this.serializeUrl(d.extractedUrl),this.serializeUrl(d.urlAfterRedirects),d.targetSnapshot);r.next(f)}));if(u&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:f,extractedUrl:h,source:p,restoredState:g,extras:v}=a,y=new kd(f,this.serializeUrl(h),p,g);r.next(y);const w=ID(h,this.rootComponentType).snapshot;return x(o={...a,targetSnapshot:w,urlAfterRedirects:h,extras:{...v,skipLocationChange:!1,replaceUrl:!1}})}return this.rawUrlTree=a.rawUrl,a.resolve(null),un}),Qe(a=>{const l=new eF(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot);this.triggerEvent(l)}),q(a=>o={...a,guards:bF(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),function OF(e,t){return $e(n=>{const{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return 0===s.length&&0===i.length?x({...n,guardsResult:!0}):function kF(e,t,n,r){return Ie(e).pipe($e(o=>function HF(e,t,n,r,o){const i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;return i&&0!==i.length?x(i.map(a=>{var l;const u=null!==(l=Vi(t))&&void 0!==l?l:o,c=Do(a,u);return Qn(function RF(e){return e&&Bi(e.canDeactivate)}(c)?c.canDeactivate(e,t,n,r):u.runInContext(()=>c(e,t,n,r))).pipe(qn())})).pipe(Co()):x(!0)}(o.component,o.route,n,t,r)),qn(o=>!0!==o,!0))}(s,r,o,e).pipe($e(a=>a&&function AF(e){return"boolean"==typeof e}(a)?function LF(e,t,n,r){return Ie(t).pipe(zn(o=>Sd(function $F(e,t){return null!==e&&t&&t(new sF(e)),x(!0)}(o.route.parent,r),function VF(e,t){return null!==e&&t&&t(new lF(e)),x(!0)}(o.route,r),function BF(e,t,n){const r=t[t.length-1],i=t.slice(0,t.length-1).reverse().map(s=>function SF(e){const t=e.routeConfig?e.routeConfig.canActivateChild:null;return t&&0!==t.length?{node:e,guards:t}:null}(s)).filter(s=>null!==s).map(s=>eD(()=>x(s.guards.map(l=>{var u;const c=null!==(u=Vi(s.node))&&void 0!==u?u:n,d=Do(l,c);return Qn(function NF(e){return e&&Bi(e.canActivateChild)}(d)?d.canActivateChild(r,e):c.runInContext(()=>d(r,e))).pipe(qn())})).pipe(Co())));return x(i).pipe(Co())}(e,o.path,n),function jF(e,t,n){const r=t.routeConfig?t.routeConfig.canActivate:null;if(!r||0===r.length)return x(!0);const o=r.map(i=>eD(()=>{var s;const a=null!==(s=Vi(t))&&void 0!==s?s:n,l=Do(i,a);return Qn(function xF(e){return e&&Bi(e.canActivate)}(l)?l.canActivate(t,e):a.runInContext(()=>l(t,e))).pipe(qn())}));return x(o).pipe(Co())}(e,o.route,n))),qn(o=>!0!==o,!0))}(r,i,e,t):x(a)),q(a=>({...n,guardsResult:a})))})}(this.ngModule.injector,a=>this.triggerEvent(a)),Qe(a=>{if(o.guardsResult=a.guardsResult,Dr(a.guardsResult))throw ND(0,a.guardsResult);const l=new tF(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);this.triggerEvent(l)}),rn(a=>!!a.guardsResult||(this.restoreHistory(a),this.cancelNavigationTransition(a,"",3),!1)),Kd(a=>{if(a.guards.canActivateChecks.length)return x(a).pipe(Qe(l=>{const u=new nF(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(l.urlAfterRedirects),l.targetSnapshot);this.triggerEvent(u)}),on(l=>{let u=!1;return x(l).pipe(function uP(e,t){return $e(n=>{const{targetSnapshot:r,guards:{canActivateChecks:o}}=n;if(!o.length)return x(n);let i=0;return Ie(o).pipe(zn(s=>function cP(e,t,n,r){const o=e.routeConfig,i=e._resolve;return void 0!==o?.title&&!YD(o)&&(i[xi]=o.title),function dP(e,t,n,r){const o=function fP(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}(e);if(0===o.length)return x({});const i={};return Ie(o).pipe($e(s=>function hP(e,t,n,r){var o;const i=null!==(o=Vi(t))&&void 0!==o?o:r,s=Do(e,i);return Qn(s.resolve?s.resolve(t,n):i.runInContext(()=>s(t,n)))}(e[s],t,n,r).pipe(qn(),Qe(a=>{i[s]=a}))),Id(1),function b1(e){return q(()=>e)}(i),qt(s=>Wd(s)?un:Wn(s)))}(i,e,t,r).pipe(q(s=>(e._resolvedData=s,e.data=AD(e,n).resolve,o&&YD(o)&&(e.data[xi]=o.title),null)))}(s.route,r,e,t)),Qe(()=>i++),Id(1),$e(s=>i===o.length?x(n):un))})}(this.paramsInheritanceStrategy,this.ngModule.injector),Qe({next:()=>u=!0,complete:()=>{u||(this.restoreHistory(l),this.cancelNavigationTransition(l,"",2))}}))}),Qe(l=>{const u=new rF(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(l.urlAfterRedirects),l.targetSnapshot);this.triggerEvent(u)}))}),Kd(a=>{const l=u=>{var c;const d=[];null!==(c=u.routeConfig)&&void 0!==c&&c.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(Qe(f=>{u.component=f}),q(()=>{})));for(const f of u.children)d.push(...l(f));return d};return J_(l(a.targetSnapshot.root)).pipe(Ta(),Ti(1))}),Kd(()=>this.afterPreactivation()),q(a=>{const l=function hF(e,t,n){const r=ki(e,t._root,n?n._root:void 0);return new MD(r,t)}(this.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return o={...a,targetRouterState:l}}),Qe(a=>{this.currentUrlTree=a.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(a.urlAfterRedirects,a.rawUrl),this.routerState=a.targetRouterState,"deferred"===this.urlUpdateStrategy&&(a.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,a),this.browserUrlTree=a.urlAfterRedirects)}),((e,t,n)=>q(r=>(new EF(t,r.targetRouterState,r.currentRouterState,n).activate(e),r)))(this.rootContexts,this.routeReuseStrategy,a=>this.triggerEvent(a)),Qe({next(){i=!0},complete(){i=!0}}),Ad(()=>{var a;i||s||this.cancelNavigationTransition(o,"",1),(null===(a=this.currentNavigation)||void 0===a?void 0:a.id)===o.id&&(this.currentNavigation=null)}),qt(a=>{if(s=!0,PD(a)){FD(a)||(this.navigated=!0,this.restoreHistory(o,!0));const u=new ka(o.id,this.serializeUrl(o.extractedUrl),a.message,a.cancellationCode);if(r.next(u),FD(a)){const c=this.urlHandlingStrategy.merge(a.url,this.rawUrlTree),d={skipLocationChange:o.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||nC(o.source)};this.scheduleNavigation(c,"imperative",null,d,{resolve:o.resolve,reject:o.reject,promise:o.promise})}else o.resolve(!1)}else{var l;this.restoreHistory(o,!0);const u=new ED(o.id,this.serializeUrl(o.extractedUrl),a,null!==(l=o.targetSnapshot)&&void 0!==l?l:void 0);r.next(u);try{o.resolve(this.errorHandler(a))}catch(c){o.reject(c)}}return un}))}))}resetRootComponentType(n){this.rootComponentType=n,this.routerState.root.component=this.rootComponentType}setTransition(n){this.transitions.next({...this.transitions.value,...n})}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(n=>{const r="popstate"===n.type?"popstate":"hashchange";"popstate"===r&&setTimeout(()=>{var o;const i={replaceUrl:!0},s=null!==(o=n.state)&&void 0!==o&&o.navigationId?n.state:null;if(s){const l={...s};delete l.navigationId,delete l.\u0275routerPageId,0!==Object.keys(l).length&&(i.state=l)}const a=this.parseUrl(n.url);this.scheduleNavigation(a,r,s,i)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(n){this.events.next(n)}resetConfig(n){this.config=n.map(zd),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(n,r={}){const{relativeTo:o,queryParams:i,fragment:s,queryParamsHandling:a,preserveFragment:l}=r,u=o||this.routerState.root,c=l?this.currentUrlTree.fragment:s;let d=null;switch(a){case"merge":d={...this.currentUrlTree.queryParams,...i};break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=i||null}return null!==d&&(d=this.removeEmptyProps(d)),q1(u,this.currentUrlTree,n,d,c??null)}navigateByUrl(n,r={skipLocationChange:!1}){const o=Dr(n)?n:this.parseUrl(n),i=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(i,"imperative",null,r)}navigate(n,r={skipLocationChange:!1}){return function SP(e){for(let t=0;t<e.length;t++){if(null==e[t])throw new C(4008,false)}}(n),this.navigateByUrl(this.createUrlTree(n,r),r)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){let r;try{r=this.urlSerializer.parse(n)}catch(o){r=this.malformedUriErrorHandler(o,this.urlSerializer,n)}return r}isActive(n,r){let o;if(o=!0===r?{...wP}:!1===r?{...EP}:r,Dr(n))return uD(this.currentUrlTree,n,o);const i=this.parseUrl(n);return uD(this.currentUrlTree,i,o)}removeEmptyProps(n){return Object.keys(n).reduce((r,o)=>{const i=n[o];return null!=i&&(r[o]=i),r},{})}processNavigations(){this.navigations.subscribe(n=>{var r;this.navigated=!0,this.lastSuccessfulId=n.id,this.currentPageId=n.targetPageId,this.events.next(new Cr(n.id,this.serializeUrl(n.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,null===(r=this.titleStrategy)||void 0===r||r.updateTitle(this.routerState.snapshot),n.resolve(!0)},n=>{this.console.warn(`Unhandled Navigation Error: ${n}`)})}scheduleNavigation(n,r,o,i,s){if(this.disposed)return Promise.resolve(!1);let a,l,u;s?(a=s.resolve,l=s.reject,u=s.promise):u=new Promise((p,g)=>{a=p,l=g});const c=++this.navigationId;let d;if("computed"===this.canceledNavigationResolution)if(0===this.currentPageId&&(o=this.location.getState()),o&&o.\u0275routerPageId)d=o.\u0275routerPageId;else if(i.replaceUrl||i.skipLocationChange){var f;d=null!==(f=this.browserPageId)&&void 0!==f?f:0}else{var h;d=(null!==(h=this.browserPageId)&&void 0!==h?h:0)+1}else d=0;return this.setTransition({id:c,targetPageId:d,source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:n,extras:i,resolve:a,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(p=>Promise.reject(p))}setBrowserUrl(n,r){const o=this.urlSerializer.serialize(n),i={...r.extras.state,...this.generateNgRouterState(r.id,r.targetPageId)};this.location.isCurrentPathEqualTo(o)||r.extras.replaceUrl?this.location.replaceState(o,"",i):this.location.go(o,"",i)}restoreHistory(n,r=!1){if("computed"===this.canceledNavigationResolution){var o,i;const s=this.currentPageId-n.targetPageId;"popstate"!==n.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==(null===(o=this.currentNavigation)||void 0===o?void 0:o.finalUrl)||0===s?this.currentUrlTree===(null===(i=this.currentNavigation)||void 0===i?void 0:i.finalUrl)&&0===s&&(this.resetState(n),this.browserUrlTree=n.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(s)}else"replace"===this.canceledNavigationResolution&&(r&&this.resetState(n),this.resetUrlToCurrentUrlTree())}resetState(n){this.routerState=n.currentRouterState,this.currentUrlTree=n.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(n,r,o){const i=new ka(n.id,this.serializeUrl(n.extractedUrl),r,o);this.triggerEvent(i),n.resolve(!1)}generateNgRouterState(n,r){return"computed"===this.canceledNavigationResolution?{navigationId:n,\u0275routerPageId:r}:{navigationId:n}}}return e.\u0275fac=function(n){ku()},e.\u0275prov=R({token:e,factory:function(){return tC()},providedIn:"root"}),e})();function nC(e){return"imperative"!==e}
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
class rC{}let AP=(()=>{class e{constructor(n,r,o,i,s){this.router=n,this.injector=o,this.preloadingStrategy=i,this.loader=s}setUpPreloading(){this.subscription=this.router.events.pipe(rn(n=>n instanceof Cr),zn(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(n,r){const o=[];for(const l of r){var i,s;l.providers&&!l._injector&&(l._injector=Zs(l.providers,n,`Route: ${l.path}`));const u=null!==(i=l._injector)&&void 0!==i?i:n,c=null!==(s=l._loadedInjector)&&void 0!==s?s:u;if(l.loadChildren&&!l._loadedRoutes&&void 0===l.canLoad||l.loadComponent&&!l._loadedComponent)o.push(this.preloadConfig(u,l));else if(l.children||l._loadedRoutes){var a;o.push(this.processRoutes(c,null!==(a=l.children)&&void 0!==a?a:l._loadedRoutes))}}return Ie(o).pipe(Ir())}preloadConfig(n,r){return this.preloadingStrategy.preload(r,()=>{let o;o=r.loadChildren&&void 0===r.canLoad?this.loader.loadChildren(n,r):x(null);const i=o.pipe($e(s=>{var a;return null===s?x(void 0):(r._loadedRoutes=s.routes,r._loadedInjector=s.injector,this.processRoutes(null!==(a=s.injector)&&void 0!==a?a:n,s.routes))}));return r.loadComponent&&!r._loadedComponent?Ie([i,this.loader.loadComponent(r)]).pipe(Ir()):i})}}return e.\u0275fac=function(n){return new(n||e)(I(Be),I(Oc),I(Vn),I(rC),I(Yd))},e.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ef=new T("");let oC=(()=>{class e{constructor(n,r,o={}){this.router=n,this.viewportScroller=r,this.options=o,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},o.scrollPositionRestoration=o.scrollPositionRestoration||"disabled",o.anchorScrolling=o.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(n=>{n instanceof kd?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=n.navigationTrigger,this.restoredId=n.restoredState?n.restoredState.navigationId:0):n instanceof Cr&&(this.lastId=n.id,this.scheduleScrollEvent(n,this.router.parseUrl(n.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(n=>{n instanceof bD&&(n.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(n.position):n.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(n.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(n,r){this.router.triggerEvent(new bD(n,"popstate"===this.lastSource?this.store[this.restoredId]:null,r))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return e.\u0275fac=function(n){ku()},e.\u0275prov=R({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function wo(e,t){return{\u0275kind:e,\u0275providers:t}}function tf(e){return[{provide:Zd,multi:!0,useValue:e}]}function sC(){const e=Ee(Dt);return t=>{var n,r;const o=e.get(ra);if(t!==o.components[0])return;const i=e.get(Be),s=e.get(aC);1===e.get(nf)&&i.initialNavigation(),null===(n=e.get(lC,null,F.Optional))||void 0===n||n.setUpPreloading(),null===(r=e.get(ef,null,F.Optional))||void 0===r||r.init(),i.resetRootComponentType(o.componentTypes[0]),s.next(),s.complete()}}const aC=new T("",{factory:()=>new Ze}),nf=new T("",{providedIn:"root",factory:()=>1});const lC=new T("");function RP(e){return wo(0,[{provide:lC,useExisting:AP},{provide:rC,useExisting:e}])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const uC=new T("ROUTER_FORROOT_GUARD"),FP=[Zc,{provide:hD,useClass:xd},{provide:Be,useFactory:tC},Li,{provide:wr,useFactory:function iC(e){return e.routerState.root},deps:[Be]},Yd];function PP(){return new Mv("Router",Be)}let cC=(()=>{class e{constructor(n){}static forRoot(n,r){return{ngModule:e,providers:[FP,[],tf(n),{provide:uC,useFactory:VP,deps:[[Be,new zo,new Wo]]},{provide:Wa,useValue:r||{}},null!=r&&r.useHash?{provide:yr,useClass:Px}:{provide:yr,useClass:Yv},{provide:ef,useFactory:()=>{const e=Ee(Be),t=Ee(XN),n=Ee(Wa);return n.scrollOffset&&t.setOffset(n.scrollOffset),new oC(e,t,n)}},null!=r&&r.preloadingStrategy?RP(r.preloadingStrategy).\u0275providers:[],{provide:Mv,multi:!0,useFactory:PP},null!=r&&r.initialNavigation?$P(r):[],[{provide:dC,useFactory:sC},{provide:_v,multi:!0,useExisting:dC}]]}}static forChild(n){return{ngModule:e,providers:[tf(n)]}}}return e.\u0275fac=function(n){return new(n||e)(I(uC,8))},e.\u0275mod=bt({type:e}),e.\u0275inj=ht({imports:[Ud]}),e})();function VP(e){return"guarded"}function $P(e){return["disabled"===e.initialNavigation?wo(3,[{provide:ea,multi:!0,useFactory:()=>{const t=Ee(Be);return()=>{t.setUpLocationChangeListener()}}},{provide:nf,useValue:2}]).\u0275providers:[],"enabledBlocking"===e.initialNavigation?wo(2,[{provide:nf,useValue:0},{provide:ea,multi:!0,deps:[Dt],useFactory:t=>{const n=t.get(Rx,Promise.resolve());let r=!1;return()=>n.then(()=>new Promise(i=>{const s=t.get(Be),a=t.get(aC);(function o(i){t.get(Be).events.pipe(rn(a=>a instanceof Cr||a instanceof ka||a instanceof ED),q(a=>a instanceof Cr||a instanceof ka&&(0===a.code||1===a.code)&&null),rn(a=>null!==a),Ti(1)).subscribe(()=>{i()})})(()=>{i(!0),r=!0}),s.afterPreactivation=()=>(i(!0),r||a.closed?x(void 0):a),s.initialNavigation()}))}}]).\u0275providers:[]]}const dC=new T(""),BP=[];let HP=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=bt({type:e}),e.\u0275inj=ht({imports:[cC.forRoot(BP),cC]}),e})(),Eo=(()=>{class e{constructor(n){this.http=n,this.isLoading=!0,this.query="",this.params={selectedCollege:"",collegeFullName:"",selectedProgramType:"",programTypeFullName:"",limit:25,page:1},this.resultsSource=new Ze,this.querySource=new Ze,this.paramsSource=new Ze,this.isLoadingSource=new Ze,this.results$=this.resultsSource.asObservable(),this.query$=this.querySource.asObservable(),this.params$=this.paramsSource.asObservable(),this.isLoading$=this.isLoadingSource.asObservable(),this.searchUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/degrees",this.subscription=this.query$.subscribe(r=>{this.query=r,this.getResults()}),this.subscription=this.params$.subscribe(r=>{this.params=r,this.getResults()})}setQuery(n){this.querySource.next(n)}setProgramType(n,r){this.params.selectedProgramType=n,this.params.programTypeFullName=r,this.paramsSource.next(this.params)}setCollege(n,r){this.params.selectedCollege=n,this.params.collegeFullName=r,this.paramsSource.next(this.params)}setPage(n){this.params.page=this.params.page+n,this.paramsSource.next(this.params)}gotoPage(n,r){this.params.page=n,r&&this.paramsSource.next(this.params)}getResults(){const n={params:(new Tn).set("colleges",this.params.selectedCollege).set("limit",this.params.limit).set("page",this.params.page).set("program_types",this.params.selectedProgramType).set("search",this.query)};this.isLoadingSource.next(!0),this.resultsSource.next(this.results),this.http.get(this.searchUrl,n).pipe(qt(this.handleError)).subscribe(r=>{this.isLoadingSource.next(!1),this.resultsSource.next(r)})}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),Wn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(I(Ia))},e.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),UP=(()=>{class e{constructor(n){this.http=n,this.collegesUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/colleges"}getColleges(){return this.http.get(this.collegesUrl).pipe(qt(this.handleError))}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),Wn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(I(Ia))},e.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function GP(e,t){1&e&&(M(0,"p",4),J(1,"span",5),z(2," Loading colleges"),A())}function zP(e,t){if(1&e){const n=fr();M(0,"li",9)(1,"label",10)(2,"input",11),he("click",function(){const i=sr(n).$implicit;return ar(be(2).setCollege(i.slug,i.fullname))}),A(),J(3,"span",12),M(4,"span",13),z(5),A()()()}if(2&e){const n=t.$implicit;P(2),hr("value",n.slug),P(3),Dn(n.name)}}function WP(e,t){if(1&e&&(M(0,"div",6)(1,"ul",7),de(2,zP,6,2,"li",8),A()()),2&e){const n=be();P(2),Z("ngForOf",n.colleges)}}let qP=(()=>{class e{constructor(n,r){this.collegeService=n,this.searchService=r,this.toggleFilters=new ge,this.isLoading=!0,this.isCollegesOpen=!1}ngOnInit(){this.collegeService.getColleges().subscribe(n=>{this.colleges=n,this.isLoading=!1})}setCollege(n,r){this.toggleFilters.emit(),this.selectedCollege=n,this.searchService.gotoPage(1,!1),this.searchService.setCollege(n,r)}}return e.\u0275fac=function(n){return new(n||e)(_(UP),_(Eo))},e.\u0275cmp=Et({type:e,selectors:[["app-colleges"]],outputs:{toggleFilters:"toggleFilters"},decls:5,vars:2,consts:[[1,"h6","pb-2","mt-4"],[1,"mb-4"],["class","my-3",4,"ngIf"],["class","degree-search-colleges",4,"ngIf"],[1,"my-3"],[1,"fa","fa-spinner","fa-spin"],[1,"degree-search-colleges"],[1,"degree-search-colleges","list-unstyled"],["class","degree-search-college",4,"ngFor","ngForOf"],[1,"degree-search-college"],[1,"custom-control","custom-radio","mb-0"],["type","radio","name","college",1,"custom-control-input",3,"value","click"],[1,"custom-control-indicator"],[1,"custom-control-description"]],template:function(n,r){1&n&&(M(0,"h3",0),z(1," Select Area of Study\n"),A(),M(2,"div",1),de(3,GP,3,0,"p",2),de(4,WP,3,1,"div",3),A()),2&n&&(P(3),Z("ngIf",r.isLoading),P(1),Z("ngIf",r.colleges&&r.colleges.length>0))},dependencies:[bi,go]}),e})(),QP=(()=>{class e{constructor(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=Et({type:e,selectors:[["app-locations"]],decls:45,vars:0,consts:[[1,"h6","pb-2","mt-4"],[1,"list-unstyled"],[1,"custom-control","custom-radio","mb-0"],["type","radio","name","locations",1,"custom-control-input"],[1,"custom-control-indicator"],[1,"custom-control-description"],["href","https://www.ucf.edu/online/",1,"d-inline-block","mr-2"],["href","https://www.ucf.edu/online/"],[1,"fa","fa-external-link","text-primary"]],template:function(n,r){1&n&&(M(0,"h3",0),z(1,"Select Location"),A(),M(2,"ul",1)(3,"li")(4,"label",2),J(5,"input",3)(6,"span",4),M(7,"span",5),z(8,"Main Campus"),A()()(),M(9,"li")(10,"label",2),J(11,"input",3)(12,"span",4),M(13,"span",5),z(14,"Academic Health Sciences Campus"),A()()(),M(15,"li")(16,"label",2),J(17,"input",3)(18,"span",4),M(19,"span",5),z(20,"UCF Downtown"),A()()(),M(21,"li")(22,"label",2),J(23,"input",3)(24,"span",4),M(25,"span",5),z(26,"Rosen campus"),A()()(),M(27,"li")(28,"label",2),J(29,"input",3)(30,"span",4),M(31,"span",5),z(32,"UCF Online"),A()()(),M(33,"li")(34,"label",2),J(35,"input",3)(36,"span",4),M(37,"span",5),z(38,"CONNECT Campuses"),A()()()(),J(39,"hr"),M(40,"h3",0)(41,"a",6),z(42," Online Programs"),A(),M(43,"a",7),J(44,"span",8),A()())}}),e})(),KP=(()=>{class e{constructor(n){this.http=n,this.programTypesUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/program-types",this.programTypesSource=new Ze,this.programTypes$=this.programTypesSource.asObservable()}getprogramTypes(){this.http.get(this.programTypesUrl).pipe(qt(this.handleError)).subscribe(n=>{this.programTypesSource.next(n)})}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),Wn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(I(Ia))},e.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),fC=(()=>{class e{constructor(){this.degreeType=""}ngOnInit(){}getProgamClass(n){return"bachelor"===n||"undergraduate-program"===n||"minor"===n||"undergraduate-certificate"===n?"fa fa-bookmark fa-2x text-primary":"doctorate"===n||"master"===n||"specialist"===n||"graduate-certificate"===n||"graduate-program"===n?"fa fa-bookmark fa-2x text-danger":"fa fa-bookmark fa-2x text-complementary"}getProgramType(n){switch(n){case"bachelor":case"undergraduate-program":return"B";case"minor":return"MN";case"undergraduate-certificate":return"UC";case"doctorate":case"professional-program":return"D";case"graduate-certificate":return"GC";case"master":case"specialist":case"graduate-program":return"M";default:return""}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=Et({type:e,selectors:[["app-programs-label"]],inputs:{degreeType:"degreeType"},decls:4,vars:2,consts:[[1,"fa-stack",2,"line-height","1.6em"],[1,"fa","fa-stack-2x",3,"ngClass"],[1,"fa-stack-1x","font-sans-serif","small"]],template:function(n,r){1&n&&(M(0,"span",0),J(1,"span",1),M(2,"span",2),z(3),A()()),2&n&&(P(1),Z("ngClass",r.getProgamClass(r.degreeType)),P(2),Dn(r.getProgramType(r.degreeType)))},dependencies:[_a]}),e})();function ZP(e,t){if(1&e){const n=fr();Bn(0),M(1,"li")(2,"label",4)(3,"input",5),he("click",function(){const i=sr(n).$implicit;return ar(be(3).setProgramType(i.name,i.name))}),A(),J(4,"span",6),M(5,"span",7),J(6,"app-programs-label",8),z(7),A()()(),Hn()}if(2&e){const n=t.$implicit;P(3),hr("value",n.name),P(3),Z("degreeType",n.slug),P(1),Cn(" ",n.name," ")}}function YP(e,t){if(1&e){const n=fr();Bn(0),M(1,"li")(2,"label",4)(3,"input",5),he("click",function(){const i=sr(n).$implicit;return ar(be(2).setProgramType(i.name,i.name))}),A(),J(4,"span",6),M(5,"span",7),J(6,"app-programs-label",8),z(7),A()()(),M(8,"ul",9),de(9,ZP,8,3,"ng-container",3),A(),Hn()}if(2&e){const n=t.$implicit;P(3),hr("value",n.name),P(3),Z("degreeType",n.slug),P(1),Cn(" ",n.name," "),P(2),Z("ngForOf",n.children)}}function JP(e,t){if(1&e&&(M(0,"div")(1,"h3",1),z(2," Select Degree Level "),A(),M(3,"ul",2),de(4,YP,10,4,"ng-container",3),A()()),2&e){const n=be();P(4),Z("ngForOf",n.programTypes)}}let XP=(()=>{class e{constructor(n,r){this.programTypeService=n,this.searchService=r,this.toggleFilters=new ge,this.isLoading=!0,this.isProgramTypeOpen=!1,this.subscription=this.programTypeService.programTypes$.subscribe(o=>{this.programTypes=o})}ngOnInit(){this.programTypeService.getprogramTypes()}setProgramType(n,r){this.toggleFilters.emit(),this.selectedProgramType=n,this.searchService.gotoPage(1,!1),this.searchService.setProgramType(n,r)}}return e.\u0275fac=function(n){return new(n||e)(_(KP),_(Eo))},e.\u0275cmp=Et({type:e,selectors:[["app-program-types"]],outputs:{toggleFilters:"toggleFilters"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"h6","pb-2","mt-4"],[1,"degree-search-programTypes","list-unstyled"],[4,"ngFor","ngForOf"],[1,"custom-control","custom-radio","mb-0"],["type","radio","name","programType",1,"custom-control-input",3,"value","click"],[1,"custom-control-indicator"],[1,"custom-control-description"],[1,"d-none","d-md-block",3,"degreeType"],[1,"list-unstyled","ml-3"]],template:function(n,r){1&n&&de(0,JP,5,1,"div",0),2&n&&Z("ngIf",r.programTypes&&r.programTypes.length>0)},dependencies:[bi,go,fC]}),e})(),hC=(()=>{class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}}return e.\u0275fac=function(n){return new(n||e)(_(mn),_(_t))},e.\u0275dir=L({type:e}),e})(),Er=(()=>{class e extends hC{}return e.\u0275fac=function(){let t;return function(r){return(t||(t=function Ge(e){return Fn(()=>{const t=e.prototype.constructor,n=t[dn]||Ul(t),r=Object.prototype;let o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){const i=o[dn]||Ul(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}(e)))(r||e)}}(),e.\u0275dir=L({type:e,features:[re]}),e})();const an=new T("NgValueAccessor"),nO={provide:an,useExisting:le(()=>Za),multi:!0},oO=new T("CompositionEventMode");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Za=(()=>{class e extends hC{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function rO(){const e=nn()?nn().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(n){this.setProperty("value",n??"")}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}}return e.\u0275fac=function(n){return new(n||e)(_(mn),_(_t),_(oO,8))},e.\u0275dir=L({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){1&n&&he("input",function(i){return r._handleInput(i.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(i){return r._compositionEnd(i.target.value)})},features:[pe([nO]),re]}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ke=new T("NgValidators"),Zn=new T("NgAsyncValidators");function bC(e){return null!=e}function SC(e){return li(e)?Ie(e):e}function MC(e){let t={};return e.forEach(n=>{t=null!=n?{...t,...n}:t}),0===Object.keys(t).length?null:t}function IC(e,t){return t.map(n=>n(e))}function AC(e){return e.map(t=>function aO(e){return!e.validate}(t)?t:n=>t.validate(n))}function rf(e){return null!=e?function TC(e){if(!e)return null;const t=e.filter(bC);return 0==t.length?null:function(n){return MC(IC(n,t))}}(AC(e)):null}function sf(e){return null!=e?function xC(e){if(!e)return null;const t=e.filter(bC);return 0==t.length?null:function(n){return function eO(...e){const t=oh(e),{args:n,keys:r}=K_(e),o=new Ce(i=>{const{length:s}=n;if(!s)return void i.complete();const a=new Array(s);let l=s,u=s;for(let c=0;c<s;c++){let d=!1;Ft(n[c]).subscribe(we(i,f=>{d||(d=!0,u--),a[c]=f},()=>l--,void 0,()=>{(!l||!d)&&(u||i.next(r?Y_(r,a):a),i.complete())}))}});return t?o.pipe(Z_(t)):o}
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
       */(IC(n,t).map(SC)).pipe(q(MC))}}(AC(e)):null}function NC(e,t){return null===e?[t]:Array.isArray(e)?[...e,t]:[e,t]}function RC(e){return e._rawValidators}function FC(e){return e._rawAsyncValidators}function af(e){return e?Array.isArray(e)?e:[e]:[]}function Ja(e,t){return Array.isArray(e)?e.includes(t):e===t}function PC(e,t){const n=af(t);return af(e).forEach(o=>{Ja(n,o)||n.push(o)}),n}function OC(e,t){return af(t).filter(n=>!Ja(e,n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class kC{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=rf(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=sf(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,n){return!!this.control&&this.control.hasError(t,n)}getError(t,n){return this.control?this.control.getError(t,n):null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class it extends kC{get formDirective(){return null}get path(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Yn extends kC{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class LC{constructor(t){this._cd=t}get isTouched(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.touched)}get isUntouched(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.untouched)}get isPristine(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.pristine)}get isDirty(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.dirty)}get isValid(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.valid)}get isInvalid(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.invalid)}get isPending(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.pending)}get isSubmitted(){var t;return!(null===(t=this._cd)||void 0===t||!t.submitted)}}let VC=(()=>{class e extends LC{constructor(n){super(n)}}return e.\u0275fac=function(n){return new(n||e)(_(Yn,2))},e.\u0275dir=L({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){2&n&&Gs("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[re]}),e})(),$C=(()=>{class e extends LC{constructor(n){super(n)}}return e.\u0275fac=function(n){return new(n||e)(_(it,10))},e.\u0275dir=L({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){2&n&&Gs("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[re]}),e})();
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
const Ui="VALID",el="INVALID",bo="PENDING",Gi="DISABLED";function BC(e){return Array.isArray(e)?rf(e):e||null}function HC(e){return Array.isArray(e)?sf(e):e||null}function tl(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}function zi(e,t){var n,r;(function pf(e,t){const n=RC(e);null!==t.validator?e.setValidators(NC(n,t.validator)):"function"==typeof n&&e.setValidators([n]);const r=FC(e);null!==t.asyncValidator?e.setAsyncValidators(NC(r,t.asyncValidator)):"function"==typeof r&&e.setAsyncValidators([r]);const o=()=>e.updateValueAndValidity();ol(t._rawValidators,o),ol(t._rawAsyncValidators,o)})(e,t),t.valueAccessor.writeValue(e.value),e.disabled&&(null===(n=(r=t.valueAccessor).setDisabledState)||void 0===n||n.call(r,!0)),function mO(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&WC(e,t)})}(e,t),function vO(e,t){const n=(r,o)=>{t.valueAccessor.writeValue(r),o&&t.viewToModelUpdate(r)};e.registerOnChange(n),t._registerOnDestroy(()=>{e._unregisterOnChange(n)})}(e,t),function yO(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&WC(e,t),"submit"!==e.updateOn&&e.markAsTouched()})}(e,t),function gO(e,t){if(t.valueAccessor.setDisabledState){const n=r=>{t.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(n),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(n)})}}(e,t)}function rl(e,t,n=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),function il(e,t){let n=!1;if(null!==e){if(null!==t.validator){const o=RC(e);if(Array.isArray(o)&&o.length>0){const i=o.filter(s=>s!==t.validator);i.length!==o.length&&(n=!0,e.setValidators(i))}}if(null!==t.asyncValidator){const o=FC(e);if(Array.isArray(o)&&o.length>0){const i=o.filter(s=>s!==t.asyncValidator);i.length!==o.length&&(n=!0,e.setAsyncValidators(i))}}}const r=()=>{};return ol(t._rawValidators,r),ol(t._rawAsyncValidators,r),n}(e,t),e&&(t._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function ol(e,t){e.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(t)})}function WC(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}
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
       */function YC(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}let nw=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=L({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),e})(),ow=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=bt({type:e}),e.\u0275inj=ht({}),e})();
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
const _f=new T("NgModelWithFormControlWarning"),NO={provide:Yn,useExisting:le(()=>Df)};let Df=(()=>{class e extends Yn{constructor(n,r,o,i){super(),this._ngModelWarningConfig=i,this.update=new ge,this._ngModelWarningSent=!1,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=function mf(e,t){if(!t)return null;let n,r,o;return Array.isArray(t),t.forEach(i=>{i.constructor===Za?n=i:function CO(e){return Object.getPrototypeOf(e.constructor)===Er}(i)?r=i:o=i}),o||r||n||null}(0,o)}set isDisabled(n){}ngOnChanges(n){if(this._isControlChanged(n)){const r=n.form.previousValue;r&&rl(r,this,!1),zi(this.form,this),this.form.updateValueAndValidity({emitEvent:!1})}(function gf(e,t){if(!e.hasOwnProperty("model"))return!1;const n=e.model;return!!n.isFirstChange()||!Object.is(t,n.currentValue)})(n,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&rl(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_isControlChanged(n){return n.hasOwnProperty("form")}}return e._ngModelWarningSentOnce=!1,e.\u0275fac=function(n){return new(n||e)(_(Ke,10),_(Zn,10),_(an,10),_(_f,8))},e.\u0275dir=L({type:e,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[pe([NO]),re,Mt]}),e})(),ZO=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=bt({type:e}),e.\u0275inj=ht({imports:[ow]}),e})(),YO=(()=>{class e{static withConfig(n){return{ngModule:e,providers:[{provide:_f,useValue:n.warnOnNgModelWithFormControl}]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=bt({type:e}),e.\u0275inj=ht({imports:[ZO]}),e})();
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
class XO extends ct{constructor(t,n){super()}schedule(t,n=0){return this}}const sl={setInterval(e,t,...n){const{delegate:r}=sl;return r?.setInterval?r.setInterval(e,t,...n):setInterval(e,t,...n)},clearInterval(e){const{delegate:t}=sl;return(t?.clearInterval||clearInterval)(e)},delegate:void 0},Dw={now:()=>(Dw.delegate||Date).now(),delegate:void 0};class qi{constructor(t,n=qi.now){this.schedulerActionCtor=t,this.now=n}schedule(t,n=0,r){return new this.schedulerActionCtor(this,t).schedule(r,n)}}qi.now=Dw.now;const nk=new class tk extends qi{constructor(t,n=qi.now){super(t,n),this.actions=[],this._active=!1}flush(t){const{actions:n}=this;if(this._active)return void n.push(t);let r;this._active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=n.shift());if(this._active=!1,r){for(;t=n.shift();)t.unsubscribe();throw r}}}(class ek extends XO{constructor(t,n){super(t,n),this.scheduler=t,this.work=n,this.pending=!1}schedule(t,n=0){var r;if(this.closed)return this;this.state=t;const o=this.id,i=this.scheduler;return null!=o&&(this.id=this.recycleAsyncId(i,o,n)),this.pending=!0,this.delay=n,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(i,this.id,n),this}requestAsyncId(t,n,r=0){return sl.setInterval(t.flush.bind(t,this),r)}recycleAsyncId(t,n,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return n;null!=n&&sl.clearInterval(n)}execute(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(t,n);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,n){let o,r=!1;try{this.work(t)}catch(i){r=!0,o=i||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:t,scheduler:n}=this,{actions:r}=n;this.work=this.state=this.scheduler=null,this.pending=!1,Mr(r,this),null!=t&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null,super.unsubscribe()}}});function ik(e,t){return e===t}let sk=(()=>{class e{constructor(n){this.searchService=n}ngOnInit(){this.searchField=new class extends class zC{constructor(t,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=n,this._composedValidatorFn=BC(this._rawValidators),this._composedAsyncValidatorFn=HC(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===Ui}get invalid(){return this.status===el}get pending(){return this.status==bo}get disabled(){return this.status===Gi}get enabled(){return this.status!==Gi}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=BC(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=HC(t)}addValidators(t){this.setValidators(PC(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(PC(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(OC(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(OC(t,this._rawAsyncValidators))}hasValidator(t){return Ja(this._rawValidators,t)}hasAsyncValidator(t){return Ja(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=bo,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const n=this._parentMarkedDirty(t.onlySelf);this.status=Gi,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:n}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const n=this._parentMarkedDirty(t.onlySelf);this.status=Ui,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:n}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ui||this.status===bo)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Gi:Ui}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=bo,this._hasOwnPendingAsyncValidator=!0;const n=SC(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,n={}){this.errors=t,this._updateControlsErrors(!1!==n.emitEvent)}get(t){let n=t;return null==n||(Array.isArray(n)||(n=n.split(".")),0===n.length)?null:n.reduce((r,o)=>r&&r._find(o),this)}getError(t,n){const r=n?this.get(n):this;return r&&r.errors?r.errors[t]:null}hasError(t,n){return!!this.getError(t,n)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new ge,this.statusChanges=new ge}_calculateStatus(){return this._allControlsDisabled()?Gi:this.errors?el:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(bo)?bo:this._anyControlsHaveStatus(el)?el:Ui}_anyControlsHaveStatus(t){return this._anyControls(n=>n.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){tl(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */{constructor(t=null,n,r){super(function df(e){return(tl(e)?e.validators:e)||null}(n),function ff(e,t){return(tl(t)?t.asyncValidators:e)||null}(r,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),tl(n)&&(n.nonNullable||n.initialValueIsDefault)&&(this.defaultValue=YC(t)?t.value:t)}setValue(t,n={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==n.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==n.emitViewToModelChange)),this.updateValueAndValidity(n)}patchValue(t,n={}){this.setValue(t,n)}reset(t=this.defaultValue,n={}){this._applyFormState(t),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){ZC(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){ZC(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){YC(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}},this.searchField.valueChanges.pipe(rn(n=>n.length>2),function rk(e,t=nk){return Me((n,r)=>{let o=null,i=null,s=null;const a=()=>{if(o){o.unsubscribe(),o=null;const u=i;i=null,r.next(u)}};function l(){const u=s+e,c=t.now();if(c<u)return o=this.schedule(void 0,u-c),void r.add(o);a()}n.subscribe(we(r,u=>{i=u,s=t.now(),o||(o=t.schedule(l,e),r.add(o))},()=>{a(),r.complete()},void 0,()=>{i=o=null}))})}(600),function ok(e,t=Rn){return e=e??ik,Me((n,r)=>{let o,i=!0;n.subscribe(we(r,s=>{const a=t(s);(i||!e(o,a))&&(i=!1,o=a,r.next(s))}))})}()).subscribe(n=>{n&&(this.searchService.gotoPage(1,!1),this.searchService.setQuery(n))})}}return e.\u0275fac=function(n){return new(n||e)(_(Eo))},e.\u0275cmp=Et({type:e,selectors:[["app-search-form"]],decls:7,vars:1,consts:[[1,"jumbotron","jumbotron-fluid","bg-primary","pt-3","pb-0","mb-0"],[1,"container","bg-primary"],[1,"row"],[1,"col-12"],["id","degree-search-form","role","search","placeholder","Search for a degree..."],[1,"search-form-inner"],["id","degree-search-query","name","degree-search-query","type","search","autocomplete","off","aria-controls","searchResults","placeholder","Search for a degree...",1,"form-control",3,"formControl","keydown.enter"]],template:function(n,r){1&n&&(M(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"form",4)(5,"div",5)(6,"input",6),he("keydown.enter",function(i){return i.preventDefault()}),A()()()()()()()),2&n&&(P(6),Z("formControl",r.searchField))},dependencies:[nw,Za,VC,$C,Df]}),e})();const ak=["paginationContainer"];function lk(e,t){if(1&e){const n=fr();M(0,"li",7)(1,"a",8),he("click",function(){return sr(n),ar(be(2).setPage(-1))}),M(2,"span",9),z(3,"\xab"),A(),M(4,"span",10),z(5,"Previous"),A()()()}}const uk=function(e){return{active:e}};function ck(e,t){if(1&e){const n=fr();M(0,"li",11)(1,"a",8),he("click",function(){const i=sr(n).$implicit;return ar(be(2).goToPage(i))}),z(2),A()()}if(2&e){const n=t.$implicit,r=be(2);Z("ngClass",$y(2,uk,r.results.currentPage===n)),P(2),Cn(" ",n," ")}}function dk(e,t){if(1&e){const n=fr();M(0,"li",7)(1,"a",8),he("click",function(){return sr(n),ar(be(2).setPage(1))}),M(2,"span",9),z(3,"\xbb"),A(),M(4,"span",10),z(5,"Next"),A()()()}}function fk(e,t){if(1&e&&(M(0,"div",1,2)(2,"nav",3)(3,"ul",4),de(4,lk,6,0,"li",5),de(5,ck,3,4,"li",6),de(6,dk,6,0,"li",5),A()()()),2&e){const n=be();P(4),Z("ngIf",n.results.currentPage>1),P(1),Z("ngForOf",n.pages),P(1),Z("ngIf",n.results.currentPage<n.results.totalPages)}}let hk=(()=>{class e{constructor(n){this.searchService=n}ngOnInit(){}ngAfterViewInit(){setTimeout(()=>{this.paginationContainer&&this.pagination(this.paginationContainer.nativeElement.offsetWidth)})}setPage(n){this.searchService.setPage(n)}goToPage(n){n!==this.results?.currentPage&&this.searchService.gotoPage(n,!0)}pagination(n){if(this.results){let o=n<600?2:4,i=this.results.currentPage-o<1?1:this.results.currentPage-o,s=this.results.currentPage+o>this.results.totalPages?this.results.totalPages:this.results.currentPage+o;this.pages=new Array;for(var r=i;r<=s;r++)this.pages.push(r)}}}return e.\u0275fac=function(n){return new(n||e)(_(Eo))},e.\u0275cmp=Et({type:e,selectors:[["app-pagination"]],viewQuery:function(n,r){if(1&n&&Ic(ak,5),2&n){let o;yi(o=vi())&&(r.paginationContainer=o.first)}},inputs:{results:"results"},decls:1,vars:1,consts:[["class","mt-5",4,"ngIf"],[1,"mt-5"],["paginationContainer",""],["aria-label","Degree Results Pagination"],[1,"pagination","pagination-lg","justify-content-center"],["class","page-item",4,"ngIf"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item"],["href","#",1,"page-link",3,"click"],["aria-hidden","true"],[1,"sr-only"],[1,"page-item",3,"ngClass"]],template:function(n,r){1&n&&de(0,fk,7,3,"div",0),2&n&&Z("ngIf",r.results&&r.results.totalPages>1)},dependencies:[_a,bi,go]}),e})();const pk=["degreeLinks"];function gk(e,t){if(1&e&&(M(0,"span"),z(1," for the "),M(2,"strong"),z(3),A(),z(4," program"),A()),2&e){const n=be(2);P(3),Dn(n.params.programTypeFullName)}}function mk(e,t){if(1&e&&(M(0,"span"),z(1," at the "),M(2,"strong"),z(3),A()()),2&e){const n=be(2);P(3),Dn(n.params.collegeFullName)}}function yk(e,t){if(1&e&&(M(0,"p",1),z(1," No degrees found "),de(2,gk,5,1,"span",2),de(3,mk,4,1,"span",2),z(4," at UCF.\n"),A()),2&e){const n=be();P(2),Z("ngIf",n.params&&""!=n.params.programTypeFullName),P(1),Z("ngIf",n.params&&""!=n.params.collegeFullName)}}function vk(e,t){if(1&e&&(M(0,"div",21),z(1),A()),2&e){const n=be().$implicit;P(1),Dn(n.excerpt)}}function _k(e,t){if(1&e&&(Bn(0),J(1,"span",22),z(2),Hn()),2&e){const n=be().$implicit;P(2),Cn(" ",n.hours,"")}}function Dk(e,t){if(1&e&&(M(0,"div",29),z(1),A()),2&e){const n=be().$implicit;P(1),Dn(n.excerpt)}}function Ck(e,t){if(1&e&&(Bn(0),J(1,"span",22),z(2),Hn()),2&e){const n=be().$implicit;P(2),Cn(" ",n.hours,"")}}function wk(e,t){if(1&e&&(M(0,"div",25),J(1,"hr",11),M(2,"div",12)(3,"div",26)(4,"div",14)(5,"div",5)(6,"a",15)(7,"span",27),z(8),A()(),de(9,Dk,2,1,"div",28),A()(),M(10,"div",18),de(11,Ck,3,1,"ng-container",2),A(),M(12,"div",18),J(13,"app-programs-label",19),A()()()()),2&e){const n=t.$implicit;P(6),hr("href",n.url,Yo),P(2),Dn(n.nameShort),P(1),Z("ngIf",n.excerpt),P(2),Z("ngIf",n.hours),P(2),Z("degreeType",n.type)}}function Ek(e,t){if(1&e&&(M(0,"div",23),de(1,wk,14,5,"div",24),A()),2&e){const n=be().$implicit;P(1),Z("ngForOf",n.subplans)}}function bk(e,t){if(1&e&&(M(0,"div"),J(1,"hr",11),M(2,"div",12)(3,"div",13)(4,"div",14)(5,"div",5)(6,"a",15,16),z(8),A(),de(9,vk,2,1,"div",17),A()(),M(10,"div",18),de(11,_k,3,1,"ng-container",2),A(),M(12,"div",18),J(13,"app-programs-label",19),A()()(),de(14,Ek,2,1,"div",20),A()),2&e){const n=t.$implicit;P(6),hr("href",n.url,Yo),P(2),Cn(" ",n.title," "),P(1),Z("ngIf",n.excerpt),P(2),Z("ngIf",n.hours),P(2),Z("degreeType",n.type),P(1),Z("ngIf",n.subplans)}}function Sk(e,t){if(1&e&&(M(0,"div",10),de(1,bk,15,6,"div",7),A()),2&e){const n=be().$implicit;P(1),Z("ngForOf",n.degrees)}}function Mk(e,t){if(1&e&&(Bn(0),de(1,Sk,2,1,"div",9),Hn()),2&e){const n=t.$implicit;P(1),Z("ngIf",n.degrees)}}function Ik(e,t){if(1&e&&(M(0,"div",1)(1,"div",3)(2,"div",4)(3,"div",5),z(4," Programs "),A()(),M(5,"div",6),z(6," Hours to Complete "),A(),M(7,"div",6),z(8," Degree Level "),A()(),de(9,Mk,2,1,"ng-container",7),J(10,"app-pagination",8),A()),2&e){const n=be();P(9),Z("ngForOf",n.results.types),P(1),Z("results",n.results)}}let Ak=(()=>{class e{constructor(n){this.searchService=n,this.isLoading=!0,this.subscription=this.searchService.results$.subscribe(r=>{this.results=r}),this.subscription=this.searchService.params$.subscribe(r=>{this.params=r}),this.subscription=this.searchService.isLoading$.subscribe(r=>{this.isLoading=r})}ngOnInit(){this.searchService.getResults()}ngAfterViewInit(){this.degreeLinks?.changes.subscribe(()=>{setTimeout(()=>{this.degreeLinks&&this.degreeLinks.first&&this.degreeLinks.first.nativeElement&&this.degreeLinks.first.nativeElement.focus()})})}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(_(Eo))},e.\u0275cmp=Et({type:e,selectors:[["app-search-results"]],viewQuery:function(n,r){if(1&n&&Ic(pk,5),2&n){let o;yi(o=vi())&&(r.degreeLinks=o)}},decls:2,vars:2,consts:[["class","mt-4",4,"ngIf"],[1,"mt-4"],[4,"ngIf"],[1,"row","align-items-end","d-none","d-md-flex","mb-3"],[1,"col-md-6","program-header"],[1,"pl-3"],[1,"col-md-3","text-center","program-header"],[4,"ngFor","ngForOf"],[3,"results"],["class","degree-search-results-container list-unstyled",4,"ngIf"],[1,"degree-search-results-container","list-unstyled"],[1,"hr-primary","m-0"],[1,"degree-hover"],[1,"row","degree","position-relative","py-3"],[1,"col-12","col-md-6"],[1,"stretched-link","font-weight-bold",3,"href"],["degreeLinks",""],["class","degree-description small mt-2 mb-0",4,"ngIf"],[1,"col-md-3","text-center","d-none","d-md-block"],[3,"degreeType"],["class","degree-search-subplan-results-container list-unstyled",4,"ngIf"],[1,"degree-description","small","mt-2","mb-0"],["aria-hidden","true",1,"fa","fa-clock-o"],[1,"degree-search-subplan-results-container","list-unstyled"],["class","search-result-subplan",4,"ngFor","ngForOf"],[1,"search-result-subplan"],[1,"row","degree-subplan","position-relative","py-3"],[1,"degree-title"],["class","degree-description small mt-2",4,"ngIf"],[1,"degree-description","small","mt-2"]],template:function(n,r){1&n&&(de(0,yk,5,2,"p",0),de(1,Ik,11,2,"div",0)),2&n&&(Z("ngIf",!r.isLoading&&0===r.results.endIndex),P(1),Z("ngIf",!r.isLoading&&r.results.endIndex>0))},dependencies:[bi,go,hk,fC]}),e})();function Tk(e,t){1&e&&(M(0,"div",10)(1,"div",11)(2,"p",12),J(3,"span",13),z(4," Loading degrees"),A()()())}let xk=(()=>{class e{constructor(n){this.searchService=n,this.isLoading=!0,this.isFilterVisible=!1,this.subscription=this.searchService.isLoading$.subscribe(r=>{this.isLoading=r}),this.subscription=this.searchService.results$.subscribe(r=>{this.results=r}),this.subscription=this.searchService.params$.subscribe(r=>{this.params=r})}toggleFilters(){this.isFilterVisible=!this.isFilterVisible}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(_(Eo))},e.\u0275cmp=Et({type:e,selectors:[["app-home"]],decls:18,vars:3,consts:[[1,"container","mb-5"],[1,"row"],[1,"col-md-5","col-lg-4","mb-2","degree-search-sidebar"],[1,"text-center","d-md-none","mt-4",3,"ngClass"],[1,"btn","btn-sm","text-transform-none","btn-outline-secondary","px-5",3,"click"],["aria-hidden","true",1,"fa","fa-filter"],[1,"bg-faded","px-4","py-2","mr-md-4","d-none","d-md-block",3,"ngClass"],[3,"toggleFilters"],["id","searchResults","role","region","aria-live","polite",1,"col-md-7","col-lg-8"],["class","row mb-4 mt-4",4,"ngIf"],[1,"row","mb-4","mt-4"],[1,"col-md-12"],[1,"mb-0"],[1,"fa","fa-spinner","fa-spin"]],template:function(n,r){1&n&&(J(0,"app-search-form"),M(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"button",4),he("click",function(){return r.toggleFilters()}),J(6,"span",5),z(7," Filter "),A()(),M(8,"div",6)(9,"app-program-types",7),he("toggleFilters",function(){return r.toggleFilters()}),A(),J(10,"hr"),M(11,"app-colleges",7),he("toggleFilters",function(){return r.toggleFilters()}),A(),J(12,"hr"),M(13,"app-locations",7),he("toggleFilters",function(){return r.toggleFilters()}),A(),J(14,"hr"),A()(),M(15,"div",8),de(16,Tk,5,0,"div",9),J(17,"app-search-results"),A()()()),2&n&&(P(4),Z("ngClass",r.isFilterVisible?"d-none":""),P(4),Z("ngClass",r.isFilterVisible?"d-block":"d-none"),P(8),Z("ngIf",r.isLoading))},dependencies:[_a,go,qP,QP,XP,sk,Ak]}),e})(),Nk=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=Et({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(n,r){1&n&&J(0,"app-home")},dependencies:[xk]}),e})(),Rk=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=bt({type:e,bootstrap:[Nk]}),e.\u0275inj=ht({imports:[HP,BR,c1,YO]}),e})();(function dx(){kv=!1}
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
       */)(),jR().bootstrapModule(Rk).catch(e=>console.error(e))}},ae=>{ae(ae.s=654)}]);