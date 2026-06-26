(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Yd=!1;var cd=Array.isArray,Kp=Array.prototype.indexOf,dd=Array.from,Ch=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,Ph=Object.getOwnPropertyDescriptors,Zp=Object.prototype,Jp=Array.prototype,ud=Object.getPrototypeOf,jd=Object.isExtensible;function ea(n){return typeof n=="function"}const cn=()=>{};function Qp(n){return n()}function fo(n){for(var e=0;e<n.length;e++)n[e]()}const ni=2,Ih=4,Do=8,No=16,Bi=32,ma=64,po=128,Un=256,mo=512,yn=1024,xi=2048,sr=4096,Di=8192,Uo=16384,Lh=32768,va=65536,em=1<<17,tm=1<<19,Dh=1<<20,jl=1<<21,nr=Symbol("$state"),Nh=Symbol("legacy props"),nm=Symbol("");let vo=[];function im(){var n=vo;vo=[],fo(n)}function os(n){vo.length===0&&queueMicrotask(im),vo.push(n)}function Uh(n){return n===this.v}function Fh(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function hd(n){return!Fh(n,this.v)}function rm(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function am(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function sm(n){throw new Error("https://svelte.dev/e/effect_orphan")}function om(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function lm(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function cm(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function dm(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function um(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let ga=!1,hm=!1;function fm(){ga=!0}const fd=1,pd=2,Oh=4,pm=8,mm=16,vm=1,gm=2,xm=4,_m=8,bm=16,ym=1,Sm=2,Mm=4,Bh=1,Em=2,wn=Symbol(),wm="http://www.w3.org/1999/xhtml",Tm="http://www.w3.org/2000/svg";function kh(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let Dt=null;function Kd(n){Dt=n}function Rt(n,e=!1,t){var i=Dt={p:Dt,c:null,d:!1,e:null,m:!1,s:n,x:null,l:null};ga&&!e&&(Dt.l={s:null,u:null,r1:[],r2:Za(!1)}),md(()=>{i.d=!0})}function Ct(n){const e=Dt;if(e!==null){const s=e.e;if(s!==null){var t=St,i=At;e.e=null;try{for(var r=0;r<s.length;r++){var a=s[r];_i(a.effect),Xn(a.reaction),Ho(a.fn)}}finally{_i(t),Xn(i)}}Dt=e.p,e.m=!0}return{}}function Fo(){return!ga||Dt!==null&&Dt.l===null}function Sr(n){if(typeof n!="object"||n===null||nr in n)return n;const e=ud(n);if(e!==Zp&&e!==Jp)return n;var t=new Map,i=cd(n),r=Pi(0),a=At,s=o=>{var l=At;Xn(a);var c=o();return Xn(l),c};return i&&t.set("length",Pi(n.length)),new Proxy(n,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&cm();var d=t.get(l);return d===void 0?(d=s(()=>Pi(c.value)),t.set(l,d)):Ce(d,s(()=>Sr(c.value))),!0},deleteProperty(o,l){var c=t.get(l);if(c===void 0)l in o&&(t.set(l,s(()=>Pi(wn))),sl(r));else{if(i&&typeof l=="string"){var d=t.get("length"),h=Number(l);Number.isInteger(h)&&h<d.v&&Ce(d,h)}Ce(c,wn),sl(r)}return!0},get(o,l,c){var p;if(l===nr)return n;var d=t.get(l),h=l in o;if(d===void 0&&(!h||(p=tr(o,l))!=null&&p.writable)&&(d=s(()=>Pi(Sr(h?o[l]:wn))),t.set(l,d)),d!==void 0){var u=T(d);return u===wn?void 0:u}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var d=t.get(l);d&&(c.value=T(d))}else if(c===void 0){var h=t.get(l),u=h==null?void 0:h.v;if(h!==void 0&&u!==wn)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(o,l){var u;if(l===nr)return!0;var c=t.get(l),d=c!==void 0&&c.v!==wn||Reflect.has(o,l);if(c!==void 0||St!==null&&(!d||(u=tr(o,l))!=null&&u.writable)){c===void 0&&(c=s(()=>Pi(d?Sr(o[l]):wn)),t.set(l,c));var h=T(c);if(h===wn)return!1}return d},set(o,l,c,d){var _;var h=t.get(l),u=l in o;if(i&&l==="length")for(var p=c;p<h.v;p+=1){var g=t.get(p+"");g!==void 0?Ce(g,wn):p in o&&(g=s(()=>Pi(wn)),t.set(p+"",g))}h===void 0?(!u||(_=tr(o,l))!=null&&_.writable)&&(h=s(()=>Pi(void 0)),Ce(h,s(()=>Sr(c))),t.set(l,h)):(u=h.v!==wn,Ce(h,s(()=>Sr(c))));var x=Reflect.getOwnPropertyDescriptor(o,l);if(x!=null&&x.set&&x.set.call(d,c),!u){if(i&&typeof l=="string"){var m=t.get("length"),f=Number(l);Number.isInteger(f)&&f>=m.v&&Ce(m,f+1)}sl(r)}return!0},ownKeys(o){T(r);var l=Reflect.ownKeys(o).filter(h=>{var u=t.get(h);return u===void 0||u.v!==wn});for(var[c,d]of t)d.v!==wn&&!(c in o)&&l.push(c);return l},setPrototypeOf(){dm()}})}function sl(n,e=1){Ce(n,n.v+e)}function ia(n){var e=ni|xi,t=At!==null&&(At.f&ni)!==0?At:null;return St===null||t!==null&&(t.f&Un)!==0?e|=Un:St.f|=Dh,{ctx:Dt,deps:null,effects:null,equals:Uh,f:e,fn:n,reactions:null,rv:0,v:null,wv:0,parent:t??St}}function li(n){const e=ia(n);return qh(e),e}function ft(n){const e=ia(n);return e.equals=hd,e}function zh(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)yi(e[t])}}function Am(n){for(var e=n.parent;e!==null;){if((e.f&ni)===0)return e;e=e.parent}return null}function Hh(n){var e,t=St;_i(Am(n));try{zh(n),e=Zh(n)}finally{_i(t)}return e}function Vh(n){var e=Hh(n),t=(Ji||(n.f&Un)!==0)&&n.deps!==null?sr:yn;qn(n,t),n.equals(e)||(n.v=e,n.wv=jh())}const Ka=new Map;function Za(n,e){var t={f:0,v:n,reactions:null,equals:Uh,rv:0,wv:0};return t}function Pi(n,e){const t=Za(n);return qh(t),t}function ct(n,e=!1){var i;const t=Za(n);return e||(t.equals=hd),ga&&Dt!==null&&Dt.l!==null&&((i=Dt.l).s??(i.s=[])).push(t),t}function Ce(n,e,t=!1){At!==null&&!ui&&Fo()&&(At.f&(ni|No))!==0&&!(xn!=null&&xn.includes(n))&&um();let i=t?Sr(e):e;return Kl(n,i)}function Kl(n,e){if(!n.equals(e)){var t=n.v;cs?Ka.set(n,e):Ka.set(n,t),n.v=e,(n.f&ni)!==0&&((n.f&xi)!==0&&Hh(n),qn(n,(n.f&Un)===0?yn:sr)),n.wv=jh(),Gh(n,xi),Fo()&&St!==null&&(St.f&yn)!==0&&(St.f&(Bi|ma))===0&&(Hn===null?Im([n]):Hn.push(n))}return e}function Gh(n,e){var t=n.reactions;if(t!==null)for(var i=Fo(),r=t.length,a=0;a<r;a++){var s=t[a],o=s.f;(o&xi)===0&&(!i&&s===St||(qn(s,e),(o&(yn|Un))!==0&&((o&ni)!==0?Gh(s,sr):zo(s))))}}let Rm=!1;var Zd,Wh,$h,Xh;function Cm(){if(Zd===void 0){Zd=window,Wh=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;$h=tr(e,"firstChild").get,Xh=tr(e,"nextSibling").get,jd(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),jd(t)&&(t.__t=void 0)}}function ls(n=""){return document.createTextNode(n)}function Dn(n){return $h.call(n)}function Oo(n){return Xh.call(n)}function v(n,e){return Dn(n)}function Cn(n,e){{var t=Dn(n);return t instanceof Comment&&t.data===""?Oo(t):t}}function A(n,e=1,t=!1){let i=n;for(;e--;)i=Oo(i);return i}function Pm(n){n.textContent=""}let eo=!1,Zl=!1,go=null,Ar=!1,cs=!1;function Jd(n){cs=n}let to=[];let At=null,ui=!1;function Xn(n){At=n}let St=null;function _i(n){St=n}let xn=null;function qh(n){At!==null&&At.f&jl&&(xn===null?xn=[n]:xn.push(n))}let mn=null,Ln=0,Hn=null;function Im(n){Hn=n}let Yh=1,xo=0,Ji=!1;function jh(){return++Yh}function xa(n){var h;var e=n.f;if((e&xi)!==0)return!0;if((e&sr)!==0){var t=n.deps,i=(e&Un)!==0;if(t!==null){var r,a,s=(e&mo)!==0,o=i&&St!==null&&!Ji,l=t.length;if(s||o){var c=n,d=c.parent;for(r=0;r<l;r++)a=t[r],(s||!((h=a==null?void 0:a.reactions)!=null&&h.includes(c)))&&(a.reactions??(a.reactions=[])).push(c);s&&(c.f^=mo),o&&d!==null&&(d.f&Un)===0&&(c.f^=Un)}for(r=0;r<l;r++)if(a=t[r],xa(a)&&Vh(a),a.wv>n.wv)return!0}(!i||St!==null&&!Ji)&&qn(n,yn)}return!1}function Lm(n,e){for(var t=e;t!==null;){if((t.f&po)!==0)try{t.fn(n);return}catch{t.f^=po}t=t.parent}throw eo=!1,n}function Qd(n){return(n.f&Uo)===0&&(n.parent===null||(n.parent.f&po)===0)}function Bo(n,e,t,i){if(eo){if(t===null&&(eo=!1),Qd(e))throw n;return}if(t!==null&&(eo=!0),Lm(n,e),Qd(e))throw n}function Kh(n,e,t=!0){var i=n.reactions;if(i!==null)for(var r=0;r<i.length;r++){var a=i[r];xn!=null&&xn.includes(n)||((a.f&ni)!==0?Kh(a,e,!1):e===a&&(t?qn(a,xi):(a.f&yn)!==0&&qn(a,sr),zo(a)))}}function Zh(n){var p;var e=mn,t=Ln,i=Hn,r=At,a=Ji,s=xn,o=Dt,l=ui,c=n.f;mn=null,Ln=0,Hn=null,Ji=(c&Un)!==0&&(ui||!Ar||At===null),At=(c&(Bi|ma))===0?n:null,xn=null,Kd(n.ctx),ui=!1,xo++,n.f|=jl;try{var d=(0,n.fn)(),h=n.deps;if(mn!==null){var u;if(_o(n,Ln),h!==null&&Ln>0)for(h.length=Ln+mn.length,u=0;u<mn.length;u++)h[Ln+u]=mn[u];else n.deps=h=mn;if(!Ji)for(u=Ln;u<h.length;u++)((p=h[u]).reactions??(p.reactions=[])).push(n)}else h!==null&&Ln<h.length&&(_o(n,Ln),h.length=Ln);if(Fo()&&Hn!==null&&!ui&&h!==null&&(n.f&(ni|sr|xi))===0)for(u=0;u<Hn.length;u++)Kh(Hn[u],n);return r!==null&&r!==n&&(xo++,Hn!==null&&(i===null?i=Hn:i.push(...Hn))),d}finally{mn=e,Ln=t,Hn=i,At=r,Ji=a,xn=s,Kd(o),ui=l,n.f^=jl}}function Dm(n,e){let t=e.reactions;if(t!==null){var i=Kp.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}t===null&&(e.f&ni)!==0&&(mn===null||!mn.includes(e))&&(qn(e,sr),(e.f&(Un|mo))===0&&(e.f^=mo),zh(e),_o(e,0))}function _o(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)Dm(n,t[i])}function ko(n){var e=n.f;if((e&Uo)===0){qn(n,yn);var t=St,i=Dt,r=Ar;St=n,Ar=!0;try{(e&No)!==0?Vm(n):ef(n),Qh(n);var a=Zh(n);n.teardown=typeof a=="function"?a:null,n.wv=Yh;var s=n.deps,o;Yd&&hm&&n.f&xi}catch(l){Bo(l,n,t,i||n.ctx)}finally{Ar=r,St=t}}}function Nm(){try{om()}catch(n){if(go!==null)Bo(n,go,null);else throw n}}function Um(){var n=Ar;try{var e=0;for(Ar=!0;to.length>0;){e++>1e3&&Nm();var t=to,i=t.length;to=[];for(var r=0;r<i;r++){var a=Om(t[r]);Fm(a)}Ka.clear()}}finally{Zl=!1,Ar=n,go=null}}function Fm(n){var e=n.length;if(e!==0)for(var t=0;t<e;t++){var i=n[t];if((i.f&(Uo|Di))===0)try{xa(i)&&(ko(i),i.deps===null&&i.first===null&&i.nodes_start===null&&(i.teardown===null?nf(i):i.fn=null))}catch(r){Bo(r,i,null,i.ctx)}}}function zo(n){Zl||(Zl=!0,queueMicrotask(Um));for(var e=go=n;e.parent!==null;){e=e.parent;var t=e.f;if((t&(ma|Bi))!==0){if((t&yn)===0)return;e.f^=yn}}to.push(e)}function Om(n){for(var e=[],t=n;t!==null;){var i=t.f,r=(i&(Bi|ma))!==0,a=r&&(i&yn)!==0;if(!a&&(i&Di)===0){if((i&Ih)!==0)e.push(t);else if(r)t.f^=yn;else try{xa(t)&&ko(t)}catch(l){Bo(l,t,null,t.ctx)}var s=t.first;if(s!==null){t=s;continue}}var o=t.parent;for(t=t.next;t===null&&o!==null;)t=o.next,o=o.parent}return e}function T(n){var e=n.f,t=(e&ni)!==0;if(At!==null&&!ui){if(!(xn!=null&&xn.includes(n))){var i=At.deps;n.rv<xo&&(n.rv=xo,mn===null&&i!==null&&i[Ln]===n?Ln++:mn===null?mn=[n]:(!Ji||!mn.includes(n))&&mn.push(n))}}else if(t&&n.deps===null&&n.effects===null){var r=n,a=r.parent;a!==null&&(a.f&Un)===0&&(r.f^=Un)}return t&&(r=n,xa(r)&&Vh(r)),cs&&Ka.has(n)?Ka.get(n):n.v}function Fi(n){var e=ui;try{return ui=!0,n()}finally{ui=e}}const Bm=-7169;function qn(n,e){n.f=n.f&Bm|e}function bo(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(nr in n)Jl(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&nr in t&&Jl(t)}}}function Jl(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let i in n)try{Jl(n[i],e)}catch{}const t=ud(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const i=Ph(t);for(let r in i){const a=i[r].get;if(a)try{a.call(n)}catch{}}}}}function Jh(n){St===null&&At===null&&sm(),At!==null&&(At.f&Un)!==0&&St===null&&am(),cs&&rm()}function km(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function _a(n,e,t,i=!0){var r=St,a={ctx:Dt,deps:null,nodes_start:null,nodes_end:null,f:n|xi,first:null,fn:e,last:null,next:null,parent:r,prev:null,teardown:null,transitions:null,wv:0};if(t)try{ko(a),a.f|=Lh}catch(l){throw yi(a),l}else e!==null&&zo(a);var s=t&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Dh|po))===0;if(!s&&i&&(r!==null&&km(a,r),At!==null&&(At.f&ni)!==0)){var o=At;(o.effects??(o.effects=[])).push(a)}return a}function md(n){const e=_a(Do,null,!1);return qn(e,yn),e.teardown=n,e}function yo(n){Jh();var e=St!==null&&(St.f&Bi)!==0&&Dt!==null&&!Dt.m;if(e){var t=Dt;(t.e??(t.e=[])).push({fn:n,effect:St,reaction:At})}else{var i=Ho(n);return i}}function zm(n){return Jh(),Vo(n)}function Hm(n){const e=_a(ma,n,!0);return(t={})=>new Promise(i=>{t.outro?Ja(e,()=>{yi(e),i(void 0)}):(yi(e),i(void 0))})}function Ho(n){return _a(Ih,n,!1)}function bi(n,e){var t=Dt,i={effect:null,ran:!1};t.l.r1.push(i),i.effect=Vo(()=>{n(),!i.ran&&(i.ran=!0,Ce(t.l.r2,!0),Fi(e))})}function Ir(){var n=Dt;Vo(()=>{if(T(n.l.r2)){for(var e of n.l.r1){var t=e.effect;(t.f&yn)!==0&&qn(t,sr),xa(t)&&ko(t),e.ran=!1}n.l.r2.v=!1}})}function Vo(n){return _a(Do,n,!0)}function $e(n,e=[],t=ia){const i=e.map(t);return ds(()=>n(...i.map(T)))}function ds(n,e=0){return _a(Do|No|e,n,!0)}function Cr(n,e=!0){return _a(Do|Bi,n,!0,e)}function Qh(n){var e=n.teardown;if(e!==null){const t=cs,i=At;Jd(!0),Xn(null);try{e.call(null)}finally{Jd(t),Xn(i)}}}function ef(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){var i=t.next;(t.f&ma)!==0?t.parent=null:yi(t,e),t=i}}function Vm(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&Bi)===0&&yi(e),e=t}}function yi(n,e=!0){var t=!1;(e||(n.f&tm)!==0)&&n.nodes_start!==null&&(tf(n.nodes_start,n.nodes_end),t=!0),ef(n,e&&!t),_o(n,0),qn(n,Uo);var i=n.transitions;if(i!==null)for(const a of i)a.stop();Qh(n);var r=n.parent;r!==null&&r.first!==null&&nf(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function tf(n,e){for(;n!==null;){var t=n===e?null:Oo(n);n.remove(),n=t}}function nf(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function Ja(n,e){var t=[];vd(n,t,!0),rf(t,()=>{yi(n),e&&e()})}function rf(n,e){var t=n.length;if(t>0){var i=()=>--t||e();for(var r of n)r.out(i)}else e()}function vd(n,e,t){if((n.f&Di)===0){if(n.f^=Di,n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&e.push(s);for(var i=n.first;i!==null;){var r=i.next,a=(i.f&va)!==0||(i.f&Bi)!==0;vd(i,e,a?t:!1),i=r}}}function Qa(n){af(n,!0)}function af(n,e){if((n.f&Di)!==0){n.f^=Di,(n.f&yn)===0&&(n.f^=yn),xa(n)&&(qn(n,xi),zo(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&va)!==0||(t.f&Bi)!==0;af(t,r?e:!1),t=i}if(n.transitions!==null)for(const a of n.transitions)(a.is_global||e)&&a.in()}}function Gm(n){return n.endsWith("capture")&&n!=="gotpointercapture"&&n!=="lostpointercapture"}const Wm=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function $m(n){return Wm.includes(n)}const Xm={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function qm(n){return n=n.toLowerCase(),Xm[n]??n}const Ym=["touchstart","touchmove"];function jm(n){return Ym.includes(n)}function Km(n,e){if(e){const t=document.body;n.autofocus=!0,os(()=>{document.activeElement===t&&n.focus()})}}function sf(n){var e=At,t=St;Xn(null),_i(null);try{return n()}finally{Xn(e),_i(t)}}const of=new Set,Ql=new Set;function lf(n,e,t,i={}){function r(a){if(i.capture||Va.call(e,a),!a.cancelBubble)return sf(()=>t==null?void 0:t.call(this,a))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?os(()=>{e.addEventListener(n,r,i)}):e.addEventListener(n,r,i),r}function kt(n,e,t,i,r){var a={capture:i,passive:r},s=lf(n,e,t,a);(e===document.body||e===window||e===document)&&md(()=>{e.removeEventListener(n,s,a)})}function cf(n){for(var e=0;e<n.length;e++)of.add(n[e]);for(var t of Ql)t(n)}function Va(n){var _;var e=this,t=e.ownerDocument,i=n.type,r=((_=n.composedPath)==null?void 0:_.call(n))||[],a=r[0]||n.target,s=0,o=n.__root;if(o){var l=r.indexOf(o);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(s=l)}if(a=r[s]||n.target,a!==e){Ch(n,"currentTarget",{configurable:!0,get(){return a||t}});var d=At,h=St;Xn(null),_i(null);try{for(var u,p=[];a!==null;){var g=a.assignedSlot||a.parentNode||a.host||null;try{var x=a["__"+i];if(x!=null&&(!a.disabled||n.target===a))if(cd(x)){var[m,...f]=x;m.apply(a,[n,...f])}else x.call(a,n)}catch(b){u?p.push(b):u=b}if(n.cancelBubble||g===e||g===null)break;a=g}if(u){for(let b of p)queueMicrotask(()=>{throw b});throw u}}finally{n.__root=e,delete n.currentTarget,Xn(d),_i(h)}}}function gd(n){var e=document.createElement("template");return e.innerHTML=n,e.content}function ir(n,e){var t=St;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function be(n,e){var t=(e&Bh)!==0,i=(e&Em)!==0,r,a=!n.startsWith("<!>");return()=>{r===void 0&&(r=gd(a?n:"<!>"+n),t||(r=Dn(r)));var s=i||Wh?document.importNode(r,!0):r.cloneNode(!0);if(t){var o=Dn(s),l=s.lastChild;ir(o,l)}else ir(s,s);return s}}function ba(n,e,t="svg"){var i=!n.startsWith("<!>"),r=(e&Bh)!==0,a=`<${t}>${i?n:"<!>"+n}</${t}>`,s;return()=>{if(!s){var o=gd(a),l=Dn(o);if(r)for(s=document.createDocumentFragment();Dn(l);)s.appendChild(Dn(l));else s=Dn(l)}var c=s.cloneNode(!0);if(r){var d=Dn(c),h=c.lastChild;ir(d,h)}else ir(c,c);return c}}function Ni(n=""){{var e=ls(n+"");return ir(e,e),e}}function or(){var n=document.createDocumentFragment(),e=document.createComment(""),t=ls();return n.append(e,t),ir(e,t),n}function le(n,e){n!==null&&n.before(e)}let So=!0;function eu(n){So=n}function B(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=t,n.nodeValue=t+"")}function Zm(n,e){return Jm(n,e)}const Br=new Map;function Jm(n,{target:e,anchor:t,props:i={},events:r,context:a,intro:s=!0}){Cm();var o=new Set,l=h=>{for(var u=0;u<h.length;u++){var p=h[u];if(!o.has(p)){o.add(p);var g=jm(p);e.addEventListener(p,Va,{passive:g});var x=Br.get(p);x===void 0?(document.addEventListener(p,Va,{passive:g}),Br.set(p,1)):Br.set(p,x+1)}}};l(dd(of)),Ql.add(l);var c=void 0,d=Hm(()=>{var h=t??e.appendChild(ls());return Cr(()=>{if(a){Rt({});var u=Dt;u.c=a}r&&(i.$$events=r),So=s,c=n(h,i)||{},So=!0,a&&Ct()}),()=>{var g;for(var u of o){e.removeEventListener(u,Va);var p=Br.get(u);--p===0?(document.removeEventListener(u,Va),Br.delete(u)):Br.set(u,p)}Ql.delete(l),h!==t&&((g=h.parentNode)==null||g.removeChild(h))}});return Qm.set(c,d),c}let Qm=new WeakMap;function tt(n,e,[t,i]=[0,0]){var r=n,a=null,s=null,o=wn,l=t>0?va:0,c=!1;const d=(u,p=!0)=>{c=!0,h(p,u)},h=(u,p)=>{o!==(o=u)&&(o?(a?Qa(a):p&&(a=Cr(()=>p(r))),s&&Ja(s,()=>{s=null})):(s?Qa(s):p&&(s=Cr(()=>p(r,[t+1,i]))),a&&Ja(a,()=>{a=null})))};ds(()=>{c=!1,e(d),c||h(null,null)},l)}let Rr=null;function tu(n){Rr=n}function $t(n,e){return e}function e0(n,e,t,i){for(var r=[],a=e.length,s=0;s<a;s++)vd(e[s].e,r,!0);var o=a>0&&r.length===0&&t!==null;if(o){var l=t.parentNode;Pm(l),l.append(t),i.clear(),ji(n,e[0].prev,e[a-1].next)}rf(r,()=>{for(var c=0;c<a;c++){var d=e[c];o||(i.delete(d.k),ji(n,d.prev,d.next)),yi(d.e,!o)}})}function zt(n,e,t,i,r,a=null){var s=n,o={flags:e,items:new Map,first:null},l=(e&Oh)!==0;if(l){var c=n;s=c.appendChild(ls())}var d=null,h=!1,u=ft(()=>{var p=t();return cd(p)?p:p==null?[]:dd(p)});ds(()=>{var p=T(u),g=p.length;h&&g===0||(h=g===0,t0(p,o,s,r,e,i,t),a!==null&&(g===0?d?Qa(d):d=Cr(()=>a(s)):d!==null&&Ja(d,()=>{d=null})),T(u))})}function t0(n,e,t,i,r,a,s){var $,z,V,H;var o=(r&pm)!==0,l=(r&(fd|pd))!==0,c=n.length,d=e.items,h=e.first,u=h,p,g=null,x,m=[],f=[],_,b,E,y;if(o)for(y=0;y<c;y+=1)_=n[y],b=a(_,y),E=d.get(b),E!==void 0&&(($=E.a)==null||$.measure(),(x??(x=new Set)).add(E));for(y=0;y<c;y+=1){if(_=n[y],b=a(_,y),E=d.get(b),E===void 0){var R=u?u.e.nodes_start:t;g=i0(R,e,g,g===null?e.first:g.next,_,b,y,i,r,s),d.set(b,g),m=[],f=[],u=g.next;continue}if(l&&n0(E,_,y,r),(E.e.f&Di)!==0&&(Qa(E.e),o&&((z=E.a)==null||z.unfix(),(x??(x=new Set)).delete(E))),E!==u){if(p!==void 0&&p.has(E)){if(m.length<f.length){var C=f[0],L;g=C.prev;var M=m[0],w=m[m.length-1];for(L=0;L<m.length;L+=1)nu(m[L],C,t);for(L=0;L<f.length;L+=1)p.delete(f[L]);ji(e,M.prev,w.next),ji(e,g,M),ji(e,w,C),u=C,g=w,y-=1,m=[],f=[]}else p.delete(E),nu(E,u,t),ji(e,E.prev,E.next),ji(e,E,g===null?e.first:g.next),ji(e,g,E),g=E;continue}for(m=[],f=[];u!==null&&u.k!==b;)(u.e.f&Di)===0&&(p??(p=new Set)).add(u),f.push(u),u=u.next;if(u===null)continue;E=u}m.push(E),g=E,u=E.next}if(u!==null||p!==void 0){for(var I=p===void 0?[]:dd(p);u!==null;)(u.e.f&Di)===0&&I.push(u),u=u.next;var N=I.length;if(N>0){var O=(r&Oh)!==0&&c===0?t:null;if(o){for(y=0;y<N;y+=1)(V=I[y].a)==null||V.measure();for(y=0;y<N;y+=1)(H=I[y].a)==null||H.fix()}e0(e,I,O,d)}}o&&os(()=>{var J;if(x!==void 0)for(E of x)(J=E.a)==null||J.apply()}),St.first=e.first&&e.first.e,St.last=g&&g.e}function n0(n,e,t,i){(i&fd)!==0&&Kl(n.v,e),(i&pd)!==0?Kl(n.i,t):n.i=t}function i0(n,e,t,i,r,a,s,o,l,c){var d=Rr,h=(l&fd)!==0,u=(l&mm)===0,p=h?u?ct(r):Za(r):r,g=(l&pd)===0?s:Za(s),x={i:g,v:p,k:a,a:null,e:null,prev:t,next:i};Rr=x;try{return x.e=Cr(()=>o(n,p,g,c),Rm),x.e.prev=t&&t.e,x.e.next=i&&i.e,t===null?e.first=x:(t.next=x,t.e.next=x.e),i!==null&&(i.prev=x,i.e.prev=x.e),x}finally{Rr=d}}function nu(n,e,t){for(var i=n.next?n.next.e.nodes_start:t,r=e?e.e.nodes_start:t,a=n.e.nodes_start;a!==i;){var s=Oo(a);r.before(a),a=s}}function ji(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function dn(n,e,t=!1,i=!1,r=!1){var a=n,s="";$e(()=>{var o=St;if(s!==(s=e()??"")&&(o.nodes_start!==null&&(tf(o.nodes_start,o.nodes_end),o.nodes_start=o.nodes_end=null),s!=="")){var l=s+"";t?l=`<svg>${l}</svg>`:i&&(l=`<math>${l}</math>`);var c=gd(l);if((t||i)&&(c=Dn(c)),ir(Dn(c),c.lastChild),t||i)for(;Dn(c);)a.before(Dn(c));else a.before(c)}})}function df(n,e,...t){var i=n,r=cn,a;ds(()=>{r!==(r=e())&&(a&&(yi(a),a=null),a=Cr(()=>r(i,...t)))},va)}function r0(n,e,t,i,r,a){var s,o,l=null,c=n,d,h=Rr;ds(()=>{const u=e()||null;var p=Tm;if(u!==s){var g=Rr;tu(h),d&&(u===null?Ja(d,()=>{d=null,o=null}):u===o?Qa(d):(yi(d),eu(!1))),u&&u!==o&&(d=Cr(()=>{if(l=document.createElementNS(p,u),ir(l,l),i){var x=l.appendChild(ls());i(l,x)}St.nodes_end=l,c.before(l)})),s=u,s&&(o=s),eu(!0),tu(g)}},va)}function uf(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(e=0;e<r;e++)n[e]&&(t=uf(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function a0(){for(var n,e,t=0,i="",r=arguments.length;t<r;t++)(n=arguments[t])&&(e=uf(n))&&(i&&(i+=" "),i+=e);return i}function vn(n){return typeof n=="object"?a0(n):n??""}const iu=[...` 	
\r\f \v\uFEFF`];function s0(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var r in t)if(t[r])i=i?i+" "+r:r;else if(i.length)for(var a=r.length,s=0;(s=i.indexOf(r,s))>=0;){var o=s+a;(s===0||iu.includes(i[s-1]))&&(o===i.length||iu.includes(i[o]))?i=(s===0?"":i.substring(0,s))+i.substring(o+1):s=o}}return i===""?null:i}function ru(n,e=!1){var t=e?" !important;":";",i="";for(var r in n){var a=n[r];a!=null&&a!==""&&(i+=" "+r+": "+a+t)}return i}function ol(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function o0(n,e){if(e){var t="",i,r;if(Array.isArray(e)?(i=e[0],r=e[1]):i=e,n){n=String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,s=0,o=!1,l=[];i&&l.push(...Object.keys(i).map(ol)),r&&l.push(...Object.keys(r).map(ol));var c=0,d=-1;const x=n.length;for(var h=0;h<x;h++){var u=n[h];if(o?u==="/"&&n[h-1]==="*"&&(o=!1):a?a===u&&(a=!1):u==="/"&&n[h+1]==="*"?o=!0:u==='"'||u==="'"?a=u:u==="("?s++:u===")"&&s--,!o&&a===!1&&s===0){if(u===":"&&d===-1)d=h;else if(u===";"||h===x-1){if(d!==-1){var p=ol(n.substring(c,d).trim());if(!l.includes(p)){u!==";"&&h++;var g=n.substring(c,h).trim();t+=" "+g+";"}}c=h+1,d=-1}}}}return i&&(t+=ru(i)),r&&(t+=ru(r,!0)),t=t.trim(),t===""?null:t}return n==null?null:String(n)}function Me(n,e,t,i,r,a){var s=n.__className;if(s!==t||s===void 0){var o=s0(t,i,a);o==null?n.removeAttribute("class"):e?n.className=o:n.setAttribute("class",o),n.__className=t}else if(a&&r!==a)for(var l in a){var c=!!a[l];(r==null||c!==!!r[l])&&n.classList.toggle(l,c)}return a}function ll(n,e={},t,i){for(var r in t){var a=t[r];e[r]!==a&&(t[r]==null?n.style.removeProperty(r):n.style.setProperty(r,a,i))}}function _n(n,e,t,i){var r=n.__style;if(r!==e){var a=o0(e,i);a==null?n.removeAttribute("style"):n.style.cssText=a,n.__style=e}else i&&(Array.isArray(i)?(ll(n,t==null?void 0:t[0],i[0]),ll(n,t==null?void 0:t[1],i[1],"important")):ll(n,t,i));return i}const La=Symbol("class"),Da=Symbol("style"),hf=Symbol("is custom element"),ff=Symbol("is html");function l0(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function Se(n,e,t,i){var r=pf(n);r[e]!==(r[e]=t)&&(e==="loading"&&(n[nm]=t),t==null?n.removeAttribute(e):typeof t!="string"&&mf(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function au(n,e,t,i,r=!1){var a=pf(n),s=a[hf],o=!a[ff],l=e||{},c=n.tagName==="OPTION";for(var d in e)d in t||(t[d]=null);t.class?t.class=vn(t.class):t[La]&&(t.class=null),t[Da]&&(t.style??(t.style=null));var h=mf(n);for(const b in t){let E=t[b];if(c&&b==="value"&&E==null){n.value=n.__value="",l[b]=E;continue}if(b==="class"){var u=n.namespaceURI==="http://www.w3.org/1999/xhtml";Me(n,u,E,i,e==null?void 0:e[La],t[La]),l[b]=E,l[La]=t[La];continue}if(b==="style"){_n(n,E,e==null?void 0:e[Da],t[Da]),l[b]=E,l[Da]=t[Da];continue}var p=l[b];if(E!==p){l[b]=E;var g=b[0]+b[1];if(g!=="$$")if(g==="on"){const y={},R="$$"+b;let C=b.slice(2);var x=$m(C);if(Gm(C)&&(C=C.slice(0,-7),y.capture=!0),!x&&p){if(E!=null)continue;n.removeEventListener(C,l[R],y),l[R]=null}if(E!=null)if(x)n[`__${C}`]=E,cf([C]);else{let L=function(M){l[b].call(this,M)};var _=L;l[R]=lf(C,n,L,y)}else x&&(n[`__${C}`]=void 0)}else if(b==="style")Se(n,b,E);else if(b==="autofocus")Km(n,!!E);else if(!s&&(b==="__value"||b==="value"&&E!=null))n.value=n.__value=E;else if(b==="selected"&&c)l0(n,E);else{var m=b;o||(m=qm(m));var f=m==="defaultValue"||m==="defaultChecked";if(E==null&&!s&&!f)if(a[b]=null,m==="value"||m==="checked"){let y=n;const R=e===void 0;if(m==="value"){let C=y.defaultValue;y.removeAttribute(m),y.defaultValue=C,y.value=y.__value=R?C:null}else{let C=y.defaultChecked;y.removeAttribute(m),y.defaultChecked=C,y.checked=R?C:!1}}else n.removeAttribute(b);else f||h.includes(m)&&(s||typeof E!="string")?n[m]=E:typeof E!="function"&&Se(n,m,E)}}}return l}function pf(n){return n.__attributes??(n.__attributes={[hf]:n.nodeName.includes("-"),[ff]:n.namespaceURI===wm})}var su=new Map;function mf(n){var e=su.get(n.nodeName);if(e)return e;su.set(n.nodeName,e=[]);for(var t,i=n,r=Element.prototype;r!==i;){t=Ph(i);for(var a in t)t[a].set&&e.push(a);i=ud(i)}return e}const c0=()=>performance.now(),Ii={tick:n=>requestAnimationFrame(n),now:()=>c0(),tasks:new Set};function vf(){const n=Ii.now();Ii.tasks.forEach(e=>{e.c(n)||(Ii.tasks.delete(e),e.f())}),Ii.tasks.size!==0&&Ii.tick(vf)}function d0(n){let e;return Ii.tasks.size===0&&Ii.tick(vf),{promise:new Promise(t=>{Ii.tasks.add(e={c:n,f:t})}),abort(){Ii.tasks.delete(e)}}}function Is(n,e){sf(()=>{n.dispatchEvent(new CustomEvent(e))})}function u0(n){if(n==="float")return"cssFloat";if(n==="offset")return"cssOffset";if(n.startsWith("--"))return n;const e=n.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function ou(n){const e={},t=n.split(";");for(const i of t){const[r,a]=i.split(":");if(!r||a===void 0)break;const s=u0(r.trim());e[s]=a.trim()}return e}const h0=n=>n;function f0(n,e,t){var i=Rr,r,a,s,o=null;i.a??(i.a={element:n,measure(){r=this.element.getBoundingClientRect()},apply(){if(s==null||s.abort(),a=this.element.getBoundingClientRect(),r.left!==a.left||r.right!==a.right||r.top!==a.top||r.bottom!==a.bottom){const l=e()(this.element,{from:r,to:a},t==null?void 0:t());s=Mo(this.element,l,void 0,1,()=>{s==null||s.abort(),s=void 0})}},fix(){if(!n.getAnimations().length){var{position:l,width:c,height:d}=getComputedStyle(n);if(l!=="absolute"&&l!=="fixed"){var h=n.style;o={position:h.position,width:h.width,height:h.height,transform:h.transform},h.position="absolute",h.width=c,h.height=d;var u=n.getBoundingClientRect();if(r.left!==u.left||r.top!==u.top){var p=`translate(${r.left-u.left}px, ${r.top-u.top}px)`;h.transform=h.transform?`${h.transform} ${p}`:p}}}},unfix(){if(o){var l=n.style;l.position=o.position,l.width=o.width,l.height=o.height,l.transform=o.transform}}}),i.a.element=n}function en(n,e,t,i){var r=(n&ym)!==0,a=(n&Sm)!==0,s=r&&a,o=(n&Mm)!==0,l=s?"both":r?"in":"out",c,d=e.inert,h=e.style.overflow,u,p;function g(){var b=At,E=St;Xn(null),_i(null);try{return c??(c=t()(e,(i==null?void 0:i())??{},{direction:l}))}finally{Xn(b),_i(E)}}var x={is_global:o,in(){var b;if(e.inert=d,!r){p==null||p.abort(),(b=p==null?void 0:p.reset)==null||b.call(p);return}a||u==null||u.abort(),Is(e,"introstart"),u=Mo(e,g(),p,1,()=>{Is(e,"introend"),u==null||u.abort(),u=c=void 0,e.style.overflow=h})},out(b){if(!a){b==null||b(),c=void 0;return}e.inert=!0,Is(e,"outrostart"),p=Mo(e,g(),u,0,()=>{Is(e,"outroend"),b==null||b()})},stop:()=>{u==null||u.abort(),p==null||p.abort()}},m=St;if((m.transitions??(m.transitions=[])).push(x),r&&So){var f=o;if(!f){for(var _=m.parent;_&&(_.f&va)!==0;)for(;(_=_.parent)&&(_.f&No)===0;);f=!_||(_.f&Lh)!==0}f&&Ho(()=>{Fi(()=>x.in())})}}function Mo(n,e,t,i,r){var a=i===1;if(ea(e)){var s,o=!1;return os(()=>{if(!o){var m=e({direction:a?"in":"out"});s=Mo(n,m,t,i,r)}}),{abort:()=>{o=!0,s==null||s.abort()},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(t==null||t.deactivate(),!(e!=null&&e.duration))return r(),{abort:cn,deactivate:cn,reset:cn,t:()=>i};const{delay:l=0,css:c,tick:d,easing:h=h0}=e;var u=[];if(a&&t===void 0&&(d&&d(0,1),c)){var p=ou(c(0,1));u.push(p,p)}var g=()=>1-i,x=n.animate(u,{duration:l});return x.onfinish=()=>{var m=(t==null?void 0:t.t())??1-i;t==null||t.abort();var f=i-m,_=e.duration*Math.abs(f),b=[];if(_>0){var E=!1;if(c)for(var y=Math.ceil(_/16.666666666666668),R=0;R<=y;R+=1){var C=m+f*h(R/y),L=ou(c(C,1-C));b.push(L),E||(E=L.overflow==="hidden")}E&&(n.style.overflow="hidden"),g=()=>{var M=x.currentTime;return m+f*h(M/_)},d&&d0(()=>{if(x.playState!=="running")return!1;var M=g();return d(M,1-M),!0})}x=n.animate(b,{duration:_,fill:"forwards"}),x.onfinish=()=>{g=()=>i,d==null||d(i,1-i),r()}},{abort:()=>{x&&(x.cancel(),x.effect=null,x.onfinish=cn)},deactivate:()=>{r=cn},reset:()=>{i===0&&(d==null||d(1,0))},t:()=>g()}}function lu(n,e){return n===e||(n==null?void 0:n[nr])===e}function ra(n={},e,t,i){return Ho(()=>{var r,a;return Vo(()=>{r=a,a=[],Fi(()=>{n!==t(...a)&&(e(n,...a),r&&lu(t(...r),n)&&e(null,...r))})}),()=>{os(()=>{a&&lu(t(...a),n)&&e(null,...a)})}}),n}function Vt(n=!1){const e=Dt,t=e.l.u;if(!t)return;let i=()=>bo(e.s);if(n){let r=0,a={};const s=ia(()=>{let o=!1;const l=e.s;for(const c in l)l[c]!==a[c]&&(a[c]=l[c],o=!0);return o&&r++,r});i=()=>T(s)}t.b.length&&zm(()=>{cu(e,i),fo(t.b)}),yo(()=>{const r=Fi(()=>t.m.map(Qp));return()=>{for(const a of r)typeof a=="function"&&a()}}),t.a.length&&yo(()=>{cu(e,i),fo(t.a)})}function cu(n,e){if(n.l.s)for(const t of n.l.s)T(t);e()}let Ls=!1,ec=Symbol();function Kt(n,e,t){const i=t[e]??(t[e]={store:null,source:ct(void 0),unsubscribe:cn});if(i.store!==n&&!(ec in t))if(i.unsubscribe(),i.store=n??null,n==null)i.source.v=void 0,i.unsubscribe=cn;else{var r=!0;i.unsubscribe=xd(n,a=>{r?i.source.v=a:Ce(i.source,a)}),r=!1}return n&&ec in t?y0(n):T(i.source)}function p0(n,e){return n.set(e),e}function sn(){const n={};function e(){md(()=>{for(var t in n)n[t].unsubscribe();Ch(n,ec,{enumerable:!1,value:!0})})}return[n,e]}function m0(n){var e=Ls;try{return Ls=!1,[n(),Ls]}finally{Ls=e}}const v0={get(n,e){if(!n.exclude.includes(e))return n.props[e]},set(n,e){return!1},getOwnPropertyDescriptor(n,e){if(!n.exclude.includes(e)&&e in n.props)return{enumerable:!0,configurable:!0,value:n.props[e]}},has(n,e){return n.exclude.includes(e)?!1:e in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(e=>!n.exclude.includes(e))}};function gf(n,e,t){return new Proxy({props:n,exclude:e},v0)}const g0={get(n,e){let t=n.props.length;for(;t--;){let i=n.props[t];if(ea(i)&&(i=i()),typeof i=="object"&&i!==null&&e in i)return i[e]}},set(n,e,t){let i=n.props.length;for(;i--;){let r=n.props[i];ea(r)&&(r=r());const a=tr(r,e);if(a&&a.set)return a.set(t),!0}return!1},getOwnPropertyDescriptor(n,e){let t=n.props.length;for(;t--;){let i=n.props[t];if(ea(i)&&(i=i()),typeof i=="object"&&i!==null&&e in i){const r=tr(i,e);return r&&!r.configurable&&(r.configurable=!0),r}}},has(n,e){if(e===nr||e===Nh)return!1;for(let t of n.props)if(ea(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(n){const e=[];for(let t of n.props){ea(t)&&(t=t());for(const i in t)e.includes(i)||e.push(i)}return e}};function x0(...n){return new Proxy({props:n},g0)}function du(n){var e;return((e=n.ctx)==null?void 0:e.d)??!1}function Ki(n,e,t,i){var R;var r=(t&vm)!==0,a=!ga||(t&gm)!==0,s=(t&_m)!==0,o=(t&bm)!==0,l=!1,c;s?[c,l]=m0(()=>n[e]):c=n[e];var d=nr in n||Nh in n,h=s&&(((R=tr(n,e))==null?void 0:R.set)??(d&&e in n&&(C=>n[e]=C)))||void 0,u=i,p=!0,g=!1,x=()=>(g=!0,p&&(p=!1,o?u=Fi(i):u=i),u);c===void 0&&i!==void 0&&(h&&a&&lm(),c=x(),h&&h(c));var m;if(a)m=()=>{var C=n[e];return C===void 0?x():(p=!0,g=!1,C)};else{var f=(r?ia:ft)(()=>n[e]);f.f|=em,m=()=>{var C=T(f);return C!==void 0&&(u=void 0),C===void 0?u:C}}if((t&xm)===0)return m;if(h){var _=n.$$legacy;return function(C,L){return arguments.length>0?((!a||!L||_||l)&&h(L?m():C),C):m()}}var b=!1,E=ct(c),y=ia(()=>{var C=m(),L=T(E);return b?(b=!1,L):E.v=C});return s&&T(y),r||(y.equals=hd),function(C,L){if(arguments.length>0){const M=L?T(y):a&&s?Sr(C):C;if(!y.equals(M)){if(b=!0,Ce(E,M),g&&u!==void 0&&(u=M),du(y))return C;Fi(()=>T(y))}return C}return du(y)?y.v:T(y)}}function Yn(n){Dt===null&&kh(),ga&&Dt.l!==null?_0(Dt).m.push(n):yo(()=>{const e=Fi(n);if(typeof e=="function")return e})}function xf(n){Dt===null&&kh(),Yn(()=>()=>Fi(n))}function _0(n){var e=n.l;return e.u??(e.u={a:[],b:[],m:[]})}function xd(n,e,t){if(n==null)return e(void 0),t&&t(void 0),cn;const i=Fi(()=>n.subscribe(e,t));return i.unsubscribe?()=>i.unsubscribe():i}const kr=[];function b0(n,e){return{subscribe:us(n,e).subscribe}}function us(n,e=cn){let t=null;const i=new Set;function r(o){if(Fh(n,o)&&(n=o,t)){const l=!kr.length;for(const c of i)c[1](),kr.push(c,n);if(l){for(let c=0;c<kr.length;c+=2)kr[c][0](kr[c+1]);kr.length=0}}}function a(o){r(o(n))}function s(o,l=cn){const c=[o,l];return i.add(c),i.size===1&&(t=e(r,a)||cn),o(n),()=>{i.delete(c),i.size===0&&t&&(t(),t=null)}}return{set:r,update:a,subscribe:s}}function ya(n,e,t){const i=!Array.isArray(n),r=i?[n]:n;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const a=e.length<2;return b0(t,(s,o)=>{let l=!1;const c=[];let d=0,h=cn;const u=()=>{if(d)return;h();const g=e(i?c[0]:c,s,o);a?s(g):h=typeof g=="function"?g:cn},p=r.map((g,x)=>xd(g,m=>{c[x]=m,d&=~(1<<x),l&&u()},()=>{d|=1<<x}));return l=!0,u(),function(){fo(p),h(),l=!1}})}function y0(n){let e;return xd(n,t=>e=t)(),e}function S0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var cl,uu;function M0(){if(uu)return cl;uu=1;var n=function(_){return e(_)&&!t(_)};function e(f){return!!f&&typeof f=="object"}function t(f){var _=Object.prototype.toString.call(f);return _==="[object RegExp]"||_==="[object Date]"||a(f)}var i=typeof Symbol=="function"&&Symbol.for,r=i?Symbol.for("react.element"):60103;function a(f){return f.$$typeof===r}function s(f){return Array.isArray(f)?[]:{}}function o(f,_){return _.clone!==!1&&_.isMergeableObject(f)?x(s(f),f,_):f}function l(f,_,b){return f.concat(_).map(function(E){return o(E,b)})}function c(f,_){if(!_.customMerge)return x;var b=_.customMerge(f);return typeof b=="function"?b:x}function d(f){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(f).filter(function(_){return Object.propertyIsEnumerable.call(f,_)}):[]}function h(f){return Object.keys(f).concat(d(f))}function u(f,_){try{return _ in f}catch{return!1}}function p(f,_){return u(f,_)&&!(Object.hasOwnProperty.call(f,_)&&Object.propertyIsEnumerable.call(f,_))}function g(f,_,b){var E={};return b.isMergeableObject(f)&&h(f).forEach(function(y){E[y]=o(f[y],b)}),h(_).forEach(function(y){p(f,y)||(u(f,y)&&b.isMergeableObject(_[y])?E[y]=c(y,b)(f[y],_[y],b):E[y]=o(_[y],b))}),E}function x(f,_,b){b=b||{},b.arrayMerge=b.arrayMerge||l,b.isMergeableObject=b.isMergeableObject||n,b.cloneUnlessOtherwiseSpecified=o;var E=Array.isArray(_),y=Array.isArray(f),R=E===y;return R?E?b.arrayMerge(f,_,b):g(f,_,b):o(_,b)}x.all=function(_,b){if(!Array.isArray(_))throw new Error("first argument should be an array");return _.reduce(function(E,y){return x(E,y,b)},{})};var m=x;return cl=m,cl}var E0=M0();const w0=S0(E0);var tc=function(n,e){return tc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},tc(n,e)};function Go(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");tc(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var bt=function(){return bt=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},bt.apply(this,arguments)};function T0(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function dl(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,a;i<r;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return n.concat(a||Array.prototype.slice.call(e))}function ul(n,e){var t=e&&e.cache?e.cache:D0,i=e&&e.serializer?e.serializer:I0,r=e&&e.strategy?e.strategy:C0;return r(n,{cache:t,serializer:i})}function A0(n){return n==null||typeof n=="number"||typeof n=="boolean"}function R0(n,e,t,i){var r=A0(i)?i:t(i),a=e.get(r);return typeof a>"u"&&(a=n.call(this,i),e.set(r,a)),a}function _f(n,e,t){var i=Array.prototype.slice.call(arguments,3),r=t(i),a=e.get(r);return typeof a>"u"&&(a=n.apply(this,i),e.set(r,a)),a}function bf(n,e,t,i,r){return t.bind(e,n,i,r)}function C0(n,e){var t=n.length===1?R0:_f;return bf(n,this,t,e.cache.create(),e.serializer)}function P0(n,e){return bf(n,this,_f,e.cache.create(),e.serializer)}var I0=function(){return JSON.stringify(arguments)},L0=function(){function n(){this.cache=Object.create(null)}return n.prototype.get=function(e){return this.cache[e]},n.prototype.set=function(e,t){this.cache[e]=t},n}(),D0={create:function(){return new L0}},hl={variadic:P0},mt;(function(n){n[n.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",n[n.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",n[n.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",n[n.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",n[n.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",n[n.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",n[n.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",n[n.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",n[n.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",n[n.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",n[n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",n[n.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",n[n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",n[n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",n[n.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",n[n.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",n[n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",n[n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",n[n.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",n[n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",n[n.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",n[n.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",n[n.INVALID_TAG=23]="INVALID_TAG",n[n.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",n[n.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",n[n.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(mt||(mt={}));var Bt;(function(n){n[n.literal=0]="literal",n[n.argument=1]="argument",n[n.number=2]="number",n[n.date=3]="date",n[n.time=4]="time",n[n.select=5]="select",n[n.plural=6]="plural",n[n.pound=7]="pound",n[n.tag=8]="tag"})(Bt||(Bt={}));var aa;(function(n){n[n.number=0]="number",n[n.dateTime=1]="dateTime"})(aa||(aa={}));function hu(n){return n.type===Bt.literal}function N0(n){return n.type===Bt.argument}function yf(n){return n.type===Bt.number}function Sf(n){return n.type===Bt.date}function Mf(n){return n.type===Bt.time}function Ef(n){return n.type===Bt.select}function wf(n){return n.type===Bt.plural}function U0(n){return n.type===Bt.pound}function Tf(n){return n.type===Bt.tag}function Af(n){return!!(n&&typeof n=="object"&&n.type===aa.number)}function nc(n){return!!(n&&typeof n=="object"&&n.type===aa.dateTime)}var Rf=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,F0=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function O0(n){var e={};return n.replace(F0,function(t){var i=t.length;switch(t[0]){case"G":e.era=i===4?"long":i===5?"narrow":"short";break;case"y":e.year=i===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":e.month=["numeric","2-digit","short","long","narrow"][i-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":e.day=["numeric","2-digit"][i-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":e.weekday=i===4?"long":i===5?"narrow":"short";break;case"e":if(i<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][i-4];break;case"c":if(i<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][i-4];break;case"a":e.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":e.hourCycle="h12",e.hour=["numeric","2-digit"][i-1];break;case"H":e.hourCycle="h23",e.hour=["numeric","2-digit"][i-1];break;case"K":e.hourCycle="h11",e.hour=["numeric","2-digit"][i-1];break;case"k":e.hourCycle="h24",e.hour=["numeric","2-digit"][i-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":e.minute=["numeric","2-digit"][i-1];break;case"s":e.second=["numeric","2-digit"][i-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":e.timeZoneName=i<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),e}var B0=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function k0(n){if(n.length===0)throw new Error("Number skeleton cannot be empty");for(var e=n.split(B0).filter(function(u){return u.length>0}),t=[],i=0,r=e;i<r.length;i++){var a=r[i],s=a.split("/");if(s.length===0)throw new Error("Invalid number skeleton");for(var o=s[0],l=s.slice(1),c=0,d=l;c<d.length;c++){var h=d[c];if(h.length===0)throw new Error("Invalid number skeleton")}t.push({stem:o,options:l})}return t}function z0(n){return n.replace(/^(.*?)-/,"")}var fu=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Cf=/^(@+)?(\+|#+)?[rs]?$/g,H0=/(\*)(0+)|(#+)(0+)|(0+)/g,Pf=/^(0+)$/;function pu(n){var e={};return n[n.length-1]==="r"?e.roundingPriority="morePrecision":n[n.length-1]==="s"&&(e.roundingPriority="lessPrecision"),n.replace(Cf,function(t,i,r){return typeof r!="string"?(e.minimumSignificantDigits=i.length,e.maximumSignificantDigits=i.length):r==="+"?e.minimumSignificantDigits=i.length:i[0]==="#"?e.maximumSignificantDigits=i.length:(e.minimumSignificantDigits=i.length,e.maximumSignificantDigits=i.length+(typeof r=="string"?r.length:0)),""}),e}function If(n){switch(n){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function V0(n){var e;if(n[0]==="E"&&n[1]==="E"?(e={notation:"engineering"},n=n.slice(2)):n[0]==="E"&&(e={notation:"scientific"},n=n.slice(1)),e){var t=n.slice(0,2);if(t==="+!"?(e.signDisplay="always",n=n.slice(2)):t==="+?"&&(e.signDisplay="exceptZero",n=n.slice(2)),!Pf.test(n))throw new Error("Malformed concise eng/scientific notation");e.minimumIntegerDigits=n.length}return e}function mu(n){var e={},t=If(n);return t||e}function G0(n){for(var e={},t=0,i=n;t<i.length;t++){var r=i[t];switch(r.stem){case"percent":case"%":e.style="percent";continue;case"%x100":e.style="percent",e.scale=100;continue;case"currency":e.style="currency",e.currency=r.options[0];continue;case"group-off":case",_":e.useGrouping=!1;continue;case"precision-integer":case".":e.maximumFractionDigits=0;continue;case"measure-unit":case"unit":e.style="unit",e.unit=z0(r.options[0]);continue;case"compact-short":case"K":e.notation="compact",e.compactDisplay="short";continue;case"compact-long":case"KK":e.notation="compact",e.compactDisplay="long";continue;case"scientific":e=bt(bt(bt({},e),{notation:"scientific"}),r.options.reduce(function(l,c){return bt(bt({},l),mu(c))},{}));continue;case"engineering":e=bt(bt(bt({},e),{notation:"engineering"}),r.options.reduce(function(l,c){return bt(bt({},l),mu(c))},{}));continue;case"notation-simple":e.notation="standard";continue;case"unit-width-narrow":e.currencyDisplay="narrowSymbol",e.unitDisplay="narrow";continue;case"unit-width-short":e.currencyDisplay="code",e.unitDisplay="short";continue;case"unit-width-full-name":e.currencyDisplay="name",e.unitDisplay="long";continue;case"unit-width-iso-code":e.currencyDisplay="symbol";continue;case"scale":e.scale=parseFloat(r.options[0]);continue;case"rounding-mode-floor":e.roundingMode="floor";continue;case"rounding-mode-ceiling":e.roundingMode="ceil";continue;case"rounding-mode-down":e.roundingMode="trunc";continue;case"rounding-mode-up":e.roundingMode="expand";continue;case"rounding-mode-half-even":e.roundingMode="halfEven";continue;case"rounding-mode-half-down":e.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":e.roundingMode="halfExpand";continue;case"integer-width":if(r.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");r.options[0].replace(H0,function(l,c,d,h,u,p){if(c)e.minimumIntegerDigits=d.length;else{if(h&&u)throw new Error("We currently do not support maximum integer digits");if(p)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Pf.test(r.stem)){e.minimumIntegerDigits=r.stem.length;continue}if(fu.test(r.stem)){if(r.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");r.stem.replace(fu,function(l,c,d,h,u,p){return d==="*"?e.minimumFractionDigits=c.length:h&&h[0]==="#"?e.maximumFractionDigits=h.length:u&&p?(e.minimumFractionDigits=u.length,e.maximumFractionDigits=u.length+p.length):(e.minimumFractionDigits=c.length,e.maximumFractionDigits=c.length),""});var a=r.options[0];a==="w"?e=bt(bt({},e),{trailingZeroDisplay:"stripIfInteger"}):a&&(e=bt(bt({},e),pu(a)));continue}if(Cf.test(r.stem)){e=bt(bt({},e),pu(r.stem));continue}var s=If(r.stem);s&&(e=bt(bt({},e),s));var o=V0(r.stem);o&&(e=bt(bt({},e),o))}return e}var Ds={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function W0(n,e){for(var t="",i=0;i<n.length;i++){var r=n.charAt(i);if(r==="j"){for(var a=0;i+1<n.length&&n.charAt(i+1)===r;)a++,i++;var s=1+(a&1),o=a<2?1:3+(a>>1),l="a",c=$0(e);for((c=="H"||c=="k")&&(o=0);o-- >0;)t+=l;for(;s-- >0;)t=c+t}else r==="J"?t+="H":t+=r}return t}function $0(n){var e=n.hourCycle;if(e===void 0&&n.hourCycles&&n.hourCycles.length&&(e=n.hourCycles[0]),e)switch(e){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=n.language,i;t!=="root"&&(i=n.maximize().region);var r=Ds[i||""]||Ds[t||""]||Ds["".concat(t,"-001")]||Ds["001"];return r[0]}var fl,X0=new RegExp("^".concat(Rf.source,"*")),q0=new RegExp("".concat(Rf.source,"*$"));function gt(n,e){return{start:n,end:e}}var Y0=!!String.prototype.startsWith&&"_a".startsWith("a",1),j0=!!String.fromCodePoint,K0=!!Object.fromEntries,Z0=!!String.prototype.codePointAt,J0=!!String.prototype.trimStart,Q0=!!String.prototype.trimEnd,ev=!!Number.isSafeInteger,tv=ev?Number.isSafeInteger:function(n){return typeof n=="number"&&isFinite(n)&&Math.floor(n)===n&&Math.abs(n)<=9007199254740991},ic=!0;try{var nv=Df("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ic=((fl=nv.exec("a"))===null||fl===void 0?void 0:fl[0])==="a"}catch{ic=!1}var vu=Y0?function(e,t,i){return e.startsWith(t,i)}:function(e,t,i){return e.slice(i,i+t.length)===t},rc=j0?String.fromCodePoint:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var i="",r=e.length,a=0,s;r>a;){if(s=e[a++],s>1114111)throw RangeError(s+" is not a valid code point");i+=s<65536?String.fromCharCode(s):String.fromCharCode(((s-=65536)>>10)+55296,s%1024+56320)}return i},gu=K0?Object.fromEntries:function(e){for(var t={},i=0,r=e;i<r.length;i++){var a=r[i],s=a[0],o=a[1];t[s]=o}return t},Lf=Z0?function(e,t){return e.codePointAt(t)}:function(e,t){var i=e.length;if(!(t<0||t>=i)){var r=e.charCodeAt(t),a;return r<55296||r>56319||t+1===i||(a=e.charCodeAt(t+1))<56320||a>57343?r:(r-55296<<10)+(a-56320)+65536}},iv=J0?function(e){return e.trimStart()}:function(e){return e.replace(X0,"")},rv=Q0?function(e){return e.trimEnd()}:function(e){return e.replace(q0,"")};function Df(n,e){return new RegExp(n,e)}var ac;if(ic){var xu=Df("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ac=function(e,t){var i;xu.lastIndex=t;var r=xu.exec(e);return(i=r[1])!==null&&i!==void 0?i:""}}else ac=function(e,t){for(var i=[];;){var r=Lf(e,t);if(r===void 0||Nf(r)||lv(r))break;i.push(r),t+=r>=65536?2:1}return rc.apply(void 0,i)};var av=function(){function n(e,t){t===void 0&&(t={}),this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return n.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},n.prototype.parseMessage=function(e,t,i){for(var r=[];!this.isEOF();){var a=this.char();if(a===123){var s=this.parseArgument(e,i);if(s.err)return s;r.push(s.val)}else{if(a===125&&e>0)break;if(a===35&&(t==="plural"||t==="selectordinal")){var o=this.clonePosition();this.bump(),r.push({type:Bt.pound,location:gt(o,this.clonePosition())})}else if(a===60&&!this.ignoreTag&&this.peek()===47){if(i)break;return this.error(mt.UNMATCHED_CLOSING_TAG,gt(this.clonePosition(),this.clonePosition()))}else if(a===60&&!this.ignoreTag&&sc(this.peek()||0)){var s=this.parseTag(e,t);if(s.err)return s;r.push(s.val)}else{var s=this.parseLiteral(e,t);if(s.err)return s;r.push(s.val)}}}return{val:r,err:null}},n.prototype.parseTag=function(e,t){var i=this.clonePosition();this.bump();var r=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Bt.literal,value:"<".concat(r,"/>"),location:gt(i,this.clonePosition())},err:null};if(this.bumpIf(">")){var a=this.parseMessage(e+1,t,!0);if(a.err)return a;var s=a.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!sc(this.char()))return this.error(mt.INVALID_TAG,gt(o,this.clonePosition()));var l=this.clonePosition(),c=this.parseTagName();return r!==c?this.error(mt.UNMATCHED_CLOSING_TAG,gt(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Bt.tag,value:r,children:s,location:gt(i,this.clonePosition())},err:null}:this.error(mt.INVALID_TAG,gt(o,this.clonePosition())))}else return this.error(mt.UNCLOSED_TAG,gt(i,this.clonePosition()))}else return this.error(mt.INVALID_TAG,gt(i,this.clonePosition()))},n.prototype.parseTagName=function(){var e=this.offset();for(this.bump();!this.isEOF()&&ov(this.char());)this.bump();return this.message.slice(e,this.offset())},n.prototype.parseLiteral=function(e,t){for(var i=this.clonePosition(),r="";;){var a=this.tryParseQuote(t);if(a){r+=a;continue}var s=this.tryParseUnquoted(e,t);if(s){r+=s;continue}var o=this.tryParseLeftAngleBracket();if(o){r+=o;continue}break}var l=gt(i,this.clonePosition());return{val:{type:Bt.literal,value:r,location:l},err:null}},n.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!sv(this.peek()||0))?(this.bump(),"<"):null},n.prototype.tryParseQuote=function(e){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(e==="plural"||e==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var i=this.char();if(i===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(i);this.bump()}return rc.apply(void 0,t)},n.prototype.tryParseUnquoted=function(e,t){if(this.isEOF())return null;var i=this.char();return i===60||i===123||i===35&&(t==="plural"||t==="selectordinal")||i===125&&e>0?null:(this.bump(),rc(i))},n.prototype.parseArgument=function(e,t){var i=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(mt.EXPECT_ARGUMENT_CLOSING_BRACE,gt(i,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(mt.EMPTY_ARGUMENT,gt(i,this.clonePosition()));var r=this.parseIdentifierIfPossible().value;if(!r)return this.error(mt.MALFORMED_ARGUMENT,gt(i,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(mt.EXPECT_ARGUMENT_CLOSING_BRACE,gt(i,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Bt.argument,value:r,location:gt(i,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(mt.EXPECT_ARGUMENT_CLOSING_BRACE,gt(i,this.clonePosition())):this.parseArgumentOptions(e,t,r,i);default:return this.error(mt.MALFORMED_ARGUMENT,gt(i,this.clonePosition()))}},n.prototype.parseIdentifierIfPossible=function(){var e=this.clonePosition(),t=this.offset(),i=ac(this.message,t),r=t+i.length;this.bumpTo(r);var a=this.clonePosition(),s=gt(e,a);return{value:i,location:s}},n.prototype.parseArgumentOptions=function(e,t,i,r){var a,s=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(mt.EXPECT_ARGUMENT_TYPE,gt(s,l));case"number":case"date":case"time":{this.bumpSpace();var c=null;if(this.bumpIf(",")){this.bumpSpace();var d=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var u=rv(h.val);if(u.length===0)return this.error(mt.EXPECT_ARGUMENT_STYLE,gt(this.clonePosition(),this.clonePosition()));var p=gt(d,this.clonePosition());c={style:u,styleLocation:p}}var g=this.tryParseArgumentClose(r);if(g.err)return g;var x=gt(r,this.clonePosition());if(c&&vu(c==null?void 0:c.style,"::",0)){var m=iv(c.style.slice(2));if(o==="number"){var h=this.parseNumberSkeletonFromString(m,c.styleLocation);return h.err?h:{val:{type:Bt.number,value:i,location:x,style:h.val},err:null}}else{if(m.length===0)return this.error(mt.EXPECT_DATE_TIME_SKELETON,x);var f=m;this.locale&&(f=W0(m,this.locale));var u={type:aa.dateTime,pattern:f,location:c.styleLocation,parsedOptions:this.shouldParseSkeletons?O0(f):{}},_=o==="date"?Bt.date:Bt.time;return{val:{type:_,value:i,location:x,style:u},err:null}}}return{val:{type:o==="number"?Bt.number:o==="date"?Bt.date:Bt.time,value:i,location:x,style:(a=c==null?void 0:c.style)!==null&&a!==void 0?a:null},err:null}}case"plural":case"selectordinal":case"select":{var b=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(mt.EXPECT_SELECT_ARGUMENT_OPTIONS,gt(b,bt({},b)));this.bumpSpace();var E=this.parseIdentifierIfPossible(),y=0;if(o!=="select"&&E.value==="offset"){if(!this.bumpIf(":"))return this.error(mt.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,gt(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger(mt.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,mt.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),E=this.parseIdentifierIfPossible(),y=h.val}var R=this.tryParsePluralOrSelectOptions(e,o,t,E);if(R.err)return R;var g=this.tryParseArgumentClose(r);if(g.err)return g;var C=gt(r,this.clonePosition());return o==="select"?{val:{type:Bt.select,value:i,options:gu(R.val),location:C},err:null}:{val:{type:Bt.plural,value:i,options:gu(R.val),offset:y,pluralType:o==="plural"?"cardinal":"ordinal",location:C},err:null}}default:return this.error(mt.INVALID_ARGUMENT_TYPE,gt(s,l))}},n.prototype.tryParseArgumentClose=function(e){return this.isEOF()||this.char()!==125?this.error(mt.EXPECT_ARGUMENT_CLOSING_BRACE,gt(e,this.clonePosition())):(this.bump(),{val:!0,err:null})},n.prototype.parseSimpleArgStyleIfPossible=function(){for(var e=0,t=this.clonePosition();!this.isEOF();){var i=this.char();switch(i){case 39:{this.bump();var r=this.clonePosition();if(!this.bumpUntil("'"))return this.error(mt.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,gt(r,this.clonePosition()));this.bump();break}case 123:{e+=1,this.bump();break}case 125:{if(e>0)e-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},n.prototype.parseNumberSkeletonFromString=function(e,t){var i=[];try{i=k0(e)}catch{return this.error(mt.INVALID_NUMBER_SKELETON,t)}return{val:{type:aa.number,tokens:i,location:t,parsedOptions:this.shouldParseSkeletons?G0(i):{}},err:null}},n.prototype.tryParsePluralOrSelectOptions=function(e,t,i,r){for(var a,s=!1,o=[],l=new Set,c=r.value,d=r.location;;){if(c.length===0){var h=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var u=this.tryParseDecimalInteger(mt.EXPECT_PLURAL_ARGUMENT_SELECTOR,mt.INVALID_PLURAL_ARGUMENT_SELECTOR);if(u.err)return u;d=gt(h,this.clonePosition()),c=this.message.slice(h.offset,this.offset())}else break}if(l.has(c))return this.error(t==="select"?mt.DUPLICATE_SELECT_ARGUMENT_SELECTOR:mt.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);c==="other"&&(s=!0),this.bumpSpace();var p=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?mt.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:mt.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,gt(this.clonePosition(),this.clonePosition()));var g=this.parseMessage(e+1,t,i);if(g.err)return g;var x=this.tryParseArgumentClose(p);if(x.err)return x;o.push([c,{value:g.val,location:gt(p,this.clonePosition())}]),l.add(c),this.bumpSpace(),a=this.parseIdentifierIfPossible(),c=a.value,d=a.location}return o.length===0?this.error(t==="select"?mt.EXPECT_SELECT_ARGUMENT_SELECTOR:mt.EXPECT_PLURAL_ARGUMENT_SELECTOR,gt(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!s?this.error(mt.MISSING_OTHER_CLAUSE,gt(this.clonePosition(),this.clonePosition())):{val:o,err:null}},n.prototype.tryParseDecimalInteger=function(e,t){var i=1,r=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(i=-1);for(var a=!1,s=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)a=!0,s=s*10+(o-48),this.bump();else break}var l=gt(r,this.clonePosition());return a?(s*=i,tv(s)?{val:s,err:null}:this.error(t,l)):this.error(e,l)},n.prototype.offset=function(){return this.position.offset},n.prototype.isEOF=function(){return this.offset()===this.message.length},n.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},n.prototype.char=function(){var e=this.position.offset;if(e>=this.message.length)throw Error("out of bound");var t=Lf(this.message,e);if(t===void 0)throw Error("Offset ".concat(e," is at invalid UTF-16 code unit boundary"));return t},n.prototype.error=function(e,t){return{val:null,err:{kind:e,message:this.message,location:t}}},n.prototype.bump=function(){if(!this.isEOF()){var e=this.char();e===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=e<65536?1:2)}},n.prototype.bumpIf=function(e){if(vu(this.message,e,this.offset())){for(var t=0;t<e.length;t++)this.bump();return!0}return!1},n.prototype.bumpUntil=function(e){var t=this.offset(),i=this.message.indexOf(e,t);return i>=0?(this.bumpTo(i),!0):(this.bumpTo(this.message.length),!1)},n.prototype.bumpTo=function(e){if(this.offset()>e)throw Error("targetOffset ".concat(e," must be greater than or equal to the current offset ").concat(this.offset()));for(e=Math.min(e,this.message.length);;){var t=this.offset();if(t===e)break;if(t>e)throw Error("targetOffset ".concat(e," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},n.prototype.bumpSpace=function(){for(;!this.isEOF()&&Nf(this.char());)this.bump()},n.prototype.peek=function(){if(this.isEOF())return null;var e=this.char(),t=this.offset(),i=this.message.charCodeAt(t+(e>=65536?2:1));return i??null},n}();function sc(n){return n>=97&&n<=122||n>=65&&n<=90}function sv(n){return sc(n)||n===47}function ov(n){return n===45||n===46||n>=48&&n<=57||n===95||n>=97&&n<=122||n>=65&&n<=90||n==183||n>=192&&n<=214||n>=216&&n<=246||n>=248&&n<=893||n>=895&&n<=8191||n>=8204&&n<=8205||n>=8255&&n<=8256||n>=8304&&n<=8591||n>=11264&&n<=12271||n>=12289&&n<=55295||n>=63744&&n<=64975||n>=65008&&n<=65533||n>=65536&&n<=983039}function Nf(n){return n>=9&&n<=13||n===32||n===133||n>=8206&&n<=8207||n===8232||n===8233}function lv(n){return n>=33&&n<=35||n===36||n>=37&&n<=39||n===40||n===41||n===42||n===43||n===44||n===45||n>=46&&n<=47||n>=58&&n<=59||n>=60&&n<=62||n>=63&&n<=64||n===91||n===92||n===93||n===94||n===96||n===123||n===124||n===125||n===126||n===161||n>=162&&n<=165||n===166||n===167||n===169||n===171||n===172||n===174||n===176||n===177||n===182||n===187||n===191||n===215||n===247||n>=8208&&n<=8213||n>=8214&&n<=8215||n===8216||n===8217||n===8218||n>=8219&&n<=8220||n===8221||n===8222||n===8223||n>=8224&&n<=8231||n>=8240&&n<=8248||n===8249||n===8250||n>=8251&&n<=8254||n>=8257&&n<=8259||n===8260||n===8261||n===8262||n>=8263&&n<=8273||n===8274||n===8275||n>=8277&&n<=8286||n>=8592&&n<=8596||n>=8597&&n<=8601||n>=8602&&n<=8603||n>=8604&&n<=8607||n===8608||n>=8609&&n<=8610||n===8611||n>=8612&&n<=8613||n===8614||n>=8615&&n<=8621||n===8622||n>=8623&&n<=8653||n>=8654&&n<=8655||n>=8656&&n<=8657||n===8658||n===8659||n===8660||n>=8661&&n<=8691||n>=8692&&n<=8959||n>=8960&&n<=8967||n===8968||n===8969||n===8970||n===8971||n>=8972&&n<=8991||n>=8992&&n<=8993||n>=8994&&n<=9e3||n===9001||n===9002||n>=9003&&n<=9083||n===9084||n>=9085&&n<=9114||n>=9115&&n<=9139||n>=9140&&n<=9179||n>=9180&&n<=9185||n>=9186&&n<=9254||n>=9255&&n<=9279||n>=9280&&n<=9290||n>=9291&&n<=9311||n>=9472&&n<=9654||n===9655||n>=9656&&n<=9664||n===9665||n>=9666&&n<=9719||n>=9720&&n<=9727||n>=9728&&n<=9838||n===9839||n>=9840&&n<=10087||n===10088||n===10089||n===10090||n===10091||n===10092||n===10093||n===10094||n===10095||n===10096||n===10097||n===10098||n===10099||n===10100||n===10101||n>=10132&&n<=10175||n>=10176&&n<=10180||n===10181||n===10182||n>=10183&&n<=10213||n===10214||n===10215||n===10216||n===10217||n===10218||n===10219||n===10220||n===10221||n===10222||n===10223||n>=10224&&n<=10239||n>=10240&&n<=10495||n>=10496&&n<=10626||n===10627||n===10628||n===10629||n===10630||n===10631||n===10632||n===10633||n===10634||n===10635||n===10636||n===10637||n===10638||n===10639||n===10640||n===10641||n===10642||n===10643||n===10644||n===10645||n===10646||n===10647||n===10648||n>=10649&&n<=10711||n===10712||n===10713||n===10714||n===10715||n>=10716&&n<=10747||n===10748||n===10749||n>=10750&&n<=11007||n>=11008&&n<=11055||n>=11056&&n<=11076||n>=11077&&n<=11078||n>=11079&&n<=11084||n>=11085&&n<=11123||n>=11124&&n<=11125||n>=11126&&n<=11157||n===11158||n>=11159&&n<=11263||n>=11776&&n<=11777||n===11778||n===11779||n===11780||n===11781||n>=11782&&n<=11784||n===11785||n===11786||n===11787||n===11788||n===11789||n>=11790&&n<=11798||n===11799||n>=11800&&n<=11801||n===11802||n===11803||n===11804||n===11805||n>=11806&&n<=11807||n===11808||n===11809||n===11810||n===11811||n===11812||n===11813||n===11814||n===11815||n===11816||n===11817||n>=11818&&n<=11822||n===11823||n>=11824&&n<=11833||n>=11834&&n<=11835||n>=11836&&n<=11839||n===11840||n===11841||n===11842||n>=11843&&n<=11855||n>=11856&&n<=11857||n===11858||n>=11859&&n<=11903||n>=12289&&n<=12291||n===12296||n===12297||n===12298||n===12299||n===12300||n===12301||n===12302||n===12303||n===12304||n===12305||n>=12306&&n<=12307||n===12308||n===12309||n===12310||n===12311||n===12312||n===12313||n===12314||n===12315||n===12316||n===12317||n>=12318&&n<=12319||n===12320||n===12336||n===64830||n===64831||n>=65093&&n<=65094}function oc(n){n.forEach(function(e){if(delete e.location,Ef(e)||wf(e))for(var t in e.options)delete e.options[t].location,oc(e.options[t].value);else yf(e)&&Af(e.style)||(Sf(e)||Mf(e))&&nc(e.style)?delete e.style.location:Tf(e)&&oc(e.children)})}function cv(n,e){e===void 0&&(e={}),e=bt({shouldParseSkeletons:!0,requiresOtherClause:!0},e);var t=new av(n,e).parse();if(t.err){var i=SyntaxError(mt[t.err.kind]);throw i.location=t.err.location,i.originalMessage=t.err.message,i}return e!=null&&e.captureLocation||oc(t.val),t.val}var sa;(function(n){n.MISSING_VALUE="MISSING_VALUE",n.INVALID_VALUE="INVALID_VALUE",n.MISSING_INTL_API="MISSING_INTL_API"})(sa||(sa={}));var Wo=function(n){Go(e,n);function e(t,i,r){var a=n.call(this,t)||this;return a.code=i,a.originalMessage=r,a}return e.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},e}(Error),_u=function(n){Go(e,n);function e(t,i,r,a){return n.call(this,'Invalid values for "'.concat(t,'": "').concat(i,'". Options are "').concat(Object.keys(r).join('", "'),'"'),sa.INVALID_VALUE,a)||this}return e}(Wo),dv=function(n){Go(e,n);function e(t,i,r){return n.call(this,'Value for "'.concat(t,'" must be of type ').concat(i),sa.INVALID_VALUE,r)||this}return e}(Wo),uv=function(n){Go(e,n);function e(t,i){return n.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(i,'"'),sa.MISSING_VALUE,i)||this}return e}(Wo),pn;(function(n){n[n.literal=0]="literal",n[n.object=1]="object"})(pn||(pn={}));function hv(n){return n.length<2?n:n.reduce(function(e,t){var i=e[e.length-1];return!i||i.type!==pn.literal||t.type!==pn.literal?e.push(t):i.value+=t.value,e},[])}function fv(n){return typeof n=="function"}function no(n,e,t,i,r,a,s){if(n.length===1&&hu(n[0]))return[{type:pn.literal,value:n[0].value}];for(var o=[],l=0,c=n;l<c.length;l++){var d=c[l];if(hu(d)){o.push({type:pn.literal,value:d.value});continue}if(U0(d)){typeof a=="number"&&o.push({type:pn.literal,value:t.getNumberFormat(e).format(a)});continue}var h=d.value;if(!(r&&h in r))throw new uv(h,s);var u=r[h];if(N0(d)){(!u||typeof u=="string"||typeof u=="number")&&(u=typeof u=="string"||typeof u=="number"?String(u):""),o.push({type:typeof u=="string"?pn.literal:pn.object,value:u});continue}if(Sf(d)){var p=typeof d.style=="string"?i.date[d.style]:nc(d.style)?d.style.parsedOptions:void 0;o.push({type:pn.literal,value:t.getDateTimeFormat(e,p).format(u)});continue}if(Mf(d)){var p=typeof d.style=="string"?i.time[d.style]:nc(d.style)?d.style.parsedOptions:i.time.medium;o.push({type:pn.literal,value:t.getDateTimeFormat(e,p).format(u)});continue}if(yf(d)){var p=typeof d.style=="string"?i.number[d.style]:Af(d.style)?d.style.parsedOptions:void 0;p&&p.scale&&(u=u*(p.scale||1)),o.push({type:pn.literal,value:t.getNumberFormat(e,p).format(u)});continue}if(Tf(d)){var g=d.children,x=d.value,m=r[x];if(!fv(m))throw new dv(x,"function",s);var f=no(g,e,t,i,r,a),_=m(f.map(function(y){return y.value}));Array.isArray(_)||(_=[_]),o.push.apply(o,_.map(function(y){return{type:typeof y=="string"?pn.literal:pn.object,value:y}}))}if(Ef(d)){var b=d.options[u]||d.options.other;if(!b)throw new _u(d.value,u,Object.keys(d.options),s);o.push.apply(o,no(b.value,e,t,i,r));continue}if(wf(d)){var b=d.options["=".concat(u)];if(!b){if(!Intl.PluralRules)throw new Wo(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,sa.MISSING_INTL_API,s);var E=t.getPluralRules(e,{type:d.pluralType}).select(u-(d.offset||0));b=d.options[E]||d.options.other}if(!b)throw new _u(d.value,u,Object.keys(d.options),s);o.push.apply(o,no(b.value,e,t,i,r,u-(d.offset||0)));continue}}return hv(o)}function pv(n,e){return e?bt(bt(bt({},n||{}),e||{}),Object.keys(n).reduce(function(t,i){return t[i]=bt(bt({},n[i]),e[i]||{}),t},{})):n}function mv(n,e){return e?Object.keys(n).reduce(function(t,i){return t[i]=pv(n[i],e[i]),t},bt({},n)):n}function pl(n){return{create:function(){return{get:function(e){return n[e]},set:function(e,t){n[e]=t}}}}}function vv(n){return n===void 0&&(n={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:ul(function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return new((e=Intl.NumberFormat).bind.apply(e,dl([void 0],t,!1)))},{cache:pl(n.number),strategy:hl.variadic}),getDateTimeFormat:ul(function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return new((e=Intl.DateTimeFormat).bind.apply(e,dl([void 0],t,!1)))},{cache:pl(n.dateTime),strategy:hl.variadic}),getPluralRules:ul(function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return new((e=Intl.PluralRules).bind.apply(e,dl([void 0],t,!1)))},{cache:pl(n.pluralRules),strategy:hl.variadic})}}var Uf=function(){function n(e,t,i,r){t===void 0&&(t=n.defaultLocale);var a=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var c=a.formatToParts(l);if(c.length===1)return c[0].value;var d=c.reduce(function(h,u){return!h.length||u.type!==pn.literal||typeof h[h.length-1]!="string"?h.push(u.value):h[h.length-1]+=u.value,h},[]);return d.length<=1?d[0]||"":d},this.formatToParts=function(l){return no(a.ast,a.locales,a.formatters,a.formats,l,void 0,a.message)},this.resolvedOptions=function(){var l;return{locale:((l=a.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(a.locales)[0]}},this.getAst=function(){return a.ast},this.locales=t,this.resolvedLocale=n.resolveLocale(t),typeof e=="string"){if(this.message=e,!n.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var s=r||{};s.formatters;var o=T0(s,["formatters"]);this.ast=n.__parse(e,bt(bt({},o),{locale:this.resolvedLocale}))}else this.ast=e;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=mv(n.formats,i),this.formatters=r&&r.formatters||vv(this.formatterCache)}return Object.defineProperty(n,"defaultLocale",{get:function(){return n.memoizedDefaultLocale||(n.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),n.memoizedDefaultLocale},enumerable:!1,configurable:!0}),n.memoizedDefaultLocale=null,n.resolveLocale=function(e){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(e);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof e=="string"?e:e[0])}},n.__parse=cv,n.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},n}();function gv(n,e){if(e==null)return;if(e in n)return n[e];const t=e.split(".");let i=n;for(let r=0;r<t.length;r++)if(typeof i=="object"){if(r>0){const a=t.slice(r,t.length).join(".");if(a in i){i=i[a];break}}i=i[t[r]]}else i=void 0;return i}const Qi={},xv=(n,e,t)=>t&&(e in Qi||(Qi[e]={}),n in Qi[e]||(Qi[e][n]=t),t),Ff=(n,e)=>{if(e==null)return;if(e in Qi&&n in Qi[e])return Qi[e][n];const t=fs(e);for(let i=0;i<t.length;i++){const r=t[i],a=bv(r,n);if(a)return xv(n,e,a)}};let _d;const hs=us({});function _v(n){return _d[n]||null}function Of(n){return n in _d}function bv(n,e){if(!Of(n))return null;const t=_v(n);return gv(t,e)}function yv(n){if(n==null)return;const e=fs(n);for(let t=0;t<e.length;t++){const i=e[t];if(Of(i))return i}}function ki(n,...e){delete Qi[n],hs.update(t=>(t[n]=w0.all([t[n]||{},...e]),t))}ya([hs],([n])=>Object.keys(n));hs.subscribe(n=>_d=n);const io={};function Sv(n,e){io[n].delete(e),io[n].size===0&&delete io[n]}function Bf(n){return io[n]}function Mv(n){return fs(n).map(e=>{const t=Bf(e);return[e,t?[...t]:[]]}).filter(([,e])=>e.length>0)}function Eo(n){return n==null?!1:fs(n).some(e=>{var t;return(t=Bf(e))==null?void 0:t.size})}function Ev(n,e){return Promise.all(e.map(i=>(Sv(n,i),i().then(r=>r.default||r)))).then(i=>ki(n,...i))}const Na={};function kf(n){if(!Eo(n))return n in Na?Na[n]:Promise.resolve();const e=Mv(n);return Na[n]=Promise.all(e.map(([t,i])=>Ev(t,i))).then(()=>{if(Eo(n))return kf(n);delete Na[n]}),Na[n]}var bu=Object.getOwnPropertySymbols,wv=Object.prototype.hasOwnProperty,Tv=Object.prototype.propertyIsEnumerable,Av=(n,e)=>{var t={};for(var i in n)wv.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&bu)for(var i of bu(n))e.indexOf(i)<0&&Tv.call(n,i)&&(t[i]=n[i]);return t};const Rv={number:{scientific:{notation:"scientific"},engineering:{notation:"engineering"},compactLong:{notation:"compact",compactDisplay:"long"},compactShort:{notation:"compact",compactDisplay:"short"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}};function Cv({locale:n,id:e}){console.warn(`[svelte-i18n] The message "${e}" was not found in "${fs(n).join('", "')}".${Eo(lr())?`

Note: there are at least one loader still registered to this locale that wasn't executed.`:""}`)}const Pv={fallbackLocale:null,loadingDelay:200,formats:Rv,warnOnMissingMessages:!0,handleMissingMessage:void 0,ignoreTag:!0},Ga=Pv;function oa(){return Ga}function Iv(n){const e=n,{formats:t}=e,i=Av(e,["formats"]);let r=n.fallbackLocale;if(n.initialLocale)try{Uf.resolveLocale(n.initialLocale)&&(r=n.initialLocale)}catch{console.warn(`[svelte-i18n] The initial locale "${n.initialLocale}" is not a valid locale.`)}return i.warnOnMissingMessages&&(delete i.warnOnMissingMessages,i.handleMissingMessage==null?i.handleMissingMessage=Cv:console.warn('[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.')),Object.assign(Ga,i,{initialLocale:r}),t&&("number"in t&&Object.assign(Ga.formats.number,t.number),"date"in t&&Object.assign(Ga.formats.date,t.date),"time"in t&&Object.assign(Ga.formats.time,t.time)),rr.set(r)}const ml=us(!1);var Lv=Object.defineProperty,Dv=Object.defineProperties,Nv=Object.getOwnPropertyDescriptors,yu=Object.getOwnPropertySymbols,Uv=Object.prototype.hasOwnProperty,Fv=Object.prototype.propertyIsEnumerable,Su=(n,e,t)=>e in n?Lv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ov=(n,e)=>{for(var t in e||(e={}))Uv.call(e,t)&&Su(n,t,e[t]);if(yu)for(var t of yu(e))Fv.call(e,t)&&Su(n,t,e[t]);return n},Bv=(n,e)=>Dv(n,Nv(e));let lc;const wo=us(null);function Mu(n){return n.split("-").map((e,t,i)=>i.slice(0,t+1).join("-")).reverse()}function fs(n,e=oa().fallbackLocale){const t=Mu(n);return e?[...new Set([...t,...Mu(e)])]:t}function lr(){return lc??void 0}wo.subscribe(n=>{lc=n??void 0,typeof window<"u"&&n!=null&&document.documentElement.setAttribute("lang",n)});const kv=n=>{if(n&&yv(n)&&Eo(n)){const{loadingDelay:e}=oa();let t;return typeof window<"u"&&lr()!=null&&e?t=window.setTimeout(()=>ml.set(!0),e):ml.set(!0),kf(n).then(()=>{wo.set(n)}).finally(()=>{clearTimeout(t),ml.set(!1)})}return wo.set(n)},rr=Bv(Ov({},wo),{set:kv}),$o=n=>{const e=Object.create(null);return i=>{const r=JSON.stringify(i);return r in e?e[r]:e[r]=n(i)}};var zv=Object.defineProperty,To=Object.getOwnPropertySymbols,zf=Object.prototype.hasOwnProperty,Hf=Object.prototype.propertyIsEnumerable,Eu=(n,e,t)=>e in n?zv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,bd=(n,e)=>{for(var t in e||(e={}))zf.call(e,t)&&Eu(n,t,e[t]);if(To)for(var t of To(e))Hf.call(e,t)&&Eu(n,t,e[t]);return n},Sa=(n,e)=>{var t={};for(var i in n)zf.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&To)for(var i of To(n))e.indexOf(i)<0&&Hf.call(n,i)&&(t[i]=n[i]);return t};const es=(n,e)=>{const{formats:t}=oa();if(n in t&&e in t[n])return t[n][e];throw new Error(`[svelte-i18n] Unknown "${e}" ${n} format.`)},Hv=$o(n=>{var e=n,{locale:t,format:i}=e,r=Sa(e,["locale","format"]);if(t==null)throw new Error('[svelte-i18n] A "locale" must be set to format numbers');return i&&(r=es("number",i)),new Intl.NumberFormat(t,r)}),Vv=$o(n=>{var e=n,{locale:t,format:i}=e,r=Sa(e,["locale","format"]);if(t==null)throw new Error('[svelte-i18n] A "locale" must be set to format dates');return i?r=es("date",i):Object.keys(r).length===0&&(r=es("date","short")),new Intl.DateTimeFormat(t,r)}),Gv=$o(n=>{var e=n,{locale:t,format:i}=e,r=Sa(e,["locale","format"]);if(t==null)throw new Error('[svelte-i18n] A "locale" must be set to format time values');return i?r=es("time",i):Object.keys(r).length===0&&(r=es("time","short")),new Intl.DateTimeFormat(t,r)}),Wv=(n={})=>{var e=n,{locale:t=lr()}=e,i=Sa(e,["locale"]);return Hv(bd({locale:t},i))},$v=(n={})=>{var e=n,{locale:t=lr()}=e,i=Sa(e,["locale"]);return Vv(bd({locale:t},i))},Xv=(n={})=>{var e=n,{locale:t=lr()}=e,i=Sa(e,["locale"]);return Gv(bd({locale:t},i))},qv=$o((n,e=lr())=>new Uf(n,e,oa().formats,{ignoreTag:oa().ignoreTag})),Yv=(n,e={})=>{var t,i,r,a;let s=e;typeof n=="object"&&(s=n,n=s.id);const{values:o,locale:l=lr(),default:c}=s;if(l==null)throw new Error("[svelte-i18n] Cannot format a message without first setting the initial locale.");let d=Ff(n,l);if(!d)d=(a=(r=(i=(t=oa()).handleMissingMessage)==null?void 0:i.call(t,{locale:l,id:n,defaultValue:c}))!=null?r:c)!=null?a:n;else if(typeof d!="string")return console.warn(`[svelte-i18n] Message with id "${n}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`),d;if(!o)return d;let h=d;try{h=qv(d,l).format(o)}catch(u){u instanceof Error&&console.warn(`[svelte-i18n] Message "${n}" has syntax error:`,u.message)}return h},jv=(n,e)=>Xv(e).format(n),Kv=(n,e)=>$v(e).format(n),Zv=(n,e)=>Wv(e).format(n),Jv=(n,e=lr())=>Ff(n,e),On=ya([rr,hs],()=>Yv);ya([rr],()=>jv);ya([rr],()=>Kv);ya([rr],()=>Zv);ya([rr,hs],()=>Jv);const Qv={common:{change_language:"Change language to {name}",loading:"LOADING..."},nav:{reports:"[ REPORTS ]",terminal:"[ LIVE TERMINAL ]"},report:{nav_back:"← NEXUS QUANT",nav_title:"OPERATIONAL REPORTS",nav_week:"WEEK",generated_label:"GENERATED",page_title:"Trading Desk",methodology_label:"METHODOLOGY",indicators_label:"INDICATORS",font_decrease:"A−",font_increase:"A+",warning_title:"Data validity:",warning_text:"Revalidate all prices, moving averages, and oscillators at the weekly open before arming any order. This report is a risk-defined decision framework — not a forecast or guarantee of results. Only trade on a <strong>closed bar</strong> of the relevant screen.",priority_title:"Monitoring Queue · by Priority",scoreboard_title:"Bias Scoreboard · Triple Screen",role_primary:"PRIMARY",role_macro:"MACRO",impulse_red:"● RED",impulse_green:"● GREEN",impulse_blue_red:"◑ BLUE → RED",zone_neutral_up:"Neutral rising",zone_rising_overbought:"Rising → overbought",zone_overbought:"Overbought",zone_low_k_below_d:"Low, K < D",zone_rising:"Rising",zone_oversold:"Oversold",btc_note:"Pending impulse confirmation. Conditional short.",xau_note:"Short maturing. Stochastic at resistance.",sp_note:"Await pullback to 7,369. No buying overbought.",bovespa_note:"Cleanest trend. Both screens aligned.",usdbrl_note:"Sell bounce near 5.11 (weekly EMA underside).",brent_note:"Do not sell oversold. Await bounce to 101.",playbook_title:"BTC/USD — Primary Playbook",tide_label:"TIDE (WEEKLY)",wave_label:"WAVE (DAILY)",tide_text:'Price <span class="text-white">75,708.00</span> below MME(17) <span class="text-rose-400">76,533.35</span>. MACD histogram positive but decelerating — new weekly bar lower than previous (lower high). Impulse <span class="text-amber-400">blue in transition</span>; turns red when histogram confirms weekly close.',wave_text:'Price below descending MME. Stochastic %K <span class="text-[#4CC9F0]">42.08</span> / %D <span class="text-[#4CC9F0]">28.63</span>, rising (upper band 89.03). Counter-trend bounce in progress — <strong class="text-white">not yet overbought</strong>. Conviction scales to FULL after red weekly close.',trigger_label:"TRIGGER",action_label:"ACTION",stop_label:"STOP",sc_a_name:"SELL THE BOUNCE",sc_a_condition:"Price retraces to zone 76,533–76,606 + 1h stochastic overbought and turning + breaks prior 15m low",sc_a_target_label:"SUPPORT",sc_b_name:"CONTINUATION SELL",sc_b_condition:"Close below 73,936 + rejected retest from below + breaks prior 15m low",sc_b_target_label:"PARTIAL → RUNNER",sc_c_label:"NO TRADE",sc_c_text:'Condition: tide turns non-bearish <strong>or</strong> reclaim/close above 76,533. Action: <span class="text-[#00F0FF]/60">CancelSetups</span> — pull pending orders, remain ARMED with no entries.',sc_a_invalidation:"Close above 76,533",sc_b_invalidation:"Recovers and closes back above 73,936",macro_implication_title:"MACRO IMPLICATION",macro_implication_text:'The bearish BTC bias lacks broad macro risk-off support (strong S&P is the counterweight). Treat the short as a <strong class="text-white">correction within trend</strong>, not the start of a macro bear: modest targets, heightened vigilance on invalidation by reclaim.',risk_title:"Risk Management · Non-Negotiable Rules",rule_2pct_id:"2%",rule_2pct_title:"THE 2% RULE",rule_2pct_body:"Never risk more than 2% of account per trade. Define the stop first; size the position from the stop.",rule_6pct_id:"6%",rule_6pct_title:"THE 6% RULE",rule_6pct_body:"If monthly losses reach 6% of account, close all operations until month-end.",rule_conv_id:"CONV",rule_conv_title:"CONVICTION & SIZE",rule_conv_body:"HALF = half size (unconfirmed weekly impulse). FULL = full size (confirmed weekly impulse).",rule_hier_id:"HIER",rule_hier_title:"SCREEN HIERARCHY",rule_hier_body:"Never trade against the tide. Long only where tide is bullish. Stop defined at entry — non-negotiable.",legend_armed:"active permission; awaiting trigger",legend_standby:"no permission; do not trade",legend_in_position:"open position (runtime)",legend_full:"confirmed weekly impulse · full size",legend_half:"week in transition · half size",zone_label:"ZONE"},hero:{status:"SYSTEMS OPERATIONAL",title:"NEXUS QUANT",subtitle:"Proprietary Quantitative Research & Automated Decision Systems.",cta:"[ VIEW PHILOSOPHY ]",cta_ark:"[ ARK STREAMS PRESENTATION ]",cta_terminal:"[ LIVE TERMINAL ]"},philosophy:{title:">_ MISSION DIRECTIVE",hero_text:'We approach financial markets as <span class="text-white font-medium">complex physical systems</span>. By bridging <span class="text-white font-medium">stochastic research</span> with <span class="text-white font-medium">deterministic software engineering</span>, we build decision engines that thrive in chaos.',p1:{title:"Precision",text:"We prioritize data integrity and correctness over raw speculative speed."},p2:{title:"Automation",text:"Removing human cognitive bias from critical execution workflows."},p3:{title:"Resilience",text:"Systems designed to maintain 99.9% uptime in adversarial environments."}},stack:{title:">_ ARCHITECTURE",card1:{title:"QUANTITATIVE ANALYSIS",text:"Rapid hypothesis testing, statistical modeling, and backtesting using the Python data science ecosystem."},card2:{title:"PRODUCTION RUNTIME",text:"Our proprietary event-driven intelligence platform. Built in Go and powered by NATS JetStream to ensure ultra-low latency, native persistence, and seamless scalability."},card3:{title:"IMMUTABLE LEDGER",text:"Full traceability of every decision state. We utilize time-travel database capabilities for rigorous post-trade auditing."}},evolution:{title:">_ SYSTEM EVOLUTION",phase1:{period:"2023 - 2025",name:"Phase 1: Functional Foundation",tech:"Clojure / JVM / Polylith",description:"Focus on mathematical correctness, immutable data structures, and REPL-driven development. Proved the viability of our Bill Williams-based strategy logic."},phase2:{period:"2026 - Present",name:"Phase 2: Hybrid Ecosystem",tech:"Go / NATS JetStream / Wails",description:"Expansion to a high-concurrency, low-latency hybrid architecture. Integrating Go for production edge nodes while maintaining Clojure for strategy modeling, unified by a persistent NATS event bus."}},metrics:{title:":: SYSTEM STATUS ::",header:{component:"COMPONENT",status:"STATUS",latency:"LATENCY",heartbeat:"HEARTBEAT"},status_labels:{connected:"CONNECTED",running:"RUNNING",guarded:"GUARDED",synced:"SYNCED"},ago:"{n}s ago",enter_terminal:"[ ENTER FULL LIVE TERMINAL ]"},footer:{rights:"© {year} Nexus Quant. All rights reserved.",location:"Rio de Janeiro, BR // Global Operations"},presentation:{title:"Tech Interview",subtitle:"Quantitative Trading Engine in Clojure",section1:{title:"Project Overview",text:"Ark Engine is a quantitative trading engine built in Clojure, following a Polylith architecture for modularity and testability. It operates in the Crypto/Binance domain using a Functional, Event-Driven, and Asynchronous paradigm."},section2:{title:"Architecture Deep Dive",subtitle:"Polylith: Bases, Components, Projects",intro:"The system is structured into Bases (cli-runner), Components (orchestrator, strategy-engine, connector, temporal-db), and Projects. This decoupling ensures the strategy engine is pure logic, knowing nothing about Binance, enabling REPL-Driven Development.",part1:{title:"Orchestrator (The Brain)",intro:"Coordinates data, strategy, and execution. It manages the main application loop using core.async and recursion."},part2:{title:"Strategy Engine (The Logic)",intro:"Pure functions taking immutable data (Candles) and returning results (Signals) with no side effects. Extremely testable."},part3:{title:"Connector (The Hands)",intro:"Handles side effects: talking to exchanges (Binance) to execute orders based on the strategy's decisions."}},section3:{title:"Code Walkthrough",role:"Mental Model",subtitle:"Tick -> Fetch -> Compute -> Decide -> Act -> Recur",subtitle2:"A non-blocking event loop that wakes up on candle close, processes data purely, executes side effects, and recurs with new state.",intro:"1. Tick: Time boundaries trigger wake-up. 2. Fetch: Pull history from Temporal DB. 3. Compute: Run indicators (TA4J) via pure functions.",intro2:"4. Decide: Logic determines buy/sell. 5. Act: Connector executes order. 6. Recur: New position state passed to next loop iteration.",step1:{title:"Orchestrator",what:"The coordinator. Manages the lifecycle and state recursion.",parallel:"Like a Conductor ensuring all instruments play in time."},step2:{title:"Strategy Engine",what:"The pure logic. Calculates indicators and signals.",magic:"Referential Transparency: Same input always equals same output.",parallel:"Like a Calculator: 2+2 is always 4, regardless of the weather."},step3:{title:"Connector",what:"The side-effect handler. Executes trades.",parallel:"The hands that actually move the chips on the table."},bitemporality:{title:"State Management (Recursion)",intro:"We avoid global atoms for the main loop state.",trading:"State exists only on the stack via (loop [state init] ... (recur new-state)).",healthcare:"This ensures the state lifecycle is tightly bound to the process.",conclusion:"Data consistency is maintained through immutability. Each iteration creates a fresh state map derived from the previous one, without mutation."},demo:{instruction:'Click "INJECT VOLATILITY" to see the engine handle load:',step1:"The Orchestrator maintains the loop.",step2:"The Strategy computes signals purely.",step3:"The Connector executes safely.",conclusion:"This architecture allows us to test the Strategy in isolation using just data maps, without mocking complex exchange APIs."}},section4:{title:"Libraries & Talking Points",subtitle:"Key Tech Stack & Interview Answers",text:"Core technologies and standard responses for technical questions.",headers:["KEY LIBRARY / CONCEPT","ROLE / APPLICATION"],rows:{source:{fintech:{title:"core.async",detail:"(Concurrency)"},healthcare:{title:"CSP (Communicating Sequential Processes)",detail:"(Non-blocking management of the main loop)"}},norm:{fintech:{title:"Tick",detail:"(Time)"},healthcare:{title:"Better Time Intepretation",detail:"(Superior to Java 8 Date/Time for intervals)"}},audit:{fintech:{title:"Carmine",detail:"(Redis)"},healthcare:{title:"Hot State / Pub-Sub",detail:"(Telemetry and fast persistence)"}},decision:{fintech:{title:"Polylith",detail:"(Architecture)"},healthcare:{title:"Monorepo Tooling",detail:"(Enforces strict component isolation)"}}},closing:"Why Clojure? Data processing fits naturally with immutable maps. REPL allows interactive debugging against real market data."},section5:{title:"READY FOR QUESTIONS",text:"Ready to discuss Architecture, Concurrency, or Strategy Implementation details."}},arkStreams:{title:"Ark Streams",subtitle:"Real-time trading intelligence. Every event durable. Every decision replayable.",section1:{title:"The Problem",text:"Most trading tools are stateless: they poll an API, compute an indicator, and forget. Ark Streams publishes every candle, every indicator update, every signal as a durable NATS event — making the entire pipeline replayable from day one.",cap1:"Watch live strategy decisions form in real time, timeframe by timeframe",cap2:"Replay historical market sessions through the same engine that runs live",cap3:"Run grid searches over strategy parameters against stored data",cap4:"Observe macro context (WTI, DXY, SP500, IBOV) alongside crypto price action"},section2:{title:"NATS JetStream — The Backbone",subtitle:"Collectors // FractalEngine // Strategy // API",intro:"Every component is fully decoupled. Collectors publish raw candles. The FractalEngine enriches them with indicators. Strategies consume the enriched stream and emit signals. Nothing talks directly — everything flows through NATS subjects.",part1:{title:"Data Ingestion",intro:"Bitget WebSocket (OHLCV, liquidations, private positions), Binance (funding rate, OI), Yahoo Finance REST — polling WTI, BRENT, SP500, DXY, IBOV, USDBRL every hour."},part2:{title:"Processing Pipeline",intro:"FractalEngine runs one instance per symbol × timeframe. Publishes AnalyzedEvent to market.analyzed.* and writes the latest snapshot to KV: MARKET_STATE."},part3:{title:"Persistent Streams",intro:"MARKET_DATA (7d) · SIGNALS (30d) · POSITIONS (30d) · STRATEGY (365d) · KV: MARKET_STATE + STRATEGY_STATE (last 50 transitions)."}},section3:{title:"FractalEngine — The Analytical Core",role:"Bill Williams Indicator Suite",subtitle:"Raw Candle → Enriched AnalyzedEvent → market.analyzed.*",subtitle2:"One engine instance per symbol × timeframe. Warms up from REST history before subscribing to the live stream — indicators are fully converged before any strategy sees data.",step1:{title:"Collectors",what:"Ingest raw OHLCV from Bitget, Binance, and Yahoo Finance.",parallel:""},step2:{title:"FractalEngine",what:"Compute the full Bill Williams suite. Publish AnalyzedEvent to NATS.",magic:"",parallel:""},step3:{title:"Strategy",what:"Subscribe to market.analyzed.*. Emit TradeSignal to signals.trade.*.",parallel:""}},section4:{title:"AlligatorTrend — The Strategy",subtitle:"All 6 entry filters must pass simultaneously before a signal is emitted",headers:["FILTER","LONG","SHORT"],rows:{runtime:{fintech:{title:"Alligator Transition",detail:"Bias just turned Bullish"},healthcare:{title:"Alligator Transition",detail:"Bias just turned Bearish"}},messaging:{fintech:{title:"Alligator Spread",detail:"Jaw/teeth/lips spread > threshold"},healthcare:{title:"Alligator Spread",detail:"Same"}},ui:{fintech:{title:"BB Squeeze Gate",detail:"BB width > 50th pct (300 bars)"},healthcare:{title:"BB Squeeze Gate",detail:"Same"}},deployment:{fintech:{title:"Awesome Oscillator",detail:"AO > 0, accelerating (green bar)"},healthcare:{title:"Awesome Oscillator",detail:"AO < 0, accelerating (red bar)"}}},closing:"Exit: 2×ATR(14) TP/SL · Alligator trend reversal · Teeth touch (2-bar debounce) · PaperBroker with pyramiding, MFE/MAE, FixedFractionalRM"},section5:{title:"GROWTH PATH",text:"Symbol-agnostic by design — every new collector auto-feeds all downstream consumers via wildcard NATS subscriptions."},footer:{memory:"Events: Durable",latency:"Latency: Ultra-Low",stack:"Stack: Go + NATS"},conclusion:`Every candle matters.
Every signal survives.
Built to scale.`}},eg={common:{change_language:"Alterar idioma para {name}",loading:"CARREGANDO..."},nav:{reports:"[ RELATÓRIOS ]",terminal:"[ TERMINAL AO VIVO ]"},report:{nav_back:"← NEXUS QUANT",nav_title:"RELATÓRIOS OPERACIONAIS",nav_week:"SEMANA",generated_label:"GERADO",page_title:"Mesa de Operações",methodology_label:"METODOLOGIA",indicators_label:"INDICADORES",font_decrease:"A−",font_increase:"A+",warning_title:"Validade dos dados:",warning_text:"Revalidar todos os preços, médias e osciladores na abertura semanal antes de armar qualquer ordem. Este relatório é um framework de decisão com risco definido — não previsão nem garantia de resultado. Somente operar em <strong>barra fechada</strong> do screen relevante.",priority_title:"Fila de Monitoramento · por Prioridade",scoreboard_title:"Scoreboard de Viés · Triple Screen",role_primary:"PRIMÁRIO",role_macro:"MACRO",impulse_red:"● VERMELHO",impulse_green:"● VERDE",impulse_blue_red:"◑ AZUL → VERMELHO",zone_neutral_up:"Neutro subindo",zone_rising_overbought:"Subindo → sobrecompra",zone_overbought:"Sobrecomprado",zone_low_k_below_d:"Baixo, K < D",zone_rising:"Subindo",zone_oversold:"Sobrevendido",btc_note:"Impulso pendente confirmação. Short condicional.",xau_note:"Short amadurecendo. Estocástico na resistência.",sp_note:"Aguardar pullback a 7.369. Não comprar sobrecompra.",bovespa_note:"Tendência mais limpa. Duas telas alinhadas.",usdbrl_note:"Vender repique perto de 5,11 (EMA semanal underside).",brent_note:"Não vender sobrevendido. Aguardar repique a 101.",playbook_title:"BTC/USD — Playbook Primário",tide_label:"MARÉ (SEMANAL)",wave_label:"ONDA (DIÁRIO)",tide_text:'Preço <span class="text-white">75.708,00</span> abaixo da MME(17) <span class="text-rose-400">76.533,35</span>. Histograma MACD positivo porém desacelerando — barra semanal nova menor que a anterior (topo mais baixo). Impulso <span class="text-amber-400">azul em transição</span>; vira vermelho quando histograma confirmar fechamento semanal.',wave_text:'Preço abaixo da MME descendente. Estocástico %K <span class="text-[#4CC9F0]">42,08</span> / %D <span class="text-[#4CC9F0]">28,63</span>, subindo (banda sup. 89,03). Repique contra-tendência em curso — <strong class="text-white">ainda não sobrecomprado</strong>. Convicção escala para FULL após fechamento semanal vermelho.',trigger_label:"GATILHO",action_label:"AÇÃO",stop_label:"STOP",sc_a_name:"VENDA NO REPIQUE",sc_a_condition:"Preço repica à zona 76.533–76.606 + estocástico 1h sobrecomprado e virando + rompe mínima 15m",sc_a_target_label:"SUPORTE",sc_b_name:"VENDA NA CONTINUAÇÃO",sc_b_condition:"Fechamento abaixo de 73.936 + reteste por baixo rejeitado + rompe mínima 15m",sc_b_target_label:"PARCIAL → RUNNER",sc_c_label:"SEM TRADE",sc_c_text:'Condição: maré deixa de ser baixista <strong>ou</strong> reclaim/fechamento acima de 76.533. Ação: <span class="text-[#00F0FF]/60">CancelSetups</span> — puxar ordens pendentes, seguir ARMED sem entradas.',sc_a_invalidation:"Fechamento acima de 76.533",sc_b_invalidation:"Recompõe e fecha de volta acima de 73.936",macro_implication_title:"IMPLICAÇÃO MACRO",macro_implication_text:'O viés vendedor do BTC não tem risk-off macro amplo por trás (S&P forte é o contrapeso). Tratar o short como <strong class="text-white">correção dentro de tendência</strong>, não início de bear macro: alvos mais modestos, vigilância redobrada na invalidação por reclaim.',risk_title:"Gestão de Risco · Regras Não-Negociáveis",rule_2pct_id:"2%",rule_2pct_title:"REGRA DOS 2%",rule_2pct_body:"Nunca arriscar mais que 2% da conta por trade. Definir o stop primeiro; dimensionar a posição pelo stop.",rule_6pct_id:"6%",rule_6pct_title:"REGRA DOS 6%",rule_6pct_body:"Se as perdas do mês atingirem 6% da conta, encerrar o operacional até virar o mês.",rule_conv_id:"CONV",rule_conv_title:"CONVICÇÃO & TAMANHO",rule_conv_body:"HALF = meia mão (impulso não confirmado). FULL = mão cheia (impulso semanal confirmado).",rule_hier_id:"HIER",rule_hier_title:"HIERARQUIA DE TELAS",rule_hier_body:"Nunca operar contra a maré. Long somente onde a maré é de alta. Stop definido na entrada — não-negociável.",legend_armed:"permissão ativa; aguardando gatilho",legend_standby:"sem permissão; não operar",legend_in_position:"posição aberta (runtime)",legend_full:"impulso semanal confirmado · mão cheia",legend_half:"semana em transição · meia mão",zone_label:"ZONA"},hero:{status:"SISTEMAS OPERACIONAIS",title:"NEXUS QUANT",subtitle:"Pesquisa Quantitativa Proprietária e Sistemas de Decisão Automatizados.",cta:"[ VER FILOSOFIA ]",cta_ark:"[ APRESENTAÇÃO ARK STREAMS ]",cta_terminal:"[ TERMINAL EM TEMPO REAL ]"},philosophy:{title:">_ DIRETRIZ DA MISSÃO",hero_text:'Abordamos os mercados financeiros como <span class="text-white font-medium">sistemas físicos complexos</span>. Ao unir <span class="text-white font-medium">pesquisa estocástica</span> com <span class="text-white font-medium">engenharia de software determinística</span>, construímos motores de decisão que prosperam no caos.',p1:{title:"Precisão",text:"Priorizamos a integridade e correção dos dados em vez da velocidade especulativa bruta."},p2:{title:"Automação",text:"Removendo o viés cognitivo humano dos fluxos críticos de execução."},p3:{title:"Resiliência",text:"Sistemas projetados para manter 99,9% de disponibilidade em ambientes adversos."}},stack:{title:">_ ARQUITETURA",card1:{title:"ANÁLISE QUANTITATIVA",text:"Teste rápido de hipóteses, modelagem estatística e backtesting usando o ecossistema de ciência de dados Python."},card2:{title:"RUNTIME DE PRODUÇÃO",text:"Nossa plataforma proprietária de inteligência orientada a eventos. Construída em Go e movida por NATS JetStream para garantir latência ultra-baixa, persistência nativa e escalabilidade contínua."},card3:{title:"LEDGER IMUTÁVEL",text:"Rastreabilidade total de cada estado de decisão. Utilizamos recursos de banco de dados de viagem no tempo para auditoria pós-trade rigorosa."}},evolution:{title:">_ EVOLUÇÃO DO SISTEMA",phase1:{period:"2023 - 2025",name:"Fase 1: Fundação Funcional",tech:"Clojure / JVM / Polylith",description:"Foco em corretude matemática, estruturas de dados imutáveis e desenvolvimento orientado a REPL. Provou a viabilidade da nossa lógica de estratégia baseada em Bill Williams."},phase2:{period:"2026 - Present",name:"Fase 2: Ecossistema Híbrido",tech:"Go / NATS JetStream / Wails",description:"Expansão para uma arquitetura híbrida de alta concorrência e baixa latência. Integração de Go para nós de borda em produção, mantendo Clojure para modelagem de estratégias, unificados por um barramento NATS persistente."}},metrics:{title:":: STATUS DO SISTEMA ::",header:{component:"COMPONENTE",status:"STATUS",latency:"LATÊNCIA",heartbeat:"HEARTBEAT"},status_labels:{connected:"CONECTADO",running:"EXECUTANDO",guarded:"PROTEGIDO",synced:"SINCRONIZADO"},ago:"{n}s atrás",enter_terminal:"[ ENTRAR NO TERMINAL AO VIVO ]"},footer:{rights:"© {year} Nexus Quant. Todos os direitos reservados.",location:"Rio de Janeiro, BR // Operações Globais"},arkStreams:{title:"Ark Streams",subtitle:"Inteligência de trading em tempo real. Todo evento durável. Toda decisão reproduzível.",section1:{title:"O Problema",text:"A maioria das ferramentas de trading é stateless: consultam uma API, calculam um indicador e esquecem. O Ark Streams publica cada candle, cada atualização de indicador, cada sinal como um evento durável no NATS — tornando o pipeline inteiramente reproduzível desde o primeiro dia.",cap1:"Acompanhe decisões da estratégia se formando em tempo real, timeframe por timeframe",cap2:"Reproduza sessões históricas pelo mesmo engine que roda ao vivo",cap3:"Execute grid searches sobre parâmetros da estratégia contra dados armazenados",cap4:"Observe contexto macro (WTI, DXY, SP500, IBOV) ao lado do price action crypto"},section2:{title:"NATS JetStream — O Backbone",subtitle:"Collectors // FractalEngine // Strategy // API",intro:"Cada componente é totalmente desacoplado. Collectors publicam candles brutos. O FractalEngine os enriquece com indicadores. Estratégias consomem o stream enriquecido e emitem sinais. Nada se fala diretamente — tudo flui por subjects NATS.",part1:{title:"Ingestão de Dados",intro:"Bitget WebSocket (OHLCV, liquidações, posições privadas), Binance (funding rate, OI), Yahoo Finance REST — polling de WTI, BRENT, SP500, DXY, IBOV, USDBRL a cada hora."},part2:{title:"Pipeline de Processamento",intro:"FractalEngine roda uma instância por símbolo × timeframe. Publica AnalyzedEvent em market.analyzed.* e escreve o snapshot mais recente em KV: MARKET_STATE."},part3:{title:"Streams Persistentes",intro:"MARKET_DATA (7d) · SIGNALS (30d) · POSITIONS (30d) · STRATEGY (365d) · KV: MARKET_STATE + STRATEGY_STATE (últimas 50 transições)."}},section3:{title:"FractalEngine — O Núcleo Analítico",role:"Suite de Indicadores Bill Williams",subtitle:"Candle Bruto → AnalyzedEvent Enriquecido → market.analyzed.*",subtitle2:"Uma instância por símbolo × timeframe. Aquece via REST antes de assinar o stream ao vivo — indicadores totalmente convergidos antes de qualquer estratégia ver dados.",step1:{title:"Collectors",what:"Ingestão de OHLCV bruto via Bitget, Binance e Yahoo Finance.",parallel:""},step2:{title:"FractalEngine",what:"Calcula a suite completa Bill Williams. Publica AnalyzedEvent no NATS.",magic:"",parallel:""},step3:{title:"Strategy",what:"Assina market.analyzed.*. Emite TradeSignal em signals.trade.*.",parallel:""}},section4:{title:"AlligatorTrend — A Estratégia",subtitle:"Todos os 6 filtros de entrada devem passar simultaneamente antes de um sinal ser emitido",headers:["FILTRO","LONG","SHORT"],rows:{runtime:{fintech:{title:"Transição Alligator",detail:"Bias acabou de virar Bullish"},healthcare:{title:"Transição Alligator",detail:"Bias acabou de virar Bearish"}},messaging:{fintech:{title:"Spread Alligator",detail:"Jaw/teeth/lips spread > threshold"},healthcare:{title:"Spread Alligator",detail:"Mesmo"}},ui:{fintech:{title:"BB Squeeze Gate",detail:"Largura BB > percentil 50 (300 barras)"},healthcare:{title:"BB Squeeze Gate",detail:"Mesmo"}},deployment:{fintech:{title:"Awesome Oscillator",detail:"AO > 0, acelerando (barra verde)"},healthcare:{title:"Awesome Oscillator",detail:"AO < 0, acelerando (barra vermelha)"}}},closing:"Saída: 2×ATR(14) TP/SL · Reversão de tendência Alligator · Toque nos dentes (debounce 2 barras) · PaperBroker com pirâmide, MFE/MAE, FixedFractionalRM"},section5:{title:"PLANO DE CRESCIMENTO",text:"Agnóstico a símbolo por design — cada novo collector alimenta automaticamente todos os consumidores downstream via assinaturas wildcard no NATS."},footer:{memory:"Eventos: Duráveis",latency:"Latência: Ultra-Baixa",stack:"Stack: Go + NATS"},conclusion:`Todo candle importa.
Todo sinal sobrevive.
Construído para escalar.`}},tg={common:{change_language:"Cambiar idioma a {name}",loading:"CARGANDO..."},hero:{status:"SISTEMAS OPERATIVOS",title:"NEXUS QUANT",subtitle:"Investigación Cuantitativa Propietaria y Sistemas de Decisión Automatizados.",cta:"[ VER FILOSOFÍA ]",cta_terminal:"[ TERMINAL EN VIVO ]"},philosophy:{title:">_ DIRECTRIZ DE MISIÓN",hero_text:'Abordamos los mercados financieros como <span class="text-white font-medium">sistemas físicos complexes</span>. Al unir <span class="text-white font-medium">investigación estocástica</span> con <span class="text-white font-medium">ingeniería de software determinística</span>, construimos motores de decisión que prosperan en el caos.',p1:{title:"Precisión",text:"Priorizamos la integridad y corrección de los datos sobre la velocidad especulativa bruta."},p2:{title:"Automatización",text:"Eliminando el sesgo cognitivo humano de los flujos de ejecución críticos."},p3:{title:"Resiliencia",text:"Sistemas diseñados para mantener un 99,9% de disponibilidad en entornos adversos."}},stack:{title:">_ ARQUITETURA",card1:{title:"ANÁLISIS CUANTITATIVO",text:"Pruebas rápidas de hipótesis, modelado estadístico y backtesting utilizando el ecosistema de ciencia de datos de Python."},card2:{title:"RUNTIME DE PRODUCCIÓN",text:"Nuestro motor de ejecución patentado. Basado en principios de programación funcional para garantizar la seguridad de concurrencia y la tolerancia a fallos."},card3:{title:"LIBRO INMUTABLE",text:"Trazabilidad completa de cada estado de decisión. Utilizamos capacidades de base de datos de viaje en el tiempo para una auditoría post-negociación rigurosa."}},metrics:{title:":: ESTADO DEL SISTEMA ::",header:{component:"COMPONENTE",status:"ESTADO",latency:"LATENCIA",heartbeat:"LATIDO"},status_labels:{connected:"CONECTADO",running:"EJECUTANDO",guarded:"PROTEGIDO",synced:"SINCRONIZADO"},ago:"hace {n}s",enter_terminal:"[ INGRESAR AL TERMINAL EN VIVO ]"},footer:{rights:"© {year} Nexus Quant. Todos los derechos reservados.",location:"Río de Janeiro, BR // Operaciones Globales"}},ng={common:{change_language:"Сменить язык на {name}",loading:"ЗАГРУЗКА..."},hero:{status:"СИСТЕМЫ РАБОТАЮТ",title:"NEXUS QUANT",subtitle:"Собственные количественные исследования и автоматизированные системы принятия решений.",cta:"[ ПОСМОТРЕТЬ ФИЛОСОФИЮ ]",cta_terminal:"[ ЖИВОЙ ТЕРМИНАЛ ]"},philosophy:{title:">_ ДИРЕКТИВА МИССИИ",hero_text:'Мы рассматриваем финансовые рынки как <span class="text-white font-medium">сложные физические системы</span>. Объединяя <span class="text-white font-medium">стохастические исследования</span> с <span class="text-white font-medium">детерминированной программной инженерией</span>, мы создаем механизмы принятия решений, процветающие в хаосе.',p1:{title:"Точность",text:"Мы ставим целостность и корректность данных выше грубой спекулятивной скорости."},p2:{title:"Автоматизация",text:"Исключение человеческого когнитивного искажения из критически важных рабочих процессов исполнения."},p3:{title:"Устойчивость",text:"Системы, разработанные для поддержания 99,9% времени безотказной работы в агрессивных средах."}},stack:{title:">_ АРХИТЕКТУРА",card1:{title:"КОЛИЧЕСТВЕННЫЙ АНАЛИЗ",text:"Быстрое тестирование гипотез, статистическое моделирование и бэктестинг с использованием экосистемы науки о данных Python."},card2:{title:"ПРОИЗВОДСТВЕННАЯ СРЕДА",text:"Наш собственный механизм исполнения. Построен на принципах функционального программирования для обеспечения безопасности параллелизма и отказоустойчивости."},card3:{title:"НЕИЗМЕНЯЕМЫЙ РЕЕСТР",text:"Полная прослеживаемость каждого состояния принятия решения. Мы используем возможности баз данных с путешествием во времени для строгого аудита после сделок."}},metrics:{title:":: СОСТОЯНИЕ СИСТЕМЫ ::",header:{component:"КОМПОНЕНТ",status:"СТАТУС",latency:"ЗАДЕРЖКА",heartbeat:"СЕРДЦЕБИЕНИЕ"},status_labels:{connected:"ПОДКЛЮЧЕНО",running:"ЗАПУЩЕНО",guarded:"ОХРАНЯЕТСЯ",synced:"СИНХРОНИЗИРОВАНО"},ago:"{n}с назад",enter_terminal:"[ ОТКРЫТЬ РЕАЛ-ТАЙМ ТЕРМИНАЛ ]"},footer:{rights:"© {year} Nexus Quant. Все права защищены.",location:"Рио-де-Жанейро, БР // Глобальные операции"}},ig={common:{change_language:"Змінити мову на {name}",loading:"ЗАВАНТАЖЕННЯ..."},hero:{status:"СИСТЕМИ ПРАЦЮЮТЬ",title:"NEXUS QUANT",subtitle:"Власні кількісні дослідження та автоматизовані системи прийняття рішень.",cta:"[ ПЕРЕГЛЯНУТИ ФІЛОСОФІЮ ]",cta_terminal:"[ ЖИВИЙ ТЕРМІНАЛ ]"},philosophy:{title:">_ ДИРЕКТИВА МІСІЇ",hero_text:'Ми розглядаємо фінансові ринки як <span class="text-white font-medium">складні фізичні системи</span>. Поєднуючи <span class="text-white font-medium">стохастичні дослідження</span> з <span class="text-white font-medium">детермінованою програмною інженерією</span>, ми створюємо механізми прийняття рішень, що процвітають у хаосі.',p1:{title:"Точність",text:"Ми ставимо цілісність і коректність даних вище грубої спекулятивної швидкості."},p2:{title:"Автоматизація",text:"Виключення людського когнітивного упередження з критично важливих робочих процесів виконання."},p3:{title:"Стійкість",text:"Системи, розроблені для підтримки 99,9% часу безвідмовної роботи в агресивних середовищах."}},stack:{title:">_ АРХІТЕКТУРА",card1:{title:"КІЛЬКІСНИЙ АНАЛІЗ",text:"Швидке тестування гіпотез, статистичне моделювання та бектестування з використанням екосистеми науки про дані Python."},card2:{title:"ВИРОБНИЧЕ СЕРЕДОВИЩЕ",text:"Наш власний механізм виконання. Побудований на принципах функціонального програмування для забезпечення безпеки паралелізму та відмовостійкості."},card3:{title:"НЕЗМІННИЙ РЕЄСТР",text:"Повна простежуваність кожного стану прийняття рішення. Ми використовуємо можливості баз даних з подорожжю в часі для суворого аудиту після угод."}},metrics:{title:":: СТАН СИСТЕМИ ::",header:{component:"КОМПОНЕНТ",status:"СТАТУС",latency:"ЗАТРИМКА",heartbeat:"СЕРЦЕБИТТЯ"},status_labels:{connected:"ПІДКЛЮЧЕНО",running:"ЗАПУЩЕНО",guarded:"ОХОРОНЯЄТЬСЯ",synced:"СИНХРОНІЗОВАНО"},ago:"{n}с тому",enter_terminal:"[ ВІДКРИТИ РЕАЛ-ТАЙМ ТЕРМІНАЛ ]"},footer:{rights:"© {year} Nexus Quant. Всі права захищені.",location:"Ріо-де-Жанейро, БР // Глобальні операції"}},rg={common:{change_language:"更改语言为 {name}",loading:"加载中..."},hero:{status:"系统运行正常",title:"NEXUS QUANT",subtitle:"专有定量研究和自动决策系统。",cta:"[ 查看理念 ]",cta_terminal:"[ 实时终端 ]"},philosophy:{title:">_ 任务指令",hero_text:'我们将金融市场视为<span class="text-white font-medium">复杂的物理系统</span>。通过将<span class="text-white font-medium">随机研究</span>与<span class="text-white font-medium">确定性软件工程</span>相结合，我们构建了在混乱中蓬勃发展的决策引擎。',p1:{title:"精确性",text:"我们优先考虑数据的完整性和正确性，而不是单纯的投机速度。"},p2:{title:"自动化",text:"从关键执行工作流中消除人类认知偏差。"},p3:{title:"弹性",text:"旨在在对抗性环境中保持 99.9% 正常运行时间的系统。"}},stack:{title:">_ 架构",card1:{title:"定量分析",text:"使用 Python 数据科学生态系统进行快速假设检验、统计建模和回测。"},card2:{title:"生产运行环境",text:"我们的专有执行引擎。建立在函数式编程原则之上，以确保并发安全和容错能力。"},card3:{title:"不可变账本",text:"每个决策状态的完全可追溯性。我们利用时间旅行数据库功能进行严格的交易后审计。"}},metrics:{title:":: 系统状态 ::",header:{component:"组件",status:"状态",latency:"延迟",heartbeat:"心跳"},status_labels:{connected:"已连接",running:"运行中",guarded:"受保护",synced:"已同步"},ago:"{n}秒前",enter_terminal:"[ 进入实时交易终端 ]"},footer:{rights:"© {year} Nexus Quant. 保留所有权利。",location:"里约热内卢, 巴西 // 全球运营"}},ag={common:{change_language:"言語を{name}に変更",loading:"読み込み中..."},hero:{status:"システム稼働中",title:"NEXUS QUANT",subtitle:"独自の定量的研究および自動意思決定システム。",cta:"[ 哲学を見る ]",cta_terminal:"[ ライブ端末 ]"},philosophy:{title:">_ ミッション指令",hero_text:'私たちは金融市場を<span class="text-white font-medium">複雑な物理システム</span>として捉えています。<span class="text-white font-medium">確率的研究</span>と<span class="text-white font-medium">決定論的ソフトウェア工学</span>を融合させることで、混沌の中で繁栄する意思決定エンジンを構築します。',p1:{title:"精度",text:"私たちは、単なる投機的な速度よりもデータの整合性と正確性を優先します。"},p2:{title:"自動化",text:"重要な実行ワークフローから人間の認知的バイアスを排除します。"},p3:{title:"回復力",text:"敵対的な環境でも99.9%の稼働率を維持するように設計されたシステム。"}},stack:{title:">_ アーキテクチャ",card1:{title:"定量的分析",text:"Pythonデータサイエンスエコシステムを使用した迅速な仮説検証、統計モデリング、およびバックテスト。"},card2:{title:"本番ランタイム",text:"当社独自の実行エンジン。並行性の安全性とフォールトトレランスを確保するために、関数型プログラミングの原則に基づいて構築されています。"},card3:{title:"不変台帳",text:"すべての意思決定状態の完全な追跡可能性。厳格な取引後監査のためにタイムトラベルデータベース機能を利用しています。"}},metrics:{title:":: システムステータス ::",header:{component:"コンポーネント",status:"ステータス",latency:"レイテンシ",heartbeat:"ハートビート"},status_labels:{connected:"接続済み",running:"実行中",guarded:"保護中",synced:"同期済み"},ago:"{n}秒前",enter_terminal:"[ リアルタイム端末に入る ]"},footer:{rights:"© {year} Nexus Quant. 全著作権所有。",location:"リオデジャネイロ, ブラジル // グローバルオペレーション"}},sg={common:{change_language:"Sprache ändern zu {name}",loading:"LÄDT..."},hero:{status:"SYSTEME BETRIEBSBEREIT",title:"NEXUS QUANT",subtitle:"Proprietäre quantitative Forschung & automatisierte Entscheidungssysteme.",cta:"[ PHILOSOPHIE ANSEHEN ]",cta_terminal:"[ LIVE-TERMINAL ]"},philosophy:{title:">_ MISSIONSDIREKTIVE",hero_text:'Wir betrachten Finanzmärkte als <span class="text-white font-medium">komplexe physikalische Systeme</span>. Durch die Verbindung von <span class="text-white font-medium">stochastischer Forschung</span> mit <span class="text-white font-medium">deterministischer Softwareentwicklung</span> bauen wir Entscheidungsmaschinen, die im Chaos gedeihen.',p1:{title:"Präzision",text:"Wir priorisieren Datenintegrität und Korrektheit gegenüber roher spekulativer Geschwindigkeit."},p2:{title:"Automatisierung",text:"Entfernung menschlicher kognitiver Verzerrungen aus kritischen Ausführungsabläufen."},p3:{title:"Resilienz",text:"Systeme, die entwickelt wurden, um in feindlichen Umgebungen eine Verfügbarkeit von 99,9% aufrechtzuerhalten."}},stack:{title:">_ ARCHITEKTUR",card1:{title:"QUANTITATIVE ANALYSE",text:"Schnelles Testen von Hypothesen, statistische Modellierung und Backtesting unter Verwendung des Python-Data-Science-Ökosystems."},card2:{title:"PRODUKTIONS-LAUFZEITUMGEBUNG",text:"Unsere proprietäre Ausführungs-Engine. Aufgebaut auf Prinzipien der funktionalen Programmierung zur Gewährleistung von Nebenläufigkeitssicherheit und Fehlertoleranz."},card3:{title:"UNVERÄNDERLICHES HAUPTBUCH",text:"Vollständige Rückverfolgbarkeit jedes Entscheidungszustands. Wir nutzen Zeitreise-Datenbankfunktionen für rigorose Nachhandelsprüfungen."}},metrics:{title:":: SYSTEMSTATUS ::",header:{component:"KOMPONENTE",status:"STATUS",latency:"LATENZ",heartbeat:"HEARTBEAT"},status_labels:{connected:"VERBUNDEN",running:"LÄUFT",guarded:"GESCHÜTZT",synced:"SYNCHRONISIERT"},ago:"vor {n}s",enter_terminal:"[ LIVE-TERMINAL ÖFFNEN ]"},footer:{rights:"© {year} Nexus Quant. Alle Rechte vorbehalten.",location:"Rio de Janeiro, BR // Globale Operationen"}};ki("en",Qv);ki("pt",eg);ki("es",tg);ki("ru",ng);ki("uk",ig);ki("zh",rg);ki("ja",ag);ki("de",sg);const vl=["en","pt"];function og(){if(typeof window>"u")return"en";try{const e=localStorage.getItem("preferred-locale");if(e&&vl.includes(e))return e}catch{}const n=navigator.languages||[navigator.language];for(const e of n){if(!e)continue;if(vl.includes(e))return e;const t=e.split("-")[0];if(vl.includes(t))return t}return"en"}Iv({fallbackLocale:"en",initialLocale:og()});const lg="5";var Rh;typeof window<"u"&&((Rh=window.__svelte??(window.__svelte={})).v??(Rh.v=new Set)).add(lg);fm();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yd="182",cg=0,wu=1,dg=2,ro=1,ug=2,Wa=3,ar=0,Tn=1,Gn=2,mi=0,ta=1,cc=2,Tu=3,Au=4,hg=5,Mr=100,fg=101,pg=102,mg=103,vg=104,gg=200,xg=201,_g=202,bg=203,dc=204,uc=205,yg=206,Sg=207,Mg=208,Eg=209,wg=210,Tg=211,Ag=212,Rg=213,Cg=214,hc=0,fc=1,pc=2,la=3,mc=4,vc=5,gc=6,xc=7,Sd=0,Pg=1,Ig=2,vi=0,Vf=1,Gf=2,Wf=3,$f=4,Xf=5,qf=6,Yf=7,jf=300,Pr=301,ca=302,_c=303,bc=304,Xo=306,yc=1e3,Li=1001,Sc=1002,nn=1003,Lg=1004,Ns=1005,un=1006,gl=1007,wr=1008,Nn=1009,Kf=1010,Zf=1011,ts=1012,Md=1013,Si=1014,fi=1015,Fn=1016,Ed=1017,wd=1018,ns=1020,Jf=35902,Qf=35899,ep=1021,tp=1022,ti=1023,Oi=1026,Tr=1027,np=1028,Td=1029,da=1030,Ad=1031,Rd=1033,ao=33776,so=33777,oo=33778,lo=33779,Mc=35840,Ec=35841,wc=35842,Tc=35843,Ac=36196,Rc=37492,Cc=37496,Pc=37488,Ic=37489,Lc=37490,Dc=37491,Nc=37808,Uc=37809,Fc=37810,Oc=37811,Bc=37812,kc=37813,zc=37814,Hc=37815,Vc=37816,Gc=37817,Wc=37818,$c=37819,Xc=37820,qc=37821,Yc=36492,jc=36494,Kc=36495,Zc=36283,Jc=36284,Qc=36285,ed=36286,Dg=3200,Cd=0,Ng=1,Zi="",Vn="srgb",ua="srgb-linear",Ao="linear",Tt="srgb",zr=7680,Ru=519,Ug=512,Fg=513,Og=514,Pd=515,Bg=516,kg=517,Id=518,zg=519,Cu=35044,Pu="300 es",pi=2e3,Ro=2001;function ip(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hg(){const n=Co("canvas");return n.style.display="block",n}const Iu={};function Lu(...n){const e="THREE."+n.shift();console.log(e,...n)}function at(...n){const e="THREE."+n.shift();console.warn(e,...n)}function xt(...n){const e="THREE."+n.shift();console.error(e,...n)}function is(...n){const e=n.join(" ");e in Iu||(Iu[e]=!0,at(...n))}function Vg(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}class Ma{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xl=Math.PI/180,td=180/Math.PI;function ps(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function pt(n,e,t){return Math.max(e,Math.min(t,n))}function Gg(n,e){return(n%e+e)%e}function _l(n,e,t){return(1-t)*n+t*e}function Ua(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function En(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ms{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3],u=a[s+0],p=a[s+1],g=a[s+2],x=a[s+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(o>=1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==u||c!==p||d!==g){let m=l*u+c*p+d*g+h*x;m<0&&(u=-u,p=-p,g=-g,x=-x,m=-m);let f=1-o;if(m<.9995){const _=Math.acos(m),b=Math.sin(_);f=Math.sin(f*_)/b,o=Math.sin(o*_)/b,l=l*f+u*o,c=c*f+p*o,d=d*f+g*o,h=h*f+x*o}else{l=l*f+u*o,c=c*f+p*o,d=d*f+g*o,h=h*f+x*o;const _=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=_,c*=_,d*=_,h*=_}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=a[s],u=a[s+1],p=a[s+2],g=a[s+3];return e[t]=o*g+d*h+l*p-c*u,e[t+1]=l*g+d*u+c*h-o*p,e[t+2]=c*g+d*p+o*u-l*h,e[t+3]=d*g-o*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(a/2),u=l(i/2),p=l(r/2),g=l(a/2);switch(s){case"XYZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"YXZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"ZXY":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"ZYX":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"YZX":this._x=u*d*h+c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h-u*p*g;break;case"XZY":this._x=u*d*h-c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h+u*p*g;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=i+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(a-c)*p,this._z=(s-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(a-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(s-r)/p,this._x=(a+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+s*o+r*c-a*l,this._y=r*d+s*l+a*o-i*c,this._z=a*d+s*c+i*l-r*o,this._w=s*d-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,a=-a,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Du.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),d=2*(o*t-a*r),h=2*(a*i-s*t);return this.x=t+l*c+s*h-o*d,this.y=i+l*d+o*c-a*h,this.z=r+l*h+a*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bl.copy(this).projectOnVector(e),this.sub(bl)}reflect(e){return this.sub(bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bl=new W,Du=new ms;class lt{constructor(e,t,i,r,a,s,o,l,c){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=a,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],p=i[5],g=i[8],x=r[0],m=r[3],f=r[6],_=r[1],b=r[4],E=r[7],y=r[2],R=r[5],C=r[8];return a[0]=s*x+o*_+l*y,a[3]=s*m+o*b+l*R,a[6]=s*f+o*E+l*C,a[1]=c*x+d*_+h*y,a[4]=c*m+d*b+h*R,a[7]=c*f+d*E+h*C,a[2]=u*x+p*_+g*y,a[5]=u*m+p*b+g*R,a[8]=u*f+p*E+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-i*a*d+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*s-o*c,u=o*l-d*a,p=c*a-s*l,g=t*h+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*c-d*i)*x,e[2]=(o*i-r*s)*x,e[3]=u*x,e[4]=(d*t-r*l)*x,e[5]=(r*a-o*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(s*t-i*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(yl.makeScale(e,t)),this}rotate(e){return this.premultiply(yl.makeRotation(-e)),this}translate(e,t){return this.premultiply(yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yl=new lt,Nu=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uu=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wg(){const n={enabled:!0,workingColorSpace:ua,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===Tt&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Tt&&(r.r=na(r.r),r.g=na(r.g),r.b=na(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zi?Ao:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ua]:{primaries:e,whitePoint:i,transfer:Ao,toXYZ:Nu,fromXYZ:Uu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:Nu,fromXYZ:Uu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),n}const _t=Wg();function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function na(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hr;class $g{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hr===void 0&&(Hr=Co("canvas")),Hr.width=e.width,Hr.height=e.height;const r=Hr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Hr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Co("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Ui(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ui(t[i]/255)*255):t[i]=Ui(t[i]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xg=0;class Ld{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Sl(r[s].image)):a.push(Sl(r[s]))}else a=Sl(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Sl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$g.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let qg=0;const Ml=new W;class bn extends Ma{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,i=Li,r=Li,a=un,s=wr,o=ti,l=Nn,c=bn.DEFAULT_ANISOTROPY,d=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=ps(),this.name="",this.source=new Ld(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ml).x}get height(){return this.source.getSize(Ml).y}get depth(){return this.source.getSize(Ml).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yc:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case Sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yc:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case Sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=jf;bn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,i=0,r=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(p+1)/2,y=(f+1)/2,R=(d+u)/4,C=(h+x)/4,L=(g+m)/4;return b>E&&b>y?b<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(b),r=R/i,a=C/i):E>y?E<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),i=R/r,a=L/r):y<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(y),i=C/a,r=L/a),this.set(i,r,a,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(u-d)*(u-d));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-x)/_,this.z=(u-d)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yg extends Ma{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const r={width:e,height:t,depth:i.depth},a=new bn(r);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ld(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends Yg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class rp extends bn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jg extends bn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vs{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Zn):Zn.fromBufferAttribute(a,s),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Us.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Us.copy(i.boundingBox)),Us.applyMatrix4(e.matrixWorld),this.union(Us)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fa),Fs.subVectors(this.max,Fa),Vr.subVectors(e.a,Fa),Gr.subVectors(e.b,Fa),Wr.subVectors(e.c,Fa),Gi.subVectors(Gr,Vr),Wi.subVectors(Wr,Gr),mr.subVectors(Vr,Wr);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-mr.z,mr.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,mr.z,0,-mr.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-mr.y,mr.x,0];return!El(t,Vr,Gr,Wr,Fs)||(t=[1,0,0,0,1,0,0,0,1],!El(t,Vr,Gr,Wr,Fs))?!1:(Os.crossVectors(Gi,Wi),t=[Os.x,Os.y,Os.z],El(t,Vr,Gr,Wr,Fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wi=[new W,new W,new W,new W,new W,new W,new W,new W],Zn=new W,Us=new vs,Vr=new W,Gr=new W,Wr=new W,Gi=new W,Wi=new W,mr=new W,Fa=new W,Fs=new W,Os=new W,vr=new W;function El(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){vr.fromArray(n,a);const o=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),c=t.dot(vr),d=i.dot(vr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Kg=new vs,Oa=new W,wl=new W;class Dd{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Kg.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);const t=Oa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Oa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(wl)),this.expandByPoint(Oa.copy(e.center).sub(wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ti=new W,Tl=new W,Bs=new W,$i=new W,Al=new W,ks=new W,Rl=new W;class ap{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Tl.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(Tl);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Bs),o=$i.dot(this.direction),l=-$i.dot(Bs),c=$i.lengthSq(),d=Math.abs(1-s*s);let h,u,p,g;if(d>0)if(h=s*l-o,u=s*o-l,g=a*d,h>=0)if(u>=-g)if(u<=g){const x=1/d;h*=x,u*=x,p=h*(h+s*u+2*o)+u*(s*h+u+2*l)+c}else u=a,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*l)+c;else u=-a,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-s*a+o)),u=h>0?-a:Math.min(Math.max(-a,-l),a),p=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(h=Math.max(0,-(s*a+o)),u=h>0?a:Math.min(Math.max(-a,-l),a),p=-h*h+u*(u+2*l)+c);else u=s>0?-a:a,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Tl).addScaledVector(Bs,u),p}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(a=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(a=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,i,r,a){Al.subVectors(t,e),ks.subVectors(i,e),Rl.crossVectors(Al,ks);let s=this.direction.dot(Rl),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;$i.subVectors(this.origin,e);const l=o*this.direction.dot(ks.crossVectors($i,ks));if(l<0)return null;const c=o*this.direction.dot(Al.cross($i));if(c<0||l+c>s)return null;const d=-o*$i.dot(Rl);return d<0?null:this.at(d/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,i,r,a,s,o,l,c,d,h,u,p,g,x,m){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,d,h,u,p,g,x,m)}set(e,t,i,r,a,s,o,l,c,d,h,u,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=a,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/$r.setFromMatrixColumn(e,0).length(),a=1/$r.setFromMatrixColumn(e,1).length(),s=1/$r.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const u=s*d,p=s*h,g=o*d,x=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+p*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,g=c*d,x=c*h;t[0]=u+x*o,t[4]=g*o-p,t[8]=s*c,t[1]=s*h,t[5]=s*d,t[9]=-o,t[2]=p*o-g,t[6]=x+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,g=c*d,x=c*h;t[0]=u-x*o,t[4]=-s*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=s*d,t[9]=x-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*d,p=s*h,g=o*d,x=o*h;t[0]=l*d,t[4]=g*c-p,t[8]=u*c+x,t[1]=l*h,t[5]=x*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,p=s*c,g=o*l,x=o*c;t[0]=l*d,t[4]=x-u*h,t[8]=g*h+p,t[1]=h,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*h+g,t[10]=u-x*h}else if(e.order==="XZY"){const u=s*l,p=s*c,g=o*l,x=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+x,t[5]=s*d,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*d,t[10]=x*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zg,e,Jg)}lookAt(e,t,i){const r=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Xi.crossVectors(i,Pn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Xi.crossVectors(i,Pn)),Xi.normalize(),zs.crossVectors(Pn,Xi),r[0]=Xi.x,r[4]=zs.x,r[8]=Pn.x,r[1]=Xi.y,r[5]=zs.y,r[9]=Pn.y,r[2]=Xi.z,r[6]=zs.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],_=i[3],b=i[7],E=i[11],y=i[15],R=r[0],C=r[4],L=r[8],M=r[12],w=r[1],I=r[5],N=r[9],O=r[13],$=r[2],z=r[6],V=r[10],H=r[14],J=r[3],ae=r[7],ie=r[11],de=r[15];return a[0]=s*R+o*w+l*$+c*J,a[4]=s*C+o*I+l*z+c*ae,a[8]=s*L+o*N+l*V+c*ie,a[12]=s*M+o*O+l*H+c*de,a[1]=d*R+h*w+u*$+p*J,a[5]=d*C+h*I+u*z+p*ae,a[9]=d*L+h*N+u*V+p*ie,a[13]=d*M+h*O+u*H+p*de,a[2]=g*R+x*w+m*$+f*J,a[6]=g*C+x*I+m*z+f*ae,a[10]=g*L+x*N+m*V+f*ie,a[14]=g*M+x*O+m*H+f*de,a[3]=_*R+b*w+E*$+y*J,a[7]=_*C+b*I+E*z+y*ae,a[11]=_*L+b*N+E*V+y*ie,a[15]=_*M+b*O+E*H+y*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15],_=l*p-c*u,b=o*p-c*h,E=o*u-l*h,y=s*p-c*d,R=s*u-l*d,C=s*h-o*d;return t*(x*_-m*b+f*E)-i*(g*_-m*y+f*R)+r*(g*b-x*y+f*C)-a*(g*E-x*R+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],_=h*m*c-x*u*c+x*l*p-o*m*p-h*l*f+o*u*f,b=g*u*c-d*m*c-g*l*p+s*m*p+d*l*f-s*u*f,E=d*x*c-g*h*c+g*o*p-s*x*p-d*o*f+s*h*f,y=g*h*l-d*x*l-g*o*u+s*x*u+d*o*m-s*h*m,R=t*_+i*b+r*E+a*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=_*C,e[1]=(x*u*a-h*m*a-x*r*p+i*m*p+h*r*f-i*u*f)*C,e[2]=(o*m*a-x*l*a+x*r*c-i*m*c-o*r*f+i*l*f)*C,e[3]=(h*l*a-o*u*a-h*r*c+i*u*c+o*r*p-i*l*p)*C,e[4]=b*C,e[5]=(d*m*a-g*u*a+g*r*p-t*m*p-d*r*f+t*u*f)*C,e[6]=(g*l*a-s*m*a-g*r*c+t*m*c+s*r*f-t*l*f)*C,e[7]=(s*u*a-d*l*a+d*r*c-t*u*c-s*r*p+t*l*p)*C,e[8]=E*C,e[9]=(g*h*a-d*x*a-g*i*p+t*x*p+d*i*f-t*h*f)*C,e[10]=(s*x*a-g*o*a+g*i*c-t*x*c-s*i*f+t*o*f)*C,e[11]=(d*o*a-s*h*a-d*i*c+t*h*c+s*i*p-t*o*p)*C,e[12]=y*C,e[13]=(d*x*r-g*h*r+g*i*u-t*x*u-d*i*m+t*h*m)*C,e[14]=(g*o*r-s*x*r-g*i*l+t*x*l+s*i*m-t*o*m)*C,e[15]=(s*h*r-d*o*r+d*i*l-t*h*l-s*i*u+t*o*u)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,d=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*s,0,c*l-r*o,d*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,d=s+s,h=o+o,u=a*c,p=a*d,g=a*h,x=s*d,m=s*h,f=o*h,_=l*c,b=l*d,E=l*h,y=i.x,R=i.y,C=i.z;return r[0]=(1-(x+f))*y,r[1]=(p+E)*y,r[2]=(g-b)*y,r[3]=0,r[4]=(p-E)*R,r[5]=(1-(u+f))*R,r[6]=(m+_)*R,r[7]=0,r[8]=(g+b)*C,r[9]=(m-_)*C,r[10]=(1-(u+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let a=$r.set(r[0],r[1],r[2]).length();const s=$r.set(r[4],r[5],r[6]).length(),o=$r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),Jn.copy(this);const c=1/a,d=1/s,h=1/o;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=d,Jn.elements[5]*=d,Jn.elements[6]*=d,Jn.elements[8]*=h,Jn.elements[9]*=h,Jn.elements[10]*=h,t.setFromRotationMatrix(Jn),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=pi,l=!1){const c=this.elements,d=2*a/(t-e),h=2*a/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r);let g,x;if(l)g=a/(s-a),x=s*a/(s-a);else if(o===pi)g=-(s+a)/(s-a),x=-2*s*a/(s-a);else if(o===Ro)g=-s/(s-a),x=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=pi,l=!1){const c=this.elements,d=2/(t-e),h=2/(i-r),u=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,x;if(l)g=1/(s-a),x=s/(s-a);else if(o===pi)g=-2/(s-a),x=-(s+a)/(s-a);else if(o===Ro)g=-1/(s-a),x=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $r=new W,Jn=new Ht,Zg=new W(0,0,0),Jg=new W(1,1,1),Xi=new W,zs=new W,Pn=new W,Fu=new Ht,Ou=new ms;class ii{constructor(e=0,t=0,i=0,r=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,p),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class Nd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qg=0;const Bu=new W,Xr=new ms,Ai=new Ht,Hs=new W,Ba=new W,ex=new W,tx=new ms,ku=new W(1,0,0),zu=new W(0,1,0),Hu=new W(0,0,1),Vu={type:"added"},nx={type:"removed"},qr={type:"childadded",child:null},Cl={type:"childremoved",child:null};class Rn extends Ma{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new W,t=new ii,i=new ms,r=new W(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ht},normalMatrix:{value:new lt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(ku,e)}rotateY(e){return this.rotateOnAxis(zu,e)}rotateZ(e){return this.rotateOnAxis(Hu,e)}translateOnAxis(e,t){return Bu.copy(e).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ku,e)}translateY(e){return this.translateOnAxis(zu,e)}translateZ(e){return this.translateOnAxis(Hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hs.copy(e):Hs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Ba,Hs,this.up):Ai.lookAt(Hs,Ba,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),Xr.setFromRotationMatrix(Ai),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(xt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vu),qr.child=e,this.dispatchEvent(qr),qr.child=null):xt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nx),Cl.child=e,this.dispatchEvent(Cl),Cl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vu),qr.child=e,this.dispatchEvent(qr),qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,e,ex),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,tx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),h=s(e.shapes),u=s(e.skeletons),p=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rn.DEFAULT_UP=new W(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new W,Ri=new W,Pl=new W,Ci=new W,Yr=new W,jr=new W,Gu=new W,Il=new W,Ll=new W,Dl=new W,Nl=new Wt,Ul=new Wt,Fl=new Wt;class ei{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qn.subVectors(e,t),r.cross(Qn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Qn.subVectors(r,t),Ri.subVectors(i,t),Pl.subVectors(e,t);const s=Qn.dot(Qn),o=Qn.dot(Ri),l=Qn.dot(Pl),c=Ri.dot(Ri),d=Ri.dot(Pl),h=s*c-o*o;if(h===0)return a.set(0,0,0),null;const u=1/h,p=(c*l-o*d)*u,g=(s*d-o*l)*u;return a.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ci.x),l.addScaledVector(s,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(e,t,i,r,a,s){return Nl.setScalar(0),Ul.setScalar(0),Fl.setScalar(0),Nl.fromBufferAttribute(e,t),Ul.fromBufferAttribute(e,i),Fl.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Nl,a.x),s.addScaledVector(Ul,a.y),s.addScaledVector(Fl,a.z),s}static isFrontFacing(e,t,i,r){return Qn.subVectors(i,t),Ri.subVectors(e,t),Qn.cross(Ri).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Qn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return ei.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;Yr.subVectors(r,i),jr.subVectors(a,i),Il.subVectors(e,i);const l=Yr.dot(Il),c=jr.dot(Il);if(l<=0&&c<=0)return t.copy(i);Ll.subVectors(e,r);const d=Yr.dot(Ll),h=jr.dot(Ll);if(d>=0&&h<=d)return t.copy(r);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(i).addScaledVector(Yr,s);Dl.subVectors(e,a);const p=Yr.dot(Dl),g=jr.dot(Dl);if(g>=0&&p<=g)return t.copy(a);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(jr,o);const m=d*g-p*h;if(m<=0&&h-d>=0&&p-g>=0)return Gu.subVectors(a,r),o=(h-d)/(h-d+(p-g)),t.copy(r).addScaledVector(Gu,o);const f=1/(m+x+u);return s=x*f,o=u*f,t.copy(i).addScaledVector(Yr,s).addScaledVector(jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function Ol(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=_t.workingColorSpace){if(e=Gg(e,1),t=pt(t,0,1),i=pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Ol(s,a,e+1/3),this.g=Ol(s,a,e),this.b=Ol(s,a,e-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(e,t=Vn){function i(a){a!==void 0&&parseFloat(a)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vn){const i=sp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return _t.workingToColorSpace(ln.copy(this),e),Math.round(pt(ln.r*255,0,255))*65536+Math.round(pt(ln.g*255,0,255))*256+Math.round(pt(ln.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(ln.copy(this),t);const i=ln.r,r=ln.g,a=ln.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=d<=.5?h/(s+o):h/(2-s-o),s){case i:l=(r-a)/h+(r<a?6:0);break;case r:l=(a-i)/h+2;break;case a:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Vn){_t.workingToColorSpace(ln.copy(this),e);const t=ln.r,i=ln.g,r=ln.b;return e!==Vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(Vs);const i=_l(qi.h,Vs.h,t),r=_l(qi.s,Vs.s,t),a=_l(qi.l,Vs.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new nt;nt.NAMES=sp;let ix=0;class Ea extends Ma{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=ta,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=uc,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ta&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dc&&(i.blendSrc=this.blendSrc),this.blendDst!==uc&&(i.blendDst=this.blendDst),this.blendEquation!==Mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==la&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ru&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ha extends Ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new W,Gs=new Ke;let rx=0;class gi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cu,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ua(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=En(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ua(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ua(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ua(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ua(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array),r=En(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array),r=En(r,this.array),a=En(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cu&&(e.usage=this.usage),e}}class op extends gi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class lp extends gi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qt extends gi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ax=0;const zn=new Ht,Bl=new Rn,Kr=new W,In=new vs,ka=new vs,Qt=new W;class Bn extends Ma{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ip(e)?lp:op)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new lt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,i){return zn.makeTranslation(e,t,i),this.applyMatrix4(zn),this}scale(e,t,i){return zn.makeScale(e,t,i),this.applyMatrix4(zn),this}lookAt(e){return Bl.lookAt(e),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new qt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];In.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];ka.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(In.min,ka.min),In.expandByPoint(Qt),Qt.addVectors(In.max,ka.max),In.expandByPoint(Qt)):(In.expandByPoint(ka.min),In.expandByPoint(ka.max))}In.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Qt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Qt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Qt.fromBufferAttribute(o,c),l&&(Kr.fromBufferAttribute(e,c),Qt.add(Kr)),r=Math.max(r,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new W,l[L]=new W;const c=new W,d=new W,h=new W,u=new Ke,p=new Ke,g=new Ke,x=new W,m=new W;function f(L,M,w){c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,w),u.fromBufferAttribute(a,L),p.fromBufferAttribute(a,M),g.fromBufferAttribute(a,w),d.sub(c),h.sub(c),p.sub(u),g.sub(u);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(I),o[L].add(x),o[M].add(x),o[w].add(x),l[L].add(m),l[M].add(m),l[w].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let L=0,M=_.length;L<M;++L){const w=_[L],I=w.start,N=w.count;for(let O=I,$=I+N;O<$;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const b=new W,E=new W,y=new W,R=new W;function C(L){y.fromBufferAttribute(r,L),R.copy(y);const M=o[L];b.copy(M),b.sub(y.multiplyScalar(y.dot(M))).normalize(),E.crossVectors(R,M);const I=E.dot(l[L])<0?-1:1;s.setXYZW(L,b.x,b.y,b.z,I)}for(let L=0,M=_.length;L<M;++L){const w=_[L],I=w.start,N=w.count;for(let O=I,$=I+N;O<$;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new W,a=new W,s=new W,o=new W,l=new W,c=new W,d=new W,h=new W;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,x),s.fromBufferAttribute(t,m),d.subVectors(s,a),h.subVectors(r,a),d.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),d.subVectors(s,a),h.subVectors(r,a),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*d;for(let f=0;f<d;f++)u[g++]=c[p++]}return new gi(u,d,h)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],h=a[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wu=new Ht,gr=new ap,Ws=new Dd,$u=new W,$s=new W,Xs=new W,qs=new W,kl=new W,Ys=new W,Xu=new W,js=new W;class rn extends Rn{constructor(e=new Bn,t=new ha){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Ys.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],h=a[l];d!==0&&(kl.fromBufferAttribute(h,e),s?Ys.addScaledVector(kl,d):Ys.addScaledVector(kl.sub(t),d))}t.add(Ys)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(a),gr.copy(e.ray).recast(e.near),!(Ws.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Ws,$u)===null||gr.origin.distanceToSquared($u)>(e.far-e.near)**2))&&(Wu.copy(a).invert(),gr.copy(e.ray).applyMatrix4(Wu),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gr)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=s[m.materialIndex],_=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=_,y=b;E<y;E+=3){const R=o.getX(E),C=o.getX(E+1),L=o.getX(E+2);r=Ks(this,f,e,i,c,d,h,R,C,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const _=o.getX(m),b=o.getX(m+1),E=o.getX(m+2);r=Ks(this,s,e,i,c,d,h,_,b,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=s[m.materialIndex],_=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=_,y=b;E<y;E+=3){const R=E,C=E+1,L=E+2;r=Ks(this,f,e,i,c,d,h,R,C,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const _=m,b=m+1,E=m+2;r=Ks(this,s,e,i,c,d,h,_,b,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function sx(n,e,t,i,r,a,s,o){let l;if(e.side===Tn?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===ar,o),l===null)return null;js.copy(o),js.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(js);return c<t.near||c>t.far?null:{distance:c,point:js.clone(),object:n}}function Ks(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,$s),n.getVertexPosition(l,Xs),n.getVertexPosition(c,qs);const d=sx(n,e,t,i,$s,Xs,qs,Xu);if(d){const h=new W;ei.getBarycoord(Xu,$s,Xs,qs,h),r&&(d.uv=ei.getInterpolatedAttribute(r,o,l,c,h,new Ke)),a&&(d.uv1=ei.getInterpolatedAttribute(a,o,l,c,h,new Ke)),s&&(d.normal=ei.getInterpolatedAttribute(s,o,l,c,h,new W),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new W,materialIndex:0};ei.getNormal($s,Xs,qs,u.normal),d.face=u,d.barycoord=h}return d}class wa extends Bn{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],d=[],h=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,s,a,0),g("z","y","x",1,-1,i,t,-e,s,a,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,a,4),g("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(h,2));function g(x,m,f,_,b,E,y,R,C,L,M){const w=E/C,I=y/L,N=E/2,O=y/2,$=R/2,z=C+1,V=L+1;let H=0,J=0;const ae=new W;for(let ie=0;ie<V;ie++){const de=ie*I-O;for(let Te=0;Te<z;Te++){const _e=Te*w-N;ae[x]=_e*_,ae[m]=de*b,ae[f]=$,c.push(ae.x,ae.y,ae.z),ae[x]=0,ae[m]=0,ae[f]=R>0?1:-1,d.push(ae.x,ae.y,ae.z),h.push(Te/C),h.push(1-ie/L),H+=1}}for(let ie=0;ie<L;ie++)for(let de=0;de<C;de++){const Te=u+de+z*ie,_e=u+de+z*(ie+1),Be=u+(de+1)+z*(ie+1),Xe=u+(de+1)+z*ie;l.push(Te,_e,Xe),l.push(_e,Be,Xe),J+=6}o.addGroup(p,J,M),p+=J,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=fa(n[t]);for(const r in i)e[r]=i[r]}return e}function ox(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const Po={clone:fa,merge:fn};var lx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends Ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lx,this.fragmentShader=cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fa(e.uniforms),this.uniformsGroups=ox(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class dp extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new W,qu=new Ke,Yu=new Ke;class gn extends dp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=td*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return td*2*Math.atan(Math.tan(xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,qu,Yu),t.subVectors(Yu,qu)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zr=-90,Jr=1;class dx extends Rn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Zr,Jr,e,t);r.layers=this.layers,this.add(r);const a=new gn(Zr,Jr,e,t);a.layers=this.layers,this.add(a);const s=new gn(Zr,Jr,e,t);s.layers=this.layers,this.add(s);const o=new gn(Zr,Jr,e,t);o.layers=this.layers,this.add(o);const l=new gn(Zr,Jr,e,t);l.layers=this.layers,this.add(l);const c=new gn(Zr,Jr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ro)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(h,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class up extends bn{constructor(e=[],t=Pr,i,r,a,s,o,l,c,d){super(e,t,i,r,a,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hp extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new up(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wa(5,5,5),a=new an({name:"CubemapFromEquirect",uniforms:fa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:mi});a.uniforms.tEquirect.value=t;const s=new rn(r,a),o=t.minFilter;return t.minFilter===wr&&(t.minFilter=un),new dx(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}class $a extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ux={type:"move"};class zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $a,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $a,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $a,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ux)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $a;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ud extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class hx extends bn{constructor(e=null,t=1,i=1,r,a,s,o,l,c=nn,d=nn,h,u){super(null,s,o,l,c,d,r,a,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hl=new W,fx=new W,px=new lt;class yr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Hl.subVectors(i,t).cross(fx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Hl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||px.getNormalMatrix(e),r=this.coplanarPoint(Hl).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new Dd,mx=new Ke(.5,.5),Zs=new W;class Fd{constructor(e=new yr,t=new yr,i=new yr,r=new yr,a=new yr,s=new yr){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pi,i=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],l=a[2],c=a[3],d=a[4],h=a[5],u=a[6],p=a[7],g=a[8],x=a[9],m=a[10],f=a[11],_=a[12],b=a[13],E=a[14],y=a[15];if(r[0].setComponents(c-s,p-d,f-g,y-_).normalize(),r[1].setComponents(c+s,p+d,f+g,y+_).normalize(),r[2].setComponents(c+o,p+h,f+x,y+b).normalize(),r[3].setComponents(c-o,p-h,f-x,y-b).normalize(),i)r[4].setComponents(l,u,m,E).normalize(),r[5].setComponents(c-l,p-u,f-m,y-E).normalize();else if(r[4].setComponents(c-l,p-u,f-m,y-E).normalize(),t===pi)r[5].setComponents(c+l,p+u,f+m,y+E).normalize();else if(t===Ro)r[5].setComponents(l,u,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){xr.center.set(0,0,0);const t=mx.distanceTo(e.center);return xr.radius=.7071067811865476+t,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Zs.x=r.normal.x>0?e.max.x:e.min.x,Zs.y=r.normal.y>0?e.max.y:e.min.y,Zs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rs extends bn{constructor(e,t,i=Si,r,a,s,o=nn,l=nn,c,d=Oi,h=1){if(d!==Oi&&d!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,r,a,s,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ld(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class vx extends rs{constructor(e,t=Si,i=Pr,r,a,s=nn,o=nn,l,c=Oi){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,i,r,a,s,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class fp extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gs extends Bn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const a=[],s=[];o(r),c(i),d(),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(a.slice(),3)),this.setAttribute("uv",new qt(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const b=new W,E=new W,y=new W;for(let R=0;R<t.length;R+=3)p(t[R+0],b),p(t[R+1],E),p(t[R+2],y),l(b,E,y,_)}function l(_,b,E,y){const R=y+1,C=[];for(let L=0;L<=R;L++){C[L]=[];const M=_.clone().lerp(E,L/R),w=b.clone().lerp(E,L/R),I=R-L;for(let N=0;N<=I;N++)N===0&&L===R?C[L][N]=M:C[L][N]=M.clone().lerp(w,N/I)}for(let L=0;L<R;L++)for(let M=0;M<2*(R-L)-1;M++){const w=Math.floor(M/2);M%2===0?(u(C[L][w+1]),u(C[L+1][w]),u(C[L][w])):(u(C[L][w+1]),u(C[L+1][w+1]),u(C[L+1][w]))}}function c(_){const b=new W;for(let E=0;E<a.length;E+=3)b.x=a[E+0],b.y=a[E+1],b.z=a[E+2],b.normalize().multiplyScalar(_),a[E+0]=b.x,a[E+1]=b.y,a[E+2]=b.z}function d(){const _=new W;for(let b=0;b<a.length;b+=3){_.x=a[b+0],_.y=a[b+1],_.z=a[b+2];const E=m(_)/2/Math.PI+.5,y=f(_)/Math.PI+.5;s.push(E,1-y)}g(),h()}function h(){for(let _=0;_<s.length;_+=6){const b=s[_+0],E=s[_+2],y=s[_+4],R=Math.max(b,E,y),C=Math.min(b,E,y);R>.9&&C<.1&&(b<.2&&(s[_+0]+=1),E<.2&&(s[_+2]+=1),y<.2&&(s[_+4]+=1))}}function u(_){a.push(_.x,_.y,_.z)}function p(_,b){const E=_*3;b.x=e[E+0],b.y=e[E+1],b.z=e[E+2]}function g(){const _=new W,b=new W,E=new W,y=new W,R=new Ke,C=new Ke,L=new Ke;for(let M=0,w=0;M<a.length;M+=9,w+=6){_.set(a[M+0],a[M+1],a[M+2]),b.set(a[M+3],a[M+4],a[M+5]),E.set(a[M+6],a[M+7],a[M+8]),R.set(s[w+0],s[w+1]),C.set(s[w+2],s[w+3]),L.set(s[w+4],s[w+5]),y.copy(_).add(b).add(E).divideScalar(3);const I=m(y);x(R,w+0,_,I),x(C,w+2,b,I),x(L,w+4,E,I)}}function x(_,b,E,y){y<0&&_.x===1&&(s[b]=_.x-1),E.x===0&&E.z===0&&(s[b]=y/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.vertices,e.indices,e.radius,e.detail)}}class Od extends gs{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Od(e.radius,e.detail)}}class Bd extends gs{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bd(e.radius,e.detail)}}class xs extends Bn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,u=t/l,p=[],g=[],x=[],m=[];for(let f=0;f<d;f++){const _=f*u-s;for(let b=0;b<c;b++){const E=b*h-a;g.push(E,-_,0),x.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){const b=_+c*f,E=_+c*(f+1),y=_+1+c*(f+1),R=_+1+c*f;p.push(b,E,R),p.push(E,y,R)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.widthSegments,e.heightSegments)}}class kd extends gs{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new kd(e.radius,e.detail)}}class Io extends Bn{constructor(e=1,t=.4,i=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:a},i=Math.floor(i),r=Math.floor(r);const s=[],o=[],l=[],c=[],d=new W,h=new W,u=new W;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const x=g/r*a,m=p/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,f=(r+1)*(p-1)+g,_=(r+1)*p+g;s.push(x,m,_),s.push(m,f,_)}this.setIndex(s),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class zd extends Bn{constructor(e=1,t=.4,i=64,r=8,a=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:a,q:s},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],c=[],d=[],h=new W,u=new W,p=new W,g=new W,x=new W,m=new W,f=new W;for(let b=0;b<=i;++b){const E=b/i*a*Math.PI*2;_(E,a,s,e,p),_(E+.01,a,s,e,g),m.subVectors(g,p),f.addVectors(g,p),x.crossVectors(m,f),f.crossVectors(x,m),x.normalize(),f.normalize();for(let y=0;y<=r;++y){const R=y/r*Math.PI*2,C=-t*Math.cos(R),L=t*Math.sin(R);h.x=p.x+(C*f.x+L*x.x),h.y=p.y+(C*f.y+L*x.y),h.z=p.z+(C*f.z+L*x.z),l.push(h.x,h.y,h.z),u.subVectors(h,p).normalize(),c.push(u.x,u.y,u.z),d.push(b/i),d.push(y/r)}}for(let b=1;b<=i;b++)for(let E=1;E<=r;E++){const y=(r+1)*(b-1)+(E-1),R=(r+1)*b+(E-1),C=(r+1)*b+E,L=(r+1)*(b-1)+E;o.push(y,R,L),o.push(R,C,L)}this.setIndex(o),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(d,2));function _(b,E,y,R,C){const L=Math.cos(b),M=Math.sin(b),w=y/E*b,I=Math.cos(w);C.x=R*(2+I)*.5*L,C.y=R*(2+I)*M*.5,C.z=R*Math.sin(w)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zd(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class gx extends an{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xx extends Ea{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cd,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _x extends xx{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ju extends Ea{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new nt(16777215),this.specular=new nt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cd,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bx extends Ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yx extends Ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class pp extends Rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Vl=new Ht,Ku=new W,Zu=new W;class Sx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fd,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ku),Zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zu),t.updateMatrixWorld(),Vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mx extends Sx{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}}class Lo extends pp{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Mx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Hd extends dp{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class mp extends pp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ex extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Vd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ju=new Ht;class wx{constructor(e,t,i=0,r=1/0){this.ray=new ap(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Nd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):xt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ju.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ju),this}intersectObject(e,t=!0,i=[]){return nd(e,this,i,t),i.sort(Qu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)nd(e[r],this,i,t);return i.sort(Qu),i}}function Qu(n,e){return n.distance-e.distance}function nd(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let s=0,o=a.length;s<o;s++)nd(a[s],e,t,!0)}}function eh(n,e,t,i){const r=Tx(i);switch(t){case ep:return n*e;case np:return n*e/r.components*r.byteLength;case Td:return n*e/r.components*r.byteLength;case da:return n*e*2/r.components*r.byteLength;case Ad:return n*e*2/r.components*r.byteLength;case tp:return n*e*3/r.components*r.byteLength;case ti:return n*e*4/r.components*r.byteLength;case Rd:return n*e*4/r.components*r.byteLength;case ao:case so:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oo:case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ec:case Tc:return Math.max(n,16)*Math.max(e,8)/4;case Mc:case wc:return Math.max(n,8)*Math.max(e,8)/2;case Ac:case Rc:case Pc:case Ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cc:case Lc:case Dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case kc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $c:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case qc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Yc:case jc:case Kc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zc:case Jc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Qc:case ed:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tx(n){switch(n){case Nn:case Kf:return{byteLength:1,components:1};case ts:case Zf:case Fn:return{byteLength:2,components:1};case Ed:case wd:return{byteLength:2,components:4};case Si:case Md:case fi:return{byteLength:4,components:1};case Jf:case Qf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yd}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vp(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Ax(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,d);else{h.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<h.length;p++){const g=h[u],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,h[u]=x)}h.length=u+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];n.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var Rx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Px=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ux=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,e_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r_="gl_FragColor = linearToOutputTexel( gl_FragColor );",a_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,l_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,c_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,u_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,v_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,__=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,b_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,y_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,T_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,A_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,R_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,C_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,O_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,W_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,X_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,K_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ib=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,db=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ub=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_b=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Db=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ub=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$b=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ny=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ry=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ay=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:Rx,alphahash_pars_fragment:Cx,alphamap_fragment:Px,alphamap_pars_fragment:Ix,alphatest_fragment:Lx,alphatest_pars_fragment:Dx,aomap_fragment:Nx,aomap_pars_fragment:Ux,batching_pars_vertex:Fx,batching_vertex:Ox,begin_vertex:Bx,beginnormal_vertex:kx,bsdfs:zx,iridescence_fragment:Hx,bumpmap_pars_fragment:Vx,clipping_planes_fragment:Gx,clipping_planes_pars_fragment:Wx,clipping_planes_pars_vertex:$x,clipping_planes_vertex:Xx,color_fragment:qx,color_pars_fragment:Yx,color_pars_vertex:jx,color_vertex:Kx,common:Zx,cube_uv_reflection_fragment:Jx,defaultnormal_vertex:Qx,displacementmap_pars_vertex:e_,displacementmap_vertex:t_,emissivemap_fragment:n_,emissivemap_pars_fragment:i_,colorspace_fragment:r_,colorspace_pars_fragment:a_,envmap_fragment:s_,envmap_common_pars_fragment:o_,envmap_pars_fragment:l_,envmap_pars_vertex:c_,envmap_physical_pars_fragment:b_,envmap_vertex:d_,fog_vertex:u_,fog_pars_vertex:h_,fog_fragment:f_,fog_pars_fragment:p_,gradientmap_pars_fragment:m_,lightmap_pars_fragment:v_,lights_lambert_fragment:g_,lights_lambert_pars_fragment:x_,lights_pars_begin:__,lights_toon_fragment:y_,lights_toon_pars_fragment:S_,lights_phong_fragment:M_,lights_phong_pars_fragment:E_,lights_physical_fragment:w_,lights_physical_pars_fragment:T_,lights_fragment_begin:A_,lights_fragment_maps:R_,lights_fragment_end:C_,logdepthbuf_fragment:P_,logdepthbuf_pars_fragment:I_,logdepthbuf_pars_vertex:L_,logdepthbuf_vertex:D_,map_fragment:N_,map_pars_fragment:U_,map_particle_fragment:F_,map_particle_pars_fragment:O_,metalnessmap_fragment:B_,metalnessmap_pars_fragment:k_,morphinstance_vertex:z_,morphcolor_vertex:H_,morphnormal_vertex:V_,morphtarget_pars_vertex:G_,morphtarget_vertex:W_,normal_fragment_begin:$_,normal_fragment_maps:X_,normal_pars_fragment:q_,normal_pars_vertex:Y_,normal_vertex:j_,normalmap_pars_fragment:K_,clearcoat_normal_fragment_begin:Z_,clearcoat_normal_fragment_maps:J_,clearcoat_pars_fragment:Q_,iridescence_pars_fragment:eb,opaque_fragment:tb,packing:nb,premultiplied_alpha_fragment:ib,project_vertex:rb,dithering_fragment:ab,dithering_pars_fragment:sb,roughnessmap_fragment:ob,roughnessmap_pars_fragment:lb,shadowmap_pars_fragment:cb,shadowmap_pars_vertex:db,shadowmap_vertex:ub,shadowmask_pars_fragment:hb,skinbase_vertex:fb,skinning_pars_vertex:pb,skinning_vertex:mb,skinnormal_vertex:vb,specularmap_fragment:gb,specularmap_pars_fragment:xb,tonemapping_fragment:_b,tonemapping_pars_fragment:bb,transmission_fragment:yb,transmission_pars_fragment:Sb,uv_pars_fragment:Mb,uv_pars_vertex:Eb,uv_vertex:wb,worldpos_vertex:Tb,background_vert:Ab,background_frag:Rb,backgroundCube_vert:Cb,backgroundCube_frag:Pb,cube_vert:Ib,cube_frag:Lb,depth_vert:Db,depth_frag:Nb,distance_vert:Ub,distance_frag:Fb,equirect_vert:Ob,equirect_frag:Bb,linedashed_vert:kb,linedashed_frag:zb,meshbasic_vert:Hb,meshbasic_frag:Vb,meshlambert_vert:Gb,meshlambert_frag:Wb,meshmatcap_vert:$b,meshmatcap_frag:Xb,meshnormal_vert:qb,meshnormal_frag:Yb,meshphong_vert:jb,meshphong_frag:Kb,meshphysical_vert:Zb,meshphysical_frag:Jb,meshtoon_vert:Qb,meshtoon_frag:ey,points_vert:ty,points_frag:ny,shadow_vert:iy,shadow_frag:ry,sprite_vert:ay,sprite_frag:sy},we={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},di={basic:{uniforms:fn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:fn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new nt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:fn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:fn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:fn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new nt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:fn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:fn([we.points,we.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:fn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:fn([we.common,we.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:fn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:fn([we.sprite,we.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:fn([we.common,we.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:fn([we.lights,we.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};di.physical={uniforms:fn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Js={r:0,b:0,g:0},_r=new ii,oy=new Ht;function ly(n,e,t,i,r,a,s){const o=new nt(0);let l=a===!0?0:1,c,d,h=null,u=0,p=null;function g(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function x(b){let E=!1;const y=g(b);y===null?f(o,l):y&&y.isColor&&(f(y,1),E=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,E){const y=g(E);y&&(y.isCubeTexture||y.mapping===Xo)?(d===void 0&&(d=new rn(new wa(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:fa(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),_r.copy(E.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(oy.makeRotationFromEuler(_r)),d.material.toneMapped=_t.getTransfer(y.colorSpace)!==Tt,(h!==y||u!==y.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,h=y,u=y.version,p=n.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new rn(new xs(2,2),new an({name:"BackgroundMaterial",uniforms:fa(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=_t.getTransfer(y.colorSpace)!==Tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,E){b.getRGB(Js,cp(n)),i.buffers.color.setClear(Js.r,Js.g,Js.b,E,s)}function _(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),l=E,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(o,l)},render:x,addToRenderList:m,dispose:_}}function cy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let a=r,s=!1;function o(w,I,N,O,$){let z=!1;const V=h(O,N,I);a!==V&&(a=V,c(a.object)),z=p(w,O,N,$),z&&g(w,O,N,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(z||s)&&(s=!1,E(w,I,N,O),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function d(w){return n.deleteVertexArray(w)}function h(w,I,N){const O=N.wireframe===!0;let $=i[w.id];$===void 0&&($={},i[w.id]=$);let z=$[I.id];z===void 0&&(z={},$[I.id]=z);let V=z[O];return V===void 0&&(V=u(l()),z[O]=V),V}function u(w){const I=[],N=[],O=[];for(let $=0;$<t;$++)I[$]=0,N[$]=0,O[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:O,object:w,attributes:{},index:null}}function p(w,I,N,O){const $=a.attributes,z=I.attributes;let V=0;const H=N.getAttributes();for(const J in H)if(H[J].location>=0){const ie=$[J];let de=z[J];if(de===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(de=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(de=w.instanceColor)),ie===void 0||ie.attribute!==de||de&&ie.data!==de.data)return!0;V++}return a.attributesNum!==V||a.index!==O}function g(w,I,N,O){const $={},z=I.attributes;let V=0;const H=N.getAttributes();for(const J in H)if(H[J].location>=0){let ie=z[J];ie===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(ie=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(ie=w.instanceColor));const de={};de.attribute=ie,ie&&ie.data&&(de.data=ie.data),$[J]=de,V++}a.attributes=$,a.attributesNum=V,a.index=O}function x(){const w=a.newAttributes;for(let I=0,N=w.length;I<N;I++)w[I]=0}function m(w){f(w,0)}function f(w,I){const N=a.newAttributes,O=a.enabledAttributes,$=a.attributeDivisors;N[w]=1,O[w]===0&&(n.enableVertexAttribArray(w),O[w]=1),$[w]!==I&&(n.vertexAttribDivisor(w,I),$[w]=I)}function _(){const w=a.newAttributes,I=a.enabledAttributes;for(let N=0,O=I.length;N<O;N++)I[N]!==w[N]&&(n.disableVertexAttribArray(N),I[N]=0)}function b(w,I,N,O,$,z,V){V===!0?n.vertexAttribIPointer(w,I,N,$,z):n.vertexAttribPointer(w,I,N,O,$,z)}function E(w,I,N,O){x();const $=O.attributes,z=N.getAttributes(),V=I.defaultAttributeValues;for(const H in z){const J=z[H];if(J.location>=0){let ae=$[H];if(ae===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(ae=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(ae=w.instanceColor)),ae!==void 0){const ie=ae.normalized,de=ae.itemSize,Te=e.get(ae);if(Te===void 0)continue;const _e=Te.buffer,Be=Te.type,Xe=Te.bytesPerElement,j=Be===n.INT||Be===n.UNSIGNED_INT||ae.gpuType===Md;if(ae.isInterleavedBufferAttribute){const ne=ae.data,pe=ne.stride,ke=ae.offset;if(ne.isInstancedInterleavedBuffer){for(let ge=0;ge<J.locationSize;ge++)f(J.location+ge,ne.meshPerAttribute);w.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ge=0;ge<J.locationSize;ge++)m(J.location+ge);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let ge=0;ge<J.locationSize;ge++)b(J.location+ge,de/J.locationSize,Be,ie,pe*Xe,(ke+de/J.locationSize*ge)*Xe,j)}else{if(ae.isInstancedBufferAttribute){for(let ne=0;ne<J.locationSize;ne++)f(J.location+ne,ae.meshPerAttribute);w.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ne=0;ne<J.locationSize;ne++)m(J.location+ne);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let ne=0;ne<J.locationSize;ne++)b(J.location+ne,de/J.locationSize,Be,ie,de*Xe,de/J.locationSize*ne*Xe,j)}}else if(V!==void 0){const ie=V[H];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(J.location,ie);break;case 3:n.vertexAttrib3fv(J.location,ie);break;case 4:n.vertexAttrib4fv(J.location,ie);break;default:n.vertexAttrib1fv(J.location,ie)}}}}_()}function y(){L();for(const w in i){const I=i[w];for(const N in I){const O=I[N];for(const $ in O)d(O[$].object),delete O[$];delete I[N]}delete i[w]}}function R(w){if(i[w.id]===void 0)return;const I=i[w.id];for(const N in I){const O=I[N];for(const $ in O)d(O[$].object),delete O[$];delete I[N]}delete i[w.id]}function C(w){for(const I in i){const N=i[I];if(N[w.id]===void 0)continue;const O=N[w.id];for(const $ in O)d(O[$].object),delete O[$];delete N[w.id]}}function L(){M(),s=!0,a!==r&&(a=r,c(a.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:y,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function dy(n,e,t){let i;function r(c){i=c}function a(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function s(c,d,h){h!==0&&(n.drawArraysInstanced(i,c,d,h),t.update(d,i,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let p=0;for(let g=0;g<h;g++)p+=d[g];t.update(p,i,1)}function l(c,d,h,u){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)s(c[g],d[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,u,0,h);let g=0;for(let x=0;x<h;x++)g+=d[x]*u[x];t.update(g,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function uy(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==ti&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const L=C===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Nn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==fi&&!L)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(at("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:E,maxSamples:y,samples:R}}function hy(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new yr,o=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||r;return r=u,i=h.length,p},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||g===null||g.length===0||a&&!m)a?d(null):c();else{const _=a?0:i,b=_*4;let E=f.clippingState||null;l.value=E,E=d(g,u,b,p);for(let y=0;y!==b;++y)E[y]=t[y];f.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,E=p;b!==x;++b,E+=4)s.copy(h[b]).applyMatrix4(_,o),s.normal.toArray(m,E),m[E+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function fy(n){let e=new WeakMap;function t(s,o){return o===_c?s.mapping=Pr:o===bc&&(s.mapping=ca),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===_c||o===bc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new hp(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const er=4,th=[.125,.215,.35,.446,.526,.582],Er=20,py=256,za=new Hd,nh=new nt;let Gl=null,Wl=0,$l=0,Xl=!1;const my=new W;class ih{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){const{size:s=256,position:o=my}=a;Gl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gl,Wl,$l),this._renderer.xr.enabled=Xl,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===ca?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Fn,format:ti,colorSpace:ua,depthBuffer:!1},r=rh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rh(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vy(a)),this._blurMaterial=xy(a,e,t),this._ggxMaterial=gy(a,e,t)}return r}_compileMaterial(e){const t=new rn(new Bn,e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,i,r,a){const l=new gn(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(nh),h.toneMapping=vi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rn(new wa,new ha({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let f=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,f=!0):(m.color.copy(nh),f=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+d[b],a.y,a.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+d[b],a.z)):(l.up.set(0,c[b],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+d[b]));const y=this._cubeSize;Qr(r,E*y,b>2?y:0,y,y),h.setRenderTarget(r),f&&h.render(x,l),h.render(e,l)}h.toneMapping=p,h.autoClear=u,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Pr||e.mapping===ca;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Qr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,za)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,p=h*u,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-er?i-g+er:0),f=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,Qr(a,m,f,3*x,2*x),r.setRenderTarget(a),r.render(o,za),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=g-i,Qr(e,m,f,3*x,2*x),r.setRenderTarget(e),r.render(o,za)}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&xt("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[r];h.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Er-1),x=a/g,m=isFinite(a)?1+Math.floor(d*x):Er;m>Er&&at(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Er}`);const f=[];let _=0;for(let C=0;C<Er;++C){const L=C/x,M=Math.exp(-L*L/2);f.push(M),C===0?_+=M:C<m&&(_+=2*M)}for(let C=0;C<f.length;C++)f[C]=f[C]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-i;const E=this._sizeLods[r],y=3*E*(r>b-er?r-b+er:0),R=4*(this._cubeSize-E);Qr(t,y,R,3*E,2*E),l.setRenderTarget(t),l.render(h,za)}}function vy(n){const e=[],t=[],i=[];let r=n;const a=n-er+1+th.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);e.push(o);let l=1/o;s>n-er?l=th[s-n+er-1]:s===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,x=3,m=2,f=1,_=new Float32Array(x*g*p),b=new Float32Array(m*g*p),E=new Float32Array(f*g*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,L=R>2?0:-1,M=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];_.set(M,x*g*R),b.set(u,m*g*R);const w=[R,R,R,R,R,R];E.set(w,f*g*R)}const y=new Bn;y.setAttribute("position",new gi(_,x)),y.setAttribute("uv",new gi(b,m)),y.setAttribute("faceIndex",new gi(E,f)),i.push(new rn(y,null)),r>er&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function rh(n,e,t){const i=new An(n,e,t);return i.texture.mapping=Xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function gy(n,e,t){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:py,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function xy(n,e,t){const i=new Float32Array(Er),r=new W(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ah(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function sh(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _y(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===_c||l===bc,d=l===Pr||l===ca;if(c||d){let h=e.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new ih(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&r(p)?(t===null&&(t=new ih(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function by(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&is("WebGLRenderer: "+i+" extension not supported."),r}}}function yy(n,e,t,i){const r={},a=new WeakMap;function s(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",s),delete r[u.id];const p=a.get(u);p&&(e.remove(p),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",s),r[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)e.update(u[p],n.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let b=0,E=_.length;b<E;b+=3){const y=_[b+0],R=_[b+1],C=_[b+2];u.push(y,R,R,C,C,y)}}else if(g!==void 0){const _=g.array;x=g.version;for(let b=0,E=_.length/3-1;b<E;b+=3){const y=b+0,R=b+1,C=b+2;u.push(y,R,R,C,C,y)}}else return;const m=new(ip(u)?lp:op)(u,1);m.version=x;const f=a.get(h);f&&e.remove(f),a.set(h,m)}function d(h){const u=a.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function Sy(n,e,t){let i;function r(u){i=u}let a,s;function o(u){a=u.type,s=u.bytesPerElement}function l(u,p){n.drawElements(i,p,a,u*s),t.update(p,i,1)}function c(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,a,u*s,g),t.update(p,i,g))}function d(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function h(u,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/s,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,u,0,x,0,g);let f=0;for(let _=0;_<g;_++)f+=p[_]*x[_];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function My(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:xt("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ey(n,e,t){const i=new WeakMap,r=new Wt;function a(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let w=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",w)};var p=w;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),x===!0&&(E=2),m===!0&&(E=3);let y=o.attributes.position.count*E,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const C=new Float32Array(y*R*4*h),L=new rp(C,y,R,h);L.type=fi,L.needsUpdate=!0;const M=E*4;for(let I=0;I<h;I++){const N=f[I],O=_[I],$=b[I],z=y*R*4*I;for(let V=0;V<N.count;V++){const H=V*M;g===!0&&(r.fromBufferAttribute(N,V),C[z+H+0]=r.x,C[z+H+1]=r.y,C[z+H+2]=r.z,C[z+H+3]=0),x===!0&&(r.fromBufferAttribute(O,V),C[z+H+4]=r.x,C[z+H+5]=r.y,C[z+H+6]=r.z,C[z+H+7]=0),m===!0&&(r.fromBufferAttribute($,V),C[z+H+8]=r.x,C[z+H+9]=r.y,C[z+H+10]=r.z,C[z+H+11]=$.itemSize===4?r.w:1)}}u={count:h,texture:L,size:new Ke(y,R)},i.set(o,u),o.addEventListener("dispose",w)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:a}}function wy(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return h}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}const Ty={[Vf]:"LINEAR_TONE_MAPPING",[Gf]:"REINHARD_TONE_MAPPING",[Wf]:"CINEON_TONE_MAPPING",[$f]:"ACES_FILMIC_TONE_MAPPING",[qf]:"AGX_TONE_MAPPING",[Yf]:"NEUTRAL_TONE_MAPPING",[Xf]:"CUSTOM_TONE_MAPPING"};function Ay(n,e,t,i,r){const a=new An(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),s=new An(e,t,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),o=new Bn;o.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new qt([0,2,0,0,2,0],2));const l=new gx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new rn(o,l),d=new Hd(-1,1,1,-1,0,1);let h=null,u=null,p=!1,g,x=null,m=[],f=!1;this.setSize=function(_,b){a.setSize(_,b),s.setSize(_,b);for(let E=0;E<m.length;E++){const y=m[E];y.setSize&&y.setSize(_,b)}},this.setEffects=function(_){m=_,f=m.length>0&&m[0].isRenderPass===!0;const b=a.width,E=a.height;for(let y=0;y<m.length;y++){const R=m[y];R.setSize&&R.setSize(b,E)}},this.begin=function(_,b){if(p||_.toneMapping===vi&&m.length===0)return!1;if(x=b,b!==null){const E=b.width,y=b.height;(a.width!==E||a.height!==y)&&this.setSize(E,y)}return f===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=vi,!0},this.hasRenderPass=function(){return f},this.end=function(_,b){_.toneMapping=g,p=!0;let E=a,y=s;for(let R=0;R<m.length;R++){const C=m[R];if(C.enabled!==!1&&(C.render(_,y,E,b),C.needsSwap!==!1)){const L=E;E=y,y=L}}if(h!==_.outputColorSpace||u!==_.toneMapping){h=_.outputColorSpace,u=_.toneMapping,l.defines={},_t.getTransfer(h)===Tt&&(l.defines.SRGB_TRANSFER="");const R=Ty[u];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(x),_.render(c,d),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),s.dispose(),o.dispose(),l.dispose()}}const gp=new bn,id=new rs(1,1),xp=new rp,_p=new jg,bp=new up,oh=[],lh=[],ch=new Float32Array(16),dh=new Float32Array(9),uh=new Float32Array(4);function Ta(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=oh[r];if(a===void 0&&(a=new Float32Array(r),oh[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Yo(n,e){let t=lh[e];t===void 0&&(t=new Int32Array(e),lh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ry(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function Py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function Iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function Ly(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;uh.set(i),n.uniformMatrix2fv(this.addr,!1,uh),Jt(t,i)}}function Dy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;dh.set(i),n.uniformMatrix3fv(this.addr,!1,dh),Jt(t,i)}}function Ny(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;ch.set(i),n.uniformMatrix4fv(this.addr,!1,ch),Jt(t,i)}}function Uy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Fy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function Oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function By(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function ky(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function Hy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function Vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function Gy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(id.compareFunction=t.isReversedDepthBuffer()?Id:Pd,a=id):a=gp,t.setTexture2D(e||a,r)}function Wy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||_p,r)}function $y(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||bp,r)}function Xy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||xp,r)}function qy(n){switch(n){case 5126:return Ry;case 35664:return Cy;case 35665:return Py;case 35666:return Iy;case 35674:return Ly;case 35675:return Dy;case 35676:return Ny;case 5124:case 35670:return Uy;case 35667:case 35671:return Fy;case 35668:case 35672:return Oy;case 35669:case 35673:return By;case 5125:return ky;case 36294:return zy;case 36295:return Hy;case 36296:return Vy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return $y;case 36289:case 36303:case 36311:case 36292:return Xy}}function Yy(n,e){n.uniform1fv(this.addr,e)}function jy(n,e){const t=Ta(e,this.size,2);n.uniform2fv(this.addr,t)}function Ky(n,e){const t=Ta(e,this.size,3);n.uniform3fv(this.addr,t)}function Zy(n,e){const t=Ta(e,this.size,4);n.uniform4fv(this.addr,t)}function Jy(n,e){const t=Ta(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Qy(n,e){const t=Ta(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function e1(n,e){const t=Ta(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function t1(n,e){n.uniform1iv(this.addr,e)}function n1(n,e){n.uniform2iv(this.addr,e)}function i1(n,e){n.uniform3iv(this.addr,e)}function r1(n,e){n.uniform4iv(this.addr,e)}function a1(n,e){n.uniform1uiv(this.addr,e)}function s1(n,e){n.uniform2uiv(this.addr,e)}function o1(n,e){n.uniform3uiv(this.addr,e)}function l1(n,e){n.uniform4uiv(this.addr,e)}function c1(n,e,t){const i=this.cache,r=e.length,a=Yo(t,r);Zt(i,a)||(n.uniform1iv(this.addr,a),Jt(i,a));let s;this.type===n.SAMPLER_2D_SHADOW?s=id:s=gp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||s,a[o])}function d1(n,e,t){const i=this.cache,r=e.length,a=Yo(t,r);Zt(i,a)||(n.uniform1iv(this.addr,a),Jt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||_p,a[s])}function u1(n,e,t){const i=this.cache,r=e.length,a=Yo(t,r);Zt(i,a)||(n.uniform1iv(this.addr,a),Jt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||bp,a[s])}function h1(n,e,t){const i=this.cache,r=e.length,a=Yo(t,r);Zt(i,a)||(n.uniform1iv(this.addr,a),Jt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||xp,a[s])}function f1(n){switch(n){case 5126:return Yy;case 35664:return jy;case 35665:return Ky;case 35666:return Zy;case 35674:return Jy;case 35675:return Qy;case 35676:return e1;case 5124:case 35670:return t1;case 35667:case 35671:return n1;case 35668:case 35672:return i1;case 35669:case 35673:return r1;case 5125:return a1;case 36294:return s1;case 36295:return o1;case 36296:return l1;case 35678:case 36198:case 36298:case 36306:case 35682:return c1;case 35679:case 36299:case 36307:return d1;case 35680:case 36300:case 36308:case 36293:return u1;case 36289:case 36303:case 36311:case 36292:return h1}}class p1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=qy(t.type)}}class m1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=f1(t.type)}}class v1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const ql=/(\w+)(\])?(\[|\.)?/g;function hh(n,e){n.seq.push(e),n.map[e.id]=e}function g1(n,e,t){const i=n.name,r=i.length;for(ql.lastIndex=0;;){const a=ql.exec(i),s=ql.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){hh(t,c===void 0?new p1(o,n,e):new m1(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new v1(o),hh(t,h)),t=h}}}class co{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);g1(o,l,this)}const r=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function fh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const x1=37297;let _1=0;function b1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const ph=new lt;function y1(n){_t._getMatrix(ph,_t.workingColorSpace,n);const e=`mat3( ${ph.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(n)){case Ao:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function mh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+b1(n.getShaderSource(e),o)}else return a}function S1(n,e){const t=y1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const M1={[Vf]:"Linear",[Gf]:"Reinhard",[Wf]:"Cineon",[$f]:"ACESFilmic",[qf]:"AgX",[Yf]:"Neutral",[Xf]:"Custom"};function E1(n,e){const t=M1[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qs=new W;function w1(){_t.getLuminanceCoefficients(Qs);const n=Qs.x.toFixed(4),e=Qs.y.toFixed(4),t=Qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function A1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function R1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Xa(n){return n!==""}function vh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C1=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(n){return n.replace(C1,I1)}const P1=new Map;function I1(n,e){let t=ut[e];if(t===void 0){const i=P1.get(e);if(i!==void 0)t=ut[i],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rd(t)}const L1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xh(n){return n.replace(L1,D1)}function D1(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function _h(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const N1={[ro]:"SHADOWMAP_TYPE_PCF",[Wa]:"SHADOWMAP_TYPE_VSM"};function U1(n){return N1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const F1={[Pr]:"ENVMAP_TYPE_CUBE",[ca]:"ENVMAP_TYPE_CUBE",[Xo]:"ENVMAP_TYPE_CUBE_UV"};function O1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":F1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const B1={[ca]:"ENVMAP_MODE_REFRACTION"};function k1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":B1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const z1={[Sd]:"ENVMAP_BLENDING_MULTIPLY",[Pg]:"ENVMAP_BLENDING_MIX",[Ig]:"ENVMAP_BLENDING_ADD"};function H1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":z1[n.combine]||"ENVMAP_BLENDING_NONE"}function V1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function G1(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=U1(t),c=O1(t),d=k1(t),h=H1(t),u=V1(t),p=T1(t),g=A1(a),x=r.createProgram();let m,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xa).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xa).join(`
`),f.length>0&&(f+=`
`)):(m=[_h(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),f=[_h(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?ut.tonemapping_pars_fragment:"",t.toneMapping!==vi?E1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,S1("linearToOutputTexel",t.outputColorSpace),w1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xa).join(`
`)),s=rd(s),s=vh(s,t),s=gh(s,t),o=rd(o),o=vh(o,t),o=gh(o,t),s=xh(s),o=xh(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=_+m+s,E=_+f+o,y=fh(r,r.VERTEX_SHADER,b),R=fh(r,r.FRAGMENT_SHADER,E);r.attachShader(x,y),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(I){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(x)||"",O=r.getShaderInfoLog(y)||"",$=r.getShaderInfoLog(R)||"",z=N.trim(),V=O.trim(),H=$.trim();let J=!0,ae=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,y,R);else{const ie=mh(r,y,"vertex"),de=mh(r,R,"fragment");xt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+ie+`
`+de)}else z!==""?at("WebGLProgram: Program Info Log:",z):(V===""||H==="")&&(ae=!1);ae&&(I.diagnostics={runnable:J,programLog:z,vertexShader:{log:V,prefix:m},fragmentShader:{log:H,prefix:f}})}r.deleteShader(y),r.deleteShader(R),L=new co(r,x),M=R1(r,x)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(x,x1)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=R,this}let W1=0;class $1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new X1(e),t.set(e,i)),i}}class X1{constructor(e){this.id=W1++,this.code=e,this.usedTimes=0}}function q1(n,e,t,i,r,a,s){const o=new Nd,l=new $1,c=new Set,d=[],h=new Map,u=r.logarithmicDepthBuffer;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,w,I,N,O){const $=N.fog,z=O.geometry,V=M.isMeshStandardMaterial?N.environment:null,H=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),J=H&&H.mapping===Xo?H.image.height:null,ae=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&at("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,de=ie!==void 0?ie.length:0;let Te=0;z.morphAttributes.position!==void 0&&(Te=1),z.morphAttributes.normal!==void 0&&(Te=2),z.morphAttributes.color!==void 0&&(Te=3);let _e,Be,Xe,j;if(ae){const st=di[ae];_e=st.vertexShader,Be=st.fragmentShader}else _e=M.vertexShader,Be=M.fragmentShader,l.update(M),Xe=l.getVertexShaderID(M),j=l.getFragmentShaderID(M);const ne=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),ke=O.isInstancedMesh===!0,ge=O.isBatchedMesh===!0,Ge=!!M.map,dt=!!M.matcap,We=!!H,je=!!M.aoMap,Qe=!!M.lightMap,ze=!!M.bumpMap,it=!!M.normalMap,F=!!M.displacementMap,Ie=!!M.emissiveMap,Pe=!!M.metalnessMap,He=!!M.roughnessMap,re=M.anisotropy>0,D=M.clearcoat>0,S=M.dispersion>0,U=M.iridescence>0,q=M.sheen>0,Q=M.transmission>0,Y=re&&!!M.anisotropyMap,oe=D&&!!M.clearcoatMap,ee=D&&!!M.clearcoatNormalMap,me=D&&!!M.clearcoatRoughnessMap,Ue=U&&!!M.iridescenceMap,se=U&&!!M.iridescenceThicknessMap,fe=q&&!!M.sheenColorMap,Ae=q&&!!M.sheenRoughnessMap,De=!!M.specularMap,ve=!!M.specularColorMap,et=!!M.specularIntensityMap,k=Q&&!!M.transmissionMap,xe=Q&&!!M.thicknessMap,he=!!M.gradientMap,Re=!!M.alphaMap,ue=M.alphaTest>0,te=!!M.alphaHash,ce=!!M.extensions;let Oe=vi;M.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const rt={shaderID:ae,shaderType:M.type,shaderName:M.name,vertexShader:_e,fragmentShader:Be,defines:M.defines,customVertexShaderID:Xe,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ge,batchingColor:ge&&O._colorsTexture!==null,instancing:ke,instancingColor:ke&&O.instanceColor!==null,instancingMorph:ke&&O.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ua,alphaToCoverage:!!M.alphaToCoverage,map:Ge,matcap:dt,envMap:We,envMapMode:We&&H.mapping,envMapCubeUVHeight:J,aoMap:je,lightMap:Qe,bumpMap:ze,normalMap:it,displacementMap:F,emissiveMap:Ie,normalMapObjectSpace:it&&M.normalMapType===Ng,normalMapTangentSpace:it&&M.normalMapType===Cd,metalnessMap:Pe,roughnessMap:He,anisotropy:re,anisotropyMap:Y,clearcoat:D,clearcoatMap:oe,clearcoatNormalMap:ee,clearcoatRoughnessMap:me,dispersion:S,iridescence:U,iridescenceMap:Ue,iridescenceThicknessMap:se,sheen:q,sheenColorMap:fe,sheenRoughnessMap:Ae,specularMap:De,specularColorMap:ve,specularIntensityMap:et,transmission:Q,transmissionMap:k,thicknessMap:xe,gradientMap:he,opaque:M.transparent===!1&&M.blending===ta&&M.alphaToCoverage===!1,alphaMap:Re,alphaTest:ue,alphaHash:te,combine:M.combine,mapUv:Ge&&x(M.map.channel),aoMapUv:je&&x(M.aoMap.channel),lightMapUv:Qe&&x(M.lightMap.channel),bumpMapUv:ze&&x(M.bumpMap.channel),normalMapUv:it&&x(M.normalMap.channel),displacementMapUv:F&&x(M.displacementMap.channel),emissiveMapUv:Ie&&x(M.emissiveMap.channel),metalnessMapUv:Pe&&x(M.metalnessMap.channel),roughnessMapUv:He&&x(M.roughnessMap.channel),anisotropyMapUv:Y&&x(M.anisotropyMap.channel),clearcoatMapUv:oe&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:se&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(M.sheenRoughnessMap.channel),specularMapUv:De&&x(M.specularMap.channel),specularColorMapUv:ve&&x(M.specularColorMap.channel),specularIntensityMapUv:et&&x(M.specularIntensityMap.channel),transmissionMapUv:k&&x(M.transmissionMap.channel),thicknessMapUv:xe&&x(M.thicknessMap.channel),alphaMapUv:Re&&x(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(it||re),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(Ge||Re),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pe,skinning:O.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Te,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ge&&M.map.isVideoTexture===!0&&_t.getTransfer(M.map.colorSpace)===Tt,decodeVideoTextureEmissive:Ie&&M.emissiveMap.isVideoTexture===!0&&_t.getTransfer(M.emissiveMap.colorSpace)===Tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Gn,flipSided:M.side===Tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ce&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&M.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function f(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)w.push(I),w.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(w,M),b(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function b(M,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),M.push(o.mask)}function E(M){const w=g[M.type];let I;if(w){const N=di[w];I=Po.clone(N.uniforms)}else I=M.uniforms;return I}function y(M,w){let I=h.get(w);return I!==void 0?++I.usedTimes:(I=new G1(n,w,M,a),d.push(I),h.set(w,I)),I}function R(M){if(--M.usedTimes===0){const w=d.indexOf(M);d[w]=d[d.length-1],d.pop(),h.delete(M.cacheKey),M.destroy()}}function C(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:y,releaseProgram:R,releaseShaderCache:C,programs:d,dispose:L}}function Y1(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,l){n.get(s)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function j1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yh(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(h,u,p,g,x,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function o(h,u,p,g,x,m){const f=s(h,u,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,u,p,g,x,m){const f=s(h,u,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,u){t.length>1&&t.sort(h||j1),i.length>1&&i.sort(u||bh),r.length>1&&r.sort(u||bh)}function d(){for(let h=e,u=n.length;h<u;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:d,sort:c}}function K1(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new yh,n.set(i,[s])):r>=a.length?(s=new yh,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function Z1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new nt};break;case"SpotLight":t={position:new W,direction:new W,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function J1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Q1=0;function eS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tS(n){const e=new Z1,t=J1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,a=new Ht,s=new Ht;function o(c){let d=0,h=0,u=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,_=0,b=0,E=0,y=0,R=0,C=0;c.sort(eS);for(let M=0,w=c.length;M<w;M++){const I=c[M],N=I.color,O=I.intensity,$=I.distance;let z=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===da?z=I.shadow.map.texture:z=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=N.r*O,h+=N.g*O,u+=N.b*O;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],O);C++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const H=I.shadow,J=t.get(I);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=I.shadow.matrix,_++}i.directional[p]=V,p++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(N).multiplyScalar(O),V.distance=$,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[x]=V;const H=I.shadow;if(I.map&&(i.spotLightMap[y]=I.map,y++,H.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[x]=H.matrix,I.castShadow){const J=t.get(I);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,i.spotShadow[x]=J,i.spotShadowMap[x]=z,E++}x++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(N).multiplyScalar(O),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=V,m++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const H=I.shadow,J=t.get(I);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,i.pointShadow[g]=J,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=I.shadow.matrix,b++}i.point[g]=V,g++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(O),V.groundColor.copy(I.groundColor).multiplyScalar(O),i.hemi[f]=V,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==_||L.numPointShadows!==b||L.numSpotShadows!==E||L.numSpotMaps!==y||L.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+y-R,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,L.directionalLength=p,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=_,L.numPointShadows=b,L.numSpotShadows=E,L.numSpotMaps=y,L.numLightProbes=C,i.version=Q1++)}function l(c,d){let h=0,u=0,p=0,g=0,x=0;const m=d.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const b=c[f];if(b.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(b.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),s.identity(),a.copy(b.matrixWorld),a.premultiply(m),s.extractRotation(a),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),g++}else if(b.isPointLight){const E=i.point[u];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Sh(n){const e=new tS(n),t=[],i=[];function r(d){c.camera=d,t.length=0,i.length=0}function a(d){t.push(d)}function s(d){i.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function nS(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new Sh(n),e.set(r,[o])):a>=s.length?(o=new Sh(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const iS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,aS=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],sS=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Mh=new Ht,Ha=new W,Yl=new W;function oS(n,e,t){let i=new Fd;const r=new Ke,a=new Ke,s=new Wt,o=new bx,l=new yx,c={},d=t.maxTextureSize,h={[ar]:Tn,[Tn]:ar,[Gn]:Gn},u=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:iS,fragmentShader:rS}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Bn;g.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new rn(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ro;let f=this.type;this.render=function(R,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;R.type===ug&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=ro);const M=n.getRenderTarget(),w=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),N=n.state;N.setBlending(mi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=f!==this.type;O&&C.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(z=>z.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,z=R.length;$<z;$++){const V=R[$],H=V.shadow;if(H===void 0){at("WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const J=H.getFrameExtents();if(r.multiply(J),a.copy(H.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/J.x),r.x=a.x*J.x,H.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/J.y),r.y=a.y*J.y,H.mapSize.y=a.y)),H.map===null||O===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Wa){if(V.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new An(r.x,r.y,{format:da,type:Fn,minFilter:un,magFilter:un,generateMipmaps:!1}),H.map.texture.name=V.name+".shadowMap",H.map.depthTexture=new rs(r.x,r.y,fi),H.map.depthTexture.name=V.name+".shadowMapDepth",H.map.depthTexture.format=Oi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=nn,H.map.depthTexture.magFilter=nn}else{V.isPointLight?(H.map=new hp(r.x),H.map.depthTexture=new vx(r.x,Si)):(H.map=new An(r.x,r.y),H.map.depthTexture=new rs(r.x,r.y,Si)),H.map.depthTexture.name=V.name+".shadowMap",H.map.depthTexture.format=Oi;const ie=n.state.buffers.depth.getReversed();this.type===ro?(H.map.depthTexture.compareFunction=ie?Id:Pd,H.map.depthTexture.minFilter=un,H.map.depthTexture.magFilter=un):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=nn,H.map.depthTexture.magFilter=nn)}H.camera.updateProjectionMatrix()}const ae=H.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<ae;ie++){if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,ie),n.clear();else{ie===0&&(n.setRenderTarget(H.map),n.clear());const de=H.getViewport(ie);s.set(a.x*de.x,a.y*de.y,a.x*de.z,a.y*de.w),N.viewport(s)}if(V.isPointLight){const de=H.camera,Te=H.matrix,_e=V.distance||de.far;_e!==de.far&&(de.far=_e,de.updateProjectionMatrix()),Ha.setFromMatrixPosition(V.matrixWorld),de.position.copy(Ha),Yl.copy(de.position),Yl.add(aS[ie]),de.up.copy(sS[ie]),de.lookAt(Yl),de.updateMatrixWorld(),Te.makeTranslation(-Ha.x,-Ha.y,-Ha.z),Mh.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Mh,de.coordinateSystem,de.reversedDepth)}else H.updateMatrices(V);i=H.getFrustum(),E(C,L,H.camera,V,this.type)}H.isPointLightShadow!==!0&&this.type===Wa&&_(H,L),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(M,w,I)};function _(R,C){const L=e.update(x);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new An(r.x,r.y,{format:da,type:Fn})),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,L,u,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,L,p,x,null)}function b(R,C,L,M){let w=null;const I=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)w=I;else if(w=L.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const N=w.uuid,O=C.uuid;let $=c[N];$===void 0&&($={},c[N]=$);let z=$[O];z===void 0&&(z=w.clone(),$[O]=z,C.addEventListener("dispose",y)),w=z}if(w.visible=C.visible,w.wireframe=C.wireframe,M===Wa?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:h[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,L.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const N=n.properties.get(w);N.light=L}return w}function E(R,C,L,M,w){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&w===Wa)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const O=e.update(R),$=R.material;if(Array.isArray($)){const z=O.groups;for(let V=0,H=z.length;V<H;V++){const J=z[V],ae=$[J.materialIndex];if(ae&&ae.visible){const ie=b(R,ae,M,w);R.onBeforeShadow(n,R,C,L,O,ie,J),n.renderBufferDirect(L,null,O,ie,R,J),R.onAfterShadow(n,R,C,L,O,ie,J)}}}else if($.visible){const z=b(R,$,M,w);R.onBeforeShadow(n,R,C,L,O,z,null),n.renderBufferDirect(L,null,O,z,R,null),R.onAfterShadow(n,R,C,L,O,z,null)}}const N=R.children;for(let O=0,$=N.length;O<$;O++)E(N[O],C,L,M,w)}function y(R){R.target.removeEventListener("dispose",y);for(const L in c){const M=c[L],w=R.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}const lS={[hc]:fc,[pc]:gc,[mc]:xc,[la]:vc,[fc]:hc,[gc]:pc,[xc]:mc,[vc]:la};function cS(n,e){function t(){let k=!1;const xe=new Wt;let he=null;const Re=new Wt(0,0,0,0);return{setMask:function(ue){he!==ue&&!k&&(n.colorMask(ue,ue,ue,ue),he=ue)},setLocked:function(ue){k=ue},setClear:function(ue,te,ce,Oe,rt){rt===!0&&(ue*=Oe,te*=Oe,ce*=Oe),xe.set(ue,te,ce,Oe),Re.equals(xe)===!1&&(n.clearColor(ue,te,ce,Oe),Re.copy(xe))},reset:function(){k=!1,he=null,Re.set(-1,0,0,0)}}}function i(){let k=!1,xe=!1,he=null,Re=null,ue=null;return{setReversed:function(te){if(xe!==te){const ce=e.get("EXT_clip_control");te?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),xe=te;const Oe=ue;ue=null,this.setClear(Oe)}},getReversed:function(){return xe},setTest:function(te){te?ne(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(te){he!==te&&!k&&(n.depthMask(te),he=te)},setFunc:function(te){if(xe&&(te=lS[te]),Re!==te){switch(te){case hc:n.depthFunc(n.NEVER);break;case fc:n.depthFunc(n.ALWAYS);break;case pc:n.depthFunc(n.LESS);break;case la:n.depthFunc(n.LEQUAL);break;case mc:n.depthFunc(n.EQUAL);break;case vc:n.depthFunc(n.GEQUAL);break;case gc:n.depthFunc(n.GREATER);break;case xc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=te}},setLocked:function(te){k=te},setClear:function(te){ue!==te&&(xe&&(te=1-te),n.clearDepth(te),ue=te)},reset:function(){k=!1,he=null,Re=null,ue=null,xe=!1}}}function r(){let k=!1,xe=null,he=null,Re=null,ue=null,te=null,ce=null,Oe=null,rt=null;return{setTest:function(st){k||(st?ne(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(st){xe!==st&&!k&&(n.stencilMask(st),xe=st)},setFunc:function(st,Nt,Yt){(he!==st||Re!==Nt||ue!==Yt)&&(n.stencilFunc(st,Nt,Yt),he=st,Re=Nt,ue=Yt)},setOp:function(st,Nt,Yt){(te!==st||ce!==Nt||Oe!==Yt)&&(n.stencilOp(st,Nt,Yt),te=st,ce=Nt,Oe=Yt)},setLocked:function(st){k=st},setClear:function(st){rt!==st&&(n.clearStencil(st),rt=st)},reset:function(){k=!1,xe=null,he=null,Re=null,ue=null,te=null,ce=null,Oe=null,rt=null}}}const a=new t,s=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,_=null,b=null,E=null,y=null,R=null,C=new nt(0,0,0),L=0,M=!1,w=null,I=null,N=null,O=null,$=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,H=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),V=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),V=H>=2);let ae=null,ie={};const de=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),_e=new Wt().fromArray(de),Be=new Wt().fromArray(Te);function Xe(k,xe,he,Re){const ue=new Uint8Array(4),te=n.createTexture();n.bindTexture(k,te),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ce=0;ce<he;ce++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(xe+ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return te}const j={};j[n.TEXTURE_2D]=Xe(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=Xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=Xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=Xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),s.setFunc(la),ze(!1),it(wu),ne(n.CULL_FACE),je(mi);function ne(k){d[k]!==!0&&(n.enable(k),d[k]=!0)}function pe(k){d[k]!==!1&&(n.disable(k),d[k]=!1)}function ke(k,xe){return h[k]!==xe?(n.bindFramebuffer(k,xe),h[k]=xe,k===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=xe),k===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function ge(k,xe){let he=p,Re=!1;if(k){he=u.get(xe),he===void 0&&(he=[],u.set(xe,he));const ue=k.textures;if(he.length!==ue.length||he[0]!==n.COLOR_ATTACHMENT0){for(let te=0,ce=ue.length;te<ce;te++)he[te]=n.COLOR_ATTACHMENT0+te;he.length=ue.length,Re=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,Re=!0);Re&&n.drawBuffers(he)}function Ge(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const dt={[Mr]:n.FUNC_ADD,[fg]:n.FUNC_SUBTRACT,[pg]:n.FUNC_REVERSE_SUBTRACT};dt[mg]=n.MIN,dt[vg]=n.MAX;const We={[gg]:n.ZERO,[xg]:n.ONE,[_g]:n.SRC_COLOR,[dc]:n.SRC_ALPHA,[wg]:n.SRC_ALPHA_SATURATE,[Mg]:n.DST_COLOR,[yg]:n.DST_ALPHA,[bg]:n.ONE_MINUS_SRC_COLOR,[uc]:n.ONE_MINUS_SRC_ALPHA,[Eg]:n.ONE_MINUS_DST_COLOR,[Sg]:n.ONE_MINUS_DST_ALPHA,[Tg]:n.CONSTANT_COLOR,[Ag]:n.ONE_MINUS_CONSTANT_COLOR,[Rg]:n.CONSTANT_ALPHA,[Cg]:n.ONE_MINUS_CONSTANT_ALPHA};function je(k,xe,he,Re,ue,te,ce,Oe,rt,st){if(k===mi){x===!0&&(pe(n.BLEND),x=!1);return}if(x===!1&&(ne(n.BLEND),x=!0),k!==hg){if(k!==m||st!==M){if((f!==Mr||E!==Mr)&&(n.blendEquation(n.FUNC_ADD),f=Mr,E=Mr),st)switch(k){case ta:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cc:n.blendFunc(n.ONE,n.ONE);break;case Tu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Au:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:xt("WebGLState: Invalid blending: ",k);break}else switch(k){case ta:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Tu:xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Au:xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xt("WebGLState: Invalid blending: ",k);break}_=null,b=null,y=null,R=null,C.set(0,0,0),L=0,m=k,M=st}return}ue=ue||xe,te=te||he,ce=ce||Re,(xe!==f||ue!==E)&&(n.blendEquationSeparate(dt[xe],dt[ue]),f=xe,E=ue),(he!==_||Re!==b||te!==y||ce!==R)&&(n.blendFuncSeparate(We[he],We[Re],We[te],We[ce]),_=he,b=Re,y=te,R=ce),(Oe.equals(C)===!1||rt!==L)&&(n.blendColor(Oe.r,Oe.g,Oe.b,rt),C.copy(Oe),L=rt),m=k,M=!1}function Qe(k,xe){k.side===Gn?pe(n.CULL_FACE):ne(n.CULL_FACE);let he=k.side===Tn;xe&&(he=!he),ze(he),k.blending===ta&&k.transparent===!1?je(mi):je(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),a.setMask(k.colorWrite);const Re=k.stencilWrite;o.setTest(Re),Re&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ie(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(k){w!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),w=k)}function it(k){k!==cg?(ne(n.CULL_FACE),k!==I&&(k===wu?n.cullFace(n.BACK):k===dg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),I=k}function F(k){k!==N&&(V&&n.lineWidth(k),N=k)}function Ie(k,xe,he){k?(ne(n.POLYGON_OFFSET_FILL),(O!==xe||$!==he)&&(n.polygonOffset(xe,he),O=xe,$=he)):pe(n.POLYGON_OFFSET_FILL)}function Pe(k){k?ne(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function He(k){k===void 0&&(k=n.TEXTURE0+z-1),ae!==k&&(n.activeTexture(k),ae=k)}function re(k,xe,he){he===void 0&&(ae===null?he=n.TEXTURE0+z-1:he=ae);let Re=ie[he];Re===void 0&&(Re={type:void 0,texture:void 0},ie[he]=Re),(Re.type!==k||Re.texture!==xe)&&(ae!==he&&(n.activeTexture(he),ae=he),n.bindTexture(k,xe||j[k]),Re.type=k,Re.texture=xe)}function D(){const k=ie[ae];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(k){xt("WebGLState:",k)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(k){xt("WebGLState:",k)}}function q(){try{n.texSubImage2D(...arguments)}catch(k){xt("WebGLState:",k)}}function Q(){try{n.texSubImage3D(...arguments)}catch(k){xt("WebGLState:",k)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(k){xt("WebGLState:",k)}}function oe(){try{n.compressedTexSubImage3D(...arguments)}catch(k){xt("WebGLState:",k)}}function ee(){try{n.texStorage2D(...arguments)}catch(k){xt("WebGLState:",k)}}function me(){try{n.texStorage3D(...arguments)}catch(k){xt("WebGLState:",k)}}function Ue(){try{n.texImage2D(...arguments)}catch(k){xt("WebGLState:",k)}}function se(){try{n.texImage3D(...arguments)}catch(k){xt("WebGLState:",k)}}function fe(k){_e.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),_e.copy(k))}function Ae(k){Be.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Be.copy(k))}function De(k,xe){let he=c.get(xe);he===void 0&&(he=new WeakMap,c.set(xe,he));let Re=he.get(k);Re===void 0&&(Re=n.getUniformBlockIndex(xe,k.name),he.set(k,Re))}function ve(k,xe){const Re=c.get(xe).get(k);l.get(xe)!==Re&&(n.uniformBlockBinding(xe,Re,k.__bindingPointIndex),l.set(xe,Re))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ae=null,ie={},h={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,_=null,b=null,E=null,y=null,R=null,C=new nt(0,0,0),L=0,M=!1,w=null,I=null,N=null,O=null,$=null,_e.set(0,0,n.canvas.width,n.canvas.height),Be.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ne,disable:pe,bindFramebuffer:ke,drawBuffers:ge,useProgram:Ge,setBlending:je,setMaterial:Qe,setFlipSided:ze,setCullFace:it,setLineWidth:F,setPolygonOffset:Ie,setScissorTest:Pe,activeTexture:He,bindTexture:re,unbindTexture:D,compressedTexImage2D:S,compressedTexImage3D:U,texImage2D:Ue,texImage3D:se,updateUBOMapping:De,uniformBlockBinding:ve,texStorage2D:ee,texStorage3D:me,texSubImage2D:q,texSubImage3D:Q,compressedTexSubImage2D:Y,compressedTexSubImage3D:oe,scissor:fe,viewport:Ae,reset:et}}function dS(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,d=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,S){return p?new OffscreenCanvas(D,S):Co("canvas")}function x(D,S,U){let q=1;const Q=re(D);if((Q.width>U||Q.height>U)&&(q=U/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Y=Math.floor(q*Q.width),oe=Math.floor(q*Q.height);h===void 0&&(h=g(Y,oe));const ee=S?g(Y,oe):h;return ee.width=Y,ee.height=oe,ee.getContext("2d").drawImage(D,0,0,Y,oe),at("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+oe+")."),ee}else return"data"in D&&at("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),D;return D}function m(D){return D.generateMipmaps}function f(D){n.generateMipmap(D)}function _(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(D,S,U,q,Q=!1){if(D!==null){if(n[D]!==void 0)return n[D];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Y=S;if(S===n.RED&&(U===n.FLOAT&&(Y=n.R32F),U===n.HALF_FLOAT&&(Y=n.R16F),U===n.UNSIGNED_BYTE&&(Y=n.R8)),S===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.R8UI),U===n.UNSIGNED_SHORT&&(Y=n.R16UI),U===n.UNSIGNED_INT&&(Y=n.R32UI),U===n.BYTE&&(Y=n.R8I),U===n.SHORT&&(Y=n.R16I),U===n.INT&&(Y=n.R32I)),S===n.RG&&(U===n.FLOAT&&(Y=n.RG32F),U===n.HALF_FLOAT&&(Y=n.RG16F),U===n.UNSIGNED_BYTE&&(Y=n.RG8)),S===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RG8UI),U===n.UNSIGNED_SHORT&&(Y=n.RG16UI),U===n.UNSIGNED_INT&&(Y=n.RG32UI),U===n.BYTE&&(Y=n.RG8I),U===n.SHORT&&(Y=n.RG16I),U===n.INT&&(Y=n.RG32I)),S===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),U===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),U===n.UNSIGNED_INT&&(Y=n.RGB32UI),U===n.BYTE&&(Y=n.RGB8I),U===n.SHORT&&(Y=n.RGB16I),U===n.INT&&(Y=n.RGB32I)),S===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),U===n.UNSIGNED_INT&&(Y=n.RGBA32UI),U===n.BYTE&&(Y=n.RGBA8I),U===n.SHORT&&(Y=n.RGBA16I),U===n.INT&&(Y=n.RGBA32I)),S===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),S===n.RGBA){const oe=Q?Ao:_t.getTransfer(q);U===n.FLOAT&&(Y=n.RGBA32F),U===n.HALF_FLOAT&&(Y=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Y=oe===Tt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function E(D,S){let U;return D?S===null||S===Si||S===ns?U=n.DEPTH24_STENCIL8:S===fi?U=n.DEPTH32F_STENCIL8:S===ts&&(U=n.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Si||S===ns?U=n.DEPTH_COMPONENT24:S===fi?U=n.DEPTH_COMPONENT32F:S===ts&&(U=n.DEPTH_COMPONENT16),U}function y(D,S){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==nn&&D.minFilter!==un?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function R(D){const S=D.target;S.removeEventListener("dispose",R),L(S),S.isVideoTexture&&d.delete(S)}function C(D){const S=D.target;S.removeEventListener("dispose",C),w(S)}function L(D){const S=i.get(D);if(S.__webglInit===void 0)return;const U=D.source,q=u.get(U);if(q){const Q=q[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(D),Object.keys(q).length===0&&u.delete(U)}i.remove(D)}function M(D){const S=i.get(D);n.deleteTexture(S.__webglTexture);const U=D.source,q=u.get(U);delete q[S.__cacheKey],s.memory.textures--}function w(D){const S=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let Q=0;Q<S.__webglFramebuffer[q].length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[q][Q]);else n.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)n.deleteFramebuffer(S.__webglFramebuffer[q]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const U=D.textures;for(let q=0,Q=U.length;q<Q;q++){const Y=i.get(U[q]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),s.memory.textures--),i.remove(U[q])}i.remove(D)}let I=0;function N(){I=0}function O(){const D=I;return D>=r.maxTextures&&at("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),I+=1,D}function $(D){const S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function z(D,S){const U=i.get(D);if(D.isVideoTexture&&Pe(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&U.__version!==D.version){const q=D.image;if(q===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{j(U,D,S);return}}else D.isExternalTexture&&(U.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+S)}function V(D,S){const U=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&U.__version!==D.version){j(U,D,S);return}else D.isExternalTexture&&(U.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+S)}function H(D,S){const U=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&U.__version!==D.version){j(U,D,S);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+S)}function J(D,S){const U=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&U.__version!==D.version){ne(U,D,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+S)}const ae={[yc]:n.REPEAT,[Li]:n.CLAMP_TO_EDGE,[Sc]:n.MIRRORED_REPEAT},ie={[nn]:n.NEAREST,[Lg]:n.NEAREST_MIPMAP_NEAREST,[Ns]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[gl]:n.LINEAR_MIPMAP_NEAREST,[wr]:n.LINEAR_MIPMAP_LINEAR},de={[Ug]:n.NEVER,[zg]:n.ALWAYS,[Fg]:n.LESS,[Pd]:n.LEQUAL,[Og]:n.EQUAL,[Id]:n.GEQUAL,[Bg]:n.GREATER,[kg]:n.NOTEQUAL};function Te(D,S){if(S.type===fi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===un||S.magFilter===gl||S.magFilter===Ns||S.magFilter===wr||S.minFilter===un||S.minFilter===gl||S.minFilter===Ns||S.minFilter===wr)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,ae[S.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,ae[S.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,ae[S.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,ie[S.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,ie[S.minFilter]),S.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,de[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nn||S.minFilter!==Ns&&S.minFilter!==wr||S.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function _e(D,S){let U=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",R));const q=S.source;let Q=u.get(q);Q===void 0&&(Q={},u.set(q,Q));const Y=$(S);if(Y!==D.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,U=!0),Q[Y].usedTimes++;const oe=Q[D.__cacheKey];oe!==void 0&&(Q[D.__cacheKey].usedTimes--,oe.usedTimes===0&&M(S)),D.__cacheKey=Y,D.__webglTexture=Q[Y].texture}return U}function Be(D,S,U){return Math.floor(Math.floor(D/U)/S)}function Xe(D,S,U,q){const Y=D.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,U,q,S.data);else{Y.sort((se,fe)=>se.start-fe.start);let oe=0;for(let se=1;se<Y.length;se++){const fe=Y[oe],Ae=Y[se],De=fe.start+fe.count,ve=Be(Ae.start,S.width,4),et=Be(fe.start,S.width,4);Ae.start<=De+1&&ve===et&&Be(Ae.start+Ae.count-1,S.width,4)===ve?fe.count=Math.max(fe.count,Ae.start+Ae.count-fe.start):(++oe,Y[oe]=Ae)}Y.length=oe+1;const ee=n.getParameter(n.UNPACK_ROW_LENGTH),me=n.getParameter(n.UNPACK_SKIP_PIXELS),Ue=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let se=0,fe=Y.length;se<fe;se++){const Ae=Y[se],De=Math.floor(Ae.start/4),ve=Math.ceil(Ae.count/4),et=De%S.width,k=Math.floor(De/S.width),xe=ve,he=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,et),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,et,k,xe,he,U,q,S.data)}D.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ee),n.pixelStorei(n.UNPACK_SKIP_PIXELS,me),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ue)}}function j(D,S,U){let q=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=n.TEXTURE_3D);const Q=_e(D,S),Y=S.source;t.bindTexture(q,D.__webglTexture,n.TEXTURE0+U);const oe=i.get(Y);if(Y.version!==oe.__version||Q===!0){t.activeTexture(n.TEXTURE0+U);const ee=_t.getPrimaries(_t.workingColorSpace),me=S.colorSpace===Zi?null:_t.getPrimaries(S.colorSpace),Ue=S.colorSpace===Zi||ee===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let se=x(S.image,!1,r.maxTextureSize);se=He(S,se);const fe=a.convert(S.format,S.colorSpace),Ae=a.convert(S.type);let De=b(S.internalFormat,fe,Ae,S.colorSpace,S.isVideoTexture);Te(q,S);let ve;const et=S.mipmaps,k=S.isVideoTexture!==!0,xe=oe.__version===void 0||Q===!0,he=Y.dataReady,Re=y(S,se);if(S.isDepthTexture)De=E(S.format===Tr,S.type),xe&&(k?t.texStorage2D(n.TEXTURE_2D,1,De,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,De,se.width,se.height,0,fe,Ae,null));else if(S.isDataTexture)if(et.length>0){k&&xe&&t.texStorage2D(n.TEXTURE_2D,Re,De,et[0].width,et[0].height);for(let ue=0,te=et.length;ue<te;ue++)ve=et[ue],k?he&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,ve.width,ve.height,fe,Ae,ve.data):t.texImage2D(n.TEXTURE_2D,ue,De,ve.width,ve.height,0,fe,Ae,ve.data);S.generateMipmaps=!1}else k?(xe&&t.texStorage2D(n.TEXTURE_2D,Re,De,se.width,se.height),he&&Xe(S,se,fe,Ae)):t.texImage2D(n.TEXTURE_2D,0,De,se.width,se.height,0,fe,Ae,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){k&&xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,De,et[0].width,et[0].height,se.depth);for(let ue=0,te=et.length;ue<te;ue++)if(ve=et[ue],S.format!==ti)if(fe!==null)if(k){if(he)if(S.layerUpdates.size>0){const ce=eh(ve.width,ve.height,S.format,S.type);for(const Oe of S.layerUpdates){const rt=ve.data.subarray(Oe*ce/ve.data.BYTES_PER_ELEMENT,(Oe+1)*ce/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,Oe,ve.width,ve.height,1,fe,rt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,ve.width,ve.height,se.depth,fe,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,De,ve.width,ve.height,se.depth,0,ve.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?he&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,ve.width,ve.height,se.depth,fe,Ae,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,De,ve.width,ve.height,se.depth,0,fe,Ae,ve.data)}else{k&&xe&&t.texStorage2D(n.TEXTURE_2D,Re,De,et[0].width,et[0].height);for(let ue=0,te=et.length;ue<te;ue++)ve=et[ue],S.format!==ti?fe!==null?k?he&&t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,ve.width,ve.height,fe,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,De,ve.width,ve.height,0,ve.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?he&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,ve.width,ve.height,fe,Ae,ve.data):t.texImage2D(n.TEXTURE_2D,ue,De,ve.width,ve.height,0,fe,Ae,ve.data)}else if(S.isDataArrayTexture)if(k){if(xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,De,se.width,se.height,se.depth),he)if(S.layerUpdates.size>0){const ue=eh(se.width,se.height,S.format,S.type);for(const te of S.layerUpdates){const ce=se.data.subarray(te*ue/se.data.BYTES_PER_ELEMENT,(te+1)*ue/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,se.width,se.height,1,fe,Ae,ce)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,fe,Ae,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,se.width,se.height,se.depth,0,fe,Ae,se.data);else if(S.isData3DTexture)k?(xe&&t.texStorage3D(n.TEXTURE_3D,Re,De,se.width,se.height,se.depth),he&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,fe,Ae,se.data)):t.texImage3D(n.TEXTURE_3D,0,De,se.width,se.height,se.depth,0,fe,Ae,se.data);else if(S.isFramebufferTexture){if(xe)if(k)t.texStorage2D(n.TEXTURE_2D,Re,De,se.width,se.height);else{let ue=se.width,te=se.height;for(let ce=0;ce<Re;ce++)t.texImage2D(n.TEXTURE_2D,ce,De,ue,te,0,fe,Ae,null),ue>>=1,te>>=1}}else if(et.length>0){if(k&&xe){const ue=re(et[0]);t.texStorage2D(n.TEXTURE_2D,Re,De,ue.width,ue.height)}for(let ue=0,te=et.length;ue<te;ue++)ve=et[ue],k?he&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,fe,Ae,ve):t.texImage2D(n.TEXTURE_2D,ue,De,fe,Ae,ve);S.generateMipmaps=!1}else if(k){if(xe){const ue=re(se);t.texStorage2D(n.TEXTURE_2D,Re,De,ue.width,ue.height)}he&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Ae,se)}else t.texImage2D(n.TEXTURE_2D,0,De,fe,Ae,se);m(S)&&f(q),oe.__version=Y.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function ne(D,S,U){if(S.image.length!==6)return;const q=_e(D,S),Q=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+U);const Y=i.get(Q);if(Q.version!==Y.__version||q===!0){t.activeTexture(n.TEXTURE0+U);const oe=_t.getPrimaries(_t.workingColorSpace),ee=S.colorSpace===Zi?null:_t.getPrimaries(S.colorSpace),me=S.colorSpace===Zi||oe===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ue=S.isCompressedTexture||S.image[0].isCompressedTexture,se=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let te=0;te<6;te++)!Ue&&!se?fe[te]=x(S.image[te],!0,r.maxCubemapSize):fe[te]=se?S.image[te].image:S.image[te],fe[te]=He(S,fe[te]);const Ae=fe[0],De=a.convert(S.format,S.colorSpace),ve=a.convert(S.type),et=b(S.internalFormat,De,ve,S.colorSpace),k=S.isVideoTexture!==!0,xe=Y.__version===void 0||q===!0,he=Q.dataReady;let Re=y(S,Ae);Te(n.TEXTURE_CUBE_MAP,S);let ue;if(Ue){k&&xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,et,Ae.width,Ae.height);for(let te=0;te<6;te++){ue=fe[te].mipmaps;for(let ce=0;ce<ue.length;ce++){const Oe=ue[ce];S.format!==ti?De!==null?k?he&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce,0,0,Oe.width,Oe.height,De,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce,et,Oe.width,Oe.height,0,Oe.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce,0,0,Oe.width,Oe.height,De,ve,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce,et,Oe.width,Oe.height,0,De,ve,Oe.data)}}}else{if(ue=S.mipmaps,k&&xe){ue.length>0&&Re++;const te=re(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,et,te.width,te.height)}for(let te=0;te<6;te++)if(se){k?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,fe[te].width,fe[te].height,De,ve,fe[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,et,fe[te].width,fe[te].height,0,De,ve,fe[te].data);for(let ce=0;ce<ue.length;ce++){const rt=ue[ce].image[te].image;k?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce+1,0,0,rt.width,rt.height,De,ve,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce+1,et,rt.width,rt.height,0,De,ve,rt.data)}}else{k?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,De,ve,fe[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,et,De,ve,fe[te]);for(let ce=0;ce<ue.length;ce++){const Oe=ue[ce];k?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce+1,0,0,De,ve,Oe.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce+1,et,De,ve,Oe.image[te])}}}m(S)&&f(n.TEXTURE_CUBE_MAP),Y.__version=Q.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function pe(D,S,U,q,Q,Y){const oe=a.convert(U.format,U.colorSpace),ee=a.convert(U.type),me=b(U.internalFormat,oe,ee,U.colorSpace),Ue=i.get(S),se=i.get(U);if(se.__renderTarget=S,!Ue.__hasExternalTextures){const fe=Math.max(1,S.width>>Y),Ae=Math.max(1,S.height>>Y);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,Y,me,fe,Ae,S.depth,0,oe,ee,null):t.texImage2D(Q,Y,me,fe,Ae,0,oe,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Ie(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Q,se.__webglTexture,0,F(S)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Q,se.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(D,S,U){if(n.bindRenderbuffer(n.RENDERBUFFER,D),S.depthBuffer){const q=S.depthTexture,Q=q&&q.isDepthTexture?q.type:null,Y=E(S.stencilBuffer,Q),oe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ie(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,F(S),Y,S.width,S.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,F(S),Y,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Y,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,D)}else{const q=S.textures;for(let Q=0;Q<q.length;Q++){const Y=q[Q],oe=a.convert(Y.format,Y.colorSpace),ee=a.convert(Y.type),me=b(Y.internalFormat,oe,ee,Y.colorSpace);Ie(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,F(S),me,S.width,S.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,F(S),me,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,me,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(D,S,U){const q=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(S.depthTexture);if(Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Te(n.TEXTURE_CUBE_MAP,S.depthTexture);const Ue=a.convert(S.depthTexture.format),se=a.convert(S.depthTexture.type);let fe;S.depthTexture.format===Oi?fe=n.DEPTH_COMPONENT24:S.depthTexture.format===Tr&&(fe=n.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,fe,S.width,S.height,0,Ue,se,null)}}else z(S.depthTexture,0);const Y=Q.__webglTexture,oe=F(S),ee=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,me=S.depthTexture.format===Tr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===Oi)Ie(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,ee,Y,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,me,ee,Y,0);else if(S.depthTexture.format===Tr)Ie(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,ee,Y,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,me,ee,Y,0);else throw new Error("Unknown depthTexture format")}function Ge(D){const S=i.get(D),U=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){const q=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=q}if(D.depthTexture&&!S.__autoAllocateDepthBuffer)if(U)for(let q=0;q<6;q++)ge(S.__webglFramebuffer[q],D,q);else{const q=D.texture.mipmaps;q&&q.length>0?ge(S.__webglFramebuffer[0],D,0):ge(S.__webglFramebuffer,D,0)}else if(U){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=n.createRenderbuffer(),ke(S.__webglDepthbuffer[q],D,!1);else{const Q=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Y)}}else{const q=D.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ke(S.__webglDepthbuffer,D,!1);else{const Q=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(D,S,U){const q=i.get(D);S!==void 0&&pe(q.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Ge(D)}function We(D){const S=D.texture,U=i.get(D),q=i.get(S);D.addEventListener("dispose",C);const Q=D.textures,Y=D.isWebGLCubeRenderTarget===!0,oe=Q.length>1;if(oe||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=S.version,s.memory.textures++),Y){U.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[ee]=[];for(let me=0;me<S.mipmaps.length;me++)U.__webglFramebuffer[ee][me]=n.createFramebuffer()}else U.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let ee=0;ee<S.mipmaps.length;ee++)U.__webglFramebuffer[ee]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(oe)for(let ee=0,me=Q.length;ee<me;ee++){const Ue=i.get(Q[ee]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),s.memory.textures++)}if(D.samples>0&&Ie(D)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){const me=Q[ee];U.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ee]);const Ue=a.convert(me.format,me.colorSpace),se=a.convert(me.type),fe=b(me.internalFormat,Ue,se,me.colorSpace,D.isXRRenderTarget===!0),Ae=F(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,fe,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,U.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),ke(U.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Te(n.TEXTURE_CUBE_MAP,S);for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)pe(U.__webglFramebuffer[ee][me],D,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me);else pe(U.__webglFramebuffer[ee],D,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(S)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let ee=0,me=Q.length;ee<me;ee++){const Ue=Q[ee],se=i.get(Ue);let fe=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(fe=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,se.__webglTexture),Te(fe,Ue),pe(U.__webglFramebuffer,D,Ue,n.COLOR_ATTACHMENT0+ee,fe,0),m(Ue)&&f(fe)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ee=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,q.__webglTexture),Te(ee,S),S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)pe(U.__webglFramebuffer[me],D,S,n.COLOR_ATTACHMENT0,ee,me);else pe(U.__webglFramebuffer,D,S,n.COLOR_ATTACHMENT0,ee,0);m(S)&&f(ee),t.unbindTexture()}D.depthBuffer&&Ge(D)}function je(D){const S=D.textures;for(let U=0,q=S.length;U<q;U++){const Q=S[U];if(m(Q)){const Y=_(D),oe=i.get(Q).__webglTexture;t.bindTexture(Y,oe),f(Y),t.unbindTexture()}}}const Qe=[],ze=[];function it(D){if(D.samples>0){if(Ie(D)===!1){const S=D.textures,U=D.width,q=D.height;let Q=n.COLOR_BUFFER_BIT;const Y=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(D),ee=S.length>1;if(ee)for(let Ue=0;Ue<S.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const me=D.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Ue=0;Ue<S.length;Ue++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Ue]);const se=i.get(S[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,U,q,0,0,U,q,Q,n.NEAREST),l===!0&&(Qe.length=0,ze.length=0,Qe.push(n.COLOR_ATTACHMENT0+Ue),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Qe.push(Y),ze.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let Ue=0;Ue<S.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Ue]);const se=i.get(S[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const S=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function F(D){return Math.min(r.maxSamples,D.samples)}function Ie(D){const S=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(D){const S=s.render.frame;d.get(D)!==S&&(d.set(D,S),D.update())}function He(D,S){const U=D.colorSpace,q=D.format,Q=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||U!==ua&&U!==Zi&&(_t.getTransfer(U)===Tt?(q!==ti||Q!==Nn)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xt("WebGLTextures: Unsupported texture color space:",U)),S}function re(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=V,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=dt,this.setupRenderTarget=We,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function uS(n,e){function t(i,r=Zi){let a;const s=_t.getTransfer(r);if(i===Nn)return n.UNSIGNED_BYTE;if(i===Ed)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kf)return n.BYTE;if(i===Zf)return n.SHORT;if(i===ts)return n.UNSIGNED_SHORT;if(i===Md)return n.INT;if(i===Si)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===Fn)return n.HALF_FLOAT;if(i===ep)return n.ALPHA;if(i===tp)return n.RGB;if(i===ti)return n.RGBA;if(i===Oi)return n.DEPTH_COMPONENT;if(i===Tr)return n.DEPTH_STENCIL;if(i===np)return n.RED;if(i===Td)return n.RED_INTEGER;if(i===da)return n.RG;if(i===Ad)return n.RG_INTEGER;if(i===Rd)return n.RGBA_INTEGER;if(i===ao||i===so||i===oo||i===lo)if(s===Tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ao)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===so)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ao)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===so)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mc||i===Ec||i===wc||i===Tc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Mc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ec)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ac||i===Rc||i===Cc||i===Pc||i===Ic||i===Lc||i===Dc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ac||i===Rc)return s===Tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Cc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Pc)return a.COMPRESSED_R11_EAC;if(i===Ic)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Lc)return a.COMPRESSED_RG11_EAC;if(i===Dc)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Nc||i===Uc||i===Fc||i===Oc||i===Bc||i===kc||i===zc||i===Hc||i===Vc||i===Gc||i===Wc||i===$c||i===Xc||i===qc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Nc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$c)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yc||i===jc||i===Kc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Yc)return s===Tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zc||i===Jc||i===Qc||i===ed)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Zc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Jc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ed)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ns?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const hS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new fp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new an({vertexShader:hS,fragmentShader:fS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rn(new xs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mS extends Ma{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new pS,f={},_=t.getContextAttributes();let b=null,E=null;const y=[],R=[],C=new Ke;let L=null;const M=new gn;M.viewport=new Wt;const w=new gn;w.viewport=new Wt;const I=[M,w],N=new Ex;let O=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=y[j];return ne===void 0&&(ne=new zl,y[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=y[j];return ne===void 0&&(ne=new zl,y[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=y[j];return ne===void 0&&(ne=new zl,y[j]=ne),ne.getHandSpace()};function z(j){const ne=R.indexOf(j.inputSource);if(ne===-1)return;const pe=y[ne];pe!==void 0&&(pe.update(j.inputSource,j.frame,c||s),pe.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",H);for(let j=0;j<y.length;j++){const ne=R[j];ne!==null&&(R[j]=null,y[j].disconnect(ne))}O=null,$=null,m.reset();for(const j in f)delete f[j];e.setRenderTarget(b),p=null,u=null,h=null,r=null,E=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,i.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",V),r.addEventListener("inputsourceschange",H),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,ke=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=_.stencil?Tr:Oi,ke=_.stencil?ns:Si);const Ge={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:a};h=this.getBinding(),u=h.createProjectionLayer(Ge),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new An(u.textureWidth,u.textureHeight,{format:ti,type:Nn,depthTexture:new rs(u.textureWidth,u.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const pe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new An(p.framebufferWidth,p.framebufferHeight,{format:ti,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(j){for(let ne=0;ne<j.removed.length;ne++){const pe=j.removed[ne],ke=R.indexOf(pe);ke>=0&&(R[ke]=null,y[ke].disconnect(pe))}for(let ne=0;ne<j.added.length;ne++){const pe=j.added[ne];let ke=R.indexOf(pe);if(ke===-1){for(let Ge=0;Ge<y.length;Ge++)if(Ge>=R.length){R.push(pe),ke=Ge;break}else if(R[Ge]===null){R[Ge]=pe,ke=Ge;break}if(ke===-1)break}const ge=y[ke];ge&&ge.connect(pe)}}const J=new W,ae=new W;function ie(j,ne,pe){J.setFromMatrixPosition(ne.matrixWorld),ae.setFromMatrixPosition(pe.matrixWorld);const ke=J.distanceTo(ae),ge=ne.projectionMatrix.elements,Ge=pe.projectionMatrix.elements,dt=ge[14]/(ge[10]-1),We=ge[14]/(ge[10]+1),je=(ge[9]+1)/ge[5],Qe=(ge[9]-1)/ge[5],ze=(ge[8]-1)/ge[0],it=(Ge[8]+1)/Ge[0],F=dt*ze,Ie=dt*it,Pe=ke/(-ze+it),He=Pe*-ze;if(ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(He),j.translateZ(Pe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ge[10]===-1)j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const re=dt+Pe,D=We+Pe,S=F-He,U=Ie+(ke-He),q=je*We/D*re,Q=Qe*We/D*re;j.projectionMatrix.makePerspective(S,U,q,Q,re,D),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function de(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ne=j.near,pe=j.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),N.near=w.near=M.near=ne,N.far=w.far=M.far=pe,(O!==N.near||$!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),O=N.near,$=N.far),N.layers.mask=j.layers.mask|6,M.layers.mask=N.layers.mask&3,w.layers.mask=N.layers.mask&5;const ke=j.parent,ge=N.cameras;de(N,ke);for(let Ge=0;Ge<ge.length;Ge++)de(ge[Ge],ke);ge.length===2?ie(N,M,w):N.projectionMatrix.copy(M.projectionMatrix),Te(j,N,ke)};function Te(j,ne,pe){pe===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(pe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=td*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(j){return f[j]};let _e=null;function Be(j,ne){if(d=ne.getViewerPose(c||s),g=ne,d!==null){const pe=d.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let ke=!1;pe.length!==N.cameras.length&&(N.cameras.length=0,ke=!0);for(let We=0;We<pe.length;We++){const je=pe[We];let Qe=null;if(p!==null)Qe=p.getViewport(je);else{const it=h.getViewSubImage(u,je);Qe=it.viewport,We===0&&(e.setRenderTargetTextures(E,it.colorTexture,it.depthStencilTexture),e.setRenderTarget(E))}let ze=I[We];ze===void 0&&(ze=new gn,ze.layers.enable(We),ze.viewport=new Wt,I[We]=ze),ze.matrix.fromArray(je.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(je.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),We===0&&(N.matrix.copy(ze.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ke===!0&&N.cameras.push(ze)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const We=h.getDepthInformation(pe[0]);We&&We.isValid&&We.texture&&m.init(We,r.renderState)}if(ge&&ge.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let We=0;We<pe.length;We++){const je=pe[We].camera;if(je){let Qe=f[je];Qe||(Qe=new fp,f[je]=Qe);const ze=h.getCameraImage(je);Qe.sourceTexture=ze}}}}for(let pe=0;pe<y.length;pe++){const ke=R[pe],ge=y[pe];ke!==null&&ge!==void 0&&ge.update(ke,ne,c||s)}_e&&_e(j,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Xe=new vp;Xe.setAnimationLoop(Be),this.setAnimationLoop=function(j){_e=j},this.dispose=function(){}}}const br=new ii,vS=new Ht;function gS(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,cp(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,b,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),h(m,f)):f.isMeshPhongMaterial?(a(m,f),d(m,f)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),x(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,_,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Tn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Tn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),b=_.envMap,E=_.envMapRotation;b&&(m.envMap.value=b,br.copy(E),br.x*=-1,br.y*=-1,br.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),m.envMapRotation.value.setFromMatrix4(vS.makeRotationFromEuler(br)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Tn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xS(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){const E=b.program;i.uniformBlockBinding(_,E)}function c(_,b){let E=r[_.id];E===void 0&&(g(_),E=d(_),r[_.id]=E,_.addEventListener("dispose",m));const y=b.program;i.updateUBOMapping(_,y);const R=e.render.frame;a[_.id]!==R&&(u(_),a[_.id]=R)}function d(_){const b=h();_.__bindingPointIndex=b;const E=n.createBuffer(),y=_.__size,R=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,y,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function h(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const b=r[_.id],E=_.uniforms,y=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,C=E.length;R<C;R++){const L=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,w=L.length;M<w;M++){const I=L[M];if(p(I,R,M,y)===!0){const N=I.__offset,O=Array.isArray(I.value)?I.value:[I.value];let $=0;for(let z=0;z<O.length;z++){const V=O[z],H=x(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,N+$,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,$),$+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,b,E,y){const R=_.value,C=b+"_"+E;if(y[C]===void 0)return typeof R=="number"||typeof R=="boolean"?y[C]=R:y[C]=R.clone(),!0;{const L=y[C];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return y[C]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(_){const b=_.uniforms;let E=0;const y=16;for(let C=0,L=b.length;C<L;C++){const M=Array.isArray(b[C])?b[C]:[b[C]];for(let w=0,I=M.length;w<I;w++){const N=M[w],O=Array.isArray(N.value)?N.value:[N.value];for(let $=0,z=O.length;$<z;$++){const V=O[$],H=x(V),J=E%y,ae=J%H.boundary,ie=J+ae;E+=ae,ie!==0&&y-ie<H.storage&&(E+=y-ie),N.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=H.storage}}}const R=E%y;return R>0&&(E+=y-R),_.__size=E,_.__cache={},this}function x(_){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",_),b}function m(_){const b=_.target;b.removeEventListener("dispose",m);const E=s.indexOf(b.__bindingPointIndex);s.splice(E,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function f(){for(const _ in r)n.deleteBuffer(r[_]);s=[],r={},a={}}return{bind:l,update:c,dispose:f}}const _S=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ci=null;function bS(){return ci===null&&(ci=new hx(_S,16,16,da,Fn),ci.name="DFG_LUT",ci.minFilter=un,ci.magFilter=un,ci.wrapS=Li,ci.wrapT=Li,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}class Gd{constructor(e={}){const{canvas:t=Hg(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Nn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=s;const x=p,m=new Set([Rd,Ad,Td]),f=new Set([Nn,Si,ts,ns,Ed,wd]),_=new Uint32Array(4),b=new Int32Array(4);let E=null,y=null;const R=[],C=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let w=!1;this._outputColorSpace=Vn;let I=0,N=0,O=null,$=-1,z=null;const V=new Wt,H=new Wt;let J=null;const ae=new nt(0);let ie=0,de=t.width,Te=t.height,_e=1,Be=null,Xe=null;const j=new Wt(0,0,de,Te),ne=new Wt(0,0,de,Te);let pe=!1;const ke=new Fd;let ge=!1,Ge=!1;const dt=new Ht,We=new W,je=new Wt,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function it(){return O===null?_e:1}let F=i;function Ie(P,G){return t.getContext(P,G)}try{const P={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yd}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",st,!1),F===null){const G="webgl2";if(F=Ie(G,P),F===null)throw Ie(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw xt("WebGLRenderer: "+P.message),P}let Pe,He,re,D,S,U,q,Q,Y,oe,ee,me,Ue,se,fe,Ae,De,ve,et,k,xe,he,Re,ue;function te(){Pe=new by(F),Pe.init(),he=new uS(F,Pe),He=new uy(F,Pe,e,he),re=new cS(F,Pe),He.reversedDepthBuffer&&u&&re.buffers.depth.setReversed(!0),D=new My(F),S=new Y1,U=new dS(F,Pe,re,S,He,he,D),q=new fy(M),Q=new _y(M),Y=new Ax(F),Re=new cy(F,Y),oe=new yy(F,Y,D,Re),ee=new wy(F,oe,Y,D),et=new Ey(F,He,U),Ae=new hy(S),me=new q1(M,q,Q,Pe,He,Re,Ae),Ue=new gS(M,S),se=new K1,fe=new nS(Pe),ve=new ly(M,q,Q,re,ee,g,l),De=new oS(M,ee,He),ue=new xS(F,D,He,re),k=new dy(F,Pe,D),xe=new Sy(F,Pe,D),D.programs=me.programs,M.capabilities=He,M.extensions=Pe,M.properties=S,M.renderLists=se,M.shadowMap=De,M.state=re,M.info=D}te(),x!==Nn&&(L=new Ay(x,t.width,t.height,r,a));const ce=new mS(M,F);this.xr=ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const P=Pe.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Pe.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(P){P!==void 0&&(_e=P,this.setSize(de,Te,!1))},this.getSize=function(P){return P.set(de,Te)},this.setSize=function(P,G,Z=!0){if(ce.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}de=P,Te=G,t.width=Math.floor(P*_e),t.height=Math.floor(G*_e),Z===!0&&(t.style.width=P+"px",t.style.height=G+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(de*_e,Te*_e).floor()},this.setDrawingBufferSize=function(P,G,Z){de=P,Te=G,_e=Z,t.width=Math.floor(P*Z),t.height=Math.floor(G*Z),this.setViewport(0,0,P,G)},this.setEffects=function(P){if(x===Nn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let G=0;G<P.length;G++)if(P[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(V)},this.getViewport=function(P){return P.copy(j)},this.setViewport=function(P,G,Z,K){P.isVector4?j.set(P.x,P.y,P.z,P.w):j.set(P,G,Z,K),re.viewport(V.copy(j).multiplyScalar(_e).round())},this.getScissor=function(P){return P.copy(ne)},this.setScissor=function(P,G,Z,K){P.isVector4?ne.set(P.x,P.y,P.z,P.w):ne.set(P,G,Z,K),re.scissor(H.copy(ne).multiplyScalar(_e).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(P){re.setScissorTest(pe=P)},this.setOpaqueSort=function(P){Be=P},this.setTransparentSort=function(P){Xe=P},this.getClearColor=function(P){return P.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(P=!0,G=!0,Z=!0){let K=0;if(P){let X=!1;if(O!==null){const ye=O.texture.format;X=m.has(ye)}if(X){const ye=O.texture.type,Le=f.has(ye),Ee=ve.getClearColor(),Fe=ve.getClearAlpha(),Ve=Ee.r,Ze=Ee.g,qe=Ee.b;Le?(_[0]=Ve,_[1]=Ze,_[2]=qe,_[3]=Fe,F.clearBufferuiv(F.COLOR,0,_)):(b[0]=Ve,b[1]=Ze,b[2]=qe,b[3]=Fe,F.clearBufferiv(F.COLOR,0,b))}else K|=F.COLOR_BUFFER_BIT}G&&(K|=F.DEPTH_BUFFER_BIT),Z&&(K|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",st,!1),ve.dispose(),se.dispose(),fe.dispose(),S.dispose(),q.dispose(),Q.dispose(),ee.dispose(),Re.dispose(),ue.dispose(),me.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",kn),ce.removeEventListener("sessionend",si),Sn.stop()};function Oe(P){P.preventDefault(),Lu("WebGLRenderer: Context Lost."),w=!0}function rt(){Lu("WebGLRenderer: Context Restored."),w=!1;const P=D.autoReset,G=De.enabled,Z=De.autoUpdate,K=De.needsUpdate,X=De.type;te(),D.autoReset=P,De.enabled=G,De.autoUpdate=Z,De.needsUpdate=K,De.type=X}function st(P){xt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Nt(P){const G=P.target;G.removeEventListener("dispose",Nt),Yt(G)}function Yt(P){ri(P),S.remove(P)}function ri(P){const G=S.get(P).programs;G!==void 0&&(G.forEach(function(Z){me.releaseProgram(Z)}),P.isShaderMaterial&&me.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,Z,K,X,ye){G===null&&(G=Qe);const Le=X.isMesh&&X.matrixWorld.determinant()<0,Ee=jo(P,G,Z,K,X);re.setMaterial(K,Le);let Fe=Z.index,Ve=1;if(K.wireframe===!0){if(Fe=oe.getWireframeAttribute(Z),Fe===void 0)return;Ve=2}const Ze=Z.drawRange,qe=Z.attributes.position;let ot=Ze.start*Ve,Mt=(Ze.start+Ze.count)*Ve;ye!==null&&(ot=Math.max(ot,ye.start*Ve),Mt=Math.min(Mt,(ye.start+ye.count)*Ve)),Fe!==null?(ot=Math.max(ot,0),Mt=Math.min(Mt,Fe.count)):qe!=null&&(ot=Math.max(ot,0),Mt=Math.min(Mt,qe.count));const Ut=Mt-ot;if(Ut<0||Ut===1/0)return;Re.setup(X,K,Ee,Z,Fe);let Ft,wt=k;if(Fe!==null&&(Ft=Y.get(Fe),wt=xe,wt.setIndex(Ft)),X.isMesh)K.wireframe===!0?(re.setLineWidth(K.wireframeLinewidth*it()),wt.setMode(F.LINES)):wt.setMode(F.TRIANGLES);else if(X.isLine){let Ye=K.linewidth;Ye===void 0&&(Ye=1),re.setLineWidth(Ye*it()),X.isLineSegments?wt.setMode(F.LINES):X.isLineLoop?wt.setMode(F.LINE_LOOP):wt.setMode(F.LINE_STRIP)}else X.isPoints?wt.setMode(F.POINTS):X.isSprite&&wt.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)is("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Pe.get("WEBGL_multi_draw"))wt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ye=X._multiDrawStarts,yt=X._multiDrawCounts,vt=X._multiDrawCount,Je=Fe?Y.get(Fe).bytesPerElement:1,Ne=S.get(K).currentProgram.getUniforms();for(let Et=0;Et<vt;Et++)Ne.setValue(F,"_gl_DrawID",Et),wt.render(Ye[Et]/Je,yt[Et])}else if(X.isInstancedMesh)wt.renderInstances(ot,Ut,X.count);else if(Z.isInstancedBufferGeometry){const Ye=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,yt=Math.min(Z.instanceCount,Ye);wt.renderInstances(ot,Ut,yt)}else wt.render(ot,Ut)};function jn(P,G,Z){P.transparent===!0&&P.side===Gn&&P.forceSinglePass===!1?(P.side=Tn,P.needsUpdate=!0,Lr(P,G,Z),P.side=ar,P.needsUpdate=!0,Lr(P,G,Z),P.side=Gn):Lr(P,G,Z)}this.compile=function(P,G,Z=null){Z===null&&(Z=P),y=fe.get(Z),y.init(G),C.push(y),Z.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),P!==Z&&P.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),y.setupLights();const K=new Set;return P.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ye=X.material;if(ye)if(Array.isArray(ye))for(let Le=0;Le<ye.length;Le++){const Ee=ye[Le];jn(Ee,Z,X),K.add(Ee)}else jn(ye,Z,X),K.add(ye)}),y=C.pop(),K},this.compileAsync=function(P,G,Z=null){const K=this.compile(P,G,Z);return new Promise(X=>{function ye(){if(K.forEach(function(Le){S.get(Le).currentProgram.isReady()&&K.delete(Le)}),K.size===0){X(P);return}setTimeout(ye,10)}Pe.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Kn=null;function ai(P){Kn&&Kn(P)}function kn(){Sn.stop()}function si(){Sn.start()}const Sn=new vp;Sn.setAnimationLoop(ai),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(P){Kn=P,ce.setAnimationLoop(P),P===null?Sn.stop():Sn.start()},ce.addEventListener("sessionstart",kn),ce.addEventListener("sessionend",si),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const Z=ce.enabled===!0&&ce.isPresenting===!0,K=L!==null&&(O===null||Z)&&L.begin(M,O);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(G),G=ce.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,G,O),y=fe.get(P,C.length),y.init(G),C.push(y),dt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ke.setFromProjectionMatrix(dt,pi,G.reversedDepth),Ge=this.localClippingEnabled,ge=Ae.init(this.clippingPlanes,Ge),E=se.get(P,R.length),E.init(),R.push(E),ce.enabled===!0&&ce.isPresenting===!0){const Le=M.xr.getDepthSensingMesh();Le!==null&&oi(Le,G,-1/0,M.sortObjects)}oi(P,G,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(Be,Xe),ze=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ze&&ve.addToRenderList(E,P),this.info.render.frame++,ge===!0&&Ae.beginShadows();const X=y.state.shadowsArray;if(De.render(X,P,G),ge===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&L.hasRenderPass())===!1){const Le=E.opaque,Ee=E.transmissive;if(y.setupLights(),G.isArrayCamera){const Fe=G.cameras;if(Ee.length>0)for(let Ve=0,Ze=Fe.length;Ve<Ze;Ve++){const qe=Fe[Ve];dr(Le,Ee,P,qe)}ze&&ve.render(P);for(let Ve=0,Ze=Fe.length;Ve<Ze;Ve++){const qe=Fe[Ve];cr(E,P,qe,qe.viewport)}}else Ee.length>0&&dr(Le,Ee,P,G),ze&&ve.render(P),cr(E,P,G)}O!==null&&N===0&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O)),K&&L.end(M),P.isScene===!0&&P.onAfterRender(M,P,G),Re.resetDefaultState(),$=-1,z=null,C.pop(),C.length>0?(y=C[C.length-1],ge===!0&&Ae.setGlobalState(M.clippingPlanes,y.state.camera)):y=null,R.pop(),R.length>0?E=R[R.length-1]:E=null};function oi(P,G,Z,K){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)Z=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLight)y.pushLight(P),P.castShadow&&y.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ke.intersectsSprite(P)){K&&je.setFromMatrixPosition(P.matrixWorld).applyMatrix4(dt);const Le=ee.update(P),Ee=P.material;Ee.visible&&E.push(P,Le,Ee,Z,je.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ke.intersectsObject(P))){const Le=ee.update(P),Ee=P.material;if(K&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),je.copy(P.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),je.copy(Le.boundingSphere.center)),je.applyMatrix4(P.matrixWorld).applyMatrix4(dt)),Array.isArray(Ee)){const Fe=Le.groups;for(let Ve=0,Ze=Fe.length;Ve<Ze;Ve++){const qe=Fe[Ve],ot=Ee[qe.materialIndex];ot&&ot.visible&&E.push(P,Le,ot,Z,je.z,qe)}}else Ee.visible&&E.push(P,Le,Ee,Z,je.z,null)}}const ye=P.children;for(let Le=0,Ee=ye.length;Le<Ee;Le++)oi(ye[Le],G,Z,K)}function cr(P,G,Z,K){const{opaque:X,transmissive:ye,transparent:Le}=P;y.setupLightsView(Z),ge===!0&&Ae.setGlobalState(M.clippingPlanes,Z),K&&re.viewport(V.copy(K)),X.length>0&&zi(X,G,Z),ye.length>0&&zi(ye,G,Z),Le.length>0&&zi(Le,G,Z),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function dr(P,G,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[K.id]===void 0){const ot=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[K.id]=new An(1,1,{generateMipmaps:!0,type:ot?Fn:Nn,minFilter:wr,samples:He.samples,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace})}const ye=y.state.transmissionRenderTarget[K.id],Le=K.viewport||V;ye.setSize(Le.z*M.transmissionResolutionScale,Le.w*M.transmissionResolutionScale);const Ee=M.getRenderTarget(),Fe=M.getActiveCubeFace(),Ve=M.getActiveMipmapLevel();M.setRenderTarget(ye),M.getClearColor(ae),ie=M.getClearAlpha(),ie<1&&M.setClearColor(16777215,.5),M.clear(),ze&&ve.render(Z);const Ze=M.toneMapping;M.toneMapping=vi;const qe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),y.setupLightsView(K),ge===!0&&Ae.setGlobalState(M.clippingPlanes,K),zi(P,Z,K),U.updateMultisampleRenderTarget(ye),U.updateRenderTargetMipmap(ye),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Mt=0,Ut=G.length;Mt<Ut;Mt++){const Ft=G[Mt],{object:wt,geometry:Ye,material:yt,group:vt}=Ft;if(yt.side===Gn&&wt.layers.test(K.layers)){const Je=yt.side;yt.side=Tn,yt.needsUpdate=!0,bs(wt,Z,K,Ye,yt,vt),yt.side=Je,yt.needsUpdate=!0,ot=!0}}ot===!0&&(U.updateMultisampleRenderTarget(ye),U.updateRenderTargetMipmap(ye))}M.setRenderTarget(Ee,Fe,Ve),M.setClearColor(ae,ie),qe!==void 0&&(K.viewport=qe),M.toneMapping=Ze}function zi(P,G,Z){const K=G.isScene===!0?G.overrideMaterial:null;for(let X=0,ye=P.length;X<ye;X++){const Le=P[X],{object:Ee,geometry:Fe,group:Ve}=Le;let Ze=Le.material;Ze.allowOverride===!0&&K!==null&&(Ze=K),Ee.layers.test(Z.layers)&&bs(Ee,G,Z,Fe,Ze,Ve)}}function bs(P,G,Z,K,X,ye){P.onBeforeRender(M,G,Z,K,X,ye),P.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),X.onBeforeRender(M,G,Z,K,P,ye),X.transparent===!0&&X.side===Gn&&X.forceSinglePass===!1?(X.side=Tn,X.needsUpdate=!0,M.renderBufferDirect(Z,G,K,X,P,ye),X.side=ar,X.needsUpdate=!0,M.renderBufferDirect(Z,G,K,X,P,ye),X.side=Gn):M.renderBufferDirect(Z,G,K,X,P,ye),P.onAfterRender(M,G,Z,K,X,ye)}function Lr(P,G,Z){G.isScene!==!0&&(G=Qe);const K=S.get(P),X=y.state.lights,ye=y.state.shadowsArray,Le=X.state.version,Ee=me.getParameters(P,X.state,ye,G,Z),Fe=me.getProgramCacheKey(Ee);let Ve=K.programs;K.environment=P.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(P.isMeshStandardMaterial?Q:q).get(P.envMap||K.environment),K.envMapRotation=K.environment!==null&&P.envMap===null?G.environmentRotation:P.envMapRotation,Ve===void 0&&(P.addEventListener("dispose",Nt),Ve=new Map,K.programs=Ve);let Ze=Ve.get(Fe);if(Ze!==void 0){if(K.currentProgram===Ze&&K.lightsStateVersion===Le)return Aa(P,Ee),Ze}else Ee.uniforms=me.getUniforms(P),P.onBeforeCompile(Ee,M),Ze=me.acquireProgram(Ee,Fe),Ve.set(Fe,Ze),K.uniforms=Ee.uniforms;const qe=K.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(qe.clippingPlanes=Ae.uniform),Aa(P,Ee),K.needsLights=Zo(P),K.lightsStateVersion=Le,K.needsLights&&(qe.ambientLightColor.value=X.state.ambient,qe.lightProbe.value=X.state.probe,qe.directionalLights.value=X.state.directional,qe.directionalLightShadows.value=X.state.directionalShadow,qe.spotLights.value=X.state.spot,qe.spotLightShadows.value=X.state.spotShadow,qe.rectAreaLights.value=X.state.rectArea,qe.ltc_1.value=X.state.rectAreaLTC1,qe.ltc_2.value=X.state.rectAreaLTC2,qe.pointLights.value=X.state.point,qe.pointLightShadows.value=X.state.pointShadow,qe.hemisphereLights.value=X.state.hemi,qe.directionalShadowMap.value=X.state.directionalShadowMap,qe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,qe.spotShadowMap.value=X.state.spotShadowMap,qe.spotLightMatrix.value=X.state.spotLightMatrix,qe.spotLightMap.value=X.state.spotLightMap,qe.pointShadowMap.value=X.state.pointShadowMap,qe.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=Ze,K.uniformsList=null,Ze}function ys(P){if(P.uniformsList===null){const G=P.currentProgram.getUniforms();P.uniformsList=co.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function Aa(P,G){const Z=S.get(P);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function jo(P,G,Z,K,X){G.isScene!==!0&&(G=Qe),U.resetTextureUnits();const ye=G.fog,Le=K.isMeshStandardMaterial?G.environment:null,Ee=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ua,Fe=(K.isMeshStandardMaterial?Q:q).get(K.envMap||Le),Ve=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ze=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),qe=!!Z.morphAttributes.position,ot=!!Z.morphAttributes.normal,Mt=!!Z.morphAttributes.color;let Ut=vi;K.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ut=M.toneMapping);const Ft=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,wt=Ft!==void 0?Ft.length:0,Ye=S.get(K),yt=y.state.lights;if(ge===!0&&(Ge===!0||P!==z)){const It=P===z&&K.id===$;Ae.setState(K,P,It)}let vt=!1;K.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==yt.state.version||Ye.outputColorSpace!==Ee||X.isBatchedMesh&&Ye.batching===!1||!X.isBatchedMesh&&Ye.batching===!0||X.isBatchedMesh&&Ye.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ye.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ye.instancing===!1||!X.isInstancedMesh&&Ye.instancing===!0||X.isSkinnedMesh&&Ye.skinning===!1||!X.isSkinnedMesh&&Ye.skinning===!0||X.isInstancedMesh&&Ye.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ye.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ye.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ye.instancingMorph===!1&&X.morphTexture!==null||Ye.envMap!==Fe||K.fog===!0&&Ye.fog!==ye||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ae.numPlanes||Ye.numIntersection!==Ae.numIntersection)||Ye.vertexAlphas!==Ve||Ye.vertexTangents!==Ze||Ye.morphTargets!==qe||Ye.morphNormals!==ot||Ye.morphColors!==Mt||Ye.toneMapping!==Ut||Ye.morphTargetsCount!==wt)&&(vt=!0):(vt=!0,Ye.__version=K.version);let Je=Ye.currentProgram;vt===!0&&(Je=Lr(K,G,X));let Ne=!1,Et=!1,Gt=!1;const ht=Je.getUniforms(),Pt=Ye.uniforms;if(re.useProgram(Je.program)&&(Ne=!0,Et=!0,Gt=!0),K.id!==$&&($=K.id,Et=!0),Ne||z!==P){re.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),ht.setValue(F,"projectionMatrix",P.projectionMatrix),ht.setValue(F,"viewMatrix",P.matrixWorldInverse);const Lt=ht.map.cameraPosition;Lt!==void 0&&Lt.setValue(F,We.setFromMatrixPosition(P.matrixWorld)),He.logarithmicDepthBuffer&&ht.setValue(F,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ht.setValue(F,"isOrthographic",P.isOrthographicCamera===!0),z!==P&&(z=P,Et=!0,Gt=!0)}if(Ye.needsLights&&(yt.state.directionalShadowMap.length>0&&ht.setValue(F,"directionalShadowMap",yt.state.directionalShadowMap,U),yt.state.spotShadowMap.length>0&&ht.setValue(F,"spotShadowMap",yt.state.spotShadowMap,U),yt.state.pointShadowMap.length>0&&ht.setValue(F,"pointShadowMap",yt.state.pointShadowMap,U)),X.isSkinnedMesh){ht.setOptional(F,X,"bindMatrix"),ht.setOptional(F,X,"bindMatrixInverse");const It=X.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ht.setValue(F,"boneTexture",It.boneTexture,U))}X.isBatchedMesh&&(ht.setOptional(F,X,"batchingTexture"),ht.setValue(F,"batchingTexture",X._matricesTexture,U),ht.setOptional(F,X,"batchingIdTexture"),ht.setValue(F,"batchingIdTexture",X._indirectTexture,U),ht.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&ht.setValue(F,"batchingColorTexture",X._colorsTexture,U));const Ot=Z.morphAttributes;if((Ot.position!==void 0||Ot.normal!==void 0||Ot.color!==void 0)&&et.update(X,Z,Je),(Et||Ye.receiveShadow!==X.receiveShadow)&&(Ye.receiveShadow=X.receiveShadow,ht.setValue(F,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Pt.envMap.value=Fe,Pt.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&G.environment!==null&&(Pt.envMapIntensity.value=G.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=bS()),Et&&(ht.setValue(F,"toneMappingExposure",M.toneMappingExposure),Ye.needsLights&&Ko(Pt,Gt),ye&&K.fog===!0&&Ue.refreshFogUniforms(Pt,ye),Ue.refreshMaterialUniforms(Pt,K,_e,Te,y.state.transmissionRenderTarget[P.id]),co.upload(F,ys(Ye),Pt,U)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(co.upload(F,ys(Ye),Pt,U),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ht.setValue(F,"center",X.center),ht.setValue(F,"modelViewMatrix",X.modelViewMatrix),ht.setValue(F,"normalMatrix",X.normalMatrix),ht.setValue(F,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const It=K.uniformsGroups;for(let Lt=0,Mn=It.length;Lt<Mn;Lt++){const tn=It[Lt];ue.update(tn,Je),ue.bind(tn,Je)}}return Je}function Ko(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function Zo(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(P,G,Z){const K=S.get(P);K.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),S.get(P.texture).__webglTexture=G,S.get(P.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Z,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,G){const Z=S.get(P);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0};const Ss=F.createFramebuffer();this.setRenderTarget=function(P,G=0,Z=0){O=P,I=G,N=Z;let K=null,X=!1,ye=!1;if(P){const Ee=S.get(P);if(Ee.__useDefaultFramebuffer!==void 0){re.bindFramebuffer(F.FRAMEBUFFER,Ee.__webglFramebuffer),V.copy(P.viewport),H.copy(P.scissor),J=P.scissorTest,re.viewport(V),re.scissor(H),re.setScissorTest(J),$=-1;return}else if(Ee.__webglFramebuffer===void 0)U.setupRenderTarget(P);else if(Ee.__hasExternalTextures)U.rebindTextures(P,S.get(P.texture).__webglTexture,S.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ze=P.depthTexture;if(Ee.__boundDepthTexture!==Ze){if(Ze!==null&&S.has(Ze)&&(P.width!==Ze.image.width||P.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(P)}}const Fe=P.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ye=!0);const Ve=S.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ve[G])?K=Ve[G][Z]:K=Ve[G],X=!0):P.samples>0&&U.useMultisampledRTT(P)===!1?K=S.get(P).__webglMultisampledFramebuffer:Array.isArray(Ve)?K=Ve[Z]:K=Ve,V.copy(P.viewport),H.copy(P.scissor),J=P.scissorTest}else V.copy(j).multiplyScalar(_e).floor(),H.copy(ne).multiplyScalar(_e).floor(),J=pe;if(Z!==0&&(K=Ss),re.bindFramebuffer(F.FRAMEBUFFER,K)&&re.drawBuffers(P,K),re.viewport(V),re.scissor(H),re.setScissorTest(J),X){const Ee=S.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ee.__webglTexture,Z)}else if(ye){const Ee=G;for(let Fe=0;Fe<P.textures.length;Fe++){const Ve=S.get(P.textures[Fe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Fe,Ve.__webglTexture,Z,Ee)}}else if(P!==null&&Z!==0){const Ee=S.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ee.__webglTexture,Z)}$=-1},this.readRenderTargetPixels=function(P,G,Z,K,X,ye,Le,Ee=0){if(!(P&&P.isWebGLRenderTarget)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=S.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){re.bindFramebuffer(F.FRAMEBUFFER,Fe);try{const Ve=P.textures[Ee],Ze=Ve.format,qe=Ve.type;if(!He.textureFormatReadable(Ze)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(qe)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-K&&Z>=0&&Z<=P.height-X&&(P.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ee),F.readPixels(G,Z,K,X,he.convert(Ze),he.convert(qe),ye))}finally{const Ve=O!==null?S.get(O).__webglFramebuffer:null;re.bindFramebuffer(F.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(P,G,Z,K,X,ye,Le,Ee=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=S.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe)if(G>=0&&G<=P.width-K&&Z>=0&&Z<=P.height-X){re.bindFramebuffer(F.FRAMEBUFFER,Fe);const Ve=P.textures[Ee],Ze=Ve.format,qe=Ve.type;if(!He.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ot),F.bufferData(F.PIXEL_PACK_BUFFER,ye.byteLength,F.STREAM_READ),P.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ee),F.readPixels(G,Z,K,X,he.convert(Ze),he.convert(qe),0);const Mt=O!==null?S.get(O).__webglFramebuffer:null;re.bindFramebuffer(F.FRAMEBUFFER,Mt);const Ut=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Vg(F,Ut,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ot),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ye),F.deleteBuffer(ot),F.deleteSync(Ut),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,G=null,Z=0){const K=Math.pow(2,-Z),X=Math.floor(P.image.width*K),ye=Math.floor(P.image.height*K),Le=G!==null?G.x:0,Ee=G!==null?G.y:0;U.setTexture2D(P,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,Le,Ee,X,ye),re.unbindTexture()};const Ms=F.createFramebuffer(),Jo=F.createFramebuffer();this.copyTextureToTexture=function(P,G,Z=null,K=null,X=0,ye=null){ye===null&&(X!==0?(is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=X,X=0):ye=0);let Le,Ee,Fe,Ve,Ze,qe,ot,Mt,Ut;const Ft=P.isCompressedTexture?P.mipmaps[ye]:P.image;if(Z!==null)Le=Z.max.x-Z.min.x,Ee=Z.max.y-Z.min.y,Fe=Z.isBox3?Z.max.z-Z.min.z:1,Ve=Z.min.x,Ze=Z.min.y,qe=Z.isBox3?Z.min.z:0;else{const Ot=Math.pow(2,-X);Le=Math.floor(Ft.width*Ot),Ee=Math.floor(Ft.height*Ot),P.isDataArrayTexture?Fe=Ft.depth:P.isData3DTexture?Fe=Math.floor(Ft.depth*Ot):Fe=1,Ve=0,Ze=0,qe=0}K!==null?(ot=K.x,Mt=K.y,Ut=K.z):(ot=0,Mt=0,Ut=0);const wt=he.convert(G.format),Ye=he.convert(G.type);let yt;G.isData3DTexture?(U.setTexture3D(G,0),yt=F.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(U.setTexture2DArray(G,0),yt=F.TEXTURE_2D_ARRAY):(U.setTexture2D(G,0),yt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const vt=F.getParameter(F.UNPACK_ROW_LENGTH),Je=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ne=F.getParameter(F.UNPACK_SKIP_PIXELS),Et=F.getParameter(F.UNPACK_SKIP_ROWS),Gt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ft.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ft.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ve),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ze),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qe);const ht=P.isDataArrayTexture||P.isData3DTexture,Pt=G.isDataArrayTexture||G.isData3DTexture;if(P.isDepthTexture){const Ot=S.get(P),It=S.get(G),Lt=S.get(Ot.__renderTarget),Mn=S.get(It.__renderTarget);re.bindFramebuffer(F.READ_FRAMEBUFFER,Lt.__webglFramebuffer),re.bindFramebuffer(F.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let tn=0;tn<Fe;tn++)ht&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,S.get(P).__webglTexture,X,qe+tn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,S.get(G).__webglTexture,ye,Ut+tn)),F.blitFramebuffer(Ve,Ze,Le,Ee,ot,Mt,Le,Ee,F.DEPTH_BUFFER_BIT,F.NEAREST);re.bindFramebuffer(F.READ_FRAMEBUFFER,null),re.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||P.isRenderTargetTexture||S.has(P)){const Ot=S.get(P),It=S.get(G);re.bindFramebuffer(F.READ_FRAMEBUFFER,Ms),re.bindFramebuffer(F.DRAW_FRAMEBUFFER,Jo);for(let Lt=0;Lt<Fe;Lt++)ht?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ot.__webglTexture,X,qe+Lt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ot.__webglTexture,X),Pt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.__webglTexture,ye,Ut+Lt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,It.__webglTexture,ye),X!==0?F.blitFramebuffer(Ve,Ze,Le,Ee,ot,Mt,Le,Ee,F.COLOR_BUFFER_BIT,F.NEAREST):Pt?F.copyTexSubImage3D(yt,ye,ot,Mt,Ut+Lt,Ve,Ze,Le,Ee):F.copyTexSubImage2D(yt,ye,ot,Mt,Ve,Ze,Le,Ee);re.bindFramebuffer(F.READ_FRAMEBUFFER,null),re.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Pt?P.isDataTexture||P.isData3DTexture?F.texSubImage3D(yt,ye,ot,Mt,Ut,Le,Ee,Fe,wt,Ye,Ft.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(yt,ye,ot,Mt,Ut,Le,Ee,Fe,wt,Ft.data):F.texSubImage3D(yt,ye,ot,Mt,Ut,Le,Ee,Fe,wt,Ye,Ft):P.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ye,ot,Mt,Le,Ee,wt,Ye,Ft.data):P.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ye,ot,Mt,Ft.width,Ft.height,wt,Ft.data):F.texSubImage2D(F.TEXTURE_2D,ye,ot,Mt,Le,Ee,wt,Ye,Ft);F.pixelStorei(F.UNPACK_ROW_LENGTH,vt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Je),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),F.pixelStorei(F.UNPACK_SKIP_ROWS,Et),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Gt),ye===0&&G.generateMipmaps&&F.generateMipmap(yt),re.unbindTexture()},this.initRenderTarget=function(P){S.get(P).__webglFramebuffer===void 0&&U.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?U.setTextureCube(P,0):P.isData3DTexture?U.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?U.setTexture2DArray(P,0):U.setTexture2D(P,0),re.unbindTexture()},this.resetState=function(){I=0,N=0,O=null,re.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}const uo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class _s{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const yS=new Hd(-1,1,1,-1,0,1);class SS extends Bn{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}}const MS=new SS;class yp{constructor(e){this._mesh=new rn(MS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ES extends _s{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof an?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Po.clone(e.uniforms),this.material=new an({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new yp(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Eh extends _s{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class wS extends _s{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class TS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ke);this._width=i.width,this._height=i.height,t=new An(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ES(uo),this.copyPass.material.blending=mi,this.clock=new Vd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Eh!==void 0&&(s instanceof Eh?i=!0:s instanceof wS&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class AS extends _s{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new nt}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}}const RS={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new nt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class pa extends _s{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ke(e.x,e.y):new Ke(256,256),this.clearColor=new nt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new An(a,s,{type:Fn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new An(a,s,{type:Fn});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const u=new An(a,s,{type:Fn});u.texture.name="UnrealBloomPass.v"+d,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),a=Math.round(a/2),s=Math.round(s/2)}const o=RS;this.highPassUniforms=Po.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new an({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Ke(1/a,1/s),a=Math.round(a/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Po.clone(uo.uniforms),this.blendMaterial=new an({uniforms:this.copyUniforms,vertexShader:uo.vertexShader,fragmentShader:uo.fragmentShader,premultipliedAlpha:!0,blending:cc,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new nt,this._oldClearAlpha=1,this._basic=new ha,this._fsQuad=new yp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,r),this.renderTargetsVertical[a].setSize(i,r),this.separableBlurMaterials[a].uniforms.invSize.value=new Ke(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=pa.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=pa.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);return new an({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ke(.5,.5)},direction:{value:new Ke(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new an({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}pa.BlurDirectionX=new Ke(1,0);pa.BlurDirectionY=new Ke(0,1);var CS=be('<canvas class="fixed inset-0 w-full h-full pointer-events-none z-0" style="background-color: #000000;"></canvas>');function PS(n,e){Rt(e,!1);let t=ct(),i,r,a,s,o,l;const c={void:new nt("#000000"),purple:new nt("#240046"),cyan:new nt("#003F4C")};Yn(()=>{if(!T(t)||navigator.webdriver)return;let h=!1,u,p;const g=new wx,x=new Ke,m=()=>{!a||!i||!o||(a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(window.innerWidth,window.innerHeight))},f=_=>{if(!p||!a||!s)return;x.x=_.clientX/window.innerWidth*2-1,x.y=-(_.clientY/window.innerHeight)*2+1,g.setFromCamera(x,a);const b=g.intersectObject(p);if(b.length>0){const E=b[0].uv;E&&(s.uniforms.uHover.value.set(E.x,E.y),s.uniforms.uHoverState.value=1)}else s.uniforms.uHoverState.value=0};return requestAnimationFrame(()=>{if(h)return;r=new Ud,r.background=c.void,a=new gn(75,window.innerWidth/window.innerHeight,.1,1e3),a.position.set(0,-10,10),a.lookAt(0,0,0),i=new Gd({canvas:T(t),antialias:!0,alpha:!0}),i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),u=new xs(60,60,128,128),s=new an({wireframe:!0,uniforms:{uTime:{value:0},uColorStart:{value:new nt("#5a189a")},uColorEnd:{value:new nt("#00b4d8")},uHover:{value:new Ke(.5,.5)},uHoverState:{value:0}},vertexShader:`
            uniform float uTime;
            uniform vec2 uHover;
            uniform float uHoverState;
            varying vec2 vUv;
            varying float vElevation;
    
            // Classic Perlin 3D Noise 
            // by Stefan Gustavson
            //
            vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
            vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
            vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
    
            float cnoise(vec3 P){
              vec3 Pi0 = floor(P); // Integer part for indexing
              vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
              Pi0 = mod(Pi0, 289.0);
              Pi1 = mod(Pi1, 289.0);
              vec3 Pf0 = fract(P); // Fractional part for interpolation
              vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
              vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
              vec4 iy = vec4(Pi0.y, Pi0.y, Pi1.y, Pi1.y);
              vec4 iz0 = Pi0.zzzz;
              vec4 iz1 = Pi1.zzzz;
    
              vec4 ixy = permute(permute(ix) + iy);
              vec4 ixy0 = permute(ixy + iz0);
              vec4 ixy1 = permute(ixy + iz1);
    
              vec4 gx0 = ixy0 / 7.0;
              vec4 gy0 = fract(floor(gx0) * 1.0 / 7.0) - 0.5;
              gx0 = fract(gx0);
              vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
              vec4 sz0 = step(gz0, vec4(0.0));
              gx0 -= sz0 * (step(0.0, gx0) - 0.5);
              gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    
              vec4 gx1 = ixy1 / 7.0;
              vec4 gy1 = fract(floor(gx1) * 1.0 / 7.0) - 0.5;
              gx1 = fract(gx1);
              vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
              vec4 sz1 = step(gz1, vec4(0.0));
              gx1 -= sz1 * (step(0.0, gx1) - 0.5);
              gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    
              vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
              vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
              vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
              vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
              vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
              vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
              vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
              vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
    
              vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
              g000 *= norm0.x;
              g010 *= norm0.y;
              g100 *= norm0.z;
              g110 *= norm0.w;
              vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
              g001 *= norm1.x;
              g011 *= norm1.y;
              g101 *= norm1.z;
              g111 *= norm1.w;
    
              float n000 = dot(g000, Pf0);
              float n100 = dot(g100, vec3(Pf1.x, Pf0.y, Pf0.z));
              float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
              float n110 = dot(g110, vec3(Pf1.x, Pf1.y, Pf0.z));
              float n001 = dot(g001, vec3(Pf0.x, Pf0.y, Pf1.z));
              float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
              float n011 = dot(g011, vec3(Pf0.x, Pf1.y, Pf1.z));
              float n111 = dot(g111, Pf1);
    
              vec3 fade_xyz = fade(Pf0);
              vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
              vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
              float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
              return 2.2 * n_xyz;
            }
    
            void main() {
                vUv = uv;
                vec3 pos = position;
                
                // Create the animated topography
                float noiseFreq = 0.4; 
                float noiseAmp = 2.5; 
                // Slowed down animation (uTime * 0.05 instead of 0.3)
                float elevation = cnoise(vec3(pos.x * noiseFreq + uTime * 0.05, pos.y * noiseFreq, 0.0)) * noiseAmp;
                
                // Mouse Gravity Interaction
                // Calculate distance to mouse position (using UVs for simplicity in mapping)
                float dist = distance(vUv, uHover);
                
                // Create a gravity well (depression) only when hovering
                // We use a Gaussian curve for the well
                // Reduced area (0.3 -> 0.1) and intensity (5.0 -> 1.0)
                float gravity = (1.0 - smoothstep(0.0, 0.1, dist)) * 1.0 * uHoverState;
                
                // Apply gravity (downwards pull)
                elevation -= gravity;
    
                pos.z += elevation;
                vElevation = elevation;
    
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `,fragmentShader:`
            uniform vec3 uColorStart;
            uniform vec3 uColorEnd;
            varying vec2 vUv;
            varying float vElevation;
    
            void main() {
                // Gradient from Left to Right
                vec3 mixedColor = mix(uColorStart, uColorEnd, vUv.x);
                
                // Peak brightness logic
                float peaks = smoothstep(1.5, 3.5, vElevation); 
    
                // Add Starlight White to peaks - subtle
                mixedColor += vec3(peaks * 0.3);
    
                // Alpha Mask - Make it clear in the center for text, visible on edges/bottom
                // We want a "Floor" effect, so meaningful opacity at higher YUV or specific areas?
                // Actually let's just make it a global gentle fade with a hole in the absolute center if needed.
                // Current Approach: Global low opacity + distance fade.
                
                float dist = distance(vUv, vec2(0.5));
                // 0 at center, 0.7 at corners.
                // We want center to be visible but DIM.
                
                float alpha = smoothstep(0.0, 0.8, 1.0 - dist); // Edges fade out
                
                // Final opacity modifier: VERY LOW
                gl_FragColor = vec4(mixedColor, alpha * 0.15);
            }
          `,transparent:!0,side:Gn}),p=new rn(u,s),p.rotation.x=-Math.PI/2-.4,r.add(p);const _=new AS(r,a),b=new pa(new Ke(window.innerWidth,window.innerHeight),.2,.5,.2);o=new TS(i),o.addPass(_),o.addPass(b);const E=new Vd,y=()=>{l=requestAnimationFrame(y);const R=E.getElapsedTime();s.uniforms.uTime.value=R;const C=window.scrollY;p&&(p.rotation.x=-Math.PI/2-.4-C*2e-4),o.render()};y(),window.addEventListener("resize",m),window.addEventListener("mousemove",f)}),()=>{h=!0,window.removeEventListener("resize",m),window.removeEventListener("mousemove",f),l&&cancelAnimationFrame(l),u&&u.dispose(),s&&s.dispose(),i&&i.dispose(),o&&o.dispose()}}),Vt();var d=CS();ra(d,h=>Ce(t,h),()=>T(t)),le(n,d),Ct()}var IS=be("<button> </button>"),LS=be('<div class="flex flex-wrap justify-center gap-x-4 gap-y-2 font-mono text-xs"></div>');function ad(n,e){Rt(e,!1);const[t,i]=sn(),r=()=>Kt(rr,"$locale",t),a=()=>Kt(On,"$t",t),s=ct(),o=[{code:"en",name:"English"},{code:"pt",name:"Português"}];let l=Ki(e,"only",8,void 0);function c(h){p0(rr,h),localStorage.setItem("preferred-locale",h)}bi(()=>bo(l()),()=>{Ce(s,l()?o.filter(h=>l().includes(h.code)):o)}),Ir(),Vt();var d=LS();zt(d,5,()=>T(s),$t,(h,u)=>{var p=IS(),g=v(p);$e(x=>{Se(p,"aria-label",x),Me(p,1,`hover:text-accent transition-colors duration-200 ${T(u).code===r()?"text-accent border-b border-accent active":"text-white/50"}`),B(g,T(u).name)},[()=>a()("common.change_language",{values:{name:T(u).name}})],ft),kt("click",p,()=>c(T(u).code)),le(h,p)}),le(n,d),Ct(),i()}const Wd="https://sized-wonder-burner-juice.trycloudflare.com",as="Quintuple9-Verse7-Outmatch4-Daintily2-Affidavit2",DS=!0,sd=["BitgetTicker/BTCUSDT","BitgetTicker/XAUUSDT","CandleCollector/btcusdt/1m","CandleCollector/btcusdt/5m","CandleCollector/btcusdt/15m","CandleCollector/btcusdt/1h","CandleCollector/btcusdt/4h","CandleCollector/btcusdt/1d","CandleCollector/btcusdt/1w","CandleCollector/xauusdt/1m","CandleCollector/xauusdt/5m","CandleCollector/xauusdt/15m","CandleCollector/xauusdt/1h","CandleCollector/xauusdt/4h","CandleCollector/xauusdt/1d","CandleCollector/xauusdt/1w","OKXLiquidationCollector","BitgetLiquidation","FundingRate/btcusdt","FundingRate/xauusdt","OpenInterest/btcusdt","OpenInterest/xauusdt","AggTradeBybit/BTCUSDT","AggTradeOKX/BTCUSDT"],hi=new Set,NS=[{label:"5m",windowMs:5*60*1e3},{label:"1h",windowMs:60*60*1e3},{label:"1d",windowMs:24*60*60*1e3}];function US(n){const e=n.reduce((s,o)=>Math.max(s,o.ts),0)||Date.now(),t=Date.now()-e,i=Date.now(),r=n.map(s=>({...s,ts:s.ts+t})),a=NS.map(({label:s,windowMs:o})=>{var p;const l=i-o;let c=0,d=0;for(const g of r)g.symbol!=="BTCUSDT"||g.ts<l||(((p=g.side)==null?void 0:p.toUpperCase())==="BUY"?c+=g.usd_value:d+=g.usd_value);const h=c-d,u=d>0?c/d:c>0?c:1;return{label:s,buy_usd:c,sell_usd:d,delta:h,ratio:u}});return a.every(s=>s.buy_usd===0&&s.sell_usd===0)?null:{symbol:"BTCUSDT",windows:a,sources:["liquidations-history"],updated_at:i}}const Wn=us({enabled:DS,natsOk:null,streamsOnline:0,streamsTotal:0,engineRunning:!1,btcPrice:0,btcOI:0,btcFunding:0,btcNextFunding:0,btcUpdatedAt:0,recentLiqs:[],latestWhaleLiq:null,rawLiquidation:null,btcAggression:null});let ja=[],od=[],Sp,Mp,ss=!1,ld=!1,qa=!1;function FS(n){return n.replace(/^https/,"wss").replace(/^http/,"ws")}async function wh(){try{const t=(await(await fetch(`${Wd}/api/health`,{headers:as?{Authorization:`Bearer ${as}`}:{}})).json()).status==="ok";t&&hi.size===0&&sd.forEach(i=>hi.add(i)),Wn.update(i=>({...i,natsOk:t,engineRunning:t,streamsOnline:t?hi.size:0,streamsTotal:t?Math.max(i.streamsTotal,hi.size,sd.length):0}))}catch{Wn.update(n=>({...n,natsOk:!1,engineRunning:!1}))}}function Ya(n,e,t={}){if(ss)return;const i=t.retry??!0,a=`${n.includes("?")?"&":"?"}token=${encodeURIComponent(as)}`,s=`${FS(Wd)}${n}${a}`;console.log(`[Telemetry] Connecting WS to: ${n}`);const o=new WebSocket(s);ja.push(o),o.onopen=()=>{console.log(`[Telemetry] WS connected: ${n}`)},o.onmessage=l=>{try{const c=JSON.parse(l.data);e(c)}catch(c){console.error(`[Telemetry] JSON parse error on ${n}:`,c)}},o.onerror=l=>{console.error(`[Telemetry] WS error on ${n}:`,l)},o.onclose=()=>{if(console.log(`[Telemetry] WS closed: ${n}`),ja=ja.filter(l=>l!==o),!ss&&i){const l=setTimeout(()=>Ya(n,e),4e3);od.push(l)}}}function OS(){ld||(ld=!0,ss=!1,qa=!1,hi.clear(),Ya("/ws/status",n=>{const e=n;e.stream&&(e.status==="connected"?hi.add(e.stream):(e.status==="disconnected"||e.status==="reconnecting")&&hi.delete(e.stream),Wn.update(t=>{const i=Math.max(t.streamsTotal,hi.size,sd.length);return{...t,streamsOnline:hi.size,streamsTotal:i}}))}),Ya("/ws/market_status",n=>{const e=n;e.symbol==="BTCUSDT"&&Wn.update(t=>({...t,btcPrice:e.mark??0,btcOI:e.oi??0,btcFunding:e.funding??0,btcNextFunding:e.next_funding??0,btcUpdatedAt:Date.now()}))}),Ya("/ws/liquidations",n=>{var t;const e=n;(t=e.symbol)!=null&&t.startsWith("BTC")&&Wn.update(i=>{const r=[e,...i.recentLiqs].slice(0,6),a=e.usd_value>=1e4;return{...i,recentLiqs:r,latestWhaleLiq:a?e:i.latestWhaleLiq,rawLiquidation:e}})}),Ya("/ws/aggression?symbol=BTCUSDT",n=>{qa=!0;const e=n;e.symbol==="BTCUSDT"&&Wn.update(t=>({...t,btcAggression:e}))}),wh(),Sp=setInterval(wh,3e4),Mp=setTimeout(async()=>{if(!(qa||ss))try{const e=await(await fetch(`${Wd}/api/liquidations/BTCUSDT?hours=24`,{headers:as?{Authorization:`Bearer ${as}`}:{}})).json();if(!qa&&Array.isArray(e)){const t=US(e);t&&Wn.update(i=>i.btcAggression&&i.btcAggression.sources[0]!=="liquidations-history"?i:{...i,btcAggression:t})}}catch(n){console.error("[Telemetry] Failed to build aggression fallback:",n)}},1500))}function BS(){ss=!0,ld=!1,qa=!1,hi.clear(),ja.forEach(n=>n.close()),ja=[],od.forEach(clearTimeout),od=[],clearInterval(Sp),clearTimeout(Mp)}var kS=be('<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF94] opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-[#00FF94]"></span>',1),zS=be('<span class="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>'),HS=be('<span class="relative inline-flex rounded-full h-2 w-2 bg-white/40"></span>'),VS=be('<div class="absolute right-0 mt-3 w-60 origin-top-right rounded-sm border border-white/10 bg-black/90 p-4 shadow-[0_4px_30px_rgba(0,0,0,0.85)] border-l-2 border-l-accent z-50 text-xs space-y-3"><div class="font-bold text-[9px] text-white/40 tracking-[0.2em] uppercase border-b border-white/5 pb-2">:: TELEMETRY DIAGNOSTICS</div> <div class="space-y-2.5"><div class="flex items-center justify-between"><span class="text-white/50 uppercase text-[10px]">NATS Cluster</span> <span> </span></div> <div class="flex items-center justify-between"><span class="text-white/50 uppercase text-[10px]">Data Streams</span> <span class="font-bold text-white/80"> </span></div> <div class="flex items-center justify-between"><span class="text-white/50 uppercase text-[10px]">Ark Engine</span> <span> </span></div> <div class="flex items-center justify-between"><span class="text-white/50 uppercase text-[10px]">Secure Tunnel</span> <span> </span></div></div> <div class="border-t border-white/5 pt-2 flex items-center justify-between text-[9px] text-white/30 font-mono"><span>HOST: VPS-NEXUS-01</span> <span>v1.2.4</span></div></div>'),GS=be('<div class="relative inline-block text-left font-mono pointer-events-auto"><button class="flex items-center gap-2 focus:outline-none cursor-pointer group" aria-label="Toggle telemetry details"><div class="relative flex h-2 w-2"><!></div> <span class="text-xs transition-colors duration-300 text-white/50 group-hover:text-accent font-semibold uppercase tracking-wider"><!></span> <span class="text-[9px] text-white/30 group-hover:text-white/60 transition-transform duration-200 block">▼</span></button> <!></div>');function Th(n,e){Rt(e,!1);const[t,i]=sn(),r=()=>Kt(Wn,"$telemetry",t);let a=ct(!1),s=ct();function o(){Ce(a,!T(a))}function l(){Ce(a,!1)}function c(p){T(a)&&T(s)&&!T(s).contains(p.target)&&l()}Yn(()=>(document.addEventListener("click",c,!0),()=>{document.removeEventListener("click",c,!0)})),Vt();var d=or(),h=Cn(d);{var u=p=>{var g=GS(),x=v(g),m=v(x),f=v(m);{var _=I=>{var N=kS();le(I,N)},b=(I,N)=>{{var O=z=>{var V=zS();le(z,V)},$=z=>{var V=HS();le(z,V)};tt(I,z=>{r().natsOk===!1?z(O):z($,!1)},N)}};tt(f,I=>{r().natsOk===!0?I(_):I(b,!1)})}var E=A(m,2),y=v(E);{var R=I=>{var N=Ni("SYSTEMS ACTIVE");le(I,N)},C=(I,N)=>{{var O=z=>{var V=Ni("OFFLINE");le(z,V)},$=z=>{var V=Ni("CONNECTING...");le(z,V)};tt(I,z=>{r().natsOk===!1?z(O):z($,!1)},N)}};tt(y,I=>{r().natsOk===!0?I(R):I(C,!1)})}var L=A(E,2),M=A(x,2);{var w=I=>{var N=VS(),O=A(v(N),2),$=v(O),z=A(v($),2),V=v(z),H=A($,2),J=A(v(H),2),ae=v(J),ie=A(H,2),de=A(v(ie),2),Te=v(de),_e=A(ie,2),Be=A(v(_e),2),Xe=v(Be);$e(()=>{Me(z,1,`font-bold ${r().natsOk===!0?"text-[#00FF94]":r().natsOk===!1?"text-rose-400":"text-white/40"}`),B(V,r().natsOk===!0?"ONLINE":r().natsOk===!1?"OFFLINE":"CONNECTING"),B(ae,r().streamsOnline>0?`${r().streamsOnline} / ${r().streamsTotal} ACTIVE`:"—"),Me(de,1,`font-bold ${r().engineRunning?"text-[#00FF94]":"text-white/40"}`),B(Te,r().engineRunning?"RUNNING":"STANDBY"),Me(Be,1,`font-bold ${r().natsOk!==null?"text-[#00FF94]":"text-white/40"}`),B(Xe,r().natsOk!==null?"ENCRYPTED":"—")}),le(I,N)};tt(M,I=>{T(a)&&I(w)})}ra(g,I=>Ce(s,I),()=>T(s)),$e(()=>_n(L,`transform: ${T(a)?"rotate(180deg)":"rotate(0)"}`)),kt("click",x,o),le(p,g)};tt(h,p=>{r().enabled&&p(u)})}le(n,d),Ct(),i()}var WS=be('<section id="hero" class="h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden"><div class="absolute top-24 md:top-8 left-1/2 -translate-x-1/2 z-20"><!></div> <div class="hidden md:flex absolute top-8 right-8 items-center gap-6 font-mono text-xs"><a href="#/terminal" class="text-[#00FF94] hover:text-[#00F0FF] transition-colors duration-300 tracking-widest font-bold animate-pulse"> </a> <a href="#/ark-streams" class="text-white/40 hover:text-[#00F0FF] transition-colors duration-300 tracking-widest">[ TECH TALK ]</a> <a href="#/relatorios" class="text-white/40 hover:text-accent transition-colors duration-300 tracking-widest"> </a> <!></div> <div class="md:hidden absolute top-8 z-20"><!></div> <div class="relative z-10 flex flex-col items-center max-w-4xl mx-auto"><h1 class="text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-gradient-nexus leading-none drop-shadow-lg"> </h1> <h2 class="text-lg md:text-2xl text-secondary font-mono max-w-2xl mx-auto leading-relaxed mb-12"><!></h2> <div class="flex flex-col md:flex-row gap-4"><a href="#/terminal" class="group relative px-8 py-3 bg-transparent overflow-hidden border border-accent hover:border-accent hover:shadow-[0_0_25px_var(--color-quantum-cyan)] transition-all duration-300 flex items-center justify-center w-full md:w-auto"><div class="absolute inset-0 w-0 bg-accent/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div> <span class="relative text-xs font-mono text-[#00FF94] group-hover:text-white tracking-wider text-center font-bold"> </span></a> <button class="group relative px-8 py-3 bg-transparent overflow-hidden border border-white/20 hover:border-accent hover:shadow-[0_0_20px_var(--color-quantum-cyan)] transition-all duration-300 w-full md:w-auto"><div class="absolute inset-0 w-0 bg-accent/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div> <span class="relative text-xs font-mono text-white group-hover:text-accent tracking-wider"> </span></button> <a href="#/ark-streams" class="group relative px-8 py-3 bg-transparent overflow-hidden border border-white/20 hover:border-[#00F0FF] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 flex items-center justify-center w-full md:w-auto"><div class="absolute inset-0 w-0 bg-[#00F0FF]/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div> <span class="relative text-xs font-mono text-white group-hover:text-[#00F0FF] tracking-wider text-center"> </span></a></div></div></section>');function $S(n,e){Rt(e,!1);const[t,i]=sn(),r=()=>Kt(On,"$t",t),a=()=>{var V;(V=document.getElementById("philosophy"))==null||V.scrollIntoView({behavior:"smooth"})};Vt();var s=WS(),o=v(s),l=v(o);ad(l,{});var c=A(o,2),d=v(c),h=v(d),u=A(d,4),p=v(u),g=A(u,2);Th(g,{});var x=A(c,2),m=v(x);Th(m,{});var f=A(x,2),_=v(f),b=v(_),E=A(_,2),y=v(E);dn(y,()=>r()("hero.subtitle").replace("&","&<br />"));var R=A(E,2),C=v(R),L=A(v(C),2),M=v(L),w=A(C,2),I=A(v(w),2),N=v(I),O=A(w,2),$=A(v(O),2),z=v($);$e((V,H,J,ae,ie,de)=>{B(h,V),B(p,H),B(b,J),B(M,ae),B(N,ie),B(z,de)},[()=>r()("nav.terminal"),()=>r()("nav.reports"),()=>r()("hero.title"),()=>r()("hero.cta_terminal"),()=>r()("hero.cta"),()=>r()("hero.cta_ark")],ft),kt("click",w,a),le(n,s),Ct(),i()}var XS=be('<section id="philosophy" class="py-32 px-4 bg-transparent"><div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start relative z-10"><div class="sticky top-32"><h3 class="text-xl font-mono text-accent mb-2"> </h3> <div class="h-1 w-12 bg-accent/30"></div></div> <div class="space-y-12 bg-black/60 backdrop-blur-md p-8 rounded-lg border border-white/10"><p class="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans"><!></p> <div class="space-y-6 font-mono text-sm md:text-base text-secondary"><div class="flex gap-4"><span class="text-accent">[01]</span> <p><strong class="text-white"> </strong> </p></div> <div class="flex gap-4"><span class="text-accent">[02]</span> <p><strong class="text-white"> </strong> </p></div> <div class="flex gap-4"><span class="text-accent">[03]</span> <p><strong class="text-white"> </strong> </p></div></div></div></div></section>');function qS(n,e){Rt(e,!1);const[t,i]=sn(),r=()=>Kt(On,"$t",t);Vt();var a=XS(),s=v(a),o=v(s),l=v(o),c=v(l),d=A(o,2),h=v(d),u=v(h);dn(u,()=>r()("philosophy.hero_text"));var p=A(h,2),g=v(p),x=A(v(g),2),m=v(x),f=v(m),_=A(m),b=A(g,2),E=A(v(b),2),y=v(E),R=v(y),C=A(y),L=A(b,2),M=A(v(L),2),w=v(M),I=v(w),N=A(w);$e((O,$,z,V,H,J,ae)=>{B(c,O),B(f,`${$??""}:`),B(_,` ${z??""}`),B(R,`${V??""}:`),B(C,` ${H??""}`),B(I,`${J??""}:`),B(N,` ${ae??""}`)},[()=>r()("philosophy.title"),()=>r()("philosophy.p1.title"),()=>r()("philosophy.p1.text"),()=>r()("philosophy.p2.title"),()=>r()("philosophy.p2.text"),()=>r()("philosophy.p3.title"),()=>r()("philosophy.p3.text")],ft),le(n,a),Ct(),i()}var YS=be('<section id="stack" class="py-32 px-4 bg-transparent"><div class="max-w-6xl mx-auto relative z-10"><h3 class="text-xl font-mono text-accent mb-16 pl-4 border-l-2 border-accent"> </h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="bg-black/60 backdrop-blur-md border border-white/10 p-8 hover:border-accent/40 hover:bg-black/80 transition-all duration-300 group hover:-translate-y-1 rounded-sm flex flex-col h-full"><div class="font-mono text-accent mb-6 text-xs flex justify-between items-center opacity-70 group-hover:opacity-100"><span>[ PYTHON ]</span></div> <h4 class="text-2xl font-bold mb-4 text-white font-mono"> </h4> <p class="text-secondary text-sm mb-8 leading-relaxed flex-grow"> </p> <div class="flex flex-wrap gap-2 font-mono text-[10px] text-secondary tracking-wide uppercase"><span class="border border-white/10 px-2 py-1">Python</span> <span class="border border-white/10 px-2 py-1">Pandas</span> <span class="border border-white/10 px-2 py-1">Freqtrade</span> <span class="border border-white/10 px-2 py-1">SciPy</span></div></div> <div class="bg-black/60 backdrop-blur-md border border-white/10 p-8 hover:border-accent/40 hover:bg-black/80 transition-all duration-300 group hover:-translate-y-1 rounded-sm flex flex-col h-full"><div class="font-mono text-accent mb-6 text-xs flex justify-between items-center opacity-70 group-hover:opacity-100"><span>[ GO / NATS JETSTREAM ]</span></div> <h4 class="text-2xl font-bold mb-4 text-white font-mono"> </h4> <p class="text-secondary text-sm mb-8 leading-relaxed flex-grow"> </p> <div class="flex flex-wrap gap-2 font-mono text-[10px] text-secondary tracking-wide uppercase"><span class="border border-white/10 px-2 py-1">Go</span> <span class="border border-white/10 px-2 py-1">NATS</span> <span class="border border-white/10 px-2 py-1">Wails</span> <span class="border border-white/10 px-2 py-1">Svelte</span></div></div> <div class="bg-black/60 backdrop-blur-md border border-white/10 p-8 hover:border-accent/40 hover:bg-black/80 transition-all duration-300 group hover:-translate-y-1 rounded-sm flex flex-col h-full"><div class="font-mono text-accent mb-6 text-xs flex justify-between items-center opacity-70 group-hover:opacity-100"><span>[ NATS JETSTREAM / KV BUCKETS ]</span></div> <h4 class="text-2xl font-bold mb-4 text-white font-mono"> </h4> <p class="text-secondary text-sm mb-8 leading-relaxed flex-grow"> </p> <div class="flex flex-wrap gap-2 font-mono text-[10px] text-secondary tracking-wide uppercase"><span class="border border-white/10 px-2 py-1">JetStream</span> <span class="border border-white/10 px-2 py-1">KV Store</span> <span class="border border-white/10 px-2 py-1">Audit Trail</span> <span class="border border-white/10 px-2 py-1">Compliance</span></div></div></div></div></section>');function jS(n,e){Rt(e,!1);const[t,i]=sn(),r=()=>Kt(On,"$t",t);Vt();var a=YS(),s=v(a),o=v(s),l=v(o),c=A(o,2),d=v(c),h=A(v(d),2),u=v(h),p=A(h,2),g=v(p),x=A(d,2),m=A(v(x),2),f=v(m),_=A(m,2),b=v(_),E=A(x,2),y=A(v(E),2),R=v(y),C=A(y,2),L=v(C);$e((M,w,I,N,O,$,z)=>{B(l,M),B(u,w),B(g,I),B(f,N),B(b,O),B(R,$),B(L,z)},[()=>r()("stack.title"),()=>r()("stack.card1.title"),()=>r()("stack.card1.text"),()=>r()("stack.card2.title"),()=>r()("stack.card2.text"),()=>r()("stack.card3.title"),()=>r()("stack.card3.text")],ft),le(n,a),Ct(),i()}var KS=be('<section id="evolution" class="py-32 px-4 bg-transparent"><div class="max-w-6xl mx-auto relative z-10"><h3 class="text-xl font-mono text-accent mb-16 pl-4 border-l-2 border-accent"> </h3> <div class="relative"><div class="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-white/10 hidden md:block"></div> <div class="space-y-12 md:space-y-24"><div class="relative flex flex-col md:flex-row items-center justify-between group"><div class="md:w-[45%] mb-8 md:mb-0"><div class="bg-black/60 backdrop-blur-md border border-white/10 p-8 hover:border-accent/40 transition-all duration-300 rounded-sm"><div class="font-mono text-accent text-xs mb-2"> </div> <h4 class="text-xl font-bold text-white mb-2 font-mono"> </h4> <div class="text-secondary text-xs font-mono mb-4 uppercase tracking-wider"> </div> <p class="text-secondary text-sm leading-relaxed"> </p></div></div> <div class="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent rounded-full border-4 border-black z-20 hidden md:block group-hover:scale-125 transition-transform"></div> <div class="md:w-[45%] hidden md:block"></div></div> <div class="relative flex flex-col md:flex-row items-center justify-between group"><div class="md:w-[45%] hidden md:block"></div> <div class="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#00F0FF] rounded-full border-4 border-black z-20 hidden md:block group-hover:scale-125 transition-transform shadow-[0_0_10px_#00F0FF]"></div> <div class="md:w-[45%]"><div class="bg-black/60 backdrop-blur-md border border-[#00F0FF]/20 p-8 hover:border-[#00F0FF]/40 transition-all duration-300 rounded-sm"><div class="font-mono text-[#00F0FF] text-xs mb-2"> </div> <h4 class="text-xl font-bold text-white mb-2 font-mono"> </h4> <div class="text-secondary text-xs font-mono mb-4 uppercase tracking-wider"> </div> <p class="text-secondary text-sm leading-relaxed"> </p></div></div></div></div></div></div></section>');function ZS(n,e){Rt(e,!1);const[t,i]=sn(),r=()=>Kt(On,"$t",t);Vt();var a=KS(),s=v(a),o=v(s),l=v(o),c=A(o,2),d=A(v(c),2),h=v(d),u=v(h),p=v(u),g=v(p),x=v(g),m=A(g,2),f=v(m),_=A(m,2),b=v(_),E=A(_,2),y=v(E),R=A(h,2),C=A(v(R),4),L=v(C),M=v(L),w=v(M),I=A(M,2),N=v(I),O=A(I,2),$=v(O),z=A(O,2),V=v(z);$e((H,J,ae,ie,de,Te,_e,Be,Xe)=>{B(l,H),B(x,J),B(f,ae),B(b,ie),B(y,de),B(w,Te),B(N,_e),B($,Be),B(V,Xe)},[()=>r()("evolution.title"),()=>r()("evolution.phase1.period"),()=>r()("evolution.phase1.name"),()=>r()("evolution.phase1.tech"),()=>r()("evolution.phase1.description"),()=>r()("evolution.phase2.period"),()=>r()("evolution.phase2.name"),()=>r()("evolution.phase2.tech"),()=>r()("evolution.phase2.description")],ft),le(n,a),Ct(),i()}var JS=be('<div class="font-mono font-bold text-white tracking-tight" style="font-size: clamp(2rem, 5vw, 3rem)"> </div>'),QS=be('<div class="font-mono text-white/20 text-4xl">——————</div>'),eM=be('<div class="mt-auto border-t border-white/10 pt-4"><div class="font-mono text-xs text-white/35 tracking-wider">ark-streams · bitget</div></div>'),tM=be("<span> </span>"),nM=be('<div class="mt-3 border border-white/10 bg-black/40 rounded-sm px-5 py-4"><div class="font-mono text-xs text-white/50 tracking-widest uppercase mb-3">BTC LIQUIDAÇÕES RECENTES</div> <div class="flex flex-wrap gap-x-6 gap-y-2"></div></div>'),iM=be('<div class="mt-8 flex justify-center"><a href="#/terminal" class="group relative px-8 py-3 bg-transparent overflow-hidden border border-accent hover:border-accent hover:shadow-[0_0_20px_var(--color-quantum-cyan)] transition-all duration-300 w-full md:w-auto text-center"><div class="absolute inset-0 w-0 bg-accent/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div> <span class="relative text-xs font-mono text-[#00FF94] group-hover:text-white tracking-widest font-bold"> </span></a></div>'),rM=be('<section id="metrics" class="py-24 px-4 bg-transparent"><div class="max-w-4xl mx-auto w-full relative z-10"><div class="font-mono text-xs text-white/50 tracking-[0.3em] uppercase mb-8 flex items-center gap-3"><span>:: LIVE TELEMETRY</span> <div class="flex-1 h-px bg-white/10"></div> <div class="flex items-center gap-2"><div></div> <span> </span></div></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-3"><div class="md:col-span-2 border border-accent/30 bg-black/80 p-6 rounded-sm shadow-[0_0_20px_rgba(0,240,255,0.08)]"><div class="flex items-start justify-between mb-5"><div><div class="font-mono text-xs text-white/50 tracking-widest uppercase mb-2">BTC / USDT · PERPETUAL</div> <!></div> <div class="flex items-center gap-2 pt-1"><div></div> <span class="font-mono text-xs text-white/50 tracking-widest">LIVE</span></div></div> <div class="grid grid-cols-3 gap-4 border-t border-white/10 pt-5"><div><div class="font-mono text-xs text-white/50 uppercase tracking-wider mb-2">Open Interest</div> <div class="font-mono text-base font-semibold text-white/90"> </div></div> <div><div class="font-mono text-xs text-white/50 uppercase tracking-wider mb-2">Funding Rate</div> <div> </div></div> <div><div class="font-mono text-xs text-white/50 uppercase tracking-wider mb-2">Next Funding</div> <div class="font-mono text-base font-semibold text-white/70"> </div></div></div></div> <div class="border border-white/15 bg-black/60 p-6 rounded-sm flex flex-col gap-5"><div class="font-mono text-xs text-white/50 tracking-widest uppercase">SYSTEM</div> <div class="space-y-4"><div class="flex items-center justify-between"><span class="font-mono text-sm text-white/60">NATS</span> <span> </span></div> <div class="flex items-center justify-between"><span class="font-mono text-sm text-white/60">STREAMS</span> <span class="font-mono text-sm font-semibold text-white/80"> </span></div> <div class="flex items-center justify-between"><span class="font-mono text-sm text-white/60">ENGINE</span> <span> </span></div></div> <!></div></div> <!> <!></div></section>');function Ep(n,e){Rt(e,!1);const[t,i]=sn(),r=()=>Kt(Wn,"$telemetry",t),a=()=>Kt(On,"$t",t),s=ct(),o=ct();let l=Ki(e,"showLink",8,!1);function c(f){return f.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function d(f){const _=f*100;return`${_>=0?"+":""}${_.toFixed(4)}%`}function h(f){return f>=1e6?`${(f/1e6).toFixed(2)}M`:f>=1e3?`${(f/1e3).toFixed(0)}K`:f.toFixed(0)}function u(f){return f>=1e6?`$${(f/1e6).toFixed(1)}M`:f>=1e3?`$${(f/1e3).toFixed(0)}K`:`$${f.toFixed(0)}`}function p(f){if(!f)return"—";const _=f-Date.now();if(_<=0)return"now";const b=Math.floor(_/36e5),E=Math.floor(_%36e5/6e4);return b>0?`${b}h ${E}m`:`${E}m`}bi(()=>r(),()=>{Ce(s,r().btcFunding>0)}),bi(()=>r(),()=>{Ce(o,r().btcUpdatedAt>0&&Date.now()-r().btcUpdatedAt<6e4)}),Ir(),Vt();var g=or(),x=Cn(g);{var m=f=>{var _=rM(),b=v(_),E=v(b),y=A(v(E),4),R=v(y),C=A(R,2),L=v(C),M=A(E,2),w=v(M),I=v(w),N=v(I),O=A(v(N),2);{var $=U=>{var q=JS(),Q=v(q);$e(Y=>B(Q,`$${Y??""}`),[()=>c(r().btcPrice)],ft),le(U,q)},z=U=>{var q=QS();le(U,q)};tt(O,U=>{r().btcPrice>0?U($):U(z,!1)})}var V=A(N,2),H=v(V),J=A(I,2),ae=v(J),ie=A(v(ae),2),de=v(ie),Te=A(ae,2),_e=A(v(Te),2),Be=v(_e),Xe=A(Te,2),j=A(v(Xe),2),ne=v(j),pe=A(w,2),ke=A(v(pe),2),ge=v(ke),Ge=A(v(ge),2),dt=v(Ge),We=A(ge,2),je=A(v(We),2),Qe=v(je),ze=A(We,2),it=A(v(ze),2),F=v(it),Ie=A(ke,2);{var Pe=U=>{var q=eM();le(U,q)};tt(Ie,U=>{r().btcUpdatedAt>0&&U(Pe)})}var He=A(M,2);{var re=U=>{var q=nM(),Q=A(v(q),2);zt(Q,5,()=>r().recentLiqs,$t,(Y,oe)=>{var ee=tM(),me=v(ee);$e(Ue=>{Me(ee,1,`font-mono text-sm font-semibold ${T(oe).side==="buy"||T(oe).side==="BUY"?"text-rose-400":"text-emerald-400"}`),B(me,`${T(oe).side==="buy"||T(oe).side==="BUY"?"▼":"▲"} ${Ue??""}`)},[()=>u(T(oe).usd_value)],ft),le(Y,ee)}),le(U,q)};tt(He,U=>{r().recentLiqs.length>0&&U(re)})}var D=A(He,2);{var S=U=>{var q=iM(),Q=v(q),Y=A(v(Q),2),oe=v(Y);$e(ee=>B(oe,ee),[()=>a()("metrics.enter_terminal")],ft),le(U,q)};tt(D,U=>{l()&&U(S)})}$e((U,q,Q)=>{Me(R,1,`w-2 h-2 rounded-full ${r().natsOk===!0?"bg-[#00FF94] animate-pulse":r().natsOk===!1?"bg-rose-400":"bg-white/30"}`),Me(C,1,`text-sm ${r().natsOk===!0?"text-[#00FF94]":r().natsOk===!1?"text-rose-400":"text-white/40"}`),B(L,r().natsOk===!0?"CONNECTED":r().natsOk===!1?"OFFLINE":"…"),Me(H,1,`w-2 h-2 rounded-full ${T(o)?"bg-accent animate-pulse":"bg-white/20"}`),B(de,U),Me(_e,1,`font-mono text-base font-semibold ${r().btcFunding!==0?T(s)?"text-rose-400":"text-emerald-400":"text-white/50"}`),B(Be,q),B(ne,Q),Me(Ge,1,`font-mono text-sm font-bold ${r().natsOk===!0?"text-emerald-400":r().natsOk===!1?"text-rose-400":"text-white/40"}`),B(dt,r().natsOk===!0?"OK":r().natsOk===!1?"FAIL":"—"),B(Qe,r().streamsOnline>0?`${r().streamsOnline}/${r().streamsTotal}`:"—"),Me(it,1,`font-mono text-sm font-bold ${r().engineRunning?"text-emerald-400":"text-white/40"}`),B(F,r().engineRunning?"RUNNING":"—")},[()=>r().btcOI>0?h(r().btcOI):"—",()=>r().btcFunding!==0?d(r().btcFunding):"—",()=>p(r().btcNextFunding)],ft),le(f,_)};tt(x,f=>{r().enabled&&f(m)})}le(n,g),Ct(),i()}var aM=be('<footer class="py-12 px-4 border-t border-white/5 text-center bg-transparent"><div class="font-mono text-xs text-secondary space-y-6"><div class="flex justify-center gap-8 flex-wrap"><a href="https://linkedin.com/company/nexus-quant" aria-label="LinkedIn" class="hover:text-accent transition-colors duration-300">[ LINKEDIN ]</a> <a href="https://github.com/nexus-quantitative" aria-label="GitHub" class="hover:text-accent transition-colors duration-300">[ GITHUB ]</a> <a href="#/relatorios" aria-label="Relatórios Operacionais" class="hover:text-accent transition-colors duration-300">[ RELATÓRIOS ]</a></div> <div class="h-px w-12 bg-white/10 mx-auto"></div> <div class="opacity-40 font-sans tracking-wide"> <br> </div></div></footer>');function sM(n,e){Rt(e,!1);const[t,i]=sn(),r=()=>Kt(On,"$t",t),a=new Date().getFullYear();Vt();var s=aM(),o=v(s),l=A(v(o),4),c=v(l),d=A(c,2);$e((h,u)=>{B(c,h),B(d,` ${u??""}`)},[()=>r()("footer.rights",{values:{year:a}}),()=>r()("footer.location")],ft),le(n,s),Ct(),i()}var oM=ba('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-red-500 svelte-1sg11vv"><circle cx="12" cy="12" r="10" class="svelte-1sg11vv"></circle><line x1="15" y1="9" x2="9" y2="15" class="svelte-1sg11vv"></line><line x1="9" y1="9" x2="15" y2="15" class="svelte-1sg11vv"></line></svg>'),lM=ba('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full svelte-1sg11vv"><path d="M11 5L6 9H2v6h4l5 4V5z" class="svelte-1sg11vv"></path><line x1="23" y1="9" x2="17" y2="15" class="svelte-1sg11vv"></line><line x1="17" y1="9" x2="23" y2="15" class="svelte-1sg11vv"></line></svg>'),cM=be('<div class="flex items-end gap-0.5 h-3 svelte-1sg11vv"><div class="w-0.5 bg-accent animate-music-bar-1 svelte-1sg11vv"></div> <div class="w-0.5 bg-accent animate-music-bar-2 svelte-1sg11vv"></div> <div class="w-0.5 bg-accent animate-music-bar-3 svelte-1sg11vv"></div></div>'),dM=be('<div class="fixed top-6 left-6 z-[100] svelte-1sg11vv"><button class="group flex items-center gap-3 bg-accent/10 hover:bg-accent/20 border border-accent/50 hover:border-accent text-accent px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed svelte-1sg11vv"><div class="relative w-5 h-5 flex items-center justify-center svelte-1sg11vv"><!></div> <span class="text-xs font-mono uppercase tracking-widest min-w-[80px] svelte-1sg11vv"><!></span></button></div> <div class="pointer-events-none fixed -top-10 -left-10 opacity-0 w-1 h-1 overflow-hidden svelte-1sg11vv"><div id="youtube-audio-player" class="svelte-1sg11vv"></div></div>',1);function uM(n,e){Rt(e,!1);let t,i=!1,r=ct(!0),a=ct(!1),s=ct("");const o="1RBL51ZE2Ig";Yn(()=>{var y;if(window.YT)if(window.YT.Player)l();else{const R=setInterval(()=>{window.YT.Player&&(clearInterval(R),l())},100)}else{const R=document.createElement("script");R.src="https://www.youtube.com/iframe_api";const C=document.getElementsByTagName("script")[0];(y=C.parentNode)==null||y.insertBefore(R,C),window.onYouTubeIframeAPIReady=()=>{l()}}});function l(){try{const y={height:"0",width:"0",videoId:o,playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,loop:1,playlist:o,modestbranding:1,rel:0,showinfo:0,origin:window.location.origin,enablejsapi:1},events:{onReady:R=>{Ce(a,!0),R.target.setVolume(20),R.target.mute()},onStateChange:R=>{R.data===window.YT.PlayerState.PLAYING?i=!0:i=!1},onError:R=>{console.error("YouTube Player Error:",R.data),R.data===150||R.data===101?(Ce(s,"Restricted"),console.warn("Video is not embeddable (Error 150).")):Ce(s,"Error"),Ce(a,!1)}}};t=new window.YT.Player("youtube-audio-player",y)}catch(y){console.error("Failed to initialize YouTube Player:",y)}}function c(){!T(a)||!t||T(s)||(T(r)?(t.setVolume(20),t.unMute(),t.playVideo(),Ce(r,!1)):(t.mute(),t.pauseVideo(),Ce(r,!0)))}Vt();var d=dM(),h=Cn(d),u=v(h),p=v(u),g=v(p);{var x=y=>{var R=oM();le(y,R)},m=(y,R)=>{{var C=M=>{var w=lM();le(M,w)},L=M=>{var w=cM();le(M,w)};tt(y,M=>{T(r)?M(C):M(L,!1)},R)}};tt(g,y=>{T(s)?y(x):y(m,!1)})}var f=A(p,2),_=v(f);{var b=y=>{var R=Ni();$e(()=>B(R,T(s))),le(y,R)},E=(y,R)=>{{var C=M=>{var w=Ni("Loading...");le(M,w)},L=M=>{var w=Ni();$e(()=>B(w,T(r)?"Audio Off":"Audio On")),le(M,w)};tt(y,M=>{T(a)?M(L,!1):M(C)},R)}};tt(_,y=>{T(s)?y(b):y(E,!1)})}$e(()=>{Se(u,"aria-label",T(s)?"Audio unavailable":T(r)?"Unmute music":"Mute music"),Se(u,"title",T(s)?"Video not embeddable":T(a)?T(r)?"Play Music":"Mute Music":"Loading Player..."),u.disabled=!!T(s)}),kt("click",u,c),le(n,d),Ct()}const hM=n=>n;function wp(n){const e=n-1;return e*e*e+1}function Ah(n){const e=typeof n=="string"&&n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[n,"px"]}function $n(n,{delay:e=0,duration:t=400,easing:i=hM}={}){const r=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:a=>`opacity: ${a*r}`}}function ho(n,{delay:e=0,duration:t=400,easing:i=wp,x:r=0,y:a=0,opacity:s=0}={}){const o=getComputedStyle(n),l=+o.opacity,c=o.transform==="none"?"":o.transform,d=l*(1-s),[h,u]=Ah(r),[p,g]=Ah(a);return{delay:e,duration:t,easing:i,css:(x,m)=>`
			transform: ${c} translate(${(1-x)*h}${u}, ${(1-x)*p}${g});
			opacity: ${l-d*m}`}}function Tp(n,{delay:e=0,duration:t=400,easing:i=wp,axis:r="y"}={}){const a=getComputedStyle(n),s=+a.opacity,o=r==="y"?"height":"width",l=parseFloat(a[o]),c=r==="y"?["top","bottom"]:["left","right"],d=c.map(f=>`${f[0].toUpperCase()}${f.slice(1)}`),h=parseFloat(a[`padding${d[0]}`]),u=parseFloat(a[`padding${d[1]}`]),p=parseFloat(a[`margin${d[0]}`]),g=parseFloat(a[`margin${d[1]}`]),x=parseFloat(a[`border${d[0]}Width`]),m=parseFloat(a[`border${d[1]}Width`]);return{delay:e,duration:t,easing:i,css:f=>`overflow: hidden;opacity: ${Math.min(f*20,1)*s};${o}: ${f*l}px;padding-${c[0]}: ${f*h}px;padding-${c[1]}: ${f*u}px;margin-${c[0]}: ${f*p}px;margin-${c[1]}: ${f*g}px;border-${c[0]}-width: ${f*x}px;border-${c[1]}-width: ${f*m}px;min-${o}: 0`}}var fM=be(`<div class="absolute left-0 bottom-full w-full bg-black/95 border border-orange-500/50 p-4 rounded-xl shadow-2xl z-50 mb-4 backdrop-blur-xl"><h4 class="text-orange-400 font-bold mb-2 text-xs uppercase tracking-widest">LAYER 1: BASES (ENTRY POINTS)</h4> <p class="text-xs text-gray-300 leading-relaxed mb-2">"At the top, we have the Bases. In Polylith, these
                            are the only places that interact with the outside
                            world."</p> <ul class="text-[10px] text-gray-400 space-y-1.5 list-disc pl-4"><li><strong class="text-orange-200">base: integrant:</strong> The brain of our boot process. Declarative formatting
                                using EDN configuration. Handles dependency injection,
                                enabling REPL restarts in milliseconds.</li> <li><strong class="text-orange-200">base: http-api:</strong> Exposes functionality via REST. Thin and dumb—routes
                                requests to components below.</li> <li><strong class="text-orange-200">base: onyx-peer:</strong> The heavy lifter. A background worker consuming
                                events from Datomic logs for async processing.</li></ul></div>`),pM=be(`<div class="absolute left-0 bottom-full w-full bg-black/95 border border-zinc-500/50 p-4 rounded-xl shadow-2xl z-50 mb-4 backdrop-blur-xl"><h4 class="text-zinc-300 font-bold mb-2 text-xs uppercase tracking-widest">LAYER 2: INFRASTRUCTURE CORE</h4> <p class="text-xs text-gray-300 leading-relaxed mb-2">"In the middle, we have the Infrastructure Core.
                            These components are domain-agnostic. Whether we
                            were handling Marketplace Inventory (MPMS) or
                            Payment Intelligence (UBLE), this layer remained
                            stable."</p> <ul class="text-[10px] text-gray-400 space-y-1.5 list-disc pl-4"><li><strong class="text-zinc-200">datomic-peer:</strong> Connects to our immutable ledger. Preserves every
                                state change in a timeline for financial and clinical
                                auditability.</li> <li><strong class="text-zinc-200">auth-provider:</strong> Centralized security with interceptors for multiple
                                external actors (VTEX, Gateways).</li> <li><strong class="text-zinc-200">workflow-orch:</strong> 'Sinatra' - A state machine engine for orchestrating
                                multi-step flows like refund authorizations.</li> <li><strong class="text-zinc-200">log-service:</strong> Full observability, sending structured logs to
                                the cloud.</li></ul></div>`),mM=be(`<div class="absolute left-0 bottom-full w-full bg-black/95 border border-blue-500/50 p-4 rounded-xl shadow-2xl z-50 mb-4 backdrop-blur-xl"><h4 class="text-blue-400 font-bold mb-2 text-xs uppercase tracking-widest">LAYER 3: DOMAIN & INTELLIGENCE</h4> <p class="text-xs text-gray-300 leading-relaxed mb-2">"Finally, at the bottom, we have the Domain Layer.
                            This is where the pivot happened."</p> <ul class="text-[10px] text-gray-400 space-y-1.5 list-disc pl-4"><li><strong class="text-blue-200">payment-gateways:</strong> Normalizes the chaos. Adapters for Cielo, Getnet,
                                Pagar.me converting external formats to internal
                                schemas.</li> <li><strong class="text-blue-200">fraud-analysis:</strong> Enriches data with risk scores via ClearSale and
                                Unico connections.</li> <li><strong class="text-blue-200">oz-visualization:</strong> The 'Last Mile' of Intelligence. Scientific visualizations
                                (Vega-Lite) generated from Clojure data.</li> <li><strong class="text-blue-200">superset-embed:</strong> Real-time Superset dashboards integrated directly
                                into the frontend.</li></ul></div>`),vM=be(`<div class="w-full flex flex-col items-center gap-0 font-mono text-sm select-none pointer-events-none p-4"><div class="flex flex-col md:flex-row gap-8 w-full justify-center items-start mb-12 text-zinc-400 max-w-6xl px-4"><div class="flex-1"><p class="hint leading-relaxed svelte-1l6r2c7">Initially, we built MPMS. The domain was E-commerce. We
                    built complex modules for Product Catalog Management (PCM)
                    and logistics integrations with VTEX. But when the business
                    strategy shifted away from Marketplace orchestration, we
                    didn't throw the code away. We pivoted.</p></div> <div class="flex-1"><p class="hint leading-relaxed svelte-1l6r2c7">We leveraged the same Event-Driven infrastructure to build
                    UBLE. The domain shifted to Payment Intelligence. Instead of
                    routing deliveries, we started ingesting massive transaction
                    logs from Getnet, Cielo, and ClearSale. I built new modules
                    to feed Superset dashboards, allowing clients to visualize
                    and recover lost revenue. This proves I can build
                    architectures that are decoupled enough to survive a
                    complete business pivot.</p></div></div> <div class="flex flex-col md:flex-row gap-8 w-full justify-center items-stretch min-h-[250px] relative z-20"><div class="flex-1 bg-zinc-900 border border-cyan-500/50 rounded-xl p-6 flex flex-col gap-4 relative overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)]"><div class="absolute top-0 right-0 p-2 text-6xl rotate-12">📦</div> <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-green-500"></div> <div class="border-b border-zinc-700 pb-2 mb-2"><h3 class="text-gray-400 font-bold text-lg">DOMAIN: E-COMMERCE</h3> <span class="text-xs text-orange-500 uppercase tracking-widest">[MPMS]</span> <p class="text-[10px] text-gray-500 mt-1">Marketplace & Logistics</p></div> <div class="flex flex-col gap-2"><div class="bg-orange-950/20 px-3 py-1.5 rounded text-xs text-orange-200 border border-orange-500/30">project: product-catalog</div> <div class="bg-orange-950/20 px-3 py-1.5 rounded text-xs text-orange-200 border border-orange-500/30">component: vtex-adapter</div> <div class="bg-orange-950/20 px-3 py-1.5 rounded text-xs text-orange-200 border border-orange-500/30">component: logistics-routing</div></div></div> <div class="flex-1 bg-zinc-900 border border-cyan-500/50 rounded-xl p-6 flex flex-col gap-4 relative overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)]"><div class="absolute top-0 right-0 p-2 text-6xl rotate-12">📊</div> <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-green-500"></div> <div class="border-b border-cyan-500/30 pb-2 mb-2"><h3 class="text-cyan-400 font-bold text-lg">DOMAIN: PAYMENTS INTELLIGENCE</h3> <span class="text-xs text-cyan-400 uppercase tracking-widest">[UBLE]</span> <p class="text-[10px] text-cyan-300/70 mt-1">Recovery & Insights</p></div> <div class="flex flex-col gap-2"><div class="bg-cyan-950/40 px-3 py-1.5 rounded text-xs text-cyan-200 border border-cyan-500/30">component: payment-gateways</div> <div class="bg-cyan-950/40 px-3 py-1.5 rounded text-xs text-cyan-200 border border-cyan-500/30">component: fraud-analysis</div> <div class="bg-cyan-950/40 px-3 py-1.5 rounded text-xs text-cyan-200 border border-cyan-500/30">project: intelligence-dashboard</div></div></div></div> <div class="relative h-12 w-full max-w-2xl z-10"><div class="absolute left-[25%] top-0 h-full w-px border-l border-dashed border-zinc-600"></div> <div class="absolute right-[25%] top-0 h-full w-px border-l border-dashed border-cyan-500/50"></div> <div class="absolute bottom-0 left-[25%] right-[25%] h-1/2 border-t border-l border-r border-zinc-700 separate-colors"></div> <div class="absolute bottom-0 left-[25%] right-[25%] h-4 border-t border-l border-r border-zinc-600 rounded-t-xl"></div> <div class="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-px bg-zinc-600"></div></div> <p class="hint max-w-2xl text-center my-10 leading-relaxed svelte-1l6r2c7">This diagram represents the Polylith Architecture I implemented. It
            is divided into three logical layers: Entry Points (Bases), Shared
            Infrastructure, and Domain Logic. This separation is exactly what
            allowed us to pivot from E-commerce to Intelligence without
            rewriting the system.</p>  <div class="w-full max-w-3xl bg-zinc-950 border-2 border-orange-500/30 rounded-xl p-8 flex flex-col items-center gap-8 shadow-[0_0_50px_rgba(249,115,22,0.1)] z-20 relative pointer-events-auto"><div class="text-center"><h3 class="text-orange-400 font-bold text-2xl tracking-[0.2em] mb-1">POLYLITH ARCHITECTURE</h3> <div class="flex items-center justify-center gap-2"><span class="h-px w-8 bg-orange-500/30"></span> <span class="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">The Payment Engine</span> <span class="h-px w-8 bg-orange-500/30"></span></div></div>  <div class="w-full space-y-3 cursor-help transition-all duration-300 p-2 rounded hover:bg-orange-500/5 relative"><div class="flex items-center gap-2 mb-2"><div class="w-1.5 h-1.5 rounded-full bg-orange-500"></div> <span class="text-[10px] uppercase tracking-widest text-orange-400 font-bold">Bases (Entry Points)</span> <span class="h-px flex-1 bg-gradient-to-r from-orange-500/20 to-transparent"></span></div> <div class="grid grid-cols-3 gap-3"><div class="group relative bg-orange-500/10 border border-orange-500/40 px-3 py-3 rounded-lg text-center transition-all hover:bg-orange-500/20"><span class="text-xs text-orange-200 font-bold block">base: http-api</span> <span class="text-[9px] text-orange-400/60 uppercase mt-1">REST Interface</span></div> <div class="group relative bg-orange-500/10 border border-orange-500/40 px-3 py-3 rounded-lg text-center transition-all hover:bg-orange-500/20"><span class="text-xs text-orange-200 font-bold block">base: integrant</span> <span class="text-[9px] text-orange-400/60 uppercase mt-1">Lifecycle / DI</span></div> <div class="group relative bg-orange-500/10 border border-orange-500/40 px-3 py-3 rounded-lg text-center transition-all hover:bg-orange-500/20"><span class="text-xs text-orange-200 font-bold block">base: onyx-peer</span> <span class="text-[9px] text-orange-400/60 uppercase mt-1">Event Consumer</span></div></div> <!></div>  <div class="w-full space-y-3 cursor-help transition-all duration-300 p-2 rounded hover:bg-zinc-800/30 relative"><div class="flex items-center gap-2 mb-2"><div class="w-1.5 h-1.5 rounded-full bg-zinc-500"></div> <span class="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Infrastructure Components</span> <span class="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent"></span></div> <div class="grid grid-cols-2 lg:grid-cols-4 gap-2"><div class="bg-zinc-900/80 border border-zinc-800 p-2.5 rounded hover:border-orange-500/30 transition-colors"><span class="text-[9px] text-zinc-500 block mb-0.5">Persistence</span> <span class="text-xs text-zinc-300 font-medium">datomic-peer</span></div> <div class="bg-zinc-900/80 border border-zinc-800 p-2.5 rounded hover:border-orange-500/30 transition-colors"><span class="text-[9px] text-zinc-500 block mb-0.5">Security</span> <span class="text-xs text-zinc-300 font-medium">auth-provider</span></div> <div class="bg-zinc-900/80 border border-zinc-800 p-2.5 rounded hover:border-orange-500/30 transition-colors"><span class="text-[9px] text-zinc-500 block mb-0.5">Observability</span> <span class="text-xs text-zinc-300 font-medium">log-service</span></div> <div class="bg-zinc-900/80 border border-zinc-800 p-2.5 rounded hover:border-orange-500/30 transition-colors"><span class="text-[9px] text-zinc-500 block mb-0.5">Workflow</span> <span class="text-xs text-zinc-300 font-medium">workflow-orch</span></div></div> <!></div>  <div class="w-full space-y-3 cursor-help transition-all duration-300 p-2 rounded hover:bg-blue-900/20 relative"><div class="flex items-center gap-2 mb-2"><div class="w-1.5 h-1.5 rounded-full bg-blue-500/50"></div> <span class="text-[10px] uppercase tracking-widest text-blue-300/70 font-bold">Domain & Intelligence</span> <span class="h-px flex-1 bg-gradient-to-r from-blue-900/30 to-transparent"></span></div> <div class="grid grid-cols-2 gap-2"><div class="bg-blue-950/10 border border-blue-900/30 p-2.5 rounded hover:border-blue-500/30 transition-colors"><span class="text-[9px] text-blue-400/60 block mb-0.5">Integration</span> <span class="text-xs text-blue-200 font-medium">payment-gateways</span></div> <div class="bg-blue-950/10 border border-blue-900/30 p-2.5 rounded hover:border-blue-500/30 transition-colors"><span class="text-[9px] text-blue-400/60 block mb-0.5">Risk Engine</span> <span class="text-xs text-blue-200 font-medium">fraud-analysis</span></div> <div class="bg-blue-950/10 border border-blue-900/30 p-2.5 rounded hover:border-blue-500/30 transition-colors"><span class="text-[9px] text-blue-400/60 block mb-0.5">Data Science</span> <span class="text-xs text-blue-200 font-medium">oz-visualization</span></div> <div class="bg-blue-950/10 border border-blue-900/30 p-2.5 rounded hover:border-blue-500/30 transition-colors"><span class="text-[9px] text-blue-400/60 block mb-0.5">Analytics UI</span> <span class="text-xs text-blue-200 font-medium">superset-embed</span></div></div> <!></div> <div class="text-[10px] text-zinc-600 italic mt-2 opacity-50 border-t border-zinc-900 w-full pt-4 text-center">"Decoupled architecture enabling rapid pivots from E-commerce to
                Intelligence"</div></div> <p class="hint mt-12 text-center text-xs tracking-widest uppercase svelte-1l6r2c7">This proves I can build architectures that are decoupled enough to
            survive a complete business pivot.</p></div>`);function gM(n,e){Rt(e,!1);let t=ct(!1),i=ct(null);Yn(()=>Ce(t,!0)),Vt();var r=or(),a=Cn(r);{var s=o=>{var l=vM(),c=v(l),d=A(c,2),h=v(d),u=A(h,2),p=A(d,2),g=A(p,4),x=A(v(g),2),m=A(v(x),4);{var f=L=>{var M=fM();en(1,M,()=>$n,()=>({duration:200})),le(L,M)};tt(m,L=>{T(i)===1&&L(f)})}var _=A(x,2),b=A(v(_),4);{var E=L=>{var M=pM();en(1,M,()=>$n,()=>({duration:200})),le(L,M)};tt(b,L=>{T(i)===2&&L(E)})}var y=A(_,2),R=A(v(y),4);{var C=L=>{var M=mM();en(1,M,()=>$n,()=>({duration:200})),le(L,M)};tt(R,L=>{T(i)===3&&L(C)})}en(1,c,()=>$n,()=>({duration:800,delay:200})),en(1,h,()=>ho,()=>({x:-20,duration:1e3})),en(1,u,()=>ho,()=>({x:20,duration:1e3,delay:200})),en(1,p,()=>$n,()=>({duration:1e3,delay:500})),kt("mouseenter",x,()=>Ce(i,1)),kt("mouseleave",x,()=>Ce(i,null)),kt("mouseenter",_,()=>Ce(i,2)),kt("mouseleave",_,()=>Ce(i,null)),kt("mouseenter",y,()=>Ce(i,3)),kt("mouseleave",y,()=>Ce(i,null)),en(1,g,()=>ho,()=>({y:20,duration:1e3,delay:400})),le(o,l)};tt(a,o=>{T(t)&&o(s)})}le(n,r),Ct()}var xM=be('<div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full font-mono text-xs md:text-sm p-4"><div class="relative bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6 flex flex-col gap-6 backdrop-blur-md"><div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-orange-500 to-transparent"></div> <h3 class="text-orange-400 font-bold tracking-widest text-lg"> </h3> <div class="text-gray-300"><div class="text-orange-200/80 italic leading-relaxed"> </div></div></div> <div class="relative bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6 flex flex-col gap-6 backdrop-blur-md"><div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 to-transparent"></div> <h3 class="text-purple-400 font-bold tracking-widest text-lg"> </h3> <div class="text-gray-300"><div class="text-purple-200/80 italic leading-relaxed"> </div></div></div> <div class="relative bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6 flex flex-col gap-6 backdrop-blur-md"><div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-cyan-500 to-transparent"></div> <h3 class="text-cyan-400 font-bold tracking-widest text-lg"> </h3> <div class="text-gray-300"><div class="text-cyan-200/80 italic leading-relaxed"> </div></div></div></div>');function _M(n,e){Rt(e,!1);const[t,i]=sn(),r=()=>Kt(On,"$t",t);Vt();var a=xM(),s=v(a),o=A(v(s),2),l=v(o),c=A(o,2),d=v(c),h=v(d),u=A(s,2),p=A(v(u),2),g=v(p),x=A(p,2),m=v(x),f=v(m),_=A(u,2),b=A(v(_),2),E=v(b),y=A(b,2),R=v(y),C=v(R);$e((L,M,w,I,N,O)=>{B(l,L),B(h,M),B(g,w),B(f,I),B(E,N),B(C,O)},[()=>r()("presentation.section2.part1.title"),()=>r()("presentation.section2.part1.intro"),()=>r()("presentation.section2.part2.title"),()=>r()("presentation.section2.part2.intro"),()=>r()("presentation.section2.part3.title"),()=>r()("presentation.section2.part3.intro")],ft),le(n,a),Ct(),i()}var bM=be('<div class="w-full h-[400px] relative rounded-xl overflow-hidden border border-zinc-800 bg-black/20"><canvas class="w-full h-full block"></canvas> <div class="absolute top-4 left-8 text-orange-500 font-mono text-xs tracking-widest pointer-events-none">INPUT: HIGH ENTROPY</div> <div class="absolute top-4 left-1/2 -translate-x-1/2 text-purple-500 font-mono text-xs tracking-widest pointer-events-none">INGESTION LAYER</div> <div class="absolute top-4 right-8 text-cyan-500 font-mono text-xs tracking-widest pointer-events-none">OUTPUT: SIGNAL</div></div>');function yM(n,e){Rt(e,!1);let t=ct(),i=ct(),r,a,s,o;const l=150,c=16729344,d=8788367,h=440020;let u=[],p;Yn(()=>{if(!T(i))return;s=new Ud;const y=45,R=T(t).clientWidth/T(t).clientHeight,C=.1,L=100;o=new gn(y,R,C,L),o.position.set(0,0,15),o.lookAt(0,0,0),a=new Gd({canvas:T(i),alpha:!0,antialias:!0}),a.setPixelRatio(window.devicePixelRatio),a.setSize(T(t).clientWidth,T(t).clientHeight);const M=new mp(16777215,.5);s.add(M);const w=new Lo(16777215,1);w.position.set(5,5,5),s.add(w);const I=new Lo(d,2,10);I.position.set(0,0,0),s.add(I),g(),x();const N=new Vd,O=()=>{r=requestAnimationFrame(O);const z=N.getDelta(),V=N.getElapsedTime();f(V),_(z,V),a.render(s,o)};O();const $=()=>{if(!T(t))return;const z=T(t).clientWidth,V=T(t).clientHeight;o.aspect=z/V,o.updateProjectionMatrix(),a.setSize(z,V)};return window.addEventListener("resize",$),()=>{window.removeEventListener("resize",$),cancelAnimationFrame(r),a.dispose()}});function g(){p=new $a;const y=new Io(1.5,.05,16,50),R=new ha({color:d,transparent:!0,opacity:.8,wireframe:!0}),C=new rn(y,R);p.add(C);const L=new Io(2.2,.02,16,50),M=new ha({color:4988309,transparent:!0,opacity:.5}),w=new rn(L,M);w.rotation.x=Math.PI/2,p.add(w);const I=new Bd(.8,0),N=new ju({color:d,flatShading:!0,emissive:3018853}),O=new rn(I,N);p.add(O),s.add(p)}function x(){const y=[new kd(.2),new wa(.2,.2,.2),new Od(.15)],R=new ju({color:c,flatShading:!0});for(let C=0;C<l;C++){const L=new rn(y[Math.floor(Math.random()*y.length)],R.clone());L.position.set(-15-Math.random()*10,(Math.random()-.5)*6,(Math.random()-.5)*4),m(L),L.position.x=-15-Math.random()*10,s.add(L),u.push({mesh:L,state:"chaos",velocity:new W,rotVelocity:new W,targetScale:1})}}function m(y,R){y.position.set(-10-Math.random()*5,(Math.random()-.5)*6,(Math.random()-.5)*4),y.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),y.material.color.setHex(c),y.material.emissive.setHex(0),y.material.wireframe=!1}function f(y){if(!p)return;p.rotation.y=y*.5,p.rotation.x=Math.sin(y*.3)*.2;const R=1+Math.sin(y*2)*.05;p.scale.set(R,R,R)}function _(y,R){const C=Math.min(1,R/5),L=1+Math.sin(R*.8)*.3,M=3.5*C*L;u.forEach(w=>{const{mesh:I}=w;if(I.rotation.x+=w.rotVelocity.x*y,I.rotation.y+=w.rotVelocity.y*y,I.position.x+=M*y,w.state==="chaos"&&I.position.x>-2)I.position.length()>.5&&I.position.lerp(new W(0,0,0),y*3),I.position.x>-.5&&I.position.x<.5&&(w.state="value",I.material.color.setHex(h),I.material.emissive.setHex(440020),I.rotation.set(0,0,0),w.rotVelocity.set(0,0,0));else if(w.state==="value"){I.position.y=Math.sin(R*2+I.position.x)*1.5*Math.exp(-I.position.x*.05);const N=0;I.position.y+=(N-I.position.y)*y*2,I.position.z+=(0-I.position.z)*y*2}else I.position.y+=Math.sin(R*10+I.id)*.02,w.rotVelocity.set(Math.random(),Math.random(),Math.random());I.position.x>20&&(w.state="chaos",m(I))})}Vt();var b=bM(),E=v(b);ra(E,y=>Ce(i,y),()=>T(i)),ra(b,y=>Ce(t,y),()=>T(t)),le(n,b),Ct()}function SM(n){const e=n-1;return e*e*e+1}var MM=be('<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>'),EM=be('<div class="mb-8 max-w-3xl mx-auto bg-black/60 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm"><div class="flex items-start justify-between mb-4"><h4 class="text-cyan-400 font-mono text-sm uppercase tracking-widest"> </h4> <button class="text-gray-500 hover:text-gray-300 transition-colors">✕</button></div> <ol class="space-y-2 text-xs text-gray-300 list-decimal list-inside"><li> </li> <li> </li> <li> </li></ol> <p class="mt-4 text-xs text-gray-400 italic border-t border-gray-700 pt-4"> </p></div>'),wM=be('<div class="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-lg transition-transform duration-75"><div></div></div>'),TM=be('<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-red-500 rounded-full animate-ping opacity-0"></div>'),AM=be("<!> <!>",1),RM=be(`<div class="space-y-6"><div class="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">💎</div> <div class="flex-1"><h4 class="text-xl font-bold text-purple-300 mb-2">1. Immutability & Data-Driven Design</h4> <p class="text-sm text-gray-300 mb-3"><strong class="text-purple-200">The Concept:</strong> The entire system relies on passing immutable maps. There are almost no mutable objects.</p> <div class="bg-black/40 border-l-4 border-purple-500 p-3 mb-3 rounded"><p class="text-sm text-purple-100 italic">"Candles (Map) -> Indicators (Value) -> Signal (Map) -> Order (Map).
                                    State is updated via recur, creating a new state for the next iteration without mutating the old one."</p></div> <p class="text-xs text-gray-400"><strong class="text-purple-300">Code Ref:</strong> Orchestrator Loop.</p></div></div></div> <div class="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🧪</div> <div class="flex-1"><h4 class="text-xl font-bold text-cyan-300 mb-2">2. Pure Functions (Referential Transparency)</h4> <p class="text-sm text-gray-300 mb-3"><strong class="text-cyan-200">The Concept:</strong> The strategy-engine largely consists of pure functions that take data and return a calculated result, with no side effects.</p> <div class="bg-black/40 border-l-4 border-cyan-500 p-3 mb-3 rounded"><p class="text-sm text-cyan-100 italic">"(ema candles period): Takes immutable data, returns a number. No external state is read or modified."</p></div> <p class="text-xs text-gray-400"><strong class="text-cyan-300">Benefit:</strong> Extremely easy to test. You just pass a vector of maps and assert the return value.</p></div></div></div> <div class="bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">⚡</div> <div class="flex-1"><h4 class="text-xl font-bold text-orange-300 mb-2">3. Concurrency & Asynchrony (core.async)</h4> <p class="text-sm text-gray-300 mb-3"><strong class="text-orange-200">The Concept:</strong> CSP (Communicating Sequential Processes). The system "parks" (cheaply sleeps) until a timeout or a stop signal is received.</p> <div class="bg-black/40 border-l-4 border-orange-500 p-3 mb-3 rounded"><p class="text-sm text-orange-100 italic">"The Orchestrator uses core.async to manage the main application loop without blocking threads."</p></div> <p class="text-xs text-gray-400"><strong class="text-orange-300">Code Ref:</strong> com.nexus-quant.ark-engine.orchestrator.core/start!</p></div></div></div> <div class="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🔄</div> <div class="flex-1"><h4 class="text-xl font-bold text-green-300 mb-2">4. Recursion for State Management</h4> <p class="text-sm text-gray-300 mb-3"><strong class="text-green-200">The Concept:</strong> Instead of wrapping the application state in a global atom, the Orchestrator maintains state on the stack via recursion.</p> <div class="bg-black/40 border-l-4 border-green-500 p-3 mb-3 rounded"><p class="text-sm text-green-100 italic">"(loop [state init] ... (recur new-state)). The 'state' exists only within the lifecycle of the loop."</p></div> <p class="text-xs text-gray-400"><strong class="text-green-300">Why?:</strong> Avoids mutable shared state bugs.</p></div></div></div> <div class="bg-gradient-to-r from-indigo-900/20 to-violet-900/20 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">☕</div> <div class="flex-1"><h4 class="text-xl font-bold text-indigo-300 mb-2">5. Java Interoperability</h4> <p class="text-sm text-gray-300 mb-3"><strong class="text-indigo-200">The Concept:</strong> Clojure's strength is its access to the JVM ecosystem. Ark Engine leverages ta4j for technical analysis.</p> <div class="bg-black/40 border-l-4 border-indigo-500 p-3 mb-3 rounded"><p class="text-sm text-indigo-100 italic">"(-> obj .method args) macros for clean Java calls. Converting Clojure maps (keywords) to Java Objects efficiently."</p></div> <p class="text-xs text-gray-400"><strong class="text-indigo-300">Lib:</strong> ta4j (Technical Analysis for Java).</p></div></div></div></div>`),CM=be('<div class="w-full max-w-5xl mx-auto p-4 md:p-8 font-mono"><div class="flex justify-center gap-4 mb-12"><button>NORMAL OPERATION</button> <button><span class="relative flex h-3 w-3"><!> <span></span></span> INJECT VOLATILITY</button></div> <!> <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 bg-black/40 border border-gray-800 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl"><div class="relative p-8 border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px] group pointer-events-auto"><div class="absolute inset-0 bg-cyan-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <div class="absolute top-4 left-4 text-xs text-cyan-500 tracking-widest">MODULE: ORCHESTRATOR (BRAIN)</div> <div><div></div> <div><!></div></div> <div class="mt-6 text-center"><div> </div> <div class="text-xs text-gray-500 mt-1">core.async / Recur</div></div></div>  <div class="relative p-8 border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px] pointer-events-auto"><div class="absolute top-4 left-4 text-xs text-orange-500 tracking-widest">MODULE: STRATEGY ENGINE (LOGIC)</div> <div class="relative z-20"><div></div> <div><div><!></div> <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-8 bg-gray-700"></div> <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-px h-8 bg-gray-700"></div></div></div> <div class="mt-8 text-center z-10"><div> </div> <div class="text-xs text-gray-500 mt-1">Referential Transparency</div></div></div>  <div class="relative p-8 flex flex-col items-center justify-center min-h-[300px] pointer-events-auto"><div class="absolute top-4 left-4 text-xs text-green-500 tracking-widest">MODULE: CONNECTOR</div> <div class="relative z-10 w-32 h-32 rounded border-2 border-green-500/30 flex items-center justify-center bg-green-900/10 shadow-[0_0_20px_rgba(34,197,94,0.1)]"><div class="text-green-400"><!></div></div> <div class="mt-6 text-center"><div class="text-lg font-bold text-green-400">ORDERS EXECUTED</div> <div class="text-xs text-gray-500 mt-1">Side-Effect Handler</div></div></div> <div class="absolute inset-0 pointer-events-none overflow-hidden"></div></div> <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-500 font-mono text-center"><div>Orchestrator (Loop)</div> <div class="text-orange-400">Strategy (Pure Logic)</div> <div>Connector (Side Effects)</div></div> <div class="mt-12 max-w-6xl mx-auto space-y-8"><button class="w-full text-center mb-8 group cursor-pointer bg-gradient-to-r from-purple-900/10 to-cyan-900/10 border border-gray-700 hover:border-purple-500/50 rounded-xl p-6 transition-all duration-300"><div class="flex items-center justify-center gap-4"><h3 class="text-2xl font-bold text-white">Core Clojure & FP Concepts</h3> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div> <p class="text-sm text-gray-400 mt-2">Key Concepts: Immutability, Pure Functions, Concurrency, Recursion</p></button> <!></div></div>');function PM(n,e){Rt(e,!1);const[t,i]=sn(),r=()=>Kt(On,"$t",t);let a=ct("safe"),s=ct(!1),o=ct(!0),l=ct(!1),c=ct([]),d=0;const h={brain:'<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>',shield:'<svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',lock:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>',vault:'<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'};let u;function p(){clearInterval(u),u=setInterval(()=>{const re=d++,S=T(a)==="danger"&&Math.random()>.3?"danger":"safe",U={id:re,type:S,status:"moving",x:0};Ce(c,[...T(c),U]),T(c).length>10&&T(c).shift()},T(a)==="safe"?800:400)}let g;const x=50,m=95;function f(){Ce(c,T(c).map(re=>{if(re.status!=="moving")return re;const D=re.type==="danger"?.4:.2;let S=re.x+D;return S>=x&&S<x+2&&re.type==="danger"?(re.status="blocked",_(),re):(S>=m&&(re.status="success"),{...re,x:S})}).filter(re=>re.status!=="success"&&(re.status!=="blocked"||Math.random()>.05))),g=requestAnimationFrame(f)}function _(){Ce(s,!0),setTimeout(()=>Ce(s,!1),400)}Yn(()=>(p(),f(),()=>{clearInterval(u),cancelAnimationFrame(g)})),bi(()=>T(a),()=>{T(a)&&p()}),Ir(),Vt();var b=CM(),E=v(b),y=v(E),R=A(y,2),C=v(R),L=v(C);{var M=re=>{var D=MM();le(re,D)};tt(L,re=>{T(a)==="danger"&&re(M)})}var w=A(L,2),I=A(E,2);{var N=re=>{var D=EM(),S=v(D),U=v(S),q=v(U),Q=A(U,2),Y=A(S,2),oe=v(Y),ee=v(oe),me=A(oe,2),Ue=v(me),se=A(me,2),fe=v(se),Ae=A(Y,2),De=v(Ae);$e((ve,et,k,xe,he)=>{B(q,ve),B(ee,et),B(Ue,k),B(fe,xe),B(De,he)},[()=>r()("presentation.section3.demo.instruction"),()=>r()("presentation.section3.demo.step1"),()=>r()("presentation.section3.demo.step2"),()=>r()("presentation.section3.demo.step3"),()=>r()("presentation.section3.demo.conclusion")],ft),kt("click",Q,()=>Ce(o,!1)),en(3,D,()=>$n),le(re,D)};tt(I,re=>{T(o)&&re(N)})}var O=A(I,2),$=v(O),z=A(v($),4),V=v(z),H=A(V,2),J=v(H);dn(J,()=>h.brain);var ae=A(z,2),ie=v(ae),de=v(ie),Te=A($,2),_e=A(v(Te),2),Be=v(_e),Xe=A(Be,2),j=v(Xe),ne=v(j);dn(ne,()=>T(s)?h.lock:h.shield);var pe=A(_e,2),ke=v(pe),ge=v(ke),Ge=A(Te,2),dt=A(v(Ge),2),We=v(dt),je=v(We);dn(je,()=>h.vault);var Qe=A(Ge,2);zt(Qe,5,()=>T(c),re=>re.id,(re,D)=>{var S=AM(),U=Cn(S);{var q=oe=>{var ee=wM(),me=v(ee);$e(()=>{_n(ee,`
                            left: ${T(D).x??""}%; 
                            background-color: ${T(D).type==="danger"?"#ef4444":"#06b6d4"};
                            box-shadow: 0 0 10px ${T(D).type==="danger"?"#ef4444":"#06b6d4"};
                            opacity: ${T(D).status==="blocked"?0:1};
                            transform: scale(${T(D).status==="blocked"?2:1});
                        `),Me(me,1,`absolute right-0 top-1/2 -translate-y-1/2 w-12 h-1 bg-gradient-to-r from-transparent to-${T(D).type==="danger"?"red-500":"cyan-500"} opacity-50`)}),le(oe,ee)};tt(U,oe=>{(T(D).status==="moving"||T(D).status==="blocked")&&oe(q)})}var Q=A(U,2);{var Y=oe=>{var ee=TM();$e(()=>_n(ee,`left: ${T(D).x??""}%;`)),le(oe,ee)};tt(Q,oe=>{T(D).status==="blocked"&&oe(Y)})}le(re,S)});var ze=A(O,4),it=v(ze),F=v(it),Ie=A(v(F),2),Pe=A(it,2);{var He=re=>{var D=RM();en(3,D,()=>Tp,()=>({duration:400})),le(re,D)};tt(Pe,re=>{T(l)&&re(He)})}$e(()=>{Me(y,1,`px-6 py-2 rounded border transition-all duration-300
            ${T(a)==="safe"?"bg-cyan-900/50 border-cyan-500 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]":"border-gray-700 text-gray-500 hover:text-gray-300"}`),Me(R,1,`px-6 py-2 rounded border transition-all duration-300 flex items-center gap-2
            ${T(a)==="danger"?"bg-red-900/50 border-red-500 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.5)]":"border-gray-700 text-gray-500 hover:text-gray-300"}`),Me(w,1,`relative inline-flex rounded-full h-3 w-3 ${T(a)==="danger"?"bg-red-500":"bg-gray-500"}`),Me(z,1,`relative z-10 w-32 h-32 rounded-full border-2 ${T(a)==="danger"?"border-red-500/50 animate-pulse":"border-cyan-500/30"} flex items-center justify-center bg-black/50`),Me(V,1,`absolute inset-0 rounded-full border border-dashed ${T(a)==="danger"?"border-red-500/30 animate-[spin_1s_linear_infinite]":"border-cyan-500/20 animate-[spin_10s_linear_infinite]"}`),Me(H,1,`text-cyan-400 ${T(a)==="danger"?"text-red-500":""}`),Me(ie,1,`text-lg font-bold ${T(a)==="danger"?"text-red-400":"text-cyan-400"}`),B(de,T(a)==="danger"?"VOLATILITY SPIKE":"ACTIVE LOOP"),Me(Be,1,`absolute -inset-8 rounded-full bg-orange-500/10 blur-xl transition-opacity duration-200
                    ${T(s)?"opacity-100 scale-110":"opacity-0 scale-100"}`),Me(Xe,1,`relative w-40 h-40 border-4 transition-colors duration-300 rounded-lg flex items-center justify-center bg-gray-900
                    ${T(s)?"border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)]":"border-orange-500/30"}`),Me(j,1,`text-orange-500 transition-transform duration-200 ${T(s)?"scale-90 text-red-500":""}`),Me(ke,1,`text-lg font-bold ${T(s)?"text-red-400 animate-pulse":"text-orange-400"} transition-colors`),B(ge,T(s)?"COMPUTING INDICATORS":"PURE LOGIC"),Me(Ie,0,`w-6 h-6 text-purple-400 transition-transform duration-300 ${T(l)?"rotate-180":""}`)}),kt("click",y,()=>Ce(a,"safe")),kt("click",R,()=>Ce(a,"danger")),kt("click",it,()=>Ce(l,!T(l))),le(n,b),Ct(),i()}var IM=be('<div class="p-6 text-center text-indigo-300 font-mono text-sm md:text-base tracking-widest uppercase"> </div>'),LM=be('<div class="grid grid-cols-2 divide-x divide-white/5 hover:bg-white/5 transition-colors group"><div class="p-6 flex flex-col md:flex-row gap-4 items-start md:items-center text-right md:text-left justify-end md:justify-start"><div class="hidden md:block text-indigo-500/50 group-hover:text-indigo-400 transition-colors"><!></div> <div class="flex-1"><div class="text-gray-200 font-bold text-lg"> </div> <div class="text-gray-500 text-sm font-mono mt-1"> </div></div></div> <div class="p-6 flex flex-col md:flex-row gap-4 items-end md:items-center text-left"><div class="md:hidden text-indigo-500/50 group-hover:text-indigo-400 transition-colors mb-2"><!></div> <div class="flex-1"><div class="text-white font-bold text-lg"> </div> <div class="text-indigo-400/80 text-sm font-mono mt-1"> </div></div></div></div>'),DM=be('<div class="max-w-6xl w-full space-y-12"><div class="text-center space-y-4"><h3 class="text-xl text-accent font-mono tracking-wider"> </h3> <h4 class="text-2xl md:text-3xl font-bold text-white italic"> </h4> <div class="w-24 h-1 bg-accent mx-auto rounded-full"></div></div> <div class="bg-gradient-to-r from-accent/20 to-purple-900/20 border-l-4 border-accent p-8 rounded-r-xl max-w-4xl mx-auto shadow-lg shadow-accent/10 mb-12"><p class="text-xl md:text-2xl text-white font-light leading-relaxed italic text-center"> </p></div> <div class="w-full bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"><div class="grid grid-cols-2 divide-x divide-white/10 bg-white/5"></div> <div class="divide-y divide-white/5"></div></div></div>');function NM(n,e){Rt(e,!1);const[t,i]=sn(),r=()=>Kt(On,"$t",t),a=ct(),s=ct();let o=Ki(e,"baseKey",8,"presentation");const l={source:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>',norm:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',audit:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',decision:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>',runtime:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>',messaging:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>',ui:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',deployment:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>'};bi(()=>(r(),bo(o())),()=>{Ce(a,r()(`${o()}.section4.headers`))}),bi(()=>(r(),bo(o())),()=>{Ce(s,r()(`${o()}.section4.rows`))}),Ir(),Vt();var c=DM(),d=v(c),h=v(d),u=v(h),p=A(h,2),g=v(p),x=A(d,2),m=v(x),f=v(m),_=A(x,2),b=v(_);zt(b,5,()=>T(a),$t,(y,R)=>{var C=IM(),L=v(C);$e(()=>B(L,T(R))),le(y,C)});var E=A(b,2);zt(E,5,()=>Object.entries(T(s)),$t,(y,R)=>{let C=()=>T(R)[0],L=()=>T(R)[1];var M=LM(),w=v(M),I=v(w),N=v(I);dn(N,()=>l[C()]);var O=A(I,2),$=v(O),z=v($),V=A($,2),H=v(V),J=A(w,2),ae=v(J),ie=v(ae);dn(ie,()=>l[C()]);var de=A(ae,2),Te=v(de),_e=v(Te),Be=A(Te,2),Xe=v(Be);$e(()=>{B(z,L().fintech.title),B(H,L().fintech.detail),B(_e,L().healthcare.title),B(Xe,L().healthcare.detail)}),le(y,M)}),$e((y,R,C)=>{B(u,`04 // ${y??""}`),B(g,R),B(f,C)},[()=>r()(`${o()}.section4.title`),()=>r()(`${o()}.section4.subtitle`),()=>r()(`${o()}.section4.closing`)],ft),le(n,c),Ct(),i()}var UM=be('<div class="w-full h-full min-h-[400px] relative"><canvas></canvas> <div class="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-blue-500/10 rounded-full blur-[100px] z-0 transform scale-75 opacity-50"></div></div>');function FM(n,e){Rt(e,!1);let t=ct(),i=ct(),r,a,s,o,l,c,d=new Ke(100,100),h=new Ke(100,100),u=ct(!1),p={x:0,y:0},g={x:0,y:0},x={x:0,y:0};Yn(()=>{m(),y(),window.addEventListener("mousemove",b),window.addEventListener("resize",E),T(t).addEventListener("mousedown",f),T(t).addEventListener("mouseup",_),T(t).addEventListener("mouseleave",_)}),xf(()=>{o&&cancelAnimationFrame(o),window.removeEventListener("mousemove",b),window.removeEventListener("resize",E),T(t)&&(T(t).removeEventListener("mousedown",f),T(t).removeEventListener("mouseup",_),T(t).removeEventListener("mouseleave",_)),r&&r.dispose()});function m(){a=new Ud,s=new gn(45,T(t).clientWidth/T(t).clientHeight,.1,1e3),s.position.z=50,r=new Gd({canvas:T(i),antialias:!0,alpha:!0}),r.setPixelRatio(window.devicePixelRatio),r.setSize(T(t).clientWidth,T(t).clientHeight),r.setClearColor(0,0);const w=new mp(16777215,.2);a.add(w);const I=new Lo(16347926,2,100);I.position.set(10,20,30),a.add(I);const N=new Lo(3900150,2,100);N.position.set(-10,-20,-10),a.add(N);const O=new zd(10,3,200,32,2,3),$=new ha({color:16347926,wireframe:!0,transparent:!0,opacity:.8,side:Gn});l=new rn(O,$),a.add(l);const z=new _x({color:16777215,metalness:.9,roughness:.1,transparent:!0,opacity:0,side:Gn,envMapIntensity:1});c=new rn(O,z),a.add(c)}function f(w){Ce(u,!0),p={x:w.clientX,y:w.clientY}}function _(){Ce(u,!1)}function b(w){const I=T(t).getBoundingClientRect();if(h.x=(w.clientX-I.left)/I.width*2-1,h.y=-((w.clientY-I.top)/I.height)*2+1,T(u)){const N={x:w.clientX-p.x,y:w.clientY-p.y};x.x=N.y*.01,x.y=N.x*.01,g.x+=x.x,g.y+=x.y,p={x:w.clientX,y:w.clientY}}}function E(){s.aspect=T(t).clientWidth/T(t).clientHeight,s.updateProjectionMatrix(),r.setSize(T(t).clientWidth,T(t).clientHeight)}function y(){o=requestAnimationFrame(y),R()}function R(){if(d.x+=(h.x-d.x)*.05,d.y+=(h.y-d.y)*.05,T(u))l.rotation.x=g.x,l.rotation.y=g.y,c.rotation.x=g.x,c.rotation.y=g.y;else{const N=Date.now()*5e-4;x.x*=.95,x.y*=.95,g.x+=(N*.2-g.x)*.02,g.y+=(N*.5-g.y)*.02,l.rotation.x=g.x,l.rotation.y=g.y,c.rotation.x=g.x,c.rotation.y=g.y}const w=Math.sqrt(d.x*d.x+d.y*d.y);let I=Math.max(0,1-w/.8);l.material.opacity=.2+(1-I)*.6,c.material.opacity=I,s.position.x+=(d.x*10-s.position.x)*.02,s.position.y+=(d.y*10-s.position.y)*.02,s.lookAt(a.position),r.render(a,s)}Vt();var C=UM(),L=v(C);let M;ra(L,w=>Ce(i,w),()=>T(i)),ra(C,w=>Ce(t,w),()=>T(t)),$e(w=>M=Me(L,1,"absolute inset-0 z-10 outline-none",null,M,w),[()=>({"cursor-grab":!T(u),"cursor-grabbing":T(u)})],ft),le(n,C),Ct()}var OM=be(`<div class="w-full relative z-10 pointer-events-auto"><section><div class="max-w-4xl w-full text-center space-y-8"><div class="inline-block px-4 py-1 border border-cyan-500/30 rounded-full bg-cyan-900/10 text-cyan-400 font-mono text-sm tracking-widest mb-4">CONFIDENTIAL // INTERVIEW CANDIDATE</div> <h1 class="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-gray-500"> </h1> <h2 class="text-2xl md:text-3xl text-gray-400 font-light"> </h2></div></section> <section><div class="max-w-3xl w-full bg-black/40 backdrop-blur-md border border-white/10 p-12 rounded-2xl relative"><div class="absolute -top-3 -left-3 text-6xl text-cyan-500 font-serif">"</div> <h3 class="text-xl text-cyan-400 font-mono mb-4 tracking-wider"> </h3> <p class="text-lg md:text-xl text-gray-200 leading-relaxed font-light"> </p></div></section> <section class="min-h-screen flex flex-col items-center justify-center relative py-20 overflow-hidden bg-zinc-950"><h1 class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-zinc-900 select-none z-0 opacity-30 whitespace-nowrap">BUILDER</h1> <div class="relative z-10 w-full max-w-6xl px-6"><div class="flex items-center gap-4 mb-12 opacity-80"><span class="text-orange-500 font-mono text-sm">02 // THE MINDSET</span> <div class="h-px bg-zinc-800 flex-1"></div></div> <div class="grid md:grid-cols-5 gap-12 items-center"><div class="md:col-span-2 space-y-8 z-20 relative pointer-events-none"><h2 class="text-4xl md:text-5xl font-bold leading-tight text-white">Not just <br> <span class="text-zinc-500 line-through decoration-orange-500/50">executing tasks.</span></h2> <p class="text-xl text-zinc-300 font-light leading-relaxed border-l-2 border-orange-500 pl-6 bg-zinc-950/50 backdrop-blur-md p-4 rounded-r-lg">Building the <strong class="text-white font-medium">right tools</strong> to solve the problem.</p> <div class="pt-4 pointer-events-auto"><p class="text-sm text-zinc-500 mb-2 font-mono uppercase tracking-widest">The Evidence</p> <p class="text-zinc-400 text-sm max-w-md leading-relaxed">I built this interactive presentation platform from
                            scratch. <br> Why? To demonstrate that I own the entire stack: <span class="text-orange-400">From the complex backend logic represented by
                                the wireframe, to the polished user experience
                                you see materializing.</span></p></div></div> <div class="md:col-span-3 h-[500px] relative"><!> <div class="absolute bottom-4 right-4 text-right pointer-events-none z-30"><span class="text-[10px] uppercase tracking-widest text-zinc-600 font-bold bg-zinc-950/80 px-2 py-1 rounded">Interactive: Logic to Materialization</span></div></div></div></div></section> <section><div class="max-w-6xl w-full flex flex-col items-center gap-12"><div class="text-center max-w-3xl space-y-4"><h3 class="text-xl text-purple-400 font-mono tracking-wider"> </h3> <div class="text-sm text-gray-500 uppercase tracking-widest"> </div> <p class="text-lg text-gray-200 leading-relaxed font-light"> </p></div> <div class="w-full"><!></div></div></section> <section><div class="max-w-6xl w-full flex flex-col items-center gap-12"><h3 class="text-lg text-purple-400/50 font-mono tracking-wider w-full text-center">02.b // DEEP DIVE & DATA FLOW</h3> <div class="w-full"><!></div> <div class="w-full"><!></div></div></section> <section><div class="max-w-6xl w-full flex flex-col gap-12"><div class="text-center max-w-4xl mx-auto space-y-6"><h3 class="text-xl text-green-400 font-mono tracking-wider"> </h3> <div class="text-sm text-gray-500 uppercase tracking-widest mb-2"> </div> <div class="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-green-900/20 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm"><p class="text-lg text-cyan-300 font-medium mb-2"><!></p> <p class="text-sm text-gray-300 leading-relaxed"> </p></div> <p class="text-lg text-gray-200 leading-relaxed font-light"> </p> <p class="text-lg text-gray-200 leading-relaxed font-light"> </p></div> <div class="w-full"><!></div></div></section> <section><!></section> <section><div class="max-w-2xl w-full text-center space-y-8"><h3 class="text-xl text-white font-mono tracking-wider"> </h3> <p class="text-2xl md:text-3xl font-light text-gray-100 leading-snug"> </p> <div class="flex flex-col md:flex-row gap-6 justify-center items-center mt-12"><a href="https://linkedin.com/in/patrickcmserrano" target="_blank" class="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">LINKEDIN</a> <a href="https://github.com/patrickcmserrano" target="_blank" class="px-8 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded font-bold tracking-wide transition-all">GITHUB</a></div></div></section> <div class="h-12"></div></div>`);function BM(n,e){Rt(e,!1);const[t,i]=sn(),r=()=>Kt(On,"$t",t),a="min-h-screen w-full flex flex-col items-center justify-center snap-start p-8 relative";Vt();var s=OM(),o=v(s);Me(o,1,vn(a));var l=v(o),c=A(v(l),2),d=v(c),h=A(c,2),u=v(h),p=A(o,2);Me(p,1,vn(a));var g=v(p),x=A(v(g),2),m=v(x),f=A(x,2),_=v(f),b=A(p,2),E=A(v(b),2),y=A(v(E),2),R=A(v(y),2),C=v(R);FM(C,{});var L=A(b,2);Me(L,1,vn(a));var M=v(L),w=v(M),I=v(w),N=v(I),O=A(I,2),$=v(O),z=A(O,2),V=v(z),H=A(w,2),J=v(H);gM(J,{});var ae=A(L,2);Me(ae,1,vn(a));var ie=v(ae),de=A(v(ie),2),Te=v(de);yM(Te,{});var _e=A(de,2),Be=v(_e);_M(Be,{});var Xe=A(ae,2);Me(Xe,1,vn(a));var j=v(Xe),ne=v(j),pe=v(ne),ke=v(pe),ge=A(pe,2),Ge=v(ge),dt=A(ge,2),We=v(dt),je=v(We);dn(je,()=>r()("presentation.section3.subtitle"));var Qe=A(We,2),ze=v(Qe),it=A(dt,2),F=v(it),Ie=A(it,2),Pe=v(Ie),He=A(ne,2),re=v(He);PM(re,{});var D=A(Xe,2);Me(D,1,vn(a));var S=v(D);NM(S,{});var U=A(D,2);Me(U,1,vn(a));var q=v(U),Q=v(q),Y=v(Q),oe=A(Q,2),ee=v(oe);$e((me,Ue,se,fe,Ae,De,ve,et,k,xe,he,Re,ue,te)=>{B(d,me),B(u,Ue),B(m,`01 // ${se??""}`),B(_,fe),B(N,`02 // ${Ae??""}`),B($,De),B(V,ve),B(ke,`03 // ${et??""}`),B(Ge,k),B(ze,xe),B(F,he),B(Pe,Re),B(Y,ue),B(ee,te)},[()=>r()("presentation.title"),()=>r()("presentation.subtitle"),()=>r()("presentation.section1.title"),()=>r()("presentation.section1.text"),()=>r()("presentation.section2.title"),()=>r()("presentation.section2.subtitle"),()=>r()("presentation.section2.intro"),()=>r()("presentation.section3.title"),()=>r()("presentation.section3.role"),()=>r()("presentation.section3.subtitle2"),()=>r()("presentation.section3.intro"),()=>r()("presentation.section3.intro2"),()=>r()("presentation.section5.title"),()=>r()("presentation.section5.text")],ft),en(1,o,()=>$n),le(n,s),Ct(),i()}/**
 * @license @lucide/svelte v0.503.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */const kM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var zM=ba("<svg><!><!></svg>");function HM(n,e){Rt(e,!0);const t=Ki(e,"color",3,"currentColor"),i=Ki(e,"size",3,24),r=Ki(e,"strokeWidth",3,2),a=Ki(e,"absoluteStrokeWidth",3,!1),s=Ki(e,"iconNode",19,()=>[]),o=gf(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var l=zM();let c;var d=v(l);zt(d,17,s,$t,(u,p)=>{let g=()=>T(p)[0],x=()=>T(p)[1];var m=or(),f=Cn(m);r0(f,g,!0,(_,b)=>{let E;$e(()=>E=au(_,E,{...x()}))}),le(u,m)});var h=A(d);df(h,()=>e.children??cn),$e(u=>c=au(l,c,{...kM,...o,width:i(),height:i(),stroke:t(),"stroke-width":u,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>a()?Number(r())*24/Number(i()):r()]),le(n,l),Ct()}function Ap(n,e){Rt(e,!0);let t=gf(e,["$$slots","$$events","$$legacy"]);HM(n,x0({name:"arrow-left"},()=>t,{iconNode:[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]],children:(r,a)=>{var s=or(),o=Cn(s);df(o,()=>e.children??cn),le(r,s)},$$slots:{default:!0}})),Ct()}var VM=ba("<path></path><path></path><path></path>",1),GM=ba('<circle r="4.5" opacity="0.9"><animateMotion dur="1.7s" repeatCount="indefinite"><mpath></mpath></animateMotion></circle>'),WM=ba('<rect rx="6" stroke-width="1"></rect><text text-anchor="middle" font-size="12.5" font-family="monospace" font-weight="bold"> </text><text text-anchor="middle" fill="rgba(255,255,255,0.30)" font-size="9" font-family="monospace"> </text><line stroke-width="0.8" stroke-dasharray="5 4"></line><!><rect rx="8" stroke-width="1.2"></rect><rect rx="8" fill="none" stroke-width="4" opacity="0.07"></rect><text text-anchor="middle" font-size="12.5" font-family="monospace" font-weight="bold" letter-spacing="0.3"> </text><text text-anchor="middle" fill="rgba(255,255,255,0.32)" font-size="9" font-family="monospace"><!> </text><path fill="none" stroke-width="0.8" stroke-dasharray="5 4"></path><path fill="none" stroke-width="0.8" stroke-dasharray="5 4"></path><circle r="4" opacity="0.88"><animateMotion dur="1.1s" repeatCount="indefinite"><mpath></mpath></animateMotion></circle><circle r="4" opacity="0.88"><animateMotion dur="1.1s" repeatCount="indefinite"><mpath></mpath></animateMotion></circle><rect rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" stroke-width="0.7"></rect><text text-anchor="middle" fill="rgba(255,255,255,0.70)" font-size="11" font-family="monospace"> </text><rect rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" stroke-width="0.7"></rect><text text-anchor="middle" fill="rgba(255,255,255,0.70)" font-size="11" font-family="monospace"> </text>',1),$M=be('<div class="w-full bg-black/20 border border-white/10 rounded-xl overflow-hidden p-4"><div class="flex items-center justify-between mb-3 px-2"><span class="text-[10px] font-mono text-gray-600 uppercase tracking-widest">publishers</span> <span class="text-[10px] font-mono text-white/40 uppercase tracking-widest">nats subject bus</span> <span class="text-[10px] font-mono text-gray-600 uppercase tracking-widest">subscribers</span></div> <svg viewBox="0 0 845 402" class="w-full" style="height: auto;" xmlns="http://www.w3.org/2000/svg"><defs></defs><!><rect x="338" y="156" width="166" height="18" rx="9" fill="rgba(0,255,148,0.14)" stroke="rgba(0,255,148,0.45)" stroke-width="0.6"></rect><text x="421" y="169" text-anchor="middle" fill="#00FF94" font-size="8.5" font-family="monospace">new symbols auto-picked up</text><line x1="200" x2="645" stroke="rgba(255,255,255,0.07)" stroke-width="0.6"></line><rect x="200" width="195" height="26" rx="5" fill="rgba(0,255,148,0.05)" stroke="rgba(0,255,148,0.25)" stroke-width="0.7"></rect><text x="297" text-anchor="middle" fill="rgba(0,255,148,0.80)" font-size="10" font-family="monospace" font-weight="bold">KV: MARKET_STATE</text><text x="297" text-anchor="middle" fill="rgba(255,255,255,0.22)" font-size="7.5" font-family="monospace">latest snapshot / sym×tf</text><rect x="410" width="235" height="26" rx="5" fill="rgba(0,255,148,0.05)" stroke="rgba(0,255,148,0.25)" stroke-width="0.7"></rect><text x="527" text-anchor="middle" fill="rgba(0,255,148,0.80)" font-size="10" font-family="monospace" font-weight="bold">KV: STRATEGY_STATE</text><text x="527" text-anchor="middle" fill="rgba(255,255,255,0.22)" font-size="7.5" font-family="monospace">last 50 state transitions</text></svg></div>');function XM(n){const h=[{y:75,publisher:"Collectors",publisherSub:"Bitget · Binance · Yahoo",subject:"market.kline.<sym>.<tf>",retention:"7 days",wildcard:!1,color:"#f97316",colorDim:"rgba(249,115,22,0.12)",strokeDim:"rgba(249,115,22,0.40)",consumers:["FractalEngine","Nexus Terminal"],pulseBegin:["0s","1.1s"],fanBegin:["1.6s","2.1s"]},{y:193,publisher:"FractalEngine",publisherSub:"1 instance / sym×tf",subject:"market.analyzed.*",retention:"7 days",wildcard:!0,color:"#00FF94",colorDim:"rgba(0,255,148,0.09)",strokeDim:"rgba(0,255,148,0.42)",consumers:["AlligatorTrend","API Server"],pulseBegin:["0.4s","1.5s"],fanBegin:["2.0s","2.5s"]},{y:311,publisher:"AlligatorTrend",publisherSub:"BTCUSDT · XAUUSDT",subject:"signals.trade.<sym>",retention:"30 days",wildcard:!1,color:"#a78bfa",colorDim:"rgba(167,139,250,0.09)",strokeDim:"rgba(167,139,250,0.38)",consumers:["PaperBroker","WebSocket"],pulseBegin:["0.8s","1.9s"],fanBegin:["2.4s","2.9s"]}];function u(I){return`M 158 ${I} L 300 ${I}`}function p(I){return`M 545 ${I} Q 587 ${I} 670 ${I-32}`}function g(I){return`M 545 ${I} Q 587 ${I} 670 ${I+32}`}const x=368;var m=$M(),f=A(v(m),2),_=v(f);zt(_,5,()=>h,$t,(I,N,O)=>{var $=VM(),z=Cn($);Se(z,"id",`ps${O}`);var V=A(z);Se(V,"id",`sc1${O}`);var H=A(V);Se(H,"id",`sc2${O}`),$e((J,ae,ie)=>{Se(z,"d",J),Se(V,"d",ae),Se(H,"d",ie)},[()=>u(T(N).y),()=>p(T(N).y),()=>g(T(N).y)],ft),le(I,$)});var b=A(_);zt(b,1,()=>h,$t,(I,N,O)=>{var $=WM(),z=Cn($);Se(z,"x",8),Se(z,"width",150),Se(z,"height",54);var V=A(z);Se(V,"x",8+150/2);var H=v(V),J=A(V);Se(J,"x",8+150/2);var ae=v(J),ie=A(J);Se(ie,"x1",158),Se(ie,"x2",300);var de=A(ie);zt(de,1,()=>T(N).pulseBegin,$t,(S,U)=>{var q=GM(),Q=v(q),Y=v(Q);Se(Y,"href",`#ps${O}`),$e(()=>{Se(q,"fill",T(N).color),Se(Q,"begin",T(U))}),le(S,q)});var Te=A(de);Se(Te,"x",300),Se(Te,"width",245),Se(Te,"height",60);var _e=A(Te);Se(_e,"x",300),Se(_e,"width",245),Se(_e,"height",60);var Be=A(_e);Se(Be,"x",300+245/2);var Xe=v(Be),j=A(Be);Se(j,"x",300+245/2);var ne=v(j);{var pe=S=>{var U=Ni("wildcard ·");le(S,U)};tt(ne,S=>{T(N).wildcard&&S(pe)})}var ke=A(ne),ge=A(j),Ge=A(ge),dt=A(Ge),We=v(dt),je=v(We);Se(je,"href",`#sc1${O}`);var Qe=A(dt),ze=v(Qe),it=v(ze);Se(it,"href",`#sc2${O}`);var F=A(Qe);Se(F,"x",670),Se(F,"width",160),Se(F,"height",34);var Ie=A(F);Se(Ie,"x",670+160/2);var Pe=v(Ie),He=A(Ie);Se(He,"x",670),Se(He,"width",160),Se(He,"height",34);var re=A(He);Se(re,"x",670+160/2);var D=v(re);$e((S,U)=>{Se(z,"y",T(N).y-54/2),Se(z,"fill",T(N).colorDim),Se(z,"stroke",T(N).strokeDim),Se(V,"y",T(N).y-7),Se(V,"fill",T(N).color),B(H,T(N).publisher),Se(J,"y",T(N).y+11),B(ae,T(N).publisherSub),Se(ie,"y1",T(N).y),Se(ie,"y2",T(N).y),Se(ie,"stroke",T(N).strokeDim),Se(Te,"y",T(N).y-60/2),Se(Te,"fill",T(N).colorDim),Se(Te,"stroke",T(N).color),Se(_e,"y",T(N).y-60/2),Se(_e,"stroke",T(N).color),Se(Be,"y",T(N).y-8),Se(Be,"fill",T(N).color),B(Xe,T(N).subject),Se(j,"y",T(N).y+11),B(ke,`${T(N).retention??""} retention`),Se(ge,"d",S),Se(ge,"stroke",T(N).strokeDim),Se(Ge,"d",U),Se(Ge,"stroke",T(N).strokeDim),Se(dt,"fill",T(N).color),Se(We,"begin",T(N).fanBegin[0]),Se(Qe,"fill",T(N).color),Se(ze,"begin",T(N).fanBegin[1]),Se(F,"y",T(N).y-32-34/2),Se(Ie,"y",T(N).y-32+6),B(Pe,T(N).consumers[0]),Se(He,"y",T(N).y+32-34/2),Se(re,"y",T(N).y+32+6),B(D,T(N).consumers[1])},[()=>p(T(N).y),()=>g(T(N).y)],ft),le(I,$)});var E=A(b,3);Se(E,"y1",x-12),Se(E,"y2",x-12);var y=A(E);Se(y,"y",x);var R=A(y);Se(R,"y",x+11);var C=A(R);Se(C,"y",x+23);var L=A(C);Se(L,"y",x);var M=A(L);Se(M,"y",x+11);var w=A(M);Se(w,"y",x+23),le(n,m)}var qM=be('<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>'),YM=be('<div class="mb-8 max-w-3xl mx-auto bg-black/60 border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm"><div class="flex items-start justify-between mb-4"><h4 class="text-[#00FF94] font-mono text-sm uppercase tracking-widest">Interactive Simulation Guide</h4> <button class="text-gray-500 hover:text-gray-300 transition-colors">✕</button></div> <ol class="space-y-2 text-xs text-gray-300 list-decimal list-inside"><li>Observe the <strong>Collectors (Go)</strong> ingesting real-time market data via NATS.</li> <li>The <strong>Fractal Engine (Logic)</strong> analyzes incoming streams for unified patterns.</li> <li>Click <strong>VOLATILITY SPIKE</strong> to see how the hybrid ecosystem reacts to turbulence.</li></ol> <p class="mt-4 text-xs text-gray-400 italic border-t border-gray-700 pt-4">This simulation demonstrates the synergy of the multi-language reactive pipeline.</p></div>'),jM=be('<div class="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-lg transition-transform duration-75"><div class="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-1 opacity-50"></div></div>'),KM=be('<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-red-500 rounded-full animate-ping opacity-0"></div>'),ZM=be("<!> <!>",1),JM=be('<div class="space-y-6"><div class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🛠️</div> <div class="flex-1"><h4 class="text-xl font-bold text-[#00FF94] mb-2">1. Hybrid Architecture (Clojure + Go)</h4> <p class="text-sm text-gray-300 mb-3">Using the right tool for each operational constraint, maximizing both developer velocity and system performance.</p> <div class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"><p class="text-sm text-[#00FF94]/90 italic">"A synergistic approach where high-level abstractions meet low-level efficiency."</p></div></div></div></div> <div class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🧪</div> <div class="flex-1"><h4 class="text-xl font-bold text-[#00FF94] mb-2">2. Strategy Discovery (Clojure)</h4> <p class="text-sm text-gray-300 mb-3">Expressive modeling and REPL-driven research for rapid iteration on complex trading hypotheses.</p> <div class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"><p class="text-sm text-[#00FF94]/90 italic">"Leveraging functional programming for robust, verifiable market analysis."</p></div></div></div></div> <div class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🏎️</div> <div class="flex-1"><h4 class="text-xl font-bold text-[#00FF94] mb-2">3. Edge Execution (Go)</h4> <p class="text-sm text-gray-300 mb-3">Low-latency performance and high concurrency in production, ensuring split-second execution precision.</p> <div class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"><p class="text-sm text-[#00FF94]/90 italic">"Optimized binaries handling massive data throughput with minimal jitter."</p></div></div></div></div> <div class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🚌</div> <div class="flex-1"><h4 class="text-xl font-bold text-[#00FF94] mb-2">4. Universal Data Bus (NATS)</h4> <p class="text-sm text-gray-300 mb-3">Decoupling runtimes through a common event language, enabling seamless communication across the entire stack.</p> <div class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"><p class="text-sm text-[#00FF94]/90 italic">"NATS JetStream provides the backbone for a truly reactive and modular ecosystem."</p></div></div></div></div> <div class="bg-gradient-to-r from-gray-900 to-black border border-[#00FF94]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#00FF94]/50 transition-all duration-300"><div class="flex items-start gap-4"><div class="text-4xl">🌍</div> <div class="flex-1"><h4 class="text-xl font-bold text-[#00FF94] mb-2">5. Multi-Language Ecosystem</h4> <p class="text-sm text-gray-300 mb-3">A platform where Clojure, Go, and Python coexist via JetStream, leveraging the best of each language.</p> <div class="bg-black/40 border-l-4 border-[#00FF94] p-3 mb-3 rounded"><p class="text-sm text-[#00FF94]/90 italic">"Interoperability without compromise, designed for the future of quantitative finance."</p></div></div></div></div></div>'),QM=be('<div class="w-full max-w-5xl mx-auto p-4 md:p-8 font-mono"><div class="flex justify-center gap-4 mb-12"><button>NORMAL OPERATION</button> <button><span class="relative flex h-3 w-3"><!> <span></span></span> VOLATILITY SPIKE</button></div> <!> <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 bg-black/20 border border-gray-800 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl"><div class="relative p-8 border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px] group pointer-events-auto"><div class="absolute inset-0 bg-[#00FF94]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <div class="absolute top-4 left-4 text-xs text-[#00FF94] tracking-widest">MODULE: COLLECTORS</div> <div><div></div> <div><!></div></div> <div class="mt-6 text-center"><div> </div> <div class="text-xs text-gray-500 mt-1">Go / NATS</div></div></div> <div class="relative p-8 border-r border-gray-800/50 flex flex-col items-center justify-center min-h-[300px] pointer-events-auto"><div class="absolute top-4 left-4 text-xs text-[#00FF94] tracking-widest">MODULE: FRACTAL ENGINE</div> <div class="relative z-20"><div></div> <div><div><!></div> <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-8 bg-gray-700"></div> <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-px h-8 bg-gray-700"></div></div></div> <div class="mt-8 text-center z-10"><div> </div> <div class="text-xs text-gray-500 mt-1">Logic / Indicators</div></div></div> <div class="relative p-8 flex flex-col items-center justify-center min-h-[300px] pointer-events-auto"><div class="absolute top-4 left-4 text-xs text-[#00FF94] tracking-widest">MODULE: STRATEGY ENGINE</div> <div class="relative z-10 w-32 h-32 rounded border-2 border-[#00FF94]/30 flex items-center justify-center bg-[#00FF94]/5 shadow-[0_0_20px_rgba(0,255,148,0.1)]"><div class="text-[#00FF94]"><!></div></div> <div class="mt-6 text-center"><div class="text-lg font-bold text-[#00FF94]">EXECUTION SIGNALS</div> <div class="text-xs text-gray-500 mt-1">Go / NATS</div></div></div> <div class="absolute inset-0 pointer-events-none overflow-hidden"></div></div> <div class="mt-12 max-w-6xl mx-auto space-y-8"><button class="w-full text-center mb-8 group cursor-pointer bg-gradient-to-r from-gray-900/50 to-black border border-gray-700 hover:border-[#00FF94]/50 rounded-xl p-6 transition-all duration-300"><div class="flex items-center justify-center gap-4"><h3 class="text-2xl font-bold text-white">Ark Streams Technical Pillars</h3> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div> <p class="text-sm text-gray-400 mt-2">Hybrid High-Performance Reactive Trading Infrastructure</p></button> <!></div></div>');function eE(n,e){Rt(e,!1);let t=ct("safe"),i=ct(!1),r=ct(!0),a=ct(!1),s=ct([]),o=0;const l={collectors:'<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 1.1.9 2 2 2h12a2 2 0 002-2V7M4 7a2 2 0 012-2h12a2 2 0 012 2M4 7l8 5 8-5M12 12v7"></path></svg>',fractal:'<svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>',strategy:'<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',lock:'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>'};let c;function d(){clearInterval(c),c=setInterval(()=>{const Pe=T(t)==="danger"&&Math.random()>.3?"danger":"safe",He={id:o++,type:Pe,status:"moving",x:0};Ce(s,[...T(s),He]),T(s).length>15&&T(s).shift()},T(t)==="safe"?800:400)}let h;const u=50,p=95;function g(){Ce(s,T(s).map(Ie=>{if(Ie.status!=="moving")return Ie;const Pe=Ie.type==="danger"?.6:.3;let He=Ie.x+Pe;return He>=u&&He<u+2&&Ie.type==="danger"?(Ie.status="blocked",x(),Ie):(He>=p&&(Ie.status="success"),{...Ie,x:He})}).filter(Ie=>Ie.status!=="success"&&(Ie.status!=="blocked"||Math.random()>.05))),h=requestAnimationFrame(g)}function x(){Ce(i,!0),setTimeout(()=>Ce(i,!1),400)}Yn(()=>(d(),g(),()=>{clearInterval(c),cancelAnimationFrame(h)})),bi(()=>T(t),()=>{T(t)&&d()}),Ir(),Vt();var m=QM(),f=v(m),_=v(f),b=A(_,2),E=v(b),y=v(E);{var R=Ie=>{var Pe=qM();le(Ie,Pe)};tt(y,Ie=>{T(t)==="danger"&&Ie(R)})}var C=A(y,2),L=A(f,2);{var M=Ie=>{var Pe=YM(),He=v(Pe),re=A(v(He),2);kt("click",re,()=>Ce(r,!1)),en(3,Pe,()=>$n),le(Ie,Pe)};tt(L,Ie=>{T(r)&&Ie(M)})}var w=A(L,2),I=v(w),N=A(v(I),4),O=v(N),$=A(O,2),z=v($);dn(z,()=>l.collectors);var V=A(N,2),H=v(V),J=v(H),ae=A(I,2),ie=A(v(ae),2),de=v(ie),Te=A(de,2),_e=v(Te),Be=v(_e);dn(Be,()=>T(i)?l.lock:l.fractal);var Xe=A(ie,2),j=v(Xe),ne=v(j),pe=A(ae,2),ke=A(v(pe),2),ge=v(ke),Ge=v(ge);dn(Ge,()=>l.strategy);var dt=A(pe,2);zt(dt,5,()=>T(s),Ie=>Ie.id,(Ie,Pe)=>{var He=ZM(),re=Cn(He);{var D=q=>{var Q=jM(),Y=v(Q);$e(()=>{_n(Q,`
                            left: ${T(Pe).x??""}%; 
                            background-color: ${T(Pe).type==="danger"?"#ef4444":"#00FF94"};
                            box-shadow: 0 0 10px ${T(Pe).type==="danger"?"#ef4444":"#00FF94"};
                            opacity: ${T(Pe).status==="blocked"?0:1};
                            transform: scale(${T(Pe).status==="blocked"?2:1});
                        `),_n(Y,`background: linear-gradient(to right, transparent, ${T(Pe).type==="danger"?"#ef4444":"#00FF94"})`)}),le(q,Q)};tt(re,q=>{(T(Pe).status==="moving"||T(Pe).status==="blocked")&&q(D)})}var S=A(re,2);{var U=q=>{var Q=KM();$e(()=>_n(Q,`left: ${T(Pe).x??""}%;`)),le(q,Q)};tt(S,q=>{T(Pe).status==="blocked"&&q(U)})}le(Ie,He)});var We=A(w,2),je=v(We),Qe=v(je),ze=A(v(Qe),2),it=A(je,2);{var F=Ie=>{var Pe=JM();en(3,Pe,()=>Tp,()=>({duration:400})),le(Ie,Pe)};tt(it,Ie=>{T(a)&&Ie(F)})}$e(()=>{Me(_,1,`px-6 py-2 rounded border transition-all duration-300
            ${T(t)==="safe"?"bg-[#00FF94]/20 border-[#00FF94] text-[#00FF94] shadow-[0_0_15px_rgba(0,255,148,0.5)]":"border-gray-700 text-gray-500 hover:text-gray-300"}`),Me(b,1,`px-6 py-2 rounded border transition-all duration-300 flex items-center gap-2
            ${T(t)==="danger"?"bg-red-900/50 border-red-500 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.5)]":"border-gray-700 text-gray-500 hover:text-gray-300"}`),Me(C,1,`relative inline-flex rounded-full h-3 w-3 ${T(t)==="danger"?"bg-red-500":"bg-gray-500"}`),Me(N,1,`relative z-10 w-32 h-32 rounded-full border-2 ${T(t)==="danger"?"border-red-500/50 animate-pulse":"border-[#00FF94]/30"} flex items-center justify-center bg-black/20`),Me(O,1,`absolute inset-0 rounded-full border border-dashed ${T(t)==="danger"?"border-red-500/30 animate-[spin_1s_linear_infinite]":"border-[#00FF94]/20 animate-[spin_10s_linear_infinite]"}`),Me($,1,`text-[#00FF94] ${T(t)==="danger"?"text-red-500":""}`),Me(H,1,`text-lg font-bold ${T(t)==="danger"?"text-red-400":"text-[#00FF94]"}`),B(J,T(t)==="danger"?"VOLATILITY SPIKE":"ACTIVE INGESTION"),Me(de,1,`absolute -inset-8 rounded-full bg-[#00FF94]/10 blur-xl transition-opacity duration-200
                    ${T(i)?"opacity-100 scale-110":"opacity-0 scale-100"}`),Me(Te,1,`relative w-40 h-40 border-4 transition-colors duration-300 rounded-lg flex items-center justify-center bg-gray-900/40
                    ${T(i)?"border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)]":"border-[#00FF94]/30"}`),Me(_e,1,`text-[#00FF94] transition-transform duration-200 ${T(i)?"scale-90 text-red-500":""}`),Me(j,1,`text-lg font-bold ${T(i)?"text-red-400 animate-pulse":"text-[#00FF94]"} transition-colors`),B(ne,T(i)?"COMPUTING FRACTALS":"PURE ANALYSIS"),Me(ze,0,`w-6 h-6 text-[#00FF94] transition-transform duration-300 ${T(a)?"rotate-180":""}`)}),kt("click",_,()=>Ce(t,"safe")),kt("click",b,()=>Ce(t,"danger")),kt("click",je,()=>Ce(a,!T(a))),le(n,m),Ct()}var tE=be('<div class="flex items-start gap-3 p-4 border border-white/10 rounded-xl bg-white/5"><span class="text-accent font-mono text-lg leading-none mt-0.5">▸</span> <span class="text-gray-300 text-sm"> </span></div>'),nE=be('<span class="px-3 py-1.5 border border-accent/30 rounded-full bg-accent/5 text-accent font-mono text-xs"> </span>'),iE=be('<div class="grid grid-cols-12 text-xs border-b border-white/5 hover:bg-white/5 transition-colors"><div class="col-span-1 p-3 text-center text-gray-600 font-mono"> </div> <div class="col-span-3 p-3 text-gray-300 font-medium"> </div> <div class="col-span-4 p-3 text-accent/90"> </div> <div class="col-span-4 p-3 text-red-400/90"> </div></div>'),rE=be('<div class="p-3 border border-red-400/20 rounded-lg bg-red-400/5"><div class="text-red-400 font-mono text-xs font-bold mb-1"> </div> <div class="text-gray-400 text-xs"> </div></div>'),aE=be('<span class="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent font-mono">● LIVE</span>'),sE=be('<li class="text-xs text-gray-400 flex items-start gap-2"><span class="text-gray-600 mt-0.5">–</span> </li>'),oE=be('<div><div class="flex items-center justify-between"><span class="font-mono text-xs tracking-widest"> </span> <!></div> <h4 class="font-bold text-white text-sm"> </h4> <ul class="space-y-1"></ul></div>'),lE=be('<div class="w-full relative z-10 pointer-events-auto text-white"><a href="#/" class="fixed top-8 left-8 z-50 inline-flex items-center gap-2 text-accent font-mono hover:opacity-70 transition-opacity bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"><!> </a> <section><div class="max-w-4xl w-full text-center space-y-8"><div class="flex flex-wrap justify-center gap-3 mb-4"><span class="px-3 py-1 border border-accent/40 rounded-full bg-accent/10 text-accent font-mono text-xs tracking-widest uppercase">Go 1.23</span> <span class="px-3 py-1 border border-blue-400/40 rounded-full bg-blue-400/10 text-blue-400 font-mono text-xs tracking-widest uppercase">NATS JetStream</span> <span class="px-3 py-1 border border-purple-400/40 rounded-full bg-purple-400/10 text-purple-400 font-mono text-xs tracking-widest uppercase">Wails Desktop</span></div> <h1 class="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-gray-500 uppercase tracking-tighter">ARK STREAMS</h1> <h2 class="text-xl md:text-2xl text-gray-400 font-light"> </h2> <div class="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto"><div class="text-center"><div class="text-2xl font-bold text-accent font-mono">7d</div> <div class="text-xs text-gray-500 uppercase tracking-widest mt-1">Market Data</div></div> <div class="text-center border-x border-white/10"><div class="text-2xl font-bold text-accent font-mono">365d</div> <div class="text-xs text-gray-500 uppercase tracking-widest mt-1">Strategy Audit</div></div> <div class="text-center"><div class="text-2xl font-bold text-accent font-mono">∞</div> <div class="text-xs text-gray-500 uppercase tracking-widest mt-1">Replayable</div></div></div></div></section> <section><div class="max-w-3xl w-full space-y-10"><h3 class="text-xl text-accent font-mono tracking-wider uppercase text-center"> </h3> <div class="bg-black/20 backdrop-blur-md border border-white/10 p-10 rounded-2xl relative"><div class="absolute -top-3 -left-3 text-6xl text-accent font-serif">"</div> <p class="text-lg md:text-xl text-gray-200 leading-relaxed font-light"> </p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"></div></div></section> <section><div class="max-w-6xl w-full flex flex-col items-center gap-6"><div class="text-center space-y-2"><h3 class="text-xl text-accent font-mono tracking-wider uppercase"> </h3> <div class="text-sm text-gray-500 uppercase tracking-widest"> </div></div> <div class="w-full"><!></div></div></section> <section><div class="max-w-6xl w-full flex flex-col gap-10"><div class="text-center max-w-4xl mx-auto space-y-4"><h3 class="text-xl text-accent font-mono tracking-wider uppercase"> </h3> <div class="text-sm text-gray-500 uppercase tracking-widest"> </div> <div class="bg-gradient-to-r from-accent/20 via-purple-900/20 to-accent/20 border border-accent/30 rounded-xl p-5 backdrop-blur-sm"><p class="text-base text-accent font-mono mb-1"> </p> <p class="text-xs text-gray-400"> </p></div></div> <div class="w-full"><!></div> <div class="flex flex-wrap justify-center gap-3"></div></div></section> <section><div class="max-w-5xl w-full space-y-8"><div class="text-center space-y-2"><h3 class="text-xl text-accent font-mono tracking-wider uppercase"> </h3> <p class="text-gray-500 text-sm"> </p></div> <div class="w-full overflow-hidden border border-white/10 rounded-xl bg-black/20 backdrop-blur-sm"><div class="grid grid-cols-12 text-xs font-mono uppercase tracking-widest text-gray-500 bg-white/5 border-b border-white/10"><div class="col-span-1 p-3 text-center">#</div> <div class="col-span-3 p-3">Filter</div> <div class="col-span-4 p-3 text-accent/80">▲ Long</div> <div class="col-span-4 p-3 text-red-400/80">▼ Short</div></div> <!></div> <div class="space-y-2"><div class="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">Exit Conditions — first to trigger wins</div> <div class="grid grid-cols-2 md:grid-cols-4 gap-3"></div></div> <div class="p-4 border border-white/10 rounded-lg bg-white/5 text-xs text-gray-400 font-mono"><span class="text-accent">PaperBroker</span> — in-memory matching engine · position pyramiding · MFE/MAE tracking · FixedFractionalRM · used for live paper trading and backtests</div></div></section> <section><div class="max-w-5xl w-full space-y-8"><div class="text-center space-y-2"><h3 class="text-xl text-accent font-mono tracking-wider uppercase"> </h3> <p class="text-gray-500 text-sm"> </p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"></div></div></section> <section><div class="max-w-2xl w-full text-center space-y-8"><p class="text-3xl md:text-5xl font-mono text-white leading-snug uppercase tracking-tighter"> </p> <div class="flex justify-center gap-8 mt-12 opacity-50 text-xs font-mono tracking-widest uppercase"><span> </span> <span>•</span> <span> </span> <span>•</span> <span> </span></div> <div class="flex flex-col md:flex-row gap-6 justify-center items-center mt-12"><a href="#/" class="px-8 py-3 bg-accent hover:bg-accent/80 text-black rounded font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(0,255,148,0.3)]">BACK TO HOME</a></div></div></section> <div class="h-12"></div></div>');function cE(n,e){Rt(e,!1);const[t,i]=sn(),r=()=>Kt(On,"$t",t),a="min-h-screen w-full flex flex-col items-center justify-center snap-start p-8 relative",s=[{id:"01",label:"Alligator Transition",long:"Bias just turned Bullish",short:"Bias just turned Bearish"},{id:"02",label:"Alligator Spread",long:"Jaw/teeth/lips spread above threshold",short:"Same"},{id:"03",label:"BB Squeeze Gate",long:"BB width above 50th percentile (last 300 bars)",short:"Same"},{id:"04",label:"Awesome Oscillator",long:"AO > 0 and accelerating (green bar)",short:"AO < 0 and accelerating (red bar)"},{id:"05",label:"Gator Mouth",long:"Current mouth wider than previous bar",short:"Same"},{id:"06",label:"Vol + MFI",long:"—",short:"Volume above SMA and MFI in GREEN or FAKE quadrant"}],o=[{label:"Take Profit",detail:"2 × ATR(14) from entry"},{label:"Stop Loss",detail:"2 × ATR(14) on the opposite side"},{label:"Trend Reversal",detail:"Alligator bias flips against position"},{label:"Teeth Touch",detail:"Price touches teeth with 2-bar debounce"}],l=[{phase:"PHASE 1",name:"Single-Node Intelligence",status:"current",items:["Single Go binary, all workers","NATS persists everything","AlligatorTrend on BTCUSDT + XAUUSDT","Nexus Terminal desktop"]},{phase:"PHASE 2",name:"Symbol & Exchange Expansion",status:"next",items:["Symbol-agnostic pipeline","New pair = new collector only","Strategies pick up via market.analyzed.*","Liquidation heatmap (KV price bins)"]},{phase:"PHASE 3",name:"Intelligence Layer",status:"soon",items:["On-chain integration (Aave/Compound)","AI Snapshot API → LLM context","Agentic tools (function-calling)","CoinGlass + global liquidation data"]},{phase:"PHASE 4",name:"Distributed Cluster",status:"later",items:["3-node NATS JetStream cluster","Raft consensus, stream replication","Independent Engine / Strategy / API nodes","Nexus Terminal connects to any node"]}],c={current:"text-accent border-accent bg-accent/10",next:"text-blue-400 border-blue-400/50 bg-blue-400/10",soon:"text-purple-400 border-purple-400/50 bg-purple-400/10",later:"text-gray-500 border-gray-600 bg-gray-500/10"};Vt();var d=lE(),h=v(d),u=v(h);Ap(u,{size:16});var p=A(u),g=A(h,2);Me(g,1,vn(a),"svelte-17y31qk");var x=v(g),m=A(v(x),4),f=v(m),_=A(g,2);Me(_,1,vn(a),"svelte-17y31qk");var b=v(_),E=v(b),y=v(E),R=A(E,2),C=A(v(R),2),L=v(C),M=A(R,2);zt(M,4,()=>["arkStreams.section1.cap1","arkStreams.section1.cap2","arkStreams.section1.cap3","arkStreams.section1.cap4"],$t,(te,ce)=>{var Oe=tE(),rt=A(v(Oe),2),st=v(rt);$e(Nt=>B(st,Nt),[()=>r()(ce)],ft),le(te,Oe)});var w=A(_,2);Me(w,1,vn(a),"svelte-17y31qk");var I=v(w),N=v(I),O=v(N),$=v(O),z=A(O,2),V=v(z),H=A(N,2),J=v(H);XM(J);var ae=A(w,2);Me(ae,1,vn(a),"svelte-17y31qk");var ie=v(ae),de=v(ie),Te=v(de),_e=v(Te),Be=A(Te,2),Xe=v(Be),j=A(Be,2),ne=v(j),pe=v(ne),ke=A(ne,2),ge=v(ke),Ge=A(de,2),dt=v(Ge);eE(dt,{});var We=A(Ge,2);zt(We,4,()=>["Alligator (SMMA jaw/teeth/lips)","Awesome Oscillator","Accelerator Oscillator","Market Facilitation Index","Fractal highs/lows"],$t,(te,ce)=>{var Oe=nE(),rt=v(Oe);$e(()=>B(rt,ce)),le(te,Oe)});var je=A(ae,2);Me(je,1,vn(a),"svelte-17y31qk");var Qe=v(je),ze=v(Qe),it=v(ze),F=v(it),Ie=A(it,2),Pe=v(Ie),He=A(ze,2),re=A(v(He),2);zt(re,1,()=>s,$t,(te,ce)=>{var Oe=iE(),rt=v(Oe),st=v(rt),Nt=A(rt,2),Yt=v(Nt),ri=A(Nt,2),jn=v(ri),Kn=A(ri,2),ai=v(Kn);$e(()=>{B(st,T(ce).id),B(Yt,T(ce).label),B(jn,T(ce).long),B(ai,T(ce).short)}),le(te,Oe)});var D=A(He,2),S=A(v(D),2);zt(S,5,()=>o,$t,(te,ce)=>{var Oe=rE(),rt=v(Oe),st=v(rt),Nt=A(rt,2),Yt=v(Nt);$e(()=>{B(st,T(ce).label),B(Yt,T(ce).detail)}),le(te,Oe)});var U=A(je,2);Me(U,1,vn(a),"svelte-17y31qk");var q=v(U),Q=v(q),Y=v(Q),oe=v(Y),ee=A(Y,2),me=v(ee),Ue=A(Q,2);zt(Ue,5,()=>l,$t,(te,ce)=>{var Oe=oE(),rt=v(Oe),st=v(rt),Nt=v(st),Yt=A(st,2);{var ri=kn=>{var si=aE();le(kn,si)};tt(Yt,kn=>{T(ce).status==="current"&&kn(ri)})}var jn=A(rt,2),Kn=v(jn),ai=A(jn,2);zt(ai,5,()=>T(ce).items,$t,(kn,si)=>{var Sn=sE(),oi=A(v(Sn));$e(()=>B(oi,` ${T(si)??""}`)),le(kn,Sn)}),$e(()=>{Me(Oe,1,`p-5 border rounded-xl space-y-3 ${c[T(ce).status]??""} border-opacity-50`),B(Nt,T(ce).phase),B(Kn,T(ce).name)}),le(te,Oe)});var se=A(U,2);Me(se,1,vn(a),"svelte-17y31qk");var fe=v(se),Ae=v(fe),De=v(Ae),ve=A(Ae,2),et=v(ve),k=v(et),xe=A(et,4),he=v(xe),Re=A(xe,4),ue=v(Re);$e((te,ce,Oe,rt,st,Nt,Yt,ri,jn,Kn,ai,kn,si,Sn,oi,cr,dr,zi)=>{B(p,` [ ${te??""} ]`),B(f,ce),B(y,`01 // ${Oe??""}`),B(L,rt),B($,`02 // ${st??""}`),B(V,Nt),B(_e,`03 // ${Yt??""}`),B(Xe,ri),B(pe,jn),B(ge,Kn),B(F,`04 // ${ai??""}`),B(Pe,kn),B(oe,`05 // ${si??""}`),B(me,Sn),B(De,oi),B(k,cr),B(he,dr),B(ue,zi)},[()=>r()("report.nav_back"),()=>r()("arkStreams.subtitle"),()=>r()("arkStreams.section1.title"),()=>r()("arkStreams.section1.text"),()=>r()("arkStreams.section2.title"),()=>r()("arkStreams.section2.subtitle"),()=>r()("arkStreams.section3.title"),()=>r()("arkStreams.section3.role"),()=>r()("arkStreams.section3.subtitle"),()=>r()("arkStreams.section3.subtitle2"),()=>r()("arkStreams.section4.title"),()=>r()("arkStreams.section4.subtitle"),()=>r()("arkStreams.section5.title"),()=>r()("arkStreams.section5.text"),()=>r()("arkStreams.conclusion"),()=>r()("arkStreams.footer.memory"),()=>r()("arkStreams.footer.latency"),()=>r()("arkStreams.footer.stack")],ft),en(1,g,()=>$n),le(n,d),Ct(),i()}var dE=be('<div class="border border-white/10 bg-white/[0.02] p-3 rounded-sm flex flex-col gap-1 hover:border-white/20 transition-colors"><div class="flex items-center justify-between"><span class="text-white/30" style="font-size: 0.72em"> </span> <span style="font-size: 0.72em"> </span></div> <div class="text-white font-bold" style="font-size: 0.9em"> </div> <div class="text-white/40 leading-snug" style="font-size: 0.72em"> </div></div>'),uE=be('<span class="px-1.5 py-0.5 border border-[#00F0FF]/30 text-[#00F0FF]/70 tracking-widest rounded-sm" style="font-size: 0.6em"> </span>'),hE=be('<span class="px-1.5 py-0.5 border border-white/10 text-white/30 tracking-widest rounded-sm" style="font-size: 0.6em"> </span>'),fE=be('<span class="ml-3">ATR: <span class="text-white/40"> </span></span>'),pE=be('<div><div class="flex items-start justify-between gap-2"><div><div class="flex items-center gap-2 mb-0.5"><span class="text-white font-bold tracking-tight" style="font-size: 1.1em"> </span> <!></div> <span class="text-white/30" style="font-size: 0.72em"> </span></div> <div class="text-right shrink-0"><div style="font-size: 0.8em"> </div> <div style="font-size: 0.72em"> </div></div></div> <div class="flex items-center justify-between"><div class="flex items-center gap-2"><div></div> <span style="font-size: 0.8em"> </span></div> <span style="font-size: 0.72em"> </span></div> <div><div class="flex justify-between text-white/30 mb-1.5" style="font-size: 0.6em"><span> </span> <span class="text-white font-bold" style="font-size: 1.1em"> </span> <span> </span></div> <div class="relative h-1 bg-white/10 rounded-full overflow-visible"><div></div> <div class="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border border-black"></div></div></div> <div class="grid grid-cols-3 gap-2 text-center border-t border-white/5 pt-3"><div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em">Stoch %K</div> <div style="font-size: 0.8em"> </div></div> <div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em">Stoch %D</div> <div class="text-white/60" style="font-size: 0.8em"> </div></div> <div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em">MA(17)</div> <div class="text-[#4CC9F0]/70" style="font-size: 0.8em"><!></div></div></div> <div class="text-white/25 tracking-wide -mt-2" style="font-size: 0.6em"> <span> </span> <!></div></div>'),mE=be('<div class="border border-white/10 hover:border-rose-500/20 bg-black/60 p-5 rounded-sm flex flex-col gap-4 transition-colors"><div class="flex items-center justify-between"><span class="text-rose-400 font-bold tracking-widest" style="font-size: 0.9em"> </span> <span class="text-white/30 tracking-widest" style="font-size: 0.65em"> </span></div> <div><p class="text-white/30 tracking-widest uppercase mb-2" style="font-size: 0.65em"> </p> <p class="text-white/70 leading-relaxed" style="font-size: 0.8em"> </p></div> <div class="grid grid-cols-3 gap-3 border-t border-white/5 pt-4 text-center"><div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em"> </div> <div class="text-rose-400 font-bold" style="font-size: 0.8em"> </div></div> <div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em"> </div> <div class="text-amber-400 font-bold" style="font-size: 0.8em"> </div></div> <div><div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em"> </div> <div class="text-emerald-400 font-bold" style="font-size: 0.8em"> </div></div></div> <div class="text-white/25 border-t border-white/5 pt-3" style="font-size: 0.65em">INVALIDAÇÃO: <span class="text-amber-400/60"> </span></div></div>'),vE=be('<div class="border border-white/10 bg-white/[0.01] p-4 rounded-sm"><div class="text-[#00F0FF]/40 tracking-widest mb-2" style="font-size: 0.6em"> </div> <div class="text-white font-bold mb-2" style="font-size: 0.8em"> </div> <p class="text-white/50 leading-relaxed" style="font-size: 0.72em"> </p></div>'),gE=be('<div class="min-h-screen bg-black text-white font-mono relative z-10"><header class="sticky top-0 z-30 bg-black/95 backdrop-blur border-b border-white/10"><div class="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3"><div class="flex items-center gap-3 flex-wrap"><a href="/" class="text-[#00F0FF]/60 hover:text-[#00F0FF] text-xs tracking-widest transition-colors"> </a> <span class="text-white/20">/</span> <span class="text-white text-xs tracking-widest font-bold"> </span> <span class="hidden md:inline text-white/20">/</span> <span class="hidden md:inline text-[#00F0FF]/70 text-xs"> </span></div> <div class="flex items-center gap-3 flex-wrap justify-end"><div class="flex items-center gap-2 px-3 py-1 border border-amber-500/30 bg-amber-500/5 rounded-sm"><div class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div> <span class="text-amber-400 text-[10px] tracking-widest font-bold"> </span></div> <span class="hidden lg:inline text-white/30 text-[10px]"> </span> <div class="flex items-center gap-1 border border-white/10 rounded-sm overflow-hidden" aria-label="Font size controls"><button class="px-2 py-1 text-xs text-white/50 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed" aria-label="Decrease font size"> </button> <span class="text-[10px] text-white/30 px-1 tabular-nums"> </span> <button class="px-2 py-1 text-xs text-white/50 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed" aria-label="Increase font size"> </button></div> <div class="hidden md:block"><!></div></div></div> <div class="md:hidden px-4 pb-2 border-t border-white/5"><!></div></header> <div class="max-w-7xl mx-auto px-4 py-8 space-y-10"><div class="space-y-3"><div class="flex items-baseline gap-3 flex-wrap"><span class="text-[#00F0FF]/40 tracking-[0.3em] uppercase" style="font-size: 0.72em">REL-OP</span> <span class="text-[#00F0FF]/40" style="font-size: 0.72em">·</span> <span class="text-white/20 tracking-widest" style="font-size: 0.72em"> </span></div> <h1 class="font-bold tracking-tight text-white leading-tight" style="font-size: clamp(1.6rem, 3vw + 1rem, 3rem)"> <span class="text-white/30 block md:inline" style="font-size: 0.75em"> </span></h1> <p class="text-[#4CC9F0]/70 max-w-2xl leading-relaxed" style="font-size: 0.9em"> </p> <div class="flex gap-4 flex-wrap text-white/30 tracking-widest pt-1" style="font-size: 0.65em"><span> </span> <span>·</span> <span> </span></div></div> <div class="border border-amber-500/20 bg-amber-500/5 p-4 rounded-sm flex gap-3"><span class="text-amber-400 shrink-0 mt-0.5" style="font-size: 0.8em">⚠</span> <p class="text-amber-400/80 leading-relaxed" style="font-size: 0.8em"><strong class="text-amber-400"> </strong> <!></p></div> <section><h2 class="tracking-[0.3em] text-[#00F0FF]/50 uppercase mb-4" style="font-size: 0.65em"> </h2> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2"></div></section> <section><h2 class="tracking-[0.3em] text-[#00F0FF]/50 uppercase mb-4" style="font-size: 0.65em"> </h2> <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"></div></section> <section><div class="flex items-center gap-4 mb-4"><h2 class="tracking-[0.3em] text-[#00F0FF]/50 uppercase" style="font-size: 0.65em"> </h2> <div class="flex-1 h-px bg-white/5"></div> <span class="text-rose-400/60 tracking-widest" style="font-size: 0.65em">SHORT · ARMED · HALF</span></div> <div class="border border-white/10 bg-white/[0.02] p-5 rounded-sm mb-4 grid md:grid-cols-2 gap-6"><div><p class="text-white/30 tracking-widest uppercase mb-3" style="font-size: 0.65em"> </p> <p class="text-white/70 leading-relaxed" style="font-size: 0.85em"><!></p></div> <div><p class="text-white/30 tracking-widest uppercase mb-3" style="font-size: 0.65em"> </p> <p class="text-white/70 leading-relaxed" style="font-size: 0.85em"><!></p></div></div> <div class="grid md:grid-cols-2 gap-4 mb-4"></div> <div class="border border-white/5 bg-white/[0.01] p-4 rounded-sm flex items-start gap-3"><span class="text-white/30 font-bold shrink-0" style="font-size: 0.8em"> </span> <p class="text-white/50 leading-relaxed" style="font-size: 0.8em"><!></p></div> <div class="mt-4 p-4 border-l-2 border-[#00F0FF]/20 bg-[#00F0FF]/[0.02]"><p class="text-[#00F0FF]/50 uppercase tracking-widest mb-1" style="font-size: 0.65em"> </p> <p class="text-white/60 leading-relaxed" style="font-size: 0.8em"><!></p></div></section> <section><h2 class="tracking-[0.3em] text-[#00F0FF]/50 uppercase mb-4" style="font-size: 0.65em"> </h2> <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3"></div></section> <section class="border-t border-white/5 pt-6"><div class="flex flex-wrap gap-6 text-white/30" style="font-size: 0.65em"><div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> <span><strong class="text-emerald-400">ARMED</strong> </span></div> <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-amber-400"></div> <span><strong class="text-amber-400">STANDBY</strong> </span></div> <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></div> <span><strong class="text-[#00F0FF]">IN_POSITION</strong> </span></div> <div class="flex items-center gap-2"><span class="text-white/40">FULL</span> <span> </span></div> <div class="flex items-center gap-2"><span class="text-white/40">HALF</span> <span> </span></div></div> <p class="text-white/15 mt-4" style="font-size: 0.55em"> </p></section></div></div>');function xE(n,e){Rt(e,!1);const[t,i]=sn(),r=()=>Kt(On,"$t",t);let a=ct(14);const s=11,o=20;Yn(()=>{document.documentElement.style.scrollSnapType="none",document.documentElement.style.fontSize="16px"}),xf(()=>{document.documentElement.style.scrollSnapType="",document.documentElement.style.fontSize=""});const l={week:"S01",start:"01/06/2026",end:"05/06/2026",generated:"2026-05-31",regime:"RISK-ON ESTREITO",methodology:"Triple Screen (Elder) + Sistema de Impulso",regimeNote:"Apetite a risco concentrado em large-cap US. Commodities e alt-risk corrigindo. Real estruturalmente forte."},c=Je=>Je.toFixed(2),d=Je=>Je.toFixed(4),h=Je=>Je.toLocaleString("pt-BR",{maximumFractionDigits:2}),u=[{symbol:"BTC/USD",labelKey:"btc",roleKey:"role_primary",bias:"SHORT",status:"ARMED",conviction:"HALF",impulse:"blue_to_red",close:75708,ma17:76533.35,stochK:42.08,stochD:28.63,zoneKey:"zone_neutral_up",atr:null,support:73936,resistance:76606.5,priority:3,noteKey:"btc_note",formatFn:h},{symbol:"XAU/USD",labelKey:"xau",roleKey:"role_macro",bias:"SHORT",status:"ARMED",conviction:"FULL",impulse:"red",close:4529.57,ma17:4576.27,stochK:68.77,stochD:56.19,zoneKey:"zone_rising_overbought",atr:101.35,support:4500,resistance:4632.41,priority:1,noteKey:"xau_note",formatFn:h},{symbol:"S&P 500",labelKey:"sp",roleKey:"role_macro",bias:"LONG",status:"STANDBY",conviction:"FULL",impulse:"green",close:7580.06,ma17:7088.78,stochK:90.88,stochD:90.08,zoneKey:"zone_overbought",atr:68.83,support:7369.23,resistance:7599.38,priority:6,noteKey:"sp_note",formatFn:h},{symbol:"BOVESPA",labelKey:"bovespa",roleKey:"role_macro",bias:"SHORT",status:"ARMED",conviction:"FULL",impulse:"red",close:173787,ma17:177870.33,stochK:18.94,stochD:34.34,zoneKey:"zone_low_k_below_d",atr:2606.67,support:172686,resistance:180055,priority:2,noteKey:"bovespa_note",formatFn:h},{symbol:"USD/BRL",labelKey:"usdbrl",roleKey:"role_macro",bias:"SHORT",status:"STANDBY",conviction:"HALF",impulse:"red",close:5.0368,ma17:5.1099,stochK:64.81,stochD:66.89,zoneKey:"zone_rising",atr:null,support:4.995,resistance:5.1099,priority:4,noteKey:"usdbrl_note",formatFn:d},{symbol:"BRENT",labelKey:"brent",roleKey:"role_macro",bias:"SHORT",status:"STANDBY",conviction:"FULL",impulse:"red",close:93.46,ma17:94.37,stochK:11.51,stochD:13.07,zoneKey:"zone_oversold",atr:5.45,support:92.48,resistance:101.06,priority:5,noteKey:"brent_note",formatFn:c}],p=[...u].sort((Je,Ne)=>Je.priority-Ne.priority),g=[{id:"A",nameKey:"sc_a_name",conditionKey:"sc_a_condition",action:"EnterShort",stop:"76.800",target:"73.936",targetKey:"sc_a_target_label",invalidationKey:"sc_a_invalidation"},{id:"B",nameKey:"sc_b_name",conditionKey:"sc_b_condition",action:"EnterShort",stop:"74.100",target:"72.000 → 58.334",targetKey:"sc_b_target_label",invalidationKey:"sc_b_invalidation"}];function x(Je,Ne,Et){const Gt=Et-Ne;return Gt===0?50:Math.min(100,Math.max(0,(Je-Ne)/Gt*100))}function m(Je){return Je==="ARMED"?"text-emerald-400":Je==="IN_POSITION"?"text-[#00F0FF]":"text-amber-400"}function f(Je){return Je==="ARMED"?"shadow-[0_0_8px_rgba(52,211,153,0.4)] border-emerald-500/40":Je==="IN_POSITION"?"shadow-[0_0_8px_rgba(0,240,255,0.4)] border-[#00F0FF]/40":"shadow-[0_0_6px_rgba(251,191,36,0.2)] border-amber-500/30"}function _(Je){return Je==="SHORT"?"text-rose-400":"text-emerald-400"}function b(Je){return Je==="red"?"report.impulse_red":Je==="green"?"report.impulse_green":"report.impulse_blue_red"}function E(Je){return Je==="red"?"text-rose-500":Je==="green"?"text-emerald-400":"text-amber-400"}function y(Je){return Je==="zone_overbought"?"text-rose-400":Je==="zone_oversold"?"text-amber-400":"text-[#4CC9F0]"}const R={btc:"Bitcoin",xau:"Ouro / Gold",sp:"S&P 500",bovespa:"Ibovespa",usdbrl:"Dólar / Real",brent:"Petróleo Brent"};Vt();var C=gE(),L=v(C),M=v(L),w=v(M),I=v(w),N=v(I),O=A(I,4),$=v(O),z=A(O,4),V=v(z),H=A(w,2),J=v(H),ae=A(v(J),2),ie=v(ae),de=A(J,2),Te=v(de),_e=A(de,2),Be=v(_e),Xe=v(Be),j=A(Be,2),ne=v(j),pe=A(j,2),ke=v(pe),ge=A(_e,2),Ge=v(ge);ad(Ge,{only:["pt","en"]});var dt=A(M,2),We=v(dt);ad(We,{only:["pt","en"]});var je=A(L,2),Qe=v(je),ze=v(Qe),it=A(v(ze),4),F=v(it),Ie=A(ze,2),Pe=v(Ie),He=A(Pe),re=v(He),D=A(Ie,2),S=v(D),U=A(D,2),q=v(U),Q=v(q),Y=A(q,4),oe=v(Y),ee=A(Qe,2),me=A(v(ee),2),Ue=v(me),se=v(Ue),fe=A(Ue,2);dn(fe,()=>r()("report.warning_text"));var Ae=A(ee,2),De=v(Ae),ve=v(De),et=A(De,2);zt(et,5,()=>p,$t,(Je,Ne)=>{var Et=dE(),Gt=v(Et),ht=v(Gt),Pt=v(ht),Ot=A(ht,2),It=v(Ot),Lt=A(Gt,2),Mn=v(Lt),tn=A(Lt,2),Mi=v(tn);$e((ur,Hi)=>{B(Pt,`#${T(Ne).priority??""}`),Me(Ot,1,`font-bold ${ur??""}`),B(It,T(Ne).status),B(Mn,T(Ne).symbol),B(Mi,Hi)},[()=>m(T(Ne).status),()=>r()(`report.${T(Ne).noteKey}`)],ft),le(Je,Et)});var k=A(Ae,2),xe=v(k),he=v(xe),Re=A(xe,2);zt(Re,5,()=>u,$t,(Je,Ne)=>{var Et=pE();const Gt=ft(()=>x(T(Ne).close,T(Ne).support,T(Ne).resistance));var ht=v(Et),Pt=v(ht),Ot=v(Pt),It=v(Ot),Lt=v(It),Mn=A(It,2);{var tn=jt=>{var hn=uE(),Ei=v(hn);$e(pr=>B(Ei,pr),[()=>r()("report.role_primary")],ft),le(jt,hn)},Mi=jt=>{var hn=hE(),Ei=v(hn);$e(pr=>B(Ei,pr),[()=>r()("report.role_macro")],ft),le(jt,hn)};tt(Mn,jt=>{T(Ne).roleKey==="role_primary"?jt(tn):jt(Mi,!1)})}var ur=A(Ot,2),Hi=v(ur),Dr=A(Pt,2),Vi=v(Dr),Ra=v(Vi),Nr=A(Vi,2),Ca=v(Nr),hr=A(ht,2),fr=v(hr),Ur=v(fr),Fr=A(Ur,2),Pa=v(Fr),Or=A(fr,2),Es=v(Or),ws=A(hr,2),Ts=v(ws),As=v(Ts),Qo=v(As),Rs=A(As,2),el=v(Rs),tl=A(Rs,2),nl=v(tl),il=A(Ts,2),Ia=v(il),rl=A(Ia,2),Cs=A(ws,2),Ps=v(Cs),$d=A(v(Ps),2),Rp=v($d),Xd=A(Ps,2),Cp=A(v(Xd),2),Pp=v(Cp),Ip=A(Xd,2),Lp=A(v(Ip),2),Dp=v(Lp);{var Np=jt=>{var hn=Ni();$e(Ei=>B(hn,Ei),[()=>T(Ne).formatFn(T(Ne).ma17)],ft),le(jt,hn)},Up=jt=>{var hn=Ni("—");le(jt,hn)};tt(Dp,jt=>{T(Ne).ma17!==null?jt(Np):jt(Up,!1)})}var Fp=A(Cs,2),qd=v(Fp),al=A(qd),Op=v(al),Bp=A(al,2);{var kp=jt=>{var hn=fE(),Ei=A(v(hn)),pr=v(Ei);$e(()=>B(pr,T(Ne).atr)),le(jt,hn)};tt(Bp,jt=>{T(Ne).atr!==null&&jt(kp)})}$e((jt,hn,Ei,pr,zp,Hp,Vp,Gp,Wp,$p,Xp,qp,Yp,jp)=>{Me(Et,1,`border ${jt??""} bg-black/80 backdrop-blur p-5 rounded-sm flex flex-col gap-4 hover:bg-white/[0.02] transition-all`),B(Lt,T(Ne).symbol),B(Hi,R[T(Ne).labelKey]),Me(Vi,1,`font-bold ${hn??""} tracking-widest`),B(Ra,T(Ne).bias),Me(Nr,1,`tracking-widest ${T(Ne).conviction==="FULL"?"text-white/70":"text-white/40"}`),B(Ca,T(Ne).conviction),Me(Ur,1,`w-1.5 h-1.5 rounded-full ${T(Ne).status==="ARMED"?"bg-emerald-400":T(Ne).status==="IN_POSITION"?"bg-[#00F0FF]":"bg-amber-400"} ${T(Ne).status!=="STANDBY"?"animate-pulse":""}`),Me(Fr,1,`font-bold ${Ei??""}`),B(Pa,T(Ne).status),Me(Or,1,pr),B(Es,zp),B(Qo,`SUP ${Hp??""}`),B(el,Vp),B(nl,`RES ${Gp??""}`),Me(Ia,1,`absolute top-0 left-0 h-full rounded-full ${T(Ne).bias==="SHORT"?"bg-rose-500/60":"bg-emerald-500/60"}`),_n(Ia,`width: ${T(Gt)??""}%`),_n(rl,`left: calc(${T(Gt)??""}% - 4px)`),Me($d,1,`font-bold ${Wp??""}`),B(Rp,$p),B(Pp,Xp),B(qd,`${qp??""}: `),Me(al,1,Yp),B(Op,jp)},[()=>f(T(Ne).status),()=>_(T(Ne).bias),()=>m(T(Ne).status),()=>E(T(Ne).impulse),()=>r()(b(T(Ne).impulse)),()=>T(Ne).formatFn(T(Ne).support),()=>T(Ne).formatFn(T(Ne).close),()=>T(Ne).formatFn(T(Ne).resistance),()=>y(T(Ne).zoneKey),()=>T(Ne).stochK.toFixed(1),()=>T(Ne).stochD.toFixed(1),()=>r()("report.zone_label"),()=>y(T(Ne).zoneKey),()=>r()(`report.${T(Ne).zoneKey}`)],ft),le(Je,Et)});var ue=A(k,2),te=v(ue),ce=v(te),Oe=v(ce),rt=A(te,2),st=v(rt),Nt=v(st),Yt=v(Nt),ri=A(Nt,2),jn=v(ri);dn(jn,()=>r()("report.tide_text"));var Kn=A(st,2),ai=v(Kn),kn=v(ai),si=A(ai,2),Sn=v(si);dn(Sn,()=>r()("report.wave_text"));var oi=A(rt,2);zt(oi,5,()=>g,$t,(Je,Ne)=>{var Et=mE(),Gt=v(Et),ht=v(Gt),Pt=v(ht),Ot=A(ht,2),It=v(Ot),Lt=A(Gt,2),Mn=v(Lt),tn=v(Mn),Mi=A(Mn,2),ur=v(Mi),Hi=A(Lt,2),Dr=v(Hi),Vi=v(Dr),Ra=v(Vi),Nr=A(Vi,2),Ca=v(Nr),hr=A(Dr,2),fr=v(hr),Ur=v(fr),Fr=A(fr,2),Pa=v(Fr),Or=A(hr,2),Es=v(Or),ws=v(Es),Ts=A(Es,2),As=v(Ts),Qo=A(Hi,2),Rs=A(v(Qo)),el=v(Rs);$e((tl,nl,il,Ia,rl,Cs,Ps)=>{B(Pt,`CENÁRIO ${T(Ne).id??""}`),B(It,tl),B(tn,nl),B(ur,il),B(Ra,Ia),B(Ca,T(Ne).action),B(Ur,rl),B(Pa,T(Ne).stop),B(ws,Cs),B(As,T(Ne).target),B(el,Ps)},[()=>r()(`report.${T(Ne).nameKey}`),()=>r()("report.trigger_label"),()=>r()(`report.${T(Ne).conditionKey}`),()=>r()("report.action_label"),()=>r()("report.stop_label"),()=>r()(`report.${T(Ne).targetKey}`),()=>r()(`report.${T(Ne).invalidationKey}`)],ft),le(Je,Et)});var cr=A(oi,2),dr=v(cr),zi=v(dr),bs=A(dr,2),Lr=v(bs);dn(Lr,()=>r()("report.sc_c_text"));var ys=A(cr,2),Aa=v(ys),jo=v(Aa),Ko=A(Aa,2),Zo=v(Ko);dn(Zo,()=>r()("report.macro_implication_text"));var Ss=A(ue,2),Ms=v(Ss),Jo=v(Ms),P=A(Ms,2);zt(P,4,()=>["2pct","6pct","conv","hier"],$t,(Je,Ne)=>{var Et=vE(),Gt=v(Et),ht=v(Gt),Pt=A(Gt,2),Ot=v(Pt),It=A(Pt,2),Lt=v(It);$e((Mn,tn,Mi)=>{B(ht,Mn),B(Ot,tn),B(Lt,Mi)},[()=>r()(`report.rule_${Ne}_id`),()=>r()(`report.rule_${Ne}_title`),()=>r()(`report.rule_${Ne}_body`)],ft),le(Je,Et)});var G=A(Ss,2),Z=v(G),K=v(Z),X=A(v(K),2),ye=A(v(X)),Le=A(K,2),Ee=A(v(Le),2),Fe=A(v(Ee)),Ve=A(Le,2),Ze=A(v(Ve),2),qe=A(v(Ze)),ot=A(Ve,2),Mt=A(v(ot),2),Ut=v(Mt),Ft=A(ot,2),wt=A(v(Ft),2),Ye=v(wt),yt=A(Z,2),vt=v(yt);$e((Je,Ne,Et,Gt,ht,Pt,Ot,It,Lt,Mn,tn,Mi,ur,Hi,Dr,Vi,Ra,Nr,Ca,hr,fr,Ur,Fr,Pa,Or)=>{B(N,Je),B($,Ne),B(V,`${Et??""}
          ${l.start} – ${l.end}`),B(ie,l.regime),B(Te,`${Gt??""}
          ${l.generated}`),Be.disabled=T(a)<=s,B(Xe,ht),B(ne,T(a)),pe.disabled=T(a)>=o,B(ke,Pt),_n(je,`font-size: ${T(a)??""}px`),B(F,l.week),B(Pe,`${Ot??""} `),B(re,`— ${l.start}–${l.end}`),B(S,l.regimeNote),B(Q,`${It??""}: ${l.methodology}`),B(oe,`${Lt??""}: MARÉ MME(17)+MACD · ONDA STOCH(5,3,3) · VOL ATR(14)`),B(se,Mn),B(ve,tn),B(he,Mi),B(Oe,ur),B(Yt,Hi),B(kn,Dr),B(zi,Vi),B(jo,Ra),B(Jo,Nr),B(ye,` —
            ${Ca??""}`),B(Fe,` —
            ${hr??""}`),B(qe,` —
            ${fr??""}`),B(Ut,`— ${Ur??""}`),B(Ye,`— ${Fr??""}`),B(vt,`NEXUS QUANT · REL-OP-${l.week} · ${Pa??""}
        ${l.generated} · ${Or??""}
        ${l.start}–${l.end} · ${l.methodology}`)},[()=>r()("report.nav_back"),()=>r()("report.nav_title"),()=>r()("report.nav_week"),()=>r()("report.generated_label"),()=>r()("report.font_decrease"),()=>r()("report.font_increase"),()=>r()("report.page_title"),()=>r()("report.methodology_label"),()=>r()("report.indicators_label"),()=>r()("report.warning_title"),()=>r()("report.priority_title"),()=>r()("report.scoreboard_title"),()=>r()("report.playbook_title"),()=>r()("report.tide_label"),()=>r()("report.wave_label"),()=>r()("report.sc_c_label"),()=>r()("report.macro_implication_title"),()=>r()("report.risk_title"),()=>r()("report.legend_armed"),()=>r()("report.legend_standby"),()=>r()("report.legend_in_position"),()=>r()("report.legend_full"),()=>r()("report.legend_half"),()=>r()("report.generated_label"),()=>r()("report.nav_week")],ft),kt("click",Be,()=>Ce(a,Math.max(s,T(a)-1))),kt("click",pe,()=>Ce(a,Math.min(o,T(a)+1))),en(1,C,()=>$n,()=>({duration:300})),le(n,C),Ct(),i()}function _E(n,{from:e,to:t},i={}){var{delay:r=0,duration:a=R=>Math.sqrt(R)*120,easing:s=SM}=i,o=getComputedStyle(n),l=o.transform==="none"?"":o.transform,[c,d]=o.transformOrigin.split(" ").map(parseFloat);c/=n.clientWidth,d/=n.clientHeight;var h=bE(n),u=n.clientWidth/t.width/h,p=n.clientHeight/t.height/h,g=e.left+e.width*c,x=e.top+e.height*d,m=t.left+t.width*c,f=t.top+t.height*d,_=(g-m)*u,b=(x-f)*p,E=e.width/t.width,y=e.height/t.height;return{delay:r,duration:typeof a=="function"?a(Math.sqrt(_*_+b*b)):a,easing:s,css:(R,C)=>{var L=C*_,M=C*b,w=R+C*E,I=R+C*y;return`transform: ${l} translate(${L}px, ${M}px) scale(${w}, ${I});`}}}function bE(n){if("currentCSSZoom"in n)return n.currentCSSZoom;for(var e=n,t=1;e!==null;)t*=+getComputedStyle(e).zoom,e=e.parentElement;return t}var yE=be('<span class="text-[8px] px-1 py-0.2 bg-white text-black font-bold animate-pulse uppercase rounded-sm">NEW</span>'),SE=be('<div><div></div> <div class="pl-2 space-y-1"><div class="flex items-center gap-2"><span> </span> <!></div> <div class="flex items-baseline gap-2"><span class="text-lg font-bold text-white tracking-tight"> </span> <span class="text-white/40 text-[10px]"> </span></div></div> <button class="text-white/20 hover:text-white/60 transition-colors duration-200 p-1 text-xs cursor-pointer focus:outline-none" aria-label="Dismiss alert">✕</button></div>'),ME=be('<div class="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-[320px] pointer-events-none font-mono" aria-live="polite"><div class="text-[9px] text-white/40 tracking-[0.25em] flex items-center justify-between px-2 uppercase select-none"><span>:: Whale Liquidation Stream</span> <div class="flex items-center gap-1.5"><div class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></div> <span>LIVE</span></div></div> <!></div>');function EE(n,e){Rt(e,!1);const[t,i]=sn(),r=()=>Kt(Wn,"$telemetry",t);let a=ct([]),s=ct(null);function o(p){return p>=1e6?`$${(p/1e6).toFixed(2)}M`:p>=1e3?`$${(p/1e3).toFixed(0)}K`:`$${p.toFixed(0)}`}function l(p){return p.toLocaleString("en-US",{minimumFractionDigits:1,maximumFractionDigits:1})}function c(p){Ce(a,T(a).filter(g=>g.id!==p))}bi(()=>(r(),T(s),T(a)),()=>{const p=r().latestWhaleLiq;if(p&&p!==T(s)){Ce(s,p);const g={...p,id:Math.random().toString(36).substring(2,9),isNew:!0};Ce(a,[g,...T(a)].slice(0,4));const x=g.id;setTimeout(()=>{Ce(a,T(a).map(m=>m.id===x?{...m,isNew:!1}:m))},1500),setTimeout(()=>{Ce(a,T(a).filter(m=>m.id!==x))},8e3)}}),Ir(),Vt();var d=or(),h=Cn(d);{var u=p=>{var g=ME(),x=v(g),m=A(x,2);zt(m,9,()=>T(a),f=>f.id,(f,_)=>{var b=SE(),E=v(b),y=A(E,2),R=v(y),C=v(R),L=v(C),M=A(C,2);{var w=H=>{var J=yE();le(H,J)};tt(M,H=>{T(_).isNew&&H(w)})}var I=A(R,2),N=v(I),O=v(N),$=A(N,2),z=v($),V=A(y,2);$e((H,J)=>{Me(b,1,`pointer-events-auto relative border bg-black/95 p-4 rounded-sm backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.9)] flex items-center justify-between group transition-all duration-300
          ${T(_).side==="buy"||T(_).side==="BUY"?T(_).isNew?"border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.2)]":"border-rose-950/70 hover:border-rose-800":T(_).isNew?"border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]":"border-emerald-950/70 hover:border-emerald-800"}`),Me(E,1,`absolute left-0 top-0 bottom-0 w-[3px] 
          ${T(_).side==="buy"||T(_).side==="BUY"?"bg-rose-500":"bg-emerald-500"}`),Me(C,1,`text-xs font-bold uppercase tracking-wider
              ${T(_).side==="buy"||T(_).side==="BUY"?"text-rose-400":"text-emerald-400"}`),B(L,T(_).side==="buy"||T(_).side==="BUY"?"▼ SHORT LIQUIDATED":"▲ LONG LIQUIDATED"),B(O,H),B(z,`@ $${J??""}`)},[()=>o(T(_).usd_value),()=>l(T(_).price)],ft),kt("click",V,()=>c(T(_).id)),f0(b,()=>_E,()=>({duration:300})),en(1,b,()=>ho,()=>({x:200,opacity:0,duration:400})),en(2,b,()=>$n,()=>({duration:300})),le(f,b)}),en(3,x,()=>$n),le(p,g)};tt(h,p=>{T(a).length>0&&p(u)})}le(n,d),Ct(),i()}var wE=(n,e,t)=>e(t),TE=be("<button> </button>"),AE=be('<span class="text-[8px] border border-white/10 bg-white/5 px-1.5 py-0.5 rounded-sm uppercase tracking-wider text-white/50"> </span>'),RE=be('<div class="pt-2"><div class="text-[10px] text-white/40 uppercase mb-1">Active Sources</div> <div class="flex gap-1.5 flex-wrap"></div></div>'),CE=be("<span> </span>"),PE=be('<section id="aggression-speedometer" class="py-24 px-4 bg-transparent font-mono select-none"><div class="max-w-4xl mx-auto w-full relative z-10"><div class="font-mono text-xs text-white/50 tracking-[0.3em] uppercase mb-8 flex items-center gap-3"><span>:: AGGRESSION SPEEDOMETER</span> <div class="flex-1 h-px bg-white/10"></div> <span class="px-2 py-1 rounded-sm border border-white/10 bg-white/5 text-[9px] tracking-[0.25em] text-white/70"> </span> <div class="flex items-center border border-white/10 rounded-sm overflow-hidden text-[10px]"></div></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center border border-white/10 bg-black/60 p-8 rounded-sm shadow-[0_15px_45px_rgba(0,0,0,0.85)]"><div class="space-y-4"><div class="font-mono text-xs text-white/30 tracking-widest uppercase">ORDER FLOW STATS</div> <div class="space-y-3.5"><div><div class="text-[10px] text-white/40 uppercase mb-1">Buy Volume (Aggressive)</div> <div class="text-lg font-bold text-accent font-mono"> </div></div> <div><div class="text-[10px] text-white/40 uppercase mb-1">Sell Volume (Aggressive)</div> <div class="text-lg font-bold text-rose-400 font-mono"> </div></div> <div class="border-t border-white/5 pt-3"><div class="text-[10px] text-white/40 uppercase mb-1">Net Delta</div> <div> </div></div></div></div> <div class="flex flex-col items-center justify-center py-4 relative"><svg viewBox="0 0 200 120" class="w-full max-w-[240px] drop-shadow-[0_0_15px_var(--glow-color)]"><defs><linearGradient id="dialGradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#f43f5e"></stop><stop offset="50%" stop-color="#4b5563"></stop><stop offset="100%" stop-color="#00f0ff"></stop></linearGradient></defs><path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="url(#dialGradient)" stroke-width="12" stroke-linecap="round"></path><line x1="20" y1="100" x2="30" y2="100" stroke="white" stroke-width="2"></line><line x1="100" y1="20" x2="100" y2="30" stroke="white" stroke-width="2"></line><line x1="180" y1="100" x2="170" y2="100" stroke="white" stroke-width="2"></line><g transform="translate(100, 100)"><line x1="0" y1="0" x2="0" y2="-75" stroke="#ffffff" stroke-width="3" stroke-linecap="round"></line><circle cx="0" cy="0" r="8" fill="#ffffff"></circle><circle cx="0" cy="0" r="4" fill="#000000"></circle></g></svg> <div class="text-center mt-3"><span class="text-xs text-white/40 tracking-widest block uppercase mb-1">FLOW SENTIMENT</span> <span> </span></div></div> <div class="space-y-4 md:pl-6 md:border-l border-white/5"><div class="font-mono text-xs text-white/30 tracking-widest uppercase">AGGRESSOR DETAILS</div> <div class="space-y-4"><div><div class="text-[10px] text-white/40 uppercase mb-1">Buy / Sell Ratio</div> <div class="text-2xl font-bold text-white tracking-tight"> </div></div> <div><div class="text-[10px] text-white/40 uppercase mb-1">Buy Percentage</div> <div class="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-1.5 flex"><div class="bg-accent h-full transition-all duration-500"></div></div> <div class="flex justify-between text-[9px] text-white/30 mt-1"><span> </span> <span> </span></div></div> <!></div></div></div> <div class="mt-4 flex items-center justify-between text-[10px] text-white/30 font-mono"><span>* Speedometer updates live every 500ms using consolidated OKX & Bybit trades.</span> <!></div></div></section>');function IE(n,e){Rt(e,!0);const[t,i]=sn(),r=()=>Kt(Wn,"$telemetry",t);let a=Pi("1h");function s(y){return y>=1e6?`$${(y/1e6).toFixed(2)}M`:y>=1e3?`$${(y/1e3).toFixed(0)}K`:`$${y.toFixed(0)}`}let o=li(()=>r().btcAggression),l=li(()=>{var y,R;return((R=(y=T(o))==null?void 0:y.windows)==null?void 0:R.find(C=>C.label.toLowerCase()===T(a).toLowerCase()))??null});yo(()=>{console.log("[Speedometer Debug] snap:",T(o)),console.log("[Speedometer Debug] windowData:",T(l))});let c=li(()=>T(l)?T(l).buy_usd:0),d=li(()=>T(l)?T(l).sell_usd:0),h=li(()=>T(l)?T(l).delta:0),u=li(()=>T(l)?T(l).ratio:1),p=li(()=>T(c)+T(d)>0?T(c)/(T(c)+T(d)):.5),g=li(()=>T(p)*180-90),x=li(()=>T(a).toUpperCase()),m=li(()=>T(c)+T(d)===0?{text:"STANDBY",color:"text-white/40",glow:"rgba(255,255,255,0.05)"}:T(p)<.25?{text:"EXTREME PANIC",color:"text-rose-500",glow:"rgba(244,63,94,0.3)"}:T(p)<.45?{text:"SELLING PRESSURE",color:"text-rose-400",glow:"rgba(251,113,133,0.15)"}:T(p)<=.55?{text:"NEUTRAL FLOW",color:"text-white/70",glow:"rgba(255,255,255,0.1)"}:T(p)<=.75?{text:"BUYING PRESSURE",color:"text-accent/80",glow:"rgba(0,240,255,0.15)"}:{text:"EXTREME EUPHORIA",color:"text-accent",glow:"rgba(0,240,255,0.4)"});function f(y){Ce(a,y,!0)}var _=or(),b=Cn(_);{var E=y=>{var R=PE(),C=v(R),L=v(C),M=A(v(L),4),w=v(M),I=A(M,2);zt(I,20,()=>["5m","1h","1d"],$t,(oe,ee)=>{var me=TE();me.__click=[wE,f,ee];var Ue=v(me);$e(se=>{Se(me,"aria-pressed",T(a)===ee),Me(me,1,`px-3 py-1 hover:bg-white/5 transition-colors cursor-pointer border-r border-white/10 last:border-0
              ${T(a)===ee?"bg-accent/15 text-accent font-bold shadow-[inset_0_0_0_1px_rgba(0,240,255,0.35)]":"text-white/40"}`),B(Ue,`${se??""} WINDOW`)},[()=>ee.toUpperCase()]),le(oe,me)});var N=A(L,2),O=v(N),$=A(v(O),2),z=v($),V=A(v(z),2),H=v(V),J=A(z,2),ae=A(v(J),2),ie=v(ae),de=A(J,2),Te=A(v(de),2),_e=v(Te),Be=A(O,2),Xe=v(Be),j=A(v(Xe),5),ne=v(j),pe=A(Xe,2),ke=A(v(pe),2),ge=v(ke),Ge=A(Be,2),dt=A(v(Ge),2),We=v(dt),je=A(v(We),2),Qe=v(je),ze=A(We,2),it=A(v(ze),2),F=v(it),Ie=A(it,2),Pe=v(Ie),He=v(Pe),re=A(Pe,2),D=v(re),S=A(ze,2);{var U=oe=>{var ee=RE(),me=A(v(ee),2);zt(me,21,()=>T(o).sources,$t,(Ue,se)=>{var fe=AE(),Ae=v(fe);$e(()=>B(Ae,T(se))),le(Ue,fe)}),le(oe,ee)};tt(S,oe=>{var ee;(ee=T(o))!=null&&ee.sources&&oe(U)})}var q=A(N,2),Q=A(v(q),2);{var Y=oe=>{var ee=CE(),me=v(ee);$e(Ue=>B(me,`Last update: ${Ue??""}`),[()=>new Date(T(o).updated_at).toLocaleTimeString()]),le(oe,ee)};tt(Q,oe=>{var ee;(ee=T(o))!=null&&ee.updated_at&&oe(Y)})}$e((oe,ee,me,Ue,se,fe)=>{B(w,`ACTIVE // ${T(x)??""}`),B(H,oe),B(ie,ee),Me(Te,1,`text-lg font-bold font-mono ${T(h)>=0?"text-accent":"text-rose-400"}`),B(_e,`${T(h)>=0?"+":""}${me??""}`),_n(Xe,`--glow-color: ${T(m).glow??""}`),_n(ne,`transform: rotate(${T(g)??""}deg); transition: transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1); transform-origin: 0px 0px`),Me(ke,1,`text-base font-bold tracking-widest uppercase ${T(m).color??""} animate-pulse-glow`),B(ge,T(m).text),B(Qe,`${Ue??""}x`),_n(F,`width: ${T(p)*100}%`),B(He,`SELL: ${se??""}%`),B(D,`BUY: ${fe??""}%`)},[()=>s(T(c)),()=>s(T(d)),()=>s(T(h)),()=>T(u).toFixed(2),()=>((1-T(p))*100).toFixed(0),()=>(T(p)*100).toFixed(0)]),le(y,R)};tt(b,y=>{r().enabled&&y(E)})}le(n,_),Ct(),i()}cf(["click"]);var LE=be('<div class="py-16 text-center text-white/40 text-sm animate-pulse">FETCHING JETSTREAM MARKET LOGS...</div>'),DE=be('<span class="text-[8px] bg-accent text-black font-bold px-1 py-0.2 rounded-sm animate-pulse select-none">MARKET</span>'),NE=be('<span class="text-[7px] border border-amber-500/40 bg-amber-500/10 text-amber-400 font-bold px-1 py-0.2 rounded-sm tracking-wide select-none animate-pulse-glow" title="Liquidity Wall Detected">WALL</span>'),UE=be('<div><div class="col-span-3 flex items-center gap-2"><span> </span> <span class="text-[10px] text-white/30 font-light">—</span> <span class="text-xs text-white/50"> </span> <!></div> <div class="col-span-7 px-4 relative flex items-center h-5"><div class="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 z-0"></div> <div class="absolute right-1/2 top-1 bottom-1 flex justify-end z-10 select-none pointer-events-none" style="width: 50%"><div></div></div> <div class="absolute left-1/2 top-1 bottom-1 flex justify-start z-10 select-none pointer-events-none" style="width: 50%"><div></div></div></div> <div class="col-span-2 text-right flex items-center justify-end gap-2 pr-1"><!> <span> </span></div></div>'),FE=be('<div class="space-y-1.5"></div>'),OE=be('<section id="liquidation-profile" class="py-24 px-4 bg-transparent font-mono select-none"><div class="max-w-4xl mx-auto w-full relative z-10"><div class="font-mono text-xs text-white/50 tracking-[0.3em] uppercase mb-8 flex items-center gap-3"><span>:: LIQUIDATION PROFILE (24H)</span> <div class="flex-1 h-px bg-white/10"></div> <div class="flex items-center border border-white/10 rounded-sm overflow-hidden text-[10px]"><button>$100 BIN</button> <button>$250 BIN</button> <button>$500 BIN</button></div></div> <div class="border border-white/10 bg-black/60 p-6 rounded-sm shadow-[0_15px_45px_rgba(0,0,0,0.85)]"><div class="text-[10px] text-white/30 uppercase tracking-widest flex items-center justify-between mb-4 pb-2 border-b border-white/5"><span>PRICE RANGE</span> <div class="flex items-center gap-12 mr-4"><span>SHORT LIQUIDATIONS (RED) / LONG LIQUIDATIONS (GREEN)</span> <span>VOLUME</span></div></div> <!></div> <div class="mt-4 flex items-center justify-between text-[10px] text-white/30 font-mono"><span>* Profiles are generated in real-time by binning JetStream logs.</span> <span> </span></div></div></section>');function BE(n,e){Rt(e,!1);const[t,i]=sn(),r=()=>Kt(Wn,"$telemetry",t),a="https://sized-wonder-burner-juice.trycloudflare.com",s="Quintuple9-Verse7-Outmatch4-Daintily2-Affidavit2";let o=ct(250),l=12,c=[],d=ct([]),h=ct(1),u=ct(!0);async function p(){try{Ce(u,!0);const L=s?{Authorization:`Bearer ${s}`}:{},w=await(await fetch(`${a}/api/liquidations/BTCUSDT?hours=24`,{headers:L})).json();Array.isArray(w)&&(c=w,g())}catch(L){console.error("Failed to load liquidation history",L)}finally{Ce(u,!1)}}function g(){const L=r().btcPrice;if(L===0)return;const M=Math.floor(L/T(o))*T(o),w=Math.floor(l/2),I=[];for(let N=-w;N<=w;N++){const O=M+N*T(o);I.push({priceStart:O,priceEnd:O+T(o),buyValue:0,sellValue:0,totalValue:0,isUpdating:!1})}c.forEach(N=>{const O=N.price,$=I.find(z=>O>=z.priceStart&&O<z.priceEnd);$&&(N.side==="buy"||N.side==="BUY"?$.buyValue+=N.usd_value:$.sellValue+=N.usd_value,$.totalValue+=N.usd_value)}),Ce(h,Math.max(...I.map(N=>N.totalValue),1e4)),Ce(d,I.reverse())}function x(L){if(T(d).length===0)return;const M=L.price,w=T(d).find(I=>M>=I.priceStart&&M<I.priceEnd);if(w){L.side==="buy"||L.side==="BUY"?w.buyValue+=L.usd_value:w.sellValue+=L.usd_value,w.totalValue+=L.usd_value,w.isUpdating=!0;const I=w.priceStart;setTimeout(()=>{Ce(d,T(d).map(N=>N.priceStart===I?{...N,isUpdating:!1}:N))},800),Ce(h,Math.max(...T(d).map(N=>N.totalValue),1e4)),Ce(d,[...T(d)])}}let m=ct(0),f=ct(null);Yn(()=>{p()});function _(L){return L.toLocaleString("en-US",{maximumFractionDigits:0})}function b(L){return L>=1e6?`$${(L/1e6).toFixed(2)}M`:L>=1e3?`$${(L/1e3).toFixed(0)}K`:L===0?"—":`$${L.toFixed(0)}`}function E(L){Ce(o,L),g()}bi(()=>(r(),T(m),T(o)),()=>{const L=r().btcPrice;L>0&&Math.abs(L-T(m))>T(o)*1.5&&(Ce(m,L),g())}),bi(()=>(r(),T(f)),()=>{const L=r().rawLiquidation;L&&L!==T(f)&&(Ce(f,L),x(L))}),Ir(),Vt();var y=or(),R=Cn(y);{var C=L=>{var M=OE(),w=v(M),I=v(w),N=A(v(I),4),O=v(N),$=A(O,2),z=A($,2),V=A(I,2),H=A(v(V),2);{var J=_e=>{var Be=LE();le(_e,Be)},ae=_e=>{var Be=FE();zt(Be,5,()=>T(d),$t,(Xe,j)=>{var ne=UE();const pe=ft(()=>r().btcPrice>=T(j).priceStart&&r().btcPrice<T(j).priceEnd),ke=ft(()=>T(j).buyValue/T(h)*100),ge=ft(()=>T(j).sellValue/T(h)*100),Ge=ft(()=>T(j).totalValue>=5e4);var dt=v(ne),We=v(dt),je=v(We),Qe=A(We,4),ze=v(Qe),it=A(Qe,2);{var F=oe=>{var ee=DE();le(oe,ee)};tt(it,oe=>{T(pe)&&oe(F)})}var Ie=A(dt,2),Pe=A(v(Ie),2),He=v(Pe),re=A(Pe,2),D=v(re),S=A(Ie,2),U=v(S);{var q=oe=>{var ee=NE();le(oe,ee)};tt(U,oe=>{T(Ge)&&oe(q)})}var Q=A(U,2),Y=v(Q);$e((oe,ee,me)=>{Me(ne,1,`grid grid-cols-12 items-center py-2 px-3 border rounded-sm transition-all duration-300
                ${T(pe)?"bg-accent/5 border-accent/40 shadow-[0_0_15px_rgba(0,240,255,0.06)]":"bg-transparent border-white/[0.03] hover:border-white/10"}
                ${T(j).isUpdating?"border-amber-400 bg-amber-400/5 duration-75":""}`),Me(We,1,`text-sm font-semibold ${T(pe)?"text-accent":"text-white/80"}`),B(je,`$${oe??""}`),B(ze,`$${ee??""}`),Me(He,1,`h-full bg-rose-500/80 rounded-l-sm transition-all duration-500 relative
                      ${T(Ge)?"shadow-[0_0_10px_rgba(244,63,94,0.4)] bg-rose-500":""}
                      ${T(j).isUpdating&&T(j).buyValue>0?"bg-rose-400 scale-y-110":""}`),_n(He,`width: ${T(ke)??""}%`),Me(D,1,`h-full bg-emerald-500/80 rounded-r-sm transition-all duration-500 relative
                      ${T(Ge)?"shadow-[0_0_10px_rgba(16,185,129,0.4)] bg-emerald-500":""}
                      ${T(j).isUpdating&&T(j).sellValue>0?"bg-emerald-400 scale-y-110":""}`),_n(D,`width: ${T(ge)??""}%`),Me(Q,1,`text-xs font-semibold ${T(Ge)?"text-white font-bold":"text-white/60"}`),B(Y,me)},[()=>_(T(j).priceStart),()=>_(T(j).priceEnd),()=>b(T(j).totalValue)],ft),le(Xe,ne)}),le(_e,Be)};tt(H,_e=>{T(u)?_e(J):_e(ae,!1)})}var ie=A(V,2),de=A(v(ie),2),Te=v(de);$e(_e=>{Me(O,1,`px-3 py-1 hover:bg-white/5 transition-colors cursor-pointer ${T(o)===100?"bg-accent/15 text-accent font-bold border-r border-white/10":"text-white/40 border-r border-white/10"}`),Me($,1,`px-3 py-1 hover:bg-white/5 transition-colors cursor-pointer ${T(o)===250?"bg-accent/15 text-accent font-bold border-r border-white/10":"text-white/40 border-r border-white/10"}`),Me(z,1,`px-3 py-1 hover:bg-white/5 transition-colors cursor-pointer ${T(o)===500?"bg-accent/15 text-accent font-bold":"text-white/40"}`),B(Te,`Total 24h Volume reference: ${_e??""}`)},[()=>b(T(d).reduce((_e,Be)=>_e+Be.totalValue,0))],ft),kt("click",O,()=>E(100)),kt("click",$,()=>E(250)),kt("click",z,()=>E(500)),le(L,M)};tt(R,L=>{L(C)})}le(n,y),Ct(),i()}var kE=be('<div class="w-full relative z-10 pointer-events-auto text-white min-h-screen py-24 px-4"><a href="#/" class="fixed top-8 left-8 z-50 inline-flex items-center gap-2 text-accent font-mono hover:opacity-70 transition-opacity bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"><!> [ ← NEXUS QUANT ]</a> <div class="max-w-4xl mx-auto w-full space-y-8"><div class="text-center space-y-4 mb-12"><h1 class="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-gray-500 uppercase tracking-tighter font-mono">NEXUS TERMINAL</h1> <p class="text-xs text-white/40 tracking-[0.25em] font-mono">:: REAL-TIME QUANTITATIVE TELEMETRY STREAM</p></div> <!> <!> <!></div></div>');function zE(n){var e=kE(),t=v(e),i=v(t);Ap(i,{size:16});var r=A(t,2),a=A(v(r),2);IE(a,{});var s=A(a,2);BE(s,{});var o=A(s,2);Ep(o,{}),le(n,e)}var HE=be("<!> <!> <!> <!> <!> <!>",1),VE=be('<main class="bg-black min-h-screen text-white selection:bg-[#00FF94] selection:text-black overflow-hidden relative"><!> <!> <!> <!></main>');function GE(n,e){Rt(e,!1);let t=ct(window.location.hash);Yn(()=>{OS();const d=()=>Ce(t,window.location.hash);return window.addEventListener("hashchange",d),()=>{window.removeEventListener("hashchange",d),BS()}}),Vt();var i=VE(),r=v(i);PS(r,{});var a=A(r,2);uM(a,{});var s=A(a,2);EE(s,{});var o=A(s,2);{var l=d=>{BM(d,{})},c=(d,h)=>{{var u=g=>{cE(g,{})},p=(g,x)=>{{var m=_=>{xE(_,{})},f=(_,b)=>{{var E=R=>{zE(R)},y=R=>{var C=HE(),L=Cn(C);$S(L,{});var M=A(L,2);qS(M,{});var w=A(M,2);jS(w,{});var I=A(w,2);ZS(I,{});var N=A(I,2);Ep(N,{showLink:!0});var O=A(N,2);sM(O,{}),le(R,C)};tt(_,R=>{T(t)==="#/terminal"?R(E):R(y,!1)},b)}};tt(g,_=>{T(t)==="#/relatorios"?_(m):_(f,!1)},x)}};tt(d,g=>{T(t)==="#/ark-streams"?g(u):g(p,!1)},h)}};tt(o,d=>{T(t)==="#/presentation"?d(l):d(c,!1)})}le(n,i),Ct()}Zm(GE,{target:document.getElementById("app")});
