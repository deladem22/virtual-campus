import{r as u,j as b}from"./jsx-runtime-CAOzMBF_.js";import{q as A}from"./module-OGN3If0x.js";import{E as F,m as D,f as U,g as L,h as P,i as T,r as O}from"./index-BqmKY8Xa.js";import{d as $,i as B,e as k,f as j,s as I,g as H,h as V,j as q,R as z,k as W}from"./components-BUh_SX-e.js";/**
 * @remix-run/react v2.10.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function N(a){if(!a)return null;let r=Object.entries(a),s={};for(let[n,e]of r)if(e&&e.__type==="RouteErrorResponse")s[n]=new F(e.status,e.statusText,e.data,e.internal===!0);else if(e&&e.__type==="Error"){if(e.__subType){let o=window[e.__subType];if(typeof o=="function")try{let d=new o(e.message);d.stack=e.stack,s[n]=d}catch{}}if(s[n]==null){let o=new Error(e.message);o.stack=e.stack,s[n]=o}}else s[n]=e;return s}/**
 * @remix-run/react v2.10.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let f,c,E=!1;let g,re=new Promise(a=>{g=a}).catch(()=>{});function Y(a){if(!c){let o=window.__remixContext.url,d=window.location.pathname;if(o!==d&&!window.__remixContext.isSpaMode){let l=`Initial URL (${o}) does not match URL at time of hydration (${d}), reloading page...`;return console.error(l),window.location.reload(),u.createElement(u.Fragment,null)}if(window.__remixContext.future.unstable_singleFetch){if(!f){let l=window.__remixContext.stream;B(l,"No stream found for single fetch decoding"),window.__remixContext.stream=void 0,f=k(l,window).then(p=>{window.__remixContext.state=p.value,f.value=!0}).catch(p=>{f.error=p})}if(f.error)throw f.error;if(!f.value)throw f}let m=j(window.__remixManifest.routes,window.__remixRouteModules,window.__remixContext.state,window.__remixContext.future,window.__remixContext.isSpaMode),i;if(!window.__remixContext.isSpaMode){i={...window.__remixContext.state,loaderData:{...window.__remixContext.state.loaderData}};let l=D(m,window.location,window.__remixContext.basename);if(l)for(let p of l){let v=p.route.id,M=window.__remixRouteModules[v],R=window.__remixManifest.routes[v];M&&I(R,M,window.__remixContext.isSpaMode)&&(M.HydrateFallback||!R.hasLoader)?i.loaderData[v]=void 0:R&&!R.hasLoader&&(i.loaderData[v]=null)}i&&i.errors&&(i.errors=N(i.errors))}let{enabled:t,patchRoutesOnMiss:w}=H(window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode,window.__remixContext.basename);c=U({routes:m,history:L(),basename:window.__remixContext.basename,future:{v7_normalizeFormMethod:!0,v7_fetcherPersist:window.__remixContext.future.v3_fetcherPersist,v7_partialHydration:!0,v7_prependBasename:!0,v7_relativeSplatPath:window.__remixContext.future.v3_relativeSplatPath,v7_skipActionErrorRevalidation:window.__remixContext.future.unstable_singleFetch===!0},hydrationData:i,mapRouteProperties:P,unstable_dataStrategy:window.__remixContext.future.unstable_singleFetch?V(window.__remixManifest,window.__remixRouteModules):void 0,...t?{unstable_patchRoutesOnMiss:w}:{}}),c.state.initialized&&(E=!0,c.initialize()),c.createRoutesForHMR=$,window.__remixRouter=c,g&&g(c)}let[r,s]=u.useState(void 0),[n,e]=u.useState(c.state.location);return u.useLayoutEffect(()=>{E||(E=!0,c.initialize())},[]),u.useLayoutEffect(()=>c.subscribe(o=>{o.location!==n&&e(o.location)}),[n]),q(c,window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode),u.createElement(u.Fragment,null,u.createElement(z.Provider,{value:{manifest:window.__remixManifest,routeModules:window.__remixRouteModules,future:window.__remixContext.future,criticalCss:r,isSpaMode:window.__remixContext.isSpaMode}},u.createElement(W,{location:n},u.createElement(T,{router:c,fallbackElement:null,future:{v7_startTransition:!0}}))),window.__remixContext.future.unstable_singleFetch?u.createElement(u.Fragment,null):null)}const G=()=>{let a=2,r=[];function s(e){let o=e.length,d=new Uint8Array(o*a);for(let m=0;m<o;m++){let i=m*a,t=e[m];t>1?t=1:t<-1&&(t=-1),t=t*32768,d[i]=t,d[i+1]=t>>8}r.push(d)}function n(e){let o=r.length?r[0].length:0,d=r.length*o,m=new Uint8Array(44+d),i=new DataView(m.buffer);i.setUint32(0,1380533830,!1),i.setUint32(4,36+d,!0),i.setUint32(8,1463899717,!1),i.setUint32(12,1718449184,!1),i.setUint32(16,16,!0),i.setUint16(20,1,!0),i.setUint16(22,1,!0),i.setUint32(24,e,!0),i.setUint32(28,e*a,!0),i.setUint16(32,a,!0),i.setUint16(34,8*a,!0),i.setUint32(36,1684108385,!1),i.setUint32(40,d,!0);for(let t=0;t<r.length;t++)m.set(r[t],t*o+44);r=[],postMessage(m.buffer,[m.buffer])}onmessage=e=>{e.data[0]==="encode"?s(e.data[1]):e.data[0]==="dump"&&n(e.data[1])}};let C=window.AudioContext||window.webkitAudioContext,K=a=>{let r=a.toString().replace(/^(\(\)\s*=>|function\s*\(\))\s*{/,"").replace(/}$/,""),s=new Blob([r]);return new Worker(URL.createObjectURL(s))},x=a=>{let r=new Event("error");return r.data=new Error("Wrong state for "+a),r},h;class _{constructor(r,s=null){this.stream=r,this.config=s,this.state="inactive",this.em=document.createDocumentFragment(),this.encoder=K(_.encoder);let n=this;this.encoder.addEventListener("message",e=>{let o=new Event("dataavailable");o.data=new Blob([e.data],{type:n.mimeType}),n.em.dispatchEvent(o),n.state==="inactive"&&n.em.dispatchEvent(new Event("stop"))})}start(r){if(this.state!=="inactive")return this.em.dispatchEvent(x("start"));this.state="recording",h||(h=new C(this.config)),this.clone=this.stream.clone(),this.input=h.createMediaStreamSource(this.clone),this.processor=h.createScriptProcessor(2048,1,1),this.encoder.postMessage(["init",h.sampleRate]),this.processor.onaudioprocess=s=>{this.state==="recording"&&this.encoder.postMessage(["encode",s.inputBuffer.getChannelData(0)])},this.input.connect(this.processor),this.processor.connect(h.destination),this.em.dispatchEvent(new Event("start")),r&&(this.slicing=setInterval(()=>{this.state==="recording"&&this.requestData()},r))}stop(){return this.state==="inactive"?this.em.dispatchEvent(x("stop")):(this.requestData(),this.state="inactive",this.clone.getTracks().forEach(r=>{r.stop()}),this.processor.disconnect(),this.input.disconnect(),clearInterval(this.slicing))}pause(){return this.state!=="recording"?this.em.dispatchEvent(x("pause")):(this.state="paused",this.em.dispatchEvent(new Event("pause")))}resume(){return this.state!=="paused"?this.em.dispatchEvent(x("resume")):(this.state="recording",this.em.dispatchEvent(new Event("resume")))}requestData(){return this.state==="inactive"?this.em.dispatchEvent(x("requestData")):this.encoder.postMessage(["dump",h.sampleRate])}addEventListener(...r){this.em.addEventListener(...r)}removeEventListener(...r){this.em.removeEventListener(...r)}dispatchEvent(...r){this.em.dispatchEvent(...r)}}_.prototype.mimeType="audio/wav";_.isTypeSupported=a=>_.prototype.mimeType===a;_.notSupported=!navigator.mediaDevices||!C;_.encoder=G;const X=()=>{importScripts("https://cdnjs.cloudflare.com/ajax/libs/lamejs/1.2.0/lame.min.js");let a=1,r=128,s=44100,n,e=new Int8Array;function o(t,w){if(w.length===0)return t;let l=new Int8Array(t.length+w.length);return l.set(t),l.set(w,t.length),l}function d(t){n=new lamejs.Mp3Encoder(a,t||s,r)}function m(t){for(let l=0;l<t.length;l++)t[l]=t[l]*32767.5;let w=n.encodeBuffer(t);e=o(e,w)}function i(){let t=n.flush();e=o(e,t);let w=e.buffer;e=new Int8Array,postMessage(w,[w])}onmessage=t=>{t.data[0]==="init"?d(t.data[1]):t.data[0]==="encode"?m(t.data[1]):i(t.data[1])}};var S,y=O;y.createRoot,S=y.hydrateRoot;var J={VITE_OBSERVE_APP_ID:"",VITE_BOAT_URL:"http://localhost:3003",VITE_BOAT_SIGNAL:"ws://localhost:3003",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};_.encoder=X;_.prototype.mimeType="audio/mpeg";window.MediaRecorder=_;J.NODE_ENV==="production"&&A.init("phc_qmxF7NTz6XUnYUDoMpkTign6mujS8F8VqR75wb0Bsl7",{api_host:"https://eu.posthog.com"});u.startTransition(()=>{S(document,b.jsx(u.StrictMode,{children:b.jsx(Y,{})}))});
