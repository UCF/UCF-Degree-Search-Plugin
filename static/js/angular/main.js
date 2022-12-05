"use strict";(self.webpackChunkDegree_Search=self.webpackChunkDegree_Search||[]).push([[179],{650:()=>{function le(e){return"function"==typeof e}function So(e){const n=e(r=>{Error.call(r),r.stack=(new Error).stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}const qi=So(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:\n${n.map((r,o)=>`${o+1}) ${r.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=n});function Ir(e,t){if(e){const n=e.indexOf(t);0<=n&&e.splice(n,1)}}class dt{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;const{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(const i of n)i.remove(this);else n.remove(this);const{initialTeardown:r}=this;if(le(r))try{r()}catch(i){t=i instanceof qi?i.errors:[i]}const{_finalizers:o}=this;if(o){this._finalizers=null;for(const i of o)try{$f(i)}catch(s){t=t??[],s instanceof qi?t=[...t,...s.errors]:t.push(s)}}if(t)throw new qi(t)}}add(t){var n;if(t&&t!==this)if(this.closed)$f(t);else{if(t instanceof dt){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(t)}}_hasParent(t){const{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){const{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){const{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&Ir(n,t)}remove(t){const{_finalizers:n}=this;n&&Ir(n,t),t instanceof dt&&t._removeParent(this)}}dt.EMPTY=(()=>{const e=new dt;return e.closed=!0,e})();const Lf=dt.EMPTY;function Vf(e){return e instanceof dt||e&&"closed"in e&&le(e.remove)&&le(e.add)&&le(e.unsubscribe)}function $f(e){le(e)?e():e.unsubscribe()}const Zn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Qi={setTimeout(e,t,...n){const{delegate:r}=Qi;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){const{delegate:t}=Qi;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function jf(e){Qi.setTimeout(()=>{const{onUnhandledError:t}=Zn;if(!t)throw e;t(e)})}function Bf(){}const Dw=al("C",void 0,void 0);function al(e,t,n){return{kind:e,value:t,error:n}}let Yn=null;function Ki(e){if(Zn.useDeprecatedSynchronousErrorHandling){const t=!Yn;if(t&&(Yn={errorThrown:!1,error:null}),e(),t){const{errorThrown:n,error:r}=Yn;if(Yn=null,n)throw r}}else e()}class ll extends dt{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,Vf(t)&&t.add(this)):this.destination=Iw}static create(t,n,r){return new Mo(t,n,r)}next(t){this.isStopped?cl(function ww(e){return al("N",e,void 0)}(t),this):this._next(t)}error(t){this.isStopped?cl(function Cw(e){return al("E",void 0,e)}(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?cl(Dw,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const bw=Function.prototype.bind;function ul(e,t){return bw.call(e,t)}class Sw{constructor(t){this.partialObserver=t}next(t){const{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){Zi(r)}}error(t){const{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){Zi(r)}else Zi(t)}complete(){const{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){Zi(n)}}}class Mo extends ll{constructor(t,n,r){let o;if(super(),le(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&Zn.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&ul(t.next,i),error:t.error&&ul(t.error,i),complete:t.complete&&ul(t.complete,i)}):o=t}this.destination=new Sw(o)}}function Zi(e){Zn.useDeprecatedSynchronousErrorHandling?function Ew(e){Zn.useDeprecatedSynchronousErrorHandling&&Yn&&(Yn.errorThrown=!0,Yn.error=e)}(e):jf(e)}function cl(e,t){const{onStoppedNotification:n}=Zn;n&&Qi.setTimeout(()=>n(e,t))}const Iw={closed:!0,next:Bf,error:function Mw(e){throw e},complete:Bf},dl="function"==typeof Symbol&&Symbol.observable||"@@observable";function Nn(e){return e}function Hf(e){return 0===e.length?Nn:1===e.length?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}let we=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){const r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){const i=function xw(e){return e&&e instanceof ll||function Tw(e){return e&&le(e.next)&&le(e.error)&&le(e.complete)}(e)&&Vf(e)}(n)?n:new Mo(n,r,o);return Ki(()=>{const{operator:s,source:a}=this;i.add(s?s.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return new(r=Uf(r))((o,i)=>{const s=new Mo({next:a=>{try{n(a)}catch(l){i(l),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return null===(r=this.source)||void 0===r?void 0:r.subscribe(n)}[dl](){return this}pipe(...n){return Hf(n)(this)}toPromise(n){return new(n=Uf(n))((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return e.create=t=>new e(t),e})();function Uf(e){var t;return null!==(t=e??Zn.Promise)&&void 0!==t?t:Promise}const Nw=So(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});let Ze=(()=>{class e extends we{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){const r=new Gf(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new Nw}next(n){Ki(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const r of this.currentObservers)r.next(n)}})}error(n){Ki(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;const{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){Ki(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return(null===(n=this.observers)||void 0===n?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){const{hasError:r,isStopped:o,observers:i}=this;return r||o?Lf:(this.currentObservers=null,i.push(n),new dt(()=>{this.currentObservers=null,Ir(i,n)}))}_checkFinalizedStatuses(n){const{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){const n=new we;return n.source=this,n}}return e.create=(t,n)=>new Gf(t,n),e})();class Gf extends Ze{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.next)||void 0===r||r.call(n,t)}error(t){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.error)||void 0===r||r.call(n,t)}complete(){var t,n;null===(n=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===n||n.call(t)}_subscribe(t){var n,r;return null!==(r=null===(n=this.source)||void 0===n?void 0:n.subscribe(t))&&void 0!==r?r:Lf}}function zf(e){return le(e?.lift)}function Me(e){return t=>{if(zf(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Ee(e,t,n,r,o){return new Rw(e,t,n,r,o)}class Rw extends ll{constructor(t,n,r,o,i,s){super(t),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(l){t.error(l)}}:super._next,this._error=o?function(a){try{o(a)}catch(l){t.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){t.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:n}=this;super.unsubscribe(),!n&&(null===(t=this.onFinalize)||void 0===t||t.call(this))}}}function Q(e,t){return Me((n,r)=>{let o=0;n.subscribe(Ee(r,i=>{r.next(e.call(t,i,o++))}))})}function Jn(e){return this instanceof Jn?(this.v=e,this):new Jn(e)}function Ow(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,r=n.apply(e,t||[]),i=[];return o={},s("next"),s("throw"),s("return"),o[Symbol.asyncIterator]=function(){return this},o;function s(f){r[f]&&(o[f]=function(h){return new Promise(function(p,g){i.push([f,h,p,g])>1||a(f,h)})})}function a(f,h){try{!function l(f){f.value instanceof Jn?Promise.resolve(f.value.v).then(u,c):d(i[0][2],f)}(r[f](h))}catch(p){d(i[0][3],p)}}function u(f){a("next",f)}function c(f){a("throw",f)}function d(f,h){f(h),i.shift(),i.length&&a(i[0][0],i[0][1])}}function kw(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,t=e[Symbol.asyncIterator];return t?t.call(e):(e=function Qf(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(e),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(a,l){!function o(i,s,a,l){Promise.resolve(l).then(function(u){i({value:u,done:a})},s)}(a,l,(s=e[i](s)).done,s.value)})}}}const Kf=e=>e&&"number"==typeof e.length&&"function"!=typeof e;function Zf(e){return le(e?.then)}function Yf(e){return le(e[dl])}function Jf(e){return Symbol.asyncIterator&&le(e?.[Symbol.asyncIterator])}function Xf(e){return new TypeError(`You provided ${null!==e&&"object"==typeof e?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}const eh=function Vw(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}();function th(e){return le(e?.[eh])}function nh(e){return Ow(this,arguments,function*(){const n=e.getReader();try{for(;;){const{value:r,done:o}=yield Jn(n.read());if(o)return yield Jn(void 0);yield yield Jn(r)}}finally{n.releaseLock()}})}function rh(e){return le(e?.getReader)}function Pt(e){if(e instanceof we)return e;if(null!=e){if(Yf(e))return function $w(e){return new we(t=>{const n=e[dl]();if(le(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(e);if(Kf(e))return function jw(e){return new we(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}(e);if(Zf(e))return function Bw(e){return new we(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,jf)})}(e);if(Jf(e))return oh(e);if(th(e))return function Hw(e){return new we(t=>{for(const n of e)if(t.next(n),t.closed)return;t.complete()})}(e);if(rh(e))return function Uw(e){return oh(nh(e))}(e)}throw Xf(e)}function oh(e){return new we(t=>{(function Gw(e,t){var n,r,o,i;return function Fw(e,t,n,r){return new(n||(n=Promise))(function(i,s){function a(c){try{u(r.next(c))}catch(d){s(d)}}function l(c){try{u(r.throw(c))}catch(d){s(d)}}function u(c){c.done?i(c.value):function o(i){return i instanceof n?i:new n(function(s){s(i)})}(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}(this,void 0,void 0,function*(){try{for(n=kw(e);!(r=yield n.next()).done;)if(t.next(r.value),t.closed)return}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}t.complete()})})(e,t).catch(n=>t.error(n))})}function un(e,t,n,r=0,o=!1){const i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function $e(e,t,n=1/0){return le(t)?$e((r,o)=>Q((i,s)=>t(r,i,o,s))(Pt(e(r,o))),n):("number"==typeof t&&(n=t),Me((r,o)=>function zw(e,t,n,r,o,i,s,a){const l=[];let u=0,c=0,d=!1;const f=()=>{d&&!l.length&&!u&&t.complete()},h=g=>u<r?p(g):l.push(g),p=g=>{i&&t.next(g),u++;let v=!1;Pt(n(g,c++)).subscribe(Ee(t,y=>{o?.(y),i?h(y):t.next(y)},()=>{v=!0},void 0,()=>{if(v)try{for(u--;l.length&&u<r;){const y=l.shift();s?un(t,s,()=>p(y)):p(y)}f()}catch(y){t.error(y)}}))};return e.subscribe(Ee(t,h,()=>{d=!0,f()})),()=>{a?.()}}(r,o,e,n)))}function Ar(e=1/0){return $e(Nn,e)}const cn=new we(e=>e.complete());function hl(e){return e[e.length-1]}function ih(e){return le(hl(e))?e.pop():void 0}function Io(e){return function qw(e){return e&&le(e.schedule)}(hl(e))?e.pop():void 0}function sh(e,t=0){return Me((n,r)=>{n.subscribe(Ee(r,o=>un(r,e,()=>r.next(o),t),()=>un(r,e,()=>r.complete(),t),o=>un(r,e,()=>r.error(o),t)))})}function ah(e,t=0){return Me((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function lh(e,t){if(!e)throw new Error("Iterable cannot be null");return new we(n=>{un(n,t,()=>{const r=e[Symbol.asyncIterator]();un(n,t,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function Ie(e,t){return t?function eE(e,t){if(null!=e){if(Yf(e))return function Kw(e,t){return Pt(e).pipe(ah(t),sh(t))}(e,t);if(Kf(e))return function Yw(e,t){return new we(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}(e,t);if(Zf(e))return function Zw(e,t){return Pt(e).pipe(ah(t),sh(t))}(e,t);if(Jf(e))return lh(e,t);if(th(e))return function Jw(e,t){return new we(n=>{let r;return un(n,t,()=>{r=e[eh](),un(n,t,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){return void n.error(s)}i?n.complete():n.next(o)},0,!0)}),()=>le(r?.return)&&r.return()})}(e,t);if(rh(e))return function Xw(e,t){return lh(nh(e),t)}(e,t)}throw Xf(e)}(e,t):Pt(e)}function pl(e,t,...n){if(!0===t)return void e();if(!1===t)return;const r=new Mo({next:()=>{r.unsubscribe(),e()}});return t(...n).subscribe(r)}
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
       */function ie(e){for(let t in e)if(e[t]===ie)return t;throw Error("Could not find renamed property on target object.")}function gl(e,t){for(const n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function se(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(se).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function ml(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const rE=ie({__forward_ref__:ie});function ue(e){return e.__forward_ref__=ue,e.toString=function(){return se(this())},e}function L(e){return yl(e)?e():e}function yl(e){return"function"==typeof e&&e.hasOwnProperty(rE)&&e.__forward_ref__===ue}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
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
       */(t,n)),this.code=t}}function j(e){return"string"==typeof e?e:null==e?"":String(e)}function Ji(e,t){throw new C(-201,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ht(e,t){null==e&&function te(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}(t,e,null,"!=")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function P(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function pt(e){return{providers:e.providers||[],imports:e.imports||[]}}function Xi(e){return uh(e,es)||uh(e,dh)}function uh(e,t){return e.hasOwnProperty(t)?e[t]:null}function ch(e){return e&&(e.hasOwnProperty(vl)||e.hasOwnProperty(fE))?e[vl]:null}const es=ie({\u0275prov:ie}),vl=ie({\u0275inj:ie}),dh=ie({ngInjectableDef:ie}),fE=ie({ngInjectorDef:ie});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var O=(()=>((O=O||{})[O.Default=0]="Default",O[O.Host=1]="Host",O[O.Self=2]="Self",O[O.SkipSelf=4]="SkipSelf",O[O.Optional=8]="Optional",O))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let _l;function Et(e){const t=_l;return _l=e,t}function fh(e,t,n){const r=Xi(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&O.Optional?null:void 0!==t?t:void Ji(se(e))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Rn(e){return{toString:e}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Ot=(()=>((Ot=Ot||{})[Ot.OnPush=0]="OnPush",Ot[Ot.Default=1]="Default",Ot))(),Kt=(()=>{return(e=Kt||(Kt={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",Kt;var e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ae=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),Tr={},ee=[],ts=ie({\u0275cmp:ie}),Dl=ie({\u0275dir:ie}),Cl=ie({\u0275pipe:ie}),hh=ie({\u0275mod:ie}),fn=ie({\u0275fac:ie}),Ao=ie({__NG_ELEMENT_ID__:ie});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let pE=0;function bt(e){return Rn(()=>{const n=!0===e.standalone,r={},o={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===Ot.OnPush,directiveDefs:null,pipeDefs:null,standalone:n,dependencies:n&&e.dependencies||null,getStandaloneInjector:null,selectors:e.selectors||ee,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||Kt.Emulated,id:"c"+pE++,styles:e.styles||ee,_:null,setInput:null,schemas:e.schemas||null,tView:null},i=e.dependencies,s=e.features;return o.inputs=mh(e.inputs,r),o.outputs=mh(e.outputs),s&&s.forEach(a=>a(o)),o.directiveDefs=i?()=>("function"==typeof i?i():i).map(ph).filter(gh):null,o.pipeDefs=i?()=>("function"==typeof i?i():i).map(Je).filter(gh):null,o})}function ph(e){return ne(e)||Ye(e)}function gh(e){return null!==e}function St(e){return Rn(()=>({type:e.type,bootstrap:e.bootstrap||ee,declarations:e.declarations||ee,imports:e.imports||ee,exports:e.exports||ee,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function mh(e,t){if(null==e)return Tr;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const V=bt;function ne(e){return e[ts]||null}function Ye(e){return e[Dl]||null}function Je(e){return e[Cl]||null}function gt(e,t){const n=e[hh]||null;if(!n&&!0===t)throw new Error(`Type ${se(e)} does not have '\u0275mod' property.`);return n}
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
function lt(e){return Array.isArray(e)&&"object"==typeof e[1]}function Lt(e){return Array.isArray(e)&&!0===e[1]}function bl(e){return 0!=(8&e.flags)}function is(e){return 2==(2&e.flags)}function ss(e){return 1==(1&e.flags)}function Vt(e){return null!==e.template}function DE(e){return 0!=(256&e[2])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function rr(e,t){return e.hasOwnProperty(fn)?e[fn]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class EE{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function It(){return _h}function _h(e){return e.type.prototype.ngOnChanges&&(e.setInput=SE),bE}function bE(){const e=Ch(this),t=e?.current;if(t){const n=e.previous;if(n===Tr)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function SE(e,t,n,r){const o=Ch(e)||function ME(e,t){return e[Dh]=t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,{previous:Tr,current:null}),i=o.current||(o.current={}),s=o.previous,a=this.declaredInputs[n],l=s[a];i[a]=new EE(l&&l.currentValue,t,s===Tr),e[r]=t}It.ngInherit=!0;const Dh="__ngSimpleChanges__";function Ch(e){return e[Dh]||null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ae(e){for(;Array.isArray(e);)e=e[0];return e}function as(e,t){return Ae(t[e])}function Tt(e,t){return Ae(t[e.index])}function Tl(e,t){return e.data[t]}function yt(e,t){const n=t[e];return lt(n)?n:n[0]}function ls(e){return 64==(64&e[2])}function Fn(e,t){return null==t?null:e[t]}function wh(e){e[18]=0}function xl(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const $={lFrame:Rh(null),bindingsEnabled:!0};function bh(){return $.bindingsEnabled}function D(){return $.lFrame.lView}function Y(){return $.lFrame.tView}function or(e){return $.lFrame.contextLView=e,e[8]}function ir(e){return $.lFrame.contextLView=null,e}function Fe(){let e=Sh();for(;null!==e&&64===e.type;)e=e.parent;return e}function Sh(){return $.lFrame.currentTNode}function Zt(e,t){const n=$.lFrame;n.currentTNode=e,n.isParent=t}function Nl(){return $.lFrame.isParent}function Rl(){$.lFrame.isParent=!1}function Or(){return $.lFrame.bindingIndex++}function pn(e){const t=$.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function BE(e,t){const n=$.lFrame;n.bindingIndex=n.bindingRootIndex=e,Fl(t)}function Fl(e){$.lFrame.currentDirectiveIndex=e}function Th(){return $.lFrame.currentQueryIndex}function Ol(e){$.lFrame.currentQueryIndex=e}function UE(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function xh(e,t,n){if(n&O.SkipSelf){let o=t,i=e;for(;!(o=o.parent,null!==o||n&O.Host||(o=UE(i),null===o||(i=i[15],10&o.type))););if(null===o)return!1;t=o,e=i}const r=$.lFrame=Nh();return r.currentTNode=t,r.lView=e,!0}function kl(e){const t=Nh(),n=e[1];$.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function Nh(){const e=$.lFrame,t=null===e?null:e.child;return null===t?Rh(e):t}function Rh(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function Fh(){const e=$.lFrame;return $.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const Ph=Fh;function Ll(){const e=Fh();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function et(){return $.lFrame.selectedIndex}function Pn(e){$.lFrame.selectedIndex=e}function _e(){const e=$.lFrame;return Tl(e.tView,e.selectedIndex)}function us(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:u,ngOnDestroy:c}=i;s&&(e.contentHooks||(e.contentHooks=[])).push(-n,s),a&&((e.contentHooks||(e.contentHooks=[])).push(n,a),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,a)),l&&(e.viewHooks||(e.viewHooks=[])).push(-n,l),u&&((e.viewHooks||(e.viewHooks=[])).push(n,u),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,u)),null!=c&&(e.destroyHooks||(e.destroyHooks=[])).push(n,c)}}function cs(e,t,n){Oh(e,t,3,n)}function ds(e,t,n,r){(3&e[2])===n&&Oh(e,t,n,r)}function Vl(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function Oh(e,t,n,r){const i=r??-1,s=t.length-1;let a=0;for(let l=void 0!==r?65535&e[18]:0;l<s;l++)if("number"==typeof t[l+1]){if(a=t[l],null!=r&&a>=r)break}else t[l]<0&&(e[18]+=65536),(a<i||-1==i)&&(JE(e,n,t,l),e[18]=(4294901760&e[18])+l+2),l++}function JE(e,t,n,r){const o=n[r]<0,i=n[r+1],a=e[o?-n[r]:n[r]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{i.call(a)}finally{}}}else try{i.call(a)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Po{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function fs(e,t,n){let r=0;for(;r<n.length;){const o=n[r];if("number"==typeof o){if(0!==o)break;r++;const i=n[r++],s=n[r++],a=n[r++];e.setAttribute(t,s,a,i)}else{const i=o,s=n[++r];Lh(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function kh(e){return 3===e||4===e||6===e}function Lh(e){return 64===e.charCodeAt(0)}function hs(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||Vh(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function Vh(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const a=e[i++];if("number"==typeof a){if(a===t){s=-1;break}if(a>t){s=i-1;break}}}for(;i<e.length;){const a=e[i];if("number"==typeof a)break;if(a===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $h(e){return-1!==e}function kr(e){return 32767&e}function Lr(e,t){let n=function rb(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let jl=!0;function ps(e){const t=jl;return jl=e,t}let ob=0;const Yt={};function ko(e,t){const n=Hl(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,Bl(r.data,e),Bl(t,null),Bl(r.blueprint,null));const o=gs(e,t),i=e.injectorIndex;if($h(o)){const s=kr(o),a=Lr(o,t),l=a[1].data;for(let u=0;u<8;u++)t[i+u]=a[s+u]|l[s+u]}return t[i+8]=o,i}function Bl(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Hl(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function gs(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){if(r=Qh(o),null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function ms(e,t,n){!function ib(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Ao)&&(r=n[Ao]),null==r&&(r=n[Ao]=ob++);const o=255&r;t.data[e+(o>>5)]|=1<<o}(e,t,n)}function Hh(e,t,n){if(n&O.Optional||void 0!==e)return e;Ji()}function Uh(e,t,n,r){if(n&O.Optional&&void 0===r&&(r=null),0==(n&(O.Self|O.Host))){const o=e[9],i=Et(void 0);try{return o?o.get(t,r,n&O.Optional):fh(t,r,n&O.Optional)}finally{Et(i)}}return Hh(r,0,n)}function Gh(e,t,n,r=O.Default,o){if(null!==e){if(1024&t[2]){const s=function cb(e,t,n,r,o){let i=e,s=t;for(;null!==i&&null!==s&&1024&s[2]&&!(256&s[2]);){const a=zh(i,s,n,r|O.Self,Yt);if(a!==Yt)return a;let l=i.parent;if(!l){const u=s[21];if(u){const c=u.get(n,Yt,r);if(c!==Yt)return c}l=Qh(s),s=s[15]}i=l}return o}(e,t,n,r,Yt);if(s!==Yt)return s}const i=zh(e,t,n,r,Yt);if(i!==Yt)return i}return Uh(t,n,r,o)}function zh(e,t,n,r,o){const i=function lb(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(Ao)?e[Ao]:void 0;return"number"==typeof t?t>=0?255&t:ub:t}(n);if("function"==typeof i){if(!xh(t,e,r))return r&O.Host?Hh(o,0,r):Uh(t,n,r,o);try{const s=i(r);if(null!=s||r&O.Optional)return s;Ji()}finally{Ph()}}else if("number"==typeof i){let s=null,a=Hl(e,t),l=-1,u=r&O.Host?t[16][6]:null;for((-1===a||r&O.SkipSelf)&&(l=-1===a?gs(e,t):t[a+8],-1!==l&&qh(r,!1)?(s=t[1],a=kr(l),t=Lr(l,t)):a=-1);-1!==a;){const c=t[1];if(Wh(i,a,c.data)){const d=ab(a,t,n,s,r,u);if(d!==Yt)return d}l=t[a+8],-1!==l&&qh(r,t[1].data[a+8]===u)&&Wh(i,a,t)?(s=c,a=kr(l),t=Lr(l,t)):a=-1}}return o}function ab(e,t,n,r,o,i){const s=t[1],a=s.data[e+8],c=ys(a,s,n,null==r?is(a)&&jl:r!=s&&0!=(3&a.type),o&O.Host&&i===a);return null!==c?Lo(t,s,c,a):Yt}function ys(e,t,n,r,o){const i=e.providerIndexes,s=t.data,a=1048575&i,l=e.directiveStart,c=i>>20,f=o?a+c:e.directiveEnd;for(let h=r?a:a+c;h<f;h++){const p=s[h];if(h<l&&n===p||h>=l&&p.type===n)return h}if(o){const h=s[l];if(h&&Vt(h)&&h.type===n)return l}return null}function Lo(e,t,n,r){let o=e[n];const i=t.data;if(function XE(e){return e instanceof Po}(o)){const s=o;s.resolving&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function oE(e,t){const n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new C(-200,`Circular dependency in DI detected for ${e}${n}`)}(function X(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():j(e)}(i[n]));const a=ps(s.canSeeViewProviders);s.resolving=!0;const l=s.injectImpl?Et(s.injectImpl):null;xh(e,r,O.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function YE(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const s=_h(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==l&&Et(l),ps(a),s.resolving=!1,Ph()}}return o}function Wh(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function qh(e,t){return!(e&O.Self||e&O.Host&&t)}class Vr{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return Gh(this._tNode,this._lView,t,r,n)}}function ub(){return new Vr(Fe(),D())}function Ul(e){return yl(e)?()=>{const t=Ul(L(e));return t&&t()}:rr(e)}function Qh(e){const t=e[1],n=t.type;return 2===n?t.declTNode:1===n?e[6]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const jr="__parameters__";function Hr(e,t,n){return Rn(()=>{const r=function Gl(e){return function(...n){if(e){const r=e(...n);for(const o in r)this[o]=r[o]}}}(t);function o(...i){if(this instanceof o)return r.apply(this,i),this;const s=new o(...i);return a.annotation=s,a;function a(l,u,c){const d=l.hasOwnProperty(jr)?l[jr]:Object.defineProperty(l,jr,{value:[]})[jr];for(;d.length<=c;)d.push(null);return(d[c]=d[c]||[]).push(s),l}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class x{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=P({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function vt(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),vt(r,t)):t!==e&&t.push(r)}return t}function gn(e,t){e.forEach(n=>Array.isArray(n)?gn(n,t):t(n))}function Zh(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function vs(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function _t(e,t,n){let r=Ur(e,t);return r>=0?e[1|r]=n:(r=~r,function pb(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(1===o)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function Wl(e,t){const n=Ur(e,t);if(n>=0)return e[1|n]}function Ur(e,t){return function Xh(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}
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
const Ho={},Ql="__NG_DI_FLAG__",Ds="ngTempTokenPath",wb=/\n/gm,ep="__source";let Uo;function Gr(e){const t=Uo;return Uo=e,t}function bb(e,t=O.Default){if(void 0===Uo)throw new C(-203,!1);return null===Uo?fh(e,void 0,t):Uo.get(e,t&O.Optional?null:void 0,t)}function A(e,t=O.Default){return(function hE(){return _l}()||bb)(L(e),t)}function be(e,t=O.Default){return"number"!=typeof t&&(t=0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)),A(e,t)}function Kl(e){const t=[];for(let n=0;n<e.length;n++){const r=L(e[n]);if(Array.isArray(r)){if(0===r.length)throw new C(900,!1);let o,i=O.Default;for(let s=0;s<r.length;s++){const a=r[s],l=Sb(a);"number"==typeof l?-1===l?o=a.token:i|=l:o=a}t.push(A(o,i))}else t.push(A(r))}return t}function Go(e,t){return e[Ql]=t,e.prototype[Ql]=t,e}function Sb(e){return e[Ql]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const zo=Go(Hr("Optional"),8),Wo=Go(Hr("SkipSelf"),4);
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
class hp{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}function kn(e){return e instanceof hp?e.changingThisBreaksApplicationSecurity:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Kb=/^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;
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
       */();return t?t.sanitize(Te.URL,e)||"":function Ko(e,t){const n=function zb(e){return e instanceof hp&&e.getTypeName()||null}(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}(e,"URL")?kn(e):function eu(e){return(e=String(e)).match(Kb)?e:"unsafe:"+e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(j(e))}const ou=new x("ENVIRONMENT_INITIALIZER"),Cp=new x("INJECTOR",-1),wp=new x("INJECTOR_DEF_TYPES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ep{get(t,n=Ho){if(n===Ho){const r=new Error(`NullInjectorError: No provider for ${se(t)}!`);throw r.name="NullInjectorError",r}return n}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function c0(...e){return{\u0275providers:bp(0,e)}}function bp(e,...t){const n=[],r=new Set;let o;return gn(t,i=>{const s=i;iu(s,n,[],r)&&(o||(o=[]),o.push(s))}),void 0!==o&&Sp(o,n),n}function Sp(e,t){for(let n=0;n<e.length;n++){const{providers:o}=e[n];gn(o,i=>{t.push(i)})}}function iu(e,t,n,r){if(!(e=L(e)))return!1;let o=null,i=ch(e);const s=!i&&ne(e);if(i||s){if(s&&!s.standalone)return!1;o=e}else{const l=e.ngModule;if(i=ch(l),!i)return!1;o=l}const a=r.has(o);if(s){if(a)return!1;if(r.add(o),s.dependencies){const l="function"==typeof s.dependencies?s.dependencies():s.dependencies;for(const u of l)iu(u,t,n,r)}}else{if(!i)return!1;{if(null!=i.imports&&!a){let u;r.add(o);try{gn(i.imports,c=>{iu(c,t,n,r)&&(u||(u=[]),u.push(c))})}finally{}void 0!==u&&Sp(u,t)}if(!a){const u=rr(o)||(()=>new o);t.push({provide:o,useFactory:u,deps:ee},{provide:wp,useValue:o,multi:!0},{provide:ou,useValue:()=>A(o),multi:!0})}const l=i.providers;null==l||a||gn(l,c=>{t.push(c)})}}return o!==e&&void 0!==e.providers}const d0=ie({provide:String,useValue:ie});function su(e){return null!==e&&"object"==typeof e&&d0 in e}function sr(e){return"function"==typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const au=new x("Set Injector scope."),Ms={},h0={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let lu;function Is(){return void 0===lu&&(lu=new Ep),lu}class Ln{}class Ap extends Ln{constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,cu(t,s=>this.processProvider(s)),this.records.set(Cp,qr(void 0,this)),o.has("environment")&&this.records.set(Ln,qr(void 0,this));const i=this.records.get(au);null!=i&&"string"==typeof i.value&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(wp.multi,ee,O.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const t of this._ngOnDestroyHooks)t.ngOnDestroy();for(const t of this._onDestroyHooks)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(t){this._onDestroyHooks.push(t)}runInContext(t){this.assertNotDestroyed();const n=Gr(this),r=Et(void 0);try{return t()}finally{Gr(n),Et(r)}}get(t,n=Ho,r=O.Default){this.assertNotDestroyed();const o=Gr(this),i=Et(void 0);try{if(!(r&O.SkipSelf)){let a=this.records.get(t);if(void 0===a){const l=function v0(e){return"function"==typeof e||"object"==typeof e&&e instanceof x}(t)&&Xi(t);a=l&&this.injectableDefInScope(l)?qr(uu(t),Ms):null,this.records.set(t,a)}if(null!=a)return this.hydrate(t,a)}return(r&O.Self?Is():this.parent).get(t,n=r&O.Optional&&n===Ho?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[Ds]=s[Ds]||[]).unshift(se(t)),o)throw s;return function Mb(e,t,n,r){const o=e[Ds];throw t[ep]&&o.unshift(t[ep]),e.message=function Ib(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.slice(2):e;let o=se(t);if(Array.isArray(t))o=t.map(se).join(" -> ");else if("object"==typeof t){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let a=t[s];i.push(s+":"+("string"==typeof a?JSON.stringify(a):se(a)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(wb,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e[Ds]=null,e}(s,t,"R3InjectorError",this.source)}throw s}finally{Et(i),Gr(o)}}resolveInjectorInitializers(){const t=Gr(this),n=Et(void 0);try{const r=this.get(ou.multi,ee,O.Self);for(const o of r)o()}finally{Gr(t),Et(n)}}toString(){const t=[],n=this.records;for(const r of n.keys())t.push(se(r));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new C(205,!1)}processProvider(t){let n=sr(t=L(t))?t:L(t&&t.provide);const r=function g0(e){return su(e)?qr(void 0,e.useValue):qr(Tp(e),Ms)}(t);if(sr(t)||!0!==t.multi)this.records.get(n);else{let o=this.records.get(n);o||(o=qr(void 0,Ms,!0),o.factory=()=>Kl(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n){return n.value===Ms&&(n.value=h0,n.value=n.factory()),"object"==typeof n.value&&n.value&&function y0(e){return null!==e&&"object"==typeof e&&"function"==typeof e.ngOnDestroy}(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}injectableDefInScope(t){if(!t.providedIn)return!1;const n=L(t.providedIn);return"string"==typeof n?"any"===n||this.scopes.has(n):this.injectorDefTypes.has(n)}}function uu(e){const t=Xi(e),n=null!==t?t.factory:rr(e);if(null!==n)return n;if(e instanceof x)throw new C(204,!1);if(e instanceof Function)return function p0(e){const t=e.length;if(t>0)throw function Bo(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}(t,"?"),new C(204,!1);const n=function cE(e){const t=e&&(e[es]||e[dh]);if(t){const n=function dE(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new C(204,!1)}function Tp(e,t,n){let r;if(sr(e)){const o=L(e);return rr(o)||uu(o)}if(su(e))r=()=>L(e.useValue);else if(function Ip(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...Kl(e.deps||[]));else if(function Mp(e){return!(!e||!e.useExisting)}(e))r=()=>A(L(e.useExisting));else{const o=L(e&&(e.useClass||e.provide));if(!function m0(e){return!!e.deps}(e))return rr(o)||uu(o);r=()=>new o(...Kl(e.deps))}return r}function qr(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function _0(e){return!!e.\u0275providers}function cu(e,t){for(const n of e)Array.isArray(n)?cu(n,t):_0(n)?cu(n.\u0275providers,t):t(n)}
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
       */class w0{resolveComponentFactory(t){throw function C0(e){const t=Error(`No component factory found for ${se(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let Xo=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.NULL=new w0,e})();function E0(){return Qr(Fe(),D())}function Qr(e,t){return new Dt(Tt(e,t))}let Dt=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=E0,e})();function b0(e){return e instanceof Dt?e.nativeElement:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Rp{}let yn=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function S0(){const e=D(),n=yt(Fe().index,e);return(lt(n)?n:e)[z]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),e})(),M0=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=P({token:e,providedIn:"root",factory:()=>null}),e})();class ei{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const I0=new ei("14.2.3"),du={};
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
       */class Kr{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&mu(t);for(;n&&mu(n);)n=mu(n);return n||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const yu=new Map;let $0=0;const _u="__ngContext__";function ze(e,t){lt(t)?(e[_u]=t[20],function B0(e){yu.set(e[20],e)}(t)):e[_u]=t}function vn(e){return e instanceof Function?e():e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var ut=(()=>((ut=ut||{})[ut.Important=1]="Important",ut[ut.DashCase=2]="DashCase",ut))();
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
function ni(e){const t=e[3];return Lt(t)?t[3]:t}function wu(e){return Wp(e[13])}function Eu(e){return Wp(e[4])}function Wp(e){for(;null!==e&&!Lt(e);)e=e[4];return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Yr(e,t,n,r,o){if(null!=r){let i,s=!1;Lt(r)?i=r:lt(r)&&(s=!0,r=r[0]);const a=Ae(r);0===e&&null!==n?null==o?Jp(t,n,a):ar(t,n,a,o||null,!0):1===e&&null!==n?ar(t,n,a,o||null,!0):2===e?function ig(e,t,n){const r=As(e,t);r&&function pS(e,t,n,r){e.removeChild(t,n,r)}(e,r,t,n)}(t,a,s):3===e&&t.destroyNode(a),null!=i&&function yS(e,t,n,r,o){const i=n[7];i!==Ae(n)&&Yr(t,e,r,i,o);for(let a=10;a<n.length;a++){const l=n[a];ri(l[1],l,e,t,r,i)}}(t,e,i,n,o)}}function Su(e,t,n){return e.createElement(t,n)}function Qp(e,t){const n=e[9],r=n.indexOf(t),o=t[3];512&t[2]&&(t[2]&=-513,xl(o,-1)),n.splice(r,1)}function Mu(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&Qp(o,r),t>0&&(e[n-1][4]=r[4]);const i=vs(e,10+t);!function sS(e,t){ri(e,t,t[z],2,null,null),t[0]=null,t[6]=null}(r[1],r);const s=i[19];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-65}return r}function Kp(e,t){if(!(128&t[2])){const n=t[z];n.destroyNode&&ri(e,t,n,3,null,null),function uS(e){let t=e[13];if(!t)return Iu(e[1],e);for(;t;){let n=null;if(lt(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)lt(t)&&Iu(t[1],t),t=t[3];null===t&&(t=e),lt(t)&&Iu(t[1],t),n=t&&t[4]}t=n}}(t)}}function Iu(e,t){if(!(128&t[2])){t[2]&=-65,t[2]|=128,function hS(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const o=t[n[r]];if(!(o instanceof Po)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const a=o[i[s]],l=i[s+1];try{l.call(a)}finally{}}else try{i.call(o)}finally{}}}}(e,t),function fS(e,t){const n=e.cleanup,r=t[7];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+1],a="function"==typeof s?s(t):Ae(t[s]),l=r[o=n[i+2]],u=n[i+3];"boolean"==typeof u?a.removeEventListener(n[i],l,u):u>=0?r[o=u]():r[o=-u].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++)(0,r[i])();t[7]=null}}(e,t),1===t[1].type&&t[z].destroy();const n=t[17];if(null!==n&&Lt(t[3])){n!==t[3]&&Qp(n,t);const r=t[19];null!==r&&r.detachView(e)}!function H0(e){yu.delete(e[20])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)}}function Zp(e,t,n){return function Yp(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const o=e.data[r.directiveStart].encapsulation;if(o===Kt.None||o===Kt.Emulated)return null}return Tt(r,n)}(e,t.parent,n)}function ar(e,t,n,r,o){e.insertBefore(t,n,r,o)}function Jp(e,t,n){e.appendChild(t,n)}function Xp(e,t,n,r,o){null!==r?ar(e,t,n,r,o):Jp(e,t,n)}function As(e,t){return e.parentNode(t)}let ng=function tg(e,t,n){return 40&e.type?Tt(e,n):null};function Ts(e,t,n,r){const o=Zp(e,r,t),i=t[z],a=function eg(e,t,n){return ng(e,t,n)}(r.parent||t[6],r,t);if(null!=o)if(Array.isArray(n))for(let l=0;l<n.length;l++)Xp(i,o,n[l],a,!1);else Xp(i,o,n,a,!1)}function xs(e,t){if(null!==t){const n=t.type;if(3&n)return Tt(t,e);if(4&n)return Tu(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return xs(e,r);{const o=e[t.index];return Lt(o)?Tu(-1,o):Ae(o)}}if(32&n)return Cu(t,e)()||Ae(e[t.index]);{const r=og(e,t);return null!==r?Array.isArray(r)?r[0]:xs(ni(e[16]),r):xs(e,t.next)}}return null}function og(e,t){return null!==t?e[16][6].projection[t.projection]:null}function Tu(e,t){const n=10+e+1;if(n<t.length){const r=t[n],o=r[1].firstChild;if(null!==o)return xs(r,o)}return t[7]}function xu(e,t,n,r,o,i,s){for(;null!=n;){const a=r[n.index],l=n.type;if(s&&0===t&&(a&&ze(Ae(a),r),n.flags|=4),64!=(64&n.flags))if(8&l)xu(e,t,n.child,r,o,i,!1),Yr(t,e,o,a,i);else if(32&l){const u=Cu(n,r);let c;for(;c=u();)Yr(t,e,o,c,i);Yr(t,e,o,a,i)}else 16&l?sg(e,t,r,n,o,i):Yr(t,e,o,a,i);n=s?n.projectionNext:n.next}}function ri(e,t,n,r,o,i){xu(n,r,e.firstChild,t,o,i,!1)}function sg(e,t,n,r,o,i){const s=n[16],l=s[6].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++)Yr(t,e,o,l[u],i);else xu(e,t,l,s[3],o,i,!0)}function ag(e,t,n){e.setAttribute(t,"style",n)}function Nu(e,t,n){""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}
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
       */const ug="ng-template";function _S(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==lg(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function cg(e){return 4===e.type&&e.value!==ug}function DS(e,t,n){return t===(4!==e.type||n?e.value:ug)}function CS(e,t,n){let r=4;const o=e.attrs||[],i=function bS(e){for(let t=0;t<e.length;t++)if(kh(e[t]))return t;return e.length}(o);let s=!1;for(let a=0;a<t.length;a++){const l=t[a];if("number"!=typeof l){if(!s)if(4&r){if(r=2|1&r,""!==l&&!DS(e,l,n)||""===l&&1===t.length){if($t(r))return!1;s=!0}}else{const u=8&r?l:t[++a];if(8&r&&null!==e.attrs){if(!_S(e.attrs,u,n)){if($t(r))return!1;s=!0}continue}const d=wS(8&r?"class":l,o,cg(e),n);if(-1===d){if($t(r))return!1;s=!0;continue}if(""!==u){let f;f=d>i?"":o[d+1].toLowerCase();const h=8&r?f:null;if(h&&-1!==lg(h,u,0)||2&r&&u!==f){if($t(r))return!1;s=!0}}}}else{if(!s&&!$t(r)&&!$t(l))return!1;if(s&&$t(l))continue;s=!1,r=l|1&r}}return $t(r)||s}function $t(e){return 0==(1&e)}function wS(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){const s=t[o];if(s===e)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let a=t[++o];for(;"string"==typeof a;)a=t[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function SS(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function dg(e,t,n=!1){for(let r=0;r<t.length;r++)if(CS(e,t[r],n))return!0;return!1}function fg(e,t){return e?":not("+t.trim()+")":t}function IS(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const a=e[++n];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!$t(s)&&(t+=fg(i,o),o=""),r=s,i=i||!$t(r);n++}return""!==o&&(t+=fg(i,o)),t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const B={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function T(e){hg(Y(),D(),et()+e,!1)}function hg(e,t,n,r){if(!r)if(3==(3&t[2])){const i=e.preOrderCheckHooks;null!==i&&cs(t,i,n)}else{const i=e.preOrderHooks;null!==i&&ds(t,i,0,n)}Pn(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function yg(e,t=null,n=null,r){const o=vg(e,t,n,r);return o.resolveInjectorInitializers(),o}function vg(e,t=null,n=null,r,o=new Set){const i=[n||ee,c0(e)];return r=r||("object"==typeof e?void 0:se(e)),new Ap(i,t||Is(),r||null,o)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}let Ct=(()=>{class e{static create(n,r){if(Array.isArray(n))return yg({name:""},r,n,"");{var o;const i=null!==(o=n.name)&&void 0!==o?o:"";return yg({name:i},n.parent,n.providers,i)}}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.THROW_IF_NOT_FOUND=Ho,e.NULL=new Ep,e.\u0275prov=P({token:e,providedIn:"any",factory:()=>A(Cp)}),e.__NG_ELEMENT_ID__=-1,e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
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
function _(e,t=O.Default){const n=D();return null===n?A(e,t):Gh(Fe(),n,L(e),t)}function ku(){throw new Error("invalid")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Rs(e,t){return e<<17|t<<2}function jt(e){return e>>17&32767}function Lu(e){return 2|e}function _n(e){return(131068&e)>>2}function Vu(e,t){return-131069&e|t<<2}function $u(e){return 1|e}function Og(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const s=e.data[i];Ol(o),s.contentQueries(2,t[i],i)}}}function Os(e,t,n,r,o,i,s,a,l,u,c){const d=t.blueprint.slice();return d[0]=o,d[2]=76|r,(null!==c||e&&1024&e[2])&&(d[2]|=1024),wh(d),d[3]=d[15]=e,d[8]=n,d[10]=s||e&&e[10],d[z]=a||e&&e[z],d[12]=l||e&&e[12]||null,d[9]=u||e&&e[9]||null,d[6]=i,d[20]=function j0(){return $0++}(),d[21]=c,d[16]=2==t.type?e[16]:d,d}function Xr(e,t,n,r,o){let i=e.data[t];if(null===i)i=function qu(e,t,n,r,o){const i=Sh(),s=Nl(),l=e.data[t]=function uM(e,t,n,r,o,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=l),null!==i&&(s?null==i.child&&null!==l.parent&&(i.child=l):null===i.next&&(i.next=l)),l}(e,t,n,r,o),function jE(){return $.lFrame.inI18n}()&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=function Fo(){const e=$.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();i.injectorIndex=null===s?-1:s.injectorIndex}return Zt(i,!0),i}function eo(e,t,n,r){if(0===n)return-1;const o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function Qu(e,t,n){kl(t);try{const r=e.viewQuery;null!==r&&nc(1,r,n);const o=e.template;null!==o&&kg(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Og(e,t),e.staticViewQueries&&nc(2,e.viewQuery,n);const i=e.components;null!==i&&function sM(e,t){for(let n=0;n<t.length;n++)SM(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,Ll()}}function ks(e,t,n,r){const o=t[2];if(128!=(128&o)){kl(t);try{wh(t),function Ih(e){return $.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&kg(e,t,n,2,r);const s=3==(3&o);if(s){const u=e.preOrderCheckHooks;null!==u&&cs(t,u,null)}else{const u=e.preOrderHooks;null!==u&&ds(t,u,0,null),Vl(t,0)}if(function EM(e){for(let t=wu(e);null!==t;t=Eu(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const o=n[r],i=o[3];0==(512&o[2])&&xl(i,1),o[2]|=512}}}(t),function wM(e){for(let t=wu(e);null!==t;t=Eu(t))for(let n=10;n<t.length;n++){const r=t[n],o=r[1];ls(r)&&ks(o,r,o.template,r[8])}}(t),null!==e.contentQueries&&Og(e,t),s){const u=e.contentCheckHooks;null!==u&&cs(t,u)}else{const u=e.contentHooks;null!==u&&ds(t,u,1),Vl(t,1)}!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function oM(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)Pn(~o);else{const i=o,s=n[++r],a=n[++r];BE(s,i),a(2,t[i])}}}finally{Pn(-1)}}(e,t);const a=e.components;null!==a&&function iM(e,t){for(let n=0;n<t.length;n++)bM(e,t[n])}(t,a);const l=e.viewQuery;if(null!==l&&nc(2,l,r),s){const u=e.viewCheckHooks;null!==u&&cs(t,u)}else{const u=e.viewHooks;null!==u&&ds(t,u,2),Vl(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),t[2]&=-41,512&t[2]&&(t[2]&=-513,xl(t[3],-1))}finally{Ll()}}}function kg(e,t,n,r,o){const i=et(),s=2&r;try{Pn(-1),s&&t.length>22&&hg(e,t,22,!1),n(r,o)}finally{Pn(i)}}function Lg(e,t,n){if(bl(t)){const o=t.directiveEnd;for(let i=t.directiveStart;i<o;i++){const s=e.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}function Ku(e,t,n){!bh()||(function pM(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||ko(n,t),ze(r,t);const s=n.initialInputs;for(let a=o;a<i;a++){const l=e.data[a],u=Vt(l);u&&_M(t,n,l);const c=Lo(t,e,a,n);ze(c,t),null!==s&&DM(0,a-o,c,l,0,s),u&&(yt(n.index,t)[8]=c)}}(e,t,n,Tt(n,t)),128==(128&n.flags)&&function gM(e,t,n){const r=n.directiveStart,o=n.directiveEnd,i=n.index,s=function HE(){return $.lFrame.currentDirectiveIndex}();try{Pn(i);for(let a=r;a<o;a++){const l=e.data[a],u=t[a];Fl(a),(null!==l.hostBindings||0!==l.hostVars||null!==l.hostAttrs)&&Gg(l,u)}}finally{Pn(-1),Fl(s)}}(e,t,n))}function Zu(e,t,n=Tt){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],a=-1===s?n(t,e):e[s];e[o++]=a}}}function Vg(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=Yu(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function Yu(e,t,n,r,o,i,s,a,l,u){const c=22+r,d=c+o,f=function aM(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:B);return n}(c,d),h="function"==typeof u?u():u;return f[1]={type:e,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:t,data:f.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:l,consts:h,incompleteFirstPass:!1}}function $g(e,t,n,r){const o=Kg(t);null===n?o.push(r):(o.push(n),e.firstCreatePass&&Zg(e).push(r,o.length-1))}function jg(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function Bg(e,t){const r=t.directiveEnd,o=e.data,i=t.attrs,s=[];let a=null,l=null;for(let u=t.directiveStart;u<r;u++){const c=o[u],d=c.inputs,f=null===i||cg(t)?null:CM(d,i);s.push(f),a=jg(d,u,a),l=jg(c.outputs,u,l)}null!==a&&(a.hasOwnProperty("class")&&(t.flags|=16),a.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=s,t.inputs=a,t.outputs=l}function wt(e,t,n,r,o,i,s,a){const l=Tt(t,n);let c,u=t.inputs;!a&&null!=u&&(c=u[r])?(rc(e,n,c,r,o),is(t)&&Hg(n,t.index)):3&t.type&&(r=function cM(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(r),o=null!=s?s(o,t.value||"",r):o,i.setProperty(l,r,o))}function Hg(e,t){const n=yt(t,e);16&n[2]||(n[2]|=32)}function Ju(e,t,n,r){let o=!1;if(bh()){const i=function mM(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];dg(n,s.selectors,!1)&&(o||(o=[]),ms(ko(n,t),e,s.type),Vt(s)?(zg(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){o=!0,Wg(n,e.data.length,i.length);for(let c=0;c<i.length;c++){const d=i[c];d.providersResolver&&d.providersResolver(d)}let a=!1,l=!1,u=eo(e,t,i.length,null);for(let c=0;c<i.length;c++){const d=i[c];n.mergedAttrs=hs(n.mergedAttrs,d.hostAttrs),qg(e,n,t,u,d),vM(u,d,s),null!==d.contentQueries&&(n.flags|=8),(null!==d.hostBindings||null!==d.hostAttrs||0!==d.hostVars)&&(n.flags|=128);const f=d.type.prototype;!a&&(f.ngOnChanges||f.ngOnInit||f.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),a=!0),!l&&(f.ngOnChanges||f.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),l=!0),u++}Bg(e,n)}s&&function yM(e,t,n){if(t){const r=e.localNames=[];for(let o=0;o<t.length;o+=2){const i=n[t[o+1]];if(null==i)throw new C(-301,!1);r.push(t[o],i)}}}(n,r,s)}return n.mergedAttrs=hs(n.mergedAttrs,n.attrs),o}function Ug(e,t,n,r,o,i){const s=i.hostBindings;if(s){let a=e.hostBindingOpCodes;null===a&&(a=e.hostBindingOpCodes=[]);const l=~t.index;(function hM(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(a)!=l&&a.push(l),a.push(r,o,s)}}function Gg(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function zg(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function vM(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;Vt(t)&&(n[""]=e)}}function Wg(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function qg(e,t,n,r,o){e.data[r]=o;const i=o.factory||(o.factory=rr(o.type)),s=new Po(i,Vt(o),_);e.blueprint[r]=s,n[r]=s,Ug(e,t,0,r,eo(e,n,o.hostVars,B),o)}function _M(e,t,n){const r=Tt(t,e),o=Vg(n),i=e[10],s=Ls(e,Os(e,o,null,n.onPush?32:16,r,t,i,i.createRenderer(r,n),null,null,null));e[t.index]=s}function DM(e,t,n,r,o,i){const s=i[t];if(null!==s){const a=r.setInput;for(let l=0;l<s.length;){const u=s[l++],c=s[l++],d=s[l++];null!==a?r.setInput(n,d,u,c):n[c]=d}}}function CM(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function Qg(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function bM(e,t){const n=yt(t,e);if(ls(n)){const r=n[1];48&n[2]?ks(r,n,r.template,n[8]):n[5]>0&&ec(n)}}function ec(e){for(let r=wu(e);null!==r;r=Eu(r))for(let o=10;o<r.length;o++){const i=r[o];if(ls(i))if(512&i[2]){const s=i[1];ks(s,i,s.template,i[8])}else i[5]>0&&ec(i)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=yt(n[r],e);ls(o)&&o[5]>0&&ec(o)}}function SM(e,t){const n=yt(t,e),r=n[1];(function MM(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),Qu(r,n,n[8])}function Ls(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function tc(e){for(;e;){e[2]|=32;const t=ni(e);if(DE(e)&&!t)return e;e=t}return null}function Vs(e,t,n,r=!0){const o=t[10];o.begin&&o.begin();try{ks(e,t,e.template,n)}catch(s){throw r&&Jg(t,s),s}finally{o.end&&o.end()}}function nc(e,t,n){Ol(0),t(e,n)}function Kg(e){return e[7]||(e[7]=[])}function Zg(e){return e.cleanup||(e.cleanup=[])}function Jg(e,t){const n=e[9],r=n?n.get(Kr,null):null;r&&r.handleError(t)}function rc(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],a=n[i++],l=t[s],u=e.data[s];null!==u.setInput?u.setInput(l,o,r,a):l[a]=o}}function Dn(e,t,n){const r=as(t,e);!function qp(e,t,n){e.setValue(t,n)}(e[z],r,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $s(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let s=0;s<t.length;s++){const a=t[s];"number"==typeof a?i=a:1==i?o=ml(o,a):2==i&&(r=ml(r,a+": "+t[++s]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function js(e,t,n,r,o=!1){for(;null!==n;){const i=t[n.index];if(null!==i&&r.push(Ae(i)),Lt(i))for(let a=10;a<i.length;a++){const l=i[a],u=l[1].firstChild;null!==u&&js(l[1],l,u,r)}const s=n.type;if(8&s)js(e,t,n.child,r);else if(32&s){const a=Cu(n,t);let l;for(;l=a();)r.push(l)}else if(16&s){const a=og(t,n);if(Array.isArray(a))r.push(...a);else{const l=ni(t[16]);js(l[1],l,a,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class oi{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return js(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(Lt(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(Mu(t,r),vs(n,r))}this._attachedToViewContainer=!1}Kp(this._lView[1],this._lView)}onDestroy(t){$g(this._lView[1],this._lView,null,t)}markForCheck(){tc(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){Vs(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new C(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function lS(e,t){ri(e,t,t[z],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new C(902,!1);this._appRef=t}}class IM extends oi{constructor(t){super(t),this._view=t}detectChanges(){const t=this._view;Vs(t[1],t,t[8],!1)}checkNoChanges(){}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class oc extends Xo{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=ne(t);return new ii(n,this.ngModule)}}function Xg(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}class TM{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){const o=this.injector.get(t,du,r);return o!==du||n===du?o:this.parentInjector.get(t,n,r)}}class ii extends xp{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=function AS(e){return e.map(IS).join(",")}(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return Xg(this.componentDef.inputs)}get outputs(){return Xg(this.componentDef.outputs)}create(t,n,r,o){var i;let s=(o=o||this.ngModule)instanceof Ln?o:null===(i=o)||void 0===i?void 0:i.injector;s&&null!==this.componentDef.getStandaloneInjector&&(s=this.componentDef.getStandaloneInjector(s)||s);const a=s?new TM(t,s):t,l=a.get(Rp,null);if(null===l)throw new C(407,!1);const u=a.get(M0,null),c=l.createRenderer(null,this.componentDef),d=this.componentDef.selectors[0][0]||"div",f=r?function lM(e,t,n){return e.selectRootElement(t,n===Kt.ShadowDom)}(c,r,this.componentDef.encapsulation):Su(l.createRenderer(null,this.componentDef),d,function AM(e){const t=e.toLowerCase();return"svg"===t?"svg":"math"===t?"math":null}(d)),h=this.componentDef.onPush?288:272,p=Yu(0,null,null,1,0,null,null,null,null,null),g=Os(null,p,null,h,null,null,l,c,u,a,null);let v,y;kl(g);try{const E=function RM(e,t,n,r,o,i){const s=n[1];n[22]=e;const l=Xr(s,22,2,"#host",null),u=l.mergedAttrs=t.hostAttrs;null!==u&&($s(l,u,!0),null!==e&&(fs(o,e,u),null!==l.classes&&Nu(o,e,l.classes),null!==l.styles&&ag(o,e,l.styles)));const c=r.createRenderer(e,t),d=Os(n,Vg(t),null,t.onPush?32:16,n[22],l,r,c,i||null,null,null);return s.firstCreatePass&&(ms(ko(l,n),s,t.type),zg(s,l),Wg(l,n.length,1)),Ls(n,d),n[22]=d}(f,this.componentDef,g,l,c);if(f)if(r)fs(c,f,["ng-version",I0.full]);else{const{attrs:m,classes:S}=function TS(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!$t(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);m&&fs(c,f,m),S&&S.length>0&&Nu(c,f,S.join(" "))}if(y=Tl(p,22),void 0!==n){const m=y.projection=[];for(let S=0;S<this.ngContentSelectors.length;S++){const U=n[S];m.push(null!=U?Array.from(U):null)}}v=function FM(e,t,n,r){const o=n[1],i=function fM(e,t,n){const r=Fe();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),qg(e,r,t,eo(e,t,1,null),n),Bg(e,r));const o=Lo(t,e,r.directiveStart,r);ze(o,t);const i=Tt(r,t);return i&&ze(i,t),o}(o,n,t);if(e[8]=n[8]=i,null!==r)for(const a of r)a(i,t);if(t.contentQueries){const a=Fe();t.contentQueries(1,i,a.directiveStart)}const s=Fe();return!o.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(Pn(s.index),Ug(n[1],s,0,s.directiveStart,s.directiveEnd,t),Gg(t,i)),i}(E,this.componentDef,g,[PM]),Qu(p,g,null)}finally{Ll()}return new NM(this.componentType,v,Qr(y,g),g,y)}}class NM extends class D0{}{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.instance=n,this.hostView=this.changeDetectorRef=new IM(o),this.componentType=t}setInput(t,n){const r=this._tNode.inputs;let o;if(null!==r&&(o=r[t])){const i=this._rootLView;rc(i[1],i,o,t,n),Hg(i,this._tNode.index)}}get injector(){return new Vr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}function PM(){const e=Fe();us(D()[1],e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function re(e){let t=function em(e){return Object.getPrototypeOf(e.prototype).constructor}(e.type),n=!0;const r=[e];for(;t;){let o;if(Vt(e))o=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new C(903,!1);o=t.\u0275dir}if(o){if(n){r.push(o);const s=e;s.inputs=ic(e.inputs),s.declaredInputs=ic(e.declaredInputs),s.outputs=ic(e.outputs);const a=o.hostBindings;a&&VM(e,a);const l=o.viewQuery,u=o.contentQueries;if(l&&kM(e,l),u&&LM(e,u),gl(e.inputs,o.inputs),gl(e.declaredInputs,o.declaredInputs),gl(e.outputs,o.outputs),Vt(o)&&o.data.animation){const c=e.data;c.animation=(c.animation||[]).concat(o.data.animation)}}const i=o.features;if(i)for(let s=0;s<i.length;s++){const a=i[s];a&&a.ngInherit&&a(e),a===re&&(n=!1)}}t=Object.getPrototypeOf(t)}!function OM(e){let t=0,n=null;for(let r=e.length-1;r>=0;r--){const o=e[r];o.hostVars=t+=o.hostVars,o.hostAttrs=hs(o.hostAttrs,n=hs(n,o.hostAttrs))}}(r)}function ic(e){return e===Tr?{}:e===ee?[]:e}function kM(e,t){const n=e.viewQuery;e.viewQuery=n?(r,o)=>{t(r,o),n(r,o)}:t}function LM(e,t){const n=e.contentQueries;e.contentQueries=n?(r,o,i)=>{t(r,o,i),n(r,o,i)}:t}function VM(e,t){const n=e.hostBindings;e.hostBindings=n?(r,o)=>{t(r,o),n(r,o)}:t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Bs=null;function lr(){if(!Bs){const e=ae.Symbol;if(e&&e.iterator)Bs=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(Bs=r)}}}return Bs}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function si(e){return!!sc(e)&&(Array.isArray(e)||!(e instanceof Map)&&lr()in e)}function sc(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function We(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}function Hs(e,t,n,r,o){const i=function ur(e,t,n,r){const o=We(e,t,n);return We(e,t+1,r)||o}(e,t,n,r);return We(e,t+2,o)||i}function no(e,t,n,r){return We(e,Or(),n)?t+j(n)+r:B}function oo(e,t,n,r,o,i,s,a){const u=Hs(e,function hn(){return $.lFrame.bindingIndex}(),n,o,s);return pn(3),u?t+j(n)+r+j(o)+i+j(s)+a:B}function oe(e,t,n,r,o,i,s,a){const l=D(),u=Y(),c=e+22,d=u.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function WM(e,t,n,r,o,i,s,a,l){const u=t.consts,c=Xr(t,e,4,s||null,Fn(u,a));Ju(t,n,c,Fn(u,l)),us(t,c);const d=c.tViews=Yu(2,c,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,u);return null!==t.queries&&(t.queries.template(t,c),d.queries=t.queries.embeddedTView(c)),c}(c,u,l,t,n,r,o,i,s):u.data[c];Zt(d,!1);const f=l[z].createComment("");Ts(u,l,f,d),ze(f,l),Ls(l,l[c]=Qg(f,l,f,d)),ss(d)&&Ku(u,l,d),null!=s&&Zu(l,d,a)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function W(e,t,n){const r=D();return We(r,Or(),t)&&wt(Y(),_e(),r,e,t,r[z],n,!1),W}function ac(e,t,n,r,o){const s=o?"class":"style";rc(e,n,t.inputs[s],s,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function w(e,t,n,r){const o=D(),i=Y(),s=22+e,a=o[z],l=o[s]=Su(a,t,function ZE(){return $.lFrame.currentNamespace}()),u=i.firstCreatePass?function KM(e,t,n,r,o,i,s){const a=t.consts,u=Xr(t,e,2,o,Fn(a,i));return Ju(t,n,u,Fn(a,s)),null!==u.attrs&&$s(u,u.attrs,!1),null!==u.mergedAttrs&&$s(u,u.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,u),u}(s,i,o,0,t,n,r):i.data[s];Zt(u,!0);const c=u.mergedAttrs;null!==c&&fs(a,l,c);const d=u.classes;null!==d&&Nu(a,l,d);const f=u.styles;return null!==f&&ag(a,l,f),64!=(64&u.flags)&&Ts(i,o,l,u),0===function PE(){return $.lFrame.elementDepthCount}()&&ze(l,o),function OE(){$.lFrame.elementDepthCount++}(),ss(u)&&(Ku(i,o,u),Lg(i,u,o)),null!==r&&Zu(o,u),w}function I(){let e=Fe();Nl()?Rl():(e=e.parent,Zt(e,!1));const t=e;!function kE(){$.lFrame.elementDepthCount--}();const n=Y();return n.firstCreatePass&&(us(n,e),bl(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function tb(e){return 0!=(16&e.flags)}(t)&&ac(n,t,D(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function nb(e){return 0!=(32&e.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)&&ac(n,t,D(),t.stylesWithoutHost,!1),I}function J(e,t,n,r){return w(e,t,n,r),I(),J
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function cr(e,t,n){const r=D(),o=Y(),i=e+22,s=o.firstCreatePass?function ZM(e,t,n,r,o){const i=t.consts,s=Fn(i,r),a=Xr(t,e,8,"ng-container",s);return null!==s&&$s(a,s,!0),Ju(t,n,a,Fn(i,o)),null!==t.queries&&t.queries.elementStart(t,a),a}(i,o,r,t,n):o.data[i];Zt(s,!0);const a=r[i]=r[z].createComment("");return Ts(o,r,a,s),ze(a,r),ss(s)&&(Ku(o,r,s),Lg(o,s,r)),null!=n&&Zu(r,s),cr}function dr(){let e=Fe();const t=Y();return Nl()?Rl():(e=e.parent,Zt(e,!1)),t.firstCreatePass&&(us(t,e),bl(e)&&t.queries.elementEnd(e)),dr}function fr(){return D()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function li(e){return!!e&&"function"==typeof e.then}const lc=function dm(e){return!!e&&"function"==typeof e.subscribe};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function pe(e,t,n,r){const o=D(),i=Y(),s=Fe();return function hm(e,t,n,r,o,i,s,a){const l=ss(r),c=e.firstCreatePass&&Zg(e),d=t[8],f=Kg(t);let h=!0;if(3&r.type||a){const v=Tt(r,t),y=a?a(v):v,E=f.length,m=a?U=>a(Ae(U[r.index])):r.index;let S=null;if(!a&&l&&(S=function YM(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const a=t[7],l=o[i+2];return a.length>l?a[l]:null}"string"==typeof s&&(i+=2)}return null}(e,t,o,r.index)),null!==S)(S.__ngLastListenerFn__||S).__ngNextListenerFn__=i,S.__ngLastListenerFn__=i,h=!1;else{i=gm(r,t,d,i,!1);const U=n.listen(y,o,i);f.push(i,U),c&&c.push(o,m,E,E+1)}}else i=gm(r,t,d,i,!1);const p=r.outputs;let g;if(h&&null!==p&&(g=p[o])){const v=g.length;if(v)for(let y=0;y<v;y+=2){const me=t[g[y]][g[y+1]].subscribe(i),Mr=f.length;f.push(i,me),c&&c.push(o,r.index,Mr,-(Mr+1))}}}(i,o,o[z],s,e,t,0,r),pe}function pm(e,t,n,r){try{return!1!==n(r)}catch(o){return Jg(e,o),!1}}function gm(e,t,n,r,o){return function i(s){if(s===Function)return r;tc(2&e.flags?yt(e.index,t):t);let l=pm(t,0,r,s),u=i.__ngNextListenerFn__;for(;u;)l=pm(t,0,u,s)&&l,u=u.__ngNextListenerFn__;return o&&!1===l&&(s.preventDefault(),s.returnValue=!1),l}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function fe(e=1){return function GE(e){return($.lFrame.contextLView=function zE(e,t){for(;e>0;)t=t[15],e--;return t}(e,$.lFrame.contextLView))[8]}(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function hr(e,t,n){return uc(e,"",t,"",n),hr}function uc(e,t,n,r,o){const i=D(),s=no(i,t,n,r);return s!==B&&wt(Y(),_e(),i,e,s,i[z],o,!1),uc}function bm(e,t,n,r,o){const i=e[n+1],s=null===t;let a=r?jt(i):_n(i),l=!1;for(;0!==a&&(!1===l||s);){const c=e[a+1];rI(e[a],t)&&(l=!0,e[a+1]=r?$u(c):Lu(c)),a=r?jt(c):_n(c)}l&&(e[n+1]=r?Lu(i):$u(i))}function rI(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&Ur(e,t)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Us(e,t){return function Bt(e,t,n,r){const o=D(),i=Y(),s=pn(2);i.firstUpdatePass&&function Fm(e,t,n,r){const o=e.data;if(null===o[n+1]){const i=o[et()],s=function Rm(e,t){return t>=e.expandoStartIndex}(e,n);(function Lm(e,t){return 0!=(e.flags&(t?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */)(i,r)&&null===t&&!s&&(t=!1),t=function fI(e,t,n,r){const o=function Pl(e){const t=$.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let i=r?t.residualClasses:t.residualStyles;if(null===o)0===(r?t.classBindings:t.styleBindings)&&(n=ui(n=cc(null,e,t,n,r),t.attrs,r),i=null);else{const s=t.directiveStylingLast;if(-1===s||e[s]!==o)if(n=cc(o,e,t,n,r),null===i){let l=function hI(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==_n(r))return e[jt(r)]}(e,t,r);void 0!==l&&Array.isArray(l)&&(l=cc(null,e,t,l[1],r),l=ui(l,t.attrs,r),function pI(e,t,n,r){e[jt(n?t.classBindings:t.styleBindings)]=r}(e,t,r,l))}else i=function gI(e,t,n){let r;const o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++)r=ui(r,e[i].hostAttrs,n);return ui(r,t.attrs,n)}(e,t,r)}return void 0!==i&&(r?t.residualClasses=i:t.residualStyles=i),n}(o,i,t,r),function tI(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,a=jt(s),l=_n(s);e[r]=n;let c,u=!1;if(Array.isArray(n)){const d=n;c=d[1],(null===c||Ur(d,c)>0)&&(u=!0)}else c=n;if(o)if(0!==l){const f=jt(e[a+1]);e[r+1]=Rs(f,a),0!==f&&(e[f+1]=Vu(e[f+1],r)),e[a+1]=function QS(e,t){return 131071&e|t<<17}(e[a+1],r)}else e[r+1]=Rs(a,0),0!==a&&(e[a+1]=Vu(e[a+1],r)),a=r;else e[r+1]=Rs(l,0),0===a?a=r:e[l+1]=Vu(e[l+1],r),l=r;u&&(e[r+1]=Lu(e[r+1])),bm(e,c,r,!0),bm(e,c,r,!1),function nI(e,t,n,r,o){const i=o?e.residualClasses:e.residualStyles;null!=i&&"string"==typeof t&&Ur(i,t)>=0&&(n[r+1]=$u(n[r+1]))}(t,c,e,r,i),s=Rs(a,l),i?t.classBindings=s:t.styleBindings=s}(o,i,t,n,s,r)}}(i,e,s,r),t!==B&&We(o,s,t)&&function Om(e,t,n,r,o,i,s,a){if(!(3&t.type))return;const l=e.data,u=l[a+1];Gs(function Ig(e){return 1==(1&e)}(u)?km(l,t,n,o,_n(u),s):void 0)||(Gs(i)||function Mg(e){return 2==(2&e)}(u)&&(i=km(l,null,n,o,a,s)),function vS(e,t,n,r,o){if(t)o?e.addClass(n,r):e.removeClass(n,r);else{let i=-1===r.indexOf("-")?void 0:ut.DashCase;null==o?e.removeStyle(n,r,i):("string"==typeof o&&o.endsWith("!important")&&(o=o.slice(0,-10),i|=ut.Important),e.setStyle(n,r,o,i))}}(r,s,as(et(),n),o,i))}(i,i.data[et()],o,o[z],e,o[s+1]=function vI(e,t){return null==e||("string"==typeof t?e+=t:"object"==typeof e&&(e=se(kn(e)))),e}(t,n),r,s)}(e,t,null,!0),Us}function cc(e,t,n,r,o){let i=null;const s=n.directiveEnd;let a=n.directiveStylingLast;for(-1===a?a=n.directiveStart:a++;a<s&&(i=t[a],r=ui(r,i.hostAttrs,o),i!==e);)a++;return null!==e&&(n.directiveStylingLast=a),r}function ui(e,t,n){const r=n?1:2;let o=-1;if(null!==t)for(let i=0;i<t.length;i++){const s=t[i];"number"==typeof s?o=s:o===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),_t(e,s,!!n||t[++i]))}return void 0===e?null:e}function km(e,t,n,r,o,i){const s=null===t;let a;for(;o>0;){const l=e[o],u=Array.isArray(l),c=u?l[1]:l,d=null===c;let f=n[o+1];f===B&&(f=d?ee:void 0);let h=d?Wl(f,r):c===r?f:void 0;if(u&&!Gs(h)&&(h=Wl(l,r)),Gs(h)&&(a=h,s))return a;const p=e[o+1];o=s?jt(p):_n(p)}if(null!==t){let l=i?t.residualClasses:t.residualStyles;null!=l&&(a=Wl(l,r))}return a}function Gs(e){return void 0!==e}function N(e,t=""){const n=D(),r=Y(),o=e+22,i=r.firstCreatePass?Xr(r,o,1,t,null):r.data[o],s=n[o]=function bu(e,t){return e.createText(t)}(n[z],t);Ts(r,n,s,i),Zt(i,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function nt(e){return jn("",e,""),nt}function jn(e,t,n){const r=D(),o=no(r,e,t,n);return o!==B&&Dn(r,et(),o),jn}function dc(e,t,n,r,o,i,s){const a=D(),l=oo(a,e,t,n,r,o,i,s);return l!==B&&Dn(a,et(),l),dc}const ho="en-US";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let oy=ho;function pc(e,t,n,r,o){if(e=L(e),Array.isArray(e))for(let i=0;i<e.length;i++)pc(e[i],t,n,r,o);else{const i=Y(),s=D();let a=sr(e)?e:L(e.provide),l=Tp(e);const u=Fe(),c=1048575&u.providerIndexes,d=u.directiveStart,f=u.providerIndexes>>20;if(sr(e)||!e.multi){const h=new Po(l,o,_),p=mc(a,t,o?c:c+f,d);-1===p?(ms(ko(u,s),i,a),gc(i,e,t.length),t.push(a),u.directiveStart++,u.directiveEnd++,o&&(u.providerIndexes+=1048576),n.push(h),s.push(h)):(n[p]=h,s[p]=h)}else{const h=mc(a,t,c+f,d),p=mc(a,t,c,c+f),g=h>=0&&n[h],v=p>=0&&n[p];if(o&&!v||!o&&!g){ms(ko(u,s),i,a);const y=function kA(e,t,n,r,o){const i=new Po(e,n,_);return i.multi=[],i.index=t,i.componentProviders=0,Ty(i,o,r&&!n),i}(o?OA:PA,n.length,o,r,l);!o&&v&&(n[p].providerFactory=y),gc(i,e,t.length,0),t.push(a),u.directiveStart++,u.directiveEnd++,o&&(u.providerIndexes+=1048576),n.push(y),s.push(y)}else gc(i,e,h>-1?h:p,Ty(n[o?p:h],l,!o&&r));!o&&r&&v&&n[p].componentProviders++}}}function gc(e,t,n,r){const o=sr(t),i=function f0(e){return!!e.useClass}(t);if(o||i){const l=(i?L(t.useClass):t).prototype.ngOnDestroy;if(l){const u=e.destroyHooks||(e.destroyHooks=[]);if(!o&&t.multi){const c=u.indexOf(n);-1===c?u.push(n,[r,l]):u[c+1].push(r,l)}else u.push(n,l)}}}function Ty(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function mc(e,t,n,r){for(let o=n;o<r;o++)if(t[o]===e)return o;return-1}function PA(e,t,n,r){return yc(this.multi,[])}function OA(e,t,n,r){const o=this.multi;let i;if(this.providerFactory){const s=this.providerFactory.componentProviders,a=Lo(n,n[1],this.providerFactory.index,r);i=a.slice(0,s),yc(o,i);for(let l=s;l<a.length;l++)i.push(a[l])}else i=[],yc(o,i);return i}function yc(e,t){for(let n=0;n<e.length;n++)t.push((0,e[n])());return t}function ge(e,t=[]){return n=>{n.providersResolver=(r,o)=>
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function FA(e,t,n){const r=Y();if(r.firstCreatePass){const o=Vt(e);pc(n,r.data,r.blueprint,o,!0),pc(t,r.data,r.blueprint,o,!1)}}(r,o?o(e):e,t)}}
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
       */class Ny extends gr{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new oc(this);const r=gt(t);this._bootstrapComponents=vn(r.bootstrap),this._r3Injector=vg(t,n,[{provide:gr,useValue:this},{provide:Xo,useValue:this.componentFactoryResolver}],se(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(t)}get injector(){return this._r3Injector}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class vc extends xy{constructor(t){super(),this.moduleType=t}create(t){return new Ny(this.moduleType,t)}}class VA extends gr{constructor(t,n,r){super(),this.componentFactoryResolver=new oc(this),this.instance=null;const o=new Ap([...t,{provide:gr,useValue:this},{provide:Xo,useValue:this.componentFactoryResolver}],n||Is(),r,new Set(["environment"]));this.injector=o,o.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}}function Ks(e,t,n=null){return new VA(e,t,n).injector}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let $A=(()=>{class e{constructor(n){this._injector=n,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n.id)){const r=bp(0,n.type),o=r.length>0?Ks([r],this._injector,`Standalone[${n.type.name}]`):null;this.cachedInjectors.set(n.id,o)}return this.cachedInjectors.get(n.id)}ngOnDestroy(){try{for(const n of this.cachedInjectors.values())null!==n&&n.destroy()}finally{this.cachedInjectors.clear()}}}return e.\u0275prov=P({token:e,providedIn:"environment",factory:()=>new e(A(Ln))}),e})();function Ry(e){e.getStandaloneInjector=t=>t.get($A).getOrCreateStandaloneInjector(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Dc(e,t,n,r){return function $y(e,t,n,r,o,i){const s=t+n;return We(e,s,o)?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Xt(e,t,n){return e[t]=n}(e,s+1,i?r.call(i,o):r(o)):function gi(e,t){const n=e[t];return n===B?void 0:n}(e,s+1)}(D(),function Xe(){const e=$.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}(),e,t,n,r)}function Cc(e){return t=>{setTimeout(e,void 0,t)}}const Ce=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class cT extends Ze{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&"object"==typeof t){var a,l,u;const d=t;o=null===(a=d.next)||void 0===a?void 0:a.bind(d),i=null===(l=d.error)||void 0===l?void 0:l.bind(d),s=null===(u=d.complete)||void 0===u?void 0:u.bind(d)}this.__isAsync&&(i=Cc(i),o&&(o=Cc(o)),s&&(s=Cc(s)));const c=super.subscribe({next:o,error:i,complete:s});return t instanceof dt&&t.add(c),c}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function dT(){return this._results[lr()]()}class wc{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=lr(),r=wc.prototype;r[n]||(r[n]=dT)}get changes(){return this._changes||(this._changes=new Ce)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const r=this;r.dirty=!1;const o=vt(t);(this._changesDetected=!function fb(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}(r._results,o,n))&&(r._results=o,r.length=o.length,r.last=o[this.length-1],r.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Cn=(()=>{class e{}return e.__NG_ELEMENT_ID__=pT,e})();const fT=Cn,hT=class extends fT{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t,n){const r=this._declarationTContainer.tViews,o=Os(this._declarationLView,r,t,16,null,r.declTNode,null,null,null,null,n||null);o[17]=this._declarationLView[this._declarationTContainer.index];const s=this._declarationLView[19];return null!==s&&(o[19]=s.createEmbeddedView(r)),Qu(r,o,t),new oi(o)}};function pT(){return Zs(Fe(),D())}function Zs(e,t){return 4&e.type?new hT(t,e,Qr(e,t)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ut=(()=>{class e{}return e.__NG_ELEMENT_ID__=gT,e})();function gT(){return Wy(Fe(),D())}const mT=Ut,Gy=class extends mT{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return Qr(this._hostTNode,this._hostLView)}get injector(){return new Vr(this._hostTNode,this._hostLView)}get parentInjector(){const t=gs(this._hostTNode,this._hostLView);if($h(t)){const n=Lr(t,this._hostLView),r=kr(t);return new Vr(n[1].data[r+8],n)}return new Vr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=zy(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){let o,i;"number"==typeof r?o=r:null!=r&&(o=r.index,i=r.injector);const s=t.createEmbeddedView(n||{},i);return this.insert(s,o),s}createComponent(t,n,r,o,i){const s=t&&!function jo(e){return"function"==typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t);let a;if(s)a=n;else{const d=n||{};a=d.index,r=d.injector,o=d.projectableNodes,i=d.environmentInjector||d.ngModuleRef}const l=s?t:new ii(ne(t)),u=r||this.parentInjector;if(!i&&null==l.ngModule){const f=(s?u:this.parentInjector).get(Ln,null);f&&(i=f)}const c=l.create(u,o,void 0,i);return this.insert(c.hostView,a),c}insert(t,n){const r=t._lView,o=r[1];if(function FE(e){return Lt(e[3])}(r)){const c=this.indexOf(t);if(-1!==c)this.detach(c);else{const d=r[3],f=new Gy(d,d[6],d[3]);f.detach(f.indexOf(t))}}const i=this._adjustIndex(n),s=this._lContainer;!function cS(e,t,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-10?(t[4]=n[o],Zh(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function dS(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const a=t[19];null!==a&&a.insertView(e),t[2]|=64}(o,r,s,i);const a=Tu(i,s),l=r[z],u=As(l,s[7]);return null!==u&&function aS(e,t,n,r,o,i){r[0]=o,r[6]=t,ri(e,r,n,1,o,i)}(o,s[6],l,r,u,a),t.attachToViewContainerRef(),Zh(Ec(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=zy(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=Mu(this._lContainer,n);r&&(vs(Ec(this._lContainer),n),Kp(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=Mu(this._lContainer,n);return r&&null!=vs(Ec(this._lContainer),n)?new oi(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function zy(e){return e[8]}function Ec(e){return e[8]||(e[8]=[])}function Wy(e,t){let n;const r=t[e.index];if(Lt(r))n=r;else{let o;if(8&e.type)o=Ae(r);else{const i=t[z];o=i.createComment("");const s=Tt(e,t);ar(i,As(i,s),o,function gS(e,t){return e.nextSibling(t)}(i,s),!1)}t[e.index]=n=Qg(r,t,o,e),Ls(t,n)}return new Gy(n,e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class bc{constructor(t){this.queryList=t,this.matches=null}clone(){return new bc(this.queryList)}setDirty(){this.queryList.setDirty()}}class Sc{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const r=null!==t.contentQueries?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){const s=n.getByIndex(i);o.push(this.queries[s.indexInDeclarationView].clone())}return new Sc(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==Jy(t,n).matches&&this.queries[n].setDirty()}}class qy{constructor(t,n,r=null){this.predicate=t,this.flags=n,this.read=r}}class Mc{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){const o=null!==n?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,null!==n?n.push(i):n=[i])}return null!==n?new Mc(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class Ic{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new Ic(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=t.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];this.matchTNodeWithReadOption(t,n,_T(n,i)),this.matchTNodeWithReadOption(t,n,ys(n,t,i,!1,!1))}else r===Cn?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,ys(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(null!==r){const o=this.metadata.read;if(null!==o)if(o===Dt||o===Ut||o===Cn&&4&n.type)this.addMatch(n.index,-2);else{const i=ys(n,t,o,!1,!1);null!==i&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function _T(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function CT(e,t,n,r){return-1===n?function DT(e,t){return 11&e.type?Qr(e,t):4&e.type?Zs(e,t):null}(t,e):-2===n?function wT(e,t,n){return n===Dt?Qr(t,e):n===Cn?Zs(t,e):n===Ut?Wy(t,e):void 0}(e,t,r):Lo(e,e[1],n,t)}function Qy(e,t,n,r){const o=t[19].queries[r];if(null===o.matches){const i=e.data,s=n.matches,a=[];for(let l=0;l<s.length;l+=2){const u=s[l];a.push(u<0?null:CT(t,i[u],s[l+1],n.metadata.read))}o.matches=a}return o.matches}function Ac(e,t,n,r){const o=e.queries.getByIndex(n),i=o.matches;if(null!==i){const s=Qy(e,t,o,n);for(let a=0;a<i.length;a+=2){const l=i[a];if(l>0)r.push(s[a/2]);else{const u=i[a+1],c=t[-l];for(let d=10;d<c.length;d++){const f=c[d];f[17]===f[3]&&Ac(f[1],f,u,r)}if(null!==c[9]){const d=c[9];for(let f=0;f<d.length;f++){const h=d[f];Ac(h[1],h,u,r)}}}}}return r}function Ys(e){const t=D(),n=Y(),r=Th();Ol(r+1);const o=Jy(n,r);if(e.dirty&&function RE(e){return 4==(4&e[2])}(t)===(2==(2&o.metadata.flags))){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?Ac(n,t,r,[]):Qy(n,t,o,r);e.reset(i,b0),e.notifyOnChanges()}return!0}return!1}function Ky(e,t,n){const r=Y();r.firstCreatePass&&(function Yy(e,t,n){null===e.queries&&(e.queries=new Mc),e.queries.track(new Ic(t,n))}(r,new qy(e,t,n),-1),2==(2&t)&&(r.staticViewQueries=!0)),function Zy(e,t,n){const r=new wc(4==(4&n));$g(e,t,r,r.destroy),null===t[19]&&(t[19]=new Sc),t[19].queries.push(new bc(r))}(r,D(),t)}function Jy(e,t){return e.queries.getByIndex(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
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
function ea(...e){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ta=new x("Application Initializer");let na=(()=>{class e{constructor(n){this.appInits=n,this.resolve=ea,this.reject=ea,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const i=this.appInits[o]();if(li(i))n.push(i);else if(lc(i)){const s=new Promise((a,l)=>{i.subscribe({complete:a,error:l})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(A(ta,8))},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const vi=new x("AppId",{providedIn:"root",factory:function yv(){return`${Pc()}${Pc()}${Pc()}`}});function Pc(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const vv=new x("Platform Initializer"),Oc=new x("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),_v=new x("appBootstrapListener");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let zT=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const wn=new x("LocaleId",{providedIn:"root",factory:()=>be(wn,O.Optional|O.SkipSelf)||function WT(){return typeof $localize<"u"&&$localize.locale||ho}()});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class QT{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let kc=(()=>{class e{compileModuleSync(n){return new vc(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const r=this.compileModuleSync(n),i=vn(gt(n).declarations).reduce((s,a)=>{const l=ne(a);return l&&s.push(new ii(l)),s},[]);return new QT(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const YT=(()=>Promise.resolve(0))();function Lc(e){typeof Zone>"u"?YT.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ke{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Ce(!1),this.onMicrotaskEmpty=new Ce(!1),this.onStable=new Ce(!1),this.onError=new Ce(!1),typeof Zone>"u")throw new C(908,!1);Zone.assertZonePatched();const o=this;if(o._nesting=0,o._outer=o._inner=Zone.current,Zone.AsyncStackTaggingZoneSpec){const i=Zone.AsyncStackTaggingZoneSpec;o._inner=o._inner.fork(new i("Angular"))}Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function JT(){let e=ae.requestAnimationFrame,t=ae.cancelAnimationFrame;if(typeof Zone<"u"&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function tx(e){const t=()=>{!function ex(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(ae,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,$c(e),e.isCheckStableRunning=!0,Vc(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),$c(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,a)=>{try{return wv(e),n.invokeTask(o,i,s,a)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),Ev(e)}},onInvoke:(n,r,o,i,s,a,l)=>{try{return wv(e),n.invoke(o,i,s,a,l)}finally{e.shouldCoalesceRunChangeDetection&&t(),Ev(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(e._hasPendingMicrotasks=i.microTask,$c(e),Vc(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!ke.isInAngularZone())throw new C(909,!1)}static assertNotInAngularZone(){if(ke.isInAngularZone())throw new C(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,XT,ea,ea);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const XT={};function Vc(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function $c(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function wv(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Ev(e){e._nesting--,Vc(e)}class nx{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Ce,this.onMicrotaskEmpty=new Ce,this.onStable=new Ce,this.onError=new Ce}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const bv=new x(""),ra=new x("");let Hc,jc=(()=>{class e{constructor(n,r,o){this._ngZone=n,this.registry=r,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,Hc||(function rx(e){Hc=e}(o),o.addToWindow(r)),this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{ke.assertNotInAngularZone(),Lc(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Lc(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let i=-1;r&&r>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(n){this.registry.registerApplication(n,this)}unregisterApplication(n){this.registry.unregisterApplication(n)}findProviders(n,r,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(A(ke),A(Bc),A(ra))},e.\u0275prov=P({token:e,factory:e.\u0275fac}),e})(),Bc=(()=>{class e{constructor(){this._applications=new Map}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){var o,i;return null!==(o=null===(i=Hc)||void 0===i?void 0:i.findTestabilityInTree(this,n,r))&&void 0!==o?o:null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})(),Bn=null;const Sv=new x("AllowMultipleToken"),Uc=new x("PlatformDestroyListeners");class Mv{constructor(t,n){this.name=t,this.token=n}}function Av(e,t,n=[]){const r=`Platform: ${t}`,o=new x(r);return(i=[])=>{let s=Gc();if(!s||s.injector.get(Sv,!1)){const a=[...n,...i,{provide:o,useValue:!0}];e?e(a):function sx(e){if(Bn&&!Bn.get(Sv,!1))throw new C(400,!1);Bn=e;const t=e.get(xv);(function Iv(e){const t=e.get(vv,null);t&&t.forEach(n=>n())})(e)}(function Tv(e=[],t){return Ct.create({name:t,providers:[{provide:au,useValue:"platform"},{provide:Uc,useValue:new Set([()=>Bn=null])},...e]})}(a,r))}return function lx(e){const t=Gc();if(!t)throw new C(401,!1);return t}()}}function Gc(){var e,t;return null!==(e=null===(t=Bn)||void 0===t?void 0:t.get(xv))&&void 0!==e?e:null}let xv=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const o=function Rv(e,t){let n;return n="noop"===e?new nx:("zone.js"===e?void 0:e)||new ke(t),n}(r?.ngZone,function Nv(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!e||!e.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!e||!e.ngZoneRunCoalescing)||!1}}(r)),i=[{provide:ke,useValue:o}];return o.run(()=>{const s=Ct.create({providers:i,parent:this.injector,name:n.moduleType.name}),a=n.create(s),l=a.injector.get(Kr,null);if(!l)throw new C(402,!1);return o.runOutsideAngular(()=>{const u=o.onError.subscribe({next:c=>{l.handleError(c)}});a.onDestroy(()=>{ia(this._modules,a),u.unsubscribe()})}),function Fv(e,t,n){try{const r=n();return li(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(l,o,()=>{const u=a.injector.get(na);return u.runInitializers(),u.donePromise.then(()=>(function iy(e){ht(e,"Expected localeId to be defined"),"string"==typeof e&&(oy=e.toLowerCase().replace(/_/g,"-"))}(a.injector.get(wn,ho)||ho),this._moduleDoBootstrap(a),a))})})}bootstrapModule(n,r=[]){const o=Pv({},r);return function ox(e,t,n){const r=new vc(n);return Promise.resolve(r)}(0,0,n).then(i=>this.bootstrapModuleFactory(i,o))}_moduleDoBootstrap(n){const r=n.injector.get(oa);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new C(403,!1);n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new C(404,!1);this._modules.slice().forEach(r=>r.destroy()),this._destroyListeners.forEach(r=>r());const n=this._injector.get(Uc,null);n&&(n.forEach(r=>r()),n.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(A(Ct))},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();function Pv(e,t){return Array.isArray(t)?t.reduce(Pv,e):{...e,...t}}let oa=(()=>{class e{constructor(n,r,o){this._zone=n,this._injector=r,this._exceptionHandler=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const i=new we(a=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{a.next(this._stable),a.complete()})}),s=new we(a=>{let l;this._zone.runOutsideAngular(()=>{l=this._zone.onStable.subscribe(()=>{ke.assertNotInAngularZone(),Lc(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,a.next(!0))})})});const u=this._zone.onUnstable.subscribe(()=>{ke.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{a.next(!1)}))});return()=>{l.unsubscribe(),u.unsubscribe()}});this.isStable=function tE(...e){const t=Io(e),n=function Qw(e,t){return"number"==typeof hl(e)?e.pop():t}(e,1/0),r=e;return r.length?1===r.length?Pt(r[0]):Ar(n)(Ie(r,t)):cn}(i,s.pipe(function nE(e={}){const{connector:t=(()=>new Ze),resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:o=!0}=e;return i=>{let s,a,l,u=0,c=!1,d=!1;const f=()=>{a?.unsubscribe(),a=void 0},h=()=>{f(),s=l=void 0,c=d=!1},p=()=>{const g=s;h(),g?.unsubscribe()};return Me((g,v)=>{u++,!d&&!c&&f();const y=l=l??t();v.add(()=>{u--,0===u&&!d&&!c&&(a=pl(p,o))}),y.subscribe(v),!s&&u>0&&(s=new Mo({next:E=>y.next(E),error:E=>{d=!0,f(),a=pl(h,n,E),y.error(E)},complete:()=>{c=!0,f(),a=pl(h,r),y.complete()}}),Pt(g).subscribe(s))})(i)}}()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(n,r){const o=n instanceof xp;if(!this._injector.get(na).done)throw!o&&function xr(e){const t=ne(e)||Ye(e)||Je(e);return null!==t&&t.standalone}(n),new C(405,false);let s;s=o?n:this._injector.get(Xo).resolveComponentFactory(n),this.componentTypes.push(s.componentType);const a=function ix(e){return e.isBoundToModule}(s)?void 0:this._injector.get(gr),u=s.create(Ct.NULL,[],r||s.selector,a),c=u.location.nativeElement,d=u.injector.get(bv,null);return d?.registerApplication(c),u.onDestroy(()=>{this.detachView(u.hostView),ia(this.components,u),d?.unregisterApplication(c)}),this._loadComponent(u),u}tick(){if(this._runningTick)throw new C(101,!1);try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;ia(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(_v,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>ia(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new C(406,!1);const n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return e.\u0275fac=function(n){return new(n||e)(A(ke),A(Ln),A(Kr))},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function ia(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let kv=!0,sa=(()=>{class e{}return e.__NG_ELEMENT_ID__=dx,e})();function dx(e){return function fx(e,t,n){if(is(e)&&!n){const r=yt(e.index,t);return new oi(r,r)}return 47&e.type?new oi(t[16],t):null}
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
class Bv{constructor(){}supports(t){return si(t)}create(t){return new vx(t)}}const yx=(e,t)=>t;class vx{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||yx}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){const s=!r||n&&n.currentIndex<Uv(r,o,i)?n:r,a=Uv(s,o,i),l=s.currentIndex;if(s===r)o--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)o++;else{i||(i=[]);const u=a-o,c=l-o;if(u!=c){for(let f=0;f<u;f++){const h=f<i.length?i[f]:i[f]=0,p=h+f;c<=p&&p<u&&(i[f]=h+1)}i[s.previousIndex]=c-u}}a!==l&&t(s,a,l)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!si(t))throw new C(900,!1);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let o,i,s,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let a=0;a<this.length;a++)i=t[a],s=this._trackByFn(a,i),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,i,s,a)),Object.is(n.item,i)||this._addIdentityChange(n,i)):(n=this._mismatch(n,i,s,a),r=!0),n=n._next}else o=0,function UM(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[lr()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,a=>{s=this._trackByFn(o,a),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,a,s,o)),Object.is(n.item,a)||this._addIdentityChange(n,a)):(n=this._mismatch(n,a,s,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,o){let i;return null===t?i=this._itTail:(i=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,o)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,o)):t=this._addAfter(new _x(n,r),i,o),t}_verifyReinsertion(t,n,r,o){let i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==i?t=this._reinsertAfter(i,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const o=t._prevRemoved,i=t._nextRemoved;return null===o?this._removalsHead=i:o._nextRemoved=i,null===i?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const o=null===n?this._itHead:n._next;return t._next=o,t._prev=n,null===o?this._itTail=t:o._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new Hv),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Hv),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class _x{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class Dx{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class Hv{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new Dx,this.map.set(n,r)),r.add(t)}get(t,n){const o=this.map.get(t);return o?o.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Uv(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class Gv{constructor(){}supports(t){return t instanceof Map||sc(t)}create(){return new Cx}}class Cx{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||sc(t)))throw new C(900,!1)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const i=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,i)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const r=t._prev;return n._next=t,n._prev=r,t._prev=n,r&&(r._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const o=this._records.get(t);this._maybeAddToChanges(o,n);const i=o._prev,s=o._next;return i&&(i._next=s),s&&(s._prev=i),o._next=null,o._prev=null,o}const r=new wx(t);return this._records.set(t,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(r=>n(t[r],r))}}class wx{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zv(){return new ua([new Bv])}let ua=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||zv()),deps:[[e,new Wo,new zo]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new C(901,!1)}}return e.\u0275prov=P({token:e,providedIn:"root",factory:zv}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Wv(){return new _i([new Gv])}let _i=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||Wv()),deps:[[e,new Wo,new zo]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(r)return r;throw new C(901,!1)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=P({token:e,providedIn:"root",factory:Wv}),e})();const Sx=Av(null,"core",[]);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
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
let Mx=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(A(oa))},e.\u0275mod=St({type:e}),e.\u0275inj=pt({}),e})(),ca=null;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function rn(){return ca}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const it=new x("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Kc=(()=>{class e{historyGo(n){throw new Error("Not implemented")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=P({token:e,factory:function(){return function xx(){return A(qv)}()},providedIn:"platform"}),e})();const Nx=new x("Location Initialized");let qv=(()=>{class e extends Kc{constructor(n){super(),this._doc=n,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return rn().getBaseHref(this._doc)}onPopState(n){const r=rn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){const r=rn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(n){this.location.pathname=n}pushState(n,r,o){Qv()?this._history.pushState(n,r,o):this.location.hash=o}replaceState(n,r,o){Qv()?this._history.replaceState(n,r,o):this.location.hash=o}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}}return e.\u0275fac=function(n){return new(n||e)(A(it))},e.\u0275prov=P({token:e,factory:function(){return function Rx(){return new qv(A(it))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */()},providedIn:"platform"}),e})();function Qv(){return!!window.history.pushState}function Zc(e,t){if(0==e.length)return t;if(0==t.length)return e;let n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,2==n?e+t.substring(1):1==n?e+t:e+"/"+t}function Kv(e){const t=e.match(/#|\?|$/),n=t&&t.index||e.length;return e.slice(0,n-("/"===e[n-1]?1:0))+e.slice(n)}function Sn(e){return e&&"?"!==e[0]?"?"+e:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let yr=(()=>{class e{historyGo(n){throw new Error("Not implemented")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=P({token:e,factory:function(){return be(Yv)},providedIn:"root"}),e})();const Zv=new x("appBaseHref");let Yv=(()=>{class e extends yr{constructor(n,r){var o,i,s;super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=null!==(o=null!==(i=r??this._platformLocation.getBaseHrefFromDOM())&&void 0!==i?i:null===(s=be(it).location)||void 0===s?void 0:s.origin)&&void 0!==o?o:""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Zc(this._baseHref,n)}path(n=!1){const r=this._platformLocation.pathname+Sn(this._platformLocation.search),o=this._platformLocation.hash;return o&&n?`${r}${o}`:r}pushState(n,r,o,i){const s=this.prepareExternalUrl(o+Sn(i));this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){const s=this.prepareExternalUrl(o+Sn(i));this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){var r,o;null===(r=(o=this._platformLocation).historyGo)||void 0===r||r.call(o,n)}}return e.\u0275fac=function(n){return new(n||e)(A(Kc),A(Zv,8))},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Fx=(()=>{class e extends yr{constructor(n,r){super(),this._platformLocation=n,this._baseHref="",this._removeListenerFns=[],null!=r&&(this._baseHref=r)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}path(n=!1){let r=this._platformLocation.hash;return null==r&&(r="#"),r.length>0?r.substring(1):r}prepareExternalUrl(n){const r=Zc(this._baseHref,n);return r.length>0?"#"+r:r}pushState(n,r,o,i){let s=this.prepareExternalUrl(o+Sn(i));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){let s=this.prepareExternalUrl(o+Sn(i));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){var r,o;null===(r=(o=this._platformLocation).historyGo)||void 0===r||r.call(o,n)}}return e.\u0275fac=function(n){return new(n||e)(A(Kc),A(Zv,8))},e.\u0275prov=P({token:e,factory:e.\u0275fac}),e})(),Yc=(()=>{class e{constructor(n){this._subject=new Ce,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;const r=this._locationStrategy.getBaseHref();this._baseHref=Kv(Jv(r)),this._locationStrategy.onPopState(o=>{this._subject.emit({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){var n;null===(n=this._urlChangeSubscription)||void 0===n||n.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+Sn(r))}normalize(n){return e.stripTrailingSlash(function Ox(e,t){return e&&t.startsWith(e)?t.substring(e.length):t}(this._baseHref,Jv(n)))}prepareExternalUrl(n){return n&&"/"!==n[0]&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",o=null){this._locationStrategy.pushState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+Sn(r)),o)}replaceState(n,r="",o=null){this._locationStrategy.replaceState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+Sn(r)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){var r,o;null===(r=(o=this._locationStrategy).historyGo)||void 0===r||r.call(o,n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)})),()=>{const r=this._urlChangeListeners.indexOf(n);var o;this._urlChangeListeners.splice(r,1),0===this._urlChangeListeners.length&&(null===(o=this._urlChangeSubscription)||void 0===o||o.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(o=>o(n,r))}subscribe(n,r,o){return this._subject.subscribe({next:n,error:r,complete:o})}}return e.normalizeQueryParams=Sn,e.joinWithSlash=Zc,e.stripTrailingSlash=Kv,e.\u0275fac=function(n){return new(n||e)(A(yr))},e.\u0275prov=P({token:e,factory:function(){return function Px(){return new Yc(A(yr))}()},providedIn:"root"}),e})();
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
       */let wi=(()=>{class e{constructor(n,r,o,i){this._iterableDiffers=n,this._keyValueDiffers=r,this._ngEl=o,this._renderer=i,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(n){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof n?n.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(n){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof n?n.split(/\s+/):n,this._rawClass&&(si(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const n=this._iterableDiffer.diff(this._rawClass);n&&this._applyIterableChanges(n)}else if(this._keyValueDiffer){const n=this._keyValueDiffer.diff(this._rawClass);n&&this._applyKeyValueChanges(n)}}_applyKeyValueChanges(n){n.forEachAddedItem(r=>this._toggleClass(r.key,r.currentValue)),n.forEachChangedItem(r=>this._toggleClass(r.key,r.currentValue)),n.forEachRemovedItem(r=>{r.previousValue&&this._toggleClass(r.key,!1)})}_applyIterableChanges(n){n.forEachAddedItem(r=>{if("string"!=typeof r.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${se(r.item)}`);this._toggleClass(r.item,!0)}),n.forEachRemovedItem(r=>this._toggleClass(r.item,!1))}_applyClasses(n){n&&(Array.isArray(n)||n instanceof Set?n.forEach(r=>this._toggleClass(r,!0)):Object.keys(n).forEach(r=>this._toggleClass(r,!!n[r])))}_removeClasses(n){n&&(Array.isArray(n)||n instanceof Set?n.forEach(r=>this._toggleClass(r,!1)):Object.keys(n).forEach(r=>this._toggleClass(r,!1)))}_toggleClass(n,r){(n=n.trim())&&n.split(/\s+/g).forEach(o=>{r?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}}return e.\u0275fac=function(n){return new(n||e)(_(ua),_(_i),_(Dt),_(yn))},e.\u0275dir=V({type:e,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"},standalone:!0}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class _1{constructor(t,n,r,o){this.$implicit=t,this.ngForOf=n,this.index=r,this.count=o}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let Ei=(()=>{class e{constructor(n,r,o){this._viewContainer=n,this._template=r,this._differs=o,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const n=this._ngForOf;!this._differ&&n&&(this._differ=this._differs.find(n).create(this.ngForTrackBy))}if(this._differ){const n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){const r=this._viewContainer;n.forEachOperation((o,i,s)=>{if(null==o.previousIndex)r.createEmbeddedView(this._template,new _1(o.item,this._ngForOf,-1,-1),null===s?void 0:s);else if(null==s)r.remove(null===i?void 0:i);else if(null!==i){const a=r.get(i);r.move(a,s),c_(a,o)}});for(let o=0,i=r.length;o<i;o++){const a=r.get(o).context;a.index=o,a.count=i,a.ngForOf=this._ngForOf}n.forEachIdentityChange(o=>{c_(r.get(o.currentIndex),o)})}static ngTemplateContextGuard(n,r){return!0}}return e.\u0275fac=function(n){return new(n||e)(_(Ut),_(Cn),_(ua))},e.\u0275dir=V({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0}),e})();function c_(e,t){e.context.$implicit=t.item}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let mo=(()=>{class e{constructor(n,r){this._viewContainer=n,this._context=new C1,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=r}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){d_("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){d_("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,r){return!0}}return e.\u0275fac=function(n){return new(n||e)(_(Ut),_(Cn))},e.\u0275dir=V({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0}),e})();class C1{constructor(){this.$implicit=null,this.ngIf=null}}function d_(e,t){if(t&&!t.createEmbeddedView)throw new Error(`${e} must be a TemplateRef, but received '${se(t)}'.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Q1=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=St({type:e}),e.\u0275inj=pt({}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let J1=(()=>{class e{}return e.\u0275prov=P({token:e,providedIn:"root",factory:()=>new X1(A(it),window)}),e})();class X1{constructor(t,n){this.document=t,this.window=n,this.offset=()=>[0,0]}setOffset(t){this.offset=Array.isArray(t)?()=>t:t}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(t){this.supportsScrolling()&&this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){if(!this.supportsScrolling())return;const n=function eN(e,t){const n=e.getElementById(t)||e.getElementsByName(t)[0];if(n)return n;if("function"==typeof e.createTreeWalker&&e.body&&(e.body.createShadowRoot||e.body.attachShadow)){const r=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT);let o=r.currentNode;for(;o;){const i=o.shadowRoot;if(i){const s=i.getElementById(t)||i.querySelector(`[name="${t}"]`);if(s)return s}o=r.nextNode()}}return null}(this.document,t);n&&(this.scrollToElement(n),n.focus())}setHistoryScrollRestoration(t){if(this.supportScrollRestoration()){const n=this.window.history;n&&n.scrollRestoration&&(n.scrollRestoration=t)}}scrollToElement(t){const n=t.getBoundingClientRect(),r=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,i=this.offset();this.window.scrollTo(r-i[0],o-i[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const t=g_(this.window.history)||g_(Object.getPrototypeOf(this.window.history));return!(!t||!t.writable&&!t.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function g_(e){return Object.getOwnPropertyDescriptor(e,"scrollRestoration")}
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
class vN extends class Tx{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function Ax(e){ca||(ca=e)}(new hd)}onAndCancel(t,n,r){return t.addEventListener(n,r,!1),()=>{t.removeEventListener(n,r,!1)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,n){return(n=n||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return"window"===n?window:"document"===n?t:"body"===n?t.body:null}getBaseHref(t){const n=function _N(){return Si=Si||document.querySelector("base"),Si?Si.getAttribute("href"):null}();return null==n?null:function DN(e){Ca=Ca||document.createElement("a"),Ca.setAttribute("href",e);const t=Ca.pathname;return"/"===t.charAt(0)?t:`/${t}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}resetBaseElement(){Si=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return a_(document.cookie,t)}}let Ca,Si=null;const D_=new x("TRANSITION_ID"),wN=[{provide:ta,useFactory:function CN(e,t,n){return()=>{n.get(na).donePromise.then(()=>{const r=rn(),o=t.querySelectorAll(`style[ng-transition="${e}"]`);for(let i=0;i<o.length;i++)r.remove(o[i])})}},deps:[D_,it,Ct],multi:!0}];let bN=(()=>{class e{build(){return new XMLHttpRequest}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const wa=new x("EventManagerPlugins");let Ea=(()=>{class e{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(o=>o.manager=this),this._plugins=n.slice().reverse()}addEventListener(n,r,o){return this._findPluginFor(r).addEventListener(n,r,o)}addGlobalEventListener(n,r,o){return this._findPluginFor(r).addGlobalEventListener(n,r,o)}getZone(){return this._zone}_findPluginFor(n){const r=this._eventNameToPlugin.get(n);if(r)return r;const o=this._plugins;for(let i=0;i<o.length;i++){const s=o[i];if(s.supports(n))return this._eventNameToPlugin.set(n,s),s}throw new Error(`No event manager plugin found for event ${n}`)}}return e.\u0275fac=function(n){return new(n||e)(A(wa),A(ke))},e.\u0275prov=P({token:e,factory:e.\u0275fac}),e})();class C_{constructor(t){this._doc=t}addGlobalEventListener(t,n,r){const o=rn().getGlobalEventTarget(this._doc,t);if(!o)throw new Error(`Unsupported event target ${o} for event ${n}`);return this.addEventListener(o,n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let w_=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(n){const r=new Set;n.forEach(o=>{this._stylesSet.has(o)||(this._stylesSet.add(o),r.add(o))}),this.onStylesAdded(r)}onStylesAdded(n){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac}),e})(),Mi=(()=>{class e extends w_{constructor(n){super(),this._doc=n,this._hostNodes=new Map,this._hostNodes.set(n.head,[])}_addStylesToHost(n,r,o){n.forEach(i=>{const s=this._doc.createElement("style");s.textContent=i,o.push(r.appendChild(s))})}addHost(n){const r=[];this._addStylesToHost(this._stylesSet,n,r),this._hostNodes.set(n,r)}removeHost(n){const r=this._hostNodes.get(n);r&&r.forEach(E_),this._hostNodes.delete(n)}onStylesAdded(n){this._hostNodes.forEach((r,o)=>{this._addStylesToHost(n,o,r)})}ngOnDestroy(){this._hostNodes.forEach(n=>n.forEach(E_))}}return e.\u0275fac=function(n){return new(n||e)(A(it))},e.\u0275prov=P({token:e,factory:e.\u0275fac}),e})();function E_(e){rn().remove(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const pd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},gd=/%COMP%/g;function ba(e,t,n){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?ba(e,o,n):(o=o.replace(gd,e),n.push(o))}return n}function M_(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let md=(()=>{class e{constructor(n,r,o){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.rendererByCompId=new Map,this.defaultRenderer=new yd(n)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;switch(r.encapsulation){case Kt.Emulated:{let o=this.rendererByCompId.get(r.id);return o||(o=new xN(this.eventManager,this.sharedStylesHost,r,this.appId),this.rendererByCompId.set(r.id,o)),o.applyToHost(n),o}case 1:case Kt.ShadowDom:return new NN(this.eventManager,this.sharedStylesHost,n,r);default:if(!this.rendererByCompId.has(r.id)){const o=ba(r.id,r.styles,[]);this.sharedStylesHost.addStyles(o),this.rendererByCompId.set(r.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(n){return new(n||e)(A(Ea),A(Mi),A(vi))},e.\u0275prov=P({token:e,factory:e.\u0275fac}),e})();class yd{constructor(t){this.eventManager=t,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(t,n){return n?document.createElementNS(pd[n]||n,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,n){(A_(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){t&&(A_(t)?t.content:t).insertBefore(n,r)}removeChild(t,n){t&&t.removeChild(n)}selectRootElement(t,n){let r="string"==typeof t?document.querySelector(t):t;if(!r)throw new Error(`The selector "${t}" did not match any elements`);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+":"+n;const i=pd[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){const o=pd[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){o&(ut.DashCase|ut.Important)?t.style.setProperty(n,r,o&ut.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&ut.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t[n]=r}setValue(t,n){t.nodeValue=n}listen(t,n,r){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,n,M_(r)):this.eventManager.addEventListener(t,n,M_(r))}}function A_(e){return"TEMPLATE"===e.tagName&&void 0!==e.content}class xN extends yd{constructor(t,n,r,o){super(t),this.component=r;const i=ba(o+"-"+r.id,r.styles,[]);n.addStyles(i),this.contentAttr=function IN(e){return"_ngcontent-%COMP%".replace(gd,e)}(o+"-"+r.id),this.hostAttr=function AN(e){return"_nghost-%COMP%".replace(gd,e)}(o+"-"+r.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,n){const r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}}class NN extends yd{constructor(t,n,r,o){super(t),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const i=ba(o.id,o.styles,[]);for(let s=0;s<i.length;s++){const a=document.createElement("style");a.textContent=i[s],this.shadowRoot.appendChild(a)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(this.nodeOrShadowRoot(t),n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let RN=(()=>{class e extends C_{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o){return n.addEventListener(r,o,!1),()=>this.removeEventListener(n,r,o)}removeEventListener(n,r,o){return n.removeEventListener(r,o)}}return e.\u0275fac=function(n){return new(n||e)(A(it))},e.\u0275prov=P({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const T_=["alt","control","meta","shift"],FN={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},PN={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let ON=(()=>{class e extends C_{constructor(n){super(n)}supports(n){return null!=e.parseEventName(n)}addEventListener(n,r,o){const i=e.parseEventName(r),s=e.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>rn().onAndCancel(n,i.domEventName,s))}static parseEventName(n){const r=n.toLowerCase().split("."),o=r.shift();if(0===r.length||"keydown"!==o&&"keyup"!==o)return null;const i=e._normalizeKey(r.pop());let s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),T_.forEach(u=>{const c=r.indexOf(u);c>-1&&(r.splice(c,1),s+=u+".")}),s+=i,0!=r.length||0===i.length)return null;const l={};return l.domEventName=o,l.fullKey=s,l}static matchEventFullKeyCode(n,r){let o=FN[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),!(null==o||!o)&&(o=o.toLowerCase()," "===o?o="space":"."===o&&(o="dot"),T_.forEach(s=>{s!==o&&(0,PN[s])(n)&&(i+=s+".")}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{e.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return"esc"===n?"escape":n}}return e.\u0275fac=function(n){return new(n||e)(A(it))},e.\u0275prov=P({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const $N=Av(Sx,"browser",[{provide:Oc,useValue:"browser"},{provide:vv,useValue:function kN(){hd.makeCurrent()},multi:!0},{provide:it,useFactory:function VN(){return function Lb(e){Yl=e}(document),document},deps:[]}]),R_=new x(""),F_=[{provide:ra,useClass:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class EN{addToWindow(t){ae.getAngularTestability=(r,o=!0)=>{const i=t.findTestabilityInTree(r,o);if(null==i)throw new Error("Could not find testability for element.");return i},ae.getAllAngularTestabilities=()=>t.getAllTestabilities(),ae.getAllAngularRootElements=()=>t.getAllRootElements(),ae.frameworkStabilizers||(ae.frameworkStabilizers=[]),ae.frameworkStabilizers.push(r=>{const o=ae.getAllAngularTestabilities();let i=o.length,s=!1;const a=function(l){s=s||l,i--,0==i&&r(s)};o.forEach(function(l){l.whenStable(a)})})}findTestabilityInTree(t,n,r){return null==n?null:t.getTestability(n)??(r?rn().isShadowRoot(n)?this.findTestabilityInTree(t,n.host,!0):this.findTestabilityInTree(t,n.parentElement,!0):null)}},deps:[]},{provide:bv,useClass:jc,deps:[ke,Bc,ra]},{provide:jc,useClass:jc,deps:[ke,Bc,ra]}],P_=[{provide:au,useValue:"root"},{provide:Kr,useFactory:function LN(){return new Kr},deps:[]},{provide:wa,useClass:RN,multi:!0,deps:[it,ke,Oc]},{provide:wa,useClass:ON,multi:!0,deps:[it]},{provide:md,useClass:md,deps:[Ea,Mi,vi]},{provide:Rp,useExisting:md},{provide:w_,useExisting:Mi},{provide:Mi,useClass:Mi,deps:[it]},{provide:Ea,useClass:Ea,deps:[wa,ke]},{provide:m_,useClass:bN,deps:[]},[]];let jN=(()=>{class e{constructor(n){}static withServerTransition(n){return{ngModule:e,providers:[{provide:vi,useValue:n.appId},{provide:D_,useExisting:vi},wN]}}}return e.\u0275fac=function(n){return new(n||e)(A(R_,12))},e.\u0275mod=St({type:e}),e.\u0275inj=pt({providers:[...P_,...F_],imports:[Q1,Mx]}),e})(),O_=(()=>{class e{constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}}return e.\u0275fac=function(n){return new(n||e)(A(it))},e.\u0275prov=P({token:e,factory:function(n){let r=null;return r=n?new n:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function HN(){return new O_(A(it))}(),r},providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
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
function R(...e){return Ie(e,Io(e))}function Un(e,t){return le(t)?$e(e,t,1):$e(e,1)}function on(e,t){return Me((n,r)=>{let o=0;n.subscribe(Ee(r,i=>e.call(t,i,o++)&&r.next(i)))})}
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
       */class In{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(n=>{const r=n.indexOf(":");if(r>0){const o=n.slice(0,r),i=o.toLowerCase(),s=n.slice(r+1).trim();this.maybeSetNormalizedName(o,i),this.headers.has(i)?this.headers.get(i).push(s):this.headers.set(i,[s])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(n=>{let r=t[n];const o=n.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(o,r),this.maybeSetNormalizedName(n,o))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const n=this.headers.get(t.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,n){return this.clone({name:t,value:n,op:"a"})}set(t,n){return this.clone({name:t,value:n,op:"s"})}delete(t,n){return this.clone({name:t,value:n,op:"d"})}maybeSetNormalizedName(t,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,t)}init(){this.lazyInit&&(this.lazyInit instanceof In?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(n=>{this.headers.set(n,t.headers.get(n)),this.normalizedNames.set(n,t.normalizedNames.get(n))})}clone(t){const n=new In;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof In?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}applyUpdate(t){const n=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,n);const o=("a"===t.op?this.headers.get(n):void 0)||[];o.push(...r),this.headers.set(n,o);break;case"d":const i=t.value;if(i){let s=this.headers.get(n);if(!s)return;s=s.filter(a=>-1===i.indexOf(a)),0===s.length?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,s)}else this.headers.delete(n),this.normalizedNames.delete(n)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>t(this.normalizedNames.get(n),this.headers.get(n)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ZN{encodeKey(t){return j_(t)}encodeValue(t){return j_(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const JN=/%(\d[a-f0-9])/gi,XN={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function j_(e){return encodeURIComponent(e).replace(JN,(t,n)=>{var r;return null!==(r=XN[n])&&void 0!==r?r:t})}function Sa(e){return`${e}`}class An{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new ZN,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function YN(e,t){const n=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{const i=o.indexOf("="),[s,a]=-1==i?[t.decodeKey(o),""]:[t.decodeKey(o.slice(0,i)),t.decodeValue(o.slice(i+1))],l=n.get(s)||[];l.push(a),n.set(s,l)}),n}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(n=>{const r=t.fromObject[n],o=Array.isArray(r)?r.map(Sa):[Sa(r)];this.map.set(n,o)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const n=this.map.get(t);return n?n[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,n){return this.clone({param:t,value:n,op:"a"})}appendAll(t){const n=[];return Object.keys(t).forEach(r=>{const o=t[r];Array.isArray(o)?o.forEach(i=>{n.push({param:r,value:i,op:"a"})}):n.push({param:r,value:o,op:"a"})}),this.clone(n)}set(t,n){return this.clone({param:t,value:n,op:"s"})}delete(t,n){return this.clone({param:t,value:n,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const n=this.encoder.encodeKey(t);return this.map.get(t).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const n=new An({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(t),n}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const n=("a"===t.op?this.map.get(t.param):void 0)||[];n.push(Sa(t.value)),this.map.set(t.param,n);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const o=r.indexOf(Sa(t.value));-1!==o&&r.splice(o,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class eR{constructor(){this.map=new Map}set(t,n){return this.map.set(t,n),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function B_(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function H_(e){return typeof Blob<"u"&&e instanceof Blob}function U_(e){return typeof FormData<"u"&&e instanceof FormData}class Ii{constructor(t,n,r,o){let i;if(this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function tR(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==r?r:null,i=o):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new In),this.context||(this.context=new eR),this.params){const s=this.params.toString();if(0===s.length)this.urlWithParams=n;else{const a=n.indexOf("?");this.urlWithParams=n+(-1===a?"?":a<n.length-1?"&":"")+s}}else this.params=new An,this.urlWithParams=n}serializeBody(){return null===this.body?null:B_(this.body)||H_(this.body)||U_(this.body)||function nR(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof An?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||U_(this.body)?null:H_(this.body)?this.body.type||null:B_(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof An?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){var n;const r=t.method||this.method,o=t.url||this.url,i=t.responseType||this.responseType,s=void 0!==t.body?t.body:this.body,a=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,l=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let u=t.headers||this.headers,c=t.params||this.params;const d=null!==(n=t.context)&&void 0!==n?n:this.context;return void 0!==t.setHeaders&&(u=Object.keys(t.setHeaders).reduce((f,h)=>f.set(h,t.setHeaders[h]),u)),t.setParams&&(c=Object.keys(t.setParams).reduce((f,h)=>f.set(h,t.setParams[h]),c)),new Ii(r,o,s,{params:c,headers:u,context:d,reportProgress:l,responseType:i,withCredentials:a})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Re=(()=>((Re=Re||{})[Re.Sent=0]="Sent",Re[Re.UploadProgress=1]="UploadProgress",Re[Re.ResponseHeader=2]="ResponseHeader",Re[Re.DownloadProgress=3]="DownloadProgress",Re[Re.Response=4]="Response",Re[Re.User=5]="User",Re))();class Dd{constructor(t,n=200,r="OK"){this.headers=t.headers||new In,this.status=void 0!==t.status?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class Cd extends Dd{constructor(t={}){super(t),this.type=Re.ResponseHeader}clone(t={}){return new Cd({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class Ma extends Dd{constructor(t={}){super(t),this.type=Re.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new Ma({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class G_ extends Dd{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function wd(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}let Ia=(()=>{class e{constructor(n){this.handler=n}request(n,r,o={}){let i;if(n instanceof Ii)i=n;else{let l,u;l=o.headers instanceof In?o.headers:new In(o.headers),o.params&&(u=o.params instanceof An?o.params:new An({fromObject:o.params})),i=new Ii(n,r,void 0!==o.body?o.body:null,{headers:l,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials})}const s=R(i).pipe(Un(l=>this.handler.handle(l)));if(n instanceof Ii||"events"===o.observe)return s;const a=s.pipe(on(l=>l instanceof Ma));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return a.pipe(Q(l=>{if(null!==l.body&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return a.pipe(Q(l=>{if(null!==l.body&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return a.pipe(Q(l=>{if(null!==l.body&&"string"!=typeof l.body)throw new Error("Response is not a string.");return l.body}));default:return a.pipe(Q(l=>l.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:(new An).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,wd(o,r))}post(n,r,o={}){return this.request("POST",n,wd(o,r))}put(n,r,o={}){return this.request("PUT",n,wd(o,r))}}return e.\u0275fac=function(n){return new(n||e)(A(V_))},e.\u0275prov=P({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class z_{constructor(t,n){this.next=t,this.interceptor=n}handle(t){return this.interceptor.intercept(t,this.next)}}const W_=new x("HTTP_INTERCEPTORS");let rR=(()=>{class e{intercept(n,r){return r.handle(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const oR=/^\)\]\}',?\n/;let q_=(()=>{class e{constructor(n){this.xhrFactory=n}handle(n){if("JSONP"===n.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new we(r=>{const o=this.xhrFactory.build();if(o.open(n.method,n.urlWithParams),n.withCredentials&&(o.withCredentials=!0),n.headers.forEach((h,p)=>o.setRequestHeader(h,p.join(","))),n.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){const h=n.detectContentTypeHeader();null!==h&&o.setRequestHeader("Content-Type",h)}if(n.responseType){const h=n.responseType.toLowerCase();o.responseType="json"!==h?h:"text"}const i=n.serializeBody();let s=null;const a=()=>{if(null!==s)return s;const h=o.statusText||"OK",p=new In(o.getAllResponseHeaders()),g=function iR(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(o)||n.url;return s=new Cd({headers:p,status:o.status,statusText:h,url:g}),s},l=()=>{let{headers:h,status:p,statusText:g,url:v}=a(),y=null;204!==p&&(y=typeof o.response>"u"?o.responseText:o.response),0===p&&(p=y?200:0);let E=p>=200&&p<300;if("json"===n.responseType&&"string"==typeof y){const m=y;y=y.replace(oR,"");try{y=""!==y?JSON.parse(y):null}catch(S){y=m,E&&(E=!1,y={error:S,text:y})}}E?(r.next(new Ma({body:y,headers:h,status:p,statusText:g,url:v||void 0})),r.complete()):r.error(new G_({error:y,headers:h,status:p,statusText:g,url:v||void 0}))},u=h=>{const{url:p}=a(),g=new G_({error:h,status:o.status||0,statusText:o.statusText||"Unknown Error",url:p||void 0});r.error(g)};let c=!1;const d=h=>{c||(r.next(a()),c=!0);let p={type:Re.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),"text"===n.responseType&&!!o.responseText&&(p.partialText=o.responseText),r.next(p)},f=h=>{let p={type:Re.UploadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),r.next(p)};return o.addEventListener("load",l),o.addEventListener("error",u),o.addEventListener("timeout",u),o.addEventListener("abort",u),n.reportProgress&&(o.addEventListener("progress",d),null!==i&&o.upload&&o.upload.addEventListener("progress",f)),o.send(i),r.next({type:Re.Sent}),()=>{o.removeEventListener("error",u),o.removeEventListener("abort",u),o.removeEventListener("load",l),o.removeEventListener("timeout",u),n.reportProgress&&(o.removeEventListener("progress",d),null!==i&&o.upload&&o.upload.removeEventListener("progress",f)),o.readyState!==o.DONE&&o.abort()}})}}return e.\u0275fac=function(n){return new(n||e)(A(m_))},e.\u0275prov=P({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ed=new x("XSRF_COOKIE_NAME"),bd=new x("XSRF_HEADER_NAME");class Q_{}let sR=(()=>{class e{constructor(n,r,o){this.doc=n,this.platform=r,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=a_(n,this.cookieName),this.lastCookieString=n),this.lastToken}}return e.\u0275fac=function(n){return new(n||e)(A(it),A(Oc),A(Ed))},e.\u0275prov=P({token:e,factory:e.\u0275fac}),e})(),Sd=(()=>{class e{constructor(n,r){this.tokenService=n,this.headerName=r}intercept(n,r){const o=n.url.toLowerCase();if("GET"===n.method||"HEAD"===n.method||o.startsWith("http://")||o.startsWith("https://"))return r.handle(n);const i=this.tokenService.getToken();return null!==i&&!n.headers.has(this.headerName)&&(n=n.clone({headers:n.headers.set(this.headerName,i)})),r.handle(n)}}return e.\u0275fac=function(n){return new(n||e)(A(Q_),A(bd))},e.\u0275prov=P({token:e,factory:e.\u0275fac}),e})(),aR=(()=>{class e{constructor(n,r){this.backend=n,this.injector=r,this.chain=null}handle(n){if(null===this.chain){const r=this.injector.get(W_,[]);this.chain=r.reduceRight((o,i)=>new z_(o,i),this.backend)}return this.chain.handle(n)}}return e.\u0275fac=function(n){return new(n||e)(A($_),A(Ct))},e.\u0275prov=P({token:e,factory:e.\u0275fac}),e})(),lR=(()=>{class e{static disable(){return{ngModule:e,providers:[{provide:Sd,useClass:rR}]}}static withOptions(n={}){return{ngModule:e,providers:[n.cookieName?{provide:Ed,useValue:n.cookieName}:[],n.headerName?{provide:bd,useValue:n.headerName}:[]]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=St({type:e}),e.\u0275inj=pt({providers:[Sd,{provide:W_,useExisting:Sd,multi:!0},{provide:Q_,useClass:sR},{provide:Ed,useValue:"XSRF-TOKEN"},{provide:bd,useValue:"X-XSRF-TOKEN"}]}),e})(),uR=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=St({type:e}),e.\u0275inj=pt({providers:[Ia,{provide:V_,useClass:aR},q_,{provide:$_,useExisting:q_}],imports:[lR.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class qt extends Ze{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){const n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){const{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}}const Aa=So(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}),{isArray:cR}=Array,{getPrototypeOf:dR,prototype:fR,keys:hR}=Object;function K_(e){if(1===e.length){const t=e[0];if(cR(t))return{args:t,keys:null};if(function pR(e){return e&&"object"==typeof e&&dR(e)===fR}(t)){const n=hR(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}const{isArray:gR}=Array;function Z_(e){return Q(t=>function mR(e,t){return gR(t)?e(...t):e(t)}(e,t))}function Y_(e,t){return e.reduce((n,r,o)=>(n[r]=t[o],n),{})}function J_(...e){const t=Io(e),n=ih(e),{args:r,keys:o}=K_(e);if(0===r.length)return Ie([],t);const i=new we(function yR(e,t,n=Nn){return r=>{X_(t,()=>{const{length:o}=e,i=new Array(o);let s=o,a=o;for(let l=0;l<o;l++)X_(t,()=>{const u=Ie(e[l],t);let c=!1;u.subscribe(Ee(r,d=>{i[l]=d,c||(c=!0,a--),a||r.next(n(i.slice()))},()=>{--s||r.complete()}))},r)},r)}}(r,t,o?s=>Y_(o,s):Nn));return n?i.pipe(Z_(n)):i}function X_(e,t,n){e?un(n,e,t):t()}function Md(...e){return function vR(){return Ar(1)}()(Ie(e,Io(e)))}function eD(e){return new we(t=>{Pt(e()).subscribe(t)})}function Gn(e,t){const n=le(e)?e:()=>e,r=o=>o.error(n());return new we(t?o=>t.schedule(r,0,o):r)}function Id(){return Me((e,t)=>{let n=null;e._refCount++;const r=Ee(t,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount)return void(n=null);const o=e._connection,i=n;n=null,o&&(!i||o===i)&&o.unsubscribe(),t.unsubscribe()});e.subscribe(r),r.closed||(n=e.connect())})}class tD extends we{constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,zf(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){const t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new dt;const n=this.getSubject();t.add(this.source.subscribe(Ee(n,void 0,()=>{this._teardown(),n.complete()},r=>{this._teardown(),n.error(r)},()=>this._teardown()))),t.closed&&(this._connection=null,t=dt.EMPTY)}return t}refCount(){return Id()(this)}}function sn(e,t){return Me((n,r)=>{let o=null,i=0,s=!1;const a=()=>s&&!o&&r.complete();n.subscribe(Ee(r,l=>{o?.unsubscribe();let u=0;const c=i++;Pt(e(l,c)).subscribe(o=Ee(r,d=>r.next(t?t(l,d,c,u++):d),()=>{o=null,a()}))},()=>{s=!0,a()}))})}function Ai(e){return e<=0?()=>cn:Me((t,n)=>{let r=0;t.subscribe(Ee(n,o=>{++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function Ta(e){return Me((t,n)=>{let r=!1;t.subscribe(Ee(n,o=>{r=!0,n.next(o)},()=>{r||n.next(e),n.complete()}))})}function nD(e=DR){return Me((t,n)=>{let r=!1;t.subscribe(Ee(n,o=>{r=!0,n.next(o)},()=>r?n.complete():n.error(e())))})}function DR(){return new Aa}function zn(e,t){const n=arguments.length>=2;return r=>r.pipe(e?on((o,i)=>e(o,i,r)):Nn,Ai(1),n?Ta(t):nD(()=>new Aa))}function Qe(e,t,n){const r=le(e)||t||n?{next:e,error:t,complete:n}:e;return r?Me((o,i)=>{var s;null===(s=r.subscribe)||void 0===s||s.call(r);let a=!0;o.subscribe(Ee(i,l=>{var u;null===(u=r.next)||void 0===u||u.call(r,l),i.next(l)},()=>{var l;a=!1,null===(l=r.complete)||void 0===l||l.call(r),i.complete()},l=>{var u;a=!1,null===(u=r.error)||void 0===u||u.call(r,l),i.error(l)},()=>{var l,u;a&&(null===(l=r.unsubscribe)||void 0===l||l.call(r)),null===(u=r.finalize)||void 0===u||u.call(r)}))}):Nn}function Qt(e){return Me((t,n)=>{let i,r=null,o=!1;r=t.subscribe(Ee(n,void 0,void 0,s=>{i=Pt(e(s,Qt(e)(t))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function CR(e,t,n,r,o){return(i,s)=>{let a=n,l=t,u=0;i.subscribe(Ee(s,c=>{const d=u++;l=a?e(l,c,d):(a=!0,c),r&&s.next(l)},o&&(()=>{a&&s.next(l),s.complete()})))}}function rD(e,t){return Me(CR(e,t,arguments.length>=2,!0))}function Ad(e){return e<=0?()=>cn:Me((t,n)=>{let r=[];t.subscribe(Ee(n,o=>{r.push(o),e<r.length&&r.shift()},()=>{for(const o of r)n.next(o);n.complete()},void 0,()=>{r=null}))})}function oD(e,t){const n=arguments.length>=2;return r=>r.pipe(e?on((o,i)=>e(o,i,r)):Nn,Ad(1),n?Ta(t):nD(()=>new Aa))}function Td(e){return Me((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}
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
       */const q="primary",Ti=Symbol("RouteTitle");class bR{constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){const n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){const n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}}function yo(e){return new bR(e)}function SR(e,t,n){const r=n.path.split("/");if(r.length>e.length||"full"===n.pathMatch&&(t.hasChildren()||r.length<e.length))return null;const o={};for(let i=0;i<r.length;i++){const s=r[i],a=e[i];if(s.startsWith(":"))o[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,r.length),posParams:o}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function an(e,t){const n=e?Object.keys(e):void 0,r=t?Object.keys(t):void 0;if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!iD(e[o],t[o]))return!1;return!0}function iD(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const n=[...e].sort(),r=[...t].sort();return n.every((o,i)=>r[i]===o)}return e===t}function sD(e){return Array.prototype.concat.apply([],e)}function aD(e){return e.length>0?e[e.length-1]:null}function je(e,t){for(const n in e)e.hasOwnProperty(n)&&t(e[n],n)}function Wn(e){return lc(e)?e:li(e)?Ie(Promise.resolve(e)):R(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const AR={exact:function cD(e,t,n){if(!_r(e.segments,t.segments)||!xa(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(const r in t.children)if(!e.children[r]||!cD(e.children[r],t.children[r],n))return!1;return!0},subset:dD},lD={exact:function TR(e,t){return an(e,t)},subset:function xR(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>iD(e[n],t[n]))},ignored:()=>!0};function uD(e,t,n){return AR[n.paths](e.root,t.root,n.matrixParams)&&lD[n.queryParams](e.queryParams,t.queryParams)&&!("exact"===n.fragment&&e.fragment!==t.fragment)}function dD(e,t,n){return fD(e,t,t.segments,n)}function fD(e,t,n,r){if(e.segments.length>n.length){const o=e.segments.slice(0,n.length);return!(!_r(o,n)||t.hasChildren()||!xa(o,n,r))}if(e.segments.length===n.length){if(!_r(e.segments,n)||!xa(e.segments,n,r))return!1;for(const o in t.children)if(!e.children[o]||!dD(e.children[o],t.children[o],r))return!1;return!0}{const o=n.slice(0,e.segments.length),i=n.slice(e.segments.length);return!!(_r(e.segments,o)&&xa(e.segments,o,r)&&e.children[q])&&fD(e.children[q],t,i,r)}}function xa(e,t,n){return t.every((r,o)=>lD[n](e[o].parameters,r.parameters))}class vr{constructor(t,n,r){this.root=t,this.queryParams=n,this.fragment=r}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=yo(this.queryParams)),this._queryParamMap}toString(){return FR.serialize(this)}}class K{constructor(t,n){this.segments=t,this.children=n,this.parent=null,je(n,(r,o)=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Na(this)}}class xi{constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap||(this._parameterMap=yo(this.parameters)),this._parameterMap}toString(){return mD(this)}}function _r(e,t){return e.length===t.length&&e.every((n,r)=>n.path===t[r].path)}let hD=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=P({token:e,factory:function(){return new Nd},providedIn:"root"}),e})();class Nd{parse(t){const n=new HR(t);return new vr(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){const n=`/${Ni(t.root,!0)}`,r=function kR(e){const t=Object.keys(e).map(n=>{const r=e[n];return Array.isArray(r)?r.map(o=>`${Ra(n)}=${Ra(o)}`).join("&"):`${Ra(n)}=${Ra(r)}`}).filter(n=>!!n);return t.length?`?${t.join("&")}`:""}(t.queryParams);return`${n}${r}${"string"==typeof t.fragment?`#${function PR(e){return encodeURI(e)}(t.fragment)}`:""}`}}const FR=new Nd;function Na(e){return e.segments.map(t=>mD(t)).join("/")}function Ni(e,t){if(!e.hasChildren())return Na(e);if(t){const n=e.children[q]?Ni(e.children[q],!1):"",r=[];return je(e.children,(o,i)=>{i!==q&&r.push(`${i}:${Ni(o,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}{const n=function RR(e,t){let n=[];return je(e.children,(r,o)=>{o===q&&(n=n.concat(t(r,o)))}),je(e.children,(r,o)=>{o!==q&&(n=n.concat(t(r,o)))}),n}(e,(r,o)=>o===q?[Ni(e.children[q],!1)]:[`${o}:${Ni(r,!1)}`]);return 1===Object.keys(e.children).length&&null!=e.children[q]?`${Na(e)}/${n[0]}`:`${Na(e)}/(${n.join("//")})`}}function pD(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ra(e){return pD(e).replace(/%3B/gi,";")}function Rd(e){return pD(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Fa(e){return decodeURIComponent(e)}function gD(e){return Fa(e.replace(/\+/g,"%20"))}function mD(e){return`${Rd(e.path)}${function OR(e){return Object.keys(e).map(t=>`;${Rd(t)}=${Rd(e[t])}`).join("")}(e.parameters)}`}const LR=/^[^\/()?;=#]+/;function Pa(e){const t=e.match(LR);return t?t[0]:""}const VR=/^[^=?&#]+/,jR=/^[^&#]+/;class HR{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new K([],{}):new K([],this.parseChildren())}parseQueryParams(){const t={};if(this.consumeOptional("?"))do{this.parseQueryParam(t)}while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(t.length>0||Object.keys(n).length>0)&&(r[q]=new K(t,n)),r}parseSegment(){const t=Pa(this.remaining);if(""===t&&this.peekStartsWith(";"))throw new C(4009,!1);return this.capture(t),new xi(Fa(t),this.parseMatrixParams())}parseMatrixParams(){const t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){const n=Pa(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){const o=Pa(this.remaining);o&&(r=o,this.capture(r))}t[Fa(n)]=Fa(r)}parseQueryParam(t){const n=function $R(e){const t=e.match(VR);return t?t[0]:""}(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){const s=function BR(e){const t=e.match(jR);return t?t[0]:""}(this.remaining);s&&(r=s,this.capture(r))}const o=gD(n),i=gD(r);if(t.hasOwnProperty(o)){let s=t[o];Array.isArray(s)||(s=[s],t[o]=s),s.push(i)}else t[o]=i}parseParens(t){const n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const r=Pa(this.remaining),o=this.remaining[r.length];if("/"!==o&&")"!==o&&";"!==o)throw new C(4010,!1);let i;r.indexOf(":")>-1?(i=r.slice(0,r.indexOf(":")),this.capture(i),this.capture(":")):t&&(i=q);const s=this.parseChildren();n[i]=1===Object.keys(s).length?s[q]:new K([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return!!this.peekStartsWith(t)&&(this.remaining=this.remaining.substring(t.length),!0)}capture(t){if(!this.consumeOptional(t))throw new C(4011,!1)}}function Fd(e){return e.segments.length>0?new K([],{[q]:e}):e}function Oa(e){const t={};for(const r of Object.keys(e.children)){const i=Oa(e.children[r]);(i.segments.length>0||i.hasChildren())&&(t[r]=i)}return function UR(e){if(1===e.numberOfChildren&&e.children[q]){const t=e.children[q];return new K(e.segments.concat(t.segments),t.children)}return e}(new K(e.segments,t))}function Dr(e){return e instanceof vr}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function WR(e,t,n,r,o){var i;if(0===n.length)return vo(t.root,t.root,t.root,r,o);const s=function _D(e){if("string"==typeof e[0]&&1===e.length&&"/"===e[0])return new vD(!0,0,e);let t=0,n=!1;const r=e.reduce((o,i,s)=>{if("object"==typeof i&&null!=i){if(i.outlets){const a={};return je(i.outlets,(l,u)=>{a[u]="string"==typeof l?l.split("/"):l}),[...o,{outlets:a}]}if(i.segmentPath)return[...o,i.segmentPath]}return"string"!=typeof i?[...o,i]:0===s?(i.split("/").forEach((a,l)=>{0==l&&"."===a||(0==l&&""===a?n=!0:".."===a?t++:""!=a&&o.push(a))}),o):[...o,i]},[]);return new vD(n,t,r)}(n);if(s.toRoot())return vo(t.root,t.root,new K([],{}),r,o);const l=function a(c){var d;const f=function QR(e,t,n,r){if(e.isAbsolute)return new _o(t.root,!0,0);if(-1===r)return new _o(n,n===t.root,0);return function DD(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new C(4005,!1);o=r.segments.length}return new _o(r,!1,o-i)}(n,r+(Ri(e.commands[0])?0:1),e.numberOfDoubleDots)}(s,t,null===(d=e.snapshot)||void 0===d?void 0:d._urlSegment,c),h=f.processChildren?Pi(f.segmentGroup,f.index,s.commands):Od(f.segmentGroup,f.index,s.commands);return vo(t.root,f.segmentGroup,h,r,o)}(null===(i=e.snapshot)||void 0===i?void 0:i._lastPathIndex);return l}function Ri(e){return"object"==typeof e&&null!=e&&!e.outlets&&!e.segmentPath}function Fi(e){return"object"==typeof e&&null!=e&&e.outlets}function vo(e,t,n,r,o){let s,i={};r&&je(r,(l,u)=>{i[u]=Array.isArray(l)?l.map(c=>`${c}`):`${l}`}),s=e===t?n:yD(e,t,n);const a=Fd(Oa(s));return new vr(a,i,o)}function yD(e,t,n){const r={};return je(e.children,(o,i)=>{r[i]=o===t?n:yD(o,t,n)}),new K(e.segments,r)}class vD{constructor(t,n,r){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=r,t&&r.length>0&&Ri(r[0]))throw new C(4003,!1);const o=r.find(Fi);if(o&&o!==aD(r))throw new C(4004,!1)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class _o{constructor(t,n,r){this.segmentGroup=t,this.processChildren=n,this.index=r}}function Od(e,t,n){if(e||(e=new K([],{})),0===e.segments.length&&e.hasChildren())return Pi(e,t,n);const r=function ZR(e,t,n){let r=0,o=t;const i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;const s=e.segments[o],a=n[r];if(Fi(a))break;const l=`${a}`,u=r<n.length-1?n[r+1]:null;if(o>0&&void 0===l)break;if(l&&u&&"object"==typeof u&&void 0===u.outlets){if(!wD(l,u,s))return i;r+=2}else{if(!wD(l,{},s))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){const i=new K(e.segments.slice(0,r.pathIndex),{});return i.children[q]=new K(e.segments.slice(r.pathIndex),e.children),Pi(i,0,o)}return r.match&&0===o.length?new K(e.segments,{}):r.match&&!e.hasChildren()?kd(e,t,n):r.match?Pi(e,0,o):kd(e,t,n)}function Pi(e,t,n){if(0===n.length)return new K(e.segments,{});{const r=function KR(e){return Fi(e[0])?e[0].outlets:{[q]:e}}(n),o={};return je(r,(i,s)=>{"string"==typeof i&&(i=[i]),null!==i&&(o[s]=Od(e.children[s],t,i))}),je(e.children,(i,s)=>{void 0===r[s]&&(o[s]=i)}),new K(e.segments,o)}}function kd(e,t,n){const r=e.segments.slice(0,t);let o=0;for(;o<n.length;){const i=n[o];if(Fi(i)){const l=YR(i.outlets);return new K(r,l)}if(0===o&&Ri(n[0])){r.push(new xi(e.segments[t].path,CD(n[0]))),o++;continue}const s=Fi(i)?i.outlets[q]:`${i}`,a=o<n.length-1?n[o+1]:null;s&&a&&Ri(a)?(r.push(new xi(s,CD(a))),o+=2):(r.push(new xi(s,{})),o++)}return new K(r,{})}function YR(e){const t={};return je(e,(n,r)=>{"string"==typeof n&&(n=[n]),null!==n&&(t[r]=kd(new K([],{}),0,n))}),t}function CD(e){const t={};return je(e,(n,r)=>t[r]=`${n}`),t}function wD(e,t,n){return e==n.path&&an(t,n.parameters)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Tn{constructor(t,n){this.id=t,this.url=n}}class Ld extends Tn{constructor(t,n,r="imperative",o=null){super(t,n),this.type=0,this.navigationTrigger=r,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class Cr extends Tn{constructor(t,n,r){super(t,n),this.urlAfterRedirects=r,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class ka extends Tn{constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class ED extends Tn{constructor(t,n,r,o){super(t,n),this.error=r,this.target=o,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class JR extends Tn{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class XR extends Tn{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class eF extends Tn{constructor(t,n,r,o,i){super(t,n),this.urlAfterRedirects=r,this.state=o,this.shouldActivate=i,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class tF extends Tn{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class nF extends Tn{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class rF{constructor(t){this.route=t,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class oF{constructor(t){this.route=t,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class iF{constructor(t){this.snapshot=t,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class sF{constructor(t){this.snapshot=t,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class aF{constructor(t){this.snapshot=t,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class lF{constructor(t){this.snapshot=t,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class bD{constructor(t,n,r){this.routerEvent=t,this.position=n,this.anchor=r,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class SD{constructor(t){this._root=t}get root(){return this._root.value}parent(t){const n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){const n=Vd(t,this._root);return n?n.children.map(r=>r.value):[]}firstChild(t){const n=Vd(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){const n=$d(t,this._root);return n.length<2?[]:n[n.length-2].children.map(o=>o.value).filter(o=>o!==t)}pathFromRoot(t){return $d(t,this._root).map(n=>n.value)}}function Vd(e,t){if(e===t.value)return t;for(const n of t.children){const r=Vd(e,n);if(r)return r}return null}function $d(e,t){if(e===t.value)return[t];for(const n of t.children){const r=$d(e,n);if(r.length)return r.unshift(t),r}return[]}class xn{constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}}function Do(e){const t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class MD extends SD{constructor(t,n){super(t),this.snapshot=n,jd(this,t)}toString(){return this.snapshot.toString()}}function ID(e,t){const n=function cF(e,t){const s=new La([],{},{},"",{},q,t,null,e.root,-1,{});return new TD("",new xn(s,[]))}(e,t),r=new qt([new xi("",{})]),o=new qt({}),i=new qt({}),s=new qt({}),a=new qt(""),l=new wr(r,o,s,a,i,q,t,n.root);return l.snapshot=n.root,new MD(new xn(l,[]),n)}class wr{constructor(t,n,r,o,i,s,a,l){var u,c;this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.title=null!==(u=null===(c=this.data)||void 0===c?void 0:c.pipe(Q(d=>d[Ti])))&&void 0!==u?u:R(void 0),this._futureSnapshot=l}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(Q(t=>yo(t)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(Q(t=>yo(t)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function AD(e,t="emptyOnly"){const n=e.pathFromRoot;let r=0;if("always"!==t)for(r=n.length-1;r>=1;){const o=n[r],i=n[r-1];if(o.routeConfig&&""===o.routeConfig.path)r--;else{if(i.component)break;r--}}return function dF(e){return e.reduce((t,n)=>{var r;return{params:{...t.params,...n.params},data:{...t.data,...n.data},resolve:{...n.data,...t.resolve,...null===(r=n.routeConfig)||void 0===r?void 0:r.data,...n._resolvedData}}},{params:{},data:{},resolve:{}})}(n.slice(r))}class La{constructor(t,n,r,o,i,s,a,l,u,c,d,f){var h;this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.title=null===(h=this.data)||void 0===h?void 0:h[Ti],this.routeConfig=l,this._urlSegment=u,this._lastPathIndex=c,this._correctedLastPathIndex=f??c,this._resolve=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=yo(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=yo(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class TD extends SD{constructor(t,n){super(n),this.url=t,jd(this,n)}toString(){return xD(this._root)}}function jd(e,t){t.value._routerState=e,t.children.forEach(n=>jd(e,n))}function xD(e){const t=e.children.length>0?` { ${e.children.map(xD).join(", ")} } `:"";return`${e.value}${t}`}function Bd(e){if(e.snapshot){const t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,an(t.queryParams,n.queryParams)||e.queryParams.next(n.queryParams),t.fragment!==n.fragment&&e.fragment.next(n.fragment),an(t.params,n.params)||e.params.next(n.params),function MR(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!an(e[n],t[n]))return!1;return!0}(t.url,n.url)||e.url.next(n.url),an(t.data,n.data)||e.data.next(n.data)}else e.snapshot=e._futureSnapshot,e.data.next(e._futureSnapshot.data)}function Hd(e,t){const n=an(e.params,t.params)&&function NR(e,t){return _r(e,t)&&e.every((n,r)=>an(n.parameters,t[r].parameters))}(e.url,t.url);return n&&!(!e.parent!=!t.parent)&&(!e.parent||Hd(e.parent,t.parent))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Oi(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){const r=n.value;r._futureSnapshot=t.value;const o=function hF(e,t,n){return t.children.map(r=>{for(const o of n.children)if(e.shouldReuseRoute(r.value,o.value.snapshot))return Oi(e,r,o);return Oi(e,r)})}(e,t,n);return new xn(r,o)}{if(e.shouldAttach(t.value)){const i=e.retrieve(t.value);if(null!==i){const s=i.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(a=>Oi(e,a)),s}}const r=function pF(e){return new wr(new qt(e.url),new qt(e.params),new qt(e.queryParams),new qt(e.fragment),new qt(e.data),e.outlet,e.component,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t.value),o=t.children.map(i=>Oi(e,i));return new xn(r,o)}}const Ud="ngNavigationCancelingError";function ND(e,t){const{redirectTo:n,navigationBehaviorOptions:r}=Dr(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,o=RD(!1,0,t);return o.url=n,o.navigationBehaviorOptions=r,o}function RD(e,t,n){const r=new Error("NavigationCancelingError: "+(e||""));return r[Ud]=!0,r.cancellationCode=t,n&&(r.url=n),r}function FD(e){return PD(e)&&Dr(e.url)}function PD(e){return e&&e[Ud]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class gF{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.injector=null,this.children=new ki,this.attachRef=null}}let ki=(()=>{class e{constructor(){this.contexts=new Map}onChildOutletCreated(n,r){const o=this.getOrCreateContext(n);o.outlet=r,this.contexts.set(n,o)}onChildOutletDestroyed(n){const r=this.getContext(n);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){const n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let r=this.getContext(n);return r||(r=new gF,this.contexts.set(n,r)),r}getContext(n){return this.contexts.get(n)||null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Va=!1;let OD=(()=>{class e{constructor(n,r,o,i,s){this.parentContexts=n,this.location=r,this.changeDetector=i,this.environmentInjector=s,this.activated=null,this._activatedRoute=null,this.activateEvents=new Ce,this.deactivateEvents=new Ce,this.attachEvents=new Ce,this.detachEvents=new Ce,this.name=o||q,n.onChildOutletCreated(this.name,this)}ngOnDestroy(){var n;(null===(n=this.parentContexts.getContext(this.name))||void 0===n?void 0:n.outlet)===this&&this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const n=this.parentContexts.getContext(this.name);n&&n.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new C(4012,Va);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new C(4012,Va);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new C(4012,Va);this.location.detach();const n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,r){this.activated=n,this._activatedRoute=r,this.location.insert(n.hostView),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){const n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,r){if(this.isActivated)throw new C(4013,Va);this._activatedRoute=n;const o=this.location,s=n._futureSnapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new mF(n,a,o.injector);if(r&&function yF(e){return!!e.resolveComponentFactory}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(r)){const u=r.resolveComponentFactory(s);this.activated=o.createComponent(u,o.length,l)}else this.activated=o.createComponent(s,{index:o.length,injector:l,environmentInjector:r??this.environmentInjector});this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return e.\u0275fac=function(n){return new(n||e)(_(ki),_(Ut),function Vo(e){return function sb(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const r=n.length;let o=0;for(;o<r;){const i=n[o];if(kh(i))break;if(0===i)o+=2;else if("number"==typeof i)for(o++;o<r&&"string"==typeof n[o];)o++;else{if(i===t)return n[o+1];o+=2}}}return null}(Fe(),e)}("name"),_(sa),_(Ln))},e.\u0275dir=V({type:e,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0}),e})();class mF{constructor(t,n,r){this.route=t,this.childContexts=n,this.parent=r}get(t,n){return t===wr?this.route:t===ki?this.childContexts:this.parent.get(t,n)}}let Gd=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=bt({type:e,selectors:[["ng-component"]],standalone:!0,features:[Ry],decls:1,vars:0,template:function(n,r){1&n&&J(0,"router-outlet")},dependencies:[OD],encapsulation:2}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function kD(e,t){var n;return e.providers&&!e._injector&&(e._injector=Ks(e.providers,t,`Route: ${e.path}`)),null!==(n=e._injector)&&void 0!==n?n:t}function Wd(e){const t=e.children&&e.children.map(Wd),n=t?{...e,children:t}:{...e};return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==q&&(n.component=Gd),n}function Ft(e){return e.outlet||q}function LD(e,t){const n=e.filter(r=>Ft(r)===t);return n.push(...e.filter(r=>Ft(r)!==t)),n}function Li(e){var t;if(!e)return null;if(null!==(t=e.routeConfig)&&void 0!==t&&t._injector)return e.routeConfig._injector;for(let n=e.parent;n;n=n.parent){const r=n.routeConfig;if(null!=r&&r._loadedInjector)return r._loadedInjector;if(null!=r&&r._injector)return r._injector}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class wF{constructor(t,n,r,o){this.routeReuseStrategy=t,this.futureState=n,this.currState=r,this.forwardEvent=o}activate(t){const n=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,r,t),Bd(this.futureState.root),this.activateChildRoutes(n,r,t)}deactivateChildRoutes(t,n,r){const o=Do(n);t.children.forEach(i=>{const s=i.value.outlet;this.deactivateRoutes(i,o[s],r),delete o[s]}),je(o,(i,s)=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(t,n,r){const o=t.value,i=n?n.value:null;if(o===i)if(o.component){const s=r.getContext(o.outlet);s&&this.deactivateChildRoutes(t,n,s.children)}else this.deactivateChildRoutes(t,n,r);else i&&this.deactivateRouteAndItsChildren(n,r)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){const r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=Do(t);for(const s of Object.keys(i))this.deactivateRouteAndItsChildren(i[s],o);if(r&&r.outlet){const s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:a})}}deactivateRouteAndOutlet(t,n){const r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=Do(t);for(const s of Object.keys(i))this.deactivateRouteAndItsChildren(i[s],o);r&&r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated(),r.attachRef=null,r.resolver=null,r.route=null)}activateChildRoutes(t,n,r){const o=Do(n);t.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],r),this.forwardEvent(new lF(i.value.snapshot))}),t.children.length&&this.forwardEvent(new sF(t.value.snapshot))}activateRoutes(t,n,r){const o=t.value,i=n?n.value:null;if(Bd(o),o===i)if(o.component){const a=r.getOrCreateContext(o.outlet);this.activateChildRoutes(t,n,a.children)}else this.activateChildRoutes(t,n,r);else if(o.component){const a=r.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){const l=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),a.children.onOutletReAttached(l.contexts),a.attachRef=l.componentRef,a.route=l.route.value,a.outlet&&a.outlet.attach(l.componentRef,l.route.value),Bd(l.route.value),this.activateChildRoutes(t,null,a.children)}else{var s;const l=Li(o.snapshot),u=null!==(s=l?.get(Xo))&&void 0!==s?s:null;a.attachRef=null,a.route=o,a.resolver=u,a.injector=l,a.outlet&&a.outlet.activateWith(o,a.injector),this.activateChildRoutes(t,null,a.children)}}else this.activateChildRoutes(t,null,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class VD{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}}class $a{constructor(t,n){this.component=t,this.route=n}}function EF(e,t,n){const r=e._root;return Vi(r,t?t._root:null,n,[r.value])}function Co(e,t){const n=Symbol(),r=t.get(e,n);return r===n?"function"!=typeof e||function uE(e){return null!==Xi(e)}(e)?t.get(e):e:r}function Vi(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){const i=Do(t);return e.children.forEach(s=>{(function SF(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){const i=e.value,s=t?t.value:null,a=n?n.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){const l=function MF(e,t,n){if("function"==typeof n)return n(e,t);switch(n){case"pathParamsChange":return!_r(e.url,t.url);case"pathParamsOrQueryParamsChange":return!_r(e.url,t.url)||!an(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Hd(e,t)||!an(e.queryParams,t.queryParams);default:return!Hd(e,t)}}(s,i,i.routeConfig.runGuardsAndResolvers);l?o.canActivateChecks.push(new VD(r)):(i.data=s.data,i._resolvedData=s._resolvedData),Vi(e,t,i.component?a?a.children:null:n,r,o),l&&a&&a.outlet&&a.outlet.isActivated&&o.canDeactivateChecks.push(new $a(a.outlet.component,s))}else s&&$i(t,a,o),o.canActivateChecks.push(new VD(r)),Vi(e,null,i.component?a?a.children:null:n,r,o)})(s,i[s.value.outlet],n,r.concat([s.value]),o),delete i[s.value.outlet]}),je(i,(s,a)=>$i(s,n.getContext(a),o)),o}function $i(e,t,n){const r=Do(e),o=e.value;je(r,(i,s)=>{$i(i,o.component?t?t.children.getContext(s):null:t,n)}),n.canDeactivateChecks.push(new $a(o.component&&t&&t.outlet&&t.outlet.isActivated?t.outlet.component:null,o))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ji(e){return"function"==typeof e}function qd(e){return e instanceof Aa||"EmptyError"===e?.name}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ja=Symbol("INITIAL_VALUE");function wo(){return sn(e=>J_(e.map(t=>t.pipe(Ai(1),function _R(...e){const t=Io(e);return Me((n,r)=>{(t?Md(e,n,t):Md(e,n)).subscribe(r)})}(ja)))).pipe(Q(t=>{for(const n of t)if(!0!==n){if(n===ja)return ja;if(!1===n||n instanceof vr)return n}return!0}),on(t=>t!==ja),Ai(1)))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $D(e){return function Aw(...e){return Hf(e)}(Qe(t=>{if(Dr(t))throw ND(0,t)}),Q(t=>!0===t))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Qd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function jD(e,t,n,r,o){const i=Kd(e,t,n);return i.matched?function UF(e,t,n,r){const o=t.canMatch;return o&&0!==o.length?R(o.map(s=>{const a=Co(s,e);return Wn(function RF(e){return e&&ji(e.canMatch)}(a)?a.canMatch(t,n):e.runInContext(()=>a(t,n)))})).pipe(wo(),$D()):R(!0)}(r=kD(t,r),t,n).pipe(Q(s=>!0===s?i:{...Qd})):R(i)}function Kd(e,t,n){var r;if(""===t.path)return"full"===t.pathMatch&&(e.hasChildren()||n.length>0)?{...Qd}:{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};const i=(t.matcher||SR)(n,e,t);if(!i)return{...Qd};const s={};je(i.posParams,(l,u)=>{s[u]=l.path});const a=i.consumed.length>0?{...s,...i.consumed[i.consumed.length-1].parameters}:s;return{matched:!0,consumedSegments:i.consumed,remainingSegments:n.slice(i.consumed.length),parameters:a,positionalParamSegments:null!==(r=i.posParams)&&void 0!==r?r:{}}}function Ba(e,t,n,r,o="corrected"){if(n.length>0&&function WF(e,t,n){return n.some(r=>Ha(e,t,r)&&Ft(r)!==q)}(e,n,r)){const s=new K(t,function zF(e,t,n,r){const o={};o[q]=r,r._sourceSegment=e,r._segmentIndexShift=t.length;for(const i of n)if(""===i.path&&Ft(i)!==q){const s=new K([],{});s._sourceSegment=e,s._segmentIndexShift=t.length,o[Ft(i)]=s}return o}(e,t,r,new K(n,e.children)));return s._sourceSegment=e,s._segmentIndexShift=t.length,{segmentGroup:s,slicedSegments:[]}}if(0===n.length&&function qF(e,t,n){return n.some(r=>Ha(e,t,r))}(e,n,r)){const s=new K(e.segments,function GF(e,t,n,r,o,i){const s={};for(const a of r)if(Ha(e,n,a)&&!o[Ft(a)]){const l=new K([],{});l._sourceSegment=e,l._segmentIndexShift="legacy"===i?e.segments.length:t.length,s[Ft(a)]=l}return{...o,...s}}(e,t,n,r,e.children,o));return s._sourceSegment=e,s._segmentIndexShift=t.length,{segmentGroup:s,slicedSegments:n}}const i=new K(e.segments,e.children);return i._sourceSegment=e,i._segmentIndexShift=t.length,{segmentGroup:i,slicedSegments:n}}function Ha(e,t,n){return(!(e.hasChildren()||t.length>0)||"full"!==n.pathMatch)&&""===n.path}function BD(e,t,n,r){return!!(Ft(e)===r||r!==q&&Ha(t,n,e))&&("**"===e.path||Kd(t,e,n).matched)}function HD(e,t,n){return 0===t.length&&!e.children[n]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ua=!1;class Ga{constructor(t){this.segmentGroup=t||null}}class UD{constructor(t){this.urlTree=t}}function Bi(e){return Gn(new Ga(e))}function GD(e){return Gn(new UD(e))}class YF{constructor(t,n,r,o,i){this.injector=t,this.configLoader=n,this.urlSerializer=r,this.urlTree=o,this.config=i,this.allowRedirects=!0}apply(){const t=Ba(this.urlTree.root,[],[],this.config).segmentGroup,n=new K(t.segments,t.children);return this.expandSegmentGroup(this.injector,this.config,n,q).pipe(Q(i=>this.createUrlTree(Oa(i),this.urlTree.queryParams,this.urlTree.fragment))).pipe(Qt(i=>{if(i instanceof UD)return this.allowRedirects=!1,this.match(i.urlTree);throw i instanceof Ga?this.noMatchError(i):i}))}match(t){return this.expandSegmentGroup(this.injector,this.config,t.root,q).pipe(Q(o=>this.createUrlTree(Oa(o),t.queryParams,t.fragment))).pipe(Qt(o=>{throw o instanceof Ga?this.noMatchError(o):o}))}noMatchError(t){return new C(4002,Ua)}createUrlTree(t,n,r){const o=Fd(t);return new vr(o,n,r)}expandSegmentGroup(t,n,r,o){return 0===r.segments.length&&r.hasChildren()?this.expandChildren(t,n,r).pipe(Q(i=>new K([],i))):this.expandSegment(t,r,n,r.segments,o,!0)}expandChildren(t,n,r){const o=[];for(const i of Object.keys(r.children))"primary"===i?o.unshift(i):o.push(i);return Ie(o).pipe(Un(i=>{const s=r.children[i],a=LD(n,i);return this.expandSegmentGroup(t,a,s,i).pipe(Q(l=>({segment:l,outlet:i})))}),rD((i,s)=>(i[s.outlet]=s.segment,i),{}),oD())}expandSegment(t,n,r,o,i,s){return Ie(r).pipe(Un(a=>this.expandSegmentAgainstRoute(t,n,r,a,o,i,s).pipe(Qt(u=>{if(u instanceof Ga)return R(null);throw u}))),zn(a=>!!a),Qt((a,l)=>{if(qd(a))return HD(n,o,i)?R(new K([],{})):Bi(n);throw a}))}expandSegmentAgainstRoute(t,n,r,o,i,s,a){return BD(o,n,i,s)?void 0===o.redirectTo?this.matchSegmentAgainstRoute(t,n,o,i,s):a&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s):Bi(n):Bi(n)}expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s){return"**"===o.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(t,r,o,s):this.expandRegularSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s)}expandWildCardWithParamsAgainstRouteUsingRedirect(t,n,r,o){const i=this.applyRedirectCommands([],r.redirectTo,{});return r.redirectTo.startsWith("/")?GD(i):this.lineralizeSegments(r,i).pipe($e(s=>{const a=new K(s,{});return this.expandSegment(t,a,n,s,o,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s){const{matched:a,consumedSegments:l,remainingSegments:u,positionalParamSegments:c}=Kd(n,o,i);if(!a)return Bi(n);const d=this.applyRedirectCommands(l,o.redirectTo,c);return o.redirectTo.startsWith("/")?GD(d):this.lineralizeSegments(o,d).pipe($e(f=>this.expandSegment(t,n,r,f.concat(u),s,!1)))}matchSegmentAgainstRoute(t,n,r,o,i){return"**"===r.path?(t=kD(r,t),r.loadChildren?(r._loadedRoutes?R({routes:r._loadedRoutes,injector:r._loadedInjector}):this.configLoader.loadChildren(t,r)).pipe(Q(a=>(r._loadedRoutes=a.routes,r._loadedInjector=a.injector,new K(o,{})))):R(new K(o,{}))):jD(n,r,o,t).pipe(sn(({matched:s,consumedSegments:a,remainingSegments:l})=>{var u;return s?(t=null!==(u=r._injector)&&void 0!==u?u:t,this.getChildConfig(t,r,o).pipe($e(d=>{var f;const h=null!==(f=d.injector)&&void 0!==f?f:t,p=d.routes,{segmentGroup:g,slicedSegments:v}=Ba(n,a,l,p),y=new K(g.segments,g.children);if(0===v.length&&y.hasChildren())return this.expandChildren(h,p,y).pipe(Q(U=>new K(a,U)));if(0===p.length&&0===v.length)return R(new K(a,{}));const E=Ft(r)===i;return this.expandSegment(h,y,p,v,E?q:i,!0).pipe(Q(S=>new K(a.concat(S.segments),S.children)))}))):Bi(n)}))}getChildConfig(t,n,r){return n.children?R({routes:n.children,injector:t}):n.loadChildren?void 0!==n._loadedRoutes?R({routes:n._loadedRoutes,injector:n._loadedInjector}):function HF(e,t,n,r){const o=t.canLoad;return void 0===o||0===o.length?R(!0):R(o.map(s=>{const a=Co(s,e);return Wn(function AF(e){return e&&ji(e.canLoad)}(a)?a.canLoad(t,n):e.runInContext(()=>a(t,n)))})).pipe(wo(),$D())}(t,n,r).pipe($e(o=>o?this.configLoader.loadChildren(t,n).pipe(Qe(i=>{n._loadedRoutes=i.routes,n._loadedInjector=i.injector})):function KF(e){return Gn(RD(Ua,3))}())):R({routes:[],injector:t})}lineralizeSegments(t,n){let r=[],o=n.root;for(;;){if(r=r.concat(o.segments),0===o.numberOfChildren)return R(r);if(o.numberOfChildren>1||!o.children[q])return Gn(new C(4e3,Ua));o=o.children[q]}}applyRedirectCommands(t,n,r){return this.applyRedirectCreateUrlTree(n,this.urlSerializer.parse(n),t,r)}applyRedirectCreateUrlTree(t,n,r,o){const i=this.createSegmentGroup(t,n.root,r,o);return new vr(i,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){const r={};return je(t,(o,i)=>{if("string"==typeof o&&o.startsWith(":")){const a=o.substring(1);r[i]=n[a]}else r[i]=o}),r}createSegmentGroup(t,n,r,o){const i=this.createSegments(t,n.segments,r,o);let s={};return je(n.children,(a,l)=>{s[l]=this.createSegmentGroup(t,a,r,o)}),new K(i,s)}createSegments(t,n,r,o){return n.map(i=>i.path.startsWith(":")?this.findPosParam(t,i,o):this.findOrReturn(i,r))}findPosParam(t,n,r){const o=r[n.path.substring(1)];if(!o)throw new C(4001,Ua);return o}findOrReturn(t,n){let r=0;for(const o of n){if(o.path===t.path)return n.splice(r),o;r++}return t}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class XF{}class nP{constructor(t,n,r,o,i,s,a,l){this.injector=t,this.rootComponentType=n,this.config=r,this.urlTree=o,this.url=i,this.paramsInheritanceStrategy=s,this.relativeLinkResolution=a,this.urlSerializer=l}recognize(){const t=Ba(this.urlTree.root,[],[],this.config.filter(n=>void 0===n.redirectTo),this.relativeLinkResolution).segmentGroup;return this.processSegmentGroup(this.injector,this.config,t,q).pipe(Q(n=>{if(null===n)return null;const r=new La([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},q,this.rootComponentType,null,this.urlTree.root,-1,{}),o=new xn(r,n),i=new TD(this.url,o);return this.inheritParamsAndData(i._root),i}))}inheritParamsAndData(t){const n=t.value,r=AD(n,this.paramsInheritanceStrategy);n.params=Object.freeze(r.params),n.data=Object.freeze(r.data),t.children.forEach(o=>this.inheritParamsAndData(o))}processSegmentGroup(t,n,r,o){return 0===r.segments.length&&r.hasChildren()?this.processChildren(t,n,r):this.processSegment(t,n,r,r.segments,o)}processChildren(t,n,r){return Ie(Object.keys(r.children)).pipe(Un(o=>{const i=r.children[o],s=LD(n,o);return this.processSegmentGroup(t,s,i,o)}),rD((o,i)=>o&&i?(o.push(...i),o):null),function wR(e,t=!1){return Me((n,r)=>{let o=0;n.subscribe(Ee(r,i=>{const s=e(i,o++);(s||t)&&r.next(i),!s&&r.complete()}))})}(o=>null!==o),Ta(null),oD(),Q(o=>{if(null===o)return null;const i=zD(o);return function rP(e){e.sort((t,n)=>t.value.outlet===q?-1:n.value.outlet===q?1:t.value.outlet.localeCompare(n.value.outlet))}(i),i}))}processSegment(t,n,r,o,i){return Ie(n).pipe(Un(s=>{var a;return this.processSegmentAgainstRoute(null!==(a=s._injector)&&void 0!==a?a:t,s,r,o,i)}),zn(s=>!!s),Qt(s=>{if(qd(s))return HD(r,o,i)?R([]):R(null);throw s}))}processSegmentAgainstRoute(t,n,r,o,i){if(n.redirectTo||!BD(n,r,o,i))return R(null);let s;if("**"===n.path){var a,l;const u=o.length>0?aD(o).parameters:{},c=qD(r)+o.length;s=R({snapshot:new La(o,u,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,KD(n),Ft(n),null!==(a=null!==(l=n.component)&&void 0!==l?l:n._loadedComponent)&&void 0!==a?a:null,n,WD(r),c,ZD(n),c),consumedSegments:[],remainingSegments:[]})}else s=jD(r,n,o,t).pipe(Q(({matched:u,consumedSegments:c,remainingSegments:d,parameters:f})=>{var h,p;if(!u)return null;const g=qD(r)+c.length;return{snapshot:new La(c,f,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,KD(n),Ft(n),null!==(h=null!==(p=n.component)&&void 0!==p?p:n._loadedComponent)&&void 0!==h?h:null,n,WD(r),g,ZD(n),g),consumedSegments:c,remainingSegments:d}}));return s.pipe(sn(u=>{var c,d;if(null===u)return R(null);const{snapshot:f,consumedSegments:h,remainingSegments:p}=u;t=null!==(c=n._injector)&&void 0!==c?c:t;const g=null!==(d=n._loadedInjector)&&void 0!==d?d:t,v=function oP(e){return e.children?e.children:e.loadChildren?e._loadedRoutes:[]}(n),{segmentGroup:y,slicedSegments:E}=Ba(r,h,p,v.filter(S=>void 0===S.redirectTo),this.relativeLinkResolution);if(0===E.length&&y.hasChildren())return this.processChildren(g,v,y).pipe(Q(S=>null===S?null:[new xn(f,S)]));if(0===v.length&&0===E.length)return R([new xn(f,[])]);const m=Ft(n)===i;return this.processSegment(g,v,y,E,m?q:i).pipe(Q(S=>null===S?null:[new xn(f,S)]))}))}}function iP(e){const t=e.value.routeConfig;return t&&""===t.path&&void 0===t.redirectTo}function zD(e){const t=[],n=new Set;for(const r of e){if(!iP(r)){t.push(r);continue}const o=t.find(i=>r.value.routeConfig===i.value.routeConfig);void 0!==o?(o.children.push(...r.children),n.add(o)):t.push(r)}for(const r of n){const o=zD(r.children);t.push(new xn(r.value,o))}return t.filter(r=>!n.has(r))}function WD(e){let t=e;for(;t._sourceSegment;)t=t._sourceSegment;return t}function qD(e){var t;let n=e,r=null!==(t=n._segmentIndexShift)&&void 0!==t?t:0;for(;n._sourceSegment;){var o;n=n._sourceSegment,r+=null!==(o=n._segmentIndexShift)&&void 0!==o?o:0}return r-1}function KD(e){return e.data||{}}function ZD(e){return e.resolve||{}}
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
       */function Zd(e){return sn(t=>{const n=e(t);return n?Ie(n).pipe(Q(()=>t)):R(t)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let JD=(()=>{class e{buildTitle(n){let r,o=n.root;for(;void 0!==o;){var i;r=null!==(i=this.getResolvedTitleForRoute(o))&&void 0!==i?i:r,o=o.children.find(s=>s.outlet===q)}return r}getResolvedTitleForRoute(n){return n.data[Ti]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=P({token:e,factory:function(){return be(XD)},providedIn:"root"}),e})(),XD=(()=>{class e extends JD{constructor(n){super(),this.title=n}updateTitle(n){const r=this.buildTitle(n);void 0!==r&&this.title.setTitle(r)}}return e.\u0275fac=function(n){return new(n||e)(A(O_))},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
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
       */const Wa=new x("",{providedIn:"root",factory:()=>({})}),Yd=new x("ROUTES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Jd=(()=>{class e{constructor(n,r){this.injector=n,this.compiler=r,this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap}loadComponent(n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return R(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);const r=Wn(n.loadComponent()).pipe(Qe(i=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=i}),Td(()=>{this.componentLoaders.delete(n)})),o=new tD(r,()=>new Ze).pipe(Id());return this.componentLoaders.set(n,o),o}loadChildren(n,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return R({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);const i=this.loadModuleFactoryOrRoutes(r.loadChildren).pipe(Q(a=>{this.onLoadEndListener&&this.onLoadEndListener(r);let l,u,c=!1;Array.isArray(a)?u=a:(l=a.create(n).injector,u=sD(l.get(Yd,[],O.Self|O.Optional)));return{routes:u.map(Wd),injector:l}}),Td(()=>{this.childrenLoaders.delete(r)})),s=new tD(i,()=>new Ze).pipe(Id());return this.childrenLoaders.set(r,s),s}loadModuleFactoryOrRoutes(n){return Wn(n()).pipe($e(r=>r instanceof xy||Array.isArray(r)?R(r):Ie(this.compiler.compileModuleAsync(r))))}}return e.\u0275fac=function(n){return new(n||e)(A(Ct),A(kc))},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
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
       */function _P(e){throw e}function DP(e,t,n){return t.parse("/")}const CP={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},wP={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function tC(){var e,t;const n=be(hD),r=be(ki),o=be(Yc),i=be(Ct),s=be(kc),a=null!==(e=be(Yd,{optional:!0}))&&void 0!==e?e:[],l=null!==(t=be(Wa,{optional:!0}))&&void 0!==t?t:{},u=be(XD),c=be(JD,{optional:!0}),d=be(yP,{optional:!0}),f=be(hP,{optional:!0}),h=new Be(null,n,r,o,i,s,sD(a));return d&&(h.urlHandlingStrategy=d),f&&(h.routeReuseStrategy=f),h.titleStrategy=c??u,function EP(e,t){e.errorHandler&&(t.errorHandler=e.errorHandler),e.malformedUriErrorHandler&&(t.malformedUriErrorHandler=e.malformedUriErrorHandler),e.onSameUrlNavigation&&(t.onSameUrlNavigation=e.onSameUrlNavigation),e.paramsInheritanceStrategy&&(t.paramsInheritanceStrategy=e.paramsInheritanceStrategy),e.relativeLinkResolution&&(t.relativeLinkResolution=e.relativeLinkResolution),e.urlUpdateStrategy&&(t.urlUpdateStrategy=e.urlUpdateStrategy),e.canceledNavigationResolution&&(t.canceledNavigationResolution=e.canceledNavigationResolution)}(l,h),h}let Be=(()=>{class e{constructor(n,r,o,i,s,a,l){this.rootComponentType=n,this.urlSerializer=r,this.rootContexts=o,this.location=i,this.config=l,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new Ze,this.errorHandler=_P,this.malformedUriErrorHandler=DP,this.navigated=!1,this.lastSuccessfulId=-1,this.afterPreactivation=()=>R(void 0),this.urlHandlingStrategy=new vP,this.routeReuseStrategy=new gP,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.configLoader=s.get(Jd),this.configLoader.onLoadEndListener=f=>this.triggerEvent(new oF(f)),this.configLoader.onLoadStartListener=f=>this.triggerEvent(new rF(f)),this.ngModule=s.get(gr),this.console=s.get(zT);const d=s.get(ke);this.isNgZoneEnabled=d instanceof ke&&ke.isInAngularZone(),this.resetConfig(l),this.currentUrlTree=function IR(){return new vr(new K([],{}),{},null)}(),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=ID(this.currentUrlTree,this.rootComponentType),this.transitions=new qt({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){var n;return null===(n=this.location.getState())||void 0===n?void 0:n.\u0275routerPageId}setupNavigations(n){const r=this.events;return n.pipe(on(o=>0!==o.id),Q(o=>({...o,extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),sn(o=>{let i=!1,s=!1;return R(o).pipe(Qe(a=>{this.currentNavigation={id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,trigger:a.source,extras:a.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),sn(a=>{const l=this.browserUrlTree.toString(),u=!this.navigated||a.extractedUrl.toString()!==l||l!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||u)&&this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return nC(a.source)&&(this.browserUrlTree=a.extractedUrl),R(a).pipe(sn(d=>{const f=this.transitions.getValue();return r.next(new Ld(d.id,this.serializeUrl(d.extractedUrl),d.source,d.restoredState)),f!==this.transitions.getValue()?cn:Promise.resolve(d)}),function JF(e,t,n,r){return sn(o=>function ZF(e,t,n,r,o){return new YF(e,t,n,r,o).apply()}(e,t,n,o.extractedUrl,r).pipe(Q(i=>({...o,urlAfterRedirects:i}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),Qe(d=>{this.currentNavigation={...this.currentNavigation,finalUrl:d.urlAfterRedirects},o.urlAfterRedirects=d.urlAfterRedirects}),function aP(e,t,n,r,o,i){return $e(s=>function tP(e,t,n,r,o,i,s="emptyOnly",a="legacy"){return new nP(e,t,n,r,o,s,a,i).recognize().pipe(sn(l=>null===l?function eP(e){return new we(t=>t.error(e))}(new XF):R(l)))}(e,t,n,s.urlAfterRedirects,r.serialize(s.urlAfterRedirects),r,o,i).pipe(Q(a=>({...s,targetSnapshot:a}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.ngModule.injector,this.rootComponentType,this.config,this.urlSerializer,this.paramsInheritanceStrategy,this.relativeLinkResolution),Qe(d=>{if(o.targetSnapshot=d.targetSnapshot,"eager"===this.urlUpdateStrategy){if(!d.extras.skipLocationChange){const h=this.urlHandlingStrategy.merge(d.urlAfterRedirects,d.rawUrl);this.setBrowserUrl(h,d)}this.browserUrlTree=d.urlAfterRedirects}const f=new JR(d.id,this.serializeUrl(d.extractedUrl),this.serializeUrl(d.urlAfterRedirects),d.targetSnapshot);r.next(f)}));if(u&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:f,extractedUrl:h,source:p,restoredState:g,extras:v}=a,y=new Ld(f,this.serializeUrl(h),p,g);r.next(y);const E=ID(h,this.rootComponentType).snapshot;return R(o={...a,targetSnapshot:E,urlAfterRedirects:h,extras:{...v,skipLocationChange:!1,replaceUrl:!1}})}return this.rawUrlTree=a.rawUrl,a.resolve(null),cn}),Qe(a=>{const l=new XR(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot);this.triggerEvent(l)}),Q(a=>o={...a,guards:EF(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),function PF(e,t){return $e(n=>{const{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return 0===s.length&&0===i.length?R({...n,guardsResult:!0}):function OF(e,t,n,r){return Ie(e).pipe($e(o=>function BF(e,t,n,r,o){const i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;return i&&0!==i.length?R(i.map(a=>{var l;const u=null!==(l=Li(t))&&void 0!==l?l:o,c=Co(a,u);return Wn(function NF(e){return e&&ji(e.canDeactivate)}(c)?c.canDeactivate(e,t,n,r):u.runInContext(()=>c(e,t,n,r))).pipe(zn())})).pipe(wo()):R(!0)}(o.component,o.route,n,t,r)),zn(o=>!0!==o,!0))}(s,r,o,e).pipe($e(a=>a&&function IF(e){return"boolean"==typeof e}(a)?function kF(e,t,n,r){return Ie(t).pipe(Un(o=>Md(function VF(e,t){return null!==e&&t&&t(new iF(e)),R(!0)}(o.route.parent,r),function LF(e,t){return null!==e&&t&&t(new aF(e)),R(!0)}(o.route,r),function jF(e,t,n){const r=t[t.length-1],i=t.slice(0,t.length-1).reverse().map(s=>function bF(e){const t=e.routeConfig?e.routeConfig.canActivateChild:null;return t&&0!==t.length?{node:e,guards:t}:null}(s)).filter(s=>null!==s).map(s=>eD(()=>R(s.guards.map(l=>{var u;const c=null!==(u=Li(s.node))&&void 0!==u?u:n,d=Co(l,c);return Wn(function xF(e){return e&&ji(e.canActivateChild)}(d)?d.canActivateChild(r,e):c.runInContext(()=>d(r,e))).pipe(zn())})).pipe(wo())));return R(i).pipe(wo())}(e,o.path,n),function $F(e,t,n){const r=t.routeConfig?t.routeConfig.canActivate:null;if(!r||0===r.length)return R(!0);const o=r.map(i=>eD(()=>{var s;const a=null!==(s=Li(t))&&void 0!==s?s:n,l=Co(i,a);return Wn(function TF(e){return e&&ji(e.canActivate)}(l)?l.canActivate(t,e):a.runInContext(()=>l(t,e))).pipe(zn())}));return R(o).pipe(wo())}(e,o.route,n))),zn(o=>!0!==o,!0))}(r,i,e,t):R(a)),Q(a=>({...n,guardsResult:a})))})}(this.ngModule.injector,a=>this.triggerEvent(a)),Qe(a=>{if(o.guardsResult=a.guardsResult,Dr(a.guardsResult))throw ND(0,a.guardsResult);const l=new eF(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);this.triggerEvent(l)}),on(a=>!!a.guardsResult||(this.restoreHistory(a),this.cancelNavigationTransition(a,"",3),!1)),Zd(a=>{if(a.guards.canActivateChecks.length)return R(a).pipe(Qe(l=>{const u=new tF(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(l.urlAfterRedirects),l.targetSnapshot);this.triggerEvent(u)}),sn(l=>{let u=!1;return R(l).pipe(function lP(e,t){return $e(n=>{const{targetSnapshot:r,guards:{canActivateChecks:o}}=n;if(!o.length)return R(n);let i=0;return Ie(o).pipe(Un(s=>function uP(e,t,n,r){const o=e.routeConfig,i=e._resolve;return void 0!==o?.title&&!YD(o)&&(i[Ti]=o.title),function cP(e,t,n,r){const o=function dP(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}(e);if(0===o.length)return R({});const i={};return Ie(o).pipe($e(s=>function fP(e,t,n,r){var o;const i=null!==(o=Li(t))&&void 0!==o?o:r,s=Co(e,i);return Wn(s.resolve?s.resolve(t,n):i.runInContext(()=>s(t,n)))}(e[s],t,n,r).pipe(zn(),Qe(a=>{i[s]=a}))),Ad(1),function ER(e){return Q(()=>e)}(i),Qt(s=>qd(s)?cn:Gn(s)))}(i,e,t,r).pipe(Q(s=>(e._resolvedData=s,e.data=AD(e,n).resolve,o&&YD(o)&&(e.data[Ti]=o.title),null)))}(s.route,r,e,t)),Qe(()=>i++),Ad(1),$e(s=>i===o.length?R(n):cn))})}(this.paramsInheritanceStrategy,this.ngModule.injector),Qe({next:()=>u=!0,complete:()=>{u||(this.restoreHistory(l),this.cancelNavigationTransition(l,"",2))}}))}),Qe(l=>{const u=new nF(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(l.urlAfterRedirects),l.targetSnapshot);this.triggerEvent(u)}))}),Zd(a=>{const l=u=>{var c;const d=[];null!==(c=u.routeConfig)&&void 0!==c&&c.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(Qe(f=>{u.component=f}),Q(()=>{})));for(const f of u.children)d.push(...l(f));return d};return J_(l(a.targetSnapshot.root)).pipe(Ta(),Ai(1))}),Zd(()=>this.afterPreactivation()),Q(a=>{const l=function fF(e,t,n){const r=Oi(e,t._root,n?n._root:void 0);return new MD(r,t)}(this.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return o={...a,targetRouterState:l}}),Qe(a=>{this.currentUrlTree=a.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(a.urlAfterRedirects,a.rawUrl),this.routerState=a.targetRouterState,"deferred"===this.urlUpdateStrategy&&(a.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,a),this.browserUrlTree=a.urlAfterRedirects)}),((e,t,n)=>Q(r=>(new wF(t,r.targetRouterState,r.currentRouterState,n).activate(e),r)))(this.rootContexts,this.routeReuseStrategy,a=>this.triggerEvent(a)),Qe({next(){i=!0},complete(){i=!0}}),Td(()=>{var a;i||s||this.cancelNavigationTransition(o,"",1),(null===(a=this.currentNavigation)||void 0===a?void 0:a.id)===o.id&&(this.currentNavigation=null)}),Qt(a=>{if(s=!0,PD(a)){FD(a)||(this.navigated=!0,this.restoreHistory(o,!0));const u=new ka(o.id,this.serializeUrl(o.extractedUrl),a.message,a.cancellationCode);if(r.next(u),FD(a)){const c=this.urlHandlingStrategy.merge(a.url,this.rawUrlTree),d={skipLocationChange:o.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||nC(o.source)};this.scheduleNavigation(c,"imperative",null,d,{resolve:o.resolve,reject:o.reject,promise:o.promise})}else o.resolve(!1)}else{var l;this.restoreHistory(o,!0);const u=new ED(o.id,this.serializeUrl(o.extractedUrl),a,null!==(l=o.targetSnapshot)&&void 0!==l?l:void 0);r.next(u);try{o.resolve(this.errorHandler(a))}catch(c){o.reject(c)}}return cn}))}))}resetRootComponentType(n){this.rootComponentType=n,this.routerState.root.component=this.rootComponentType}setTransition(n){this.transitions.next({...this.transitions.value,...n})}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(n=>{const r="popstate"===n.type?"popstate":"hashchange";"popstate"===r&&setTimeout(()=>{var o;const i={replaceUrl:!0},s=null!==(o=n.state)&&void 0!==o&&o.navigationId?n.state:null;if(s){const l={...s};delete l.navigationId,delete l.\u0275routerPageId,0!==Object.keys(l).length&&(i.state=l)}const a=this.parseUrl(n.url);this.scheduleNavigation(a,r,s,i)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(n){this.events.next(n)}resetConfig(n){this.config=n.map(Wd),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(n,r={}){const{relativeTo:o,queryParams:i,fragment:s,queryParamsHandling:a,preserveFragment:l}=r,u=o||this.routerState.root,c=l?this.currentUrlTree.fragment:s;let d=null;switch(a){case"merge":d={...this.currentUrlTree.queryParams,...i};break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=i||null}return null!==d&&(d=this.removeEmptyProps(d)),WR(u,this.currentUrlTree,n,d,c??null)}navigateByUrl(n,r={skipLocationChange:!1}){const o=Dr(n)?n:this.parseUrl(n),i=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(i,"imperative",null,r)}navigate(n,r={skipLocationChange:!1}){return function bP(e){for(let t=0;t<e.length;t++){if(null==e[t])throw new C(4008,false)}}(n),this.navigateByUrl(this.createUrlTree(n,r),r)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){let r;try{r=this.urlSerializer.parse(n)}catch(o){r=this.malformedUriErrorHandler(o,this.urlSerializer,n)}return r}isActive(n,r){let o;if(o=!0===r?{...CP}:!1===r?{...wP}:r,Dr(n))return uD(this.currentUrlTree,n,o);const i=this.parseUrl(n);return uD(this.currentUrlTree,i,o)}removeEmptyProps(n){return Object.keys(n).reduce((r,o)=>{const i=n[o];return null!=i&&(r[o]=i),r},{})}processNavigations(){this.navigations.subscribe(n=>{var r;this.navigated=!0,this.lastSuccessfulId=n.id,this.currentPageId=n.targetPageId,this.events.next(new Cr(n.id,this.serializeUrl(n.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,null===(r=this.titleStrategy)||void 0===r||r.updateTitle(this.routerState.snapshot),n.resolve(!0)},n=>{this.console.warn(`Unhandled Navigation Error: ${n}`)})}scheduleNavigation(n,r,o,i,s){if(this.disposed)return Promise.resolve(!1);let a,l,u;s?(a=s.resolve,l=s.reject,u=s.promise):u=new Promise((p,g)=>{a=p,l=g});const c=++this.navigationId;let d;if("computed"===this.canceledNavigationResolution)if(0===this.currentPageId&&(o=this.location.getState()),o&&o.\u0275routerPageId)d=o.\u0275routerPageId;else if(i.replaceUrl||i.skipLocationChange){var f;d=null!==(f=this.browserPageId)&&void 0!==f?f:0}else{var h;d=(null!==(h=this.browserPageId)&&void 0!==h?h:0)+1}else d=0;return this.setTransition({id:c,targetPageId:d,source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:n,extras:i,resolve:a,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(p=>Promise.reject(p))}setBrowserUrl(n,r){const o=this.urlSerializer.serialize(n),i={...r.extras.state,...this.generateNgRouterState(r.id,r.targetPageId)};this.location.isCurrentPathEqualTo(o)||r.extras.replaceUrl?this.location.replaceState(o,"",i):this.location.go(o,"",i)}restoreHistory(n,r=!1){if("computed"===this.canceledNavigationResolution){var o,i;const s=this.currentPageId-n.targetPageId;"popstate"!==n.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==(null===(o=this.currentNavigation)||void 0===o?void 0:o.finalUrl)||0===s?this.currentUrlTree===(null===(i=this.currentNavigation)||void 0===i?void 0:i.finalUrl)&&0===s&&(this.resetState(n),this.browserUrlTree=n.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(s)}else"replace"===this.canceledNavigationResolution&&(r&&this.resetState(n),this.resetUrlToCurrentUrlTree())}resetState(n){this.routerState=n.currentRouterState,this.currentUrlTree=n.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(n,r,o){const i=new ka(n.id,this.serializeUrl(n.extractedUrl),r,o);this.triggerEvent(i),n.resolve(!1)}generateNgRouterState(n,r){return"computed"===this.canceledNavigationResolution?{navigationId:n,\u0275routerPageId:r}:{navigationId:n}}}return e.\u0275fac=function(n){ku()},e.\u0275prov=P({token:e,factory:function(){return tC()},providedIn:"root"}),e})();function nC(e){return"imperative"!==e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class rC{}let IP=(()=>{class e{constructor(n,r,o,i,s){this.router=n,this.injector=o,this.preloadingStrategy=i,this.loader=s}setUpPreloading(){this.subscription=this.router.events.pipe(on(n=>n instanceof Cr),Un(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(n,r){const o=[];for(const l of r){var i,s;l.providers&&!l._injector&&(l._injector=Ks(l.providers,n,`Route: ${l.path}`));const u=null!==(i=l._injector)&&void 0!==i?i:n,c=null!==(s=l._loadedInjector)&&void 0!==s?s:u;if(l.loadChildren&&!l._loadedRoutes&&void 0===l.canLoad||l.loadComponent&&!l._loadedComponent)o.push(this.preloadConfig(u,l));else if(l.children||l._loadedRoutes){var a;o.push(this.processRoutes(c,null!==(a=l.children)&&void 0!==a?a:l._loadedRoutes))}}return Ie(o).pipe(Ar())}preloadConfig(n,r){return this.preloadingStrategy.preload(r,()=>{let o;o=r.loadChildren&&void 0===r.canLoad?this.loader.loadChildren(n,r):R(null);const i=o.pipe($e(s=>{var a;return null===s?R(void 0):(r._loadedRoutes=s.routes,r._loadedInjector=s.injector,this.processRoutes(null!==(a=s.injector)&&void 0!==a?a:n,s.routes))}));return r.loadComponent&&!r._loadedComponent?Ie([i,this.loader.loadComponent(r)]).pipe(Ar()):i})}}return e.\u0275fac=function(n){return new(n||e)(A(Be),A(kc),A(Ln),A(rC),A(Jd))},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const tf=new x("");let oC=(()=>{class e{constructor(n,r,o={}){this.router=n,this.viewportScroller=r,this.options=o,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},o.scrollPositionRestoration=o.scrollPositionRestoration||"disabled",o.anchorScrolling=o.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(n=>{n instanceof Ld?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=n.navigationTrigger,this.restoredId=n.restoredState?n.restoredState.navigationId:0):n instanceof Cr&&(this.lastId=n.id,this.scheduleScrollEvent(n,this.router.parseUrl(n.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(n=>{n instanceof bD&&(n.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(n.position):n.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(n.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(n,r){this.router.triggerEvent(new bD(n,"popstate"===this.lastSource?this.store[this.restoredId]:null,r))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return e.\u0275fac=function(n){ku()},e.\u0275prov=P({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Eo(e,t){return{\u0275kind:e,\u0275providers:t}}function nf(e){return[{provide:Yd,multi:!0,useValue:e}]}function sC(){const e=be(Ct);return t=>{var n,r;const o=e.get(oa);if(t!==o.components[0])return;const i=e.get(Be),s=e.get(aC);1===e.get(rf)&&i.initialNavigation(),null===(n=e.get(lC,null,O.Optional))||void 0===n||n.setUpPreloading(),null===(r=e.get(tf,null,O.Optional))||void 0===r||r.init(),i.resetRootComponentType(o.componentTypes[0]),s.next(),s.complete()}}const aC=new x("",{factory:()=>new Ze}),rf=new x("",{providedIn:"root",factory:()=>1});const lC=new x("");function NP(e){return Eo(0,[{provide:lC,useExisting:IP},{provide:rC,useExisting:e}])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const uC=new x("ROUTER_FORROOT_GUARD"),RP=[Yc,{provide:hD,useClass:Nd},{provide:Be,useFactory:tC},ki,{provide:wr,useFactory:function iC(e){return e.routerState.root},deps:[Be]},Jd];function FP(){return new Mv("Router",Be)}let cC=(()=>{class e{constructor(n){}static forRoot(n,r){return{ngModule:e,providers:[RP,[],nf(n),{provide:uC,useFactory:LP,deps:[[Be,new zo,new Wo]]},{provide:Wa,useValue:r||{}},null!=r&&r.useHash?{provide:yr,useClass:Fx}:{provide:yr,useClass:Yv},{provide:tf,useFactory:()=>{const e=be(Be),t=be(J1),n=be(Wa);return n.scrollOffset&&t.setOffset(n.scrollOffset),new oC(e,t,n)}},null!=r&&r.preloadingStrategy?NP(r.preloadingStrategy).\u0275providers:[],{provide:Mv,multi:!0,useFactory:FP},null!=r&&r.initialNavigation?VP(r):[],[{provide:dC,useFactory:sC},{provide:_v,multi:!0,useExisting:dC}]]}}static forChild(n){return{ngModule:e,providers:[nf(n)]}}}return e.\u0275fac=function(n){return new(n||e)(A(uC,8))},e.\u0275mod=St({type:e}),e.\u0275inj=pt({imports:[Gd]}),e})();function LP(e){return"guarded"}function VP(e){return["disabled"===e.initialNavigation?Eo(3,[{provide:ta,multi:!0,useFactory:()=>{const t=be(Be);return()=>{t.setUpLocationChangeListener()}}},{provide:rf,useValue:2}]).\u0275providers:[],"enabledBlocking"===e.initialNavigation?Eo(2,[{provide:rf,useValue:0},{provide:ta,multi:!0,deps:[Ct],useFactory:t=>{const n=t.get(Nx,Promise.resolve());let r=!1;return()=>n.then(()=>new Promise(i=>{const s=t.get(Be),a=t.get(aC);(function o(i){t.get(Be).events.pipe(on(a=>a instanceof Cr||a instanceof ka||a instanceof ED),Q(a=>a instanceof Cr||a instanceof ka&&(0===a.code||1===a.code)&&null),on(a=>null!==a),Ai(1)).subscribe(()=>{i()})})(()=>{i(!0),r=!0}),s.afterPreactivation=()=>(i(!0),r||a.closed?R(void 0):a),s.initialNavigation()}))}}]).\u0275providers:[]]}const dC=new x(""),jP=[];let BP=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=St({type:e}),e.\u0275inj=pt({imports:[cC.forRoot(jP),cC]}),e})(),Er=(()=>{class e{constructor(n){this.http=n,this.isLoading=!0,this.query="",this.params={selectedCollege:"",collegeFullName:"",selectedProgramType:"",programTypeFullName:"",limit:25,page:1},this.resultsSource=new Ze,this.querySource=new Ze,this.paramsSource=new Ze,this.isLoadingSource=new Ze,this.results$=this.resultsSource.asObservable(),this.query$=this.querySource.asObservable(),this.params$=this.paramsSource.asObservable(),this.isLoading$=this.isLoadingSource.asObservable(),this.searchUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/degrees",this.subscription=this.query$.subscribe(r=>{this.query=r,this.getResults()}),this.subscription=this.params$.subscribe(r=>{this.params=r,this.getResults()})}setQuery(n){this.querySource.next(n)}setProgramType(n,r){this.params.selectedProgramType=n,this.params.programTypeFullName=r,this.paramsSource.next(this.params)}setCollege(n,r){this.params.selectedCollege=n,this.params.collegeFullName=r,this.paramsSource.next(this.params)}setPage(n){this.params.page=this.params.page+n,this.paramsSource.next(this.params)}gotoPage(n,r){this.params.page=n,r&&this.paramsSource.next(this.params)}getResults(){const n={params:(new An).set("colleges",this.params.selectedCollege).set("limit",this.params.limit).set("page",this.params.page).set("program_types",this.params.selectedProgramType).set("search",this.query)};this.isLoadingSource.next(!0),this.resultsSource.next(this.results),this.http.get(this.searchUrl,n).pipe(Qt(this.handleError)).subscribe(r=>{this.isLoadingSource.next(!1),this.resultsSource.next(r)})}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),Gn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(A(Ia))},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),fC=(()=>{class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}}return e.\u0275fac=function(n){return new(n||e)(_(yn),_(Dt))},e.\u0275dir=V({type:e}),e})(),br=(()=>{class e extends fC{}return e.\u0275fac=function(){let t;return function(r){return(t||(t=function Ge(e){return Rn(()=>{const t=e.prototype.constructor,n=t[fn]||Ul(t),r=Object.prototype;let o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){const i=o[fn]||Ul(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}(e)))(r||e)}}(),e.\u0275dir=V({type:e,features:[re]}),e})();const ln=new x("NgValueAccessor"),GP={provide:ln,useExisting:ue(()=>Za),multi:!0},WP=new x("CompositionEventMode");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Za=(()=>{class e extends fC{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function zP(){const e=rn()?rn().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(n){this.setProperty("value",n??"")}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}}return e.\u0275fac=function(n){return new(n||e)(_(yn),_(Dt),_(WP,8))},e.\u0275dir=V({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){1&n&&pe("input",function(i){return r._handleInput(i.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(i){return r._compositionEnd(i.target.value)})},features:[ge([GP]),re]}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ke=new x("NgValidators"),Qn=new x("NgAsyncValidators");function EC(e){return null!=e}function bC(e){return li(e)?Ie(e):e}function SC(e){let t={};return e.forEach(n=>{t=null!=n?{...t,...n}:t}),0===Object.keys(t).length?null:t}function MC(e,t){return t.map(n=>n(e))}function IC(e){return e.map(t=>function KP(e){return!e.validate}(t)?t:n=>t.validate(n))}function sf(e){return null!=e?function AC(e){if(!e)return null;const t=e.filter(EC);return 0==t.length?null:function(n){return SC(MC(n,t))}}(IC(e)):null}function af(e){return null!=e?function TC(e){if(!e)return null;const t=e.filter(EC);return 0==t.length?null:function(n){return function HP(...e){const t=ih(e),{args:n,keys:r}=K_(e),o=new we(i=>{const{length:s}=n;if(!s)return void i.complete();const a=new Array(s);let l=s,u=s;for(let c=0;c<s;c++){let d=!1;Pt(n[c]).subscribe(Ee(i,f=>{d||(d=!0,u--),a[c]=f},()=>l--,void 0,()=>{(!l||!d)&&(u||i.next(r?Y_(r,a):a),i.complete())}))}});return t?o.pipe(Z_(t)):o}
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
       */(MC(n,t).map(bC)).pipe(Q(SC))}}(IC(e)):null}function xC(e,t){return null===e?[t]:Array.isArray(e)?[...e,t]:[e,t]}function NC(e){return e._rawValidators}function RC(e){return e._rawAsyncValidators}function lf(e){return e?Array.isArray(e)?e:[e]:[]}function Ja(e,t){return Array.isArray(e)?e.includes(t):e===t}function FC(e,t){const n=lf(t);return lf(e).forEach(o=>{Ja(n,o)||n.push(o)}),n}function PC(e,t){return lf(t).filter(n=>!Ja(e,n))}
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
       */class st extends OC{get formDirective(){return null}get path(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Kn extends OC{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class kC{constructor(t){this._cd=t}get isTouched(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.touched)}get isUntouched(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.untouched)}get isPristine(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.pristine)}get isDirty(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.dirty)}get isValid(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.valid)}get isInvalid(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.invalid)}get isPending(){var t,n;return!(null===(t=this._cd)||void 0===t||null===(n=t.control)||void 0===n||!n.pending)}get isSubmitted(){var t;return!(null===(t=this._cd)||void 0===t||!t.submitted)}}let LC=(()=>{class e extends kC{constructor(n){super(n)}}return e.\u0275fac=function(n){return new(n||e)(_(Kn,2))},e.\u0275dir=V({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){2&n&&Us("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[re]}),e})(),VC=(()=>{class e extends kC{constructor(n){super(n)}}return e.\u0275fac=function(n){return new(n||e)(_(st,10))},e.\u0275dir=V({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){2&n&&Us("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[re]}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Hi="VALID",el="INVALID",bo="PENDING",Ui="DISABLED";function jC(e){return Array.isArray(e)?sf(e):e||null}function BC(e){return Array.isArray(e)?af(e):e||null}function tl(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}function Gi(e,t){var n,r;(function gf(e,t){const n=NC(e);null!==t.validator?e.setValidators(xC(n,t.validator)):"function"==typeof n&&e.setValidators([n]);const r=RC(e);null!==t.asyncValidator?e.setAsyncValidators(xC(r,t.asyncValidator)):"function"==typeof r&&e.setAsyncValidators([r]);const o=()=>e.updateValueAndValidity();ol(t._rawValidators,o),ol(t._rawAsyncValidators,o)})(e,t),t.valueAccessor.writeValue(e.value),e.disabled&&(null===(n=(r=t.valueAccessor).setDisabledState)||void 0===n||n.call(r,!0)),function oO(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&zC(e,t)})}(e,t),function sO(e,t){const n=(r,o)=>{t.valueAccessor.writeValue(r),o&&t.viewToModelUpdate(r)};e.registerOnChange(n),t._registerOnDestroy(()=>{e._unregisterOnChange(n)})}(e,t),function iO(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&zC(e,t),"submit"!==e.updateOn&&e.markAsTouched()})}(e,t),function rO(e,t){if(t.valueAccessor.setDisabledState){const n=r=>{t.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(n),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(n)})}}(e,t)}function rl(e,t,n=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),function il(e,t){let n=!1;if(null!==e){if(null!==t.validator){const o=NC(e);if(Array.isArray(o)&&o.length>0){const i=o.filter(s=>s!==t.validator);i.length!==o.length&&(n=!0,e.setValidators(i))}}if(null!==t.asyncValidator){const o=RC(e);if(Array.isArray(o)&&o.length>0){const i=o.filter(s=>s!==t.asyncValidator);i.length!==o.length&&(n=!0,e.setAsyncValidators(i))}}}const r=()=>{};return ol(t._rawValidators,r),ol(t._rawAsyncValidators,r),n}(e,t),e&&(t._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function ol(e,t){e.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(t)})}function zC(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function KC(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ZC(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}let tw=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=V({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),e})(),rw=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=St({type:e}),e.\u0275inj=pt({}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Df=new x("NgModelWithFormControlWarning"),_O={provide:Kn,useExisting:ue(()=>Cf)};let Cf=(()=>{class e extends Kn{constructor(n,r,o,i){super(),this._ngModelWarningConfig=i,this.update=new Ce,this._ngModelWarningSent=!1,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=function yf(e,t){if(!t)return null;let n,r,o;return Array.isArray(t),t.forEach(i=>{i.constructor===Za?n=i:function uO(e){return Object.getPrototypeOf(e.constructor)===br}(i)?r=i:o=i}),o||r||n||null}(0,o)}set isDisabled(n){}ngOnChanges(n){if(this._isControlChanged(n)){const r=n.form.previousValue;r&&rl(r,this,!1),Gi(this.form,this),this.form.updateValueAndValidity({emitEvent:!1})}(function mf(e,t){if(!e.hasOwnProperty("model"))return!1;const n=e.model;return!!n.isFirstChange()||!Object.is(t,n.currentValue)})(n,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&rl(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_isControlChanged(n){return n.hasOwnProperty("form")}}return e._ngModelWarningSentOnce=!1,e.\u0275fac=function(n){return new(n||e)(_(Ke,10),_(Qn,10),_(ln,10),_(Df,8))},e.\u0275dir=V({type:e,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[ge([_O]),re,It]}),e})(),VO=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=St({type:e}),e.\u0275inj=pt({imports:[rw]}),e})(),$O=(()=>{class e{static withConfig(n){return{ngModule:e,providers:[{provide:Df,useValue:n.warnOnNgModelWithFormControl}]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=St({type:e}),e.\u0275inj=pt({imports:[VO]}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
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
class BO extends dt{constructor(t,n){super()}schedule(t,n=0){return this}}const sl={setInterval(e,t,...n){const{delegate:r}=sl;return r?.setInterval?r.setInterval(e,t,...n):setInterval(e,t,...n)},clearInterval(e){const{delegate:t}=sl;return(t?.clearInterval||clearInterval)(e)},delegate:void 0},_w={now:()=>(_w.delegate||Date).now(),delegate:void 0};class Wi{constructor(t,n=Wi.now){this.schedulerActionCtor=t,this.now=n}schedule(t,n=0,r){return new this.schedulerActionCtor(this,t).schedule(r,n)}}Wi.now=_w.now;const GO=new class UO extends Wi{constructor(t,n=Wi.now){super(t,n),this.actions=[],this._active=!1}flush(t){const{actions:n}=this;if(this._active)return void n.push(t);let r;this._active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=n.shift());if(this._active=!1,r){for(;t=n.shift();)t.unsubscribe();throw r}}}(class HO extends BO{constructor(t,n){super(t,n),this.scheduler=t,this.work=n,this.pending=!1}schedule(t,n=0){var r;if(this.closed)return this;this.state=t;const o=this.id,i=this.scheduler;return null!=o&&(this.id=this.recycleAsyncId(i,o,n)),this.pending=!0,this.delay=n,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(i,this.id,n),this}requestAsyncId(t,n,r=0){return sl.setInterval(t.flush.bind(t,this),r)}recycleAsyncId(t,n,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return n;null!=n&&sl.clearInterval(n)}execute(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(t,n);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,n){let o,r=!1;try{this.work(t)}catch(i){r=!0,o=i||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:t,scheduler:n}=this,{actions:r}=n;this.work=this.state=this.scheduler=null,this.pending=!1,Ir(r,this),null!=t&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null,super.unsubscribe()}}});function qO(e,t){return e===t}let QO=(()=>{class e{constructor(n){this.searchService=n,this.selectedProgramType=""}setProgramType(n,r){this.selectedProgramType=n,this.searchService.gotoPage(1,!1),this.searchService.setProgramType(n,r)}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(_(Er))},e.\u0275cmp=bt({type:e,selectors:[["app-programs"]],decls:18,vars:3,consts:[[1,"mb-2"],["href","#bachelor",1,"mr-3","text-decoration-none",3,"click"],[1,"fa","fa-bookmark","fa-2x","text-primary","pr-2"],[1,"align-top","font-weight-bold","program-text-underline-hover",3,"ngClass"],["href","#master",1,"mr-3","text-decoration-none",3,"click"],[1,"fa","fa-bookmark","fa-2x","text-danger","pr-2"],["href","#doctorate",1,"mr-3","text-decoration-none",3,"click"],[1,"fa","fa-bookmark","fa-2x","text-complementary","pr-2"],["href","https://www.ucf.edu/online/",1,"mr-2"],[1,"fa","fa-external-link","fa-2x","text-primary"],["href","https://www.ucf.edu/online/",1,"text-decoration-none"],[1,"align-top","font-weight-bold","program-text-underline-hover"]],template:function(n,r){1&n&&(w(0,"div",0)(1,"a",1),pe("click",function(){return r.setProgramType("bachelor","Bachelor")}),J(2,"span",2),w(3,"span",3),N(4,"Undergraduate"),I()(),w(5,"a",4),pe("click",function(){return r.setProgramType("master","Master")}),J(6,"span",5),w(7,"span",3),N(8,"Graduate"),I()(),w(9,"a",6),pe("click",function(){return r.setProgramType("doctorate","Doctorate")}),J(10,"span",7),w(11,"span",3),N(12,"Professional"),I()(),w(13,"a",8),J(14,"span",9),I(),w(15,"a",10)(16,"span",11),N(17,"Online Programs"),I()()()),2&n&&(T(3),W("ngClass","bachelor"===r.selectedProgramType?"program-text-underline":""),T(4),W("ngClass","master"===r.selectedProgramType?"program-text-underline":""),T(4),W("ngClass","doctorate"===r.selectedProgramType?"program-text-underline":""))},dependencies:[wi]}),e})(),KO=(()=>{class e{constructor(n){this.searchService=n}ngOnInit(){this.searchField=new class extends class GC{constructor(t,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=n,this._composedValidatorFn=jC(this._rawValidators),this._composedAsyncValidatorFn=BC(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===Hi}get invalid(){return this.status===el}get pending(){return this.status==bo}get disabled(){return this.status===Ui}get enabled(){return this.status!==Ui}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=jC(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=BC(t)}addValidators(t){this.setValidators(FC(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(FC(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(PC(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(PC(t,this._rawAsyncValidators))}hasValidator(t){return Ja(this._rawValidators,t)}hasAsyncValidator(t){return Ja(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=bo,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const n=this._parentMarkedDirty(t.onlySelf);this.status=Ui,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:n}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const n=this._parentMarkedDirty(t.onlySelf);this.status=Hi,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:n}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Hi||this.status===bo)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ui:Hi}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=bo,this._hasOwnPendingAsyncValidator=!0;const n=bC(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,n={}){this.errors=t,this._updateControlsErrors(!1!==n.emitEvent)}get(t){let n=t;return null==n||(Array.isArray(n)||(n=n.split(".")),0===n.length)?null:n.reduce((r,o)=>r&&r._find(o),this)}getError(t,n){const r=n?this.get(n):this;return r&&r.errors?r.errors[t]:null}hasError(t,n){return!!this.getError(t,n)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new Ce,this.statusChanges=new Ce}_calculateStatus(){return this._allControlsDisabled()?Ui:this.errors?el:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(bo)?bo:this._anyControlsHaveStatus(el)?el:Hi}_anyControlsHaveStatus(t){return this._anyControls(n=>n.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){tl(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */{constructor(t=null,n,r){super(function ff(e){return(tl(e)?e.validators:e)||null}(n),function hf(e,t){return(tl(t)?t.asyncValidators:e)||null}(r,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),tl(n)&&(n.nonNullable||n.initialValueIsDefault)&&(this.defaultValue=ZC(t)?t.value:t)}setValue(t,n={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==n.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==n.emitViewToModelChange)),this.updateValueAndValidity(n)}patchValue(t,n={}){this.setValue(t,n)}reset(t=this.defaultValue,n={}){this._applyFormState(t),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){KC(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){KC(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){ZC(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}},this.searchField.valueChanges.pipe(on(n=>n.length>2),function zO(e,t=GO){return Me((n,r)=>{let o=null,i=null,s=null;const a=()=>{if(o){o.unsubscribe(),o=null;const u=i;i=null,r.next(u)}};function l(){const u=s+e,c=t.now();if(c<u)return o=this.schedule(void 0,u-c),void r.add(o);a()}n.subscribe(Ee(r,u=>{i=u,s=t.now(),o||(o=t.schedule(l,e),r.add(o))},()=>{a(),r.complete()},void 0,()=>{i=o=null}))})}(600),function WO(e,t=Nn){return e=e??qO,Me((n,r)=>{let o,i=!0;n.subscribe(Ee(r,s=>{const a=t(s);(i||!e(o,a))&&(i=!1,o=a,r.next(s))}))})}()).subscribe(n=>{n&&(this.searchService.gotoPage(1,!1),this.searchService.setQuery(n))})}}return e.\u0275fac=function(n){return new(n||e)(_(Er))},e.\u0275cmp=bt({type:e,selectors:[["app-search-form"]],decls:6,vars:1,consts:[["id","degree-search-form","role","search","placeholder","Search for a degree..."],[1,"search-form-inner","mt-3"],["for","degree-search-query",1,"text-uppercase"],["id","degree-search-query","name","degree-search-query","type","search","autocomplete","off","aria-controls","searchResults","placeholder","Search for a degree...",1,"form-control",3,"formControl","keydown.enter"]],template:function(n,r){1&n&&(J(0,"app-programs"),w(1,"form",0)(2,"div",1)(3,"label",2),N(4,"Search"),I(),w(5,"input",3),pe("keydown.enter",function(i){return i.preventDefault()}),I()()()),2&n&&(T(5),W("formControl",r.searchField))},dependencies:[tw,Za,LC,VC,Cf,QO]}),e})(),ZO=(()=>{class e{constructor(){this.degreeType=""}ngOnInit(){}getProgamClass(n){return"bachelor"===n||"undergraduate-program"===n||"minor"===n||"undergraduate-certificate"===n?"fa fa-bookmark fa-2x text-primary":"doctorate"===n||"master"===n||"graduate-certificate"===n||"graduate-program"===n?"fa fa-bookmark fa-2x text-danger":"fa fa-bookmark fa-2x text-complementary"}getProgramType(n){switch(n){case"bachelor":return"BS";case"minor":return"MN";case"undergraduate-certificate":return"UC";case"doctorate":return"DR";case"graduate-certificate":return"GC";case"master":case"graduate-program":return"M";case"professional-program":return"MD";default:return""}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=bt({type:e,selectors:[["app-programs-label"]],inputs:{degreeType:"degreeType"},decls:4,vars:2,consts:[[1,"fa-stack",2,"line-height","1.6em"],[1,"fa","fa-stack-2x",3,"ngClass"],[1,"fa-stack-1x","font-sans-serif","small"]],template:function(n,r){1&n&&(w(0,"span",0),J(1,"span",1),w(2,"span",2),N(3),I()()),2&n&&(T(1),W("ngClass",r.getProgamClass(r.degreeType)),T(2),nt(r.getProgramType(r.degreeType)))},dependencies:[wi]}),e})();function YO(e,t){if(1&e){const n=fr();w(0,"li",5)(1,"a",6),pe("click",function(){return or(n),ir(fe(2).setPage(-1))}),w(2,"span",7),N(3,"\xab"),I(),w(4,"span",8),N(5,"Previous"),I()()()}}const JO=function(e){return{active:e}};function XO(e,t){if(1&e){const n=fr();w(0,"li",9)(1,"a",6),pe("click",function(){const i=or(n).$implicit;return ir(fe(2).goToPage(i))}),N(2),I()()}if(2&e){const n=t.$implicit,r=fe(2);W("ngClass",Dc(2,JO,r.results.currentPage===n)),T(2),jn(" ",n," ")}}function ek(e,t){if(1&e){const n=fr();w(0,"li",5)(1,"a",6),pe("click",function(){return or(n),ir(fe(2).setPage(1))}),w(2,"span",7),N(3,"\xbb"),I(),w(4,"span",8),N(5,"Next"),I()()()}}function tk(e,t){if(1&e&&(w(0,"div")(1,"nav",1)(2,"ul",2),oe(3,YO,6,0,"li",3),oe(4,XO,3,4,"li",4),oe(5,ek,6,0,"li",3),I()()()),2&e){const n=fe();T(3),W("ngIf",n.results.currentPage>1),T(1),W("ngForOf",n.pages),T(1),W("ngIf",n.results.currentPage<n.results.totalPages)}}let nk=(()=>{class e{constructor(n){this.searchService=n}ngOnInit(){this.pagination()}setPage(n){this.searchService.setPage(n)}goToPage(n){n!==this.results?.currentPage&&this.searchService.gotoPage(n,!0)}pagination(){if(this.results){this.width=1e3;let r=4,o=this.results.currentPage-r<1?1:this.results.currentPage-r,i=this.results.currentPage+r>this.results.totalPages?this.results.totalPages:this.results.currentPage+r;this.pages=new Array;for(var n=o;n<=i;n++)this.pages.push(n)}}}return e.\u0275fac=function(n){return new(n||e)(_(Er))},e.\u0275cmp=bt({type:e,selectors:[["app-pagination"]],inputs:{results:"results"},decls:1,vars:1,consts:[[4,"ngIf"],["aria-label","Degree Results Pagination"],[1,"pagination","pagination-lg","justify-content-center"],["class","page-item",4,"ngIf"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item"],["href","#",1,"page-link",3,"click"],["aria-hidden","true"],[1,"sr-only"],[1,"page-item",3,"ngClass"]],template:function(n,r){1&n&&oe(0,tk,6,3,"div",0),2&n&&W("ngIf",r.results&&r.results.totalPages>1)},dependencies:[wi,Ei,mo]}),e})();const rk=["degreeLinks"];function ok(e,t){if(1&e&&(w(0,"span"),N(1," for the "),w(2,"strong"),N(3),I(),N(4," program"),I()),2&e){const n=fe(2);T(3),nt(n.params.programTypeFullName)}}function ik(e,t){if(1&e&&(w(0,"span"),N(1," at the "),w(2,"strong"),N(3),I()()),2&e){const n=fe(2);T(3),nt(n.params.collegeFullName)}}function sk(e,t){if(1&e&&(w(0,"p",2),N(1," No degrees found "),oe(2,ok,5,1,"span",1),oe(3,ik,4,1,"span",1),N(4," at UCF.\n"),I()),2&e){const n=fe();T(2),W("ngIf",n.params&&""!=n.params.programTypeFullName),T(1),W("ngIf",n.params&&""!=n.params.collegeFullName)}}function ak(e,t){if(1&e&&(w(0,"p"),N(1),I()),2&e){const n=fe().$implicit;T(1),nt(n.excerpt)}}function lk(e,t){if(1&e&&(cr(0),N(1),dr()),2&e){const n=fe().$implicit;T(1),jn("",n.hours," Hours")}}function uk(e,t){if(1&e&&(w(0,"p"),N(1),I()),2&e){const n=fe().$implicit;T(1),nt(n.excerpt)}}function ck(e,t){if(1&e&&(cr(0),N(1),dr()),2&e){const n=fe().$implicit;T(1),jn("",n.hours," Hours")}}function dk(e,t){if(1&e&&(w(0,"div",20),J(1,"hr",8),w(2,"div",21)(3,"div",10)(4,"a",11)(5,"span",22),N(6),I()(),w(7,"div",13),N(8),I(),oe(9,uk,2,1,"p",1),I(),w(10,"div",14),oe(11,ck,2,1,"ng-container",1),I(),w(12,"div",15),J(13,"app-programs-label",16),I()()()),2&e){const n=t.$implicit,r=fe(2).$implicit;T(4),hr("href",n.url,Yo),T(2),nt(n.nameShort),T(2),nt(r.colleges[0].name),T(1),W("ngIf",n.excerpt),T(2),W("ngIf",n.hours),T(2),W("degreeType",n.type)}}function fk(e,t){if(1&e&&(w(0,"div",18),oe(1,dk,14,6,"div",19),I()),2&e){const n=fe().$implicit;T(1),W("ngForOf",n.subplans)}}function hk(e,t){if(1&e&&(w(0,"div"),J(1,"hr",8),w(2,"div",9)(3,"div",10)(4,"a",11,12),N(6),I(),w(7,"div",13),N(8),I(),oe(9,ak,2,1,"p",1),I(),w(10,"div",14),oe(11,lk,2,1,"ng-container",1),I(),w(12,"div",15),J(13,"app-programs-label",16),I()(),oe(14,fk,2,1,"div",17),I()),2&e){const n=t.$implicit;T(4),hr("href",n.url,Yo),T(2),jn(" ",n.title," "),T(2),nt(n.colleges[0].name),T(1),W("ngIf",n.excerpt),T(2),W("ngIf",n.hours),T(2),W("degreeType",n.type),T(1),W("ngIf",n.subplans)}}function pk(e,t){if(1&e&&(w(0,"div",7),oe(1,hk,15,7,"div",3),I()),2&e){const n=fe().$implicit;T(1),W("ngForOf",n.degrees)}}function gk(e,t){if(1&e&&(cr(0),w(1,"div",5),N(2),I(),oe(3,pk,2,1,"div",6),dr()),2&e){const n=t.$implicit;T(2),jn("",n.alias,"s"),T(1),W("ngIf",n.degrees)}}function mk(e,t){if(1&e&&(w(0,"div")(1,"div"),N(2,"Programs"),I(),J(3,"hr"),oe(4,gk,4,2,"ng-container",3),J(5,"app-pagination",4),I()),2&e){const n=fe();T(4),W("ngForOf",n.results.types),T(1),W("results",n.results)}}let yk=(()=>{class e{constructor(n){this.searchService=n,this.isLoading=!0,this.subscription=this.searchService.results$.subscribe(r=>{this.results=r}),this.subscription=this.searchService.params$.subscribe(r=>{this.params=r}),this.subscription=this.searchService.isLoading$.subscribe(r=>{this.isLoading=r})}ngOnInit(){this.searchService.getResults()}ngAfterViewInit(){this.degreeLinks?.changes.subscribe(()=>{setTimeout(()=>{this.degreeLinks&&this.degreeLinks.first&&this.degreeLinks.first.nativeElement&&this.degreeLinks.first.nativeElement.focus()})})}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(_(Er))},e.\u0275cmp=bt({type:e,selectors:[["app-search-results"]],viewQuery:function(n,r){if(1&n&&Ky(rk,5),2&n){let o;Ys(o=function Js(){return function ET(e,t){return e[19].queries[t].queryList}(D(),Th())}())&&(r.degreeLinks=o)}},decls:2,vars:2,consts:[["class","ml-3",4,"ngIf"],[4,"ngIf"],[1,"ml-3"],[4,"ngFor","ngForOf"],[3,"results"],[1,"bg-primary","px-2","py-1","font-weight-bold","d-inline-block","mb-2"],["class","degree-search-results-container list-unstyled",4,"ngIf"],[1,"degree-search-results-container","list-unstyled"],[1,"hr-primary"],[1,"row","degree","position-relative"],[1,"col"],[1,"stretched-link","font-weight-bold",3,"href"],["degreeLinks",""],[1,"pt-3","pb-2"],[1,"col-md-2"],[1,"col-md-auto"],[3,"degreeType"],["class","degree-search-subplan-results-container list-unstyled ml-4",4,"ngIf"],[1,"degree-search-subplan-results-container","list-unstyled","ml-4"],["class","search-result-subplan",4,"ngFor","ngForOf"],[1,"search-result-subplan"],[1,"row","degree-subplan","position-relative"],[1,"degree-title"]],template:function(n,r){1&n&&(oe(0,sk,5,2,"p",0),oe(1,mk,6,2,"div",1)),2&n&&(W("ngIf",!r.isLoading&&0===r.results.endIndex),T(1),W("ngIf",!r.isLoading))},dependencies:[Ei,mo,ZO,nk]}),e})(),vk=(()=>{class e{constructor(n){this.http=n,this.collegesUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/colleges"}getColleges(){return this.http.get(this.collegesUrl).pipe(Qt(this.handleError))}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),Gn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(A(Ia))},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function _k(e,t){1&e&&(w(0,"p",6),J(1,"span",7),N(2," Loading colleges"),I())}function Dk(e,t){if(1&e){const n=fr();w(0,"li",11)(1,"label",12)(2,"input",13),pe("click",function(){const i=or(n).$implicit;return ir(fe(2).setCollege(i.slug,i.fullname))}),I(),J(3,"span",14),w(4,"span",15),N(5),I()()()}if(2&e){const n=t.$implicit;T(2),hr("value",n.slug),T(3),nt(n.name)}}function Ck(e,t){if(1&e&&(w(0,"div",8)(1,"ul",9),oe(2,Dk,6,2,"li",10),I()()),2&e){const n=fe();T(2),W("ngForOf",n.colleges)}}const wk=function(e){return{"d-block":e}};let Ek=(()=>{class e{constructor(n,r){this.collegeService=n,this.searchService=r,this.isLoading=!0,this.isCollegesOpen=!1}ngOnInit(){this.collegeService.getColleges().subscribe(n=>{this.colleges=n,this.isLoading=!1})}toggleColleges(){this.isCollegesOpen=!this.isCollegesOpen}setCollege(n,r){this.selectedCollege=n,this.searchService.gotoPage(1,!1),this.searchService.setCollege(n,r)}}return e.\u0275fac=function(n){return new(n||e)(_(vk),_(Er))},e.\u0275cmp=bt({type:e,selectors:[["app-colleges"]],decls:8,vars:6,consts:[[1,"h5","d-md-none","btn","btn-sm","btn-outline-secondary",3,"click"],["aria-hidden","true",1,"fa",3,"ngClass"],[1,"h6","pb-2","mt-4","d-none","d-md-block"],[1,"mb-4","d-none","d-md-block",3,"ngClass"],["class","my-3",4,"ngIf"],["class","degree-search-colleges",4,"ngIf"],[1,"my-3"],[1,"fa","fa-spinner","fa-spin"],[1,"degree-search-colleges"],[1,"degree-search-colleges","list-unstyled"],["class","form-check degree-search-college mb-2",4,"ngFor","ngForOf"],[1,"form-check","degree-search-college","mb-2"],[1,"custom-control","custom-radio"],["type","radio","name","college",1,"custom-control-input",3,"value","click"],[1,"custom-control-indicator"],[1,"custom-control-description"]],template:function(n,r){1&n&&(w(0,"button",0),pe("click",function(){return r.toggleColleges()}),N(1," Colleges "),J(2,"span",1),I(),w(3,"h3",2),N(4," Areas of Study\n"),I(),w(5,"div",3),oe(6,_k,3,0,"p",4),oe(7,Ck,3,1,"div",5),I()),2&n&&(T(2),W("ngClass",r.isCollegesOpen?"fa-arrow-circle-up":"fa-arrow-circle-down"),T(3),W("ngClass",Dc(4,wk,r.isCollegesOpen)),T(1),W("ngIf",r.isLoading),T(1),W("ngIf",r.colleges&&r.colleges.length>0))},dependencies:[wi,Ei,mo]}),e})(),bk=(()=>{class e{constructor(n){this.http=n,this.programTypesUrl=UCF_DEGREE_SEARCH_ANGULAR.remote_path+"/program-types",this.programTypesSource=new Ze,this.programTypes$=this.programTypesSource.asObservable()}getprogramTypes(){this.http.get(this.programTypesUrl).pipe(Qt(this.handleError)).subscribe(n=>{this.programTypesSource.next(n)})}handleError(n){return 0===n.status?console.error("An error occurred: ",n.error):console.error(`Backend returned code ${n.status}, body was: `,n.error),Gn(()=>{new Error("Unknown error. Check the data source URL.")})}}return e.\u0275fac=function(n){return new(n||e)(A(Ia))},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function Sk(e,t){if(1&e){const n=fr();w(0,"ul",10)(1,"li",11)(2,"label",5)(3,"input",6),pe("click",function(){const i=or(n).$implicit;return ir(fe(3).setProgramType(i.name,i.name))}),I(),J(4,"span",7),w(5,"span",8),N(6),I()()()()}if(2&e){const n=t.$implicit;T(3),hr("value",n.name),T(3),nt(n.name)}}function Mk(e,t){if(1&e){const n=fr();cr(0),w(1,"li",4)(2,"label",5)(3,"input",6),pe("click",function(){const i=or(n).$implicit;return ir(fe(2).setProgramType(i.name,i.name))}),I(),J(4,"span",7),w(5,"span",8),N(6),I()()(),oe(7,Sk,7,2,"ul",9),dr()}if(2&e){const n=t.$implicit;T(3),hr("value",n.name),T(3),nt(n.name),T(1),W("ngForOf",n.children)}}function Ik(e,t){if(1&e&&(w(0,"div")(1,"h3",1),N(2," Degrees Offered "),I(),w(3,"ul",2),oe(4,Mk,8,3,"ng-container",3),I()()),2&e){const n=fe();T(4),W("ngForOf",n.programTypes)}}let Ak=(()=>{class e{constructor(n,r){this.programTypeService=n,this.searchService=r,this.isLoading=!0,this.isProgramTypeOpen=!1,this.subscription=this.programTypeService.programTypes$.subscribe(o=>{this.programTypes=o})}ngOnInit(){this.programTypeService.getprogramTypes()}toggleColleges(){this.isProgramTypeOpen=!this.isProgramTypeOpen}setProgramType(n,r){this.selectedProgramType=n,this.searchService.gotoPage(1,!1),this.searchService.setProgramType(n,r)}}return e.\u0275fac=function(n){return new(n||e)(_(bk),_(Er))},e.\u0275cmp=bt({type:e,selectors:[["app-program-types"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"h6","pb-2","mt-4","d-none","d-md-block"],[1,"degree-search-programTypes","list-unstyled"],[4,"ngFor","ngForOf"],[1,"py-1","mb-1"],[1,"custom-control","custom-radio"],["type","radio","name","programType",1,"custom-control-input",3,"value","click"],[1,"custom-control-indicator"],[1,"custom-control-description"],["class","list-unstyled ml-3",4,"ngFor","ngForOf"],[1,"list-unstyled","ml-3"],[1,"form-check","py-1","mb-1"]],template:function(n,r){1&n&&oe(0,Ik,5,1,"div",0),2&n&&W("ngIf",r.programTypes&&r.programTypes.length>0)},dependencies:[Ei,mo]}),e})();function Tk(e,t){1&e&&(w(0,"p",19),J(1,"span",20),N(2," Loading degrees "),I())}function xk(e,t){if(1&e&&(w(0,"span"),N(1," for the "),w(2,"strong"),N(3),I(),N(4," program "),I()),2&e){const n=fe(2);T(3),nt(n.params.programTypeFullName)}}function Nk(e,t){if(1&e&&(w(0,"span"),N(1," at the "),w(2,"strong"),N(3),I()()),2&e){const n=fe(2);T(3),nt(n.params.collegeFullName)}}function Rk(e,t){if(1&e&&(w(0,"p",21),N(1),oe(2,xk,5,1,"span",22),oe(3,Nk,4,1,"span",22),N(4," at UCF. "),I()),2&e){const n=fe();T(1),dc(" Showing ",n.results.startIndex," through ",n.results.endIndex," of ",n.results.totalPosts," degrees "),T(1),W("ngIf",n.params&&""!=n.params.programTypeFullName),T(1),W("ngIf",n.params&&""!=n.params.collegeFullName)}}let Fk=(()=>{class e{constructor(n){this.searchService=n,this.isLoading=!0,this.subscription=this.searchService.isLoading$.subscribe(r=>{this.isLoading=r}),this.subscription=this.searchService.results$.subscribe(r=>{this.results=r}),this.subscription=this.searchService.params$.subscribe(r=>{this.params=r})}ngOnInit(){}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(_(Er))},e.\u0275cmp=bt({type:e,selectors:[["app-home"]],decls:62,vars:2,consts:[[1,"container","my-5"],[1,"row","mt-3"],[1,"col-md-4","col-lg-3","bg-faded","mb-4","px-4","py-3"],[1,"h5","heading-underline","text-transform-none","visible-sm","mt-3","mb-4"],[1,"h6","pb-2","mt-4"],[1,"list-unstyled"],[1,"mb-2"],[1,"custom-control","custom-radio"],["type","radio","name","locations",1,"custom-control-input"],[1,"custom-control-indicator"],[1,"custom-control-description"],["href","https://www.ucf.edu/online/",1,"d-inline-block","mr-2"],["href","https://www.ucf.edu/online/"],[1,"fa","fa-external-link","text-primary"],["id","searchResults","role","region","aria-live","polite",1,"col-md-7","col-lg-8","offset-md-1"],[1,"row","mb-4","mt-2"],[1,"col-md-12"],["class","mb-0",4,"ngIf"],["class","text-muted mb-0","aria-live","polite",4,"ngIf"],[1,"mb-0"],[1,"fa","fa-spinner","fa-spin"],["aria-live","polite",1,"text-muted","mb-0"],[4,"ngIf"]],template:function(n,r){1&n&&(w(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),N(4,"Filter by"),I(),J(5,"app-colleges")(6,"hr")(7,"app-program-types")(8,"hr"),w(9,"h3",4),N(10,"Locations"),I(),w(11,"ul",5)(12,"li",6)(13,"label",7),J(14,"input",8)(15,"span",9),w(16,"span",10),N(17,"Main Campus"),I()()(),w(18,"li",6)(19,"label",7),J(20,"input",8)(21,"span",9),w(22,"span",10),N(23,"Academic Health Sciences Campus"),I()()(),w(24,"li",6)(25,"label",7),J(26,"input",8)(27,"span",9),w(28,"span",10),N(29,"UCF Downtown"),I()()(),w(30,"li",6)(31,"label",7),J(32,"input",8)(33,"span",9),w(34,"span",10),N(35,"Rosen campus"),I()()(),w(36,"li",6)(37,"label",7),J(38,"input",8)(39,"span",9),w(40,"span",10),N(41,"UCF Online"),I()()(),w(42,"li",6)(43,"label",7),J(44,"input",8)(45,"span",9),w(46,"span",10),N(47,"CONNECT Campuses"),I()()()(),J(48,"hr"),w(49,"h3",4)(50,"a",11),N(51," Online Programs"),I(),w(52,"a",12),J(53,"span",13),I()(),J(54,"hr"),I(),w(55,"div",14),J(56,"app-search-form"),w(57,"div",15)(58,"div",16),oe(59,Tk,3,0,"p",17),oe(60,Rk,5,5,"p",18),I()(),J(61,"app-search-results"),I()()()),2&n&&(T(59),W("ngIf",r.isLoading),T(1),W("ngIf",!r.isLoading&&r.results.endIndex>0))},dependencies:[mo,KO,yk,Ek,Ak]}),e})(),Pk=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=bt({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(n,r){1&n&&J(0,"app-home")},dependencies:[Fk]}),e})(),Ok=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=St({type:e,bootstrap:[Pk]}),e.\u0275inj=pt({imports:[jN,$O,uR,BP]}),e})();(function cx(){kv=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
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
       */)(),$N().bootstrapModule(Ok).catch(e=>console.error(e))}},le=>{le(le.s=650)}]);